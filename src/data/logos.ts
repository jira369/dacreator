// Offizielle Logos von Plattformen, Tools und Arbeitgebern (public/logos).
// Quellen: Simple Icons (CC0), Microsoft-Logo nach Brand-Geometrie, sonst die Websites der Anbieter.
const map: Record<string, string> = {
  'meta ads': 'meta', meta: 'meta', facebook: 'facebook', instagram: 'instagram',
  'google ads': 'googleads', 'microsoft ads': 'microsoftads', 'microsoft advertising': 'microsoftads', bing: 'microsoftbing', 'bing ads': 'microsoftbing',
  'tiktok ads': 'tiktok', tiktok: 'tiktok', youtube: 'youtube',
  taboola: 'taboola.png', criteo: 'criteo', 'rtb house': 'rtbhouse', tisoomi: 'tisoomi.png',
  'power bi': 'powerbi', powerbi: 'powerbi', 'looker studio': 'lookerstudio', looker: 'looker',
  'google analytics': 'googleanalytics', ga4: 'googleanalytics', gtm: 'googletagmanager', 'server-side gtm': 'googletagmanager', 'google tag manager': 'googletagmanager',
  claude: 'claude', python: 'python', javascript: 'javascript', react: 'react', typescript: 'typescript',
  'tailwind css': 'tailwindcss', express: 'express', postgresql: 'postgresql', capacitor: 'capacitor',
  duckdb: 'duckdb', 'google drive': 'googledrive', asana: 'asana', jira: 'jira', wordpress: 'wordpress',
  html: 'html5', css: 'css', astro: 'astro', instapy: 'instagram',
  'rightmart group': 'rightmart', rightmart: 'rightmart', '42digital gmbh': '42digital', '42digital': '42digital',
  'vitapio gmbh': 'vitapio.png', vitapio: 'vitapio.png',
  github: 'github', substack: 'substack',
};

/** Pfad zum Logo für einen Namen, oder undefined, wenn es keins gibt. */
export function logoFor(name: string): string | undefined {
  const f = map[name.trim().toLowerCase()];
  if (!f) return undefined;
  return `/logos/${f.includes('.') ? f : `${f}.svg`}`;
}


/** Rechtsform am Ende eines Namens, z. B. "GmbH". */
const LEGAL = /\s+(GmbH|UG|GbR|AG)$/;

/** Marke ohne Rechtsform plus die Rechtsform getrennt. Das Logo trägt den Namen, die Rechtsform steht klein daneben. */
export function brand(title: string): { base: string; legal: string; logo?: string } {
  const m = title.match(LEGAL);
  const base = m ? title.slice(0, m.index) : title;
  const logo = logoFor(title) ?? logoFor(base);
  // Das rightmart-Logo enthält "group" bereits, dort entfällt der Zusatz
  const includes = /^rightmart/i.test(title);
  return { base, legal: includes ? '' : (m ? m[1] : ''), logo };
}
