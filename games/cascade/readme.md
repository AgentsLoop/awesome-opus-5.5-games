# Cascade

> Verified game note.

![Cascade screenshot placeholder](cascade-placeholder.svg)

## At a glance

- **Score:** 8.5/10
- **Model:** Claude Opus 4.5
- **Technology:** Stride, C#, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 1,800,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository has a runnable native Stride game project, documented controls, explicit action-game framing and source for rendering, physics and input; gameplay is still marked early development.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/mcarthey/CascadeGame](https://github.com/mcarthey/CascadeGame)
- **Evidence:** [direct model evidence](https://github.com/mcarthey/CascadeGame/commit/de605f27a1e1ab871573c68237071b38ca771630)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README identifies Cascade as a 2D physics-based action game and documents a runnable Stride game project with keyboard and mouse controls. CascadeApp configures the Stride runtime, while MaterialSprayController and the particle systems implement interactive material spraying. The cited Claude-authored commit improves the playable visual feedback; nearby source commits include a direct Claude Opus 4.5 trailer.

### Gameplay source

- [https://github.com/mcarthey/CascadeGame/blob/de605f27a1e1ab871573c68237071b38ca771630/README.md](https://github.com/mcarthey/CascadeGame/blob/de605f27a1e1ab871573c68237071b38ca771630/README.md)
- [https://github.com/mcarthey/CascadeGame/commit/de605f27a1e1ab871573c68237071b38ca771630](https://github.com/mcarthey/CascadeGame/commit/de605f27a1e1ab871573c68237071b38ca771630)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for Stride game Co-Authored-By Claude Opus; https://github.com/mcarthey/CascadeGame

[Back to the awesome list](../../README.md)
