'use client';
import { useState } from 'react';

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            borderTop: '1px solid rgba(13,26,38,0.14)',
            borderBottom: i === items.length - 1 ? '1px solid rgba(13,26,38,0.14)' : undefined,
          }}
        >
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            className="w-full bg-transparent border-0 cursor-pointer flex justify-between items-center gap-[18px] text-left font-sans font-bold text-navy-700"
            style={{ padding: '22px 4px', fontSize: '17px' }}
          >
            <span>{item.q}</span>
            <span className="font-serif shrink-0" style={{ fontSize: '24px', color: '#b3873f' }}>
              {openIdx === i ? '–' : '+'}
            </span>
          </button>
          <div
            className="overflow-hidden"
            style={{
              maxHeight: openIdx === i ? '400px' : '0',
              opacity: openIdx === i ? 1 : 0,
              transition: 'max-height .45s ease, opacity .35s ease',
            }}
          >
            <p style={{ margin: 0, padding: '0 4px 24px', fontSize: '15.5px', lineHeight: 1.75, color: '#46535f' }}>
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
