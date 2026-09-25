import Reveal from './Reveal';
import Icon from './Icon';
import { CONTACTS, WA } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="contact" data-screen-label="Contact" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="glow" aria-hidden="true" />
      <div className="container inner">
        <Reveal className="eyebrow">// get in touch</Reveal>
        <Reveal as="h2" delay={80}>Let&apos;s Build Something.</Reveal>
        <Reveal as="p" delay={160} className="sub">
          Open to full-time roles, freelance projects, and startup opportunities. Currently based in Karachi, Pakistan.
        </Reveal>
        <Reveal delay={240} className="big-cta">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Chat on WhatsApp <span aria-hidden="true">→</span></a>
        </Reveal>
        <div className="contact-grid">
          {CONTACTS.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a href={c.href} className="c-card" {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <span className="c-icon"><Icon src={c.icon} /></span>
                <span style={{ minWidth: 0 }}><span className="c-label">{c.label}</span><span className="c-value">{c.value}</span></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
