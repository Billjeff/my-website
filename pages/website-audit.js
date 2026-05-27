import Layout from '@/components/Layout';
import Link from 'next/link';

export default function WebsiteAudit() {
  return (
    <Layout title="Website Audit Service | Rapid Scope Marketing LLC">
      <div style={{ paddingTop: '120px' }}>
        <section className="section">
          <div className="container animate-fade-in">
            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="hero-eyebrow">Technical Excellence</span>
              <h1>Website Audit & SEO Audit Service</h1>
              <p style={{ maxWidth: '700px', margin: '1.5rem auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>
                Uncover hidden issues holding your website back. Our comprehensive technical audit identifies every obstacle between your site and the top of Google.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Get Your Free Website Audit →
              </Link>
            </div>

            {/* What We Audit */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🔍 Technical SEO</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  We crawl your entire site to identify crawl errors, broken links, duplicate content, and indexing issues that silently sabotage your rankings.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>⚡ Core Web Vitals</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Page speed, mobile responsiveness, and user experience factors directly impact your Google rankings. We measure and optimize every metric.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🏗️ Site Architecture</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Is your site structure helping or hurting? We analyze URL hierarchy, internal linking, and navigation to ensure search engines can find and rank every page.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>📱 Mobile Optimization</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  With over 60% of Dubai searches on mobile, we ensure your site delivers a flawless experience across all devices and screen sizes.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🔗 Backlink Profile</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  We analyze your backlink profile for toxic links, missed opportunities, and competitor gaps that represent immediate ranking potential.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>📊 Content Quality</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Thin content, keyword stuffing, and missing meta tags are ranking killers. We evaluate every page for content optimization opportunities.
                </p>
              </div>
            </div>

            {/* Audit Process */}
            <div style={{ backgroundColor: 'var(--bg-card)', padding: '4rem', borderRadius: '8px', marginBottom: '4rem' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our 5-Step Audit Process</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>1</div>
                  <h4>Deep Crawl</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Complete site crawl with 500+ data points</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>2</div>
                  <h4>Competitor Analysis</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Compare against top 10 competitors</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>3</div>
                  <h4>Issue Identification</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Prioritized fixes by impact</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>4</div>
                  <h4>Action Plan</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Step-by-step implementation guide</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>5</div>
                  <h4>Re-audit</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Verify improvements after fixes</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-banner">
              <div className="container" style={{ textAlign: 'center' }}>
                <h2>Don't Let Technical Issues Cost You Rankings</h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
                  73% of websites have at least one critical SEO issue. Find yours before your competitors do.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Request Your Free Audit Report
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
