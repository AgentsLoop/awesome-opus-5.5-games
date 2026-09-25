import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const gamesDir = path.join(root, 'games');
const refreshNotes = process.env.REFRESH_GAME_NOTES === '1';
const refreshRepositories = new Set((process.env.REFRESH_GAME_NOTES_FOR ?? '').split(',').map((value) => value.trim()).filter(Boolean));
const records = JSON.parse(fs.readFileSync(path.join(root, 'games.json'), 'utf8'));
const discoveryPath = path.join(root, 'research', 'screenshot-discoveries.json');
const screenshotDiscoveries = fs.existsSync(discoveryPath)
  ? JSON.parse(fs.readFileSync(discoveryPath, 'utf8'))
  : {};
const screenshotReviews = new Map(JSON.parse(fs.readFileSync(path.join(root, 'research', 'screenshot-reviews.json'), 'utf8')).reviews.map((review) => [review.url, review]));

const esc = (value) => String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ').trim();
const htmlEsc = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');
const modelText = (record, estimate = null) => (estimate?.model_family ?? record.model_family ?? []).join(', ') || 'Unspecified';
const evidenceText = (record, estimate = null) => estimate?.model_evidence ?? record.model_evidence ?? record.method_evidence ?? 'unknown';
const evidenceLabel = {
  confirmed: 'direct model evidence',
  confirmed_at_repository_level: 'repository-level model evidence',
  confirmed_supporting_game_code: 'model evidence with supporting game code',
  'creator-reported': 'creator-reported model evidence',
  'directory-method': 'directory-method model evidence',
  'repository/topic trail': 'repository-topic model evidence',
  inferred: 'inferred model evidence',
  unknown: 'unclassified model evidence',
};

function expand(record) {
  const names = [...(record.contained_games ?? [])];
  const target = record.counted_game_units || 1;
  if (target > 1 && names.length !== target) {
    return [{
      name: record.name,
      unitIndex: 0,
      unitCount: target,
      gameLink: record.game_links?.[0],
      record,
    }];
  }
  while (names.length < target) names.push(record.name);
  const links = record.contained_game_links ?? record.game_links ?? [];
  return names.slice(0, target).map((name, unitIndex) => ({
    name,
    unitIndex,
    unitCount: 1,
    gameLink: links[unitIndex],
    estimate: record.contained_game_estimates?.[unitIndex] ?? null,
    record,
  }));
}

const rows = records
  .filter((record) => record.is_independent_game && record.counted_game_units > 0)
  .flatMap(expand);

function dateOffset(date, days) {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}

const today = new Date().toISOString().slice(0, 10);
const weekStart = dateOffset(today, -6);
const monthStart = `${today.slice(0, 8)}01`;
const recentDate = (record) => record.recent_game_evidence_on ?? record.published_on ?? record.verified_on ?? '';
const rating = (row) => row.estimate?.quality_estimate_10 ?? row.record.quality_estimate_10 ?? 0;
const ranked = [...rows].sort((a, b) => rating(b) - rating(a) || a.name.localeCompare(b.name));
const uniqueRepositories = (items, limit = Number.POSITIVE_INFINITY) => {
  const seen = new Set();
  return items.filter((row) => {
    if (seen.has(row.record.github_url)) return false;
    seen.add(row.record.github_url);
    return true;
  }).slice(0, limit);
};
const topToday = uniqueRepositories(ranked.filter((row) => row.record.verified_on === today), 10);
const topWeek = uniqueRepositories(ranked.filter((row) => {
  const date = recentDate(row.record);
  return date >= weekStart && date <= today;
}), 15);
const topMonth = uniqueRepositories(ranked.filter((row) => {
  const date = recentDate(row.record);
  return date >= monthStart && date <= today;
}), 20);
const topKey = new Map();
for (const [period, items] of [['today', topToday], ['this week', topWeek], ['this month', topMonth]]) {
  items.forEach((row, index) => {
    const key = `${row.record.github_url}\n${row.name}`;
    const values = topKey.get(key) ?? {};
    values[period] = index + 1;
    topKey.set(key, values);
  });
}

function slugify(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'game';
}

function ownerRepo(url) {
  const match = String(url).match(/^https:\/\/github\.com\/([^/]+)\/([^/#]+)/);
  return match ? `${match[1]}-${match[2]}` : 'source';
}

function rawImageUrl(url) {
  const match = String(url).match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.+)$/);
  if (!match) return url;
  return `https://raw.githubusercontent.com/${match[1]}/${match[2]}/${match[3]}/${match[4]}`;
}

function isImage(url) {
  return /\.(avif|gif|jpe?g|png|svg|webp)(?:[?#].*)?$/i.test(url);
}

function sourceScreenshots(record, row = null) {
  const hasUnitMapping = Boolean(row?.name && record.contained_game_screenshots);
  const direct = hasUnitMapping ? (record.contained_game_screenshots[row.name] ?? []) : (record.screenshot_urls ?? []);
  return [...new Set(direct)].filter(Boolean);
}

function sourceLiveDemos(record, row = null) {
  if (row && Array.isArray(record.live_demo_urls) && record.live_demo_urls.length === record.counted_game_units) {
    return [record.live_demo_urls[row.unitIndex]].filter(Boolean);
  }
  return [...new Set([record.live_demo_url, ...(record.live_demo_urls ?? [])])].filter(Boolean);
}

function sourcePrompt(row) {
  return row.estimate?.prompt ?? (row.record.prompt_note_enabled ? row.record.prompt : '');
}

function readExistingSlugs() {
  const byGame = new Map();
  const entries = fs.existsSync(gamesDir) ? fs.readdirSync(gamesDir, { withFileTypes: true }) : [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const readmePath = path.join(gamesDir, entry.name, 'readme.md');
    if (!fs.existsSync(readmePath)) continue;
    const text = fs.readFileSync(readmePath, 'utf8');
    const repository = text.match(/- \*\*Repository:\*\* \[(https:\/\/github\.com\/[^)]+)\]/)?.[1];
    const title = text.match(/^# (.+)$/m)?.[1];
    if (repository && title) byGame.set(`${repository}\n${title}`, entry.name);
  }
  return byGame;
}

const existingSlugs = readExistingSlugs();
const usedSlugs = new Map();
for (const row of rows) {
  const rowKey = `${row.record.github_url}\n${row.name}`;
  const base = existingSlugs.get(rowKey) ?? slugify(row.name);
  const ownerSuffix = slugify(ownerRepo(row.record.github_url));
  let slug = base;
  const occupiedBy = usedSlugs.get(slug);
  if (occupiedBy && occupiedBy !== rowKey) slug = `${base}-${ownerSuffix}`;
  while (usedSlugs.has(slug) && usedSlugs.get(slug) !== rowKey) slug = `${slug}-game`;
  usedSlugs.set(slug, rowKey);
  row.slug = slug;
}

function placeholderSvg(row) {
  const title = htmlEsc(row.name).slice(0, 42);
  const model = htmlEsc(modelText(row.record, row.estimate)).slice(0, 42);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720" role="img" aria-labelledby="title desc">
  <title id="title">${title} placeholder</title>
  <desc id="desc">Screenshot pending for ${title}</desc>
  <defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#111827"/><stop offset="1" stop-color="#4c1d95"/></linearGradient></defs>
  <rect width="1280" height="720" fill="url(#bg)"/>
  <circle cx="1080" cy="130" r="190" fill="#7c3aed" opacity=".25"/>
  <circle cx="180" cy="620" r="230" fill="#06b6d4" opacity=".18"/>
  <text x="80" y="300" fill="#fff" font-family="Arial,sans-serif" font-size="58" font-weight="700">${title}</text>
  <text x="84" y="365" fill="#c4b5fd" font-family="Arial,sans-serif" font-size="28">Screenshot source pending</text>
  <text x="84" y="425" fill="#bae6fd" font-family="Arial,sans-serif" font-size="22">${model}</text>
  <text x="84" y="650" fill="#94a3b8" font-family="Arial,sans-serif" font-size="18">Open the repository and source links in this note.</text>
</svg>
`;
}

function writeNote(row) {
  const record = row.record;
  const directory = path.join(gamesDir, row.slug);
  fs.mkdirSync(directory, { recursive: true });
  const readmePath = path.join(directory, 'readme.md');
  if (fs.existsSync(readmePath) && !refreshNotes && !refreshRepositories.has(record.github_url)) return false;

  const key = `${record.github_url}\n${row.name}`;
  const ranks = topKey.get(key) ?? {};
  const rankText = Object.entries(ranks).map(([period, rank]) => `**${period}** (#${rank})`).join(', ');
  const screenshots = sourceScreenshots(record, row);
  const liveDemos = sourceLiveDemos(record, row);
  const prompt = sourcePrompt(row);
  const evidenceUrl = row.estimate?.evidence_url ?? record.evidence_url;
  const evidenceGrade = evidenceText(record, row.estimate);
  const flops = row.estimate?.flops_estimate_raw ?? record.flops_estimate_raw;
  const flopsConfidence = row.estimate?.flops_estimate_confidence ?? record.flops_estimate_confidence ?? 'low';
  const placeholderName = `${row.slug}-placeholder.svg`;
  if (!screenshots.length) fs.writeFileSync(path.join(directory, placeholderName), placeholderSvg(row));

  let output = `# ${row.name}\n\n`;
  output += rankText ? `> Top-list entry: ${rankText}.\n\n` : `> Verified game note.\n\n`;
  if (screenshots.length) {
    const first = screenshots.find(isImage) ?? screenshots[0];
    output += `![${esc(row.name)} screenshot](${rawImageUrl(first)})\n\n`;
  } else {
    output += `![${esc(row.name)} screenshot placeholder](${placeholderName})\n\n`;
  }
  output += `## At a glance\n\n`;
  output += `- **Score:** ${Number(rating(row)).toFixed(1)}/10\n`;
  const screenshotRating = row.estimate?.screenshot_rating_10 ?? (record.contained_game_screenshots ? undefined : record.screenshot_rating_10);
  const screenshotEvidence = row.estimate?.screenshot_rating_evidence_url ?? (record.contained_game_screenshots ? undefined : record.screenshot_rating_evidence_url);
  if (screenshots.length && Number.isFinite(screenshotRating) && screenshotEvidence) {
    output += `- **Screenshot rating:** ${Number(screenshotRating).toFixed(1)}/10 ([manually reviewed image](${screenshotEvidence})). Treat this as visual review only; do not infer a playtest.\n`;
  }
  output += `- **Model:** ${esc(modelText(record, row.estimate))}\n`;
  output += `- **Technology:** ${esc((row.estimate?.technology ?? record.technology ?? []).join(', ') || 'Browser')}\n`;
  if (Number.isFinite(flops)) output += `- **Estimated FP32 operations/s at 60 FPS:** ${Number(flops).toLocaleString('en-US')} (${esc(flopsConfidence)} confidence; static estimate, not measured).\n`;
  if (row.estimate?.quality_estimate_basis ?? record.quality_estimate_basis) output += `- **Rating basis:** ${esc(row.estimate?.quality_estimate_basis ?? record.quality_estimate_basis)}\n`;
  output += `- **Verified:** ${esc(record.verified_on)}\n`;
  output += `- **Repository:** [${record.github_url}](${record.github_url})\n`;
  output += `- **Evidence:** [${evidenceLabel[evidenceGrade] ?? 'model evidence'}](${evidenceUrl})\n`;
  liveDemos.forEach((url, index) => {
    const label = index === 0 ? 'Live demo' : 'Additional live link';
    output += `- **${label}:** [open demo](${url})\n`;
  });
  output += `\n`;
  output += `## Screenshots\n\n`;
  if (screenshots.length) {
    output += `Use the source screenshot links below. The list records these assets from the game repository or a related source.\n\n`;
    screenshots.forEach((url, index) => {
      const label = isImage(url) ? `screenshot ${index + 1}` : `screenshot source ${index + 1}`;
      const review = screenshotReviews.get(url);
      if (!review) throw new Error(`Missing screenshot review: ${url}`);
      const method = review.rating_method === 'manual_visual_review' ? 'manual visual review' : 'relative frame adjustment';
      output += `- [${label}](${url}) — 📸 ${Number(review.score_10).toFixed(1)}/10 · ${method} · ${esc(review.reason)}\n`;
    });
  } else {
    output += `No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.\n`;
  }
  const videos = [...new Set(record.youtube_urls ?? [])].filter(Boolean);
  if (videos.length) {
    output += `\n## Videos\n\n`;
    videos.forEach((url) => { output += `- [YouTube gameplay video](${url})\n`; });
  }
  output += `\n## Model attribution\n\n`;
  output += `Open the evidence link above. Evidence grade: **${esc(evidenceLabel[evidenceGrade] ?? evidenceGrade)}**.\n\n`;
  output += `## Source description\n\n${esc(record.verification_notes ?? 'Inspect the repository README and gameplay source for the verified scope.')}\n\n`;
  output += `### Gameplay source\n\n`;
  const links = [...new Set([row.gameLink, evidenceUrl, record.evidence_url])].filter(Boolean);
  links.forEach((url) => { output += `- [${url}](${url})\n`; });
  if (prompt) {
    output += `\n## Reverse-engineered prompt\n\n`;
    output += `Reconstruct this prompt from the verified source; it is not an original prompt transcript. See [prompt evidence](${row.estimate?.prompt_evidence_url ?? record.prompt_evidence_url ?? evidenceUrl}).\n\n`;
    output += `\`\`\`text\n${prompt.replaceAll('```', "'''\n")}\n\`\`\`\n`;
  }
  output += `\n## Verification notes\n\n`;
  output += `- **Status:** ${esc(record.verification_status)}\n`;
  output += `- **Counted units in repository:** ${record.counted_game_units}\n`;
  output += `- **Units covered by this note:** ${row.unitCount}\n`;
  if (record.discovery_sources?.length) output += `- **Discovery:** ${record.discovery_sources.join('; ')}\n`;
  if (record.screenshot_urls?.length && (screenshotDiscoveries.screenshots?.[record.github_url]?.screenshots ?? []).length) output += `- **Screenshot discovery:** ${esc(screenshotDiscoveries.screenshots[record.github_url].method ?? 'repository README source scan')}\n`;
  output += `\n[Back to the awesome list](../../README.md)\n`;
  fs.writeFileSync(readmePath, output);
  return true;
}

const created = rows.filter(writeNote).length;
const screenshotRows = rows.filter((row) => sourceScreenshots(row.record, row).length).length;
const placeholderRows = rows.length - screenshotRows;
const countedUnits = rows.reduce((total, row) => total + row.unitCount, 0);
const aggregateRows = rows.filter((row) => row.unitCount > 1).length;
const link = (row) => `- [${esc(row.name)}](./${row.slug}/readme.md) — ${Number(rating(row)).toFixed(1)}/10`;
let index = `# Game notes\n\n`;
index += `Open the per-game notes. Use the source links to inspect model evidence, gameplay code, and screenshot assets.\n\n`;
index += `- **Counted game units:** ${countedUnits}\n`;
index += `- **Named game notes:** ${rows.length}\n`;
index += `- **Aggregate notes:** ${aggregateRows} (some repositories document several units without separate names)\n`;
index += `- **Rows with screenshot sources:** ${screenshotRows}\n`;
index += `- **Placeholder thumbnails:** ${placeholderRows}\n`;
index += `- **Notes written in this run:** ${created}\n\n`;
function period(title, items) {
  let text = `## ${title}\n\n`;
  for (const row of items) text += `${link(row)}\n`;
  return `${text}\n`;
}
index += period('Today', topToday);
index += period('This week', topWeek);
index += period('This month', topMonth);
index += `## All verified game units\n\n`;
for (const row of rows.sort((a, b) => a.name.localeCompare(b.name) || a.record.github_url.localeCompare(b.record.github_url))) index += `${link(row)}\n`;
fs.writeFileSync(path.join(gamesDir, 'README.md'), index);
console.log(`${refreshNotes ? 'Refreshed' : 'Created'} ${created} notes. Indexed ${countedUnits} counted units across ${rows.length} named notes; ${screenshotRows} have screenshot sources and ${placeholderRows} use placeholders.`);
