# Cờ ca rô VN

> Verified game note.

![Cờ ca rô VN screenshot placeholder](co-ca-ro-vn-placeholder.svg)

## At a glance

- **Score:** 8.0/10
- **Model:** Claude Opus 4.7
- **Technology:** Pygame, Python, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 450,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository contains a runnable, documented two-player Pygame game with separated board/rules/UI modules and tests, plus direct Claude Opus attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/pMplayerI/cocarovn](https://github.com/pMplayerI/cocarovn)
- **Evidence:** [direct model evidence](https://github.com/pMplayerI/cocarovn/commit/adea78a48201bd4c77efa6e0fc6741fa80da14c7)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The Vietnamese README identifies a two-player Pygame Gomoku game, documents installation and the `python -m caro` run command, and describes five-in-a-row rules, camera movement, restart and game-over flow. The repository contains the package entrypoint, board model, game controller, rules, UI and tests. The initial commit includes a direct Claude Opus 4.7 trailer.

### Gameplay source

- [https://github.com/pMplayerI/cocarovn/blob/adea78a48201bd4c77efa6e0fc6741fa80da14c7/src/caro/__main__.py](https://github.com/pMplayerI/cocarovn/blob/adea78a48201bd4c77efa6e0fc6741fa80da14c7/src/caro/__main__.py)
- [https://github.com/pMplayerI/cocarovn/commit/adea78a48201bd4c77efa6e0fc6741fa80da14c7](https://github.com/pMplayerI/cocarovn/commit/adea78a48201bd4c77efa6e0fc6741fa80da14c7)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for pygame game Co-Authored-By Claude Opus; https://github.com/pMplayerI/cocarovn

[Back to the awesome list](../../README.md)
