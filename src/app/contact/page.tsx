import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';

const revealStyle = (y = 26): React.CSSProperties => ({
  opacity: 0,
  transform: `translateY(${y}px)`,
  transition: 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)',
});

const OFFICES = [
  {
    city: 'Hartford',
    address: '350 Asylum Street, Suite 1200',
    cityState: 'Hartford, CT 06103',
    phone: '(860) 555-0191',
    fax: '(860) 555-0192',
    hours: 'Mon – Fri: 8:00 am – 6:00 pm',
    note: 'Free parking in connected garage with validation.',
  },
  {
    city: 'Stamford',
    address: '1 Landmark Square, Suite 800',
    cityState: 'Stamford, CT 06901',
    phone: '(203) 555-0144',
    fax: '(203) 555-0145',
    hours: 'Mon – Fri: 8:30 am – 5:30 pm',
    note: 'Street parking and paid garage on Bedford Street.',
  },
];

export const metadata = {
  title: 'Contact | Ashford & Vane LLP',
  description: 'Contact Ashford & Vane LLP for a free consultation. Offices in Hartford and Stamford, Connecticut. Response within one business day.',
};

export default function ContactPage() {
  return (
    <div className="font-sans overflow-x-hidden" style={{ color: '#0d1a26', background: '#f4efe5' }}>
      <SiteNav active="contact" />

      <PageHero
        breadcrumb="Contact"
        eyebrow="HARTFORD & STAMFORD · FREE CONSULTATIONS"
        title="We answer the phone ourselves."
        subtitle="Whether you're ready to move forward or just have a question, a Connecticut attorney will respond within one business day."
      />

      {/* Form + sidebar */}
      <section style={{ background: '#f4efe5', padding: 'clamp(72px,10vh,120px) 28px' }}>
        <div
          className="max-w-[1280px] mx-auto"
          style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 'clamp(48px,6vw,90px)', alignItems: 'start' }}
        >
          {/* Form */}
          <div>
            <div data-reveal="" style={revealStyle()}>
              <div className="inline-flex items-center gap-3">
                <span className="inline-block w-[30px] h-[1px] bg-brass-400" />
                <span className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.26em', color: '#9a7438' }}>GET IN TOUCH</span>
              </div>
              <h2 className="font-serif font-medium mt-4" style={{ fontSize: 'clamp(26px,3.6vw,42px)', lineHeight: 1.12, margin: '18px 0 0' }}>
                Tell us about your situation.
              </h2>
              <p style={{ margin: '16px 0 0', fontSize: '16px', lineHeight: 1.72, color: '#46535f' }}>
                Complete the form below and a partner will contact you personally. Initial consultations are always confidential and always free.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Sidebar */}
          <div data-reveal="" data-delay="100" style={revealStyle()}>
            {OFFICES.map((office, i) => (
              <div
                key={office.city}
                style={{
                  background: '#fbf8f1',
                  border: '1px solid rgba(13,26,38,0.09)',
                  borderTop: '3px solid #b3873f',
                  padding: '28px 26px',
                  marginBottom: i < OFFICES.length - 1 ? '18px' : undefined,
                }}
              >
                <h3 className="font-serif font-semibold" style={{ fontSize: '22px', margin: '0 0 14px' }}>{office.city}</h3>
                <div className="grid gap-2" style={{ fontSize: '14.5px', color: '#46535f', lineHeight: 1.6 }}>
                  <div>
                    <div style={{ color: '#0d1a26' }}>{office.address}</div>
                    <div>{office.cityState}</div>
                  </div>
                  <div>
                    <span className="font-bold" style={{ fontSize: '12.5px', letterSpacing: '0.06em', color: '#2a3742' }}>PHONE </span>
                    <a href={`tel:${office.phone.replace(/[^+\d]/g, '')}`} className="no-underline hover:underline" style={{ color: '#46535f' }}>
                      {office.phone}
                    </a>
                  </div>
                  <div>
                    <span className="font-bold" style={{ fontSize: '12.5px', letterSpacing: '0.06em', color: '#2a3742' }}>FAX </span>
                    {office.fax}
                  </div>
                  <div>
                    <span className="font-bold" style={{ fontSize: '12.5px', letterSpacing: '0.06em', color: '#2a3742' }}>HOURS </span>
                    {office.hours}
                  </div>
                  <div style={{ fontSize: '13px', color: '#8b95a0', marginTop: '4px' }}>{office.note}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div
              className="relative overflow-hidden mt-5"
              style={{ height: '180px', background: 'linear-gradient(150deg,#15293a,#0d1a26)', border: '1px solid rgba(179,135,63,0.18)' }}
            >
              <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(179,135,63,0.05) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(179,135,63,0.05) 0 1px, transparent 1px 28px)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div style={{ fontSize: '24px', marginBottom: '6px' }}>📍</div>
                  <div className="font-bold" style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(244,239,229,0.45)' }}>
                    MAP · HARTFORD & STAMFORD
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(13,26,38,0.1)' }}>
              <div className="font-bold" style={{ fontSize: '11.5px', letterSpacing: '0.22em', color: '#9a7438' }}>EMAIL</div>
              <a href="mailto:contact@ashfordvane.com" className="block mt-1.5 no-underline hover:underline" style={{ fontSize: '15px', color: '#0d1a26' }}>
                contact@ashfordvane.com
              </a>
              <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#8b95a0', lineHeight: 1.5 }}>
                Contacting us by email does not create an attorney-client relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section style={{ background: '#0d1a26', color: '#f4efe5', padding: 'clamp(52px,7vh,76px) 28px' }}>
        <div className="max-w-[1280px] mx-auto grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          {[
            { title: 'Partner-led response',   body: 'A named partner reviews every intake — not a paralegal or intake coordinator.' },
            { title: 'Within one business day', body: 'We acknowledge every inquiry by the next business day, always.' },
            { title: 'Strictly confidential',  body: 'Your communication with us is protected by attorney-client privilege from the first message.' },
            { title: 'No obligation',           body: 'An initial conversation creates no commitment and costs you nothing.' },
          ].map((item, i) => (
            <div key={item.title} data-reveal="" data-delay={String(i * 70)} style={revealStyle(18)}>
              <div className="font-bold" style={{ fontSize: '12px', letterSpacing: '0.06em', color: '#cda35d' }}>{item.title}</div>
              <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.6, color: 'rgba(244,239,229,0.65)' }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
