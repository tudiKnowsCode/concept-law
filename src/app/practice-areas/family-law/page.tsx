import PracticeAreaTemplate, { PracticeAreaData } from '@/components/PracticeAreaTemplate';

const data: PracticeAreaData = {
  eyebrow: 'CONNECTICUT · HANDLED WITH DISCRETION',
  title: 'Resolved with resolve. Protected with discretion.',
  subtitle: "Family matters demand a different kind of attorney—one who leads clearly, communicates honestly, and never loses sight of what the outcome means for your children and your future.",
  approachTitle: "Your family's future requires a partner who leads, not just follows.",
  approachBody: [
    "Family law clients don't need an attorney who reacts to the other side. They need someone who builds a strategy, communicates it clearly, and executes it with discipline—even when emotions run high on both sides.",
    "Our family law partners understand that discretion and decisiveness are not opposites. We handle sensitive matters with care while never yielding an inch that matters to your outcome.",
  ],
  subTitle: 'Family law services',
  subpractices: [
    { num: '01', title: 'Divorce & Legal Separation',       body: 'Contested and uncontested divorce in Connecticut, from straightforward to high-asset and complex.' },
    { num: '02', title: 'Child Custody & Parenting Plans',  body: 'Legal and physical custody arrangements designed around the best interests of your children.' },
    { num: '03', title: 'Marital Property Division',        body: 'Equitable distribution of real estate, businesses, retirement accounts, and complex assets.' },
    { num: '04', title: 'Spousal Support & Alimony',        body: 'Negotiation and litigation of temporary and permanent alimony arrangements.' },
    { num: '05', title: 'Prenuptial & Postnuptial Agreements', body: 'Carefully drafted agreements that protect both parties and hold up to future scrutiny.' },
    { num: '06', title: 'Post-Decree Modifications',        body: 'Custody, support, and parenting plan modifications when circumstances have materially changed.' },
  ],
  stepsTitle: 'How we approach your case',
  steps: [
    { num: '01', title: 'Confidential consultation',  body: 'We listen. Everything you share is protected by attorney-client privilege from the first conversation.' },
    { num: '02', title: 'Strategy & goals',           body: 'We define your priorities, identify your strongest positions, and build a plan to achieve them.' },
    { num: '03', title: 'Negotiation & mediation',    body: 'We pursue the best resolution outside of court when it serves your interests—and protects your children from unnecessary conflict.' },
    { num: '04', title: 'Trial, when necessary',      body: 'When the other side is unreasonable, we are ready. Our family law partners are experienced trial attorneys.' },
  ],
  faqs: [
    { q: 'How long does a divorce take in Connecticut?',       a: 'An uncontested divorce can be finalized in as little as 90 days. Contested divorces typically take 12–24 months. High-asset or disputed custody cases can take longer. We will give you a realistic timeline.' },
    { q: 'How does Connecticut determine child custody?',      a: "Connecticut courts base custody on the best interests of the child, considering both parents' relationships with the child, stability, and parenting capacity. Joint custody is common but not automatic." },
    { q: 'What is equitable distribution in Connecticut?',     a: "Connecticut divides marital property 'equitably'—fairly, not necessarily equally. Courts consider the length of the marriage, each spouse's contributions, and each spouse's earning capacity, among other factors." },
    { q: 'Can I get alimony in Connecticut?',                  a: 'Yes. Alimony is available in Connecticut based on factors including the length of the marriage, the standard of living, and the ability of each spouse to support themselves. It is not automatic.' },
    { q: 'What happens to the family home in a divorce?',      a: 'Options include one spouse buying out the other, selling and dividing the proceeds, or a deferred-sale arrangement if children are involved. The right answer depends on your financial situation and goals.' },
  ],
  resultsHeading: 'Outcomes that protected Connecticut families.',
  results: [
    { amount: '$8.4M',  label: 'High-asset divorce — complex business valuation' },
    { amount: '$2.1M',  label: 'Equitable distribution — retirement and real estate' },
    { amount: '200+',   label: 'Connecticut families guided through family matters' },
  ],
  ctaTitle: 'You deserve counsel who leads.',
  ctaBody: "Free, confidential consultation. Tell us what's happening and we will tell you where you stand.",
  sidebarHeading: 'Speak with a family law partner.',
  sidebarBody: 'Every family law consultation is confidential and free. We will listen and respond honestly.',
  sidebarCta: 'Request a confidential consultation',
  sidebarPhone: '(860) 555-0191',
  sidebarPhoneLabel: 'Hartford · Mon–Fri 8am–6pm',
  quickStats: [
    { n: '200+',   l: 'Families helped' },
    { n: '35 yrs', l: 'In practice' },
    { n: '$8.4M',  l: 'Largest settlement' },
    { n: '2',      l: 'CT offices' },
  ],
  metadata: {
    title: 'Family Law | Ashford & Vane LLP',
    description: 'Connecticut family law attorneys. Divorce, child custody, property division, and spousal support — handled with discretion and resolve.',
  },
};

export const metadata = data.metadata;
export default function FamilyLawPage() { return <PracticeAreaTemplate data={data} />; }
