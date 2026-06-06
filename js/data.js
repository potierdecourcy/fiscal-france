// MielFrance - Product & Application Data
window.APP_DATA = {
  products: [
    {
      id: 'mel-acacia-500',
      slug: 'miel-acacia-500g',
      sku: 'MEL-ACA-500',
      name: 'Miel d\'Acacia',
      category: 'miel',
      origin: 'Provence, France',
      weight_g: 500,
      price_ht: 8.25,
      price_ttc: 9.00,
      tva_rate: 5.5,
      stock: 42,
      min_stock: 10,
      rating: 4.8,
      reviews_count: 127,
      featured: true,
      tags: ['bio', 'populaire', 'acacia'],
      description: 'Notre miel d\'acacia de Provence est récolté au cœur des forêts provençales. D\'une couleur dorée très claire, il est particulièrement liquide et possède un goût délicat et floral. Il ne cristallise que très lentement, ce qui en fait le miel idéal pour sucrer vos boissons chaudes.',
      composition: 'Miel d\'acacia 100% naturel. Non pasteurisé, non chauffé. Récolté et mis en pot à la main.',
      reviews: [
        { author: 'Marie L.', rating: 5, date: '2026-04-15', text: 'Excellent miel, très doux et délicat. Je le commande depuis 3 ans!' },
        { author: 'Jean-Pierre M.', rating: 5, date: '2026-03-22', text: 'Parfait pour mon thé du matin. Qualité irréprochable.' },
        { author: 'Sophie D.', rating: 4, date: '2026-02-10', text: 'Très bon miel d\'acacia, légèrement plus sucré que ce à quoi j\'étais habituée.' }
      ]
    },
    {
      id: 'mel-chataigner-500',
      slug: 'miel-chataigner-500g',
      sku: 'MEL-CHA-500',
      name: 'Miel de Châtaignier',
      category: 'miel',
      origin: 'Ardèche, France',
      weight_g: 500,
      price_ht: 9.20,
      price_ttc: 10.03,
      tva_rate: 5.5,
      stock: 28,
      min_stock: 8,
      rating: 4.6,
      reviews_count: 89,
      featured: false,
      tags: ['ardèche', 'fort', 'chataignier'],
      description: 'Ce miel de châtaignier d\'Ardèche offre une saveur puissante et légèrement amère, caractéristique de ce terroir. De couleur brun foncé, il cristallise assez rapidement. Idéal en cuisine pour accompagner les fromages et viandes.',
      composition: 'Miel de châtaignier 100% pur. Origine France garantie. Mis en pot artisanalement.',
      reviews: [
        { author: 'Pierre B.', rating: 5, date: '2026-05-01', text: 'Le meilleur miel de châtaignier que j\'ai goûté. Très prononcé en bouche.' },
        { author: 'Lucie R.', rating: 4, date: '2026-04-08', text: 'Parfait avec un plateau de fromages.' }
      ]
    },
    {
      id: 'mel-lavande-250',
      slug: 'miel-lavande-250g',
      sku: 'MEL-LAV-250',
      name: 'Miel de Lavande',
      category: 'miel',
      origin: 'Alpes-de-Haute-Provence, France',
      weight_g: 250,
      price_ht: 6.64,
      price_ttc: 7.24,
      tva_rate: 5.5,
      stock: 3,
      min_stock: 10,
      rating: 4.9,
      reviews_count: 203,
      featured: true,
      tags: ['bio', 'lavande', 'provence', 'populaire'],
      description: 'Le miel de lavande des Alpes est un trésor de la Provence. Sa couleur ambre claire, son parfum floral intense et sa texture crémeuse après cristallisation en font un produit d\'exception. Apprécié pour ses vertus apaisantes et ses propriétés antibactériennes naturelles.',
      composition: 'Miel de lavande 100% naturel et bio. Certifié AB. Non filtré pour conserver tous ses bienfaits.',
      reviews: [
        { author: 'Isabelle C.', rating: 5, date: '2026-05-20', text: 'Un régal! Le parfum est incroyable, on sent vraiment la lavande.' },
        { author: 'Marc T.', rating: 5, date: '2026-04-30', text: 'Idéal pour la gorge. J\'en prends une cuillère chaque matin.' },
        { author: 'Nathalie V.', rating: 5, date: '2026-03-15', text: 'Le meilleur de votre gamme selon moi!' }
      ]
    },
    {
      id: 'mel-thym-250',
      slug: 'miel-thym-250g',
      sku: 'MEL-THY-250',
      name: 'Miel de Thym',
      category: 'miel',
      origin: 'Languedoc, France',
      weight_g: 250,
      price_ht: 7.11,
      price_ttc: 7.75,
      tva_rate: 5.5,
      stock: 15,
      min_stock: 8,
      rating: 4.7,
      reviews_count: 64,
      featured: false,
      tags: ['thym', 'languedoc', 'aromatique'],
      description: 'Récolté dans les garrigues du Languedoc, ce miel de thym dévoile des arômes intenses et épicés. Sa cristallisation fine lui confère une texture crémeuse et agréable. Reconnu pour ses propriétés antiseptiques et digestives.',
      composition: 'Miel de thym sauvage 100% pur. Origine Languedoc-Roussillon.',
      reviews: [
        { author: 'André F.', rating: 5, date: '2026-04-22', text: 'Incroyable saveur de garrigue. Parfait avec du fromage de chèvre.' },
        { author: 'Claire P.', rating: 4, date: '2026-03-18', text: 'Très aromatique, j\'adore!' }
      ]
    },
    {
      id: 'mel-foret-1kg',
      slug: 'miel-foret-1kg',
      sku: 'MEL-FOR-1000',
      name: 'Miel de Forêt 1 kg',
      category: 'miel',
      origin: 'Vosges, France',
      weight_g: 1000,
      price_ht: 14.23,
      price_ttc: 15.52,
      tva_rate: 5.5,
      stock: 20,
      min_stock: 5,
      rating: 4.5,
      reviews_count: 41,
      featured: false,
      tags: ['vosges', 'foret', 'grand-format'],
      description: 'Un miel de forêt des Vosges au goût complexe et boisé. Récolté auprès des sapin, épicéa et autres arbres forestiers, il offre un miellat aux notes caramélisées. Format économique d\'1 kg pour les amateurs.',
      composition: 'Miellat de forêt 100%. Non pasteurisé. Peut contenir du miel de fleurs sauvages.',
      reviews: [
        { author: 'Thomas G.', rating: 5, date: '2026-05-10', text: 'Excellent rapport qualité/prix. Je commande le 1 kg et j\'en suis très satisfait.' }
      ]
    },
    {
      id: 'prop-teinture-30ml',
      slug: 'propolis-teinture-30ml',
      sku: 'PRO-TEI-030',
      name: 'Propolis Teinture Mère 30 ml',
      category: 'propolis',
      origin: 'Bourgogne, France',
      weight_g: 80,
      price_ht: 12.32,
      price_ttc: 14.70,
      tva_rate: 20,
      stock: 18,
      min_stock: 5,
      rating: 4.7,
      reviews_count: 52,
      featured: true,
      tags: ['bio', 'propolis', 'immunite'],
      description: 'La propolis est une substance naturelle récoltée par les abeilles pour protéger leur ruche. Cette teinture mère à 30% de propolis brute dans de l\'alcool à 70° conserve toutes ses propriétés antibactériennes et antivirales naturelles.',
      composition: 'Propolis brute 30%, alcool éthylique 70°. Extrait sans solvant chimique.',
      reviews: [
        { author: 'Hélène M.', rating: 5, date: '2026-03-30', text: 'Je l\'utilise en prévention hivernale depuis 2 ans. Moins de rhumes!' },
        { author: 'François L.', rating: 4, date: '2026-02-14', text: 'Efficace mais le goût est très fort.' }
      ]
    },
    {
      id: 'prop-gelules-60',
      slug: 'propolis-gelules-60',
      sku: 'PRO-GEL-060',
      name: 'Propolis Gélules x60',
      category: 'propolis',
      origin: 'France',
      weight_g: 120,
      price_ht: 16.63,
      price_ttc: 19.84,
      tva_rate: 20,
      stock: 25,
      min_stock: 8,
      rating: 4.5,
      reviews_count: 33,
      featured: false,
      tags: ['propolis', 'gelules', 'immunite'],
      description: 'Gélules de propolis dosées à 400 mg pour une prise pratique et sans goût prononcé. Idéales pour profiter des bienfaits de la propolis au quotidien, en cure d\'un mois.',
      composition: 'Propolis 400 mg par gélule. Gélule végétale (HPMC). Sans additif.',
      reviews: [
        { author: 'Anne-Sophie R.', rating: 5, date: '2026-04-05', text: 'Plus pratique que la teinture. Je recommande pour les enfants aussi.' }
      ]
    },
    {
      id: 'pol-sauvage-250',
      slug: 'pollen-sauvage-250g',
      sku: 'POL-SAU-250',
      name: 'Pollen Sauvage 250 g',
      category: 'pollen',
      origin: 'Pyrénées, France',
      weight_g: 300,
      price_ht: 10.46,
      price_ttc: 12.47,
      tva_rate: 20,
      stock: 12,
      min_stock: 6,
      rating: 4.6,
      reviews_count: 78,
      featured: false,
      tags: ['bio', 'pollen', 'superfood'],
      description: 'Pollen de fleurs sauvages des Pyrénées, récolté au printemps. Multi-floral aux couleurs variées, il regorge de protéines, vitamines B et antioxydants. À consommer 1 cuillère à soupe par jour mélangé dans un yaourt ou smoothie.',
      composition: 'Pollen de fleurs sauvages 100%. Séché à basse température pour préserver les enzymes. Certifié bio.',
      reviews: [
        { author: 'Catherine B.', rating: 5, date: '2026-04-18', text: 'Excellent complément alimentaire. J\'en mets dans mon muesli chaque matin.' }
      ]
    },
    {
      id: 'cire-brute-100',
      slug: 'cire-abeille-brute-100g',
      sku: 'CIR-BRU-100',
      name: 'Cire d\'Abeille Brute 100 g',
      category: 'cire',
      origin: 'Bretagne, France',
      weight_g: 120,
      price_ht: 5.79,
      price_ttc: 6.91,
      tva_rate: 20,
      stock: 35,
      min_stock: 10,
      rating: 4.8,
      reviews_count: 44,
      featured: false,
      tags: ['cire', 'naturel', 'artisanat'],
      description: 'Cire d\'abeille brute et naturelle de Bretagne, sans aucun traitement chimique. Idéale pour la fabrication de bougies, cosmétiques naturels, encaustique et imperméabilisation du bois ou du cuir.',
      composition: 'Cire d\'abeille 100% pure. Couleur jaune naturelle. Point de fusion : 62-65°C.',
      reviews: [
        { author: 'Martine C.', rating: 5, date: '2026-05-08', text: 'Parfaite pour mes bougies artisanales. Belle couleur naturelle.' }
      ]
    },
    {
      id: 'gel-royale-frais-10',
      slug: 'gelee-royale-fraiche-10g',
      sku: 'GEL-FRA-010',
      name: 'Gelée Royale Fraîche 10 g',
      category: 'gelee-royale',
      origin: 'Poitou-Charentes, France',
      weight_g: 50,
      price_ht: 16.63,
      price_ttc: 19.84,
      tva_rate: 20,
      stock: 8,
      min_stock: 5,
      rating: 4.9,
      reviews_count: 91,
      featured: true,
      tags: ['bio', 'gelee-royale', 'premium', 'energie'],
      description: 'La gelée royale est l\'aliment exclusif des reines d\'abeilles. Récoltée fraîche en Poitou-Charentes, elle est conditionnée immédiatement à froid pour préserver toutes ses propriétés. Riche en 10-HDA, acides aminés et vitamines du groupe B.',
      composition: 'Gelée royale fraîche 100%. Taux de 10-HDA : minimum 1.6%. Conservation : 12 mois au congélateur, 6 mois au réfrigérateur.',
      reviews: [
        { author: 'Christine V.', rating: 5, date: '2026-05-15', text: 'Qualité exceptionnelle. Je sens vraiment la différence avec les autres marques.' },
        { author: 'Robert M.', rating: 5, date: '2026-04-25', text: 'Meilleure gelée royale que j\'ai essayée. Goût authentique.' }
      ]
    },
    {
      id: 'acc-pot-verre-500',
      slug: 'pot-verre-500ml',
      sku: 'ACC-POT-500',
      name: 'Pot en Verre 500 ml (x6)',
      category: 'accessoires',
      origin: 'France',
      weight_g: 900,
      price_ht: 7.49,
      price_ttc: 8.94,
      tva_rate: 20,
      stock: 50,
      min_stock: 15,
      rating: 4.4,
      reviews_count: 28,
      featured: false,
      tags: ['accessoires', 'pot', 'bocal'],
      description: 'Lot de 6 pots en verre avec couvercle à vis, parfaits pour le conditionnement du miel ou de toute préparation artisanale. Capacité 500 ml, conformes aux normes alimentaires.',
      composition: 'Verre alimentaire. Couvercle métal. Capacité : 500 ml. Diamètre : 82 mm.',
      reviews: [
        { author: 'Paul D.', rating: 4, date: '2026-03-20', text: 'Bonne qualité pour le prix. Les couvercles ferment bien.' }
      ]
    },
    {
      id: 'acc-extracteur',
      slug: 'extracteur-miel-manuel',
      sku: 'ACC-EXT-001',
      name: 'Extracteur à Miel Manuel 2 cadres',
      category: 'accessoires',
      origin: 'Italie',
      weight_g: 4500,
      price_ht: 124.92,
      price_ttc: 149.00,
      tva_rate: 20,
      stock: 5,
      min_stock: 2,
      rating: 4.3,
      reviews_count: 17,
      featured: false,
      tags: ['accessoires', 'extracteur', 'apiculture'],
      description: 'Extracteur à miel tangentiel manuel pour 2 cadres Dadant. Cuve en inox alimentaire 304, robinet de sortie 38 mm, pieds réglables. Idéal pour les petits apiculteurs amateurs.',
      composition: 'Cuve inox 304. Dimensions : Ø 40 cm × H 65 cm. Capacité : 2 cadres Dadant standard.',
      reviews: [
        { author: 'Bernard L.', rating: 4, date: '2026-02-28', text: 'Très bien pour ma petite exploitation de 5 ruches.' }
      ]
    }
  ],

  categories: [
    { id: 'miel', name: 'Miels', emoji: '🍯', description: 'Miels artisanaux de France' },
    { id: 'propolis', name: 'Propolis', emoji: '🌿', description: 'Produits à base de propolis' },
    { id: 'pollen', name: 'Pollen', emoji: '🌸', description: 'Pollen de fleurs sauvages' },
    { id: 'cire', name: 'Cire', emoji: '🕯️', description: 'Cire d\'abeille naturelle' },
    { id: 'gelee-royale', name: 'Gelée Royale', emoji: '👑', description: 'Gelée royale fraîche' },
    { id: 'accessoires', name: 'Accessoires', emoji: '🔧', description: 'Matériel apicole' }
  ],

  shippingRules: {
    zones: {
      france: {
        label: 'France Métropolitaine',
        baseRate: 4.90,
        perKg: 1.50,
        freeThreshold: 49.00,
        maxWeight: 30000
      },
      dom: {
        label: 'DOM-TOM',
        baseRate: 9.90,
        perKg: 3.00,
        freeThreshold: 99.00,
        maxWeight: 20000
      },
      europe: {
        label: 'Europe',
        baseRate: 14.90,
        perKg: 4.00,
        freeThreshold: 149.00,
        maxWeight: 20000
      },
      world: {
        label: 'International',
        baseRate: 24.90,
        perKg: 6.00,
        freeThreshold: 249.00,
        maxWeight: 10000
      }
    }
  },

  getProductById(id) {
    return this.products.find(p => p.id === id) || null;
  },

  getProductBySlug(slug) {
    return this.products.find(p => p.slug === slug) || null;
  },

  getProductsByCategory(category) {
    if (category === 'all') return this.products;
    return this.products.filter(p => p.category === category);
  },

  getFeaturedProducts() {
    return this.products.filter(p => p.featured);
  },

  getLowStockProducts() {
    return this.products.filter(p => p.stock <= p.min_stock);
  },

  calculateShipping(weightG, zone = 'france') {
    const rules = this.shippingRules.zones[zone];
    if (!rules) return this.shippingRules.zones.france.baseRate;
    const weightKg = weightG / 1000;
    return rules.baseRate + Math.max(0, weightKg - 1) * rules.perKg;
  },

  getCategoryById(id) {
    return this.categories.find(c => c.id === id) || null;
  },

  generateOrderId() {
    return 'ORD-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 4).toUpperCase();
  },

  saveOrder(order) {
    let orders = [];
    try {
      orders = JSON.parse(localStorage.getItem('honey_orders') || '[]');
    } catch { orders = []; }
    orders.unshift(order);
    localStorage.setItem('honey_orders', JSON.stringify(orders));
    return order;
  },

  getOrders() {
    try {
      return JSON.parse(localStorage.getItem('honey_orders') || '[]');
    } catch { return []; }
  },

  getOrderById(id) {
    return this.getOrders().find(o => o.id === id) || null;
  },

  updateOrder(id, changes) {
    let orders = this.getOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx === -1) return false;
    orders[idx] = { ...orders[idx], ...changes };
    localStorage.setItem('honey_orders', JSON.stringify(orders));
    return true;
  }
};
