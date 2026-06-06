// MielFrance - Product detail page logic

(function () {
  'use strict';

  let currentProduct = null;
  let selectedQty = 1;
  let activeTab = 'description';

  document.addEventListener('DOMContentLoaded', () => {
    const slug = utils.getUrlParam('slug');
    if (!slug) {
      showNotFound();
      return;
    }

    currentProduct = APP_DATA.getProductBySlug(slug);
    if (!currentProduct) {
      showNotFound();
      return;
    }

    renderBreadcrumb();
    renderProductDetail();
    renderTabs();
    renderSimilarProducts();

    utils.initMobileNav();
    utils.updateCartCount();
  });

  // ── Not found ──────────────────────────────────────────────────────────────
  function showNotFound() {
    const main = document.getElementById('product-detail') || document.querySelector('main');
    if (main) {
      main.innerHTML = `
        <div style="text-align:center;padding:4rem 1rem">
          <div style="font-size:4rem;margin-bottom:1rem">😔</div>
          <h2 style="margin-bottom:0.5rem">Produit introuvable</h2>
          <p style="margin-bottom:1.5rem;color:var(--text-light,#888)">Ce produit n'existe pas ou a été retiré de notre catalogue.</p>
          <a href="catalogue.html" class="btn btn-primary">Retour au catalogue</a>
        </div>
      `;
    }
    setTimeout(() => { window.location.href = 'catalogue.html'; }, 3000);
  }

  // ── Breadcrumb ─────────────────────────────────────────────────────────────
  function renderBreadcrumb() {
    const el = document.getElementById('breadcrumb');
    if (!el) return;
    const cat = APP_DATA.getCategoryById(currentProduct.category);
    el.innerHTML = `
      <nav aria-label="Fil d'Ariane">
        <ol class="breadcrumb">
          <li><a href="index.html">Accueil</a></li>
          <li aria-hidden="true">›</li>
          <li><a href="catalogue.html">Catalogue</a></li>
          <li aria-hidden="true">›</li>
          <li><a href="catalogue.html?categorie=${currentProduct.category}">${cat ? cat.name : currentProduct.category}</a></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page">${currentProduct.name}</li>
        </ol>
      </nav>
    `;
  }

  // ── Main product render ────────────────────────────────────────────────────
  function renderProductDetail() {
    const container = document.getElementById('product-detail');
    if (!container) return;

    const p = currentProduct;
    const stockClass = p.stock === 0 ? 'stock-out' : p.stock <= 5 ? 'stock-low' : 'stock-ok';
    const stockText = p.stock === 0 ? 'Rupture de stock' : p.stock <= 5 ? `Seulement ${p.stock} en stock` : `En stock (${p.stock} disponibles)`;
    const maxQty = Math.min(p.stock, 10);
    const tvaAmount = p.price_ttc - p.price_ht;
    const cat = APP_DATA.getCategoryById(p.category);

    document.title = `${p.name} - MielFrance`;

    container.innerHTML = `
      <div class="product-detail-grid">
        <!-- Gallery -->
        <div class="product-gallery">
          <div class="product-main-image" id="main-image">
            <div style="width:100%;height:100%;min-height:320px;display:flex;align-items:center;justify-content:center;background:var(--cream-dark,#f5e6c8);border-radius:12px;font-size:8rem;">
              ${utils.getCategoryEmoji(p.category)}
            </div>
          </div>
          <div class="product-thumbnails" id="thumbnails">
            ${renderThumbnails()}
          </div>
        </div>

        <!-- Info -->
        <div class="product-info-panel">
          <div class="product-meta" style="margin-bottom:0.5rem">
            <span class="product-sku" style="font-size:0.8rem;color:var(--text-light,#888)">Réf. ${p.sku}</span>
            ${cat ? `<span class="product-category-badge" style="margin-left:1rem;font-size:0.8rem;background:var(--cream-dark,#f5e6c8);padding:0.2rem 0.6rem;border-radius:20px">${cat.emoji} ${cat.name}</span>` : ''}
          </div>

          <h1 class="product-title" style="font-size:1.8rem;margin-bottom:0.5rem">${p.name}</h1>

          ${p.origin ? `<p class="product-origin" style="color:var(--text-light,#888);margin-bottom:0.75rem">📍 ${p.origin}</p>` : ''}

          <div class="product-rating" style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem">
            ${utils.renderStars(p.rating || 4.5)}
            <span style="font-size:0.85rem;color:var(--text-light,#888)">${p.rating || 4.5}/5 (${p.reviews_count || 0} avis)</span>
          </div>

          <div class="product-price-block" style="margin-bottom:1.25rem;padding:1rem;background:var(--cream,#fdf8ef);border-radius:8px">
            <div style="display:flex;align-items:baseline;gap:1rem;flex-wrap:wrap">
              <span class="product-price-ttc" style="font-size:2rem;font-weight:700;color:var(--primary,#c8a94b)">${utils.formatPrice(p.price_ttc)}</span>
              <span style="font-size:0.85rem;color:var(--text-light,#888)">TTC</span>
            </div>
            <div style="font-size:0.85rem;color:var(--text-light,#888);margin-top:0.25rem">
              Prix HT : <strong>${utils.formatPrice(p.price_ht)}</strong> &bull; TVA ${p.tva_rate}% : ${utils.formatPrice(tvaAmount)}
            </div>
            <div style="margin-top:0.5rem">
              <span class="product-weight-badge" style="font-size:0.8rem;background:#e9e9e9;padding:0.2rem 0.6rem;border-radius:20px">⚖️ ${utils.formatWeight(p.weight_g)}</span>
            </div>
          </div>

          <div class="product-stock-line" style="margin-bottom:1.25rem">
            <span class="product-stock ${stockClass}" style="display:inline-flex;align-items:center;gap:0.4rem;font-size:0.9rem;font-weight:500">
              <span style="width:8px;height:8px;border-radius:50%;background:${p.stock === 0 ? '#dc3545' : p.stock <= 5 ? '#fd7e14' : '#28a745'};display:inline-block"></span>
              ${stockText}
            </span>
          </div>

          ${p.stock > 0 ? `
          <div class="product-add-to-cart" style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;flex-wrap:wrap">
            <div class="qty-selector" style="display:flex;align-items:center;border:2px solid var(--border,#ddd);border-radius:8px;overflow:hidden">
              <button class="qty-btn" id="qty-minus" onclick="changeQty(-1)"
                style="width:40px;height:44px;background:none;border:none;font-size:1.2rem;cursor:pointer">−</button>
              <input type="number" id="qty-input" value="1" min="1" max="${maxQty}"
                style="width:52px;height:44px;text-align:center;border:none;font-size:1rem;font-weight:600"
                onchange="setQty(parseInt(this.value))">
              <button class="qty-btn" id="qty-plus" onclick="changeQty(1)"
                style="width:40px;height:44px;background:none;border:none;font-size:1.2rem;cursor:pointer">+</button>
            </div>
            <button class="btn btn-primary" id="add-to-cart-btn" onclick="addToCart()"
              style="flex:1;min-width:180px;height:44px;font-size:1rem">
              🛒 Ajouter au panier
            </button>
          </div>
          <p id="qty-note" style="font-size:0.8rem;color:var(--text-light,#888);margin-bottom:1rem">Max. ${maxQty} par commande</p>
          ` : `
          <div style="margin-bottom:1.5rem">
            <button class="btn btn-secondary" disabled style="width:100%;height:44px;cursor:not-allowed">
              Indisponible - Rupture de stock
            </button>
          </div>
          `}

          <div class="product-extras" style="border-top:1px solid var(--border,#eee);padding-top:1rem;font-size:0.85rem;color:var(--text-light,#888);display:flex;flex-direction:column;gap:0.4rem">
            <div>🚚 Livraison gratuite dès 49 € (France métropolitaine)</div>
            <div>🔒 Paiement sécurisé</div>
            <div>↩️ Retour possible sous 14 jours</div>
          </div>
        </div>
      </div>
    `;

    // Bind qty controls
    bindQtyControls(maxQty);
  }

  function renderThumbnails() {
    const emojis = [
      utils.getCategoryEmoji(currentProduct.category),
      '🍯', '🌿'
    ];
    return emojis.map((emoji, i) => `
      <div class="product-thumb ${i === 0 ? 'active' : ''}" onclick="selectThumb(this, '${emoji}')"
        style="width:64px;height:64px;display:flex;align-items:center;justify-content:center;background:var(--cream-dark,#f5e6c8);border-radius:8px;cursor:pointer;font-size:2rem;border:2px solid ${i === 0 ? 'var(--primary,#c8a94b)' : 'transparent'}">
        ${emoji}
      </div>
    `).join('');
  }

  window.selectThumb = function (el, emoji) {
    document.querySelectorAll('.product-thumb').forEach(t => {
      t.style.border = '2px solid transparent';
    });
    el.style.border = '2px solid var(--primary,#c8a94b)';
    const main = document.getElementById('main-image');
    if (main) {
      main.querySelector('div').textContent = emoji;
    }
  };

  // ── Quantity controls ──────────────────────────────────────────────────────
  function bindQtyControls(maxQty) {
    selectedQty = 1;
    updateQtyUI(maxQty);
  }

  window.changeQty = function (delta) {
    const maxQty = Math.min(currentProduct.stock, 10);
    selectedQty = Math.max(1, Math.min(selectedQty + delta, maxQty));
    updateQtyUI(maxQty);
  };

  window.setQty = function (val) {
    const maxQty = Math.min(currentProduct.stock, 10);
    selectedQty = Math.max(1, Math.min(val || 1, maxQty));
    updateQtyUI(maxQty);
  };

  function updateQtyUI(maxQty) {
    const input = document.getElementById('qty-input');
    const minus = document.getElementById('qty-minus');
    const plus = document.getElementById('qty-plus');
    if (input) input.value = selectedQty;
    if (minus) minus.disabled = selectedQty <= 1;
    if (plus) plus.disabled = selectedQty >= maxQty;
  }

  // ── Add to cart ────────────────────────────────────────────────────────────
  window.addToCart = function () {
    if (!currentProduct || currentProduct.stock === 0) return;
    const added = cartManager.addItem(currentProduct.id, selectedQty);
    if (added) {
      utils.showToast(`${currentProduct.name} ajouté au panier (×${selectedQty})`, 'success');
      utils.updateCartCount();
    } else {
      utils.showToast('Impossible d\'ajouter ce produit au panier.', 'error');
    }
  };

  // ── Tabs ───────────────────────────────────────────────────────────────────
  function renderTabs() {
    const tabsContainer = document.getElementById('product-tabs');
    if (!tabsContainer) return;

    const p = currentProduct;

    const tabs = [
      { id: 'description', label: 'Description' },
      { id: 'composition', label: 'Composition' },
      { id: 'livraison', label: 'Livraison' },
      { id: 'avis', label: `Avis (${p.reviews_count || 0})` }
    ];

    tabsContainer.innerHTML = `
      <div class="tabs-nav" style="display:flex;gap:0;border-bottom:2px solid var(--border,#eee);margin-bottom:1.5rem;overflow-x:auto">
        ${tabs.map(t => `
          <button class="tab-btn ${t.id === activeTab ? 'active' : ''}" data-tab="${t.id}"
            onclick="switchTab('${t.id}')"
            style="padding:0.75rem 1.25rem;background:none;border:none;cursor:pointer;font-size:0.95rem;font-weight:${t.id === activeTab ? '600' : '400'};color:${t.id === activeTab ? 'var(--primary,#c8a94b)' : 'var(--text-light,#888)'};border-bottom:${t.id === activeTab ? '2px solid var(--primary,#c8a94b)' : '2px solid transparent'};margin-bottom:-2px;white-space:nowrap">
            ${t.label}
          </button>
        `).join('')}
      </div>
      <div id="tab-content">
        ${renderTabContent(activeTab)}
      </div>
    `;
  }

  window.switchTab = function (tabId) {
    activeTab = tabId;
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const isActive = btn.dataset.tab === tabId;
      btn.classList.toggle('active', isActive);
      btn.style.fontWeight = isActive ? '600' : '400';
      btn.style.color = isActive ? 'var(--primary,#c8a94b)' : 'var(--text-light,#888)';
      btn.style.borderBottom = isActive ? '2px solid var(--primary,#c8a94b)' : '2px solid transparent';
    });
    const content = document.getElementById('tab-content');
    if (content) content.innerHTML = renderTabContent(tabId);
  };

  function renderTabContent(tabId) {
    const p = currentProduct;
    switch (tabId) {
      case 'description':
        return `<div class="tab-description" style="line-height:1.8;color:var(--text-dark,#333)">${p.description || 'Aucune description disponible.'}</div>`;
      case 'composition':
        return `
          <div class="tab-composition">
            <p style="line-height:1.8;margin-bottom:1rem">${p.composition || 'Informations de composition non disponibles.'}</p>
            <table style="width:100%;border-collapse:collapse;font-size:0.9rem">
              <tbody>
                <tr style="border-bottom:1px solid var(--border,#eee)">
                  <td style="padding:0.6rem 0;font-weight:500;width:40%">Catégorie</td>
                  <td>${APP_DATA.getCategoryById(p.category)?.name || p.category}</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border,#eee)">
                  <td style="padding:0.6rem 0;font-weight:500">Poids net</td>
                  <td>${utils.formatWeight(p.weight_g)}</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border,#eee)">
                  <td style="padding:0.6rem 0;font-weight:500">Origine</td>
                  <td>${p.origin || 'France'}</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border,#eee)">
                  <td style="padding:0.6rem 0;font-weight:500">TVA</td>
                  <td>${p.tva_rate}%</td>
                </tr>
                <tr>
                  <td style="padding:0.6rem 0;font-weight:500">Référence</td>
                  <td>${p.sku}</td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
      case 'livraison':
        return `
          <div class="tab-livraison" style="display:grid;gap:1rem">
            ${Object.entries(APP_DATA.shippingRules.zones).map(([key, zone]) => `
              <div style="padding:1rem;border:1px solid var(--border,#eee);border-radius:8px">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.3rem">
                  <strong>${zone.label}</strong>
                  <span style="color:var(--primary,#c8a94b);font-weight:600">À partir de ${utils.formatPrice(zone.baseRate)}</span>
                </div>
                <div style="font-size:0.85rem;color:var(--text-light,#888)">
                  Livraison gratuite dès ${utils.formatPrice(zone.freeThreshold)} d'achat &bull; Poids max : ${utils.formatWeight(zone.maxWeight)}
                </div>
              </div>
            `).join('')}
            <p style="font-size:0.85rem;color:var(--text-light,#888);margin-top:0.5rem">
              Délais de livraison estimés : 2-4 jours ouvrés (France) &bull; 5-10 jours (International)
            </p>
          </div>
        `;
      case 'avis':
        return renderReviews();
      default:
        return '';
    }
  }

  function renderReviews() {
    const p = currentProduct;
    const reviews = p.reviews || [];

    const avgHtml = `
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;padding:1rem;background:var(--cream,#fdf8ef);border-radius:8px">
        <div style="text-align:center">
          <div style="font-size:2.5rem;font-weight:700;color:var(--primary,#c8a94b)">${p.rating || 4.5}</div>
          <div>${utils.renderStars(p.rating || 4.5)}</div>
          <div style="font-size:0.8rem;color:var(--text-light,#888)">${p.reviews_count || 0} avis</div>
        </div>
      </div>
    `;

    if (reviews.length === 0) {
      return avgHtml + '<p style="color:var(--text-light,#888)">Aucun avis pour le moment.</p>';
    }

    const reviewsHtml = reviews.map(r => `
      <div class="review-item" style="padding:1rem 0;border-bottom:1px solid var(--border,#eee)">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem">
          <div style="width:36px;height:36px;border-radius:50%;background:var(--primary,#c8a94b);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;font-size:0.9rem">
            ${r.author.charAt(0)}
          </div>
          <div>
            <div style="font-weight:600;font-size:0.9rem">${r.author}</div>
            <div style="font-size:0.78rem;color:var(--text-light,#888)">${utils.formatDate(r.date)}</div>
          </div>
          <div style="margin-left:auto">${utils.renderStars(r.rating)}</div>
        </div>
        <p style="font-size:0.9rem;line-height:1.6;color:var(--text-dark,#333);margin:0">"${r.text}"</p>
      </div>
    `).join('');

    return avgHtml + `<div class="reviews-list">${reviewsHtml}</div>`;
  }

  // ── Similar products ───────────────────────────────────────────────────────
  function renderSimilarProducts() {
    const container = document.getElementById('similar-products');
    if (!container) return;

    const similar = APP_DATA.products
      .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
      .slice(0, 3);

    if (similar.length === 0) {
      container.style.display = 'none';
      return;
    }

    container.innerHTML = `
      <h2 style="margin-bottom:1.5rem">Produits similaires</h2>
      <div class="products-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.5rem">
        ${similar.map(p => utils.renderProductCard(p)).join('')}
      </div>
    `;
  }

})();
