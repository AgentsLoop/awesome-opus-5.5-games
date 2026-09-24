# Alchemy Automaton

> Verified game note.

![Alchemy Automaton screenshot](https://raw.githubusercontent.com/swan4er/opus-100-projects/main/109-alchemy-automaton/preview.jpg)

## At a glance

- **Score:** 9.2/10
- **Model:** Claude Opus 5.5
- **Technology:** JavaScript, HTML, Canvas 2D, Browser
- **Estimated FP32 operations/s at 60 FPS:** 130,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Eight tasks, an instruction-programming system, simulation/step controls, collision validation, error feedback and a working reference solution.
- **Verified:** 2026-09-24
- **Repository:** [https://github.com/swan4er/opus-100-projects](https://github.com/swan4er/opus-100-projects)
- **Evidence:** [repository-level model evidence](https://github.com/swan4er/opus-100-projects/blob/main/README.md)
- **Live demo:** [open demo](https://swan4er.github.io/opus-100-projects/109-alchemy-automaton/)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/swan4er/opus-100-projects/blob/main/109-alchemy-automaton/preview.jpg)

## Model attribution

Open the evidence link above. Evidence grade: **repository-level model evidence**.

## Source description

The collection README states that Claude Opus 5.5 assembled the projects in one autonomous run on 2026-09-23. Count 17 actual browser games: ten entries under “Games with real mechanics” plus seven playable projects under “Games with neural network” (apartment renovation, precinct RPG, rally, interrogation, mafia, character chess and barista shift). Exclude the game generator, open-ended city simulator, scene-making diorama and one-line cartoon. Each counted folder has its own README and index.html; all 17 public GitHub Pages URLs returned HTTP 200. A 200 response confirms availability only; it is not a fresh interactive playtest. Several games optionally use DeepSeek via BYOK at runtime; Claude Opus 5.5 is the documented creator, not the runtime dialogue model.

### Gameplay source

- [https://github.com/swan4er/opus-100-projects/blob/main/109-alchemy-automaton/index.html](https://github.com/swan4er/opus-100-projects/blob/main/109-alchemy-automaton/index.html)
- [https://github.com/swan4er/opus-100-projects/blob/main/README.md](https://github.com/swan4er/opus-100-projects/blob/main/README.md)

## Reverse-engineered prompt

Reconstruct this prompt from the verified source; it is not an original prompt transcript. See [prompt evidence](https://github.com/swan4er/opus-100-projects/blob/main/109-alchemy-automaton/README.md).

```text
Rebuild "Alchemy Automaton" as a separate, playable browser game using JavaScript, HTML, Canvas 2D, Browser. Preserve the observed gameplay: A programmable logic puzzle with eight molecular-assembly tasks. Place and rotate mechanical arms and atoms on a hex grid, program repeatable pickup/drop/rotation instructions, then run or step the automaton and correct collisions or invalid outputs.

Use Claude Opus 5.5 only as the documented creator attribution; some games call DeepSeek at runtime, which is separate from the build-model claim. Use a scripted/demo fallback when the optional model or network is unavailable.

Implement the source-observed start state, controls, rules, game-state transitions, progression and completion/failure feedback. Keep it self-contained and verify the behavior against https://github.com/swan4er/opus-100-projects/blob/main/109-alchemy-automaton/README.md and https://github.com/swan4er/opus-100-projects/blob/main/109-alchemy-automaton/index.html.
```

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 17
- **Units covered by this note:** 1
- **Discovery:** https://github.com/theolundqvist/frontier-games; https://github.com/swan4er/opus-100-projects

[Back to the awesome list](../../README.md)
