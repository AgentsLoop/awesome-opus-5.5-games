import fs from 'node:fs';

const path = 'games.json';
const records = JSON.parse(fs.readFileSync(path, 'utf8'));
const lowQualityThreshold = 7;
const clean = (value) => String(value ?? '').replace(/\s+/g, ' ').trim();
const sourceUrl = (record) => record.game_links?.[0] ?? record.evidence_url ?? record.github_url;

function reverseEngineerPrompt(record) {
  const title = record.contained_games?.length > 1
    ? `${record.name} (${record.contained_games.join(', ')})`
    : record.name;
  const technology = (record.technology ?? []).join(', ') || 'the documented game technology';
  const mechanics = clean(record.verification_notes).slice(0, 2400);
  const model = (record.model_family ?? []).join(', ') || 'the documented model family';
  return [
    `Rebuild "${title}" as a complete, playable game using ${technology}.`,
    `Reverse-engineer the observed source behavior rather than inventing a different project. Preserve these mechanics, rules, controls, objectives, progression systems, and win/loss states: ${mechanics}`,
    `Use ${model} only as the recorded attribution context; do not claim this reconstruction is the original prompt or original implementation.`,
    'Implement a clear start state, responsive input, deterministic game-state transitions, scoring or progression where observed, win/failure feedback, pause or restart behavior where appropriate, and a self-contained run/build path.',
    `Validate the result against the public source evidence at ${sourceUrl(record)} and keep the implementation scope consistent with the observed game.`,
  ].join('\n\n');
}

let generated = 0;
let reviewedQuality = 0;
for (const record of records) {
  if (record.is_independent_game) {
    record.prompt = reverseEngineerPrompt(record);
    record.prompt_origin = (record.prompt_urls?.length ?? 0) > 0
      ? 'source_linked_plus_reverse_engineered'
      : 'reverse_engineered_from_source';
    record.prompt_evidence_url = sourceUrl(record);
    generated += 1;
    if (Number(record.quality_estimate_10) < lowQualityThreshold) {
      const note = 'Moved to bad-games.md because the quality estimate is below the 7.0 curated-list threshold.';
      if (!String(record.quality_estimate_basis).includes(note)) record.quality_estimate_basis = `${clean(record.quality_estimate_basis)} ${note}`;
      record.quality_category = 'bad_games';
      reviewedQuality += 1;
    } else {
      record.quality_category = 'curated_games';
    }
  } else {
    record.prompt = null;
    record.prompt_origin = 'not_applicable_non_game';
    record.prompt_evidence_url = null;
    record.quality_category = 'other_non_games';
  }
}

fs.writeFileSync(path, `${JSON.stringify(records, null, 2)}\n`);
console.log(JSON.stringify({ records: records.length, prompts_generated: generated, quality_basis_reviewed: reviewedQuality, non_games: records.filter((record) => !record.is_independent_game).length }, null, 2));
