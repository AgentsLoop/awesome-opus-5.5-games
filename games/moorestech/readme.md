# moorestech

> Verified game note.

![moorestech screenshot](https://raw.githubusercontent.com/moorestech/moorestech/master/docs/pr-assets/challenge-hud-visual/01-single-world.png)

## At a glance

- **Score:** 9.4/10
- **Screenshot rating:** 2.8/10 ([rated image](https://github.com/moorestech/moorestech/blob/master/docs/pr-assets/challenge-hud-visual/01-single-world.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Opus 5, Claude Fable 5.1
- **Technology:** Unity, C#, .NET, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 5,500,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Large, real Unity factory-game codebase with client/server architecture, player and building systems, automation mechanics, screenshots, tests and exact Opus/Fable attribution.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/moorestech/moorestech](https://github.com/moorestech/moorestech)
- **Evidence:** [direct model evidence](https://github.com/moorestech/moorestech/commit/165abc729ea1b66e593ad9bba6c5cd3a4578d19b)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/moorestech/moorestech/blob/master/docs/pr-assets/challenge-hud-visual/01-single-world.png)
- [screenshot 2](https://github.com/moorestech/moorestech/blob/master/docs/pr-assets/issue-1101-wide-screen-hud/skit-wide.png)

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The public repository is an animated open-world automated factory game with a Unity client and server. The README instructs users to open the client in Unity and play the MainGame scene. The source tree includes the MainGame scene, player controller/state systems, block placement, inventories, machines, conveyors, trains, research and in-game UI. The repository contains gameplay screenshots and exact Claude Opus 5 and Claude Fable 5.1 commit trailers. Count the native Unity game as one unit.

### Gameplay source

- [https://github.com/moorestech/moorestech/blob/master/moorestech_client/Assets/Scenes/Game/MainGame.unity](https://github.com/moorestech/moorestech/blob/master/moorestech_client/Assets/Scenes/Game/MainGame.unity)
- [https://github.com/moorestech/moorestech/commit/165abc729ea1b66e593ad9bba6c5cd3a4578d19b](https://github.com/moorestech/moorestech/commit/165abc729ea1b66e593ad9bba6c5cd3a4578d19b)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Unity game Co-Authored-By Claude Fable; https://github.com/moorestech/moorestech

[Back to the awesome list](../../README.md)
