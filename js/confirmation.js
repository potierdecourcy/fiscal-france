// Miel de Normandie - Order confirmation page logic

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    utils.initMobileNav();
    utils.updateCartCount();

    const orderId = utils.getUrlParam('order');
    if (orderId) {
      const order = APP_DATA.getOrderById(orderId);
      if (order) {
        renderConfirmation(order);
        return;
      }
    }
    // No order found
    renderGenericConfirmation();
  });

  // ── Business-day calculator ────────────────────────────────────────────────
  function addBusinessDays(date, days) {
    const result = new Date(date);
    let added = 0;
    while (added < days) {
      result.setDate(result.getDate() + 1);
      const day = result.getDay();
      if (day !== 0 && day !== 6) added++;
    }
    return result;
  }

  // ── Full confirmation (order found) ───────────────────────────────────────
  function renderConfirmation(order) {
    const container = document.getElementById('confirmation-content');
    if (!container) return;

    const customer = order.customer || {};
    const address = order.deliveryAddress || {};
    const estMin = addBusinessDays(new Date(order.createdAt), 3);
    const estMax = addBusinessDays(new Date(order.createdAt), 5);

    const statusMap = {
      pending: { label: 'En attente', color: '#fd7e14', icon: '⏳' },
      processing: { label: 'En préparation', color: '#007bff', icon: '📦' },
      shipped: { label: 'Expédié', color: '#6f42c1', icon: '🚚' },
      delivered: { label: 'Livré', color: '#28a745', icon: '✅' },
      cancelled: { label: 'Annulé', color: '#dc3545', icon: '❌' }
    };
    const status = statusMap[order.status] || statusMap.pending;

    document.title = `Commande ${order.id} confirmée - Miel de Normandie`;

    container.innerHTML = `
      <!-- Success banner -->
      <div style="text-align:center;margin-bottom:2.5rem;padding:2rem;background:linear-gradient(135deg,#d4edda,#c3e6cb);border-radius:16px">
        <div style="font-size:4rem;margin-bottom:0.75rem">🎉</div>
        <h1 style="color:#155724;font-size:1.75rem;margin-bottom:0.5rem">Commande confirmée !</h1>
        <p style="color:#155724;font-size:1rem">Merci ${customer.firstName || ''} ! Votre commande a été reçue et est en cours de traitement.</p>
        <div style="margin-top:1rem;display:inline-block;padding:0.5rem 1.25rem;background:#fff;border-radius:20px;font-weight:700;color:var(--primary,#c8a94b);font-size:1rem">
          N° ${order.id}
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2rem">
        <!-- Order info -->
        <div style="padding:1.25rem;background:var(--cream,#fdf8ef);border-radius:12px">
          <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:0.75rem;color:var(--text-light,#888);text-transform:uppercase;letter-spacing:0.05em">Détails de la commande</h3>
          <div style="font-size:0.9rem;display:flex;flex-direction:column;gap:0.5rem">
            <div style="display:flex;justify-content:space-between">
              <span>Numéro</span><strong>${order.id}</strong>
            </div>
            <div style="display:flex;justify-content:space-between">
              <span>Date</span><strong>${utils.formatDate(order.createdAt)}</strong>
            </div>
            <div style="display:flex;justify-content:space-between">
              <span>Statut</span>
              <span style="color:${status.color};font-weight:600">${status.icon} ${status.label}</span>
            </div>
            <div style="display:flex;justify-content:space-between">
              <span>Mode de paiement</span><strong>${order.paymentMethod === 'demo' ? 'Démo' : 'Carte bancaire'}</strong>
            </div>
          </div>
        </div>

        <!-- Delivery address -->
        <div style="padding:1.25rem;background:var(--cream,#fdf8ef);border-radius:12px">
          <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:0.75rem;color:var(--text-light,#888);text-transform:uppercase;letter-spacing:0.05em">Adresse de livraison</h3>
          <div style="font-size:0.9rem;line-height:1.7">
            <strong>${address.firstName || ''} ${address.lastName || ''}</strong><br>
            ${address.address || ''}${address.address2 ? '<br>' + address.address2 : ''}<br>
            ${address.postalCode || ''} ${address.city || ''}
          </div>
          ${customer.email ? `<div style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-light,#888)">${customer.email}</div>` : ''}
        </div>
      </div>

      <!-- Items table -->
      <div style="margin-bottom:2rem">
        <h3 style="font-size:1rem;font-weight:600;margin-bottom:0.75rem">Articles commandés</h3>
        <table style="width:100%;border-collapse:collapse">
          <thead>
            <tr style="background:var(--cream-dark,#f5e6c8);text-align:left">
              <th style="padding:0.6rem 0.75rem;font-size:0.85rem">Produit</th>
              <th style="padding:0.6rem 0.75rem;font-size:0.85rem;text-align:center">Qté</th>
              <th style="padding:0.6rem 0.75rem;font-size:0.85rem;text-align:right">Prix unit.</th>
              <th style="padding:0.6rem 0.75rem;font-size:0.85rem;text-align:right">Total</th>
            </tr>
          </thead>
          <tbody>
            ${(order.items || []).map(item => `
              <tr style="border-bottom:1px solid var(--border,#eee)">
                <td style="padding:0.75rem;font-size:0.9rem">${item.productName || 'Produit'}</td>
                <td style="padding:0.75rem;font-size:0.9rem;text-align:center">${item.quantity}</td>
                <td style="padding:0.75rem;font-size:0.9rem;text-align:right">${utils.formatPrice(item.price_ttc)}</td>
                <td style="padding:0.75rem;font-size:0.9rem;text-align:right;font-weight:600">${utils.formatPrice(item.price_ttc * item.quantity)}</td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr style="border-top:1px solid var(--border,#eee)">
              <td colspan="3" style="padding:0.6rem 0.75rem;font-size:0.85rem;text-align:right">Sous-total HT</td>
              <td style="padding:0.6rem 0.75rem;font-size:0.85rem;text-align:right">${utils.formatPrice(order.subtotalHT || 0)}</td>
            </tr>
            <tr>
              <td colspan="3" style="padding:0.3rem 0.75rem;font-size:0.85rem;text-align:right">TVA</td>
              <td style="padding:0.3rem 0.75rem;font-size:0.85rem;text-align:right">${utils.formatPrice(order.tva || 0)}</td>
            </tr>
            <tr>
              <td colspan="3" style="padding:0.3rem 0.75rem;font-size:0.85rem;text-align:right">Livraison</td>
              <td style="padding:0.3rem 0.75rem;font-size:0.85rem;text-align:right;color:${(order.shipping || 0) === 0 ? '#28a745' : 'inherit'};font-weight:600">
                ${(order.shipping || 0) === 0 ? 'GRATUIT' : utils.formatPrice(order.shipping)}
              </td>
            </tr>
            <tr style="background:var(--cream,#fdf8ef)">
              <td colspan="3" style="padding:0.75rem;font-weight:700;text-align:right">Total TTC</td>
              <td style="padding:0.75rem;font-weight:700;text-align:right;font-size:1.1rem;color:var(--primary,#c8a94b)">${utils.formatPrice(order.total || 0)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- Estimated delivery -->
      <div style="padding:1.25rem;background:#e8f5e9;border-radius:12px;margin-bottom:2rem;display:flex;gap:1rem;align-items:flex-start">
        <span style="font-size:2rem">🚚</span>
        <div>
          <h4 style="margin:0 0 0.25rem;color:#2e7d32">Livraison estimée</h4>
          <p style="margin:0;font-size:0.9rem;color:#388e3c">
            Entre le <strong>${utils.formatDate(estMin.toISOString())}</strong> et le <strong>${utils.formatDate(estMax.toISOString())}</strong>
            (jours ouvrés)
          </p>
        </div>
      </div>

      <!-- Action buttons -->
      <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:1.5rem">
        <button onclick="window.print()" class="btn btn-secondary" style="flex:1;min-width:160px">
          🖨️ Télécharger la facture
        </button>
        <button onclick="showOrderStatus('${order.id}')" class="btn btn-secondary" style="flex:1;min-width:160px">
          📦 Suivre la commande
        </button>
        <a href="catalogue.html" class="btn btn-primary" style="flex:1;min-width:160px;text-align:center;text-decoration:none">
          🛒 Continuer mes achats
        </a>
      </div>

      <!-- Status tracker -->
      <div id="order-status-panel" style="display:none;margin-top:1rem;padding:1.25rem;background:var(--cream,#fdf8ef);border-radius:12px">
        <h4 style="margin:0 0 1rem">Statut de la commande</h4>
        ${renderStatusTracker(order.status)}
      </div>
    `;
  }

  function renderStatusTracker(currentStatus) {
    const steps = [
      { id: 'pending', label: 'Commande reçue', icon: '📋' },
      { id: 'processing', label: 'En préparation', icon: '📦' },
      { id: 'shipped', label: 'Expédiée', icon: '🚚' },
      { id: 'delivered', label: 'Livrée', icon: '✅' }
    ];

    const statusOrder = ['pending', 'processing', 'shipped', 'delivered'];
    const currentIdx = statusOrder.indexOf(currentStatus);

    return `
      <div style="display:flex;justify-content:space-between;position:relative;padding:0 1rem">
        <div style="position:absolute;top:20px;left:2rem;right:2rem;height:3px;background:var(--border,#e0d5c5);z-index:0"></div>
        <div style="position:absolute;top:20px;left:2rem;height:3px;background:var(--primary,#c8a94b);z-index:1;width:${Math.min(currentIdx / (steps.length - 1) * 100, 100)}%;transition:width 0.5s"></div>
        ${steps.map((step, i) => {
          const isDone = i <= currentIdx;
          return `
            <div style="display:flex;flex-direction:column;align-items:center;gap:0.4rem;z-index:2;flex:1;text-align:center">
              <div style="width:40px;height:40px;border-radius:50%;background:${isDone ? 'var(--primary,#c8a94b)' : '#fff'};border:2px solid ${isDone ? 'var(--primary,#c8a94b)' : 'var(--border,#ddd)'};display:flex;align-items:center;justify-content:center;font-size:1.1rem;transition:all 0.3s">
                ${step.icon}
              </div>
              <span style="font-size:0.75rem;font-weight:${isDone ? '600' : '400'};color:${isDone ? 'var(--primary,#c8a94b)' : 'var(--text-light,#888)'}">
                ${step.label}
              </span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  window.showOrderStatus = function (orderId) {
    const panel = document.getElementById('order-status-panel');
    if (panel) {
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }
  };

  // ── Generic confirmation (no order data) ──────────────────────────────────
  function renderGenericConfirmation() {
    const container = document.getElementById('confirmation-content');
    if (!container) return;

    document.title = 'Commande confirmée - Miel de Normandie';

    container.innerHTML = `
      <div style="text-align:center;padding:3rem 1rem">
        <div style="font-size:4rem;margin-bottom:1rem">✅</div>
        <h1 style="margin-bottom:0.75rem;color:var(--primary,#c8a94b)">Merci pour votre commande !</h1>
        <p style="color:var(--text-light,#888);margin-bottom:0.5rem;max-width:480px;margin-left:auto;margin-right:auto">
          Votre commande a bien été enregistrée. Vous devriez recevoir un e-mail de confirmation dans quelques minutes.
        </p>
        <p style="color:var(--text-light,#888);margin-bottom:2rem;font-size:0.9rem">
          Si vous ne le recevez pas, vérifiez votre dossier de courrier indésirable.
        </p>
        <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
          <a href="catalogue.html" class="btn btn-primary" style="text-decoration:none">🛒 Continuer mes achats</a>
          <a href="index.html" class="btn btn-secondary" style="text-decoration:none">🏠 Retour à l'accueil</a>
        </div>
      </div>
    `;
  }

})();
