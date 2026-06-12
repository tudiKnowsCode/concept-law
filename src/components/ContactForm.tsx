'use client';
import { useState } from 'react';

const MATTERS = [
  'Personal Injury',
  'Business & Corporate',
  'Estate Planning',
  'Family Law',
  'Real Estate',
  'Criminal Defense',
  'Something else',
];

const inputStyle: React.CSSProperties = {
  background: '#faf8f3',
  border: '1px solid rgba(13,26,38,0.16)',
  borderRadius: '2px',
  padding: '14px 15px',
  fontFamily: 'inherit',
  fontSize: '15px',
  color: '#0d1a26',
  outline: 'none',
  width: '100%',
  transition: 'border-color .2s',
};

export default function ContactForm() {
  const [name,    setName]    = useState('');
  const [email,   setEmail]   = useState('');
  const [phone,   setPhone]   = useState('');
  const [matter,  setMatter]  = useState(MATTERS[0]);
  const [message, setMessage] = useState('');
  const [error,   setError]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.includes('@') || !message.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-5">
        <div
          className="w-[54px] h-[54px] rounded-full flex items-center justify-center mx-auto"
          style={{ background: '#1f6b4a', color: '#fff', fontSize: '26px' }}
        >
          ✓
        </div>
        <h3 className="font-serif font-semibold mt-5" style={{ fontSize: '26px', margin: '18px 0 0' }}>
          Thank you, your request is in.
        </h3>
        <p className="text-slate-500 mt-2.5" style={{ fontSize: '15.5px', margin: '10px 0 0' }}>
          A Connecticut attorney will contact you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-7 grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
      <div className="flex flex-col gap-1.5">
        <label className="font-bold" style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#2a3742' }}>
          Full name <span style={{ color: '#b3873f' }}>*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = '#b3873f')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(13,26,38,0.16)')}
          style={inputStyle}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-bold" style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#2a3742' }}>
          Email <span style={{ color: '#b3873f' }}>*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = '#b3873f')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(13,26,38,0.16)')}
          style={inputStyle}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-bold" style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#2a3742' }}>Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = '#b3873f')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(13,26,38,0.16)')}
          style={inputStyle}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-bold" style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#2a3742' }}>Matter type</label>
        <select
          value={matter}
          onChange={(e) => setMatter(e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = '#b3873f')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(13,26,38,0.16)')}
          style={inputStyle}
        >
          {MATTERS.map((m) => <option key={m}>{m}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1.5" style={{ gridColumn: '1 / -1' }}>
        <label className="font-bold" style={{ fontSize: '13px', letterSpacing: '0.02em', color: '#2a3742' }}>
          How can we help? <span style={{ color: '#b3873f' }}>*</span>
        </label>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={(e) => (e.target.style.borderColor = '#b3873f')}
          onBlur={(e) => (e.target.style.borderColor = 'rgba(13,26,38,0.16)')}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-1" style={{ gridColumn: '1 / -1' }}>
        <button
          type="submit"
          className="font-bold cursor-pointer border-0 transition-all duration-200 hover:-translate-y-px hover:bg-navy-600"
          style={{ background: '#0d1a26', color: '#f4efe5', fontFamily: 'inherit', fontSize: '15.5px', padding: '16px 32px', borderRadius: '2px' }}
        >
          Send my request
        </button>
        <span style={{ fontSize: '13px', color: '#8b95a0', maxWidth: '300px', lineHeight: 1.5 }}>
          Submitting does not create an attorney-client relationship.
        </span>
      </div>

      {error && (
        <p className="font-semibold" style={{ gridColumn: '1 / -1', color: '#c1543f', fontSize: '14px', margin: 0 }}>
          Please complete the required fields with a valid email.
        </p>
      )}
    </form>
  );
}
