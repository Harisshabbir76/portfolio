import Reveal from './Reveal';
import Icon from './Icon';
import { STACK, si } from '@/lib/data';

export default function Stack() {
  return (
    <section id="skills" className="section" data-screen-label="Tech Stack">
      <div className="container">
        <Reveal className="eyebrow">// expertise</Reveal>
        <Reveal as="h2" delay={80} className="h2">Tech Stack</Reveal>
        <div className="stack-grid">
          {STACK.map((g, gi) => (
            <Reveal key={g.name} delay={gi * 100} className="stack-card">
              <div className="stack-head"><span style={{ color: 'var(--ink)' }}>{g.name}</span><span>0{gi + 1}</span></div>
              <div className="chips">
                {g.items.map(([label, slug], i) => (
                  <Reveal key={label} delay={gi * 100 + 150 + i * 60}>
                    <div className="chip"><Icon src={slug.startsWith('http') ? slug : si(slug)} />{label}</div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
