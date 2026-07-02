const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rapidscopemarketing.com';
const ziinaApiUrl = 'https://api-v2.ziina.com/api/payment_intent';

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

function normalizeQuantity(value) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return 1;
  return Math.min(10, Math.max(1, parsed));
}

function getZiinaApiKey() {
  return process.env.ZIINA_API_KEY || process.env.ZIINA_ACCESS_TOKEN;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = getZiinaApiKey();
  if (!apiKey) {
    return res.status(503).json({ error: 'Ziina checkout is not configured. Add ZIINA_API_KEY in the deployment environment.' });
  }

  const { packageId = 'basic', quantity: rawQuantity = 1, customer = {}, targetUrl = '' } = req.body;
  const selectedPackage = packageOptions[packageId];

  if (!selectedPackage) {
    return res.status(400).json({ error: 'Invalid cloud link package.' });
  }

  const quantity = normalizeQuantity(rawQuantity);
  const total = selectedPackage.price * quantity;
  const amount = total * 100;
  const currencyCode = process.env.ZIINA_CURRENCY_CODE || 'AED';
  const packageLabel = `${selectedPackage.label} - ${selectedPackage.title}`;
  const intentParams = new URLSearchParams({
    package: packageId,
    quantity: String(quantity),
  });
  const returnUrl = `${siteUrl}/cloud-link-intake?${intentParams.toString()}`;

  const paymentPayload = {
    amount,
    currency_code: currencyCode,
    message: [
      `Rapid Scope Cloud Link Stacking`,
      `Package: ${packageLabel}`,
      `Quantity: ${quantity}`,
      `Target URL: ${targetUrl || 'Provided in intake'}`,
      customer.email ? `Customer: ${customer.email}` : '',
    ].filter(Boolean).join('\n'),
    success_url: `${returnUrl}&payment=success`,
    cancel_url: `${returnUrl}&payment=cancelled`,
    failure_url: `${returnUrl}&payment=failed`,
    allow_tips: false,
  };

  if (process.env.ZIINA_TEST_MODE === 'true') {
    paymentPayload.test = true;
  }

  try {
    const ziinaResponse = await fetch(ziinaApiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentPayload),
    });

    const data = await ziinaResponse.json().catch(() => ({}));

    if (!ziinaResponse.ok || !data.redirect_url) {
      return res.status(502).json({
        error: 'Unable to create Ziina checkout.',
        detail: data.latest_error?.message || data.message || 'Ziina did not return a checkout URL.',
      });
    }

    return res.status(200).json({
      redirectUrl: data.redirect_url,
      paymentIntentId: data.id,
      amount,
      currencyCode,
    });
  } catch (error) {
    console.error('[Ziina] Payment intent error:', error);
    return res.status(500).json({ error: 'Unable to connect to Ziina checkout.' });
  }
}
