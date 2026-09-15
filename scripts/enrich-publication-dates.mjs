import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const dataPath = 'games.json';
const cachePath = 'research/publication-date-cache.json';
const records = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};

const runGh = (endpoint) => {
  try {
    return JSON.parse(execFileSync('gh', ['api', endpoint], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 15000 }));
  } catch (error) {
    return { error: String(error.stderr ?? error.message ?? error).trim() };
  }
};
const runGraphql = (slugs) => {
  const selections = slugs.map((slug, index) => {
    const [owner, name] = slug.split('/');
    const quote = (value) => JSON.stringify(value);
    return `r${index}: repository(owner: ${quote(owner)}, name: ${quote(name)}) { createdAt url releases(first: 100, orderBy: { field: CREATED_AT, direction: ASC }) { nodes { createdAt publishedAt htmlUrl isDraft isPrerelease } } }`;
  }).join('\n');
  const query = `query { ${selections} }`;
  try {
    return JSON.parse(execFileSync('gh', ['api', 'graphql', '-f', `query=${query}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 30000 }));
  } catch (error) {
    return { error: String(error.stderr ?? error.message ?? error).trim() };
  }
};

const repoSlug = (url) => {
  const match = /^https:\/\/github\.com\/([^/]+\/[^/]+)\/?$/.exec(url ?? '');
  return match?.[1] ?? null;
};
const validDate = (value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
const nonGitHubSource = (record) => (record.discovery_sources ?? []).find((source) => /^https?:\/\//.test(source) && !source.includes('github.com')) ?? null;
const sourceType = (source) => {
  if (!source) return 'repository_created';
  if (/reddit\.com|x\.com|twitter\.com/.test(source)) return 'creator_post';
  if (/itch\.io/.test(source)) return 'live_demo';
  if (/github\.com\/[^/]+\/[^/]+\/releases\//.test(source)) return 'release';
  return 'external_source';
};

let fetchedRepositories = 0;
let fetchedReleases = 0;
let releaseDatesAdded = 0;
let repositoryDatesAdded = 0;
let failures = 0;
const checkpoint = () => fs.writeFileSync(cachePath, `${JSON.stringify(cache, null, 2)}\n`);

const slugs = [...new Set(records.filter((record) => record.is_independent_game && record.github_url).map((record) => repoSlug(record.github_url)).filter(Boolean))];
const pendingSlugs = slugs.filter((slug) => !cache[slug]?.metadata || !cache[slug]?.releases);
for (let index = 0; index < pendingSlugs.length; index += 25) {
  const batch = pendingSlugs.slice(index, index + 25);
  const response = runGraphql(batch);
  if (response.error || response.errors) {
    for (const slug of batch) cache[slug] = { ...(cache[slug] ?? {}), metadata: { error: response.error ?? JSON.stringify(response.errors) } };
    checkpoint();
    continue;
  }
  batch.forEach((slug, batchIndex) => {
    const repository = response.data?.[`r${batchIndex}`];
    if (!repository) {
      cache[slug] = { ...(cache[slug] ?? {}), metadata: { error: 'Repository not found or inaccessible' } };
      return;
    }
    cache[slug] = {
      metadata: { created_at: repository.createdAt, html_url: repository.url },
      releases: repository.releases?.nodes ?? [],
    };
  });
  fetchedRepositories += batch.length;
  fetchedReleases += batch.length;
  checkpoint();
}

for (const record of records) {
  if (!record.is_independent_game || !record.github_url) continue;
  const slug = repoSlug(record.github_url);
  if (!slug) continue;

  const metadata = cache[slug]?.metadata;
  if (metadata.error) {
    failures += 1;
    record.publication_date_status ??= 'unknown';
    checkpoint();
    continue;
  }

  if (!record.repository_created_at && metadata.created_at) {
    record.repository_created_at = metadata.created_at;
    repositoryDatesAdded += 1;
  }

  if (validDate(record.published_on)) {
    const source = record.published_date_source ?? nonGitHubSource(record) ?? record.github_url;
    record.published_date_source = source;
    record.published_date_type ??= sourceType(source);
    record.published_date_confidence ??= 'exact';
    record.publication_date_status = 'confirmed';
    checkpoint();
    continue;
  }

  const releases = cache[slug]?.releases;
  if (Array.isArray(releases)) {
    const publicReleases = releases
      .filter((release) => !release.draft && (release.published_at || release.created_at))
      .sort((a, b) => String(a.published_at ?? a.created_at).localeCompare(String(b.published_at ?? b.created_at)));
    const firstRelease = publicReleases[0];
    if (firstRelease) {
      record.published_on = String(firstRelease.published_at ?? firstRelease.created_at).slice(0, 10);
      record.published_date_type = 'release';
      record.published_date_source = firstRelease.html_url ?? `${record.github_url}/releases`;
      record.published_date_confidence = 'exact';
      record.publication_date_status = 'confirmed';
      releaseDatesAdded += 1;
      checkpoint();
      continue;
    }
  } else {
    failures += 1;
  }

  record.publication_date_status = record.repository_created_at ? 'repository_created_only' : 'unknown';

  // Checkpoint after every repository so a transient API stall never loses the completed pass.
  checkpoint();
}

fs.writeFileSync(dataPath, `${JSON.stringify(records, null, 2)}\n`);
fs.mkdirSync('research', { recursive: true });
fs.writeFileSync(cachePath, `${JSON.stringify(cache, null, 2)}\n`);

const summary = {
  generated_on: new Date().toISOString(),
  fetched_repositories: fetchedRepositories,
  fetched_release_lists: fetchedReleases,
  release_dates_added: releaseDatesAdded,
  repository_dates_added: repositoryDatesAdded,
  api_failures: failures,
  records: records.length,
  independent_records: records.filter((record) => record.is_independent_game).length,
  confirmed_publication_dates: records.filter((record) => record.is_independent_game && validDate(record.published_on)).length,
  repository_created_dates: records.filter((record) => record.is_independent_game && validDate(record.repository_created_at?.slice(0, 10))).length,
  unknown_dates: records.filter((record) => record.is_independent_game && record.publication_date_status === 'unknown').length,
};
console.log(JSON.stringify(summary, null, 2));
