import Layout from '@/components/Layout';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'PopUpOutlets.com: Owning Page 1 of Google (and AI Search)',
    href: '/case-studies/popup-outlets-seo',
    tag: 'SEO',
    desc: 'A specialist e-commerce brand ranks #1 for its top buying searches, holds 210 page-1 keywords, and is now cited directly by Bing Copilot and ChatGPT.',
  },
  {
    title: 'Conference Room AV: Page 2 to Page 1 of Google',
    href: '/case-studies/conference-room-av-seo',
    tag: 'SEO',
    desc: "A multi-year engagement lifted Conference Room AV's average Google position from 17.2 to 6.0 and grew search impressions 21% year over year to 15M+ in 16 months.",
  },
  {
    title: 'Zero to 472 Page-1 Keywords for a Brand-New Caribbean Travel Site',
    href: '/case-studies/caribbean-travel-site-seo',
    tag: 'SEO',
    desc: 'A new domain with no authority grew into 472 page-1 keywords, 275,380 impressions, and 345% organic click growth in 90 days.',
  },
  {
    title: '+623% Weekly Organic Clicks in 90 Days for a Brand-New Turks & Caicos Travel Site',
    href: '/case-studies/turks-and-caicos-resort-guide',
    tag: 'SEO',
    desc: 'A zero-authority domain grew from 30 to 217 organic clicks a week in one quarter, with 88 of 106 pages holding average page-1 positions.',
  },
];

export default function CaseStudies() {
  return (
    <Layout
      canonicalPath="/case-studies"
      description="Real SEO results from Rapid Scope Marketing campaigns, backed by Google Search Console data. See how we grow organic visibility for new and established websites."
      pageType="CollectionPage"
      title="SEO Case Studies | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">Case Studies</p>
            <h1>Proof, not promises.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              Every case study on this page is built from real Google Search Console data. No projections, no cherry-picked screenshots without context — just what happened, when, and why.
            </p>
            <Link href="/contact" className="btn btn-primary">Claim Your Free Audit</Link>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="service-index">
            {caseStudies.map((study, index) => (
              <Link href={study.href} className="service-index__row" key={study.href}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{study.title}</h2>
                <p>{study.desc}</p>
                <strong>Read case study</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
