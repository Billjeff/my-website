import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const faqData = [
  {
    q: 'How much does a comprehensive website audit cost?',
    a: 'We offer a free initial top-level scan. For a deep-dive, customized technical audit, prices vary based on the size and complexity of your site. Contact us for a precise quote.'
  },
  {
    q: 'How long will it take to get my report?',
    a: 'Standard audits are delivered within 3 to 5 business days, complete with an implementation consultation.'
  },
  {
    q: 'Will fixing these issues guarantee I rank #1 on Google?',
    a: 'While no one can guarantee a #1 spot, resolving technical and on-page errors is the mandatory foundation for any successful SEO campaign. It immediately improves your site\'s relationship with search engines.'
  }
];

function useForm(service) {
  const [fields, setFields] = useState({ name: '', email: '', website: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const handleChange = (e) => setFields({ ...fields, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, service, source: 'website-audit' }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setFields({ name: '', email: '', website: '' });
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };
  return { fields, handleChange, handleSubmit, submitting, submitted, error };
}

export default function WebsiteAudit() {
  const [openFaq, setOpenFaq] = useState(null);
  const form = useForm('Website Audit');


  return (
    <Layout title="Precision Website Audit in Dubai | Rapid Scope Marketing LLC">
      <div style={{ paddingTop: '120px' }}>

        {/* ── HERO ── */}
        <section className="hero-split" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
          <div className="hero-split__text animate-fade-in" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            <span className="hero-eyebrow">Technical Excellence</span>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}>
              Stop Guessing. Start Ranking.
              <br />
              <span className="text-gradient">Get a Precision Website Audit in Dubai.</span>
            </h1>
            <p>
              Discover the hidden technical errors, slow load times, and SEO gaps that are costing your business local traffic and sales. RapidScope Marketing provides deep-dive analytics to turn your website into a high-converting asset.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-primary">Claim Your Free Initial SEO Check</Link>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.5rem' }}>
              No credit card required. 24-hour turnaround.
            </p>
          </div>
          <div className="hero-split__image" style={{ minHeight: 'auto', maxHeight: '450px' }}>
            <div className="hero-img-glow" style={{ width: '400px', height: '400px' }} />
            <img src="/hero.svg" alt="Website Audit – RapidScope Dubai" className="hero-img" />
          </div>
        </section>

        {/* ── SOCIAL PROOF BAR ── */}
        <section style={{ backgroundColor: 'var(--bg-card)', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', margin: 0 }}>
              Powering digital growth for brands across the UAE.
            </p>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2>Why is Your Dubai Competitor <span className="text-gradient">Outranking You?</span></h2>
              <p style={{ maxWidth: '700px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
                A beautiful website means nothing if Google can't read it and users won't wait for it to load. The UAE digital landscape is competitive. If you aren't optimizing, you are losing money.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🐌</div>
                <h3>Slow Speeds</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                  53% of mobile users leave a site that takes longer than 3 seconds to load.
                </p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🔗</div>
                <h3>Hidden Errors</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                  Broken links, toxic backlinks, and crawl errors quietly tank your Google rankings.
                </p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📉</div>
                <h3>Poor UX</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                  High bounce rates mean your site is actively driving potential customers away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES BREAKDOWN ── */}
        <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2>Comprehensive Website Auditing by <span className="text-gradient">RapidScope</span></h2>
            </div>
            <div className="services-grid">
              {[
                { icon: '🔍', title: 'Technical SEO Audit', desc: 'We pop the hood to check site speed, mobile responsiveness, XML sitemaps, core web vitals, and indexability.' },
                { icon: '📝', title: 'On-Page & Content Analysis', desc: 'Evaluating keyword gaps, meta tags, heading structures, and localized content strategies specifically for the Dubai market.' },
                { icon: '🔗', title: 'Off-Page & Backlink Profile', desc: 'Identifying toxic links hurting your domain authority and uncovering high-value local link-building opportunities.' },
                { icon: '📱', title: 'UX/UI & Conversion Check', desc: 'Analyzing user navigation flow, mobile-first design, and call-to-action effectiveness to maximize your ROI.' }
              ].map((card, i) => (
                <div key={i} className="card">
                  <div className="card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2>The RapidScope Blueprint: <span className="text-gradient">From Scan to Success</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {[
                { step: '1', title: 'Discovery', desc: 'We define your business goals and analyze your current baseline metrics and competitors.' },
                { step: '2', title: 'Deep-Dive Crawl', desc: 'Our team uses enterprise-level tools to run a microscopic scan of your entire website architecture.' },
                { step: '3', title: 'Actionable Roadmap', desc: 'You receive a jargon-free report, prioritizing fixes by High, Medium, and Low impact.' },
                { step: '4', title: 'Implementation', desc: 'Hand the roadmap to your dev team, or let RapidScope\'s experts fix the issues for you.' }
              ].map((s, i) => (
                <div key={i} className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{s.step}</div>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>{s.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Why Brands in Dubai <span className="text-gradient">Trust RapidScope</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { icon: '📊', title: 'Data-Driven, Not Guesswork', desc: 'We build strategies based on hard numbers and technical realities.' },
                { icon: '🌍', title: 'Local Market Expertise', desc: 'We understand the nuances of local SEO and consumer behavior in the UAE.' },
                { icon: '📋', title: 'Transparent Reporting', desc: 'No fluff, no vanity metrics. Just clear, actionable insights.' },
                { icon: '🔧', title: 'End-to-End Execution', desc: 'We don\'t just find the problems; we have the technical chops to fix them.' }
              ].map((item, i) => (
                <div key={i} className="card">
                  <div className="card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <div className="faq-list">
              {faqData.map((item, i) => (
                <div key={i} className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{item.q}</span>
                    <span className="faq-chevron">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="cta-banner">
          <div className="container" style={{ textAlign: 'center' }}>
            <h2>Ready to Scope Out Your Website's True Potential?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
              Stop leaving money on the table. Let RapidScope Marketing uncover the roadblocks holding your website back.
            </p>
            {form.submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Audit Request Received!</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                Thank you! We'll run your initial scan and send the results within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Your Name" value={form.fields.name} onChange={form.handleChange} required />
              </div>
              <div className="form-group">
                <input type="url" name="website" className="form-control" placeholder="Website URL" value={form.fields.website} onChange={form.handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Email Address" value={form.fields.email} onChange={form.handleChange} required />
              </div>
              {form.error && <p style={{ color: '#ff6b6b', fontSize: '0.85rem', marginBottom: '1rem' }}>{form.error}</p>}
              <button type="submit" className="btn btn-accent" style={{ width: '100%' }} disabled={form.submitting}>
                {form.submitting ? 'Submitting...' : 'Run My Free Audit Now'}
              </button>
            </form>
          )}
          </div>
        </section>

      </div>
    </Layout>
  );
}
