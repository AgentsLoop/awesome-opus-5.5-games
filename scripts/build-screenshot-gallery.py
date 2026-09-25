#!/usr/bin/env python3
"""Build thumbnails for the highest manually rated game screenshots."""

import json
import argparse
import hashlib
from io import BytesIO
from pathlib import Path

from PIL import Image

from screenshot_media import cached_image


ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "assets" / "screenshot-gallery"
LIMIT = 30
SIZE = (480, 270)


def thumbnail(source, *, refresh=False, offline=False):
    image_path, meta = cached_image(source, refresh=refresh, offline=offline)
    if meta["width"] < 320 or meta["height"] < 180:
        raise ValueError(f"image is too small ({meta['width']}x{meta['height']})")
    with Image.open(image_path) as cached:
        image = cached.convert("RGBA")
        image.thumbnail(SIZE, Image.Resampling.LANCZOS)
        canvas = Image.new("RGB", SIZE, "#111827")
        canvas.paste(image, ((SIZE[0] - image.width) // 2, (SIZE[1] - image.height) // 2), image)
        return canvas


parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--refresh", action="store_true", help="Refetch source images even when cached")
parser.add_argument("--offline", action="store_true", help="Use only already cached images")
args = parser.parse_args()
records = json.loads((ROOT / "games.json").read_text())
reviews = {item["url"]: item for item in json.loads((ROOT / "research" / "screenshot-reviews.json").read_text())["reviews"]}
ranked = []
for record in records:
    if not record.get("is_independent_game") or record.get("counted_game_units", 0) < 1:
        continue
    if record.get("quality_estimate_10", 0) < 7:
        continue
    names = record.get("contained_games", [])
    estimates = record.get("contained_game_estimates", [])
    if record.get("counted_game_units", 1) > 1 and len(names) == record["counted_game_units"]:
        for index, name in enumerate(names):
            estimate = estimates[index] if index < len(estimates) else {}
            source = estimate.get("screenshot_rating_evidence_url")
            score = estimate.get("screenshot_rating_10")
            screenshots = record.get("contained_game_screenshots", {}).get(name, [])
            if source and source in screenshots and source in reviews and score == reviews[source]["score_10"]:
                ranked.append((name, record["github_url"], score, source))
    else:
        source = record.get("screenshot_rating_evidence_url")
        score = record.get("screenshot_rating_10")
        if source and source in record.get("screenshot_urls", []) and source in reviews and score == reviews[source]["score_10"]:
            ranked.append((record["name"], record["github_url"], score, source))
ranked.sort(key=lambda item: (-item[2], item[0].casefold()))
OUTPUT.mkdir(parents=True, exist_ok=True)
gallery = []
for name, github_url, score, source in ranked:
    try:
        image = thumbnail(source, refresh=args.refresh, offline=args.offline)
        encoded = BytesIO()
        image.save(encoded, "WEBP", quality=82, method=6)
        data = encoded.getvalue()
        filename = f"{hashlib.sha256(data).hexdigest()[:20]}.webp"
        (OUTPUT / filename).write_bytes(data)
        gallery.append({
            "name": name,
            "github_url": github_url,
            "screenshot_rating_10": score,
            "source_url": source,
            "thumbnail": f"assets/screenshot-gallery/{filename}",
        })
        print(f"{len(gallery):02d}. {name} -> {filename}")
    except (OSError, ValueError) as error:
        print(f"Skip {name}: {error}")
    if len(gallery) == LIMIT:
        break

if len(gallery) < LIMIT:
    raise SystemExit(f"Only {len(gallery)} usable game screenshots; expected {LIMIT}")
for old in OUTPUT.glob("*.webp"):
    if old.name not in {Path(item["thumbnail"]).name for item in gallery}:
        old.unlink()
(OUTPUT / "gallery.json").write_text(json.dumps(gallery, indent=2, ensure_ascii=False) + "\n")
