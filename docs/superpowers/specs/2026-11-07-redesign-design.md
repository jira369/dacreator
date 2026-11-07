# Redesign dacreator.dev: Design

Stand: 2026-11-07. Status: Entwurf zur Freigabe.

## Intent und Warum
Dac Vu ist seit 01.10.2026 Head of Performance Marketing bei der rightmart Group (2 direkte, 5 indirekte Reports). Die Seite zeigt noch Head of Creative & Brand im Dark-Theme. Sie soll die neue Rolle belegen: tech-savvy, AI-first, Direct Response, mit Beweisen aus der jüngsten Vergangenheit. Zielgruppe: Recruiter, Peers, Geschäftsführung, Plattform-Partner.

## Ziele
- Hero sagt in 5 Sekunden: Head of Performance Marketing, AI-first, Direct Response.
- Beweise vor Behauptungen: 60 Mio Jahresumsatz durch Performance Marketing, sportwetten-kanzlei.de, Tech-Stack, GitHub.
- Wirkt jung und frisch: hell, editorial, große Typo, viel Motion.
- Deutsch ist Default. EN und VI bleiben.
- Alle Seiten im neuen Design: Startseite, Projekte, Blog, Impressum, Datenschutz.

## Nicht-Ziele
- Kein Framework-Wechsel. Astro 6, React 19, Tailwind 4, GSAP und Framer Motion bleiben.
- Keine neuen Backends. Kontaktformular bleibt wie es ist.
- Keine Live-Daten aus Cockpit oder Cloud-Tools.

## Anti-Ziele
- Keine Teamnamen, KPIs, Entscheidungsmatrix, Erwartungslevel oder Gehaltsthemen auf der Seite.
- Kein Code, kein Link, keine Interna der privaten Repos.
- Keine erfundenen Zahlen. Nur Angaben von Dac.
- Kein generischer Dark-Tech-Look, keine Gradient-Orbs, keine Floskeln.

## Constraints
- Skills: `anthropic-skills:impeccable` und `anthropic-skills:design-taste-frontend` leiten Design und Prüfung. Beide sind installiert.
- Texte nur in `src/i18n/ui.ts`, nie hart im Component.
- Barrierefrei: Kontrast WCAG AA, `prefers-reduced-motion` respektiert, Tastaturbedienung.
- Mobile-first, Breakpoints sm/md/lg. Keine horizontalen Scrolls.
- Performance: Animationen nur über transform und opacity, GSAP ScrollTrigger gebündelt.
- Werberecht: Streitwert-Angabe (40 Mio) muss Dac vor Livegang freigeben.

## Approaches
1. **Cockpit-Editorial:** Hell, Pace-Matrix und Zähler als Signature. Dashboard-Optik, mehr Aufwand.
2. **Reines Editorial-Manifest (gewählt):** Typo-getrieben, Marquee, Scroll-Timeline, Zähler. Schnell, klar, am meisten Magazin.
3. **Terminal-Tech-Akzent:** Editorial plus dunkle Tech-Sektion. Stark für Tech, aber zwei Looks.

Dac hat Variante 2 gewählt, weil sie jung und klar wirkt und die Zahlen für sich sprechen lässt.

## Entscheidungen von Dac
- Look: hell, editorial.
- Wachstum ohne Jahreszahlen: "Von niedrigem 7-stelligen Umsatz auf 60 Mio Jahresumsatz durch Performance Marketing."
- sportwetten-kanzlei.de: 4 Monate, ca. 3 Mio Spend, über 40 Mio Streitwert, inkl. kompletter Brand und Influencer Marketing.
- Private Repos als Cards ohne Link.
- Umfang: alles inkl. Blog, Projekte, VI.
- Persona und Tonalität: kurz, direkt, ohne Floskeln, Du-Ansprache.

## Aufbau Startseite (Reihenfolge)
1. **Hero:** Name, "Head of Performance Marketing", Claim, große Typo. Wort-Reveal, dezenter Cursor-Glow, CTA Kontakt und Cases.
2. **Zahlen-Streifen:** 60 Mio Jahresumsatz, 3 Mio Spend, 40 Mio+ Streitwert, 4 Monate. Count-up beim Einblenden.
3. **Marquee:** Direct Response, AI-first, Server-Side Tracking, Attribution, CPL, CPS, CAC.
4. **Rolle und Haltung:** Gesamtverantwortung, Kanalmix, Führung (Autonomie, Ziele statt Aufgaben), Tracking und Attribution als Steuerungsgrundlage.
5. **Case sportwetten-kanzlei.de:** Scroll-Story: Brand-Aufbau, Influencer, 4 Monate, Ergebnis.
6. **Tech und AI-Stack:** Server-Side-Tracking, Health Checks, GA4 für alle Domains, Marketingdaten-Atlas, Apps für CRO, SEO, Creative Strategy, Linkbuilding, Brand.
7. **GitHub und Tools:** Cards: marketingcockpit, utm-generator, sea-cockpit (privat, ohne Link), checkouttogether, Leben-in-Deutschland, rightmart (öffentlich, mit Link).
8. **Werdegang:** Timeline von Creative und Brand zu Performance Marketing. Vergangenheit als Beleg für Creative-Verständnis im Direct Response.
9. **Kontakt:** Großes Statement, Mail, LinkedIn, GitHub.

## Motion
- Hero Wort-Reveal, Zähler mit Count-up, Marquee mit Pause bei Hover, Scroll-Reveal pro Sektion, gepinnte Case-Story, Magnet-Buttons.
- Alles abschaltbar über `prefers-reduced-motion`.

## Technisch
- `defaultLocale` auf `de` setzen, Root-Redirect auf `/de`.
- Neue Komponenten ersetzen Hero, About, Experience, Skills, FeaturedProjects. Education wird Teil des Werdegangs.
- Neue Design-Tokens in `global.css`: heller Hintergrund, ein knalliger Akzent, eine Display-Schrift und eine Text-Schrift.
- Projekt-MDX für DE, EN, VI um die neuen Repos ergänzen. Blog bleibt, bekommt das neue Layout.
- Titel und Meta in allen Sprachen auf Head of Performance Marketing umstellen.

## Offen für den Builder
- Exakte Akzentfarbe und Schriftpaar (Impeccable und Taste entscheiden).
- Beschreibungstexte der Repo-Cards aus READMEs ableiten. sea-cockpit: Dac liefert einen Satz.
- Kurze EN- und VI-Texte werden aus dem DE-Text abgeleitet. VI als Entwurf markiert.

## Addendum 2026-11-07: Sunset, DNA, Lebenslauf
Entscheidungen von Dac nach dem ersten Bau:
- **Palette Sunset Dusk:** Sonnenuntergang-Orange #E0693B als Hauptfarbe, Zweitfarbe Dusk-Aubergine #2A1B2F, Akzent Aprikot-Rosé #F4A58A, Text-Akzent auf Papier #A8431C. Auf Orange steht Dusk-Text (Kontrast 4,9:1), nie Weiß.
- **Eigenes Foto** im Hero und auf der Lebenslauf-Seite. Weitere Fotos folgen von Dac.
- **Meine DNA:** interaktive Doppelhelix (Canvas 2D, pseudo-3D, Drag zum Drehen) mit sechs Knoten als echte Links: Direct Response (#case), AI-first (#work), Tracking und Daten (Projekt marketingcockpit), Creative und Brand (Lebenslauf), Führung (#role), Build (Projekte). Ohne JS eine Linkliste. Reduced Motion: statisch.
- **Lebenslauf-Unterseite** /de/cv, /en/cv, /vi/cv mit Druckstil für PDF. Ohne Adresse, Telefon, Geburtsdatum. Head of Creative & Brand: 04/2026 bis 09/2026.
- Look: SaaS-Anmutung, tech-savvy betont.

## Addendum 3: Relay-Stil
Dac verwirft den roten Editorial-Look und die Archivbilder. Neu: dunkle, techy SaaS-Seite nach Referenzvideo "Relay", Akzent Sonnenuntergang-Orange, Geist plus Instrument Serif, eigene Fotos, echte Werkzeuge als Interface-Fragmente, Lichtbänder als Motion. Projekt- und Stationsseiten im Layout der ersten Version, jede Station und jedes Projekt mit eigener Seite und Tech-Stack. Details in DESIGN.md und docs/design-proof/.
