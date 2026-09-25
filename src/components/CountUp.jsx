'use client';
import { useEffect, useState } from 'react';

export default function CountUp({ to, start, suffix = '', duration = 1300 }) {
  const [v, setV] = useState(to);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setV(0);
  }, []);
  useEffect(() => {
    if (!start || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { if (start) setV(to); return; }
    let raf; const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);
  return <>{v}{suffix}</>;
}
