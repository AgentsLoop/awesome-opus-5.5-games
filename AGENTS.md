# Project instructions

## Wiki

- Read [Scraping skills](wiki/scraping-skills.md) before selecting a skill for web or GitHub collection work.

## Game collections

- Add every verified game collection or awesome list you find to `awesomelists.md`.
- Record its source link, counted game entries, count method, and verification date.
- Keep collection repositories out of `games.json` unless they also contain a playable game.

## AI game generators

- Add AI game generators encountered during other research to `ai-game-generators.md` after verifying a primary source claims playable-game creation.
- Record the tool link, creation capability, access or export limits, primary evidence link, and verification date.
- Keep generator-only tools out of `games.json` unless their repository also contains a playable game.

## Game link collection

- Save every verified GitHub game repository link in `games.json`.
- Add a record immediately after confirming that the repository exists and contains a game or playable game prototype.
- Keep one record per repository.
- Use the repository URL as the stable identifier.
- Record the game name, repository URL, evidence URL, technology, verification status, and verification date.
- Do not add prompt-only projects, catalogs, skills, or repositories without a game.
- Mark projects found in Reddit, X, itch.io, or other sources in `discovery_sources`.
- Keep `games.json` valid JSON.
- Update existing records instead of creating duplicates.
- Mirror every verified README link refresh into the matching `games.json` record in the same change.
- Keep `live_demo_url` as the backward-compatible primary URL; store every additional verified playable URL in `live_demo_urls` and deduplicate the arrays.
- Store verified YouTube gameplay links in a `youtube_urls` array and keep every verified screenshot link in `screenshot_urls`.
- Reject dead, placeholder, documentation, development-only, and unrelated author links before recording them.
- Run `node scripts/validate-games.mjs` after every dataset edit and keep the note generator aligned with every media field.
