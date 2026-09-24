# Tic-Tac-Toe MCP Game

> Verified game note.

![Tic-Tac-Toe MCP Game screenshot](https://raw.githubusercontent.com/worgho2/tic-tac-toe-mcp-game/main/docs/media/game.png)

## At a glance

- **Score:** 8.6/10
- **Screenshot rating:** 5.9/10 ([rated image](https://github.com/worgho2/tic-tac-toe-mcp-game/blob/main/docs/media/game.png)). Treat this as visual review only; do not infer a playtest.
- **Model:** Claude Fable 5.1
- **Technology:** TypeScript, React, Vite, MCP Apps, Docker, Native web UI
- **Estimated FP32 operations/s at 60 FPS:** 90,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Source-complete networked game with server-enforced rules, matchmaking, invites, rematches, a polished widget and a public MCP endpoint, supported by screenshots and exact recent model trailers.
- **Verified:** 2026-09-15
- **Repository:** [https://github.com/worgho2/tic-tac-toe-mcp-game](https://github.com/worgho2/tic-tac-toe-mcp-game)
- **Evidence:** [direct model evidence](https://github.com/worgho2/tic-tac-toe-mcp-game/commit/0f29b0b7f5bb68b17422bcdd3ea7130497f9312d)
- **Live demo:** [open demo](https://tic-tac-toe-mcp-game.baziewi.cz/mcp)

## Screenshots

Use the source screenshot links below. The list records these assets from the game repository or a related source.

- [screenshot 1](https://github.com/worgho2/tic-tac-toe-mcp-game/blob/main/docs/media/game.png)

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The README documents a real two-player tic-tac-toe game rendered inside Claude, ChatGPT or VS Code through MCP Apps. The public source contains server-side board state and legal move handling, a lobby, invitations, turn-specific moves, win/draw outcomes, rematches and a React game screen with clickable cells. The repository has exact Claude Fable 5.1 trailers on current implementation commits, including the 2026-09-14 game model and widget work. Count one fresh game unit; the public MCP endpoint and screenshot are recorded, but no browser playtest was performed in this turn.

### Gameplay source

- [https://github.com/worgho2/tic-tac-toe-mcp-game/blob/main/README.md](https://github.com/worgho2/tic-tac-toe-mcp-game/blob/main/README.md)
- [https://github.com/worgho2/tic-tac-toe-mcp-game/commit/0f29b0b7f5bb68b17422bcdd3ea7130497f9312d](https://github.com/worgho2/tic-tac-toe-mcp-game/commit/0f29b0b7f5bb68b17422bcdd3ea7130497f9312d)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 1
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for Claude Fable 5.1 dated 2026-09-13..2026-09-15; https://github.com/worgho2/tic-tac-toe-mcp-game

[Back to the awesome list](../../README.md)
