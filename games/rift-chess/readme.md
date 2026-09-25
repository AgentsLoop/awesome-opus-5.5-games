# Rift Chess

> Verified game note.

![Rift Chess screenshot](https://raw.githubusercontent.com/HaileyStorm/rift-chess/main/docs/evidence/overhaul/gallery.png)

## At a glance

- **Score:** 9.3/10
- **Screenshot rating:** 7.9/10 ([manually reviewed image](https://github.com/HaileyStorm/rift-chess/blob/main/docs/evidence/overhaul/gallery.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** GPT-6 Astra
- **Technology:** Three.js, TypeScript, Vite, WebGL, Electron, Browser, Windows
- **Estimated FP32 operations/s at 60 FPS:** 3,500,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Evidence-based estimate from a complete chess-variant loop, local bot and hotseat modes, moving-board mechanics, save/replay/import features, documented rules, source tests, browser offline checks, visual acceptance evidence, public deployment and explicit GPT-6 Astra attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/HaileyStorm/rift-chess](https://github.com/HaileyStorm/rift-chess)
- **Evidence:** [direct model evidence](https://github.com/HaileyStorm/rift-chess#rules-design-and-evidence)
- **Live demo:** [open demo](https://haileystorm.github.io/rift-chess/)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/HaileyStorm/rift-chess/blob/main/docs/evidence/overhaul/gallery.png) — 📸 7.9/10 · manual visual review · Use this frame for the game-level score. Shows the board or controls; assess layout clarity and visual coherence. The frame is readable but has modest detail.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README describes an offline 3D chess variant on fourteen sliding tiles and explicitly credits GPT-6 Astra for implementation and review. The repository contains a Three.js browser runtime, a local search bot, hotseat play, save/import/export/replay, practice undo, rules documentation, engine conformance checks, browser offline-restart checks, complete-game tests, visual evidence and an Electron Windows package. Browser verification opened the live game and showed the 3D kinetic chess table with Take your seat, new match and explore controls. Classified under Browser Games because the browser build is public; the Electron Windows build is recorded as an additional runtime.

### Gameplay source

- [https://github.com/HaileyStorm/rift-chess#rules-design-and-evidence](https://github.com/HaileyStorm/rift-chess#rules-design-and-evidence)

## Verification notes

- **Status:** verified
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** https://github.com/HaileyStorm/rift-chess; https://api.github.com/search/repositories?q=%22GPT-6+Astra%22+game+in%3Areadme+pushed%3A2026-09-08..2026-09-08

[Back to the awesome list](../../README.md)
