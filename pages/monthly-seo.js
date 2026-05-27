import Layout from '@/components/Layout';
import Link from 'next/link';

export default function MonthlySEO() {
  return (
    <Layout title="Monthly SEO Service | Rapid Scope Marketing LLC">
      <div style={{ paddingTop: '120px' }}>
        <section className="section">
          <div className="container animate-fade-in">
            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="hero-eyebrow">Ongoing Growth</span>
              <h1>Monthly SEO Service</h1>
              <p style={{ maxWidth: '700px', margin: '1.5rem auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>
                Consistent, data-driven SEO campaigns that compound your results month over month. We don't just maintain — we grow your organic presence every single month.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Start Your Monthly Plan →
              </Link>
            </div>

            {/* What's Included */}
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Every Month, You Get</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>📊 Monthly Analytics Report</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Detailed performance report showing traffic growth, keyword rankings, backlink acquisition, and ROI metrics. No fluff — just actionable data.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>✍️ Content Creation</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  2-4 SEO-optimized blog posts per month targeting high-intent keywords. Content that ranks and converts.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🔗 Link Building</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  10-20 new high-quality backlinks monthly. Every link is vetted for relevance, authority, and long-term safety.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🔧 Technical Fixes</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Continuous technical optimization — fixing crawl errors, optimizing pages, improving speed, and enhancing user experience.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🔍 Keyword Research</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Monthly keyword opportunity research to find new ranking chances and content angles your competitors are missing.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>💬 Strategy Calls</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Monthly strategy call to discuss results, adjust tactics, and align on business goals. Your success is our priority.
                </p>
              </div>
            </div>

            {/* Results */}
            <div style={{ backgroundColor: 'var(--bg-card)', padding: '4rem', borderRadius: '8px', marginBottom: '4rem' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Average Results Our Clients See</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-color)' }}>87%</div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Avg ROI Increase</p>
                </div>
                <div>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-color)' }}>3.2x</div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Traffic Growth</p>
                </div>
                <div>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-color)' }}>150+</div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Keywords Ranking</p>
                </div>
                <div>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent-color)' }}>94%</div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Client Retention</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-banner">
              <div className="container" style={{ textAlign: 'center' }}>
                <h2>Invest in Growth That Compounds</h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
                  Month 1: Foundation. Month 3: Momentum. Month 6: Domination.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Start Your Monthly SEO Plan
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
