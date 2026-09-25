import importlib.util
import io
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from PIL import Image

import screenshot_media


SPEC = importlib.util.spec_from_file_location("validate_screenshots", Path(__file__).with_name("validate-screenshots.py"))
VALIDATOR = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(VALIDATOR)


class FakeResponse:
    def __init__(self, data, content_type="image/png"):
        self.data = data
        self.headers = {"Content-Type": content_type}

    def __enter__(self):
        return self

    def __exit__(self, *_):
        return False

    def read(self, *_):
        return self.data


class ScreenshotToolTests(unittest.TestCase):
    def test_cache_reuses_verified_image_offline(self):
        data = io.BytesIO()
        Image.new("RGB", (320, 180), "#2563eb").save(data, "PNG")
        with tempfile.TemporaryDirectory() as directory:
            with patch.object(screenshot_media, "CACHE", Path(directory)):
                with patch.object(screenshot_media, "urlopen", return_value=FakeResponse(data.getvalue())) as fetch:
                    image_path, metadata = screenshot_media.cached_image("https://github.com/acme/game/blob/main/shot.png")
                    self.assertTrue(image_path.exists())
                    self.assertEqual(metadata["width"], 320)
                    self.assertEqual(metadata["height"], 180)
                    self.assertEqual(metadata["dhash"], screenshot_media.inspect_local_image(image_path)["dhash"])
                    screenshot_media.cached_image("https://github.com/acme/game/blob/main/shot.png", offline=True)
                    self.assertEqual(fetch.call_count, 1)

    def test_rejects_non_github_source_and_wrong_media_type(self):
        with self.assertRaises(ValueError):
            screenshot_media.source_url("http://example.com/shot.png")
        with tempfile.TemporaryDirectory() as directory:
            with patch.object(screenshot_media, "CACHE", Path(directory)):
                with patch.object(screenshot_media, "urlopen", return_value=FakeResponse(b"video", "video/mp4")):
                    with self.assertRaisesRegex(ValueError, "Wrong media type"):
                        screenshot_media.cached_image("https://github.com/acme/game/blob/main/shot.png", refresh=True)

    def test_requires_a_review_for_every_recorded_image(self):
        url = "https://github.com/acme/game/blob/main/shot.png"
        record = {"name": "Game", "github_url": "https://github.com/acme/game", "screenshot_urls": [url], "screenshot_rating_10": 8.0, "screenshot_rating_evidence_url": url}
        errors, _ = VALIDATOR.validate([record], [], [])
        self.assertTrue(any("Missing image review" in error for error in errors))
        review = {"repository_url": record["github_url"], "url": url, "score_10": 7.0, "image_kind": "gameplay", "reason": "Readable action with coherent color and composition.", "reviewed_on": "2026-09-25", "rating_method": "manual_visual_review"}
        errors, _ = VALIDATOR.validate([record], [review], [])
        self.assertTrue(any("Game score differs" in error for error in errors))


if __name__ == "__main__":
    unittest.main()
