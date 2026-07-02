import { useMemo, useState } from 'react';

const packages = [
  {
    id: 'premium',
    label: 'Premium',
    title: 'The Ranking Rocket',
    subtitle: 'Ultimate Dominance',
    price: 110,
    delivery: '12 days',
    signalCount: '5 off-page geo-signals',
    desc: 'An overwhelming surge of 5 off-page geo-signals. Maximum network syndication to aggressively dominate your local market. Also includes putting all links through a premium indexer.',
  },
  {
    id: 'standard',
    label: 'Standard',
    title: 'Authority Accelerator',
    subtitle: 'Tier 2 Signals',
    price: 90,
    delivery: '10 days',
    signalCount: '3 off-page geo-signals',
    desc: 'High-impact local authority campaign. 3 powerful off-page signals designed to push mid-level competition.',
  },
  {
    id: 'basic',
    label: 'Basic',
    title: 'Local Ignition',
    subtitle: 'Tier 1 Signals',
    price: 70,
    delivery: '7 days',
    signalCount: '1 geo-network signal',
    desc: 'Essential off-page proximity boost. Includes 1 geo-network signal to kickstart your local visibility.',
  },
];

function buildCheckoutUrl(plan, quantity) {
  const params = new URLSearchParams({
    package: plan.id,
    quantity: String(quantity),
  });

  return `/cloud-link-intake?${params.toString()}`;
}

export default function CloudLinkPricing() {
  const [selectedId, setSelectedId] = useState('basic');
  const [quantity, setQuantity] = useState(1);
  const selectedPackage = packages.find((plan) => plan.id === selectedId) || packages[2];
  const checkoutUrl = useMemo(() => buildCheckoutUrl(selectedPackage, quantity), [selectedPackage, quantity]);
  const total = selectedPackage.price * quantity;

  return (
    <section className="section cloud-pricing-section" id="cloud-link-pricing">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="section-kicker">Cloud link pricing</p>
            <h2>Choose the authority signal package.</h2>
          </div>
          <p>
            Select a package, choose quantity, complete the short intake, then continue to secure Ziina checkout.
          </p>
        </div>

        <div className="cloud-pricing-panel">
          <div className="cloud-pricing-tabs" role="tablist" aria-label="Cloud link stacking packages">
            {packages.map((plan) => (
              <button
                aria-selected={plan.id === selectedId}
                className={plan.id === selectedId ? 'is-active' : ''}
                key={plan.id}
                onClick={() => {
                  setSelectedId(plan.id);
                  setQuantity(1);
                }}
                role="tab"
                type="button"
              >
                {plan.label}
              </button>
            ))}
          </div>

          <div className="cloud-pricing-summary">
            <div>
              <p className="pricing-card__eyebrow">Service packages</p>
              <h3>{selectedPackage.title}</h3>
              <p className="cloud-pricing-summary__subtitle">{selectedPackage.subtitle}</p>
            </div>
            <div className="cloud-pricing-summary__meta">
              <strong>${selectedPackage.price}.00</strong>
              <span>Delivery in {selectedPackage.delivery}</span>
            </div>
          </div>

          <ul className="cloud-pricing-features">
            <li>1 x revisions</li>
            <li>{selectedPackage.desc}</li>
            <li>{selectedPackage.signalCount}</li>
          </ul>

          <div className="cloud-pricing-purchase">
            <div className="quantity-stepper" aria-label="Package quantity">
              <button
                aria-label="Decrease quantity"
                disabled={quantity === 1}
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                type="button"
              >
                -
              </button>
              <span aria-live="polite">{quantity}</span>
              <button
                aria-label="Increase quantity"
                onClick={() => setQuantity((value) => Math.min(10, value + 1))}
                type="button"
              >
                +
              </button>
            </div>

            <a className="btn btn-primary" href={checkoutUrl} rel="noopener noreferrer">
              Start Checkout (${total}.00)
            </a>
          </div>

          <p className="cloud-pricing-secure">Secure transaction through Ziina checkout.</p>
        </div>
      </div>
    </section>
  );
}
