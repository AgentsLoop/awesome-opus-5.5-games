# Sigil

> Verified game note.

![Sigil screenshot](https://raw.githubusercontent.com/hokita/mouse2/main/docs/screenshots/sigil-battle.png)

## At a glance

- **Score:** 9.0/10
- **Screenshot rating:** 6.8/10 ([manually reviewed image](https://github.com/hokita/mouse2/blob/main/docs/screenshots/sigil-battle.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Fable 5
- **Technology:** Phaser 3, TypeScript, Vite, Firebase Hosting, Browser
- **Estimated FP32 operations/s at 60 FPS:** 380,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository contains five independently selectable games, direct scene implementations, extensive tests, screenshots and a live Firebase build with exact Fable attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/hokita/mouse2](https://github.com/hokita/mouse2)
- **Evidence:** [direct model evidence](https://github.com/hokita/mouse2/commit/48f4f442562d651138c170069cf774210338ab2a)
- **Live demo:** [open demo](https://mouse2-0357d0.web.app/)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/hokita/mouse2/blob/main/docs/screenshots/sigil-battle.png) — 📸 6.8/10 · manual visual review · Use this frame for the game-level score. Shows a playable scene; assess environmental detail, composition, and action readability. The frame is readable but has modest detail.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README is intentionally minimal, but the repository contains a menu with five selectable game entries in src/games.ts. GameScene, CarScene, FishScene, BiteScene and QuestScene provide the five distinct playable scenes; the Firebase deploy workflow and hosting configuration identify the live build, which returned HTTP 200. The cited commit includes an exact Co-Authored-By: Claude Fable 5 trailer.

### Gameplay source

- [https://github.com/hokita/mouse2/blob/main/src/scenes/QuestScene.ts](https://github.com/hokita/mouse2/blob/main/src/scenes/QuestScene.ts)
- [https://github.com/hokita/mouse2/commit/48f4f442562d651138c170069cf774210338ab2a](https://github.com/hokita/mouse2/commit/48f4f442562d651138c170069cf774210338ab2a)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 5
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Phaser game Co-Authored-By Claude Fable; https://github.com/hokita/mouse2

[Back to the awesome list](../../README.md)
