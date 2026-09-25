'use client';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import { lu } from '@/lib/data';
import { scrollToId } from '@/lib/hooks';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button className={`to-top ${show ? 'show' : ''}`} onClick={() => scrollToId('home')} aria-label="Back to top" tabIndex={show ? 0 : -1}>
      <Icon src={lu('arrow-up')} />
    </button>
  );
}
