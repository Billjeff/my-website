import Layout from '@/components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    setSubmitted(true);
  };

  return (
    <Layout title="Contact Us | Rapid Scope Marketing LLC">
      <div style={{ paddingTop: '120px' }}>
        <section className="section">
          <div className="container animate-fade-in">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
              
              <div>
                <h6 style={{ color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Get in Touch</h6>
                <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>Let&apos;s Build Your <span className="text-gradient">Digital Empire</span></h1>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                  Ready to dominate search in Dubai? Contact Rapid Scope Marketing LLC today to schedule your free audit and consultation.
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Dubai Office</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>Building #8, Ground floor, DMC<br />Dubai Internet City, United Arab Emirates</p>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Direct Contact</h4>
                  <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                    Phone: <a href="tel:+971566456855">+971 566456855</a><br />
                    Email: <a href="mailto:bilal@rapidscopemarketing.com">bilal@rapidscopemarketing.com</a>
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>Send us a Message</h3>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Message Received!</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)} 
                      className="btn btn-ghost" 
                      style={{ marginTop: '1.5rem' }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email Address" required />
                    </div>
                    <div className="form-group">
                      <input type="tel" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" placeholder="How can we help you grow?" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}