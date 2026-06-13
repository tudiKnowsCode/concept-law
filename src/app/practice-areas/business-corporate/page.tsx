import PracticeAreaTemplate, { PracticeAreaData } from '@/components/PracticeAreaTemplate';

const data: PracticeAreaData = {
  eyebrow: 'CONNECTICUT · HARTFORD & STAMFORD',
  title: 'Connecticut business counsel from formation to exit.',
  subtitle: "Whether you're starting a company, negotiating a deal, or defending a dispute, Ashford & Vane brings partner-led attention to every stage of your business.",
  approachTitle: 'Your business attorney should understand business.',
  approachBody: [
    "Too many business clients receive transactional advice without commercial judgment—attorneys who execute documents without asking whether the deal itself makes sense. We combine legal precision with an understanding of how Connecticut businesses actually operate.",
    "Every business matter at Ashford & Vane is led by a named partner with deep experience in Connecticut commerce. We do not hand your matter to an associate after the first meeting.",
  ],
  subTitle: 'Areas within business & corporate law',
  subpractices: [
    { num: '01', title: 'Business Formation & Structuring', body: 'LLC, S-Corp, C-Corp, and partnership formation with the right structure for your goals and tax situation.' },
    { num: '02', title: 'Mergers & Acquisitions',           body: 'Buy-side and sell-side representation through due diligence, negotiation, and closing.' },
    { num: '03', title: 'Contract Drafting & Review',       body: 'Commercial agreements, vendor contracts, NDAs, and licensing deals reviewed or drafted to protect your interests.' },
    { num: '04', title: 'Corporate Governance',             body: 'Operating agreements, shareholder agreements, board minutes, and equity arrangements kept current and enforceable.' },
    { num: '05', title: 'Commercial Litigation',            body: 'Breach of contract, business disputes, unfair competition, and partnership disagreements resolved efficiently.' },
    { num: '06', title: 'Business Succession Planning',     body: 'Structured transitions—family succession, management buyout, or third-party sale—planned years in advance.' },
  ],
  stepsTitle: 'How we counsel your business',
  steps: [
    { num: '01', title: 'Understand your business',    body: 'We start with your goals, your industry, and the specific matter—not a generic intake form.' },
    { num: '02', title: 'Build the right structure',   body: 'Whether it is a new entity, a transaction, or a dispute strategy, we design with your outcome in mind.' },
    { num: '03', title: 'Document with precision',     body: 'Every agreement we draft or review is written to hold—not just to close.' },
    { num: '04', title: 'Ongoing strategic counsel',   body: 'Clients who want a consistent legal partner can retain us for regular counsel as their business grows.' },
  ],
  faqs: [
    { q: 'Should I form an LLC or corporation in Connecticut?',  a: 'It depends on your goals. LLCs are flexible and pass through taxes; corporations are better for outside investment. We help you decide based on your specific business model, not a one-size-fits-all answer.' },
    { q: 'When should I hire a business attorney?',              a: 'Earlier than you think. The most expensive legal problems are ones that could have been avoided at formation or with a well-drafted agreement. Most business owners come to us too late.' },
    { q: 'How are commercial contract disputes typically resolved?', a: 'Most resolve through negotiation or mediation before reaching court. When litigation is necessary, Connecticut courts handle commercial matters efficiently. We always try to resolve disputes in the way that preserves your business relationships.' },
    { q: 'What does M&A counsel actually do?',                   a: 'We conduct due diligence on the target, negotiate purchase price adjustments and representations, draft the purchase agreement, and coordinate the closing. Our job is to protect your interests throughout a process designed to benefit the other side.' },
    { q: 'Do you represent both buyers and sellers?',            a: 'Yes. We represent both sides of transactions, never in the same deal. Our approach is the same: protect the client and close cleanly.' },
  ],
  resultsHeading: 'Outcomes that moved Connecticut businesses forward.',
  results: [
    { amount: '$310M',  label: 'Cross-border acquisition — Stamford technology company' },
    { amount: '$4.2M',  label: 'Commercial contract dispute — favorable verdict' },
    { amount: '45+',    label: 'Connecticut businesses formed and scaled' },
  ],
  ctaTitle: "Let's talk about where your business is going.",
  ctaBody: 'Initial consultations are free, confidential, and handled by a partner.',
  sidebarHeading: 'Talk to a business attorney.',
  sidebarBody: 'Transparent flat-fee and hourly arrangements. No surprise invoices.',
  sidebarCta: 'Schedule a consultation',
  sidebarPhone: '(860) 555-0191',
  sidebarPhoneLabel: 'Hartford · Mon–Fri 8am–6pm',
  quickStats: [
    { n: '35 yrs', l: 'In practice' },
    { n: '45+',    l: 'Businesses formed' },
    { n: '$310M',  l: 'Largest transaction' },
    { n: '2',      l: 'CT offices' },
  ],
  metadata: {
    title: 'Business & Corporate Law | Ashford & Vane LLP',
    description: 'Connecticut business attorneys for formation, M&A, contracts, and commercial litigation. Partner-led counsel in Hartford and Stamford.',
  },
};

export const metadata = data.metadata;
export default function BusinessCorporatePage() { return <PracticeAreaTemplate data={data} />; }
