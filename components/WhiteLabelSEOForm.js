import { useState } from 'react';

export default function WhiteLabelSEOForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function submit(event) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    setStatus('sending');
    setError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, service: 'White Label SEO', source: 'white-label-seo-page' }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error('Unable to send request');
      setStatus('success');
    } catch {
      setStatus('idle');
      setError('Your request could not be sent. Please try again or email bilal@rapidscopemarketing.com.');
    }
  }

  if (status === 'success') return <div className="form-success" role="status">
    <h3>Your agency enquiry is received.</h3>
    <p>Rapid Scope will review your requirements before recommending a delivery scope.</p>
    <button type="button" className="btn btn-ghost" onClick={() => setStatus('idle')}>Send another enquiry</button>
  </div>;

  return <form onSubmit={submit}>
    <div className="form-group"><label htmlFor="agency-name">Your name</label><input className="form-control" id="agency-name" name="name" autoComplete="name" maxLength={120} required /></div>
    <div className="form-group"><label htmlFor="agency-email">Work email</label><input className="form-control" id="agency-email" name="email" type="email" autoComplete="email" maxLength={254} required /></div>
    <div className="form-group"><label htmlFor="agency-company">Agency name</label><input className="form-control" id="agency-company" name="company" autoComplete="organization" maxLength={160} required /></div>
    <div className="form-group"><label htmlFor="agency-website">Agency website</label><input className="form-control" id="agency-website" name="website" type="url" placeholder="https://" maxLength={2048} required /></div>
    <div className="form-group"><label htmlFor="agency-message">Client types, goals and delivery support needed</label><textarea className="form-control" id="agency-message" name="message" rows={5} maxLength={5000} required /></div>
    <p className="white-label-form-note">Do not include passwords or confidential client records.</p>
    {error && <p className="form-error" role="alert">{error}</p>}
    <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Request an Agency SEO Scope'}</button>
  </form>;
}
