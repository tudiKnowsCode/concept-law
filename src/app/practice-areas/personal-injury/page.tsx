import PracticeAreaTemplate, { PracticeAreaData } from '@/components/PracticeAreaTemplate';

const data: PracticeAreaData = {
  eyebrow: 'CONNECTICUT · NO FEE UNLESS WE RECOVER',
  title: <>Personal injury law,<br className="hidden sm:block" /> fought to the finish.</>,
  subtitle: "When someone else's negligence changes your life, Ashford & Vane puts an experienced trial attorney in your corner from day one to verdict.",
  heroCta: { label: 'Free case evaluation', href: '/contact' },
  approachTitle: 'Your injury is not a file number.',
  approachBody: [
    "Most Connecticut personal injury firms settle. They move volume. We were built for the cases that matter—the ones where the insurance company knows a real trial is on the table if they don't offer fair compensation.",
    "From the first call, you work directly with a named partner. We invest our own resources in investigation, expert retention, and preparation because we believe every case should be built as if it's going in front of a jury—whether or not it does.",
  ],
  subTitle: 'Areas within personal injury',
  subpractices: [
    { num: '01', title: 'Motor Vehicle Accidents',  body: 'Car, truck, motorcycle, and pedestrian collisions across Connecticut highways and city streets.' },
    { num: '02', title: 'Medical Malpractice',      body: 'Surgical errors, misdiagnosis, birth injuries, and nursing-home negligence.' },
    { num: '03', title: 'Workplace Injuries',       body: "Construction site falls, industrial accidents, and third-party claims beyond workers' compensation." },
    { num: '04', title: 'Premises Liability',       body: 'Slip-and-fall, inadequate security, swimming pool injuries, and dangerous property conditions.' },
    { num: '05', title: 'Wrongful Death',           body: "Compassionate representation for families who have lost someone to another's negligence." },
    { num: '06', title: 'Product Liability',        body: 'Defective vehicles, pharmaceutical injuries, and dangerous consumer products.' },
  ],
  stepsTitle: 'How we handle your case',
  steps: [
    { num: '01', title: 'Free case evaluation',    body: 'You speak directly with a partner—not a paralegal—about your situation, at no charge.' },
    { num: '02', title: 'Investigation & evidence', body: 'We preserve evidence, secure expert witnesses, and reconstruct what happened before memories fade.' },
    { num: '03', title: 'Demand & negotiation',    body: 'We calculate the full value of your claim and present it to insurers on your terms.' },
    { num: '04', title: 'Trial, if needed',         body: "If the insurer won't be reasonable, we take it before a jury—and we win there, too." },
  ],
  faqs: [
    { q: 'How much does it cost to hire you?',              a: 'Personal injury cases are handled on a contingency-fee basis. You pay nothing unless we recover money for you. Our fee is a percentage of your recovery, agreed upon upfront.' },
    { q: 'How long does a personal injury case take?',      a: 'Most cases resolve within 6–18 months. Complex cases involving disputed liability or catastrophic injuries can take longer. We will give you a realistic timeline after we review your matter.' },
    { q: 'What if I was partially at fault?',               a: 'Connecticut follows modified comparative negligence. You can still recover as long as you were less than 51% at fault. Your damages are reduced by your percentage of fault.' },
    { q: "Should I accept the insurance company's offer?", a: 'Almost never without consulting an attorney first. Initial offers are typically far below the full value of a claim. Once you accept and sign a release, you cannot seek additional compensation.' },
    { q: 'What is the statute of limitations?',             a: 'In Connecticut, most personal injury claims must be filed within two years of the date of injury. Wrongful death claims have a two-year limit running from the date of death. Do not wait.' },
  ],
  resultsHeading: "Results our clients didn't think possible.",
  results: [
    { amount: '$6.2M', label: 'Traumatic brain injury — motor vehicle collision' },
    { amount: '$4.8M', label: 'Surgical malpractice — nerve damage' },
    { amount: '$3.1M', label: 'Construction fall — premises liability' },
  ],
  ctaTitle: <>Your consultation is free.<br />Your case is not a gamble.</>,
  ctaBody: 'We take personal injury cases on contingency. You pay nothing unless we recover.',
  sidebarHeading: 'Talk to a partner today.',
  sidebarBody: 'No fee unless we recover. No obligation for an initial conversation.',
  sidebarCta: 'Request a free evaluation',
  sidebarPhone: '(860) 555-0191',
  sidebarPhoneLabel: 'Hartford · Mon–Fri 8am–6pm',
  quickStats: [
    { n: '$480M+', l: 'Recovered' },
    { n: '35 yrs', l: 'In practice' },
    { n: '98%',    l: 'Client satisfaction' },
    { n: '120+',   l: 'Verdicts & settlements' },
  ],
  metadata: {
    title: 'Personal Injury | Ashford & Vane LLP',
    description: 'Connecticut personal injury attorneys. Motor vehicle accidents, medical malpractice, wrongful death, and more. No fee unless we recover.',
  },
};

export const metadata = data.metadata;
export default function PersonalInjuryPage() { return <PracticeAreaTemplate data={data} />; }
