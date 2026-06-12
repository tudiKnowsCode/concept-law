import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';

const revealStyle = (y = 26): React.CSSProperties => ({
  opacity: 0,
  transform: `translateY(${y}px)`,
  transition: 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)',
});

const STATS = [
  { target: '35',    suffix: '',    label: 'Years in practice' },
  { target: '18',    suffix: '',    label: 'Attorneys & counsel' },
  { target: '480',   suffix: 'M+',  prefix: '$', label: 'Recovered for clients' },
  { target: '2',     suffix: '',    label: 'Connecticut offices' },
];

const PRINCIPLES = [
  { num: 'i.',   title: 'Partner-led',   body: 'A named partner owns your matter from first call to final resolution.' },
  { num: 'ii.',  title: 'Trial-ready',   body: 'We build every case to win in front of a jury, not just to settle.' },
  { num: 'iii.', title: 'Candid',        body: "You'll always hear the honest assessment, not the convenient one." },
  { num: 'iv.',  title: 'Connecticut',   body: "We know these courts and communities because they're ours, too." },
];

const TIMELINE = [
  { year: '1991', title: 'The firm is founded',              body: 'Margaret Ashford and Daniel Vane open a two-attorney practice on Asylum Street in Hartford.' },
  { year: '2003', title: 'A landmark verdict',               body: 'The firm secures one of the largest personal-injury jury awards in Hartford County history.' },
  { year: '2012', title: 'Stamford office opens',            body: "A second office on Landmark Square brings the firm's corporate and real-estate practice to Fairfield County." },
  { year: '2026', title: 'Eighteen attorneys, one standard', body: 'Today the firm serves clients across all of Connecticut, still partner-led, still trial-ready.' },
];

export const metadata = {
  title: 'The Firm | Ashford & Vane LLP',
  description: 'Three decades of Connecticut counsel. Learn about the history, principles, and people behind Ashford & Vane.',
};

export default function AboutPage() {
  return (
    <div className="font-sans overflow-x-hidden" style={{ color: '#0d1a26', background: '#f4efe5' }}>
      <SiteNav active="about" />

      <PageHero
        breadcrumb="The Firm"
        eyebrow="EST. 1991 · HARTFORD & STAMFORD"
        title="Three decades of Connecticut counsel."
        subtitle="Ashford & Vane was built on a simple promise: that a Connecticut family or business in a defining moment deserves a partner's full attention, and a fighter's full effort."
      />

      {/* Story */}
      <section style={{ background: '#f4efe5', padding: 'clamp(80px,12vh,130px) 28px' }}>
        <div
          className="max-w-[1280px] mx-auto grid items-center"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(40px,6vw,84px)' }}
        >
          {/* Photo placeholder */}
          <div data-reveal="" style={{ ...revealStyle(), order: 2 }}>
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '4/5', background: 'linear-gradient(150deg,#15293a,#0a141e)', border: '1px solid rgba(179,135,63,0.28)' }}
            >
              <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(179,135,63,0.08) 0 1px, transparent 1px 40px)' }} />
              <div className="absolute inset-0" style={{ background: 'radial-gradient(80% 60% at 50% 0%, rgba(179,135,63,0.15), transparent 60%)' }} />
              <div className="absolute" style={{ left: '16px', top: '16px', width: '18px', height: '18px', borderLeft: '1px solid #b3873f', borderTop: '1px solid #b3873f' }} />
              <div className="absolute font-bold" style={{ bottom: '18px', left: '20px', fontSize: '10px', letterSpacing: '0.26em', color: 'rgba(244,239,229,0.5)' }}>
                PHOTOGRAPH · FOUNDING PARTNERS
              </div>
            </div>
          </div>

          {/* Text */}
          <div data-reveal="" data-delay="120" style={revealStyle()}>
            <div className="inline-flex items-center gap-3">
              <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
              <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>OUR STORY</span>
            </div>
            <h2 className="font-serif font-medium mt-5" style={{ fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.12, letterSpacing: '-0.01em', margin: '20px 0 0' }}>
              From a two-attorney office on Asylum Street.
            </h2>
            <p style={{ margin: '24px 0 0', fontSize: '16.5px', lineHeight: 1.78, color: '#46535f' }}>
              In 1991, Margaret Ashford and Daniel Vane left a large Hartford firm with a conviction: that the people most in need of excellent counsel were too often handed to the least experienced lawyers in the building. They opened a practice where every client would be represented by a partner, and where no case was too hard to take to trial.
            </p>
            <p style={{ margin: '18px 0 0', fontSize: '16.5px', lineHeight: 1.78, color: '#46535f' }}>
              Thirty-five years later, that conviction still defines us. We&rsquo;ve grown to two offices and a team of trial lawyers, transactional attorneys, and counselors who share one standard of work. We&rsquo;ve recovered hundreds of millions for Connecticut families and guided its businesses through their most consequential moments, but we&rsquo;ve never stopped answering the phone ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section style={{ background: '#0d1a26', color: '#f4efe5', padding: 'clamp(64px,9vh,96px) 28px' }}>
        <div className="max-w-[1280px] mx-auto grid text-center" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '36px' }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} data-reveal="" data-delay={String(i * 80)} style={revealStyle(20)}>
              <div className="font-serif font-semibold leading-none" style={{ fontSize: 'clamp(40px,5vw,60px)' }}>
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

      {/* Principles */}
      <section style={{ background: '#f4efe5', padding: 'clamp(80px,12vh,130px) 28px' }}>
        <div className="max-w-[1280px] mx-auto">
          <div data-reveal="" className="text-center max-w-[640px] mx-auto" style={revealStyle(24)}>
            <div className="inline-flex items-center gap-3">
              <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
              <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>WHAT WE STAND FOR</span>
              <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
            </div>
            <h2 className="font-serif font-medium mt-4" style={{ fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.12, margin: '18px 0 0' }}>
              Four principles, unchanged since 1991
            </h2>
          </div>

          <div className="mt-14 grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                data-reveal=""
                data-delay={String(i * 90)}
                style={{
                  ...revealStyle(22),
                  background: '#fbf8f1',
                  border: '1px solid rgba(13,26,38,0.08)',
                  borderTop: '3px solid #b3873f',
                  padding: '36px 30px',
                }}
              >
                <div className="font-serif italic" style={{ fontSize: '34px', color: '#b3873f', lineHeight: 1 }}>{p.num}</div>
                <h3 className="font-serif font-semibold mt-4" style={{ fontSize: '21px', margin: '16px 0 0' }}>{p.title}</h3>
                <p style={{ margin: '12px 0 0', fontSize: '15px', lineHeight: 1.7, color: '#46535f' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-[rgba(13,26,38,0.06)]" style={{ background: '#fbf8f1', padding: 'clamp(80px,12vh,130px) 28px' }}>
        <div className="max-w-[1080px] mx-auto">
          <div data-reveal="" style={revealStyle(24)}>
            <div className="inline-flex items-center gap-3">
              <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
              <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>OUR HISTORY</span>
            </div>
            <h2 className="font-serif font-medium mt-4" style={{ fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.12, margin: '18px 0 0' }}>
              A timeline of trust
            </h2>
          </div>

          <div className="mt-12">
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                data-reveal=""
                data-delay={String(i * 80)}
                className="grid gap-7"
                style={{
                  ...revealStyle(20),
                  gridTemplateColumns: '120px 1fr',
                  padding: '26px 0',
                  borderTop: '1px solid rgba(13,26,38,0.12)',
                  borderBottom: i === TIMELINE.length - 1 ? '1px solid rgba(13,26,38,0.12)' : undefined,
                }}
              >
                <div className="font-serif font-semibold" style={{ fontSize: '30px', color: '#b3873f' }}>{item.year}</div>
                <div>
                  <h3 className="font-serif font-semibold" style={{ margin: 0, fontSize: '21px' }}>{item.title}</h3>
                  <p style={{ margin: '8px 0 0', fontSize: '15.5px', lineHeight: 1.7, color: '#46535f', maxWidth: '620px' }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership quote */}
      <section className="relative overflow-hidden" style={{ background: '#0a141e', color: '#f4efe5', padding: 'clamp(80px,12vh,130px) 28px' }}>
        <div className="absolute pointer-events-none" style={{ top: '-30%', left: '-10%', width: '55%', height: '160%', background: 'radial-gradient(closest-side, rgba(179,135,63,0.15), transparent)' }} />
        <div data-reveal="" className="relative max-w-[900px] mx-auto text-center" style={revealStyle(24)}>
          <p className="font-serif font-normal" style={{ fontSize: 'clamp(23px,3.2vw,36px)', lineHeight: 1.34, letterSpacing: '-0.01em', margin: 0 }}>
            &ldquo;We never wanted to be the biggest firm in Connecticut. We wanted to be the one a family calls when everything is on the line, and the one that answers.&rdquo;
          </p>
          <div className="mt-7 font-bold" style={{ fontSize: '15px', color: '#cda35d', letterSpacing: '0.03em' }}>Margaret Ashford</div>
          <div className="mt-1" style={{ fontSize: '13px', color: 'rgba(244,239,229,0.55)', letterSpacing: '0.04em' }}>FOUNDING PARTNER</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f4efe5', padding: 'clamp(72px,10vh,120px) 28px' }}>
        <div data-reveal="" className="max-w-[760px] mx-auto text-center" style={revealStyle(24)}>
          <h2 className="font-serif font-medium" style={{ fontSize: 'clamp(28px,4.4vw,50px)', lineHeight: 1.1, letterSpacing: '-0.01em', margin: 0 }}>
            Meet the people behind the work.
          </h2>
          <div className="flex flex-wrap gap-3.5 justify-center mt-8">
            <a
              href="/attorneys"
              className="inline-flex items-center gap-2.5 no-underline font-bold transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#0d1a26', color: '#f4efe5', fontSize: '15px', padding: '16px 30px', borderRadius: '2px' }}
            >
              Meet our attorneys <span className="font-serif">&rarr;</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 no-underline font-semibold transition-all duration-200 hover:border-brass-400"
              style={{ background: 'transparent', color: '#0d1a26', fontSize: '15px', padding: '16px 28px', borderRadius: '2px', border: '1px solid rgba(13,26,38,0.25)' }}
            >
              Request a consultation
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
