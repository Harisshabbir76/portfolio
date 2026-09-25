'use client';
import { useEffect, useState } from 'react';
import { TYPED_WORDS } from '@/lib/data';

export default function Typewriter() {
  const [text, setText] = useState(TYPED_WORDS[0]);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let wi = 0, ci = TYPED_WORDS[0].length, del = false, t;
    const tick = () => {
      const w = TYPED_WORDS[wi];
      let d;
      if (!del) { ci++; if (ci >= w.length) { ci = w.length; del = true; d = 1700; } else d = 70; }
      else { ci--; if (ci <= 0) { ci = 0; del = false; wi = (wi + 1) % TYPED_WORDS.length; d = 320; } else d = 36; }
      setText(TYPED_WORDS[wi].slice(0, ci));
      t = setTimeout(tick, d);
    };
    t = setTimeout(tick, 2600);
    return () => clearTimeout(t);
  }, []);
  return (
    <p className="typed" aria-label="Hi, I'm Haris — I'm a Full-Stack Developer">
      <span aria-hidden="true">Hi, I&apos;m Haris — I&apos;m a <em>{text}</em><span className="caret" /></span>
    </p>
  );
}
