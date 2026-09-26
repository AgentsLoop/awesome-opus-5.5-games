import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'README.md');
const destination = path.join(root, 'profile', 'README.md');

const fromRoot = (url) => {
  if (url.startsWith('#') || url.startsWith('/') || /^[a-z][a-z\d+.-]*:/i.test(url)) return url;
  return `../${url}`;
};

const readme = fs.readFileSync(source, 'utf8');
const profile = readme
  .replace(/(\]\()([^\s)]+)(\))/g, (_, start, url, end) => `${start}${fromRoot(url)}${end}`)
  .replace(/(\b(?:src|href)=['"])([^'"]+)(['"])/g, (_, start, url, end) => `${start}${fromRoot(url)}${end}`);

if (process.argv.includes('--check')) {
  if (!fs.existsSync(destination) || fs.readFileSync(destination, 'utf8') !== profile) {
    console.error('Regenerate profile/README.md with node scripts/generate-organization-profile.mjs');
    process.exitCode = 1;
  }
} else {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, profile);
}
