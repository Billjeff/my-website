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

export default function TopicalMap() {
  return (
    <Layout title="Topical Map Services Dubai | Rapid Scope Marketing">
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
          </div>
        </div>
      </section>
    </Layout>
  );
}
