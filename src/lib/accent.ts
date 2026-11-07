const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** "**fett**" wird <strong>, "*wort*" wird ein Akzentwort in Instrument Serif kursiv. */
export function accent(s: string): string {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<span class="it">$1</span>');
}

/** Klartext ohne Markierungen, für alt, title und aria. */
export function plain(s: string): string {
  return s.replace(/\*+/g, '');
}
