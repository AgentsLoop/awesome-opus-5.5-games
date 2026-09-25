# Heroes Clone

> Verified game note.

![Heroes Clone screenshot placeholder](heroes-clone-placeholder.svg)

## At a glance

- **Score:** 9.1/10
- **Model:** Claude Opus 4.7
- **Technology:** Phaser 3, TypeScript, Vite, Browser
- **Estimated FP32 operations/s at 60 FPS:** 300,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository documents a complete game loop with map and combat scenes, provides 54 Playwright tests and direct source evidence, and has exact Opus attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/TamirNator/heroes-clone](https://github.com/TamirNator/heroes-clone)
- **Evidence:** [direct model evidence](https://github.com/TamirNator/heroes-clone/commit/41d39785dd53ca890229ad420bf1db840d88e7bf)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README describes a Heroes 3-style turn-based hex strategy game with map exploration, pathfinding, varied enemies, multi-stack combat, pickups, persistence and a win condition. MapScene and CombatScene implement the two playable phases; world.ts provides game-world data. The cited commit includes an exact Co-Authored-By: Claude Opus 4.7 trailer. No public live demo URL was found in the repository documentation.

### Gameplay source

- [https://github.com/TamirNator/heroes-clone/blob/41d39785dd53ca890229ad420bf1db840d88e7bf/src/main.ts](https://github.com/TamirNator/heroes-clone/blob/41d39785dd53ca890229ad420bf1db840d88e7bf/src/main.ts)
- [https://github.com/TamirNator/heroes-clone/commit/41d39785dd53ca890229ad420bf1db840d88e7bf](https://github.com/TamirNator/heroes-clone/commit/41d39785dd53ca890229ad420bf1db840d88e7bf)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Phaser game Co-Authored-By Claude Opus; https://github.com/TamirNator/heroes-clone

[Back to the awesome list](../../README.md)
