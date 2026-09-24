# Car Racer

> Verified game note.

![Car Racer screenshot placeholder](car-racer-placeholder.svg)

## At a glance

- **Score:** 9.0/10
- **Model:** Claude Fable 5
- **Technology:** Phaser 3, TypeScript, Vite, Firebase Hosting, Browser
- **Estimated FP32 operations/s at 60 FPS:** 380,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository contains five independently selectable games, direct scene implementations, extensive tests, screenshots and a live Firebase build with exact Fable attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/hokita/mouse2](https://github.com/hokita/mouse2)
- **Evidence:** [direct model evidence](https://github.com/hokita/mouse2/commit/48f4f442562d651138c170069cf774210338ab2a)
- **Live demo:** [open demo](https://mouse2-0357d0.web.app/)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README is intentionally minimal, but the repository contains a menu with five selectable game entries in src/games.ts. GameScene, CarScene, FishScene, BiteScene and QuestScene provide the five distinct playable scenes; the Firebase deploy workflow and hosting configuration identify the live build, which returned HTTP 200. The cited commit includes an exact Co-Authored-By: Claude Fable 5 trailer.

### Gameplay source

- [https://github.com/hokita/mouse2/blob/main/src/scenes/CarScene.ts](https://github.com/hokita/mouse2/blob/main/src/scenes/CarScene.ts)
- [https://github.com/hokita/mouse2/commit/48f4f442562d651138c170069cf774210338ab2a](https://github.com/hokita/mouse2/commit/48f4f442562d651138c170069cf774210338ab2a)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 5
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Phaser game Co-Authored-By Claude Fable; https://github.com/hokita/mouse2

[Back to the awesome list](../../README.md)
