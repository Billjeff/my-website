import Layout from '@/components/Layout';
import Link from 'next/link';

const principles = [
  {
    title: 'Technical truth first',
    desc: 'We start with crawlability, performance, structure, and data before prescribing content or authority work.',
  },
  {
    title: 'Useful content wins',
    desc: 'Every page should answer a buyer question, support a decision, or move a prospect closer to action.',
  },
  {
    title: 'Transparent execution',
    desc: 'You see what is being fixed, why it matters, and how it connects to organic visibility and lead quality.',
  },
];

export default function About() {
  return (
    <Layout title="About Rapid Scope Marketing LLC | Dubai SEO Agency">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">About Rapid Scope</p>
            <h1>The search partner for brands that want sharper growth.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              Rapid Scope Marketing LLC helps ambitious UAE businesses improve search visibility, technical performance, and website conversions with practical, evidence-led digital marketing.
            </p>
            <Link href="/contact" className="btn btn-primary">Talk to Rapid Scope</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="section-kicker">Our point of view</p>
            <h2>Modern SEO is a full website system.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Search has moved beyond isolated keyword tactics. Strong organic growth now depends on technical access, content depth, authority signals, local relevance, and a page experience that makes the next step obvious.
            </p>
            <p>
              We bring these parts together for businesses in Dubai and the wider UAE: clear audits, focused implementation, conversion-led web design, and transparent reporting.
            </p>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">What guides the work</p>
            <h2>Principles that keep campaigns useful.</h2>
          </div>
          <div className="three-card-grid">
            {principles.map((principle, index) => (
              <article className="light-card" key={principle.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{principle.title}</h3>
                <p>{principle.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-split">
          <div>
            <p className="section-kicker">Ready for clarity?</p>
            <h2>Start with a focused audit.</h2>
          </div>
          <Link href="/website-audit" className="btn btn-primary">See Audit Service</Link>
        </div>
      </section>
    </Layout>
  );
}
