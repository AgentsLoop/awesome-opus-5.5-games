# Breakneck Baseball

> Top-list entry: **this month** (#19).

![Breakneck Baseball screenshot](https://raw.githubusercontent.com/hynding/breakneck-baseball/main/docs/agent/playtest/2026-08-21/23-live-gameplay.png)

## At a glance

- **Score:** 9.4/10
- **Screenshot rating:** 5.5/10 ([rated image](https://github.com/hynding/breakneck-baseball/blob/main/docs/agent/playtest/2026-08-21/23-live-gameplay.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Fable 5
- **Technology:** Rust, Bevy 0.15, Rapier, wgpu, WebAssembly, Native desktop, 3D baseball
- **Estimated FP32 operations/s at 60 FPS:** 4,200,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Source-complete sports game with a clear nine-inning loop, CPU/2P modes, advanced baseball rules, physics, cameras, settings, persistence, native/WASM builds, live demo, playtest screenshots, tests and repeated exact Fable gameplay trailers.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/hynding/breakneck-baseball](https://github.com/hynding/breakneck-baseball)
- **Evidence:** [direct model evidence](https://github.com/hynding/breakneck-baseball/commit/d8984ba5dc60f7ea79f83cafde662ecde9cda1d6)
- **Live demo:** [open demo](https://hynding.github.io/breakneck-baseball/)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/hynding/breakneck-baseball/blob/main/docs/agent/playtest/2026-08-21/23-live-gameplay.png)
- [screenshot 2](https://github.com/hynding/breakneck-baseball/blob/main/docs/agent/playtest/2026-08-21/24-perfect-contact-callout.png)

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README documents a playable Rust/Bevy/Rapier 3D baseball game with native desktop and browser WASM builds, one-player versus CPU and two-player modes, nine-inning or shortened games, five pitches, Magnus-effect ball flight, steals and pickoffs, tag-ups, double plays, dropped third strike, HBP, caught pops, multiple cameras, synthesized audio, team/field themes, substitutions, settings, pause and a live GitHub Pages demo. The source is separated into pure rules, gameplay simulation, presentation and shell/meta layers with dedicated tests; the repository also contains dated playtest screenshots. The inspected gameplay history contains exact Co-Authored-By: Claude Fable trailers on runner, camera, input, audio, fielding and rules work. Count the current baseball game once.

### Gameplay source

- [https://github.com/hynding/breakneck-baseball/blob/main/src/main.rs](https://github.com/hynding/breakneck-baseball/blob/main/src/main.rs)
- [https://github.com/hynding/breakneck-baseball/commit/d8984ba5dc60f7ea79f83cafde662ecde9cda1d6](https://github.com/hynding/breakneck-baseball/commit/d8984ba5dc60f7ea79f83cafde662ecde9cda1d6)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Bevy game Co-Authored-By Claude Fable; https://github.com/hynding/breakneck-baseball

[Back to the awesome list](../../README.md)
