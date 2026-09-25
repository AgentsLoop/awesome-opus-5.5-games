# Bong — 末法残土

> Top-list entry: **this month** (#6).

![Bong — 末法残土 screenshot placeholder](bong-placeholder.svg)

## At a glance

- **Score:** 9.5/10
- **Model:** Claude Opus 5
- **Technology:** Minecraft, Rust, Valence, Bevy 0.14 ECS, Fabric, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 5,000,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Large native Minecraft game with a real client/server runtime, many gameplay subsystems, dedicated simulation code, tests and direct Opus 5 attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/Kizunad/Bong](https://github.com/Kizunad/Bong)
- **Evidence:** [direct model evidence](https://github.com/Kizunad/Bong/commit/3ec765b4138f5d82479ef3eaf9c8b5009d2068d3)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The public repository describes an AI-native Xianxia survival sandbox running on Minecraft. It provides a Rust Valence/Bevy 0.14 server, a Fabric client, cultivation, combat, production, economy, NPC, spirit-qi physics, HUD, skills, animation, particles and a server/client build path. The cited commit carries a direct Claude Opus 5 model trailer. Count the Minecraft game as one native game, not as a separate server and client.

### Gameplay source

- [https://github.com/Kizunad/Bong/blob/main/server/src/main.rs](https://github.com/Kizunad/Bong/blob/main/server/src/main.rs)
- [https://github.com/Kizunad/Bong/commit/3ec765b4138f5d82479ef3eaf9c8b5009d2068d3](https://github.com/Kizunad/Bong/commit/3ec765b4138f5d82479ef3eaf9c8b5009d2068d3)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Bevy game Co-Authored-By Claude Fable; https://github.com/Kizunad/Bong

[Back to the awesome list](../../README.md)
