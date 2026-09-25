# Soliter

> Verified game note.

![Soliter screenshot placeholder](soliter-placeholder.svg)

## At a glance

- **Score:** 8.5/10
- **Model:** Claude Opus 4.6
- **Technology:** Defold, Lua, Native desktop, Mobile
- **Estimated FP32 operations/s at 60 FPS:** 350,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Real card-game project with board logic, UI, collections and extensive solver/replay tests.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/ErrorSoul/soliter](https://github.com/ErrorSoul/soliter)
- **Evidence:** [direct model evidence](https://github.com/ErrorSoul/soliter/commit/c04a4621b2c91fd877a02c26fe3e3039d0c24672)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The Defold project contains game.project, main collections, card game objects, tableau/free-cell/flower slots, game manager, tutorial, UI and solver tests. The source implements the solitaire board, moves, deal, win and replay state. The cited commit page shows a direct Claude Opus 4.6 trailer.

### Gameplay source

- [https://github.com/ErrorSoul/soliter/blob/master/main/Scripts/game_manager.script](https://github.com/ErrorSoul/soliter/blob/master/main/Scripts/game_manager.script)
- [https://github.com/ErrorSoul/soliter/commit/c04a4621b2c91fd877a02c26fe3e3039d0c24672](https://github.com/ErrorSoul/soliter/commit/c04a4621b2c91fd877a02c26fe3e3039d0c24672)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for Defold game Co-Authored-By Claude Opus; https://github.com/ErrorSoul/soliter

[Back to the awesome list](../../README.md)
