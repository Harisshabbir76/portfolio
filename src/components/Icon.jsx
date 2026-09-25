export default function Icon({ src, className = '' }) {
  return <span aria-hidden="true" className={`icon ${className}`} style={{ '--i': `url(${src})` }} />;
}
