/**
 * Lichtbänder: viele feine Sinuslinien in Orange bis Aprikot, additiv gezeichnet.
 * Das Motiv der Seite in groß. Reagiert sanft auf Maus und Scroll, pausiert außerhalb des Viewports,
 * zeichnet bei prefers-reduced-motion genau ein Standbild.
 */
export function ribbons(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const css = getComputedStyle(document.documentElement);
  const hex = (n: string, f: string) => (css.getPropertyValue(n).trim() || f);
  const rgb = (h: string) => { const v = parseInt(h.replace('#', ''), 16); return [(v >> 16) & 255, (v >> 8) & 255, v & 255]; };
  const A = rgb(hex('--sun', '#ec7a45'));
  const B = rgb(hex('--apricot', '#f6b394'));
  const C = rgb(hex('--sun-deep', '#c8562a'));

  let W = 0, H = 0, dpr = 1, t = 0, last = 0, raf = 0, visible = true, mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;
  const N = () => (W < 700 ? 26 : 44);

  function size() {
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height; dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    draw();
  }

  function draw() {
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx!.globalCompositeOperation = 'source-over';
    ctx!.clearRect(0, 0, W, H);
    ctx!.globalCompositeOperation = 'lighter';
    const n = N();
    const scroll = Math.min(window.scrollY / Math.max(H, 1), 1);
    for (let i = 0; i < n; i++) {
      const k = i / (n - 1);
      const mid = 1 - Math.abs(k - 0.5) * 2;
      const c = k < 0.5 ? A.map((v, j) => v + (C[j] - v) * (0.5 - k) * 2) : A.map((v, j) => v + (B[j] - v) * (k - 0.5) * 2);
      ctx!.strokeStyle = `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${0.05 + 0.2 * mid * mid})`;
      ctx!.lineWidth = 0.6 + 1.4 * mid;
      ctx!.beginPath();
      for (let x = -40; x <= W + 40; x += 12) {
        const u = x / W;
        const base = H * (0.78 - 0.34 * u) - scroll * H * 0.12;
        const y = base
          + Math.sin(u * 4.2 + t * 0.32 + k * 1.9 + (mx - 0.5) * 1.2) * H * (0.1 + 0.05 * mid)
          + Math.sin(u * 9.5 - t * 0.21 + k * 3.1) * H * 0.028
          + (k - 0.5) * H * (0.16 + 0.1 * Math.sin(u * 3 + t * 0.2 + (my - 0.5)));
        x === -40 ? ctx!.moveTo(x, y) : ctx!.lineTo(x, y);
      }
      ctx!.stroke();
    }
  }

  function frame(now: number) {
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    mx += (tmx - mx) * 0.04; my += (tmy - my) * 0.04;
    if (visible) { t += dt; draw(); }
    raf = requestAnimationFrame(frame);
  }

  const onMove = (e: PointerEvent) => { tmx = e.clientX / window.innerWidth; tmy = e.clientY / window.innerHeight; };
  const io = new IntersectionObserver((en) => { visible = en[0].isIntersecting; });
  const ro = new ResizeObserver(size);
  io.observe(canvas); ro.observe(canvas);
  size();
  if (!reduced) {
    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame((n) => { last = n; frame(n); });
  }
  return () => { cancelAnimationFrame(raf); io.disconnect(); ro.disconnect(); window.removeEventListener('pointermove', onMove); };
}
