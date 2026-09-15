import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputDirectory = path.join(root, 'rankings');
const dailyDirectory = path.join(outputDirectory, 'daily');
const records = JSON.parse(fs.readFileSync(path.join(root, 'games.json'), 'utf8'));

const argument = (name) => process.argv.find((value) => value.startsWith(`${name}=`))?.slice(name.length + 1);
const requestedAsOf = argument('--as-of');
const requestedLimit = Number(argument('--limit') ?? 10);

function localDate() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.filter((part) => part.type !== 'literal').map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const validDate = (value) => typeof value === 'string' && datePattern.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
const asOf = requestedAsOf ?? localDate();
if (!validDate(asOf)) throw new Error(`Invalid --as-of date: ${asOf}`);
if (!Number.isInteger(requestedLimit) || requestedLimit < 1) throw new Error(`Invalid --limit: ${requestedLimit}`);

const escapeMarkdown = (value) => String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ').trim();
const usableUrl = (value) => typeof value === 'string' && /^https?:\/\//.test(value);
const dateOffset = (date, days) => {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
};
const modelText = (record) => (record.model_family ?? []).join(', ') || 'Unspecified';
const technologyText = (technology) => (technology ?? []).join(', ') || 'Browser';
const evidenceText = (record) => record.model_evidence ?? record.method_evidence ?? 'unknown';
const evidenceRank = {
  confirmed: 5,
  confirmed_at_repository_level: 4,
  confirmed_supporting_game_code: 4,
  'creator-reported': 3,
  'directory-method': 2,
  'repository/topic trail': 2,
  inferred: 1,
  unknown: 0,
};

function repositorySource(record) {
  return [record.github_url, record.evidence_url, ...(record.discovery_sources ?? [])].find(usableUrl) ?? '';
}

function nonGitHubSource(record, predicate = () => true) {
  return (record.discovery_sources ?? []).find((source) => usableUrl(source) && predicate(source) && !source.includes('github.com')) ?? '';
}

function evidenceSource(record) {
  return usableUrl(record.evidence_url) ? record.evidence_url : repositorySource(record);
}

function dateInfo(record) {
  const published = validDate(record.published_on) ? {
    date: record.published_on,
    published_date_type: record.published_date_type ?? 'published',
    published_date_source: usableUrl(record.published_date_source) ? record.published_date_source : (nonGitHubSource(record) || evidenceSource(record)),
    published_date_confidence: record.published_date_confidence ?? 'exact',
  } : null;
  const recentEvidence = validDate(record.recent_game_evidence_on) ? {
    date: record.recent_game_evidence_on,
    published_date_type: 'recent_game_evidence',
    published_date_source: evidenceSource(record),
    published_date_confidence: 'exact',
  } : null;
  const freshActivity = validDate(record.fresh_activity_date) ? {
    date: record.fresh_activity_date,
    published_date_type: 'repository_activity',
    published_date_source: nonGitHubSource(record, (source) => source.includes('gharchive')) || evidenceSource(record),
    published_date_confidence: 'exact',
  } : null;
  const repositoryCreated = validDate(record.repository_created_at?.slice(0, 10)) ? {
    date: record.repository_created_at.slice(0, 10),
    published_date_type: 'repository_created',
    published_date_source: repositorySource(record),
    published_date_confidence: 'exact',
  } : null;
  return {
    ...((published ?? recentEvidence ?? freshActivity) ?? {
      date: null,
      published_date_type: 'unknown',
      published_date_source: '',
      published_date_confidence: 'unknown',
    }),
    repository_created_date: repositoryCreated?.date ?? null,
    repository_created_source: repositoryCreated?.published_date_source ?? '',
    has_publication_or_evidence_date: Boolean(published ?? recentEvidence ?? freshActivity),
  };
}

function unitRows(record) {
  const target = Number(record.counted_game_units ?? 1);
  if (!Number.isInteger(target) || target < 1) return [];
  const names = [...(record.contained_games ?? [])];
  if (target > 1 && names.length !== target) {
    return [{
      name: record.name,
      unitCount: target,
      rating: Number(record.quality_estimate_10 ?? 0),
      technology: record.technology,
      gameLink: record.game_links?.[0],
      demoLink: record.live_demo_url,
      record,
    }];
  }
  while (names.length < target) names.push(record.name);
  const estimates = record.contained_game_estimates ?? [];
  const gameLinks = record.contained_game_links ?? record.game_links ?? [];
  const demos = record.live_demo_urls ?? [];
  return names.slice(0, target).map((name, index) => {
    const estimate = estimates[index] ?? {};
    return {
      name,
      unitCount: 1,
      rating: Number(estimate.quality_estimate_10 ?? record.quality_estimate_10 ?? 0),
      technology: estimate.technology ?? record.technology,
      gameLink: gameLinks[index],
      demoLink: demos[index] ?? record.live_demo_url,
      record,
    };
  });
}

const lowQualityThreshold = 7;
const games = records.filter((record) => (
  record.is_independent_game
  && Number(record.counted_game_units ?? 1) > 0
  && Number(record.quality_estimate_10 ?? 0) >= lowQualityThreshold
));
const rows = games.flatMap((record) => unitRows(record).map((unit) => ({
  ...unit,
  dateInfo: dateInfo(record),
  key: `${record.github_url}\n${unit.name}`,
})));
const totalUnits = rows.reduce((sum, row) => sum + row.unitCount, 0);

function rank(items) {
  const seen = new Set();
  return [...items]
    .sort((a, b) => (
      b.rating - a.rating
      || (evidenceRank[evidenceText(b.record)] ?? 0) - (evidenceRank[evidenceText(a.record)] ?? 0)
      || Number(Boolean(b.record.live_demo_url || b.record.live_demo_urls?.length)) - Number(Boolean(a.record.live_demo_url || a.record.live_demo_urls?.length))
      || a.name.localeCompare(b.name)
      || a.record.github_url.localeCompare(b.record.github_url)
    ))
    .filter((row) => {
      if (seen.has(row.key)) return false;
      seen.add(row.key);
      return true;
    })
    .slice(0, requestedLimit);
}

function link(label, url) {
  return url ? `[${label}](${url})` : '';
}

function table(items) {
  if (!items.length) return '_No games have a reliable publication or qualifying evidence date in this period._\n';
  let text = '| Rank | Game | Score | Date basis | Model | Technology | Links |\n| ---: | --- | ---: | --- | --- | --- | --- |\n';
  items.forEach((row, index) => {
    const links = [link('source', row.record.github_url), link('evidence', row.dateInfo.published_date_source), link('play', row.demoLink)].filter(Boolean).join(' · ');
    text += `| ${index + 1} | **${escapeMarkdown(row.name)}** | ⭐ **${row.rating.toFixed(1)}** | ${row.dateInfo.date} · ${row.dateInfo.published_date_type} | ${escapeMarkdown(modelText(row.record))} | ${escapeMarkdown(technologyText(row.technology))} | ${links} |\n`;
  });
  return text;
}

function coverage() {
  const datedRecords = new Set(games.filter((record) => dateInfo(record).has_publication_or_evidence_date).map((record) => record.github_url)).size;
  const datedUnits = rows.filter((row) => row.dateInfo.has_publication_or_evidence_date).reduce((sum, row) => sum + row.unitCount, 0);
  const publishedRecords = games.filter((record) => validDate(record.published_on)).length;
  const publishedUnits = rows.filter((row) => validDate(row.record.published_on)).reduce((sum, row) => sum + row.unitCount, 0);
  const unknownRecords = games.length - datedRecords;
  const unknownUnits = totalUnits - datedUnits;
  const repositoryDateRecords = games.filter((record) => validDate(record.repository_created_at?.slice(0, 10))).length;
  const repositoryDateUnits = rows.filter((row) => validDate(row.record.repository_created_at?.slice(0, 10))).reduce((sum, row) => sum + row.unitCount, 0);
  return { datedRecords, datedUnits, publishedRecords, publishedUnits, unknownRecords, unknownUnits, repositoryDateRecords, repositoryDateUnits };
}

const stats = coverage();
const weekStart = dateOffset(asOf, -6);
const monthStart = `${asOf.slice(0, 8)}01`;
const datedRows = rows.filter((row) => row.dateInfo.has_publication_or_evidence_date && row.dateInfo.date);
const dailyDates = Array.from({ length: 7 }, (_, index) => dateOffset(asOf, index - 6));
const dailyRows = new Map(dailyDates.map((date) => [date, rank(datedRows.filter((row) => row.dateInfo.date === date))]));
const weekRows = rank(datedRows.filter((row) => row.dateInfo.date >= weekStart && row.dateInfo.date <= asOf));
const monthRows = rank(datedRows.filter((row) => row.dateInfo.date >= monthStart && row.dateInfo.date <= asOf));

function report(title, description, items, period) {
  const count = items.reduce((sum, row) => sum + row.unitCount, 0);
  return `# ${title}\n\n> ${description}\n\n## Coverage\n\n- Ranked rows: **${items.length}**\n- Counted game units represented: **${count}**\n- Use the date basis shown in each row. Do not interpret repository creation or curation verification as publication.\n\n## Ranking\n\n${table(items)}\n\n## Date policy\n\n- Include \`published_on\`, \`recent_game_evidence_on\`, or \`fresh_activity_date\` when the field contains an exact calendar date.\n- Exclude records with no publication or qualifying evidence date from this ranking.\n- Keep repository creation dates in the audit file only.\n- Keep this report generated; do not edit it manually.\n\nPeriod: **${period}**\nAs of: **${asOf}**\n`;
}

fs.mkdirSync(dailyDirectory, { recursive: true });
for (const entry of fs.readdirSync(dailyDirectory)) {
  if (entry.endsWith('.md')) fs.unlinkSync(path.join(dailyDirectory, entry));
}
for (const date of dailyDates) {
  const items = dailyRows.get(date) ?? [];
  const description = `Rank games with a publication or qualifying evidence date of **${date}**.`;
  fs.writeFileSync(path.join(dailyDirectory, `${date}.md`), report(`Top Games — ${date}`, description, items, date));
}
fs.writeFileSync(path.join(outputDirectory, 'this-week.md'), report('Top Games This Week', `Rank games dated from **${weekStart}** through **${asOf}**.`, weekRows, `${weekStart} through ${asOf}`));
fs.writeFileSync(path.join(outputDirectory, 'this-month.md'), report('Top Games This Month', `Rank games dated from **${monthStart}** through **${asOf}**.`, monthRows, `${monthStart} through ${asOf}`));

const audit = rows.map((row) => ({
  game: row.name,
  repository_url: row.record.github_url,
  counted_game_units: row.unitCount,
  published_on: row.record.published_on ?? null,
  published_date_type: row.dateInfo.published_date_type,
  published_date: row.dateInfo.date,
  published_date_source: row.dateInfo.published_date_source || null,
  published_date_confidence: row.dateInfo.published_date_confidence,
  repository_created_at: row.record.repository_created_at ?? null,
  verified_on: row.record.verified_on ?? null,
}));
fs.writeFileSync(path.join(outputDirectory, 'date-audit.json'), `${JSON.stringify({ generated_on: asOf, records: audit }, null, 2)}\n`);

let index = '# Game Rankings\n\n> Generate these reports with ' + '`node scripts/generate-rankings.mjs --as-of=YYYY-MM-DD`' + '.\n\n';
index += `## Current reports\n\n- [Top games this week](this-week.md) — **${weekRows.length}** ranked rows.\n- [Top games this month](this-month.md) — **${monthRows.length}** ranked rows.\n- [Date audit data](date-audit.json) — normalized date fields for every independent game unit.\n\n`;
index += `## Daily rankings\n\n| Date | Ranked rows | Counted units | Report |\n| --- | ---: | ---: | --- |\n`;
for (const date of dailyDates) {
  const items = dailyRows.get(date) ?? [];
  const count = items.reduce((sum, row) => sum + row.unitCount, 0);
  index += `| ${date} | ${items.length} | ${count} | [Open report](daily/${date}.md) |\n`;
}
index += `\n## Date coverage\n\n| Date signal | Records | Game units | Meaning |\n| --- | ---: | ---: | --- |\n`;
index += `| Explicit publication date | ${stats.publishedRecords} | ${stats.publishedUnits} | ` + '`published_on`' + ` |\n`;
index += `| Publication or qualifying evidence date | ${stats.datedRecords} | ${stats.datedUnits} | ` + '`published_on`, `recent_game_evidence_on`, or `fresh_activity_date`' + ` |\n`;
index += `| Date unknown for ranking | ${stats.unknownRecords} | ${stats.unknownUnits} | Exclude from date rankings |\n`;
index += `| Repository creation metadata | ${stats.repositoryDateRecords} | ${stats.repositoryDateUnits} | Audit context only; not publication |\n\n`;
index += `## Date policy\n\n`;
index += `- Treat ` + '`published_on`' + ` as the preferred publication date.\n`;
index += `- Use recent gameplay evidence or fresh repository activity only when no publication date exists, and label the basis in the report.\n`;
index += `- Keep repository creation and ` + '`verified_on`' + ` dates separate from publication.\n`;
index += `- Show unknown dates instead of guessing.\n`;
index += `- Regenerate all reports after changing ` + '`games.json`' + `.\n\n`;
index += `As of: **${asOf}**\n`;
fs.writeFileSync(path.join(outputDirectory, 'README.md'), index);

console.log(`Generated ${dailyDates.length} daily reports, weekly and monthly reports, and ${audit.length} date-audit rows as of ${asOf}.`);
