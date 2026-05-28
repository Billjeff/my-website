// API route for contact & lead form submissions
// POST body: { name, email, phone?, company?, website?, service?, message?, source }

import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, website, service, message, source } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Ensure data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    const submission = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      name,
      email,
      phone: phone || '',
      company: company || '',
      website: website || '',
      service: service || '',
      message: message || '',
      source: source || 'website',
      timestamp: new Date().toISOString(),
    };

    // Save to JSON file
    const filePath = path.join(DATA_DIR, `lead-${submission.id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(submission, null, 2), 'utf-8');

    console.log(`[Lead] ${submission.id} | ${name} | ${email} | ${service || source}`);

    return res.status(200).json({
      success: true,
      message: 'Thank you! We will get back to you within 24 hours.',
      id: submission.id,
    });
  } catch (error) {
    console.error('[API] Contact form error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}