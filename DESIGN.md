# Design

Verbindliche visuelle Entscheidungen für dacreator.dev. Produktwahrheit steht in PRODUCT.md.

## Welt
Dunkle, ruhige SaaS-Fläche nach der Referenz des Nutzers ("Relay"). Eine einzige warme Lichtquelle: Sonnenuntergang-Orange.
Das eine Motiv ist die **Welle der DNA-Helix**: als Lichtbänder im Hero, als Helix im Abschnitt "Meine DNA", als Logo, als Bullet und als Stationszeichen.

## Farbe
| Rolle | Wert |
| --- | --- |
| Grund | #0A090B |
| Panel | #16131A, #1D1922 |
| Text | #F0EEF2 |
| Gedämpft | #AAA29C (7,4:1 auf Grund) |
| Akzent Sonne | #EC7A45 |
| Sonne tief | #C8562A |
| Aprikot | #F6B394 |
| Text auf Sonne | #1A0E08 |
Orange erscheint auf Aktion, Akzentwort, Datenpunkt und einer vollen CTA-Fläche. Sonst nirgends.

## Typo
- Geist Variable für alles, 500 für Überschriften, Tracking -0.035em.
- Instrument Serif Italic nur für ein Akzentwort pro Überschrift (Markierung `*wort*` in i18n).
- Geist Mono nur für Status-Pills und Daten in Interface-Fragmenten.
- Alle Schriften selbst gehostet über @fontsource.

## Komposition (Taste-Skill, Richtung "One motif", Seed 637310245)
Hero als Fragment auf ausgeschnittener Bühne, Statement versetzt, DNA als Liste mit Objekt, Rechner als Zahl per Slider, Case als Split mit Chart-Panel, Tech mit Foto in Motivform, Arbeiten als versetzte Kacheln, Stationen zweispaltig, CTA mit offenem Dialog, Footer als gebaute Marke.

## Interface-Fragmente
Echte Werkzeuge als HTML, markiert mit `data-ui`: Tracking-Pipeline, CPL-Rechner, Case-Chart, Kontaktdialog. Linien und Mono sind dort erlaubt.

## Motion
Signatur: Shutter auf dem Foto. Dazu Lichtbänder (Canvas, Maus und Scroll), drehbare Helix, Eintritt pro Sektionsteil, fließende Pipeline-Linien, wachsende Balken, Footer-Marke. Alles mit `prefers-reduced-motion`-Fallback, Inhalte ohne JS sichtbar.

## Unterseiten
Projekt-, Stations- und Blogseiten behalten das Layout der ersten Version (Karten mit Tags, Kopfkarte mit Tech-Stack, Rightmart-Showcase), laufen über dieselben Tokens.
