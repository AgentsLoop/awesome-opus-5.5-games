# Twilight Crossing — Neural RTS

> Top-list entry: **this week** (#15).

![Twilight Crossing — Neural RTS screenshot placeholder](twilight-crossing-neural-rts-placeholder.svg)

## At a glance

- **Score:** 8.0/10
- **Model:** Claude Opus 5.5
- **Technology:** Three.js, JavaScript, WebGL, Browser, JEV classifier, OpenRouter
- **Estimated FP32 operations/s at 60 FPS:** 1,100,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Source contains units, economic state, combat and win condition, but setup needs external assets and an API key; source-only quality estimate.
- **Verified:** 2026-09-24
- **Repository:** [https://github.com/MattiTynka/JEV-RTS](https://github.com/MattiTynka/JEV-RTS)
- **Evidence:** [creator-reported model evidence](https://www.reddit.com/r/ClaudeCode/comments/1wo8492/prompts_and_jevcontolled_rts_game_ported_and/)
- **Live demo:** [open demo](https://mattitynka.github.io/JEV-RTS/)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **creator-reported model evidence**.

## Source description

Creator reports porting the Unity RTS to the web with Opus 5.5. The source includes RTS simulation, worker gathering, attack, enemy factions, health and winner state. The deployed page returned HTTP 200. Playing with visuals requires downloading the separate original StudioIgor asset pack; neural commands require a user-provided OpenRouter key and may incur cost. No interactive playtest performed.

### Gameplay source

- [https://github.com/MattiTynka/JEV-RTS/blob/main/index.html](https://github.com/MattiTynka/JEV-RTS/blob/main/index.html)
- [https://www.reddit.com/r/ClaudeCode/comments/1wo8492/prompts_and_jevcontolled_rts_game_ported_and/](https://www.reddit.com/r/ClaudeCode/comments/1wo8492/prompts_and_jevcontolled_rts_game_ported_and/)

## Reverse-engineered prompt

Reconstruct this prompt from the verified source; it is not an original prompt transcript. See [prompt evidence](https://github.com/MattiTynka/JEV-RTS/blob/main/v/1b428e053cf5/src/sim/world.js).

```text
Port a playable real-time strategy game to the browser with Three.js. Preserve workers, resource gathering, faction combat, orders, and victory state. Add optional JEV-classifier unit decisions through a user-provided OpenRouter key and load art from a local asset pack. This is reconstructed from source and creator report, not the original prompt.
```

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** Reddit creator post 2026-09-23; https://www.reddit.com/r/ClaudeCode/comments/1wo8492/prompts_and_jevcontolled_rts_game_ported_and/; https://github.com/MattiTynka/JEV-RTS

[Back to the awesome list](../../README.md)
