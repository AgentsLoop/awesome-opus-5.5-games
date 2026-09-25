# Haynes Quest

> Verified game note.

![Haynes Quest screenshot](https://raw.githubusercontent.com/thaynes43/haynes-quest/main/docs/assets/media/bestie-pink/v001/browser-beauty.png)

## At a glance

- **Score:** 9.4/10
- **Screenshot rating:** 5.8/10 ([manually reviewed image](https://github.com/thaynes43/haynes-quest/blob/main/docs/assets/media/bestie-pink/v001/browser-beauty.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Fable 5.1
- **Technology:** TypeScript, React, Three.js, WebGL, Browser, Private preview
- **Estimated FP32 operations/s at 60 FPS:** 1,600,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository contains a documented two-chapter playable release, separate movement and combat systems, browser UI, server-owned progression, automated keyboard/touch journeys and exact Fable attribution on gameplay work.
- **Verified:** 2026-09-12
- **Repository:** [https://github.com/thaynes43/haynes-quest](https://github.com/thaynes43/haynes-quest)
- **Evidence:** [direct model evidence](https://github.com/thaynes43/haynes-quest/commit/9ccc7a8d89210f6da9ba12e031e124eade52ba6b)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/thaynes43/haynes-quest/blob/main/docs/assets/media/bestie-pink/v001/browser-beauty.png) — 📸 5.8/10 · manual visual review · Use this frame for the game-level score. Shows a playable scene; assess environmental detail, composition, and action readability. The frame provides limited visual evidence.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README describes a private browser adventure with two playable chapters, equipment, traversal, enemies, bosses, combat, memory recovery and age progression. src/game/obby.ts implements obstacle-course movement, collision, hazards, checkpoints and recovery; src/game/combat.ts implements enemy pursuit, attacks, damage and defeat; GameScreen.tsx connects the runtime to the browser UI; and the Playwright journey test drives completed keyboard and touch journeys. The cited commit contains exact Co-Authored-By: Claude Fable 5.1 trailers and records the delivered two-chapter playtest. The private preview URL was not reachable from this verification environment, so no public live demo is claimed. Count the complete adventure as one game, not one game per chapter.

### Gameplay source

- [https://github.com/thaynes43/haynes-quest#readme](https://github.com/thaynes43/haynes-quest#readme)
- [https://github.com/thaynes43/haynes-quest/commit/9ccc7a8d89210f6da9ba12e031e124eade52ba6b](https://github.com/thaynes43/haynes-quest/commit/9ccc7a8d89210f6da9ba12e031e124eade52ba6b)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for game Co-Authored-By Claude Fable, 2026-09-10..2026-09-12; https://github.com/thaynes43/haynes-quest

[Back to the awesome list](../../README.md)
