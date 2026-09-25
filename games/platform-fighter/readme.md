# Platform Fighter

> Verified game note.

![Platform Fighter screenshot placeholder](platform-fighter-placeholder.svg)

## At a glance

- **Score:** 9.4/10
- **Model:** Claude Opus 4.8
- **Technology:** Phaser 3, Matter.js, TypeScript, Vite, Browser
- **Estimated FP32 operations/s at 60 FPS:** 850,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository documents a complete local multiplayer fighter, exposes a live build, has direct match/character/physics source, replay support, assets and exact Opus attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/lodevel/platform-fighter](https://github.com/lodevel/platform-fighter)
- **Evidence:** [direct model evidence](https://github.com/lodevel/platform-fighter/commit/c5d5d1773b88cc4cb4711fbcc10652c494b58342)
- **Live demo:** [open demo](https://lodevel.github.io/platform-fighter/)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README describes a playable Smash Bros-style platform fighter with local four-player matches, AI fighters, four hazard stages, a stage builder and input replay. MatchScene, Character and PhysicsEngine implement the match, fighter behavior and fixed-step physics; the live GitHub Pages build returned HTTP 200. The cited commit includes an exact Co-Authored-By: Claude Opus 4.8 trailer.

### Gameplay source

- [https://github.com/lodevel/platform-fighter/blob/c5d5d1773b88cc4cb4711fbcc10652c494b58342/src/main.ts](https://github.com/lodevel/platform-fighter/blob/c5d5d1773b88cc4cb4711fbcc10652c494b58342/src/main.ts)
- [https://github.com/lodevel/platform-fighter/commit/c5d5d1773b88cc4cb4711fbcc10652c494b58342](https://github.com/lodevel/platform-fighter/commit/c5d5d1773b88cc4cb4711fbcc10652c494b58342)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Phaser game Co-Authored-By Claude Opus; https://github.com/lodevel/platform-fighter

[Back to the awesome list](../../README.md)
