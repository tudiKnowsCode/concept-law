'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { key: 'about',     label: 'The Firm',       href: '/about' },
  { key: 'practice',  label: 'Practice Areas',  href: '/practice-area' },
  { key: 'attorneys', label: 'Attorneys',       href: '/attorneys' },
  { key: 'results',   label: 'Results',         href: '/results' },
  { key: 'insights',  label: 'Insights',        href: '/insights' },
  { key: 'contact',   label: 'Contact',         href: '/contact' },
];

interface SiteNavProps {
  active?: string;
}

export default function SiteNav({ active = 'home' }: SiteNavProps) {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1000);
    checkMobile();

    const onScroll  = () => setScrolled(window.scrollY > 16);
    const onResize  = () => { checkMobile(); setOpen(false); };

    window.addEventListener('scroll', onScroll,  { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-[200]" style={{ borderTop: '3px solid #b3873f' }}>
      {/* Bar */}
      <div
        className="border-b border-[rgba(13,26,38,0.10)] transition-shadow duration-300"
        style={{
          background: 'rgba(250,247,240,0.86)',
          backdropFilter: 'saturate(140%) blur(10px)',
          WebkitBackdropFilter: 'saturate(140%) blur(10px)',
          boxShadow: scrolled ? '0 10px 40px rgba(13,26,38,0.13)' : 'none',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-7 h-[74px] flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="no-underline flex flex-col gap-1 shrink-0" style={{ lineHeight: 1 }}>
            <span className="font-serif font-semibold text-navy-700" style={{ fontSize: '25px', letterSpacing: '0.005em' }}>
              Ashford <span className="text-brass-400 italic font-medium">&amp;</span> Vane
            </span>
            <span className="font-bold text-slate-400" style={{ fontSize: '9.5px', letterSpacing: '0.32em' }}>
              ATTORNEYS AT LAW · EST. 1991
            </span>
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <nav className="flex items-center gap-[26px]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="no-underline transition-colors duration-200 hover:text-brass-400"
                  style={{
                    fontSize: '14.5px',
                    fontWeight: 600,
                    letterSpacing: '0.005em',
                    paddingBottom: '5px',
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                    color: active === link.key ? '#0d1a26' : '#3a4856',
                    borderBottom: active === link.key ? '2px solid #b3873f' : '2px solid transparent',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="no-underline whitespace-nowrap transition-all duration-200 hover:-translate-y-px hover:bg-navy-600"
                style={{
                  background: '#0d1a26',
                  color: '#f6f2e8',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  padding: '12px 22px',
                  borderRadius: '2px',
                  boxShadow: '0 1px 0 #b3873f inset, 0 0 0 1px rgba(13,26,38,0.04)',
                }}
              >
                Free Consultation
              </Link>
            </nav>
          )}

          {/* Hamburger */}
          {isMobile && (
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-2"
            >
              <span className="w-[26px] h-[2px] block rounded-sm bg-navy-700" />
              <span className="w-[26px] h-[2px] block rounded-sm bg-navy-700" />
              <span className="w-[18px] h-[2px] block rounded-sm bg-brass-400" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="px-6 pb-6 pt-3.5" style={{ background: '#0d1a26', borderBottom: '3px solid #b3873f' }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block no-underline font-serif font-medium py-3 px-1.5"
              style={{
                fontSize: '21px',
                color: active === link.key ? '#cda35d' : '#f4efe5',
                borderBottom: '1px solid rgba(244,239,229,0.10)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center no-underline font-bold py-4 rounded-sm"
            style={{ background: '#b3873f', color: '#0d1a26', letterSpacing: '0.03em' }}
          >
            Request a Free Consultation
          </Link>
          <a
            href="tel:+18605550182"
            className="block text-center mt-3.5 no-underline"
            style={{ color: 'rgba(244,239,229,0.7)', fontSize: '14px', letterSpacing: '0.04em' }}
          >
            (860) 555-0182 · Hartford &amp; Stamford
          </a>
        </div>
      )}
    </header>
  );
}
