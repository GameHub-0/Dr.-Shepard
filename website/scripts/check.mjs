import {readFile,access} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html',root),'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
const problems = [];
if (new Set(ids).size !== ids.length) problems.push('Duplicate HTML IDs');
if ((html.match(/<h1\b/g)||[]).length !== 1) problems.push('Expected one h1');
for (const [,attribute,url] of html.matchAll(/\b(src|href)="([^"]+)"/g)) {
  if (url.startsWith('#')) { if (!ids.includes(url.slice(1))) problems.push(`Missing anchor ${url}`); continue; }
  if (/^(https?:|mailto:|tel:)/.test(url)) continue;
  try { await access(new URL(url,root)); } catch { problems.push(`Missing ${attribute}: ${url}`); }
}
if (!html.includes('<fieldset id="inquiry-fields" disabled>')) problems.push('Inquiry must be safe without JavaScript');
if (!html.includes('noindex, nofollow')) problems.push('Concept should remain excluded from indexing');
const js = await readFile(new URL('app.js',root),'utf8');
if (/localStorage|sessionStorage|fetch\(/.test(js)) problems.push('Unexpected data persistence or submission');
if (problems.length) { console.error(problems.join('\n')); process.exitCode=1; }
else console.log(`Passed: unique IDs, one h1, internal links, local assets, safe no-JS inquiry, no persistence, and concept indexing policy (${resolve(fileURLToPath(root))}).`);
