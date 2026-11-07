// Prüft den Build in dist/. Aufruf: npm run build && node scripts/check-build.mjs
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const fails = [];
const ok = (cond, msg) => { if (!cond) fails.push(msg); };
const read = (p) => readFileSync(join('dist', p), 'utf8');
const text = (html) => html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));

// Root leitet ohne Verzögerung auf /de/
const root = read('index.html');
ok(/content="0;\s*url=\/de\/"/.test(root), 'root: redirect to /de/ without delay');

for (const l of ['de', 'en', 'vi']) {
  const p = `${l}/index.html`;
  ok(existsSync(join('dist', p)), `${p} exists`);
  const h = read(p);
  const title = (h.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  ok(title.includes('Head of Performance Marketing'), `${p}: title has new role`);
  ok(!title.includes('Head of Creative & Brand'), `${p}: title has no old role`);
  ok(existsSync(join('dist', `${l}/cv/index.html`)), `${l}/cv exists`);
}

const de = text(read('de/index.html'));
for (const s of ['60 Mio', 'über 40 Mio', 'ca. 3 Mio', '4 Monaten', 'Von niedrigem 7-stelligen Umsatz auf 60 Mio Jahresumsatz durch Performance Marketing.']) {
  ok(de.includes(s), `de: contains "${s}"`);
}

for (const f of walk('dist').filter((f) => f.endsWith('.html'))) {
  const h = readFileSync(f, 'utf8');
  const t = text(h);
  ok(!/fontshare\.com/.test(h), `${f}: no third-party font CDN`);
  ok(!/github\.com\/jira369\/(marketingcockpit|utm-generator|sea-cockpit)/i.test(h), `${f}: no link to private repos`);
  ok(!/[—–]/.test(t), `${f}: no em or en dash in visible text`);
  ok(!/\b(hero|stats|role|case|tech|work|journey|contact|dna|cv|nav|meta)\.[a-z0-9]+\b/.test(t.replace(/\S+@\S+/g, '').replace(/sportwetten-kanzlei\.de/g, '')), `${f}: no raw i18n key`);
  ok(!/\b(Nora|Fabio|Larissa|Lennart|Miriam)\b/.test(t), `${f}: no team names`);
}

if (fails.length) {
  console.error(`FAIL (${fails.length})\n- ` + [...new Set(fails)].slice(0, 30).join('\n- '));
  process.exit(1);
}
console.log('PASS: build checks');
