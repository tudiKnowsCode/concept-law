import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import AttorneysGrid from '@/components/AttorneysGrid';

const revealStyle = (y = 26): React.CSSProperties => ({
  opacity: 0,
  transform: `translateY(${y}px)`,
  transition: 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)',
});

export const metadata = {
  title: 'Attorneys | Ashford & Vane LLP',
  description: "Meet the attorneys of Ashford & Vane LLP — Connecticut's partner-led trial and counsel firm. 18 attorneys across Hartford and Stamford.",
};

export default function AttorneysPage() {
  return (
    <div className="font-sans overflow-x-hidden" style={{ color: '#0d1a26', background: '#f4efe5' }}>
      <SiteNav active="attorneys" />

      <PageHero
        breadcrumb="Our Team"
        eyebrow="18 ATTORNEYS · HARTFORD & STAMFORD"
        title="Partners who answer the phone."
        subtitle="Every Ashford & Vane client works with a named partner, not a rotating cast of associates. These are the people you'll meet on day one."
      />

      {/* Intro strip */}
      <section className="border-b border-[rgba(13,26,38,0.07)]" style={{ background: '#fbf8f1', padding: 'clamp(48px,7vh,72px) 28px' }}>
        <div data-reveal="" className="max-w-[860px] mx-auto text-center" style={revealStyle(20)}>
          <p style={{ fontSize: '18px', lineHeight: 1.78, color: '#46535f', margin: 0 }}>
            We believe the attorney who interviews you should be the attorney who tries your case. That belief has shaped every hiring decision we&rsquo;ve made since 1991.
          </p>
        </div>
      </section>

      {/* Attorneys grid (client component with filter) */}
      <AttorneysGrid />

      {/* Join CTA */}
      <section className="relative overflow-hidden" style={{ background: '#0a141e', color: '#f4efe5', padding: 'clamp(80px,12vh,130px) 28px' }}>
        <div className="absolute pointer-events-none" style={{ top: '-20%', right: '-10%', width: '50%', height: '140%', background: 'radial-gradient(closest-side, rgba(179,135,63,0.12), transparent)' }} />
        <div data-reveal="" className="relative max-w-[760px] mx-auto text-center" style={revealStyle(24)}>
          <div className="inline-flex items-center gap-3">
            <span className="inline-block w-[30px] h-[1px]" style={{ background: 'rgba(179,135,63,0.5)' }} />
            <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>JOIN THE FIRM</span>
            <span className="inline-block w-[30px] h-[1px]" style={{ background: 'rgba(179,135,63,0.5)' }} />
          </div>
          <h2 className="font-serif font-medium mt-5" style={{ fontSize: 'clamp(26px,4vw,46px)', lineHeight: 1.1, margin: '18px 0 0' }}>
            We hire attorneys who want to try cases, not manage them.
          </h2>
          <p style={{ marginTop: '18px', fontSize: '16.5px', lineHeight: 1.74, color: 'rgba(244,239,229,0.72)' }}>
            If you&rsquo;re a Connecticut attorney who believes in the partner-led model and wants courtroom experience from day one, we want to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 no-underline font-bold mt-8 transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: '#b3873f', color: '#0a141e', fontSize: '15px', padding: '16px 32px', borderRadius: '2px' }}
          >
            Contact us about openings <span className="font-serif">&rarr;</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
