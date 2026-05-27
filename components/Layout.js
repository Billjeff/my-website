import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children, title = 'Rapid Scope Marketing LLC | Dubai SEO Agency' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Rapid Scope Marketing LLC is a top-rated SEO and Web Design agency in Dubai, UAE. We specialize in driving targeted traffic and accelerating business growth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <nav className="navbar">
        <div className="container">
          <Link href="/" className="nav-logo">
            <img src="https://rapidscopemarketing.com/wp-content/uploads/2026/03/RapidScopeLogoTrans.png" alt="Rapid Scope Marketing LLC" />
          </Link>

          {/* Hamburger */}
          <button 
            className={`hamburger ${menuOpen ? 'is-active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

          {/* Desktop nav links */}
          <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <h3>Rapid Scope Marketing LLC</h3>
              <p>Elevating brands in Dubai and the UAE with precision-guided search marketing and cutting-edge web design.</p>
            </div>
            <div>
              <h3>Services</h3>
              <p><Link href="/cloud-link-stacking">High DA Cloud Link Stacking</Link></p>
              <p><Link href="/website-audit">Website Audit Service</Link></p>
              <p><Link href="/topical-map">Topical Map Service</Link></p>
              <p><Link href="/monthly-seo">Monthly SEO Service</Link></p>
              <p><Link href="/seo-consultation">SEO Consultation</Link></p>
              <p><Link href="/web-design">Web Design & Development</Link></p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>📍 Building #8, Ground floor, DMC<br/>&nbsp;&nbsp;&nbsp;&nbsp;Dubai Internet City, UAE</p>
              <p>📞 <a href="tel:+971566456855" style={{color:'inherit'}}>+971 566456855</a></p>
              <p>✉️ <a href="mailto:bilal@rapidscopemarketing.com" style={{color:'inherit'}}>bilal@rapidscopemarketing.com</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Rapid Scope Marketing LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}