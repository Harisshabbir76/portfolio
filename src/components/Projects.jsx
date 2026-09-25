import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { PROJECTS, GITHUB } from '@/lib/data';

export default function Projects() {
  return (
    <section id="work" className="section alt" data-screen-label="Projects">
      <div className="container">
        <Reveal className="eyebrow">{'// selected work'}</Reveal>
        <Reveal as="h2" delay={80} className="h2">Projects</Reveal>
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.n} delay={(i % 2) * 110}><ProjectCard p={p} /></Reveal>
          ))}
        </div>
        <Reveal className="more">
          <p><b>28+ more</b> projects, experiments, and contributions live on GitHub.</p>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '13px 22px' }}>
            See all projects on GitHub <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
