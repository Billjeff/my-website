import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const siteUrl = 'https://rapidscopemarketing.com';
const siteName = 'Rapid Scope Marketing LLC';
const defaultDescription = 'SEO, GEO and web design agency in Dubai helping UAE businesses improve technical performance, search visibility and qualified lead generation.';
const logoUrl = `${siteUrl}/brand/rapid-scope-mark.png`;
const breadcrumbLabels = {
  '/about': 'About',
  '/contact': 'Contact',
  '/pricing': 'Pricing',
  '/services': 'Services',
};
const servicesDropdown = [
  { href: '/cloud-link-stacking', label: 'High DA Cloud Link Stacking' },
  { href: '/website-audit', label: 'Website Audit Service' },
  { href: '/topical-map', label: 'Topical Map Service' },
  { href: '/monthly-seo', label: 'Monthly SEO Service' },
  { href: '/seo-consultation', label: 'SEO Consultation' },
  { href: '/web-design', label: 'Web Design & Development' },
];

function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${siteUrl}${path === '/' ? '/' : path}`;
}

function cleanTitle(title) {
  return title
    .replace(' | Rapid Scope Marketing', '')
    .replace(' | Dubai SEO Agency', '')
    .replace('Rapid Scope Marketing LLC | ', '')
    .trim();
}

function buildBreadcrumbs({ canonicalPath, serviceName, title }) {
  if (canonicalPath === '/') return [];

  const current = {
    href: absoluteUrl(canonicalPath),
    name: serviceName || breadcrumbLabels[canonicalPath] || cleanTitle(title),
  };

  if (serviceName) {
    return [
      { href: `${siteUrl}/`, name: 'Home' },
      { href: `${siteUrl}/services`, name: 'Services' },
      current,
    ];
  }

  return [
    { href: `${siteUrl}/`, name: 'Home' },
    current,
  ];
}

function buildSchema({ breadcrumbs, canonicalUrl, description, faqs, pageType, serviceName, title }) {
  const graph = [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: logoUrl,
      image: logoUrl,
      email: 'bilal@rapidscopemarketing.com',
      telephone: '+971566456855',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Building #8, Ground floor, DMC, Dubai Internet City',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Technical SEO' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Consultation' } },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en',
    },
    {
      '@type': pageType,
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'en',
    },
  ];

  if (serviceName) {
    graph.push({
      '@type': 'Service',
      '@id': `${canonicalUrl}#service`,
      name: serviceName,
      description,
      provider: { '@id': `${siteUrl}/#organization` },
      areaServed: [
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      url: canonicalUrl,
    });
  }

  if (pageType === 'ContactPage') {
    graph.push({
      '@type': 'ContactPage',
      '@id': `${canonicalUrl}#contact`,
      url: canonicalUrl,
      name: title,
      mainEntity: { '@id': `${siteUrl}/#organization` },
    });
  }

  if (breadcrumbs.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.href,
      })),
    });
  }

  if (faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export default function Layout({
  children,
  canonicalPath = '/',
  description = defaultDescription,
  faqs = [],
  pageType = 'WebPage',
  serviceName = '',
  title = 'Rapid Scope Marketing LLC | Dubai SEO Agency',
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const canonicalUrl = absoluteUrl(canonicalPath);
  const breadcrumbs = buildBreadcrumbs({ canonicalPath, serviceName, title });
  const schema = buildSchema({ breadcrumbs, canonicalUrl, description, faqs, pageType, serviceName, title });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/brand/rapid-scope-favicon.png" type="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={logoUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={logoUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <nav className="navbar">
        <div className="container">
          <Link href="/" className="nav-logo">
            <Image className="nav-logo__mark" src="/brand/rapid-scope-mark.png" alt="" width={56} height={56} priority />
            <span className="nav-logo__text" aria-label="Rapid Scope Marketing LLC">
              <span>Rapid Scope</span>
              <span>Marketing</span>
            </span>
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
            <div className="nav-dropdown">
              <Link
                aria-haspopup="true"
                className="nav-dropdown__trigger"
                href="/services"
                onClick={() => setMenuOpen(false)}
              >
                Services
                <span aria-hidden="true">+</span>
              </Link>
              <div className="nav-dropdown__menu" aria-label="Services menu">
                {servicesDropdown.map((service) => (
                  <Link href={service.href} key={service.href} onClick={() => setMenuOpen(false)}>
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/website-audit" onClick={() => setMenuOpen(false)}>Audit</Link>
            <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link href="/web-design" onClick={() => setMenuOpen(false)}>Web Design</Link>
            <Link href="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      </nav>

      <main>
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumb-strip" aria-label="Breadcrumb">
            <ol className="container breadcrumb-list">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <li key={item.href}>
                    {isLast ? (
                      <span aria-current="page">{item.name}</span>
                    ) : (
                      <Link href={item.href.replace(siteUrl, '') || '/'}>{item.name}</Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        {children}
      </main>

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
              <p><Link href="/pricing">Pricing</Link></p>
            </div>
            <div>
              <h3>Contact</h3>
              <p><strong>Office:</strong> Building #8, Ground floor, DMC<br />Dubai Internet City, UAE</p>
              <p><strong>Phone:</strong> <a href="tel:+971566456855" style={{ color: 'inherit' }}>+971 566456855</a></p>
              <p><strong>Email:</strong> <a href="mailto:bilal@rapidscopemarketing.com" style={{ color: 'inherit' }}>bilal@rapidscopemarketing.com</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Rapid Scope Marketing LLC. All rights reserved. &mdash; v1.0.0</p>
          </div>
        </div>
      </footer>
    </>
  );
}
