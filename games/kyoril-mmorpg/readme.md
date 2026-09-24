# Kyoril MMORPG

> Verified game note.

![Kyoril MMORPG screenshot](https://raw.githubusercontent.com/Kyoril/mmo/1841d90de444d988fdad1ddf5cbacbe5f7c0cfb0/screenshots/char_select.png)

## At a glance

- **Score:** 9.0/10
- **Screenshot rating:** 7.6/10 ([rated image](https://github.com/Kyoril/mmo/blob/1841d90de444d988fdad1ddf5cbacbe5f7c0cfb0/screenshots/char_select.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Opus 5
- **Technology:** Custom C++ engine, C++, OpenGL, MySQL, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 2,200,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository contains a real custom-engine MMORPG prototype with native client code, world-state systems, gameplay screenshots, build instructions and exact Opus attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/Kyoril/mmo](https://github.com/Kyoril/mmo)
- **Evidence:** [direct model evidence](https://github.com/Kyoril/mmo/commit/1841d90de444d988fdad1ddf5cbacbe5f7c0cfb0)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/Kyoril/mmo/blob/1841d90de444d988fdad1ddf5cbacbe5f7c0cfb0/screenshots/char_select.png)
- [screenshot 2](https://github.com/Kyoril/mmo/blob/1841d90de444d988fdad1ddf5cbacbe5f7c0cfb0/screenshots/ingame_01.png)
- [screenshot 3](https://github.com/Kyoril/mmo/blob/1841d90de444d988fdad1ddf5cbacbe5f7c0cfb0/screenshots/world_editor.png)

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The repository description and README identify a playable MMORPG prototype with a custom C++ engine, client, servers and tools. The README includes character-selection and in-game screenshots; client.cpp, world_state.cpp and world_frame.cpp implement the client and world state, while shared game code defines gameplay data. The cited commit includes an exact Co-Authored-By: Claude Opus 5 trailer. Runtime assets and a public live demo are not provided, so this is source-verified and belongs in Non-Browser Engines.

### Gameplay source

- [https://github.com/Kyoril/mmo/blob/1841d90de444d988fdad1ddf5cbacbe5f7c0cfb0/src/mmo_client/client.cpp](https://github.com/Kyoril/mmo/blob/1841d90de444d988fdad1ddf5cbacbe5f7c0cfb0/src/mmo_client/client.cpp)
- [https://github.com/Kyoril/mmo/commit/1841d90de444d988fdad1ddf5cbacbe5f7c0cfb0](https://github.com/Kyoril/mmo/commit/1841d90de444d988fdad1ddf5cbacbe5f7c0cfb0)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for C++ game Co-Authored-By Claude Opus; https://github.com/Kyoril/mmo

[Back to the awesome list](../../README.md)
