import Layout from '@/components/Layout';
import Link from 'next/link';

const services = [
  {
    title: 'Website Audit',
    href: '/website-audit',
    desc: 'Technical, content, UX, speed, and indexation checks that show exactly what is blocking organic growth.',
  },
  {
    title: 'Monthly SEO',
    href: '/monthly-seo',
    desc: 'Ongoing technical fixes, content planning, reporting, and authority work designed to compound visibility.',
  },
  {
    title: 'Topical Maps',
    href: '/topical-map',
    desc: 'Semantic content architecture that builds topical authority and helps search engines understand your expertise.',
  },
  {
    title: 'SEO Consultation',
    href: '/seo-consultation',
    desc: 'Focused strategy sessions for businesses that need clarity before investing in a full campaign.',
  },
  {
    title: 'Cloud Link Stacking',
    href: '/cloud-link-stacking',
    desc: 'Authority architecture for campaigns that need stronger supporting digital assets and link signals.',
  },
  {
    title: 'Web Design',
    href: '/web-design',
    desc: 'Fast, conversion-focused websites built around search visibility, buyer journeys, and performance.',
  },
];

const tracks = [
  {
    title: 'Start with evidence',
    desc: 'Use a website audit or SEO consultation when you need to understand what is blocking visibility, lead quality, or technical performance.',
    href: '/website-audit',
  },
  {
    title: 'Build the growth system',
    desc: 'Use web design, topical maps, and monthly SEO when the site needs stronger pages, clearer journeys, and consistent execution.',
    href: '/web-design',
  },
  {
    title: 'Support authority safely',
    desc: 'Use cloud link stacking only when the main website, content structure, and priority landing pages are ready for stronger supporting signals.',
    href: '/cloud-link-stacking',
  },
];

export default function Services() {
  return (
    <Layout
      canonicalPath="/services"
      description="Explore Rapid Scope SEO and web design services in Dubai, including technical audits, monthly SEO, topical maps, consultation and conversion-focused websites."
      pageType="CollectionPage"
      title="SEO & Web Design Services Dubai | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">Services</p>
            <h1>SEO and web design services built as one growth engine.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              Choose a focused service or combine audit, technical SEO, content strategy, and web design into a complete search experience.
            </p>
            <Link href="/contact" className="btn btn-primary">Get a Custom Quote</Link>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="service-index">
            {services.map((service, index) => (
              <Link href={service.href} className="service-index__row" key={service.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p>{service.desc}</p>
                <strong>View service</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="section-kicker">How we prioritize</p>
            <h2>Fix the foundation, then scale what works.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Most websites do not need more random activity. They need a clear order of operations: remove technical blockers, strengthen high-intent pages, build topical coverage, and improve conversion paths.
            </p>
            <p>
              Rapid Scope keeps the work commercially grounded, so every sprint is tied to visibility, qualified traffic, and the actions users should take next.
            </p>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Service pathways</p>
            <h2>Choose the right route for your current constraint.</h2>
          </div>
          <div className="three-card-grid">
            {tracks.map((track, index) => (
              <article className="light-card" key={track.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{track.title}</h3>
                <p>{track.desc}</p>
                <Link href={track.href} className="btn btn-ghost">Explore route</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
