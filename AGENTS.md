# Project instructions

## Wiki

- Read [Scraping skills](wiki/scraping-skills.md) before selecting a skill for web or GitHub collection work.
- Read [Screenshot ratings](wiki/screenshot-ratings.md) before rating or ranking game images.

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
- Record `added_to_repo_on` as the UTC date the repository first appears in `games.json`; preserve it when updating a record.
- Do not add prompt-only projects, catalogs, skills, or repositories without a game.
- Mark projects found in Reddit, X, itch.io, or other sources in `discovery_sources`.
- Keep `games.json` valid JSON.
- Update existing records instead of creating duplicates.
- Mirror every verified README link refresh into the matching `games.json` record in the same change.
- Keep `live_demo_url` as the backward-compatible primary URL; store every additional verified playable URL in `live_demo_urls` and deduplicate the arrays.
- Store verified YouTube gameplay links in a `youtube_urls` array and keep every verified screenshot link in `screenshot_urls`.
- Reject dead, placeholder, documentation, development-only, and unrelated author links before recording them.
- Run `node scripts/validate-games.mjs` after every dataset edit and keep the note generator aligned with every media field.

## Git delivery

- Verify and commit every completed change.
- Regenerate `profile/README.md` with `node scripts/generate-organization-profile.mjs` after changing the root README.
- Push every completed commit to `origin`, `astra`, and `org-profile` (`https://github.com/AgentsLoop/.github.git`) before reporting completion.
- Inspect `~/.config/gh/hosts.yml` and `git remote -v` before remote GitHub actions. Use the intended account and ask if it is ambiguous.
