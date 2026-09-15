# Game Rankings

> Generate these reports with `node scripts/generate-rankings.mjs --as-of=YYYY-MM-DD`.

## Current reports

- [Top games this week](this-week.md) — **10** ranked rows.
- [Top games this month](this-month.md) — **10** ranked rows.
- [Date audit data](date-audit.json) — normalized date fields for every independent game unit.

## Daily rankings

| Date | Ranked rows | Counted units | Report |
| --- | ---: | ---: | --- |
| 2026-09-09 | 10 | 10 | [Open report](daily/2026-09-09.md) |
| 2026-09-10 | 10 | 10 | [Open report](daily/2026-09-10.md) |
| 2026-09-11 | 8 | 8 | [Open report](daily/2026-09-11.md) |
| 2026-09-12 | 0 | 0 | [Open report](daily/2026-09-12.md) |
| 2026-09-13 | 0 | 0 | [Open report](daily/2026-09-13.md) |
| 2026-09-14 | 0 | 0 | [Open report](daily/2026-09-14.md) |
| 2026-09-15 | 0 | 0 | [Open report](daily/2026-09-15.md) |

## Date coverage

| Date signal | Records | Game units | Meaning |
| --- | ---: | ---: | --- |
| Explicit publication date | 139 | 272 | `published_on` |
| Publication or qualifying evidence date | 143 | 276 | `published_on`, `recent_game_evidence_on`, or `fresh_activity_date` |
| Date unknown for ranking | 367 | 465 | Exclude from date rankings |
| Repository creation metadata | 254 | 390 | Audit context only; not publication |

## Date policy

- Treat `published_on` as the preferred publication date.
- Use recent gameplay evidence or fresh repository activity only when no publication date exists, and label the basis in the report.
- Keep repository creation and `verified_on` dates separate from publication.
- Show unknown dates instead of guessing.
- Regenerate all reports after changing `games.json`.

As of: **2026-09-15**
