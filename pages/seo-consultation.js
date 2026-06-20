import Layout from '@/components/Layout';
import RelatedServices from '@/components/RelatedServices';
import Link from 'next/link';

const deliverables = [
  'Search opportunity review',
  'Competitor gap analysis',
  'Priority technical checks',
  '90-day action roadmap',
  'Implementation guidance',
  'Clear next-step recommendations',
];

const consultationFit = [
  {
    title: 'Before a campaign',
    desc: 'Use the session to understand whether technical SEO, content, authority, local SEO, or web design should come first.',
  },
  {
    title: 'Before a redesign',
    desc: 'Get direction on URL structure, page hierarchy, content migration, redirects, metadata, and conversion paths before the build begins.',
  },
  {
    title: 'When growth has stalled',
    desc: 'Review what is limiting visibility or lead quality, then leave with a focused 90-day roadmap instead of a scattered task list.',
  },
];

const faqs = [
  {
    q: 'Who is SEO consultation for?',
    a: 'It is for business owners, marketing managers, founders, and teams that need clear SEO direction before committing to a campaign, redesign, content plan, or technical cleanup.',
  },
  {
    q: 'What should I prepare before the session?',
    a: 'Bring your website URL, target services, priority locations, current concerns, and any available analytics or Search Console context. Rapid Scope can still review the site without tool access, but more data helps sharpen the recommendations.',
  },
  {
    q: 'Will I get a roadmap after the consultation?',
    a: 'Yes. The session is designed around practical next steps, usually including priority fixes, content opportunities, technical risks, internal linking ideas, and a recommended order of execution.',
  },
];

const relatedServices = [
  {
    title: 'Website Audit',
    href: '/website-audit',
    desc: 'Use a deeper audit when the consultation identifies technical, content, or conversion blockers that need evidence.',
  },
  {
    title: 'Topical Map Service',
    href: '/topical-map',
    desc: 'Turn strategy into a structured plan for pillars, clusters, internal links, and AI-search ready content.',
  },
  {
    title: 'Monthly SEO',
    href: '/monthly-seo',
    desc: 'Move from advice to implementation with an ongoing campaign focused on technical fixes, content, and reporting.',
  },
];

export default function SEOConsultation() {
  return (
    <Layout
      canonicalPath="/seo-consultation"
      description="Book SEO consultation in Dubai for practical guidance on technical SEO, content strategy, topical authority, local visibility and growth priorities."
      faqs={faqs}
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

      <section className="section home-services">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Best fit</p>
            <h2>Use the session when the next move is unclear.</h2>
          </div>
          <div className="three-card-grid">
            {consultationFit.map((item, index) => (
              <article className="light-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="section-kicker">Session format</p>
            <h2>Focused advice for the decisions in front of you.</h2>
          </div>
          <div className="copy-stack">
            <p>
              SEO advice is only useful when it is tied to the current state of the website, the commercial goals behind the work, and the capacity to implement. Rapid Scope uses the consultation to separate urgent blockers from nice-to-have activity.
            </p>
            <p>
              The session can cover technical SEO, content architecture, topical authority, local Dubai search, AI search readiness, web design risks, and what should happen in the next 30, 60, and 90 days.
            </p>
            <p>
              You leave with a practical direction: what to fix, what to build, what to measure, and what not to waste time on yet.
            </p>
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

      <section className="section faq-section">
        <div className="container faq-section__grid">
          <div>
            <p className="section-kicker">SEO consultation FAQ</p>
            <h2>Questions before you book.</h2>
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
        intro="Consultation gives you direction. These services help turn that direction into a practical SEO roadmap."
        items={relatedServices}
      />

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
