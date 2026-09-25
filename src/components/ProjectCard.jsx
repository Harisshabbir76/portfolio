'use client';
import { useState } from 'react';

export default function ProjectCard({ p }) {
  const [imgOk, setImgOk] = useState(true);
  const domain = p.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  return (
    <article className={`card ${p.client ? 'client' : ''}`}>
      <div className="browser">
        <div className="browser-bar"><i /><i /><i /><span>{domain}</span></div>
        <div className="thumb">
          <div className="thumb-inner">
            {imgOk && p.image
              ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" onError={() => setImgOk(false)} />
              : <small>screenshot — {p.title.toLowerCase()}</small>}
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span>{p.n}</span>
          <span className={`tag ${p.client ? 'client' : ''}`}>{p.client ? `Client · ${p.place}` : 'Personal'}</span>
        </div>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="tech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="view" aria-label={`View ${p.title} live site (opens in new tab)`}>
          view project <i aria-hidden="true">→</i>
        </a>
      </div>
    </article>
  );
}
