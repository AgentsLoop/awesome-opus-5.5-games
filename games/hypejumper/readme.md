# HypeJumper

> Verified game note.

![HypeJumper screenshot placeholder](hypejumper-placeholder.svg)

## At a glance

- **Score:** 8.6/10
- **Model:** Claude Opus 4.8
- **Technology:** MonoGame, .NET 10, C#, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 650,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Playable platformer source with player/enemy/hazard systems, MonoGame DesktopGL layer, parity-focused architecture and tests, plus direct Opus 4.8 attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/parkjongbin0520-spec/hypeJumper](https://github.com/parkjongbin0520-spec/hypeJumper)
- **Evidence:** [direct model evidence](https://github.com/parkjongbin0520-spec/hypeJumper/commit/c0ce3d1e66744d148f1fa1c81155dbfe90f73d18)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The cited commit ports a Pygame prototype to a C#/.NET 10 MonoGame solution and preserves movement feel. Source includes core player, enemy, hazards, jump pads, moving platforms, springs, triggers, input buffer, tile map, scene, DesktopGL platform layer and xUnit tests. The commit page shows a direct Claude Opus 4.8 trailer.

### Gameplay source

- [https://github.com/parkjongbin0520-spec/hypeJumper/blob/main/csharp/HypeJumper.Core/Player.cs](https://github.com/parkjongbin0520-spec/hypeJumper/blob/main/csharp/HypeJumper.Core/Player.cs)
- [https://github.com/parkjongbin0520-spec/hypeJumper/commit/c0ce3d1e66744d148f1fa1c81155dbfe90f73d18](https://github.com/parkjongbin0520-spec/hypeJumper/commit/c0ce3d1e66744d148f1fa1c81155dbfe90f73d18)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for MonoGame game Co-Authored-By Claude Opus; https://github.com/parkjongbin0520-spec/hypeJumper

[Back to the awesome list](../../README.md)
