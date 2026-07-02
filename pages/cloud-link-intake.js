import Head from 'next/head';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

const packageOptions = {
  basic: {
    label: 'Basic',
    title: 'Local Ignition',
    price: 70,
    delivery: '7 days',
  },
  standard: {
    label: 'Standard',
    title: 'Authority Accelerator',
    price: 90,
    delivery: '10 days',
  },
  premium: {
    label: 'Premium',
    title: 'The Ranking Rocket',
    price: 110,
    delivery: '12 days',
  },
};

function normalizePackage(value) {
  return packageOptions[value] ? value : 'basic';
}

function normalizeQuantity(value) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return 1;
  return Math.min(10, Math.max(1, parsed));
}

export default function CloudLinkIntake() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    targetUrl: '',
    notes: '',
  });
  const packageId = normalizePackage(router.query.package);
  const quantity = normalizeQuantity(router.query.quantity);
  const selectedPackage = packageOptions[packageId];
  const total = selectedPackage.price * quantity;
  const serviceLabel = `${selectedPackage.label} - ${selectedPackage.title}`;

  const orderMessage = useMemo(() => [
    `Cloud Link Stacking checkout request`,
    `Package: ${serviceLabel}`,
    `Quantity: ${quantity}`,
    `Unit price: $${selectedPackage.price}.00`,
    `Total: $${total}.00`,
    `Delivery: ${selectedPackage.delivery}`,
  ].join('\n'), [quantity, selectedPackage, serviceLabel, total]);

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...fields,
          service: `Cloud Link Stacking - ${serviceLabel}`,
          source: 'cloud-link-intake',
          message: [
            orderMessage,
            `Target URL: ${fields.targetUrl}`,
            `Notes: ${fields.notes || orderMessage}`,
          ].join('\n\n'),
        }),
      });

      if (!response.ok) throw new Error('Request failed');

      const checkoutResponse = await fetch('/api/ziina/payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId,
          quantity,
          targetUrl: fields.targetUrl,
          customer: {
            name: fields.name,
            email: fields.email,
            phone: fields.phone,
            company: fields.company,
          },
        }),
      });

      const checkout = await checkoutResponse.json().catch(() => ({}));
      if (!checkoutResponse.ok || !checkout.redirectUrl) {
        throw new Error(checkout.detail || checkout.error || 'Ziina checkout failed');
      }

      window.location.href = checkout.redirectUrl;
      return;
    } catch (checkoutError) {
      setError(checkoutError.message || 'Something went wrong creating the Ziina checkout. Please try again or email bilal@rapidscopemarketing.com.');
    }

    setSubmitting(false);
  };

  return (
    <Layout
      canonicalPath="/cloud-link-intake"
      description="Cloud Link Stacking checkout intake for Rapid Scope Marketing authority signal packages."
      pageType="WebPage"
      title="Cloud Link Stacking Checkout | Rapid Scope Marketing"
    >
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <section className="page-hero">
        <div className="container page-hero__grid">
          <div>
            <p className="hero-eyebrow">Cloud link checkout</p>
            <h1>Confirm the details before Ziina payment.</h1>
          </div>
          <div className="page-hero__copy">
            <p>
              Complete the short intake so the authority signals are built around the right website, landing page, and local search context.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <aside className="checkout-summary">
            <p className="section-kicker">Selected package</p>
            <h2>{serviceLabel}</h2>
            <div className="contact-list">
              <p><strong>Quantity</strong><span>{quantity}</span></p>
              <p><strong>Delivery</strong><span>{selectedPackage.delivery}</span></p>
              <p><strong>Total</strong><span>${total}.00 USD</span></p>
              <p><strong>Payment</strong><span>Secure Ziina checkout after intake submission.</span></p>
            </div>
          </aside>

          <div className="audit-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="cloud-link-name">Your name</label>
                <input id="cloud-link-name" type="text" name="name" className="form-control" value={fields.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="cloud-link-email">Email address</label>
                <input id="cloud-link-email" type="email" name="email" className="form-control" value={fields.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="cloud-link-phone">Phone number</label>
                <input id="cloud-link-phone" type="tel" name="phone" className="form-control" value={fields.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="cloud-link-company">Company name</label>
                <input id="cloud-link-company" type="text" name="company" className="form-control" value={fields.company} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="cloud-link-website">Website URL</label>
                <input id="cloud-link-website" type="url" name="website" className="form-control" value={fields.website} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="cloud-link-target">Target page URL</label>
                <input id="cloud-link-target" type="url" name="targetUrl" className="form-control" value={fields.targetUrl} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="cloud-link-notes">Campaign notes</label>
                <textarea id="cloud-link-notes" name="notes" className="form-control" placeholder={orderMessage} value={fields.notes} onChange={handleChange} />
              </div>
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Submitting...' : `Continue to Ziina Checkout ($${total}.00)`}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
