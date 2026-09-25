# Panchigi

> Verified game note.

![Panchigi screenshot placeholder](panchigi-placeholder.svg)

## At a glance

- **Score:** 9.1/10
- **Model:** Claude Opus 5
- **Technology:** Unity 6, C#, Mirror networking, Native desktop, Flappy race, Panchigi board game, Skydive platformer
- **Estimated FP32 operations/s at 60 FPS:** 8,500,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Source-complete Unity 6 multiplayer client with three separately implemented game modes, dedicated scenes, gameplay systems, matchmaking, network state, UI, tests and exact Opus gameplay commits.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/Baeinsoo/LeagueOfPhysical-Client](https://github.com/Baeinsoo/LeagueOfPhysical-Client)
- **Evidence:** [direct model evidence](https://github.com/Baeinsoo/LeagueOfPhysical-Client/commit/91deba77b47ef0fb19c8a0ca3360637689b9db7c)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The repository is a Unity 6 client for a networked game platform. PlayableGameProvider filters game modes that have real Unity scenes and maps, and the source contains separate FlappyRace, Panchigi and Skydive scenes with dedicated gameplay systems, UI, entity creators, state stores, correction handlers and tests. The inspected history contains an exact Claude Opus 5 trailer on the Flappy gameplay slice, plus later Opus gameplay commits for Skydive and Panchigi. Count the three implemented game modes once each. Do not count networking or Mirror sample scenes as games.

### Gameplay source

- [https://github.com/Baeinsoo/LeagueOfPhysical-Client/blob/main/Assets/Scenes/Panchigi.unity](https://github.com/Baeinsoo/LeagueOfPhysical-Client/blob/main/Assets/Scenes/Panchigi.unity)
- [https://github.com/Baeinsoo/LeagueOfPhysical-Client/commit/91deba77b47ef0fb19c8a0ca3360637689b9db7c](https://github.com/Baeinsoo/LeagueOfPhysical-Client/commit/91deba77b47ef0fb19c8a0ca3360637689b9db7c)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 3
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Unreal game Co-Authored-By Claude Opus 5; https://github.com/Baeinsoo/LeagueOfPhysical-Client

[Back to the awesome list](../../README.md)
