'use client';
import { useEffect } from 'react';

export default function ParallaxInit() {
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        const rate = parseFloat(el.dataset.parallax ?? '0.15');
        el.style.transform = `translateY(${y * rate}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
