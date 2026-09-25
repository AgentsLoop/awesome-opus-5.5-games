# PVP Tetris

> Verified game note.

![PVP Tetris screenshot placeholder](pvp-tetris-placeholder.svg)

## At a glance

- **Score:** 8.3/10
- **Model:** Claude Opus 4.6
- **Technology:** C#, .NET 6, WPF, Native Windows
- **Estimated FP32 operations/s at 60 FPS:** 550,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Native WPF app, complete game engine, scoring/randomizer/rotation loop, server and tests, with direct Opus implementation attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/wodud1378/PVP-Tetris](https://github.com/wodud1378/PVP-Tetris)
- **Evidence:** [direct model evidence](https://github.com/wodud1378/PVP-Tetris/commit/d82a98b2ef49426587a7770c1b64434f93d2d0d9)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The repository contains a real C# WPF desktop Tetris application, shared game core, server, AI and tests. The cited implementation commit adds a 405-line GameEngine with rotation, scoring, randomizer and a full game loop and carries multiple Co-Authored-By: Claude Opus 4.6 trailers. Route it to the separate non-browser engine section.

### Gameplay source

- [https://github.com/wodud1378/PVP-Tetris/tree/main/Tetris.App](https://github.com/wodud1378/PVP-Tetris/tree/main/Tetris.App)
- [https://github.com/wodud1378/PVP-Tetris/commit/d82a98b2ef49426587a7770c1b64434f93d2d0d9](https://github.com/wodud1378/PVP-Tetris/commit/d82a98b2ef49426587a7770c1b64434f93d2d0d9)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for game Co-Authored-By Claude Opus 4.6; https://github.com/wodud1378/PVP-Tetris

[Back to the awesome list](../../README.md)
