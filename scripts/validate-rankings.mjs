import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const rankings = path.join(root, 'rankings');
const argument = (name) => process.argv.find((value) => value.startsWith(`${name}=`))?.slice(name.length + 1);
function localDate() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Ho_Chi_Minh', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.filter((part) => part.type !== 'literal').map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}
const asOf = argument('--as-of') ?? localDate();
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
if (!datePattern.test(asOf)) throw new Error(`Invalid validation date: ${asOf}`);

const dateOffset = (date, days) => {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
};
const expectedDates = Array.from({ length: 7 }, (_, index) => dateOffset(asOf, index - 6));
const required = [
  'README.md',
  'this-week.md',
  'this-month.md',
  'date-audit.json',
  ...expectedDates.map((date) => `daily/${date}.md`),
];
for (const relative of required) {
  if (!fs.existsSync(path.join(rankings, relative))) throw new Error(`Missing generated report: rankings/${relative}`);
}

const data = JSON.parse(fs.readFileSync(path.join(rankings, 'date-audit.json'), 'utf8'));
if (data.generated_on !== asOf) throw new Error(`date-audit.json was generated for ${data.generated_on}, expected ${asOf}`);
if (!Array.isArray(data.records) || data.records.length === 0) throw new Error('date-audit.json has no records');

const keys = new Set();
for (const row of data.records) {
  if (!row.game || !row.repository_url) throw new Error('Every audit row needs a game and repository URL');
  const key = `${row.repository_url}\n${row.game}`;
  if (keys.has(key)) throw new Error(`Duplicate audit row: ${key}`);
  keys.add(key);
  if (!['published', 'release', 'creator_post', 'live_demo', 'external_source', 'repository_created', 'recent_game_evidence', 'repository_activity', 'unknown'].includes(row.published_date_type)) {
    throw new Error(`Invalid publication date type for ${key}: ${row.published_date_type}`);
  }
  if (!['exact', 'recorded', 'unknown'].includes(row.published_date_confidence)) throw new Error(`Invalid date confidence for ${key}`);
  if (row.published_date !== null && !datePattern.test(row.published_date)) throw new Error(`Invalid normalized date for ${key}`);
  if (row.published_date_type !== 'unknown' && !row.published_date) throw new Error(`Dated row has no date: ${key}`);
  for (const field of ['repository_url', 'published_date_source']) {
    if (row[field] !== null && row[field] !== '' && !/^https?:\/\//.test(row[field])) throw new Error(`Invalid URL in ${field} for ${key}`);
  }
}

for (const date of expectedDates) {
  const report = fs.readFileSync(path.join(rankings, 'daily', `${date}.md`), 'utf8');
  if (!report.startsWith(`# Top Games — ${date}`)) throw new Error(`Daily report heading mismatch: ${date}`);
  if (report.includes('verified_on')) throw new Error(`Daily report uses verification date: ${date}`);
}
for (const relative of ['README.md', 'this-week.md', 'this-month.md']) {
  const report = fs.readFileSync(path.join(rankings, relative), 'utf8');
  if (!report.includes(`As of: **${asOf}**`)) throw new Error(`Report has wrong as-of date: rankings/${relative}`);
}

for (const relative of required.filter((file) => file.endsWith('.md'))) {
  const filePath = path.join(rankings, relative);
  const report = fs.readFileSync(filePath, 'utf8');
  for (const link of report.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const target = link[1].split('#', 1)[0];
    if (/^https?:\/\//.test(target) || target === '') continue;
    if (!fs.existsSync(path.resolve(path.dirname(filePath), target))) throw new Error(`Broken local link in rankings/${relative}: ${target}`);
  }
}

console.log(`Validated ${data.records.length} date-audit rows and ${expectedDates.length} daily reports as of ${asOf}.`);
