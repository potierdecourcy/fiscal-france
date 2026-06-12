// Miel de Normandie - Catalogue page logic

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────────────────────
  let currentCategory = 'all';
  let searchQuery = '';
  let minPrice = 0;
  let maxPrice = Infinity;
  let sortBy = 'name';

  // ── DOM refs ───────────────────────────────────────────────────────────────
  let productGrid, productCount, emptyState, searchInput, sortSelect;
  let minPriceInput, maxPriceInput, categoryFiltersEl;

  // ── Init ───────────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    productGrid       = document.getElementById('productsGrid');
    productCount      = document.getElementById('productCount');
    emptyState        = document.getElementById('emptyState');
    searchInput       = document.getElementById('searchInput');
    sortSelect        = document.getElementById('sortSelect');
    minPriceInput     = document.getElementById('priceMin');
    maxPriceInput     = document.getElementById('priceMax');
    categoryFiltersEl = document.querySelector('.filter-categories');

    // Read URL param for initial category
    const urlCat = utils.getUrlParam('categorie');
    if (urlCat && (urlCat === 'ruche' || APP_DATA.categories.find(c => c.id === urlCat))) {
      currentCategory = urlCat;
    }

    renderCategoryFilters();
    bindEvents();
    applyFilters();

    utils.setActive('[href="catalogue.html"]');
    utils.initMobileNav();
    utils.updateCartCount();
  });

  // ── Category filter buttons (boutons statiques du HTML) ───────────────────
  function renderCategoryFilters() {
    if (!categoryFiltersEl) return;

    categoryFiltersEl.querySelectorAll('.filter-btn').forEach(btn => {
      const id = btn.dataset.category || 'all';
      btn.addEventListener('click', () => {
        currentCategory = id;
        updateActiveCategoryBtn();
        applyFilters();
        const url = new URL(window.location);
        if (id === 'all') {
          url.searchParams.delete('categorie');
        } else {
          url.searchParams.set('categorie', id);
        }
        history.replaceState(null, '', url);
      });
    });

    updateActiveCategoryBtn();
  }

  function updateActiveCategoryBtn() {
    if (!categoryFiltersEl) return;
    categoryFiltersEl.querySelectorAll('.filter-btn').forEach(btn => {
      const id = btn.dataset.category || 'all';
      const isActive = id === currentCategory;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  // ── Events ─────────────────────────────────────────────────────────────────
  function bindEvents() {
    if (searchInput) {
      searchInput.addEventListener('input', utils.debounce(e => {
        searchQuery = e.target.value.trim().toLowerCase();
        applyFilters();
      }, 300));
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', e => {
        sortBy = e.target.value;
        applyFilters();
      });
    }

    if (minPriceInput) {
      minPriceInput.addEventListener('input', utils.debounce(e => {
        minPrice = parseFloat(e.target.value) || 0;
        applyFilters();
      }, 400));
    }

    if (maxPriceInput) {
      maxPriceInput.addEventListener('input', utils.debounce(e => {
        maxPrice = parseFloat(e.target.value) || Infinity;
        applyFilters();
      }, 400));
    }
  }

  // ── Filtering & sorting ────────────────────────────────────────────────────
  function applyFilters() {
    let products = [...APP_DATA.products];

    // Category filter
    if (currentCategory === 'ruche') {
      products = products.filter(p => p.category !== 'epicerie-fine');
    } else if (currentCategory !== 'all') {
      products = products.filter(p => p.category === currentCategory);
    }

    // Search filter
    if (searchQuery) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery) ||
        (p.origin || '').toLowerCase().includes(searchQuery) ||
        (p.description || '').toLowerCase().includes(searchQuery) ||
        (p.tags || []).some(t => t.toLowerCase().includes(searchQuery))
      );
    }

    // Price filter
    products = products.filter(p => {
      const price = p.price_ttc;
      const aboveMin = price >= minPrice;
      const belowMax = maxPrice === Infinity ? true : price <= maxPrice;
      return aboveMin && belowMax;
    });

    // Sort
    products = sortProducts(products, sortBy);

    renderProducts(products);
  }

  function sortProducts(products, sort) {
    const sorted = [...products];
    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.price_ttc - b.price_ttc);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price_ttc - a.price_ttc);
        break;
      case 'rating':
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        // Featured first as proxy for newest, then by id
        sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'name':
      default:
        sorted.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
        break;
    }
    return sorted;
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  function renderProducts(products) {
    if (!productGrid) return;

    // Update count
    if (productCount) {
      productCount.textContent = `${products.length} produit${products.length !== 1 ? 's' : ''} trouvé${products.length !== 1 ? 's' : ''}`;
    }

    // Empty state
    if (products.length === 0) {
      productGrid.innerHTML = '';
      if (emptyState) {
        emptyState.style.display = 'block';
        emptyState.innerHTML = `
          <div style="text-align:center;padding:3rem 1rem;color:var(--text-light,#888)">
            <div style="font-size:4rem;margin-bottom:1rem">🔍</div>
            <h3 style="margin-bottom:0.5rem;color:var(--text-dark,#333)">Aucun produit trouvé</h3>
            <p style="margin-bottom:1.5rem">Essayez de modifier vos critères de recherche ou de filtre.</p>
            <button class="btn btn-secondary" onclick="resetFilters()">Réinitialiser les filtres</button>
          </div>
        `;
      }
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    const groups = [
      { title: '🐝 Produits de la ruche', items: products.filter(p => p.category !== 'epicerie-fine') },
      { title: '🎁 Épicerie fine',         items: products.filter(p => p.category === 'epicerie-fine') }
    ];

    productGrid.innerHTML = groups
      .filter(g => g.items.length > 0)
      .map(g => `
        <div class="catalogue-group">
          <h3 class="catalogue-group-title">${g.title}</h3>
          <div class="grid-4">${g.items.map(p => utils.renderProductCard(p)).join('')}</div>
        </div>
      `).join('');

    // Keyboard accessibility for cards
    productGrid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  // ── Reset filters (called from empty state button) ─────────────────────────
  window.resetFilters = function () {
    currentCategory = 'all';
    searchQuery = '';
    minPrice = 0;
    maxPrice = Infinity;
    sortBy = 'name';

    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'name';
    if (minPriceInput) minPriceInput.value = '';
    if (maxPriceInput) maxPriceInput.value = '';

    updateActiveCategoryBtn();
    applyFilters();

    const url = new URL(window.location);
    url.searchParams.delete('categorie');
    history.replaceState(null, '', url);
  };

})();
