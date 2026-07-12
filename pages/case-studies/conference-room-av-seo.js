import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const IMG = '/case-studies/conference-room-av';

const keyStats = [
  { value: '17.2 → 6.0', label: 'Average Google position — page 2 to page 1, year over year' },
  { value: '+21%', label: 'Search impressions — 2.9M to 3.5M per quarter' },
  { value: '15M+', label: 'Google search impressions in the last 16 months' },
];

const pillars = [
  {
    title: 'Technical SEO Across a Large Catalog',
    body: 'We worked through crawlability, indexation, site architecture, and product schema across thousands of SKU pages, removing the hidden technical friction that keeps large catalogs buried. When Google can efficiently crawl, render, and understand every product page, the whole domain becomes eligible to rank rather than a fraction of it.',
  },
  {
    title: 'Product & SKU Page Optimization',
    body: 'AV buyers search exact part numbers — "dl-ar1882," "sp-8100-e3," "tesiraforte dan ci." We optimized titles, specifications, and structured data so each product page became the definitive match for its SKU. That precision is why the catalog now ranks in the top three for a long list of specific product and brand searches, several of them at position one or two.',
  },
  {
    title: 'Topical Authority Across Product Categories',
    body: "We built category-level authority around the site's core lines — retractable cables and table boxes, AV-over-IP streaming, DSP and conferencing audio, mounts and hardware — with structured internal linking that connects products to their categories and guides. This is what tells Google the domain is a trusted authority across the AV space, not just a store, and it is the engine behind the move from position 17 to position 6.",
  },
  {
    title: 'Sustained Authority Building',
    body: 'Ranking a catalog against manufacturers and national distributors takes durable authority, earned over time. Two-plus years of consistent, compounding SEO, not a one-off push, is what steadily pulled average position down from the high teens into single digits and kept it there.',
  },
];

const keyWins = [
  'Average Google position improved from 17.2 to 6.0 — an 11.2-spot climb, page two onto page one.',
  'Search impressions up 21% year over year — from 2.9M to 3.5M per quarter.',
  'More than 15 million Google search impressions in the last 16 months alone.',
  'Ranks #1 for the core category term "conference room av" (average position 1.1).',
  'Top-three rankings across a long tail of manufacturer SKUs — Liberty AV, Mersive, Biamp Tesira, FSR, and more — the exact searches high-intent buyers make.',
  "Dozens of product terms that didn't rank at all a year ago now sit on page one.",
  'A catalog-wide search foundation that keeps compounding — the result of a sustained, multi-year engagement, not a one-time push.',
];

export default function ConferenceRoomAVCaseStudy() {
  return (
    <Layout
      canonicalPath="/case-studies/conference-room-av-seo"
      description="How Rapid Scope Marketing lifted Conference Room AV's average Google position from 17.2 to 6.0 — page 2 to page 1 — and grew search impressions 21% across a multi-year SEO engagement."
      pageType="Article"
      title="Conference Room AV SEO Case Study | Page 2 to Page 1 of Google | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">SEO Case Study</p>
            <h1>How Conference Room AV climbed from page 2 to page 1 of Google.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              A catalog of thousands of AV products was stranded on page two — seen by millions, clicked by few. Over a multi-year engagement, Rapid Scope Marketing lifted its average Google position from 17.2 to 6.0 and grew search impressions 21% year over year.
            </p>
            <Link href="/contact" className="btn btn-primary">Claim Your Free Audit</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <figure>
            <Image src={`${IMG}/hero.png`} alt="Average Google position improved from 17.2 to 6.0 — page 2 to page 1" width={1980} height={1020} style={{ width: '100%', height: 'auto', borderRadius: 8 }} priority />
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
            <h2>From page-two obscurity to page-one authority.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Conference Room AV is a specialist retailer with a deep catalog of commercial audio-visual equipment — DSPs, streaming encoders, cable management, mounts, and thousands of manufacturer SKUs from brands like Biamp, Mersive, Liberty AV, FSR, and Chief.
            </p>
            <p>
              When Rapid Scope Marketing took over its SEO, the catalog was generating enormous search visibility but almost no ranking traction: an average Google position of 17.2, stranded on the second page where buyers rarely look. Through sustained technical SEO, product-page optimization, and topical authority work, Rapid Scope moved the catalog onto page one.
            </p>
            <p>
              Average position is now 6.0, impressions are up 21% year over year to 3.5 million a quarter, and a growing roster of product and brand searches ranks in the top three. The site went from being seen to being chosen.
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
              Ranking a large e-commerce catalog is a different problem from ranking a handful of pages. Conference Room AV had thousands of product URLs, each competing for narrow, high-intent searches — part numbers, model names, and category terms that a professional AV buyer types when they already know what they want. The demand was there. Google was serving the site&apos;s pages nearly a million times a month.
            </p>
            <p>
              The problem was position. An average ranking of 17.2 means page two — and page two, for a product catalog, is a shelf in the back of the store. Buyers searching a specific SKU click the first few results and never scroll. The site was competing for that real estate against manufacturer websites, national AV distributors, and marketplaces with years of accumulated authority.
            </p>
            <p>
              For a B2B reseller, organic product visibility is the pipeline. Every part number that ranks on page one is a buyer who lands on the right product page ready to request a quote or order. Stuck on page two across the catalog, the site was leaving the vast majority of that qualified demand to competitors.
            </p>
            <p>Fixing it wouldn&apos;t come from one campaign. It needed sustained, technically disciplined SEO across the entire catalog — the kind of work that compounds over years.</p>
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
              Rapid Scope treated the catalog as a system, not a set of pages. The goal was to make every product and category URL cleanly crawlable, clearly understood by Google, and backed by enough domain authority to compete for page-one positions at scale, then to keep compounding that authority quarter after quarter.
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
              The clearest measure of the work is ranking position. Across the window of data Google retains, the catalog&apos;s average position fell steadily from 17.2 — deep on page two — to 6.0, firmly on page one. This wasn&apos;t a single page spiking; it was the whole catalog rising together, quarter after quarter.
            </p>
          </div>
          <figure>
            <Image src={`${IMG}/trend.png`} alt="Average Google position by quarter, improving from 17.2 to 6.0" width={1649} height={950} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
            <figcaption>Average Google position by quarter (lower is better). The line falls as the catalog climbs from page 2 into page 1.</figcaption>
          </figure>
          <div className="copy-stack">
            <p>
              As rankings improved, search visibility grew with them: impressions rose 21% year over year to 3.5 million a quarter, and more than 15 million times in the last 16 months a Conference Room AV page appeared in Google results. The site now ranks #1 for its core category term, &quot;conference room av,&quot; and in the top three for a deep list of manufacturer part numbers.
            </p>
          </div>
          <figure>
            <Image src={`${IMG}/dashboard.png`} alt="16-month search performance: position 6.0, impressions +21%, 15M+ impressions, #1 for conference room av" width={1977} height={1035} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
            <figcaption>Search performance over the 16 months of data Google retains.</figcaption>
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
                Note on clicks: over this same window, click-through rates across the sector compressed as Google added AI Overviews and richer result features that answer more queries on the results page. In that tougher click environment, Conference Room AV&apos;s rankings and impressions still grew — the durable foundation that positions the catalog to capture more traffic as it consolidates the page-one real estate it now owns. All figures are drawn directly from Google Search Console; because Google retains roughly 16 months of data, earlier gains from the start of the engagement fall outside the window shown.
              </em>
            </p>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-split">
          <div>
            <h2>Ready to move your catalog onto page 1?</h2>
            <p>
              This case study shows what Rapid Scope Marketing can do with a large, competitive catalog: make every page rankable, win the exact searches your buyers make, and build the authority to hold page-one positions against manufacturers and national distributors, then keep compounding it.
            </p>
            <p>
              <strong>You can stock exactly what your buyers are searching for, but if your pages sit on page two, someone else gets the order. Let&apos;s fix that.</strong>
            </p>
          </div>
          <Link href="/contact" className="btn btn-accent">Claim Your Free Audit</Link>
        </div>
      </section>
    </Layout>
  );
}
