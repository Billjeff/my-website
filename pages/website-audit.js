import Layout from '@/components/Layout';
import Link from 'next/link';

const auditAreas = [
  {
    title: 'Technical health',
    desc: 'Crawlability, indexation, Core Web Vitals, JavaScript rendering, schema, redirects, and sitemap quality.',
  },
  {
    title: 'Content and intent',
    desc: 'Service page structure, keyword gaps, headings, metadata, internal links, and answer quality for buyers.',
  },
  {
    title: 'Conversion friction',
    desc: 'Mobile usability, CTA clarity, page hierarchy, form friction, and trust signals that affect lead quality.',
  },
];

const steps = [
  'Baseline scan and priority issue discovery',
  'Competitor and search intent gap review',
  'Impact-ranked roadmap for fixes and growth',
  'Implementation plan your team can action',
];

export default function WebsiteAudit() {
  return (
    <Layout
      canonicalPath="/website-audit"
      description="Get a technical SEO and content audit for your Dubai business, covering crawlability, Core Web Vitals, schema, content gaps and a prioritized roadmap."
      pageType="WebPage"
      serviceName="Website Audit"
      title="Website Audit Dubai | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">Website audit</p>
            <h1>Find the technical and content issues holding your site back.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              Rapid Scope audits your website like a growth system: search access, content quality, performance, UX, and conversion paths all in one practical roadmap.
            </p>
            <Link href="/contact" className="btn btn-primary">Claim Your Free Initial Check</Link>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">What we inspect</p>
            <h2>A clear view of what to fix first.</h2>
          </div>
          <div className="three-card-grid">
            {auditAreas.map((area, index) => (
              <article className="light-card" key={area.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section audit-section">
        <div className="container audit-section__grid">
          <div>
            <p className="section-kicker">Audit process</p>
            <h2>From scan to action plan.</h2>
            <p>
              The goal is not a giant report nobody uses. The goal is a prioritized set of fixes that improves visibility, usability, and the chance that qualified visitors become leads.
            </p>
            <Link href="/contact" className="btn btn-ghost">Request an Audit</Link>
          </div>
          <div className="audit-list">
            {steps.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-split">
          <div>
            <p className="section-kicker">Start here</p>
            <h2>Get the roadmap before the retainer.</h2>
          </div>
          <Link href="/contact" className="btn btn-primary">Book Your Audit</Link>
        </div>
      </section>
    </Layout>
  );
}
