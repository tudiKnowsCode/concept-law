import PracticeAreaTemplate, { PracticeAreaData } from '@/components/PracticeAreaTemplate';

const data: PracticeAreaData = {
  eyebrow: 'CONNECTICUT · RESIDENTIAL & COMMERCIAL',
  title: 'Every transaction, closed with certainty.',
  subtitle: "Connecticut real estate is complex. Ashford & Vane makes sure your purchase, sale, or development move closes cleanly—with no surprises waiting on the other side.",
  approachTitle: 'One missed clause can cost more than the transaction.',
  approachBody: [
    "Real estate attorneys are sometimes treated as a formality. We treat them as the difference between a clean close and a lawsuit two years later. Every contract we review is read as if we are the one signing it.",
    "Our real estate partners handle Connecticut transactions from simple residential closings to multi-million-dollar commercial developments and contested land use proceedings. We know these courts and communities because they are ours.",
  ],
  subTitle: 'Real estate services',
  subpractices: [
    { num: '01', title: 'Residential Purchase & Sale',   body: 'Buyer and seller representation from contract to closing, including first-time homebuyers and investment properties.' },
    { num: '02', title: 'Commercial Transactions',       body: 'Office, retail, industrial, and multi-family acquisitions, dispositions, and financing.' },
    { num: '03', title: 'Land Use & Zoning',             body: 'Variances, special permits, zone changes, and appeals before Connecticut planning and zoning boards.' },
    { num: '04', title: 'Development & Construction',    body: 'Development agreements, construction contracts, and permit counsel for residential and commercial projects.' },
    { num: '05', title: 'Title Issues & Disputes',       body: 'Title defects, boundary disputes, easements, encroachments, and quiet title actions.' },
    { num: '06', title: 'Landlord-Tenant Matters',       body: 'Lease drafting, lease review, evictions, and commercial landlord-tenant disputes.' },
  ],
  stepsTitle: 'Our transaction process',
  steps: [
    { num: '01', title: 'Contract review',         body: 'We review and negotiate the purchase agreement before you are bound by terms that are difficult to undo.' },
    { num: '02', title: 'Due diligence',            body: 'We identify title issues, permit problems, and encumbrances before they become your problem.' },
    { num: '03', title: 'Pre-closing preparation', body: 'We coordinate with lenders, agents, and the other side to make sure every document is ready.' },
    { num: '04', title: 'Closing & title transfer', body: 'We attend the closing, review all final documents, and confirm the transfer is recorded correctly.' },
  ],
  faqs: [
    { q: 'Is a real estate attorney required for closings in Connecticut?', a: 'Yes. Connecticut requires an attorney to be present at real estate closings. Having your own attorney—not just the lender\'s—protects your specific interests throughout the transaction.' },
    { q: 'What is title insurance and do I need it?',                        a: 'Title insurance protects you against defects in ownership that existed before you purchased the property. We strongly recommend it for every transaction. We can walk you through what it covers.' },
    { q: 'What does a land use variance allow?',                             a: 'A variance allows a property to be used or developed in a way that does not strictly conform to local zoning regulations. We represent applicants and opponents before Connecticut zoning boards.' },
    { q: 'How does commercial real estate closing differ from residential?', a: 'Commercial transactions involve more due diligence (environmental, structural, rent rolls), more complex financing, longer timelines, and often more negotiation at every stage. We handle both with the same attention to detail.' },
    { q: 'What if the other side backs out of a real estate contract?',      a: 'Your remedies depend on the contract terms and the reason for the breach. Options include retaining the deposit, seeking specific performance, or suing for damages. We advise based on your specific contract.' },
  ],
  resultsHeading: 'Connecticut real estate matters, resolved.',
  results: [
    { amount: '$42M',   label: 'Commercial development — Hartford mixed-use project' },
    { amount: '$18M',   label: 'Multi-family portfolio acquisition — Fairfield County' },
    { amount: '300+',   label: 'Connecticut residential closings' },
  ],
  ctaTitle: 'Ready to close? Start here.',
  ctaBody: 'We handle Connecticut real estate transactions from straightforward closings to complex developments. Flat-fee residential closings available.',
  sidebarHeading: 'Talk to a real estate attorney.',
  sidebarBody: 'Flat-fee residential closings available. Call us before you sign anything.',
  sidebarCta: 'Schedule a consultation',
  sidebarPhone: '(860) 555-0191',
  sidebarPhoneLabel: 'Hartford · Mon–Fri 8am–6pm',
  quickStats: [
    { n: '300+',   l: 'CT closings' },
    { n: '$42M',   l: 'Largest transaction' },
    { n: '35 yrs', l: 'In practice' },
    { n: '2',      l: 'CT offices' },
  ],
  metadata: {
    title: 'Real Estate Law | Ashford & Vane LLP',
    description: 'Connecticut real estate attorneys for residential and commercial transactions, land use, development, and title disputes. Hartford and Stamford.',
  },
};

export const metadata = data.metadata;
export default function RealEstatePage() { return <PracticeAreaTemplate data={data} />; }
