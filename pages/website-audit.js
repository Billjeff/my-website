import Layout from '@/components/Layout';
import PricingTables from '@/components/PricingTables';
import RelatedServices from '@/components/RelatedServices';
import ServiceDepth from '@/components/ServiceDepth';
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

const outcomes = [
  {
    title: 'Know what Google can access',
    desc: 'We review indexation signals, internal links, rendering risks, redirects, canonicals, sitemap coverage, and page templates so technical gaps are visible.',
  },
  {
    title: 'Prioritize what affects revenue',
    desc: 'Every finding is tied to impact, effort, and the buyer journey, so your team knows what to fix first and what can wait.',
  },
  {
    title: 'Turn findings into execution',
    desc: 'You receive a practical roadmap with implementation guidance for developers, content teams, and stakeholders who need clear next steps.',
  },
];

const faqs = [
  {
    q: 'What does a Rapid Scope website audit include?',
    a: 'The audit reviews technical SEO, crawlability, indexation, Core Web Vitals signals, metadata, schema readiness, content quality, internal links, mobile UX, conversion paths, and the priority fixes most likely to improve visibility and qualified leads.',
  },
  {
    q: 'Is this only for websites in Dubai?',
    a: 'Dubai and UAE businesses are the main focus, but the audit framework works for any website that needs clearer technical foundations, stronger service pages, and better search visibility.',
  },
  {
    q: 'Do you implement the audit recommendations?',
    a: 'Yes. The audit can stand alone as a roadmap, or Rapid Scope can help implement the technical fixes, content updates, internal links, schema, and web design improvements after the review.',
  },
];

const relatedServices = [
  {
    title: 'Monthly SEO',
    href: '/monthly-seo',
    desc: 'Turn the audit roadmap into consistent technical fixes, content improvements, internal links, and reporting.',
  },
  {
    title: 'Web Design',
    href: '/web-design',
    desc: 'Rebuild weak templates, conversion paths, and mobile experiences when the audit shows design is limiting growth.',
  },
  {
    title: 'SEO Consultation',
    href: '/seo-consultation',
    desc: 'Discuss the audit findings and decide which technical, content, or authority work should happen first.',
  },
];

const depthParagraphs = [
  'The most useful website audit does more than list errors. It explains the relationship between technical access, page quality, search intent, and the moments where a visitor decides whether to trust the business enough to enquire.',
  'Rapid Scope turns the review into a decision tool. If a page has crawl issues, weak metadata, thin service copy, slow mobile loading, or unclear CTAs, the roadmap shows whether that issue is urgent, revenue-facing, and realistic to fix with the resources available.',
  'That context matters for Dubai and UAE businesses because search visibility is often local, competitive, and service-led. The audit helps identify which pages should protect existing rankings, which pages need deeper content, and which parts of the website need technical or design support before more traffic is sent to them.',
];

export default function WebsiteAudit() {
  return (
    <Layout
      canonicalPath="/website-audit"
      description="Get a technical SEO and content audit for your Dubai business, covering crawlability, Core Web Vitals, schema, content gaps and a prioritized roadmap."
      faqs={faqs}
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
            <p>
              See where it leads: an audit-first approach helped <Link href="/case-studies/popup-outlets-seo">Popup Outlets rank #1 and earn ChatGPT and Copilot citations</Link>.
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

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="section-kicker">Why audit first</p>
            <h2>Find the constraint before spending more on traffic.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Many websites lose organic growth because the foundation is unclear: important pages are buried, search engines cannot interpret the structure, content does not match intent, or forms and calls to action create friction after the click.
            </p>
            <p>
              A Rapid Scope audit gives your Dubai business a clean baseline before bigger SEO, GEO, content, or web design work begins. It shows which fixes protect current visibility, which improvements unlock new demand, and where a better buyer journey can turn more qualified visitors into enquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Audit outcomes</p>
            <h2>What you can act on after the review.</h2>
          </div>
          <div className="three-card-grid">
            {outcomes.map((outcome, index) => (
              <article className="light-card" key={outcome.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{outcome.title}</h3>
                <p>{outcome.desc}</p>
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

      <ServiceDepth
        kicker="Roadmap quality"
        title="Useful audits make the next decision easier."
        paragraphs={depthParagraphs}
      />

      <PricingTables type="audit" />

      <section className="section faq-section">
        <div className="container faq-section__grid">
          <div>
            <p className="section-kicker">Website audit FAQ</p>
            <h2>Questions before you request the roadmap.</h2>
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

      <RelatedServices
        intro="A website audit is usually the start of a larger growth path. These services help turn the findings into execution."
        items={relatedServices}
      />

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
