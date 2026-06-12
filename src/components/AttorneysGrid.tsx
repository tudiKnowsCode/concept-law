'use client';
import { useState } from 'react';

const ATTORNEYS = [
  { name: 'Margaret Ashford', title: 'FOUNDING PARTNER',  specialty: 'Trial · Personal Injury',  practice: 'injury' },
  { name: 'Daniel Vane',      title: 'MANAGING PARTNER',  specialty: 'Business & Corporate',      practice: 'corporate' },
  { name: 'Priya Raman',      title: 'PARTNER',           specialty: 'Estate & Elder Law',         practice: 'estate' },
  { name: 'Marcus Bell',      title: 'PARTNER',           specialty: 'Personal Injury · Trial',    practice: 'injury' },
  { name: 'Elena Foss',       title: 'PARTNER',           specialty: 'Family Law',                 practice: 'family' },
  { name: 'Jonathan Cole',    title: 'PARTNER',           specialty: 'Real Estate · Land Use',     practice: 'realestate' },
  { name: 'Sofia Marin',      title: 'ASSOCIATE',         specialty: 'Criminal Defense',           practice: 'criminal' },
  { name: 'Thomas Reed',      title: 'COUNSEL',           specialty: 'Business & Corporate',       practice: 'corporate' },
];

const CHIPS = [
  { key: 'all',        label: 'All Attorneys' },
  { key: 'injury',     label: 'Personal Injury' },
  { key: 'corporate',  label: 'Business & Corporate' },
  { key: 'estate',     label: 'Estate Planning' },
  { key: 'family',     label: 'Family Law' },
  { key: 'realestate', label: 'Real Estate' },
  { key: 'criminal',   label: 'Criminal Defense' },
];

export default function AttorneysGrid() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? ATTORNEYS : ATTORNEYS.filter((a) => a.practice === filter);

  return (
    <section style={{ background: '#f4efe5', padding: 'clamp(48px,7vh,80px) 28px clamp(72px,10vh,120px)' }}>
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
                  letterSpacing: '0.02em',
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

        {/* Grid */}
        {visible.length > 0 ? (
          <div className="grid gap-7" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
            {visible.map((att) => (
              <a
                key={att.name}
                href="#"
                className="no-underline text-navy-700 block group transition-colors duration-200"
              >
                {/* Portrait placeholder */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '4/5', background: 'linear-gradient(150deg,#15293a,#0a141e)', border: '1px solid rgba(179,135,63,0.25)' }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(179,135,63,0.07) 0 1px, transparent 1px 34px)' }}
                  />
                  <div
                    className="absolute bottom-3.5 left-4 font-bold"
                    style={{ fontSize: '9.5px', letterSpacing: '0.24em', color: 'rgba(244,239,229,0.5)' }}
                  >
                    PORTRAIT
                  </div>
                </div>
                <h3 className="font-serif font-semibold mt-4 group-hover:text-brass-600 transition-colors" style={{ fontSize: '21px', margin: '16px 0 0' }}>
                  {att.name}
                </h3>
                <div className="font-semibold mt-1" style={{ fontSize: '12.5px', letterSpacing: '0.04em', color: '#9a7438' }}>
                  {att.title}
                </div>
                <p className="text-slate-600 mt-2" style={{ fontSize: '14px', lineHeight: 1.6, margin: '8px 0 0' }}>
                  {att.specialty}
                </p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center py-14" style={{ color: '#6b7682', fontSize: '16px' }}>
            No attorneys in this practice yet.
          </p>
        )}
      </div>
    </section>
  );
}
