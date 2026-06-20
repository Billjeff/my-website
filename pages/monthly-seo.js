import Layout from '@/components/Layout';
import Link from 'next/link';

const deliverables = [
  'Technical fixes and monitoring',
  'Keyword and opportunity research',
  'Content briefs and optimization',
  'Internal linking improvements',
  'Authority and backlink planning',
  'Monthly reporting and roadmap updates',
];

export default function MonthlySEO() {
  return (
    <Layout
      canonicalPath="/monthly-seo"
      description="Monthly SEO services in Dubai with technical fixes, content planning, internal linking, authority planning and transparent roadmap updates."
      pageType="WebPage"
      serviceName="Monthly SEO Service"
      title="Monthly SEO Service Dubai | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">Ongoing SEO</p>
            <h1>Organic growth that compounds month after month.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              A monthly SEO campaign gives your website consistent technical improvement, stronger content coverage, and the reporting discipline needed to keep momentum.
            </p>
            <Link href="/contact" className="btn btn-primary">Start Your Monthly Plan</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="section-kicker">Every month</p>
          <h2>The work stays focused on impact.</h2>
        </div>
        <div className="container three-card-grid">
          {deliverables.map((item, index) => (
            <article className="card" key={item}>
              <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section results-section">
        <div className="container results-section__grid">
          <div className="results-metric">
            <span>Campaign rhythm</span>
            <strong>Audit. Build. Measure. Improve.</strong>
          </div>
          <div>
            <p className="section-kicker">Why monthly matters</p>
            <h2>SEO is a living system, not a one-off task.</h2>
            <p>
              Search demand changes, competitors publish, technical issues appear, and buyer expectations move. Monthly SEO keeps your site improving instead of drifting.
            </p>
            <div className="outcome-list">
              <span>Clear monthly priorities</span>
              <span>Consistent content progress</span>
              <span>Technical debt reduction</span>
              <span>Transparent reporting</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
