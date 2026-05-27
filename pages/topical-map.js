import Layout from '@/components/Layout';
import Link from 'next/link';

export default function TopicalMap() {
  return (
    <Layout title="Topical Map Service | Rapid Scope Marketing LLC">
      <div style={{ paddingTop: '120px' }}>
        <section className="section">
          <div className="container animate-fade-in">
            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="hero-eyebrow">Semantic SEO Mastery</span>
              <h1>Topical Map Service</h1>
              <p style={{ maxWidth: '700px', margin: '1.5rem auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>
                Build unshakable topical authority that makes Google trust your website as the definitive source in your industry. Our topical mapping strategy positions you as the expert.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Map Your Content Strategy →
              </Link>
            </div>

            {/* What is Topical Authority */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}>
              <div>
                <h2 style={{ marginBottom: '1.5rem' }}>What Is Topical Authority?</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Topical authority is Google's way of determining whether your website is a comprehensive resource on a specific subject. Instead of optimizing for individual keywords, we build content clusters that demonstrate deep expertise across an entire topic.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Think of it as writing an encyclopedia vs. a single blog post. Google rewards the encyclopedia.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Our topical map service creates the strategic content framework that signals comprehensive expertise to search engines, resulting in higher rankings for all related queries — not just the ones you specifically target.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Why Topical Authority Matters</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong style={{ color: 'var(--text-light)' }}>Rank for 10x More Keywords</strong> — Cluster content captures long-tail variations automatically
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong style={{ color: 'var(--text-light)' }}>Algorithm-Proof Strategy</strong> — Topical authority can't be faked or reverse-engineered
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong style={{ color: 'var(--text-light)' }}>Higher Trust Scores</strong> — E-E-A-T signals improve with comprehensive coverage
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong style={{ color: 'var(--text-light)' }}>Competitive Moat</strong> — Creates barriers competitors can't easily overcome
                  </li>
                </ul>
              </div>
            </div>

            {/* How It Works */}
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Topical Mapping Process</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              <div className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🗺️</div>
                <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Topic Research</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>We identify all subtopics and questions your audience searches for.</p>
              </div>
              <div className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔗</div>
                <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Content Clustering</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>We organize topics into interconnected content clusters with strategic internal linking.</p>
              </div>
              <div className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✍️</div>
                <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Content Gap Analysis</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>We find the content gaps your competitors have filled but you haven't.</p>
              </div>
              <div className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
                <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Authority Building</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>We implement the strategy and monitor topical authority growth.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-banner">
              <div className="container" style={{ textAlign: 'center' }}>
                <h2>Become the Authority Google Trusts</h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
                  Stop chasing individual keywords. Build the topical authority that ranks you for everything.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Get Your Topical Map Blueprint
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
