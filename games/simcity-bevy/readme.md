# SimCity (Bevy)

> Verified game note.

![SimCity (Bevy) screenshot placeholder](simcity-bevy-placeholder.svg)

## At a glance

- **Score:** 9.1/10
- **Model:** Claude Fable 5, Claude Opus 4.8
- **Technology:** Bevy 0.19, Rust, ECS, Native desktop
- **Estimated FP32 operations/s at 60 FPS:** 3,500,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Substantial native city simulator with a complete test-city loop, zoning, roads, traffic, citizens, services, persistence, scenarios, debug tooling, tests and exact Fable/Opus gameplay commits.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/grgrwlkr/SimCity](https://github.com/grgrwlkr/SimCity)
- **Evidence:** [direct model evidence](https://github.com/grgrwlkr/SimCity/commit/7fc290811853e2d196146d7cfad256d98ec420f7)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The repository README describes a Bevy 0.19 Rust city-building simulator that automatically starts a test city. It includes a map, roads, zoning, buildings, citizens, traffic, services, persistence, scenarios, debug UI and native cargo-run instructions. The repository has a multi-crate workspace and extensive game simulation code. Its history contains exact Claude Fable 5 gameplay/rendering commits and an exact Claude Opus 4.8 handoff/traffic evidence. Count the native Bevy game once.

### Gameplay source

- [https://github.com/grgrwlkr/SimCity/blob/main/README.md](https://github.com/grgrwlkr/SimCity/blob/main/README.md)
- [https://github.com/grgrwlkr/SimCity/commit/7fc290811853e2d196146d7cfad256d98ec420f7](https://github.com/grgrwlkr/SimCity/commit/7fc290811853e2d196146d7cfad256d98ec420f7)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Bevy game Co-Authored-By Claude Opus; https://github.com/grgrwlkr/SimCity

[Back to the awesome list](../../README.md)
