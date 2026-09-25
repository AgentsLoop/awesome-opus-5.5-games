# Unfit for Print

> Top-list entry: **this month** (#1).

![Unfit for Print screenshot](https://raw.githubusercontent.com/PPO-GG/unfit-for-print/main/.github/assets/main_menu.webp)

## At a glance

- **Score:** 9.7/10
- **Screenshot rating:** 7.8/10 ([manually reviewed image](https://github.com/PPO-GG/unfit-for-print/blob/main/.github/assets/ingame.webp)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Opus 5
- **Technology:** TypeScript, Nuxt 4, Vue 3, Yjs CRDT, WebSocket, Browser/PWA
- **Estimated FP32 operations/s at 60 FPS:** 520,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Complete multiplayer party-game loop with authoritative rule source, bots, lobbies, spectators, card packs, host controls, tests, screenshots, live demo and exact Opus attribution on gameplay state work.
- **Verified:** 2026-09-12
- **Repository:** [https://github.com/PPO-GG/unfit-for-print](https://github.com/PPO-GG/unfit-for-print)
- **Evidence:** [direct model evidence](https://github.com/PPO-GG/unfit-for-print/commit/3e70231203788c184f9453381894acb234b0bdfa)
- **Live demo:** [open demo](https://unfit.cards)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/PPO-GG/unfit-for-print/blob/main/.github/assets/main_menu.webp) — 📸 6.6/10 · relative frame adjustment · Shows a title or menu; discount the missing active-play view. The frame is readable but has modest detail.
- [screenshot 2](https://github.com/PPO-GG/unfit-for-print/blob/main/.github/assets/ingame.webp) — 📸 7.8/10 · manual visual review · Use this frame for the game-level score. Shows a playable scene; assess environmental detail, composition, and action readability. The frame is readable but has modest detail.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README identifies Unfit for Print as a browser party game: players create or join a lobby, take turns judging, submit white cards to black-card prompts, score rounds and race to a target. It documents real-time synchronization, bots, card packs, spectators, chat, host controls, a PWA and tests. The game rules live in useYjsGameEngine.ts and the source tree contains the game board, player hand, score, winner and game-over components. The live unfit.cards URL returned HTTP 200. The cited game-state commit contains an exact Co-Authored-By: Claude Opus 5 trailer. The repository README provides lobby and in-game screenshots, which are stored as evidence links.

### Gameplay source

- [https://github.com/PPO-GG/unfit-for-print#readme](https://github.com/PPO-GG/unfit-for-print#readme)
- [https://github.com/PPO-GG/unfit-for-print/commit/3e70231203788c184f9453381894acb234b0bdfa](https://github.com/PPO-GG/unfit-for-print/commit/3e70231203788c184f9453381894acb234b0bdfa)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for game Co-Authored-By Claude Opus, 2026-09-10..2026-09-12; https://github.com/PPO-GG/unfit-for-print

[Back to the awesome list](../../README.md)
