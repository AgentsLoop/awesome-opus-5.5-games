# Contributing

Submit only a game that meets the collection rules.

## Provide evidence

Provide these fields in the pull request.

- Give the canonical `https://github.com/OWNER/REPOSITORY` URL.
- Give a public URL that identifies GPT-6 Astra, Claude Opus, or Claude Fable.
- Give a source-file URL that shows the playable game loop, controls, rules, objective, or game state.
- State the technology, verification date, and concise verification notes.
- Give a live demo, screenshot, and original prompt when they are public. These are optional evidence, not substitutes for source code.

## Do not submit

Do not submit catalogs, skills, game generators, screenshots, visual scenes without rules, empty repositories, unchanged forks, or prompt-only projects.

## Update the dataset

Keep one record per repository in `games.json`. Set `added_to_repo_on` to the UTC date the repository first enters the dataset, and preserve it when updating the record. Update an existing record when the repository already exists. Set `is_independent_game` and `counted_game_units` only when the game qualifies for the published list. Keep related or rejected records out of the counted units.

## Verify the change

Run these commands before opening a pull request.

```sh
node scripts/validate-games.mjs
node scripts/generate-awesome-readme.mjs
git diff --check
```

Include the generated README, `latest-games.md`, and all affected `models/*.md` pages with the dataset update. Do not edit generated counts or generated pages by hand.

## Generate per-game notes

Run the serial repository README scan when screenshot coverage needs an update.

```sh
node scripts/discover-readme-screenshots.mjs
REFRESH_GAME_NOTES=1 node scripts/generate-game-notes.mjs
```

Review `research/screenshot-discoveries.json`. Treat README images as source assets, not as proof of a successful playtest. Keep a placeholder when no reliable screenshot exists. Commit the `games/` notes and the generated `games/README.md` with the source changes.
