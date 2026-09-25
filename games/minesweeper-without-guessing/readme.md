# Minesweeper Without Guessing

> Verified game note.

![Minesweeper Without Guessing screenshot](https://raw.githubusercontent.com/swan4er/opus-100-projects/main/089-logic-minesweeper/preview.jpg)

## At a glance

- **Score:** 9.2/10
- **Screenshot rating:** 6.8/10 ([manually reviewed image](https://github.com/swan4er/opus-100-projects/blob/main/089-logic-minesweeper/preview.jpg)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Opus 5.5
- **Technology:** JavaScript, HTML, Canvas 2D, Browser
- **Estimated FP32 operations/s at 60 FPS:** 190,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Three neighborhood systems, difficulty selection, solver-backed no-guess boards, explainable hints, mobile input and loss analysis.
- **Verified:** 2026-09-24
- **Repository:** [https://github.com/swan4er/opus-100-projects](https://github.com/swan4er/opus-100-projects)
- **Evidence:** [repository-level model evidence](https://github.com/swan4er/opus-100-projects/blob/main/README.md)
- **Live demo:** [open demo](https://swan4er.github.io/opus-100-projects/089-logic-minesweeper/)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/swan4er/opus-100-projects/blob/main/089-logic-minesweeper/preview.jpg) — 📸 6.8/10 · manual visual review · Use this frame for the game-level score. Shows a playable scene; assess environmental detail, composition, and action readability. The frame is readable but has modest detail.

## Model attribution

Open the evidence link above. Evidence grade: **repository-level model evidence**.

## Source description

The collection README states that Claude Opus 5.5 assembled the projects in one autonomous run on 2026-09-23. Count 17 actual browser games: ten entries under “Games with real mechanics” plus seven playable projects under “Games with neural network” (apartment renovation, precinct RPG, rally, interrogation, mafia, character chess and barista shift). Exclude the game generator, open-ended city simulator, scene-making diorama and one-line cartoon. Each counted folder has its own README and index.html; all 17 public GitHub Pages URLs returned HTTP 200. A 200 response confirms availability only; it is not a fresh interactive playtest. Several games optionally use DeepSeek via BYOK at runtime; Claude Opus 5.5 is the documented creator, not the runtime dialogue model.

### Gameplay source

- [https://github.com/swan4er/opus-100-projects/blob/main/089-logic-minesweeper/index.html](https://github.com/swan4er/opus-100-projects/blob/main/089-logic-minesweeper/index.html)
- [https://github.com/swan4er/opus-100-projects/blob/main/README.md](https://github.com/swan4er/opus-100-projects/blob/main/README.md)

## Reverse-engineered prompt

Reconstruct this prompt from the verified source; it is not an original prompt transcript. See [prompt evidence](https://github.com/swan4er/opus-100-projects/blob/main/089-logic-minesweeper/README.md).

```text
Rebuild "Minesweeper Without Guessing" as a separate, playable browser game using JavaScript, HTML, Canvas 2D, Browser. Preserve the observed gameplay: A minesweeper puzzle with square, hexagonal and triangular neighborhoods across three difficulty levels. Reveal cells and flag mines; generate boards proven solvable before play, and provide a hint journal explaining safe/mine deductions.

Use Claude Opus 5.5 only as the documented creator attribution; some games call DeepSeek at runtime, which is separate from the build-model claim. Use a scripted/demo fallback when the optional model or network is unavailable.

Implement the source-observed start state, controls, rules, game-state transitions, progression and completion/failure feedback. Keep it self-contained and verify the behavior against https://github.com/swan4er/opus-100-projects/blob/main/089-logic-minesweeper/README.md and https://github.com/swan4er/opus-100-projects/blob/main/089-logic-minesweeper/index.html.
```

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 17
- **Units covered by this note:** 1
- **Discovery:** https://github.com/theolundqvist/frontier-games; https://github.com/swan4er/opus-100-projects

[Back to the awesome list](../../README.md)
