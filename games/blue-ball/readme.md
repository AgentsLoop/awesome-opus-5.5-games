# Blue Ball

> Verified game note.

![Blue Ball screenshot placeholder](blue-ball-placeholder.svg)

## At a glance

- **Score:** 8.9/10
- **Model:** Claude Opus 4.8
- **Technology:** Python, PyGame, Pymunk, Native desktop, 2D physics platformer, Genetic-algorithm AI
- **Estimated FP32 operations/s at 60 FPS:** 650,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Source-complete native 2D platformer with multiple play modes, physics levels, hazards, checkpoints, race ghosts, AI training, audio, deterministic world logic and tests.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/daviddgonzalez/BlueBall](https://github.com/daviddgonzalez/BlueBall)
- **Evidence:** [direct model evidence](https://github.com/daviddgonzalez/BlueBall/commit/74576376b357ce2d12eafa904b3d8fcf04f7511f)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README provides a direct python main.py play command for a PyGame and Pymunk 2D physics platformer. The repository contains menu, mode-select, play, playback and training scenes; a player entity; a physics world; dozens of level chunks and authored levels; AI ghost/race mode; procedural and genetic-algorithm training; audio; and a test suite. The inspected history contains exact Claude Opus 4.8 trailers on audio and AI/game feature work. Count it once as a native desktop game.

### Gameplay source

- [https://github.com/daviddgonzalez/BlueBall/blob/master/README.md](https://github.com/daviddgonzalez/BlueBall/blob/master/README.md)
- [https://github.com/daviddgonzalez/BlueBall/commit/74576376b357ce2d12eafa904b3d8fcf04f7511f](https://github.com/daviddgonzalez/BlueBall/commit/74576376b357ce2d12eafa904b3d8fcf04f7511f)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Pygame game Co-Authored-By Claude Opus; https://github.com/daviddgonzalez/BlueBall

[Back to the awesome list](../../README.md)
