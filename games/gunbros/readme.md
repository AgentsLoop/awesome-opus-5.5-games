# GunBros

> Top-list entry: **today** (#8).

![GunBros screenshot](https://raw.githubusercontent.com/skelzer/gunbros-public/main/docs/ui/maps/temple_desktop.png)

## At a glance

- **Score:** 8.0/10
- **Screenshot rating:** 7.6/10 ([manually reviewed image](https://github.com/skelzer/gunbros-public/blob/main/docs/ui/maps/temple_desktop.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Opus 5.5, Claude Fable 5.1
- **Technology:** TypeScript, Canvas 2D, Vite, Node.js, WebSocket, Browser
- **Estimated FP32 operations/s at 60 FPS:** 500,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Source-verified multiplayer artillery game with distinct mobiles, maps, destructible terrain, bots and extensive automated tests; 8.0 is a conservative scope estimate without a full gameplay playtest.
- **Verified:** 2026-09-26
- **Repository:** [https://github.com/skelzer/gunbros-public](https://github.com/skelzer/gunbros-public)
- **Evidence:** [creator-reported model evidence](https://github.com/skelzer/gunbros-public#how-it-was-made)
- **Live demo:** [open demo](https://play.gunbros.luquematte.com/)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/skelzer/gunbros-public/blob/main/docs/ui/maps/temple_desktop.png) — 📸 7.6/10 · manual visual review · Use this active artillery turn as the game-level frame. Layered pixel-art ruins, terrain, health bars, wind dial and weapon HUD give strong scene detail and readable mechanics; the debug overlay obscures part of the sky.

## Model attribution

Open the evidence link above. Evidence grade: **creator-reported model evidence**.

## Source description

A turn-based 2D artillery game for 2 to 8 players online: players pick one of 18 mobiles, charge shots with angle and power, and read the wind; destructible terrain, items, weather, sudden death, bots and a delay-based turn order. Deterministic shared simulation in packages/shared, authoritative Node WebSocket server, Canvas 2D client with touch controls. The README's 'How it was made' section names Claude Opus 5.5 and Claude Fable 5.1, and commits carry Claude co-author trailers. Public source is a single-commit snapshot of a private working repository; the soundtrack is not included and the game plays silently without it. The playable deployment is play.gunbros.luquematte.com; a separate landing page is not recorded as a demo.

### Gameplay source

- [https://github.com/skelzer/gunbros-public/blob/main/packages/shared/src/rules/turn.ts](https://github.com/skelzer/gunbros-public/blob/main/packages/shared/src/rules/turn.ts)
- [https://github.com/skelzer/gunbros-public#how-it-was-made](https://github.com/skelzer/gunbros-public#how-it-was-made)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** Creator submission (pull request by the repository owner, 2026-09-25)

[Back to the awesome list](../../README.md)
