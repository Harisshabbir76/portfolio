'use client';
import { useEffect, useRef, useState } from 'react';

let observer;
const callbacks = new WeakMap();
function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      callbacks.get(e.target)?.();
      observer.unobserve(e.target);
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  return observer;
}

/** Fades + slides children in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, line = false, className = '', style, onReveal, children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setInView(true); onReveal?.(); return;
    }
    callbacks.set(el, () => { setInView(true); onReveal?.(); });
    getObserver().observe(el);
    return () => getObserver().unobserve(el);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Tag
      ref={ref}
      className={`${line ? 'reveal-line' : 'reveal'} ${inView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
