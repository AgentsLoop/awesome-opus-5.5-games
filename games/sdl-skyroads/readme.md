# SDL Skyroads

> Verified game note.

![SDL Skyroads screenshot placeholder](sdl-skyroads-placeholder.svg)

## At a glance

- **Score:** 8.5/10
- **Model:** Claude Opus 4.8
- **Technology:** SDL2, C++17, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 750,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Substantial native reimplementation with deterministic simulation, renderer, audio, CLI and tests; data-gated at runtime.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/carlosbravoa/SDL-skyroads](https://github.com/carlosbravoa/SDL-skyroads)
- **Evidence:** [direct model evidence](https://github.com/carlosbravoa/SDL-skyroads/commit/49d34ddb72861befee7e6238aeefedd4dc3a6a27)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README describes a native C++17 SDL2 reimplementation of SkyRoads with deterministic ship simulation, menus, software renderer, HUD, audio and equivalence tests. Original game data is user-supplied, so classify it as data-gated rather than directly runnable from the repository. The cited commit shows a direct Claude Opus 4.8 trailer.

### Gameplay source

- [https://github.com/carlosbravoa/SDL-skyroads/blob/main/README.md](https://github.com/carlosbravoa/SDL-skyroads/blob/main/README.md)
- [https://github.com/carlosbravoa/SDL-skyroads/commit/49d34ddb72861befee7e6238aeefedd4dc3a6a27](https://github.com/carlosbravoa/SDL-skyroads/commit/49d34ddb72861befee7e6238aeefedd4dc3a6a27)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for SDL game Co-Authored-By Claude Opus; https://github.com/carlosbravoa/SDL-skyroads

[Back to the awesome list](../../README.md)
