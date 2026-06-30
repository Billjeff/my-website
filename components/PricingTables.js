import Link from 'next/link';

export const pricingPlans = [
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

const applicationPlans = [
  {
    title: 'Monthly SEO',
    desc: 'Monthly SEO is application-based because scope depends on technical debt, content needs, authority work, and reporting requirements.',
    href: '/contact',
    cta: 'Apply for monthly SEO',
  },
  {
    title: 'Cloud Link Stacking',
    desc: 'Authority support is quoted after confirming the target URLs, existing content quality, and whether the site is ready for stronger signals.',
    href: '/cloud-link-stacking',
    cta: 'Check readiness',
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

export default function PricingTables() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="section-kicker">Pricing</p>
            <h2>Fixed-price audit and strategy packages.</h2>
          </div>
          <p>
            Pricing follows the Cloud SEO checkout process: choose the package, complete the intake, then continue to secure Ziina payment where available.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
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

        <div className="pricing-note-grid">
          {applicationPlans.map((plan) => (
            <article className="pricing-note-card" key={plan.title}>
              <div>
                <p className="section-kicker">Application based</p>
                <h3>{plan.title}</h3>
                <p>{plan.desc}</p>
              </div>
              <CheckoutLink className="btn btn-ghost" href={plan.href}>{plan.cta}</CheckoutLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
