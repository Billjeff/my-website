import Layout from '@/components/Layout';
import RelatedServices from '@/components/RelatedServices';
import Link from 'next/link';

const deliverables = [
  'Technical fixes and monitoring',
  'Keyword and opportunity research',
  'Content briefs and optimization',
  'Internal linking improvements',
  'Authority and backlink planning',
  'Monthly reporting and roadmap updates',
];

const campaignSignals = [
  'Technical issues are reviewed regularly instead of waiting for rankings to drop.',
  'Content priorities are chosen from search demand, commercial intent, and gaps in the buyer journey.',
  'Internal links, service pages, and authority signals improve together so progress compounds.',
  'Reporting explains what changed, why it matters, and what should happen next.',
];

const faqs = [
  {
    q: 'What is included in a monthly SEO campaign?',
    a: 'Monthly SEO can include technical fixes, content planning, page optimization, internal links, authority planning, reporting, and ongoing roadmap updates based on search demand and site performance.',
  },
  {
    q: 'How long does monthly SEO take to show results?',
    a: 'Technical improvements can help quickly, but durable organic growth usually compounds over several months depending on competition, website history, content depth, and implementation pace.',
  },
  {
    q: 'Can monthly SEO include web design improvements?',
    a: 'Yes. When conversion paths, mobile UX, service page structure, or site performance are limiting lead quality, Rapid Scope can include design and development improvements in the roadmap.',
  },
];

const relatedServices = [
  {
    title: 'Website Audit',
    href: '/website-audit',
    desc: 'Establish the baseline and priority roadmap before starting a monthly SEO campaign.',
  },
  {
    title: 'Topical Map Service',
    href: '/topical-map',
    desc: 'Plan the content architecture that monthly SEO can build and improve over time.',
  },
  {
    title: 'Web Design',
    href: '/web-design',
    desc: 'Improve templates, page experience, and conversion paths when SEO growth needs stronger UX support.',
  },
];

export default function MonthlySEO() {
  return (
    <Layout
      canonicalPath="/monthly-seo"
      description="Monthly SEO services in Dubai with technical fixes, content planning, internal linking, authority planning and transparent roadmap updates."
      faqs={faqs}
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

      <section className="section audit-section">
        <div className="container audit-section__grid">
          <div>
            <p className="section-kicker">Campaign signals</p>
            <h2>Monthly SEO works when the improvements stay connected.</h2>
            <p>
              Search growth is rarely one lever. Technical access, content quality, internal links, page experience, authority, and reporting all influence whether the right customers can find and trust your website.
            </p>
            <Link href="/website-audit" className="btn btn-ghost">Start With an Audit</Link>
          </div>
          <div className="audit-list">
            {campaignSignals.map((signal, index) => (
              <div key={signal}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{signal}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices
        intro="Monthly SEO compounds fastest when technical foundations, content architecture, and conversion paths are aligned."
        items={relatedServices}
      />

      <section className="section faq-section">
        <div className="container faq-section__grid">
          <div>
            <p className="section-kicker">Monthly SEO FAQ</p>
            <h2>Questions before you commit to ongoing work.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div className="faq-item faq-item--open" key={faq.q}>
                <div className="faq-question">
                  <span>{faq.q}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
