import Layout from '@/components/Layout';
import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    label: '01',
    title: 'Technical SEO',
    href: '/website-audit',
    desc: 'Site architecture, crawlability, rendering, indexation, schema, speed, and Core Web Vitals fixes that remove hidden ranking friction.',
  },
  {
    label: '02',
    title: 'Monthly SEO Growth',
    href: '/monthly-seo',
    desc: 'Compounding campaigns across content, links, reporting, and technical improvements so organic growth does not stall after launch.',
  },
  {
    label: '03',
    title: 'Topical Authority',
    href: '/topical-map',
    desc: 'Entity-led topical maps and content clusters designed to make your website the most complete answer in your market.',
  },
  {
    label: '04',
    title: 'Web Design',
    href: '/web-design',
    desc: 'Fast, conversion-focused websites built with modern UX patterns and SEO-ready technical foundations from day one.',
  },
];

const process = [
  {
    step: 'Scope',
    title: 'Find the growth constraints',
    desc: 'We audit technical health, search demand, competitor coverage, local intent, and conversion paths before recommending work.',
  },
  {
    step: 'Build',
    title: 'Create the search engine',
    desc: 'We improve page structure, content depth, internal links, schema, authority signals, and landing page UX in focused sprints.',
  },
  {
    step: 'Compound',
    title: 'Turn insights into momentum',
    desc: 'You get clear reporting, next actions, and ongoing optimization that connects SEO activity to leads and revenue.',
  },
];

const faqs = [
  {
    q: 'How quickly can SEO start producing results?',
    a: 'Technical fixes can improve visibility quickly, while durable organic growth usually compounds over 3 to 6 months depending on competition, site history, and execution pace.',
  },
  {
    q: 'Do you only work with Dubai businesses?',
    a: 'Dubai and UAE businesses are the core focus, but the same technical SEO, content, and authority systems can support regional or international campaigns.',
  },
  {
    q: 'Can you redesign a website and handle SEO together?',
    a: 'Yes. That is often the strongest path because UX, technical performance, content architecture, and conversion design can be planned as one system.',
  },
];

function useAuditForm() {
  const [fields, setFields] = useState({ name: '', email: '', company: '', website: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          service: 'Free SEO and website audit',
          source: 'homepage-redesign',
        }),
      });

      if (!response.ok) throw new Error('Request failed');

      setSubmitted(true);
      setFields({ name: '', email: '', company: '', website: '' });
    } catch {
      setError('Something went wrong. Please try again or email bilal@rapidscopemarketing.com.');
    }

    setSubmitting(false);
  };

  return { error, fields, handleChange, handleSubmit, submitted, submitting };
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const auditForm = useAuditForm();

  return (
    <Layout title="Rapid Scope Marketing LLC | SEO & Web Design Agency in Dubai">
      <section className="home-hero">
        <div className="home-hero__content">
          <p className="hero-eyebrow">SEO, GEO and web design for ambitious UAE brands</p>
          <h1>
            Build a website that gets found, trusted, and chosen.
          </h1>
          <p>
            Rapid Scope Marketing helps Dubai businesses turn search visibility into qualified leads with technical SEO, content strategy, authority building, and high-performance web design.
          </p>
          <div className="hero-ctas">
            <Link href="/contact" className="btn btn-primary">Claim Your Free Audit</Link>
            <Link href="/services" className="btn btn-ghost">Explore Services</Link>
          </div>
        </div>

        <aside className="home-hero__panel" aria-label="Rapid Scope performance highlights">
          <div className="signal-card signal-card--primary">
            <span>Search visibility</span>
            <strong>Technical SEO + GEO</strong>
          </div>
          <div className="signal-card">
            <span>Primary market</span>
            <strong>Dubai and UAE</strong>
          </div>
          <div className="signal-grid">
            <div>
              <strong>12+</strong>
              <span>years of digital experience</span>
            </div>
            <div>
              <strong>24h</strong>
              <span>audit response window</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Rapid Scope positioning">
        <div className="proof-strip__item">
          <span>01</span>
          <strong>Technical precision</strong>
        </div>
        <div className="proof-strip__item">
          <span>02</span>
          <strong>AI-search ready content</strong>
        </div>
        <div className="proof-strip__item">
          <span>03</span>
          <strong>Conversion-led websites</strong>
        </div>
        <div className="proof-strip__item">
          <span>04</span>
          <strong>Transparent reporting</strong>
        </div>
      </section>

      <section className="section home-intro">
        <div className="container home-intro__grid">
          <div>
            <p className="section-kicker">Why Rapid Scope</p>
            <h2>Search has changed. Your website has to work harder.</h2>
          </div>
          <div className="home-intro__copy">
            <p>
              Google is no longer just ranking pages. It is interpreting entities, passages, experience signals, and answer quality. That means your website needs more than keywords. It needs technical clarity, useful content, trust signals, and a path that makes buyers act.
            </p>
            <p>
              We combine SEO strategy and modern web design so your site can perform across organic search, AI Overviews, local discovery, and conversion-focused landing pages.
            </p>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Core services</p>
            <h2>Everything your growth engine needs.</h2>
          </div>

          <div className="service-showcase">
            {services.map((service) => (
              <Link href={service.href} className="service-showcase__card" key={service.title}>
                <span>{service.label}</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <strong>Learn more</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section audit-section">
        <div className="container audit-section__grid">
          <div>
            <p className="section-kicker">The audit-first approach</p>
            <h2>We do not guess. We scope the opportunity first.</h2>
            <p>
              Your first audit looks at the technical foundation, market opportunity, content gaps, local visibility, and lead journey. You get a practical roadmap before committing to a bigger campaign.
            </p>
            <Link href="/website-audit" className="btn btn-ghost">See Website Audit Service</Link>
          </div>

          <div className="audit-list">
            <div>
              <span>Audit</span>
              <strong>Crawl, indexation, performance, schema, and UX barriers.</strong>
            </div>
            <div>
              <span>Market</span>
              <strong>Competitor gaps, search intent, local demand, and content opportunities.</strong>
            </div>
            <div>
              <span>Roadmap</span>
              <strong>Prioritized fixes and campaigns based on impact, effort, and revenue potential.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading section-heading--split">
            <div>
              <p className="section-kicker">How it works</p>
              <h2>A focused system for organic growth.</h2>
            </div>
            <p>
              The process is intentionally simple: understand what is blocking growth, build the missing pieces, then keep improving what the data proves is working.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item, index) => (
              <article className="process-card" key={item.step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item.step}</p>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section results-section">
        <div className="container results-section__grid">
          <div className="results-metric">
            <span>Built for</span>
            <strong>Search demand, buyer trust, and lead quality</strong>
          </div>
          <div>
            <p className="section-kicker">What success looks like</p>
            <h2>More than rankings. A better route to revenue.</h2>
            <p>
              The goal is not to make a prettier brochure. The goal is a faster, clearer, more authoritative website that helps the right customers find you, understand your value, and take action.
            </p>
            <div className="outcome-list">
              <span>Higher-quality organic traffic</span>
              <span>Cleaner technical performance</span>
              <span>Stronger local search visibility</span>
              <span>More persuasive service pages</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section quote-section">
        <div className="container">
          <blockquote>
            <span>Rapid Scope principle</span>
            <p>
              &ldquo;The strongest SEO strategy is not a list of tasks. It is a complete search experience: technical access, useful answers, trust signals, and a page that makes the next step obvious.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-section__grid">
          <div>
            <p className="section-kicker">Questions</p>
            <h2>Before you book the audit.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <div className={`faq-item ${openFaq === index ? 'faq-item--open' : ''}`} key={item.q}>
                <button
                  aria-expanded={openFaq === index}
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  type="button"
                >
                  <span>{item.q}</span>
                  <span className="faq-chevron" aria-hidden="true">{openFaq === index ? '-' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner audit-form-section">
        <div className="container audit-form-section__grid">
          <div>
            <p className="section-kicker">Start here</p>
            <h2>Claim your free SEO and technical audit.</h2>
            <p>
              Send your website and we will review the most important blockers, opportunities, and next steps. No pressure, no vague pitch deck.
            </p>
          </div>

          <div className="audit-form-card">
            {auditForm.submitted ? (
              <div className="form-success" role="status">
                <span>Request received</span>
                <h3>We will review your website and reply within 24 hours.</h3>
                <button className="btn btn-ghost" onClick={() => window.location.reload()} type="button">Send Another Request</button>
              </div>
            ) : (
              <form onSubmit={auditForm.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="home-name">Your name</label>
                  <input id="home-name" type="text" name="name" className="form-control" value={auditForm.fields.name} onChange={auditForm.handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="home-company">Company name</label>
                  <input id="home-company" type="text" name="company" className="form-control" value={auditForm.fields.company} onChange={auditForm.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="home-website">Website URL</label>
                  <input id="home-website" type="url" name="website" className="form-control" value={auditForm.fields.website} onChange={auditForm.handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="home-email">Email address</label>
                  <input id="home-email" type="email" name="email" className="form-control" value={auditForm.fields.email} onChange={auditForm.handleChange} required />
                </div>
                {auditForm.error && <p className="form-error">{auditForm.error}</p>}
                <button type="submit" className="btn btn-primary" disabled={auditForm.submitting}>
                  {auditForm.submitting ? 'Submitting...' : 'Build My SEO Roadmap'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
