# GridWatch Match Web

> Verified game note.

![GridWatch Match Web screenshot placeholder](gridwatch-match-web-placeholder.svg)

## At a glance

- **Score:** 8.9/10
- **Model:** Claude Fable 5
- **Technology:** Phaser 4, React 19, TypeScript, Vite, Cloudflare Workers, Browser
- **Estimated FP32 operations/s at 60 FPS:** 520,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** The repository has clear match-3 rules, a dedicated board engine, Phaser rendering, hand-authored levels, controls, deployment documentation and exact Fable attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/remeadows/GridWatchMatchWeb](https://github.com/remeadows/GridWatchMatchWeb)
- **Evidence:** [direct model evidence](https://github.com/remeadows/GridWatchMatchWeb/commit/e9b237e7ee5f7d771f2bc456c208d741f47b81f5)
- **Live demo:** [open demo](https://GridWatchMatchWeb.warsignallabs.net/)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README identifies this repository as a playable cyberpunk match-3 browser game, documents the swap-and-match rules and lists the Phaser board renderer. boardEngine.ts implements matching, gravity and power-up rules; BoardScene renders the board; levels.ts contains hand-authored levels. The live custom domain returned HTTP 403 to this check, so the record is source-verified rather than live-play verified. The cited SPA fix commit includes an exact Co-Authored-By: Claude Fable 5 trailer.

### Gameplay source

- [https://github.com/remeadows/GridWatchMatchWeb/blob/main/src/App.tsx](https://github.com/remeadows/GridWatchMatchWeb/blob/main/src/App.tsx)
- [https://github.com/remeadows/GridWatchMatchWeb/commit/e9b237e7ee5f7d771f2bc456c208d741f47b81f5](https://github.com/remeadows/GridWatchMatchWeb/commit/e9b237e7ee5f7d771f2bc456c208d741f47b81f5)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Phaser game Co-Authored-By Claude Fable; https://github.com/remeadows/GridWatchMatchWeb

[Back to the awesome list](../../README.md)
