# QQ Speed

> Top-list entry: **this week** (#6).

![QQ Speed screenshot placeholder](qq-speed-placeholder.svg)

## At a glance

- **Score:** 9.1/10
- **Model:** Claude Opus 5.5
- **Technology:** Three.js, JavaScript, WebGL, Browser
- **Estimated FP32 operations/s at 60 FPS:** 1,600,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Three-track drifting racer with driving controls and race progression, documented source and public deployment; not freshly playtested.
- **Verified:** 2026-09-24
- **Repository:** [https://github.com/riba2534/claude-opus-5-5-demo](https://github.com/riba2534/claude-opus-5-5-demo)
- **Evidence:** [creator-reported model evidence](https://github.com/riba2534/claude-opus-5-5-demo/blob/main/README.md)
- **Live demo:** [open demo](https://claude-opus-5-5-qqfeiche3d.pages.dev/)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **creator-reported model evidence**.

## Source description

Three distinct source games: coastal cycling with fish and achievements; FPS ship-map bot combat; multi-track drifting racer. Each has input, game state and goals. README explicitly attributes all three to Claude Opus 5.5 and links separate deployments; each URL returned HTTP 200. No runtime playtest performed.

### Gameplay source

- [https://github.com/riba2534/claude-opus-5-5-demo/blob/main/qq-speed/src/main.js](https://github.com/riba2534/claude-opus-5-5-demo/blob/main/qq-speed/src/main.js)
- [https://github.com/riba2534/claude-opus-5-5-demo/blob/main/README.md](https://github.com/riba2534/claude-opus-5-5-demo/blob/main/README.md)

## Reverse-engineered prompt

Reconstruct this prompt from the verified source; it is not an original prompt transcript. See [prompt evidence](https://github.com/riba2534/claude-opus-5-5-demo/blob/main/qq-speed/src/main.js).

```text
Rebuild QQ Speed as a playable Three.js browser racing game. Preserve its multiple tracks, accelerate/brake/steer controls, drifting, race state, opponents and finish/results flow described by the dedicated game source. Attribute the implementation to Claude Opus 5.5 only as reported by the repository README; do not present this reconstruction as the original prompt.
```

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 3
- **Units covered by this note:** 1
- **Discovery:** GitHub repository search: opus-5.5 created 2026-09-17..2026-09-24; https://github.com/riba2534/claude-opus-5-5-demo

[Back to the awesome list](../../README.md)
