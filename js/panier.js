// Miel de Normandie - Panier (cart) page logic

(function () {
  'use strict';

  let currentZone = 'france';

  document.addEventListener('DOMContentLoaded', () => {
    utils.setActive('[href="panier.html"]');
    utils.initMobileNav();
    utils.updateCartCount();
    renderCart();
    bindZoneSelector();
  });

  // ── Main render ────────────────────────────────────────────────────────────
  function renderCart() {
    const items = cartManager.getItems();

    renderCartItems(items);
    renderCartSummary(items);
    updateFreeShippingBar(items);
  }

  // ── Cart items table ───────────────────────────────────────────────────────
  function renderCartItems(items) {
    const container = document.getElementById('cart-items');
    const emptyState = document.getElementById('cart-empty');
    const cartContent = document.getElementById('cart-content');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (!container) return;

    if (items.length === 0) {
      if (cartContent) cartContent.style.display = 'none';
      if (checkoutBtn) checkoutBtn.disabled = true;
      if (emptyState) {
        emptyState.style.display = 'block';
        emptyState.innerHTML = `
          <div style="text-align:center;padding:4rem 1rem">
            <div style="font-size:5rem;margin-bottom:1rem">🛒</div>
            <h2 style="margin-bottom:0.5rem">Votre panier est vide</h2>
            <p style="color:var(--text-light,#888);margin-bottom:1.5rem">Découvrez nos produits apicoles de qualité.</p>
            <a href="catalogue.html" class="btn btn-primary" style="display:inline-block">Voir le catalogue</a>
          </div>
        `;
      }
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (cartContent) cartContent.style.display = '';
    if (checkoutBtn) checkoutBtn.disabled = false;

    container.innerHTML = `
      <table class="cart-table" style="width:100%;border-collapse:collapse">
        <thead>
          <tr style="border-bottom:2px solid var(--border,#eee);text-align:left">
            <th style="padding:0.75rem 0.5rem">Produit</th>
            <th style="padding:0.75rem 0.5rem;text-align:right">Prix unit.</th>
            <th style="padding:0.75rem 0.5rem;text-align:center">Quantité</th>
            <th style="padding:0.75rem 0.5rem;text-align:right">Total</th>
            <th style="padding:0.75rem 0.5rem"></th>
          </tr>
        </thead>
        <tbody>
          ${items.map(item => renderCartRow(item)).join('')}
        </tbody>
      </table>
    `;
  }

  function renderCartRow(item) {
    const p = item.product;
    const lineTotal = p.price_ttc * item.quantity;
    const maxQty = Math.min(p.stock, 10);
    return `
      <tr class="cart-row" data-product-id="${p.id}" style="border-bottom:1px solid var(--border,#f0f0f0)">
        <td style="padding:1rem 0.5rem">
          <div style="display:flex;align-items:center;gap:0.75rem">
            <div style="width:56px;height:56px;background:var(--cream-dark,#f5e6c8);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:2rem;flex-shrink:0">
              ${utils.getCategoryEmoji(p.category)}
            </div>
            <div>
              <a href="produit.html?slug=${p.slug}" style="font-weight:600;text-decoration:none;color:var(--text-dark,#333)">${p.name}</a>
              <div style="font-size:0.78rem;color:var(--text-light,#888)">${p.sku} &bull; ${utils.formatWeight(p.weight_g)}</div>
              ${p.stock <= 5 && p.stock > 0 ? `<div style="font-size:0.78rem;color:#fd7e14">Plus que ${p.stock} en stock</div>` : ''}
            </div>
          </div>
        </td>
        <td style="padding:1rem 0.5rem;text-align:right;font-weight:500">${utils.formatPrice(p.price_ttc)}</td>
        <td style="padding:1rem 0.5rem;text-align:center">
          <div style="display:inline-flex;align-items:center;border:2px solid var(--border,#ddd);border-radius:8px;overflow:hidden">
            <button onclick="updateQty('${p.id}', ${item.quantity - 1})"
              style="width:36px;height:36px;background:none;border:none;font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center"
              ${item.quantity <= 1 ? 'disabled style="opacity:0.4;cursor:not-allowed"' : ''}>−</button>
            <input type="number" value="${item.quantity}" min="1" max="${maxQty}"
              onchange="updateQty('${p.id}', parseInt(this.value) || 1)"
              style="width:44px;height:36px;text-align:center;border:none;font-size:0.95rem;font-weight:600">
            <button onclick="updateQty('${p.id}', ${item.quantity + 1})"
              style="width:36px;height:36px;background:none;border:none;font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center"
              ${item.quantity >= maxQty ? 'disabled style="opacity:0.4;cursor:not-allowed"' : ''}>+</button>
          </div>
        </td>
        <td style="padding:1rem 0.5rem;text-align:right;font-weight:700;color:var(--primary,#c8a94b)">${utils.formatPrice(lineTotal)}</td>
        <td style="padding:1rem 0.5rem;text-align:center">
          <button onclick="removeItem('${p.id}')"
            title="Supprimer"
            style="background:none;border:none;cursor:pointer;color:#dc3545;font-size:1.2rem;padding:0.25rem;border-radius:4px"
            aria-label="Supprimer ${p.name}">🗑️</button>
        </td>
      </tr>
    `;
  }

  // ── Summary sidebar ────────────────────────────────────────────────────────
  function renderCartSummary(items) {
    const container = document.getElementById('cart-summary');
    if (!container) return;

    const subtotalHT = cartManager.getSubtotalHT();
    const subtotalTTC = cartManager.getSubtotalTTC();
    const tva = cartManager.getTVA();
    const shipping = cartManager.getShipping(currentZone);
    const total = cartManager.getTotal(currentZone);
    const zoneRules = APP_DATA.shippingRules.zones[currentZone];
    const freeThreshold = zoneRules ? zoneRules.freeThreshold : 49;
    const isFreeShipping = shipping === 0 && items.length > 0;

    container.innerHTML = `
      <div class="cart-summary-card" style="background:var(--cream,#fdf8ef);border-radius:12px;padding:1.5rem">
        <h3 style="margin:0 0 1.25rem;font-size:1.1rem">Récapitulatif</h3>

        <div style="display:flex;flex-direction:column;gap:0.6rem;margin-bottom:1.25rem">
          <div style="display:flex;justify-content:space-between;font-size:0.9rem">
            <span>Sous-total HT</span>
            <span>${utils.formatPrice(subtotalHT)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:0.9rem">
            <span>TVA</span>
            <span>${utils.formatPrice(tva)}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:0.9rem;padding-top:0.6rem;border-top:1px solid var(--border,#e0d5c5)">
            <span>Sous-total TTC</span>
            <span><strong>${utils.formatPrice(subtotalTTC)}</strong></span>
          </div>

          <div style="margin-top:0.5rem">
            <label for="zone-select" style="font-size:0.85rem;font-weight:500;display:block;margin-bottom:0.3rem">Zone de livraison</label>
            <select id="zone-select" onchange="changeZone(this.value)"
              style="width:100%;padding:0.5rem;border:1px solid var(--border,#ddd);border-radius:6px;font-size:0.9rem">
              ${Object.entries(APP_DATA.shippingRules.zones).map(([key, zone]) =>
                `<option value="${key}" ${key === currentZone ? 'selected' : ''}>${zone.label}</option>`
              ).join('')}
            </select>
          </div>

          <div style="display:flex;justify-content:space-between;font-size:0.9rem;align-items:center">
            <span>Livraison</span>
            <span style="font-weight:600;color:${isFreeShipping ? '#28a745' : 'inherit'}">
              ${items.length === 0 ? '—' : isFreeShipping ? 'GRATUIT' : utils.formatPrice(shipping)}
            </span>
          </div>
        </div>

        <div style="border-top:2px solid var(--primary,#c8a94b);padding-top:1rem;display:flex;justify-content:space-between;align-items:baseline;margin-bottom:1.25rem">
          <span style="font-size:1rem;font-weight:600">Total TTC</span>
          <span style="font-size:1.5rem;font-weight:700;color:var(--primary,#c8a94b)">${utils.formatPrice(total)}</span>
        </div>

        <a href="checkout.html" id="checkout-btn" class="btn btn-primary btn-full"
          style="display:block;text-align:center;text-decoration:none;width:100%;padding:0.85rem;font-size:1rem;${items.length === 0 ? 'opacity:0.5;pointer-events:none' : ''}">
          Commander →
        </a>

        <button onclick="clearCartConfirm()"
          style="margin-top:0.75rem;width:100%;padding:0.6rem;background:none;border:1px solid #dc3545;color:#dc3545;border-radius:6px;cursor:pointer;font-size:0.85rem"
          ${items.length === 0 ? 'disabled style="opacity:0.4;cursor:not-allowed"' : ''}>
          🗑️ Vider le panier
        </button>
      </div>
    `;
  }

  // ── Free shipping progress bar ─────────────────────────────────────────────
  function updateFreeShippingBar(items) {
    const container = document.getElementById('free-shipping-bar');
    if (!container) return;

    if (items.length === 0) {
      container.style.display = 'none';
      return;
    }

    const zoneRules = APP_DATA.shippingRules.zones[currentZone];
    if (!zoneRules) { container.style.display = 'none'; return; }

    const subtotal = cartManager.getSubtotalTTC();
    const threshold = zoneRules.freeThreshold;
    const progress = Math.min((subtotal / threshold) * 100, 100);
    const remaining = Math.max(threshold - subtotal, 0);

    container.style.display = 'block';
    container.innerHTML = `
      <div style="background:var(--cream,#fdf8ef);border-radius:8px;padding:0.75rem 1rem;margin-bottom:1rem">
        ${remaining > 0
          ? `<p style="font-size:0.85rem;margin:0 0 0.5rem;color:var(--text-dark,#333)">
              Plus que <strong>${utils.formatPrice(remaining)}</strong> pour la livraison gratuite (${zoneRules.label}) !
             </p>`
          : `<p style="font-size:0.85rem;margin:0 0 0.5rem;color:#28a745;font-weight:600">
              ✅ Vous bénéficiez de la livraison gratuite !
             </p>`
        }
        <div style="height:8px;background:var(--border,#e0d5c5);border-radius:4px;overflow:hidden">
          <div style="height:100%;width:${progress}%;background:${progress >= 100 ? '#28a745' : 'var(--primary,#c8a94b)'};border-radius:4px;transition:width 0.4s ease"></div>
        </div>
      </div>
    `;
  }

  // ── Zone selector ──────────────────────────────────────────────────────────
  function bindZoneSelector() {
    // Zone select is rendered inside renderCartSummary, handled via window.changeZone
  }

  window.changeZone = function (zone) {
    currentZone = zone;
    const items = cartManager.getItems();
    renderCartSummary(items);
    updateFreeShippingBar(items);
  };

  // ── Actions ────────────────────────────────────────────────────────────────
  window.updateQty = function (productId, qty) {
    cartManager.updateQuantity(productId, qty);
    utils.updateCartCount();
    renderCart();
  };

  window.removeItem = function (productId) {
    const item = cartManager.getItems().find(i => i.productId === productId);
    const name = item ? item.product.name : 'produit';
    cartManager.removeItem(productId);
    utils.updateCartCount();
    utils.showToast(`${name} retiré du panier`, 'info');
    renderCart();
  };

  window.clearCartConfirm = function () {
    if (cartManager.isEmpty()) return;
    if (confirm('Voulez-vous vraiment vider votre panier ?')) {
      cartManager.clear();
      utils.updateCartCount();
      utils.showToast('Panier vidé', 'info');
      renderCart();
    }
  };

})();
