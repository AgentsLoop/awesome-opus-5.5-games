#!/usr/bin/env python3
"""Build thumbnails for the highest manually rated game screenshots."""

import json
from io import BytesIO
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit
from urllib.request import Request, urlopen

from PIL import Image, ImageOps, UnidentifiedImageError


ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "assets" / "screenshot-gallery"
LIMIT = 30
SIZE = (480, 270)
def downloadable_url(source):
    parts = urlsplit(source)
    if parts.netloc == "github.com" and "/blob/" in parts.path:
        return urlunsplit((parts.scheme, parts.netloc, parts.path, "raw=1", ""))
    return source


def thumbnail(source):
    request = Request(downloadable_url(source), headers={"User-Agent": "awesome-opus-5.5-games-gallery"})
    with urlopen(request, timeout=25) as response:
        if not response.headers.get("Content-Type", "").lower().startswith("image/"):
            raise ValueError("URL did not return an image")
        data = response.read(15_000_001)
    if len(data) > 15_000_000:
        raise ValueError("image exceeds 15 MB")
    with Image.open(BytesIO(data)) as image:
        if image.width < 320 or image.height < 180:
            raise ValueError(f"image is too small ({image.width}x{image.height})")
        image.seek(0)
        image = ImageOps.exif_transpose(image).convert("RGBA")
        image.thumbnail(SIZE, Image.Resampling.LANCZOS)
        canvas = Image.new("RGB", SIZE, "#111827")
        canvas.paste(image, ((SIZE[0] - image.width) // 2, (SIZE[1] - image.height) // 2), image)
        return canvas


records = json.loads((ROOT / "games.json").read_text())
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
            if source and source in screenshots and isinstance(score, (int, float)):
                ranked.append((name, record["github_url"], score, source))
    else:
        source = record.get("screenshot_rating_evidence_url")
        score = record.get("screenshot_rating_10")
        if source and source in record.get("screenshot_urls", []) and isinstance(score, (int, float)):
            ranked.append((record["name"], record["github_url"], score, source))
ranked.sort(key=lambda item: (-item[2], item[0].casefold()))
OUTPUT.mkdir(parents=True, exist_ok=True)
gallery = []
for name, github_url, score, source in ranked:
    try:
        image = thumbnail(source)
        filename = f"{len(gallery) + 1:02d}.webp"
        image.save(OUTPUT / filename, "WEBP", quality=82, method=6)
        gallery.append({
            "name": name,
            "github_url": github_url,
            "screenshot_rating_10": score,
            "source_url": source,
            "thumbnail": f"assets/screenshot-gallery/{filename}",
        })
        print(f"{len(gallery):02d}. {name} -> {filename}")
    except (OSError, ValueError, UnidentifiedImageError) as error:
        print(f"Skip {name}: {error}")
    if len(gallery) == LIMIT:
        break

if len(gallery) < LIMIT:
    raise SystemExit(f"Only {len(gallery)} usable game screenshots; expected {LIMIT}")
for old in OUTPUT.glob("*.webp"):
    if old.name not in {Path(item["thumbnail"]).name for item in gallery}:
        old.unlink()
(OUTPUT / "gallery.json").write_text(json.dumps(gallery, indent=2, ensure_ascii=False) + "\n")
