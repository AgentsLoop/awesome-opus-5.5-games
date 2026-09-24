#!/usr/bin/env python3
"""Build one compact screenshot thumbnail per highest-rated eligible game."""

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
RASTER_EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"}
PREFERRED = ("gameplay", "in-game", "ingame", "combat", "race", "driving", "world", "screenshot")
DISFAVORED = ("title", "main-menu", "main_menu", "poster", "og.png")
# These records have only a render, an almost blank frame, or a marketing card,
# not a legible screenshot of the game itself.
EXCLUDED_REPOSITORIES = {
    "https://github.com/nghienvothuat-a11y/GravityBox",
    "https://github.com/thaynes43/haynes-quest",
    "https://github.com/ben-gy/lastlight",
    "https://github.com/moorestech/moorestech",
    "https://github.com/ben-gy/scrapwall",
    "https://github.com/macjoocan/hex-danmaku",
}


def source_priority(url):
    name = urlsplit(url).path.rsplit("/", 1)[-1].lower()
    if "report" in name:
        return 3
    if any(word in name for word in PREFERRED):
        return 0
    if any(word in name for word in DISFAVORED):
        return 2
    return 1


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
ranked = sorted(
    (record for record in records if record.get("is_independent_game")
     and record.get("counted_game_units", 0) > 0
     and record.get("quality_estimate_10", 0) >= 7
     and record.get("screenshot_urls")
     and record["github_url"] not in EXCLUDED_REPOSITORIES),
    key=lambda record: (-record["quality_estimate_10"], record["name"].casefold()),
)
OUTPUT.mkdir(parents=True, exist_ok=True)
gallery = []
for record in ranked:
    candidates = sorted(
        (url for url in record["screenshot_urls"]
         if Path(urlsplit(url).path).suffix.lower() in RASTER_EXTENSIONS),
        key=source_priority,
    )
    for source in candidates:
        try:
            image = thumbnail(source)
            filename = f"{len(gallery) + 1:02d}.webp"
            image.save(OUTPUT / filename, "WEBP", quality=82, method=6)
            gallery.append({
                "name": record["name"],
                "github_url": record["github_url"],
                "rating": record["quality_estimate_10"],
                "source_url": source,
                "thumbnail": f"assets/screenshot-gallery/{filename}",
            })
            print(f"{len(gallery):02d}. {record['name']} -> {filename}")
            break
        except (OSError, ValueError, UnidentifiedImageError) as error:
            print(f"Skip {record['name']}: {error}")
    if len(gallery) == LIMIT:
        break

if len(gallery) < LIMIT:
    raise SystemExit(f"Only {len(gallery)} usable game screenshots; expected {LIMIT}")
for old in OUTPUT.glob("*.webp"):
    if old.name not in {Path(item["thumbnail"]).name for item in gallery}:
        old.unlink()
(OUTPUT / "gallery.json").write_text(json.dumps(gallery, indent=2, ensure_ascii=False) + "\n")
