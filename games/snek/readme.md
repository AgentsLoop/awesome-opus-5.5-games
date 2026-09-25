# snek

> Verified game note.

![snek screenshot placeholder](snek-placeholder.svg)

## At a glance

- **Score:** 9.2/10
- **Model:** Claude Opus 4.7
- **Technology:** Phaser 3, TypeScript, Vite, Cloudflare Workers, Durable Objects, Browser
- **Estimated FP32 operations/s at 60 FPS:** 470,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository provides a live playable build, clear controls, a complete solo mode, multiplayer infrastructure, direct simulation and scene source, and exact Opus attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/scottmccarrison/snek](https://github.com/scottmccarrison/snek)
- **Evidence:** [direct model evidence](https://github.com/scottmccarrison/snek/commit/6648de2a84581e23ff1903e82730c252415bd339)
- **Live demo:** [open demo](https://mccarrison.me/snek/)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README describes a playable browser snake.io/slither.io clone with solo bots, touch and keyboard controls, and a live public URL that returned HTTP 200. GameScene renders the run, world.ts and snake.ts implement simulation and snake behavior, and worker/src/room.ts provides multiplayer room logic. The cited commit includes an exact Co-authored-by: Claude Opus 4.7 trailer.

### Gameplay source

- [https://github.com/scottmccarrison/snek/blob/6648de2a84581e23ff1903e82730c252415bd339/src/main.ts](https://github.com/scottmccarrison/snek/blob/6648de2a84581e23ff1903e82730c252415bd339/src/main.ts)
- [https://github.com/scottmccarrison/snek/commit/6648de2a84581e23ff1903e82730c252415bd339](https://github.com/scottmccarrison/snek/commit/6648de2a84581e23ff1903e82730c252415bd339)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Phaser game Co-Authored-By Claude Opus; https://github.com/scottmccarrison/snek

[Back to the awesome list](../../README.md)
