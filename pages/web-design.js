import Layout from '@/components/Layout';
import Link from 'next/link';

export default function WebDesign() {
  return (
    <Layout title="Web Design & Development | Rapid Scope Marketing LLC">
      <div style={{ paddingTop: '120px' }}>
        <section className="section">
          <div className="container animate-fade-in">
            {/* Hero */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="hero-eyebrow">Conversion-Optimized Design</span>
              <h1>Web Design & Development</h1>
              <p style={{ maxWidth: '700px', margin: '1.5rem auto', fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)' }}>
                High-performance websites built with Next.js, React, and Node.js that don't just look great — they convert visitors into customers. Every pixel designed for results.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Get Your Free Design Quote →
              </Link>
            </div>

            {/* Services */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🎨 Custom Web Design</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Bespoke designs tailored to your brand identity. We create layouts that capture attention and guide users toward conversion with intuitive UX patterns.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>⚡ Performance Optimization</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  We build for speed. Core Web Vitals optimized, lazy loading implemented, and CDN configured. Fast sites rank higher and convert better.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>📱 Responsive Development</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Pixel-perfect on every device. From desktop to mobile, your site delivers a flawless experience that keeps users engaged and Google happy.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🔌 CMS Integration</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Easy content management with headless CMS solutions. Update your site without touching code — perfect for marketing teams.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🛒 E-Commerce Solutions</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Scalable online stores with secure payment processing, inventory management, and conversion-optimized product pages.
                </p>
              </div>
              <div className="card">
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>🔗 SEO-First Architecture</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                  Every site we build is SEO-ready from day one. Clean URLs, schema markup, sitemaps, and server-side rendering for maximum visibility.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ backgroundColor: 'var(--bg-card)', padding: '4rem', borderRadius: '8px', marginBottom: '4rem' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Technology Stack</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚛️</div>
                  <h4 style={{ color: 'var(--accent-color)' }}>Next.js</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Server-side rendering</p>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                  <h4 style={{ color: 'var(--accent-color)' }}>React</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Interactive UI</p>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🟢</div>
                  <h4 style={{ color: 'var(--accent-color)' }}>Node.js</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Backend power</p>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎨</div>
                  <h4 style={{ color: 'var(--accent-color)' }}>Tailwind CSS</h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Rapid styling</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-banner">
              <div className="container" style={{ textAlign: 'center' }}>
                <h2>Build a Website That Works as Hard as You Do</h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
                  From concept to launch in weeks, not months. Let's build something that converts.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  Get Your Free Design Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
