# OpenCiv1++

> Verified game note.

![OpenCiv1++ screenshot](https://raw.githubusercontent.com/wicanr2/civ1_cht/c46be0d31758141b444b971e6ce7ba7b44908472/openciv1pp/docs/videos/comparison.gif)

## At a glance

- **Score:** 9.1/10
- **Screenshot rating:** 4.8/10 ([manually reviewed image](https://github.com/wicanr2/civ1_cht/blob/HEAD/openciv1pp/docs/screenshots/r5/04_WIZARD_DIFFICULTY_pair.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Opus 4.7
- **Technology:** C++17, SDL2, Custom engine, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 900,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository contains a substantial native strategy game rewrite with documented mechanics, direct C++ source, automated tests, gameplay comparison evidence and exact Opus attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/wicanr2/civ1_cht](https://github.com/wicanr2/civ1_cht)
- **Evidence:** [direct model evidence](https://github.com/wicanr2/civ1_cht/commit/c46be0d31758141b444b971e6ce7ba7b44908472)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/wicanr2/civ1_cht/blob/c46be0d31758141b444b971e6ce7ba7b44908472/openciv1pp/docs/videos/comparison.gif) — 📸 3.3/10 · relative frame adjustment · Shows an isolated asset, diagnostic, or comparison; discount missing gameplay context. The frame provides limited visual evidence.
- [screenshot 2](https://github.com/wicanr2/civ1_cht/blob/HEAD/openciv1pp/docs/screenshots/r5/04_WIZARD_DIFFICULTY_pair.png) — 📸 4.8/10 · manual visual review · Use this frame for the game-level score. Shows the board or controls; assess layout clarity and visual coherence. The frame provides limited visual evidence.
- [screenshot 3](https://github.com/wicanr2/civ1_cht/blob/HEAD/openciv1pp/docs/screenshots/r5/15_FOUND_CITY_pair.png) — 📸 4.4/10 · relative frame adjustment · Shows the board or controls; assess layout clarity and visual coherence. The frame provides limited visual evidence.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README describes a C++17/SDL2 native rewrite of Civilization 1 with eight civilizations, ten units, technology, government, combat, diplomacy, city management, AI, space-race victory and persistent hall of fame. MainCode.cpp, MapManagement.cpp and SdlPresenter.cpp implement game logic, world management and presentation; the repository includes a comparison gameplay GIF and a 20-step play comparison. The cited commit includes an exact Co-Authored-By: Claude Opus 4.7 trailer. This is a source-verified native game and belongs in Non-Browser Engines.

### Gameplay source

- [https://github.com/wicanr2/civ1_cht/blob/c46be0d31758141b444b971e6ce7ba7b44908472/openciv1pp/src/main.cpp](https://github.com/wicanr2/civ1_cht/blob/c46be0d31758141b444b971e6ce7ba7b44908472/openciv1pp/src/main.cpp)
- [https://github.com/wicanr2/civ1_cht/commit/c46be0d31758141b444b971e6ce7ba7b44908472](https://github.com/wicanr2/civ1_cht/commit/c46be0d31758141b444b971e6ce7ba7b44908472)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for C++ game Co-Authored-By Claude Opus; https://github.com/wicanr2/civ1_cht

[Back to the awesome list](../../README.md)
