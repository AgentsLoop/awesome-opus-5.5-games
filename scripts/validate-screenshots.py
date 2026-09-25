#!/usr/bin/env python3
"""Validate per-image reviews and optionally recheck every source image online."""

import argparse
import json
import math
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from screenshot_media import ROOT, cached_image


KINDS = {"gameplay", "interface", "title_or_menu", "promotional", "asset"}


def validate(records, reviews, gallery):
    errors = []
    expected = {}
    selected_urls = set()
    for record in records:
        for url in record.get("screenshot_urls", []):
            if url in expected:
                errors.append(f"Duplicate screenshot URL across repositories: {url}")
            expected[url] = record
        if record.get("screenshot_rating_evidence_url"):
            selected_urls.add(record["screenshot_rating_evidence_url"])
        for index, name in enumerate(record.get("contained_games", [])):
            estimate = (record.get("contained_game_estimates") or [{} for _ in record["contained_games"]])[index]
            if estimate.get("screenshot_rating_evidence_url"):
                selected_urls.add(estimate["screenshot_rating_evidence_url"])
    by_url = {}
    for review in reviews:
        url = review.get("url")
        if url in by_url:
            errors.append(f"Duplicate image review: {url}")
        by_url[url] = review
        record = expected.get(url)
        if not record:
            errors.append(f"Unlisted image review: {url}")
            continue
        if review.get("repository_url") != record["github_url"]:
            errors.append(f"Wrong image owner: {url}")
        score = review.get("score_10")
        if not isinstance(score, (int, float)) or not math.isfinite(score) or not 0 <= score <= 10:
            errors.append(f"Invalid image score: {url}")
        if review.get("image_kind") not in KINDS:
            errors.append(f"Invalid image kind: {url}")
        expected_method = "manual_visual_review" if url in selected_urls else "relative_frame_adjustment"
        if review.get("rating_method") != expected_method:
            errors.append(f"Incorrect rating method for selected status: {url}")
        if len(str(review.get("reason", "")).strip()) < 20:
            errors.append(f"Missing review reason: {url}")
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", review.get("reviewed_on", "")):
            errors.append(f"Invalid review date: {url}")
    for url in expected.keys() - by_url.keys():
        errors.append(f"Missing image review: {url}")
    for record in records:
        if not record.get("screenshot_urls"):
            continue
        unit_mapping = record.get("contained_game_screenshots")
        if not unit_mapping:
            selected = record.get("screenshot_rating_evidence_url")
            if selected in by_url and by_url[selected]["score_10"] != record.get("screenshot_rating_10"):
                errors.append(f"Game score differs from selected image: {record['name']}")
            scores = [by_url[url]["score_10"] for url in record["screenshot_urls"] if url in by_url]
            if selected in by_url and scores and by_url[selected]["score_10"] < max(scores):
                errors.append(f"Selected image is not highest rated: {record['name']}")
        else:
            for index, name in enumerate(record.get("contained_games", [])):
                urls = unit_mapping.get(name, [])
                estimate = (record.get("contained_game_estimates") or [{} for _ in record["contained_games"]])[index]
                selected = estimate.get("screenshot_rating_evidence_url")
                if not urls:
                    continue
                if any(url not in record["screenshot_urls"] for url in urls):
                    errors.append(f"Contained screenshot is absent from repository list: {name}")
                if selected in by_url and by_url[selected]["score_10"] != estimate.get("screenshot_rating_10"):
                    errors.append(f"Unit score differs from selected image: {name}")
                scores = [by_url[url]["score_10"] for url in urls if url in by_url]
                if selected in by_url and scores and by_url[selected]["score_10"] < max(scores):
                    errors.append(f"Selected unit image is not highest rated: {name}")
    for item in gallery:
        url = item.get("source_url")
        if url not in by_url:
            errors.append(f"Gallery uses unreviewed image: {url}")
        elif item.get("screenshot_rating_10") != by_url[url]["score_10"]:
            errors.append(f"Gallery score differs from image review: {url}")
    if any(gallery[i]["screenshot_rating_10"] < gallery[i + 1]["screenshot_rating_10"] for i in range(len(gallery) - 1)):
        errors.append("Gallery is not sorted by screenshot rating")
    return errors, expected


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--online", action="store_true", help="Refetch and inspect every linked image")
    parser.add_argument("--workers", type=int, default=12)
    args = parser.parse_args()
    records = json.loads((ROOT / "games.json").read_text())
    document = json.loads((ROOT / "research" / "screenshot-reviews.json").read_text())
    if document.get("schema_version") != 1:
        raise SystemExit("Unsupported screenshot review schema")
    gallery = json.loads((ROOT / "assets" / "screenshot-gallery" / "gallery.json").read_text())
    errors, expected = validate(records, document["reviews"], gallery)
    if args.online:
        with ThreadPoolExecutor(max_workers=args.workers) as executor:
            futures = {executor.submit(cached_image, url, refresh=True): url for url in expected}
            for future in as_completed(futures):
                try:
                    future.result()
                except Exception as error:
                    errors.append(f"Image fetch failed: {futures[future]}: {error}")
    if errors:
        for error in errors:
            print(f"- {error}")
        raise SystemExit(f"Screenshot validation failed with {len(errors)} errors")
    print(f"Validated {len(expected)} reviewed images across {sum(bool(r.get('screenshot_urls')) for r in records)} repositories{' online' if args.online else ''}.")


if __name__ == "__main__":
    main()
