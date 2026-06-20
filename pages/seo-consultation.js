import Layout from '@/components/Layout';
import Link from 'next/link';

const deliverables = [
  'Search opportunity review',
  'Competitor gap analysis',
  'Priority technical checks',
  '90-day action roadmap',
  'Implementation guidance',
  'Clear next-step recommendations',
];

export default function SEOConsultation() {
  return (
    <Layout
      canonicalPath="/seo-consultation"
      description="Book SEO consultation in Dubai for practical guidance on technical SEO, content strategy, topical authority, local visibility and growth priorities."
      pageType="WebPage"
      serviceName="SEO Consultation"
      title="SEO Consultation Dubai | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">SEO consultation</p>
            <h1>Get a clear SEO plan before you commit to a campaign.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              A focused consultation gives you direct guidance on what to fix, what to build, and which opportunities are most likely to move the needle.
            </p>
            <Link href="/contact" className="btn btn-primary">Book a Strategy Session</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="section-kicker">What you get</p>
          <h2>Practical direction, not generic advice.</h2>
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

      <section className="cta-banner">
        <div className="container cta-split">
          <div>
            <p className="section-kicker">Need clarity?</p>
            <h2>Start with expert eyes on the problem.</h2>
          </div>
          <Link href="/contact" className="btn btn-primary">Book Consultation</Link>
        </div>
      </section>
    </Layout>
  );
}
