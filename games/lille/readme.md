# Lille

> Verified game note.

![Lille screenshot placeholder](lille-placeholder.svg)

## At a glance

- **Score:** 8.4/10
- **Model:** Claude Fable 5, Claude Opus 4.5
- **Technology:** Bevy 0.17, Rust, ECS, Real-time strategy, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 2,400,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Runnable native RTS prototype with a clear setting, map/world state, player and NPC spawning, optional rendering, camera presentation, tests and repeated exact Opus/Fable implementation commits; scope remains Phase 1.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/leynos/lille](https://github.com/leynos/lille)
- **Evidence:** [direct model evidence](https://github.com/leynos/lille/commit/8f92e6e1a3626d09e73491b5efc8f085a559f24d)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The repository README describes Lille as a runnable real-time strategy prototype with a dataflow-driven game loop and optional Bevy rendering. It contains map loading, camera, player and NPC spawning, game-world state, static entities, tests and cargo-run instructions. The repository history contains exact Claude Opus 4.5 gameplay/presentation commits and Claude Fable 5 gameplay/rendering commits. Count the native Bevy strategy prototype once, with its early Phase 1 scope reflected in the quality score.

### Gameplay source

- [https://github.com/leynos/lille/blob/main/README.md](https://github.com/leynos/lille/blob/main/README.md)
- [https://github.com/leynos/lille/commit/8f92e6e1a3626d09e73491b5efc8f085a559f24d](https://github.com/leynos/lille/commit/8f92e6e1a3626d09e73491b5efc8f085a559f24d)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Bevy game Co-Authored-By Claude Opus; https://github.com/leynos/lille

[Back to the awesome list](../../README.md)
