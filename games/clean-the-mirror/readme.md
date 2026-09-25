# Clean the Mirror

> Verified game note.

![Clean the Mirror screenshot placeholder](clean-the-mirror-placeholder.svg)

## At a glance

- **Score:** 8.2/10
- **Model:** Claude Fable 5
- **Technology:** HTML, CSS, JavaScript, DOM, Web Audio, Browser
- **Estimated FP32 operations/s at 60 FPS:** 180,000,000 (low confidence; static estimate, not measured).
- **Rating basis:** Four distinct playable loops with clear completion rules, progress tracking, localized text, feedback effects, source-level evidence and a reachable browser deployment; the surrounding birthday page is excluded from the count.
- **Verified:** 2026-09-10
- **Repository:** [https://github.com/vitalirasin-web/valeriabirthday](https://github.com/vitalirasin-web/valeriabirthday)
- **Evidence:** [direct model evidence](https://github.com/vitalirasin-web/valeriabirthday/commit/ff60ed966ba2b206ece5cc68f74850b75513599d)
- **Live demo:** [open demo](https://vitalirasin-web.github.io/valeriabirthday/)

## Screenshots

No screenshot source is recorded yet. Keep the placeholder until a repository, awesome list, or creator source provides an image.

## Model attribution

Open the evidence link above. Evidence grade: **direct model evidence**.

## Source description

The repository is a family birthday page that embeds four real mini-games. index.html has four separate game sections; games.js implements the loops: six coffee-button clicks fill a cup and finish the game, seven sticker buttons must be peeled, a moving dog must be caught three times, and six animated chore balloons must be popped. Each loop has input handlers, progress state, completion state and feedback effects. The GitHub Pages URL returned HTTP 200 during verification. The cited UI/game-text commit contains an exact Co-Authored-By: Claude Fable 5 trailer. Count the four independently playable mini-games; exclude the family page, gallery, audio and trivia quiz.

### Gameplay source

- [https://vitalirasin-web.github.io/valeriabirthday/](https://vitalirasin-web.github.io/valeriabirthday/)
- [https://github.com/vitalirasin-web/valeriabirthday/commit/ff60ed966ba2b206ece5cc68f74850b75513599d](https://github.com/vitalirasin-web/valeriabirthday/commit/ff60ed966ba2b206ece5cc68f74850b75513599d)

## Verification notes

- **Status:** verified_source
- **Counted units in repository:** 4
- **Units covered by this note:** 1
- **Discovery:** GitHub commit search for Co-Authored-By Claude Fable game; https://github.com/vitalirasin-web/valeriabirthday

[Back to the awesome list](../../README.md)
