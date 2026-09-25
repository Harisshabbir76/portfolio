import Reveal from './Reveal';
import { TIMELINE } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="section alt" data-screen-label="About">
      <div className="container">
        <Reveal className="eyebrow">{'// about me'}</Reveal>
        <Reveal as="h2" delay={80} className="h2">Background</Reveal>
        <div className="about-grid">
          <div className="about-text">
            <Reveal as="p">
              I&apos;m a Full-Stack MERN Developer specializing in building modern, 
              secure, and scalable web applications from concept to deployment. I develop 
              responsive user interfaces with React and Next.js, build robust backend APIs 
              using Node.js and Express, and work with MongoDB and SQL databases to deliver 
              high-performance applications.
            </Reveal>
            <Reveal as="p" delay={80}>
              My experience includes e-commerce platforms, admin dashboards, booking systems,
              event management platforms, and CMS-driven websites. I focus on writing clean, 
              maintainable code, implementing secure authentication, integrating third-party APIs 
              and payment gateways, and deploying production-ready applications using Git, Vercel,
              Render, Railway, Hostinger, AWS, and VPS environments.
            </Reveal>
            <Reveal as="p" delay={160} style={{ color: 'var(--ink)' }}>
              I&apos;ve delivered live projects for clients in Pakistan and the UAE, helping businesses 
              streamline operations and strengthen their online presence through reliable, 
              user-focused software. My goal is to build high-quality digital products that 
              solve real business problems while continuously expanding my expertise in modern 
              web technologies.
            </Reveal>
          </div>
          <div>
            <Reveal className="mono" style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 26 }}>education &amp; credentials</Reveal>
            <ol className="timeline">
              <Reveal as="span" line className="timeline-line" aria-hidden="true" />
              {TIMELINE.map((t, i) => (
                <Reveal as="li" key={t.title} delay={(i + 1) * 100}>
                  <div className="t-date">{t.date}</div>
                  <div className="t-title">{t.title}</div>
                  <div className="t-sub">{t.sub}</div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
