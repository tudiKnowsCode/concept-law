import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import InsightsGrid from '@/components/InsightsGrid';
import NewsletterForm from '@/components/NewsletterForm';

const revealStyle = (y = 26): React.CSSProperties => ({
  opacity: 0,
  transform: `translateY(${y}px)`,
  transition: 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)',
});

export const metadata = {
  title: 'Insights | Ashford & Vane LLP',
  description: 'Plain-language legal commentary from Connecticut attorneys. Estate planning, personal injury, business law, and family law — from Ashford & Vane LLP.',
};

export default function InsightsPage() {
  return (
    <div className="font-sans overflow-x-hidden" style={{ color: '#0d1a26', background: '#f4efe5' }}>
      <SiteNav active="insights" />

      <PageHero
        breadcrumb="Insights"
        eyebrow="LEGAL COMMENTARY · CONNECTICUT"
        title="Clear counsel, plainly written."
        subtitle="Our attorneys write about the legal issues Connecticut families and businesses actually face. No jargon, no hidden agenda—just useful perspective."
      />

      {/* Featured article */}
      <section style={{ background: '#fbf8f1', padding: 'clamp(72px,10vh,110px) 28px', borderBottom: '1px solid rgba(13,26,38,0.07)' }}>
        <div className="max-w-[1280px] mx-auto">
          <div data-reveal="" className="mb-8" style={revealStyle(20)}>
            <div className="inline-flex items-center gap-3">
              <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
              <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>FEATURED ARTICLE</span>
            </div>
          </div>

          <div
            className="grid items-center"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px,6vw,80px)' }}
          >
            {/* Image placeholder */}
            <div data-reveal="" style={revealStyle()}>
              <a href="#" className="block no-underline">
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '16/10', background: 'linear-gradient(150deg,#15293a,#0a141e)', border: '1px solid rgba(179,135,63,0.2)' }}
                >
                  <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(179,135,63,0.07) 0 1px, transparent 1px 30px)' }} />
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(70% 60% at 30% 50%, rgba(179,135,63,0.12), transparent 70%)' }} />
                  <div className="absolute font-bold" style={{ bottom: '16px', left: '18px', fontSize: '10px', letterSpacing: '0.22em', color: 'rgba(244,239,229,0.4)' }}>
                    PHOTOGRAPH · CONNECTICUT COURTS
                  </div>
                </div>
              </a>
            </div>

            {/* Text */}
            <div data-reveal="" data-delay="110" style={revealStyle()}>
              <div className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.1em', color: '#9a7438' }}>
                ESTATE PLANNING · FEB 2026
              </div>
              <h2 className="font-serif font-medium mt-3" style={{ fontSize: 'clamp(24px,3.2vw,38px)', lineHeight: 1.16, margin: '12px 0 0' }}>
                Five estate-planning mistakes Connecticut families still make
              </h2>
              <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.74, color: '#46535f' }}>
                A simple will isn&rsquo;t always enough. In our practice, we see the same gaps over and over—beneficiary designations that override a will, no plan for digital assets, trusts that were never funded. This article breaks down the five most common mistakes we fix, and how to avoid them from the start.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 no-underline font-semibold mt-6 transition-all duration-200 hover:gap-3"
                style={{ color: '#b3873f', fontSize: '15px' }}
              >
                Read the article <span className="font-serif">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* All articles (client component with filter) */}
      <section style={{ background: '#f4efe5', padding: 'clamp(56px,8vh,80px) 0 0' }}>
        <div className="max-w-[1280px] mx-auto px-[28px]">
          <div data-reveal="" style={revealStyle(20)}>
            <div className="inline-flex items-center gap-3">
              <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
              <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>ALL ARTICLES</span>
            </div>
          </div>
        </div>
      </section>
      <InsightsGrid />

      {/* Newsletter */}
      <section className="relative overflow-hidden" style={{ background: '#0a141e', color: '#f4efe5', padding: 'clamp(80px,12vh,130px) 28px' }}>
        <div className="absolute pointer-events-none" style={{ top: '-30%', right: '-10%', width: '60%', height: '160%', background: 'radial-gradient(closest-side, rgba(179,135,63,0.13), transparent)' }} />
        <div data-reveal="" className="relative max-w-[640px] mx-auto text-center" style={revealStyle(24)}>
          <div className="inline-flex items-center gap-3">
            <span className="inline-block w-[30px] h-[1px]" style={{ background: 'rgba(179,135,63,0.5)' }} />
            <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>STAY INFORMED</span>
            <span className="inline-block w-[30px] h-[1px]" style={{ background: 'rgba(179,135,63,0.5)' }} />
          </div>
          <h2 className="font-serif font-medium mt-5" style={{ fontSize: 'clamp(26px,3.8vw,44px)', lineHeight: 1.12, margin: '18px 0 0' }}>
            Connecticut legal updates, a few times a year.
          </h2>
          <p style={{ marginTop: '16px', fontSize: '16px', lineHeight: 1.68, color: 'rgba(244,239,229,0.7)' }}>
            No marketing. Just useful commentary when Connecticut law changes in ways that affect our clients.
          </p>
          <NewsletterForm />
          <p style={{ marginTop: '14px', fontSize: '12px', color: 'rgba(244,239,229,0.35)' }}>
            Unsubscribe at any time. We will never sell or share your email.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
