# Surgeon Simulator

> Verified game note.

![Surgeon Simulator screenshot placeholder](surgeon-simulator-placeholder.svg)

## At a glance

- **Score:** 9.1/10
- **Model:** Claude Opus 5
- **Technology:** Unreal Engine 5, Three.js, WebGL, C++, Native engine port
- **Estimated FP32 operations/s at 60 FPS:** 2,100,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Complete playable game, shared rules, Unreal gameplay port, documented controls and scripted verification with direct Opus 5 attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/brenyade/SurgeonSimulator](https://github.com/brenyade/SurgeonSimulator)
- **Evidence:** [direct model evidence](https://github.com/brenyade/SurgeonSimulator/commit/847e22f6fc19ddcc3a58a262d5b0abe0f3ff7928)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The repository README documents a complete playable WebGL surgery game and an Unreal Engine 5 C++ port sharing procedure data. The Unreal source contains surgeon character, patient, surgical tools, wounds, vitals, hand interaction, game mode and procedure systems. The cited commit reports a playable WebGL build, a scripted pass covering grab/use/hold/drop and direct Claude Opus 5 attribution. Count one game, not two builds.

### Gameplay source

- [https://github.com/brenyade/SurgeonSimulator/blob/claude/surgeon-simulator-3d-game-5yzifc/README.md](https://github.com/brenyade/SurgeonSimulator/blob/claude/surgeon-simulator-3d-game-5yzifc/README.md)
- [https://github.com/brenyade/SurgeonSimulator/commit/847e22f6fc19ddcc3a58a262d5b0abe0f3ff7928](https://github.com/brenyade/SurgeonSimulator/commit/847e22f6fc19ddcc3a58a262d5b0abe0f3ff7928)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for Unreal playable game Co-Authored-By Claude Opus; https://github.com/brenyade/SurgeonSimulator

[Back to the awesome list](../../README.md)
