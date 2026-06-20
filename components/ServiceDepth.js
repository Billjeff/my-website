export default function ServiceDepth({ kicker, title, paragraphs = [] }) {
  if (paragraphs.length === 0) return null;

  return (
    <section className="section">
      <div className="container editorial-grid">
        <div>
          <p className="section-kicker">{kicker}</p>
          <h2>{title}</h2>
        </div>
        <div className="copy-stack">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
