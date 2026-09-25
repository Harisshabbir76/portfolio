'use client';
import { useEffect, useState } from 'react';

export default function Intro() {
  const [phase, setPhase] = useState('on'); // on → in → out → off
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || sessionStorage.getItem('hs-intro')) {
      setPhase('off'); return;
    }
    sessionStorage.setItem('hs-intro', '1');
    const t = [
      setTimeout(() => setPhase('in'), 40),
      setTimeout(() => setPhase('out'), 700),
      setTimeout(() => setPhase('off'), 1100),
    ];
    return () => t.forEach(clearTimeout);
  }, []);
  if (phase === 'off') return null;
  return (
    <div aria-hidden="true" className={`intro ${phase}`}>
      <div className="intro-logo logo"><span>&lt;</span>HS<span> /&gt;</span></div>
    </div>
  );
}
