window.utils = {
  formatPrice(amount) {
    return new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(amount);
  },
  formatDate(dateStr) {
    return new Intl.DateTimeFormat('fr-FR', {day:'numeric', month:'long', year:'numeric'}).format(new Date(dateStr));
  },
  formatWeight(grams) {
    if (grams >= 1000) return (grams / 1000).toFixed(1).replace('.0','') + ' kg';
    return grams + ' g';
  },
  generateOrderId() {
    return 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2,4).toUpperCase();
  },
  slugify(text) {
    return text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  },
  getUrlParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  },
  renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let html = '<div class="stars" aria-label="Note: ' + rating + '/5">';
    for (let i = 0; i < 5; i++) {
      if (i < full) html += '<span>&#9733;</span>';
      else if (i === full && half) html += '<span style="opacity:0.6">&#9733;</span>';
      else html += '<span style="opacity:0.2">&#9733;</span>';
    }
    html += '</div>';
    return html;
  },
  renderProductCard(product, options = {}) {
    const stockClass = product.stock === 0 ? 'stock-out' : product.stock <= 5 ? 'stock-low' : 'stock-ok';
    const stockText = product.stock === 0 ? 'Rupture de stock' : product.stock <= 5 ? `Plus que ${product.stock} en stock` : 'En stock';
    const badge = product.tags?.includes('bio') ? '<span class="product-badge bio">Bio</span>' :
                  product.featured ? '<span class="product-badge">Vedette</span>' : '';
    return `
      <article class="product-card" onclick="window.location='produit.html?slug=${product.slug}'" role="button" tabindex="0" aria-label="${product.name}">
        <div class="product-image-wrap">
          ${badge}
          <div class="product-img-placeholder" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--cream-dark,#f5e6c8);font-size:4rem;">
            ${utils.getCategoryEmoji(product.category)}
          </div>
        </div>
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-origin">${product.origin || ''}</p>
          <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
            ${utils.renderStars(product.rating || 4.5)}
            <span style="font-size:0.78rem;color:var(--text-light,#888)">(${product.reviews_count || 0})</span>
          </div>
          <div class="product-price-wrap">
            <div>
              <div class="product-price">${utils.formatPrice(product.price_ttc)}</div>
              <div class="product-price-ht">HT: ${utils.formatPrice(product.price_ht)}</div>
            </div>
            <span class="product-stock ${stockClass}">${stockText}</span>
          </div>
        </div>
        <div class="product-card-actions">
          <button class="btn btn-primary btn-sm btn-full"
            onclick="event.stopPropagation(); cartManager.addItem('${product.id}', 1); utils.showToast('${product.name.replace(/'/g, "\\'")} ajouté au panier', 'success');"
            ${product.stock === 0 ? 'disabled' : ''}>
            ${product.stock === 0 ? 'Indisponible' : '🛒 Ajouter'}
          </button>
        </div>
      </article>
    `;
  },
  getCategoryEmoji(category) {
    const map = {miel:'🍯', propolis:'🌿', pollen:'🌸', cire:'🕯️', 'gelee-royale':'👑', 'epicerie-fine':'🎁'};
    return map[category] || '📦';
  },
  showToast(message, type = 'info', duration = 3000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      Object.assign(container.style, {
        position: 'fixed', bottom: '1.5rem', right: '1.5rem',
        zIndex: '9999', display: 'flex', flexDirection: 'column', gap: '0.5rem'
      });
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    Object.assign(toast.style, {
      display: 'flex', alignItems: 'center', gap: '0.5rem',
      padding: '0.75rem 1rem', borderRadius: '8px', minWidth: '260px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)', fontSize: '0.9rem',
      background: type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : type === 'warning' ? '#fff3cd' : '#d1ecf1',
      color: type === 'success' ? '#155724' : type === 'error' ? '#721c24' : type === 'warning' ? '#856404' : '#0c5460',
      border: `1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : type === 'warning' ? '#ffeeba' : '#bee5eb'}`,
      animation: 'slideInRight 0.3s ease'
    });
    const icon = {success:'✅', error:'❌', info:'ℹ️', warning:'⚠️'}[type] || 'ℹ️';
    toast.innerHTML = `<span>${icon}</span><span style="flex:1">${message}</span><button onclick="this.parentElement.remove()" style="margin-left:auto;background:none;border:none;cursor:pointer;font-size:1.1rem;color:inherit;line-height:1">×</button>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'slideOutRight 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },
  updateCartCount() {
    const count = window.cartManager ? cartManager.getItemCount() : 0;
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },
  debounce(fn, delay) {
    let timeout;
    return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => fn(...args), delay); };
  },
  setActive(linkSelector) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const active = document.querySelector(linkSelector);
    if (active) active.classList.add('active');
  },
  initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    if (!hamburger || !mobileNav) return;
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }
};
