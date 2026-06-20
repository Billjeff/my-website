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

const buildSteps = [
  'Clarify positioning, services, conversion goals, and SEO risks before design starts.',
  'Plan page structure, navigation, internal links, and content hierarchy around buyer intent.',
  'Design responsive layouts that keep forms, CTAs, proof, and service content easy to use on mobile.',
  'Build with performance, metadata, schema readiness, redirects, and launch checks included.',
];

const faqs = [
  {
    q: 'Can Rapid Scope redesign a website without hurting SEO?',
    a: 'Yes. The redesign process considers current URLs, metadata, internal links, page hierarchy, redirects, performance, and indexable content so the new site protects existing visibility while improving conversion paths.',
  },
  {
    q: 'Do you write the website copy too?',
    a: 'Rapid Scope can shape the service page structure and write conversion-focused SEO copy, or work with your existing content. The goal is clear positioning, useful answers, and calls to action that support qualified leads.',
  },
  {
    q: 'What makes the websites SEO-ready?',
    a: 'SEO-ready builds include clean page hierarchy, crawlable content, mobile-first layouts, fast assets, metadata, schema readiness, internal links, sitemap support, and technical checks before launch.',
  },
];

export default function WebDesign() {
  return (
    <Layout
      canonicalPath="/web-design"
      description="Modern web design and development in Dubai, built for SEO, mobile performance, clear buyer journeys and conversion-focused lead generation."
      faqs={faqs}
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
            <p>
              For Dubai and UAE businesses, the website also needs to support local trust: clear service coverage, a consistent brand entity, accessible contact details, and pages that explain what buyers need to know before they enquire.
            </p>
          </div>
        </div>
      </section>

      <section className="section audit-section">
        <div className="container audit-section__grid">
          <div>
            <p className="section-kicker">Build process</p>
            <h2>A website launch should make search visibility easier, not riskier.</h2>
            <p>
              Rapid Scope plans design, content, technical SEO, and conversion flow together. That means the site is not just visually sharper; it is structured to be crawled, understood, trusted, and used.
            </p>
            <Link href="/website-audit" className="btn btn-ghost">Review Your Current Site</Link>
          </div>
          <div className="audit-list">
            {buildSteps.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-section__grid">
          <div>
            <p className="section-kicker">Web design FAQ</p>
            <h2>Questions before you rebuild.</h2>
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
