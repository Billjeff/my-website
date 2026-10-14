import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import RelatedServices from '@/components/RelatedServices';
import WhiteLabelSEOForm from '@/components/WhiteLabelSEOForm';
import { deliverables, scopes, operatingSections, faqs } from '@/lib/white-label-seo-content';
import { monthlySeoImagery } from '@/lib/monthly-seo-imagery';

const contents = [
  ['white-label-model', 'White label SEO model'],
  ['seo-reseller-services', 'SEO reseller services'],
  ['white-label-seo-packages', 'White label SEO packages'],
  ...operatingSections.map(({ id, title }) => [id, title]),
  ['quality-checks', 'SEO quality checks'],
  ['campaign-evidence', 'SEO campaign evidence'],
  ['agency-faq', 'White label SEO questions'],
  ['agency-enquiry', 'Request a white label SEO scope'],
];
const relatedServices = [
  { title: 'Website audit', href: '/website-audit', desc: 'Review the technical and content baseline before committing to a delivery roadmap.' },
  { title: 'Topical map', href: '/topical-map', desc: 'Organize client questions, supporting content and commercial destinations.' },
  { title: 'Monthly SEO', href: '/monthly-seo', desc: 'Explore the underlying research, implementation and measurement cycle.' },
  { title: 'SEO consultation', href: '/seo-consultation', desc: 'Clarify priorities when your team will carry out the work.' },
];
const evidenceImage = { src: '/case-studies/conference-room-av/dashboard.png', caption: 'Search performance dashboard from the Conference Room Audio Video E-Commerce Website case study' };

function AgencyPhoto({ photo }) {
  return <figure className="white-label-photo">
    <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 800px) 100vw, 600px" />
    <figcaption>Illustrative photo: <a href={photo.source}>{photo.photographer} / Pexels</a>. Not a client or staff photograph.</figcaption>
  </figure>;
}

export default function WhiteLabelSEO() {
  return <Layout canonicalPath="/white-label-seo" title="White Label SEO & Reseller Services Dubai | Rapid Scope" description="White label SEO agency support in Dubai, UAE. Explore SEO reseller services, audits, content, reporting and delivery scopes. Request an agency proposal." serviceName="White Label SEO" serviceCatalog={deliverables} pageImage={evidenceImage} faqs={faqs} robots="index, follow, max-image-preview:large" keywords={['white label SEO', 'SEO reseller services', 'white label SEO agency', 'SEO outsourcing', 'Dubai', 'United Arab Emirates']} serviceContactPath="/white-label-seo#agency-enquiry" datePublished="2026-10-14">
    <div className="white-label-page">
      <section className="page-hero"><div className="container page-hero__grid">
        <div><p className="hero-eyebrow">Dubai &amp; UAE / Agency delivery</p><h1>White label SEO &amp; SEO reseller services.</h1></div>
        <div className="page-hero__copy"><p>Your agency owns the client relationship. Rapid Scope supports the research, technical priorities, content and reporting behind an agreed SEO delivery scope.</p><Link href="#agency-enquiry" className="btn btn-primary">Discuss Your Agency Scope</Link><p><Link href="#white-label-seo-packages">Compare project, monthly and consulting support</Link></p><p>Build capacity around the work your clients need, with clear handoffs and realistic expectations. Agree outputs, review rhythm and implementation responsibilities before committing to a delivery schedule.</p></div>
      </div></section>
      <nav className="white-label-contents" aria-label="White label SEO page sections"><div className="container"><ul>{contents.map(([id, title]) => <li key={id}><a href={`#${id}`}><span>{title}</span></a></li>)}</ul></div></nav>
      <section className="section" id="white-label-model"><div className="container editorial-grid">
        <div><p className="section-kicker">A specialist delivery relationship</p><h2>White label SEO agency support under your brand.</h2><AgencyPhoto photo={monthlySeoImagery['monthly-reporting']} /></div>
        <div className="copy-stack"><p><strong>White label SEO</strong> lets an agency source defined search optimization work without presenting the delivery specialist as its client-facing brand. Your team manages positioning, sales and client communication. The delivery agreement sets who handles research, approvals, implementation and reporting.</p><p>This model can suit digital marketing agencies expanding an SEO offer, web design studios supporting websites after launch, or consultants needing specialist delivery capacity. It is not simply buying a report and changing the logo. Clients still need useful work, accurate evidence and a clear explanation of the next priorities.</p><p>Rapid Scope Marketing LLC is based in Dubai Internet City, UAE. We connect <Link href="/website-audit">technical SEO audits</Link>, <Link href="/topical-map">content architecture</Link> and ongoing implementation to the client goals. Agency requirements such as branding, confidentiality and communication should be agreed before delivery starts.</p><p>The distinction from a direct engagement is responsibility. Your agency defines its client offer; Rapid Scope defines the delivery scope it can support. Discuss <Link href="/monthly-seo">monthly SEO services</Link> for a direct campaign, or use this page to plan agency fulfillment. Neither approach removes the need for access, factual review and development support.</p><p>Start with a manageable client or project when evaluating a provider. Review the quality of the handoff, clarity of recommendations and ability to explain limitations. That gives your agency a stronger basis for deciding whether the relationship fits its workflow than a promise of instant rankings or guaranteed reseller margins.</p></div>
      </div></section>
      <section className="section" id="seo-reseller-services"><div className="container">
        <div className="section-heading"><p className="section-kicker">Connected deliverables</p><h2>SEO reseller services</h2><p>Choose the work your client website needs. Each proposal defines volume, access, implementation responsibilities and review requirements.</p></div>
        <nav className="white-label-deliverable-nav" aria-label="Explore SEO reseller deliverables"><ul>{deliverables.map((item) => <li key={item.id}><a href={`/white-label-seo#${item.id}`}><span>{item.title}</span></a></li>)}</ul></nav>
        <div className="white-label-deliverables">{deliverables.map((item, index) => <article className="copy-stack" id={item.id} key={item.id}><span className="card-number">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p><strong>{item.summary}</strong></p>{item.paragraphs.map(p => <p key={p}>{p}</p>)}</article>)}</div>
      </div></section>
      <section className="section home-services" id="white-label-seo-packages"><div className="container">
        <div className="section-heading"><p className="section-kicker">Agree the scope first</p><h2>White label SEO packages for different agency needs.</h2><p>These are delivery models, not fixed-price subscriptions. Compare the responsibilities before choosing a package.</p></div>
        <div className="three-card-grid">{scopes.map(scope => <article className="light-card white-label-scope" key={scope.title}><h3>{scope.title}</h3><p><strong>{scope.summary}</strong></p>{scope.paragraphs.map(p => <p key={p}>{p}</p>)}<h4>Deliverables to discuss</h4><ul>{scope.items.map(item => <li key={item}><span>{item}</span></li>)}</ul><Link href="#agency-enquiry" className="btn btn-ghost">Request This Scope</Link></article>)}</div>
      </div></section>
      {operatingSections.map(section => <section className="section white-label-operating" id={section.id} key={section.id}><div className="container"><div className="section-heading"><h2>{section.title}</h2></div><div className="white-label-deliverables">{section.items.map(item => <article className="copy-stack" key={item.title}><h3>{item.title}</h3>{item.paragraphs.map(p => <p key={p}>{p}</p>)}</article>)}</div></div></section>)}
      <section className="section" id="quality-checks"><div className="container editorial-grid">
        <div><p className="section-kicker">Review the work before handing it over</p><h2>White label SEO quality checks your account team can use.</h2><AgencyPhoto photo={monthlySeoImagery['monthly-seo-management']} /></div>
        <div className="copy-stack"><h3>Content, technical and measurement acceptance checks</h3><p>Define what a completed task looks like before approving it. A content draft needs a clear audience, accurate claims and a useful next step. A technical recommendation needs a reproducible problem and a way to check the fix. A report needs a stated measurement period and an explanation of missing data.</p><ul className="white-label-checklist"><li><span>White label SEO content:</span> review intent, factual accuracy, headings, links and brand voice.</li><li><span>Technical SEO:</span> check the published URL, HTTP status, canonical, indexing controls and mobile layout.</li><li><span>SEO reseller reporting:</span> separate completed tasks, blockers, search performance and business outcomes.</li><li><span>Agency handoff:</span> confirm owners, approvals, next priorities and the information safe to share.</li></ul><h4>What about AI search and structured data?</h4><p>Clear answers and accessible pages also support understanding by AI-powered search systems. Service, organization and breadcrumb markup can describe visible facts. Structured data cannot establish expertise or evidence that the content lacks, and it does not guarantee AI citations or rich results.</p><p>Google&apos;s <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">SEO Starter Guide</a> and <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content">people-first content guidance</a> explain the foundations. Its <a href="https://developers.google.com/search/docs/essentials/spam-policies">spam policies</a> also help your account team evaluate practices that could create risk rather than lasting value.</p></div>
      </div></section>
      <section className="section home-services" id="campaign-evidence"><div className="container">
        <div className="section-heading"><p className="section-kicker">Evidence, not a prediction</p><h2>SEO delivery experience with published campaign context.</h2><p>These are Rapid Scope project examples, not claimed white label partnerships or forecasts for your agency clients.</p></div>
        <div className="white-label-evidence"><figure><Image src={evidenceImage.src} alt={evidenceImage.caption} width={1977} height={1035} sizes="(max-width: 800px) 100vw, 700px" /><figcaption>Published case-study evidence. Refer to the project page for its measurement period.</figcaption></figure><div className="copy-stack"><h3>Product discovery across an established e-commerce catalog</h3><p>The <Link href="/case-studies/conference-room-av-ecommerce-seo">Conference Room Audio Video E-Commerce Website case study</Link> documents the starting position, work and measurement context behind a catalog campaign. It gives your team a concrete example of how architecture, content and technical priorities connect.</p><p>A different context appears in the <Link href="/case-studies/caribbean-travel-site-seo">Caribbean travel SEO case study</Link>, where a new site needed connected topic coverage. Explore the <Link href="/case-studies/popup-outlets-seo">Popup Outlets campaign</Link> and <Link href="/case-studies">all SEO case studies</Link> to assess the evidence before discussing your delivery needs.</p><p>Past results are not a service-level promise. A new campaign depends on its own market, website condition, access and implementation pace. <Link href="/about">Learn about Rapid Scope</Link> and ask how the proposed work fits your agency process rather than treating a case-study number as a guaranteed outcome.</p></div></div>
      </div></section>
      <RelatedServices items={relatedServices} intro="Build an agency scope around the underlying SEO work, with clear project boundaries." />
      <section className="section faq-section" id="agency-faq"><div className="container faq-section__grid"><div><p className="section-kicker">Agency questions</p><h2>White label SEO and reseller program FAQs.</h2></div><div className="faq-list">{faqs.map(faq => <details className="faq-item" key={faq.q}><summary className="faq-question"><h3>{faq.q}</h3></summary><div className="white-label-faq-answer"><p>{faq.a}</p></div></details>)}</div></div></section>
      <section className="section" id="agency-enquiry"><div className="container cta-split"><div className="copy-stack"><p className="section-kicker">Plan the delivery relationship</p><h2>Request a white label SEO proposal.</h2><p>Tell us the type of clients you serve, the websites involved and the work your team needs help delivering. We will review your requirements before recommending a scope.</p><p>Use the form for an initial brief, not client passwords or private records. Branding, confidentiality, access, deliverables and commercial terms should be confirmed before work starts.</p><p>Prefer a direct conversation? <a href="tel:+971566456855">Call +971 566456855</a> or <a href="mailto:bilal@rapidscopemarketing.com">email Rapid Scope</a>. For other requirements, explore our <Link href="/services">SEO and web design services</Link> or <Link href="/contact">contact the team</Link>.</p></div><div className="audit-form-card"><WhiteLabelSEOForm /></div></div></section>
    </div>
  </Layout>;
}
