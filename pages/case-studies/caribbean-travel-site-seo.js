import Layout from '@/components/Layout';
import RelatedServices from '@/components/RelatedServices';
import Image from 'next/image';
import Link from 'next/link';

const IMG = '/case-studies/caribbean-travel';

const keyStats = [
  { value: '472', label: 'Keywords on page 1 of Google from a brand-new domain' },
  { value: '4.4x', label: 'Organic clicks growth across the 90-day window' },
  { value: '+120%', label: 'Click-through rate improvement from 0.75% to 1.65%' },
];

const pillars = [
  {
    title: 'Site Architecture & Topical Authority From Scratch',
    body: 'We mapped the niche into entity-led clusters: individual resorts, the Sandals rewards program, pricing and deals, and booking logistics. Then we built the architecture and internal linking around those clusters from day one, giving Google a clear picture of the site as a coherent authority rather than a scattering of unproven pages.',
  },
  {
    title: 'Intent-Matched Content & Title Optimization',
    body: 'The biggest traffic lever was how each page appeared in search. We wrote titles and meta descriptions to match the exact comparison, ranking, or answer the searcher wanted. Across the quarter, CTR climbed from 0.75% to 1.65%, so each ranking position earned far more traffic.',
  },
  {
    title: 'Winning Page-1 Real Estate in a Competitive Niche',
    body: 'We focused early momentum on pages gaining impression share fastest, including the guides around best Sandals resorts and Sandals rewards points. That proved a brand-new domain could take page-one space from older, more established competitors.',
  },
  {
    title: 'Authority Building That Compounds',
    body: 'Ranking gains only stick when a domain earns the trust to hold them. We reinforced the authority profile in step with the content work, producing a curve that steepened through the engagement rather than a short-lived traffic spike.',
  },
];

const keyWins = [
  '472 keywords ranking on page 1 of Google, built entirely on a brand-new, zero-authority domain.',
  '345% organic click growth across the 90-day window, from 234 to 1,041 in comparable two-week periods.',
  '275,380 organic impressions for the quarter from a domain with no prior search history.',
  '+120% click-through rate, from 0.75% to 1.65%, so every hard-won ranking earns more traffic.',
  'Average position improved from 10.1 to 7.6, moving off the edge of page one and into click territory.',
  '48 keywords in the top three positions, competing directly with established travel publishers.',
  'Peak of 120 organic clicks in a single day, with the growth curve still climbing when the window closed.',
];

export default function CaribbeanTravelSiteCaseStudy() {
  return (
    <Layout
      canonicalPath="/case-studies/caribbean-travel-site-seo"
      description="How Rapid Scope Marketing took a brand-new, zero-authority Caribbean travel domain from no rankings to 472 page-1 Google keywords and compounding organic traffic in 90 days."
      pageType="Article"
      title="Zero to 472 Page-1 Keywords | Caribbean Travel SEO Case Study | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">SEO Case Study</p>
            <h1>How a brand-new Caribbean travel site went from zero to 472 page-1 keywords.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              The client launched on a brand-new branded domain with no authority, backlinks, or ranking history. In its first 90 days with Rapid Scope Marketing, it became a compounding source of organic traffic.
            </p>
            <Link href="/contact" className="btn btn-primary">Claim Your Free Audit</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <figure>
            <Image src={`${IMG}/hero.png`} alt="From zero to 472 page-1 keywords in 90 days" width={1920} height={1080} style={{ width: '100%', height: 'auto', borderRadius: 8 }} priority />
          </figure>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Results that speak for themselves</p>
            <h2>Key stats &amp; results</h2>
          </div>
          <div className="three-card-grid">
            {keyStats.map((stat, index) => (
              <article className="light-card" key={stat.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="section-kicker">Behind the transformation</p>
            <h2>From a zero-authority domain to compounding organic traffic.</h2>
          </div>
          <div className="copy-stack">
            <p>
              The client came to Rapid Scope Marketing with an ambitious plan and a blank slate: a brand-new, branded domain in one of the most competitive affiliate niches on the web, Caribbean resort and Sandals travel content.
            </p>
            <p>
              There were no backlinks, no ranking history, and no organic traffic to build on. Rapid Scope built the site&apos;s search presence from the ground up by engineering its topical structure, matching every page to real searcher intent, and steadily building the authority a new domain needs to compete.
            </p>
            <p>
              Within 90 days, organic clicks grew 345% across the measurement window, impressions reached 275,380 for the quarter, average position climbed to 7.6, and 472 keywords broke onto page one of Google.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="section-kicker">From challenges to success</p>
            <h2>The challenge</h2>
          </div>
          <div className="copy-stack">
            <p>
              Starting a new content site from scratch is one of the hardest assignments in SEO. Google rewards trust, and trust is earned over time. A brand-new domain starts with none of it.
            </p>
            <p>
              The niche made it harder. Caribbean resort and Sandals travel content is fiercely competitive, packed with established affiliate sites, travel agencies, and Sandals&apos; own properties, all carrying years of authority the new domain could not match.
            </p>
            <p>
              For a content-and-affiliate business, organic search is not one channel among many. It is the engine. Every dollar of future revenue depends on qualified clicks the site has not earned yet.
            </p>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">How we did it</p>
            <h2>The strategy</h2>
          </div>
          <div className="copy-stack">
            <p>
              Rapid Scope approached the build like a durable search asset: foundation first. With no legacy to fix, the opportunity was to structure the site correctly from day one so every page and authority signal compounded.
            </p>
          </div>
          <div className="service-index">
            {pillars.map((pillar, index) => (
              <div className="service-index__row" key={pillar.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{pillar.title}</h2>
                <p>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Before &amp; after</p>
            <h2>The numbers, straight from Search Console.</h2>
          </div>
          <div className="copy-stack">
            <p>
              In its first 90 days, the site went from a zero-authority launch to a compounding stream of organic traffic. Clicks were up 345% across the measurement window, impressions doubled, and average position improved by two and a half spots.
            </p>
          </div>
          <figure>
            <Image src={`${IMG}/before-after.png`} alt="First two weeks versus latest two weeks: clicks, impressions and CTR" width={1920} height={920} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
            <figcaption>Comparable 14-day windows: the first two weeks vs. the latest two weeks of the engagement.</figcaption>
          </figure>
          <div className="copy-stack">
            <p>
              The most telling number is click-through rate. Doubling CTR while impressions doubled means the site did not just get shown more. It got chosen more.
            </p>
          </div>
          <figure>
            <Image src={`${IMG}/gsc-panel.png`} alt="Google Search Console performance: clicks and impressions from April to July 2026" width={1920} height={1120} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
            <figcaption>Google Search performance, Apr 11 - Jul 10, 2026. Both clicks and impressions accelerate through the engagement.</figcaption>
          </figure>
          <figure>
            <Image src={`${IMG}/trend.png`} alt="Weekly organic clicks over 90 days showing compounding growth" width={1920} height={1080} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
            <figcaption>Weekly organic clicks: a compounding curve on a brand-new domain, not a one-off spike.</figcaption>
          </figure>
          <div className="section-heading">
            <h2>Key wins</h2>
          </div>
          <div className="copy-stack">
            <ul className="audit-list">
              {keyWins.map((win) => (
                <li key={win}>{win}</li>
              ))}
            </ul>
            <p>
              <em>
                Note: growth figures compare the first and last two-week windows of the 90-day measurement period, Apr 11 - Jul 10, 2026, drawn directly from Google Search Console. The domain launched from scratch with no prior authority, backlinks, or ranking history.
              </em>
            </p>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-split">
          <div>
            <h2>Ready to build your site&apos;s search engine?</h2>
            <p>
              This case study shows what disciplined SEO can do from the hardest possible starting point: a brand-new domain with zero authority in a niche owned by established competitors.
            </p>
            <p>
              <strong>You can launch the best site in your market, but on a brand-new domain with no authority, no one will ever find it. Let&apos;s fix that.</strong>
            </p>
          </div>
          <Link href="/contact" className="btn btn-accent">Claim Your Free Audit</Link>
        </div>
      </section>

      <RelatedServices
        intro="This launch result was built with the services below."
        items={[
          {
            title: 'Topical Map Service',
            href: '/topical-map',
            desc: 'The content architecture that grew a new domain to 472 page-1 keywords in 90 days.',
          },
          {
            title: 'Monthly SEO Service',
            href: '/monthly-seo',
            desc: 'The ongoing execution that compounds a topical map into durable organic growth.',
          },
        ]}
      />
    </Layout>
  );
}
