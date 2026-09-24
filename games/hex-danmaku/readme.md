# Hex Danmaku

> Verified game note.

![Hex Danmaku screenshot](https://raw.githubusercontent.com/macjoocan/hex-danmaku/38baca4ddb5a2de6db7cc80903ad523c05ae4e4e/assets/fantasy/forest-sanctuary.png)

## At a glance

- **Score:** 9.2/10
- **Screenshot rating:** 5.8/10 ([rated image](https://github.com/macjoocan/hex-danmaku/blob/38baca4ddb5a2de6db7cc80903ad523c05ae4e4e/assets/fantasy/forest-sanctuary.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Fable 5.1
- **Technology:** React 18 UMD, Babel, JavaScript, Browser
- **Estimated FP32 operations/s at 60 FPS:** 120,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Source-complete browser bullet-hell game with multiple modes, stage progression, boss systems, RPG content, local persistence, substantial art pipeline and extensive automated tests, with exact Fable attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/macjoocan/hex-danmaku](https://github.com/macjoocan/hex-danmaku)
- **Evidence:** [direct model evidence](https://github.com/macjoocan/hex-danmaku/commit/38baca4ddb5a2de6db7cc80903ad523c05ae4e4e)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/macjoocan/hex-danmaku/blob/38baca4ddb5a2de6db7cc80903ad523c05ae4e4e/assets/fantasy/forest-sanctuary.png)

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README explicitly describes a turn-based hex bullet-hell game and identifies Hex Danmaku.html as the browser entry point. engine.jsx implements the core game loop, stages.jsx defines 24 stages and bosses, and app.jsx renders the board and HUD. The repository also contains hunt/RPG systems, local persistence and 188 automated tests. The cited history includes exact Co-Authored-By: Claude Fable 5 and Claude Fable 5.1 trailers on gameplay, boss, combat and animation commits.

### Gameplay source

- [https://github.com/macjoocan/hex-danmaku/blob/main/Hex%20Danmaku.html](https://github.com/macjoocan/hex-danmaku/blob/main/Hex%20Danmaku.html)
- [https://github.com/macjoocan/hex-danmaku/commit/38baca4ddb5a2de6db7cc80903ad523c05ae4e4e](https://github.com/macjoocan/hex-danmaku/commit/38baca4ddb5a2de6db7cc80903ad523c05ae4e4e)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Phaser game Co-Authored-By Claude Fable; GitHub code search for C++ game Co-Authored-By Claude Fable; https://github.com/macjoocan/hex-danmaku

[Back to the awesome list](../../README.md)
