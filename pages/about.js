import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout title="About Us | Rapid Scope Marketing LLC">
      <div style={{ paddingTop: '120px' }}>
        <section className="section">
          <div className="container animate-fade-in">
            <h6 style={{ color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Who We Are</h6>
            <h1 style={{ marginBottom: '2rem' }}>The Rapid Scope <span className="text-gradient">Advantage</span></h1>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
                  At Rapid Scope Marketing LLC, we recognize that true digital authority requires more than algorithmic guesswork. It demands a sophisticated fusion of technical mastery, compelling content, and strategic foresight.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)' }}>
                  As your dedicated growth partners in Dubai, we dissect the intricacies of search behaviors to position your brand precisely where and how your ideal customer searches for you. With over 12 years of unwavering expertise, we are your go-to source for top-tier web design and digital marketing services in the UAE.
                </p>
              </div>
              <div style={{ backgroundColor: 'var(--bg-card)', padding: '3rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Our Core Values</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong>Transparency:</strong> Clear reporting and honest strategies.
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong>Innovation:</strong> Leveraging AI and Node.js for scalability.
                  </li>
                  <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>✓</span>
                    <strong>Results-Driven:</strong> Focus on metrics that redefine success.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
