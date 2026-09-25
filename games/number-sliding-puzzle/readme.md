# Number Sliding Puzzle

> Verified game note.

![Number Sliding Puzzle screenshot placeholder](number-sliding-puzzle-placeholder.svg)

## At a glance

- **Score:** 8.9/10
- **Model:** Claude Opus 5
- **Technology:** Flutter, Dart, Native Android, Mobile puzzle games, Unit tests
- **Estimated FP32 operations/s at 60 FPS:** 180,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository contains three separately registered native games with independent rules, screens and tests, an Android release workflow and exact Opus attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/lofiski/mini-games](https://github.com/lofiski/mini-games)
- **Evidence:** [direct model evidence](https://github.com/lofiski/mini-games/commit/0ba7348e37919c2c4ddb53d0d63b23d31e76b7b9)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README identifies a native Android mini-game collection and lists three playable games: 2048, a 1–15 sliding puzzle and Tap Match. The Flutter source has separate game definitions, pure rules, presentation pages, a registry that exposes all three from the home screen, audio and score persistence, signed Android release targets and dedicated tests for each game's rules and notifier. The inspected history contains exact Claude Opus trailers on the 2048, sliding-puzzle and tap-match implementation commits. Count three independent game units; do not count the shared app shell separately.

### Gameplay source

- [https://github.com/lofiski/mini-games/blob/0ba7348e37919c2c4ddb53d0d63b23d31e76b7b9/lib/games/sliding_puzzle/domain/puzzle.dart](https://github.com/lofiski/mini-games/blob/0ba7348e37919c2c4ddb53d0d63b23d31e76b7b9/lib/games/sliding_puzzle/domain/puzzle.dart)
- [https://github.com/lofiski/mini-games/commit/0ba7348e37919c2c4ddb53d0d63b23d31e76b7b9](https://github.com/lofiski/mini-games/commit/0ba7348e37919c2c4ddb53d0d63b23d31e76b7b9)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 3
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Flutter game Co-Authored-By Claude Opus 5; https://github.com/lofiski/mini-games

[Back to the awesome list](../../README.md)
