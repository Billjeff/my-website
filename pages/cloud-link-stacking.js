import Layout from '@/components/Layout';
import Link from 'next/link';

const benefits = [
  {
    title: 'Controlled authority assets',
    desc: 'Structured supporting properties that reinforce priority pages without relying on random low-quality placements.',
  },
  {
    title: 'Search-safe architecture',
    desc: 'Cloud properties, semantic content, and internal linking patterns designed as a buffer around your main domain.',
  },
  {
    title: 'Local relevance',
    desc: 'Entity, location, and service signals aligned to your Dubai and UAE search opportunities.',
  },
];

export default function CloudLinkStacking() {
  return (
    <Layout title="Cloud Link Stacking Services Dubai | Rapid Scope Marketing">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">Authority architecture</p>
            <h1>Cloud link stacking for campaigns that need stronger support.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              Rapid Scope builds structured cloud authority assets that support important landing pages, strengthen entity signals, and give competitive SEO campaigns another layer of trust.
            </p>
            <Link href="/contact" className="btn btn-primary">Request a Proposal</Link>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container three-card-grid">
          {benefits.map((benefit, index) => (
            <article className="light-card" key={benefit.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="section-kicker">Best use case</p>
            <h2>Use it as part of a wider authority strategy.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Cloud link stacking should not replace technical SEO, useful content, or a well-built website. It works best when those fundamentals are already in place and a campaign needs more supporting authority.
            </p>
            <p>
              We use this carefully for competitive niches where local relevance, structured supporting assets, and safe implementation matter.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
