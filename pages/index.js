import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const faqData = [
  {
    q: 'How long does it take to see SEO results in Dubai?',
    a: 'While technical fixes can show immediate improvements, sustainable organic growth typically takes 3 to 6 months depending on your starting baseline and industry competition.'
  },
  {
    q: 'How does AI impact my current SEO rankings?',
    a: 'Search engines like Google are rolling out AI Overviews. If your content isn\'t structured for Generative Engine Optimization (GEO), AI will pull answers from your competitors instead of you.'
  },
  {
    q: 'Do you guarantee #1 rankings?',
    a: 'Any agency guaranteeing a #1 spot is lying to you. We guarantee technical excellence, data-driven growth, and relentless execution that historically puts our clients at the top of their markets.'
  }
];

const serviceCards = [
  { icon: '{ }', title: 'Technical & JavaScript SEO', desc: 'We fix crawl budgets, eliminate rendering issues, and ensure lightning-fast page speeds so search engines can easily index your site.' },
  { icon: '📍', title: 'Local SEO & Maps Optimization', desc: 'Dominate "near me" searches in Dubai. We optimize your local profiles and build targeted citations to drive foot traffic and high-intent local leads.' },
  { icon: '📄', title: 'Content & On-Page Optimization', desc: 'We build advanced topic clusters and deploy schema markup to ensure your content perfectly answers user intent and feeds AI overviews.' },
  { icon: '🔗', title: 'Digital PR & Authority Building', desc: 'We earn high-quality, editorial backlinks from trusted regional publications to establish unmatched domain authority.' },
  { icon: '🛒', title: 'E-Commerce & Enterprise SEO', desc: 'Scalable, high-impact strategies for large Shopify, Magento, or WooCommerce stores designed to drive product-level traffic.' }
];

function useForm(service) {
  const [fields, setFields] = useState({ name: '', email: '', company: '', website: '' });
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
        body: JSON.stringify({ ...fields, service, source: 'homepage' }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setFields({ name: '', email: '', company: '', website: '' });
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };

  return { fields, handleChange, handleSubmit, submitting, submitted, error };
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const form = useForm('AI-Driven SEO Strategy');

  return (
    <Layout title="Rapid Scope Marketing LLC | AI-Driven SEO Agency in Dubai">
      {/* ── HERO ── */}
      <section className="hero-split">
        <div className="hero-split__text animate-fade-in">
          <span className="hero-eyebrow">AI-Driven SEO for Dubai</span>
          <h1>
            Dominate Search in Dubai with{' '}
            <span className="text-gradient">AI-Driven SEO Strategies.</span>
          </h1>
          <p>
            Traditional SEO is dead. Stop fighting for outdated keywords and start dominating the modern search landscape. Rapid Scope Marketing uses technical precision and Generative Engine Optimization (GEO) to make your brand the only answer Google and AI engines care about.
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">Claim Your Free SEO & Technical Audit</Link>
            <Link href="/services" className="btn btn-ghost">Our Services →</Link>
          </div>
          <div className="hero-trust">
            <span>✔ Data-driven results</span>
            <span>✔ Enterprise-grade execution</span>
            <span>✔ No long-term contracts</span>
          </div>
        </div>
        <div className="hero-split__image">
          <div className="hero-img-glow" />
          <img src="/hero.svg" alt="Rapid Scope Marketing – AI SEO Dubai" className="hero-img" />
        </div>
      </section>

      {/* ── PROBLEM: Why Traditional SEO is Dead ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Why Traditional SEO is <span className="text-gradient">Dead</span> (And What We Do Instead)</h2>
            <p style={{ maxWidth: '700px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
              Search engines are no longer just delivering blue links; they are generating answers using AI. If your current agency is just stuffing keywords and buying cheap backlinks, your Dubai business is about to disappear from the search results.
            </p>
          </div>

          <div className="compare-table">
            <div className="compare-col compare-col--bad">
              <h3>Traditional SEO (The Old Way)</h3>
              <ul>
                <li>Keyword stuffing and unnatural text</li>
                <li>Chasing vanity metrics and impressions</li>
                <li>Spammy, low-quality backlinks</li>
                <li>Guesswork and outdated tactics</li>
              </ul>
            </div>
            <div className="compare-col compare-col--good">
              <h3>RapidScope AI-Driven SEO (The Future)</h3>
              <ul>
                <li>Entity-based SEO and topic clusters</li>
                <li>Optimizing for Answer Engines (AEO/GEO)</li>
                <li>High-authority Digital PR and brand mentions</li>
                <li>Data-backed technical architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES BREAKDOWN ── */}
      <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="hero-eyebrow">Our Arsenal</span>
            <h2>Comprehensive SEO Services <span className="text-gradient">Tailored for UAE</span></h2>
          </div>
          <div className="services-grid">
            {serviceCards.map((card, i) => (
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
            <h2>The RapidScope SEO <span className="text-gradient">Blueprint</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Predictable, Transparent Growth</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {[
              { step: '1', title: 'Deep Technical Audit', desc: 'We uncover hidden roadblocks and toxic errors tanking your current rankings.' },
              { step: '2', title: 'Competitive Gap Analysis', desc: 'We reverse-engineer your top Dubai competitors to find exactly where they are vulnerable.' },
              { step: '3', title: 'Strategy Implementation', desc: 'Our in-house experts deploy targeted content, technical fixes, and local PR campaigns.' },
              { step: '4', title: 'Live Analytics Dashboard', desc: 'No vanity metrics. You get 24/7 access to see keyword movement, traffic, and lead conversions.' }
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
            Why Dubai's Leading Brands <span className="text-gradient">Trust RapidScope</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { icon: '✅', title: 'Strictly White-Hat', desc: 'We build sustainable growth. No black-hat shortcuts that risk Google penalties.' },
              { icon: '🌍', title: 'Local UAE Expertise', desc: 'We understand local search intent, regional competitors, and market nuances.' },
              { icon: '👨‍💻', title: 'In-House Experts', desc: 'No outsourcing. You work directly with our dedicated technical team.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'Clear deliverables, strict timelines, and absolutely no hidden fees.' }
            ].map((item, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
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
          <h2>Stop Letting Competitors Steal Your Customers</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
            The Dubai market moves fast. Partner with RapidScope Marketing to future-proof your website and capture the traffic you deserve.
          </p>
          {form.submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Request Received!</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                Thank you! Our team will review your website and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Your Name" value={form.fields.name} onChange={form.handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="company" className="form-control" placeholder="Company Name" value={form.fields.company} onChange={form.handleChange} />
              </div>
              <div className="form-group">
                <input type="url" name="website" className="form-control" placeholder="Website URL" value={form.fields.website} onChange={form.handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Email Address" value={form.fields.email} onChange={form.handleChange} required />
              </div>
              {form.error && <p style={{ color: '#ff6b6b', fontSize: '0.85rem', marginBottom: '1rem' }}>{form.error}</p>}
              <button type="submit" className="btn btn-accent" style={{ width: '100%' }} disabled={form.submitting}>
                {form.submitting ? 'Submitting...' : 'Build My SEO Strategy'}
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
