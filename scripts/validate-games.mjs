import fs from 'node:fs';

const records = JSON.parse(fs.readFileSync('games.json', 'utf8'));
const errors = [];
const urls = new Set();
const required = ['name', 'github_url', 'evidence_url', 'technology', 'model_family', 'verification_status', 'verified_on', 'verification_notes'];
const evidenceLevels = new Set(['confirmed', 'confirmed_at_repository_level', 'confirmed_supporting_game_code', 'creator-reported', 'directory-method', 'repository/topic trail', 'inferred']);
const qualityCategories = new Set(['curated_games', 'bad_games', 'other_non_games']);
const lowQualityThreshold = 7;
const fail = (index, message) => errors.push(`record ${index + 1}: ${message}`);
const urlFields = ['live_demo_urls', 'screenshot_urls', 'youtube_urls'];
const canonicalUrl = (value) => {
  try {
    const url = new URL(value);
    return `${url.protocol}//${url.host}${url.pathname.replace(/\/+$/, '') || '/'}${url.search}`;
  } catch {
    return value;
  }
};

for (const [index, record] of records.entries()) {
  for (const field of required) {
    const value = record[field];
    if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) fail(index, `missing ${field}`);
  }
  if (!/^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/.test(record.github_url ?? '')) fail(index, `github_url is not a canonical repository URL: ${record.github_url}`);
  if (!/^https:\/\/.+/.test(record.evidence_url ?? '')) fail(index, 'evidence_url must be a public HTTPS URL');
  if (urls.has(record.github_url)) fail(index, `duplicate github_url: ${record.github_url}`);
  urls.add(record.github_url);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record.verified_on ?? '')) fail(index, 'verified_on is not YYYY-MM-DD');
  if (!Number.isInteger(record.game_count) || record.game_count < 1) fail(index, 'game_count must be a positive integer');
  if (!Number.isInteger(record.counted_game_units) || record.counted_game_units < 0) fail(index, 'counted_game_units must be a non-negative integer');
  if (record.is_independent_game && record.counted_game_units < 1) fail(index, 'independent game record must count at least one game unit');
  if (!record.is_independent_game && record.counted_game_units !== 0) fail(index, 'non-independent record must not count game units');
  if (record.is_independent_game && !evidenceLevels.has(record.model_evidence)) fail(index, `model_evidence is not an accepted evidence level: ${record.model_evidence}`);
  if (record.counted_game_units > 1 && !record.contained_games?.length) fail(index, 'multi-unit record must identify the counted units or a documented aggregate');
  if (record.contained_games?.length > 1 && record.contained_games.length !== record.counted_game_units) fail(index, 'contained_games must match counted_game_units when individual games are listed');
  if (!Number.isFinite(record.quality_estimate_10) || record.quality_estimate_10 < 0 || record.quality_estimate_10 > 10) fail(index, 'quality_estimate_10 must be between 0 and 10');
  if (!Number.isFinite(record.flops_estimate_raw) || record.flops_estimate_raw <= 0) fail(index, 'flops_estimate_raw must be positive');
  if (!Object.hasOwn(record, 'prompt')) fail(index, 'missing prompt field');
  for (const field of urlFields) {
    if (record[field] === undefined) continue;
    if (!Array.isArray(record[field])) {
      fail(index, `${field} must be an array when present`);
      continue;
    }
    const values = record[field];
    if (values.some((value) => typeof value !== 'string' || !/^https:\/\/.+/.test(value))) fail(index, `${field} must contain HTTPS URLs`);
    if (new Set(values.map(canonicalUrl)).size !== values.length) fail(index, `${field} contains duplicate URLs`);
  }
  if (record.screenshot_urls?.length && record.is_independent_game && !Number.isFinite(record.screenshot_rating_10)) {
    fail(index, 'game with screenshots must have screenshot_rating_10');
  }
  if (record.screenshot_rating_10 !== undefined) {
    if (!Number.isFinite(record.screenshot_rating_10) || record.screenshot_rating_10 < 0 || record.screenshot_rating_10 > 10) fail(index, 'screenshot_rating_10 must be between 0 and 10');
    if (!record.screenshot_urls?.includes(record.screenshot_rating_evidence_url)) fail(index, 'screenshot rating evidence must be a recorded screenshot');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(record.screenshot_rating_on ?? '')) fail(index, 'screenshot_rating_on is not YYYY-MM-DD');
  }
  for (const [unitIndex, name] of (record.contained_games ?? []).entries()) {
    const screenshots = record.contained_game_screenshots?.[name] ?? [];
    const estimate = record.contained_game_estimates?.[unitIndex] ?? {};
    if (screenshots.length && !Number.isFinite(estimate.screenshot_rating_10)) fail(index, `${name} has screenshots but no screenshot rating`);
    if (estimate.screenshot_rating_10 !== undefined) {
      if (!Number.isFinite(estimate.screenshot_rating_10) || estimate.screenshot_rating_10 < 0 || estimate.screenshot_rating_10 > 10) fail(index, `${name} screenshot rating must be between 0 and 10`);
      if (!screenshots.includes(estimate.screenshot_rating_evidence_url)) fail(index, `${name} screenshot rating evidence is not assigned to this game`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(estimate.screenshot_rating_on ?? '')) fail(index, `${name} screenshot_rating_on is not YYYY-MM-DD`);
    }
  }
  if (record.youtube_urls?.some((url) => !/(?:youtube\.com\/watch\?|youtu\.be\/)/i.test(url))) fail(index, 'youtube_urls must contain YouTube video URLs');
  if (!qualityCategories.has(record.quality_category)) fail(index, `invalid quality_category: ${record.quality_category}`);
  if (record.is_independent_game && (typeof record.prompt !== 'string' || !record.prompt.trim())) fail(index, 'independent game prompt must be non-empty');
  if (!record.is_independent_game && record.prompt !== null) fail(index, 'non-game prompt must be null');
  if (record.is_independent_game && record.quality_estimate_10 < lowQualityThreshold && record.quality_category !== 'bad_games') fail(index, 'low-quality game must be in bad_games category');
  if (record.is_independent_game && record.quality_estimate_10 >= lowQualityThreshold && record.quality_category !== 'curated_games') fail(index, 'curated game must be in curated_games category');
  if (!record.is_independent_game && record.quality_category !== 'other_non_games') fail(index, 'non-game must be in other_non_games category');
}

const active = records.filter((record) => record.is_independent_game && record.counted_game_units > 0);
const units = active.reduce((total, record) => total + record.counted_game_units, 0);
if (errors.length) {
  console.error(`Validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${records.length} dataset records, ${active.length} qualifying repositories, and ${units} counted game units.`);
}
