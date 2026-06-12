'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email,     setEmail]     = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error,     setError]     = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="font-semibold mt-4" style={{ fontSize: '14.5px', color: '#cda35d' }}>
        Thank you, you&rsquo;re subscribed. Watch your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-wrap gap-3 justify-center mt-7 mx-auto" style={{ maxWidth: '480px' }}>
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setError(false); }}
        className="min-w-0"
        style={{
          flex: '1 1 240px',
          background: 'rgba(244,239,229,0.06)',
          border: error ? '1px solid #cf6b5a' : '1px solid rgba(244,239,229,0.2)',
          borderRadius: '2px',
          padding: '15px 18px',
          color: '#f4efe5',
          fontFamily: 'inherit',
          fontSize: '15px',
          outline: 'none',
        }}
      />
      <button
        type="submit"
        className="font-bold cursor-pointer border-0 transition-all duration-200 hover:-translate-y-px"
        style={{ background: '#b3873f', color: '#0a141e', fontFamily: 'inherit', fontSize: '15px', padding: '15px 26px', borderRadius: '2px' }}
      >
        Subscribe
      </button>
    </form>
  );
}
