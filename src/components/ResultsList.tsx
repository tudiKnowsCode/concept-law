'use client';
import { useState } from 'react';

const RESULTS = [
  { amount: '$24.5M', label: 'VERDICT · PERSONAL INJURY',           desc: 'Catastrophic trucking collision, Hartford County',          year: '2024', cat: 'injury' },
  { amount: '$310M',  label: 'TRANSACTION · BUSINESS',              desc: 'Cross-border acquisition for a Stamford technology firm',   year: '2023', cat: 'corporate' },
  { amount: '$7.2M',  label: 'SETTLEMENT · MEDICAL MALPRACTICE',    desc: 'Delayed cancer diagnosis at a regional hospital',           year: '2023', cat: 'malpractice' },
  { amount: '$4.8M',  label: 'VERDICT · PREMISES LIABILITY',        desc: 'Unsafe stairwell injury at a commercial property',          year: '2022', cat: 'injury' },
  { amount: '$12.6M', label: 'RESOLUTION · FAMILY LAW',             desc: 'Complex marital estate division, Fairfield County',         year: '2022', cat: 'family' },
  { amount: '$5.9M',  label: 'SETTLEMENT · MEDICAL MALPRACTICE',    desc: 'Surgical error resulting in permanent injury',               year: '2021', cat: 'malpractice' },
  { amount: '$3.1M',  label: 'SETTLEMENT · AUTO ACCIDENT',          desc: 'Distracted-driving collision, New Haven',                   year: '2021', cat: 'injury' },
];

const CHIPS = [
  { key: 'all',         label: 'All Results' },
  { key: 'injury',      label: 'Personal Injury' },
  { key: 'malpractice', label: 'Medical Malpractice' },
  { key: 'corporate',   label: 'Business' },
  { key: 'family',      label: 'Family Law' },
];

export default function ResultsList() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? RESULTS : RESULTS.filter((r) => r.cat === filter);

  return (
    <section style={{ background: '#f4efe5', padding: 'clamp(56px,8vh,90px) 28px' }}>
      <div className="max-w-[1080px] mx-auto">
        {/* Filter chips */}
        <div className="flex flex-wrap gap-2.5 mb-9">
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

        {/* Result rows */}
        {visible.length > 0 ? (
          <div className="flex flex-col">
            {visible.map((row, i) => (
              <div
                key={row.desc}
                className="result-row"
                style={{ borderTop: '1px solid rgba(13,26,38,0.12)', borderBottom: i === visible.length - 1 ? '1px solid rgba(13,26,38,0.12)' : undefined, padding: '26px 0' }}
              >
                <div className="font-serif font-semibold" style={{ fontSize: '34px', color: '#0d1a26' }}>
                  {row.amount}
                </div>
                <div>
                  <div className="font-bold" style={{ fontSize: '11px', letterSpacing: '0.12em', color: '#9a7438' }}>
                    {row.label}
                  </div>
                  <div className="font-semibold mt-1.5" style={{ fontSize: '16.5px' }}>
                    {row.desc}
                  </div>
                </div>
                <div className="font-serif italic" style={{ color: '#6b7682', fontSize: '18px' }}>
                  {row.year}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-12" style={{ color: '#6b7682', fontSize: '16px' }}>
            No results in this category yet.
          </p>
        )}

        <p className="mt-7" style={{ fontSize: '12.5px', lineHeight: 1.6, color: '#8b95a0' }}>
          Prior results do not guarantee a similar outcome. Each case is unique and must be evaluated on its own facts.
        </p>
      </div>
    </section>
  );
}
