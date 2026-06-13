const PRACTICE_LINKS = [
  { label: 'Personal Injury',      href: '/practice-areas/personal-injury' },
  { label: 'Business & Corporate', href: '/practice-areas/business-corporate' },
  { label: 'Estate Planning',      href: '/practice-areas/estate-planning' },
  { label: 'Family Law',           href: '/practice-areas/family-law' },
  { label: 'Real Estate',          href: '/practice-areas/real-estate' },
  { label: 'Criminal Defense',     href: '/practice-areas/criminal-defense' },
];

const FIRM_LINKS = [
  { label: 'The Firm',     href: '/about' },
  { label: 'Attorneys',    href: '/attorneys' },
  { label: 'Case Results', href: '/results' },
  { label: 'Insights',     href: '/insights' },
  { label: 'Contact',      href: '/contact' },
];

export default function SiteFooter() {
  return (
    <footer className="font-sans" style={{ background: '#0a141e', color: 'rgba(244,239,229,0.66)' }}>
      <div style={{ borderTop: '3px solid #b3873f' }} />

      <div className="max-w-[1280px] mx-auto px-7" style={{ paddingTop: '72px', paddingBottom: '36px' }}>
        <div className="grid gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', alignItems: 'start' }}>

          {/* Brand column */}
          <div style={{ gridColumn: '1 / -1', maxWidth: '380px' }}>
            <div className="font-serif font-semibold" style={{ fontSize: '27px', letterSpacing: '0.005em', color: '#f4efe5' }}>
              Ashford <span className="italic font-medium" style={{ color: '#cda35d' }}>&amp;</span> Vane
            </div>
            <div className="font-bold text-slate-400 mt-1.5" style={{ fontSize: '10px', letterSpacing: '0.32em' }}>
              ATTORNEYS AT LAW · EST. 1991
            </div>
            <p style={{ margin: '22px 0 0', fontSize: '15px', lineHeight: 1.7, color: 'rgba(244,239,229,0.55)' }}>
              Connecticut counsel for the moments that define a life and a business. Three decades of relentless, principled advocacy across the state.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 no-underline font-bold mt-6 pb-1"
              style={{ color: '#cda35d', fontSize: '14px', letterSpacing: '0.02em', borderBottom: '1px solid rgba(205,163,93,0.35)' }}
            >
              Request a consultation <span className="font-serif">&rarr;</span>
            </a>
          </div>

          {/* Practice */}
          <div>
            <div className="font-bold text-slate-400 mb-5" style={{ fontSize: '11px', letterSpacing: '0.22em' }}>PRACTICE</div>
            {PRACTICE_LINKS.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="block no-underline py-1.5 transition-colors duration-200 hover:text-brass-300"
                style={{ color: 'rgba(244,239,229,0.62)', fontSize: '14.5px' }}
              >
                {p.label}
              </a>
            ))}
          </div>

          {/* Firm */}
          <div>
            <div className="font-bold text-slate-400 mb-5" style={{ fontSize: '11px', letterSpacing: '0.22em' }}>FIRM</div>
            {FIRM_LINKS.map((f) => (
              <a
                key={f.label}
                href={f.href}
                className="block no-underline py-1.5 transition-colors duration-200 hover:text-brass-300"
                style={{ color: 'rgba(244,239,229,0.62)', fontSize: '14.5px' }}
              >
                {f.label}
              </a>
            ))}
          </div>

          {/* Offices */}
          <div style={{ minWidth: '200px' }}>
            <div className="font-bold text-slate-400 mb-5" style={{ fontSize: '11px', letterSpacing: '0.22em' }}>OFFICES</div>
            <div className="mb-4" style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'rgba(244,239,229,0.62)' }}>
              <div className="font-semibold mb-0.5" style={{ color: '#f4efe5' }}>Hartford</div>
              185 Asylum Street, Suite 2400<br />Hartford, CT 06103
            </div>
            <div className="mb-4" style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'rgba(244,239,229,0.62)' }}>
              <div className="font-semibold mb-0.5" style={{ color: '#f4efe5' }}>Stamford</div>
              1 Landmark Square, Suite 1900<br />Stamford, CT 06901
            </div>
            <a href="tel:+18605550182" className="no-underline font-semibold" style={{ color: '#cda35d', fontSize: '15px', letterSpacing: '0.02em' }}>
              (860) 555-0182
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap gap-4 items-center justify-between mt-16 pt-6 border-t border-[rgba(244,239,229,0.10)]"
          style={{ fontSize: '12.5px', color: 'rgba(244,239,229,0.42)', letterSpacing: '0.02em' }}
        >
          <div>© 2026 Ashford &amp; Vane LLP. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map((item) => (
              <a key={item} href="#" className="no-underline" style={{ color: 'rgba(244,239,229,0.5)' }}>
                {item}
              </a>
            ))}
          </div>
        </div>

        <p style={{ margin: '22px 0 0', fontSize: '11.5px', lineHeight: 1.6, color: 'rgba(244,239,229,0.30)', maxWidth: '760px' }}>
          Attorney Advertising. Prior results do not guarantee a similar outcome. The information on this website is for general purposes only and is not legal advice. Ashford &amp; Vane is a concept firm created for demonstration; it is not a real law practice.
        </p>
      </div>
    </footer>
  );
}
