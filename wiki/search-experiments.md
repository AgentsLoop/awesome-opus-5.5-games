# Search experiments

Use this page to record discovery methods, scores, and the next serial test.

## X feed and focused search — 2026-09-09

Classify verified games by runtime. Keep browser games in the browser categories. Put Godot, Unity, Unreal, Pygame, native console, Minecraft datapack, and other clearly non-browser engine projects in the separate **Non-Browser Engines** category. Do not reject a project only because it is not a web game.

Run the user's Following feed, then run this focused query:

`"GPT-6 Astra" game github`

Use the X post by [@kepochnik](https://x.com/kepochnik/status/2097286217641697459) as the seed. Inspect each linked repository in order. Resolve the canonical GitHub URL. Confirm that the repository contains playable game code. Confirm the claimed model evidence. Reject video-only posts, catalogs, and repositories without game source.

Record one verified game:

- [GPT-6 Astra × Smash Karts](https://github.com/amsminn/gpt-6-astra-smash-karts) — playable multiplayer Three.js kart game; README records GPT-6 Astra, controls, eight-player networking, bots, tests, and gameplay preview.

Record these leads for the next serial pass:

- `marius4lui/NUL` — X describes a survival-horror FPS made with Astra; inspect the repository before counting it.
- [GOROman/gpt-6-astra-ps1-game-benchmark](https://github.com/GOROman/gpt-6-astra-ps1-game-benchmark) — verified as [FACET FIGHTER](https://github.com/GOROman/gpt-6-astra-ps1-game-benchmark/blob/main/README.md), an original PS1 fighting game with GPT-6 Astra attribution, source, tests, release artifacts, screenshots, and emulator evidence.
- [LucasMarquesShiva/the-free-game](https://github.com/LucasMarquesShiva/the-free-game) — verified as The Free Game, a Godot village-building game. The creator’s [X post](https://x.com/LucasMarquesSv/status/2096772160404504583) says it is built with GPT ASTRA.
- [derek-wangpch/OpenCityMaker](https://github.com/derek-wangpch/OpenCityMaker) — verified as CityMaker, a Three.js 2048 city puzzle. Its creation record attributes all 132 procedural models to GPT-6 Astra.
- [Imirushik/sunbreak-downhill-3D-game](https://github.com/Imirushik/sunbreak-downhill-3D-game) — verified as SUNBREAK, a Three.js BMX racer. The creator’s [X post](https://x.com/Im_IrushiK/status/2096280064019353891) states that GPT-6 Astra built the whole demo.
- [bannzai/godotpractice](https://github.com/bannzai/godotpractice) — count nine contained Godot game projects from its explicit project plan. Each named project has its own `project.godot`, main scene, source, and run or test path; the plan identifies Codex GPT-6 Astra workers. Treat these as unpublished playable prototypes, not as nine separate repositories.
- `MartinDelophy` — inspect its curated Astra game list and extract only direct game repositories.

### Result

- Add 1 verified game unit.
- Add 1 more verified game unit after resolving the GOROman short link from X.
- Reject `marius4lui/NUL`: the inferred public GitHub URL returns 404.
- Reject video-only Spider-Man, M3TH Lab Simulator, and other posts without a public game repository.
- Do not count the X post, a catalog, or an unresolved repository as a game.

### Critique

Score the unchanged method 6.8/10. It found two strong games and had 9/10 verification quality, but GitHub indexing missed the known OpenCityMaker record and the yield was moderate. Drop the exact query form as a primary method because it is below the 8/10 threshold. Keep the verification gate and use the search only as a lead source.

### Next experiment

Run these searches in order, without parallel searches. Use attribution variants to improve indexing coverage:

1. `"GPT-6 Astra" Godot game`
2. `"GPT-6 Astra" "Godot 4"`
3. `"GPT-6 Astra" videogame`
4. `"GPT-6 Astra" playable`
5. `"GPT-6 Astra" release`

For each result, resolve the repository and inspect its README, source tree, and entry point. Add a record immediately after verification. Update the score after the pass. Drop methods that score below 8/10 unless they produce a strong new lead for a higher-yield experiment.

## Godot 4 variant and monorepo inspection — 2026-09-09

Run `GPT-6 Astra` plus `Godot 4` against README files. The query returned five results, but no new direct game repository. It repeated known games and found a Godot camera addon.

Inspect the strongest remaining repository lead instead of repeating the low-yield query. [bannzai/godotpractice](https://github.com/bannzai/godotpractice) contains nine explicitly scoped independent Godot projects. Verify each `games/<slug>/project.godot`, main scene, source, and run/test path. Use `documents/PROJECT.md` as method evidence. Count the nine named projects as contained game units. Do not count the other repository folders or the monorepo itself as extra games.

### Critique

Score the combined pass 7/10. Verification quality is 9/10 and the monorepo inspection produced nine valid units, but the query itself produced zero new direct repositories and scales poorly toward 900. Drop the exact query as a primary method. Retain monorepo inspection as a secondary method when a repository has explicit project boundaries and first-party model evidence.

### Next experiment

Search development documents and project files in separate sequential queries:

1. `GPT-6 Astra project.godot`
2. `GPT-6 Astra Godot Engine` with `path:documents`
3. `GPT-6 Astra Godot Engine` with `path:docs`

Count a contained game only when it has an independent project boundary, a main scene, source files, runnable instructions or tests, and explicit Astra, Opus, or Fable evidence.

## Reverse-link expansion from a verified game — 2026-09-09

Search incoming GitHub links for the verified [NULLSPACE](https://github.com/marius4lui/NULLSPACE) repository. Inspect the [Arnon-hs/open-source](https://github.com/Arnon-hs/open-source) catalog entry. Follow its cited [Dev.to GPT-6 Astra list](https://dev.to/valyuai/25-gpt-6-astra-creations-every-developer-should-see-and-how-to-enrich-them-with-real-world-datasets-d53). Inspect every direct GitHub link in that article. Do not count catalogs, tools, visual-only scenes, or agents that only play an existing game.

This chain added one verified repository:

- [xinbenlv/ra2-gpt-6-astra-2026-09-04](https://github.com/xinbenlv/ra2-gpt-6-astra-2026-09-04) — a TypeScript/Vite Red Alert 2 browser RTS with a skirmish lobby, map editor, AI, GitHub Pages build, tests, and explicit ChatGPT 6 Astra attribution.

The chain repeated the existing one-shot games and exposed no other new direct game repository. An incoming-link search for the new RTS found only the Arnon catalog entry and self-links.

### Critique

Score the exact reverse-link method 6.5/10. Verification quality is 9/10, but yield is 4/10. The method depends on incomplete curator coverage and article selection. Reject it as the primary method. Keep it as a supplemental check after adding a strong verified repository.

### Next experiment

Run GitHub-first repository metadata searches in series. Start with `Astra game`, then use exact model-name variants such as `gpt6-astra`. Inspect fresh candidates one at a time. Require a real game entry point, gameplay rules, source or release evidence, and explicit Astra, Opus, or Fable attribution. Record tool-only repositories, editors, visual scenes, and name collisions as rejected.

## GitHub repository metadata search — 2026-09-09

Run `gh search repos 'Astra game' --limit 100` and inspect recent candidates. The corrected query returned 73 repositories. It exposed many name collisions, one existing AstraCraft collection, and fresh game candidates.

Verified or updated records from this pass:

- [FLYING37520/astra-air-combat](https://github.com/FLYING37520/astra-air-combat) — Three.js air-combat game with 4v4 AI, weather, terrain, weapons, tests, and a GitHub Pages build.
- [phenomenal-manish/gpt6-astra-vs-opus5-digimon-sim](https://github.com/phenomenal-manish/gpt6-astra-vs-opus5-digimon-sim) — Canvas-based Digi Garden raising and battle game in the Astra build.
- [MrAllNeo/frost-hop](https://github.com/MrAllNeo/frost-hop) — mobile Canvas platform game with physics, combos, characters, audio, and tests.
- [vvvvvvvvvashhh/block-world-cn](https://github.com/vvvvvvvvvashhh/block-world-cn) — native Luanti/Mineclonia survival game with a downloadable Windows release; place it in Non-Browser Engines.
- [swathidbhat/gpt6-astra-max-codex-trashketball](https://github.com/swathidbhat/gpt6-astra-max-codex-trashketball), plus five high/ultra/extra-high/medium variants — playable Three.js paper-toss games with source and physics tests.
- [octopus7/astracraft](https://github.com/octopus7/astracraft) — update the existing record with the fifth playable web2 game, VOIDWRENCH. Keep web3 and web4 visual scene variants excluded.

Reject `barretovski/astra-game-rio-demo` as empty, `vaibhav-k/gpt6-astra-gameforge` as a generation harness, `SakuraTCuu/AstraGame` as a Cocos game without model attribution, `Mungoz/astraGame` as an empty repository, `keno303/blockwerk-GPT6astra` as a no-game editor, `writersrinivasan/GPT6Astra` as an explainer, and `Qw1nti/gpt6AstraThingy` as an Android utility.

Run `gh search repos 'gpt6-astra' --limit 100` next. The corrected query returned 49 repositories. Prefer candidates whose descriptions, README files, or checked-in source identify a playable game. Do not count a model name in a repository slug without gameplay evidence.

### Critique

Score the metadata sweep 7.6/10. It found ten new verified game repositories with 8/10 verification quality and 20.4% raw yield, but six records came from one Trashketball model-run family. Do not keep the exact query as the only primary method. Retain it for incremental high-precision updates.

### Next experiment

Search code for the same identifier: `gh search code '"gpt6-astra"' --limit 100`. Exclude repositories already checked in the metadata sweep. Use the same game-entry, gameplay, model-evidence, and release checks. Code search should find model attribution in README files, generation notes, configuration, commits, or source when repository metadata does not mention it.

## GitHub code search for exact attribution — 2026-09-09

Run `gh search code '"gpt6-astra"' --limit 100`. Inspect unique repositories in result order and skip repositories already examined by metadata search.

This pass returned 48 code results. Most were model registries, tools, catalogs, or unrelated documents. Two direct game sources passed:

- [PhiloLabs/fable51-worlds](https://github.com/PhiloLabs/fable51-worlds/tree/main/death-star-trench-run-gpt-astra) — the parent README labels the subproject as the GPT-6 Astra build. It contains a complete playable Rogue Squadron trench-run mission with Three.js, manual flight, combat, weapons, objectives, QA reports, and build checks.
- [TetsuakiBaba/2DAction.bench](https://github.com/TetsuakiBaba/2DAction.bench/tree/main/GPT6-Astra) — the benchmark README defines one browser game per model directory. The GPT6-Astra directory contains the complete LUMA platform game with stage completion, enemies, collectibles, lives, restart, tests, and screenshots.

Reject [emollick/abyssal-living-deep](https://github.com/emollick/abyssal-living-deep) as a substantial interactive underwater visualization without a player objective or game loop. Keep the exact identifier code search as a supplemental method because the result set contains many non-game false positives.

### Next experiment

Search incoming links to the newly verified ASTRA AIR COMBAT and Block World CN repositories. Then inspect direct GitHub links from another curated Astra list. Keep all searches serial.

## GitHub source-file attribution search — 2026-09-09

Run `gh search code 'GPT-6 Astra game' --limit 100` without a README filename restriction. Inspect each unique repository. This returned five results. Most were catalogs or this collection's own research files.

The useful new result was [fromage3900/MelodiaMelusinaV2](https://github.com/fromage3900/MelodiaMelusinaV2). It is a real Unreal Engine 5.8 rhythm-JRPG project with a `.uproject`, C++ and Blueprint systems, maps, combat, traversal, narrative progression, save state and verification tooling. Its README and handoff document identify a GPT-6 Astra game-state checkpoint. Put it in **Non-Browser Engines**.

The [awesome-gpt-6-astra-casebook](https://github.com/zlxxlz1026/awesome-gpt-6-astra-casebook) result is a catalog with no direct GitHub game links in its README. Do not count the catalog.

### Next experiment

Search project files and incoming links for the new Unreal record. Use paths such as `.uproject`, `project.godot`, `package.json`, and engine-specific manifests. Keep the game-source and model-evidence gates.

### Critique

Score the unrestricted source-file query 7/10. It found a substantial Unreal game repository that README-only search missed, but the model-use checkpoint is first-party and self-reported, and the runtime was not independently executed. Keep the method provisionally. Group file hits by repository before counting.

### Next experiment

Run the same unrestricted search with `GPT-6 Astra Unreal`. Save the model-use passage and a concrete gameplay file for every new repository. Separate catalogs, self-results, and documentation from actual game projects.

## Unrestricted Unreal attribution variant — 2026-09-09

Run `gh search code 'GPT-6 Astra Unreal' --limit 100`, then run the broader `gh search code 'Astra Unreal' --limit 100` only after the exact query is complete. Inspect each unique repository. Treat the word Astra as a name collision until a repository gives model evidence.

The exact query returned no results. The broader query returned six code results. It exposed [majiayu000/astra-gallery](https://github.com/majiayu000/astra-gallery), a catalog of social game leads, and [marcusllittle/Astra-Valkyries](https://github.com/marcusllittle/Astra-Valkyries), a real React/TypeScript shmup. The latter has an Unreal production roadmap, but `Astra` is the game name and no file attributes the game to GPT-6 Astra, Claude Opus, or Claude Fable. Reject it. Do not count the gallery because it is a catalog and has no direct, independently verified game artifact for this pass.

### Critique

Score this variant 6.5/10. The exact engine query had zero yield. The broad query found one real game but it was a model-name collision, which confirms the need for an explicit attribution gate. The catalog is useful for future social reverse-link work but is not a direct game source.

### Next experiment

Search incoming links to [Melodia Melusina](https://github.com/fromage3900/MelodiaMelusinaV2). Then search `GPT-6 Astra project.godot` and `GPT-6 Astra .uproject` serially. Require both a playable project and model evidence before adding a record.

## Melodia incoming links and project-file attribution — 2026-09-09

Search incoming GitHub links for [Melodia Melusina](https://github.com/fromage3900/MelodiaMelusinaV2). Then run the project-file queries `GPT-6 Astra project.godot`, `GPT-6 Astra .uproject`, `GPT6 Astra project.godot`, and `GPT6-Astra project.godot` in series.

The incoming-link results were self-references inside Melodia and portfolio mirrors. They did not expose another game repository. The exact Godot query returned only this collection's own research files. The Unreal project-file query and both spelling variants returned no useful external game repository. Do not count self-search results or portfolio mirrors.

### Critique gate

This branch is below the acceptance threshold as a discovery method: the yield is 0 new game repositories from 103 returned or inspected hits. Keep it as a verification and provenance check, but drop it as a primary discovery experiment.

### Next experiment

Search source files for `GPT-6 Astra package.json`, then search Unity project settings with an explicit model phrase. Continue serially. Inspect direct GitHub links from `astra-gallery` only when a link resolves to an accessible repository with a real game and model evidence.

## Critique gate: engine-first discovery — 2026-09-09

The critique scored both methods in the previous branch at **3.8/10** overall:

- Melodia incoming-link search: novelty 3, verification 5, yield 1, repeatability 7, source reliability 3.
- Model-name plus engine-file searches: novelty 2, verification 4, yield 1, repeatability 9, source reliability 3.

Drop both as primary discovery methods. Keep them only for provenance checks. The critique identified two failure modes: searching this collection creates circular evidence, and combining a model phrase with an engine filename misses repositories where the attribution and engine files are separate.

### Next experiment

Discover repositories by engine and game topics first. Search `topic:game topic:godot archived:false fork:false` and `topic:game topic:unreal-engine archived:false fork:false` in series. Then inspect each retained repository for a playable game and separately verify Astra, Opus, or Fable attribution.

## Engine-topic and engine-name discovery sweep — 2026-09-09

Run the Godot and Unreal topic searches in series. The GitHub CLI returned broad, repetitive game repositories, engines, catalogs, and unrelated projects for both queries. The topic filters did not isolate model-attributed games.

Run the narrower name searches `Astra Godot` and `Astra Unity`. `Astra Godot` returned three repositories: [Astrael-Godot](https://github.com/incri7/Astrael-Godot), which contains only a `.gitignore`; [3d_astra_godot](https://github.com/buicongnguyen/3d_astra_godot), a substantial playable Godot RTS without GPT-6 Astra/Opus/Fable evidence; and [ad-astra-godot-framework](https://github.com/oliverpatrick/ad-astra-godot-framework), a framework rather than a game. `Astra Unity` returned hardware-camera samples, name collisions, and [astra-unity](https://github.com/abuyukyi101198/astra-unity), a Unity terminal-like game without model attribution. Reject all four.

### Critique gate

Score this sweep **4/10**. It is repeatable and it finds real engine projects, but the topic syntax is noisy and the name searches produce collisions. Drop it as a primary discovery method. Keep engine searches only after a creator, post, or curated source identifies a specific candidate.

### Next experiment

Use the direct GitHub URLs and X posts in `majiayu000/astra-gallery` as leads. Search each creator's public GitHub repositories serially. Count only a repository with a real game source, a playable entry point, and explicit GPT-6 Astra, Claude Opus, or Claude Fable evidence.

## X creator-first Astra game search — 2026-09-09

Use the authenticated X feed to run:

- `("GPT-6 Astra" OR "GPT6 Astra") (game OR playable) (github.com OR itch.io)`
- `from:Im_IrushiK (game OR demo) (github.com OR itch.io)`

The search exposed two direct GitHub games:

- [Imirushik/sunbreak-downhill-3D-game](https://github.com/Imirushik/sunbreak-downhill-3D-game) — a complete Three.js downhill BMX race with physics, tricks, AI riders, weather, scoring, replay, tests and a creator post explicitly attributing the build to GPT-6 Astra.
- [Vheissu/hit-and-run-web](https://github.com/Vheissu/hit-and-run-web) — a live Three.js browser reconstruction with campaign missions, races, vehicles, walking, police pursuit, saves, converted assets and automated checks. The creator's post explicitly attributes the build to GPT-6 Astra.

The X search also repeated [GOROman/gpt-6-astra-ps1-game-benchmark](https://github.com/GOROman/gpt-6-astra-ps1-game-benchmark), which was already verified. It linked to catalogs from MartinDelophy and magiccreator-ai, which were not counted as games.

### Research correction

Reopen rejected candidates when stronger first-party evidence appears. The Hit & Run repository was previously rejected because its README mentioned Codex and Claude. The creator's direct X post is explicit model attribution, so the repository is now verified and the stale rejection was removed.

### Next experiment

Search `from:CtrlAltDwayne (game OR demo) (github.com OR itch.io)` and inspect direct links one at a time. Then search the next relevant creator handle from the X results. Keep model attribution and game-source verification separate.

## X creator follow-up: CtrlAltDwayne — 2026-09-09

Run the creator searches `from:CtrlAltDwayne (game OR demo) (github.com OR itch.io)`, `from:CtrlAltDwayne Astra`, and `from:CtrlAltDwayne "Saber Descent" github` in series. Resolve shortened links before verifying repositories.

The search found [Vheissu/saber-battle](https://github.com/Vheissu/saber-battle). The X post identifies Saber Descent as a GPT-6 Astra dungeon crawler with open-source code. The README independently confirms GPT-6 Astra and documents five dungeon depths, combat, enemies, portals, tests, a live demo and screenshots. Add one browser game.

The same creator linked [Vheissu/emerald-bayou](https://github.com/Vheissu/emerald-bayou), a substantial Three.js airboat game with a live demo, jobs, wildlife, weather and tests. Its post and README do not identify GPT-6 Astra, Claude Opus or Claude Fable. Keep it as an unconfirmed candidate.

The creator also posted Stick Fighter, but the result had only a Railway live URL and no public GitHub repository. Do not add it to a GitHub collection.

### Next experiment

Search the Vheissu GitHub account for adjacent public game repositories. Then search X for exact model phrases combined with Unity, Unreal, Godot and PlayStation. Resolve every link and require both game and attribution evidence.

## X non-browser engine search — 2026-09-09

Run `("GPT-6 Astra" OR "GPT6 Astra") (Godot OR Unity OR Unreal OR PlayStation) github.com` in the authenticated X feed. The search found [ToBeWin/vector-rush](https://github.com/ToBeWin/vector-rush). Its creator post says GPT-6 Astra made VECTOR RUSH with Godot and Blender. The repository contains a real Godot 4.7.2 project, `project.godot`, `main.tscn`, three tracks, three AI opponents, drift and nitro, medal progression, tests, a native macOS package, a web export and gameplay screenshots. Add it to **Non-Browser Engines**.

The other visible results were articles or catalogs without direct GitHub game repositories. Do not count them.

### Next experiment

Run exact X searches for GPT-6 Astra plus Unity, Unreal and PlayStation in series. Resolve shortened links and verify each repository before adding it.

## Critique gate: split non-browser X searches — 2026-09-09

The critique scored the combined multi-engine X query **7/10**: novelty 9, verification 8, yield 4, repeatability 7, source reliability 7. Drop that combined query from the repeat rotation. Keep X creator discovery, but treat creator attribution and repository evidence as separate checks.

### Next experiments

Run these exact searches in order:

1. `("GPT-6 Astra" OR "GPT6 Astra") Unity (game OR racing OR platformer) github.com`
2. `("GPT-6 Astra" OR "GPT6 Astra") ("Unreal Engine" OR UE5) game github.com`
3. `("GPT-6 Astra" OR "GPT6 Astra") (PlayStation OR PS5 OR PS4) game github.com`

Record native export evidence separately from engine mentions. A PlayStation phrase can describe visual style, and Unity or Unreal can also produce browser games.

## Split X engine searches — 2026-09-09

Run the Unity, Unreal and PlayStation queries in series:

- `("GPT-6 Astra" OR "GPT6 Astra") Unity (game OR racing OR platformer) github.com`
- `("GPT-6 Astra" OR "GPT6 Astra") ("Unreal Engine" OR UE5) game github.com`
- `("GPT-6 Astra" OR "GPT6 Astra") (PlayStation OR PS5 OR PS4) game github.com`

The three searches returned no new direct GitHub game repositories. Visible results were articles, catalogs or unrelated model discussions. Keep these as low-yield probes. Do not infer that no Unity, Unreal or PlayStation games exist.

### README classification correction

The README classifier previously inspected game names for engine keywords. That placed **The Simpsons: Hit & Run — Browser Reconstruction** in the non-browser section because `reconstruction` contains `construct`, and it risked treating browser projects named Minecraft as native Minecraft games. Change the classifier to inspect explicit technology fields only. Keep Godot, Unity, Unreal, Pygame, native desktop, Luanti, PlayStation, Minecraft mods, and related runtime evidence in **Non-Browser Engines**.

### Next experiment

Search creator handles from the X results directly. Then run an exact Opus/Fable creator-first X search so the collection does not depend on Astra-only discovery.

## X creator-first Opus/Fable game search — 2026-09-09

Run `("Claude Opus" OR "Claude Fable" OR "Fable 5") (game OR playable) (github.com OR itch.io)` in the authenticated X feed.

The search found [Franklin-C/turbo-kart-grand-prix](https://github.com/Franklin-C/turbo-kart-grand-prix), which was already verified. The creator's post explicitly says Claude Fable 5.1 built the Mario Kart-style game and links both the repository and the live Vercel demo. Upgrade the existing record with the X source, live URL, four screenshots, and the detailed README evidence. Do not create a duplicate record.

Other results were articles or catalogs. No new repository passed this search.

### Next experiment

Search `from:Franklin_Eh (game OR playable) (github.com OR itch.io)`. Then search exact Claude Opus plus GitHub game posts. Inspect direct repositories one at a time.

## X creator follow-up: Franklin_Eh — 2026-09-09

Run `from:Franklin_Eh (game OR playable) (github.com OR itch.io)`.

The search returned only the existing [Franklin-C/turbo-kart-grand-prix](https://github.com/Franklin-C/turbo-kart-grand-prix) post. No new Fable game repository passed verification. Keep the upgraded record and do not duplicate it.

## X creator follow-up: sudoingX — 2026-09-09

Run `from:sudoingX github.com`.

The search found [sudoingX/octopus-invaders](https://github.com/sudoingX/octopus-invaders). GitHub verification confirms a playable browser space shooter with source, controls and a complete game loop. Its README identifies Qwen 3.5 9B and Hermes Agent, so reject it for this Astra, Claude Opus and Claude Fable collection. This is a useful negative control: verify the game and the model attribution separately.

### Next experiment

Search exact Claude Opus plus GitHub game posts. Inspect each direct repository one at a time and retain only projects with explicit Astra, Opus or Fable evidence.

## X exact Claude Opus game search — 2026-09-09

Run `"Claude Opus" game github.com`.

The narrower search returned an Astra museum walkthrough article, OpenClaw material and unrelated articles. It exposed no direct GitHub game repository with Claude Opus attribution. Keep this as a low-yield probe. Do not infer that no Opus games exist.

### Next experiment

Search exact Claude Fable game GitHub posts. Then search GPT-6 Astra with one engine or genre term at a time.

## X exact Claude Fable game search — 2026-09-09

Run `("Claude Fable" OR "Fable 5.1") game github.com`.

The search found [achimala/TheLongSilence](https://github.com/achimala/TheLongSilence). GitHub verification confirms a substantial Three.js/WebGL2 browser space-exploration game with a live demo, flight, scanning, landing, encounters, custom shaders and automated browser verification. The README identifies Claude Opus 5 as the original builder. Anshu's [creator post](https://x.com/anshuc/status/2095526170972594240) explicitly says Claude Fable 5.1 overhauled the game and links the repository and demo. Add one verified game unit.

The same search exposed [kalelooz/game-x](https://github.com/kalelooz/game-x), which is a game-development skill toolkit, not an individual game. Reject it.

### Next experiment

Search the Anshu creator feed for more direct game repositories. Then search Claude Fable with one engine at a time: Godot, Unity or Unreal.

## Anshu creator-feed follow-up — 2026-09-09

Run `from:anshuc game github.com` and then `from:anshuc Astra github.com` in series.

The first search confirmed the existing [The Long Silence](https://github.com/achimala/TheLongSilence) links and exposed no additional direct game repository. The second search exposed [achimala/dream-loop](https://github.com/achimala/dream-loop). GitHub verification shows that it is an agent skill and reusable workflow with a demo example, not an independently authored game. Reject it. The feed also showed a separate Astra game video without a direct repository link; do not add it until a repository is available.

### Next experiment

Search exact Claude Fable with Godot, then Unity, then Unreal. Run each query separately and verify each repository before adding it.

## Split Claude Fable engine searches — 2026-09-09

Run these queries in series:

- `("Claude Fable" OR "Fable 5.1") Godot game github.com`
- `("Claude Fable" OR "Fable 5.1") Unity game github.com`
- `("Claude Fable" OR "Fable 5.1") (Unreal OR "Unreal Engine" OR UE5) game github.com`

The Godot and Unreal searches returned articles. The Unity search returned no results. No direct Claude Fable game repository passed verification. Keep this as a low-yield engine probe. Do not infer that no Fable engine games exist.

### Next experiment

Run the same three engine probes for GPT-6 Astra, one query at a time. Verify direct repositories before adding them.

## Split GPT-6 Astra engine searches — 2026-09-09

Run these queries in series:

- `("GPT-6 Astra" OR "GPT6 Astra") Godot game github.com`
- `("GPT-6 Astra" OR "GPT6 Astra") Unity game github.com`
- `("GPT-6 Astra" OR "GPT6 Astra") (Unreal OR "Unreal Engine" OR UE5) game github.com`

The three searches returned articles or model discussions. No new direct engine game repository passed verification. Keep the separate **Non-Browser Engines** category. Do not infer that no Astra engine games exist.

### Next experiment

Run a sequential GitHub code search for exact Claude Fable attribution. Inspect direct repositories one at a time.

## Sequential GitHub code search: model attribution plus game terms — 2026-09-09

Run these searches one at a time:

- `"Claude Fable 5.1"`
- `"Fable 5.1" game`
- `"Claude Fable" "Three.js"`
- `"Claude Opus 5" game`
- `"GPT-6 Astra" game`

The broad Fable search returned model documentation and agent repositories. The narrowed searches returned no new game repositories. The Astra query only matched this project's own research log. Drop this code-search pattern from the primary rotation because it is dominated by documentation and has no game-specific filtering.

### Next experiment

Return to creator-first X searches with direct GitHub links. Search one known high-yield creator handle at a time.

## Known Astra creator follow-ups — 2026-09-09

Run `from:CtrlAltDwayne github.com`, then `from:Im_IrushiK github.com`.

The CtrlAltDwayne feed returned only the existing [emerald-bayou](https://github.com/Vheissu/emerald-bayou) and [saber-battle](https://github.com/Vheissu/saber-battle) game links. The Irushi feed returned only the existing [sunbreak-downhill-3D-game](https://github.com/Imirushik/sunbreak-downhill-3D-game) link and its GPT-6 Astra attribution. No new repository passed verification.

### Next experiment

Search another known Astra creator handle. Use direct GitHub links from new X posts only, and inspect each repository one at a time.

## GOROman broader creator search — 2026-09-09

The first query, `from:GOROman github.com`, returned only the existing [FACET FIGHTER](https://github.com/GOROman/gpt-6-astra-ps1-game-benchmark) record. Its score was low because it required the repository URL in the original post.

Run the broader query `from:GOROman (game OR ゲーム)`.

This exposed a relevant Famicom/PlayStation development thread. Inspect the thread and its replies. The thread linked [GOROman/calude-famicom-game](https://github.com/GOROman/calude-famicom-game) in a separate post. GitHub verification confirms a four-stage side-scrolling Famicom action game with a ROM, 6502 source, browser WASM emulator, controls, build instructions and three screenshots. The README identifies Claude Code (Fable 5). Add it under **Non-Browser Engines**.

This result changes the method: search creator game posts first, then follow thread links. Do not require `github.com` in the original search hit.

### Next experiment

Critique the broader creator search. If the score is at least 8/10, apply the method to another known creator. If it is below 8/10, drop it from the primary rotation and retain only targeted follow-up use.

## Cross-author model search — 2026-09-09

Run the serial X search `(Astra OR "Claude Opus" OR "Claude Fable") (game OR playable OR demo)`.

The search exposed WoahWurdz posts for [BLACKWATER](https://github.com/Hiraeth010/blackwater) and [BLACKSITE](https://github.com/Hiraeth010/blacksite). Verify the repository, model attribution, game loop and live deployment separately. BLACKWATER is a playable Three.js tactical FPS. BLACKSITE is a playable Three.js wave-survival FPS with Rapier physics. Start the BLACKSITE demo and confirm its Wave 01 HUD state before counting it.

The same search exposed [Braffolk/fable5-world-demo](https://github.com/Braffolk/fable5-world-demo). Verify it, but reject it because it is a visual exploration and capability demo without a game loop or objective.

Keep the two verified FPS projects in the browser-game category. Keep [CALUDE KODO](https://github.com/GOROman/calude-famicom-game) in **Non-Browser Engines** because its primary runtime is a Famicom ROM, even though it also has a browser emulator.

### Next experiment

Critique this cross-author method. Apply it to one known creator only if the score is at least 8/10. Keep searches serial and inspect each direct repository once.

## Critique gate: cross-author model search — 2026-09-09

The critique scored the cross-author search **7/10**, so drop it from the primary rotation.

- Novelty: 7. Two new game units, but both came from one repository owner and one X account.
- Verification quality: 9. Repository inspection and live-demo checks were strong.
- Yield: 7. Two additions came from twelve visible posts, but the sample was small.
- Repeatability: 5. The search lacked a fixed date range, Latest-mode rule, post ledger and time limit.
- Source reliability: 6. X supplied leads; the repositories supplied stronger evidence.
- False-positive control: 8. The game-loop test correctly rejected the visual exploration demo.

Keep BLACKWATER and BLACKSITE. Do not treat the method as broad evidence until it passes a source-diversity test.

### Next experiment

Repeat the query with `-from:WoahWurdz`, a fixed seven-day window ending 2026-09-09, and Latest mode. Inspect up to 30 unique posts within 30 minutes. Record each post URL, repository owner, duplicate status and decision. Verify each repository and live demo separately.

## Controlled diversity search — 2026-09-09

Run the Latest-mode query `(Astra OR "Claude Opus" OR "Claude Fable") (game OR playable OR demo) -from:WoahWurdz since:2026-09-02 until:2026-09-10`.

The search exposed six accessible posts. They discussed Astra, games, or AI demos, but none linked a direct GitHub game repository. Do not add a candidate from a model discussion or a video-editing reference. This pass produced zero new records.

### Next experiment

Run the same fixed date window with `github.com` required and `-from:WoahWurdz`. If it remains empty, split the query by model or engine. Critique this controlled pass before broadening the search.

## Controlled direct-link search — 2026-09-09

Run `(Astra OR "Claude Opus" OR "Claude Fable") (game OR playable OR demo) github.com -from:WoahWurdz since:2026-09-02 until:2026-09-10` in Latest mode.

The search returned five accessible posts. The relevant posts all linked [kalelooz/game-x](https://github.com/kalelooz/game-x), which is a reusable game-development skill toolkit. It is not an individual game, so do not count it. This pass produced zero new game records.

### Next experiment

Score this direct-link pass. If it scores below 8/10, stop repeating this query family and switch to GitHub reverse-link or creator-source expansion.

## Critique gate: controlled direct-link search — 2026-09-09

The critique scored this pass **4/10**, so drop it from the primary rotation.

- Novelty: 1. Every relevant hit pointed to the known toolkit.
- Yield: 1. Five posts produced zero new game records.
- Verification quality: 7. The toolkit classification was already verified.
- Repeatability: 7. The query, date window and Latest mode were recorded.
- Source reliability: 5. X supplied leads; no new repository evidence was found.
- False-positive control: 9. Do not count a repeated toolkit as a new game or rejection.

### Next experiment

Keep X Latest and the same seven-day window. Require `"play now"`, `"playable demo"` or `"play here"`, require `github.com`, exclude `kalelooz/game-x` and `WoahWurdz`, inspect up to 20 accessible posts, and deduplicate repository URLs before verification.

## Playable-claim search — 2026-09-09

Run `(Astra OR "Claude Opus" OR "Claude Fable") ("play now" OR "playable demo" OR "play here") github.com -"kalelooz/game-x" -from:WoahWurdz since:2026-09-02 until:2026-09-10` in Latest mode.

X returned no results. Record this as a query limitation, not evidence that no matching games exist. Stop this wording variant after critique and switch to GitHub reverse-link expansion.

## Critique gate: playable-claim search — 2026-09-09

The critique scored the empty playable-claim query **5/10**, so drop it from the primary rotation.

The exact wording and GitHub requirement improved noise control, but the three play phrases reduced recall and gave no candidate to verify. Do not infer absence from an empty X result.

### Next experiment

Search GitHub repository READMEs for `Astra`, `Claude Opus` and `Claude Fable` in separate serial queries. Use `pushed:2026-09-02..2026-09-09` as a discovery filter only. Check model attribution and playability as separate claims.

## Critique gate: Claude Fable README search — 2026-09-09

The initial critique scored the search 8/10, but duplicate reconciliation corrected the result: `sorrycc/fable-arcade` was already recorded. The corrected score is **6/10**, so drop this unchanged query from the primary rotation.

The pass improved the existing record with eight direct source links and eight public play URLs. Repository source and model/date/prompt records are strong, but the search added zero new game units and all eight games still come from one repository.

### Next experiment

Do not repeat the same query without a changed date window. Inspect incoming links to [sorrycc/fable-arcade](https://github.com/sorrycc/fable-arcade), then switch to a new seed or date partition.

## Fable alias search — 2026-09-09

Run `Fable game in:readme pushed:2026-09-02..2026-09-09`.

The search returned no new game repository. Results were dominated by F# Fable software, catalogs, skills, benchmarks, old ports and the existing `PhiloLabs/fable51-worlds` record. Do not treat the word `Fable` alone as Claude Fable evidence.

### Next experiment

Critique the alias search. Then search incoming links to [sorrycc/fable-arcade](https://github.com/sorrycc/fable-arcade). Extract only direct game repositories from relevant list files.

## Critique gate: Fable alias search — 2026-09-09

The critique scored the alias query **4/10**, so drop it from the primary rotation. The word `Fable` matched unrelated F# software and reference material. GitHub was a reliable source, but false-positive control was weak and the pass found zero new game repositories.

### Next experiment

Search `"Fable" "gameplay" in:readme pushed:2026-09-02..2026-09-09` with the same limit and recent-update sort. Compare against the saved set. Then inspect incoming links to [sorrycc/fable-arcade](https://github.com/sorrycc/fable-arcade).

## Critique gate: Fable gameplay search — 2026-09-09

The critique scored the search **6/10**, so drop this wording from the primary rotation. The pass found zero new independent games, but it correctly rejected a name collision and a derivative game with clear README evidence. Keep the exclusion rules.

### Next experiment

Run `"Fable 5.1" in:readme pushed:2026-09-02..2026-09-09`, sorted by updated descending, with limit 20. Save all returned repositories. Check original-game lineage, model attribution and playable evidence before counting anything.

## Explicit Fable 5.1 search — 2026-09-09

Run `Fable 5.1 in:readme pushed:2026-09-02..2026-09-09`, sorted by updated descending, with limit 20.

The search returned workflow tools, agent skills, documentation, catalogs and infrastructure. It exposed no unseen accessible game repository. Keep explicit model attribution as a verification rule, but do not use this unfiltered query as a primary discovery family.

### Next experiment

Critique this search. Use a new verified game seed for incoming-link expansion, or return to serial creator-source searches when a direct repository link appears.

## Fable 5.1 game search — 2026-09-09

Run `Fable 5.1 game in:readme pushed:2026-09-02..2026-09-09`, sorted by updated descending, with limit 20.

This game-specific exact search exposed [Ashen-Skool/Aot-Fable-5.1](https://github.com/Ashen-Skool/Aot-Fable-5.1). Verify its public project page and README. It documents a playable Unity 6 action game with ODM traversal, combat, Titan objectives, native/WebGL builds, tests, screenshots and a Claude Fable 5.1 builder/critic gauntlet. Add it under **Non-Browser Engines**.

### Next experiment

Critique this result. Then search incoming links to the new Unity game. Keep native and browser exports separated by primary engine.

## Critique gate: Fable 5.1 game search — 2026-09-09

The critique scored the game-specific exact search **8/10**, so keep it in the primary rotation. It found one new repository with strong README evidence for a Unity game, native/WebGL builds, tests and direct Fable 5.1 gauntlet attribution. Keep the method with non-overlapping date partitions and stable repository IDs.

### Next experiment

Run `Fable 5.1 game in:readme pushed:2026-08-25..2026-09-01`, sorted by updated descending, with limit 20. Record all rejection reasons and compare repository IDs with the current set.

## API date-partition audit — 2026-09-09

The `gh` CLI wrapper did not reliably apply the prior non-overlapping `pushed` range. Run the equivalent direct GitHub REST API query:

`"Fable 5.1" game in:readme pushed:2026-08-25..2026-09-01`

The API returned three already-recorded games — [Turbo Kart Rush](https://github.com/bridge-mind/turbo-kart-rush), [SUPER FABLE BROS.](https://github.com/INONONO66/fable-5.1-mario), and [NEON WARDEN](https://github.com/Nipale-ai/fable-5-1-one-prompt-game) — plus [rts-benchmark](https://github.com/0xlnz/rts-benchmark). The benchmark is an evaluation project, not an independently authored game. Add no new game unit. Keep the three known records, including their upgraded live/source evidence.

### Critique gate

Score this experiment **3/10**. It found zero new games, repeated known records, exposed unreliable CLI date filtering, and produced a benchmark false positive. Drop it from the primary rotation. Keep direct REST date partitions only as secondary audits after stronger game-type filtering.

### Next experiment

Inspect incoming links to [Ashen-Skool/Aot-Fable-5.1](https://github.com/Ashen-Skool/Aot-Fable-5.1) one search at a time. Continue to classify Unity, Godot, Unreal, console, and other native-engine projects under **Non-Browser Engines**.

## AOT incoming-link pair — 2026-09-09

Search the exact URL `https://github.com/Ashen-Skool/Aot-Fable-5.1`, then search `Ashen-Skool/Aot-Fable-5.1`.

Both queries returned only the repository's own README self-reference. They exposed no external list, reverse-link source, or new game repository. Mark this seed exhausted for incoming-link discovery. Keep the AOT record under **Non-Browser Engines** because Unity 6 and native macOS are its primary runtime evidence, even though it also documents a WebGL build.

### Next experiment

Critique the AOT incoming-link pair. If it scores below 8/10, switch to another verified Unity, Godot, or Unreal seed and keep each search serial.

### Critique result

The pair scored **3/10**. Exact URL and owner/repository searches are repeatable and have strong false-positive control, but they returned only the repository's own README and zero new games. Drop them from the primary rotation. Keep them only as a low-cost identity preflight before broader reverse-link searches.

### Next experiment

Search another verified Unity, Godot, or Unreal seed with a broader list-oriented query. Prefer creator-source links, inspect each repository once, and keep the searches serial.

## Astra catalog expansion — 2026-09-09

Run the native-engine-oriented query `"GPT-6 Astra" Godot game in:readme` with updated sorting and a limit of 30. It exposed current Astra catalogs, known games, tools, and benchmarks. Treat catalog repositories as discovery sources only.

Inspect [xianyu110/awesome-gpt-6-astra](https://github.com/xianyu110/awesome-gpt-6-astra). Its `PLAYABLE.md` contains 86 live demo entries, but most entries do not provide a public GitHub source. Do not add playable-only entries to `games.json`.

Inspect the distinct [magiccreator-ai/awesome-gpt-6-astra](https://github.com/magiccreator-ai/awesome-gpt-6-astra) list. Its 42 game/demo entries include direct creator-code links. The list led to [alesha-pro/bench-portal](https://github.com/alesha-pro/bench-portal), whose tree contains separate game source and metadata for:

- [VOIDRUNNER: Orbital Combat League](https://github.com/alesha-pro/bench-portal/tree/main/games/voidrunner-astra) — [play](https://alesha-pro.github.io/bench-portal/games/voidrunner-astra/)
- [VOIDBOUND: The Choir of Ash](https://github.com/alesha-pro/bench-portal/tree/main/games/voidbound-choir-of-ash) — [play](https://alesha-pro.github.io/bench-portal/games/voidbound-choir-of-ash/)
- [Onslaught](https://github.com/alesha-pro/bench-portal/tree/main/games/onslaught-fable-5.1) — [play](https://alesha-pro.github.io/bench-portal/games/onslaught-fable-5.1/)

Browser verification started all three demos and showed gameplay state. Exclude the portal's RIG folders because they are 3D showcases without game rules. Add the three game units under one canonical repository record. Keep direct source and play links in the README.

### Next experiment

Critique this list-expansion method. Follow another distinct catalog only if the score is at least 8/10. Continue to require a canonical repository, actual game state, and Astra, Opus, or Fable evidence.

### Critique result

The method scored **8/10**. It produced three new game units and had strong false-positive control. Keep it in the primary rotation. The raw playable-URL count is not the useful metric: catalog entries are leads. Require direct source provenance and stronger runtime evidence than a page load before counting.

### Next experiment

Inspect [zlxxlz1026/awesome-gpt-6-astra-casebook](https://github.com/zlxxlz1026/awesome-gpt-6-astra-casebook) as a distinct catalog. Extract direct creator-code links only, then verify each candidate serially.

## Casebook catalog audit — 2026-09-09

The casebook has 13 game and simulation cases, including Unity, Godot, and Three.js entries. Its game category supplies prompts, X posts, and demo references, but no direct GitHub game repositories. [VOIDRUNNER](https://github.com/alesha-pro/bench-portal/tree/main/games/voidrunner-astra) is already recorded from the other catalog. Add no new record from this pass.

### Next experiment

Critique this zero-yield catalog pass. If it scores below 8/10, switch to another distinct catalog with direct source links or return to creator-source discovery.

### Critique result

The casebook audit scored **2.2/10**. It supplied no new direct GitHub game repository, so its verification and repeatability were weak. Drop it from the primary rotation. Keep it only as a low-priority lead list if a later source reveals direct repositories for its cases.

### Next experiment

Inspect [archorfight/awesome-gpt-6-astra](https://github.com/archorfight/awesome-gpt-6-astra) as another distinct catalog. Prefer entries with direct GitHub source links.

## Archorfight catalog audit — 2026-09-10

The catalog's games section contains two X/Reddit references, while its community-project section repeats known repositories and lists tools, benchmarks, and visual showcases. It exposed no unseen direct GitHub game repository. Add no records.

### Next experiment

Critique this zero-yield catalog pass. Then search a date-bounded GitHub repository window for `GPT-6 Astra` game attribution, using stable repository IDs and manual source verification.

## Fresh Astra repository window — 2026-09-10

Run `"GPT-6 Astra" game in:readme pushed:2026-09-09..2026-09-10`, sorted by updated time, with a limit of 50. The results were mixed: tools, catalogs, benchmarks, known games, and several fresh direct game candidates.

Verify [Orgxsm/azura](https://github.com/Orgxsm/azura). Its README explicitly credits GPT-6 Astra for the island design and Claude Code for the engine, rendering and quests. The repository contains source modules and a public [WebGL2 build](https://orgxsm.github.io/azura/). Browser verification showed the HUD, quest objective, counters, map, controls and autosave state. Add one game unit.

Verify [codersusu/game-city-skylines](https://github.com/codersusu/game-city-skylines). The README explicitly credits GPT-6 Astra and Codex for a Unity city-builder demo. The repository contains the Unity scene, C# simulation, screenshots, build scripts, and committed native macOS acceptance reports. The standalone playtest passed road construction, zoning, growth, save/load, traffic, pedestrians and progression from 24 to 609 residents with a working stadium. Add it under **Non-Browser Engines**. Do not claim a browser playtest because no public browser build is provided.

### Next experiment

Inspect [derek-wang/OpenCityMaker](https://github.com/derek-wang/OpenCityMaker) next. Verify whether it is an actual game and whether its GPT-6 Astra attribution is explicit rather than a generic tool mention.

OpenCityMaker could not be verified. GitHub metadata, README, and tree requests all returned **404**. Keep it in `research/candidates.json` as an inaccessible rejection; do not infer a game from the search result description.

### Next experiment

Inspect the next fresh direct game candidate from the same date window. Require repository metadata before reading source files.

### Critique result

The audit scored **2/10**. It found no new direct GitHub game repository and produced weak, indirect social leads. Drop it from the primary rotation. Keep it only as a low-value community-signal reference.

### Next experiment

Search a date-bounded GitHub repository window for `GPT-6 Astra` game attribution. Inspect returned repositories one at a time, compare numeric IDs, and exclude tools, benchmarks, and visual showcases.

The next result, [xzmzm/daily-slop](https://github.com/xzmzm/daily-slop), is a daily web-app gallery. Its current GPT-6 Astra entry is a typesetting playground; its game-like entry is attributed to GPT-5.6 Sol. Reject the gallery and unrelated apps.

### Next experiment

Inspect the next fresh direct game candidate from the same date window. Prefer repositories whose README names a qualifying game and model together.

The fresh game-focused [MartinDelophy/awesome-gpt-6-astra](https://github.com/MartinDelophy/awesome-gpt-6-astra) catalog exposed a stale source link for OpenCityMaker. The live canonical repository is [derek-wangpch/OpenCityMaker](https://github.com/derek-wangpch/OpenCityMaker), not the 404 `derek-wang/OpenCityMaker` alias. Verify numeric repository IDs after following list links.

CityMaker passed verification: it is a real Three.js 2048 game with twelve cities, 132 procedural models, scores, win/loss rules, saves, a public deployment, and GPT-6 Astra creation evidence. Browser verification showed the live board and controls. Add one browser game unit.

### Next experiment

Critique the fresh Astra repository window and canonical-link correction. Then inspect another unseen source only after the critique.

## Exact September 8 REST search — 2026-09-10

The CLI repeated the September 9 result set even when asked for the exact September 8 partition. Use the direct REST query instead:

`"GPT-6 Astra" game in:readme pushed:2026-09-08..2026-09-08`

The corrected results exposed fresh candidates. Verify [songkeys/little-flock](https://github.com/songkeys/little-flock): the README explicitly credits GPT-6 Astra in Codex for a one-shot cooperative sheep-farming game. The repository contains React Three Fiber frontend code, a Go server, WebSocket state, persistence, progression, tests, a gameplay video and a public deployment. The live page reached its account-creation play flow; no account was created, so authenticated gameplay remains untested. Add one browser game unit with that limitation.

### Next experiment

Inspect [xindomusic/pulsebreak](https://github.com/xindomusic/pulsebreak) next. Verify the Godot native game, its GPT-6 Astra evidence, and its actual game loop.

Verify [xindomusic/pulsebreak](https://github.com/xindomusic/pulsebreak). The README explicitly credits GPT-6 Astra inside Codex for a native Godot 4.7.2 arena roguelite. Source, tests, save state, upgrades, a Reactor Guardian boss, four review rounds and an automated winning run are present. Add it under **Non-Browser Engines** because the packaged Mac app is not published as a browser build.

Verify [davbachman/Mechapede](https://github.com/davbachman/Mechapede). The README explicitly credits GPT-6 Astra for a mechanical Centipede-style arcade game. The repository contains browser game systems, audio, collision and chain motion code, tests, stress tests and a public [GitHub Pages build](https://davbachman.github.io/Mechapede/). Browser verification showed the start screen, score, wave, tools, controls and firing instructions. Add one browser game unit.

Verify [monstercameron/Neural-Sight](https://github.com/monstercameron/Neural-Sight). The README explicitly describes a playable first-person browser game built with GPT-6 Astra. The repository contains PlayCanvas/WebGPU rendering, Gaussian-splat levels, movement, ballistics, collisions, weapon state, audio, HUD and an experimental zombie encounter. The public [live build](https://monstercameron.github.io/Neural-Sight/) opened its level picker and scene-loading flow with gameplay instructions. Add one browser game unit.

Verify [venkatarangan/mangoidiots-solitaire](https://github.com/venkatarangan/mangoidiots-solitaire). The README explicitly says it was generated with GPT-6 Astra. It is a complete offline-first Draw 1 Klondike game with solvable deals, hints, undo, auto-finish, IndexedDB saves, history, responsive input, two original themes and tests. The public [custom-domain build](https://solitaire.mangoidiots.com/) opened and showed its offline-game download flow. Add one browser game unit.

### Critique result

The pass scored **8/10**. AZURA and SEABRIGHT were strong direct finds; CityMaker was a useful catalog-derived find; and the stale 404 alias was rejected correctly. Keep the method. Treat `pushed` dates as activity dates, not creation dates, and label catalog-derived discoveries as secondary.

### Next experiment

Run a non-overlapping exact-date Astra repository query for `pushed:2026-09-08..2026-09-08`. Inspect repository creation dates, source, model evidence, and game state separately.

### Exact-date batch extension

The same REST batch yielded [PULSEBREAK](https://github.com/xindomusic/pulsebreak), [Mechapede](https://github.com/davbachman/Mechapede), and [Neural Sight](https://github.com/monstercameron/Neural-Sight) after serial repository checks. Keep the three records separate: PULSEBREAK is a native Godot game, while Mechapede and Neural Sight are browser games. Do not treat the REST query's pushed date as the creation date.

### Next experiment

The exact-date REST batch scored **8/10**. Keep it in the primary rotation. Repeat the query only as a comparison audit, and inspect the next unseen direct candidate from the same response without repeating known repositories. Use the fixed evidence matrix: repository content, playable deployment, and automated or test evidence.

The next serial candidate, [venkatarangan/mangoidiots-solitaire](https://github.com/venkatarangan/mangoidiots-solitaire), passed the same matrix. Continue with the next unseen candidate, [HaileyStorm/rift-chess](https://github.com/HaileyStorm/rift-chess), and classify it after checking whether its README attribution, source and runtime evidence qualify.

[HaileyStorm/rift-chess](https://github.com/HaileyStorm/rift-chess) passed verification as a Three.js 3D chess variant with a moving board, local bot, hotseat play, save/replay features, browser offline checks, source tests, a public browser build and an Electron Windows package. Browser verification opened the kinetic chess table. Keep it in **Browser Games** because the browser build is public, and record Electron as an additional runtime.

[xinbenlv/ra2-gpt-6-astra-2026-09-04](https://github.com/xinbenlv/ra2-gpt-6-astra-2026-09-04) also qualifies as an independent browser RTS recreation. Its README explicitly credits a one-shot GPT-6 Astra experiment and documents an independently written TypeScript engine, AI, rendering, map editor, skirmish play, pathfinding and combat. The public deployment opened its live shell, but first-run play requires local or Internet Archive asset preparation. Record that limitation and do not claim an immediate playable session.

[marius4lui/NULLSPACE](https://github.com/marius4lui/NULLSPACE) qualifies as a native Godot game. Its README credits GPT-6 Astra through Codex and documents a first-person survival-horror loop with a threat AI, weapon, flashlight, connected rooms, circuits, difficulty modes and a v0.3 beta release for Linux, Windows and Android. The repository contains the Godot project, original assets, native QA, performance measurements and playtest documentation. Classify it under **Non-Browser Engines**.

[codewithdivyasree/neon-drift](https://github.com/codewithdivyasree/neon-drift) qualifies as a lightweight browser runner. Its README explicitly credits GPT-6 Astra and documents three-lane movement, jump/slide hazards, power-ups, lives, missions, combo scoring, responsive controls and local persistence. The repository contains a complete `dist/index.html`, Canvas game code, CSS and state-validation notes. No hosted demo was found, so keep the verification note clear that the source is runnable but not live-deployed.

[GaintEnemyCrabBurger/reigns-ceo](https://github.com/GaintEnemyCrabBurger/reigns-ceo) contains three variants, but only the dedicated **GPT 6 Astra** version is counted. Its source is under `game/versions/v5-sixthirty`; its public [Astra build](https://gaintenemycrabburger.github.io/reigns-ceo/gpt-6-astra/) opened with four resource bars, a founder story and a Start button. Count one Astra browser game, not the original or Claude variants.

[erictfree/DECWAR](https://github.com/erictfree/DECWAR) qualifies as a non-browser terminal game. Its README credits OpenAI GPT-6 Astra and documents a playable multiplayer space battle with ships, scanning, weapons, planet capture, construction, messaging, scoring and a Romulan opponent. The TypeScript Node.js/Telnet runtime, preserved source provenance, two variants and real multiplayer tests are present. Classify it under **Non-Browser Engines**.

[lucas-wyd/False-Ritual](https://github.com/lucas-wyd/False-Ritual) qualifies as a native Godot game. The README credits GPT-6 Astra in Codex for the playable Carter House prologue and documents exploration, environmental evidence, interactive rooms and a pursuit-and-ritual sequence. The repository contains a Godot 4.3 project, QA screenshots and a v0.1.0 release with macOS and Windows ZIPs. Classify it under **Non-Browser Engines**.

[az9713/gpt-6-astra-tennis-game](https://github.com/az9713/gpt-6-astra-tennis-game) qualifies as a native Unity game. The README credits a largely autonomous Codex/GPT-6 Astra workflow for the Robo Open tennis prototype. It documents a Windows release, serving, volleys, scoring, CPU play, practice modes, learning reports and 156 validation checks. The repository contains the Unity project, C# controller, Blender assets, tests, screenshots and evidence receipts. Classify it under **Non-Browser Engines** because no browser build is included.

[nghienvothuat-a11y/GravityBox](https://github.com/nghienvothuat-a11y/GravityBox) qualifies as a native Unity physics-puzzle game. Its README documents a 100-level campaign, 10 bosses, 23 lab stages and real rigid-body mechanics. It explicitly attributes 35 difficult levels and 10 bosses to GPT-6 Astra, with the remaining campaign work attributed to GPT-5.6 Sol. The repository contains Unity source, Android build evidence, screenshots, validators and solvability tests. Count one game unit and classify it under **Non-Browser Engines**.

[KLINEKRAFT/First-Village](https://github.com/KLINEKRAFT/First-Village) qualifies as an Unreal Engine simulation/game prototype. Its README documents an embodied ancient-village world with survival resources, agent decisions, gathering, construction, navigation, HUD and a browser simulation surface. The Unreal 5.8 project contains C++ world, agent, resource, building and navigation systems, and explicitly integrates GPT-6 Astra through the Node bridge. Classify it under **Non-Browser Engines** and label it as an early simulation prototype.

[w4coder/donify](https://github.com/w4coder/donify) qualifies as a native Unreal Engine game/simulator. The README credits GPT-6 Astra and documents six-degree-of-freedom drone flight, rotor dynamics, battery simulation, waypoint missions, telemetry, weather, audio and indoor village flight. It contains a C++ Unreal 5.8.1 project, screenshots, a native 4K gameplay recording, a source release and 23 validation markers. Classify it under **Non-Browser Engines**.

[hlforever11/gpt6-city-crisis](https://github.com/hlforever11/gpt6-city-crisis) qualifies as a GPT-6 browser strategy game. Its README documents a seven-minute real-time city crisis, eight systems, limited resources, delayed causal rules, response teams, score, casualties, replay and local saves. The repository contains a Three.js/Vite runtime, deterministic simulation, audio, WebGL fallback, tests, Playwright checks, 100 seeded runs and a public [GitHub Pages build](https://hlforever11.github.io/gpt6-city-crisis/). Browser verification opened the intro, countdown, scenario and Take Control button.

[565353780/run-on-shoes](https://github.com/565353780/run-on-shoes) qualifies as a GPT6 browser runner. Its README documents running, jumping and sprinting across a giant shoe, scale changes, laser and meteor hazards, touch controls, local assets and a complete React/TypeScript/Three.js build. The public [GitHub Pages game](https://565353780.github.io/run-on-shoes/) opened with the 3D shoe world, scale control, loading state and gameplay controls.

[565353780/fly-around-sculpture](https://github.com/565353780/fly-around-sculpture) qualifies as a GPT6 browser flight game. Its README documents a 180-second session, six-axis flight, sculpture-aperture scoring, collision, cooldowns, combo multipliers, touch controls and a leaderboard. The public [GitHub Pages build](https://565353780.github.io/fly-around-sculpture/) opened with the sculpture flight screen, model-loading state, controls and GPT6 attribution.

[Ayi1337/gpt6-astra-one-shot-games](https://github.com/Ayi1337/gpt6-astra-one-shot-games) contains two separate qualifying games: [Melon Lab](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/melon-lab) and [Mosswing](https://github.com/Ayi1337/gpt6-astra-one-shot-games/tree/main/mosswing). The README preserves the prompts and source for both. Their public demos opened successfully: Melon Lab showed fruit physics, score, energy and controls; Mosswing showed its canvas, score, start button and one-collision rules. Count two game units under one repository.

[bitofastickler/one-prompt-two-worlds](https://github.com/bitofastickler/one-prompt-two-worlds) contains two preserved game builds, but only [LASTLIGHT](https://github.com/bitofastickler/one-prompt-two-worlds/tree/main/games/lastlight) is counted because the README labels it GPT-6 Astra. The companion Last Light Lancer is GPT-5.6 Sol and is excluded. LASTLIGHT has a skiff, lighthouse defense, five tides, a Leviathan boss, upgrades, salvage, difficulty modes and offline browser launch instructions. Do not count the editorial cover as a gameplay screenshot.

[cagrikacmaz/gpt-6-astra-vs-gemini-3-8-flash](https://github.com/cagrikacmaz/gpt-6-astra-vs-gemini-3-8-flash) was rejected after a tree check. It documents an Astra browser civilization simulation and includes screenshots and recorded demonstrations, but it contains no game source, playable build or direct live-game link. Require one of those artifacts before counting a case study.

[crousty24-bit/Milady-s-Knight-godot](https://github.com/crousty24-bit/Milady-s-Knight-godot) passed verification as a native Godot game. The README credits Astra GPT-6 and describes a playable 2D action-platformer vertical slice with a two-route level, sword combat, slimes, movement mechanics, a coin-and-gate objective, persistence and 150 passing engine-level tests. The repository contains the Godot project and launch scripts, but no hosted browser build or packaged export. Add one unit to **Non-Browser Engines**.

The page-2 sweep for `"GPT-6" playable game in:readme` found five accepted game units across four new repositories: [Last Metro](https://github.com/mgoyal98/last-metro), [Game-Melon Field Lab](https://github.com/celia827/Game-Melon-Field-Lab) with two units, [Silent Meridian](https://github.com/stackloomdev/silent-meridian), [Bad Idea](https://github.com/ToukoUrsin/bad-idea), and [Failure is Not an Option](https://github.com/dan-lee-odinson/failure-is-not-an-option). Live browser verification passed for Silent Meridian and Failure is Not an Option. The others have source-backed local launch instructions; Bad Idea needs an API key for adaptive generation but keeps starter rooms playable.

Reject [Neon Kart Rush](https://github.com/NguiWeily/Neon-Kart-Rush) because its README attributes the game to GPT-5.6 Sol. Reject [Bankhar Steppe](https://github.com/gaiahead/bankhar-steppe) because its own limits describe an exploration scene without objectives or saved progress. Reject [Theandril](https://github.com/ErikBurdett/Theandril) because its GPT-6 Astra text is a future build handoff, not evidence for the current implementation. Reject [Wonder Relay](https://github.com/thepianistdirector/wonder-relay) because its README says that no playable implementation exists.

The reverse-link sweep also verified [Trial](https://github.com/pyros-projects/Trial). Its GPT-6 Astra result folders contain five separate source-backed browser games: [BLACKLINE](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/10-stealth-heist), [ECHO / SHIFT](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/12-rhythm-bullet-hell), [AERIS](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/13-drone-racing), [Embervault](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/16-procedural-roguelike), and [ECHO](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/17-echo-loop-puzzler). Each folder contains an actual HTML artifact, game-specific source or embedded engine, validation evidence and screenshots. Exclude the repository's laboratories and studios.

[danielpradilla/choplifter](https://github.com/danielpradilla/choplifter) passed as a multi-variant source repository. Count only its GPT-6 Astra [Rescue Operations](https://github.com/danielpradilla/choplifter/tree/main/choplifter-6-astra) build. The public Phaser game opened with the pilot briefing, rescue counters, hostage objective and mission controls. Exclude the GPT-5.3 Codex, GPT-5.4 and GPT-5.6 Sol variants.

[lortkipa/minecraft-astra](https://github.com/lortkipa/minecraft-astra) passed source verification as **Wilderness**, a GPT-6 Astra Minecraft-style browser game with movement, mining, combat, block placement, inventory and crafting. Its advertised Netlify preview returned a 404 during the check. Keep the repository link, but label its deployment as unavailable until a new live URL is supplied.

### Critique result

The existing critique agent scored the broad GPT-6 page-2 query **8/10** and kept it for repeatable discovery with careful review. It scored the [Trial](https://github.com/pyros-projects/Trial) reverse-link method **9/10** and kept it as the strongest clustered-game method. It scored the exact GPT-6 Astra page-2 query **8/10** and kept it as a supporting method. Apply strict deduplication, separate source verification from live verification, and reject future handoff text, benchmarks without actual game artifacts, and duplicate variants.

The critique scored the [BeatAPI/awesome-3d-prompts](https://github.com/BeatAPI/awesome-3d-prompts) reverse-link method **6/10**. Drop it as a primary method because the inspected game-engine detail yielded no repository-backed game. Keep it only as a secondary lead source, and follow a catalog entry only when it exposes direct game code.

### Next experiment

Inspect page 3 of the same exact REST query. Review each unseen repository serially. Keep requiring direct source or a playable build, direct qualifying model evidence, and an actual game loop.

### Engine and alias partition

The serial `"GPT-6 Astra" playable game in:readme` repository search produced two new qualifying game artifacts. [NeoAiLabs/sidescroller](https://github.com/NeoAiLabs/sidescroller) contains a direct `gpt-6-astra.html` result with platforming, enemies, collectibles, checkpoints, a cyber-lobster boss, win and game-over states. [aaronshaver/dig-deep-descent](https://github.com/aaronshaver/dig-deep-descent) contains a public Canvas mining game and explicitly credits a GPT-6 Astra High update for the shop, upgrades, contracts, hazards, permadeath and saves. Both records are source-backed; Dig is also live on GitHub Pages. A case-study repository and a planning repository were rejected.

The same-day Godot partition returned [GameDevBench](https://github.com/waynchi/gamedevbench), but it is a benchmark with an aggregate Astra score, not one authored game. Reject it. Keep the existing native Godot, Unity and Unreal records in **Non-Browser Engines** and keep browser artifacts separate.

The Trial reverse-link check found [Alchemia](https://github.com/pyros-projects/Trial/tree/main/results/gpt-6_astra/09-falling-sand-alchemy). It has excellent Canvas source and validation, but it is an open-ended particle sandbox with no objective or win/loss state. Do not count it under the strict game-loop rule.

### Critique result

The exact playable-game search remains useful because it added two verified units from four inspected candidates. The Godot partition had zero accepted units after excluding a benchmark. Keep the playable-game query as a supporting method, but do not broaden the Godot query without a new date, alias or source family. Continue with one changed engine or model-alias partition at a time.

### Next experiment

Run one non-overlapping `GPT6` or engine-specific repository partition. Inspect every unseen result serially. Accept only a real game artifact, direct Astra/Opus/Fable evidence and a documented game loop.

### GPT6 alias partition

The serial `"GPT6 Astra" game in:readme` query found one additional non-browser game: [VANUS // Steel Horizon](https://github.com/berlinbrown/vanus-toy-sim-gpt). The README explicitly credits GPT6 Astra and provides a C++20 / SDL3 / OpenGL mech-combat sandbox with movement, aiming, pulse weapons, 18 enemy bots, score, radar, restart, deterministic autoplay and combat tests. Add it to **Non-Browser Engines**. Reject a Facebook-video pointer, a chess replay tool, and the derivative WeChat port of the already counted Melon Lab.

### Next experiment

Use one new native-engine or model-alias partition. Inspect results serially, verify the exact repository, confirm a game loop and model evidence, then update `games.json` immediately after each pass.

### Critique result

The critique scored the playable-game query **9/10** and kept it. It scored the standalone Godot query **7/10** and dropped it because it inspected one benchmark and added no game. Use the same strict checks with a different engine keyword, and compare accepted-game yield rather than widening the Godot search cosmetically.

The next serial native partition, `"GPT-6 Astra" C++ game in:readme`, produced [Advanced Daisenryaku PC](https://github.com/eric-wen-dev-it/AdvancedDaisenryaku). It is a native Windows C/C++ port of a turn-based strategy game, with campaign state, AI turns, movement, combat, production, supply, capture, saves and ROM-differential validation. The README directly credits GPT-6 Astra High. Count it under **Non-Browser Engines**, but disclose that the original ROM is required and is not included.

The critique scored the C++ method **8/10** and kept it. It has strong evidence and repeatability, but only one candidate was fully inspected. Use another language partition next and compare yield and false-positive types.

### Claude Opus / Fable language partition

The serial `"Claude Opus 4.6" game in:readme` search found [Silent Hill — Native PC Port](https://github.com/SlickAmogus/silent-hill-decomp). The README explicitly credits Claude Opus 4.6, Claude Opus 4.7 and the newer Fable model. It documents a native, fully playable start-to-finish port with maps, bosses, cutscenes, endings, combat, enemy AI, saves, alternate cameras, mod support and tests. Count one game under **Non-Browser Engines**. Require a legally obtained original disc; do not imply that the repository redistributes game data.

### Next experiment

Run one changed Opus/Fable language or engine partition. Inspect candidates serially. Keep material native ports only when the repository contains meaningful implementation work and direct model evidence.

The critique scored the Opus query **9/10** and kept it. Novelty, verification and source quality were high. Yield was limited because only one candidate was fully inspected. Add the `playable` qualifier next to test precision against catalogs and tooling.

The precision query `"Claude Opus 4.6" playable game in:readme` confirmed the already-recorded [Dungeon of Opus](https://github.com/joozio/dungeon-of-opus); it added zero new units after canonical deduplication. Its README directly credits Claude Opus 4.6 and documents a complete roguelike with procedural dungeons, turn-based combat, seven enemy types, inventory, fog of war, permadeath, a boss and a public live demo. The linked [Wiz Experiments](https://github.com/joozio/wiz-experiments) collection was inspected as a reverse-link source. Keep the standalone Dungeon repository; reject the collection and entries without exact Opus/Fable attribution.

### Next experiment

Run one new Opus/Fable query or reverse-link pass. Inspect each unseen repository serially, and prefer direct source plus live gameplay evidence.

The initial critique scored the precision query **9/10**, but canonical deduplication corrected this pass to zero new units. Re-score the method using the corrected yield before deciding whether to keep it as a primary search.

The correction audit scored the deduplicated method **6/10** and dropped it. Its verification and false-positive controls were strong, but it had zero novelty and zero new-game yield. Keep deduplication as a rule, not this exact query as a primary method. Change the platform term next.

### Exact build-phrase partition

The serial `"built entirely by Claude Opus 4.6" game in:readme` search found [MineClaude](https://github.com/snek-git/mineclaude). The README directly credits Claude Opus 4.6 and documents a native Rust/Bevy survival game with voxel terrain, caves, mining, crafting, combat, mobs, hunger, farming, storage, saves and death/respawn. It includes screenshots and native build instructions. Add it to **Non-Browser Engines**.

### Next experiment

Run one changed Opus/Fable build phrase or engine partition. Inspect each unseen candidate serially and deduplicate before counting.

The critique scored the exact build-phrase method **9/10** and kept it. It produced one accepted game from one inspected candidate with strong source and attribution evidence. Test the alternate phrase `made with Claude Opus 4.6` next.

### Made-with attribution query

Run the serial GitHub repository query `"made with Claude Opus 4.6" game in:readme`. The current GitHub repository index returned zero matches. Do not treat an empty index result as proof that no such games exist. Record zero new repositories and zero new game units, then change the attribution phrase or source family.

The existing critique agent scored the method as follows: novelty **1/10**, yield **1/10**, verification quality **3/10**, repeatability **9/10**, source quality **3/10**, false-positive control **8/10**, overall **4/10**. Drop this exact query under the below-8 rule. Keep its reproducibility as a diagnostic, not as a primary discovery method.

### Next experiment

Test the changed phrase `"built using Claude Opus 4.6" game in:readme` serially. If it also returns no useful unseen repositories, switch to reverse-link or curated-list discovery. Apply canonical deduplication before assigning yield or counting games.

### Changed build-phrase query

Run the serial query `"built using Claude Opus 4.6" game in:readme`. Inspect all three returned repositories. Reject [DnD-Forge](https://github.com/jgough-essextec/DnD-Forge) as a D&D character and campaign management application, [LinCaster](https://github.com/GrantAbell/LinCaster) as a virtual audio driver, and [formal-learning-theory-book](https://github.com/Zetetic-Dhruv/formal-learning-theory-book) as a textbook. The pass adds zero qualifying game units.

The existing critique agent scored novelty **2/10**, yield **1/10**, verification quality **9/10**, repeatability **9/10**, source quality **6/10**, false-positive control **10/10**, overall **6/10**. Drop this exact phrase under the below-8 rule. Keep its rejection discipline and move to inbound-link discovery.

### Next experiment

Search inbound GitHub code links for one previously verified Claude-attributed game repository. Inspect every unseen linking repository serially. Require direct game source and playable or build evidence before acceptance.

### Recent Fable repository partition

Run the serial query `Fable 5.1 game in:readme pushed:2026-09-09..2026-09-10`. Inspect eight repositories one at a time. Accept [Turbo Kart Rush](https://github.com/claudio41cg-max/rio-rush-cross), [Branch Zero](https://github.com/JaCoderX/Branch-Zero), [BLOCKS](https://github.com/Nipale-ai/blocks-openworld), [Commander Simulator](https://github.com/tuitamogamer-gpt/mtg-commander-simulator), and [AOT FABLE 5.1](https://github.com/Ashen-Skool/Aot-Fable-5.1). Reject [mystars](https://github.com/hugefiver/mystars) as unavailable evidence, [Free Will](https://github.com/makseq/freewill) as an open-ended simulation collection, and [LLMs Robot Arena](https://github.com/nigrosimone/llms-robot-arena) because the model-attributed work is its bot controllers, not the game engine.

The critique scored novelty **9/10**, yield **9/10**, verification quality **9/10**, repeatability **9/10**, source quality **9/10**, false-positive control **9/10**, and overall **9/10**. Keep this recent Fable partition. Apply the same source, attribution, game-loop and deduplication checks to the next date window.

### Curated-list direct-source expansion

Use the game section of [MartinDelophy/awesome-gpt-6-astra](https://github.com/MartinDelophy/awesome-gpt-6-astra) as a lead list. Follow direct GitHub source links, then inspect each repository serially. Accept [BLACKWATER](https://github.com/Hiraeth010/blackwater), [The Free Game](https://github.com/LucasMarquesShiva/the-free-game), [Magic Carpet Wizard](https://github.com/threapchills/MagicCarpetWizard), [Last Beacon](https://github.com/stackloomdev/last-beacon), [Silent Meridian](https://github.com/stackloomdev/silent-meridian), and [CityMaker](https://github.com/derek-wangpch/OpenCityMaker). Record the repository, model evidence, game loop, demo, screenshots and engine classification immediately after verification.

The critique scored novelty **10/10**, yield **10/10**, verification quality **9/10**, repeatability **8/10**, source quality **9/10**, false-positive control **10/10**, and overall **9/10**. Keep this method. Do not count catalog totals, X-only entries, screenshots, or direct links without accessible game source.

### Dropped precision query

Run `Fable 5.1 playable game in:readme pushed:2026-09-09..2026-09-10`. It returned two curated catalogs and no new direct game repositories. The critique scored novelty **2/10**, yield **1/10**, verification quality **7/10**, repeatability **9/10**, source quality **5/10**, false-positive control **8/10**, and overall **5/10**. Drop this exact query as a primary method. Reverse-link the catalogs to direct repository targets instead.

### Next experiment

Expand [xianyu110/awesome-gpt-6-astra](https://github.com/xianyu110/awesome-gpt-6-astra) or [archorfight/awesome-gpt-6-astra](https://github.com/archorfight/awesome-gpt-6-astra). Inspect each unseen direct game repository serially. Require source, game loop, and GPT-6 Astra, Claude Opus, or Claude Fable evidence before counting.

### Deduplication correction

Recheck the recent Fable and MartinDelophy passes against canonical repository URLs before reporting yield. The Fable pass added only three new units: [Turbo Kart Rush](https://github.com/claudio41cg-max/rio-rush-cross), [Branch Zero](https://github.com/JaCoderX/Branch-Zero), and [Commander Simulator](https://github.com/tuitamogamer-gpt/mtg-commander-simulator). It confirmed [BLOCKS](https://github.com/Nipale-ai/blocks-openworld) and [AOT FABLE 5.1](https://github.com/Ashen-Skool/Aot-Fable-5.1), which were already present.

The six direct repositories from the MartinDelophy catalog were also already present. Count zero new units from that expansion. The corrected critique scores the Fable method **8/10** overall and keeps it. It scores the MartinDelophy expansion **6/10** overall and drops it as a discovery method; keep it only for confirmation audits.

Run the next catalog expansion against a different independent list. Deduplicate before inspection and count only new canonical repositories.

### Dropped catalog methods

Audit [archorfight/awesome-gpt-6-astra](https://github.com/archorfight/awesome-gpt-6-astra) direct project links. Confirm [Red Alert 2](https://github.com/xinbenlv/ra2-gpt-6-astra-2026-09-04) and [NULLSPACE](https://github.com/marius4lui/NULLSPACE) as existing records. Reject [agent-bluff](https://github.com/paveljor/agent-bluff) because models are tournament players, not authors of the game engine. Add zero new units.

Audit [MiaAI-Lab/GPT-6-Astra-100-HTML-Files](https://github.com/MiaAI-Lab/GPT-6-Astra-100-HTML-Files). Inspect all 100 prompt metadata files. Confirm that they describe visual studies, interfaces, physics toys or art experiments, not objective-based games. Add zero units and reject the catalog.

The existing critique agent scores both methods **6/10** overall and drops both under the below-8 rule. Keep their rejection evidence. Do not use broad visual-study or mixed tool catalogs as primary discovery sources.

### Next experiment

Inspect [helloianneo/awesome-gpt6-astra](https://github.com/helloianneo/awesome-gpt6-astra) or another explicit game catalog. Follow only direct GitHub game-source links. Deduplicate before counting and require a documented game loop.

### Direct-file audit from GitHub code search

Search for `"GPT-6 Astra" game` and follow the direct source hit [buildfastwithai/gen-ai-experiments](https://github.com/buildfastwithai/gen-ai-experiments). Its [AI Arcade index](https://github.com/buildfastwithai/gen-ai-experiments/blob/main/ai-creations/index.html) maps model labels to separate playable HTML files. Verify each file serially from the repository tree and raw source:

- [Bengaluru — After the Rain](https://github.com/buildfastwithai/gen-ai-experiments/blob/main/ai-creations/gpt%206%20astra/bangalore.html) — GPT-6 Astra, Three.js, open-world movement, vehicles, health/stamina, police and respawn.
- [BLR / After Hours — Open World](https://github.com/buildfastwithai/gen-ai-experiments/blob/main/ai-creations/gpt%206%20astra/gta.html) — GPT-6 Astra, Three.js, driving, vehicle entry/exit, punching, police, WASTED and respawn.
- [Phosphor Siege](https://github.com/buildfastwithai/gen-ai-experiments/blob/main/ai-creations/fable%205.1/space-invaders.html) — Claude Fable 5.1, Canvas arcade waves, shields, shooting and game-over progression.

Exclude the adjacent [Ramayana cinematic](https://github.com/buildfastwithai/gen-ai-experiments/blob/main/ai-creations/gpt%206%20astra/ramayana.html). Its play/pause and seek controls operate a 90-second cinematic, not a player game loop.

### Critique result

Score this direct-file method **8/10** overall: novelty **8**, yield **8**, verification quality **9**, repeatability **8**, source quality **9**, and false-positive control **9**. Keep it. It added three units from one canonical repository and rejected the cinematic. The next pass must use a changed Astra alias or an Opus/Fable direct-source query, and it must keep the same objective/state/end-state checks for open-world entries.

The explicit game catalogs [helloianneo/awesome-gpt6-astra](https://github.com/helloianneo/awesome-gpt6-astra) and [zlxxlz1026/awesome-gpt-6-astra-casebook](https://github.com/zlxxlz1026/awesome-gpt-6-astra-casebook) were also inspected. They contain X links, screenshots, prompts and videos, but no direct GitHub game repositories for their listed game entries. Reject them as primary collection sources; retain them only for lead generation.

### Dropped GPT6 Astra engine-catalog combination

Run the serial query `"GPT6 Astra" "Unreal Engine" game in:readme`, then expand direct links from [magiccreator-ai/awesome-gpt-6-astra](https://github.com/magiccreator-ai/awesome-gpt-6-astra). The search confirmed existing [First Village](https://github.com/KLINEKRAFT/First-Village) and [Donify](https://github.com/w4coder/donify). Four unseen links were rejected: [holo-card-studio](https://github.com/EverettFish/holo-card-studio) is a card-generation tool, [model-x-studio](https://github.com/ashemag/model-x-studio) is a vehicle viewer, [abyssal-living-deep](https://github.com/emollick/abyssal-living-deep) is an open-ended artistic ecology simulation, and [orbital-core-showcase](https://github.com/wangruofeng/orbital-core-showcase) is a Three.js model showcase.

### Critique result

Score this combined method **6/10**: novelty **2**, yield **1**, verification quality **9**, repeatability **8**, source quality **8**, and false-positive control **10**. Drop it as a primary discovery method. Keep the two confirmations and rejection evidence. Change both the model family and the source pattern next: search direct Claude Opus or Fable native-engine repositories, and require source plus a game loop before counting.

### Claude Opus direct build-attribution query

Run the serial query `"built with Claude Opus 4.6" game in:readme`. Accept five unseen repositories after checking their README, source layout and run or demo evidence:

- [AI Choose Now!](https://github.com/ehewlett3/AI-Choose-Now) — local-AI branching adventure with streaming narrative, choices, undo, persistence and export.
- [Arena Shooter 3D](https://github.com/UniverseKing4/arena-shooter-3d) — native Android Kotlin/OpenGL ES wave shooter with weapons, enemies, power-ups, scores and game-over progression.
- [Missile Command](https://github.com/argusbrown/missile_command) — single-file Canvas game with cities, bases, counter-missiles, chain explosions, waves, MIRVs and scoring.
- [A Game](https://github.com/sfgeekgit/game_e) — live React/Django clicker with anonymous accounts and persistent server-side points.
- [Minesweeper](https://github.com/Fable-11/minesweeper) — Pygame Minesweeper with three difficulties, eight themes, win/loss state, streaks, statistics and saved best times.

### Critique result

Score this Opus method **9/10**: novelty **9**, yield **9**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **9**. Keep it. It added five game units from five inspected repositories and widened the collection with Android and Pygame non-browser engines. Repeat the phrase on a later date window, then run the same checks for Claude Fable 5.1 native-engine projects.

### Claude Fable direct attribution query

Run the serial query `"Claude Fable 5.1" game in:readme`. After canonical deduplication, accept two new repositories:

- [BuildYourTown](https://github.com/Rapsody09/buildyourtown) — live TypeScript/Canvas city-builder with zoning, roads, rails, electricity, water, economy, services, traffic, disasters, progression, bankruptcy and saves. The README explicitly credits Claude Fable 5.1 and links [buildyourtown.com](https://buildyourtown.com).
- [SQL Boss Battle Game](https://github.com/raishaldhawan23/SQL-Boss-Battle-Game-) — live single-file browser game with an eight-boss, 72-puzzle campaign, real SQL.js validation, endless runner, daily boss, sandbox, streaks and leaderboard. The README explicitly credits Claude Fable 5.1.

The pass also confirmed existing [fable51-worlds](https://github.com/PhiloLabs/fable51-worlds), [fable-5.1-mario](https://github.com/INONONO66/fable-5.1-mario), [apex-formula](https://github.com/bridge-mind/apex-formula) and [turbo-kart-grand-prix](https://github.com/Franklin-C/turbo-kart-grand-prix). Do not count those repositories twice.

### Critique result

Score this Fable method **9/10** overall: novelty **8**, yield **8**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **9**. Keep it. The next experiment should use engine-specific partitions such as `Claude Fable 5.1 Pygame game in:readme` and `Claude Fable 5.1 Godot game in:readme` to improve non-browser coverage.

### Fable date-window and engine triage

The date-window search `"Claude Fable 5.1" game in:readme pushed:2026-09-09..2026-09-10` produced one new direct game after serial inspection: [GLUP — Nila y el pez gato](https://github.com/gavilanbe/glup). It is a live HTML/JavaScript Canvas PWA platformer with four themed levels, collectible abilities, hazards, checkpoints, saved times, enemies and a heron boss. The README explicitly credits Claude Fable 5.1.

The narrower `Pygame` and `Godot` variants produced mostly star lists, catalogs and tools in the inspected slice, with no new accepted repository. Do not use those broad forms as primary methods.

### Critique result

Score the combined pass **8/10**: novelty **8**, yield **7**, verification quality **9**, repeatability **8**, source quality **9**, and false-positive control **9**. Keep the date-window search, but drop the broad Pygame and Godot forms. Use a narrow Fable build phrase or a new direct-source catalog expansion next.

### Narrow Fable build phrase

Run `"Claude Fable 5.1" "built" game in:readme` and inspect each unseen direct repository serially. Accept:

- [Elk Dismount](https://github.com/thevangelist/elk-dismount) — Three.js/Rapier traffic-survival game. Control a bull moose, create traffic damage for score, survive the round and receive a generated newspaper report. The README explicitly says the code and design came from Claude Fable 5.1 conversations.
- [Neon Snake — Fable baseline](https://github.com/kinncj/neon-snake/tree/main/claude-code-fable) — Phaser 4 game with five levels, combo progression, deterministic simulation, palettes, music, replay logs, tests and a [live build](https://kinncj.github.io/neon-snake/claude-code-fable/). Count only the Fable baseline; exclude the Qwen and opencode comparison builds in the same repository.

### Critique result

Score the narrow phrase **9/10**: novelty **9**, yield **9**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **10**. Keep it. The next pass should repeat the phrase on a later push window or use a native-engine Fable variant, while preserving the rule that multi-model repositories contribute only the explicitly attributed model build.

### Dropped broad native-engine Fable query

Run `"Claude Fable 5.1" native game in:readme`. Reject three direct candidates:

- [MKW-Quest3](https://github.com/JBuildr/MKW-Quest3) is a Mario Kart Wii Quest port. Fable assisted port patches and build scripts; it did not author the game.
- [fable51-chess-24hrs](https://github.com/stevemaughan/fable51-chess-24hrs) is a UCI chess-engine benchmark deliverable, not a standalone playable game application.
- [werewolf-ai-party-game](https://github.com/hiper2d/werewolf-ai-party-game) is a real game, but Fable is only a selectable Game Master or bot model, not the game author.

### Critique result

Score the broad native query **6/10**: novelty **2**, yield **1**, verification quality **9**, repeatability **8**, source quality **7**, and false-positive control **10**. Drop it. Keep the three rejection patterns as safeguards: model-assisted ports, benchmark engines and model-as-player projects must not enter the authored-game list.

### Fable playable-game query

Run `"Claude Fable 5.1" playable game in:readme`. Accept [SPICE — a card game for couples](https://github.com/Hiberius/couples-card-game). It has a live offline PWA, 500 cards, three escalating levels, seven formats, ten categories, pass handling, turn switching, saved favorites and custom decks. Its README explicitly credits Claude Fable 5.1 and provides screenshots and a live URL.

Reject [Wonder Relay](https://github.com/thepianistdirector/wonder-relay) and [Drift Concord](https://github.com/thepianistdirector/drift-concord). Both README files explicitly state that the repositories are planning documents with concept art and no implementation or playable build.

### Critique result

Score this playable-game query **8/10**: novelty **8**, yield **8**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **10**. Keep it with strict live-demo and implementation checks. The next pass should use a later push-date window or a new direct Fable source catalog.

### Claude Fable Roblox build comparison query

Run the serial query `"Fable 5.1" game in:readme pushed:2026-09-08..2026-09-10`. Inspect [blender-roblox-experiment](https://github.com/mrfqcentic/blender-roblox-experiment). Accept one unit: [STARLANE — Fable 5.1 build](https://github.com/mrfqcentic/blender-roblox-experiment/tree/main/fable-5.1). The README identifies Run A as a fully autonomous Claude Fable 5.1 build and describes a Roblox rail shooter with formations, rail-camera flight, combat, enemy fire, damage, emergency warp, run-over scoring, hangar upgrades, shipyard, loadouts, missions and a leaderboard. It provides an isolated source tree, Roblox/Luau/Rojo tooling, 242 green tests and real Fable-build screenshots. Exclude the separate GLM 5.3 Flash workspace in the same repository.

### Critique result

Score this method **9/10**: novelty **9**, yield **8**, verification quality **10**, repeatability **8**, source quality **10**, and false-positive control **10**. Keep it. The result validates engine-specific searches and the rule to count only the explicitly attributed workspace in multi-model comparison repositories.

### Next experiment

Run narrow serial searches for `"Claude Fable 5.1" Roblox game in:readme`, `"Claude Fable 5.1" Unity game in:readme`, `"Claude Fable 5.1" Godot game in:readme`, and `"Claude Fable 5.1" Unreal game in:readme`. Inspect every unseen repository one at a time. Require a real game loop, source, and direct authorship evidence.

### Claude Fable multi-game code-search audit

Run the serial code search `"Claude Fable 5.1" game`. Inspect [Fable Arcade](https://github.com/sorrycc/fable-arcade) at repository, directory, and source-file level. Confirm the eight existing units: [Flappy Skies](https://github.com/sorrycc/fable-arcade/tree/main/games/flappy-bird), [World 1-1](https://github.com/sorrycc/fable-arcade/tree/main/games/mario-1-1), [Frostline Kart](https://github.com/sorrycc/fable-arcade/tree/main/games/mario-kart-snow), [Robo Tennis](https://github.com/sorrycc/fable-arcade/tree/main/games/robot-tennis), [Rail Rush](https://github.com/sorrycc/fable-arcade/tree/main/games/subway-runner), [Crossy Farm](https://github.com/sorrycc/fable-arcade/tree/main/games/crossy-farm-car), [Hollowmere](https://github.com/sorrycc/fable-arcade/tree/main/games/terraria-sandbox), and [Fable Theft Auto 5.1](https://github.com/sorrycc/fable-arcade/tree/main/games/voxel-gta-city). The repository README gives model, date, exact-prompt provenance and a live GitHub Pages URL for every unit. Each source file is a self-contained HTML game with rendering, input or interaction, state, and an objective, score, progression or end-state condition. Three units use Three.js/WebGL; the others use Canvas or DOM rendering. After canonical deduplication, this pass added zero new units.

Reject [ERN-Roblox-Horror](https://github.com/ERN-Studios/ERN-Roblox-Horror): its Fable text is a review prompt for an existing game, not authorship evidence. Reject [awesome-claude-fable-5](https://github.com/Anil-matcha/awesome-claude-fable-5) as a catalog because its game cases point to demos and X posts instead of direct GitHub game source.

### Critique result

Score this pass **7/10**: novelty **4**, yield **1**, verification quality **10**, repeatability **8**, source quality **10**, and false-positive control **10**. Keep it only as a confirmation audit. Preserve the per-file audit rule for future multi-game repositories, but do not count confirmed repositories twice.

### Next experiment

Run `"Claude Fable 5.1" HTML GitHub Pages game`, exclude [sorrycc/fable-arcade](https://github.com/sorrycc/fable-arcade), and inspect every new repository serially. Continue the engine-specific Roblox, Unity, Godot, and Unreal searches after this high-yield path.

### Claude Fable HTML and GitHub Pages query

Run `"Claude Fable 5.1" HTML "GitHub Pages" game` and exclude canonical repositories already in `games.json`. Accept [PAC-CLONE](https://github.com/boromisp/pacman-clone). Its README directly credits Claude Fable 5.1 and documents a complete Pac-Man ruleset, Canvas rendering, four ghost targeting personalities, scatter/chase waves, levels, lives, scoring, sound, input, pause, leaderboard, PWA behavior and a live [GitHub Pages build](https://boromisp.github.io/pacman-clone/). Confirm the source modules and game-state loop before counting it.

Confirm [Turbo Kart Rush](https://github.com/bridge-mind/turbo-kart-rush) as an existing record. Reject [Open Rebellion](https://github.com/tdimino/open-rebellion): it is a substantial Rust/macroquad reimplementation, but the inspected repository does not provide Claude Fable 5.1 authorship evidence.

### Critique result

Score this method **9/10**: novelty **8**, yield **8**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **10**. Keep it. The next test should use the narrower Canvas plus GitHub Pages partition, with full canonical deduplication before counting.

### Next experiment

Run `"Claude Fable 5.1" Canvas "GitHub Pages" game`. Inspect every unseen result serially. Require direct source, model authorship, a complete game loop, and a working or documented live build.

### Claude Opus engine and game code-search pass

Run the serial code search `"Claude Opus 4.6" game`. Accept three new games after checking the repository README and implementation evidence:

- [FW16 Pong Wars](https://github.com/boobcactus/fw16-pongwars) — Rust native Windows game for one or two Framework Laptop 16 LED Matrix modules, with configurable balls, speed, brightness, pause, reset, settings and release artifacts. The README credits Claude Opus 4.6.
- [My Snowboard](https://github.com/petersomerville/mysnowboard) — live [Canvas browser game](https://my-snowboard.vercel.app/) with rider setup, hill difficulty, weather, trick charging, landing timing, health, game over, coins, gear upgrades, two-player mode and leaderboard. The README says it was built with Claude Opus 4.6 and Cursor.
- [Reverse Loving — Gnivol](https://github.com/trieuwu/Gnivol) — Java/LibGDX 2D point-and-click meta-horror demo with Reality Stability, persistent memory and operating-system interaction. The README credits Claude Opus 4.6 Extended among its AI-assisted development tools.

Reject model-as-player or model-as-supervisor projects such as [Polytopia Claude](https://github.com/augustallen/polytopia-claude), [So Long Sucker](https://github.com/lout33/so-long-sucker), [CFD_Game](https://github.com/DeiuVRG/CFD_Game), and [Texas Hold'em Arena](https://github.com/YX-S-Z/texas-holdem-arena). Reject [dream-loop-volnolom](https://github.com/Mahgn/dream-loop-volnolom) as a skill/visual demo, [Vibeslinger](https://github.com/nicholasspencer/vibeslinger) as an AI tutorial, [Rikugan](https://github.com/buzzer-re/Rikugan) as reverse-engineering tooling, and [World of Vikings](https://github.com/vibe-code-repo/worldofvikings) as an incomplete placeholder without direct Fable authorship evidence.

### Critique result

Score this pass provisionally **9/10**: novelty **9**, yield **9**, verification quality **9**, repeatability **8**, source quality **9**, and false-positive control **10**. Keep it. It adds browser and non-browser engine coverage while preserving the model-authorship rule.

### Next experiment

Run a date-windowed Opus search over newly pushed repositories, then search direct phrases such as `"built with Claude Opus 4.6" game`. Inspect every unseen repository serially and keep native-engine games in the dedicated README category.

### Reverse-link expansion from the Claude Opus census

Expand the direct game entries in [jphein/opus](https://github.com/jphein/opus). Inspect [Raft](https://github.com/echosoar/raft) and [Math Defense: The Last Frontier](https://github.com/dmbartles/math-defense-the-last-frontier) serially.

- [Raft](https://github.com/echosoar/raft) — single-file Three.js/WebGL survival and building game. The README explicitly says it was written entirely with Claude Opus 4.6. It has collection, rowing, movement, raft expansion, multi-level structures, demolition, source and a live [demo](http://aiznb.com/raft/).
- [Math Defense: The Last Frontier](https://github.com/dmbartles/math-defense-the-last-frontier) — single-file Canvas defense game. Its README identifies it as a Claude Opus 4.6 experiment. Source inspection confirms a title screen, HUD, answer grid, math interactions, waves, score, ammo, narrative choices, collision and game-over state. No live deployment was found.

Reject [DodgeRock](https://github.com/exactlyallan/DodgeRock) because its README says it was built with Cursor and the repository has no Opus attribution. Reject [artcardsv5](https://github.com/jphein/artcardsv5) as an artwork carousel, [Zork-Opus](https://github.com/liquidsnakeblue/Zork-Opus) as an Opus agent playing the existing Zork game, and [Marketmon](https://github.com/jorgoose/marketmon) because it has no direct Opus authorship evidence.

### Critique result

Score this method **9/10**: novelty **9**, yield **8**, verification quality **9**, repeatability **8**, source quality **9**, and false-positive control **10**. Keep it. A maintained Opus census can produce direct game repositories, but every link still needs source-level authorship and game-loop verification.

### Next experiment

Expand a different established Opus catalog or project with direct links. Exclude all canonical records first. Inspect each new repository serially and require direct Astra, Opus or Fable authorship evidence.

### Dropped low-yield partitions

Run the Canvas plus GitHub Pages, Godot, Unreal, date-windowed Opus, and date-windowed Fable partitions serially. They produced no new qualifying games after deduplication. The Fable date-window pass found [Free Will](https://github.com/makseq/freewill), but its seven entries are deterministic research simulations, not objective-based games. The Godot and Unreal searches returned catalogs, skills, incomplete demos and tools. The date-windowed Opus search returned no new qualifying game.

### Critique result

Drop all four partition methods. The critic scored the batch **5/10** overall: novelty **2**, yield **1**, verification quality **8**, repeatability **9**, source quality **6**, and false-positive control **9**. Keep the rejection rules, but stop using these partitions as primary discovery paths.

### Next experiment

Start a new reverse-link expansion from a high-yield Opus or Fable anchor. Exclude every canonical repository before inspection. Require direct source plus playable or build evidence.

### Claude Opus game code-search with native-engine triage

Run the serial GitHub code search `Claude Opus 4.6 game`. Inspect repositories with an actual game README or game source. Accept three new repositories:

- [Pixel Tactical Shooter](https://github.com/Vadaski/pixel-tactical-shooter) — a live Three.js/WebGL browser tactical FPS. The README documents maps, bots, weapons, objectives and tests. The initial game commit explicitly describes the game and carries a `Co-Authored-By: Claude Opus 4.6` trailer.
- [Math Mage](https://github.com/Nakamuro-unl/GodotActionGame) — a Godot 4.6 action game with stages, enemies, skills, menus, rankings, virtual controls and 290 passing tests. Multiple implementation commits carry `Co-Authored-By: Claude Opus 4.6` trailers. Count it as source-verified because no stable public demo was found.
- [morBreaker](https://github.com/KingMordas/mor-breaker) — a Unity 6 2D brick-breaker with ten levels, score/lives/win flow, local high scores and Windows/WebGL targets. Its initial public-import and later release commits carry `Co-Authored-By: Claude Opus 4.8` trailers. Route it to the separate non-browser-engine section even though it also has a WebGL target.

This pass adds three game units and improves native-engine coverage. It confirms that code-search results are useful when the search result is only a lead and the final decision uses repository contents plus commit history. Drop candidates where `CLAUDE.md` only describes how an agent should work but the repository has no direct model-use evidence.

### Critique result

The existing critique agent scored this pass **9/10** overall: novelty **9**, yield **9**, verification quality **9**, repeatability **8**, source quality **9**, and false-positive control **8**. Keep the method. The critic notes that a `Co-Authored-By` trailer is strong attribution evidence but does not prove that the model created the whole game, so retain direct source and playable/build checks. Track `morBreaker` as Claude Opus 4.8, separate from the Opus 4.6 results.

### Next experiment

Inspect the remaining direct Opus code-search candidates one at a time. Prioritize actual game READMEs, source trees and release or live-build evidence. Continue expanding another Opus or Fable census after this queue.

### Reverse-link expansion from Claude Playground multi-stack arcade

Follow the exact Claude Opus commit-attribution trail to [Claude Playground](https://github.com/vi-o-al-ai/claude_playground). Inspect the repository tree one directory at a time. Accept seven independent games from one verified repository:

- [In a Nutshell](https://github.com/vi-o-al-ai/claude_playground/tree/main/games/web/in-a-nutshell)
- [Solitaire](https://github.com/vi-o-al-ai/claude_playground/tree/main/games/web/solitaire)
- [Space Invaders](https://github.com/vi-o-al-ai/claude_playground/tree/main/games/web/space-invaders)
- [Splendor](https://github.com/vi-o-al-ai/claude_playground/tree/main/games/web/splendor)
- [Sudoku](https://github.com/vi-o-al-ai/claude_playground/tree/main/games/web/sudoku)
- [Tic Tac Toe](https://github.com/vi-o-al-ai/claude_playground/tree/main/games/web/tic-tac-toe)
- [Zombie Lane Runner](https://github.com/vi-o-al-ai/claude_playground/tree/main/games/godot/runner)

The README describes a browser arcade mostly written with Claude Code and gives a live [GitHub Pages site](https://vi-o-al-ai.github.io/claude_playground/). The six web packages have game descriptions in `package.json`; the Godot package has `arcade.json`, Godot project files, gameplay scenes and tests. The repository history includes Opus-attributed game work, including the Godot runner feature commit. Count each package once. Route Zombie Lane Runner to the separate non-browser engine section even though it has a Web export.

### Critique result

The critique agent scores this expansion **8/10** overall: novelty **7**, yield **9**, verification quality **8**, repeatability **8**, source quality **9**, and false-positive control **8**. Keep it as seven repository-level Claude/Opus-provenance units. The limitation is important: attribution is not separately attached to every package, so the README and record must state that clearly.

### Next experiment

Search exact `Co-Authored-By Claude Opus 4.6` commit trails and inspect game-named repositories serially. Expand another multi-game repository only after verifying every contained game directory.

### Exact Opus commit-trailer game search

Run the serial GitHub commit search `game Co-Authored-By Claude Opus 4.6`. Inspect each game-named repository and its source. Accept:

- [Toy Box Siege](https://github.com/Jaxsbr/toy-box-siege) — a Phaser/Vite bedroom tower-defense game with levels, enemy waves, weapons, bosses and visual effects. Game implementation commits carry repeated Claude Opus 4.6 trailers.
- [WordGirl](https://github.com/rickymetz/wordgirl) — five source-backed word games: [Polygram](https://github.com/rickymetz/wordgirl/tree/main/src/games/polygram), [Crosshatch](https://github.com/rickymetz/wordgirl/tree/main/src/games/crosshatch), [Pierglass](https://github.com/rickymetz/wordgirl/tree/main/src/games/pierglass), [Doublet](https://github.com/rickymetz/wordgirl/tree/main/src/games/doublet) and [Serpentine](https://github.com/rickymetz/wordgirl/tree/main/src/games/serpentine). The README documents each rule loop and the repository history contains Opus-attributed implementation work.
- [Blackjack](https://github.com/reytoyogassky/BLACKJACK) — a Next.js multiplayer Blackjack game with rooms, betting and player actions. Its initial game commit carries a Claude Opus 4.6 trailer. Do not count the later Cekih addition because the cited initial attribution directly proves Blackjack only.

Hold [Drone Wars](https://github.com/shrimalmadhur/drone-wars). Its README and JavaScript source prove a playable Three.js aerial-combat prototype, but the exact Opus commit returned 404 during the verification pass. Retry it after GitHub rate limits clear; do not count it until the attribution URL resolves.

This pass adds seven game units from three repositories. It confirms that exact commit trailers are a high-yield discovery method. Keep the 404 hold rule and inspect each game source before counting.

### Critique result

Manual review scores this method **9/10** overall: novelty **9**, yield **9**, verification quality **9**, repeatability **8**, source quality **9**, and false-positive control **9**. Keep it.

### Next experiment

Retry Drone Wars through direct repository history after the rate limit clears. Then search exact Opus 4.6 trailers with engine terms and inspect each repository serially.

### Exact Opus commit-trailer game implementation follow-up

Continue the serial GitHub commit search `game Co-Authored-By Claude Opus 4.6`. Accept one explicitly attributed game from each of five repositories:

- [Realistic Survival](https://github.com/liuyixuan5678/offline-games/tree/main/realistic-survival) — standalone HTML top-down shooter with waves, weapons and game-over/victory UI. The game-addition commit carries an Opus 4.6 trailer.
- [PVP Tetris](https://github.com/wodud1378/PVP-Tetris/tree/main/Tetris.App) — C#/.NET WPF desktop game with a shared `GameEngine`, rotation, scoring, randomizer, server and tests. The engine commit carries multiple Opus 4.6 trailers. Route it to non-browser engines.
- [Fuzhou Mahjong](https://github.com/minyic7/fuzhou-mahjong/tree/main/apps/web) — React/Vite client plus server, bots, claims, scoring, rounds and game-over flow. The next-round commit carries Opus 4.6 trailers.
- [Quiz](https://github.com/cmarangon/quiz/tree/develop/app) — Laravel/Livewire/Reverb real-time party trivia game with host, player and spectator screens. The implementation commit carries Opus 4.6 trailers.
- [JE Trivia](https://github.com/johankiilavirta/jeopardy/tree/main/src) — React Native/Expo Jeopardy-style game with question library, buzzer, wagers, sessions, scoring and game-over screens. A gameplay commit carries Opus 4.6 trailers. Route it to non-browser engines because the primary target is native iOS.

This pass adds five game units. It confirms that exact commit trailers remain high-yield when paired with source inspection. Count only the explicitly attributed game when a repository contains unrelated games.

### Critique result

The critique agent scores this pass **9/10** overall: novelty **9**, yield **9**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **9**. Keep it. A commit trailer proves attribution for that implementation commit, but not necessarily for every file or the full repository history.

### Next experiment

Inspect the remaining exact-trailer candidates with game source one at a time. Retry the held Drone Wars attribution URL after GitHub rate limits clear. Then use engine-specific exact-trailer searches for Phaser, Godot, Unity, WPF and native mobile.

### Exact Opus commit-diff supporting-game audit

Inspect [dnd-14th-6-frontend](https://github.com/dnd-side-project/dnd-14th-6-frontend) and its game source. Accept [Orvit Timed Tech Quiz](https://github.com/dnd-side-project/dnd-14th-6-frontend/tree/develop/src/app/game/play) as one game unit. The Next.js source implements Git/Linux/Docker categories, four difficulty modes, timed answer cards, tutorial, scoring, audio, clear/timeout states and result navigation. The cited Opus commit adds the game header, score table, timer and time-bar components, with repeated `Co-Authored-By: Claude Opus 4.6` trailers.

Label this record `supporting_feature_attribution`. The commit proves direct Opus work on gameplay UI, but it does not prove that Opus authored the entire repository. Keep this attribution scope visible in the generated README.

### Critique result

The critique agent scores this audit **8/10** overall: novelty **8**, yield **8**, verification quality **8**, repeatability **9**, source quality **9**, and false-positive control **8**. Keep it only with the supporting-feature attribution label.

### Next experiment

Inspect direct game implementation diffs serially. Classify each result as core gameplay, supporting gameplay or repository-level attribution. Continue exact engine-specific Opus searches.

### Exact Opus commit-diff expansion from remaining game repositories

Inspect the remaining game-named results serially. Accept:

- [Pizza Chef](https://github.com/PizzaDAO/pizza-chef/tree/main/src) — a tested React/TypeScript pizza-kitchen arcade game with customers, pizza slices, plates, score, streaks, bosses, power-ups, stores, levels, pause, death replay and game-over flow. Its alien-customer gameplay commit carries repeated Claude Opus 4.6 trailers.
- [Deal or No Deal](https://github.com/srpatatas/produsa/tree/main/src/components/deal) — a Next.js game with 26 briefcases, banker offers, prize/reveal flow and a dedicated game page. Its game-addition commit carries repeated Claude Opus 4.6 trailers. Do not count other mini-games in the same repository without their own direct attribution.

Reject game-engine and addon repositories from this pass when they do not provide a separately playable game. This pass adds two game units.

### Critique result

Manual review scores this pass **9/10** overall: novelty **8**, yield **8**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **9**. Keep it.

### Next experiment

Continue exact commit-diff inspection for game-named repositories. Reject frameworks and addons unless a separately playable game is explicit. Retry held Drone Wars after its attribution URL or rate-limit condition clears.

### Exact Opus Godot microgame commit audit

Inspect [KumoWare](https://github.com/kevicency/KumoWare) through the exact repository commit trail `repo:kevicency/KumoWare Co-Authored-By Claude Opus 4.6`. Accept two native Godot 4.6 games from the cited commit:

- [Blackjack!](https://github.com/kevicency/KumoWare/blob/main/scripts/microgames/blackjack_game.gd) — deck builder, player draw phase, dealer phases, hand totals, winner determination, card rendering, result state and tests.
- [Stack!](https://github.com/kevicency/KumoWare/blob/main/scripts/microgames/stack_game.gd) — two-player physics arenas, falling boxes, timeout handling, scoring and winner reporting.

The commit creates the scenes, scripts and tests for both games and carries repeated Claude Opus 4.6 trailers. Route both units to the separate non-browser engine section.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **8**, yield **9**, verification quality **10**, repeatability **9**, source quality **10**, and false-positive control **9**. Keep it.

### Next experiment

Search exact Opus trailers with Godot and Unity terms serially. Inspect every created scene and script before counting a microgame. Keep engines and addons separate from playable projects.

### Exact Opus Godot milestone audit

Inspect [Geometry Quest](https://github.com/sly-the-fox/geometry-quest) through its exact repository commit trail. The first playable milestone provides a Merkaba player character, third-person camera, WASD/gamepad input and a configured main scene. A follow-up commit fixes enemy flash behavior and verifies Godot 4.6.2 headless startup with zero errors. Both milestone commits carry Claude Opus 4.7 trailers.

Count one source-verified native game prototype and route it to the non-browser engine section. Do not present it as a finished release.

### Critique result

The critique agent scores this audit **8/10** overall: novelty **8**, yield **7**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **9**. Keep it, with the prototype label and separate Opus 4.7 version label. Add interactive play checks where available.

### Next experiment

Apply the exact Godot milestone audit to the next unseen repository. Require distinct player, scene and gameplay source plus a successful engine check.

### Exact Opus Unity game commit audit

Run the serial GitHub commit search `Unity game Co-Authored-By Claude Opus`. Inspect the commit patch and project files for every game-named result. Accept:

- [Unity Puzzle Game](https://github.com/MahoHayashi/UnityPuzzle) — a Unity project with a `Main.unity` scene, `GameManager`, `PlayerManager`, `StageManager`, puzzle prefabs, directional controls, goals, blocks, walls and five stage files. The cited initial commit is titled Unity puzzle game and carries a direct Claude Opus 4.8 trailer.
- [Blind Arena](https://github.com/Ares2023/BlindArena) — a Unity audio-first 2D versus game with a main scene, player/combat scripts, bullets, ammo, enemy AI, map generation, network sessions and WebGL TTS support. The initial Blind Arena commit carries a direct Claude Opus 4.8 trailer.
- [Unity Zombie Shooter](https://github.com/danius123q5-creator/danich_game) — a Unity URP project with a sample scene, player controller, zombie AI, weapons, grenades, rockets, mines, artillery, air strikes, vehicles, effects and LAN systems. The initial commit carries a direct Claude Opus 4.8 trailer.

Reject [GoldHunter](https://github.com/Evergarden0101/GoldHunter) from this engine category. Its inspected commit is a vanilla Canvas browser game, not a Unity project, even though it appeared in the Unity-oriented search results.

This pass adds three native Unity game units and raises the collection to 436 game units across 373 repositories. Keep Opus 4.8 separate from other Opus versions. Record the engine only after checking the actual project files.

### Critique result

The critique agent scores this method **9/10** overall: novelty **9**, yield **9**, verification quality **10**, repeatability **9**, source quality **10**, and false-positive control **10**. Keep it.

### Next experiment

Run the same patch-level Unity audit for Claude Opus 4.6 separately from Opus 4.8. Require gameplay-relevant Unity changes plus direct attribution. Then inspect Unreal and other native-engine aliases serially.

### Exact Opus 4.6 Unity game commit audit

Run the serial GitHub commit search `Unity game Co-Authored-By Claude Opus 4.6`. Inspect each commit page and project-file list. Accept:

- [Basketball Game](https://github.com/quangpham2803/Basketball-Game) — Unity basketball project with scenes and basketball assets.
- [Pulse Highway](https://github.com/bccdon/musicGameUnity) — Unity rhythm game with a 24-level campaign, procedural audio, five-lane gameplay, bootstrap scene and source scripts.
- [Katan3D (Hexland)](https://github.com/kimotomura-0101/hexland) — Unity 6 Catan-style 3D board game with AI opponents, exploration, scenes and board/tile assets.
- [Classic Concentration](https://github.com/luvcal1/classic-concentration) — Unity 6 mobile game with MainMenu/GameScene, board/card logic, puzzle database, game state, audio and solve UI.
- [SciShootR](https://github.com/Scottcjn/SciShootR) — Unity 2D shooter with LevelsScene/MainMenu, player/enemy/spawner/wave/session scripts, power-ups, damage and score systems.
- [BurgerStacker](https://github.com/skyeolleh/BurgerStacker) — Unity 6 URP burger-stacking game with scenes, ingredient prefabs/data, HUD and customer reactions.
- [Unity Puzzle Game Prototype](https://github.com/Antivortex/omg-test) — Unity puzzle prototype with a game assembly, puzzle start flow, puzzle image resources and game UI/core source.

Each cited commit page shows a direct `Co-Authored-By: Claude Opus 4.6` trailer. This pass adds seven source-verified native game units and raises the collection to 443 units across 380 repositories. Keep these in the non-browser engine category.

### Critique result

The critique agent scores this audit **10/10** overall: novelty **10**, yield **10**, verification quality **10**, repeatability **9**, source quality **10**, and false-positive control **10**. Keep it.

### Next experiment

Perform serial build or startup validation on the seven repositories. Record which projects are source-verified only and which also run successfully. Then search Unreal and other native-engine aliases serially.

### Unreal false-positive audit

Run the serial searches `Unreal game Co-Authored-By Claude Opus` and `Unreal Engine game Co-Authored-By Claude Opus`. Inspect every strong lead. Reject asset pipelines, documentation, plugins, MCP integrations, scaffolds, archived foundations and project setups that do not contain gameplay source. The seven inspected leads produced zero verified games.

The critique agent scores this method **6/10** overall: novelty **2**, yield **1**, verification quality **9**, repeatability **8**, source quality **6**, and false-positive control **10**. Drop it as a primary discovery method. Keep its rejection rules.

### Next experiment

Use a strict Unreal implementation filter. Require a `.uproject`, gameplay classes such as `GameMode`, `Character` or `PlayerController`, and a map or gameplay asset before full inspection and counting.

### LibGDX native game commit audit

Run the serial GitHub search `LibGDX game Co-Authored-By Claude Opus`. Accept:

- [EUC Lean Too Much](https://github.com/crcknaka/euc-lean-too-much) — Kotlin/libGDX driving and physics game for Android and desktop.
- [Fieldrunners 2 Remake](https://github.com/TanBuiDev/fieldrunners2-remake) — Java/libGDX tower-defense remake with map/grid/path-planning, player, waves and gameplay screen.
- [Jefftris](https://github.com/jabernathy/jefftris) — Java/libGDX Tetris clone with screens, engine, scoring, high scores, desktop launcher and tests.
- [Cube Run](https://github.com/Eve-146T/cube-run) — Kotlin/libGDX three-lane endless runner with gameplay, session, scores, sound and Android host.
- [Asteroids](https://github.com/markm692/asteroids) — Kotlin/libGDX Android asteroid shooter with ship, asteroid, bullet, power-up, particle, menu and game-over classes.
- [The Unreliable Narrator](https://github.com/DevStreamLogica/The-Unreliable-Narrator) — Java/libGDX point-and-click murder mystery with rooms, suspects, evidence, interviews, contradictions, achievements and save/load.
- [Dragons vs Machines](https://github.com/DavidIsaiah/dragons_vs_machines) — Java/libGDX + Box2D slingshot physics game with entities, levels, level select and gameplay screen.
- [Star Jump](https://github.com/abo-code-1/JumpHooper) — Java/libGDX platform jumper with player/platform physics, collision, score, achievements and play/game-over states.
- [Icy Penguin Slide](https://github.com/saleebm/PenguinSlide) — Kotlin/libGDX Android/Desktop action game with penguin motion, icicle hazards, scoring, audio, animation, overlays and tests.

The commit pages show direct Opus trailers, and each first game-source link returned HTTP 200. Model versions range from Opus 4 through 4.8; preserve each exact version in the dataset. This pass adds nine source-verified native game units and raises the collection to 452 units across 389 repositories.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **10**, yield **10**, verification quality **9**, repeatability **9**, source quality **10**, and false-positive control **9**. Keep it. HTTP 200 confirms link availability, but runtime validation remains the next evidence step.

### Next experiment

Run serial build or startup validation for these nine repositories. Record which are source-verified only and which compile, launch or pass their tests. Then retry Unreal with the strict implementation filter.

### Pygame native game commit audit

Run the serial GitHub search `Pygame game Co-Authored-By Claude Opus`. Accept:

- [Pygame Chess Bot](https://github.com/Goodest-ai/chess-bot) — Pygame chess UI and move-generation engine.
- [Tiny Baby Snake](https://github.com/thanhkaist/tiny-baby-snake) — Snake with menus, pause, wrap-around, high score persistence and tests.
- [Cờ Caro](https://github.com/pMplayerI/cocarovn) — Pygame Gomoku/Caro board, rules and game source.
- [2048](https://github.com/alanwengyh-art/2048) — Pygame 2048 implementation.
- [Pygame Tetris](https://github.com/fmam0126/TetrisPython) — Pygame Tetris source.
- [Gomoku](https://github.com/wshen-ai/game-wuzi) — 15x15 board, win detection, AI, renderer and UI.
- [Battle City](https://github.com/401367513/Claud-) — Pygame tank game with a runnable main entrypoint.
- [CRITICAL HIT](https://github.com/thequantummenece/Critical_Hit) — 10-fighter Pygame-ce fighting game with arcade, local, online, combat, AI, scenes, netcode and tests.
- [Chiki Chase](https://github.com/tzelynn/chikichase) — Pygame chase source and assets in `ancient_ref/pygame_chiki_chase.py`.
- [Time Traveller's Dilemma](https://github.com/PrathyayPGM-ALT/Time-Traveller-s-Dilemma) — Pygame-ce narrative game with procedural eras, deduction puzzles, save state, achievements, assets and smoke tests.

Check the current branch and exact source path before counting. The first source link for each accepted repository returned HTTP 200. The Basketball candidate was removed after its current tree showed no game source file. This pass adds ten source-verified native game units and raises the collection to 462 units across 399 repositories. Opus 4.7 and Opus 4.8 remain separate.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **10**, yield **10**, verification quality **9**, repeatability **9**, source quality **10**, and false-positive control **10**. Keep it. Runtime execution remains the main evidence gap.

### Next experiment

Run serial runtime validation for the accepted repositories. Install or inspect dependencies, launch the game or run tests, and record source-verified versus actually runnable games.

### Cocos Creator native game commit audit

Run the serial GitHub search `Cocos game Co-Authored-By Claude Opus`. Accept:

- [Cat Dog Queue](https://github.com/Jinchaosss/cat-dog-queue) — Cocos Creator 4 scene and TypeScript game controller.
- [Slide Jigsaw](https://github.com/Jinchaosss/slide-jigsaw) — Cocos Creator 4 sliding-jigsaw scene, controller, model, levels, daily puzzles and rewards.
- [Twelve Fate](https://github.com/windy341524-glitch/twelve-fate-cocos) — Cocos Creator 3.8.8 narrative mini-game with event, choice, diary, oracle, resource, ending, achievement and UI systems.
- [Association Sort](https://github.com/Jinchaosss/association-sort-cocos) — Cocos Creator 4 association-sorting game with scenes, level progression, daily puzzles and resource systems.
- [Find Panda](https://github.com/Jinchaosss/find-panda) — Cocos Creator 4 12-level tap/drag puzzle with scene and controller source.

The accepted projects have scene files, gameplay TypeScript and direct Opus 4.6/4.7 trailers. Their scene/source links returned HTTP 200. Reject asset-heavy repositories without clear gameplay scripts. This pass adds five source-verified native game units and raises the collection to 467 units across 404 repositories.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **9**, yield **9**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **10**. Keep it. Runtime execution remains the next evidence step.

### Next experiment

Perform serial Cocos runtime validation by opening each project’s main scene or build target. Record source-verified versus successfully runnable games, and keep Opus 4.6 and 4.7 separate.

### Exact Opus MonoGame native game audit

Run the serial GitHub search `MonoGame game Co-Authored-By Claude Opus`. Accept:

- [FarmGame](https://github.com/tsunejui/farm-game) — MonoGame farming prototype with a tile map, player movement and camera.
- [DwarfMiner](https://github.com/dainedwards/DwarfMiner) — MonoGame procedural pixel game with a dwarf player, titan boss, ore, biomes and crafting.
- [CRACKED](https://github.com/duke1937/Cracked) — MonoGame egg-production game with buying, hatching, chickens and passive money.
- [HypeJumper](https://github.com/parkjongbin0520-spec/hypeJumper) — MonoGame platform game with player, enemies, hazards, jump pads, moving platforms and springs.
- [UltraDarkNative](https://github.com/3disturbed/UltraDarkNative) — MonoGame client with vector rendering, prediction, input and a playable listen server.
- [BattleGrid](https://github.com/DevDNE/MonoGame.GameFramework) — one playable tactical game inside a MonoGame framework repository, with battle state, player, enemy, projectile and rules components.

Inspect the commit pages and gameplay source before counting. Use commit-pinned source links for FarmGame and BattleGrid because guessed branch paths returned 404. The accepted repositories provide direct MonoGame source and Claude Opus 4.6, 4.7, 4.8 or 5 trailers. Reject `Somnium-GH/Roguebane` as a scaffold without sufficient game evidence. This pass adds six source-verified native game units and raises the collection to 473 units across 410 repositories.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **9**, yield **9**, verification quality **8**, repeatability **8**, source quality **9**, and false-positive control **9**. Keep it. Perform build or startup checks next because the current evidence is source verification.

### Next experiment

Run serial build or startup validation for the six MonoGame games. Record which projects compile, launch or pass tests. Then apply a strict gameplay-source filter to another native engine.

### Strict Unreal native game audit

Run the serial GitHub search `Unreal playable game Co-Authored-By Claude Opus`. Require an Unreal project or a committed Unreal gameplay port, direct gameplay source, and a map, greybox, Blueprint mechanism or runnable reference before counting.

Accept:

- [STORMFALL](https://github.com/oh-ashen-one/Opus-5-Three-Games/tree/main/01-stormfall-ue) — Unreal Engine 5.8 third-person survival/shooter game with bots, combat, building, storm and tests.
- [STRIKE PROTOCOL](https://github.com/oh-ashen-one/Opus-5-Three-Games/tree/main/02-strike-godot) — Godot 4.7 native tactical shooter with bots, economy, weapons, grenades and match scenes.
- [TEACUP](https://github.com/oh-ashen-one/Opus-5-Three-Games/tree/main/03-teacup-godot) — Godot 4.7 2.5D boss game with player, boss, projectiles, stages, HUD and tests.
- [MaskGame](https://github.com/moeiscool/MaskGame) — Unreal Engine 5.5 action-adventure greybox with a three-day clock, masks, quests, songs, enemies, world generation and progression systems.
- [Zoo Keeper](https://github.com/JamesTroy/ZooKeeper) — Unreal Engine 5 zoo simulation with animals, breeding, staff, visitors, buildings, economy, research, weather, saving and a committed map.
- [UE Challenge Game](https://github.com/Yufang-cloud/Project2-UE-ChallengeGame) — Unreal Engine 5.7 Blueprint challenge course with a character, main level, checkpoints, launch pads and obstacle mechanisms.
- [Surgeon Simulator](https://github.com/brenyade/SurgeonSimulator) — one surgery game with a complete WebGL build and an Unreal Engine 5 C++ port sharing procedure data.

Inspect the exact commit trailers and direct source links. Count the three games in `Opus-5-Three-Games` separately and count Surgeon Simulator once because its WebGL and Unreal implementations are two builds of one game. Reject `sparesparrow/1984` as a source-heavy scaffold without a committed playable map/assets, `jamesbell2021/unreal-cpp-intro` as teaching material with a browser example but no Unreal project, `allocatedribble/Vast` as a LogiUE plugin/tool, `MoreSalamander/vibe-engine` as a UE5 scaffold, and `danielbaldwin47/UE-MCP-Test` as an editor test project. This pass adds seven source-verified native game units and raises the collection to 480 units across 415 repositories.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **9**, yield **9**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **10**. Keep it. Runtime validation is still required for a stronger status.

### Next experiment

Run serial Unreal build or startup validation for the accepted projects. Separately validate the three Opus 5 games so their unit count has individual runtime evidence. Then inspect another native engine using the same strict source filter.

### Serial Bevy native game audit

Run the serial GitHub search `Bevy game Co-Authored-By Claude Opus`. Require direct Bevy gameplay source, a documented or runnable game loop, and an exact Claude Opus trailer.

Accept:

- [Ages of Aether Native](https://github.com/kglazier/Ages-Of-Aether-Native) — Bevy tower-defense port with enemies, waypoints, towers, projectiles, waves, lives and win/lose flow.
- [Hollow Lullaby](https://github.com/maweis1981/rust_bevy_lua_game) — Rust/Bevy game with Lua-driven packs, audio, desktop, iOS and WebAssembly targets.
- [Shogun](https://github.com/zhubby/Shogun) — Bevy/egui turn-based Three Kingdoms strategy game with cities, officers, combat, diplomacy, AI, scenarios and saves.
- [WriftHeart](https://github.com/Baz-Studios-LLC/wriftheart) — native Bevy action-adventure RPG with combat, bosses, towns, quests, achievements and save systems.
- [Aliasing](https://github.com/taearls/bevy-2d-rpg-game) — Bevy turn-based RPG slice with menu, overworld, random encounters, battle and game-over flow.
- [Voxelcraft](https://github.com/Eric-lab-star/voxelcraft) — Bevy voxel sandbox with procedural terrain, first-person movement, mining, building, collision, water and day/night.
- [HOLDFAST](https://github.com/nschmeller/holdfast) — Bevy 3D survival command roguelite with five worlds, threat control, squads, forts, weapons and progression.
- [Protocol Play](https://github.com/jjgarcianorway/protocol-play) — Bevy tile puzzle game with 149 levels, 13 chapters, colored bots and many puzzle mechanics.
- [Roller](https://github.com/steve-berlin/roller) — Bevy/Avian 3D physics game with a rolling sphere, collectibles, arena, timer and persistent best time.

Check the first source link and live demo serially. The Aliasing live URL is [aliasing.pages.dev](https://aliasing.pages.dev); the guessed GitHub Pages URL returned 404 and was removed. Reject `EMachad0/Monster-Master-Rust` because its current game crate shows cursor/player synchronization but no clear game loop. This pass adds nine source-verified native-engine game units and raises the collection to 489 units across 424 repositories.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **8**, yield **9**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **9**. Keep it after canonical deduplication. Runtime validation is the next evidence step.

### Next experiment

Run serial build or startup validation for the nine Bevy games. Record native versus WebAssembly status, then search another engine with the same gameplay-source and exact-trailer filter.

### Serial Defold native game audit

Run the serial GitHub search `Defold game Co-Authored-By Claude Opus`. Require `game.project`, a collection, direct gameplay scripts/assets, and an exact Claude Opus trailer.

Accept:

- [Mind The Tower](https://github.com/Vineethk08/mind-the-tower-defold) — Defold memory and block-stacking game with a falling-block tower, climbing, score, replay and screenshots.
- [Rummy 500](https://github.com/SkipSupreme/rummy-500) — Defold card game with deck, hand, meld rules, AI, engine state, GUI and full-game tests.
- [Soliter](https://github.com/ErrorSoul/soliter) — Defold solitaire game with board slots, cards, game manager, tutorial, win state and solver/replay tests.
- [Ourcade](https://github.com/aniche/ourcade-defold) — Defold mobile beat-em-up with player, enemies, rooms, menus, game-over UI, remote player and Android artifacts.

Check source links one at a time. Use `master` for Soliter and `v0` for Ourcade after checking each repository's default branch. This pass adds four source-verified native-engine game units and raises the collection to 493 units across 428 repositories.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **9**, yield **9**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **9**. Keep it. Runtime validation is the next evidence step.

### Next experiment

Run serial Defold startup or build validation for the four games. Record source-verified versus successfully runnable status, then search another native engine.

### Serial LÖVE native game audit

Run the serial GitHub search `Love2D game Co-Authored-By Claude Opus`. Require `conf.lua`, `main.lua` or an equivalent LÖVE entrypoint, direct gameplay source/assets, and an exact Claude Opus or Fable trailer.

Accept:

- [Card Game](https://github.com/Corttezz/card-game-love2d) — LÖVE strategic card combat game with attack, defense, Jokers, enemies, stages and deck systems.
- [Dotpio](https://github.com/NAMYUNWOO/dotpio) — LÖVE roguelike with map, FOV, player, enemies, AI, combat, inventory, items, portals and HUD.
- [Asteroids](https://github.com/ETdoFresh/asteroids-love2d) — LÖVE arcade Asteroids game with configuration, entrypoint and screenshot.
- [Voidash](https://github.com/rhowell/voidash) — LÖVE arena survival game with dash combat, combo kills, waves, particles and invulnerability.
- [TetrisLove2D](https://github.com/TiagoBonamigo/TetrisLove2D) — LÖVE NES-faithful Tetris with timing, DAS, rotation, gravity, scoring and palettes.
- [Ora et Labora](https://github.com/JohnVonDrashek/ora-et-labora) — LÖVE monastery management simulator with monks, resources, projects, market, patrons, renown and saves.
- [Ballz](https://github.com/kurtmc/ball-game) — LÖVE brick breaker with ball physics, grid, aiming, particles, state and UI modules.
- [Pachinko Builder](https://github.com/Johnesco/pinball) — LÖVE pachinko/pinball builder with a direct game entrypoint.
- [Pocket Bomber](https://github.com/chongdashu/love2d-pocket-bomber-game) — LÖVE Bomberman game with five levels, enemies, bombs, explosions, saves, preview GIF and iOS touch controls.

Check every source link one at a time. Use `master` for Dotpio, TetrisLove2D, Ballz and Pachinko Builder after checking their default branches. Reject `maltasea/lua_of_ocaml` because it is a compiler repository with an incomplete reference example, not a game repository. This pass adds nine source-verified native-engine game units and raises the collection to 502 units across 437 repositories.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **10**, yield **10**, verification quality **9**, repeatability **9**, source quality **10**, and false-positive control **10**. Keep it. Runtime validation remains the next evidence step.

### Next experiment

Run serial LÖVE startup validation for the nine games. Record valid configuration and successful launch status, then search another native engine.

### Serial raylib native game audit

Run the serial GitHub search `raylib game Co-Authored-By Claude Opus`. Require Raylib source, a real game loop, README or screenshot evidence, and an exact Claude Opus or Fable trailer.

Accept:

- [Tenaoshi](https://github.com/NaoyaNakagawa0124/auto-dev-projects/tree/master/tenaoshi) — C/Raylib neighborhood renovation game with exploration, repair tasks, tools and happiness score.
- [Namioto](https://github.com/NaoyaNakagawa0124/auto-dev-projects/tree/master/namioto) — C/Raylib breathing and ocean meditation game with wave state, calm score and procedural sea/sky.
- [TsunDoku](https://github.com/NaoyaNakagawa0124/auto-dev-projects/tree/master/tsundoku) — C/Raylib book-stacking Tetris puzzle with shelf layouts, falling books, rows, rounds and score.
- [RonriRoom](https://github.com/NaoyaNakagawa0124/auto-dev-projects/tree/master/ronriroom) — C/Raylib office escape puzzle with five logic rooms and puzzle types.
- [Merchant's Keep](https://github.com/Afillex/merchants-keep) — C99/Raylib merchant trading game with economy, traders, events, reputation, balance and saves.
- [DogFighter](https://github.com/mokguylee-prog/dogfighter) — C/Raylib 3D paper-airplane combat game with AI, shooting, particles, HUD and radar.
- [Energy Clicker](https://github.com/ferranrigual/raylib-clicker) — Python Raylib clicker economy game with energy sources, upgrades and pollution state.
- [SCUMM Game](https://github.com/binRick/scumm-game) — C/Raylib point-and-click adventure with pathfinding, verbs, animated sprites and live editors.
- [Caro / Gomoku](https://github.com/nhannht/caro-game) — C++14/Raylib board game with a CMake project and AI/game implementation.

Inspect each game directory or source link serially. Count the four auto-dev-projects directories as four distinct units inside one repository. Reject [Wallop](https://github.com/Mertan2/wallop) from the native section because its current target is web-only WASM; reject compiler examples, templates and scaffolds. This pass adds nine source-verified native-engine game units and raises the collection to 511 units across 443 repositories.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **10**, yield **10**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **10**. Keep it. Runtime validation remains the next evidence step.

### Next experiment

Run serial native build or startup validation for the nine Raylib units. Keep web-only WASM Raylib projects in an exclusion category, then search another native engine.

### Serial SDL native game audit

Run the serial GitHub search `SDL game Co-Authored-By Claude Opus`. Require SDL2 source, a real game loop, gameplay documentation/assets or screenshots, and an exact Claude Opus trailer.

Accept:

- [Frog Hopper](https://github.com/Stephenson-Software/Frog-Hopper-2D) — C++/SDL2 Frogger-style game with traffic, collision, frog movement and win/lose screens.
- [SDL Skyroads](https://github.com/carlosbravoa/SDL-skyroads) — C++17/SDL2 SkyRoads reimplementation with ship simulation, data loaders, renderer, HUD, audio and tests.
- [Fruit Ninja](https://github.com/mariotaku/FruitNinja) — C++11/SDL2 Fruit Ninja port with fruit slicing, arcade mode, combos, animation, settings and screenshots.
- [TAK Engine](https://github.com/pocketgeek/tak-engine) — C++20/SDL2 Total Annihilation: Kingdoms recreation with campaign, AI, units, maps, lobby, multiplayer lockstep, HUD and screenshots.

Check source links one at a time. Frog Hopper is directly buildable. SkyRoads and Fruit Ninja are source-verified but data-gated because each requires user-supplied original game data. This pass adds four source-verified native-engine game units and raises the collection to 515 units across 447 repositories.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **9**, yield **8**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **10**. Keep it. Classify data-gated projects separately during runtime validation.

### Next experiment

Run serial SDL2 build or startup validation. Record directly runnable, buildable with user-supplied data, and source-verified-only statuses, then search another native engine.

### Serial Godot and other native-engine audit

Run the serial GitHub commit searches `Godot game Co-Authored-By Claude Opus` and `Stride game Co-Authored-By Claude Opus`. Require an actual engine project, a main scene or entrypoint, direct gameplay source, and an exact Claude Opus trailer. Route all accepted entries to the separate non-browser section.

Accept:

- [Stride 'n Conquer](https://github.com/aalicia1208/stride-n-conquer) — React Native/Expo mobile territory-claiming walking game with map movement, landmarks, tokens, pets shop and leaderboard.
- [Cascade](https://github.com/mcarthey/CascadeGame) — Stride/C# 2D fluid action prototype with particle materials, spray controls and physics systems.
- [Air Strider](https://github.com/JoeyDD27/Air-Strider) — Godot 2D action game with extensive rooms, player abilities, enemies, effects and an itch.io download page.
- [Tongue](https://github.com/asg86260/Tongue) — Godot frog tongue-swing prototype with grapple, reel, jump, air-steer and reset gameplay.
- [Micro Game Jam](https://github.com/miromustafa/micro-game-jam) — Godot shooter project with player, plane, movers, bombs, bullets, explosions and game-over scenes.
- [Dice Catcher](https://github.com/ArnasJuskevicius/dice-catcher) — Godot fox-catches-dice game with game, fox and dice scenes, sprites, fonts and audio.
- [Keyboard Idle](https://github.com/enricosaito/keyboard-idle) — Godot incremental typing game with fixed-timestep simulation, upgrades, statistics, UI and saves.
- [Zooma](https://github.com/Math-Man/zuma3d) — Godot/C# 3D Zuma-style game with turret aiming, ball queue, chain controller, rounds, models and HUD.
- [Chase Game](https://github.com/ayanamirei404/Pac_man_3d) — Godot 3D maze chase game with procedural mazes, ghost AI, flashlight, sprint, stamina, battery and mobile controls.
- [Godot 2048](https://github.com/daiSky88/godot-2048) — Godot 2048 game with a 4x4 board, tile merging, score, win/game-over dialogs and save management.

Reject [StrideAssetStore](https://github.com/Nicogo1705/StrideAssetStore) because it is an asset catalog and installer, not a game. Reject [Underleague](https://github.com/martinelola92-beep/underleague) because its current repository is preproduction documentation and a scene shell without enough direct gameplay implementation. Exclude bundled Godot AI/MCP addons from the game counts.

This pass adds ten source-verified native game units and raises the collection to 525 units across 457 repositories. Keep `technology` values explicit so the generator places Godot, Stride, React Native, Unity, Unreal and other native engines under `Non-Browser Engines`.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **9**, yield **9**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **9**. Keep it as a source-verified pass. Run native startup or build checks later and record those results separately from source verification.

### Next experiment

Run serial startup or build validation for the ten accepted native games. Continue with a Unity, Unreal or other-engine alias partition, and preserve the separate non-browser category.

### Serial Pygame native audit

Run the serial GitHub commit search `pygame game Co-Authored-By Claude Opus`. Require a real Pygame entrypoint, direct game-loop or gameplay source, and an exact Claude Opus trailer. Keep every accepted project in `Non-Browser Engines`.

Accept:

- [Tiny Baby Snake](https://github.com/thanhkaist/tiny-baby-snake) — Pygame Snake game with five levels, portals, pause, persistence, tests and screenshots.
- [8-Ball Pool](https://github.com/chrissfoss-nor/8ballpool) — Pygame local multiplayer pool game with spin, full rules, physics and AI shot search.
- [Cờ ca rô VN](https://github.com/pMplayerI/cocarovn) — Pygame Vietnamese Gomoku game with board panning, five-in-a-row rules, restart and game-over flow.
- [TetrisPython](https://github.com/fmam0126/TetrisPython) — Pygame Tetris with seven pieces, SRS wall kicks, hold/next pieces, line clearing, score, pause and game-over.
- [Basketball Game](https://github.com/wlssss823/Basketball) — Pygame falling-basketball catcher with movement, score, lives, high score and reset.
- [Racing Game Claude](https://github.com/srijan-vaddadi/Racing-Game-Claude) — Pygame racing game with selectable cars, NPC traffic, track checks, collision, laps and race persistence.

Use `master` for [TetrisPython](https://github.com/fmam0126/TetrisPython) and [Racing Game Claude](https://github.com/srijan-vaddadi/Racing-Game-Claude) because their default branches are master. This pass adds three new source-verified native Pygame repository records and enriches three existing records. The collection now has 528 game units across 460 repositories. Keep one record per repository URL.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **9**, yield **9**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **9**. Keep it. Treat Tiny Baby Snake as the strongest entry because it includes tests and screenshots. Keep smaller projects with lower quality estimates when the game loop and model evidence are explicit. Deduplicate repeated repositories and enrich the existing record instead of adding a second record.

### Next experiment

Run serial Pygame tests or startup checks for the six accepted games. Continue with another native engine alias and preserve the non-browser category.

### Serial Fable Pygame native audit

Run the serial GitHub commit search `pygame game Co-Authored-By Claude Fable`. Require a real Pygame game loop, direct gameplay source, and an exact Claude Fable trailer. Count native and browser ports as one game when they share the same repository and codebase.

Accept:

- [Space Showdown](https://github.com/GeorgeCottrell/SpaceShowdown) — Pygame arcade space shooter with waves, bosses, weapons, power-ups, medals, daily challenge, headless tests and a native SDL2 Wii port.
- [pyKombat](https://github.com/vidalmatheus/pyKombat) — Pygame fighting game with local execution, browser/WebAssembly build, screenshots and a live GitHub Pages demo.
- [Food Fight](https://github.com/amccool/foodfight) — Pygame arcade game with movement, constant fire, chefs, food ammunition, melting objective, replay and a Windows release.

This pass adds three source-verified native game units and raises the collection to 531 units across 463 repositories. Keep pyKombat in the non-browser section because it supports native desktop execution. Count Space Showdown's SDL2 Wii port as the same game.

### Critique result

The critique agent scores this audit **9/10** overall: novelty **9**, yield **8**, verification quality **9**, repeatability **9**, source quality **9**, and false-positive control **9**. Keep it. Treat Space Showdown as the strongest entry because it includes headless tests and a second native port. Keep repository-level deduplication across ports.

### Next experiment

Run serial headless or startup checks for the three accepted games. Continue with another native engine or Fable alias partition.

### Serial Fable Godot multi-game audit

Run the serial GitHub commit search `Godot game Co-Authored-By Claude Fable`. Require separate gameplay states, direct source for each game, and exact Fable evidence. Store one repository record and set `counted_game_units` to the number of independently named games that the source proves.

Accept:

- [Ninja Knife Dodge — Four Trials](https://github.com/Karanvir1729/ninja-knife-dodge) — Godot native mobile arcade containing Knife Dodge, Shuriken Match, Sensei Says, Quick Draw and Star Cricket. Verify the first four through the four-game merge and verify Star Cricket through its separate gameplay state and commit.

Count five game units in this repository. Exclude The Loop Room because the repository describes it as a music game/toy, not one of the independent arcade games. This pass raises the collection to 536 units across 464 repositories.

### Critique result

The critique agent scores this audit **10/10** overall: novelty **10**, yield **10**, verification quality **9**, repeatability **9**, source quality **10**, and false-positive control **9**. Keep it. Preserve the one-record-per-repository boundary and count only independently named games with distinct gameplay source.

### Next experiment

Run the repository's Godot headless checks and smoke tour. Continue with another native multi-game repository.

### Dropped reverse-link experiment

Search GitHub code for both the full canonical URL `https://github.com/GeorgeCottrell/SpaceShowdown` and the token `GeorgeCottrell/SpaceShowdown`. Return zero results. Treat this exact reverse-link pattern as low-yield for the current index. Do not repeat it without a new seed or a changed index.

The critique agent scores this experiment **4/10** overall: novelty **4**, yield **1**, verification quality **7**, repeatability **6**, source quality **7**, and false-positive control **9**. Drop the experiment. Use repository README and awesome-list searches with engine plus Astra/Opus/Fable aliases for the next pass.

### Next experiment

Run one serial README/list-focused search using a changed native engine and one model alias. Inspect each unseen repository, save verified games immediately, and reject catalogs, tools, visual-only scenes and broken URLs.

### Dropped README/list-focused Godot experiment

Run the authenticated GitHub code search `Godot "Claude Fable" game`. Use [Vibe Game Development Handbook](https://github.com/asashiki/vibe-game) as a list source and inspect its direct project links one at a time.

Find these links:

- [Awesome Claude Fable 5](https://github.com/Anil-matcha/awesome-claude-fable-5) — reject it as a use-case catalog.
- [Midwinter Decode](https://github.com/DrEvil-TitaniumHelix/midwinter-decode) — hold it because the repository is inaccessible.
- [LEGO Stylized Nature](https://github.com/hexianWeb/lego-stylized-nature) — reject it because the README is a Three.js TSL template and does not prove a game.
- [World of ClaudeCraft](https://github.com/levy-street/world-of-claudecraft) — already present in the collection.

The Fennara demo catalog also exposed videos but no direct game repositories. Do not add video-only demos without a canonical GitHub repository. The critique agent scores this broad list-focused experiment **6/10** overall: novelty **7**, yield **2**, verification quality **8**, repeatability **8**, source quality **8**, and false-positive control **9**. Drop it as a broad collection method. Keep the handbook as a source node and follow only direct project links or exact creator claims.

### Next experiment

Use the handbook's direct project links as individual seeds. Search each seed's commit history or creator source serially, then return to exact attribution queries for higher verified yield.

### README direct-link mapping improvement

Update `scripts/generate-awesome-readme.mjs` so a multi-game repository can provide `contained_game_links`. Use the matching source file for each named game instead of assuming that the repository-level `game_links` array has the same order as `contained_games`. Add this field to [Ninja Knife Dodge — Four Trials](https://github.com/Karanvir1729/ninja-knife-dodge) and map Knife Dodge, Shuriken Match, Sensei Says, Quick Draw and Star Cricket to their own Godot state scripts.

Also label the repository count as **Included repositories** and state that source verification proves that game code exists, while runtime playtesting is a separate claim. Validate the generated README, JSON files and direct source links before committing.

The critique agent did not return a visible message, so record the conservative manual score: **9/10** overall. Score the change **9** for usefulness, **9** for verification quality, **9** for README usability, **9** for repeatability, **10** for source quality and **10** for false-positive control. Keep it because it fixes a real mapping error and makes the evidence boundary explicit.

### Next experiment

Run a new serial native-engine attribution search. Use a changed engine alias such as Go, Macroquad or another engine not used in the last pass. Inspect each result one at a time and keep only repositories with actual gameplay source and exact Astra, Opus or Fable evidence.

### Go/Fable incidental code-search audit

Run the authenticated GitHub code search `Go game Co-Authored-By Claude Fable`. Treat it as a noisy exploratory query because `go` appears in many documentation and configuration files. Inspect candidate repositories serially.

Accept:

- [Idle ARPG](https://github.com/nodeJayS/idle-game) — substantial Unity/C# native idle ARPG with three-hero combat, dungeons, loot, progression, a separated GameCore simulation, native client source and a direct Claude Opus 5 trailer in the cited commit.
- [KamiKakushi — An Incremental RPG](https://github.com/Raynos/kami-kakushi) — shipped TypeScript/Vite browser RPG with combat, quests, crafting, economy, autoplay, tests, a live GitHub Pages build and an archived Opus/Fable build plan.

Reject:

- [TheMarble](https://github.com/schmerbert/TheMarble) — AI-agent memory manual with test specimens, not a game.
- [NeoStation](https://github.com/misobadev/neostation-frontend) — Flutter emulator frontend, not a game implementation.
- [Gameplane](https://github.com/ValgulNecron/Gameplane) — game-server control panel, not a playable game.

This pass adds two source-verified game units and keeps Unity in the **Non-Browser Engines** section. Verify every direct source URL; one stale KamiKakushi path was caught and corrected before saving. The collection reaches **538 counted game units across 466 repository records**.

The critique score is **8/10** overall: novelty **8**, yield **8**, verification quality **9**, repeatability **7**, source quality **8**, and false-positive control **9**. Keep the result, but do not use this broad query as the default method. Prefer exact engine-plus-attribution searches in the next pass.

### Next experiment

Run one serial exact native-engine query using a new alias such as Macroquad or Ebiten. Require actual gameplay source and exact Astra, Opus or Fable evidence. Reject model-as-player projects, frameworks, catalogs, tools and visual-only demos.

### Dropped Macroquad/Opus code search

Run the authenticated GitHub code search `Macroquad game Co-Authored-By Claude Opus`. It returns only this collection's own research files and one unrelated chatlog. It returns no external Macroquad game repository with Claude Opus evidence. Drop the query and do not count self-referential files.

The conservative critique score is **4/10** overall: novelty **6**, yield **1**, verification quality **8**, repeatability **7**, source quality **5**, and false-positive control **10**. Keep the false-positive rule, but replace this exact query with a new engine alias.

### Next experiment

Run one serial exact native-engine query using Ebiten or another changed engine alias. Require actual gameplay source and exact Astra, Opus or Fable evidence.

### Ebiten/Opus code-search audit

Run the authenticated GitHub code search `Ebiten game Co-Authored-By Claude Opus`. Inspect the three external results one at a time and verify repository existence plus direct gameplay files.

Accept:

- [Ultima V: Warriors of Destiny — Traditional Chinese Remake](https://github.com/wicanr2/u5-cht) — Go/Ebitengine remake with world map, locations, dialogue, shops, combat, magic, dungeons, tests, native packages and WebAssembly support. The cited release commit carries Claude Opus 5 evidence.
- [Dragon Quest III — Ebitengine Remake](https://github.com/wicanr2/kinginformation-dq3-re) — Go/Ebitengine remake with desktop and Android targets, world map, battles, game packs, tests and a documented 93/93 game-tester gate. The worklist records Claude Opus 4.8 project evidence.
- [Africa 2 Ice: Paleolithic Dispersal](https://github.com/adsouza/africa2ice) — original turn-based eco-strategy game with deterministic simulation, climate map, campaign turns, saves, native/browser builds, tests and Ebitengine rendering. The cited commit carries Claude Opus 5 evidence.

Verify all twelve direct gameplay and configuration links through the GitHub contents API. Count each repository once, and keep all three under **Non-Browser Engines**. This pass adds **three game units**, raising the collection to **541 counted game units across 469 repository records**.

The critique score is **9/10** overall: novelty **9**, yield **10**, verification quality **9**, repeatability **9**, source quality **10**, and false-positive control **9**. Keep this exact engine-plus-model pattern and try another unused native engine next.

### Next experiment

Run one serial exact query for Ebiten/Fable or another unused engine. Require a real playable loop, direct source, and exact Astra, Opus or Fable evidence.

### Dropped Ebiten/Fable code-search audit

Run the authenticated GitHub code search `Ebiten game Co-Authored-By Claude Fable`. One result was the already-listed Africa 2 Ice project. The other was [O3DE DualSense Gem](https://github.com/Sineaggi/o3de-dualsense-gem), a controller-integration project rather than a game. Add no new record and do not duplicate Africa 2 Ice.

The conservative critique score is **4/10** overall: novelty **6**, yield **1**, verification quality **8**, repeatability **7**, source quality **7**, and false-positive control **10**. Drop this exact branch.

### Next experiment

Run one serial exact native-engine query with a changed engine and model alias. Prefer Defold, Bevy or Love2D plus Claude Fable evidence.

### Dropped Defold/Fable code search

Run the authenticated GitHub code search `Defold game Co-Authored-By Claude Fable`. It returns only this collection's own wiki and search-log files. It returns no external Defold game with Fable evidence.

The conservative critique score is **4/10** overall: novelty **6**, yield **1**, verification quality **8**, repeatability **7**, source quality **4**, and false-positive control **10**. Drop the exact query and exclude self-referential collection files.

### Next experiment

Run one serial exact native-engine query with a changed engine/model pair, such as Bevy plus Claude Fable or Love2D plus Claude Opus.

### Bevy/Fable code-search audit

Run the authenticated GitHub code search `Bevy game Co-Authored-By Claude Fable`. Inspect the external repositories serially.

Accept:

- [Bong — AI-Native Xianxia Sandbox](https://github.com/Kizunad/Bong) — Minecraft game with a Rust Valence/Bevy 0.14 server, Fabric client, cultivation, combat, production, economy, NPCs, spirit-qi physics, HUD, skills and client/server build commands. A cited commit carries Claude Opus 5 evidence.
- [Breakneck Baseball](https://github.com/hynding/breakneck-baseball) — playable Bevy/Rapier 3-D baseball game with regulation rules, local multiplayer, native/browser builds, a headless end-to-end test and a live GitHub Pages build. A cited commit carries Claude Fable 5 evidence.

Reject:

- [Rogue World](https://github.com/Myka2003/rogue-world) — agent simulation kernel, not a playable game.
- [Arcane](https://github.com/T3mps/Arcane) — C++ game engine/editor; its ReferenceProject is not a separate verified game.
- [Babylon](https://github.com/percy-raskova/babylon) — Bevy preview with player actions not implemented.

Verify nine direct source links and the Breakneck live URL. Count Bong once for its server/client pair and Breakneck once for its browser/native builds. Keep both in **Non-Browser Engines**. This pass adds **two game units**, raising the collection to **543 counted game units across 471 repository records**.

The critique score is **9/10** overall: novelty **9**, yield **9**, verification quality **9**, repeatability **9**, source quality **10**, and false-positive control **9**. Keep the Bevy search pattern and continue with another unused engine/model pair.

### Next experiment

Run one serial exact native-engine query with a changed engine or model alias. Exclude engine frameworks, agent kernels, incomplete previews and model-as-player projects.

### Dropped Love2D/Fable code search

Run the authenticated GitHub code search `Love2D game Co-Authored-By Claude Fable`. It returns only this collection's own wiki and search-log files. It returns no external Love2D game with Fable evidence. Drop the exact query and exclude self-referential matches.

The conservative critique score is **4/10** overall: novelty **6**, yield **1**, verification quality **8**, repeatability **7**, source quality **4**, and false-positive control **10**.

### Next experiment

Run one serial exact native-engine query using Cocos plus Claude Fable or another unused engine/model pair.

### Dropped Cocos/Fable code-search audit

Run the authenticated GitHub code search `Cocos game Co-Authored-By Claude Fable`. Inspect the likely external hits serially. Find no qualifying game:

- [Job Hunter](https://github.com/igrdevelop/job-hunter) is job automation software.
- [SkinForge](https://github.com/fagemx/skinforge) is an AI slot-game art pipeline. Its browser preview changes visual themes but does not prove a playable objective-based game.
- [Clash of Kings Analysis](https://github.com/akitaonrails/clash_of_kings_analysis) is static reverse-engineering research of an existing Cocos2d-x game.

Add no game record. The conservative critique score is **4/10** overall: novelty **6**, yield **1**, verification quality **9**, repeatability **7**, source quality **6**, and false-positive control **10**. Drop the exact Cocos/Fable branch.

### Next experiment

Run one serial exact engine-plus-model query using an unused engine or a changed source index. Require actual objectives, gameplay source and exact Astra, Opus or Fable evidence.

### Dropped GDevelop/Fable code search

Run the authenticated GitHub code search `GDevelop game Co-Authored-By Claude Fable`. It returns zero results. Add no records and do not repeat the exact query.

The conservative critique score is **4/10** overall: novelty **6**, yield **1**, verification quality **8**, repeatability **7**, source quality **4**, and false-positive control **10**.

### Next experiment

Run one serial exact RPG Maker or other unused native-engine query with Claude Opus evidence.

### Dropped RPG Maker/Opus code-search audit

Run the authenticated GitHub code search `RPG Maker game Co-Authored-By Claude Opus`. Inspect the likely external hits serially.

- [Jhonny](https://github.com/edneyreis999/Jonny) is a real RPG Maker MZ game, but its instructions explicitly prohibit Claude attribution and no Astra, Opus or Fable authorship evidence is present.
- [Claude Opus census](https://github.com/jphein/opus) is a catalog, not a game.
- [AI Pulse Daily](https://github.com/vibewatch/vibewatch.github.io) is a social-web analysis site, not a game.

Add no record. The conservative critique score is **4/10** overall: novelty **6**, yield **1**, verification quality **9**, repeatability **7**, source quality **6**, and false-positive control **10**. Drop the exact query.

### Next experiment

Run one serial exact engine-plus-model query using a changed engine or source index. Require direct gameplay code and qualifying Astra, Opus or Fable evidence.

### Dropped RPG Maker/Fable code-search audit

Run the authenticated GitHub code search `RPG Maker game Co-Authored-By Claude Fable`. It returns one already-rejected analysis index, a hobby-tracking PWA ([Biblioshare](https://github.com/borjar20/Biblioshare)) and a documentation vault ([IDAHO-VAULT](https://github.com/LAF-US/IDAHO-VAULT)). It returns no qualifying RPG Maker game. Add no records and drop the exact query.

The conservative critique score is **4/10** overall: novelty **6**, yield **1**, verification quality **9**, repeatability **7**, source quality **6**, and false-positive control **10**.

### Next experiment

Run one serial exact engine-plus-model query using an unused engine or changed source index. Require direct gameplay source and qualifying Astra, Opus or Fable evidence.

### Dropped PlayCanvas/Fable code search

Run the authenticated GitHub code search `PlayCanvas game Co-Authored-By Claude Fable`. It returns only this collection's own wiki and search-log files. It returns no external PlayCanvas game with Fable evidence. Add no records and drop the exact query.

The conservative critique score is **4/10** overall: novelty **6**, yield **1**, verification quality **8**, repeatability **7**, source quality **4**, and false-positive control **10**.

### Next experiment

Run one serial exact web-engine query using Babylon.js plus Claude Fable.

### Babylon.js/Fable code-search audit

Run the authenticated GitHub code search `Babylon.js game Co-Authored-By Claude Fable`. Inspect the external game candidate serially.

Accept [Wolfsbane](https://github.com/oivindth/wolfsbane) — a Babylon.js/Havok/Svelte browser action RPG with movement, sprint, dodge i-frames, light and heavy attacks, signs, lock-on, wolf combat, respawn, animation, tests, a Vite build and a live GitHub Pages deployment. The cited gameplay commit carries direct Claude Fable 5 evidence. Verify four direct source links and the live URL; the live URL returned HTTP 200.

This pass adds **one game unit**, raising the collection to **544 counted game units across 472 repository records**. Keep the game in the browser categories.

The critique score is **9/10** overall: novelty **9**, yield **9**, verification quality **10**, repeatability **9**, source quality **10**, and false-positive control **9**. Keep the Babylon.js-plus-Fable pattern.

### Next experiment

Run one serial exact web-engine or native-engine query with a changed model alias. Verify direct gameplay files before saving.

### Unreal/Fable code-search audit

Run the authenticated GitHub code search `Unreal game Co-Authored-By Claude Fable`. Inspect likely external repositories serially.

Accept:

- [The Fallen Citadel](https://github.com/nansu0425/nan2026-game-src) — a Unity WebGL quarter-view hack-and-slash roguelike with three classes, combat, bosses, enemies, augments, VFX, audio, a live browser build and an AI-usage document identifying Claude Opus 5, Fable 5 and Opus 4.8.
- [GAME_CORE — Adaptive Boss Arena](https://github.com/Assassin29092005/GAME_CORE) — an Unreal Engine 5.8 native combat game with adaptive reinforcement-learning boss AI, player/boss C++ systems, Python training/inference, build/cook checks and direct Claude Fable 5 evidence.

Reject [Godotstation](https://github.com/Dropgunner/Godotstation) as an incomplete Unitystation port/workflow repository and [Sharpee](https://github.com/ChicagoDave/sharpee) as an interactive-fiction framework rather than a specific AI-authored game.

Verify nine source/configuration links, one screenshot link and the Fallen Citadel live URL. Count the Unity WebGL game and Unreal native game once each. This pass adds **two game units**, raising the collection to **546 counted game units across 474 repository records**. Keep both in **Non-Browser Engines** because the categorizer isolates Unity, Unreal and other native targets.

The critique score is **9/10** overall: novelty **9**, yield **9**, verification quality **10**, repeatability **8**, source quality **10**, and false-positive control **9**. Keep the audit and continue with another unused engine/model pair.

### Next experiment

Run one serial exact engine-plus-model query using an unused engine or changed source index. Verify direct gameplay source before acceptance.

### Dropped RenPy/Fable code search

Run the authenticated GitHub code search `RenPy game Co-Authored-By Claude Fable`. It returns zero results. Add no records and drop the exact query.

The conservative critique score is **4/10** overall: novelty **6**, yield **1**, verification quality **8**, repeatability **7**, source quality **4**, and false-positive control **10**.

### Next experiment

Run one serial exact HaxeFlixel or other unused engine query with Claude Fable evidence.

### Dropped HaxeFlixel/Fable code search

Run the authenticated GitHub code search `HaxeFlixel game Co-Authored-By Claude Fable`. It returns zero results. Add no records and drop the exact query.

The conservative critique score is **4/10** overall: novelty **6**, yield **1**, verification quality **8**, repeatability **7**, source quality **4**, and false-positive control **10**.

### Next experiment

Run one serial exact browser-engine query using Phaser plus Claude Fable.

### Phaser/Fable code-search expanded pass

Run the authenticated GitHub code search `Phaser "Co-Authored-By: Claude Fable 5"`. Inspect every candidate serially. Verify repository metadata, gameplay README or source, direct source paths, screenshots where present, and live deployment status.

Accept these verified games: [Aradama Survivors](https://github.com/eidas/aradama-survivors-proto), [Beyond Boring: Death March](https://github.com/kolatts/beyond-boring-death-march), five games in [mouse2](https://github.com/hokita/mouse2), [Hex Danmaku](https://github.com/macjoocan/hex-danmaku), [GridWatch Match Web](https://github.com/remeadows/GridWatchMatchWeb), [Para-Ti](https://github.com/harlemmariscal/Para-Ti), [Emblem Rogue](https://github.com/virtu333/rogue-emblem), [Relight](https://github.com/Deedubsy/Relight), and [GoGo Arabic](https://github.com/theshumba/gogo-arabic).

Count thirteen new game units. Mark [Relight](https://github.com/Deedubsy/Relight) as a non-browser entry because it ships a Tauri desktop target, even though it also has a browser renderer.

Reject [Lean Pool](https://github.com/Vilin97/lean-pool) as a formalization catalog, [Headless Day](https://github.com/wix-incubator/headless-day) as a project catalog, [Gliese](https://github.com/cwchanap/Gliese) because its Fable evidence was plan-only rather than an exact commit trailer, and [Serpens](https://github.com/cwchanap/Serpens) as a retail simulation with no qualifying game evidence.

Score this experiment 9/10. Keep this search family. Change the model alias or engine and use reverse-link seeds next.

### Phaser/Opus code-search expanded pass

Run the authenticated GitHub code search `Phaser "Co-Authored-By: Claude Opus"`. Inspect likely repositories serially. Verify real game source, direct links, screenshots where present, and live URLs.

Accept [Aeterna Chronicle](https://github.com/crisious/aeterna-chronicle-web), [snek](https://github.com/scottmccarrison/snek), [Wild Haggis Survivors](https://github.com/Giftedx/wild-haggis-survivors), [Heroes Clone](https://github.com/TamirNator/heroes-clone), [Platform Fighter](https://github.com/lodevel/platform-fighter), [Brothers](https://github.com/david-a-wheeler/brothers), [Browser MMORPG](https://github.com/luknet/browser-mmorpg), and [Yaoling Shangu](https://github.com/DSXiangLi/tcm_odyssey). Count eight new game units. Verify live HTTP 200 responses for snek, Wild Haggis Survivors, Platform Fighter and Brothers. Record Aeterna Chronicle and the other source-verified entries without claiming live play when no public demo is documented.

Reject [2d-game-forge](https://github.com/kwanghan-bae/2d-game-forge) because the inspected Phaser hit is a monorepo plan and no exact Opus or Fable commit trailer was found in its history.

Score this experiment 9/10. Keep Phaser plus Opus. Search native engines and reverse-link seeds next.

### Tauri/Opus native-game search

Run the authenticated GitHub code search `Tauri game "Co-Authored-By: Claude Opus"`. Inspect candidates serially. Accept [Kaijudo](https://github.com/vreddi/kaijudo), a Tauri desktop card-duel game with deck management, duel screens, card definitions, online-play code and an exact Opus 4.8 commit trailer. Reject Corkscrew as a mod manager, Zombie Cafe Revival as a preservation/future-rewrite project, and Emberfire because its required game runtime is not committed.

Count one new native game. Score this experiment 8/10. Keep the native-shell partition, but combine it with direct game-specific evidence.

### C++/Opus native-game search

Run the authenticated GitHub code search `C++ game "Co-Authored-By: Claude Opus"`. Inspect candidates serially. Accept [Gomoku Web Game](https://github.com/gww1981/gomoku-game), [Kyoril MMORPG](https://github.com/Kyoril/mmo), [OpenCiv1++](https://github.com/wicanr2/civ1_cht), [Mini Games](https://github.com/lofiski/mini-games) with three game units, and [Claude Chess](https://github.com/mglass222/claude-chess-web). Count seven new game units. Record Kyoril MMORPG, OpenCiv1++ and Mini Games under Non-Browser Engines; keep the browser titles in browser categories.

Score this experiment 9/10. Keep C++ plus Opus and reverse-link from the native projects.

### Godot/Opus search

Run the authenticated GitHub code search `Godot game "Co-Authored-By: Claude Opus 5"`. Inspect candidates serially. Accept [CYBER SUNDAY](https://github.com/influenza-dotcom/3D-RPG), a Godot 4.7 first-person immersive-sim/RPG prototype, and [The Nine Lives of Ash](https://github.com/phirogue/SparkyGames), a Godot 4 roguelite card game. Count two new native games. Add both to Non-Browser Engines with direct scene/script links and screenshot links where present.

Score this experiment 9/10. Keep Godot plus Opus and search Fable/Astra aliases next.

### Reverse-link and creator-index expansion from Wild Haggis Survivors

Run the authenticated GitHub code search for the full canonical URL of [Wild Haggis Survivors](https://github.com/Giftedx/wild-haggis-survivors). The exact result reached [Giftedx/Giftedx](https://github.com/Giftedx/Giftedx), a public creator index. Inspect its README and follow its direct repository links.

Accept [ha·ggis Hub](https://github.com/Giftedx/ha-ggis-hub), a Rust/WebAssembly Canvas2D arcade lobby with keyboard/pointer movement, door proximity, game registry and live deployment, and [Just Five More Minutes](https://github.com/Giftedx/just-five-more-minutes), a Three.js first-person bedroom game with an embedded Canvas2D mini-MMO, seeded simulation, chores, combat, persistence, screenshots and live deployment. Both repositories contain gameplay source and exact Claude Fable 5 commit trailers. Count two new browser game units. Keep the hub, Wild Haggis Survivors and Just Five More Minutes as separate repository records because each is independently published.

This pass raises the collection to **579 counted game units across 501 repository records**. Score it 9/10: novelty 9, yield 8, verification quality 10, repeatability 8, source quality 9 and false-positive control 9. Keep reverse-link traversal, but change the seed on every pass.

### Next experiment

Run one serial exact reverse-link search from [Platform Fighter](https://github.com/lodevel/platform-fighter), then inspect each external result before adding records.

### Dropped reverse-link search from Platform Fighter

Run the authenticated GitHub code search for the full canonical URL of [Platform Fighter](https://github.com/lodevel/platform-fighter). It returns only this collection's own README, wiki and search-log files. It returns no external list or creator source. Add no records and drop this exact seed.

The conservative critique score is **4/10** overall: novelty **5**, yield **1**, verification quality **8**, repeatability **8**, source quality **4** and false-positive control **10**.

### Next experiment

Run one serial exact reverse-link search from a native Godot game, then inspect each external result before adding records.

### Unity/Fable native-game code-search audit

Run the authenticated GitHub code search `Unity game "Co-Authored-By: Claude Fable"`. Inspect the strongest candidates serially. Accept [moorestech](https://github.com/moorestech/moorestech), a Unity/C# open-world automated factory game with a MainGame scene, player systems, block placement, machines, conveyors, trains, research, screenshots and exact Claude Opus 5 and Claude Fable 5.1 commit trailers. Reject [golden-hooves-turing-ranch](https://github.com/leavesprior/golden-hooves-turing-ranch) because it is an unmodified Next.js starter with no game evidence, and [StarSystemGeneration](https://github.com/nhilix/StarSystemGeneration) because the sampled public repository has no README or inspected game evidence.

Count one new native Unity game unit. This pass raises the collection to **580 counted game units across 502 repository records**. Score it 8/10: novelty 8, yield 7, verification quality 9, repeatability 8, source quality 8 and false-positive control 9. Keep the Unity-plus-model pattern and inspect direct gameplay source before acceptance.

### Next experiment

Run one serial exact reverse-link search from [moorestech](https://github.com/moorestech/moorestech), then search Unreal or Unity with a GPT-6 Astra alias.

### Godot/Fable native-game code-search audit

Run the authenticated GitHub code search `Godot game "Co-Authored-By: Claude Fable"`. Inspect the strongest candidates serially.

Accept [The Wandering Inn RPG](https://github.com/GabrielGLevine/wandering-inn-rpg), a playable Godot 4.7 top-down RPG with a live web demo, [Ghost Guild](https://github.com/moura-code/ghost-guild), a Godot 4 card-combat incremental roguelite, [Hooper](https://github.com/JoseTomanan/hooper-game), a Godot 4 .NET 1v1 basketball prototype, and [AIGameTest2](https://github.com/archer47-qingmei/AIGameTest2), a source-verified Godot card roguelite. Each repository has direct gameplay source and an exact Fable or Opus trailer. Reject [Dual Frontier](https://github.com/Crystalka228/Dual-Frontier) because its README says it is not a game release and uses its colony-simulator content only as a systems-engineering workload. Reject [Slay the Streamer 2](https://github.com/Surfinite/slay-the-streamer-2) because it is a mod for a commercial game, not an independent game repository.

Count four new native-engine game units. This pass raises the collection to **584 counted game units across 506 repository records**. Score it 9/10: novelty 9, yield 9, verification quality 9, repeatability 8, source quality 9 and false-positive control 9. Keep Godot/Fable and inspect exact gameplay source before acceptance.

### Next experiment

Run one serial exact reverse-link search from a newly accepted Godot game, then search Godot with a GPT-6 Astra or GPT6 alias.

### Godot/GPT-6 Astra code-search and awesome-list expansion

Run the authenticated GitHub code search `Godot game "GPT-6 Astra"`. Inspect candidates serially. Accept [NULLSPACE](https://github.com/marius4lui/NULLSPACE), a Godot 4.7.2 first-person survival-horror game with a v0.3 beta release, native gameplay source, screenshots and explicit GPT-6 Astra attribution, and [False Ritual](https://github.com/lucas-wyd/False-Ritual), a Godot 4 first-person psychological-horror prologue with macOS/Windows releases, interactive house scenes, enemy pursuit, screenshots and explicit GPT-6 Astra attribution. Reject [Cameraman](https://github.com/splatterfacegames/cameraman) because it is a Godot camera add-on, not a game.

The same search surfaced [awesome-gpt-6-astra](https://github.com/MartinDelophy/awesome-gpt-6-astra), which lists 61 games and interactive projects, and [awesome-gpt-6-astra-casebook](https://github.com/zlxxlz1026/awesome-gpt-6-astra-casebook), which lists 13 cases. Treat both as discovery sources only. Their catalog counts are not this collection's verified count.

Count two new native-engine game units. This pass raises the collection to **586 counted game units across 508 repository records**. Score it 10/10: novelty 10, yield 9, verification quality 10, repeatability 9, source quality 10 and false-positive control 9. Use the two awesome lists to find additional GitHub repositories, but verify every game and model claim at repository level.

### Next experiment

Inspect the GitHub links from the GPT-6 Astra awesome lists for unseen repositories, then run one serial exact reverse-link search from NULLSPACE.

### Godot/GPT6 alias audit and catalog expansion

Run the authenticated GitHub code search `Godot game GPT6`. Inspect the strongest candidates serially.

Reject [The-Remainder](https://github.com/discover3d/PrestonRigsby__The-Remainder) because it is a real 2023 Godot game-jam project without GPT-6 Astra, Opus or Fable evidence. Reject [AsterCoast](https://github.com/sayantanmandal1/AsterCoast) because it is a substantial Godot open-world racer but the inspected repository does not identify a qualifying authoring model; a `gpt6test` path is not proof. Reject [the Little Nightmares-inspired scene demo](https://github.com/Pulucat/GPT6-Godot-Little-Nightmares-Inspired-Scene-Demo) because it is a lighting and scene demonstration without a game loop. Reject [GameDevBench](https://github.com/waynchi/gamedevbench) as benchmark infrastructure and [gpt6-astra-3d](https://github.com/yangqiong/gpt6-astra-3d) as a catalog.

Hold [xianyu110/awesome-gpt-6-astra](https://github.com/xianyu110/awesome-gpt-6-astra) as a discovery source. Its `PLAYABLE.md` reports 86 verified playable demos, but almost all entries have only hosted demos and social posts, not GitHub game repositories. Do not count those entries without repository-level source and model evidence.

This pass adds **zero game units** and keeps the total at **586 counted game units across 508 repository records**. Score it 6/10: novelty 8, yield 1, verification quality 9, repeatability 8, source quality 8 and false-positive control 10. Drop the exact GPT6 alias until a new source partition is available.

### Next experiment

Inspect GitHub links from the held GPT-6 Astra lists, then run one serial exact reverse-link search from [NULLSPACE](https://github.com/marius4lui/NULLSPACE).

### Unreal/GPT-6 Astra audit

Run the serial query `Unreal game "GPT-6 Astra"`, then inspect the linked engine and catalog sources one at a time. Accept [Third Beis HaMikdash](https://github.com/ShmuelSokol/3rdbhmk): it is a downloadable native Unreal Windows walkthrough with a `.uproject`, first-person walking, white-dove flight, interactable doors, tour/codex systems, crowd behavior, save/load, runtime screenshots and a release. Its history contains exact [Claude Fable 5.1](https://github.com/ShmuelSokol/3rdbhmk/commit/45218d02d7cd6d1cee6cc881f19c3aeee25c2f41) and Claude Opus 5 trailers. Reject [Gamachine](https://github.com/BurakErdemci/gamachine) and [Crazy Horse Gaming Engine](https://github.com/dmscribe/crazyhorse-gaming-engine) as tooling; reject [Piața Unirii](https://github.com/danmana/piata-unirii) and [Orbital Core Showcase](https://github.com/wangruofeng/orbital-core-showcase) as scene/model showcases; and reject [Wanderburg](https://github.com/evan966890/wanderburg) because its game is real but its repository has no qualifying Astra, Opus or Fable authorship evidence. This pass adds one native game and raises the frontier to 585 units across 507 repository records.

### Unity/GPT-6 Astra audit

Run the serial query `Unity game "GPT-6 Astra"`, then inspect each direct repository candidate. Accept [P(DOOM)](https://github.com/transitive-bullshit/ai-safety-doom): it is a complete live Doom 64-inspired browser shooter with a lab level, movement, aiming, weapons, enemies, pickups, doors, difficulty modes, boss content, screenshots, source tests and Playwright tests. Its README explicitly credits GPT-6 Astra with Codex, Three.js, TypeScript and Next.js; the live demo returned HTTP 200. Reject [InfinityRenderPipeline](https://github.com/haolange/InfinityRenderPipeline) and [Locus](https://github.com/r1n7aro/Locus) as Unity rendering/agent tooling. This pass adds one browser game and raises the frontier to 586 units across 508 repository records.

### Unity/Claude Opus audit

Run the serial query `Unity game "Co-Authored-By: Claude Opus"`, then inspect direct candidates. Accept [OSRS Tower Defense](https://github.com/hamilton-junior/osrs-tower-defense): it is a substantial browser tower-defense game with a Canvas engine, renderer, simulation, waves, bosses, towers, traps, fusions, progression, saves, collection log and extensive unit/Playwright tests. Its history contains many exact Claude Opus 5 trailers on gameplay commits. The configured GitHub Pages URL redirected during verification, so record source verification without claiming a live demo. Reject [InventoryTetris](https://github.com/lolesch/InventoryTetris) because the inspected repository documents an inventory subsystem rather than a qualifying standalone game. This pass adds one browser game and raises the frontier to 587 units across 509 repository records.

### Cocos/Claude Opus audit

Run the serial query `Cocos game "Co-Authored-By: Claude Opus"`, then inspect direct repositories. Accept [Parkour Hero (49FriendRunner)](https://github.com/TinycellCorp/Parkour): it is a complete Cocos Creator 2.4.13 2D endless-runner project with player, pet, buff, game-mode, UI, scenes, animations, custom physics and WeChat/Alipay/QQ mini-game targets. Its history contains exact Claude Opus 4.5 trailers on gameplay and asset changes. Keep it in Non-Browser Engines. Reject [SkinForge](https://github.com/fagemx/skinforge) because it is an AI art-delivery pipeline and explicitly says its Cocos project is separate and not included. This pass adds one native-engine game and raises the frontier to 588 units across 510 repository records.

### Bevy/Claude Opus audit

Run the serial query `Bevy game "Co-Authored-By: Claude Opus"`, then inspect direct repositories. Accept [SimCity (Bevy)](https://github.com/grgrwlkr/SimCity): it is a native Bevy 0.19 city simulator with roads, zoning, buildings, citizens, traffic, services, persistence and scenarios. Accept [Lille](https://github.com/leynos/lille): it is a runnable native Bevy RTS prototype with map/world state, player and NPC spawning, camera presentation, tests and a documented game loop. Both histories contain exact Claude Fable and Claude Opus gameplay/presentation trailers. Keep both in Non-Browser Engines. Reject [rust-doodle](https://github.com/mule/rust-doodle) as a hello-world/rendering sandbox. This pass adds two native-engine games and raises the frontier to 590 units across 512 repository records.

### MonoGame/Claude Opus audit

Run the serial query `MonoGame game "Co-Authored-By: Claude Opus"`, then inspect each repository candidate. Reject [DTXManiaCX](https://github.com/cwchanap/DTXManiaCX) as a collection entry: it is a real .NET 8/MonoGame rhythm game rewrite, but the exact Claude Opus text is present only in an implementation plan and does not appear as a qualifying commit trailer in the inspected history. Keep it as a rejected candidate until repository-level model evidence exists.

This pass adds zero game units. Keep the native-engine category broad, but require model evidence in a commit, README attribution, or equivalent repository-level source.

### SDL/Claude Opus native-game result audit

Inspect the SDL result partition serially. Reject [PJABs Fanbidextrous Game](https://github.com/drpaj12/PJABs_Fanbidextrous_Game) because it is a GameJam template with placeholder screens and design notes. Reject [lub](https://github.com/neguse/lub) because it is a Lua-driven SDL3 game engine with sample programs, not an independently published game. Do not count embedded samples as separate repository records.

Add zero game units. Keep the remaining SDL result partition for later serial inspection and require both a real game loop and repository-level Astra, Opus or Fable evidence.

### C++/Claude Fable native-game code-search audit

Run the C++ game query serially. Reconfirm the existing [Hex Danmaku](https://github.com/macjoocan/hex-danmaku) record because it contains a complete browser hex-grid bullet-hell game with stage progression, bosses, endless and hunt/RPG modes, persistence, art systems and extensive tests. Its history contains exact Claude Fable 5 and 5.1 gameplay trailers.

Reject [PlantsVsZombies-Recode](https://github.com/rgthddei67/PlantsVsZombies-Recode) and [PyAitD](https://github.com/felipe-dos-santos81/PyAitD): both are real games with strong source, but the exact Fable text was found only in implementation plans, not qualifying repository-level attribution trailers. Add zero units because Hex Danmaku was already recorded. Keep the remaining C++ result partition for serial inspection.

### SFML/Claude Opus native-game code-search audit

Run the SFML game query serially. Accept [Yuga Kshetra: The Final Dark God](https://github.com/Jz-Zs/Yuga-Kshetra-The-Final-Dark-God) because its C++/SFML/OpenGL subproject contains a source-complete first-person voxel survival-extraction game with procedural terrain, resources, crafting, combat, hostile AI, extraction, progression, assets and dated screenshots. Its history contains exact Claude Opus 4.7 gameplay trailers.

Reject [Emberfire](https://github.com/Xian55/Emberfire) because it is an incomplete MMO client/reimplementation: the bundled runtime content, maps and database are external, and the server is a placeholder. Count one new native game unit. Keep the remaining SFML result for serial inspection.

### Pygame/Claude Opus native-game code-search audit

Run the Pygame game query serially. Accept [Blue Ball](https://github.com/daviddgonzalez/BlueBall) because its README and source prove a runnable PyGame/Pymunk 2D physics platformer with multiple scenes, authored levels, hazards, checkpoints, AI ghost racing, genetic-algorithm training, audio and tests. Its history contains exact Claude Opus 4.8 trailers on audio and AI/game feature work. Count one new native game unit and keep the remaining Pygame result partition for serial inspection.

### Pygame/Claude Fable native-game code-search audit

Run the Pygame game query serially. Accept [Dot Grid](https://github.com/honzaves/dotgame) because its README and source prove a runnable PyGame territory strategy game with a documented ruleset, human and AI modes, MCTS, neural-network players, training, replay and tests. Its history contains exact Claude Fable 5 trailers on AI gameplay, training and replay fixes. Count one new native game unit and keep the remaining Pygame result partition for serial inspection.

### Godot-to-Babylon/Claude Opus game audit

Inspect the Godot/Opus result partition serially. Accept [Project Rondo](https://github.com/YuutaTsubasa/ProjectRondo) as one current playable browser/desktop hub game. Its README and source prove a third-person Babylon.js/Havok knight hub with movement, jump, glTF animation, lighting, scatter, audio, dialogue and tests. Exclude the future Sonic-style levels and puzzle games described by the roadmap. Its history contains exact Claude Opus 5 gameplay and presentation commits. Count one new browser game unit.

### Godot/Claude Opus 4.8 multi-game demo audit

Inspect the result partition serially. Accept [Yume](https://github.com/kamwoh/yume) as one repository containing three committed, fresh-clone runnable games: [Doomarena3D](https://github.com/kamwoh/yume/blob/master/godot/scenes/doomarena3d.tscn), [Sokoban](https://github.com/kamwoh/yume/blob/master/godot/scenes/sokoban_2d.tscn) and [Lanterns](https://github.com/kamwoh/yume/blob/master/godot/scenes/lanterns_3d.tscn). Each has dedicated world data, a launcher scene and a README gameplay GIF. Its history contains exact Claude Opus 4.8/4 implementation commits. Reject [Pendulum of Despair](https://github.com/gcko/pendulum-of-despair) because its README says engine implementation has not begun; it is design-only. Count three native game units and exclude engine-only or visual-test demos.

### Godot/Claude Opus 4.8 native-game audit

Accept [Regolith](https://github.com/mnorrsken/fringeworlds) because its README and source prove a runnable Godot 4.7.1 native isometric colony builder with a fixed-tick economy, resource chains, prospecting, finite deposits, mining, colonists, weather, save/load, release builds and extensive tests. Its history contains exact Claude Opus 4.8 and Opus 5 gameplay-system trailers. Count one native game unit.

### Godot/Claude Opus 4.8 RTS audit

Accept [Swarm Dominion](https://github.com/johnburbridge/swarm-dominion) because its README and source prove a current playable Godot RTS prototype with unit selection, movement, combat, harvesting, progression, resource nodes, main scenes, HUD and tests. Its history contains exact Claude Opus 5 and 4.8 gameplay-system trailers. Count one native game unit and exclude roadmap-only multiplayer and later RTS features.

Reject [Loom](https://github.com/ShahmeerHyat/Loom) because its public README is unrelated Godot-MCP tooling content and its own project notes say the latest build is not verified in Godot.

### Godot/Claude Opus 5 vertical-slice audit

Accept [Sortie](https://github.com/Attacktive/sortie) as one native Godot game. Its README documents fresh-clone execution, a title screen, a walkable field, standalone battle mode, a screenshot harness and tests. The source includes field movement, a tactical grid, unit selection, attacks, turn flow, dialogue, mission data, save/load and result screens. Its field implementation commit contains an exact Claude Opus 5 trailer. Count only the current RPG vertical slice; exclude design documents.

Reject [The Synaptic Sea](https://github.com/9thLevelSoftware/the-synaptic-sea) even though it is a real Godot pre-alpha space-horror survival game. The inspected exact Claude Opus text appears only in implementation plans, and no qualifying repository-level attribution trailer was confirmed. Keep it rejected until stronger model evidence is available.

### Godot/Claude Opus 5 follow-up native audit

Reconfirm [CYBERSUNDAY](https://github.com/influenza-dotcom/3D-RPG) as one native Godot game. Its README and source document a substantial single-player FPS/RPG with a first-person entry flow, movement, aiming, firearms, knives, throwable props, stealth, NPCs, quests, inventory, authored levels, saves, assets and tests. A gameplay commit contains an exact Claude Opus 5 trailer. Count only the current immersive-sim prototype; exclude editor tools and visual effects.

Reject [Firebound](https://github.com/firebound/firebound) because its README explicitly describes a framework, a future prototype and a separate future complete game, not a source-complete independent game. Reject [Kicktro](https://github.com/carlemil/kicktro) because it is a GPU demoscene visual collection without game rules or an objective.

### SDL/Claude Opus 5 space-game audit

Accept [Starcluster](https://github.com/Jirnyak/starcluster) as one native C++/SDL2 game. Its README and source prove a runnable space-economy sandbox with an 8,192-star cluster, markets, NPC factions, contracts, colonies, fleet autopilot, local first-person flight, saves, Android support and test programs. Its history contains exact Claude Opus trailers on gameplay systems. Count the current simulation once.

Reject [Dead Rising 2: Case Zero — Native PC Port](https://github.com/wivi514/Dead_Rising_2_Case_Zero_Xenon_Recomp). It is a real native port, but no qualifying Claude Opus attribution trailer was confirmed in the inspected history, and the proprietary game data is external to the repository.

### Flutter/Claude Opus 5 multi-game reconfirmation

Reconfirm [Mini Games](https://github.com/lofiski/mini-games) as one native Flutter repository containing three independently playable Android puzzle games: [2048](https://github.com/lofiski/mini-games/blob/main/lib/games/game2048/game2048_definition.dart), [Number Sliding Puzzle](https://github.com/lofiski/mini-games/blob/main/lib/games/sliding_puzzle/sliding_puzzle_definition.dart) and [Tap Match](https://github.com/lofiski/mini-games/blob/main/lib/games/tap_match/tap_match_definition.dart). Each has separate rules, UI, registry integration and tests. Exact Claude Opus trailers appear on the gameplay implementation commits. Merge stronger direct links into the existing record and do not count the repository twice.

### OpenGL/Claude Fable Roblox-game audit

Accept [Roshambo 26](https://github.com/jonlabrie/roshambo_26) as one other-engine game under Non-Browser Engines. The repository contains a real Roblox/Rojo project with client, server and shared Luau code, round coordination, arena state, player profiles, economy, progression, stage assets, HUD, multiplayer remotes and extensive tests. Its deployment guide documents the published place and the live demo at [playroshambo.com](https://playroshambo.com), which returned HTTP 200 during verification. A player-facing gameplay commit contains an exact Claude Fable 5.1 trailer. Count only the Roshambo game; exclude its shared systems and sub-features.

Reject [Boundless Engine](https://github.com/amitassaraf/boundless-engine) as voxel-engine tooling with tech-demo screenshots but no game loop. Reject [Quake2Mac](https://github.com/felipe-dos-santos81/Quake2Mac) because its Fable evidence is limited to texture/renderer tooling and it requires external commercial game data.

### Rust/Claude Fable terminal-sports-game audit

Accept [gameday](https://github.com/WallyMagill/gameday) as one native terminal game. Its README and source prove a runnable sports board with nine leagues, live and upcoming game ranking, a hero scoreboard, situation and last-play fragments, zoomed overview/plays/stats, TV mode, favorites, notifications, cache-backed offline behavior, `--once` output and tests. The repository includes a tour screenshot and demo GIF. Its gameplay feature commit contains an exact Claude Fable 5.1 trailer. Count only the current sports board game; exclude release tooling.

### Rust/Bevy/Claude Fable sports-game reconfirmation

Reconfirm [Breakneck Baseball](https://github.com/hynding/breakneck-baseball) as one engine-based game. Its README, source and playtest screenshots prove a complete Rust/Bevy/Rapier baseball game with native desktop and browser WASM builds, CPU/2P modes, full innings, five pitches, ball flight, steals, pickoffs, advanced rules, camera modes, settings, audio, substitutions and tests. The live demo is [hynding.github.io/breakneck-baseball](https://hynding.github.io/breakneck-baseball/). Its history contains exact Claude Fable gameplay trailers. Merge stronger direct links into the existing record and do not count it twice.

### Rust/Bevy/Claude Fable sports-game audit

Accept [Breakneck Baseball](https://github.com/hynding/breakneck-baseball) as one engine-based game. Its README, source and playtest screenshots prove a complete Rust/Bevy/Rapier baseball game with native desktop and browser WASM builds, CPU/2P modes, full innings, five pitches, ball flight, steals, pickoffs, advanced rules, camera modes, settings, audio, substitutions, persistence and tests. The live demo is [hynding.github.io/breakneck-baseball](https://hynding.github.io/breakneck-baseball/). Its history contains exact Claude Fable gameplay trailers. Count the baseball game once.

### Awesome-list game-count audit

Inspect each candidate list serially. Accept only a list with at least 15 named game entries. Count gameplay rows under the list's game headings, then exclude table-of-contents links, engines, libraries, assets, tutorials, tools, contribution links, and other non-game resources. On 2026-09-12, this produced ten accepted lists in [awesomelists.md](../awesomelists.md), ranging from 17 to 381 counted games. Reject short or mixed lists even when their repository has a large star count.

### HTML/JavaScript/Claude Fable birthday mini-game audit

Accept [Lera Birthday Mini-Games](https://github.com/vitalirasin-web/valeriabirthday) as four browser mini-games embedded in a family birthday page. The page has separate game sections for filling a coffee cup, peeling stickers, catching a moving dog and popping chore balloons. The `games.js` source includes input handlers, progress state, completion state and feedback effects for each loop, and the [GitHub Pages deployment](https://vitalirasin-web.github.io/valeriabirthday/) returned HTTP 200 during verification. The inspected [game-text/UI commit](https://github.com/vitalirasin-web/valeriabirthday/commit/ff60ed966ba2b206ece5cc68f74850b75513599d) contains an exact Claude Fable 5 trailer. Count the four mini-games; exclude the surrounding family page, gallery, audio and trivia quiz.

### Python/React/Evennia/Claude Opus MUD audit

Accept [Arx II](https://github.com/Arx-Game/arxii) as one standalone server-hosted MUD under Non-Browser Engines. The README identifies it as the sequel to Arx: After the Reckoning and documents an Evennia server plus React game client. The source includes the game route, scenes, battle map, player actions, WebSocket integration, entry-flow tests and combat smoke tests. The inspected [combat-actions commit](https://github.com/Arx-Game/arxii/commit/b7eb4c972b962a6c8cd75ed36a7c70b8f8ac8f4a) adds flee, cover, interpose, ready, combo, join and leave actions, web/telnet dispatch and end-to-end coverage, with exact Claude Opus 4.8 trailers. Do not claim a public live demo.

### React/TypeScript/Claude Fable card-client audit

Reject [mighty-frontend](https://github.com/joekhosbayar/mighty-frontend). Its README explicitly identifies it as the thin Web/Electron frontend module for the Mighty workspace and points to the separate `go-mighty` backend as the authoritative game server. The client renders state and sends moves, but has no client-side simulation and cannot run the game independently. Keep it as a rejected component repository rather than count it as a standalone game.

### TypeScript/MCP/Claude Fable model-as-player audit

Reject [Masset MCP Tools](https://github.com/BenMasset/masset-mcp-tools). The README identifies a suite of MCP tools, not an independent game collection. Its interactive chess tool has Claude choose the moves, and its Mystery Guest tool makes Claude the hidden host. Both are model-as-player/host experiences, so exclude them even though the repository contains real interactive UI and game rules.

### Two-day date-partitioned commit search audit

Run each GitHub commit query one at a time for `2026-09-10..2026-09-12`: exact Claude Opus trailers, exact Claude Fable trailers, `GPT-6 Astra`, and the broader `Astra` alias. Inspect the README, source tree, entry point and gameplay state for each unseen repository before accepting it.

Accept [Zombie Shooter](https://github.com/poralmi233-spec/zombie-shooter), [Battle City](https://github.com/nickblack1919/battle-city), [Gabriel's Animation Studio](https://github.com/gberry747-lab/gabriels-animation-studio), [Skylark Run](https://github.com/jackpepper-vibe/SkylarkRun), [Unfit for Print](https://github.com/PPO-GG/unfit-for-print), [Math Arcade Paradise](https://github.com/mundeok/math-arcade-paradise), [BCUSCA Welcome Week Arcade](https://github.com/HaarisahHussain/Spin-The-Wheel-), [chess3dastra](https://github.com/yortch/chess3dastra), [Grand Theft Astra](https://github.com/angelaborowski/grand-theft-astra), [Haynes Quest](https://github.com/thaynes43/haynes-quest), and [Explottens: Survival](https://github.com/Werplay/playable-explottens-survivor). Together they add 30 counted game units. Count each documented mini-game only when source code shows its own input, rules or objective, state and completion/failure path. Count a multi-chapter adventure or playable ad once.

Reject [desafio-gaymer](https://github.com/GuidaGaita/desafio-gaymer) as a score calculator with no game loop. Reject [Astra Game Center](https://github.com/gncll/astra-game-center) and [Astra](https://github.com/windvill/Astra-) as real games without qualifying GPT-6 Astra, Claude Opus or Claude Fable evidence; do not treat the word “Astra” in a product name as model attribution. Preserve private or unreachable demos as source-verified only, and do not claim a playtest when the URL cannot be reached.

Regenerate the README with date-ranked **Top games today**, **Top games this week**, and **Top games this month** sections. Use the repository verification date for today and the publication or qualifying gameplay-evidence date for the week and month windows. Keep WebGL and native-engine categories separate.

### Repository README screenshot scan

Scan each qualifying repository that has no `screenshot_urls` record. Read its README serially, resolve relative Markdown and HTML image links against the README URL, and reject badges, logos, icons, navigation artwork, diagrams, progress sheets and donation buttons. Save the surviving URLs in `research/screenshot-discoveries.json`.

Create `games/<slug>/readme.md` for every named game unit. Link the repository, model evidence, gameplay source and screenshot sources. Use a local placeholder SVG only when no reliable source image remains. Treat a README image as a source asset, not as proof that the game was played.

### Publication-date enrichment audit

Run GitHub metadata collection serially through bounded GraphQL batches. Fetch repository creation timestamps for every qualifying repository and inspect the first public release when available. Store `published_on` only for an explicit publication or release signal. Store `repository_created_at` separately, label repository-created-only records, preserve inaccessible-repository dates as recorded without live source, and leave no record with an unclassified date status. Regenerate the ranking reports and validate both the dataset and date audit after the pass.

### Two-day fresh-game pass completed on 2026-09-15

Run the GitHub commit and repository queries serially for `2026-09-13..2026-09-15`. Require a playable source loop and qualifying GPT-6 Astra, Claude Opus, or Claude Fable evidence. Accept one canonical record per repository, then count separately documented game pages or source units inside multi-game repositories.

Add 30 counted units from 18 repositories. Strong multi-game sources included [Airgap](https://github.com/JakeAve/airgap) with seven browser games and [Top-10 Tension](https://github.com/cuongluu8/tenable) with four football-trivia modes. Fresh single-game additions included [PirateSeas](https://github.com/AndreiBesliu/PirateSeas), [GridWatch: Signal Breach](https://github.com/remeadows/gridwatch-signal-breach), [Tic-Tac-Toe MCP Game](https://github.com/worgho2/tic-tac-toe-mcp-game), [Mystic Onslaught](https://github.com/KAOSN00B/MysticOnslaught), [120 Dispatch Desk](https://github.com/1989-12-13/BuddyGame), and [Tres Space Shooter](https://github.com/SilvioDoMine/tres-spaceshooter).

Reject real games without qualifying model attribution, catalogs, engine benchmarks, visual scenes, tooling, and incomplete prototypes. Keep repository creation timestamps separate from current gameplay-evidence dates. Label repository-level model evidence instead of upgrading it to direct gameplay attribution.
