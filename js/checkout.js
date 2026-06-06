// MielFrance - Checkout page logic

(function () {
  'use strict';

  let currentStep = 1;
  const TOTAL_STEPS = 3;
  let formData = {
    delivery: {},
    billing: {},
    sameAddress: true,
    zone: 'france'
  };

  // Country → zone mapping
  const countryZoneMap = {
    'FR': 'france',
    'GP': 'dom', 'MQ': 'dom', 'GF': 'dom', 'RE': 'dom', 'PM': 'dom',
    'YT': 'dom', 'BL': 'dom', 'MF': 'dom', 'NC': 'dom', 'PF': 'dom',
    'WF': 'dom', 'TF': 'dom',
    'DE': 'europe', 'BE': 'europe', 'NL': 'europe', 'LU': 'europe',
    'IT': 'europe', 'ES': 'europe', 'PT': 'europe', 'AT': 'europe',
    'CH': 'europe', 'GB': 'europe', 'IE': 'europe', 'PL': 'europe',
    'SE': 'europe', 'DK': 'europe', 'FI': 'europe', 'NO': 'europe',
    'CZ': 'europe', 'SK': 'europe', 'HU': 'europe', 'RO': 'europe',
    'BG': 'europe', 'HR': 'europe', 'SI': 'europe', 'EE': 'europe',
    'LV': 'europe', 'LT': 'europe', 'GR': 'europe', 'CY': 'europe',
    'MT': 'europe'
  };

  const countries = [
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'BE', name: 'Belgique', flag: '🇧🇪' },
    { code: 'CH', name: 'Suisse', flag: '🇨🇭' },
    { code: 'LU', name: 'Luxembourg', flag: '🇱🇺' },
    { code: 'DE', name: 'Allemagne', flag: '🇩🇪' },
    { code: 'ES', name: 'Espagne', flag: '🇪🇸' },
    { code: 'IT', name: 'Italie', flag: '🇮🇹' },
    { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
    { code: 'NL', name: 'Pays-Bas', flag: '🇳🇱' },
    { code: 'GB', name: 'Royaume-Uni', flag: '🇬🇧' },
    { code: 'GP', name: 'Guadeloupe (DOM)', flag: '🇫🇷' },
    { code: 'MQ', name: 'Martinique (DOM)', flag: '🇫🇷' },
    { code: 'GF', name: 'Guyane (DOM)', flag: '🇫🇷' },
    { code: 'RE', name: 'La Réunion (DOM)', flag: '🇫🇷' },
    { code: 'OTHER', name: 'Autre pays', flag: '🌍' }
  ];

  document.addEventListener('DOMContentLoaded', () => {
    // Redirect if cart empty
    if (!window.cartManager || cartManager.isEmpty()) {
      utils.showToast('Votre panier est vide.', 'warning');
      setTimeout(() => { window.location.href = 'panier.html'; }, 1500);
      return;
    }

    utils.initMobileNav();
    utils.updateCartCount();
    renderOrderSidebar();
    showStep(1);
  });

  // ── Step navigation ────────────────────────────────────────────────────────
  function showStep(step) {
    currentStep = step;
    updateStepIndicator();

    const container = document.getElementById('checkout-steps');
    if (!container) return;

    switch (step) {
      case 1: container.innerHTML = renderStep1(); bindStep1Events(); break;
      case 2: container.innerHTML = renderStep2(); bindStep2Events(); break;
      case 3: container.innerHTML = renderStep3(); bindStep3Events(); break;
    }

    // Scroll to top of form
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function updateStepIndicator() {
    const indicators = document.querySelectorAll('.step-indicator');
    indicators.forEach((el, i) => {
      const stepNum = i + 1;
      el.classList.toggle('active', stepNum === currentStep);
      el.classList.toggle('done', stepNum < currentStep);
    });

    // Update step title if exists
    const titles = ['Adresse de livraison', 'Récapitulatif', 'Paiement'];
    const titleEl = document.getElementById('step-title');
    if (titleEl) titleEl.textContent = titles[currentStep - 1];
  }

  // ── Step 1: Shipping address ───────────────────────────────────────────────
  function renderStep1() {
    const d = formData.delivery;
    return `
      <div class="checkout-step" id="step-1">
        <h2 style="margin-bottom:1.5rem;font-size:1.25rem">1. Adresse de livraison</h2>
        <form id="delivery-form" novalidate>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
            <div class="form-group">
              <label for="firstName" class="form-label">Prénom *</label>
              <input type="text" id="firstName" name="firstName" class="form-input" value="${d.firstName || ''}" placeholder="Jean" required>
              <div class="form-error" id="err-firstName"></div>
            </div>
            <div class="form-group">
              <label for="lastName" class="form-label">Nom *</label>
              <input type="text" id="lastName" name="lastName" class="form-input" value="${d.lastName || ''}" placeholder="Dupont" required>
              <div class="form-error" id="err-lastName"></div>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
            <div class="form-group">
              <label for="email" class="form-label">Adresse e-mail *</label>
              <input type="email" id="email" name="email" class="form-input" value="${d.email || ''}" placeholder="jean.dupont@exemple.fr" required>
              <div class="form-error" id="err-email"></div>
            </div>
            <div class="form-group">
              <label for="phone" class="form-label">Téléphone *</label>
              <input type="tel" id="phone" name="phone" class="form-input" value="${d.phone || ''}" placeholder="06 12 34 56 78" required>
              <div class="form-error" id="err-phone"></div>
            </div>
          </div>

          <div class="form-group" style="margin-bottom:1rem">
            <label for="address" class="form-label">Adresse *</label>
            <input type="text" id="address" name="address" class="form-input" value="${d.address || ''}" placeholder="12 rue des Fleurs" required>
            <div class="form-error" id="err-address"></div>
          </div>

          <div class="form-group" style="margin-bottom:1rem">
            <label for="address2" class="form-label">Complément d'adresse</label>
            <input type="text" id="address2" name="address2" class="form-input" value="${d.address2 || ''}" placeholder="Appartement, étage, bâtiment...">
          </div>

          <div style="display:grid;grid-template-columns:1fr 2fr;gap:1rem;margin-bottom:1rem">
            <div class="form-group">
              <label for="postalCode" class="form-label">Code postal *</label>
              <input type="text" id="postalCode" name="postalCode" class="form-input" value="${d.postalCode || ''}" placeholder="75001" maxlength="10" required>
              <div class="form-error" id="err-postalCode"></div>
            </div>
            <div class="form-group">
              <label for="city" class="form-label">Ville *</label>
              <input type="text" id="city" name="city" class="form-input" value="${d.city || ''}" placeholder="Paris" required>
              <div class="form-error" id="err-city"></div>
            </div>
          </div>

          <div class="form-group" style="margin-bottom:1.5rem">
            <label for="country" class="form-label">Pays *</label>
            <select id="country" name="country" class="form-input" required>
              ${countries.map(c => `<option value="${c.code}" ${(d.country || 'FR') === c.code ? 'selected' : ''}>${c.flag} ${c.name}</option>`).join('')}
            </select>
            <div class="form-error" id="err-country"></div>
          </div>

          <div style="border:1px solid var(--border,#eee);border-radius:8px;padding:1rem;margin-bottom:1.5rem">
            <label style="display:flex;align-items:center;gap:0.75rem;cursor:pointer">
              <input type="checkbox" id="same-address" ${formData.sameAddress ? 'checked' : ''} style="width:18px;height:18px">
              <span style="font-size:0.95rem">Adresse de facturation identique à la livraison</span>
            </label>
          </div>

          <div id="billing-address-section" style="display:${formData.sameAddress ? 'none' : 'block'}">
            <h3 style="margin-bottom:1rem;font-size:1rem;color:var(--text-light,#888)">Adresse de facturation</h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
              <div class="form-group">
                <label for="b-firstName" class="form-label">Prénom *</label>
                <input type="text" id="b-firstName" class="form-input" value="${formData.billing.firstName || ''}">
              </div>
              <div class="form-group">
                <label for="b-lastName" class="form-label">Nom *</label>
                <input type="text" id="b-lastName" class="form-input" value="${formData.billing.lastName || ''}">
              </div>
            </div>
            <div class="form-group" style="margin-bottom:1rem">
              <label for="b-address" class="form-label">Adresse *</label>
              <input type="text" id="b-address" class="form-input" value="${formData.billing.address || ''}">
            </div>
            <div style="display:grid;grid-template-columns:1fr 2fr;gap:1rem;margin-bottom:1rem">
              <div class="form-group">
                <label for="b-postalCode" class="form-label">Code postal *</label>
                <input type="text" id="b-postalCode" class="form-input" value="${formData.billing.postalCode || ''}">
              </div>
              <div class="form-group">
                <label for="b-city" class="form-label">Ville *</label>
                <input type="text" id="b-city" class="form-input" value="${formData.billing.city || ''}">
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-full" style="height:48px;font-size:1rem">
            Continuer → Récapitulatif
          </button>
        </form>
      </div>
    `;
  }

  function bindStep1Events() {
    const sameAddressCheck = document.getElementById('same-address');
    const billingSection = document.getElementById('billing-address-section');
    if (sameAddressCheck && billingSection) {
      sameAddressCheck.addEventListener('change', e => {
        formData.sameAddress = e.target.checked;
        billingSection.style.display = e.target.checked ? 'none' : 'block';
      });
    }

    const countrySelect = document.getElementById('country');
    if (countrySelect) {
      countrySelect.addEventListener('change', e => {
        const zone = countryZoneMap[e.target.value] || 'world';
        formData.zone = zone;
        renderOrderSidebar();
      });
    }

    const form = document.getElementById('delivery-form');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        if (validateStep1()) {
          collectStep1Data();
          showStep(2);
        }
      });
    }
  }

  function validateStep1() {
    let valid = true;
    const errors = {};

    const getValue = id => (document.getElementById(id)?.value || '').trim();

    if (!getValue('firstName')) errors.firstName = 'Le prénom est requis.';
    if (!getValue('lastName')) errors.lastName = 'Le nom est requis.';

    const email = getValue('email');
    if (!email) {
      errors.email = 'L\'adresse e-mail est requise.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Adresse e-mail invalide.';
    }

    const phone = getValue('phone').replace(/\s/g, '');
    if (!phone) {
      errors.phone = 'Le téléphone est requis.';
    } else if (!/^(\+?\d{7,15})$/.test(phone)) {
      errors.phone = 'Numéro de téléphone invalide.';
    }

    if (!getValue('address')) errors.address = 'L\'adresse est requise.';

    const postalCode = getValue('postalCode');
    if (!postalCode) {
      errors.postalCode = 'Le code postal est requis.';
    } else if (!/^\d{4,10}$/.test(postalCode.replace(/\s/g, ''))) {
      errors.postalCode = 'Code postal invalide.';
    }

    if (!getValue('city')) errors.city = 'La ville est requise.';

    // Display errors
    ['firstName','lastName','email','phone','address','postalCode','city'].forEach(field => {
      const errEl = document.getElementById(`err-${field}`);
      const input = document.getElementById(field);
      if (errEl) errEl.textContent = errors[field] || '';
      if (input) {
        input.style.borderColor = errors[field] ? '#dc3545' : '';
      }
    });

    valid = Object.keys(errors).length === 0;
    return valid;
  }

  function collectStep1Data() {
    const getValue = id => (document.getElementById(id)?.value || '').trim();
    formData.delivery = {
      firstName: getValue('firstName'),
      lastName: getValue('lastName'),
      email: getValue('email'),
      phone: getValue('phone'),
      address: getValue('address'),
      address2: getValue('address2'),
      postalCode: getValue('postalCode'),
      city: getValue('city'),
      country: getValue('country')
    };
    const country = formData.delivery.country;
    formData.zone = countryZoneMap[country] || 'world';

    if (formData.sameAddress) {
      formData.billing = { ...formData.delivery };
    } else {
      formData.billing = {
        firstName: getValue('b-firstName'),
        lastName: getValue('b-lastName'),
        address: getValue('b-address'),
        postalCode: getValue('b-postalCode'),
        city: getValue('b-city'),
        country: formData.delivery.country
      };
    }
  }

  // ── Step 2: Order summary ──────────────────────────────────────────────────
  function renderStep2() {
    const items = cartManager.getItems();
    const zone = formData.zone;
    const d = formData.delivery;
    const zoneRules = APP_DATA.shippingRules.zones[zone];

    return `
      <div class="checkout-step" id="step-2">
        <h2 style="margin-bottom:1.5rem;font-size:1.25rem">2. Récapitulatif de la commande</h2>

        <div style="margin-bottom:1.5rem;padding:1rem;background:var(--cream,#fdf8ef);border-radius:8px">
          <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:0.5rem">Livraison à</h3>
          <p style="font-size:0.9rem;color:var(--text-dark,#333);line-height:1.6">
            ${d.firstName} ${d.lastName}<br>
            ${d.address}${d.address2 ? ', ' + d.address2 : ''}<br>
            ${d.postalCode} ${d.city}<br>
            ${countries.find(c => c.code === d.country)?.name || d.country}
          </p>
          <button onclick="showStep(1)" style="margin-top:0.5rem;background:none;border:none;color:var(--primary,#c8a94b);cursor:pointer;font-size:0.85rem;padding:0">Modifier</button>
        </div>

        <table style="width:100%;border-collapse:collapse;margin-bottom:1.5rem">
          <thead>
            <tr style="background:var(--cream-dark,#f5e6c8);text-align:left">
              <th style="padding:0.6rem 0.75rem;font-size:0.85rem">Produit</th>
              <th style="padding:0.6rem 0.75rem;font-size:0.85rem;text-align:right">Prix</th>
              <th style="padding:0.6rem 0.75rem;font-size:0.85rem;text-align:center">Qté</th>
              <th style="padding:0.6rem 0.75rem;font-size:0.85rem;text-align:right">Total</th>
            </tr>
          </thead>
          <tbody>
            ${items.map(item => `
              <tr style="border-bottom:1px solid var(--border,#eee)">
                <td style="padding:0.75rem;font-size:0.9rem">
                  <span style="margin-right:0.4rem">${utils.getCategoryEmoji(item.product.category)}</span>
                  ${item.product.name}
                </td>
                <td style="padding:0.75rem;font-size:0.9rem;text-align:right">${utils.formatPrice(item.product.price_ttc)}</td>
                <td style="padding:0.75rem;font-size:0.9rem;text-align:center">${item.quantity}</td>
                <td style="padding:0.75rem;font-size:0.9rem;text-align:right;font-weight:600">${utils.formatPrice(item.product.price_ttc * item.quantity)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="background:var(--cream,#fdf8ef);border-radius:8px;padding:1rem;margin-bottom:1.5rem">
          <div style="display:flex;justify-content:space-between;margin-bottom:0.4rem;font-size:0.9rem">
            <span>Sous-total HT</span><span>${utils.formatPrice(cartManager.getSubtotalHT())}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:0.4rem;font-size:0.9rem">
            <span>TVA</span><span>${utils.formatPrice(cartManager.getTVA())}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:0.4rem;font-size:0.9rem">
            <span>Livraison (${zoneRules ? zoneRules.label : zone})</span>
            <span style="color:${cartManager.getShipping(zone) === 0 ? '#28a745' : 'inherit'};font-weight:600">
              ${cartManager.getShipping(zone) === 0 ? 'GRATUIT' : utils.formatPrice(cartManager.getShipping(zone))}
            </span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:1.1rem;font-weight:700;border-top:2px solid var(--primary,#c8a94b);padding-top:0.75rem;margin-top:0.5rem">
            <span>Total TTC</span><span style="color:var(--primary,#c8a94b)">${utils.formatPrice(cartManager.getTotal(zone))}</span>
          </div>
        </div>

        <div style="display:flex;gap:1rem">
          <button onclick="showStep(1)" class="btn btn-secondary" style="flex:1;height:48px">← Retour</button>
          <button id="step2-next" class="btn btn-primary" style="flex:2;height:48px;font-size:1rem">
            Continuer → Paiement
          </button>
        </div>
      </div>
    `;
  }

  function bindStep2Events() {
    const nextBtn = document.getElementById('step2-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => showStep(3));
    }
  }

  // ── Step 3: Payment ────────────────────────────────────────────────────────
  function renderStep3() {
    const total = cartManager.getTotal(formData.zone);
    return `
      <div class="checkout-step" id="step-3">
        <h2 style="margin-bottom:1.5rem;font-size:1.25rem">3. Paiement</h2>

        <div style="padding:1.5rem;background:var(--cream,#fdf8ef);border-radius:12px;margin-bottom:1.5rem">
          <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem">
            <span style="font-size:1.25rem">🔒</span>
            <span style="font-size:0.9rem;color:var(--text-light,#888)">Paiement sécurisé — vos données sont protégées</span>
          </div>

          <div id="payment-method-tabs" style="display:flex;gap:0.5rem;margin-bottom:1.5rem;flex-wrap:wrap">
            <button class="payment-tab active" data-method="demo" onclick="selectPaymentMethod('demo')"
              style="padding:0.6rem 1rem;border:2px solid var(--primary,#c8a94b);border-radius:6px;background:var(--primary,#c8a94b);color:#fff;cursor:pointer;font-size:0.85rem">
              💳 Mode Démo
            </button>
            <button class="payment-tab" data-method="card" onclick="selectPaymentMethod('card')"
              style="padding:0.6rem 1rem;border:2px solid var(--border,#ddd);border-radius:6px;background:#fff;cursor:pointer;font-size:0.85rem">
              🏦 Carte bancaire (Stripe)
            </button>
          </div>

          <div id="payment-demo" class="payment-panel">
            <div style="padding:1.5rem;border:2px dashed var(--primary,#c8a94b);border-radius:8px;text-align:center;margin-bottom:1rem">
              <div style="font-size:2.5rem;margin-bottom:0.75rem">🧪</div>
              <p style="font-weight:600;margin-bottom:0.25rem">Mode Démonstration</p>
              <p style="font-size:0.85rem;color:var(--text-light,#888)">Aucune transaction réelle. Cliquez sur le bouton ci-dessous pour simuler un paiement réussi.</p>
            </div>
            <button id="demo-pay-btn" class="btn btn-primary btn-full" onclick="processDemoPayment()" style="height:52px;font-size:1.05rem">
              💳 Payer ${utils.formatPrice(total)} (démo)
            </button>
          </div>

          <div id="payment-card" class="payment-panel" style="display:none">
            <div style="padding:1rem;border:1px solid var(--border,#ddd);border-radius:8px;margin-bottom:1rem;min-height:60px;background:#fff">
              <div id="stripe-card-element" style="padding:0.5rem">
                <p style="color:var(--text-light,#888);font-size:0.9rem;font-style:italic">
                  ℹ️ Intégration Stripe requiert une clé API. En mode production, le formulaire de carte s'afficherait ici.
                </p>
              </div>
              <div id="stripe-error" style="color:#dc3545;font-size:0.85rem;margin-top:0.5rem"></div>
            </div>
            <button class="btn btn-primary btn-full" onclick="processStripePayment()" style="height:52px;font-size:1.05rem">
              🔒 Payer ${utils.formatPrice(total)} en toute sécurité
            </button>
          </div>
        </div>

        <div style="display:flex;gap:1rem">
          <button onclick="showStep(2)" class="btn btn-secondary" style="flex:1;height:48px">← Retour</button>
        </div>

        <div style="margin-top:1rem;text-align:center;font-size:0.8rem;color:var(--text-light,#888)">
          🔒 Transactions sécurisées par SSL • Données encryptées • Conformité RGPD
        </div>
      </div>
    `;
  }

  function bindStep3Events() {
    // Already wired via onclick attributes
  }

  window.selectPaymentMethod = function (method) {
    document.querySelectorAll('.payment-tab').forEach(btn => {
      const isActive = btn.dataset.method === method;
      btn.style.background = isActive ? 'var(--primary,#c8a94b)' : '#fff';
      btn.style.color = isActive ? '#fff' : 'inherit';
      btn.style.borderColor = isActive ? 'var(--primary,#c8a94b)' : 'var(--border,#ddd)';
    });
    document.querySelectorAll('.payment-panel').forEach(panel => {
      panel.style.display = 'none';
    });
    const activePanel = document.getElementById(`payment-${method}`);
    if (activePanel) activePanel.style.display = 'block';
  };

  window.processDemoPayment = function () {
    const btn = document.getElementById('demo-pay-btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Traitement en cours…'; }

    setTimeout(() => {
      createOrder();
    }, 1200);
  };

  window.processStripePayment = function () {
    // Stripe integration placeholder
    utils.showToast('Intégration Stripe non configurée. Utilisez le mode Démo.', 'warning');
  };

  function createOrder() {
    const orderId = APP_DATA.generateOrderId();
    const items = cartManager.getItems();
    const zone = formData.zone;

    const order = {
      id: orderId,
      items: items.map(i => ({
        productId: i.productId,
        productName: i.product.name,
        sku: i.product.sku,
        quantity: i.quantity,
        price_ht: i.product.price_ht,
        price_ttc: i.product.price_ttc,
        tva_rate: i.product.tva_rate
      })),
      customer: {
        firstName: formData.delivery.firstName,
        lastName: formData.delivery.lastName,
        email: formData.delivery.email,
        phone: formData.delivery.phone
      },
      deliveryAddress: formData.delivery,
      billingAddress: formData.billing,
      zone,
      subtotalHT: cartManager.getSubtotalHT(),
      subtotalTTC: cartManager.getSubtotalTTC(),
      tva: cartManager.getTVA(),
      shipping: cartManager.getShipping(zone),
      total: cartManager.getTotal(zone),
      status: 'pending',
      paymentMethod: 'demo',
      createdAt: new Date().toISOString()
    };

    APP_DATA.saveOrder(order);
    cartManager.clear();
    window.location.href = `confirmation.html?order=${orderId}`;
  }

  // ── Order sidebar (always visible) ────────────────────────────────────────
  function renderOrderSidebar() {
    const sidebar = document.getElementById('order-sidebar');
    if (!sidebar) return;

    const items = cartManager.getItems();
    const zone = formData.zone;

    sidebar.innerHTML = `
      <div class="order-sidebar-card" style="background:var(--cream,#fdf8ef);border-radius:12px;padding:1.25rem;position:sticky;top:1rem">
        <h3 style="margin:0 0 1rem;font-size:1rem">Votre commande</h3>
        <div style="display:flex;flex-direction:column;gap:0.6rem;margin-bottom:1rem;max-height:220px;overflow-y:auto">
          ${items.map(i => `
            <div style="display:flex;gap:0.5rem;align-items:center;font-size:0.85rem">
              <span>${utils.getCategoryEmoji(i.product.category)}</span>
              <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.product.name}</span>
              <span style="color:var(--text-light,#888)">×${i.quantity}</span>
              <span style="font-weight:600;white-space:nowrap">${utils.formatPrice(i.product.price_ttc * i.quantity)}</span>
            </div>
          `).join('')}
        </div>
        <div style="border-top:1px solid var(--border,#e0d5c5);padding-top:0.75rem;display:flex;flex-direction:column;gap:0.4rem;font-size:0.875rem">
          <div style="display:flex;justify-content:space-between">
            <span>Livraison</span>
            <span style="font-weight:600;color:${cartManager.getShipping(zone) === 0 ? '#28a745' : 'inherit'}">
              ${cartManager.getShipping(zone) === 0 ? 'Gratuit' : utils.formatPrice(cartManager.getShipping(zone))}
            </span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:1rem;font-weight:700;border-top:2px solid var(--primary,#c8a94b);padding-top:0.6rem;margin-top:0.3rem">
            <span>Total TTC</span>
            <span style="color:var(--primary,#c8a94b)">${utils.formatPrice(cartManager.getTotal(zone))}</span>
          </div>
        </div>
      </div>
    `;
  }

  // Expose showStep globally (used by buttons)
  window.showStep = showStep;

})();
