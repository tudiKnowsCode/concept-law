import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

// ─── Static data ────────────────────────────────────────────────────────────

const CREDENTIALS = [
  'HARTFORD & STAMFORD',
  'EST. 1991',
  '$480M+ RECOVERED',
  'SUPER LAWYERS',
  'MARTINDALE-HUBBELL AV RATED',
  'BEST LAWYERS IN AMERICA®',
  '5,000+ CLIENTS REPRESENTED',
  'CT LAW TRIBUNE TOP FIRM',
];

const PRACTICE_AREAS = [
  { num: '01', name: 'Personal Injury',      sub: 'Catastrophic injury · Auto & truck · Medical malpractice · Wrongful death' },
  { num: '02', name: 'Business & Corporate', sub: 'Formation · M&A · Contracts · Governance · Commercial litigation' },
  { num: '03', name: 'Estate Planning',      sub: 'Wills · Trusts · Probate · Elder law · Asset protection' },
  { num: '04', name: 'Family Law',           sub: 'Divorce · Custody · Complex marital estates · Handled with discretion' },
  { num: '05', name: 'Real Estate',          sub: 'Residential & commercial transactions · Land use · Development' },
  { num: '06', name: 'Criminal Defense',     sub: 'State & federal · Protects your record, your freedom, your future' },
];

const ATTORNEYS = [
  { name: 'Margaret Ashford', title: 'FOUNDING PARTNER',  specialty: 'Trial · Personal Injury' },
  { name: 'Daniel Vane',      title: 'MANAGING PARTNER',  specialty: 'Business & Corporate' },
  { name: 'Priya Raman',      title: 'PARTNER',           specialty: 'Estate & Elder Law' },
];

const INSIGHTS = [
  { category: 'PERSONAL INJURY', date: 'MAR 2026', title: 'What to do in the first 48 hours after a serious crash in CT' },
  { category: 'ESTATE PLANNING', date: 'FEB 2026', title: 'Five estate-planning mistakes Connecticut families still make' },
  { category: 'BUSINESS',        date: 'JAN 2026', title: 'Selling your CT business? Start the legal work 18 months out' },
];

// Shared inline-style helpers
const revealStyle = (y = 28): React.CSSProperties => ({
  opacity: 0,
  transform: `translateY(${y}px)`,
  transition: 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)',
});

const NOISE_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="font-sans overflow-x-hidden" style={{ color: '#0d1a26', background: '#f4efe5' }}>
      <SiteNav active="home" />

      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden flex flex-col justify-center"
        style={{ background: '#0a141e', color: '#f4efe5', minHeight: '92vh' }}
      >
        {/* Gradient backdrop */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(165deg,#0c1824 0%,#0a141e 50%,#0d1d2b 100%)' }} />

        {/* Breathing brass glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(90% 70% at 60% 30%, rgba(179,135,63,0.28), transparent 60%)',
            animation: 'glowBreathe 7s ease-in-out infinite',
          }}
        />

        {/* Parallax grid lines */}
        <div
          data-parallax="0.14"
          className="absolute top-0 right-0 bottom-0"
          style={{
            width: '55%',
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(179,135,63,0.10) 0 1px, transparent 1px 52px)',
            maskImage: 'linear-gradient(90deg,transparent 0%,rgba(0,0,0,0.6) 30%,rgba(0,0,0,0.9) 100%)',
            WebkitMaskImage: 'linear-gradient(90deg,transparent 0%,rgba(0,0,0,0.6) 30%,rgba(0,0,0,0.9) 100%)',
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0"
          style={{ opacity: 0.05, mixBlendMode: 'overlay', backgroundImage: NOISE_BG }}
        />

        {/* Content */}
        <div className="relative max-w-[1280px] mx-auto px-7 w-full text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3.5" style={{ animation: 'heroUp .7s .05s both' }}>
            <span className="inline-block h-[1px] w-9 bg-brass-400" />
            <span className="font-bold whitespace-nowrap text-brass-300" style={{ fontSize: '12px', letterSpacing: '0.28em' }}>
              HARTFORD &amp; STAMFORD &middot; CT
            </span>
            <span className="inline-block h-[1px] w-9 bg-brass-400" />
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-medium"
            style={{
              fontSize: 'clamp(46px,8vw,104px)',
              lineHeight: 0.98,
              letterSpacing: '-0.02em',
              margin: '26px 0 0',
              animation: 'heroUp .95s .12s both',
            }}
          >
            Connecticut&rsquo;s counsel
            <br />
            for what <em style={{ color: '#cda35d' }}>matters most.</em>
          </h1>

          {/* Sub-copy */}
          <p
            className="mx-auto mt-8"
            style={{
              maxWidth: '560px',
              fontSize: 'clamp(16px,1.5vw,19px)',
              lineHeight: 1.72,
              color: 'rgba(244,239,229,0.7)',
              animation: 'heroUp .9s .22s both',
            }}
          >
            From the courtroom to the boardroom, Ashford &amp; Vane brings thirty-five years of principled,
            relentless advocacy to the families and businesses of Connecticut.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3.5 justify-center mt-9" style={{ animation: 'heroUp .9s .3s both' }}>
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 no-underline font-bold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: '#b3873f',
                color: '#0a141e',
                fontSize: '15px',
                letterSpacing: '0.02em',
                padding: '16px 30px',
                borderRadius: '2px',
                boxShadow: '0 16px 36px rgba(179,135,63,0.3)',
              }}
            >
              Request a Free Consultation
            </a>
            <a
              href="/practice-area"
              className="inline-flex items-center gap-2.5 no-underline font-semibold transition-all duration-200 hover:border-[rgba(205,163,93,0.7)]"
              style={{
                background: 'transparent',
                color: '#f4efe5',
                fontSize: '15px',
                padding: '16px 28px',
                borderRadius: '2px',
                border: '1px solid rgba(244,239,229,0.26)',
              }}
            >
              Explore Practice Areas
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: 'cueDrop 2.4s ease-in-out infinite' }}
        >
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(244,239,229,0.45)' }}>SCROLL</span>
          <span className="w-[1px] h-6 block" style={{ background: 'linear-gradient(#b3873f,transparent)' }} />
        </div>
      </section>

      {/* ===== CREDENTIAL MARQUEE ===== */}
      <div
        className="overflow-hidden"
        style={{
          background: '#0d1a26',
          borderTop: '1px solid rgba(179,135,63,0.3)',
          borderBottom: '1px solid rgba(179,135,63,0.3)',
          padding: '18px 0',
        }}
      >
        <div
          className="inline-flex items-center whitespace-nowrap"
          style={{ animation: 'ticker 36s linear infinite' }}
        >
          {[0, 1].map((set) => (
            <span key={set} className="inline-flex items-center">
              {CREDENTIALS.map((cred) => (
                <span key={cred} className="inline-flex items-center">
                  <span
                    className="font-bold"
                    style={{ fontSize: '12px', letterSpacing: '0.22em', color: 'rgba(244,239,229,0.55)', padding: '0 32px' }}
                  >
                    {cred}
                  </span>
                  <span style={{ color: '#b3873f', fontSize: '14px' }}>&bull;</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ===== FIRM INTRO ===== */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#f4efe5', padding: 'clamp(90px,14vh,160px) 28px' }}
      >
        {/* "1991" watermark */}
        <div
          className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-serif font-bold leading-none select-none pointer-events-none"
          style={{
            fontSize: 'clamp(140px,28vw,380px)',
            color: 'rgba(13,26,38,0.04)',
            letterSpacing: '-0.04em',
          }}
        >
          1991
        </div>

        <div className="relative max-w-[1180px] mx-auto">
          <div data-reveal="" style={revealStyle()}>
            <h2
              className="font-serif font-medium text-navy-700"
              style={{ fontSize: 'clamp(34px,5.8vw,76px)', lineHeight: 1.04, letterSpacing: '-0.02em', maxWidth: '16ch', margin: 0 }}
            >
              A firm built on judgment, not just verdicts.
            </h2>
          </div>

          <div
            data-reveal=""
            data-delay="140"
            className="grid gap-8 mt-11"
            style={{
              ...revealStyle(24),
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              maxWidth: '920px',
            }}
          >
            <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.8, color: '#46535f' }}>
              Since 1991, Ashford &amp; Vane has represented Connecticut through its most consequential moments.
              The injury that changes everything. The merger that defines a company. The estate that protects a family&rsquo;s legacy.
            </p>
            <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.8, color: '#46535f' }}>
              Every matter is led by a named partner. Every strategy is built to win, and to last. We pair the resources
              of a large practice with the attention of a firm that knows your name.
            </p>
          </div>

          <div data-reveal="" data-delay="200" style={{ ...revealStyle(20), marginTop: '36px' }}>
            <a
              href="/about"
              className="inline-flex items-center gap-2.5 no-underline font-bold pb-1 transition-[gap] duration-200 hover:gap-4"
              style={{ color: '#9a7438', fontSize: '15px', letterSpacing: '0.02em', borderBottom: '1px solid rgba(154,116,56,0.4)' }}
            >
              Read our story <span className="font-serif">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== PRACTICE AREAS ===== */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#0d1a26', color: '#f4efe5', padding: 'clamp(90px,13vh,150px) 28px' }}
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0"
          style={{ opacity: 0.04, mixBlendMode: 'overlay', backgroundImage: NOISE_BG }}
        />

        <div className="relative max-w-[1080px] mx-auto">
          <div
            data-reveal=""
            className="flex flex-wrap justify-between items-end gap-4 mb-3.5"
            style={revealStyle(22)}
          >
            <h2
              className="font-serif font-medium"
              style={{ fontSize: 'clamp(30px,4.4vw,54px)', lineHeight: 1.06, letterSpacing: '-0.015em', margin: 0 }}
            >
              Six practices.<br />One standard.
            </h2>
            <p style={{ margin: 0, maxWidth: '340px', fontSize: '15.5px', lineHeight: 1.7, color: 'rgba(244,239,229,0.6)' }}>
              Full-service representation across the matters that shape Connecticut lives and businesses,
              each led by attorneys who do nothing else.
            </p>
          </div>

          <div data-reveal="" data-delay="100" style={{ ...revealStyle(18), marginTop: '40px' }}>
            {PRACTICE_AREAS.map((pa, i) => (
              <a
                key={pa.num}
                href="/practice-area"
                className="pa-item flex items-center no-underline text-ivory pl-4 pr-4"
                style={{
                  gap: 'clamp(16px,3vw,40px)',
                  padding: `clamp(20px,3vh,30px) 16px`,
                  borderTop: '1px solid rgba(244,239,229,0.12)',
                  borderBottom: i === PRACTICE_AREAS.length - 1 ? '1px solid rgba(244,239,229,0.12)' : undefined,
                }}
              >
                <span
                  className="font-serif font-semibold text-brass-400 shrink-0 leading-none"
                  style={{ fontSize: 'clamp(36px,5vw,56px)', width: 'clamp(54px,7vw,80px)' }}
                >
                  {pa.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-serif font-medium" style={{ fontSize: 'clamp(20px,2.6vw,30px)', lineHeight: 1.1 }}>
                    {pa.name}
                  </div>
                  <div className="mt-1.5" style={{ fontSize: '14px', color: 'rgba(244,239,229,0.5)' }}>
                    {pa.sub}
                  </div>
                </div>
                <span
                  className="pa-arrow font-serif text-brass-400 shrink-0 opacity-0 transition-opacity duration-300"
                  style={{ fontSize: 'clamp(22px,3vw,34px)' }}
                >
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESULTS: GIANT NUMBER ===== */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#08111a', color: '#f4efe5', padding: 'clamp(90px,13vh,150px) 28px' }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-10%', right: '-5%', width: '70%', height: '120%',
            background: 'radial-gradient(closest-side, rgba(179,135,63,0.14), transparent)',
          }}
        />

        <div className="relative max-w-[1280px] mx-auto">
          {/* Giant counter + quote */}
          <div
            data-reveal=""
            className="flex flex-wrap gap-6 items-end"
            style={revealStyle(22)}
          >
            <div>
              <div
                className="font-serif font-semibold"
                style={{ fontSize: 'clamp(80px,17vw,230px)', lineHeight: 0.88, letterSpacing: '-0.04em', color: '#f4efe5' }}
              >
                <span data-counter="" data-target="480" data-prefix="$" data-suffix="M+">$480M+</span>
              </div>
              <div style={{ fontSize: '13px', letterSpacing: '0.18em', color: 'rgba(244,239,229,0.5)', marginTop: '20px', textTransform: 'uppercase' }}>
                Recovered for Connecticut clients
              </div>
            </div>
            <p
              className="font-serif italic"
              style={{
                flex: '1 1 280px', maxWidth: '400px', margin: '0 0 8px',
                fontSize: 'clamp(19px,2vw,24px)', lineHeight: 1.5,
                color: 'rgba(244,239,229,0.65)',
              }}
            >
              Behind every number is a person we fought for. A family, a business, a life that deserved a better outcome.
            </p>
          </div>

          {/* Result cards */}
          <div
            className="mt-16 grid border border-[rgba(244,239,229,0.1)]"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
          >
            {[
              { target: 24.5, prefix: '$', suffix: 'M', decimals: '1', label: 'VERDICT',      desc: 'Catastrophic trucking collision, Hartford County',        delay: '0' },
              { target: 7.2,  prefix: '$', suffix: 'M', decimals: '1', label: 'SETTLEMENT',   desc: 'Medical malpractice, delayed cancer diagnosis',            delay: '90' },
              { target: 310,  prefix: '$', suffix: 'M', decimals: '0', label: 'TRANSACTION',  desc: 'Cross-border acquisition, Stamford technology client',     delay: '180' },
            ].map((card, i) => (
              <div
                key={card.label}
                data-reveal=""
                data-delay={card.delay}
                style={{
                  ...revealStyle(18),
                  padding: '30px 28px',
                  borderRight: i < 2 ? '1px solid rgba(244,239,229,0.1)' : undefined,
                }}
              >
                <div className="font-serif font-semibold" style={{ fontSize: 'clamp(32px,4vw,48px)', color: '#f4efe5' }}>
                  <span
                    data-counter=""
                    data-target={card.target}
                    data-prefix={card.prefix}
                    data-suffix={card.suffix}
                    data-decimals={card.decimals}
                  >
                    {card.prefix}{card.target}{card.suffix}
                  </span>
                </div>
                <div className="font-bold mt-3" style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#9a7438' }}>
                  {card.label}
                </div>
                <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.6, color: 'rgba(244,239,229,0.58)' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <a
            href="/results"
            className="inline-flex items-center gap-2.5 no-underline font-bold mt-9 pb-1"
            style={{ color: '#cda35d', fontSize: '15px', letterSpacing: '0.02em', borderBottom: '1px solid rgba(205,163,93,0.4)' }}
          >
            See all case results <span className="font-serif">&rarr;</span>
          </a>
        </div>
      </section>

      {/* ===== ATTORNEYS TEASER ===== */}
      <section style={{ background: '#f4efe5', padding: 'clamp(90px,13vh,150px) 28px' }}>
        <div className="max-w-[1280px] mx-auto">
          <div
            data-reveal=""
            className="flex flex-wrap justify-between items-end gap-5 mb-11"
            style={revealStyle(22)}
          >
            <h2
              className="font-serif font-medium"
              style={{ fontSize: 'clamp(28px,4.2vw,52px)', lineHeight: 1.08, letterSpacing: '-0.015em', margin: 0 }}
            >
              Counsel you&rsquo;ll know by name
            </h2>
            <a
              href="/attorneys"
              className="no-underline font-bold pb-1"
              style={{ color: '#9a7438', fontSize: '15px', borderBottom: '1px solid rgba(154,116,56,0.4)' }}
            >
              All attorneys &rarr;
            </a>
          </div>

          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {ATTORNEYS.map((att, i) => (
              <a
                key={att.name}
                data-reveal=""
                data-delay={String(i * 80)}
                href="/attorneys"
                className="flex items-center gap-5 p-[22px] no-underline text-navy-700 rounded-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(13,26,38,0.10)]"
                style={{
                  ...revealStyle(20),
                  background: '#fbf8f1',
                  border: '1px solid rgba(13,26,38,0.08)',
                }}
              >
                {/* Portrait placeholder */}
                <div
                  className="shrink-0 relative overflow-hidden rounded-sm"
                  style={{
                    width: '74px', height: '74px',
                    background: 'linear-gradient(135deg,#15293a,#0a141e)',
                    border: '1px solid rgba(179,135,63,0.28)',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(179,135,63,0.09) 0 1px, transparent 1px 18px)' }}
                  />
                </div>
                <div>
                  <div className="font-serif font-semibold" style={{ fontSize: '20px' }}>{att.name}</div>
                  <div className="font-bold mt-1" style={{ fontSize: '11.5px', letterSpacing: '0.04em', color: '#9a7438' }}>
                    {att.title}
                  </div>
                  <div className="mt-1 text-slate-600" style={{ fontSize: '13.5px' }}>{att.specialty}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section
        className="border-t border-[rgba(13,26,38,0.06)]"
        style={{ background: '#fbf8f1', padding: 'clamp(90px,13vh,150px) 28px' }}
      >
        <div
          data-reveal=""
          className="max-w-[1000px] mx-auto"
          style={revealStyle(22)}
        >
          <div
            className="font-serif italic text-brass-400"
            style={{ fontSize: '80px', lineHeight: 0, height: '36px', marginBottom: '26px' }}
          >
            &ldquo;
          </div>
          <p
            className="font-serif font-normal text-navy-700"
            style={{ fontSize: 'clamp(26px,3.6vw,42px)', lineHeight: 1.3, letterSpacing: '-0.01em', margin: 0 }}
          >
            They treated my family&rsquo;s case as if it were their own. When the other side realized
            Ashford &amp; Vane was ready to try it, everything changed.
          </p>
          <div className="flex items-center gap-3.5 mt-9">
            <div
              className="w-11 h-11 rounded-full shrink-0"
              style={{ background: 'linear-gradient(135deg,#15293a,#0a141e)', border: '1px solid rgba(179,135,63,0.35)' }}
            />
            <div>
              <div className="font-bold" style={{ fontSize: '15px' }}>Karen M.</div>
              <div className="text-slate-600 mt-0.5" style={{ fontSize: '13px' }}>Personal Injury Client · West Hartford</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSIGHTS TEASER ===== */}
      <section style={{ background: '#f4efe5', padding: 'clamp(90px,13vh,150px) 28px' }}>
        <div className="max-w-[1280px] mx-auto">
          <div
            data-reveal=""
            className="flex flex-wrap justify-between items-end gap-5 mb-11"
            style={revealStyle(22)}
          >
            <h2
              className="font-serif font-medium"
              style={{ fontSize: 'clamp(28px,4.2vw,52px)', lineHeight: 1.08, letterSpacing: '-0.015em', margin: 0 }}
            >
              From our desk
            </h2>
            <a
              href="/insights"
              className="no-underline font-bold pb-1"
              style={{ color: '#9a7438', fontSize: '15px', borderBottom: '1px solid rgba(154,116,56,0.4)' }}
            >
              All insights &rarr;
            </a>
          </div>

          <div className="grid gap-7" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))' }}>
            {INSIGHTS.map((article, i) => (
              <a
                key={article.title}
                data-reveal=""
                data-delay={String(i * 90)}
                href="/insights"
                className="no-underline text-navy-700 block group transition-colors duration-200"
                style={revealStyle(20)}
              >
                {/* Article image placeholder */}
                <div
                  className="relative overflow-hidden rounded-sm"
                  style={{ aspectRatio: '16/10', background: 'linear-gradient(150deg,#1c3346,#0d1a26)', border: '1px solid rgba(13,26,38,0.1)' }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(179,135,63,0.08) 0 1px, transparent 1px 30px)' }}
                  />
                </div>
                <div className="font-bold mt-4" style={{ fontSize: '11.5px', letterSpacing: '0.1em', color: '#9a7438' }}>
                  {article.category} &middot; {article.date}
                </div>
                <h3
                  className="font-serif font-semibold mt-2 group-hover:text-brass-600 transition-colors duration-200"
                  style={{ fontSize: '21px', lineHeight: 1.25, margin: '9px 0 0' }}
                >
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#0a141e', color: '#f4efe5', padding: 'clamp(100px,15vh,180px) 28px' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(90% 110% at 50% 110%, rgba(179,135,63,0.22), transparent 55%)' }}
        />
        <div
          data-reveal=""
          className="relative max-w-[900px] mx-auto text-center"
          style={revealStyle(26)}
        >
          <h2
            className="font-serif font-medium"
            style={{ fontSize: 'clamp(36px,6.4vw,82px)', lineHeight: 1.01, letterSpacing: '-0.02em', margin: 0 }}
          >
            Tell us what happened.
            <br />
            <em style={{ color: '#cda35d' }}>We&rsquo;ll tell you where you stand.</em>
          </h2>
          <p
            className="mx-auto mt-7"
            style={{ maxWidth: '500px', fontSize: '17px', lineHeight: 1.72, color: 'rgba(244,239,229,0.65)' }}
          >
            Every consultation is confidential, candid, and free. Reach a Connecticut attorney today, not a call center.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center mt-10">
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 no-underline font-bold transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: '#b3873f',
                color: '#0a141e',
                fontSize: '16px',
                letterSpacing: '0.02em',
                padding: '18px 36px',
                borderRadius: '2px',
                boxShadow: '0 16px 40px rgba(179,135,63,0.32)',
              }}
            >
              Request a Consultation <span className="font-serif">&rarr;</span>
            </a>
            <a
              href="tel:+18605550182"
              className="inline-flex items-center gap-2.5 no-underline font-semibold transition-all duration-200 hover:border-[rgba(205,163,93,0.7)]"
              style={{
                background: 'transparent',
                color: '#f4efe5',
                fontSize: '16px',
                padding: '18px 30px',
                borderRadius: '2px',
                border: '1px solid rgba(244,239,229,0.24)',
              }}
            >
              Call (860) 555-0182
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
