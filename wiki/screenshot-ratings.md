# Screenshot ratings

- Inspect every reachable game image before assigning a visual score. Record each image's score, kind, reason, rating method, and review date in `research/screenshot-reviews.json`.
- Manually review one best frame per game. Mark that frame `manual_visual_review`; mark every other frame `relative_frame_adjustment` and explain the adjustment. Do not describe adjusted sibling scores as independent manual reviews.
- Score visual polish, composition, scene detail, and gameplay readability on a 0–10 scale. Reward coherent stylized art as well as realism.
- Discount menus, title cards, concept art, promotional banners, blank frames, and editor captures. Do not treat a screenshot score as a playtest or a source-quality score.
- Record `screenshot_rating_10`, `screenshot_rating_evidence_url`, and `screenshot_rating_on` in `games.json`. Use the best manually reviewed frame as the game's score. Assign multi-game screenshots to the correct contained game and score that unit separately.
- Leave unroutable images and images without a verified game source out of the ranking. Remove dead or misclassified screenshot links.
- Rebuild the gallery, game notes, and README after changing screenshot fields. Run `node scripts/validate-games.mjs`.
- Run `python3 scripts/validate-screenshots.py` to check review coverage and score consistency. Add `--online` to refetch links and reject missing files, wrong media types, and invalid images.
- Run `python3 scripts/build-screenshot-gallery.py` to reuse verified images cached under ignored `work/screenshot-cache/`. Add `--refresh` to refetch or `--offline` to require a cache hit.
- Run `python3 scripts/match-submitted-screenshot.py /absolute/image/path --fetch-missing` to find likely indexed sources. Verify the repository and original URL before attributing a submitted image. Treat similarity as a candidate, not proof.
