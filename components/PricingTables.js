import Link from 'next/link';

export const auditPricingPlans = [
  {
    eyebrow: 'Website audit',
    title: 'Small Site',
    meta: 'Up to 2,000 pages',
    price: '$350',
    period: 'USD one-time',
    desc: 'For local service businesses, lean marketing sites, and smaller company websites that need technical clarity before deeper SEO investment.',
    features: ['Technical SEO review', 'On-page and content checks', 'Authority and UX review', 'Prioritized roadmap'],
    href: 'https://cloudseodubai.com/audit-intake/?package=small',
    cta: 'Start audit checkout',
  },
  {
    eyebrow: 'Website audit',
    title: 'Medium Site',
    meta: 'Up to 4,000 pages',
    price: '$400',
    period: 'USD one-time',
    desc: 'For larger service sites, expanding content structures, and businesses that need deeper crawl, content, and internal-linking analysis.',
    features: ['Expanded crawl review', 'Content gap analysis', 'Internal link checks', 'Implementation roadmap'],
    href: 'https://cloudseodubai.com/audit-intake/?package=medium',
    cta: 'Start audit checkout',
    featured: true,
  },
  {
    eyebrow: 'Website audit',
    title: 'Large Site',
    meta: '4,000+ pages',
    price: '$500',
    period: 'USD one-time',
    desc: 'For complex websites and high-page-count businesses that need forensic SEO review before scaling content or authority campaigns.',
    features: ['Large-site crawl review', 'Indexation and template checks', 'Technical risk analysis', 'Priority fix sequencing'],
    href: 'https://cloudseodubai.com/audit-intake/?package=large',
    cta: 'Start audit checkout',
  },
];

export const topicalMapPricingPlans = [
  {
    eyebrow: 'Topical map',
    title: 'Custom Topical Map Blueprint',
    meta: 'Semantic SEO content architecture',
    price: '$400',
    period: 'USD one-time',
    desc: 'A complete topical authority blueprint for keyword clusters, page architecture, internal links, and a clear publishing roadmap.',
    features: ['Entity and keyword clustering', 'Silo architecture', 'Content priority roadmap', 'Internal-linking direction'],
    href: 'https://cloudseodubai.com/topical-map-intake/',
    cta: 'Buy topical map',
  },
];

function CheckoutLink({ href, children, className }) {
  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <a className={className} href={href} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

const pricingCopy = {
  audit: {
    kicker: 'Audit pricing',
    title: 'Choose the audit size that matches your website.',
    desc: 'Pricing follows the Cloud SEO checkout process: choose the package, complete the audit intake, then continue to secure Ziina payment.',
    plans: auditPricingPlans,
    gridClassName: 'pricing-grid--audit',
  },
  topicalMap: {
    kicker: 'Topical map pricing',
    title: 'Buy the content architecture blueprint.',
    desc: 'Start with the topical map intake, then continue through the same secure Ziina checkout process used by Cloud SEO Dubai.',
    plans: topicalMapPricingPlans,
    gridClassName: 'pricing-grid--single',
  },
};

export default function PricingTables({ type = 'audit' }) {
  const content = pricingCopy[type] || pricingCopy.audit;

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="section-kicker">{content.kicker}</p>
            <h2>{content.title}</h2>
          </div>
          <p>{content.desc}</p>
        </div>

        <div className={`pricing-grid ${content.gridClassName}`}>
          {content.plans.map((plan) => (
            <article className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`} key={plan.title}>
              <p className="pricing-card__eyebrow">{plan.eyebrow}</p>
              <h3>{plan.title}</h3>
              <p className="pricing-card__meta">{plan.meta}</p>
              <div className="pricing-card__price">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </div>
              <p>{plan.desc}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <CheckoutLink className="btn btn-primary" href={plan.href}>{plan.cta}</CheckoutLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
