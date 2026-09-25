# Zooma

> Verified game note.

![Zooma screenshot placeholder](zooma-placeholder.svg)

## At a glance

- **Score:** 8.5/10
- **Model:** Claude Opus 5
- **Technology:** Godot, C#, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 3,200,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository contains a concrete 3D Zuma-style game scene with native C# systems, models and round flow; the repository also contains a separate AI addon that is excluded from the count.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/Math-Man/zuma3d](https://github.com/Math-Man/zuma3d)
- **Evidence:** [direct model evidence](https://github.com/Math-Man/zuma3d/commit/e1105a16e8756a32088ebc8208f6f5a3d1ae33e9)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The Godot project configuration names the game Zooma and points to Scenes/level.tscn. The scene contains a 3D turret, ball queue, chain controller, shot, round controller, room and HUD; the Game directory contains C# aim, chain, ball, turret and projectile systems. The cited commit includes a direct Claude Opus 5 trailer. Exclude the bundled Godot AI addon from the game count.

### Gameplay source

- [https://github.com/Math-Man/zuma3d/blob/e1105a16e8756a32088ebc8208f6f5a3d1ae33e9/project.godot](https://github.com/Math-Man/zuma3d/blob/e1105a16e8756a32088ebc8208f6f5a3d1ae33e9/project.godot)
- [https://github.com/Math-Man/zuma3d/commit/e1105a16e8756a32088ebc8208f6f5a3d1ae33e9](https://github.com/Math-Man/zuma3d/commit/e1105a16e8756a32088ebc8208f6f5a3d1ae33e9)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for Godot game Co-Authored-By Claude Opus; https://github.com/Math-Man/zuma3d

[Back to the awesome list](../../README.md)
