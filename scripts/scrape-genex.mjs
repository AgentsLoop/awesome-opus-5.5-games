#!/usr/bin/env node
import { writeFile } from 'node:fs/promises';

const api = 'https://api.genex.games/api/gallery';
const output = new URL('../genex.json', import.meta.url);
const limit = 48;

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
  return response.json();
}

const counts = await getJson(`${api}/counts`);
const items = [];
const seen = new Set();
let cursor = null;

do {
  const url = new URL(api);
  url.searchParams.set('limit', String(limit));
  if (cursor) url.searchParams.set('cursor', cursor);
  const page = await getJson(url);
  for (const item of page.items) {
    if (seen.has(item.id)) throw new Error(`Duplicate Genex ID: ${item.id}`);
    seen.add(item.id);
    items.push(item);
  }
  cursor = page.nextCursor;
} while (cursor);

if (items.length !== counts.buckets.games) {
  throw new Error(`Fetched ${items.length} entries; Games tab reports ${counts.buckets.games}`);
}

const games = items.map((item) => {
  const github = item.gameRepoUrl ?? item.sourceRepoUrl;
  if (github && new URL(github).hostname !== 'github.com') {
    throw new Error(`Unexpected source host for ${item.slug}: ${github}`);
  }
  if (!item.playUrl || !item.thumbnailUrl) {
    throw new Error(`Missing play or screenshot URL for ${item.slug}`);
  }
  return {
    id: item.id,
    name: item.title,
    slug: item.slug,
    game_url: item.playUrl,
    screenshot_urls: [item.thumbnailUrl],
    description: item.description ?? null,
    github_source_url: github ?? null,
    categories: item.categories,
  };
});

await writeFile(output, `${JSON.stringify(games, null, 2)}\n`);
console.log(`Saved ${games.length} Genex Games-tab entries to ${output.pathname}`);
