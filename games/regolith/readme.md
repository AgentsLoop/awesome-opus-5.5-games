# Regolith

> Verified game note.

![Regolith screenshot placeholder](regolith-placeholder.svg)

## At a glance

- **Score:** 9.3/10
- **Model:** Claude Opus 4.8, Claude Opus 5
- **Technology:** Godot 4.7.1, GDScript, Native desktop, 2D isometric rendering, Colony builder, Simulation and economy
- **Estimated FP32 operations/s at 60 FPS:** 1,800,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Source-complete native colony builder with a documented economy loop, fixed-tick simulation, resource chains, prospecting, mining, colonists, hostile weather, save/load, releases, assets and extensive tests.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/mnorrsken/fringeworlds](https://github.com/mnorrsken/fringeworlds)
- **Evidence:** [direct model evidence](https://github.com/mnorrsken/fringeworlds/commit/429d51ccef4faf41245886ac90dcb1faf1242ee7)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README provides Godot 4.7.1 make run and make export commands for Regolith, a retro-styled isometric alien colony builder. It documents a real fixed-tick economy, building placement, power and production chains, prospecting and finite deposits, mining patches, colonists, housing, food, water and oxygen, storage, crafting, weather events, win/lose states, save/load, sound, release builds and a headless test suite. The repository contains main/menu scenes, pure simulation, rendering, UI, audio, assets and 193 tests. Its history contains exact Claude Opus 4.8 and Opus 5 trailers on economy, colonists, weather, mining and gameplay systems. Count the native game once.

### Gameplay source

- [https://github.com/mnorrsken/fringeworlds/blob/main/README.md](https://github.com/mnorrsken/fringeworlds/blob/main/README.md)
- [https://github.com/mnorrsken/fringeworlds/commit/429d51ccef4faf41245886ac90dcb1faf1242ee7](https://github.com/mnorrsken/fringeworlds/commit/429d51ccef4faf41245886ac90dcb1faf1242ee7)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Godot game Co-Authored-By Claude Opus 4.8; https://github.com/mnorrsken/fringeworlds

[Back to the awesome list](../../README.md)
