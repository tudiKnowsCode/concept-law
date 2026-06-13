import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';

export interface SubPractice { num: string; title: string; body: string; }
export interface ProcessStep  { num: string; title: string; body: string; }
export interface FaqItem      { q: string; a: string; }
export interface ResultItem   { amount: string; label: string; }

export interface PracticeAreaData {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  heroCta?: { label: string; href: string };
  approachLabel?: string;
  approachTitle: string;
  approachBody: string[];
  subTitle: string;
  subpractices: SubPractice[];
  stepsTitle: string;
  steps: ProcessStep[];
  faqs: FaqItem[];
  resultsHeading: string;
  results: ResultItem[];
  ctaTitle: React.ReactNode;
  ctaBody: string;
  sidebarHeading: string;
  sidebarBody: string;
  sidebarCta: string;
  sidebarPhone?: string;
  sidebarPhoneLabel?: string;
  quickStats: { n: string; l: string }[];
  breadcrumb?: string;
  metadata: { title: string; description: string };
}

const revealStyle = (y = 26): React.CSSProperties => ({
  opacity: 0,
  transform: `translateY(${y}px)`,
  transition: 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)',
});

export default function PracticeAreaTemplate({ data }: { data: PracticeAreaData }) {
  return (
    <div className="font-sans overflow-x-hidden" style={{ color: '#0d1a26', background: '#f4efe5' }}>
      <SiteNav active="practice-areas" />

      <PageHero
        breadcrumb={data.breadcrumb ?? 'Practice Areas'}
        eyebrow={data.eyebrow}
        title={data.title}
        subtitle={data.subtitle}
        cta={data.heroCta}
      />

      {/* Main content + sidebar */}
      <section style={{ background: '#f4efe5', padding: 'clamp(72px,10vh,120px) 28px' }}>
        <div
          className="max-w-[1280px] mx-auto"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 'clamp(40px,5vw,80px)', alignItems: 'start' }}
        >
          {/* ── Main column ── */}
          <div>
            {/* Approach */}
            <div data-reveal="" style={revealStyle()}>
              <div className="inline-flex items-center gap-3">
                <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
                <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>
                  {data.approachLabel ?? 'OUR APPROACH'}
                </span>
              </div>
              <h2 className="font-serif font-medium" style={{ fontSize: 'clamp(26px,3.4vw,42px)', lineHeight: 1.14, margin: '18px 0 0' }}>
                {data.approachTitle}
              </h2>
              {data.approachBody.map((para, i) => (
                <p key={i} style={{ margin: '16px 0 0', fontSize: '16.5px', lineHeight: 1.78, color: '#46535f' }}>{para}</p>
              ))}
            </div>

            {/* Sub-practices */}
            <div data-reveal="" data-delay="80" style={{ ...revealStyle(), marginTop: '52px' }}>
              <h2 className="font-serif font-semibold" style={{ fontSize: 'clamp(22px,2.6vw,32px)', margin: '0 0 28px' }}>
                {data.subTitle}
              </h2>
              <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
                {data.subpractices.map((sp) => (
                  <div
                    key={sp.num}
                    style={{
                      background: '#fbf8f1',
                      border: '1px solid rgba(13,26,38,0.08)',
                      borderTop: '2px solid #b3873f',
                      padding: '24px 22px',
                    }}
                  >
                    <div className="font-bold" style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#9a7438' }}>{sp.num}</div>
                    <h3 className="font-serif font-semibold" style={{ fontSize: '18px', margin: '10px 0 0' }}>{sp.title}</h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#46535f', margin: '8px 0 0' }}>{sp.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div data-reveal="" data-delay="100" style={{ ...revealStyle(), marginTop: '64px' }}>
              <h2 className="font-serif font-semibold" style={{ fontSize: 'clamp(22px,2.6vw,32px)', margin: '0 0 32px' }}>
                {data.stepsTitle}
              </h2>
              <div>
                {data.steps.map((step, i) => (
                  <div
                    key={step.num}
                    className="grid gap-6"
                    style={{
                      gridTemplateColumns: '64px 1fr',
                      padding: '22px 0',
                      borderTop: '1px solid rgba(13,26,38,0.1)',
                      borderBottom: i === data.steps.length - 1 ? '1px solid rgba(13,26,38,0.1)' : undefined,
                    }}
                  >
                    <div className="font-serif font-semibold" style={{ fontSize: '26px', color: '#b3873f' }}>{step.num}</div>
                    <div>
                      <h3 className="font-serif font-semibold" style={{ margin: 0, fontSize: '19px' }}>{step.title}</h3>
                      <p style={{ margin: '7px 0 0', fontSize: '15px', lineHeight: 1.68, color: '#46535f' }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div data-reveal="" data-delay="80" style={{ ...revealStyle(), marginTop: '60px' }}>
              <h2 className="font-serif font-semibold" style={{ fontSize: 'clamp(22px,2.6vw,32px)', margin: '0 0 24px' }}>
                Frequently asked questions
              </h2>
              <FaqAccordion items={data.faqs} />
            </div>
          </div>

          {/* ── Sticky sidebar ── */}
          <div style={{ position: 'sticky', top: '96px' }}>
            <div style={{ background: '#0d1a26', color: '#f4efe5', padding: '36px 30px', border: '1px solid rgba(179,135,63,0.2)' }}>
              <div className="font-bold" style={{ fontSize: '11.5px', letterSpacing: '0.22em', color: '#cda35d' }}>FREE CONSULTATION</div>
              <h3 className="font-serif font-semibold mt-3" style={{ fontSize: '24px', lineHeight: 1.2, margin: '12px 0 0' }}>
                {data.sidebarHeading}
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'rgba(244,239,229,0.72)', margin: '14px 0 0' }}>
                {data.sidebarBody}
              </p>
              <a
                href="/contact"
                className="block no-underline font-bold text-center mt-6 transition-all duration-200 hover:-translate-y-px"
                style={{ background: '#b3873f', color: '#0a141e', fontSize: '15px', padding: '15px', borderRadius: '2px' }}
              >
                {data.sidebarCta}
              </a>
              {data.sidebarPhone && (
                <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(244,239,229,0.1)' }}>
                  <div className="font-bold" style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(244,239,229,0.4)' }}>CALL DIRECTLY</div>
                  <a href={`tel:${data.sidebarPhone.replace(/[^+\d]/g, '')}`} className="no-underline block mt-2 font-serif font-semibold" style={{ fontSize: '22px', color: '#f4efe5' }}>
                    {data.sidebarPhone}
                  </a>
                  {data.sidebarPhoneLabel && (
                    <div style={{ fontSize: '13px', color: 'rgba(244,239,229,0.5)', marginTop: '4px' }}>{data.sidebarPhoneLabel}</div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {data.quickStats.map((s) => (
                <div
                  key={s.l}
                  className="text-center"
                  style={{ background: '#fbf8f1', border: '1px solid rgba(13,26,38,0.08)', padding: '20px 12px' }}
                >
                  <div className="font-serif font-semibold" style={{ fontSize: '24px' }}>{s.n}</div>
                  <div style={{ fontSize: '12px', marginTop: '4px', color: '#6b7682' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results strip */}
      <section style={{ background: '#0d1a26', color: '#f4efe5', padding: 'clamp(60px,8vh,90px) 28px' }}>
        <div className="max-w-[1280px] mx-auto">
          <div data-reveal="" className="text-center mb-10" style={revealStyle(20)}>
            <h2 className="font-serif font-medium" style={{ fontSize: 'clamp(24px,3.2vw,38px)', margin: 0 }}>
              {data.resultsHeading}
            </h2>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {data.results.map((r, i) => (
              <div
                key={r.amount}
                data-reveal=""
                data-delay={String(i * 80)}
                style={{
                  ...revealStyle(18),
                  borderTop: '2px solid #b3873f',
                  padding: '24px 20px',
                  background: 'rgba(255,255,255,0.04)',
                }}
              >
                <div className="font-serif font-semibold" style={{ fontSize: '36px', color: '#cda35d' }}>{r.amount}</div>
                <div style={{ fontSize: '14px', color: 'rgba(244,239,229,0.65)', marginTop: '8px', lineHeight: 1.5 }}>{r.label}</div>
              </div>
            ))}
          </div>
          <div data-reveal="" className="text-center mt-8" style={revealStyle(16)}>
            <a
              href="/results"
              className="no-underline font-bold inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-px"
              style={{ color: '#cda35d', fontSize: '15px', letterSpacing: '0.02em' }}
            >
              View all results <span className="font-serif">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f4efe5', padding: 'clamp(72px,10vh,120px) 28px' }}>
        <div data-reveal="" className="max-w-[760px] mx-auto text-center" style={revealStyle(24)}>
          <h2 className="font-serif font-medium" style={{ fontSize: 'clamp(26px,4vw,48px)', lineHeight: 1.1, margin: 0 }}>
            {data.ctaTitle}
          </h2>
          <p style={{ marginTop: '18px', fontSize: '17px', lineHeight: 1.7, color: '#46535f' }}>{data.ctaBody}</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 no-underline font-bold mt-8 transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: '#0d1a26', color: '#f4efe5', fontSize: '15px', padding: '16px 32px', borderRadius: '2px' }}
          >
            Get a free consultation <span className="font-serif">&rarr;</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
