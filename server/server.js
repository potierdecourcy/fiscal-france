require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'orders.json');

// ── Middleware ─────────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || 'http://localhost:8080',
  methods: ['GET', 'POST', 'PUT', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Stripe webhook needs raw body — mount before json()
app.post('/api/webhook', express.raw({ type: 'application/json' }), handleWebhook);

app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '..')));

// ── Order persistence helpers ──────────────────────────────────────────────────
function loadOrders() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch { return []; }
}

function saveOrders(orders) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(orders, null, 2));
}

// ── Email transporter (configure via env vars) ─────────────────────────────────
const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ethereal.email',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || ''
  }
});

async function sendConfirmationEmail(order) {
  if (!process.env.SMTP_USER) return; // Skip if not configured

  const itemRows = order.items.map(item =>
    `<tr>
      <td style="padding:8px;border-bottom:1px solid #eee">${item.product.name}</td>
      <td style="padding:8px;border-bottom:1px solid #eee;text-align:center">${item.quantity}</td>
      <td style="padding:8px;border-bottom:1px solid #eee;text-align:right">${(item.product.price_ttc * item.quantity).toFixed(2)} €</td>
    </tr>`
  ).join('');

  const html = `
    <!DOCTYPE html>
    <html lang="fr">
    <head><meta charset="UTF-8"><title>Confirmation commande Miel de Normandie</title></head>
    <body style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#2C1810">
      <div style="background:#F5A623;padding:2rem;text-align:center">
        <h1 style="color:white;margin:0">🍯 Miel de Normandie</h1>
        <p style="color:rgba(255,255,255,0.9);margin:0.5rem 0 0">Confirmation de commande</p>
      </div>
      <div style="padding:2rem;background:white">
        <h2 style="color:#D4880A">Merci pour votre commande !</h2>
        <p>Bonjour ${order.customer.firstName},</p>
        <p>Votre commande <strong>${order.id}</strong> a bien été enregistrée. Nous la préparons avec soin.</p>

        <div style="background:#FFF8E1;border-radius:8px;padding:1rem;margin:1.5rem 0">
          <h3 style="margin:0 0 1rem;color:#D4880A">Récapitulatif</h3>
          <table style="width:100%;border-collapse:collapse">
            <thead>
              <tr style="background:#f5f5f5">
                <th style="padding:8px;text-align:left">Produit</th>
                <th style="padding:8px;text-align:center">Qté</th>
                <th style="padding:8px;text-align:right">Total</th>
              </tr>
            </thead>
            <tbody>${itemRows}</tbody>
          </table>
          <div style="margin-top:1rem;text-align:right">
            <p style="margin:0.25rem 0">Sous-total TTC : ${order.subtotalTTC.toFixed(2)} €</p>
            <p style="margin:0.25rem 0">Frais de livraison : ${order.shipping === 0 ? 'Offerts' : order.shipping.toFixed(2) + ' €'}</p>
            <p style="margin:0.5rem 0;font-size:1.1rem;font-weight:bold;color:#D4880A">Total : ${order.total.toFixed(2)} €</p>
          </div>
        </div>

        <div style="margin:1.5rem 0">
          <h3 style="color:#D4880A">Adresse de livraison</h3>
          <p style="margin:0;line-height:1.6">
            ${order.shipping_address.firstName} ${order.shipping_address.lastName}<br>
            ${order.shipping_address.address}<br>
            ${order.shipping_address.address2 ? order.shipping_address.address2 + '<br>' : ''}
            ${order.shipping_address.postalCode} ${order.shipping_address.city}<br>
            ${order.shipping_address.country}
          </p>
        </div>

        <p style="color:#666;font-size:0.9rem">Délai de livraison estimé : <strong>2 à 5 jours ouvrés</strong></p>
        <p style="color:#666;font-size:0.9rem">Vous recevrez un email avec votre numéro de suivi dès l'expédition de votre colis.</p>
      </div>
      <div style="background:#2C1810;color:rgba(255,255,255,0.7);padding:1.5rem;text-align:center;font-size:0.85rem">
        <p style="margin:0">Miel de Normandie | 8 rue des Vergers, 14000 Caen | contact@mieldenormandie.fr</p>
        <p style="margin:0.5rem 0 0"><a href="#" style="color:rgba(255,255,255,0.5)">CGV</a> · <a href="#" style="color:rgba(255,255,255,0.5)">Politique de confidentialité</a></p>
      </div>
    </body>
    </html>
  `;

  await mailer.sendMail({
    from: `"Miel de Normandie" <${process.env.SMTP_FROM || 'noreply@mieldenormandie.fr'}>`,
    to: order.customer.email,
    subject: `Confirmation de commande ${order.id} — Miel de Normandie`,
    html
  });
}

// ── Routes ─────────────────────────────────────────────────────────────────────

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Create Stripe payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'eur', metadata = {} } = req.body;

    if (!amount || typeof amount !== 'number' || amount < 50) {
      return res.status(400).json({ error: 'Montant invalide (minimum 0.50 €)' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to centimes
      currency,
      automatic_payment_methods: { enabled: true },
      metadata: {
        source: 'mieldenormandie',
        ...metadata
      }
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: 'Erreur lors de la création du paiement' });
  }
});

// Save a new order
app.post('/api/orders', async (req, res) => {
  try {
    const order = req.body;

    if (!order.id || !order.customer || !order.items) {
      return res.status(400).json({ error: 'Données de commande incomplètes' });
    }

    order.createdAt = order.createdAt || new Date().toISOString();
    order.status = order.status || 'pending';

    const orders = loadOrders();
    // Avoid duplicates
    const exists = orders.find(o => o.id === order.id);
    if (!exists) {
      orders.unshift(order);
      saveOrders(orders);
    }

    // Send confirmation email (non-blocking)
    sendConfirmationEmail(order).catch(err =>
      console.warn('Email non envoyé:', err.message)
    );

    res.json({ success: true, orderId: order.id });
  } catch (err) {
    console.error('Order save error:', err.message);
    res.status(500).json({ error: 'Erreur lors de la sauvegarde de la commande' });
  }
});

// List all orders (admin)
app.get('/api/orders', (req, res) => {
  const apiKey = req.headers['x-admin-key'];
  if (apiKey !== process.env.ADMIN_API_KEY && process.env.NODE_ENV === 'production') {
    return res.status(401).json({ error: 'Non autorisé' });
  }

  const orders = loadOrders();
  const { status, limit = 50, offset = 0 } = req.query;
  let filtered = orders;

  if (status) filtered = filtered.filter(o => o.status === status);

  res.json({
    total: filtered.length,
    orders: filtered.slice(Number(offset), Number(offset) + Number(limit))
  });
});

// Get single order
app.get('/api/orders/:id', (req, res) => {
  const orders = loadOrders();
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Commande introuvable' });
  res.json(order);
});

// Update order status / tracking number
app.patch('/api/orders/:id', (req, res) => {
  const apiKey = req.headers['x-admin-key'];
  if (apiKey !== process.env.ADMIN_API_KEY && process.env.NODE_ENV === 'production') {
    return res.status(401).json({ error: 'Non autorisé' });
  }

  const orders = loadOrders();
  const idx = orders.findIndex(o => o.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Commande introuvable' });

  const allowed = ['status', 'trackingNumber', 'notes', 'shippedAt', 'deliveredAt'];
  allowed.forEach(field => {
    if (req.body[field] !== undefined) orders[idx][field] = req.body[field];
  });
  orders[idx].updatedAt = new Date().toISOString();

  saveOrders(orders);
  res.json({ success: true, order: orders[idx] });
});

// ── Stripe webhook handler ─────────────────────────────────────────────────────
async function handleWebhook(req, res) {
  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return res.status(400).json({ error: 'Webhook secret non configuré' });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object;
    const orderId = pi.metadata?.orderId;
    if (orderId) {
      const orders = loadOrders();
      const idx = orders.findIndex(o => o.id === orderId);
      if (idx !== -1) {
        orders[idx].status = 'processing';
        orders[idx].paymentStatus = 'paid';
        orders[idx].stripePaymentIntentId = pi.id;
        saveOrders(orders);
      }
    }
  }

  res.json({ received: true });
}

// ── 404 fallback (SPA) ─────────────────────────────────────────────────────────
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'Route non trouvée' });
  }
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// ── Start ──────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Miel de Normandie server running on http://localhost:${PORT}`);
  console.log(`   Stripe mode: ${process.env.STRIPE_SECRET_KEY ? 'configured' : 'demo (no key)'}`);
  console.log(`   Email: ${process.env.SMTP_USER ? 'configured' : 'disabled'}`);
});

module.exports = app;
