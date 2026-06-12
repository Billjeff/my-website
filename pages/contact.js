import Layout from '@/components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fields, setFields] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, source: 'contact-page' }),
      });

      if (!response.ok) throw new Error('Request failed');

      setSubmitted(true);
      setFields({ name: '', email: '', phone: '', message: '' });
    } catch {
      setError('Something went wrong. Please try again or email bilal@rapidscopemarketing.com.');
    }

    setSubmitting(false);
  };

  return (
    <Layout title="Contact Rapid Scope Marketing LLC | Dubai SEO Agency">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">Contact</p>
            <h1>Let us scope the fastest path to better search performance.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              Send your details and the Rapid Scope team will review your website, goals, and next best move. We usually reply within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-panel">
            <p className="section-kicker">Dubai office</p>
            <h2>Rapid Scope Marketing LLC</h2>
            <div className="contact-list">
              <p><strong>Office</strong><span>Building #8, Ground floor, DMC, Dubai Internet City, United Arab Emirates</span></p>
              <p><strong>Phone</strong><a href="tel:+971566456855">+971 566456855</a></p>
              <p><strong>Email</strong><a href="mailto:bilal@rapidscopemarketing.com">bilal@rapidscopemarketing.com</a></p>
            </div>
          </div>

          <div className="audit-form-card">
            {submitted ? (
              <div className="form-success" role="status">
                <span>Message received</span>
                <h3>Thanks. We will get back to you within 24 hours.</h3>
                <button className="btn btn-ghost" onClick={() => setSubmitted(false)} type="button">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name">Your name</label>
                  <input id="contact-name" type="text" name="name" className="form-control" value={fields.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email address</label>
                  <input id="contact-email" type="email" name="email" className="form-control" value={fields.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone number</label>
                  <input id="contact-phone" type="tel" name="phone" className="form-control" value={fields.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">How can we help?</label>
                  <textarea id="contact-message" name="message" className="form-control" value={fields.message} onChange={handleChange} required />
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
