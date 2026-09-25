"""Fetch, verify, and cache source screenshots without changing the source dataset."""

import hashlib
import json
import time
from datetime import datetime, timedelta, timezone
from io import BytesIO
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import quote, urlsplit, urlunsplit
from urllib.request import Request, urlopen

from PIL import Image, ImageOps, UnidentifiedImageError


ROOT = Path(__file__).resolve().parent.parent
CACHE = ROOT / "work" / "screenshot-cache"
MAX_BYTES = 15_000_000


def source_url(url):
    parts = urlsplit(url)
    if parts.scheme != "https" or parts.netloc not in {"github.com", "raw.githubusercontent.com"}:
        raise ValueError(f"Screenshot source must be hosted on GitHub: {url}")
    path = quote(parts.path, safe="/%")
    query = "raw=1" if parts.netloc == "github.com" and "/blob/" in path else parts.query
    return urlunsplit((parts.scheme, parts.netloc, path, query, ""))


def cache_paths(url):
    key = hashlib.sha256(url.encode("utf-8")).hexdigest()
    return CACHE / f"{key}.webp", CACHE / f"{key}.json"


def dhash(image):
    gray = ImageOps.grayscale(image).resize((9, 8), Image.Resampling.LANCZOS)
    pixels = list(gray.getdata())
    bits = 0
    for row in range(8):
        for column in range(8):
            bits = (bits << 1) | (pixels[row * 9 + column] > pixels[row * 9 + column + 1])
    return f"{bits:016x}"


def inspect_local_image(path):
    with Image.open(path) as source:
        source.seek(0)
        image = ImageOps.exif_transpose(source).convert("RGB")
        return {"width": image.width, "height": image.height, "dhash": dhash(image)}


def cached_image(url, *, refresh=False, offline=False):
    image_path, meta_path = cache_paths(url)
    if not refresh and image_path.exists() and meta_path.exists():
        meta = json.loads(meta_path.read_text())
        if meta.get("url") == url and meta.get("sha256") and meta.get("dhash"):
            checked = datetime.fromisoformat(meta["checked_at"])
            if offline or datetime.now(timezone.utc) - checked < timedelta(days=7):
                return image_path, meta
    if offline:
        raise FileNotFoundError(f"Screenshot is not cached: {url}")
    request = Request(source_url(url), headers={"User-Agent": "awesome-opus-screenshot-audit"})
    for attempt in range(3):
        try:
            with urlopen(request, timeout=20) as response:
                content_type = response.headers.get("Content-Type", "").split(";", 1)[0].lower()
                if not (content_type.startswith("image/") or content_type == "application/octet-stream"):
                    raise ValueError(f"Wrong media type {content_type or 'missing'}: {url}")
                data = response.read(MAX_BYTES + 1)
            break
        except HTTPError as error:
            if error.code in {400, 401, 403, 404, 410} or attempt == 2:
                raise
            time.sleep(attempt + 1)
        except OSError:
            if attempt == 2:
                raise
            time.sleep(attempt + 1)
    if len(data) > MAX_BYTES:
        raise ValueError(f"Image exceeds {MAX_BYTES} bytes: {url}")
    try:
        with Image.open(BytesIO(data)) as source:
            source.seek(0)
            image = ImageOps.exif_transpose(source).convert("RGB")
    except (OSError, UnidentifiedImageError) as error:
        raise ValueError(f"Invalid image: {url}: {error}") from error
    if image.width < 64 or image.height < 64:
        raise ValueError(f"Image too small ({image.width}x{image.height}): {url}")
    meta = {
        "url": url,
        "content_type": content_type,
        "bytes": len(data),
        "width": image.width,
        "height": image.height,
        "sha256": hashlib.sha256(data).hexdigest(),
        "dhash": dhash(image),
        "checked_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
    }
    CACHE.mkdir(parents=True, exist_ok=True)
    image.thumbnail((1280, 1280), Image.Resampling.LANCZOS)
    tmp_image = image_path.with_suffix(".webp.tmp")
    tmp_meta = meta_path.with_suffix(".json.tmp")
    image.save(tmp_image, "WEBP", quality=88, method=6)
    tmp_meta.write_text(json.dumps(meta, ensure_ascii=False, indent=2) + "\n")
    tmp_image.replace(image_path)
    tmp_meta.replace(meta_path)
    return image_path, meta
