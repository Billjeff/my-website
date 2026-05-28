import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const faqData = [
  {
    q: 'Do I still need backlinks if I have a topical map?',
    a: 'While backlinks are still valuable, establishing strong topical authority significantly reduces the number of links you need to rank. Your content architecture does the heavy lifting.'
  },
  {
    q: 'How long does it take to build topical authority?',
    a: 'The map delivery takes about 1-2 weeks. Building authority depends on how fast you can execute and publish the content outlined in the blueprint.'
  },
  {
    q: 'Do you write the content, or just provide the map?',
    a: 'This specific service provides the complete architectural blueprint. However, RapidScope Marketing offers full-stack content execution if you need our in-house experts to write and publish it.'
  }
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
        body: JSON.stringify({ ...fields, service, source: 'topical-map' }),
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

export default function TopicalMap() {
  const [openFaq, setOpenFaq] = useState(null);
  const form = useForm('Topical Map');


  return (
    <Layout title="Topical Map Services in Dubai | Rapid Scope Marketing LLC">
      <div style={{ paddingTop: '120px' }}>

        {/* ── HERO ── */}
        <section className="hero-split" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
          <div className="hero-split__text animate-fade-in" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            <span className="hero-eyebrow">Semantic SEO Mastery</span>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}>
              Topical Map Services in Dubai:{' '}
              <span className="text-gradient">Dominate Your Niche.</span>
            </h1>
            <p>
              Stop chasing single keywords. Google and AI-driven search engines rank authorities, not just web pages. RapidScope Marketing builds the exact semantic blueprint you need to become the undisputed expert in your industry.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-primary">Request Your Custom Topical Map Strategy</Link>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.5rem' }}>
              Data-backed semantic architecture. Built for the AI search era.
            </p>
          </div>
          <div className="hero-split__image" style={{ minHeight: 'auto', maxHeight: '450px' }}>
            <div className="hero-img-glow" style={{ width: '400px', height: '400px' }} />
            <img src="/hero.svg" alt="Topical Map – RapidScope Dubai" className="hero-img" />
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
              <h2>Why Traditional Keyword Research is <span className="text-gradient">Failing</span> in the UAE</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                If your content strategy is just a random list of high-volume keywords, you are leaving massive gaps for your competitors to exploit. Search engines — including Google's AI Overviews and ChatGPT — now prioritize interconnected entities. A fragmented website is a forgotten website.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT IS A TOPICAL MAP ── */}
        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2>What is a <span className="text-gradient">Topical Map?</span></h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                  A topical map is a strategic, comprehensive blueprint that outlines every core topic, supporting subtopic, and the exact internal linking structure your website needs. It proves to search algorithms that you aren't just writing about a topic — you own it.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    'Identifies semantic gaps in your current content.',
                    'Structures pillar pages and cluster articles perfectly.',
                    'Reduces your reliance on expensive, continuous backlink campaigns.'
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative', color: 'rgba(255,255,255,0.8)' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)', fontWeight: 'bold' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', textAlign: 'center' }}>How It Elevates Your Rankings</h3>
                <div style={{ padding: '1rem', background: 'rgba(94,51,255,0.08)', borderRadius: '8px', marginBottom: '0.75rem' }}>
                  <strong style={{ color: 'var(--text-light)' }}>Pillar Page</strong>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', margin: '0.25rem 0 0' }}>Comprehensive guide covering the core topic</p>
                </div>
                <div style={{ textAlign: 'center', color: 'var(--primary-color)', fontSize: '1.2rem', margin: '0.5rem 0' }}>↕</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {['Cluster Page 1', 'Cluster Page 2', 'Cluster Page 3', 'Cluster Page 4'].map((p, i) => (
                    <div key={i} style={{ padding: '0.6rem', background: 'rgba(221,255,51,0.08)', borderRadius: '6px', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              Topical Authority vs. <span className="text-gradient">Domain Authority</span>
            </h2>
            <div className="compare-table">
              <div className="compare-col compare-col--bad">
                <h3>Domain Authority (The Old Way)</h3>
                <ul>
                  <li>Primary focus: the overall backlink profile of a website</li>
                  <li>Requires massive, ongoing budgets for link-building</li>
                  <li>Ignored by Answer Engines if content is shallow</li>
                </ul>
              </div>
              <div className="compare-col compare-col--good">
                <h3>Topical Authority (The RapidScope Way)</h3>
                <ul>
                  <li>Deep, interconnected expertise in one specific niche</li>
                  <li>Focuses budget purely on structured, high-ROI content assets</li>
                  <li>Highly cited by AI engines looking for factual, deep answers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2>The RapidScope <span className="text-gradient">Topical Mapping Process</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' }}>
              {[
                { phase: 'Phase 1', title: 'Entity & Niche Extraction', desc: 'We reverse-engineer the exact concepts, entities, and search intent Google associates with your specific business in the UAE market.' },
                { phase: 'Phase 2', title: 'Deep Semantic Research', desc: 'We go beyond basic search volume to uncover the specific questions, problems, and informational gaps your ideal clients are actively searching for.' },
                { phase: 'Phase 3', title: 'The Blueprint Delivery', desc: 'You receive a comprehensive architecture spreadsheet containing pillar pages, cluster articles, and specific word-count recommendations.' },
                { phase: 'Phase 4', title: 'Internal Linking Architecture', desc: 'We map exactly how each new page should link to one another, funneling algorithm authority directly toward your money/sales pages.' }
              ].map((s, i) => (
                <div key={i} className="card">
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{s.phase}</div>
                  <h3>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TARGET AUDIENCE ── */}
        <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2>Who Needs a <span className="text-gradient">Topical Authority Strategy?</span></h2>
            </div>
            <div className="services-grid">
              <div className="card" style={{ textAlign: 'center' }}>
                <div className="card-icon">🛍️</div>
                <h3>E-Commerce Brands</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                  Dominate entire product categories and outrank giant marketplaces.
                </p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div className="card-icon">🏢</div>
                <h3>B2B & SaaS</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                  Capture high-ticket enterprise leads through deep, educational thought leadership.
                </p>
              </div>
              <div className="card" style={{ textAlign: 'center' }}>
                <div className="card-icon">🛡️</div>
                <h3>Healthcare, Legal & Finance</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                  Prove your E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) to strict algorithmic filters.
                </p>
              </div>
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
            <h2>Ready to Become the Go-To Authority in Your Industry?</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
              Stop guessing what to publish next. Let RapidScope build the roadmap. Enter your URL below for a preliminary gap analysis before our consultation.
            </p>
            {form.submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Request Received!</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                Thank you! Our semantic SEO team will perform your gap analysis and reach out within 24 hours.
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
                {form.submitting ? 'Submitting...' : 'Audit My Semantic Authority'}
              </button>
            </form>
          )}
          </div>
        </section>

      </div>
    </Layout>
  );
}
