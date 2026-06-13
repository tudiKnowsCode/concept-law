import PracticeAreaTemplate, { PracticeAreaData } from '@/components/PracticeAreaTemplate';

const data: PracticeAreaData = {
  eyebrow: 'CONNECTICUT · PLAN NOW, PROTECT EVERYTHING',
  title: 'Your estate plan is a gift to everyone you love.',
  subtitle: "An estate plan isn't about death—it's about making sure the people and things you've built are protected no matter what happens. Ashford & Vane has guided Connecticut families through this since 1991.",
  approachTitle: 'Every estate plan we draft is built to last.',
  approachBody: [
    "We see the same expensive mistakes over and over: beneficiary designations that contradict a will, trusts that were never funded, powers of attorney that lapsed. The documents matter less than whether they actually work together.",
    "Our estate planning partners take the time to understand your family, your assets, and your wishes before a single document is drafted. The plan we build will work the way you intended it to—even decades from now.",
  ],
  subTitle: 'Estate planning services',
  subpractices: [
    { num: '01', title: 'Wills & Last Testament',               body: 'Clearly drafted wills that reflect your wishes, minimize ambiguity, and hold up to contest.' },
    { num: '02', title: 'Revocable & Irrevocable Trusts',       body: 'Probate-avoiding trusts, special needs trusts, charitable trusts, and asset protection structures.' },
    { num: '03', title: 'Probate & Estate Administration',      body: 'Efficient administration of Connecticut estates, including contested matters and multi-state assets.' },
    { num: '04', title: 'Elder Law & Medicaid Planning',        body: 'Long-term care planning, Medicaid eligibility strategies, and nursing home asset protection.' },
    { num: '05', title: 'Powers of Attorney & Health Directives', body: 'Durable powers of attorney, healthcare proxies, and living wills that work when you need them most.' },
    { num: '06', title: 'Asset Protection Planning',            body: 'Structures that protect assets from future creditors, lawsuits, and divorce while maintaining control.' },
  ],
  stepsTitle: 'Our estate planning process',
  steps: [
    { num: '01', title: 'Goals conversation',    body: 'We discuss your family, your assets, and what you want to happen—on your terms.' },
    { num: '02', title: 'Plan design',           body: 'We design a plan that achieves your goals, minimizes taxes, and avoids probate where appropriate.' },
    { num: '03', title: 'Document preparation',  body: 'We draft, review with you, and execute all documents correctly the first time.' },
    { num: '04', title: 'Funding & ongoing review', body: 'We ensure your plan is funded, and we review it with you as your life changes.' },
  ],
  faqs: [
    { q: 'Do I need an estate plan if I am young and healthy?',   a: "Yes. Estate planning is for everyone who owns anything or cares for anyone. Without a will, Connecticut's intestacy laws decide what happens to your assets—not you." },
    { q: 'What is the Connecticut estate tax threshold?',          a: 'In 2026, Connecticut imposes an estate tax on estates over $13.61 million, aligned with the federal threshold. However, this changes with federal law. Your plan should account for future changes.' },
    { q: "What's the difference between a will and a trust?",     a: 'A will goes through probate—a public, court-supervised process. A funded revocable trust avoids probate entirely, is private, and distributes assets immediately. Many families benefit from both.' },
    { q: 'How often should I update my estate plan?',             a: 'Review it every three to five years, and any time you have a major life change: marriage, divorce, new child, death of a beneficiary, or significant change in assets.' },
    { q: "What happens if I die without a will in Connecticut?",  a: "Your assets pass under Connecticut's intestacy statute, which may not reflect your wishes. If you have minor children and no surviving spouse, the court appoints a guardian. Do not leave this to chance." },
  ],
  resultsHeading: 'Families protected across Connecticut.',
  results: [
    { amount: '$48M',   label: 'Estate administered for Hartford family' },
    { amount: '$3.2M',  label: 'Connecticut estate tax savings achieved' },
    { amount: '500+',   label: 'Estate plans drafted and funded' },
  ],
  ctaTitle: "Don't put it off another year.",
  ctaBody: 'The best time to create an estate plan was ten years ago. The second best time is now.',
  sidebarHeading: 'Start your plan today.',
  sidebarBody: 'Fixed-fee packages available for standard estate plans. Transparent pricing, no surprises.',
  sidebarCta: 'Schedule a consultation',
  sidebarPhone: '(860) 555-0191',
  sidebarPhoneLabel: 'Hartford · Mon–Fri 8am–6pm',
  quickStats: [
    { n: '500+',   l: 'Plans drafted' },
    { n: '35 yrs', l: 'In practice' },
    { n: '$48M',   l: 'Largest estate' },
    { n: '2',      l: 'CT offices' },
  ],
  metadata: {
    title: 'Estate Planning | Ashford & Vane LLP',
    description: 'Connecticut estate planning attorneys. Wills, trusts, probate, elder law, and asset protection. Hartford and Stamford offices.',
  },
};

export const metadata = data.metadata;
export default function EstatePlanningPage() { return <PracticeAreaTemplate data={data} />; }
