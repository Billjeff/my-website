import Layout from '@/components/Layout';
import PricingTables from '@/components/PricingTables';
import Link from 'next/link';

export default function Pricing() {
  return (
    <Layout
      canonicalPath="/pricing"
      description="Rapid Scope Marketing pricing for website audits and topical map SEO strategy packages, with intake-first checkout and secure Ziina payment where available."
      pageType="WebPage"
      title="SEO Pricing Dubai | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">Pricing</p>
            <h1>Clear pricing for audits and topical strategy.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              Start with a fixed-scope audit or topical map, complete the intake, then continue through the same secure checkout process used by Cloud SEO Dubai.
            </p>
            <Link href="#pricing" className="btn btn-primary">View Pricing</Link>
          </div>
        </div>
      </section>

      <PricingTables />

      <section className="cta-banner">
        <div className="container cta-split">
          <div>
            <p className="section-kicker">Not sure what to buy?</p>
            <h2>Use the audit if the problem is unclear.</h2>
          </div>
          <Link href="/contact" className="btn btn-primary">Ask Rapid Scope</Link>
        </div>
      </section>
    </Layout>
  );
}
