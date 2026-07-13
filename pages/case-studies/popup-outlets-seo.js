import Layout from '@/components/Layout';
import RelatedServices from '@/components/RelatedServices';
import Image from 'next/image';
import Link from 'next/link';

const IMG = '/case-studies/popup-outlets';

const keyStats = [
  { value: '210', label: 'Keywords ranking on page 1 of Google (of 492 total)' },
  { value: '$20.7K/mo', label: 'Estimated value of its organic search traffic' },
  { value: '12.2 → 6.5', label: 'Average Google position — page 2 to page 1' },
];

const pillars = [
  {
    title: 'Technical & Product-Page SEO',
    body: 'We built clean, crawlable product and category pages with the structured data, specifications, and on-page signals Google needs to trust a store. For an e-commerce site, technical health and clear product pages are the foundation everything else ranks on.',
  },
  {
    title: 'Owning the Buying-Intent Keywords',
    body: 'We mapped the category’s commercial searches — "countertop pop up outlet," "pop up outlet for countertop," "kitchen pop up outlet," "pop up outlets for kitchen island" — and optimized the pages that answer them precisely. These are the searches with real purchase intent, and they are exactly where the brand now ranks #1 and #2.',
  },
  {
    title: 'Topical Authority Across the Category',
    body: 'We expanded coverage beyond the money pages into the full topic — outlet types, installation, tamper-resistant and GFCI variants, kitchen and countertop use cases — with internal linking that ties it together. This breadth (492 ranked keywords today) is what signals to Google that the brand is a category authority, not a single-product listing.',
  },
  {
    title: 'Sustained Authority Building',
    body: 'Outranking big-box retailers requires real off-site authority. Over the engagement, the domain earned a backlink profile of 34,290 links from 229 referring domains — the trust signals that let a specialist brand hold page-one positions against national competitors.',
  },
];

const keyWins = [
  'Ranks #1 on Google for "pop up outlets," "countertop pop up outlet," "pop up outlet for countertop," and "pop up outlets for countertops" — the category’s top buying searches (2,900–4,400 monthly searches each).',
  '210 keywords on page 1 of Google — 90 in the top three and 18 at position #1 — out of 492 total ranked terms.',
  'Average Google position improved from 12.2 to 6.5 — page two onto page one.',
  'Organic search visibility worth an estimated $20,700 per month in equivalent ad spend.',
  'A backlink profile of 34,290 links from 229 referring domains — the authority to outrank national big-box competitors.',
  'Category ownership earned over two years — a durable position a specialist brand owns rather than rents through ads.',
];

export default function PopUpOutletsCaseStudy() {
  return (
    <Layout
      canonicalPath="/case-studies/popup-outlets-seo"
      description="How Rapid Scope Marketing helped a US pop-up outlet brand rank #1 for its highest-value buying terms, land 210 keywords on page 1, and lift average Google position from 12.2 to 6.5."
      pageType="Article"
      title="Popup Outlets Brand SEO Case Study | Owning Page 1 of Google | Rapid Scope Marketing"
    >
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">SEO Case Study</p>
            <h1>How a US pop-up outlet brand came to own page 1 of Google.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              A specialty e-commerce brand launched into a niche crowded with big-box retailers and marketplaces. Over a two-year engagement, Rapid Scope Marketing made it the #1 organic result for the category&apos;s highest-value buying searches.
            </p>
            <Link href="/contact" className="btn btn-primary">Claim Your Free Audit</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <figure>
            <Image src={`${IMG}/hero.png`} alt="Ranked #1 for 'pop up outlets' and the category's top buying searches" width={2651} height={1020} style={{ width: '100%', height: 'auto', borderRadius: 8 }} priority />
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
            <h2>From new store to category leader in search.</h2>
          </div>
          <div className="copy-stack">
            <p>
              This popup outlets brand is a US e-commerce brand selling pop-up power outlets for kitchen countertops, islands, and workspaces. When Rapid Scope Marketing began the engagement, it was a brand-new store competing for attention against national big-box retailers, marketplaces, and electrical manufacturers, all with far more authority.
            </p>
            <p>
              Two years of sustained SEO later, the brand ranks #1 on Google for the exact searches its buyers make: &quot;pop up outlets,&quot; &quot;countertop pop up outlet,&quot; &quot;pop up outlet for countertop,&quot; and &quot;pop up outlets for countertops.&quot; Its average position across the catalog climbed from 12.2, deep on page two, to 6.5 on page one, it now holds 210 page-one keywords, and its organic visibility is worth an estimated $20,700 a month in equivalent ad spend.
            </p>
            <p>In a niche owned by giants, a specialist brand became the answer.</p>
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
              A new e-commerce brand in a hardware category starts at a structural disadvantage. When someone searches &quot;pop up outlets for countertops,&quot; Google&apos;s first page is contested by Home Depot, Lowe&apos;s, Amazon, Wayfair, and established electrical manufacturers, sites with millions of pages and years of accumulated trust. A brand-new specialty store has none of that history.
            </p>
            <p>
              Worse, these are high-intent commercial searches. Someone typing &quot;countertop pop up outlet&quot; is close to buying. Every one of those results that a competitor owns is a sale the new brand never sees. Ranking on page two, where the store started, at an average position of 12.2, means being invisible at the exact moment a customer is ready to purchase.
            </p>
            <p>
              For a single-category e-commerce brand, organic search isn&apos;t a nice-to-have; it&apos;s the storefront. Paid ads can buy visibility, but margins in a niche product category rarely sustain it forever. The brand needed to own its category in organic search, not rent it.
            </p>
            <p>That kind of position isn&apos;t won in a quarter. It takes sustained, technically disciplined SEO and authority built over years.</p>
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
              Rapid Scope set out to make the Popup Outlets Brand the most relevant, most trusted result for every way a buyer might search for a pop-up outlet, and to build the authority needed to hold those positions against far larger competitors.
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
              The clearest measure of the work is where the brand ranks. Across the window of data Google retains, average position improved steadily from 12.2, page two, to 6.5 on page one, with the whole catalog rising together quarter after quarter.
            </p>
          </div>
          <figure>
            <Image src={`${IMG}/trend.png`} alt="Average Google position by quarter, improving from 12.2 to 6.5" width={1622} height={950} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
            <figcaption>Average Google position by quarter, from Google Search Console (lower is better).</figcaption>
          </figure>
          <div className="copy-stack">
            <p>
              Today the brand holds 210 keywords on page one of Google, 90 of them in the top three, 18 at position #1, and its organic search visibility is worth an estimated $20,700 a month in equivalent paid traffic. Most importantly, it ranks #1 for the category&apos;s highest-value buying terms, the searches that turn into orders.
            </p>
          </div>
          <figure>
            <Image src={`${IMG}/dashboard.png`} alt="Search visibility snapshot: #1 rankings, 210 page-1 keywords, $20.7K/mo value, 229 referring domains" width={1977} height={1035} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
            <figcaption>Search visibility snapshot (third-party estimates via DataForSEO, United States).</figcaption>
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
                Notes: ranking position and traffic figures come from Google Search Console (property data, average position) and DataForSEO (keyword counts, estimated traffic value, and backlinks, third-party US estimates). Over the retained GSC window, click-through rates across the sector compressed as Google added AI Overviews and richer results, and Search Console retains only ~16 months of data, so earlier gains from the start of the engagement fall outside the window shown. The lasting result is category-leading organic positions on the searches that drive sales.
              </em>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="section-kicker">Now winning in AI search</p>
            <h2>Cited by AI answer engines.</h2>
          </div>
          <div className="copy-stack">
            <p>
              Search is shifting from links to answers, and the same authority that wins Google&apos;s page one is now making the brand a source that AI answer engines cite directly. In Bing&apos;s AI performance data, the number of times Bing Copilot cited the Popup Outlets Brand in an AI answer climbed to record highs in early July 2026: a peak of 153 citations in a single day, with the week of July 6 averaging roughly 120 a day, up from about 49 a day at the start of the year. On a strong day, AI answers now pull from as many as 15 different pages on the site.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <figure>
            <Image src={`${IMG}/ai-citations.png`} alt="AI citations per day by month from Bing Copilot, rising to a record high in July 2026" width={1707} height={950} style={{ width: '100%', height: 'auto', borderRadius: 8 }} />
            <figcaption>Average daily AI citations (Bing Copilot), Jan&ndash;Jul 2026. *July reflects data through the 10th.</figcaption>
          </figure>
          <div className="copy-stack">
            <p>
              The pattern holds in ChatGPT. Asked for &quot;the best pop-up outlets for kitchen countertops and islands,&quot; ChatGPT (with live web search) named the Popup Outlets Brand as the recommended place to buy, citing it more than any other retailer, across multiple product brands including Lew Electric, Hubbell, and Wiremold. In an AI-first search world, the brand isn&apos;t just ranking; it&apos;s the source the answer is built from.
            </p>
            <p>
              <em>
                AI-visibility figures from Bing Webmaster Tools (AI Performance Overview, citations) and a live ChatGPT (GPT-4o, web search) query on July 13, 2026. Daily citations are volatile; May 2026 was a low month before the June&ndash;July climb to record levels.
              </em>
            </p>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-split">
          <div>
            <h2>Ready to own your category in search?</h2>
            <p>
              This case study shows what Rapid Scope Marketing can do for a specialist e-commerce brand: win the exact searches your buyers make, out of the shadow of big-box retailers, and build the authority to hold those positions for years.
            </p>
            <p>
              <strong>You can sell exactly what people are searching for, but if a big-box retailer owns page one, they get the order. Let&apos;s fix that.</strong>
            </p>
          </div>
          <Link href="/contact" className="btn btn-accent">Claim Your Free Audit</Link>
        </div>
      </section>

      <RelatedServices
        intro="This result was built with the services below."
        items={[
          {
            title: 'Monthly SEO Service',
            href: '/monthly-seo',
            desc: 'The ongoing campaign that holds page-1 rankings and keeps earning AI-search citations.',
          },
          {
            title: 'High DA Cloud Link Stacking',
            href: '/cloud-link-stacking',
            desc: 'The authority layer that strengthens entity signals behind competitive rankings.',
          },
        ]}
      />
    </Layout>
  );
}
