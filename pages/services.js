import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Services() {
  return (
    <Layout title="Our Services | SEO & Web Design Dubai">
      <div style={{ paddingTop: '120px' }}>
        <section className="section">
          <div className="container animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h6 style={{ color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>What We Do</h6>
              <h2>Bespoke <span className="text-gradient">Digital Solutions</span></h2>
              <p style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'rgba(255,255,255,0.7)' }}>
                We work with you to plan and deploy campaigns that meet, if not exceed, your goals. From Custom Web Development to Organic SEO Campaigns, we work tirelessly to deliver results.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
              <div className="card" style={{ animationDelay: '0s' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-light)' }}>High DA Cloud Link Stacking</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                  Our 'Secret Sauce' strategy. Harness the power of high-authority cloud platforms to build robust, scalable backlinks and skyrocket your SERP rankings.
                </p>
                <Link href="/cloud-link-stacking" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Learn More →</Link>
              </div>

              <div className="card" style={{ animationDelay: '0.1s' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-light)' }}>Website Audit Service</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                  Comprehensive technical and on-page audits to ensure your website meets all search engine requirements for maximum visibility and performance.
                </p>
                <Link href="/website-audit" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Learn More →</Link>
              </div>

              <div className="card" style={{ animationDelay: '0.2s' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-light)' }}>Topical Map Service</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                  Advanced Semantic SEO strategies. We map out topical authority structures to position your site as an industry leader in Google's eyes.
                </p>
                <Link href="/topical-map" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Learn More →</Link>
              </div>

              <div className="card" style={{ animationDelay: '0.3s' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-light)' }}>Monthly SEO Service</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                  Ongoing, data-driven SEO campaigns designed to consistently build authority, drive targeted traffic, and maximize ROI month over month.
                </p>
                <Link href="/monthly-seo" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Learn More →</Link>
              </div>

              <div className="card" style={{ animationDelay: '0.4s' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-light)' }}>SEO Expert Consultation</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                  Direct access to top-tier SEO experts in Dubai that get results. We craft bespoke strategies tailored precisely for your business goals.
                </p>
                <Link href="/seo-consultation" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Learn More →</Link>
              </div>

              <div className="card" style={{ animationDelay: '0.5s' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-light)' }}>Web Design & Development</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                  Scalable Node.js, React, and Next.js development delivering high-performance, conversion-optimized websites that perfectly complement our SEO strategies.
                </p>
                <Link href="/web-design" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Learn More →</Link>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link href="/contact" className="btn btn-primary">
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
