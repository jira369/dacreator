import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Reveal, hero, scroll-linked wordmark. Safe to call on every page load. */
/** Ankerlinks beim Laden: nach dem Aufbau der ScrollTrigger ohne Animation zum Ziel springen. */
function jumpToHash(): void {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  ScrollTrigger.refresh();
  requestAnimationFrame(() => el.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'start' }));
}

export function initMotion(): void {
  const root = document.documentElement;
  ScrollTrigger.getAll().forEach((t) => t.kill());

  if (reduced()) {
    root.classList.add('no-motion');
    jumpToHash();
    return;
  }

  // Fallback: if anything below throws, content must still show.
  const fallback = window.setTimeout(() => root.classList.add('reveal-fallback'), 4000);

  try {
    // Hero headline: line by line
    const heroSpans = document.querySelectorAll<HTMLElement>('.hero h1 .line > span');
    if (heroSpans.length) {
      gsap.from(heroSpans, { yPercent: 115, duration: 1.1, ease: 'expo.out', stagger: 0.12, delay: 0.1 });
    }
    const heroWord = document.querySelector<HTMLElement>('[data-hero-word]');
    if (heroWord) {
      gsap.from(heroWord, { yPercent: 18, opacity: 0, duration: 1.6, ease: 'expo.out' });
      gsap.to(heroWord, {
        scale: 0.93,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      });
    }

    // Reveal: elements within a [data-reveal-group] stagger; others singly
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 90%',
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.09, overwrite: true }),
    });

    // Footer wordmark grows into place
    const mail = document.querySelector<HTMLElement>('[data-foot-mail]');
    if (mail) {
      gsap.fromTo(
        mail,
        { scale: 0.94 },
        { scale: 1, ease: 'none', scrollTrigger: { trigger: mail, start: 'top 100%', end: 'top 55%', scrub: true } },
      );
    }

    // Picture drift
    document.querySelectorAll<HTMLElement>('[data-drift] img').forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -6 },
        { yPercent: 6, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } },
      );
    });

    window.clearTimeout(fallback);
    jumpToHash();
  } catch {
    root.classList.add('reveal-fallback');
  }
}
