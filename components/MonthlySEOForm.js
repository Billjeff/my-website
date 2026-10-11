import { useState } from 'react';

export default function MonthlySEOForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    setStatus('sending');
    setError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, service: 'Monthly SEO Service', source: 'monthly-seo-page' }),
      });
      if (!response.ok) throw new Error('Unable to send request');
      setStatus('success');
    } catch {
      setStatus('idle');
      setError('Your request could not be sent. Please try again or email bilal@rapidscopemarketing.com.');
    }
  }

  if (status === 'success') return (
    <div className="form-success" role="status">
      <h3>Your monthly SEO request is received.</h3>
      <p>Rapid Scope will review your website and goals before recommending a campaign scope.</p>
      <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>Send another request</button>
    </div>
  );

  return (
    <form onSubmit={submit}>
      <div className="form-group"><label htmlFor="monthly-name">Your name</label><input className="form-control" id="monthly-name" name="name" autoComplete="name" maxLength={120} required /></div>
      <div className="form-group"><label htmlFor="monthly-email">Email address</label><input className="form-control" id="monthly-email" name="email" type="email" autoComplete="email" maxLength={254} required /></div>
      <div className="form-group"><label htmlFor="monthly-website">Website for your monthly SEO campaign</label><input className="form-control" id="monthly-website" name="website" type="url" placeholder="https://" maxLength={2048} required /></div>
      <div className="form-group"><label htmlFor="monthly-message">Your goals and preferred SEO package scope</label><textarea className="form-control" id="monthly-message" name="message" rows={5} maxLength={5000} required /></div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Request Your Monthly SEO Plan'}</button>
    </form>
  );
}
