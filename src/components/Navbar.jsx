'use client';
import { useEffect, useState } from 'react';
import { NAV, WA } from '@/lib/data';
import { scrollToId } from '@/lib/hooks';

const SECTIONS = ['home', ...NAV];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const hero = document.getElementById('home');
      setSolid(y > (hero ? hero.offsetHeight - 90 : 400));
      let cur = 'home';
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) cur = id;
      });
      if (y + window.innerHeight >= document.documentElement.scrollHeight - 4) cur = 'contact';
      setActive(cur);
    };
    const onResize = () => { if (window.innerWidth >= 860) setOpen(false); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const go = (e, id) => { e.preventDefault(); setOpen(false); scrollToId(id); };

  return (
    <>
      <header className={`nav ${solid || open ? 'solid' : ''}`}>
        <nav aria-label="Primary" className="nav-inner">
          <a href="#home" onClick={(e) => go(e, 'home')} aria-label="Haris Shabbir — home" className="logo" style={{ fontSize: 18 }}>
            <span>&lt;</span>HS<span> /&gt;</span>
          </a>
          <div className="nav-desktop">
            <div className="nav-links">
              {NAV.map((id) => (
                <a key={id} href={`#${id}`} onClick={(e) => go(e, id)} className={`nav-link ${active === id ? 'active' : ''}`}
                  aria-current={active === id ? 'true' : undefined}>{id}</a>
              ))}
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="hire">hire-me</a>
          </div>
          <button className={`burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
            <span /><span /><span />
          </button>
        </nav>
      </header>
      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        {NAV.map((id, i) => (
          <a key={id} href={`#${id}`} onClick={(e) => go(e, id)} className="m-link" tabIndex={open ? 0 : -1}>
            <span>0{i + 1}</span>{id}
          </a>
        ))}
        <a href={WA} target="_blank" rel="noopener noreferrer" className="m-cta" tabIndex={open ? 0 : -1}>hire-me →</a>
      </div>
    </>
  );
}
