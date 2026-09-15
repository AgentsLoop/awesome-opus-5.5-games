# Awesome list quality research

Use these sources to maintain the list.

- Follow the [Awesome pull-request requirements](https://github.com/sindresorhus/awesome/blob/main/pull_request_template.md). Give each entry a clear purpose. Keep the list selective. Give contributors exact rules.
- Follow GitHub’s [README guidance](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes). State scope, source of truth, usage, contribution path, and limitations near the top of the README.
- Follow GitHub’s [contribution-guide guidance](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors). Require the evidence needed to accept a record before a contributor opens a pull request.
- Follow [Google’s AI-search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide). Publish useful, original, crawlable information. Do not use special markup or artificial text structure as a visibility claim.

## Applied changes

- Label each model-attribution claim with an evidence grade and a public evidence link.
- Distinguish a counted game unit from a qualifying repository.
- Show aggregate game counts without inventing individual game names.
- Generate all README counts from `games.json`.
- Validate repository URLs, evidence URLs, evidence levels, game-unit counts, and quality values before generating the README.

## Freshness audit rule

For date-ranked game lists, record three signals separately: repository creation, explicit publication/release, and qualifying gameplay evidence. Accept a game into a two-day pass only after inspecting its README, entry point and gameplay state serially. Count multi-game repositories once in `games.json`, but count each independently documented playable unit in rankings. Label repository-level model attribution when the exact model trailer is not attached to the gameplay commit.
