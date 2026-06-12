'use client';
import { useState } from 'react';

const ARTICLES = [
  { cat: 'estate',   label: 'ESTATE PLANNING · FEB 2026', title: 'Five estate-planning mistakes Connecticut families still make',         excerpt: "A simple will isn't always enough. Here's what we see go wrong, and how to fix it." },
  { cat: 'business', label: 'BUSINESS · JAN 2026',         title: 'Selling your CT business? Start the legal work 18 months out',         excerpt: 'The best outcomes start long before the term sheet. A practical timeline for owners.' },
  { cat: 'injury',   label: 'PERSONAL INJURY · JAN 2026',  title: 'How insurance companies calculate, and undervalue, your claim',        excerpt: 'Understanding the playbook is the first step to beating it.' },
  { cat: 'family',   label: 'FAMILY LAW · DEC 2025',       title: 'Divorce in Connecticut: what the first 30 days really look like',      excerpt: 'A calm, step-by-step look at how the process actually begins.' },
  { cat: 'estate',   label: 'ESTATE PLANNING · DEC 2025',  title: 'The Connecticut estate tax in 2026: what changed and who it affects',  excerpt: 'New thresholds mean new planning. A clear breakdown for residents.' },
  { cat: 'business', label: 'BUSINESS · NOV 2025',          title: 'LLC or S-Corp? Choosing the right entity for your CT startup',         excerpt: 'The decision affects taxes, liability, and growth. Here’s how to think about it.' },
];

const CHIPS = [
  { key: 'all',      label: 'All Topics' },
  { key: 'injury',   label: 'Personal Injury' },
  { key: 'estate',   label: 'Estate Planning' },
  { key: 'business', label: 'Business' },
  { key: 'family',   label: 'Family Law' },
];

export default function InsightsGrid() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? ARTICLES : ARTICLES.filter((a) => a.cat === filter);

  return (
    <section style={{ background: '#f4efe5', padding: 'clamp(40px,6vh,64px) 28px clamp(72px,10vh,110px)' }}>
      <div className="max-w-[1280px] mx-auto">
        {/* Filter chips */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {CHIPS.map((chip) => {
            const active = filter === chip.key;
            return (
              <button
                key={chip.key}
                onClick={() => setFilter(chip.key)}
                className="cursor-pointer font-bold transition-all duration-200"
                style={{
                  fontFamily: 'inherit',
                  fontSize: '13.5px',
                  padding: '10px 18px',
                  borderRadius: '999px',
                  border: active ? '1px solid #0d1a26' : '1px solid rgba(13,26,38,0.2)',
                  background: active ? '#0d1a26' : 'transparent',
                  color: active ? '#f4efe5' : '#46535f',
                }}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        {/* Articles grid */}
        {visible.length > 0 ? (
          <div className="grid gap-7" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {visible.map((article) => (
              <a
                key={article.title}
                href="#"
                className="no-underline text-navy-700 block group transition-colors duration-200"
              >
                <div
                  className="relative overflow-hidden rounded-sm"
                  style={{ aspectRatio: '16/10', background: 'linear-gradient(150deg,#1c3346,#0d1a26)', border: '1px solid rgba(13,26,38,0.1)' }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(179,135,63,0.08) 0 1px, transparent 1px 30px)' }}
                  />
                </div>
                <div className="font-bold mt-4" style={{ fontSize: '12px', letterSpacing: '0.1em', color: '#9a7438' }}>
                  {article.label}
                </div>
                <h3
                  className="font-serif font-semibold mt-2 group-hover:text-brass-600 transition-colors duration-200"
                  style={{ fontSize: '21px', lineHeight: 1.26, margin: '10px 0 0' }}
                >
                  {article.title}
                </h3>
                <p className="text-slate-600 mt-2" style={{ fontSize: '14.5px', lineHeight: 1.6, margin: '10px 0 0' }}>
                  {article.excerpt}
                </p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center py-12" style={{ color: '#6b7682', fontSize: '16px' }}>
            No articles in this topic yet.
          </p>
        )}
      </div>
    </section>
  );
}
