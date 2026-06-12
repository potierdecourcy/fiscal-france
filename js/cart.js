window.cartManager = {
  items: [],

  load() {
    try {
      this.items = JSON.parse(localStorage.getItem('honey_cart') || '[]');
    } catch { this.items = []; }
    return this;
  },

  save() {
    localStorage.setItem('honey_cart', JSON.stringify(this.items));
    if (window.utils) utils.updateCartCount();
    return this;
  },

  addItem(productId, quantity = 1) {
    if (!window.APP_DATA) return false;
    const product = APP_DATA.getProductById(productId);
    if (!product) return false;
    if (product.stock === 0) return false;

    const existing = this.items.find(i => i.productId === productId);
    const maxQty = Math.min(product.stock, 10);

    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, maxQty);
    } else {
      this.items.push({
        productId,
        quantity: Math.min(quantity, maxQty),
        addedAt: new Date().toISOString()
      });
    }
    this.save();
    return true;
  },

  removeItem(productId) {
    this.items = this.items.filter(i => i.productId !== productId);
    this.save();
  },

  updateQuantity(productId, quantity) {
    const item = this.items.find(i => i.productId === productId);
    if (!item) return;
    if (!window.APP_DATA) return;
    const product = APP_DATA.getProductById(productId);
    if (!product) return;
    if (quantity <= 0) { this.removeItem(productId); return; }
    item.quantity = Math.min(quantity, Math.min(product.stock, 10));
    this.save();
  },

  getItemCount() {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  },

  getItems() {
    if (!window.APP_DATA) return [];
    return this.items.map(item => {
      const product = APP_DATA.getProductById(item.productId);
      if (!product) return null;
      return { ...item, product };
    }).filter(Boolean);
  },

  getSubtotalHT() {
    return this.getItems().reduce((sum, i) => sum + i.product.price_ht * i.quantity, 0);
  },

  getSubtotalTTC() {
    return this.getItems().reduce((sum, i) => sum + i.product.price_ttc * i.quantity, 0);
  },

  getTVA() {
    return this.getSubtotalTTC() - this.getSubtotalHT();
  },

  getTotalWeight() {
    return this.getItems().reduce((sum, i) => sum + i.product.weight_g * i.quantity, 0);
  },

  getShipping(zone = 'france') {
    if (!window.APP_DATA) return 0;
    const subtotal = this.getSubtotalTTC();
    const zoneRules = APP_DATA.shippingRules.zones[zone];
    if (!zoneRules) return 0;
    if (subtotal >= zoneRules.freeThreshold) return 0;
    return APP_DATA.calculateShipping(this.getTotalWeight(), zone);
  },

  getTotal(zone = 'france') {
    return this.getSubtotalTTC() + this.getShipping(zone);
  },

  clear() {
    this.items = [];
    this.save();
  },

  isEmpty() {
    return this.items.length === 0;
  }
};

// Initialize cart on load
cartManager.load();
