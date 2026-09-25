#!/usr/bin/env python3
"""Find likely indexed sources for a submitted screenshot; never assert attribution automatically."""

import argparse
import hashlib
import json
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from screenshot_media import ROOT, cached_image, inspect_local_image


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("image", type=Path)
    parser.add_argument("--fetch-missing", action="store_true", help="Download uncached indexed images")
    parser.add_argument("--threshold", type=int, default=8, help="Maximum dHash distance for a probable match")
    parser.add_argument("--limit", type=int, default=5)
    args = parser.parse_args()
    submitted = inspect_local_image(args.image)
    submitted_sha = hashlib.sha256(args.image.read_bytes()).hexdigest()
    reviews = json.loads((ROOT / "research" / "screenshot-reviews.json").read_text())["reviews"]
    metadata = {}
    missing = []
    if args.fetch_missing:
        with ThreadPoolExecutor(max_workers=12) as executor:
            futures = {executor.submit(cached_image, review["url"]): review["url"] for review in reviews}
            for future in as_completed(futures):
                url = futures[future]
                try:
                    _, metadata[url] = future.result()
                except Exception:
                    missing.append(url)
    else:
        for review in reviews:
            url = review["url"]
            try:
                _, metadata[url] = cached_image(url, offline=True)
            except (FileNotFoundError, ValueError):
                missing.append(url)
    candidates = []
    ratio = submitted["width"] / submitted["height"]
    for review in reviews:
        meta = metadata.get(review["url"])
        if not meta:
            continue
        source_ratio = meta["width"] / meta["height"]
        if max(ratio, source_ratio) / min(ratio, source_ratio) > 1.35:
            continue
        exact = meta["sha256"] == submitted_sha
        distance = bin(int(meta["dhash"], 16) ^ int(submitted["dhash"], 16)).count("1")
        candidates.append({
            "repository_url": review["repository_url"],
            "game": review["game"],
            "source_url": review["url"],
            "exact_file_match": exact,
            "dhash_distance": distance,
        })
    candidates.sort(key=lambda item: (not item["exact_file_match"], item["dhash_distance"]))
    best = candidates[0] if candidates else None
    status = "probable_match" if best and (best["exact_file_match"] or best["dhash_distance"] <= args.threshold) else ("incomplete_cache" if missing else "no_match")
    print(json.dumps({
        "status": status,
        "submitted_image": str(args.image.resolve()),
        "indexed_images_searched": len(metadata),
        "indexed_images_unavailable": len(missing),
        "candidates": candidates[:args.limit],
        "note": "Treat similarity as a candidate only. Verify the repository and original image URL before assigning a game.",
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
