# Dot Grid

> Verified game note.

![Dot Grid screenshot placeholder](dot-grid-placeholder.svg)

## At a glance

- **Score:** 9.0/10
- **Model:** Claude Fable 5
- **Technology:** Python, PyGame, NumPy, Native desktop, Territory strategy game, MCTS and neural-network AI
- **Estimated FP32 operations/s at 60 FPS:** 1,200,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Source-complete native strategy game with a clear ruleset, many play modes, MCTS and learned AI, training/replay systems, scalable boards, persistence and extensive tests.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/honzaves/dotgame](https://github.com/honzaves/dotgame)
- **Evidence:** [direct model evidence](https://github.com/honzaves/dotgame/commit/8d710de0701a2394c6f0081e1659086e1c469447)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README provides a direct python dotgame.py command for a two-player territory game. It documents dot placement, connected arcs, enclosed squares and triangles, encirclement, win conditions, zoom/pan, pause, replay stepping, human-vs-human and many AI modes. The source contains PyGame drawing, state, territory detection, MCTS, neural-network and PyTorch players, training, replay and tests. The history contains exact Claude Fable 5 trailers on AI gameplay, training and replay fixes. Count it once as a native desktop game.

### Gameplay source

- [https://github.com/honzaves/dotgame/blob/main/README.md](https://github.com/honzaves/dotgame/blob/main/README.md)
- [https://github.com/honzaves/dotgame/commit/8d710de0701a2394c6f0081e1659086e1c469447](https://github.com/honzaves/dotgame/commit/8d710de0701a2394c6f0081e1659086e1c469447)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Pygame game Co-Authored-By Claude Fable; https://github.com/honzaves/dotgame

[Back to the awesome list](../../README.md)
