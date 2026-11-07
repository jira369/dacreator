# Nachweis: Taste-Skill und Impeccable

Alle Dateien in diesem Ordner sind unveränderte Ausgaben der Skill-Skripte aus dieser Session.

## Impeccable
| Schritt | Nachweis |
| --- | --- |
| `impeccable context` | meldete `NO_PRODUCT_MD` und `BUILD_INIT_REQUIRED` |
| init | [`/PRODUCT.md`](../../PRODUCT.md) aus deinen Antworten geschrieben |
| `concept-seed --scope direction --mode persuade` | [`impeccable-concept-seed.txt`](impeccable-concept-seed.txt), Seed `08e38ed899c1a66ff96938e31fd42867` |
| Regel "brief-pinned direction beats the roll" | deine Relay-Referenz gewinnt; alle Challenger abgelehnt, siehe unten |
| `reference/craft-floor.md` | vor dem Bau geladen; umgesetzt: Selection, Caret, Scrollbar, Fokusringe aus der Palette, eine Signatur-Bewegung, Exponential-Ease, keine Eyebrows, keine Nummerierung |
| new-work | [`/DESIGN.md`](../../DESIGN.md) |
| `impeccable detect --json` | [`impeccable-detect.json`](impeccable-detect.json): `[]`, keine Befunde |

**Verdikte zum Concept-Seed:** Seidencape, Papier-Automaten, Ikeda-Datamatics, Puppen-Atelier, Fashion-Flagship: abgelehnt (passen weder zu Zielgruppe noch zur Klarheit). Darkroom-Safelight: abgelehnt, aber seine Disziplin übernommen: **eine einzige warme Lichtquelle**, alles andere wird von ihr beleuchtet. Daraus wurden die Lichtbänder.

## Taste-Skill
| Schritt | Nachweis |
| --- | --- |
| Vorher-Inspektion | [`taste-inspect-before.txt`](taste-inspect-before.txt), Screenshots in [`before/`](before/) |
| `draw.mjs --options 3` | [`taste-draw-options.txt`](taste-draw-options.txt): dense-tiles, quiet-instrument, one-motif |
| Gewählte Richtung | [`taste-direction-sheet.txt`](taste-direction-sheet.txt): **One motif**, Seed 637310245, `--keep palette,type` |
| App-Stil für Fragmente | [`taste-app-sheet.txt`](taste-app-sheet.txt): analytics, Seed 493741224 |
| `lint.mjs src` | [`taste-lint.txt`](taste-lint.txt): **0 FAIL, 0 WARN** |
| `inspect.mjs` auf 13 Seiten, 1440/768/390 | [`taste-inspect-after.txt`](taste-inspect-after.txt): **0 FAIL auf allen 13 Seiten** |
| Screenshots nachher | [`after/`](after/) |

Die Idee nach Taste Schritt 4: *Auf dieser Seite wird die Welle aus Dacs DNA-Helix zum einen Motiv, und jede Sektion zeigt eines seiner echten Werkzeuge als Interface-Fragment.*
Live-Elemente: CPL-Rechner mit Slidern, drehbare DNA-Helix mit klickbaren Knoten.

### Bewusst übergangene Taste-Regeln (`--allow`)
| Regel | Warum |
| --- | --- |
| mono, mixed-font-headline, font-count | deine Referenz: Status-Pills in Mono, ein kursives Serif-Wort pro Überschrift, also drei Schriften |
| palette-claude, palette-terracotta | dein Sonnenuntergang-Orange ist verbindlich |
| outlined-box, off-centre, few-pictures, hero-void, empty-screens, still-page | nur Unterseiten: du wolltest das Layout der ersten Version mit Karten und zentrierter Spalte zurück |

### Critique (Taste references/critique.md §4)
```
ROUND 1
Seen in one second: dunkle Seite, orange Lichtbänder, "Marketing, das sich selbst misst.", ein Tracking-Pipeline-Panel.
Idea (one sentence): Die Welle der DNA-Helix ist das eine Motiv, jede Sektion zeigt ein echtes Werkzeug von Dac.
Live thing: CPL-Rechner und drehbare Helix.
Layout words by section: hero=Fragment auf Bühne / statement=versetzter Absatz / dna=Liste plus Objekt / calc=Zahl per Slider / case=Split mit Chart / tech=Foto in Motivform plus Punkte / work=versetzte Kacheln / stations=zweispaltige Liste / cta=offener Dialog auf Orange / footer=gebaute Marke
Scores: design 7.5 · usability 8 · creativity 8 · content 7.5 → overall 7.8
Caps applied: streng nach Taste gälte max 6.5 (Mono-Pills, weniger als vier echte Fotos). Beides ist vom Brief vorgegeben. Ohne diese zwei Caps: 7.8.
Top three problems:
1. Footer-Marke aus Blöcken wirkt verspielter als der Rest (home-desktop-page-03): Kandidat für Lichtband-Footer.
2. Nur ein echtes Foto. Mehr eigene Fotos würden Kacheln und Stationen tragen.
3. Arbeits-Kacheln lassen bei 1440px große leere Zellen (home-desktop-page-02): gewollt laut Blaupause, wirkt aber teils wie Lücke.
```

## Tests
- `npm run check`: Build-Prüfung PASS (Titel, Zahlen, keine Gedankenstriche, keine Links auf private Repos, keine Teamnamen, keine Fremd-CDNs).
- Playwright: alle Reveals sichtbar mit und ohne Motion, kein Overflow bei 320px, Anker-Links landen bei top=0, DNA-Link navigiert, Rechner rechnet (25.000 € / 1.000 Leads = 25 € CPL), Menü öffnet, keine Konsolenfehler.
