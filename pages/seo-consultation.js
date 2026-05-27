import Layout from '@/components/Layout';
import Link from 'next/link';

export default function SEOConsultation() {
  return (
    <Layout title="SEO Expert Consultation | Rapid Scope Marketing LLC">
      <div style={{ paddingTop: '120px' }}>
        <section className="section">
          <div className="container animate-fade-in">
            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="hero-eyebrow">Expert Guidance</span>
              <h1>SEO Expert Consultation</h1>
              <p style={{ maxWidth: '700px', margin: '1.5rem auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>
                Get direct access to top-tier SEO strategists who have driven results for 250+ businesses across the UAE. No fluff — just proven strategies tailored to your goals.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Book Your Free Consultation →
              </Link>
            </div>

            {/* Why Consult With Us */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>Why Top Businesses Choose Us</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  With over 12 years in the SEO industry and 250+ successful campaigns across Dubai, Abu Dhabi, and the wider UAE, we bring battle-tested strategies that produce measurable results.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Our consultations aren't generic advice — they're customized action plans based on your specific industry, competition level, and business objectives.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Whether you're a startup trying to break into competitive markets or an established brand looking to defend and expand your rankings, we have the playbook.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Consultation Deliverables</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong style={{ color: 'var(--text-light)' }}>30-Min Strategy Session</strong>
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong style={{ color: 'var(--text-light)' }}>Competitor Gap Analysis</strong>
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong style={{ color: 'var(--text-light)' }}>Quick Wins Report</strong>
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong style={{ color: 'var(--text-light)' }}>90-Day Roadmap</strong>
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong style={{ color: 'var(--text-light)' }}>Implementation Guidance</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* Industries We Serve */}
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Industries We've Dominated</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏨</div>
                <h4 style={{ color: 'var(--accent-color)' }}>Hospitality</h4>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏗️</div>
                <h4 style={{ color: 'var(--accent-color)' }}>Real Estate</h4>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</div>
                <h4 style={{ color: 'var(--accent-color)' }}>Finance</h4>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏥</div>
                <h4 style={{ color: 'var(--accent-color)' }}>Healthcare</h4>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛒</div>
                <h4 style={{ color: 'var(--accent-color)' }}>E-Commerce</h4>
              </div>
              <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚖️</div>
                <h4 style={{ color: 'var(--accent-color)' }}>Legal</h4>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-banner">
              <div className="container" style={{ textAlign: 'center' }}>
                <h2>Your Competitors Are Already Consulting Experts</h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
                  Get the same advantage. Book your free strategy session today.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Book Free Strategy Session
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
