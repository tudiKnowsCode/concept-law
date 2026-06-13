import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';

const revealStyle = (y = 26): React.CSSProperties => ({
  opacity: 0,
  transform: `translateY(${y}px)`,
  transition: 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)',
});

const NOISE_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const AREAS = [
  {
    num: '01',
    name: 'Personal Injury',
    href: '/practice-areas/personal-injury',
    sub: 'Catastrophic injury · Auto & truck · Medical malpractice · Wrongful death',
    desc: "When someone else's negligence changes your life, we put a trial attorney in your corner from day one—and we don't stop until you have what you deserve.",
    note: 'No fee unless we recover',
  },
  {
    num: '02',
    name: 'Business & Corporate',
    href: '/practice-areas/business-corporate',
    sub: 'Formation · M&A · Contracts · Governance · Commercial litigation',
    desc: 'From forming your first LLC to closing a nine-figure acquisition, our business attorneys combine legal precision with genuine commercial judgment.',
    note: 'Transparent flat-fee & hourly arrangements',
  },
  {
    num: '03',
    name: 'Estate Planning',
    href: '/practice-areas/estate-planning',
    sub: 'Wills · Trusts · Probate · Elder law · Asset protection',
    desc: 'An estate plan is a gift to the people you love. We make sure it actually works the way you intended—years after we draft it.',
    note: 'Fixed-fee packages available',
  },
  {
    num: '04',
    name: 'Family Law',
    href: '/practice-areas/family-law',
    sub: 'Divorce · Custody · Complex marital estates · Handled with discretion',
    desc: 'Family matters require an attorney who leads clearly and communicates honestly, even when the situation is anything but clear.',
    note: 'Free & confidential consultation',
  },
  {
    num: '05',
    name: 'Real Estate',
    href: '/practice-areas/real-estate',
    sub: 'Residential & commercial transactions · Land use · Development',
    desc: 'One missed clause can cost more than the transaction. Our real estate partners make sure every Connecticut deal closes cleanly.',
    note: 'Flat-fee residential closings available',
  },
  {
    num: '06',
    name: 'Criminal Defense',
    href: '/practice-areas/criminal-defense',
    sub: 'State & federal · Protects your record, your freedom, your future',
    desc: 'The moment you are investigated is the moment you need us. Our criminal defense partners are experienced trial attorneys available 24/7.',
    note: 'Available 24/7',
  },
];

export const metadata = {
  title: 'Practice Areas | Ashford & Vane LLP',
  description: 'Ashford & Vane LLP practices personal injury, business law, estate planning, family law, real estate, and criminal defense across Connecticut.',
};

export default function PracticeAreasPage() {
  return (
    <div className="font-sans overflow-x-hidden" style={{ color: '#0d1a26', background: '#f4efe5' }}>
      <SiteNav active="practice-areas" />

      <PageHero
        breadcrumb="What We Do"
        eyebrow="CONNECTICUT · SIX PRACTICES · ONE STANDARD"
        title="Six practices. One standard."
        subtitle="Full-service representation across the matters that define Connecticut lives and businesses—each led by attorneys who do nothing else."
      />

      {/* Practice areas list */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#0d1a26', color: '#f4efe5', padding: 'clamp(80px,12vh,130px) 28px' }}
      >
        <div className="absolute inset-0" style={{ opacity: 0.04, mixBlendMode: 'overlay', backgroundImage: NOISE_BG }} />
        <div className="relative max-w-[1080px] mx-auto">
          {AREAS.map((area, i) => (
            <a
              key={area.num}
              href={area.href}
              data-reveal=""
              data-delay={String(i * 50)}
              className="pa-item group flex items-start no-underline text-ivory"
              style={{
                ...revealStyle(20),
                gap: 'clamp(16px,3vw,48px)',
                padding: 'clamp(24px,3.5vh,36px) 16px',
                borderTop: '1px solid rgba(244,239,229,0.12)',
                borderBottom: i === AREAS.length - 1 ? '1px solid rgba(244,239,229,0.12)' : undefined,
              }}
            >
              <span
                className="font-serif font-semibold text-brass-400 shrink-0 leading-none"
                style={{ fontSize: 'clamp(34px,4.5vw,52px)', width: 'clamp(50px,6.5vw,74px)', marginTop: '4px' }}
              >
                {area.num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <div className="font-serif font-medium" style={{ fontSize: 'clamp(22px,2.8vw,32px)', lineHeight: 1.1 }}>
                    {area.name}
                  </div>
                  <div style={{ fontSize: '12px', color: '#b3873f', fontWeight: 700, letterSpacing: '0.12em' }}>
                    {area.note}
                  </div>
                </div>
                <div className="mt-1.5" style={{ fontSize: '13.5px', color: 'rgba(244,239,229,0.48)' }}>{area.sub}</div>
                <p className="mt-3 max-w-[560px]" style={{ fontSize: '15px', lineHeight: 1.68, color: 'rgba(244,239,229,0.72)', margin: '12px 0 0' }}>
                  {area.desc}
                </p>
              </div>
              <span
                className="pa-arrow font-serif text-brass-400 shrink-0 opacity-0 transition-opacity duration-300 self-center"
                style={{ fontSize: 'clamp(22px,2.8vw,32px)' }}
              >
                &rarr;
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Why partner-led matters */}
      <section style={{ background: '#fbf8f1', padding: 'clamp(80px,12vh,130px) 28px', borderBottom: '1px solid rgba(13,26,38,0.07)' }}>
        <div className="max-w-[1180px] mx-auto grid items-center gap-14" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div data-reveal="" style={revealStyle()}>
            <div className="inline-flex items-center gap-3">
              <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
              <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>WHY IT MATTERS</span>
            </div>
            <h2 className="font-serif font-medium" style={{ fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.12, margin: '18px 0 0' }}>
              Every practice. Partner-led.
            </h2>
            <p style={{ margin: '20px 0 0', fontSize: '16.5px', lineHeight: 1.78, color: '#46535f' }}>
              At most firms, a partner brings you in and an associate handles your matter. Not here. At Ashford & Vane, the partner who meets you is the partner who does the work—in every one of our six practices.
            </p>
            <p style={{ margin: '16px 0 0', fontSize: '16.5px', lineHeight: 1.78, color: '#46535f' }}>
              That means your corporate deal, your injury case, your estate plan, and your family matter all receive the same standard: the full attention of an experienced attorney who has seen this situation before and knows exactly what it takes to get you the right outcome.
            </p>
          </div>

          <div data-reveal="" data-delay="100" className="grid grid-cols-2 gap-4" style={revealStyle()}>
            {[
              { n: '35+',  l: 'Years practicing Connecticut law' },
              { n: '6',    l: 'Distinct practice areas' },
              { n: '18',   l: 'Attorneys & counsel' },
              { n: '2',    l: 'Connecticut offices' },
            ].map((stat) => (
              <div
                key={stat.l}
                style={{
                  background: '#f4efe5',
                  border: '1px solid rgba(13,26,38,0.08)',
                  borderTop: '2px solid #b3873f',
                  padding: '24px 20px',
                }}
              >
                <div className="font-serif font-semibold" style={{ fontSize: '34px', color: '#0d1a26' }}>{stat.n}</div>
                <div style={{ fontSize: '13px', color: '#6b7682', marginTop: '6px', lineHeight: 1.4 }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f4efe5', padding: 'clamp(72px,10vh,120px) 28px' }}>
        <div data-reveal="" className="max-w-[760px] mx-auto text-center" style={revealStyle(24)}>
          <h2 className="font-serif font-medium" style={{ fontSize: 'clamp(28px,4.4vw,50px)', lineHeight: 1.1, margin: 0 }}>
            Not sure which practice fits your situation?
          </h2>
          <p style={{ marginTop: '18px', fontSize: '17px', lineHeight: 1.7, color: '#46535f' }}>
            Tell us what happened. A Connecticut attorney will tell you which practice handles it and whether we can help.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 no-underline font-bold transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#0d1a26', color: '#f4efe5', fontSize: '15px', padding: '16px 30px', borderRadius: '2px' }}
            >
              Free consultation <span className="font-serif">&rarr;</span>
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2.5 no-underline font-semibold transition-all duration-200"
              style={{ background: 'transparent', color: '#0d1a26', fontSize: '15px', padding: '16px 28px', borderRadius: '2px', border: '1px solid rgba(13,26,38,0.25)' }}
            >
              About the firm
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
