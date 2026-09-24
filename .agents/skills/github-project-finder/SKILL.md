---
name: github-project-finder
description: Find and verify GitHub projects through reverse-link code search, awesome-list expansion, shared topics, and creator sources. Use for project discovery, similar repositories, and evidence-backed collections with requested counts.
---

# Find GitHub projects

Turn verified projects into new search seeds. Traverse project links, recommending lists, shared topics, and creator sources. Preserve the user's required project type, technology, development method, time window, and output format.

## Establish the search

- Extract required criteria and distinguish them from preferences. Treat a requested count as a search target; count only candidates that pass the criteria.
- Reuse existing seeds and saved research before searching again. Choose a few strong seeds from different relevant communities when available.
- Expand model aliases as candidate query forms. For Astra projects, consider `Astra`, `GPT-6 Astra`, `GPT6 Astra`, `GPT-6`, and `GPT6`, but do not run every form blindly. Sample each promising form and continue only when it produces distinct repository IDs or evidence.
- Use `gh` for repository metadata, code search, and source inspection. Read [the query guide](references/search.md) when composing searches. Use available web search for Reddit, X, blogs, and other creator sources.
- Check tool availability and authentication without displaying credentials. Record inaccessible sources and continue through accessible sources.
- Smoke-test each new code-search pattern against a known matching repository before broadening it. Fix the query or record an indexing limitation when the known match is absent.

## Avoid duplicate search work

- Load the existing query log, verified repository IDs, rejected repository IDs, visited lists, topics, and creators before issuing a search.
- Give each search a stable query key made from the source family, normalized terms, filters, sort order, date partition, and page. Do not repeat a completed query key unless the source index or requested time window changed.
- Start alias and query variants with a small sample. Normalize results to canonical numeric repository IDs, then compare the sample with earlier result sets.
- Skip a full query when its sample has at least 90% overlap with a completed query and adds no useful unseen candidate or new evidence path. Record the alias as equivalent for the current search window.
- Expand a sample only when it adds meaningful novelty. Prefer three unseen repository IDs as a normal expansion threshold; allow one unusually strong candidate in a sparse domain.
- Deduplicate results before reading repository files. Inspect each canonical repository once, then attach every discovery source and matching query to the same candidate record.
- Keep rejected repository IDs in the exclusion set with their reasons. Reconsider one only when its source, attribution, or repository state has materially changed.
- Change one useful dimension when a pass has low novelty: source family, incoming-link seed, topic, creator, language, date range, file path, or exact build phrase. Do not make cosmetic wording changes that preserve the same result ranking.

## Expand the discovery network

1. Inspect an authoritative showcase or project directory for the requested method or ecosystem when one exists. Extract game names, creator handles, demo URLs, and repository links. Treat the directory as discovery or method evidence, then trace every item to a repository.
2. Convert a GitHub Pages URL shaped as `OWNER.github.io/REPO/` into the candidate `OWNER/REPO`, then verify it through GitHub metadata and source inspection. Do not treat the URL shape as proof. For custom domains, inspect page links and search the exact title with the creator name.
3. Search incoming links to each seed with its full GitHub URL and `owner/repo` form. Inspect matching files to distinguish recommendations from incidental mentions.
4. Extract project links from the relevant sections of useful awesome lists, comparison pages, and curated READMEs. Resolve relative links against their source file. Follow redirects before deduplication.
5. Search incoming links to newly verified projects. Prioritize lists that recommend several relevant seeds. Find related lists through shared projects and explicit related-list links.
6. Read seed repository topics. Treat user-described tags as GitHub topics for discovery; use release tags only when the request concerns versions.
7. Search individual distinctive topics and combinations of two or three relevant topics. Expand aliases such as `threejs` and `three-js` as separate queries. Inspect results before treating an alias as equivalent.
8. Collect topics from verified matches. Rank related topics by recurrence among those matches and measured relevant yield. Discount broad tags such as `javascript`; require supporting evidence before following a broad or unrelated topic.
9. Close the topic-to-list cycle: search incoming links to projects found through topics, inspect the lists that contain them, and extract new candidates. Search list repositories with the topic plus `awesome` in their names, descriptions, or READMEs.
10. Search distinctive build phrases, creator statements, project prompts, and other repositories from relevant authors. Trace social discoveries to their exact GitHub repositories.

## Choose the next pass

- Keep a frontier of unvisited projects, lists, topics, authors, and queries. Record which source and query produced each candidate.
- Rank sources by verified relevant yield, unseen repository count, result-set overlap, and added coverage. Use newly inspected candidates as the yield denominator; report small samples.
- Alternate high-yield expansion with a few different topics or communities. Avoid allowing one seed or generic topic to dominate the collection.
- Run every web, GitHub, code, repository, and topic search sequentially. Complete, inspect, and record one search before starting the next. You may batch non-search, read-only repository metadata checks only after the candidate set is fixed.
- Stop a query family after two consecutive passes produce no verified project and at least 90% overlap with prior results. Resume it only with a new partition, a changed source index, or new evidence.
- Repeat until the verified target is met or useful accessible searches stop yielding new matches. On repeated empty passes, change the query family or source before stopping. Report the remaining gap and search limits; never fill a quota with weaker evidence.

## Verify each candidate

- Resolve the repository through GitHub metadata. Store the canonical URL and numeric repository ID; use the ID to detect renames and deduplicate aliases.
- Treat an unchanged fork as the same project as its canonical source. Keep a fork as a separate project only when it contains material game changes and independent evidence for the requested method.
- Inspect the README, source tree, entry point, and relevant implementation. Confirm that the repository contains the requested product. For games, inspect input, rules or objectives, and gameplay state; distinguish playable prototypes from screenshots and visual scenes.
- Confirm technology through dependencies and runtime imports. Use topics and descriptions as discovery clues, not proof.
- Confirm claimed development methods through creator statements, project-specific build logs, or implementation evidence. Treat a copied prompt or installed skill as insufficient proof that the method ran. Label method evidence as confirmed, creator-reported, inferred, or unknown.
- Accept explicit creator or repository statements that name `GPT-6` or `GPT6` as Astra attribution. Preserve the source spelling in the evidence note and normalize the model-family value to `GPT-6 Astra`. Do not treat unrelated numeric version references or game titles containing `6` as model evidence.
- Verify requested dates against the relevant event. Distinguish creation, code updates, releases, and announcement dates; do not equate recent activity with a newly made project.
- Separate repository existence, source verification, method attribution, and runtime testing. Open and interact with a demo when useful and available. Claim a successful playtest only after performing one.
- Preserve evidence URLs and short factual notes for each required claim. Record inaccessible demos or incomplete attribution without converting them into passes.

## Save and deliver

- Follow the project's existing schema and instructions. For game searches, save verified GitHub game links in `games.json` immediately after verification; otherwise use the existing collection or `projects.json`.
- Keep one record per canonical repository. Preserve existing fields and update matching records. Store name, canonical URL, repository ID, technology, evidence URLs, verification statuses, check date, and discovery sources.
- Keep pending candidates and rejection reasons in `research/candidates.json`. Keep query keys, result counts, unseen counts, overlap ratios, limits, source yields, visited nodes, equivalent aliases, and the remaining frontier in `research/search-log.json` for sustained searches. Avoid creating these files for a small answer unless persistence is useful or requested.
- Validate JSON and uniqueness after each batch. Keep catalog counts separate from counts of verified matching projects.
- Return the requested links and count with the evidence level and material gaps. Keep direct demo links alongside repository links when requested.
