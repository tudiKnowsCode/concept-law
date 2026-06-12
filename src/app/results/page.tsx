import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import ResultsList from '@/components/ResultsList';

const revealStyle = (y = 26): React.CSSProperties => ({
  opacity: 0,
  transform: `translateY(${y}px)`,
  transition: 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)',
});

const TESTIMONIALS = [
  {
    quote: "After my accident, I didn't think I had a case. Ashford & Vane spent three months proving I was wrong—and recovered three times what the insurance company offered.",
    name: 'Robert Chen',
    detail: 'Motor vehicle injury · Hartford, CT',
  },
  {
    quote: "The partner I met on day one was the partner who stood up for closing arguments. That's not how most firms work. It made every difference.",
    name: 'Patricia Williams',
    detail: 'Medical malpractice · Stamford, CT',
  },
  {
    quote: 'Our company faced a contract dispute that threatened our entire business. The corporate team at Ashford & Vane resolved it without litigation and better than I hoped.',
    name: 'David Osei',
    detail: 'Commercial litigation · Greenwich, CT',
  },
];

export const metadata = {
  title: 'Results | Ashford & Vane LLP',
  description: 'More than $480M recovered for Connecticut clients. Verdicts, settlements, and results across personal injury, medical malpractice, and corporate matters.',
};

export default function ResultsPage() {
  return (
    <div className="font-sans overflow-x-hidden" style={{ color: '#0d1a26', background: '#f4efe5' }}>
      <SiteNav active="results" />

      <PageHero
        breadcrumb="Our Results"
        eyebrow="$480M+ RECOVERED · 120+ VERDICTS"
        title="Numbers that represent lives changed."
        subtitle="Every result here is a Connecticut family, business, or individual who trusted us at a consequential moment. We don't take that lightly."
      />

      {/* Featured counters */}
      <section style={{ background: '#0d1a26', color: '#f4efe5', padding: 'clamp(64px,9vh,96px) 28px' }}>
        <div className="max-w-[1280px] mx-auto grid text-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
          {[
            { target: '480', prefix: '$', suffix: 'M+', label: 'Total recovered for clients' },
            { target: '120', suffix: '+',               label: 'Verdicts & significant settlements' },
            { target: '98',  suffix: '%',               label: 'Client satisfaction rating' },
          ].map((stat, i) => (
            <div key={stat.label} data-reveal="" data-delay={String(i * 80)} style={revealStyle(20)}>
              <div className="font-serif font-semibold leading-none" style={{ fontSize: 'clamp(44px,5.5vw,64px)' }}>
                <span
                  data-counter=""
                  data-target={stat.target}
                  data-prefix={stat.prefix ?? ''}
                  data-suffix={stat.suffix}
                >
                  {stat.prefix ?? ''}{stat.target}{stat.suffix}
                </span>
              </div>
              <div className="mt-3 uppercase" style={{ fontSize: '12.5px', letterSpacing: '0.14em', color: 'rgba(244,239,229,0.6)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div style={{ background: '#fbf8f1', padding: '14px 28px', borderBottom: '1px solid rgba(13,26,38,0.07)' }}>
        <p className="max-w-[1280px] mx-auto" style={{ fontSize: '12.5px', color: '#8b95a0', margin: 0, lineHeight: 1.5 }}>
          Past results do not guarantee future outcomes. Each case is unique. Results listed represent gross recovery before attorney fees and costs.
        </p>
      </div>

      {/* Results list (client component with filter) */}
      <ResultsList />

      {/* Testimonials */}
      <section style={{ background: '#fbf8f1', padding: 'clamp(80px,12vh,130px) 28px', borderTop: '1px solid rgba(13,26,38,0.07)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div data-reveal="" className="text-center max-w-[620px] mx-auto mb-12" style={revealStyle(24)}>
            <div className="inline-flex items-center gap-3">
              <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
              <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>CLIENT VOICES</span>
              <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
            </div>
            <h2 className="font-serif font-medium mt-4" style={{ fontSize: 'clamp(26px,3.6vw,42px)', lineHeight: 1.12, margin: '18px 0 0' }}>
              In their words
            </h2>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                data-reveal=""
                data-delay={String(i * 80)}
                style={{
                  ...revealStyle(22),
                  background: '#f4efe5',
                  border: '1px solid rgba(13,26,38,0.08)',
                  borderLeft: '3px solid #b3873f',
                  padding: '32px 28px',
                }}
              >
                <p className="font-serif" style={{ fontSize: '18px', lineHeight: 1.52, margin: 0, color: '#0d1a26' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 font-bold" style={{ fontSize: '14px', color: '#0d1a26' }}>{t.name}</div>
                <div className="mt-0.5" style={{ fontSize: '12.5px', color: '#8b95a0', letterSpacing: '0.02em' }}>{t.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f4efe5', padding: 'clamp(72px,10vh,120px) 28px' }}>
        <div data-reveal="" className="max-w-[760px] mx-auto text-center" style={revealStyle(24)}>
          <h2 className="font-serif font-medium" style={{ fontSize: 'clamp(26px,4vw,48px)', lineHeight: 1.1, margin: 0 }}>
            Your result starts with a conversation.
          </h2>
          <p style={{ marginTop: '18px', fontSize: '17px', lineHeight: 1.7, color: '#46535f' }}>
            Free consultations, no obligation. We will tell you honestly what we think your case is worth.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 no-underline font-bold mt-8 transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: '#0d1a26', color: '#f4efe5', fontSize: '15px', padding: '16px 32px', borderRadius: '2px' }}
          >
            Request a free consultation <span className="font-serif">&rarr;</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
