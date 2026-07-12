import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const IMG = '/case-studies/turks-caicos';

const keyStats = [
  { value: '1,317', label: 'Organic clicks in the first 90 days — from a brand-new domain' },
  { value: '88 / 106', label: 'Pages holding average page-1 positions' },
  { value: '+391%', label: 'Weekly impressions — first 14 days vs. last 14 days' },
];

const pillars = [
  {
    title: 'Search-First Site Architecture, Built From Scratch',
    body: 'Rather than retrofitting SEO onto an existing site, we designed the architecture around the search demand itself: clean URL structures organized by village, resort, and room category, with internal links mirroring how travelers actually narrow their choices. A new domain cannot afford crawl waste or ambiguity — every page had a defined target and a defined place in the hierarchy.',
  },
  {
    title: 'Deep, Decision-Stage Content for Every Room and Village',
    body: 'We built out 106 pages covering individual villages, suites, and villa categories in detail — the level of specificity booking platforms do not provide. This is why long-tail queries like specific suite names became early wins: the site is often the single most complete answer for them. 88 of those 106 pages now hold average page-1 positions.',
  },
  {
    title: 'Comparison Content That Matches Booking Intent',
    body: "The site's single highest-traffic page is its room comparison tool (159 clicks, 4,849 impressions in the period) — built for the exact moment a traveler is deciding between options. Capturing decision-stage intent, not just informational browsing, is what turns a guide site into a lead engine.",
  },
  {
    title: 'Long-Tail First, Head Terms Later',
    body: 'A zero-authority domain cannot win "turks and caicos resorts" on day one — and does not need to. The site now appears for 648 distinct search queries, with 64 high-visibility terms already ranking page 1. Each long-tail win compounds the site\'s topical authority, steadily improving average position (10.0 in the first two weeks to 7.9 in the final two) and pulling harder head terms within reach.',
  },
];

const keyWins = [
  '+623% weekly organic clicks in 90 days — from 30 to 217 per week, on a brand-new, zero-authority domain',
  '1,317 total organic clicks and 49,187 impressions accumulated in the first quarter',
  '88 of 106 pages holding average page-1 positions',
  '64 high-visibility search terms ranking on page 1, out of 648 queries the site now appears for',
  'Average position improved from 10.0 to 7.9 (first vs. final two weeks) — while impressions quadrupled',
  'Mobile CTR of 3.64% — the audience that books travel is finding and choosing the site',
  'A compounding foundation: each month outperformed the last, with no paid traffic involved',
];

export default function TurksAndCaicosCaseStudy() {
  return (
    <Layout
      canonicalPath="/case-studies/turks-and-caicos-resort-guide"
      description="Rapid Scope Marketing launched turksandcaicosresortguide.com on a brand-new, zero-authority domain and grew it to 217 organic clicks a week — a 623% increase — within 90 days."
      pageType="Article"
      title="+623% Weekly Organic Clicks in 90 Days | SEO Case Study | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">SEO Case Study</p>
            <h1>+623% weekly organic clicks in 90 days for a brand-new Turks &amp; Caicos travel site.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              A zero-authority domain grew from 30 to 217 organic clicks a week in one quarter. Every number on this page comes from the site&apos;s Google Search Console data.
            </p>
            <Link href="/contact" className="btn btn-primary">Claim Your Free Audit</Link>
          </div>
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
            <h2>How a zero-authority domain earned 217 organic clicks a week in one quarter.</h2>
          </div>
          <div className="copy-stack">
            <p>
              A client came to Rapid Scope Marketing with an ambitious brief: launch a resort guide for Turks &amp; Caicos — turksandcaicosresortguide.com — on a brand-new domain, in a travel niche dominated by global booking platforms and long-established guides.
            </p>
            <p>
              Starting from zero authority, zero rankings, and zero traffic, we built the site&apos;s architecture, content, and search foundation from scratch. Within 90 days, weekly organic clicks grew from 30 to 217 — a 623% increase — with 88 of the site&apos;s 106 pages holding average page-1 positions and 49,187 search impressions accumulated across the quarter.
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
              Travel search is one of the least forgiving arenas in SEO. Queries about resorts, suites, and vacation planning are contested by international booking platforms, brand sites with years of accumulated authority, and travel publishers with millions of backlinks. Established players dominate page 1 by default.
            </p>
            <p>
              This project started with none of those advantages. A brand-new domain. No backlink profile. No content history. No existing audience. Every ranking would have to be earned from a standing start.
            </p>
            <p>
              For a content site, that starting position is existential: without early search visibility, there is no traffic, no audience growth, and no revenue path. The site needed to prove to Google — quickly — that it deserved to rank against competitors with a decade&apos;s head start.
            </p>
            <p>The client handed the problem to Rapid Scope Marketing with a clear mandate: build it right from day one.</p>
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">How we did it</p>
            <h2>The strategy</h2>
          </div>
          <div className="container editorial-grid">
            <div className="copy-stack">
              <p>
                With no domain history to lean on, execution quality was the only available advantage. Every decision served one goal: make the site the most complete, most useful answer for travelers researching Turks &amp; Caicos resorts — so that Google&apos;s systems had every reason to surface it despite its age.
              </p>
            </div>
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
              In 90 days, weekly organic clicks grew from 30 in the first week to 217 in the final week — a 623% increase, earned entirely on a domain that started with zero authority.
            </p>
          </div>
          <figure>
            <Image src={`${IMG}/gsc-panel.png`} alt="Google Search Console performance panel showing clicks and impressions growth from April 10 to July 9, 2026" width={1920} height={1120} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
            <figcaption>Weekly clicks and impressions, Apr 10 – Jul 9, 2026. Source: Google Search Console export.</figcaption>
          </figure>
          <div className="copy-stack">
            <p>
              The shape of the curve matters as much as the endpoints: growth accelerated month over month — 135 clicks in April, 329 in May, 574 in June — the compounding pattern of a site whose authority is building, not a one-off spike.
            </p>
          </div>
          <figure>
            <Image src={`${IMG}/before-after.png`} alt="First 14 days vs last 14 days comparison: organic clicks up 439%, impressions up 391%" width={1920} height={710} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
            <figcaption>First 14 days vs. last 14 days of the period. Source: Google Search Console export.</figcaption>
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
                Note: average position improved even as impressions grew 391% — meaningful because expanding visibility usually drags average position down as a site enters new, harder queries. Improving both simultaneously signals genuine authority growth.
              </em>
            </p>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-split">
          <div>
            <h2>Ready to grow your website?</h2>
            <p>
              This case study shows what disciplined SEO delivers under the hardest possible starting conditions: a brand-new domain, zero authority, and a market full of entrenched competitors.
            </p>
            <p>
              <strong>You can have the best product in your market, but if searchers never find you, they&apos;ll choose someone else. Let&apos;s fix that.</strong>
            </p>
          </div>
          <Link href="/contact" className="btn btn-accent">Claim Your Free Audit</Link>
        </div>
      </section>
    </Layout>
  );
}
