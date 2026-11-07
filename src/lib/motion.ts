import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ribbons } from './ribbons';

gsap.registerPlugin(ScrollTrigger);

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let stops: Array<() => void> = [];

/** Ankerlinks beim Laden: nach dem Aufbau der ScrollTrigger ohne Animation zum Ziel springen. */
function jumpToHash(): void {
  const id = decodeURIComponent(location.hash.slice(1));
  const el = id ? document.getElementById(id) : null;
  if (!el) return;
  ScrollTrigger.refresh();
  requestAnimationFrame(() => el.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' }));
}

export function initMotion(): void {
  const root = document.documentElement;
  stops.forEach((s) => s()); stops = [];
  ScrollTrigger.getAll().forEach((t) => t.kill());

  // Lichtbänder laufen auch bei reduzierter Bewegung, dann als Standbild
  document.querySelectorAll<HTMLCanvasElement>('[data-ribbons]').forEach((c) => stops.push(ribbons(c)));

  if (reduced()) { root.classList.add('no-motion'); jumpToHash(); return; }
  const fallback = window.setTimeout(() => root.classList.add('reveal-fallback'), 4000);

  try {
    // Inhalte der Unterseiten (MDX) bekommen dieselbe Eintrittsbewegung
    document.querySelectorAll<HTMLElement>('.project-content > *, .legal > *, .cv-role, .cv-skills > div').forEach((el) => { if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', ''); gsap.set(el, { opacity: 0, y: 22 }); });

    // Eintritt: Teile jeder Sektion nacheinander, Überschrift, Text, Bild
    ScrollTrigger.batch('[data-reveal], [data-animate]', {
      start: 'top 90%',
      once: true,
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.08, overwrite: true }),
    });

    // Signatur: das eine Foto öffnet sich wie ein Shutter
    document.querySelectorAll<HTMLElement>('[data-shutter]').forEach((fig) => {
      const img = fig.querySelector('img');
      const tl = gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top 75%', once: true } });
      tl.fromTo(fig, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.1, ease: 'expo.inOut' });
      if (img) tl.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 1.6, ease: 'expo.out' }, 0);
    });

    // Balken im Case wachsen auf ihren Wert
    document.querySelectorAll<HTMLElement>('[data-grow]').forEach((el) => {
      gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });

    // Footer-Marke baut sich beim Ankommen auf
    const mark = document.querySelectorAll<HTMLElement>('[data-foot-mark] span');
    if (mark.length) {
      gsap.fromTo(mark, { scaleY: 0.35 }, {
        scaleY: 1, duration: 1.2, ease: 'expo.out', stagger: 0.06,
        scrollTrigger: { trigger: '[data-foot-mark]', start: 'top 92%', once: true },
      });
    }

    window.clearTimeout(fallback);
    jumpToHash();
  } catch {
    root.classList.add('reveal-fallback');
  }
}
