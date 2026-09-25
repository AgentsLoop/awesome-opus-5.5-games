# Recess Sports v1

> Verified game note.

![Recess Sports v1 screenshot placeholder](recess-sports-v1-placeholder.svg)

## At a glance

- **Score:** 9.1/10
- **Model:** Claude Fable 5
- **Technology:** TypeScript, Phaser 3, Vite, Canvas/WebGL, Browser
- **Estimated FP32 operations/s at 60 FPS:** 1,100,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Shipped browser baseball loop with drafting, pitching, batting, innings, characters, scenes, live demo, tests and exact Fable attribution on a gameplay/UI commit; the unfinished Three.js spike is excluded.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/srgirsky/recess-sports](https://github.com/srgirsky/recess-sports)
- **Evidence:** [direct model evidence](https://github.com/srgirsky/recess-sports/commit/7c98b233a08ac0dc2df8fccff0d3627d8112af3a)
- **Live demo:** [open demo](https://srgirsky.github.io/recess-sports/)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README documents Recess Sports v1 as a shipped browser baseball game: draft 9 of 30 neighborhood characters, then play a short pitch-and-swing game. The source includes Phaser scenes for boot, setup, lineup, gameplay, batting, pitch selection, scoreboards and results, plus pure draft/at-bat/innings rules and tests. The live GitHub Pages demo returned a reachable page during verification. The cited inning-break gameplay/UI commit contains exact Co-Authored-By: Claude Fable 5 trailers. The README also describes a separate Three.js v2 art-direction spike; it is still in progress and visual-only, so it is excluded from the count. Count the shipped Phaser baseball game once.

### Gameplay source

- [https://github.com/srgirsky/recess-sports#readme](https://github.com/srgirsky/recess-sports#readme)
- [https://github.com/srgirsky/recess-sports/commit/7c98b233a08ac0dc2df8fccff0d3627d8112af3a](https://github.com/srgirsky/recess-sports/commit/7c98b233a08ac0dc2df8fccff0d3627d8112af3a)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for Co-Authored-By Claude Fable game; https://github.com/srgirsky/recess-sports

[Back to the awesome list](../../README.md)
