# Scrapwall

> Verified game note.

![Scrapwall screenshot](https://raw.githubusercontent.com/ben-gy/scrapwall/main/public/og.png)

## At a glance

- **Score:** 9.3/10
- **Screenshot rating:** 3.0/10 ([manually reviewed image](https://github.com/ben-gy/scrapwall/blob/main/public/og.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Opus 4.8
- **Technology:** TypeScript, Vite, Canvas 2D, Weighted-Dijkstra pathfinding, WebRTC, Trystero, Browser multiplayer
- **Estimated FP32 operations/s at 60 FPS:** 780,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Complete documented defense loop with economy, pathfinding, three modes, co-op networking, host transfer, rematch, live demo, screenshot asset, balance simulation, tests and exact Opus attribution on the initial gameplay commit.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/ben-gy/scrapwall](https://github.com/ben-gy/scrapwall)
- **Evidence:** [direct model evidence](https://github.com/ben-gy/scrapwall/commit/1d1fcf4436d75948caf5ff03970f102d4035ed58)
- **Live demo:** [open demo](https://scrapwall.benrichardson.dev)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/ben-gy/scrapwall/blob/main/public/og.png) — 📸 3.0/10 · manual visual review · Use this frame for the game-level score. Shows a playable scene; assess environmental detail, composition, and action readability. The frame provides limited visual evidence.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README documents Scrapwall as a playable co-op grid base-defense game. It includes wall, gun, spikes, fix and clear tools, salvage harvesting, shared scrap/ammo, weighted-Dijkstra enemy pathing, three board modes, a Core-loss end condition, up to four-player host-authoritative WebRTC co-op, host transfer, rematch, procedural audio, GitHub Pages hosting and tests for rules, balance, determinism, networking and takeover. The source contains the game, networked game, renderer and modes; the repository includes an Open Graph game image. The cited initial gameplay commit contains an exact Co-Authored-By: Claude Opus 4.8 trailer. Count the base-defense game once; exclude shared engine modules.

### Gameplay source

- [https://github.com/ben-gy/scrapwall#readme](https://github.com/ben-gy/scrapwall#readme)
- [https://github.com/ben-gy/scrapwall/commit/1d1fcf4436d75948caf5ff03970f102d4035ed58](https://github.com/ben-gy/scrapwall/commit/1d1fcf4436d75948caf5ff03970f102d4035ed58)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** Reverse-link from ben-gy/gh-game-factory index; GitHub commit search for Co-Authored-By Claude Opus game; https://github.com/ben-gy/scrapwall

[Back to the awesome list](../../README.md)
