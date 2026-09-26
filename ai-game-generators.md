# AI Game Generators and Engines

Use this directory to find tools that create or edit playable games with AI. Keep these tools separate from the game repositories in `games.json` and the game collections in `awesomelists.md`.

## Compare game-creation tools

Use the detailed comparison to distinguish game generators, AI-assisted engines, and game-discovery platforms. Use the checklist for a quick feature scan. Treat vendor capability statements as claims unless the tool was independently tested.

| Tool | Category and creation workflow | Play, publishing, remix | Code and export | Access and caveats |
| --- | --- | --- | --- | --- |
| [Pixelfork](https://www.pixelfork.ai/) | Prompt-to-game studio; generate 2D/3D games, then tune mechanics. | Browser play and share links; community games can be remixed. | Read and edit JavaScript/Three.js; export Android APK, AAB, or Android Studio project. | Product says it is live and free to try. [Product](https://www.pixelfork.ai/) · [features](https://www.pixelfork.ai/features) |
| [Rosebud AI](https://rosebud.ai/ai-game-creator) | Prompt-to-game studio; generates game code, art, and sound; refine by chat. | Browser play, one-click publishing, and remixing published games. | Editable JavaScript; Windows game export is advertised. | Free to start; project size, credits, and commercial rights depend on plan. [Game creator](https://rosebud.ai/ai-game-creator) |
| [Makko AI](https://www.makko.ai/) | 2D game and art studio; generate characters, backgrounds, and animations, then prompt a game using those assets. | Play in browser and publish a share link. | Asset export is stated; game export is mentioned without a clear format or process. | Free quotas and paid plans; vendor states users retain game and asset ownership. [Product](https://www.makko.ai/) |
| [PocketByte](https://pocketbyte.io/) | Prompt-to-game studio with AI refinement and a separate asset studio. | Browser play, community publishing, and remixing. | Game-source access and standalone game export are not established; mobile apps are for using PocketByte. | Product page advertises creation and community access. [Product](https://pocketbyte.io/) |
| [Wanaka](https://wanaka.app/) | AI-assisted 3D studio; generate a playable first version, then edit worlds, rules, and details by conversation or manually. | Browser play, one-link publishing, templates, and community remixing. | Source-code and native-game export are not established. | Studio prompts users to sign in; check current plan and availability. [Product](https://wanaka.app/) |
| [Gamly](https://gamly.app/create) | Advertises prompt-to-game generation and iterative prompting. | Advertises web play and publishing. | Advertises source access and web, iOS, Android, and desktop exports. | The creation page currently asks users to join a waitlist; treat capabilities as unverified until accessible. [Creator page](https://gamly.app/create) |
| [Summer Engine](https://www.summerengine.com/) | Desktop AI-assisted engine; draft scenes and scripts, test, and edit code. Supports GDScript, C++, and C#; offers MCP/CLI workflows. | Advertises Summer Games and other launch destinations. | Code remains editable; advertises exports for desktop, mobile, Steam, and console. | macOS and Windows downloads are offered; verify each export target before relying on it. [Product](https://www.summerengine.com/) |
| [GDevelop AI Agent](https://gdevelop.io/blog/make-games-with-ai-agent-gdevelop-automated-prompt) | Open-source visual engine with AI that creates or modifies project features. It is not a one-prompt whole-game button. | Preview and publish through gd.games and other destinations. | JavaScript extensibility; export for web, desktop, and mobile. | AI credits and some publishing options vary by plan. [AI Agent guide](https://gdevelop.io/blog/make-games-with-ai-agent-gdevelop-automated-prompt) · [features and export](https://gdevelop.io/features) |
| [Buildbox 4](https://www.buildbox.com/buildbox-4-is-now-available-make-games-with-ai/) | Visual engine with AI scene/asset generation and AI-assisted node logic; expect to finish and review the project in the editor. | Editor preview; public-play and community-remix features are not established here. | Buildbox documents Android, Windows, iOS, macOS, Steam, Apple TV, and other exports; confirm Buildbox 4-specific support. | AI feature details come from vendor announcements and guides. [AI announcement](https://www.buildbox.com/buildbox-4-is-now-available-make-games-with-ai/) · [export guide](https://www.buildbox.com/portfolio/exporting/) |
| [OmGithub](https://omgithub.com/) | AI project studio and game catalog, not a game engine. Create projects through OpenCode; submit or select GitHub games as remix sources. | Discover games; open hosted **Play** or **Original ↗** links; explicitly request a remix and publish a hosted build. | Keep source in GitHub and review commits; native game export is not established. | Guest creation depends on deployment configuration; sign in for authenticated workflows. Read the [publishing guide](https://github.com/AgentsLoop/omsite/blob/main/wiki/omgithub.md) and [site README](https://github.com/AgentsLoop/omsite/blob/main/README.md). |
| [Exists](https://exists.ai/) | Advertises text-generated multiplayer worlds and gameplay, with customization. | Advertises online play and sharing with friends. | Source-code and export formats are not established. | Landing page uses future-facing language; do not treat the creation or output claims as independently verified. [Product](https://exists.ai/) |
| [SpawnForge](https://www.spawnforge.ai/) | Browser-based AI-native 2D/3D engine; site advertises generation of scenes, physics, scripts, and game logic. | Instant play and one-click publishing are advertised. | Public repository describes a Bevy/Rust/WASM engine and ZIP/PWA export; some capabilities are incomplete or unverified. | Site says **Private pre-launch**. Repository notes that external MCP is local-build-only and not verified end to end. [Product](https://www.spawnforge.ai/) · [source and capability notes](https://github.com/Tristan578/project-forge) |

### Feature checklist

| Checklist | Pixelfork | Rosebud | Makko | PocketByte | Wanaka | Gamly | Summer | GDevelop | Buildbox 4 | OmGithub | Exists | SpawnForge |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Prompt-to-game | ✅ | ✅ | ✅ | ✅ | ✅ | ◐ | ✅ | ◐ | ◐ | ◐ | ◐ | ◐ |
| AI editing / iteration | ✅ | ✅ | ✅ | ✅ | ✅ | ◐ | ✅ | ✅ | ✅ | ✅ | ◐ | ◐ |
| Browser play / share | ✅ | ✅ | ✅ | ✅ | ✅ | ◐ | ◐ | ✅ | ? | ✅ | ◐ | ◐ |
| Community remix | ✅ | ✅ | ? | ✅ | ✅ | ? | ? | ? | ? | ✅ | ? | ? |
| Readable / editable source | ✅ | ✅ | ? | ? | ? | ◐ | ✅ | ✅ | ? | ✅ | ? | ◐ |
| Native game export | ✅ Android | ◐ Windows | ? | ? | ? | ◐ | ◐ | ✅ | ◐ | ? | ? | ◐ ZIP/PWA |

**Checklist key:** ✅ explicitly documented; ◐ limited, advertised, or unverified; ? not established by the reviewed evidence. Treat OmGithub as a project studio/catalog rather than a game engine. Treat Gamly and SpawnForge as limited-access products; do not present their advertised output as verified.

## Prompt-to-playable platforms

| Tool | What it generates | Output and limits | Primary evidence |
| --- | --- | --- | --- |
| [Pixelfork](https://www.pixelfork.ai/) | Prompt-driven 2D and 3D games with editable JavaScript and Three.js code. | Share a web build; export an Android APK, AAB, or Android Studio project. | [Product](https://www.pixelfork.ai/) · [features](https://www.pixelfork.ai/features) |
| [Rosebud AI](https://rosebud.ai/ai-game-creator) | Browser-playable games from natural-language descriptions, with generated code, art, and sound. | Iterate in chat and edit the generated JavaScript; check export and commercial terms before shipping. | [Game creator](https://rosebud.ai/ai-game-creator) |
| [Makko AI](https://www.makko.ai/) | Playable 2D browser games built from prompts and a connected character/art workflow. | Publish a shareable browser game; use the same studio to generate and animate art. | [Product](https://www.makko.ai/) |
| [PocketByte](https://pocketbyte.io/) | Prompt-generated, playable browser games. | Publish, share, and remix games through its creator community. | [Product](https://pocketbyte.io/) |
| [Wanaka](https://wanaka.app/) | AI-assisted 3D games and worlds from a description. | Edit, test, and publish a browser-playable world. | [Product](https://wanaka.app/) |

## AI-assisted game engines

| Tool | AI authoring mode | Output and limits | Primary evidence |
| --- | --- | --- | --- |
| [Summer Engine](https://www.summerengine.com/) | Generate scenes, scripts, input, and game mechanics through conversation inside a Godot-compatible engine. | Run and edit a local project; export a build. | [Product](https://www.summerengine.com/) · [workflow](https://www.summerengine.com/blog/creating-games-using-ai) |
| [GDevelop AI Agent](https://gdevelop.io/) | Ask the agent to create or modify objects, events, and behaviors in an existing 2D/3D project. | Export through GDevelop. Build features iteratively; do not present the agent as a reliable one-click whole-game generator. | [Agent guide](https://gdevelop.io/blog/make-games-with-ai-agent-gdevelop-automated-prompt) |
| [Buildbox 4](https://www.buildbox.com/) | Prompt for assets, scenes, level edits, mechanics, and nodes inside a visual game editor. | Use the desktop editor to finish and export a game; distinguish assisted authoring from one-prompt completion. | [Buildbox 4 announcement](https://www.buildbox.com/buildbox-4-is-now-available-make-games-with-ai/) · [mechanics guide](https://www.buildbox.com/getting-started-with-buildbox-4-creating-game-mechanics-and-nodes-using-ai/) |

## AI-game discovery and remix

| Tool | What it offers | Output and limits | Primary evidence |
| --- | --- | --- | --- |
| [OmGithub](https://omgithub.com/) | Discover and play open-source games; catalog pages offer a Remix action. | Open hosted builds or original links and review GitHub source. Treat native export as unverified; do not classify OmGithub as a game engine. | [OmGithub](https://omgithub.com/) · [Remix example](https://omgithub.com/codewithdivyasree/neon-drift) · [publishing guide](https://github.com/AgentsLoop/omsite/blob/main/wiki/omgithub.md) |

## Limited-access or unverified availability

| Tool | Claim | Access caveat | Primary evidence |
| --- | --- | --- | --- |
| [Gamly](https://gamly.app/create) | Advertises prompt-generated games, source access, and web, mobile, and desktop export. | The creator page currently requests a waitlist signup; treat the advertised creation and export features as unverified until access is available. | [Creator page](https://gamly.app/create) |
| [Exists](https://exists.ai/) | Generate multiplayer game worlds and gameplay from text. | Treat availability and output quality as unverified; the product page describes a future-facing creation platform. | [Product](https://exists.ai/) |
| [SpawnForge](https://www.spawnforge.ai/) | Author 2D/3D games with an AI-driven browser engine. | Mark as private pre-launch. Do not claim its advertised one-prompt publishing workflow is publicly usable yet. | [Pre-launch notice](https://www.spawnforge.ai/) · [source repository](https://github.com/Tristan578/project-forge) |

## Apply the gate

- Require a primary product page or repository that describes AI-assisted creation of a **playable game**, not just art, sprites, ideas, or a design document.
- Separate prompt-to-playable platforms from AI assistance inside a conventional editor.
- Label pre-launch and unclear-access products explicitly.
- Treat every capability above as a vendor or project claim, not an independent build or playtest. Recheck availability, exports, pricing, and licensing before recommending a tool for production.
- Keep [Ludo.ai](https://ludo.ai/docs) out of the playable-game generator table: its current FAQ says it does not create playable games or prototypes, despite older marketing for a Playable Generator.

Check each vendor's access, pricing, licensing, and export limits before recommending it for production. Do not present advertised capability as an independent playtest. Checked the linked primary pages on **2026-09-26**; did not sign in, generate a game, or verify export output.
