interface PageHeroProps {
  breadcrumb: React.ReactNode;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  cta?: { label: string; href: string };
}

export default function PageHero({ breadcrumb, eyebrow, title, subtitle, cta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#0a141e', color: '#f4efe5' }}>
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(110% 90% at 85% -10%, rgba(179,135,63,0.2), transparent 55%), linear-gradient(165deg,#0c1824,#0a141e 60%,#0d1d2b)' }}
      />
      <div
        className="absolute top-0 right-0 bottom-0"
        style={{
          width: '42%',
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(179,135,63,0.09) 0 1px, transparent 1px 46px)',
          maskImage: 'linear-gradient(90deg,transparent,#000 45%)',
          WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 45%)',
          opacity: 0.7,
        }}
      />

      <div
        className="relative max-w-[1280px] mx-auto px-7"
        style={{ paddingTop: 'clamp(120px,17vh,170px)', paddingBottom: 'clamp(56px,8vh,84px)' }}
      >
        <div style={{ fontSize: '13px', letterSpacing: '0.04em', color: 'rgba(244,239,229,0.5)', animation: 'heroUp .7s both' }}>
          <a href="/" style={{ color: 'rgba(244,239,229,0.5)', textDecoration: 'none' }}>Home</a>{' '}
          <span style={{ color: '#b3873f' }}>/</span> {breadcrumb}
        </div>

        <div className="inline-flex items-center gap-3 mt-5" style={{ animation: 'heroUp .8s .06s both' }}>
          <span className="inline-block w-[34px] h-[1px] bg-brass-400" />
          <span className="font-bold" style={{ fontSize: '12.5px', letterSpacing: '0.3em', color: '#cda35d' }}>
            {eyebrow}
          </span>
        </div>

        <h1
          className="font-serif font-medium"
          style={{ fontSize: 'clamp(40px,6.4vw,80px)', lineHeight: 1.03, letterSpacing: '-0.015em', margin: '18px 0 0', animation: 'heroUp .9s .12s both' }}
        >
          {title}
        </h1>

        <p
          style={{ maxWidth: '560px', margin: '24px 0 0', fontSize: 'clamp(16px,1.5vw,19px)', lineHeight: 1.7, color: 'rgba(244,239,229,0.72)', animation: 'heroUp .9s .2s both' }}
        >
          {subtitle}
        </p>

        {cta && (
          <div style={{ marginTop: '32px', animation: 'heroUp .9s .28s both' }}>
            <a
              href={cta.href}
              className="inline-flex items-center gap-2.5 no-underline font-bold transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: '#b3873f', color: '#0a141e', fontSize: '15px', padding: '15px 28px', borderRadius: '2px', boxShadow: '0 14px 34px rgba(179,135,63,0.26)' }}
            >
              {cta.label} <span className="font-serif">&rarr;</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
