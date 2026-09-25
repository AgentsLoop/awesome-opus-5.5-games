# Save the Balloons

> Verified game note.

![Save the Balloons screenshot placeholder](save-the-balloons-placeholder.svg)

## At a glance

- **Score:** 8.9/10
- **Model:** Claude Opus 4.8
- **Technology:** JavaScript, React, Vite, Tailwind CSS, Framer Motion, Web Audio API, Browser/offline
- **Estimated FP32 operations/s at 60 FPS:** 280,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Three clearly separated playable games with a complete lobby-to-round loop, themes, difficulty levels, local leaderboard, persistent state, offline build, shared result flow and exact Opus attribution on gameplay UI.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/shyamathreye/devis-lab](https://github.com/shyamathreye/devis-lab)
- **Evidence:** [direct model evidence](https://github.com/shyamathreye/devis-lab/commit/c797194e981a44bab5bd85cf21b5e0ba0d73bddf)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README documents three games that run entirely in the browser: Save the Balloons, a word-guessing hangman game; Mix-Up Magic, a letter-tile unscramble game; and Tap the Critter, a timed whack-a-mole reflex game. The source has separate game components, lobby, theme and difficulty pickers, round results, scores, local leaderboard, persistent player state, synthesized sound, speech, offline operation and Vite build scripts. The cited end-game result commit updates the common gameplay result surface and contains an exact Co-Authored-By: Claude Opus 4.8 trailer. Count the three independently playable games once each; do not count themes, difficulties or shared UI as games.

### Gameplay source

- [https://github.com/shyamathreye/devis-lab#readme](https://github.com/shyamathreye/devis-lab#readme)
- [https://github.com/shyamathreye/devis-lab/commit/c797194e981a44bab5bd85cf21b5e0ba0d73bddf](https://github.com/shyamathreye/devis-lab/commit/c797194e981a44bab5bd85cf21b5e0ba0d73bddf)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 3
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for Co-Authored-By Claude Opus game; https://github.com/shyamathreye/devis-lab

[Back to the awesome list](../../README.md)
