# Arx II

> Verified game note.

![Arx II screenshot placeholder](arx-ii-placeholder.svg)

## At a glance

- **Score:** 9.2/10
- **Model:** Claude Opus 4.8
- **Technology:** Evennia, Python, Django, React, TypeScript, WebSocket, Telnet MUD, Server-hosted game
- **Estimated FP32 operations/s at 60 FPS:** 780,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Large source-complete MUD project with a runnable Evennia server, React game client, scenes, battles, player actions, combat systems, entry and smoke tests, and exact Opus attribution on player-action implementation.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/Arx-Game/arxii](https://github.com/Arx-Game/arxii)
- **Evidence:** [direct model evidence](https://github.com/Arx-Game/arxii/commit/b7eb4c972b962a6c8cd75ed36a7c70b8f8ac8f4a)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README identifies Arx II as the sequel to Arx: After the Reckoning, built on the Evennia framework, with commands to build the React frontend and start the Evennia server. The repository includes the /game client route, scene and battle pages, player-action and combat UI, WebSocket integration, entry-flow tests and combat smoke tests. The cited combat-actions commit adds player-facing flee, cover, interpose, ready, combo, join and leave actions, telnet combat commands, web dispatch through the shared action seam and end-to-end coverage; it contains exact Co-Authored-By: Claude Opus 4.8 trailers. Count the current Arx II MUD once. No public live demo was claimed.

### Gameplay source

- [https://github.com/Arx-Game/arxii#readme](https://github.com/Arx-Game/arxii#readme)
- [https://github.com/Arx-Game/arxii/commit/b7eb4c972b962a6c8cd75ed36a7c70b8f8ac8f4a](https://github.com/Arx-Game/arxii/commit/b7eb4c972b962a6c8cd75ed36a7c70b8f8ac8f4a)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for Co-Authored-By Claude Opus game; https://github.com/Arx-Game/arxii

[Back to the awesome list](../../README.md)
