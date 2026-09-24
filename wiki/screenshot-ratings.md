# Screenshot ratings

- Inspect every reachable game image before assigning a visual score.
- Score visual polish, composition, scene detail, and gameplay readability on a 0–10 scale. Reward coherent stylized art as well as realism.
- Discount menus, title cards, concept art, promotional banners, blank frames, and editor captures. Do not treat a screenshot score as a playtest or a source-quality score.
- Record `screenshot_rating_10`, `screenshot_rating_evidence_url`, and `screenshot_rating_on` in `games.json`. Assign multi-game screenshots to the correct contained game and score that unit separately.
- Leave unroutable images and images without a verified game source out of the ranking. Remove dead or misclassified screenshot links.
- Rebuild the gallery, game notes, and README after changing screenshot fields. Run `node scripts/validate-games.mjs`.
