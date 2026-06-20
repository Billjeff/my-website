import Layout from '@/components/Layout';
import Link from 'next/link';

const mapPieces = [
  {
    title: 'Pillar pages',
    desc: 'Core commercial and informational pages that define the main topics your brand must own.',
  },
  {
    title: 'Cluster content',
    desc: 'Supporting articles and service pages that answer buyer questions and close semantic gaps.',
  },
  {
    title: 'Internal links',
    desc: 'A linking structure that helps search engines understand which pages deserve the most authority.',
  },
];

const outputs = [
  'Priority topics grouped by search intent and commercial value',
  'Recommended pillar pages, service pages, and supporting articles',
  'Internal link paths that connect clusters to revenue pages',
  'Briefing notes for content depth, entities, FAQs, and AI-search clarity',
];

const faqs = [
  {
    q: 'What is an SEO topical map?',
    a: 'A topical map is a structured plan for the pages and content a website needs to cover a subject properly. It organizes pillars, clusters, questions, internal links, and search intent so content production becomes focused.',
  },
  {
    q: 'How does a topical map help AI search visibility?',
    a: 'AI search systems rely on clear entities, complete answers, and well-structured pages. A topical map helps your site explain a subject deeply and consistently, which can improve citability and topical authority over time.',
  },
  {
    q: 'Can Rapid Scope create the content after the map?',
    a: 'Yes. The topical map can be delivered as a standalone strategy, or Rapid Scope can help turn it into briefs, service pages, cluster content, internal links, and ongoing SEO execution.',
  },
];

export default function TopicalMap() {
  return (
    <Layout
      canonicalPath="/topical-map"
      description="Build an SEO topical map that turns keyword ideas into pillar pages, content clusters and internal links for stronger topical authority."
      faqs={faqs}
      pageType="WebPage"
      serviceName="Topical Map Service"
      title="Topical Map Services Dubai | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">Topical authority</p>
            <h1>Build the content architecture your market deserves.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              A topical map turns scattered keyword ideas into a structured content system that supports rankings, AI search visibility, and stronger buyer journeys.
            </p>
            <Link href="/contact" className="btn btn-primary">Request Your Map</Link>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container three-card-grid">
          {mapPieces.map((piece, index) => (
            <article className="light-card" key={piece.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{piece.title}</h3>
              <p>{piece.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="section-kicker">Why it works</p>
            <h2>Search engines reward complete answers.</h2>
          </div>
          <div className="copy-stack">
            <p>
              A topical map helps your website cover the subject deeply enough that search engines and AI systems can understand your expertise.
            </p>
            <p>
              Rapid Scope maps the pillars, clusters, questions, page intent, and internal links so content production becomes focused instead of random.
            </p>
            <p>
              For Dubai businesses, this is especially useful when service pages need to support local intent, industry-specific questions, and buyer journeys that move from research to enquiry.
            </p>
          </div>
        </div>
      </section>

      <section className="section audit-section">
        <div className="container audit-section__grid">
          <div>
            <p className="section-kicker">Map deliverables</p>
            <h2>A content architecture your team can actually build from.</h2>
            <p>
              The goal is not a spreadsheet full of random keywords. The goal is a publishing system that shows which pages matter, how they connect, and what each page needs to answer.
            </p>
            <Link href="/seo-consultation" className="btn btn-ghost">Discuss Content Strategy</Link>
          </div>
          <div className="audit-list">
            {outputs.map((output, index) => (
              <div key={output}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{output}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-section__grid">
          <div>
            <p className="section-kicker">Topical map FAQ</p>
            <h2>Questions before you plan the cluster.</h2>
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
