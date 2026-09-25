# Idle ARPG

> Verified game note.

![Idle ARPG screenshot placeholder](idle-arpg-placeholder.svg)

## At a glance

- **Score:** 9.2/10
- **Model:** Claude Opus 5
- **Technology:** Unity, C#, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 4,500,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Substantial Unity ARPG source with a separated tested simulation core, dungeon and loot systems, native client integration, a large test suite and direct Opus 5 attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/nodeJayS/idle-game](https://github.com/nodeJayS/idle-game)
- **Evidence:** [direct model evidence](https://github.com/nodeJayS/idle-game/commit/4fd9bb3051c6acf83f406e201f3c784a5585ee53)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The public repository describes a low-poly 3D idle ARPG with a three-hero party, auto-cleared dungeons, monsters, loot, equipment, progression and offline accrual. The Unity client contains Bootstrap, CombatView and DungeonRenderer, while the engine-independent GameCore contains combat, dungeon, inventory, loot, progression, save and test systems. The cited commit includes a direct Claude Opus 5 trailer and verifies the source in Play. Count the repository as one game.

### Gameplay source

- [https://github.com/nodeJayS/idle-game/blob/main/unity/Assets/Game/Bootstrap.cs](https://github.com/nodeJayS/idle-game/blob/main/unity/Assets/Game/Bootstrap.cs)
- [https://github.com/nodeJayS/idle-game/commit/4fd9bb3051c6acf83f406e201f3c784a5585ee53](https://github.com/nodeJayS/idle-game/commit/4fd9bb3051c6acf83f406e201f3c784a5585ee53)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Go game Co-Authored-By Claude Fable; https://github.com/nodeJayS/idle-game

[Back to the awesome list](../../README.md)
