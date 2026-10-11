import Layout from '@/components/Layout';
import MonthlySEOForm from '@/components/MonthlySEOForm';
import RelatedServices from '@/components/RelatedServices';
import { campaignSections, deliverables, faqs, packages } from '@/lib/monthly-seo-content';
import { monthlySeoImagery } from '@/lib/monthly-seo-imagery';
import Image from 'next/image';
import Link from 'next/link';

const pageImage = {
  src: '/case-studies/caribbean-travel/gsc-panel.png',
  caption: 'Google Search Console evidence from the Caribbean travel SEO case study',
};
const relatedServices = [
  { title: 'Website audit before monthly SEO', href: '/website-audit', desc: 'Establish the technical baseline and decide which fixes should lead your campaign.' },
  { title: 'Topical map for SEO content planning', href: '/topical-map', desc: 'Connect keyword research, supporting content and your priority commercial pages.' },
  { title: 'SEO consultation for campaign direction', href: '/seo-consultation', desc: 'Get specialist guidance when your internal team will carry out the implementation.' },
  { title: 'Web design for stronger SEO conversion paths', href: '/web-design', desc: 'Scope template and usability improvements when visitors struggle to enquire.' },
];
const contents = [
  ['deliverables', 'Monthly SEO service deliverables'],
  ['packages', 'SEO packages and scope'],
  ...campaignSections.map(({ id, title }) => [id, title]),
  ['case-studies', 'SEO campaign evidence'],
  ['faq', 'Monthly SEO service questions'],
  ['monthly-quote', 'Request a monthly SEO plan'],
];

function MonthlyPhoto({ sectionId, wide = false }) {
  const photo = monthlySeoImagery[sectionId];
  if (!photo) return null;
  return <figure className={`monthly-photo${wide ? ' monthly-photo--wide' : ''}`}>
    <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes={wide ? '(max-width: 800px) 100vw, 1200px' : '(max-width: 800px) 100vw, 600px'} />
    <figcaption>Illustrative photo: <a href={photo.source}>{photo.photographer} / Pexels</a></figcaption>
  </figure>;
}

export default function MonthlySEO() {
  return (
    <Layout
      canonicalPath="/monthly-seo"
      title="Monthly SEO Services & Packages Dubai | Rapid Scope Marketing"
      description="Monthly SEO services in Dubai, UAE: technical SEO, keyword research, content, local SEO and reporting. Compare monthly SEO packages and request a scoped growth plan from Rapid Scope Marketing."
      keywords={['monthly SEO services', 'monthly SEO management', 'technical SEO', 'keyword research', 'local SEO', 'Google Search Console', 'Dubai', 'United Arab Emirates']}
      robots="index, follow, max-image-preview:large"
      serviceName="Monthly SEO Service"
      serviceCatalog={deliverables}
      pageImage={pageImage}
      faqs={faqs}
    >
      <div className="monthly-seo-page">
        <section className="page-hero">
          <div className="container page-hero__grid">
            <div><p className="hero-eyebrow">Dubai &amp; UAE / Ongoing SEO</p><h1>Monthly SEO services for sustained organic growth.</h1></div>
            <div className="page-hero__copy">
              <p>Turn your website into a clearer route to qualified enquiries. Rapid Scope connects technical improvements, useful content and transparent reporting in a monthly SEO plan built around your business.</p>
              <Link className="btn btn-primary" href="#monthly-quote">Request Your Monthly SEO Plan</Link>
              <Link className="monthly-text-link" href="#packages">Compare monthly SEO package scopes</Link>
              <p>See an ongoing campaign in action: the <Link href="/case-studies/conference-room-av-ecommerce-seo">conference room audio video e-commerce website improved average position from 17.2 to 6.0</Link>.</p>
            </div>
          </div>
        </section>
        <nav className="monthly-contents" aria-label="On this page">
          <div className="container"><ul>{contents.map(([id, title]) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ul></div>
        </nav>
        <section className="section">
          <div className="container editorial-grid">
            <div><p className="section-kicker">A connected campaign</p><h2>Monthly SEO services that turn priorities into progress.</h2></div>
            <div className="copy-stack">
              <p>A website rarely stands still. Your competitors publish, products change and customer questions evolve. <strong>Monthly search engine optimization services</strong> give those changes a regular review and implementation cycle.</p>
              <p>Rapid Scope works from a documented roadmap. We connect technical access, content coverage, internal links and conversion paths so each improvement has a purpose. You see what has been completed and what depends on approvals or development work.</p>
              <p>Start with the service that fits your situation. A <Link href="/website-audit">website SEO audit</Link> diagnoses the baseline. A <Link href="/seo-consultation">monthly SEO consulting discussion</Link> can clarify priorities before an ongoing implementation plan.</p>
              <p>The goal is useful organic traffic and a clearer buyer journey. We measure search performance alongside agreed business actions, then adjust the next month of work using evidence rather than a fixed list of tasks.</p>
            </div>
          </div>
        </section>
        <section className="section" id="deliverables">
          <div className="container">
            <div className="section-heading"><p className="section-kicker">What the work covers</p><h2>What do monthly SEO services include?</h2><p>Your proposal defines the mix and volume of work. These are the connected areas we consider when building a campaign.</p></div>
            <div className="monthly-deliverables">
              {deliverables.map((item, index) => <article id={item.id} key={item.id} className="monthly-deliverable">
                <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3><p><strong>{item.summary}</strong></p>
                <MonthlyPhoto sectionId={item.id} />
                {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {item.id === 'internal-linking' && <p>Explore the <Link href="/topical-map">topical map service for your SEO content architecture</Link>.</p>}
                {item.id === 'technical-seo' && <p>See the <Link href="/website-audit">technical SEO audit service</Link> for a standalone diagnosis.</p>}
              </article>)}
            </div>
          </div>
        </section>
        <section className="section home-services" id="packages">
          <div className="container">
            <div className="section-heading"><p className="section-kicker">Agree the scope first</p><h2>Which monthly SEO packages fit your website and budget?</h2><p>These are scope examples, not fixed-price products. Your quote depends on the website, goals and implementation needs.</p></div>
            <div className="three-card-grid">
              {packages.map((item) => <article className="light-card monthly-package" key={item.title}>
                <h3>{item.title}</h3><p><strong>{item.audience}</strong></p>
                {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <a className="btn btn-ghost" href="#monthly-quote">Request this scope</a>
              </article>)}
            </div>
            <aside className="monthly-note"><p><strong>Need an audit before committing to monthly SEO?</strong> Compare the <Link href="/website-audit">website audit packages</Link> or discuss your priorities through our <Link href="/contact">contact page</Link>. Monthly pricing and commercial terms are agreed in the proposal.</p></aside>
          </div>
        </section>
        {campaignSections.map((section) => <section className="section monthly-guide-section" key={section.id} id={section.id}>
          <div className="container">
            <div className="section-heading"><h2>{section.title}</h2><p>{section.intro}</p></div>
            <MonthlyPhoto sectionId={section.id} wide />
            <div className="monthly-guide-grid">
              {section.items.map((item) => <article className="copy-stack" key={item.title}><h3>{item.title}</h3>{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article>)}
            </div>
            {section.id === 'first-90-days' && <p className="monthly-section-link">Build the content roadmap with our <Link href="/topical-map">topical map service</Link>.</p>}
            {section.id === 'measurement' && <p className="monthly-section-link">When usability limits lead quality, explore <Link href="/web-design">web design and development for your SEO campaign</Link>.</p>}
          </div>
        </section>)}
        <section className="section home-services" id="case-studies">
          <div className="container">
            <div className="section-heading"><p className="section-kicker">Evidence with context</p><h2>SEO case studies behind the campaign approach.</h2><p>Results belong to their individual projects and measurement periods. They illustrate the work; they do not predict the outcome of your monthly SEO service.</p></div>
            <div className="monthly-evidence">
              <figure><Image src={pageImage.src} alt={pageImage.caption} width={1917} height={1095} sizes="(max-width: 800px) 100vw, 60vw" /><figcaption>Source: Rapid Scope&apos;s documented Caribbean travel SEO case study.</figcaption></figure>
              <div className="copy-stack">
                <h3>A new travel website with a connected SEO foundation</h3>
                <p>The Caribbean travel project combined topical structure, intent-matched pages and ongoing improvements. Its published case study records 472 page-one keywords and 275,380 impressions during the reported quarter.</p>
                <p><Link href="/case-studies/caribbean-travel-site-seo">Read the Caribbean travel SEO case study</Link> for the starting point, work and measurement context.</p>
                <p>A large product catalog has different priorities. The <Link href="/case-studies/conference-room-av-ecommerce-seo">conference room audio video e-commerce SEO case study</Link> documents improvements to visibility across an established catalog.</p>
                <p>Explore all <Link href="/case-studies">Rapid Scope SEO case studies</Link> and <Link href="/about">learn about the agency</Link> before discussing your campaign.</p>
              </div>
            </div>
            <div className="monthly-evidence monthly-evidence--additional">
              <figure><Image src="/case-studies/conference-room-av/dashboard.png" alt="Search performance dashboard from the Conference Room Audio Video E-Commerce Website SEO case study" width={1977} height={1035} sizes="(max-width: 800px) 100vw, 60vw" /><figcaption>Published campaign evidence; read the case study for dates and context.</figcaption></figure>
              <div className="copy-stack"><h3>Monthly SEO services for an established e-commerce catalog</h3><p>Product discovery needs more than a home-page ranking. Category architecture, crawlability, indexing and useful buying content help connect a large catalog to relevant searches.</p><p>See the starting position, implementation and measurement period in our <Link href="/case-studies/conference-room-av-ecommerce-seo">Conference Room Audio Video E-Commerce Website case study</Link>. For a different retail context, explore the <Link href="/case-studies/popup-outlets-seo">Popup Outlets SEO campaign</Link>. These are project examples, not promised results for a new monthly plan.</p></div>
            </div>
          </div>
        </section>
        <section className="section" id="resources">
          <div className="container editorial-grid">
            <div><p className="section-kicker">Understand the evidence</p><h2>Official guidance for SEO measurement and implementation.</h2></div>
            <div className="copy-stack">
              <p>Read Google&apos;s <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">SEO Starter Guide</a> for the foundations of useful, accessible website content.</p>
              <p>The <a href="https://support.google.com/webmasters/answer/7576553">Search Console performance report guide</a> explains clicks, impressions and average position. These metrics should be interpreted together rather than treated as interchangeable results.</p>
              <p>Google&apos;s <a href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies">structured data guidelines</a> explain why markup must reflect real page content. Our monthly SEO service follows that principle when describing services and FAQs.</p>
            </div>
          </div>
        </section>
        <RelatedServices items={relatedServices} intro="Choose a standalone SEO service or connect it to an ongoing campaign with a clear scope." />
        <section className="section faq-section" id="faq">
          <div className="container faq-section__grid">
            <div><p className="section-kicker">Frequently asked questions</p><h2>Monthly SEO services: frequently asked questions.</h2></div>
            <div className="faq-list">{faqs.map((faq) => <details className="faq-item" key={faq.q}><summary className="faq-question"><h3>{faq.q}</h3></summary><div className="monthly-faq-answer"><p>{faq.a}</p></div></details>)}</div>
          </div>
        </section>
        <section className="section" id="monthly-quote">
          <div className="container cta-split">
            <div className="copy-stack"><p className="section-kicker">Your next step</p><h2>Request a monthly SEO plan with a clear scope.</h2><p>Tell us your website, priority services and business goals. We will review the starting point and recommend an appropriate campaign scope.</p><p>Prefer to speak directly? <a href="tel:+971566456855">Call +971 566456855</a> or <a href="mailto:bilal@rapidscopemarketing.com">email Rapid Scope</a>.</p><p>Rapid Scope Marketing LLC is based in Dubai Internet City, UAE. Your proposal will explain deliverables, pricing, responsibilities and any work outside the monthly SEO plan.</p></div>
            <div className="audit-form-card"><MonthlySEOForm /></div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
