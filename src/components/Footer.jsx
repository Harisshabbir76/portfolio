import Icon from './Icon';
import { SOCIALS } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>crafted by Haris Shabbir · {new Date().getFullYear()} · Karachi, Pakistan</p>
        <div className="socials">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}><Icon src={s.icon} /></a>
          ))}
        </div>
      </div>
    </footer>
  );
}
