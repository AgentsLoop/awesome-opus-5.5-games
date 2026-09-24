# Sokoban

> Verified game note.

![Sokoban screenshot](https://raw.githubusercontent.com/kamwoh/yume/master/docs/media/sokoban.gif)

## At a glance

- **Score:** 9.1/10
- **Screenshot rating:** 4.4/10 ([rated image](https://github.com/kamwoh/yume/blob/master/docs/media/sokoban.gif)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Opus 4.8, Claude Opus 4
- **Technology:** Godot 4, JSON world model, GDScript engine, Native desktop, 3D FPS arena shooter, 2D Sokoban puzzle, 3D third-person collection game
- **Estimated FP32 operations/s at 60 FPS:** 5,200,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Three source-complete committed Godot games with fresh-clone launch scenes, dedicated world data, gameplay rules, assets, tests, screenshots and exact Opus implementation history; engine-only and visual-test demos are excluded.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/kamwoh/yume](https://github.com/kamwoh/yume)
- **Evidence:** [direct model evidence](https://github.com/kamwoh/yume/commit/11df7cf1a0e29ec63b2f3ffe45ba14b57d623b33)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/kamwoh/yume/blob/master/docs/media/sokoban.gif)

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README identifies three committed demos that run on a fresh clone: doomarena3d is a first-person arena shooter with movement, shooting, enemies and deaths; Sokoban is a 2D box-pushing puzzle; Lanterns is a third-person 3D collection game with a walkable world, player, camera, lantern collection and win rules. Each has a committed Godot launcher scene, dedicated godot/data/demo_* content, gameplay rules and a matching README GIF. The repository history contains exact Claude Opus 4.8 and Opus 4 gameplay commits, including the commit that force-tracked the three launchers. Count the three actual committed games and do not count camera-orbit renders, engine tests or roadmap-only demos.

### Gameplay source

- [https://github.com/kamwoh/yume/blob/master/godot/scenes/sokoban_2d.tscn](https://github.com/kamwoh/yume/blob/master/godot/scenes/sokoban_2d.tscn)
- [https://github.com/kamwoh/yume/commit/11df7cf1a0e29ec63b2f3ffe45ba14b57d623b33](https://github.com/kamwoh/yume/commit/11df7cf1a0e29ec63b2f3ffe45ba14b57d623b33)

## Verification notes

- **Status:** verified_source_and_screenshots
- **Counted units in repository:** 3
- **Units covered by this note:** 1
- **Discovery:** GitHub code search for Godot game Co-Authored-By Claude Opus 4.8; https://github.com/kamwoh/yume

[Back to the awesome list](../../README.md)
