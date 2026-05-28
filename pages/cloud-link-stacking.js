import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const faqData = [
  {
    q: 'Is Cloud Stacking safe for my corporate website?',
    a: 'Yes. Because these assets live on highly trusted networks (like Amazon and Google), the platforms themselves filter out risk. When used strategically as an authority buffer, it is completely secure.'
  },
  {
    q: 'Which cloud platforms do you use for your stacks?',
    a: 'We natively support Amazon S3, Google Cloud Storage, Microsoft Azure, IBM Cloud, and Backblaze to ensure broad algorithmic diversity.'
  },
  {
    q: 'How long does it take for cloud links to pass authority?',
    a: 'Cloud properties typically index within a few days because search bots constantly crawl these specific servers. Noticeable ranking movements generally follow within 3 to 6 weeks.'
  }
];

function useForm(service) {
  const [fields, setFields] = useState({ name: '', email: '', keyword: '', website: '' });
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
        body: JSON.stringify({ ...fields, service, source: 'cloud-link-stacking' }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      setFields({ name: '', email: '', keyword: '', website: '' });
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setSubmitting(false);
  };
  return { fields, handleChange, handleSubmit, submitting, submitted, error };
}

export default function CloudLinkStacking() {
  const [openFaq, setOpenFaq] = useState(null);
  const form = useForm('Cloud Link Stacking');


  return (
    <Layout title="Advanced Cloud Link Stacking Services in Dubai | Rapid Scope Marketing LLC">
      <div style={{ paddingTop: '120px' }}>

        {/* ── HERO ── */}
        <section className="hero-split" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
          <div className="hero-split__text animate-fade-in" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
            <span className="hero-eyebrow">Enterprise Cloud Engineering</span>
            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}>
              Advanced Cloud Link Stacking
              <br />
              <span className="text-gradient">Services in Dubai.</span>
            </h1>
            <p>
              Traditional link building is too slow, too expensive, and highly unpredictable. RapidScope Marketing engineers custom Cloud Authority Stacks hosted on AWS, Google, and Azure — injecting pure, unshakeable search engine trust directly into your primary website.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-primary">Request a Cloud Architecture Proposal</Link>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.5rem' }}>
              100% manual deployment. Built for enterprise stability.
            </p>
          </div>
          <div className="hero-split__image" style={{ minHeight: 'auto', maxHeight: '450px' }}>
            <div className="hero-img-glow" style={{ width: '400px', height: '400px' }} />
            <img src="/hero.svg" alt="Cloud Link Stacking – RapidScope Dubai" className="hero-img" />
          </div>
        </section>

        {/* ── WHAT IS CLOUD STACKING ── */}
        <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2>What is <span className="text-gradient">Cloud Authority Stacking?</span></h2>
              <p style={{ maxWidth: '750px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                Cloud Stacking is the technical process of building highly optimized, semantic mini-assets hosted directly on the world's most authoritative cloud platforms. Because platforms like Amazon S3, Microsoft Azure, and Google Cloud possess absolute trust with search algorithms, we link them in a closed-loop matrix to funnel that authority straight to your business.
              </p>
            </div>
          </div>
        </section>

        {/* ── COMPARISON: Traditional vs RapidScope ── */}
        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              The Problem with Traditional Link Building in the <span className="text-gradient">UAE</span>
            </h2>
            <div className="compare-table">
              <div className="compare-col compare-col--bad">
                <h3>Traditional Link Building</h3>
                <ul>
                  <li>Unpredictable indexing and high drop-off rates</li>
                  <li>Risk of low-quality link farms and spam penalties</li>
                  <li>Exorbitant costs for single, manual guest posts</li>
                  <li>Irrelevant context and thin content placements</li>
                </ul>
              </div>
              <div className="compare-col compare-col--good">
                <h3>RapidScope Cloud Engineering</h3>
                <ul>
                  <li>Guaranteed indexing on global cloud networks</li>
                  <li>100% controlled, safe Tier-1 and Tier-2 buffer assets</li>
                  <li>Scalable, high-volume authority deployment</li>
                  <li>Hand-coded HTML pages packed with local schema</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE BLUEPRINT ── */}
        <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2>The RapidScope Cloud <span className="text-gradient">Engineering Blueprint</span></h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem' }}>
              {[
                { step: 'Step 1', title: 'Cloud Server Deployment', desc: 'We set up dedicated, secure buckets across global infrastructure layers including AWS, Google Cloud, IBM Cloud, and Azure.' },
                { step: 'Step 2', title: 'Semantic Content Architecture', desc: 'Our team writes hyper-focused, localized content embedded with exact Dubai coordinates, map layers, and entity identifiers.' },
                { step: 'Step 3', title: 'Schema Optimization', desc: 'Every cloud property is hand-coded with clean HTML metadata, schema markup, and advanced algorithmic trust signals.' },
                { step: 'Step 4', title: 'The Interlinking Matrix', desc: 'We weave the properties into a strict "stacking" structure, safely closing the link loop and focusing the collective authority on your target URLs.' }
              ].map((s, i) => (
                <div key={i} className="card">
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{s.step}</div>
                  <h3>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2>Maximum Search <span className="text-gradient">Protection & Growth</span></h2>
            </div>
            <div className="services-grid">
              <div className="card">
                <div className="card-icon">🗺️</div>
                <h3>Local Pack Dominance</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                  We embed your Google Business Profile data directly into the cloud matrix to anchor your brand inside Dubai's local search pack.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">⚡</div>
                <h3>Tier-2 Backlink Boosting</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                  We build cloud stacks behind your existing high-value press releases and guest posts, forcing search bots to value them tenfold.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">🛡️</div>
                <h3>Online Reputation Management</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
                  We flood search results with trusted cloud assets to systematically push down negative competitor comparisons or outdated press.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SAFETY & COMPLIANCE ── */}
        <section className="section" style={{ backgroundColor: 'var(--bg-card)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2>Enterprise-Grade Safety for <span className="text-gradient">High-Value Brands</span></h2>
              </div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                  This is not a cheap automated bot service. RapidScope Marketing executes Cloud Authority Stacking through rigorous, manual web engineering. We write unique content, construct compliant cloud repositories, and structure links cleanly — protecting your primary domain while maximizing performance.
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
            <h2>Fortify Your Search Rankings Today</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
              Don't leave your brand's authority to chance. Partner with RapidScope to engineer an impenetrable cloud asset network that keeps you at the top of Dubai's digital market.
            </p>
            {form.submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Request Received!</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                Thank you! Our cloud engineering team will get back to you within 24 hours with a custom architecture proposal.
              </p>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Your Name" value={form.fields.name} onChange={form.handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="keyword" className="form-control" placeholder="Target Keyword" value={form.fields.keyword} onChange={form.handleChange} />
              </div>
              <div className="form-group">
                <input type="url" name="website" className="form-control" placeholder="Current Domain URL" value={form.fields.website} onChange={form.handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Email Address" value={form.fields.email} onChange={form.handleChange} required />
              </div>
              {form.error && <p style={{ color: '#ff6b6b', fontSize: '0.85rem', marginBottom: '1rem' }}>{form.error}</p>}
              <button type="submit" className="btn btn-accent" style={{ width: '100%' }} disabled={form.submitting}>
                {form.submitting ? 'Submitting...' : 'Build My Cloud Stack Architecture'}
              </button>
            </form>
          )}
          </div>
        </section>

      </div>
    </Layout>
  );
}
