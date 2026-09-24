# Pig

> Verified game note.

![Pig screenshot placeholder](pig-placeholder.svg)

## At a glance

- **Score:** 9.6/10
- **Model:** Claude Fable 5
- **Technology:** Rust, WebAssembly, TypeScript, React, SVG, Browser arcade
- **Estimated FP32 operations/s at 60 FPS:** 1,800,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Live, source-complete arcade with 67 separately registered and playable game definitions, Rust engines, tests, custom boards, AI difficulty, mobile UI and exact Fable gameplay commits. Individual games are small board-game experiences rather than large 3D productions.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/patricker/treant](https://github.com/patricker/treant)
- **Evidence:** [direct model evidence](https://github.com/patricker/treant/commit/68aff75c3204e0b362625e4fb72a01f72cd13fad)
- **Live demo:** [open demo](https://mcts.dev/arcade/)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The repository contains a real browser arcade, not only an MCTS library: docs/src/components/arcade/games/index.ts currently registers 68 play surfaces and docs/src/components/arcade/games contains a matching game component for each registered definition. treant-wasm/src contains the corresponding Rust game engines, with tests and calibration. GAME-IDEAS.md describes an older 50-visible-plus-17-family-child roadmap count of 67, while the current source index has 68 registered definitions; use the source index as the current count. The live arcade returned HTTP 200. The inspected history contains exact Claude Fable 5 gameplay commits, including the Vanguard, Surakarta, Draughts, World Threes and other game implementations. Count each current registered definition once; this is one repository record containing 68 verified game units.

### Gameplay source

- [https://github.com/patricker/treant/blob/master/docs/src/components/arcade/games/pig.tsx](https://github.com/patricker/treant/blob/master/docs/src/components/arcade/games/pig.tsx)
- [https://github.com/patricker/treant/commit/68aff75c3204e0b362625e4fb72a01f72cd13fad](https://github.com/patricker/treant/commit/68aff75c3204e0b362625e4fb72a01f72cd13fad)

## Verification notes

- **Status:** verified_live_and_source
- **Counted units in repository:** 68
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Odin game Co-Authored-By Claude Fable; https://github.com/patricker/treant

[Back to the awesome list](../../README.md)
