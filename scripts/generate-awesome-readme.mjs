import fs from 'node:fs';
import path from 'node:path';

const allRecords = JSON.parse(fs.readFileSync('games.json', 'utf8'));
const lowQualityThreshold = 7;
const allGameRecords = allRecords.filter((record) => record.is_independent_game && record.counted_game_units > 0);
const badGameRecords = allGameRecords.filter((record) => Number(record.quality_estimate_10) < lowQualityThreshold);
const games = allGameRecords.filter((record) => Number(record.quality_estimate_10) >= lowQualityThreshold);
const otherRecords = allRecords.filter((record) => !record.is_independent_game);

const esc = (value) => String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ').trim();
const techText = (record, technology = null) => (technology ?? record.technology ?? []).join(', ') || 'Browser';
const compactTechText = (record, technology = null) => {
  const values = technology ?? record.technology ?? [];
  return values.length > 5 ? `${values.slice(0, 5).join(', ')}, +${values.length - 5} more` : values.join(', ') || 'Browser';
};
const modelText = (record) => (record.model_family ?? []).join(', ') || 'Unspecified';
const evidenceText = (record) => record.model_evidence ?? record.method_evidence ?? 'unknown';
const evidenceMeta = {
  confirmed: { label: 'direct model evidence', icon: '✓' },
  confirmed_at_repository_level: { label: 'repository-level model evidence', icon: '✓' },
  confirmed_supporting_game_code: { label: 'model evidence with supporting game code', icon: '✓' },
  'creator-reported': { label: 'creator-reported model evidence', icon: '≈' },
  'directory-method': { label: 'directory-method model evidence', icon: '△' },
  'repository/topic trail': { label: 'repository-topic model evidence', icon: '△' },
  inferred: { label: 'inferred model evidence', icon: '?' },
  unknown: { label: 'unclassified model evidence', icon: '?' },
};
const evidence = (record) => evidenceMeta[evidenceText(record)] ?? evidenceMeta.unknown;

function category(record, gameName, technology = null) {
  const text = `${gameName} ${record.name} ${record.verification_notes ?? ''} ${techText(record, technology)}`.toLowerCase();
  const runtimeText = techText(record, technology).toLowerCase();
  if (/godot|unity|unreal|pygame|playstation|ps1|minecraft|mcfunction|datapack|cocos|libgdx|monogame|love2d|sdl|raylib|bevy|defold|rpg maker|game maker|python, cli|c\+\+|native|luanti|mineclonia|psn00bsdk|duckstation|desktop export|roblox|luau|flutter|evennia|\bmud\b|telnet|source 2|dota 2/.test(runtimeText)) return 'Non-Browser Engines';
  if (/racing|racer|kart|car game|drift|flight|mountain-bike|motorbike|formula/.test(text)) return 'Racing and Vehicles';
  if (/shooter|fps|doom|assault|zombie|surviv|combat|war|iron man|invader|battle|arena/.test(text)) return 'Action and Shooters';
  if (/puzzle|tetris|sudoku|breakout|minesweeper|word|match|snake|pinball|flap|platform|arcade/.test(text)) return 'Puzzle, Arcade, and Platformers';
  if (/rpg|dungeon|quest|horror|adventure|explor|space|planet|story|castle|hollow|rooms/.test(text)) return 'Adventure, RPG, and Exploration';
  if (/strategy|tactic|chess|card|board|farm|kingdom|gm|simulator|simulation|soccer|football|basketball|monopoly/.test(text)) return 'Strategy, Simulation, and Sports';
  if (/three\.js|threejs|webgl|webgpu/.test(text)) return 'Three.js and WebGL';
  return 'Other Browser Games';
}

function units(record) {
  const names = [...(record.contained_games ?? [])];
  const target = record.counted_game_units || 1;
  if (target > 1 && names.length !== target) {
    return [{
      name: record.name,
      rating: record.quality_estimate_10 ?? 0,
      technology: record.technology,
      gameLink: record.game_links?.[0],
      demoLink: record.live_demo_url,
      unitCount: target,
      aggregateLabel: names[0] ?? `${target} documented game units`,
      record,
    }];
  }
  while (names.length < target) names.push(record.name);
  const estimates = record.contained_game_estimates ?? [];
  const gameLinks = record.contained_game_links ?? record.game_links ?? [];
  return names.slice(0, target).map((name, index) => {
    const estimate = estimates[index] ?? {};
    return {
      name,
      rating: estimate.quality_estimate_10 ?? record.quality_estimate_10 ?? 0,
      technology: estimate.technology ?? record.technology,
      gameLink: gameLinks[index],
      demoLink: (record.live_demo_urls ?? [record.live_demo_url])[index],
      unitCount: 1,
      record,
    };
  });
}

const rows = games.flatMap(units).map((unit) => ({ ...unit, category: category(unit.record, unit.name, unit.technology) }));
const groups = new Map();
for (const row of rows) {
  if (!groups.has(row.category)) groups.set(row.category, []);
  groups.get(row.category).push(row);
}
for (const group of groups.values()) group.sort((a, b) => b.rating - a.rating || a.name.localeCompare(b.name));

const unitTotal = (items) => items.reduce((total, item) => total + item.unitCount, 0);
const count = unitTotal(rows);
const repoCount = games.length;
const badRows = badGameRecords.flatMap(units);
const badCount = unitTotal(badRows);
const hasDate = (value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
const publicationDateRecords = games.filter((record) => hasDate(record.published_on));
const repositoryDateRecords = games.filter((record) => hasDate(record.repository_created_at?.slice(0, 10)));
const publicationDateUnits = unitTotal(rows.filter((row) => hasDate(row.record.published_on)));
const repositoryDateUnits = unitTotal(rows.filter((row) => hasDate(row.record.repository_created_at?.slice(0, 10))));
const totalRecordCount = allRecords.length;
const relatedRecordCount = totalRecordCount - repoCount;
const verifiedOn = allRecords.map((record) => record.verified_on).filter(Boolean).sort().at(-1) ?? 'unknown';
const iconLinks = (record) => {
  const screenshots = record.screenshot_urls ?? [];
  const prompts = record.prompt_urls ?? [];
  return [
    screenshots[0] ? `[screenshot](${screenshots[0]})` : '',
    screenshots.length > 1 ? `+${screenshots.length - 1} more screenshots in data` : '',
    prompts[0] ? `[prompt](${prompts[0]})` : '',
    prompts.length > 1 ? `+${prompts.length - 1} more prompts in data` : '',
  ].filter(Boolean).join(' · ');
};
const categoryIcons = {
  'Racing and Vehicles': '🏎️',
  'Action and Shooters': '💥',
  'Puzzle, Arcade, and Platformers': '🧩',
  'Adventure, RPG, and Exploration': '🗺️',
  'Strategy, Simulation, and Sports': '♟️',
  'Three.js and WebGL': '🧊',
  'Other Browser Games': '🎮',
  'Non-Browser Engines': '🛠️',
};
const slug = (title) => title.toLowerCase().replaceAll(/[^a-z0-9 ]/g, '').replaceAll(' ', '-');
const rankedRows = [...rows].sort((a, b) => b.rating - a.rating || a.name.localeCompare(b.name));
const featuredRepos = new Set();
const topPicks = rankedRows.filter((row) => {
  if (featuredRepos.has(row.record.github_url)) return false;
  featuredRepos.add(row.record.github_url);
  return true;
}).slice(0, 15);
const today = new Date().toISOString().slice(0, 10);
const dateOffset = (date, days) => {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
};
const recentDate = (record) => record.recent_game_evidence_on ?? record.published_on ?? record.verified_on ?? '';
const uniqueRanked = (predicate, limit) => {
  const seen = new Set();
  return rankedRows.filter((row) => {
    if (!predicate(row)) return false;
    if (seen.has(row.record.github_url)) return false;
    seen.add(row.record.github_url);
    return true;
  }).slice(0, limit);
};
const topToday = uniqueRanked((row) => row.record.verified_on === today, 10);
const weekStart = dateOffset(today, -6);
const monthStart = `${today.slice(0, 8)}01`;
const topWeek = uniqueRanked((row) => {
  const date = recentDate(row.record);
  return date >= weekStart && date <= today;
}, 15);
const topMonth = uniqueRanked((row) => {
  const date = recentDate(row.record);
  return date >= monthStart && date <= today;
}, 20);
const gameNoteLinks = new Map();
const gamesDirectory = path.join(process.cwd(), 'games');
if (fs.existsSync(gamesDirectory)) {
  for (const entry of fs.readdirSync(gamesDirectory, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const notePath = path.join(gamesDirectory, entry.name, 'readme.md');
    if (!fs.existsSync(notePath)) continue;
    const note = fs.readFileSync(notePath, 'utf8');
    const title = note.match(/^# (.+)$/m)?.[1];
    const repository = note.match(/^- \*\*Repository:\*\* \[(https:\/\/github\.com\/[^)]+)\]/m)?.[1];
    if (title && repository) gameNoteLinks.set(`${repository}\n${title}`, `games/${entry.name}/readme.md`);
  }
}
const gameNoteUrl = (row) => gameNoteLinks.get(`${row.record.github_url}\n${row.name}`) ?? row.record.github_url;
const periodTable = (title, description, items) => {
  let text = `## ${title}\n\n> ${description}\n\n`;
  if (!items.length) return `${text}_No verified entries match this period yet._\n\n`;
  text += `| Rank | Game | Score | Model | Verified date |\n| ---: | --- | ---: | --- | --- |\n`;
  items.forEach((row, index) => {
    text += `| ${index + 1} | [**${esc(row.name)}**](${gameNoteUrl(row)}) | ⭐ **${Number(row.rating).toFixed(1)}** | ${esc(modelText(row.record))} | ${esc(row.record.verified_on ?? recentDate(row.record))} |\n`;
  });
  return `${text}\n`;
};
const threeCount = unitTotal(rows.filter((row) => /three\.js|threejs|webgl|webgpu/i.test(techText(row.record, row.technology))));
const nonBrowserCount = unitTotal(rows.filter((row) => row.category === 'Non-Browser Engines'));
const directPromptCount = unitTotal(rows.filter((row) => row.record.prompt_urls?.length));
const promptFieldCount = unitTotal(rows.filter((row) => row.record.prompt));
const screenshotCount = unitTotal(rows.filter((row) => row.record.screenshot_urls?.length));
const evidenceCounts = rows.reduce((counts, row) => {
  const key = evidenceText(row.record);
  counts[key] = (counts[key] ?? 0) + row.unitCount;
  return counts;
}, {});
const evidenceCount = (key) => evidenceCounts[key] ?? 0;

let output = `<div align="center">\n\n`;
output += `# 🎮 Awesome OPUS 5.5 Games\n\n`;
output += `### ${count} curated game units. ${repoCount} qualifying source repositories.\n\n`;
output += `[![Games](https://img.shields.io/badge/GAMES-${count}-7c3aed?style=for-the-badge&logo=itchdotio&logoColor=white)](#game-library) `;
output += `[![Source repositories](https://img.shields.io/badge/SOURCE%20REPOSITORIES-${repoCount}-2563eb?style=for-the-badge&logo=github&logoColor=white)](games.json) `;
output += `[![WebGL family](https://img.shields.io/badge/WEBGL%20FAMILY-${threeCount}-111827?style=for-the-badge&logo=threedotjs&logoColor=white)](#threejs-and-webgl)\n\n`;
output += `[![Stars](https://img.shields.io/github/stars/AgentsLoop/awesome-opus-5.5-games?style=for-the-badge&logo=github&color=f59e0b)](https://github.com/AgentsLoop/awesome-opus-5.5-games/stargazers) `;
output += `[![Forks](https://img.shields.io/github/forks/AgentsLoop/awesome-opus-5.5-games?style=for-the-badge&logo=github&color=06b6d4)](https://github.com/AgentsLoop/awesome-opus-5.5-games/forks)\n\n`;
output += `> **A curated field guide to games attributed to GPT-6 Astra, Claude Opus, or Claude Fable.**<br />\n`;
output += `> Every listed unit maps to a qualifying GitHub source repository. The model-evidence grade is visible on every entry.\n\n`;
output += `</div>\n\n---\n\n`;
output += periodTable('Top games today', `Rank the highest-rated repositories verified in this curation run on **${today}**.`, topToday);
output += periodTable('Top games this week', `Rank the highest-rated games with publication or qualifying gameplay evidence from **${weekStart}** through **${today}**.`, topWeek);
output += periodTable('Top games this month', `Rank the highest-rated games with publication or qualifying gameplay evidence from **${monthStart}** through **${today}**.`, topMonth);
output += `## Top-rated picks\n\n`;
output += `> **Start here. These projects have the strongest combined evidence, scope, and source quality. Ratings do not replace evidence grades.**\n\n`;
output += `| Game | Score | Built with | Evidence |\n| --- | ---: | --- | --- |\n`;
for (const row of topPicks) output += `| [**${esc(row.name)}**](${gameNoteUrl(row)}) | ⭐ **${Number(row.rating).toFixed(1)}** | ${esc(modelText(row.record))} | [${evidence(row.record).icon} ${esc(evidence(row.record).label)}](${row.record.evidence_url}) |\n`;
output += `\n`;
output += `## What is this?\n\n`;
output += `This is a curated index of playable game units with public GitHub source and evidence that connects them to GPT-6 Astra, Claude Opus, or Claude Fable. “Curated” does not mean every attribution has the same strength: the per-entry evidence grade states whether the model claim is direct, creator-reported, repository-level, or inferred.\n\n`;
output += `The source of truth is [games.json](games.json). It was last verified on **${verifiedOn}**.\n\n`;
output += `Browse [the awesome-list index](awesomelists.md) for verified game catalogs with their counted entry totals.\n\n`;
output += `Browse [AI game generators and engines](ai-game-generators.md) for tools that build or edit playable games from prompts.\n\n`;
output += `Browse [Claude Opus 5.5 release-week games](opus-5.5-games.md) for direct source and model-evidence links.\n\n`;
output += `Browse [publication-date rankings](rankings/README.md) for daily, weekly, and monthly reports. These reports exclude games without a reliable publication or qualifying evidence date. The audit keeps repository creation dates separate from publication dates.\n\n`;
output += `Every game record includes a source-derived reconstruction prompt. Records with original prompt links retain those links; records without them are marked as reverse-engineered rather than presented as the original prompt.\n\n`;
output += `## Collection at a glance\n\n`;
output += `| Signal | Result |\n| --- | ---: |\n`;
output += `| Counted game units | **${count}** |\n`;
output += `| Qualifying source repositories | **${repoCount}** |\n`;
output += `| Dataset records, including related or excluded records | **${totalRecordCount}** |\n`;
output += `| Low-quality game units moved to bad-games.md | **${badCount}** (${badGameRecords.length} repositories) |\n`;
output += `| Other non-game records moved to other.md | **${otherRecords.length}** |\n`;
output += `| WebGL-family game units, across all categories | **${threeCount}** |\n`;
output += `| Non-browser engine game units | **${nonBrowserCount}** |\n`;
output += `| Game units with screenshot links | **${screenshotCount}** |\n`;
output += `| Game units with direct prompt links | **${directPromptCount}** |\n`;
output += `| Game units with source-derived prompt fields | **${promptFieldCount}** |\n`;
output += `| Game units with exact publication dates | **${publicationDateUnits}** (${publicationDateRecords.length} repositories) |\n`;
output += `| Game units with repository creation dates | **${repositoryDateUnits}** (${repositoryDateRecords.length} repositories) |\n\n`;
output += `## Verification snapshot\n\n`;
output += `The list contains **${count}** game units from **${repoCount}** qualifying repositories. The dataset also retains **${relatedRecordCount}** related or excluded records for audit history. Each row uses one of these model-evidence grades.\n\n`;
output += `| Grade | Meaning | Game units |\n| --- | --- | ---: |\n`;
output += `| ✓ Direct | A public primary source directly attributes the listed model. | **${evidenceCount('confirmed') + evidenceCount('confirmed_at_repository_level') + evidenceCount('confirmed_supporting_game_code')}** |\n`;
output += `| ≈ Creator report | The creator attributes the listed model. | **${evidenceCount('creator-reported')}** |\n`;
output += `| △ Repository trail | A repository, directory, or topic trail supports the model claim. | **${evidenceCount('directory-method') + evidenceCount('repository/topic trail')}** |\n`;
output += `| ? Inferred | The model attribution is inferred and should be independently checked. | **${evidenceCount('inferred') + evidenceCount('unknown')}** |\n\n`;
if (screenshotCount) {
  const shot = rows.find((row) => row.record.screenshot_urls?.length);
  const image = shot.record.screenshot_urls[0].replace('https://github.com/', 'https://raw.githubusercontent.com/').replace('/blob/', '/');
  output += `## Screenshot spotlight\n\n<div align="center">\n\n[<img src="${image}" alt="${esc(shot.name)} screenshot" width="760" />](${gameNoteUrl(shot)})\n\n**${esc(shot.name)}** — source and screenshot linked in the dataset.\n\n</div>\n\n`;
}
output += `## Game library\n\n> **Browse curated game units by category.**\n\n`;
output += `Jump to a category:\n\n`;
for (const [title, group] of groups) output += `- ${categoryIcons[title]} [${title}](#${slug(title)}) — **${unitTotal(group)} game units**\n`;
output += `- ⚠️ [Bad games](bad-games.md) — **${badCount}** low-quality game units excluded from the curated library\n`;
output += `- 📦 [Other](other.md) — **${otherRecords.length}** related, derivative, forked, or non-game records\n`;
output += `\n### How to use this guide\n\n`;
output += `- Select a game title to open its local per-game note in [games/](games/).\n`;
output += `- Select the repository link inside the note to open the canonical GitHub source.\n`;
output += `- Select **files** to inspect linked gameplay source. Select **play** for a published demo.\n`;
output += `- Read the evidence grade before relying on a model-attribution claim. The rating is a curation aid, not a benchmark.\n\n`;
output += `Each compact row shows **rating**, **model**, **technology**, **model-evidence grade**, and relevant source links. FLOPS estimates remain in the dataset but are omitted here because they are static, low-confidence estimates.\n\n`;

for (const [title, group] of groups) {
  output += `## ${title}\n\n`;
  output += `> ${categoryIcons[title]} **${unitTotal(group)} curated game units. Ranked by evidence-based quality score.**\n\n`;
  for (const row of group) {
    const r = row.record;
    const extra = iconLinks(r);
    const directLinks = [row.gameLink ? `[files](${row.gameLink})` : '', row.demoLink ? `[play](${row.demoLink})` : ''].filter(Boolean).join(' · ');
    const grade = evidence(r);
    const aggregate = row.aggregateLabel ? ` · **${row.unitCount} documented units:** ${esc(row.aggregateLabel)}` : '';
    output += `- [**${esc(row.name)}**](${gameNoteUrl(row)}) — ⭐ **${Number(row.rating).toFixed(1)}/10** · ${esc(modelText(r))} · ${esc(compactTechText(r, row.technology))} · [${grade.icon} ${grade.label}](${r.evidence_url})${aggregate}${directLinks ? ` · ${directLinks}` : ''}${extra ? ` · ${extra}` : ''}\n`;
  }
  output += `\n[Back to game library](#game-library)\n\n`;
}

output += `## Method\n\n> **Proof over promises. Repository evidence decides what gets counted.**\n\n`;
output += `- Verify the canonical GitHub repository URL. Record its numeric ID when public API metadata is available.\n`;
output += `- Inspect the README, entry point, and gameplay source. Confirm input, rules or objectives, and game state.\n`;
output += `- Place native-engine games in the dedicated non-browser section.\n`;
output += `- Record model evidence as direct, creator-reported, repository-level, directory/topic trail, or inferred. Link every grade to its public evidence URL. Do not present weaker evidence as direct confirmation.\n`;
output += `- Treat source inspection as proof that the code exists. Treat it separately from runtime playtesting.\n`;
output += `- Do not count catalogs, skills, screenshots, visual-only scenes, empty repositories, unchanged forks, or prompt-only projects.\n`;
output += `- Keep source records in [games.json](games.json). Keep rejected candidates in [research/candidates.json](research/candidates.json). Run the validator and regenerate this README after each dataset edit.\n`;
output += `\n## Rating and data notes\n\n`;
output += `The **0–10 rating** uses source completeness, playable mechanics, scope, tests or deployment, and model-evidence strength. It is a curation estimate, not a review score or performance benchmark. The dataset keeps a FLOPS field as a low-confidence static FP32-work estimate at 60 FPS; it is not measured device performance or model-training compute.\n\n`;
output += `## Per-game notes\n\n`;
output += `Open the [games/](games/) directory or the [per-game notes index](games/README.md) to read a short source-backed note for every named game unit. Each note links model evidence, gameplay source, and available screenshot assets. Use the placeholder only when the repository and related-source scan found no screenshot.\n\n`;
output += `## Ranking reports\n\n`;
output += `Open [rankings/](rankings/README.md) for generated top games this week, top games this month, and daily rankings for the last seven dates. Read each row's date basis before treating it as a publication date.\n\n`;
output += `## Contributing\n\n`;
output += `Follow [the contribution guide](CONTRIBUTING.md). Provide the canonical repository, model-evidence URL, playable-source path, and evidence notes. Validate the dataset and regenerate this README before opening a pull request.\n\n`;
output += `## Sources and limitations\n\n`;
output += `Primary GitHub repository evidence is preferred. Creator reports and repository trails are useful discovery evidence but are not equivalent to direct model attribution. A source inspection confirms that code exists; it does not claim that a current live demo was playtested unless the record states it. This project follows the practical principle in [Google’s AI-search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): publish clear, original, useful, crawlable information instead of special markup or artificial content tricks.\n\n`;
output += `## Star this collection\n\n`;
output += `If source-backed AI game history should stay searchable, [**star the repository**](https://github.com/AgentsLoop/awesome-opus-5.5-games).\n`;

fs.writeFileSync('README.md', output);

const link = (label, url) => `[${label}](${url})`;
const short = (value, length = 280) => {
  const text = esc(value);
  return text.length > length ? `${text.slice(0, length - 1)}…` : text;
};
let badMarkdown = `# Bad Games\n\n> Excluded from the curated library because the quality estimate is below **${lowQualityThreshold.toFixed(1)}/10**. Keep these records for transparent audit history.\n\n`;
badMarkdown += `| Game | Score | Model | Technology | Reason | Links |\n| --- | ---: | --- | --- | --- | --- |\n`;
for (const row of badRows) {
  const record = row.record;
  const links = [link('GitHub', record.github_url), record.evidence_url ? link('evidence', record.evidence_url) : ''].filter(Boolean).join(' · ');
  badMarkdown += `| **${esc(row.name)}** | ${Number(row.rating).toFixed(1)} | ${esc(modelText(record))} | ${esc(techText(record, row.technology))} | ${short(record.quality_estimate_basis)} | ${links} |\n`;
}
badMarkdown += `\nDo not use this category as a quality recommendation. Re-run the prompt and quality review workflow after materially improving a source repository.\n`;
fs.writeFileSync('bad-games.md', badMarkdown);

let otherMarkdown = `# Other\n\n> Records retained for audit history but excluded from the game library because they are forks, derivatives, catalogs, tools, engines, or otherwise not independently qualifying games.\n\n`;
otherMarkdown += `| Record | Repository | Reason | Evidence |\n| --- | --- | --- | --- |\n`;
for (const record of otherRecords.sort((a, b) => a.name.localeCompare(b.name))) {
  otherMarkdown += `| **${esc(record.name)}** | ${link('GitHub', record.github_url)} | ${short(record.verification_notes)} | ${link('evidence', record.evidence_url)} |\n`;
}
otherMarkdown += `\nDo not count these records as independent game units. Promote a record only after proving distinct gameplay, source ownership, and qualifying model evidence.\n`;
fs.writeFileSync('other.md', otherMarkdown);
