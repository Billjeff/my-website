import Link from 'next/link';

export default function RelatedServices({ intro = '', items = [] }) {
  if (items.length === 0) return null;

  return (
    <section className="section related-services">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="section-kicker">Related services</p>
            <h2>Keep the next step connected.</h2>
          </div>
          {intro && <p>{intro}</p>}
        </div>

        <div className="service-index">
          {items.map((item, index) => (
            <Link href={item.href} className="service-index__row" key={item.href}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <strong>View service</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
