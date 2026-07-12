import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const IMG = '/case-studies/conference-room-av';
const CLIENT_NAME = 'Conference Room Audio Video E-Commerce Website';

const keyStats = [
  { value: '17.2 -> 6.0', label: 'Average Google position, moving from page 2 to page 1 year over year' },
  { value: '+21%', label: 'Search impressions, from 2.9M to 3.5M per quarter' },
  { value: '15M+', label: 'Google search impressions in the last 16 months' },
];

const pillars = [
  {
    title: 'Technical SEO Across a Large Catalog',
    body: 'We worked through crawlability, indexation, site architecture, and product schema across thousands of SKU pages, removing the hidden technical friction that keeps large catalogs buried. When Google can efficiently crawl, render, and understand every product page, the whole domain becomes eligible to rank.',
  },
  {
    title: 'Product & SKU Page Optimization',
    body: 'AV buyers search exact part numbers like dl-ar1882, sp-8100-e3, and tesiraforte dan ci. We optimized titles, specifications, and structured data so each product page became the definitive match for its SKU and brand query.',
  },
  {
    title: 'Topical Authority Across Product Categories',
    body: 'We built category-level authority around retractable cables, AV-over-IP streaming, DSP and conferencing audio, mounts, hardware, and adjacent product lines. Structured internal linking connected products to categories and buying guides so Google could see the site as a trusted AV authority.',
  },
  {
    title: 'Sustained Authority Building',
    body: 'Ranking a catalog against manufacturers and national distributors takes durable authority earned over time. Consistent, compounding SEO steadily pulled average position from the high teens into single digits and kept it there.',
  },
];

const keyWins = [
  'Average Google position improved from 17.2 to 6.0, an 11.2-spot climb from page two onto page one.',
  'Search impressions grew 21% year over year, from 2.9M to 3.5M per quarter.',
  'More than 15 million Google search impressions were earned in the last 16 months alone.',
  'The site ranks #1 for the core category term "conference room av" with an average position of 1.1.',
  'Top-three rankings now cover a long tail of manufacturer SKUs across Liberty AV, Mersive, Biamp Tesira, FSR, and more.',
  'Dozens of product terms that did not rank at all a year ago now sit on page one.',
  'The catalog now has a search foundation that keeps compounding through sustained, multi-year SEO.',
];

export default function ConferenceRoomAvEcommerceCaseStudy() {
  return (
    <Layout
      canonicalPath="/case-studies/conference-room-av-ecommerce-seo"
      description={`How Rapid Scope Marketing lifted ${CLIENT_NAME} from page 2 to page 1 of Google, improving average position from 17.2 to 6.0 and growing impressions 21% year over year.`}
      pageType="Article"
      title="Page 2 to Page 1 | E-Commerce SEO Case Study | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">E-Commerce SEO Case Study</p>
            <h1>How {CLIENT_NAME} climbed from page 2 to page 1 of Google.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              A catalog of thousands of AV products was stranded on page two: seen by millions, clicked by few. Rapid Scope Marketing lifted average Google position from 17.2 to 6.0 and grew search impressions 21% year over year.
            </p>
            <Link href="/contact" className="btn btn-primary">Claim Your Free Audit</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <figure>
            <Image src={`${IMG}/hero.png`} alt="Average Google position improved from 17.2 to 6.0, moving page 2 to page 1" width={1920} height={1080} style={{ width: '100%', height: 'auto', borderRadius: 8 }} priority />
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
              {CLIENT_NAME} is a specialist retailer with a deep catalog of commercial audio-visual equipment: DSPs, streaming encoders, cable management, mounts, and thousands of manufacturer SKUs from brands like Biamp, Mersive, Liberty AV, FSR, and Chief.
            </p>
            <p>
              When Rapid Scope Marketing took over SEO, the catalog had enormous search visibility but limited ranking traction. The average Google position was 17.2, stranded on page two where buyers rarely look.
            </p>
            <p>
              Through sustained technical SEO, product-page optimization, and topical authority work, Rapid Scope moved the catalog onto page one. Average position reached 6.0, impressions rose 21% year over year to 3.5 million a quarter, and a growing roster of product and brand searches now ranks in the top three.
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
              Ranking a large e-commerce catalog is different from ranking a handful of pages. The site had thousands of product URLs, each competing for narrow, high-intent searches: part numbers, model names, and category terms that a professional AV buyer types when they already know what they want.
            </p>
            <p>
              The demand was there. Google was serving the pages nearly a million times a month. The problem was position. An average ranking of 17.2 means page two, and page two for a product catalog is a shelf in the back of the store.
            </p>
            <p>
              For a B2B reseller, organic product visibility is the pipeline. Every part number that ranks on page one is a buyer who lands on the right product page ready to request a quote or order.
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
              Rapid Scope treated the catalog as a system, not a set of isolated pages. The goal was to make every product and category URL crawlable, clearly understood by Google, and backed by enough domain authority to compete for page-one positions at scale.
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
              The clearest measure of the work is ranking position. Across the window of data Google retains, the catalog&apos;s average position fell steadily from 17.2, deep on page two, to 6.0, firmly on page one.
            </p>
          </div>
          <figure>
            <Image src={`${IMG}/trend.png`} alt="Average Google position by quarter improving from 17.2 to 6.0" width={1920} height={1080} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
            <figcaption>Average Google position by quarter. Lower is better. The line falls as the catalog climbs from page 2 into page 1.</figcaption>
          </figure>
          <div className="copy-stack">
            <p>
              As rankings improved, search visibility grew with them: impressions rose 21% year over year to 3.5 million a quarter, and more than 15 million times in the last 16 months a product or category page appeared in Google results.
            </p>
          </div>
          <figure>
            <Image src={`${IMG}/dashboard.png`} alt="16-month search performance dashboard showing position 6.0, impressions up 21%, and 15M+ impressions" width={1920} height={1080} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
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
                Note on clicks: across this same window, click-through rates compressed as Google added AI Overviews and richer result features that answer more queries on the results page. In that tougher click environment, rankings and impressions still grew. All figures are drawn directly from Google Search Console; because Google retains roughly 16 months of data, earlier gains from the start of the engagement fall outside the window shown.
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
              This case study shows what Rapid Scope Marketing can do with a large, competitive catalog: make every page rankable, win the exact searches your buyers make, and build the authority to hold page-one positions.
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
