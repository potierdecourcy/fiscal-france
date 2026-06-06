// MielFrance - Admin dashboard logic

(function () {
  'use strict';

  const ADMIN_EMAIL = 'admin@mielfrance.fr';
  const ADMIN_PASSWORD = 'Admin2024!';
  const ADMIN_TOKEN = 'mf_admin_authenticated_2024';

  let currentSection = 'dashboard';
  let currentProductFilter = '';
  let currentOrderFilter = 'all';

  const statusMap = {
    pending:    { label: 'En attente',    color: '#fd7e14', bg: '#fff3cd' },
    processing: { label: 'En préparation', color: '#0d6efd', bg: '#cfe2ff' },
    shipped:    { label: 'Expédié',       color: '#6f42c1', bg: '#e2d9f3' },
    delivered:  { label: 'Livré',         color: '#198754', bg: '#d1e7dd' },
    cancelled:  { label: 'Annulé',        color: '#dc3545', bg: '#f8d7da' }
  };

  // ── Bootstrap ──────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    if (isAuthenticated()) {
      initDashboard();
    } else {
      showLoginOverlay();
    }
  });

  // ── Auth ───────────────────────────────────────────────────────────────────
  function isAuthenticated() {
    return localStorage.getItem('honey_admin_token') === ADMIN_TOKEN;
  }

  function showLoginOverlay() {
    let overlay = document.getElementById('admin-login-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'admin-login-overlay';
      document.body.appendChild(overlay);
    }
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;
      display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)
    `;
    overlay.innerHTML = `
      <div style="background:#fff;border-radius:16px;padding:2.5rem;width:360px;max-width:90vw;box-shadow:0 20px 60px rgba(0,0,0,0.3)">
        <div style="text-align:center;margin-bottom:1.5rem">
          <div style="font-size:3rem;margin-bottom:0.5rem">🍯</div>
          <h2 style="margin:0;font-size:1.25rem">Administration MielFrance</h2>
          <p style="color:#888;font-size:0.85rem;margin-top:0.25rem">Connexion requise</p>
        </div>
        <form id="login-form" novalidate>
          <div style="margin-bottom:1rem">
            <label style="display:block;font-size:0.85rem;font-weight:600;margin-bottom:0.3rem">E-mail</label>
            <input type="email" id="login-email" placeholder="admin@mielfrance.fr"
              style="width:100%;padding:0.6rem 0.75rem;border:2px solid #e0e0e0;border-radius:8px;font-size:0.95rem;box-sizing:border-box">
          </div>
          <div style="margin-bottom:1.25rem">
            <label style="display:block;font-size:0.85rem;font-weight:600;margin-bottom:0.3rem">Mot de passe</label>
            <input type="password" id="login-password" placeholder="••••••••"
              style="width:100%;padding:0.6rem 0.75rem;border:2px solid #e0e0e0;border-radius:8px;font-size:0.95rem;box-sizing:border-box">
          </div>
          <div id="login-error" style="color:#dc3545;font-size:0.85rem;margin-bottom:0.75rem;text-align:center;min-height:1.2em"></div>
          <button type="submit" style="width:100%;padding:0.75rem;background:var(--primary,#c8a94b);color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer">
            Se connecter
          </button>
        </form>
        <p style="font-size:0.75rem;color:#aaa;text-align:center;margin-top:1rem">
          Démo : admin@mielfrance.fr / Admin2024!
        </p>
      </div>
    `;

    document.getElementById('login-form').addEventListener('submit', e => {
      e.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value;
      const errorEl = document.getElementById('login-error');
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        localStorage.setItem('honey_admin_token', ADMIN_TOKEN);
        overlay.remove();
        initDashboard();
      } else {
        errorEl.textContent = 'E-mail ou mot de passe incorrect.';
        document.getElementById('login-password').value = '';
      }
    });
  }

  function initDashboard() {
    ensureSampleOrders();
    bindNavigation();
    bindLogout();
    showSection('dashboard');
    updateBadges();
  }

  function bindLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        if (confirm('Voulez-vous vous déconnecter ?')) {
          localStorage.removeItem('honey_admin_token');
          window.location.reload();
        }
      });
    }
  }

  function bindNavigation() {
    document.querySelectorAll('[data-section]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const section = link.dataset.section;
        showSection(section);
      });
    });
  }

  function showSection(section) {
    currentSection = section;

    // Update sidebar active state
    document.querySelectorAll('[data-section]').forEach(link => {
      link.classList.toggle('active', link.dataset.section === section);
    });

    // Hide all sections, show current
    document.querySelectorAll('.admin-section').forEach(el => {
      el.style.display = 'none';
    });
    const target = document.getElementById(`section-${section}`);
    if (target) target.style.display = 'block';

    // Update section title
    const sectionTitles = {
      dashboard: 'Tableau de bord',
      products: 'Produits',
      orders: 'Commandes',
      shipments: 'Expéditions'
    };
    const titleEl = document.getElementById('section-title');
    if (titleEl) titleEl.textContent = sectionTitles[section] || section;

    switch (section) {
      case 'dashboard': renderDashboard(); break;
      case 'products':  renderProducts(); break;
      case 'orders':    renderOrders(); break;
      case 'shipments': renderShipments(); break;
    }
  }

  function updateBadges() {
    const lowStock = APP_DATA.getLowStockProducts().length;
    const badge = document.getElementById('low-stock-badge');
    if (badge) {
      badge.textContent = lowStock;
      badge.style.display = lowStock > 0 ? 'inline-flex' : 'none';
    }
    const pendingOrders = APP_DATA.getOrders().filter(o => o.status === 'pending').length;
    const orderBadge = document.getElementById('pending-orders-badge');
    if (orderBadge) {
      orderBadge.textContent = pendingOrders;
      orderBadge.style.display = pendingOrders > 0 ? 'inline-flex' : 'none';
    }
  }

  // ── Dashboard section ──────────────────────────────────────────────────────
  function renderDashboard() {
    const el = document.getElementById('section-dashboard');
    if (!el) return;

    const orders = APP_DATA.getOrders();
    const today = new Date().toISOString().split('T')[0];
    const todayOrders = orders.filter(o => o.createdAt && o.createdAt.startsWith(today));
    const revenueToday = todayOrders.reduce((sum, o) => sum + (o.total || 0), 0);
    const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);
    const lowStock = APP_DATA.getLowStockProducts();
    const recentOrders = orders.slice(0, 5);

    el.innerHTML = `
      <!-- Stat cards -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.25rem;margin-bottom:2rem">
        ${statCard('📦', 'Total commandes', orders.length, '#0d6efd')}
        ${statCard('💰', 'Chiffre d\'affaires du jour', utils.formatPrice(revenueToday), '#198754')}
        ${statCard('⚠️', 'Stock faible', lowStock.length + ' produit(s)', '#fd7e14')}
        ${statCard('🍯', 'Total produits', APP_DATA.products.length, '#6f42c1')}
        ${statCard('💶', 'CA total', utils.formatPrice(totalRevenue), '#c8a94b')}
      </div>

      <!-- Recent orders -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem">
        <div>
          <h3 style="margin:0 0 1rem;font-size:1rem;font-weight:600">Commandes récentes</h3>
          ${recentOrders.length === 0
            ? '<p style="color:#888;font-size:0.9rem">Aucune commande.</p>'
            : `<table style="width:100%;border-collapse:collapse;font-size:0.85rem">
                <thead>
                  <tr style="background:var(--cream-dark,#f5e6c8);text-align:left">
                    <th style="padding:0.5rem 0.6rem">N°</th>
                    <th style="padding:0.5rem 0.6rem">Client</th>
                    <th style="padding:0.5rem 0.6rem;text-align:right">Montant</th>
                    <th style="padding:0.5rem 0.6rem">Statut</th>
                  </tr>
                </thead>
                <tbody>
                  ${recentOrders.map(o => `
                    <tr style="border-bottom:1px solid #f0f0f0;cursor:pointer" onclick="showSection('orders')">
                      <td style="padding:0.5rem 0.6rem;font-family:monospace;font-size:0.75rem">${o.id}</td>
                      <td style="padding:0.5rem 0.6rem">${o.customer?.firstName || ''} ${o.customer?.lastName || ''}</td>
                      <td style="padding:0.5rem 0.6rem;text-align:right;font-weight:600">${utils.formatPrice(o.total || 0)}</td>
                      <td style="padding:0.5rem 0.6rem">${statusBadge(o.status)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>`
          }
        </div>

        <!-- Low stock alerts -->
        <div>
          <h3 style="margin:0 0 1rem;font-size:1rem;font-weight:600">⚠️ Alertes stock faible</h3>
          ${lowStock.length === 0
            ? '<p style="color:#888;font-size:0.9rem">Aucun produit en stock faible.</p>'
            : `<div style="display:flex;flex-direction:column;gap:0.6rem">
                ${lowStock.map(p => `
                  <div style="display:flex;align-items:center;gap:0.75rem;padding:0.6rem;border-radius:8px;background:${p.stock === 0 ? '#f8d7da' : '#fff3cd'}">
                    <span style="font-size:1.4rem">${utils.getCategoryEmoji(p.category)}</span>
                    <div style="flex:1;min-width:0">
                      <div style="font-size:0.85rem;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.name}</div>
                      <div style="font-size:0.75rem;color:#888">${p.sku}</div>
                    </div>
                    <div style="text-align:right">
                      <div style="font-weight:700;color:${p.stock === 0 ? '#dc3545' : '#fd7e14'};font-size:0.9rem">${p.stock} / ${p.min_stock}</div>
                      <div style="font-size:0.7rem;color:#888">stock / min</div>
                    </div>
                  </div>
                `).join('')}
              </div>`
          }
        </div>
      </div>
    `;
  }

  function statCard(icon, label, value, color) {
    return `
      <div style="padding:1.25rem;background:#fff;border-radius:12px;border:1px solid #f0f0f0;box-shadow:0 2px 8px rgba(0,0,0,0.05)">
        <div style="display:flex;align-items:center;gap:0.75rem">
          <div style="width:44px;height:44px;border-radius:10px;background:${color}22;display:flex;align-items:center;justify-content:center;font-size:1.3rem">
            ${icon}
          </div>
          <div>
            <div style="font-size:0.75rem;color:#888;font-weight:500">${label}</div>
            <div style="font-size:1.25rem;font-weight:700;color:${color}">${value}</div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Products section ───────────────────────────────────────────────────────
  function renderProducts() {
    const el = document.getElementById('section-products');
    if (!el) return;

    const products = getLocalProducts();
    const filtered = currentProductFilter
      ? products.filter(p =>
          p.name.toLowerCase().includes(currentProductFilter) ||
          p.sku.toLowerCase().includes(currentProductFilter) ||
          p.category.toLowerCase().includes(currentProductFilter))
      : products;

    el.innerHTML = `
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.25rem;flex-wrap:wrap">
        <input type="text" id="product-search" placeholder="Rechercher par nom, SKU, catégorie…"
          value="${currentProductFilter}"
          style="flex:1;min-width:200px;padding:0.55rem 0.75rem;border:2px solid #e0e0e0;border-radius:8px;font-size:0.9rem"
          oninput="filterProducts(this.value)">
        <button onclick="openProductModal(null)" class="btn btn-primary" style="white-space:nowrap;height:40px">
          + Ajouter un produit
        </button>
      </div>
      <div style="font-size:0.85rem;color:#888;margin-bottom:0.75rem">${filtered.length} produit(s) affiché(s)</div>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:0.875rem">
          <thead>
            <tr style="background:var(--cream-dark,#f5e6c8);text-align:left">
              <th style="padding:0.6rem 0.75rem">SKU</th>
              <th style="padding:0.6rem 0.75rem">Nom</th>
              <th style="padding:0.6rem 0.75rem">Catégorie</th>
              <th style="padding:0.6rem 0.75rem;text-align:right">Prix TTC</th>
              <th style="padding:0.6rem 0.75rem;text-align:center">Stock</th>
              <th style="padding:0.6rem 0.75rem;text-align:center">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${filtered.map(p => `
              <tr style="border-bottom:1px solid #f0f0f0;transition:background 0.15s" onmouseover="this.style.background='#fafafa'" onmouseout="this.style.background=''">
                <td style="padding:0.6rem 0.75rem;font-family:monospace;font-size:0.78rem;color:#888">${p.sku}</td>
                <td style="padding:0.6rem 0.75rem">
                  <div style="font-weight:500">${p.name}</div>
                  ${p.featured ? '<span style="font-size:0.7rem;background:#ffeeba;color:#856404;padding:0.15rem 0.4rem;border-radius:10px">⭐ Vedette</span>' : ''}
                </td>
                <td style="padding:0.6rem 0.75rem">${utils.getCategoryEmoji(p.category)} ${APP_DATA.getCategoryById(p.category)?.name || p.category}</td>
                <td style="padding:0.6rem 0.75rem;text-align:right;font-weight:600">${utils.formatPrice(p.price_ttc)}</td>
                <td style="padding:0.6rem 0.75rem;text-align:center">
                  <span style="font-weight:600;color:${p.stock === 0 ? '#dc3545' : p.stock <= p.min_stock ? '#fd7e14' : '#198754'}">
                    ${p.stock}
                  </span>
                  <span style="color:#aaa;font-size:0.75rem">/${p.min_stock}</span>
                </td>
                <td style="padding:0.6rem 0.75rem;text-align:center">
                  <div style="display:flex;gap:0.4rem;justify-content:center">
                    <button onclick="openProductModal('${p.id}')" title="Modifier"
                      style="padding:0.3rem 0.6rem;background:#0d6efd22;border:1px solid #0d6efd44;border-radius:6px;cursor:pointer;font-size:0.8rem;color:#0d6efd">
                      ✏️
                    </button>
                    <button onclick="openStockModal('${p.id}')" title="Mettre à jour le stock"
                      style="padding:0.3rem 0.6rem;background:#19875422;border:1px solid #19875444;border-radius:6px;cursor:pointer;font-size:0.8rem;color:#198754">
                      📦
                    </button>
                    <button onclick="deleteProduct('${p.id}')" title="Supprimer"
                      style="padding:0.3rem 0.6rem;background:#dc354522;border:1px solid #dc354544;border-radius:6px;cursor:pointer;font-size:0.8rem;color:#dc3545">
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  window.filterProducts = function (query) {
    currentProductFilter = query.toLowerCase();
    renderProducts();
  };

  // ── Product modal ──────────────────────────────────────────────────────────
  window.openProductModal = function (productId) {
    const products = getLocalProducts();
    const product = productId ? products.find(p => p.id === productId) : null;
    const isNew = !product;

    const modal = createModal(isNew ? 'Ajouter un produit' : 'Modifier le produit', `
      <form id="product-form" novalidate>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
          <div>
            <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">SKU *</label>
            <input class="form-input" style="${inputStyle}" name="sku" value="${product?.sku || ''}" placeholder="MEL-ACA-500" required>
          </div>
          <div>
            <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Catégorie *</label>
            <select class="form-input" style="${inputStyle}" name="category" required>
              ${APP_DATA.categories.map(c => `<option value="${c.id}" ${product?.category === c.id ? 'selected' : ''}>${c.emoji} ${c.name}</option>`).join('')}
            </select>
          </div>
        </div>

        <div style="margin-bottom:1rem">
          <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Nom du produit *</label>
          <input class="form-input" style="${inputStyle}" name="name" value="${product?.name || ''}" placeholder="Miel d'Acacia 500g" required>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-bottom:1rem">
          <div>
            <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Prix HT (€) *</label>
            <input class="form-input" style="${inputStyle}" name="price_ht" type="number" step="0.01" min="0" value="${product?.price_ht || ''}" required>
          </div>
          <div>
            <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Prix TTC (€) *</label>
            <input class="form-input" style="${inputStyle}" name="price_ttc" type="number" step="0.01" min="0" value="${product?.price_ttc || ''}" required>
          </div>
          <div>
            <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">TVA (%)</label>
            <select class="form-input" style="${inputStyle}" name="tva_rate">
              <option value="5.5" ${product?.tva_rate === 5.5 ? 'selected' : ''}>5,5%</option>
              <option value="10" ${product?.tva_rate === 10 ? 'selected' : ''}>10%</option>
              <option value="20" ${(!product || product?.tva_rate === 20) ? 'selected' : ''}>20%</option>
            </select>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-bottom:1rem">
          <div>
            <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Poids (g) *</label>
            <input class="form-input" style="${inputStyle}" name="weight_g" type="number" min="1" value="${product?.weight_g || ''}" required>
          </div>
          <div>
            <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Stock *</label>
            <input class="form-input" style="${inputStyle}" name="stock" type="number" min="0" value="${product?.stock ?? ''}" required>
          </div>
          <div>
            <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Stock min.</label>
            <input class="form-input" style="${inputStyle}" name="min_stock" type="number" min="0" value="${product?.min_stock || '5'}">
          </div>
        </div>

        <div style="margin-bottom:1rem">
          <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Origine</label>
          <input class="form-input" style="${inputStyle}" name="origin" value="${product?.origin || ''}" placeholder="Provence, France">
        </div>

        <div style="margin-bottom:1rem">
          <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Description</label>
          <textarea class="form-input" style="${inputStyle}height:80px;resize:vertical" name="description">${product?.description || ''}</textarea>
        </div>

        <div style="margin-bottom:1rem">
          <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Composition</label>
          <textarea class="form-input" style="${inputStyle}height:60px;resize:vertical" name="composition">${product?.composition || ''}</textarea>
        </div>

        <div style="margin-bottom:1rem">
          <label class="form-label" style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Tags (séparés par virgule)</label>
          <input class="form-input" style="${inputStyle}" name="tags" value="${(product?.tags || []).join(', ')}" placeholder="bio, populaire, acacia">
        </div>

        <div style="margin-bottom:1.5rem;display:flex;align-items:center;gap:0.5rem">
          <input type="checkbox" name="featured" id="featured-check" ${product?.featured ? 'checked' : ''} style="width:18px;height:18px">
          <label for="featured-check" style="font-size:0.9rem;cursor:pointer">Produit vedette</label>
        </div>

        <div id="product-form-error" style="color:#dc3545;font-size:0.85rem;margin-bottom:0.75rem;min-height:1.2em"></div>

        <div style="display:flex;gap:0.75rem;justify-content:flex-end">
          <button type="button" onclick="closeModal()" class="btn btn-secondary">Annuler</button>
          <button type="submit" class="btn btn-primary">${isNew ? 'Ajouter' : 'Enregistrer'}</button>
        </div>
      </form>
    `);

    modal.querySelector('#product-form').addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const data = Object.fromEntries(fd.entries());

      // Validate
      if (!data.sku || !data.name || !data.price_ht || !data.price_ttc || !data.weight_g || data.stock === '') {
        modal.querySelector('#product-form-error').textContent = 'Veuillez remplir tous les champs obligatoires.';
        return;
      }

      const productData = {
        sku: data.sku.trim().toUpperCase(),
        name: data.name.trim(),
        category: data.category,
        price_ht: parseFloat(data.price_ht),
        price_ttc: parseFloat(data.price_ttc),
        tva_rate: parseFloat(data.tva_rate),
        weight_g: parseInt(data.weight_g),
        stock: parseInt(data.stock),
        min_stock: parseInt(data.min_stock) || 5,
        origin: data.origin.trim(),
        description: data.description.trim(),
        composition: data.composition.trim(),
        tags: data.tags ? data.tags.split(',').map(t => t.trim().toLowerCase()).filter(Boolean) : [],
        featured: !!data.featured
      };

      if (isNew) {
        addProduct(productData);
      } else {
        updateProduct(productId, productData);
      }
      closeModal();
      renderProducts();
      updateBadges();
      utils.showToast(isNew ? 'Produit ajouté.' : 'Produit mis à jour.', 'success');
    });
  };

  const inputStyle = 'width:100%;padding:0.5rem 0.6rem;border:2px solid #e0e0e0;border-radius:6px;font-size:0.875rem;box-sizing:border-box;';

  // ── Stock modal ────────────────────────────────────────────────────────────
  window.openStockModal = function (productId) {
    const products = getLocalProducts();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = createModal(`Stock : ${product.name}`, `
      <form id="stock-form">
        <div style="text-align:center;margin-bottom:1.25rem">
          <div style="font-size:3rem">${utils.getCategoryEmoji(product.category)}</div>
          <p style="font-weight:600;margin:0.5rem 0 0">${product.name}</p>
          <p style="color:#888;font-size:0.85rem;margin:0">${product.sku}</p>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.25rem">
          <div style="text-align:center;padding:1rem;background:#f8f9fa;border-radius:8px">
            <div style="font-size:2rem;font-weight:700;color:${product.stock === 0 ? '#dc3545' : product.stock <= product.min_stock ? '#fd7e14' : '#198754'}">${product.stock}</div>
            <div style="font-size:0.8rem;color:#888">Stock actuel</div>
          </div>
          <div style="text-align:center;padding:1rem;background:#f8f9fa;border-radius:8px">
            <div style="font-size:2rem;font-weight:700;color:#888">${product.min_stock}</div>
            <div style="font-size:0.8rem;color:#888">Stock minimum</div>
          </div>
        </div>
        <div style="margin-bottom:1rem">
          <label style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Nouveau stock *</label>
          <input type="number" id="new-stock-val" min="0" value="${product.stock}"
            style="${inputStyle}font-size:1.1rem;font-weight:600;text-align:center" required>
        </div>
        <div style="margin-bottom:1.25rem">
          <label style="font-size:0.85rem;font-weight:600;display:block;margin-bottom:0.3rem">Stock minimum</label>
          <input type="number" id="new-min-stock-val" min="0" value="${product.min_stock}"
            style="${inputStyle}" required>
        </div>
        <div style="display:flex;gap:0.75rem;justify-content:flex-end">
          <button type="button" onclick="closeModal()" class="btn btn-secondary">Annuler</button>
          <button type="submit" class="btn btn-primary">Mettre à jour</button>
        </div>
      </form>
    `);

    modal.querySelector('#stock-form').addEventListener('submit', e => {
      e.preventDefault();
      const newStock = parseInt(document.getElementById('new-stock-val').value);
      const newMinStock = parseInt(document.getElementById('new-min-stock-val').value);
      if (isNaN(newStock) || newStock < 0) return;
      updateProduct(productId, { stock: newStock, min_stock: newMinStock });
      closeModal();
      renderProducts();
      updateBadges();
      utils.showToast(`Stock mis à jour : ${newStock}`, 'success');
    });
  };

  // ── Product CRUD ───────────────────────────────────────────────────────────
  function getLocalProducts() {
    // Always use APP_DATA.products (in-memory, augmented by any additions)
    return APP_DATA.products;
  }

  function addProduct(data) {
    const id = 'prod-' + Date.now().toString(36);
    const slug = utils.slugify(data.name);
    const product = { id, slug, rating: 4.5, reviews_count: 0, reviews: [], ...data };
    APP_DATA.products.push(product);
    persistProducts();
  }

  function updateProduct(id, changes) {
    const idx = APP_DATA.products.findIndex(p => p.id === id);
    if (idx === -1) return;
    APP_DATA.products[idx] = { ...APP_DATA.products[idx], ...changes };
    persistProducts();
  }

  window.deleteProduct = function (id) {
    const product = APP_DATA.products.find(p => p.id === id);
    if (!product) return;
    if (!confirm(`Supprimer "${product.name}" ? Cette action est irréversible.`)) return;
    APP_DATA.products = APP_DATA.products.filter(p => p.id !== id);
    persistProducts();
    renderProducts();
    updateBadges();
    utils.showToast('Produit supprimé.', 'info');
  };

  function persistProducts() {
    // Persist custom products to localStorage (original data.js products stay in memory)
    try {
      const custom = APP_DATA.products.filter(p => p.id.startsWith('prod-'));
      localStorage.setItem('honey_custom_products', JSON.stringify(custom));
    } catch (e) {}
  }

  function loadCustomProducts() {
    try {
      const custom = JSON.parse(localStorage.getItem('honey_custom_products') || '[]');
      custom.forEach(p => {
        if (!APP_DATA.products.find(existing => existing.id === p.id)) {
          APP_DATA.products.push(p);
        }
      });
    } catch (e) {}
  }

  // ── Orders section ─────────────────────────────────────────────────────────
  function renderOrders() {
    const el = document.getElementById('section-orders');
    if (!el) return;

    let orders = APP_DATA.getOrders();
    if (currentOrderFilter !== 'all') {
      orders = orders.filter(o => o.status === currentOrderFilter);
    }

    el.innerHTML = `
      <div style="display:flex;gap:0.5rem;margin-bottom:1.25rem;flex-wrap:wrap;align-items:center">
        ${['all','pending','processing','shipped','delivered','cancelled'].map(s => `
          <button onclick="filterOrders('${s}')"
            style="padding:0.4rem 0.9rem;border-radius:20px;border:2px solid ${currentOrderFilter === s ? 'var(--primary,#c8a94b)' : '#e0e0e0'};background:${currentOrderFilter === s ? 'var(--primary,#c8a94b)' : '#fff'};color:${currentOrderFilter === s ? '#fff' : '#555'};cursor:pointer;font-size:0.82rem;font-weight:${currentOrderFilter === s ? '600' : '400'}">
            ${s === 'all' ? 'Toutes' : statusMap[s]?.label || s}
          </button>
        `).join('')}
        <span style="margin-left:auto;color:#888;font-size:0.85rem">${orders.length} commande(s)</span>
      </div>

      ${orders.length === 0
        ? '<p style="color:#888;padding:2rem;text-align:center">Aucune commande correspondante.</p>'
        : `<div style="display:flex;flex-direction:column;gap:0.75rem">
            ${orders.map(o => renderOrderRow(o)).join('')}
          </div>`
      }
    `;
  }

  window.filterOrders = function (status) {
    currentOrderFilter = status;
    renderOrders();
  };

  function renderOrderRow(order) {
    const status = statusMap[order.status] || statusMap.pending;
    const customer = order.customer || {};
    const itemCount = (order.items || []).reduce((sum, i) => sum + i.quantity, 0);

    return `
      <div class="order-row" style="border:1px solid #f0f0f0;border-radius:10px;background:#fff;overflow:hidden">
        <div style="display:flex;align-items:center;gap:1rem;padding:0.9rem 1rem;cursor:pointer"
          onclick="toggleOrderDetail('${order.id}')">
          <div style="flex:1;min-width:0">
            <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap">
              <span style="font-family:monospace;font-size:0.8rem;color:#888">${order.id}</span>
              <span style="font-weight:600">${customer.firstName || ''} ${customer.lastName || ''}</span>
              <span style="font-size:0.8rem;color:#888">${customer.email || ''}</span>
            </div>
            <div style="font-size:0.8rem;color:#aaa;margin-top:0.2rem">
              ${utils.formatDate(order.createdAt)} &bull; ${itemCount} article(s) &bull; ${utils.formatPrice(order.total || 0)}
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:0.75rem;flex-shrink:0">
            ${statusBadge(order.status)}
            <span style="color:#aaa">▼</span>
          </div>
        </div>

        <div id="order-detail-${order.id}" style="display:none;border-top:1px solid #f5f5f5;padding:1rem">
          <!-- Items -->
          <table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin-bottom:1rem">
            <thead>
              <tr style="background:#f8f9fa;text-align:left">
                <th style="padding:0.4rem 0.6rem">Produit</th>
                <th style="padding:0.4rem 0.6rem;text-align:center">Qté</th>
                <th style="padding:0.4rem 0.6rem;text-align:right">Total</th>
              </tr>
            </thead>
            <tbody>
              ${(order.items || []).map(item => `
                <tr style="border-bottom:1px solid #f0f0f0">
                  <td style="padding:0.4rem 0.6rem">${item.productName || item.productId}<br><span style="color:#aaa;font-size:0.75rem">${item.sku || ''}</span></td>
                  <td style="padding:0.4rem 0.6rem;text-align:center">${item.quantity}</td>
                  <td style="padding:0.4rem 0.6rem;text-align:right;font-weight:600">${utils.formatPrice((item.price_ttc || 0) * item.quantity)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <!-- Address & status controls -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
            <div>
              <div style="font-size:0.8rem;font-weight:600;color:#888;margin-bottom:0.4rem">LIVRAISON</div>
              <div style="font-size:0.85rem;line-height:1.6">
                ${order.deliveryAddress?.firstName || ''} ${order.deliveryAddress?.lastName || ''}<br>
                ${order.deliveryAddress?.address || ''}<br>
                ${order.deliveryAddress?.postalCode || ''} ${order.deliveryAddress?.city || ''}
              </div>
            </div>
            <div>
              <div style="font-size:0.8rem;font-weight:600;color:#888;margin-bottom:0.4rem">GESTION</div>
              <div style="margin-bottom:0.6rem">
                <label style="font-size:0.8rem;font-weight:500;display:block;margin-bottom:0.2rem">Statut</label>
                <select onchange="updateOrderStatus('${order.id}', this.value)"
                  style="padding:0.35rem 0.5rem;border:1px solid #ddd;border-radius:6px;font-size:0.85rem;background:${status.bg};color:${status.color};width:100%">
                  ${Object.entries(statusMap).map(([key, val]) =>
                    `<option value="${key}" ${key === order.status ? 'selected' : ''}>${val.label}</option>`
                  ).join('')}
                </select>
              </div>
              <div>
                <label style="font-size:0.8rem;font-weight:500;display:block;margin-bottom:0.2rem">N° de suivi</label>
                <div style="display:flex;gap:0.4rem">
                  <input type="text" id="tracking-${order.id}" value="${order.trackingNumber || ''}"
                    placeholder="EX1234567FR" style="flex:1;padding:0.35rem 0.5rem;border:1px solid #ddd;border-radius:6px;font-size:0.85rem">
                  <button onclick="saveTracking('${order.id}')"
                    style="padding:0.35rem 0.6rem;background:#198754;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:0.8rem">
                    ✓
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style="display:flex;justify-content:space-between;font-size:0.875rem;border-top:1px solid #f0f0f0;padding-top:0.75rem">
            <div style="color:#888">
              Sous-total : ${utils.formatPrice(order.subtotalTTC || 0)} &bull;
              Livraison : ${utils.formatPrice(order.shipping || 0)} &bull;
              <strong>Total : ${utils.formatPrice(order.total || 0)}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.toggleOrderDetail = function (orderId) {
    const detail = document.getElementById(`order-detail-${orderId}`);
    if (detail) detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
  };

  window.updateOrderStatus = function (orderId, newStatus) {
    APP_DATA.updateOrder(orderId, { status: newStatus, updatedAt: new Date().toISOString() });
    utils.showToast('Statut mis à jour.', 'success');
    updateBadges();
  };

  window.saveTracking = function (orderId) {
    const input = document.getElementById(`tracking-${orderId}`);
    if (!input) return;
    const trackingNumber = input.value.trim();
    APP_DATA.updateOrder(orderId, { trackingNumber, updatedAt: new Date().toISOString() });
    utils.showToast('Numéro de suivi enregistré.', 'success');
  };

  // ── Shipments section ──────────────────────────────────────────────────────
  function renderShipments() {
    const el = document.getElementById('section-shipments');
    if (!el) return;

    const orders = APP_DATA.getOrders().filter(o => o.status === 'processing' || o.status === 'shipped');

    el.innerHTML = `
      <p style="color:#888;font-size:0.9rem;margin-bottom:1.25rem">
        Commandes en cours de préparation ou expédiées — ${orders.length} commande(s)
      </p>
      ${orders.length === 0
        ? '<div style="text-align:center;padding:3rem;color:#aaa"><div style="font-size:3rem">📭</div><p>Aucune commande à expédier.</p></div>'
        : `<div style="display:flex;flex-direction:column;gap:0.75rem">
            ${orders.map(o => renderShipmentRow(o)).join('')}
          </div>`
      }
    `;
  }

  function renderShipmentRow(order) {
    const status = statusMap[order.status] || statusMap.processing;
    const customer = order.customer || {};

    return `
      <div style="border:1px solid #f0f0f0;border-radius:10px;padding:1rem;background:#fff">
        <div style="display:flex;align-items:flex-start;gap:1rem;flex-wrap:wrap">
          <div style="flex:1;min-width:200px">
            <div style="font-family:monospace;font-size:0.78rem;color:#888;margin-bottom:0.2rem">${order.id}</div>
            <div style="font-weight:600">${customer.firstName || ''} ${customer.lastName || ''}</div>
            <div style="font-size:0.82rem;color:#888">${order.deliveryAddress?.city || ''} &bull; ${utils.formatDate(order.createdAt)}</div>
            <div style="margin-top:0.4rem;font-size:0.8rem;color:#555">
              ${(order.items || []).map(i => `${i.productName} ×${i.quantity}`).join(', ')}
            </div>
          </div>

          <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap">
            ${statusBadge(order.status)}

            <select onchange="updateOrderStatus('${order.id}', this.value)"
              style="padding:0.3rem 0.5rem;border:1px solid #ddd;border-radius:6px;font-size:0.82rem">
              ${Object.entries(statusMap).map(([key, val]) =>
                `<option value="${key}" ${key === order.status ? 'selected' : ''}>${val.label}</option>`
              ).join('')}
            </select>

            <div style="display:flex;gap:0.3rem;align-items:center">
              <input type="text" id="ship-tracking-${order.id}" value="${order.trackingNumber || ''}"
                placeholder="N° de suivi" style="padding:0.3rem 0.5rem;border:1px solid #ddd;border-radius:6px;font-size:0.82rem;width:140px">
              <button onclick="saveTracking('${order.id}')"
                style="padding:0.3rem 0.6rem;background:#198754;color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:0.8rem">
                ✓ Enregistrer
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Modal helpers ──────────────────────────────────────────────────────────
  function createModal(title, bodyHtml) {
    let overlay = document.getElementById('admin-modal-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'admin-modal-overlay';
      document.body.appendChild(overlay);
    }
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:10000;
      display:flex;align-items:flex-start;justify-content:center;overflow-y:auto;padding:2rem 1rem
    `;
    overlay.innerHTML = `
      <div style="background:#fff;border-radius:16px;padding:2rem;width:100%;max-width:600px;position:relative;box-shadow:0 20px 60px rgba(0,0,0,0.2)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem">
          <h3 style="margin:0;font-size:1.15rem">${title}</h3>
          <button onclick="closeModal()" style="background:none;border:none;font-size:1.5rem;cursor:pointer;color:#aaa;line-height:1">×</button>
        </div>
        ${bodyHtml}
      </div>
    `;
    // Close on backdrop click
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    return overlay.querySelector('div');
  }

  window.closeModal = function () {
    const overlay = document.getElementById('admin-modal-overlay');
    if (overlay) overlay.remove();
  };

  // ── Status badge helper ────────────────────────────────────────────────────
  function statusBadge(statusKey) {
    const s = statusMap[statusKey] || { label: statusKey, color: '#888', bg: '#f0f0f0' };
    return `<span style="padding:0.25rem 0.6rem;border-radius:20px;font-size:0.75rem;font-weight:600;color:${s.color};background:${s.bg}">${s.label}</span>`;
  }

  // ── Sample orders generator ────────────────────────────────────────────────
  function ensureSampleOrders() {
    loadCustomProducts();
    const orders = APP_DATA.getOrders();
    if (orders.length > 0) return; // Already have orders

    const frenchNames = [
      { firstName: 'Marie', lastName: 'Dupont', email: 'marie.dupont@email.fr', phone: '0612345678' },
      { firstName: 'Jean-Pierre', lastName: 'Martin', email: 'jp.martin@gmail.com', phone: '0698765432' },
      { firstName: 'Sophie', lastName: 'Leroy', email: 'sophie.leroy@outlook.fr', phone: '0654321098' },
      { firstName: 'Pierre', lastName: 'Bernard', email: 'pierre.bernard@wanadoo.fr', phone: '0623456789' },
      { firstName: 'Isabelle', lastName: 'Moreau', email: 'isabelle.moreau@free.fr', phone: '0687654321' }
    ];

    const frenchAddresses = [
      { address: '12 rue des Lilas', address2: '', postalCode: '75015', city: 'Paris', country: 'FR' },
      { address: '8 avenue Jean Jaurès', address2: 'Apt 4B', postalCode: '69003', city: 'Lyon', country: 'FR' },
      { address: '25 boulevard Victor Hugo', address2: '', postalCode: '13001', city: 'Marseille', country: 'FR' },
      { address: '3 impasse des Pins', address2: '', postalCode: '33000', city: 'Bordeaux', country: 'FR' },
      { address: '17 rue du Commerce', address2: 'Bât. C', postalCode: '59000', city: 'Lille', country: 'FR' }
    ];

    const statuses = ['delivered', 'shipped', 'processing', 'pending', 'cancelled'];
    const baseDate = new Date();

    const products = APP_DATA.products;

    statuses.forEach((status, i) => {
      const customer = frenchNames[i];
      const address = frenchAddresses[i];
      const date = new Date(baseDate);
      date.setDate(date.getDate() - (i * 3 + Math.floor(Math.random() * 5)));

      // Pick 1-3 random products
      const numItems = Math.floor(Math.random() * 3) + 1;
      const shuffled = [...products].sort(() => Math.random() - 0.5);
      const selectedProducts = shuffled.slice(0, numItems);

      const items = selectedProducts.map(p => ({
        productId: p.id,
        productName: p.name,
        sku: p.sku,
        quantity: Math.floor(Math.random() * 2) + 1,
        price_ht: p.price_ht,
        price_ttc: p.price_ttc,
        tva_rate: p.tva_rate
      }));

      const subtotalHT = items.reduce((sum, it) => sum + it.price_ht * it.quantity, 0);
      const subtotalTTC = items.reduce((sum, it) => sum + it.price_ttc * it.quantity, 0);
      const tva = subtotalTTC - subtotalHT;
      const totalWeight = selectedProducts.reduce((sum, p, idx) => sum + p.weight_g * items[idx].quantity, 0);
      const shippingRaw = APP_DATA.calculateShipping(totalWeight, 'france');
      const shipping = subtotalTTC >= APP_DATA.shippingRules.zones.france.freeThreshold ? 0 : shippingRaw;
      const total = subtotalTTC + shipping;

      const order = {
        id: APP_DATA.generateOrderId(),
        items,
        customer,
        deliveryAddress: { ...customer, ...address },
        billingAddress: { ...customer, ...address },
        zone: 'france',
        subtotalHT,
        subtotalTTC,
        tva,
        shipping,
        total,
        status,
        paymentMethod: 'demo',
        trackingNumber: status === 'shipped' || status === 'delivered' ? 'EX' + Math.floor(Math.random() * 9000000 + 1000000) + 'FR' : '',
        createdAt: date.toISOString()
      };

      APP_DATA.saveOrder(order);
    });
  }

  // Expose showSection globally (used by dashboard click handlers)
  window.showSection = showSection;

})();
