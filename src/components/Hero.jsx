'use client';
import { useState } from 'react';
import Reveal from './Reveal';
import Typewriter from './Typewriter';
import CountUp from './CountUp';
import { WA } from '@/lib/data';
import { scrollToId } from '@/lib/hooks';

export default function Hero() {
  const [statsIn, setStatsIn] = useState(false);
  return (
    <section id="home" className="hero" data-screen-label="Hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-col">
          <Reveal className="badge"><span className="dot" aria-hidden="true" />available for full-time roles</Reveal>
          <Reveal as="h1" delay={80} className="h1">Haris Shabbir</Reveal>
          <Reveal delay={160}><Typewriter /></Reveal>
          <Reveal delay={220} className="tagline">MERN · Next.js · Full-Stack</Reveal>
          <Reveal as="p" delay={280} className="lead">
            Full-Stack MERN Developer building secure, scalable web applications. 
            Based in Karachi, delivering production-ready solutions for clients in 
            Pakistan and the UAE.
          </Reveal>
          <Reveal delay={340} className="ctas">
            <a href="#work" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToId('work'); }}>
              View My Work <span aria-hidden="true">→</span>
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Contact Me</a>
          </Reveal>
          <Reveal delay={420} className="stats" onReveal={() => setTimeout(() => setStatsIn(true), 420)}>
            <div className="stat"><b><CountUp to={6} start={statsIn} /></b><span>Live Client Sites</span></div>
            <div className="stat"><b><CountUp to={28} suffix="+" start={statsIn} /></b><span>Projects on GitHub</span></div>
            <div className="stat"><b>2026</b><span>BSCS Graduate</span></div>
          </Reveal>
        </div>
        <Reveal delay={300} style={{ minWidth: 0 }}>
          <div className="terminal" role="img" aria-label="Terminal window showing Haris's focus areas">
            <div className="term-bar"><i /><i /><i /><span>haris@portfolio: ~</span></div>
            <div className="term-body">
              <div><span className="p">haris@portfolio ~ $</span> whoami</div>
              <div className="o">haris shabbir — full-stack developer</div>
              <div><span className="p">haris@portfolio ~ $</span> cat focus.txt</div>
              <div className="o">e-commerce · dashboards · lms · ai apps</div>
              <div><span className="p">haris@portfolio ~ $</span> ls deployed/</div>
              <div className="files"><span>heirloom/</span><span>altjwal/</span><span>philosophy/</span></div>
              <div><span className="p">haris@portfolio ~ $</span> <span className="term-caret" /></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
