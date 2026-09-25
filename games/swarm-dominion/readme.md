# Swarm Dominion

> Verified game note.

![Swarm Dominion screenshot placeholder](swarm-dominion-placeholder.svg)

## At a glance

- **Score:** 8.7/10
- **Model:** Claude Opus 5, Claude Opus 4.8
- **Technology:** Godot 4.3, GDScript, Native desktop, 2D real-time strategy, Unit AI, GUT tests
- **Estimated FP32 operations/s at 60 FPS:** 900,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Source-complete native RTS prototype with a clear match loop, unit selection and commands, combat, harvesting, progression, resources, scenes, documentation and extensive tests; roadmap-only features are excluded.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/johnburbridge/swarm-dominion](https://github.com/johnburbridge/swarm-dominion)
- **Evidence:** [direct model evidence](https://github.com/johnburbridge/swarm-dominion/commit/940aa6a0e83af2743e971513a8de16309cf3e110)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README provides a Godot project with a main scene, open-source 5–15 minute RTS design, unit progression, biomass resource gathering, control points, fog of war, selection, group commands, attack-move and unit combat. The repository contains Godot scenes for the main game, Mother and Drone units, biomass nodes, HUD and health bars, GDScript unit/resource systems, map data and a large GUT test suite. The inspected history contains exact Claude Opus 5 and 4.8 trailers on commands, unit behavior, rally points, controls and gameplay systems. Multiplayer and later RTS features are marked roadmap items; count the current playable RTS prototype once.

### Gameplay source

- [https://github.com/johnburbridge/swarm-dominion/blob/main/README.md](https://github.com/johnburbridge/swarm-dominion/blob/main/README.md)
- [https://github.com/johnburbridge/swarm-dominion/commit/940aa6a0e83af2743e971513a8de16309cf3e110](https://github.com/johnburbridge/swarm-dominion/commit/940aa6a0e83af2743e971513a8de16309cf3e110)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Godot game Co-Authored-By Claude Opus 4.8; https://github.com/johnburbridge/swarm-dominion

[Back to the awesome list](../../README.md)
