import PracticeAreaTemplate, { PracticeAreaData } from '@/components/PracticeAreaTemplate';

const data: PracticeAreaData = {
  eyebrow: 'CONNECTICUT STATE & FEDERAL · CALL US FIRST',
  title: 'Your freedom is not negotiable.',
  subtitle: "A criminal charge—even an investigation—requires immediate, experienced counsel. Ashford & Vane's criminal defense partners are available now and ready to fight.",
  heroCta: { label: 'Call us immediately', href: '/contact' },
  approachTitle: 'The moment you are investigated is the moment you need us.',
  approachBody: [
    "Most people make their most damaging legal mistakes before they hire an attorney—speaking to investigators, consenting to searches, or waiting to see if things resolve on their own. They do not. Early intervention is the single most important factor in criminal defense outcomes.",
    "Our criminal defense partners have tried cases in Connecticut state courts and federal district courts. We do not recommend a plea until we know your case as well as the prosecution does.",
  ],
  subTitle: 'Criminal defense practice areas',
  subpractices: [
    { num: '01', title: 'Felony Defense',                  body: 'Assault, robbery, drug offenses, weapons charges, and other serious felonies in Connecticut Superior Court.' },
    { num: '02', title: 'Misdemeanor Defense',             body: 'Disorderly conduct, breach of peace, trespass, and other misdemeanors that still carry real consequences.' },
    { num: '03', title: 'Federal Criminal Cases',          body: 'Drug conspiracy, fraud, weapons, and other federal charges in the District of Connecticut.' },
    { num: '04', title: 'DUI & Motor Vehicle Offenses',    body: 'DUI/OUI defense, license suspension hearings, and serious motor vehicle charges across Connecticut.' },
    { num: '05', title: 'White-Collar & Financial Crimes', body: 'Fraud, embezzlement, money laundering, tax crimes, and regulatory violations.' },
    { num: '06', title: 'Appeals & Post-Conviction Relief', body: 'Direct appeals, habeas corpus, sentence modifications, and record erasure under Connecticut law.' },
  ],
  stepsTitle: 'What happens when you call us',
  steps: [
    { num: '01', title: 'Immediate response',           body: 'We answer. You speak with a criminal defense attorney—not an intake coordinator—at any hour.' },
    { num: '02', title: 'Evidence & investigation',     body: 'We secure your rights, preserve evidence, and examine what the prosecution actually has.' },
    { num: '03', title: 'Defense strategy',             body: 'We build a defense around the facts, your history, and the specific charges—not a default approach.' },
    { num: '04', title: 'Negotiated resolution or trial', body: 'We pursue every available resolution. If trial is the best path, we are trial lawyers. We have walked that road many times.' },
  ],
  faqs: [
    { q: 'What should I do if I am arrested?',                  a: 'Stay calm. Do not resist. Do not answer questions beyond providing your name and identification. Immediately invoke your right to an attorney and call us. Anything you say can and will be used against you.' },
    { q: 'Should I talk to the police?',                        a: 'No—not without your attorney present. Even innocent statements can be taken out of context or used to build a case. Your right to remain silent is your most important right.' },
    { q: 'What is the difference between a felony and misdemeanor in CT?', a: 'Felonies carry more than one year in state prison; misdemeanors carry up to one year in a local jail. The distinction affects your record, your rights, and your future employment. Both deserve serious defense.' },
    { q: 'What happens at a Connecticut bail hearing?',         a: 'A judge sets conditions of release based on flight risk and public safety. We advocate for the lowest possible bond and present factors that support your release. In federal court, bail hearings operate under different rules.' },
    { q: 'Do I have to go to trial?',                           a: 'No. Many cases resolve through dismissal, reduced charges, or plea agreements that protect your record. We do not recommend a plea unless we believe it is genuinely in your interest—and we explain exactly why.' },
  ],
  resultsHeading: 'Cases dismissed. Records protected. Lives preserved.',
  results: [
    { amount: 'Acquitted', label: 'Federal fraud trial — District of Connecticut' },
    { amount: 'Dismissed', label: 'Felony assault — evidence suppressed on Fourth Amendment grounds' },
    { amount: 'Reduced',   label: 'DUI with injury — negotiated to misdemeanor with no jail time' },
  ],
  ctaTitle: <>Do not wait.<br />Call us today.</>,
  ctaBody: 'The earlier we are involved, the better your outcome. Free and confidential initial consultations, available now.',
  sidebarHeading: 'Available 24 hours a day.',
  sidebarBody: 'Criminal charges do not wait for business hours. Neither do we.',
  sidebarCta: 'Call us immediately',
  sidebarPhone: '(860) 555-0191',
  sidebarPhoneLabel: 'Available 24/7 for criminal matters',
  quickStats: [
    { n: '24/7',   l: 'Availability' },
    { n: '35 yrs', l: 'In practice' },
    { n: 'State',  l: '& federal courts' },
    { n: '2',      l: 'CT offices' },
  ],
  metadata: {
    title: 'Criminal Defense | Ashford & Vane LLP',
    description: 'Connecticut criminal defense attorneys for felonies, federal charges, DUI, and white-collar crimes. Available 24/7. Call us first.',
  },
};

export const metadata = data.metadata;
export default function CriminalDefensePage() { return <PracticeAreaTemplate data={data} />; }
