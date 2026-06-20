import Layout from '@/components/Layout';
import Link from 'next/link';

const features = [
  {
    title: 'Conversion-led UX',
    desc: 'Page structures built around buyer intent, clear calls to action, and a lower-friction path to enquiry.',
  },
  {
    title: 'SEO-first architecture',
    desc: 'Clean URLs, content hierarchy, schema readiness, internal linking, and technical foundations considered from the start.',
  },
  {
    title: 'Performance by default',
    desc: 'Responsive layouts, optimized assets, stable spacing, and Core Web Vitals discipline baked into the build.',
  },
];

export default function WebDesign() {
  return (
    <Layout
      canonicalPath="/web-design"
      description="Modern web design and development in Dubai, built for SEO, mobile performance, clear buyer journeys and conversion-focused lead generation."
      pageType="WebPage"
      serviceName="Web Design and Development"
      title="Web Design & Development Dubai | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">Web design</p>
            <h1>Websites built to rank, persuade, and convert.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              Rapid Scope designs modern websites that pair sharp visual direction with technical SEO, mobile performance, and clear conversion paths.
            </p>
            <Link href="/contact" className="btn btn-primary">Get Your Design Quote</Link>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container three-card-grid">
          {features.map((feature, index) => (
            <article className="light-card" key={feature.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="section-kicker">Build approach</p>
            <h2>Design that supports the whole search journey.</h2>
          </div>
          <div className="copy-stack">
            <p>
              The best website redesign does not stop at looking modern. It clarifies positioning, strengthens service pages, improves speed, protects SEO equity, and makes contact feel easy.
            </p>
            <p>
              We use a mobile-first build process so layouts, forms, navigation, and content hierarchy work cleanly across phone, tablet, and desktop.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
