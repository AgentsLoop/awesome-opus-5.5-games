# Deeper

> Verified game note.

![Deeper screenshot](https://raw.githubusercontent.com/swan4er/opus-100-projects/main/060-deeper-roguelike/preview.jpg)

## At a glance

- **Score:** 9.2/10
- **Model:** Claude Opus 5.5
- **Technology:** JavaScript, HTML, Canvas 2D, Browser
- **Estimated FP32 operations/s at 60 FPS:** 210,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Ten-floor progression, turn-based combat, distinct enemy behavior, consumable inventory, final boss objective and run-aware death epilogue.
- **Verified:** 2026-09-24
- **Repository:** [https://github.com/swan4er/opus-100-projects](https://github.com/swan4er/opus-100-projects)
- **Evidence:** [repository-level model evidence](https://github.com/swan4er/opus-100-projects/blob/main/README.md)
- **Live demo:** [open demo](https://swan4er.github.io/opus-100-projects/060-deeper-roguelike/)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/swan4er/opus-100-projects/blob/main/060-deeper-roguelike/preview.jpg)

## Model attribution

Open the evidence link above. Evidence grade: **repository-level model evidence**.

## Source description

The collection README states that Claude Opus 5.5 assembled the projects in one autonomous run on 2026-09-23. Count 17 actual browser games: ten entries under “Games with real mechanics” plus seven playable projects under “Games with neural network” (apartment renovation, precinct RPG, rally, interrogation, mafia, character chess and barista shift). Exclude the game generator, open-ended city simulator, scene-making diorama and one-line cartoon. Each counted folder has its own README and index.html; all 17 public GitHub Pages URLs returned HTTP 200. A 200 response confirms availability only; it is not a fresh interactive playtest. Several games optionally use DeepSeek via BYOK at runtime; Claude Opus 5.5 is the documented creator, not the runtime dialogue model.

### Gameplay source

- [https://github.com/swan4er/opus-100-projects/blob/main/060-deeper-roguelike/index.html](https://github.com/swan4er/opus-100-projects/blob/main/060-deeper-roguelike/index.html)
- [https://github.com/swan4er/opus-100-projects/blob/main/README.md](https://github.com/swan4er/opus-100-projects/blob/main/README.md)

## Reverse-engineered prompt

Reconstruct this prompt from the verified source; it is not an original prompt transcript. See [prompt evidence](https://github.com/swan4er/opus-100-projects/blob/main/060-deeper-roguelike/README.md).

```text
Rebuild "Deeper" as a separate, playable browser game using JavaScript, HTML, Canvas 2D, Browser. Preserve the observed gameplay: A ten-floor roguelike dungeon. Explore turn by turn, fight enemies, manage potions and scrolls, descend through stairs, defeat the Depth Guardian and retrieve the Heart of Depths; generate an epitaph from the run after death.

Use Claude Opus 5.5 only as the documented creator attribution; some games call DeepSeek at runtime, which is separate from the build-model claim. Use a scripted/demo fallback when the optional model or network is unavailable.

Implement the source-observed start state, controls, rules, game-state transitions, progression and completion/failure feedback. Keep it self-contained and verify the behavior against https://github.com/swan4er/opus-100-projects/blob/main/060-deeper-roguelike/README.md and https://github.com/swan4er/opus-100-projects/blob/main/060-deeper-roguelike/index.html.
```

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 17
- **Units covered by this note:** 1
- **Discovery:** https://github.com/theolundqvist/frontier-games; https://github.com/swan4er/opus-100-projects

[Back to the awesome list](../../README.md)
