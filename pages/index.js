import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Rapid Scope Marketing LLC | Top SEO Agency in Dubai">

      {/* ── HERO ── */}
      <section className="hero-split">
        {/* Left: copy */}
        <div className="hero-split__text animate-fade-in">
          <span className="hero-eyebrow">Dubai's Premier SEO Agency</span>
          <h1>
            Dominate Search.<br />
            <span className="text-gradient">Elevate Your Brand.</span>
          </h1>
          <p>
            Rapid Scope Marketing LLC is the UAE's most results-driven SEO and digital marketing agency.
            We transform search engine visibility into your most valuable business asset.
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">Get a Free Audit</Link>
            <Link href="/services" className="btn btn-ghost">Our Services →</Link>
          </div>
          {/* trust badges */}
          <div className="hero-trust">
            <span>✔ No long-term contracts</span>
            <span>✔ Proven UAE results</span>
            <span>✔ Transparent reporting</span>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="hero-split__image">
          <div className="hero-img-glow" />
          <img
            src="/hero.svg"
            alt="Rapid Scope Marketing – SEO Dubai"
            className="hero-img"
          />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h2 className="text-gradient">87%</h2>
              <p>Average ROI Increase</p>
            </div>
            <div className="stat-item">
              <h2 className="text-gradient">12+</h2>
              <p>Years Expertise</p>
            </div>
            <div className="stat-item">
              <h2 className="text-gradient">250+</h2>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h2 className="text-gradient">#1</h2>
              <p>Rankings Achieved</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="hero-eyebrow">Our Expertise</span>
            <h2>Architecting Digital <span className="text-gradient">Dominance</span></h2>
          </div>
          <div className="services-grid">
            <div className="card">
              <div className="card-icon">🔗</div>
              <h3>High DA Cloud Link Stacking</h3>
              <p>Our "Secret Sauce". High-authority cloud platform backlinks that skyrocket your domain authority.</p>
              <Link href="/services" className="card-link">Learn More →</Link>
            </div>
            <div className="card">
              <div className="card-icon">🗺️</div>
              <h3>Topical Map Service</h3>
              <p>Advanced Semantic SEO. We build topical authority structures that make Google trust your site completely.</p>
              <Link href="/services" className="card-link">Learn More →</Link>
            </div>
            <div className="card">
              <div className="card-icon">📈</div>
              <h3>Website Audit & Monthly SEO</h3>
              <p>Deep technical audits and ongoing data-driven campaigns delivering the highest ROI in competitive markets.</p>
              <Link href="/services" className="card-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to rank higher in Dubai?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
            Book a free strategy session with our SEO experts today.
          </p>
          <Link href="/contact" className="btn btn-primary">Book Free Consultation</Link>
        </div>
      </section>

    </Layout>
  );
}
