import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';

const revealStyle = (y = 26): React.CSSProperties => ({
  opacity: 0,
  transform: `translateY(${y}px)`,
  transition: 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)',
});

const SUBPRACTICES = [
  { num: '01', title: 'Motor Vehicle Accidents',    body: 'Car, truck, motorcycle, and pedestrian collisions across Connecticut highways and city streets.' },
  { num: '02', title: 'Medical Malpractice',        body: 'Surgical errors, misdiagnosis, birth injuries, and nursing-home negligence.' },
  { num: '03', title: 'Workplace Injuries',         body: 'Construction site falls, industrial accidents, and third-party claims beyond workers’ compensation.' },
  { num: '04', title: 'Premises Liability',         body: 'Slip-and-fall, inadequate security, swimming pool injuries, and dangerous property conditions.' },
  { num: '05', title: 'Wrongful Death',             body: 'Compassionate representation for families who have lost someone to another’s negligence.' },
  { num: '06', title: 'Product Liability',          body: 'Defective vehicles, pharmaceutical injuries, and dangerous consumer products.' },
];

const STEPS = [
  { num: '01', title: 'Free case evaluation',   body: 'You speak directly with a partner—not a paralegal—about your situation, at no charge.' },
  { num: '02', title: 'Investigation & evidence',body: 'We preserve evidence, secure expert witnesses, and reconstruct what happened before memories fade.' },
  { num: '03', title: 'Demand & negotiation',   body: 'We calculate the full value of your claim and present it to insurers on your terms.' },
  { num: '04', title: 'Trial, if needed',        body: 'If the insurer won’t be reasonable, we take it before a jury—and we win there, too.' },
];

const FAQS = [
  { q: 'How much does it cost to hire you?',              a: 'Personal injury cases are handled on a contingency-fee basis. You pay nothing unless we recover money for you. Our fee is a percentage of your recovery, agreed upon upfront.' },
  { q: 'How long does a personal injury case take?',      a: 'Most cases resolve within 6–18 months. Complex cases involving disputed liability or catastrophic injuries can take longer. We will give you a realistic timeline after we review your matter.' },
  { q: 'What if I was partially at fault?',               a: 'Connecticut follows modified comparative negligence. You can still recover as long as you were less than 51% at fault. Your damages are reduced by your percentage of fault.' },
  { q: 'Should I accept the insurance company’s offer?', a: 'Almost never without consulting an attorney first. Initial offers are typically far below the full value of a claim. Once you accept and sign a release, you cannot seek additional compensation.' },
  { q: 'What is the statute of limitations?',             a: 'In Connecticut, most personal injury claims must be filed within two years of the date of injury. Wrongful death claims have a two-year limit running from the date of death. Do not wait.' },
];

export const metadata = {
  title: 'Personal Injury | Ashford & Vane LLP',
  description: 'Connecticut personal injury attorneys. Motor vehicle accidents, medical malpractice, wrongful death, and more. No fee unless we recover.',
};

export default function PracticeAreaPage() {
  return (
    <div className="font-sans overflow-x-hidden" style={{ color: '#0d1a26', background: '#f4efe5' }}>
      <SiteNav active="practice-area" />

      <PageHero
        breadcrumb="Practice Areas"
        eyebrow="CONNECTICUT · NO FEE UNLESS WE RECOVER"
        title={<>Personal injury law,<br className="hidden sm:block" /> fought to the finish.</>}
        subtitle="When someone else's negligence changes your life, Ashford & Vane puts an experienced trial attorney in your corner from day one to verdict."
        cta={{ label: 'Free case evaluation', href: '/contact' }}
      />

      {/* Main content + sidebar */}
      <section style={{ background: '#f4efe5', padding: 'clamp(72px,10vh,120px) 28px' }}>
        <div
          className="max-w-[1280px] mx-auto"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 'clamp(40px,5vw,80px)', alignItems: 'start' }}
        >
          {/* Main */}
          <div>
            <div data-reveal="" style={revealStyle()}>
              <div className="inline-flex items-center gap-3">
                <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
                <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>OUR APPROACH</span>
              </div>
              <h2 className="font-serif font-medium mt-4" style={{ fontSize: 'clamp(26px,3.4vw,42px)', lineHeight: 1.14, margin: '18px 0 0' }}>
                Your injury is not a file number.
              </h2>
              <p style={{ margin: '20px 0 0', fontSize: '16.5px', lineHeight: 1.78, color: '#46535f' }}>
                Most Connecticut personal injury firms settle. They move volume. We were built for the cases that matter—the ones where the insurance company knows a real trial is on the table if they don’t offer fair compensation.
              </p>
              <p style={{ margin: '16px 0 0', fontSize: '16.5px', lineHeight: 1.78, color: '#46535f' }}>
                From the first call, you work directly with a named partner. We invest our own resources in investigation, expert retention, and preparation because we believe every case should be built as if it’s going in front of a jury—whether or not it does.
              </p>
            </div>

            {/* Sub-practice grid */}
            <div data-reveal="" data-delay="80" style={{ ...revealStyle(), marginTop: '52px' }}>
              <h2 className="font-serif font-semibold" style={{ fontSize: 'clamp(22px,2.6vw,32px)', margin: '0 0 28px' }}>
                Areas within personal injury
              </h2>
              <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
                {SUBPRACTICES.map((sp) => (
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
                How we handle your case
              </h2>
              <div className="grid gap-0">
                {STEPS.map((step, i) => (
                  <div
                    key={step.num}
                    className="grid gap-6"
                    style={{
                      gridTemplateColumns: '64px 1fr',
                      padding: '22px 0',
                      borderTop: '1px solid rgba(13,26,38,0.1)',
                      borderBottom: i === STEPS.length - 1 ? '1px solid rgba(13,26,38,0.1)' : undefined,
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
              <FaqAccordion items={FAQS} />
            </div>
          </div>

          {/* Sticky sidebar */}
          <div style={{ position: 'sticky', top: '96px' }}>
            <div
              style={{
                background: '#0d1a26',
                color: '#f4efe5',
                padding: '36px 30px',
                border: '1px solid rgba(179,135,63,0.2)',
              }}
            >
              <div className="font-bold" style={{ fontSize: '11.5px', letterSpacing: '0.22em', color: '#cda35d' }}>FREE CONSULTATION</div>
              <h3 className="font-serif font-semibold mt-3" style={{ fontSize: '24px', lineHeight: 1.2, margin: '12px 0 0' }}>
                Talk to a partner today.
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.65, color: 'rgba(244,239,229,0.72)', margin: '14px 0 0' }}>
                No fee unless we recover. No obligation for an initial conversation.
              </p>
              <a
                href="/contact"
                className="block no-underline font-bold text-center mt-6 transition-all duration-200 hover:-translate-y-px"
                style={{ background: '#b3873f', color: '#0a141e', fontSize: '15px', padding: '15px', borderRadius: '2px' }}
              >
                Request a free evaluation
              </a>
              <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(244,239,229,0.1)' }}>
                <div className="font-bold" style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(244,239,229,0.4)' }}>CALL DIRECTLY</div>
                <a href="tel:18605550191" className="no-underline block mt-2 font-serif font-semibold" style={{ fontSize: '22px', color: '#f4efe5' }}>
                  (860) 555-0191
                </a>
                <div style={{ fontSize: '13px', color: 'rgba(244,239,229,0.5)', marginTop: '4px' }}>Hartford &middot; Mon&ndash;Fri 8am&ndash;6pm</div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { n: '$480M+', l: 'Recovered' },
                { n: '35 yrs', l: 'In practice' },
                { n: '98%',    l: 'Client satisfaction' },
                { n: '120+',   l: 'Verdicts & settlements' },
              ].map((s) => (
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
              Results our clients didn&rsquo;t think possible.
            </h2>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {[
              { amount: '$6.2M', label: 'Traumatic brain injury — motor vehicle collision' },
              { amount: '$4.8M', label: 'Surgical malpractice — nerve damage' },
              { amount: '$3.1M', label: 'Construction fall — premises liability' },
            ].map((r, i) => (
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
            Your consultation is free.<br />Your case is not a gamble.
          </h2>
          <p style={{ marginTop: '18px', fontSize: '17px', lineHeight: 1.7, color: '#46535f' }}>
            We take personal injury cases on contingency. You pay nothing unless we recover.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 no-underline font-bold mt-8 transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: '#0d1a26', color: '#f4efe5', fontSize: '15px', padding: '16px 32px', borderRadius: '2px' }}
          >
            Get a free case evaluation <span className="font-serif">&rarr;</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
