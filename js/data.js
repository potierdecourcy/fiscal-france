/**
 * Miel de Normandie — Application Data
 * Exposes window.APP_DATA with all static data and helper functions.
 */

(function () {
  'use strict';

  /* ================================================================
     PRODUCTS
  ================================================================ */

  var products = [

    /* ── MIEL ───────────────────────────────────────────────── */
    {
      id:            'mf-001',
      sku:           'MF-001',
      name:          'Miel de Fleurs Sauvages',
      slug:          'miel-fleurs-sauvages',
      category:      'miel',
      subcategory:   'toutes-fleurs',
      origin:        'Provence, France',
      description:   'Récolté dans les garrigues et collines de Provence, notre Miel de Fleurs Sauvages est une invitation au voyage sensoriel. Les abeilles butinent une mosaïque de fleurs mellifères — thym sauvage, romarin, lavande et autres trésors de la garrigue — pour composer ce nectar d\'une richesse aromatique incomparable. Chaque pot reflète la biodiversité unique de nos ruchers provençaux, soigneusement préservés en agriculture raisonnée.\n\nD\'une belle couleur ambrée dorée, ce miel se distingue par son bouquet floral complexe mêlant des notes herbacées, légèrement épicées et subtilement sucrées. Sa texture semi-cristallisée en hiver et liquide en été est le signe d\'un miel naturel, non traité thermiquement et exempt de tout ajout. La cristallisation spontanée, preuve de son authenticité, préserve la totalité de ses bienfaits nutritifs.\n\nIdéal en tartines du matin, en édulcorant naturel dans vos thés et infusions ou pour sublimer vos fromages de chèvre et de brebis, ce miel polyvalent sera votre compagnon gourmand au quotidien. Conditionné en pot de 500 g, il provient directement de notre exploitation familiale fondée en 1987, engagée dans la préservation des abeilles et des écosystèmes provençaux.',
      shortDescription: 'Un miel floral aux notes de garrigue, récolté dans les collines de Provence.',
      price_ht:      8.33,
      price_ttc:     10.00,
      tva_rate:      5.5,
      weight_g:      500,
      stock:         45,
      minStock:      5,
      images:        ['images/miel-fleurs.jpg'],
      tags:          ['local', 'provence', 'fleurs-sauvages'],
      featured:      true,
      rating:        4.8,
      reviews_count: 47,
      reviews: [
        {
          author: 'Marie-Hélène D.',
          date:   '2026-04-12',
          rating: 5,
          comment: 'Un miel absolument exceptionnel ! Les arômes de la garrigue sont bien présents, c\'est le vrai goût du Sud. Je l\'achète régulièrement pour toute la famille.'
        },
        {
          author: 'Pierre L.',
          date:   '2026-03-28',
          rating: 5,
          comment: 'Livraison rapide et produit à la hauteur des attentes. Le miel est liquide, très aromatique. On sent la différence avec les miels industriels du supermarché.'
        },
        {
          author: 'Sylvie M.',
          date:   '2026-02-15',
          rating: 4,
          comment: 'Très bon miel de Provence, savoureux et naturel. Légèrement cristallisé à la réception, ce qui est tout à fait normal. Je recommande sans hésitation.'
        }
      ]
    },

    {
      id:            'ma-001',
      sku:           'MA-001',
      name:          'Miel d\'Acacia',
      slug:          'miel-acacia',
      category:      'miel',
      subcategory:   'mono-floral',
      origin:        'Bourgogne, France',
      description:   'Perle de la miellerie française, le Miel d\'Acacia de Bourgogne est réputé pour sa douceur exceptionnelle et sa limpidité cristalline. Les robiniers (faux acacias) qui bordent les bocages bourguignons offrent une floraison généreuse en mai-juin, période durant laquelle nos abeilles récoltent ce nectar pur et délicat. Sa faible teneur en glucose lui confère une résistance naturelle à la cristallisation, lui permettant de rester liquide plusieurs mois après la récolte.\n\nSon profil gustatif est remarquablement doux et vanillé, presque neutre, ce qui en fait l\'édulcorant naturel par excellence pour ceux qui souhaitent sucrer sans masquer les saveurs. Il sublime le yaourt, le fromage blanc, les crêpes et les pâtisseries. Les tisanes et thés fins y trouvent leur meilleur allié.\n\nNotre Miel d\'Acacia est extrait à froid, filtré délicatement pour préserver ses propriétés naturelles et mis en pot dans les 48 heures suivant la récolte. Sans chauffage excessif ni ajout d\'aucune sorte, il conserve l\'intégralité de ses enzymes, vitamines et antioxydants.',
      shortDescription: 'Miel d\'acacia doux et limpide, cristallisation naturellement lente.',
      price_ht:      10.00,
      price_ttc:     12.00,
      tva_rate:      5.5,
      weight_g:      500,
      stock:         32,
      minStock:      5,
      images:        ['images/miel-acacia.jpg'],
      tags:          ['acacia', 'bourgogne', 'doux', 'liquide'],
      featured:      true,
      rating:        4.9,
      reviews_count: 89,
      reviews: [
        {
          author: 'Jean-François B.',
          date:   '2026-05-10',
          rating: 5,
          comment: 'Le meilleur miel d\'acacia que j\'ai jamais goûté. Très liquide, arômes subtils, rien à redire. Un vrai délice sur mes tartines du matin.'
        },
        {
          author: 'Camille R.',
          date:   '2026-04-03',
          rating: 5,
          comment: 'Parfait pour sucrer mon thé sans en altérer le goût. La qualité est au rendez-vous, je passe commande régulièrement et je n\'ai jamais été déçue.'
        },
        {
          author: 'Bernard T.',
          date:   '2026-03-19',
          rating: 4,
          comment: 'Excellent miel, conforme à la description. La livraison a été un peu longue mais le produit vaut l\'attente. Je le recommande chaudement.'
        }
      ]
    },

    {
      id:            'mc-001',
      sku:           'MC-001',
      name:          'Miel de Châtaignier',
      slug:          'miel-chataignier',
      category:      'miel',
      subcategory:   'mono-floral',
      origin:        'Ardèche, France',
      description:   'Issu des châtaigneraies ancestrales de l\'Ardèche, ce miel se distingue par son caractère affirmé et sa personnalité unique. D\'une teinte brun foncé intense, il dévoile un arôme puissant et légèrement tannique qui rappelle la forêt automnale. Son goût persistant, légèrement amer et boisé, en fait un miel d\'exception pour les palais aventureux et les amateurs de saveurs authentiques.\n\nRiche en fructose, il cristallise peu et conserve sa texture semi-fluide pendant de nombreux mois. Sa composition exceptionnelle en minéraux, notamment en potassium, fer et zinc, ainsi que sa haute teneur en antioxydants en font un allié naturel de premier plan. En aromathérapie alimentaire, il est souvent associé aux propriétés digestives et dynamisantes.\n\nLe Miel de Châtaignier de l\'Ardèche accompagne idéalement les fromages à pâte persillée comme le Roquefort, les charcuteries fines et les marinades de viandes rôties. Il apporte également une note profonde et originale dans les pains d\'épices et gâteaux rustiques.',
      shortDescription: 'Miel brun intense aux arômes boisés et tanniques, caractère affirmé.',
      price_ht:      11.37,
      price_ttc:     12.00,
      tva_rate:      5.5,
      weight_g:      500,
      stock:         28,
      minStock:      5,
      images:        ['images/miel-chataignier.jpg'],
      tags:          ['chataignier', 'ardeche', 'fort', 'boise'],
      featured:      false,
      rating:        4.7,
      reviews_count: 34,
      reviews: [
        {
          author: 'Nathalie P.',
          date:   '2026-05-01',
          rating: 5,
          comment: 'Un miel corsé comme je les aime ! Parfait avec un fromage de chèvre affiné ou sur une tranche de pain aux noix. Très authentique.'
        },
        {
          author: 'Jacques V.',
          date:   '2026-04-18',
          rating: 4,
          comment: 'Saveur puissante et intense, sans doute le plus typé de notre commande. Pour les amateurs de miels forts, c\'est un sans-faute.'
        },
        {
          author: 'Isabelle F.',
          date:   '2026-02-22',
          rating: 5,
          comment: 'Miel de grande qualité. L\'amertume subtile est parfaite pour couper le gras de certains plats. Original et délicieux, je rachèterai.'
        }
      ]
    },

    {
      id:            'ml-001',
      sku:           'ML-001',
      name:          'Miel de Lavande',
      slug:          'miel-lavande',
      category:      'miel',
      subcategory:   'mono-floral',
      origin:        'Drôme Provençale, France',
      description:   'Symbole de la Provence, le Miel de Lavande est récolté au cœur de l\'été lorsque les champs violets de la Drôme Provençale embaumant l\'atmosphère. Nos apiculteurs déposent leurs ruches au plus près des lavandicoles pour garantir une monoflorialité optimale. Ce miel d\'une délicatesse rare présente une belle teinte dorée et cristallise rapidement en une crème fine et onctueuse.\n\nSon parfum floral et légèrement camphré est immédiatement reconnaissable. En bouche, il libère des notes florales douces, légèrement herbacées, avec une douceur naturelle très agréable. Sa texture crémeuse après cristallisation le rend facile à tartiner et particulièrement apprécié des enfants.\n\nConditionnée en petit format de 250 g pour une fraîcheur optimale, cette version de luxe est idéale en cadeau ou pour une dégustation premium. Il est particulièrement indiqué pour accompagner les fromages frais et les yaourts nature, ou pour parfumer subtilement une vinaigrette de saison.',
      shortDescription: 'Miel de lavande crémeux aux effluves floraux, exclusivement récolté en Drôme Provençale.',
      price_ht:      7.58,
      price_ttc:     8.00,
      tva_rate:      5.5,
      weight_g:      250,
      stock:         15,
      minStock:      3,
      images:        ['images/miel-lavande.jpg'],
      tags:          ['lavande', 'provence', 'drome', 'cremeux'],
      featured:      true,
      rating:        4.8,
      reviews_count: 61,
      reviews: [
        {
          author: 'Chantal G.',
          date:   '2026-04-25',
          rating: 5,
          comment: 'On retrouve vraiment les senteurs de la Provence dans ce miel. La texture crémeuse est parfaite pour le tartiner. Un vrai coup de coeur.'
        },
        {
          author: 'Thomas K.',
          date:   '2026-03-14',
          rating: 5,
          comment: 'Cadeau idéal pour ma mère qui adore la lavande. Elle a été ravie ! Le pot est joli et le miel est excellent. Très bonne qualité.'
        },
        {
          author: 'Elise N.',
          date:   '2026-02-08',
          rating: 4,
          comment: 'Miel très parfumé, comme attendu. Je l\'utilise dans mes tisanes du soir et c\'est divin. J\'aurais préféré un format 500g mais sinon parfait.'
        }
      ]
    },

    {
      id:            'mt-001',
      sku:           'MT-001',
      name:          'Miel de Tilleul',
      slug:          'miel-tilleul',
      category:      'miel',
      subcategory:   'mono-floral',
      origin:        'Normandie, France',
      description:   'Récolté dans les vergers et bocages normands à la floraison des tilleuls en juin-juillet, ce miel dévoile des arômes mentholés et minéraux bien caractéristiques. De couleur ambrée claire à jaune pâle, il cristallise en une masse fine et granuleuse. Son goût est doux, légèrement mentholé avec une légère astringence en fin de bouche qui le rend facilement identifiable.\n\nTraditionnellement reconnu pour ses vertus apaisantes et relaxantes, le Miel de Tilleul est particulièrement apprécié le soir, incorporé dans une tisane de tilleul pour favoriser un sommeil serein. Il accompagne également à merveille les salades de fruits d\'été et les sorbets au citron.\n\nNotre production normande bénéficie d\'un terroir humide et bocager exceptionnellement riche en tilleuls centenaires. Les ruchers sont positionnés en pleine nature, loin de toute agriculture intensive, ce qui garantit un miel d\'une pureté et d\'une typicité exemplaires.',
      shortDescription: 'Miel de tilleul aux notes mentholées et apaisantes, idéal pour les nuits calmes.',
      price_ht:      9.48,
      price_ttc:     10.00,
      tva_rate:      5.5,
      weight_g:      500,
      stock:         0,
      minStock:      5,
      images:        ['images/miel-tilleul.jpg'],
      tags:          ['tilleul', 'normandie', 'apaisant'],
      featured:      false,
      rating:        4.6,
      reviews_count: 22,
      reviews: [
        {
          author: 'Anne-Sophie M.',
          date:   '2026-01-30',
          rating: 5,
          comment: 'Je le prends chaque soir dans ma tisane de tilleul, et j\'ai vraiment amélioré la qualité de mon sommeil. Produit excellent, je reprendrai dès qu\'il sera de nouveau disponible.'
        },
        {
          author: 'François C.',
          date:   '2025-12-18',
          rating: 4,
          comment: 'Saveur caractéristique et authentique. Moins sucré que le miel d\'acacia, avec un côté légèrement amer très agréable. Très bon produit.'
        },
        {
          author: 'Martine L.',
          date:   '2025-11-05',
          rating: 4,
          comment: 'Bon miel de tilleul avec un parfum bien présent. Je le recommande pour les infusions. Commande bien emballée, aucun souci de livraison.'
        }
      ]
    },

    {
      id:            'mm-001',
      sku:           'MM-001',
      name:          'Miel de Montagne',
      slug:          'miel-montagne',
      category:      'miel',
      subcategory:   'toutes-fleurs',
      origin:        'Savoie, France',
      description:   'Né à plus de 1200 mètres d\'altitude dans les alpages savoyards, ce miel d\'exception est la quintessence de la biodiversité de montagne. Nos abeilles butinent une flore d\'altitude rare et préservée — trèfle alpin, génépi, sainfoin, myrtille sauvage, rhododendron et centaurée — pour composer un miel d\'une complexité aromatique sans égal. Sa texture semi-cristallisée et sa couleur ambrée soutenue témoignent de sa richesse enzymatique.\n\nLe Miel de Montagne Savoyarde offre un bouquet aromatique intense et complexe, mêlant notes florales, herbacées et légèrement boisées. Son goût en bouche est puissant, avec une belle longueur et une douceur naturelle équilibrée. Certifié Agriculture Biologique, il est produit selon les méthodes traditionnelles savoyardes, sans aucun traitement chimique des ruches.\n\nProduction limitée due aux conditions climatiques d\'altitude, ce miel est particulièrement prisé des connaisseurs et des gastronomes. Il accompagne superbement les fromages savoyards (Beaufort, Reblochon, Abondance) et les charcuteries artisanales de montagne.',
      shortDescription: 'Miel bio d\'altitude, récolté dans les alpages savoyards à plus de 1200 mètres.',
      price_ht:      12.32,
      price_ttc:     13.00,
      tva_rate:      5.5,
      weight_g:      500,
      stock:         8,
      minStock:      5,
      images:        ['images/miel-montagne.jpg'],
      tags:          ['bio', 'altitude', 'savoie', 'certifie-ab', 'premium'],
      featured:      false,
      rating:        4.9,
      reviews_count: 18,
      reviews: [
        {
          author: 'Laurent B.',
          date:   '2026-05-02',
          rating: 5,
          comment: 'Un miel hors du commun. On sent vraiment l\'altitude, la flore alpine. Avec un Beaufort fermier, c\'est une association divine. Merci pour ce produit authentique.'
        },
        {
          author: 'Sophie A.',
          date:   '2026-04-07',
          rating: 5,
          comment: 'J\'ai passé mes vacances en Savoie et retrouver ce goût des alpages dans mon miel est un vrai bonheur. Production limitée, pensez à commander à l\'avance !'
        },
        {
          author: 'Denis G.',
          date:   '2026-02-28',
          rating: 4,
          comment: 'Excellent rapport qualité-prix pour un miel bio d\'altitude. Très aromatique, plus corsé que les miels de plaine. Je recommande vivement.'
        }
      ]
    },

    {
      id:            'mb-001',
      sku:           'MB-001',
      name:          'Miel Bio Toutes Fleurs',
      slug:          'miel-bio-toutes-fleurs',
      category:      'miel',
      subcategory:   'toutes-fleurs',
      origin:        'Bretagne, France',
      description:   'Issu d\'une apiculture certifiée Agriculture Biologique (AB), ce Miel Toutes Fleurs de Bretagne est produit dans le respect total des abeilles et de l\'environnement. Nos ruchers sont implantés au cœur de zones naturelles préservées, loin des cultures conventionnelles et de toute source de pollution. Les abeilles butinent librement une diversité de fleurs mellifères sauvages et cultivées en agriculture biologique.\n\nCe miel d\'un beau jaune doré présente des arômes floraux fins et délicats, avec une légère note de trèfle blanc très caractéristique de la campagne bretonne. Sa douceur naturelle et son équilibre gustatif en font un miel quotidien apprécié de tous. Il cristallise progressivement pour former une crème lisse et onctueuse.\n\nEmballé dans un petit format de 250 g, il est idéal pour les familles qui souhaitent consommer un miel bio certifié, produit localement dans le respect de l\'environnement. Le label Agriculture Biologique garantit l\'absence de tout traitement de synthèse, d\'antibiotiques ou d\'acaricides chimiques dans les ruches.',
      shortDescription: 'Miel bio certifié AB, récolté en Bretagne dans des zones naturelles préservées.',
      price_ht:      7.11,
      price_ttc:     7.50,
      tva_rate:      5.5,
      weight_g:      250,
      stock:         20,
      minStock:      5,
      images:        ['images/miel-bio.jpg'],
      tags:          ['bio', 'certifie-ab', 'bretagne', 'naturel'],
      featured:      false,
      rating:        4.6,
      reviews_count: 29,
      reviews: [
        {
          author: 'Cécile D.',
          date:   '2026-04-22',
          rating: 5,
          comment: 'Enfin un miel bio vraiment local ! La certification AB est un gage de confiance pour moi. Le goût est doux et floral, idéal pour mes enfants.'
        },
        {
          author: 'Marc P.',
          date:   '2026-03-10',
          rating: 4,
          comment: 'Bon miel bio, saveur douce et agréable. Moins typé que les mono-floraux mais c\'est ce que je cherchais. Bon rapport qualité-prix pour un bio.'
        },
        {
          author: 'Valérie C.',
          date:   '2026-01-25',
          rating: 5,
          comment: 'Produit conforme à la description. Beau miel bio breton, bien aromatique. Je l\'utilise chaque matin dans mon café et c\'est excellent.'
        }
      ]
    },

    /* ── PROPOLIS ────────────────────────────────────────────── */
    {
      id:            'pr-001',
      sku:           'PR-001',
      name:          'Extrait de Propolis Alcoolique 30ml',
      slug:          'extrait-propolis-alcoolique',
      category:      'propolis',
      subcategory:   'extrait-liquide',
      origin:        'France',
      description:   'Préparé selon un procédé d\'extraction à froid en macération alcoolique pendant 21 jours, notre extrait de propolis titré à 30 % est l\'un des plus concentrés du marché. La propolis, cette résine naturelle produite par les abeilles à partir des bourgeons et écorces d\'arbres, est reconnue depuis l\'Antiquité pour ses vertus protectrices et sa richesse en flavonoïdes, acides phénoliques et huiles essentielles.\n\nChaque flacon de 30 ml contient l\'équivalent de 9 grammes de propolis brute sélectionnée. Notre propolis est récoltée uniquement sur nos ruchers français, garantissant une traçabilité complète du produit. Elle est ensuite soigneusement sélectionnée, purifiée des débris de cire et macérée dans de l\'alcool de grain à 70°.\n\nUtilisation recommandée : 15 à 20 gouttes dans un peu d\'eau ou de jus de fruits, 2 à 3 fois par jour en cas de besoin ou en prévention saisonnière. Usage externe possible en application locale diluée. Déconseillé aux personnes allergiques aux produits de la ruche.',
      shortDescription: 'Extrait alcoolique de propolis à 30 %, puissant et concentré, tracé 100 % France.',
      price_ht:      12.50,
      price_ttc:     15.00,
      tva_rate:      20,
      weight_g:      80,
      stock:         35,
      minStock:      5,
      images:        ['images/propolis-alcoolique.jpg'],
      tags:          ['propolis', 'extrait', 'immunite', 'hiver'],
      featured:      false,
      rating:        4.9,
      reviews_count: 73,
      reviews: [
        {
          author: 'Paul R.',
          date:   '2026-04-30',
          rating: 5,
          comment: 'Je prends cet extrait de propolis chaque hiver depuis 3 ans et j\'ai notablement moins de rhumes et angines. Produit de qualité, livraison rapide.'
        },
        {
          author: 'Hélène M.',
          date:   '2026-03-22',
          rating: 5,
          comment: 'Extrait très concentré et efficace. Quelques gouttes suffisent. Le goût est fort mais on s\'y fait. Je fais la cure de 3 mois chaque automne.'
        },
        {
          author: 'Robert F.',
          date:   '2026-02-11',
          rating: 4,
          comment: 'Bonne propolis, le compte-gouttes est pratique. Je l\'utilise aussi en application locale sur les aphtes et c\'est très efficace. Satisfait du produit.'
        }
      ]
    },

    {
      id:            'pr-002',
      sku:           'PR-002',
      name:          'Gommes Propolis au Miel',
      slug:          'gommes-propolis-miel',
      category:      'propolis',
      subcategory:   'gommes',
      origin:        'France',
      description:   'Formulées à base d\'extrait de propolis et de miel de fleurs, nos gommes à sucer offrent un confort d\'utilisation idéal pour toute la famille, adultes et enfants dès 6 ans. Chaque gomme contient 25 mg d\'extrait de propolis standardisé en flavonoïdes, associé à du miel et à des huiles essentielles de thym et d\'eucalyptus pour une action complète sur la sphère ORL.\n\nSans colorants artificiels, sans conservateurs, sans huile de palme, ces gommes au miel sont fabriquées en France dans un atelier certifié aux normes alimentaires les plus strictes. Leur texture souple et leur goût agréablement sucré au miel et aux plantes en font un complément facile à prendre, même pour les plus récalcitrants.\n\nIdéales en prévention saisonnière ou à la première apparition d\'un inconfort de gorge, elles constituent un complément naturel doux et accessible. La boîte de 50 g contient environ 20 gommes individuelles sous blister pour faciliter l\'emport en déplacement.',
      shortDescription: 'Gommes propolis-miel à sucer, sans colorants, pour toute la famille.',
      price_ht:      6.25,
      price_ttc:     7.50,
      tva_rate:      20,
      weight_g:      50,
      stock:         50,
      minStock:      8,
      images:        ['images/gommes-propolis.jpg'],
      tags:          ['propolis', 'gommes', 'gorge', 'famille', 'enfants'],
      featured:      false,
      rating:        4.5,
      reviews_count: 41,
      reviews: [
        {
          author: 'Claire V.',
          date:   '2026-05-05',
          rating: 5,
          comment: 'Mes enfants adorent ! Ils ne se rendent pas compte que c\'est un complément santé tellement c\'est bon. Le miel masque le goût de la propolis. Parfait.'
        },
        {
          author: 'Patrick B.',
          date:   '2026-04-01',
          rating: 4,
          comment: 'Bon produit, agréable à prendre. J\'en ai toujours dans mon sac. Le format individuel sous blister est très pratique pour en emporter au travail.'
        },
        {
          author: 'Monique S.',
          date:   '2026-02-19',
          rating: 4,
          comment: 'Je prends ces gommes à la première sensation de gorge irritée et ça calme assez vite. Produit naturel, sans mauvais ingrédients. Je valide.'
        }
      ]
    },

    {
      id:            'pr-003',
      sku:           'PR-003',
      name:          'Spray Propolis Gorge',
      slug:          'spray-propolis-gorge',
      category:      'propolis',
      subcategory:   'spray',
      origin:        'France',
      description:   'Notre Spray Propolis Gorge associe l\'extrait de propolis française à des huiles essentielles bio de menthe poivrée, de tea tree et de thym thymol pour une action directe et immédiate sur la muqueuse buccale et pharyngée. Chaque pulvérisation délivre une dose précise et concentrée au cœur des zones sensibles.\n\nLe flacon pompe de 30 ml permet environ 150 pulvérisations — soit plusieurs semaines d\'utilisation en cure — et son format compact le rend idéal pour le sac à main ou la trousse de voyage. Aucun gaz propulseur, aucun alcool agressif sur la muqueuse, juste une formule aqueuse glycérinée douce et efficace.\n\nMode d\'emploi : 2 à 3 pulvérisations directement sur la gorge, 2 à 4 fois par jour. Agiter avant chaque utilisation. Adapté aux adultes et aux adolescents de plus de 12 ans. Conserver à l\'abri de la chaleur et de la lumière.',
      shortDescription: 'Spray buccal à la propolis et aux huiles essentielles, action directe sur la gorge.',
      price_ht:      10.83,
      price_ttc:     13.00,
      tva_rate:      20,
      weight_g:      30,
      stock:         42,
      minStock:      8,
      images:        ['images/spray-propolis.jpg'],
      tags:          ['propolis', 'spray', 'gorge', 'huiles-essentielles'],
      featured:      false,
      rating:        4.7,
      reviews_count: 58,
      reviews: [
        {
          author: 'Catherine D.',
          date:   '2026-04-15',
          rating: 5,
          comment: 'Ce spray est devenu indispensable dans mon armoire à pharmacie naturelle. Efficace rapidement, goût menthé agréable. Je le recommande à tous mes proches.'
        },
        {
          author: 'Michel H.',
          date:   '2026-03-07',
          rating: 5,
          comment: 'Excellent spray, très pratique à utiliser. Action quasi-immédiate sur les douleurs de gorge. Le format est compact, idéal pour voyager. Je rachèterai.'
        },
        {
          author: 'Laura T.',
          date:   '2026-01-12',
          rating: 4,
          comment: 'Produit efficace mais le goût du tea tree est assez prononcé. Ça ne me dérange pas mais il faut s\'y préparer. Qualité au rendez-vous toutefois.'
        }
      ]
    },

    /* ── POLLEN ──────────────────────────────────────────────── */
    {
      id:            'po-001',
      sku:           'PO-001',
      name:          'Pollen Frais de Printemps 250g',
      slug:          'pollen-frais-printemps',
      category:      'pollen',
      subcategory:   'frais',
      origin:        'Limousin, France',
      description:   'Récolté au cœur du printemps limousin dans des zones protégées de toute pollution, notre Pollen Frais est l\'un des superaliments les plus complets qui soit. Collecté quotidiennement par les trappe-pollens placées à l\'entrée des ruches, il est immédiatement congelé à -18°C pour préserver la totalité de ses nutriments : protéines, acides aminés essentiels, vitamines B, C et E, minéraux et flavonoïdes.\n\nCertifié Agriculture Biologique, ce pollen multifloral présente une palette de couleurs allant du jaune vif au rouge-orangé selon les plantes butinées. Chaque granule est un concentré de vitalité, riche en enzymes et en co-enzymes actives. Sa texture légèrement gélifiée à la décongélation est caractéristique du pollen frais, signe de sa fraîcheur optimale.\n\nConservation : à congeler dès réception, consommer dans les 6 mois après décongélation au réfrigérateur. Suggestion : 1 à 2 cuillères à café par jour dans un yaourt, un smoothie ou saupoudré sur vos céréales du matin. Déconseillé aux personnes allergiques aux pollens.',
      shortDescription: 'Pollen frais bio du Limousin, surgélation immédiate pour une conservation optimale.',
      price_ht:      11.37,
      price_ttc:     12.00,
      tva_rate:      5.5,
      weight_g:      300,
      stock:         12,
      minStock:      3,
      images:        ['images/pollen-frais.jpg'],
      tags:          ['bio', 'frais', 'limousin', 'superaliment', 'certifie-ab'],
      featured:      true,
      rating:        4.8,
      reviews_count: 33,
      reviews: [
        {
          author: 'Sandrine B.',
          date:   '2026-04-28',
          rating: 5,
          comment: 'Je prends du pollen frais depuis deux ans et la différence avec le pollen séché est notable. Celui-ci est excellent, livré parfaitement congelé. Très bonne qualité.'
        },
        {
          author: 'Thierry N.',
          date:   '2026-03-31',
          rating: 5,
          comment: 'Superbe pollen frais, bien coloré et odorant. On sent que c\'est un produit vivant de qualité. Livraison en colis isotherme impeccable. Je recommande.'
        },
        {
          author: 'Frédérique L.',
          date:   '2026-02-14',
          rating: 4,
          comment: 'Très bon produit. J\'aurais aimé plus d\'informations sur la diversité florale du pollen mais il est délicieux dans mon yaourt du matin. Je rachèterai.'
        }
      ]
    },

    {
      id:            'po-002',
      sku:           'PO-002',
      name:          'Pollen Séché Bio 200g',
      slug:          'pollen-seche-bio',
      category:      'pollen',
      subcategory:   'seche',
      origin:        'France',
      description:   'Séché délicatement à basse température (moins de 42°C) pour préserver ses enzymes et vitamines, notre Pollen Séché Bio est une alternative pratique au pollen frais. Sa conservation à température ambiante pendant 12 à 18 mois en fait un complément de longue durée, idéal pour une consommation régulière tout au long de l\'année. Certifié Agriculture Biologique, il provient de ruchers français en zones préservées.\n\nLes granules de pollen séché ont une texture légèrement croquante et un goût délicat, légèrement sucré et floral. Leurs propriétés nutritionnelles — protéines complètes, vitamines du groupe B, antioxydants — sont maintenues grâce au séchage doux à l\'étuve ventilée. La couleur dorée uniforme témoigne d\'une sélection soigneuse et d\'un séchage homogène.\n\nMode d\'emploi conseillé : 1 cuillère à soupe par jour (environ 15 g), à consommer de préférence le matin à jeun ou dans un yaourt nature. Pour les débutants, commencer par une cuillère à café et augmenter progressivement la dose sur 2 semaines.',
      shortDescription: 'Pollen séché bio à basse température, longue conservation, riche en nutriments.',
      price_ht:      10.42,
      price_ttc:     11.00,
      tva_rate:      5.5,
      weight_g:      250,
      stock:         25,
      minStock:      5,
      images:        ['images/pollen-seche.jpg'],
      tags:          ['bio', 'seche', 'conservation', 'certifie-ab'],
      featured:      false,
      rating:        4.6,
      reviews_count: 25,
      reviews: [
        {
          author: 'Antoine M.',
          date:   '2026-04-20',
          rating: 5,
          comment: 'Très bon pollen bio, facile à conserver. Je l\'intègre dans mes smoothies du matin. Goût agréable, moins intense que le frais mais très pratique.'
        },
        {
          author: 'Brigitte V.',
          date:   '2026-03-05',
          rating: 4,
          comment: 'Bonne qualité pour un pollen séché. Texture croquante plaisante. Je l\'utilise aussi pour décorer mes salades. Emballage hermétique bien conçu.'
        },
        {
          author: 'Nicolas C.',
          date:   '2026-01-18',
          rating: 5,
          comment: 'Pollen d\'excellente qualité, couleur belle et uniforme. Goût doux et floral. Mon nutritionniste me l\'avait recommandé et je suis pleinement satisfait.'
        }
      ]
    },

    /* ── CIRE ────────────────────────────────────────────────── */
    {
      id:            'ci-001',
      sku:           'CI-001',
      name:          'Cire d\'Abeille Naturelle 200g',
      slug:          'cire-abeille-naturelle',
      category:      'cire',
      subcategory:   'bloc',
      origin:        'France',
      description:   'Extraite directement des rayons de cire de nos ruches françaises, notre Cire d\'Abeille Naturelle est filtrée et coulée en bloc de 200 g sans aucun additif ni traitement chimique. Sa teinte jaune dorée à brun miel et son parfum délicat de miel et de propolis sont la signature d\'une cire authentique de haute qualité, issue exclusivement d\'apiculture française.\n\nLa cire d\'abeille naturelle est un ingrédient de choix pour de nombreuses préparations artisanales : cosmétiques maison (baumes à lèvres, crèmes nourrissantes, lotions corps), entretien du bois et des cuirs (cirage, polish naturel), fabrication de bougies et chauffe-plats, imperméabilisation des textiles et des fils pour la couture, ou encore pour l\'alimentation en tant que substitut naturel aux emballages plastiques (bee wraps).\n\nLa cire est certifiée sans résidus de traitements acaricides, garantissant sa pureté pour les usages alimentaires et cosmétiques. Point de fusion : 62-65°C. Conservation illimitée dans un endroit frais et sec, à l\'abri de la lumière.',
      shortDescription: 'Bloc de cire d\'abeille pure 200 g, idéal cosmétiques, bougies et entretien.',
      price_ht:      8.33,
      price_ttc:     10.00,
      tva_rate:      20,
      weight_g:      220,
      stock:         30,
      minStock:      5,
      images:        ['images/cire-naturelle.jpg'],
      tags:          ['cire', 'naturelle', 'cosmetique', 'bougies', 'artisanal'],
      featured:      false,
      rating:        4.7,
      reviews_count: 19,
      reviews: [
        {
          author: 'Julie A.',
          date:   '2026-04-10',
          rating: 5,
          comment: 'Cire de très belle qualité, couleur dorée magnifique et parfum authentique. Je l\'utilise pour fabriquer mes bee wraps et elle est parfaite. Merci !'
        },
        {
          author: 'René P.',
          date:   '2026-03-14',
          rating: 5,
          comment: 'Excellente cire pour le soin des cuirs. Mon vieux blouson de cuir a retrouvé une belle tenue après traitement. Produit pur et naturel, je recommande.'
        },
        {
          author: 'Amandine G.',
          date:   '2026-02-03',
          rating: 4,
          comment: 'Belle cire naturelle, bonne odeur de miel. Je m\'en sers pour mes bougies artisanales. La fonte est homogène. Bon produit dans l\'ensemble.'
        }
      ]
    },

    {
      id:            'ci-002',
      sku:           'CI-002',
      name:          'Cire d\'Abeille en Plaques 500g',
      slug:          'cire-abeille-plaques',
      category:      'cire',
      subcategory:   'plaques',
      origin:        'France',
      description:   'Conditionnée en plaques minces de 1 à 2 mm d\'épaisseur, cette cire d\'abeille française facilite la manipulation et l\'utilisation pour tous vos projets créatifs et artisanaux. Le format en plaques permet un découpage précis, une fonte plus rapide et homogène, et un dosage facile pour vos recettes de cosmétiques, bougies ou bee wraps. Le lot de 500 g représente environ 5 à 6 plaques selon l\'épaisseur.\n\nIssue des mêmes ruches françaises que notre cire en bloc, cette cire en plaques bénéficie de la même pureté et de la même qualité. Elle est idéale pour les artisans et les amateurs créatifs qui travaillent régulièrement avec de la cire d\'abeille et apprécient le format pratique des plaques.\n\nApplications privilégiées : fabrication de bougies tressées ou moulées, enrobage de fromages artisanaux, imperméabilisation des fils de couture, gaufrage de fondations pour ruches Langstroth, production de bee wraps en grande série. La cire est compatible avec toutes les méthodes de travail classiques : bain-marie, thermostat à cire, double chauffe.',
      shortDescription: 'Cire d\'abeille française en plaques 500 g, fonte facile, idéale artisans et créatifs.',
      price_ht:      14.17,
      price_ttc:     17.00,
      tva_rate:      20,
      weight_g:      520,
      stock:         18,
      minStock:      3,
      images:        ['images/cire-plaques.jpg'],
      tags:          ['cire', 'plaques', 'artisanal', 'bougies', 'professionnel'],
      featured:      false,
      rating:        4.6,
      reviews_count: 12,
      reviews: [
        {
          author: 'Olivier R.',
          date:   '2026-04-05',
          rating: 5,
          comment: 'Le format en plaques est vraiment plus pratique que les blocs. Fonte uniforme, belle couleur, parfum agréable. Je l\'utilise pour mes bougies artisanales.'
        },
        {
          author: 'Marina S.',
          date:   '2026-03-18',
          rating: 4,
          comment: 'Bonne cire, plaques bien régulières et faciles à casser. Excellente pour les bee wraps. Je commanderai de nouveau pour ma prochaine session créative.'
        },
        {
          author: 'Damien L.',
          date:   '2026-02-09',
          rating: 5,
          comment: 'Apiculteur amateur, j\'utilise cette cire pour mes gaufres. Qualité irréprochable, les abeilles l\'acceptent parfaitement. Je recommande vivement.'
        }
      ]
    },

    /* ── GELÉE ROYALE ────────────────────────────────────────── */
    {
      id:            'gr-001',
      sku:           'GR-001',
      name:          'Gelée Royale Fraîche 30g',
      slug:          'gelee-royale-fraiche-30g',
      category:      'gelee-royale',
      subcategory:   'fraiche',
      origin:        'France',
      description:   'Secrétée par les glandes hypopharyngiennes des abeilles nourricières, la gelée royale est la substance exclusive destinée à l\'alimentation de la reine tout au long de sa vie. Récoltée à la main dans nos ruchers français, notre gelée royale fraîche est conditionnée immédiatement après récolte et maintenue en chaîne du froid continue jusqu\'à votre domicile. Elle titre minimum 4,5 % de 10-HDA (acide 10-hydroxy-2-décénoïque), indicateur de sa qualité et de sa fraîcheur.\n\nD\'une consistance crémeuse et nacrée, légèrement acide et amère, la gelée royale fraîche dévoile des arômes complexes et une saveur unique. Elle constitue l\'un des produits apicoles les plus concentrés en nutriments : protéines royalsines (protéines spécifiques à la gelée royale), acides aminés essentiels, vitamines B5 et B6, acides gras singuliers dont le 10-HDA exclusif.\n\nConservation : au réfrigérateur (2-4°C) pendant 6 mois, au congélateur 12 à 18 mois. Dose conseillée : 0,5 à 1 g par jour, à jeun, sous la langue ou mélangé à du miel pour en faciliter la consommation. Idéalement en cure de 3 semaines au printemps et en automne.',
      shortDescription: 'Gelée royale fraîche de France, titre min. 4,5 % en 10-HDA, conditionnée en froid.',
      price_ht:      20.83,
      price_ttc:     25.00,
      tva_rate:      20,
      weight_g:      50,
      stock:         20,
      minStock:      3,
      images:        ['images/gelee-royale-fraiche.jpg'],
      tags:          ['premium', 'fraiche', 'vitalite', 'immunite'],
      featured:      true,
      rating:        4.9,
      reviews_count: 52,
      reviews: [
        {
          author: 'Dominique B.',
          date:   '2026-05-06',
          rating: 5,
          comment: 'Gelée royale d\'une qualité exceptionnelle. L\'emballage maintient bien le froid à la livraison. Je fais une cure chaque printemps et je me sens nettement plus en forme.'
        },
        {
          author: 'Christine V.',
          date:   '2026-04-16',
          rating: 5,
          comment: 'Produit premium à prix raisonnable. La fraîcheur est bien préservée, la consistance est parfaite. Je mélange avec du miel d\'acacia et c\'est délicieux.'
        },
        {
          author: 'Gérard L.',
          date:   '2026-03-01',
          rating: 5,
          comment: 'J\'achète ma gelée royale ici depuis deux ans. La qualité est constante, le titrage en 10-HDA est annoncé et respecté. Produit sérieux, je recommande.'
        }
      ]
    },

    {
      id:            'gr-002',
      sku:           'GR-002',
      name:          'Gelée Royale Lyophilisée 10g',
      slug:          'gelee-royale-lyophilisee-10g',
      category:      'gelee-royale',
      subcategory:   'lyophilisee',
      origin:        'France',
      description:   'La lyophilisation (dessiccation par congélation sous vide) est la méthode de conservation la plus douce et la plus efficace pour préserver l\'intégralité des composants actifs de la gelée royale. Contrairement au séchage par chaleur, cette technique à froid maintient les protéines, enzymes et acides gras dans leur état natif. 10 g de gelée lyophilisée correspondent à l\'activité biologique d\'environ 60 g de gelée fraîche.\n\nProposée en gélules ou en poudre selon les lots disponibles, notre gelée lyophilisée de France est dosée à 10 g par conditionnement, soit environ 30 à 60 jours de cure selon le dosage retenu. Sa conservation à température ambiante pendant 2 à 3 ans (à l\'abri de la chaleur et de la lumière) en fait l\'alternative idéale pour les utilisateurs souhaitant ne pas dépendre de la chaîne du froid.\n\nLa biodisponibilité de la gelée lyophilisée est comparable à celle de la gelée fraîche selon les études disponibles. Pour des personnes n\'appréciant pas la saveur caractéristique de la gelée fraîche, les gélules représentent un mode d\'administration beaucoup plus commode sans aucun compromis sur l\'efficacité.',
      shortDescription: 'Gelée royale lyophilisée, longue conservation, biodisponibilité équivalente à la fraîche.',
      price_ht:      29.17,
      price_ttc:     35.00,
      tva_rate:      20,
      weight_g:      30,
      stock:         15,
      minStock:      3,
      images:        ['images/gelee-royale-lyophilisee.jpg'],
      tags:          ['premium', 'conservation', 'lyophilise', 'vitalite'],
      featured:      false,
      rating:        4.8,
      reviews_count: 38,
      reviews: [
        {
          author: 'Stéphane R.',
          date:   '2026-05-03',
          rating: 5,
          comment: 'Produit de très haute qualité. La lyophilisation préserve parfaitement les propriétés. Pratique car pas besoin de réfrigérateur. Je recommande vivement.'
        },
        {
          author: 'Laetitia M.',
          date:   '2026-04-12',
          rating: 4,
          comment: 'Bonne alternative à la gelée fraîche pour ceux qui voyagent souvent. Qualité au rendez-vous. Un peu cher mais justifié pour ce type de produit premium.'
        },
        {
          author: 'Alain G.',
          date:   '2026-03-25',
          rating: 5,
          comment: 'Je prends une cure de 10-HDA chaque automne et cette gelée lyophilisée est parfaite. Conservation longue durée, efficacité prouvée. Très satisfait.'
        }
      ]
    },

    /* ── ÉPICERIE FINE ──────────────────────────────────────── */
    {
      id:            'ef-001',
      sku:           'EF-001',
      name:          'Pain d\'Épices Artisanal au Miel de Normandie',
      slug:          'pain-epices-artisanal-miel-normandie',
      category:      'epicerie-fine',
      subcategory:   'biscuiterie',
      origin:        'Caen, Normandie',
      description:   'Cuit au four selon une recette traditionnelle normande, notre pain d\'épices marie le miel toutes fleurs de nos ruchers à un subtil mélange de cannelle, anis et muscade. Sa mie moelleuse et son parfum enveloppant en font une gourmandise idéale au petit-déjeuner ou au goûter.\n\nFabriqué en petite série dans notre atelier de Caen, sans colorants ni conservateurs. Pain individuel de 350 g, parfait à offrir ou à savourer en famille.',
      shortDescription: 'Pain d\'épices moelleux à la cannelle, cuit au miel toutes fleurs dans notre atelier de Caen.',
      price_ht:      6.64,
      price_ttc:     7.00,
      tva_rate:      5.5,
      weight_g:      350,
      stock:         28,
      minStock:      5,
      images:        ['images/pain-epices-miel.jpg'],
      tags:          ['epicerie-fine', 'gourmandise', 'normandie', 'biscuiterie', 'artisanal'],
      featured:      true,
      rating:        4.7,
      reviews_count: 19,
      reviews: [
        {
          author: 'Brigitte F.',
          date:   '2026-05-02',
          rating: 5,
          comment: 'Exactement comme celui de ma grand-mère ! Moelleux, parfumé, pas trop sucré. On sent vraiment le bon miel et les épices.'
        },
        {
          author: 'Thierry N.',
          date:   '2026-04-18',
          rating: 4,
          comment: 'Très bon pain d\'épices, texture parfaite au petit-déjeuner avec un peu de beurre salé. Je recommande.'
        }
      ]
    },

    {
      id:            'ef-002',
      sku:           'EF-002',
      name:          'Caramels Tendres au Beurre Salé et Miel',
      slug:          'caramels-beurre-sale-miel',
      category:      'epicerie-fine',
      subcategory:   'confiserie',
      origin:        'Caen, Normandie',
      description:   'Découvrez l\'alliance parfaite entre la richesse du beurre salé de Normandie et la douceur de notre miel de fleurs sauvages. Ces caramels tendres sont confectionnés à la main, en petites bassines de cuivre, pour une texture fondante qui célèbre les saveurs traditionnelles de la région.\n\nEmballés un à un dans du papier ciré, ils accompagnent à merveille un café ou se glissent dans une corbeille gourmande aux côtés de nos coffrets de miels. Sachet de 200 g, environ 25 caramels.',
      shortDescription: 'Caramels artisanaux fondants, beurre salé de Normandie et miel de fleurs sauvages.',
      price_ht:      7.58,
      price_ttc:     8.00,
      tva_rate:      5.5,
      weight_g:      200,
      stock:         40,
      minStock:      8,
      images:        ['images/caramels-miel.jpg'],
      tags:          ['epicerie-fine', 'confiserie', 'normandie', 'beurre-sale', 'artisanal'],
      featured:      true,
      rating:        4.9,
      reviews_count: 26,
      reviews: [
        {
          author: 'Sophie D.',
          date:   '2026-05-14',
          rating: 5,
          comment: 'Un délice absolu ! Le mariage beurre salé / miel est parfait, ni trop sucré ni trop salé. Je recommande vivement.'
        },
        {
          author: 'Marc L.',
          date:   '2026-04-30',
          rating: 4,
          comment: 'Très gourmand et bien équilibré. Le sachet est vite terminé tellement c\'est bon !'
        }
      ]
    },

    {
      id:            'ef-003',
      sku:           'EF-003',
      name:          'Nougat Tendre au Miel et Noisettes',
      slug:          'nougat-tendre-miel-noisettes',
      category:      'epicerie-fine',
      subcategory:   'confiserie',
      origin:        'Caen, Normandie',
      description:   'Notre nougat tendre marie le miel d\'acacia de nos ruchers à des noisettes torréfiées, pour une confiserie fondante au parfum délicat. Sa texture souple et son croquant chaleureux en font une gourmandise raffinée, élaborée selon des méthodes artisanales dans notre atelier de Caen.\n\nChaque barre est coupée et emballée à la main, sans gélatine ni arôme artificiel. Le compagnon idéal d\'une pause gourmande ou d\'un coffret cadeau aux côtés de nos miels et autres douceurs d\'épicerie fine. Barre de 150 g.',
      shortDescription: 'Nougat tendre artisanal au miel d\'acacia et noisettes torréfiées, coupé et emballé à la main.',
      price_ht:      5.69,
      price_ttc:     6.00,
      tva_rate:      5.5,
      weight_g:      150,
      stock:         35,
      minStock:      6,
      images:        ['images/nougat-miel.jpg'],
      tags:          ['epicerie-fine', 'confiserie', 'normandie', 'noisettes', 'artisanal'],
      featured:      false,
      rating:        4.7,
      reviews_count: 12,
      reviews: [
        {
          author: 'Émilie R.',
          date:   '2026-05-09',
          rating: 5,
          comment: 'Un goût incroyable, on sent vraiment la qualité du miel d\'acacia. Les noisettes sont bien torréfiées. Un vrai régal.'
        },
        {
          author: 'Thomas V.',
          date:   '2026-04-02',
          rating: 5,
          comment: 'Parfait pour accompagner un café en fin de repas. Le mélange miel-noisettes est sublime et raffiné.'
        }
      ]
    },

    {
      id:            'ef-004',
      sku:           'EF-004',
      name:          'Terrine de Campagne au Calvados et Miel',
      slug:          'terrine-campagne-calvados-miel',
      category:      'epicerie-fine',
      subcategory:   'charcuterie',
      origin:        'Pays d\'Auge, Normandie',
      description:   'Préparée selon une recette de campagne traditionnelle, cette terrine de porc fermier est relevée d\'un trait de Calvados et adoucie par une pointe de miel toutes fleurs, qui équilibre subtilement le caractère de l\'eau-de-vie normande.\n\nMijotée lentement et conditionnée en bocal verre par un artisan charcutier du Pays d\'Auge, elle se déguste à la cuillère, sur du pain de campagne grillé ou accompagnée de cornichons et d\'un chutney de pommes. Bocal de 180 g.',
      shortDescription: 'Terrine de campagne fermière au Calvados, relevée d\'une pointe de miel toutes fleurs.',
      price_ht:      9.00,
      price_ttc:     9.50,
      tva_rate:      5.5,
      weight_g:      180,
      stock:         22,
      minStock:      5,
      images:        ['images/terrine-calvados-miel.jpg'],
      tags:          ['epicerie-fine', 'charcuterie', 'normandie', 'calvados', 'artisanal'],
      featured:      false,
      rating:        4.6,
      reviews_count: 9,
      reviews: [
        {
          author: 'Patrick M.',
          date:   '2026-05-06',
          rating: 5,
          comment: 'Une terrine généreuse, bien relevée, on sent le Calvados sans qu\'il prenne le dessus. Le miel apporte une rondeur très agréable.'
        },
        {
          author: 'Nathalie G.',
          date:   '2026-04-11',
          rating: 4,
          comment: 'Parfaite à l\'apéritif sur des toasts. Texture rustique comme on l\'aime, bon équilibre des saveurs.'
        }
      ]
    },

    {
      id:            'ef-005',
      sku:           'EF-005',
      name:          'Camembert de Normandie AOP au Lait Cru',
      slug:          'camembert-normandie-aop-lait-cru',
      category:      'epicerie-fine',
      subcategory:   'fromage',
      origin:        'Pays d\'Auge, Normandie',
      description:   'Sélectionné chez un fromager affineur du Pays d\'Auge, ce camembert de Normandie AOP au lait cru est moulé à la louche selon la méthode traditionnelle, puis affiné en cave plusieurs semaines pour développer tout son caractère et sa croûte fleurie typique.\n\nCrémeux à cœur et franc en bouche, il se déguste tel quel, tiède au four ou en plateau de fromages normands, accompagné d\'une compotée de pommes ou de notre confit d\'oignons au miel et cidre. Boîte bois de 250 g.',
      shortDescription: 'Camembert de Normandie AOP au lait cru, moulé à la louche et affiné en cave selon la tradition.',
      price_ht:      8.06,
      price_ttc:     8.50,
      tva_rate:      5.5,
      weight_g:      250,
      stock:         18,
      minStock:      4,
      images:        ['images/camembert-aop-lait-cru.jpg'],
      tags:          ['epicerie-fine', 'fromage', 'normandie', 'camembert', 'aop', 'lait-cru'],
      featured:      true,
      rating:        4.8,
      reviews_count: 15,
      reviews: [
        {
          author: 'Olivier R.',
          date:   '2026-05-20',
          rating: 5,
          comment: 'Un camembert au lait cru remarquable, fondant et bien affiné. On sent le vrai savoir-faire normand. Excellent en plateau.'
        },
        {
          author: 'Christine B.',
          date:   '2026-04-27',
          rating: 5,
          comment: 'Servi tiède au four avec un peu de pain de campagne, c\'est un régal. Goût franc et authentique.'
        }
      ]
    },

    {
      id:            'ef-006',
      sku:           'EF-006',
      name:          'Confit d\'Oignons au Miel et Cidre de Normandie',
      slug:          'confit-oignons-miel-cidre-normandie',
      category:      'epicerie-fine',
      subcategory:   'conserve',
      origin:        'Pays d\'Auge, Normandie',
      description:   'Mijoté longuement avec du cidre brut et notre miel toutes fleurs, ce confit d\'oignons développe une saveur douce-amère caractéristique, idéale pour accompagner foies gras, terrines, fromages affinés ou viandes grillées.\n\nPréparé en petites cuvées par un artisan conservateur du Pays d\'Auge, sans colorant ni conservateur ajouté. Pot de 100 g, à conserver au réfrigérateur après ouverture.',
      shortDescription: 'Confit d\'oignons mijoté au cidre brut et au miel toutes fleurs, parfait avec terrines et fromages.',
      price_ht:      6.16,
      price_ttc:     6.50,
      tva_rate:      5.5,
      weight_g:      100,
      stock:         30,
      minStock:      6,
      images:        ['images/confit-oignons-miel-cidre.jpg'],
      tags:          ['epicerie-fine', 'conserve', 'condiment', 'normandie', 'cidre', 'artisanal'],
      featured:      false,
      rating:        4.7,
      reviews_count: 11,
      reviews: [
        {
          author: 'Isabelle T.',
          date:   '2026-05-11',
          rating: 5,
          comment: 'Indispensable avec une terrine ou un bon camembert. L\'équilibre cidre-miel est très réussi, ni trop sucré ni trop acide.'
        },
        {
          author: 'Vincent A.',
          date:   '2026-04-15',
          rating: 4,
          comment: 'Très bon confit, parfait pour twister un plateau de fromages. Le pot est un peu petit, j\'en recommanderai plusieurs.'
        }
      ]
    },

    {
      id:            'ef-007',
      sku:           'EF-007',
      name:          'Moutarde à l\'Ancienne de Normandie au Cidre',
      slug:          'moutarde-ancienne-normandie-cidre',
      category:      'epicerie-fine',
      subcategory:   'condiment',
      origin:        'Vallée d\'Auge, Normandie',
      description:   'Une moutarde à l\'ancienne, aux graines entières légèrement concassées et relevées au cidre brut de Normandie, pour un caractère franc et légèrement acidulé. Élaborée en petites cuvées dans un atelier de la vallée d\'Auge selon une recette traditionnelle.\n\nElle accompagne aussi bien une viande grillée qu\'une planche de charcuterie ou un fromage affiné, et se marie particulièrement bien avec notre terrine au Calvados et notre camembert AOP au lait cru. Pot en grès de 200 g.',
      shortDescription: 'Moutarde à l\'ancienne aux graines entières, relevée au cidre brut de Normandie.',
      price_ht:      5.21,
      price_ttc:     5.50,
      tva_rate:      5.5,
      weight_g:      200,
      stock:         34,
      minStock:      6,
      images:        ['images/moutarde-ancienne-cidre.jpg'],
      tags:          ['epicerie-fine', 'condiment', 'normandie', 'moutarde', 'cidre', 'artisanal'],
      featured:      false,
      rating:        4.6,
      reviews_count: 8,
      reviews: [
        {
          author: 'Frédéric H.',
          date:   '2026-05-08',
          rating: 5,
          comment: 'Belle moutarde artisanale, le cidre apporte une petite touche acidulée originale. Parfaite avec une viande froide.'
        },
        {
          author: 'Anne-Laure C.',
          date:   '2026-04-19',
          rating: 4,
          comment: 'Très bonne moutarde, du caractère sans être trop forte. Idéale en vinaigrette aussi.'
        }
      ]
    },

    {
      id:            'ef-008',
      sku:           'EF-008',
      name:          'Pommeau de Normandie AOC au Miel d\'Acacia',
      slug:          'pommeau-normandie-aoc-miel-acacia',
      category:      'epicerie-fine',
      subcategory:   'boisson',
      origin:        'Pays d\'Auge, Normandie',
      description:   'Cet apéritif traditionnel normand associe jus de pommes frais et Calvados vieilli en fût de chêne, le tout délicatement arrondi par une touche de notre miel d\'acacia. Élaboré par un producteur du Pays d\'Auge selon l\'appellation Pommeau de Normandie AOC.\n\nIl se déguste frais à l\'apéritif, en accompagnement d\'un foie gras ou d\'un dessert aux pommes. Bouteille de 70 cl, 17% vol. La vente d\'alcool est réservée aux personnes majeures (interdite aux mineurs de moins de 18 ans).',
      shortDescription: 'Apéritif traditionnel normand, jus de pommes et Calvados arrondis d\'une touche de miel d\'acacia.',
      price_ht:      14.08,
      price_ttc:     16.90,
      tva_rate:      20,
      weight_g:      1300,
      stock:         16,
      minStock:      4,
      images:        ['images/pommeau-normandie-miel.jpg'],
      tags:          ['epicerie-fine', 'boisson', 'normandie', 'pommeau', 'aoc', 'alcool'],
      featured:      false,
      rating:        4.8,
      reviews_count: 7,
      reviews: [
        {
          author: 'Jean-Marc D.',
          date:   '2026-05-17',
          rating: 5,
          comment: 'Un Pommeau d\'une grande finesse, la touche de miel d\'acacia se sent à peine mais change tout. Parfait à l\'apéritif avec du foie gras.'
        },
        {
          author: 'Sylvie P.',
          date:   '2026-04-23',
          rating: 5,
          comment: 'Très belle bouteille, goût rond et harmonieux. Un bel ambassadeur du terroir normand.'
        }
      ]
    },

    {
      id:            'ef-009',
      sku:           'EF-009',
      name:          'Velouté de Courge Butternut aux Châtaignes',
      slug:          'veloute-courge-butternut-chataignes',
      category:      'epicerie-fine',
      subcategory:   'plat-prepare',
      origin:        'Caen, Normandie',
      description:   'Un velouté de courge butternut, mijoté avec des légumes de saison et des châtaignes pour une texture onctueuse et un parfum automnal réconfortant. Préparé en petites cuvées par un traiteur normand, prêt à réchauffer en quelques minutes.\n\nSe déguste tel quel ou agrémenté d\'un trait d\'huile et de graines torréfiées. Sans conservateur, à conserver au réfrigérateur. Brique de 50 cl, soit environ 2 portions.',
      shortDescription: 'Velouté de courge butternut aux châtaignes et légumes de saison, onctueux et réconfortant.',
      price_ht:      5.50,
      price_ttc:     5.80,
      tva_rate:      5.5,
      weight_g:      500,
      stock:         26,
      minStock:      6,
      images:        ['images/veloute-courge-chataignes.jpg'],
      tags:          ['epicerie-fine', 'plat-prepare', 'normandie', 'soupe', 'legumes', 'artisanal'],
      featured:      false,
      rating:        4.5,
      reviews_count: 6,
      reviews: [
        {
          author: 'Camille B.',
          date:   '2026-05-03',
          rating: 5,
          comment: 'Onctueux et bien équilibré, les châtaignes apportent une belle rondeur. Pratique pour un dîner rapide et de saison.'
        },
        {
          author: 'Hugues L.',
          date:   '2026-04-09',
          rating: 4,
          comment: 'Bon velouté, texture veloutée comme son nom l\'indique. Bien parfumé, on sent les châtaignes.'
        }
      ]
    },

    {
      id:            'ef-010',
      sku:           'EF-010',
      name:          'Confit de Canard au Miel et Calvados',
      slug:          'confit-canard-miel-calvados',
      category:      'epicerie-fine',
      subcategory:   'plat-prepare',
      origin:        'Pays d\'Auge, Normandie',
      description:   'Deux cuisses de canard confites lentement dans leur graisse, puis nappées d\'une réduction de miel toutes fleurs et de Calvados qui leur donne une note sucrée-boisée typiquement normande. Préparées par un artisan traiteur du Pays d\'Auge à partir de canards fermiers.\n\nÀ réchauffer simplement au four ou à la poêle, peau contre peau, pour retrouver tout son croustillant. Idéal avec une compotée de pommes ou nos pommes de terre sautées. Sous vide, 2 cuisses, environ 400 g.',
      shortDescription: 'Cuisses de canard confites, nappées d\'une réduction de miel toutes fleurs et de Calvados.',
      price_ht:      14.13,
      price_ttc:     14.90,
      tva_rate:      5.5,
      weight_g:      400,
      stock:         14,
      minStock:      4,
      images:        ['images/confit-canard-miel-calvados.jpg'],
      tags:          ['epicerie-fine', 'plat-prepare', 'normandie', 'confit', 'canard', 'calvados', 'artisanal'],
      featured:      true,
      rating:        4.9,
      reviews_count: 10,
      reviews: [
        {
          author: 'Bernard S.',
          date:   '2026-05-21',
          rating: 5,
          comment: 'Excellent ! La réduction miel-Calvados donne un vrai supplément d\'âme au confit classique. Cuisses bien charnues, peau croustillante après passage au four.'
        },
        {
          author: 'Aurélie M.',
          date:   '2026-04-26',
          rating: 5,
          comment: 'Un plat du dimanche tout trouvé, simple à réchauffer et très savoureux. Le mariage avec une compotée de pommes est parfait.'
        }
      ]
    },

    {
      id:            'ef-011',
      sku:           'EF-011',
      name:          'Cidre Brut Fermier du Pays d\'Auge',
      slug:          'cidre-brut-fermier-pays-auge',
      category:      'epicerie-fine',
      subcategory:   'boisson',
      origin:        'Pays d\'Auge, Normandie',
      description:   'Un cidre brut fermier élaboré à partir de pommes à cidre traditionnelles du Pays d\'Auge, pressées et fermentées lentement en méthode artisanale. Sec et pétillant, il révèle un bel équilibre entre fraîcheur et caractère fruité.\n\nÀ servir bien frais à l\'apéritif, avec des galettes, des fruits de mer ou un plateau de fromages normands. Bouteille de 75 cl, 4,5% vol. La vente d\'alcool est réservée aux personnes majeures.',
      shortDescription: 'Cidre brut fermier du Pays d\'Auge, sec et pétillant, élaboré en méthode artisanale.',
      price_ht:      5.75,
      price_ttc:     6.90,
      tva_rate:      20,
      weight_g:      1100,
      stock:         24,
      minStock:      6,
      images:        ['images/cidre-brut-fermier.jpg'],
      tags:          ['epicerie-fine', 'boisson', 'normandie', 'cidre', 'fermier', 'alcool'],
      featured:      false,
      rating:        4.6,
      reviews_count: 9,
      reviews: [
        {
          author: 'Laurent F.',
          date:   '2026-05-12',
          rating: 5,
          comment: 'Un cidre brut bien sec, fruité et pétillant comme on l\'aime. Parfait à l\'apéritif avec des galettes de sarrasin.'
        },
        {
          author: 'Mathilde V.',
          date:   '2026-04-21',
          rating: 4,
          comment: 'Très bon cidre fermier, on sent le travail artisanal. Idéal avec un plateau de fromages.'
        }
      ]
    },

    {
      id:            'ef-012',
      sku:           'EF-012',
      name:          'Rillettes de Porc Fermier du Cotentin',
      slug:          'rillettes-porc-fermier-cotentin',
      category:      'epicerie-fine',
      subcategory:   'charcuterie',
      origin:        'Cotentin, Normandie',
      description:   'Des rillettes de porc fermier, mijotées longuement et effilochées à la main selon une recette traditionnelle du Cotentin, simplement relevées de sel, poivre et aromates. Une charcuterie généreuse et fondante, fidèle au goût authentique du cochon élevé en plein air.\n\nÀ tartiner sur du pain de campagne grillé, à l\'apéritif ou en entrée avec des cornichons et un peu de moutarde à l\'ancienne. Pot de 200 g.',
      shortDescription: 'Rillettes de porc fermier du Cotentin, mijotées longuement et effilochées à la main.',
      price_ht:      6.82,
      price_ttc:     7.20,
      tva_rate:      5.5,
      weight_g:      200,
      stock:         28,
      minStock:      6,
      images:        ['images/rillettes-porc-cotentin.jpg'],
      tags:          ['epicerie-fine', 'charcuterie', 'normandie', 'rillettes', 'cotentin', 'artisanal'],
      featured:      false,
      rating:        4.7,
      reviews_count: 13,
      reviews: [
        {
          author: 'Didier C.',
          date:   '2026-05-15',
          rating: 5,
          comment: 'Des rillettes goûteuses et bien fondantes, on sent que le porc est de qualité. Parfaites à l\'apéritif sur du pain grillé.'
        },
        {
          author: 'Valérie N.',
          date:   '2026-04-24',
          rating: 4,
          comment: 'Très bon produit, simple et authentique. Juste assez salé, comme à la ferme.'
        }
      ]
    },

    {
      id:            'ef-013',
      sku:           'EF-013',
      name:          'Sablés Normands au Beurre de Baratte',
      slug:          'sables-normands-beurre-baratte',
      category:      'epicerie-fine',
      subcategory:   'biscuiterie',
      origin:        'Caen, Normandie',
      description:   'Des sablés croustillants et fondants, préparés selon une recette traditionnelle normande à base de beurre de baratte AOP Isigny et de farine locale. Leur goût franc de bon beurre en fait un grand classique de la biscuiterie régionale.\n\nCuits au four dans notre atelier de Caen, sans colorants ni arômes artificiels. Idéals au goûter, avec un café ou en accompagnement d\'une compotée de fruits. Boîte métal de 300 g.',
      shortDescription: 'Sablés croustillants au beurre de baratte AOP Isigny, recette traditionnelle normande.',
      price_ht:      5.21,
      price_ttc:     5.50,
      tva_rate:      5.5,
      weight_g:      300,
      stock:         32,
      minStock:      6,
      images:        ['images/sables-beurre-baratte.jpg'],
      tags:          ['epicerie-fine', 'biscuiterie', 'normandie', 'sables', 'beurre', 'artisanal'],
      featured:      false,
      rating:        4.8,
      reviews_count: 17,
      reviews: [
        {
          author: 'Geneviève L.',
          date:   '2026-05-19',
          rating: 5,
          comment: 'Le vrai goût du beurre normand, croustillants à l\'extérieur et fondants à l\'intérieur. On ne s\'arrête plus !'
        },
        {
          author: 'Pascal R.',
          date:   '2026-04-13',
          rating: 5,
          comment: 'Excellents sablés, simples et bien faits. La boîte métal est un joli cadeau à offrir.'
        }
      ]
    },

    {
      id:            'ef-014',
      sku:           'EF-014',
      name:          'Rillettes de Maquereau Fumé de la Baie de Seine',
      slug:          'rillettes-maquereau-fume-baie-seine',
      category:      'epicerie-fine',
      subcategory:   'produits-mer',
      origin:        'Baie de Seine, Normandie',
      description:   'Des rillettes fines à base de maquereau fumé pêché en Baie de Seine, mixé avec un fromage frais et des herbes pour une texture onctueuse et un parfum iodé délicat. Préparées par un artisan fumeur de la côte normande, dans la pure tradition des produits de la mer.\n\nÀ tartiner sur des toasts ou du pain de campagne, à l\'apéritif ou en entrée avec une salade de jeunes pousses et un trait de citron. Pot de 100 g.',
      shortDescription: 'Rillettes onctueuses de maquereau fumé de la Baie de Seine, parfum iodé et délicat.',
      price_ht:      6.54,
      price_ttc:     6.90,
      tva_rate:      5.5,
      weight_g:      100,
      stock:         20,
      minStock:      5,
      images:        ['images/rillettes-maquereau-fume.jpg'],
      tags:          ['epicerie-fine', 'produits-mer', 'normandie', 'maquereau', 'fume', 'artisanal'],
      featured:      false,
      rating:        4.6,
      reviews_count: 7,
      reviews: [
        {
          author: 'Yann K.',
          date:   '2026-05-07',
          rating: 5,
          comment: 'Très bonnes rillettes, le fumage est subtil et bien dosé. Parfaites à l\'apéritif sur des toasts grillés.'
        },
        {
          author: 'Florence J.',
          date:   '2026-04-14',
          rating: 4,
          comment: 'Texture fine et goût iodé agréable, pas trop fort. Une bonne découverte pour varier des rillettes de viande.'
        }
      ]
    },

    {
      id:            'ef-015',
      sku:           'EF-015',
      name:          'Confiture de Pommes et Poires du Verger Normand',
      slug:          'confiture-pommes-poires-verger-normand',
      category:      'epicerie-fine',
      subcategory:   'confiture',
      origin:        'Pays d\'Auge, Normandie',
      description:   'Une confiture gourmande préparée en chaudron de cuivre à partir de pommes et de poires cueillies à maturité dans les vergers du Pays d\'Auge, cuites lentement avec une touche de vanille pour une texture fondante et peu sucrée.\n\nÀ savourer au petit-déjeuner sur une tartine de pain de campagne, ou pour twister un fromage blanc, un yaourt nature ou une part de far breton. Pot de 250 g.',
      shortDescription: 'Confiture de pommes et poires des vergers normands, cuite au chaudron avec une touche de vanille.',
      price_ht:      4.93,
      price_ttc:     5.20,
      tva_rate:      5.5,
      weight_g:      250,
      stock:         36,
      minStock:      6,
      images:        ['images/confiture-pommes-poires.jpg'],
      tags:          ['epicerie-fine', 'confiture', 'normandie', 'pommes', 'poires', 'artisanal'],
      featured:      false,
      rating:        4.7,
      reviews_count: 14,
      reviews: [
        {
          author: 'Régine P.',
          date:   '2026-05-10',
          rating: 5,
          comment: 'Délicieuse confiture, peu sucrée et bien fruitée. La touche de vanille est subtile et agréable. Parfaite au petit-déjeuner.'
        },
        {
          author: 'Julien B.',
          date:   '2026-04-17',
          rating: 5,
          comment: 'On sent vraiment le fruit, ce n\'est pas écœurant comme certaines confitures du commerce. Très bon produit.'
        }
      ]
    },

    {
      id:            'ef-016',
      sku:           'EF-016',
      name:          'Palets de Chocolat Noir au Calvados',
      slug:          'palets-chocolat-noir-calvados',
      category:      'epicerie-fine',
      subcategory:   'chocolaterie',
      origin:        'Caen, Normandie',
      description:   'Des palets de chocolat noir 70% fourrés d\'une ganache parfumée au Calvados du Pays d\'Auge, pour une confiserie raffinée à la fois intense et subtilement boisée. Confectionnés à la main par un chocolatier de Caen, en petites séries.\n\nÀ déguster avec un café ou un thé, ou à offrir dans un coffret gourmand aux côtés de nos miels et confiseries. Boîte de 12 palets, 120 g. Contient des traces d\'alcool.',
      shortDescription: 'Palets de chocolat noir 70% fourrés d\'une ganache au Calvados, confectionnés à la main à Caen.',
      price_ht:      9.39,
      price_ttc:     9.90,
      tva_rate:      5.5,
      weight_g:      120,
      stock:         16,
      minStock:      4,
      images:        ['images/palets-chocolat-calvados.jpg'],
      tags:          ['epicerie-fine', 'chocolaterie', 'confiserie', 'normandie', 'chocolat', 'calvados', 'artisanal'],
      featured:      true,
      rating:        4.9,
      reviews_count: 11,
      reviews: [
        {
          author: 'Stéphanie O.',
          date:   '2026-05-23',
          rating: 5,
          comment: 'Sublimes ! Le chocolat noir est intense et la pointe de Calvados se marie à merveille avec la ganache. Un vrai produit de chocolatier.'
        },
        {
          author: 'Antoine D.',
          date:   '2026-04-29',
          rating: 5,
          comment: 'Très belle découverte, fin et bien équilibré. Parfait pour accompagner un café après le repas.'
        }
      ]
    },

    {
      id:            'ef-017',
      sku:           'EF-017',
      name:          'Foie Gras de Canard Entier du Pays d\'Auge',
      slug:          'foie-gras-canard-entier-pays-auge',
      category:      'epicerie-fine',
      subcategory:   'charcuterie',
      origin:        'Pays d\'Auge, Normandie',
      description:   'Un foie gras de canard entier, mi-cuit et assaisonné simplement au sel, au poivre et à une pointe de Calvados, préparé selon une recette artisanale par un producteur du Pays d\'Auge à partir de canards élevés en plein air.\n\nFondant et délicat, il se déguste sur un pain toasté légèrement sucré, accompagné d\'un chutney de pommes ou d\'une compotée de fruits. Idéal pour les repas de fête ou un plateau gourmand. Verrine de 130 g.',
      shortDescription: 'Foie gras de canard entier mi-cuit, assaisonné au sel, au poivre et à une pointe de Calvados.',
      price_ht:      21.71,
      price_ttc:     22.90,
      tva_rate:      5.5,
      weight_g:      130,
      stock:         12,
      minStock:      3,
      images:        ['images/foie-gras-canard-pays-auge.jpg'],
      tags:          ['epicerie-fine', 'charcuterie', 'normandie', 'foie-gras', 'calvados', 'artisanal'],
      featured:      true,
      rating:        4.9,
      reviews_count: 13,
      reviews: [
        {
          author: 'Gérard L.',
          date:   '2026-05-24',
          rating: 5,
          comment: 'Un foie gras remarquable, fondant et bien assaisonné. La pointe de Calvados se devine à peine, c\'est très élégant.'
        },
        {
          author: 'Martine F.',
          date:   '2026-05-01',
          rating: 5,
          comment: 'Servi pour les fêtes, il a fait l\'unanimité. Texture parfaite et goût raffiné, je recommande vivement.'
        }
      ]
    },

    {
      id:            'ef-018',
      sku:           'EF-018',
      name:          'Tapenade d\'Olives Noires au Pommeau de Normandie',
      slug:          'tapenade-olives-noires-pommeau',
      category:      'epicerie-fine',
      subcategory:   'condiment',
      origin:        'Caen, Normandie',
      description:   'Une tapenade d\'olives noires mixées avec câpres, anchois et huile d\'olive, relevée d\'un trait de Pommeau de Normandie qui lui apporte une rondeur fruitée surprenante. Préparée en petites cuvées dans notre atelier de Caen.\n\nÀ tartiner sur des toasts à l\'apéritif, à mélanger à des pâtes ou à utiliser pour relever une viande blanche ou un poisson grillé. Pot de 90 g.',
      shortDescription: 'Tapenade d\'olives noires relevée d\'un trait de Pommeau de Normandie, fruitée et originale.',
      price_ht:      5.59,
      price_ttc:     5.90,
      tva_rate:      5.5,
      weight_g:      90,
      stock:         24,
      minStock:      5,
      images:        ['images/tapenade-olives-pommeau.jpg'],
      tags:          ['epicerie-fine', 'condiment', 'normandie', 'tapenade', 'olives', 'pommeau', 'artisanal'],
      featured:      false,
      rating:        4.5,
      reviews_count: 6,
      reviews: [
        {
          author: 'Carole M.',
          date:   '2026-05-04',
          rating: 5,
          comment: 'Originale et bien équilibrée, le Pommeau apporte une touche fruitée inattendue qui change de la tapenade classique.'
        },
        {
          author: 'Denis R.',
          date:   '2026-04-08',
          rating: 4,
          comment: 'Bonne tapenade, parfumée sans être trop salée. Très bien à l\'apéritif sur des toasts.'
        }
      ]
    },

    {
      id:            'ef-019',
      sku:           'EF-019',
      name:          'Huile de Colza Vierge de Normandie',
      slug:          'huile-colza-vierge-normandie',
      category:      'epicerie-fine',
      subcategory:   'condiment',
      origin:        'Plaine de Caen, Normandie',
      description:   'Une huile de colza vierge, pressée à froid à partir de graines cultivées dans la plaine de Caen, au goût doux et légèrement noisetté. Conditionnée par un petit moulin artisanal qui perpétue un savoir-faire régional en perte de vitesse.\n\nIdéale en assaisonnement de salades, de légumes vapeur ou de poissons, elle révèle ses arômes à froid. À conserver à l\'abri de la lumière. Bouteille de 25 cl.',
      shortDescription: 'Huile de colza vierge pressée à froid dans la plaine de Caen, douce et légèrement noisettée.',
      price_ht:      7.11,
      price_ttc:     7.50,
      tva_rate:      5.5,
      weight_g:      230,
      stock:         20,
      minStock:      4,
      images:        ['images/huile-colza-vierge.jpg'],
      tags:          ['epicerie-fine', 'condiment', 'normandie', 'huile', 'colza', 'artisanal'],
      featured:      false,
      rating:        4.6,
      reviews_count: 5,
      reviews: [
        {
          author: 'Pauline E.',
          date:   '2026-04-30',
          rating: 5,
          comment: 'Très belle huile, goût doux et parfumé, parfaite pour assaisonner sans dominer les autres saveurs.'
        },
        {
          author: 'Rémi T.',
          date:   '2026-04-06',
          rating: 4,
          comment: 'Bonne découverte, légèrement noisettée. Idéale pour varier de l\'huile d\'olive habituelle.'
        }
      ]
    },

    {
      id:            'ef-020',
      sku:           'EF-020',
      name:          'Vinaigre de Cidre Artisanal aux Herbes de Normandie',
      slug:          'vinaigre-cidre-artisanal-herbes-normandie',
      category:      'epicerie-fine',
      subcategory:   'condiment',
      origin:        'Vallée d\'Auge, Normandie',
      description:   'Un vinaigre de cidre élaboré selon la méthode traditionnelle, infusé avec un bouquet d\'herbes aromatiques cultivées dans la vallée d\'Auge (thym, laurier, estragon). Son acidité douce et ses notes herbacées subliment vinaigrettes et marinades.\n\nÀ utiliser pour assaisonner crudités, salades composées ou déglacer une viande blanche. Élaboré et mis en bouteille par un artisan producteur de cidre du Calvados. Bouteille de 25 cl.',
      shortDescription: 'Vinaigre de cidre infusé aux herbes aromatiques, acidité douce et notes herbacées.',
      price_ht:      4.65,
      price_ttc:     4.90,
      tva_rate:      5.5,
      weight_g:      260,
      stock:         28,
      minStock:      6,
      images:        ['images/vinaigre-cidre-herbes.jpg'],
      tags:          ['epicerie-fine', 'condiment', 'normandie', 'vinaigre', 'cidre', 'herbes', 'artisanal'],
      featured:      false,
      rating:        4.5,
      reviews_count: 7,
      reviews: [
        {
          author: 'Solène A.',
          date:   '2026-04-20',
          rating: 5,
          comment: 'Très parfumé, les herbes se sentent vraiment. Il sublime une simple salade de saison.'
        },
        {
          author: 'Guillaume P.',
          date:   '2026-03-28',
          rating: 4,
          comment: 'Bon vinaigre, doux et aromatique. Parfait pour les vinaigrettes maison.'
        }
      ]
    },

    {
      id:            'ef-021',
      sku:           'EF-021',
      name:          'Crackers Apéritifs au Sarrasin et Graines',
      slug:          'crackers-aperitifs-sarrasin-graines',
      category:      'epicerie-fine',
      subcategory:   'biscuiterie',
      origin:        'Caen, Normandie',
      description:   'Des crackers fins et croustillants, à base de farine de sarrasin de Normandie et d\'un mélange de graines (tournesol, lin, sésame), légèrement salés. Cuits au four dans notre atelier de Caen, sans huile de palme ni arômes artificiels.\n\nParfaits à l\'apéritif avec une planche de fromages et charcuteries, une tapenade ou des rillettes. Sachet refermable de 100 g.',
      shortDescription: 'Crackers croustillants au sarrasin et graines, cuits au four dans notre atelier de Caen.',
      price_ht:      4.27,
      price_ttc:     4.50,
      tva_rate:      5.5,
      weight_g:      100,
      stock:         38,
      minStock:      8,
      images:        ['images/crackers-sarrasin-graines.jpg'],
      tags:          ['epicerie-fine', 'biscuiterie', 'normandie', 'crackers', 'sarrasin', 'apero', 'artisanal'],
      featured:      false,
      rating:        4.4,
      reviews_count: 9,
      reviews: [
        {
          author: 'Béatrice N.',
          date:   '2026-04-25',
          rating: 5,
          comment: 'Très croustillants et bien parfumés, parfaits avec les rillettes et le camembert. On ne peut plus s\'en passer à l\'apéro.'
        },
        {
          author: 'Nicolas G.',
          date:   '2026-03-31',
          rating: 4,
          comment: 'Bons crackers, texture agréable et pas trop salés. Le sachet se termine vite à plusieurs.'
        }
      ]
    },

    {
      id:            'ef-022',
      sku:           'EF-022',
      name:          'Infusion Bio Pomme et Verveine de Normandie',
      slug:          'infusion-bio-pomme-verveine-normandie',
      category:      'epicerie-fine',
      subcategory:   'infusion',
      origin:        'Pays d\'Auge, Normandie',
      description:   'Un mélange d\'infusion biologique associant morceaux de pommes séchées du Pays d\'Auge, verveine et un soupçon de fleur de tilleul, pour une boisson chaude douce et apaisante. Composé et conditionné par un artisan herboriste normand.\n\nÀ déguster en fin de journée ou avant le coucher, nature ou avec une cuillère de miel. Boîte de 20 sachets individuels biodégradables, 40 g.',
      shortDescription: 'Infusion bio aux pommes séchées et verveine du Pays d\'Auge, douce et apaisante.',
      price_ht:      6.54,
      price_ttc:     6.90,
      tva_rate:      5.5,
      weight_g:      40,
      stock:         30,
      minStock:      6,
      images:        ['images/infusion-pomme-verveine.jpg'],
      tags:          ['epicerie-fine', 'infusion', 'normandie', 'bio', 'pommes', 'verveine', 'artisanal'],
      featured:      false,
      rating:        4.6,
      reviews_count: 8,
      reviews: [
        {
          author: 'Claire V.',
          date:   '2026-04-28',
          rating: 5,
          comment: 'Très parfumée et apaisante, parfaite le soir. On sent vraiment la pomme, c\'est original et réconfortant.'
        },
        {
          author: 'Manon D.',
          date:   '2026-04-02',
          rating: 4,
          comment: 'Bonne infusion, douce et naturelle. J\'aime beaucoup l\'idée d\'y ajouter une cuillère de miel.'
        }
      ]
    },

    {
      id:            'ef-023',
      sku:           'EF-023',
      name:          'Café Torréfié Artisanal — Mélange Normandie',
      slug:          'cafe-torrefie-artisanal-melange-normandie',
      category:      'epicerie-fine',
      subcategory:   'cafe',
      origin:        'Caen, Normandie',
      description:   'Un mélange de cafés d\'origine (Brésil, Éthiopie, Colombie) torréfié artisanalement à Caen en petites quantités, pour un profil rond et équilibré, aux notes de fruits secs et de caramel. Moulu à la commande ou en grains selon votre préférence.\n\nÀ préparer en cafetière filtre, piston ou expresso. Conditionné dans un sachet à valve fraîcheur, sans additif. Paquet de 250 g.',
      shortDescription: 'Mélange de cafés d\'origine torréfié artisanalement à Caen, rond et équilibré.',
      price_ht:      8.44,
      price_ttc:     8.90,
      tva_rate:      5.5,
      weight_g:      250,
      stock:         22,
      minStock:      5,
      images:        ['images/cafe-melange-normandie.jpg'],
      tags:          ['epicerie-fine', 'cafe', 'normandie', 'torrefaction', 'artisanal'],
      featured:      false,
      rating:        4.7,
      reviews_count: 10,
      reviews: [
        {
          author: 'Sébastien O.',
          date:   '2026-05-02',
          rating: 5,
          comment: 'Excellent café, bien équilibré et pas amer. Les notes de caramel sont très agréables au réveil.'
        },
        {
          author: 'Lucie H.',
          date:   '2026-04-07',
          rating: 4,
          comment: 'Très bon mélange, parfumé et rond. La torréfaction artisanale se sent vraiment.'
        }
      ]
    },

    {
      id:            'ef-024',
      sku:           'EF-024',
      name:          'Tripes à la Mode de Caen, en Bocal',
      slug:          'tripes-mode-de-caen-bocal',
      category:      'epicerie-fine',
      subcategory:   'plat-prepare',
      origin:        'Caen, Normandie',
      description:   'Un grand classique de la gastronomie normande : des tripes mijotées plus de huit heures avec carottes, poireaux, oignons et un trait de Calvados, selon la recette traditionnelle de Caen. Préparées par un artisan traiteur et mises en bocal pour une dégustation à la maison.\n\nÀ réchauffer doucement à la casserole ou au four et à servir avec des pommes de terre vapeur. Bocal de 600 g, soit environ 2 portions généreuses.',
      shortDescription: 'Tripes à la mode de Caen, mijotées plus de huit heures avec légumes et Calvados.',
      price_ht:      7.49,
      price_ttc:     7.90,
      tva_rate:      5.5,
      weight_g:      600,
      stock:         15,
      minStock:      4,
      images:        ['images/tripes-mode-de-caen.jpg'],
      tags:          ['epicerie-fine', 'plat-prepare', 'normandie', 'tripes', 'caen', 'calvados', 'artisanal'],
      featured:      false,
      rating:        4.6,
      reviews_count: 9,
      reviews: [
        {
          author: 'Roger B.',
          date:   '2026-04-19',
          rating: 5,
          comment: 'Comme à la maison, mijotées juste comme il faut. Le Calvados apporte ce petit plus typiquement normand.'
        },
        {
          author: 'Joëlle M.',
          date:   '2026-03-26',
          rating: 4,
          comment: 'Très bon plat traditionnel, généreux et bien préparé. Parfait pour un dimanche d\'hiver.'
        }
      ]
    },

    {
      id:            'ef-025',
      sku:           'EF-025',
      name:          'Calissons aux Amandes et Pommes de Normandie',
      slug:          'calissons-amandes-pommes-normandie',
      category:      'epicerie-fine',
      subcategory:   'confiserie',
      origin:        'Caen, Normandie',
      description:   'Une revisite normande du calisson traditionnel : pâte d\'amandes et de pommes confites du Pays d\'Auge, glacée d\'un voile de sucre, pour une confiserie fondante au parfum fruité et délicat. Confectionnée à la main dans notre atelier de Caen.\n\nÀ déguster avec un café ou un thé, ou à offrir dans un coffret gourmand. Sans gluten. Boîte de 18 calissons, 200 g.',
      shortDescription: 'Calissons fondants à la pâte d\'amandes et pommes confites du Pays d\'Auge, sans gluten.',
      price_ht:      6.82,
      price_ttc:     7.20,
      tva_rate:      5.5,
      weight_g:      200,
      stock:         26,
      minStock:      5,
      images:        ['images/calissons-amandes-pommes.jpg'],
      tags:          ['epicerie-fine', 'confiserie', 'normandie', 'calissons', 'amandes', 'pommes', 'sans-gluten', 'artisanal'],
      featured:      false,
      rating:        4.7,
      reviews_count: 8,
      reviews: [
        {
          author: 'Véronique S.',
          date:   '2026-04-22',
          rating: 5,
          comment: 'Très originaux, le mariage amande-pomme fonctionne à merveille. Fondants et pas trop sucrés. Une belle découverte.'
        },
        {
          author: 'Philippe E.',
          date:   '2026-03-30',
          rating: 4,
          comment: 'Bons calissons, parfumés et fondants. Différents des calissons classiques, agréablement surpris.'
        }
      ]
    },

    {
      id:            'ef-026',
      sku:           'EF-026',
      name:          'Fruits Secs et Noisettes Caramélisés au Sucre Vergeoise',
      slug:          'fruits-secs-noisettes-caramelises-vergeoise',
      category:      'epicerie-fine',
      subcategory:   'confiserie',
      origin:        'Caen, Normandie',
      description:   'Un mélange gourmand de noisettes, amandes et raisins secs, enrobés d\'un caramel craquant à la vergeoise (sucre roux du Nord apprécié en Normandie), préparé en petites bassines de cuivre dans notre atelier de Caen.\n\nÀ grignoter à l\'apéritif, à parsemer sur un yaourt ou une salade de fruits, ou à offrir dans un sachet gourmand. Sachet refermable de 150 g.',
      shortDescription: 'Mélange de fruits secs et noisettes caramélisés à la vergeoise, craquant et gourmand.',
      price_ht:      6.16,
      price_ttc:     6.50,
      tva_rate:      5.5,
      weight_g:      150,
      stock:         32,
      minStock:      6,
      images:        ['images/fruits-secs-caramelises-vergeoise.jpg'],
      tags:          ['epicerie-fine', 'confiserie', 'normandie', 'fruits-secs', 'noisettes', 'caramel', 'artisanal'],
      featured:      false,
      rating:        4.6,
      reviews_count: 7,
      reviews: [
        {
          author: 'Agnès K.',
          date:   '2026-04-12',
          rating: 5,
          comment: 'Très gourmand, le caramel à la vergeoise est craquant et bien doré. Parfait à grignoter ou sur un dessert.'
        },
        {
          author: 'Maxime J.',
          date:   '2026-03-22',
          rating: 4,
          comment: 'Bon mélange, bien équilibré entre fruits secs et caramel. Le sachet ne fait pas long feu !'
        }
      ]
    },

    {
      id:            'ef-027',
      sku:           'EF-027',
      name:          'Pâté de Campagne au Cidre et Pommeau',
      slug:          'pate-campagne-cidre-pommeau',
      category:      'epicerie-fine',
      subcategory:   'charcuterie',
      origin:        'Cotentin, Normandie',
      description:   'Un pâté de campagne fermier, relevé d\'un trait de cidre brut et de Pommeau de Normandie, pour une charcuterie généreuse au goût franc et légèrement fruité. Préparé selon une recette traditionnelle par un artisan charcutier du Cotentin.\n\nÀ déguster à la tranche sur du pain de campagne, à l\'apéritif ou en entrée avec des cornichons et notre confit d\'oignons. Bocal de 190 g.',
      shortDescription: 'Pâté de campagne fermier relevé au cidre brut et au Pommeau de Normandie.',
      price_ht:      6.54,
      price_ttc:     6.90,
      tva_rate:      5.5,
      weight_g:      190,
      stock:         24,
      minStock:      5,
      images:        ['images/pate-campagne-cidre-pommeau.jpg'],
      tags:          ['epicerie-fine', 'charcuterie', 'normandie', 'pate', 'cidre', 'pommeau', 'artisanal'],
      featured:      false,
      rating:        4.6,
      reviews_count: 9,
      reviews: [
        {
          author: 'Michel V.',
          date:   '2026-04-16',
          rating: 5,
          comment: 'Très bon pâté, goûteux et bien équilibré. Le Pommeau apporte une note fruitée originale qui change agréablement.'
        },
        {
          author: 'Corinne D.',
          date:   '2026-03-24',
          rating: 4,
          comment: 'Pâté généreux et savoureux, parfait à l\'apéritif sur du pain de campagne grillé.'
        }
      ]
    },

    {
      id:            'ef-028',
      sku:           'EF-028',
      name:          'Bulots de la Baie de Granville en Bocal',
      slug:          'bulots-baie-granville-bocal',
      category:      'epicerie-fine',
      subcategory:   'produits-mer',
      origin:        'Baie de Granville, Normandie',
      description:   'Des bulots pêchés dans la baie de Granville, cuits au court-bouillon selon la tradition et conservés en bocal avec une marinade légère aux herbes et au citron, prêts à déguster. Préparés par un artisan conservateur du littoral normand.\n\nÀ savourer froids avec une mayonnaise maison, en salade ou à l\'apéritif sur des toasts. Bocal de 200 g égoutté.',
      shortDescription: 'Bulots de la baie de Granville cuits au court-bouillon et marinés aux herbes et au citron.',
      price_ht:      8.06,
      price_ttc:     8.50,
      tva_rate:      5.5,
      weight_g:      200,
      stock:         18,
      minStock:      4,
      images:        ['images/bulots-baie-granville.jpg'],
      tags:          ['epicerie-fine', 'produits-mer', 'normandie', 'bulots', 'granville', 'artisanal'],
      featured:      false,
      rating:        4.5,
      reviews_count: 6,
      reviews: [
        {
          author: 'Annick R.',
          date:   '2026-04-05',
          rating: 5,
          comment: 'Très bons bulots, bien cuits et la marinade au citron est agréable. Parfaits pour un apéritif les pieds dans le sable.'
        },
        {
          author: 'Hervé C.',
          date:   '2026-03-18',
          rating: 4,
          comment: 'Produit authentique et pratique, prêt à déguster. Bon goût iodé, fidèle à la tradition normande.'
        }
      ]
    },

    {
      id:            'ef-029',
      sku:           'EF-029',
      name:          'Chutney de Pommes au Gingembre et Cidre',
      slug:          'chutney-pommes-gingembre-cidre',
      category:      'epicerie-fine',
      subcategory:   'condiment',
      origin:        'Pays d\'Auge, Normandie',
      description:   'Un chutney de pommes mijoté avec du gingembre frais, des oignons et un trait de cidre brut, pour un condiment doux-épicé qui twiste agréablement charcuteries, fromages affinés et viandes blanches. Préparé en petites cuvées dans la vallée d\'Auge.\n\nÀ servir avec notre camembert AOP, notre terrine ou un plateau de fromages normands. Pot de 160 g.',
      shortDescription: 'Chutney de pommes au gingembre et cidre brut, doux-épicé, parfait avec fromages et charcuteries.',
      price_ht:      5.12,
      price_ttc:     5.40,
      tva_rate:      5.5,
      weight_g:      160,
      stock:         28,
      minStock:      6,
      images:        ['images/chutney-pommes-gingembre.jpg'],
      tags:          ['epicerie-fine', 'condiment', 'normandie', 'chutney', 'pommes', 'gingembre', 'artisanal'],
      featured:      false,
      rating:        4.6,
      reviews_count: 7,
      reviews: [
        {
          author: 'Sandrine L.',
          date:   '2026-03-29',
          rating: 5,
          comment: 'Très bon équilibre entre la douceur de la pomme et le piquant du gingembre. Parfait avec un fromage affiné.'
        },
        {
          author: 'Bruno F.',
          date:   '2026-03-14',
          rating: 4,
          comment: 'Chutney savoureux et original, twiste très bien une planche de charcuterie. À refaire !'
        }
      ]
    },

    {
      id:            'ef-030',
      sku:           'EF-030',
      name:          'Gâteau Breton-Normand au Beurre Salé et Pommes',
      slug:          'gateau-breton-normand-beurre-sale-pommes',
      category:      'epicerie-fine',
      subcategory:   'patisserie',
      origin:        'Caen, Normandie',
      description:   'Un gâteau moelleux inspiré du kouign-amann breton et du gâteau normand, généreusement garni de beurre salé et de fines lamelles de pommes du Pays d\'Auge, pour une pâtisserie fondante au caramel naturel. Cuit au four dans notre atelier de Caen.\n\nÀ déguster en dessert, au goûter avec un café ou une infusion, ou à offrir en cadeau gourmand. Sans colorants ni conservateurs. Gâteau individuel de 400 g.',
      shortDescription: 'Gâteau moelleux au beurre salé et lamelles de pommes du Pays d\'Auge, fondant et caramélisé.',
      price_ht:      11.27,
      price_ttc:     11.90,
      tva_rate:      5.5,
      weight_g:      400,
      stock:         14,
      minStock:      3,
      images:        ['images/gateau-breton-normand-beurre-sale.jpg'],
      tags:          ['epicerie-fine', 'patisserie', 'normandie', 'gateau', 'beurre-sale', 'pommes', 'artisanal'],
      featured:      true,
      rating:        4.8,
      reviews_count: 12,
      reviews: [
        {
          author: 'Dominique W.',
          date:   '2026-04-01',
          rating: 5,
          comment: 'Absolument délicieux, fondant et caramélisé juste comme il faut. Les pommes apportent une fraîcheur bienvenue. Un régal !'
        },
        {
          author: 'Élodie B.',
          date:   '2026-03-15',
          rating: 5,
          comment: 'Un gâteau généreux et gourmand, parfait pour un dessert convivial. Le mariage beurre salé-pommes est une réussite.'
        }
      ]
    },

    /* ── PRODUITS DE LA RUCHE — NORMANDIE ───────────────────── */
    {
      id:            'mn-001',
      sku:           'MN-001',
      name:          'Miel de Fleurs de Pommiers',
      slug:          'miel-fleurs-de-pommiers',
      category:      'miel',
      subcategory:   'mono-floral',
      origin:        'Pays d\'Auge, Normandie',
      description:   'Récolté au printemps dans les vergers du Pays d\'Auge au moment de la floraison des pommiers, ce miel rare et délicat capture l\'essence même du terroir normand. Les abeilles butinent les fleurs blanches et roses des pommiers à cidre pour composer un nectar léger, à la robe claire et dorée.\n\nSon goût subtil, aux notes fruitées et légèrement acidulées, rappelle discrètement le verger en fleurs. Une texture fine et onctueuse qui cristallise lentement, signe d\'un miel pur et non chauffé.\n\nUn miel de saison en quantité limitée, à savourer sur une tartine de pain de campagne ou pour parfumer délicatement un fromage normand. Pot de 250 g.',
      shortDescription: 'Miel rare et délicat, récolté au printemps dans les vergers à cidre du Pays d\'Auge.',
      price_ht:      11.37,
      price_ttc:     12.00,
      tva_rate:      5.5,
      weight_g:      250,
      stock:         22,
      minStock:      4,
      images:        ['images/miel-fleurs-pommiers.jpg'],
      tags:          ['local', 'normandie', 'verger', 'edition-limitee'],
      featured:      true,
      rating:        4.8,
      reviews_count: 15,
      reviews: [
        {
          author: 'Florence F.',
          date:   '2026-05-06',
          rating: 5,
          comment: 'Un miel délicat et original, on sent vraiment la fleur de pommier. Une belle découverte qui change des miels habituels.'
        },
        {
          author: 'Jean-Marc D.',
          date:   '2026-04-11',
          rating: 4,
          comment: 'Très bon miel, doux et parfumé. Quantité limitée donc je recommande de ne pas trop attendre pour commander.'
        }
      ]
    },

    {
      id:            'mn-002',
      sku:           'MN-002',
      name:          'Miel de Sarrasin de Normandie',
      slug:          'miel-sarrasin-normandie',
      category:      'miel',
      subcategory:   'mono-floral',
      origin:        'Cotentin, Normandie',
      description:   'Issu des champs de sarrasin du Cotentin, ce miel se distingue par sa couleur brun foncé et son caractère affirmé. Riche en minéraux et en antioxydants, il offre des arômes intenses, légèrement maltés et boisés, qui surprennent agréablement les amateurs de sensations fortes.\n\nSa texture épaisse et sa cristallisation rapide en grains fins en font un miel de caractère, traditionnellement apprécié dans les régions de l\'Ouest pour accompagner le pain d\'épices ou parfumer une marinade.\n\nUn miel robuste qui plaira à ceux qui recherchent une expérience gustative hors des sentiers battus. Pot de 500 g.',
      shortDescription: 'Miel brun et corsé aux notes maltées, récolté dans les champs de sarrasin du Cotentin.',
      price_ht:      9.52,
      price_ttc:     10.50,
      tva_rate:      5.5,
      weight_g:      500,
      stock:         30,
      minStock:      5,
      images:        ['images/miel-sarrasin.jpg'],
      tags:          ['local', 'normandie', 'cotentin', 'caractere'],
      featured:      false,
      rating:        4.6,
      reviews_count: 11,
      reviews: [
        {
          author: 'Régis P.',
          date:   '2026-03-30',
          rating: 5,
          comment: 'Un miel qui a du caractère ! Les notes maltées sont surprenantes au début puis on adore. Parfait avec du pain d\'épices.'
        },
        {
          author: 'Christine M.',
          date:   '2026-02-21',
          rating: 4,
          comment: 'Goût assez fort, à réserver aux amateurs de miels typés. Bonne qualité, cristallisation rapide comme attendu pour ce type de miel.'
        }
      ]
    }

  ]; // end products


  /* ================================================================
     CATEGORIES
  ================================================================ */

  var categories = [
    {
      id:          'miel',
      name:        'Miels',
      emoji:       '🍯',
      description: 'Miels mono-floraux et toutes fleurs'
    },
    {
      id:          'propolis',
      name:        'Propolis',
      emoji:       '🌿',
      description: 'Extraits et produits à base de propolis'
    },
    {
      id:          'pollen',
      name:        'Pollen',
      emoji:       '🌸',
      description: 'Pollen frais et séché'
    },
    {
      id:          'cire',
      name:        'Cire',
      emoji:       '🕯️',
      description: 'Cires naturelles d\'abeille'
    },
    {
      id:          'gelee-royale',
      name:        'Gelée Royale',
      emoji:       '👑',
      description: 'Gelée royale fraîche et lyophilisée'
    },
    {
      id:          'epicerie-fine',
      name:        'Épicerie Fine',
      emoji:       '🎁',
      description: 'Charcuterie, fromages, conserves et gourmandises au miel — le meilleur du terroir normand'
    }
  ];


  /* ================================================================
     SHIPPING RULES
  ================================================================ */

  var shipping = {
    zones: {
      france: {
        name:          'France métropolitaine',
        baseRate:      5.90,
        freeThreshold: 80
      },
      dom: {
        name:          'DOM-TOM',
        baseRate:      15.90,
        freeThreshold: 150
      },
      europe: {
        name:          'Europe',
        baseRate:      12.90,
        freeThreshold: 120
      },
      world: {
        name:          'International',
        baseRate:      24.90,
        freeThreshold: 200
      }
    },
    weightBrackets: [
      { maxWeight: 500,      surcharge: 0 },
      { maxWeight: 1000,     surcharge: 1.50 },
      { maxWeight: 2000,     surcharge: 3.00 },
      { maxWeight: 5000,     surcharge: 5.00 },
      { maxWeight: Infinity, surcharge: 8.00 }
    ]
  };


  /* ================================================================
     TVA RATES (reference)
  ================================================================ */

  var tvaRates = {
    food:        5.5,   // miel, pollen alimentaire
    supplement:  20,    // propolis, gelée royale, compléments
    goods:       20     // cire
  };


  /* ================================================================
     HELPER FUNCTIONS
  ================================================================ */

  /**
   * Find a product by its URL slug.
   * @param {string} slug
   * @returns {Object|undefined}
   */
  function getProductBySlug(slug) {
    return products.find(function (p) { return p.slug === slug; });
  }

  /**
   * Find a product by its ID.
   * @param {string} id
   * @returns {Object|undefined}
   */
  function getProductById(id) {
    return products.find(function (p) { return p.id === id; });
  }

  /**
   * Get all products belonging to a category.
   * @param {string} cat  Category id (e.g. "miel")
   * @returns {Object[]}
   */
  function getProductsByCategory(cat) {
    return products.filter(function (p) { return p.category === cat; });
  }

  /**
   * Get all products flagged as featured.
   * @returns {Object[]}
   */
  function getFeaturedProducts() {
    return products.filter(function (p) { return p.featured === true; });
  }

  /**
   * Full-text search across product name, description and tags.
   * @param {string} query  Raw search string
   * @returns {Object[]}
   */
  function searchProducts(query) {
    if (!query || !query.trim()) {
      return products.slice();
    }
    var q = query.trim().toLowerCase();
    var terms = q.split(/\s+/).filter(Boolean);

    return products.filter(function (p) {
      var haystack = [
        p.name          || '',
        p.shortDescription || '',
        p.description   || '',
        p.origin        || '',
        (p.tags || []).join(' ')
      ].join(' ').toLowerCase();

      return terms.every(function (term) {
        return haystack.indexOf(term) !== -1;
      });
    });
  }

  /**
   * Calculate shipping cost for a given total weight and destination zone.
   * Returns 0 if the order value exceeds the zone's free threshold.
   *
   * @param {number} weightG     Total weight in grams
   * @param {string} zone        Zone key: 'france' | 'dom' | 'europe' | 'world'
   * @param {number} orderTotal  Cart total TTC (optional, for free threshold check)
   * @returns {number}           Shipping cost in euros, rounded to 2 decimals
   */
  function calculateShipping(weightG, zone, orderTotal) {
    var zoneData = shipping.zones[zone];
    if (!zoneData) {
      console.warn('APP_DATA.calculateShipping: unknown zone "' + zone + '"');
      return 0;
    }

    // Free shipping threshold
    if (typeof orderTotal === 'number' && orderTotal >= zoneData.freeThreshold) {
      return 0;
    }

    var surcharge = 0;
    for (var i = 0; i < shipping.weightBrackets.length; i++) {
      if (weightG <= shipping.weightBrackets[i].maxWeight) {
        surcharge = shipping.weightBrackets[i].surcharge;
        break;
      }
    }

    return Math.round((zoneData.baseRate + surcharge) * 100) / 100;
  }

  /**
   * Retrieve all orders from localStorage.
   * @returns {Object[]}
   */
  function getOrders() {
    try {
      return JSON.parse(localStorage.getItem('honey_orders') || '[]');
    } catch (e) {
      return [];
    }
  }

  /**
   * Persist a new order to localStorage (prepended so newest is first).
   * @param {Object} order
   */
  function saveOrder(order) {
    var orders = getOrders();
    orders.unshift(order);
    try {
      localStorage.setItem('honey_orders', JSON.stringify(orders));
    } catch (e) {
      console.error('APP_DATA.saveOrder: localStorage error', e);
    }
  }

  /**
   * Update an existing order's status (and optional tracking number).
   * @param {string} orderId
   * @param {string} status
   * @param {string} [trackingNumber]
   * @returns {boolean} true if order was found and updated
   */
  function updateOrderStatus(orderId, status, trackingNumber) {
    var orders = getOrders();
    var found = false;

    orders = orders.map(function (order) {
      if (order.id === orderId) {
        found = true;
        var updated = Object.assign({}, order, {
          status:    status,
          updatedAt: new Date().toISOString()
        });
        if (typeof trackingNumber === 'string' && trackingNumber.trim()) {
          updated.trackingNumber = trackingNumber.trim();
        }
        return updated;
      }
      return order;
    });

    if (found) {
      try {
        localStorage.setItem('honey_orders', JSON.stringify(orders));
      } catch (e) {
        console.error('APP_DATA.updateOrderStatus: localStorage error', e);
      }
    }

    return found;
  }

  /**
   * Generate a unique, human-readable order ID.
   * Format: ORD-<timestamp base36>-<random 4 chars>
   * @returns {string}  e.g. "ORD-LK5XQAB-F7K2"
   */
  function generateOrderId() {
    var ts   = Date.now().toString(36).toUpperCase();
    var rand = Math.random().toString(36).substr(2, 4).toUpperCase();
    return 'ORD-' + ts + '-' + rand;
  }

  /**
   * Format a price in euros for display.
   * @param {number} amount
   * @param {boolean} [showCents=true]
   * @returns {string}  e.g. "12,90 €"
   */
  function formatPrice(amount, showCents) {
    var opts = {
      style:    'currency',
      currency: 'EUR'
    };
    if (showCents === false) {
      opts.minimumFractionDigits = 0;
      opts.maximumFractionDigits = 0;
    }
    return new Intl.NumberFormat('fr-FR', opts).format(amount);
  }

  /**
   * Compute the HT price from a TTC amount and a TVA rate.
   * @param {number} priceTtc
   * @param {number} tvaRate  e.g. 5.5 or 20
   * @returns {number}
   */
  function htFromTtc(priceTtc, tvaRate) {
    return Math.round((priceTtc / (1 + tvaRate / 100)) * 100) / 100;
  }

  /**
   * Compute the TTC price from a HT amount and a TVA rate.
   * @param {number} priceHt
   * @param {number} tvaRate
   * @returns {number}
   */
  function ttcFromHt(priceHt, tvaRate) {
    return Math.round(priceHt * (1 + tvaRate / 100) * 100) / 100;
  }

  /**
   * Determine stock status label and CSS class for a product.
   * @param {Object} product
   * @returns {{ label: string, cssClass: string }}
   */
  function getStockStatus(product) {
    if (product.stock <= 0) {
      return { label: 'Rupture de stock', cssClass: 'stock-out' };
    }
    if (product.stock <= (product.minStock || 5)) {
      return { label: 'Stock faible (' + product.stock + ')', cssClass: 'stock-low' };
    }
    return { label: 'En stock', cssClass: 'stock-ok' };
  }

  /**
   * Build a star string for a rating value.
   * @param {number} rating  Value between 0 and 5
   * @returns {string}       e.g. "★★★★☆"
   */
  function renderStars(rating) {
    var full  = Math.floor(rating);
    var empty = 5 - full;
    return '★'.repeat(full) + '☆'.repeat(empty);
  }

  /**
   * Compute cart totals (subtotal HT, TVA breakdown, subtotal TTC, shipping, grand total).
   * @param {Array<{product: Object, qty: number}>} cartItems
   * @param {string} zone   Shipping zone key
   * @returns {Object}
   */
  function computeCartTotals(cartItems, zone) {
    var subtotalTtc  = 0;
    var tvaBreakdown = {};
    var totalWeightG = 0;

    cartItems.forEach(function (item) {
      var lineTtc  = item.product.price_ttc * item.qty;
      var lineHt   = item.product.price_ht  * item.qty;
      var lineTva  = lineTtc - lineHt;
      var rate     = item.product.tva_rate;

      subtotalTtc  += lineTtc;
      totalWeightG += (item.product.weight_g || 0) * item.qty;

      if (!tvaBreakdown[rate]) {
        tvaBreakdown[rate] = { rate: rate, ht: 0, tva: 0, ttc: 0 };
      }
      tvaBreakdown[rate].ht  += lineHt;
      tvaBreakdown[rate].tva += lineTva;
      tvaBreakdown[rate].ttc += lineTtc;
    });

    var subtotalHt = Object.values(tvaBreakdown).reduce(function (acc, v) {
      return acc + v.ht;
    }, 0);

    var shippingCost = calculateShipping(totalWeightG, zone || 'france', subtotalTtc);
    var grandTotal   = subtotalTtc + shippingCost;

    return {
      subtotalHt:   Math.round(subtotalHt  * 100) / 100,
      subtotalTtc:  Math.round(subtotalTtc * 100) / 100,
      tvaBreakdown: tvaBreakdown,
      totalWeightG: totalWeightG,
      shippingCost: shippingCost,
      grandTotal:   Math.round(grandTotal  * 100) / 100
    };
  }


  /* ================================================================
     CART HELPERS (localStorage)
  ================================================================ */

  var CART_KEY = 'honey_cart';

  /**
   * Load the cart from localStorage.
   * @returns {Array<{productId: string, qty: number}>}
   */
  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  /**
   * Save raw cart items to localStorage.
   * @param {Array} items
   */
  function saveCart(items) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('APP_DATA.saveCart: localStorage error', e);
    }
  }

  /**
   * Add a product to the cart or increase its quantity.
   * @param {string} productId
   * @param {number} [qty=1]
   * @returns {Array} Updated cart items
   */
  function addToCart(productId, qty) {
    qty = qty || 1;
    var cart = getCart();
    var existing = cart.find(function (i) { return i.productId === productId; });
    if (existing) {
      var product = getProductById(productId);
      var maxQty  = product ? product.stock : Infinity;
      existing.qty = Math.min(existing.qty + qty, maxQty);
    } else {
      cart.push({ productId: productId, qty: qty });
    }
    saveCart(cart);
    return cart;
  }

  /**
   * Remove a product from the cart.
   * @param {string} productId
   * @returns {Array} Updated cart items
   */
  function removeFromCart(productId) {
    var cart = getCart().filter(function (i) { return i.productId !== productId; });
    saveCart(cart);
    return cart;
  }

  /**
   * Update the quantity of a cart item. Removes if qty <= 0.
   * @param {string} productId
   * @param {number} qty
   * @returns {Array} Updated cart items
   */
  function updateCartQty(productId, qty) {
    if (qty <= 0) {
      return removeFromCart(productId);
    }
    var cart = getCart().map(function (item) {
      if (item.productId === productId) {
        var product = getProductById(productId);
        var maxQty  = product ? product.stock : Infinity;
        return Object.assign({}, item, { qty: Math.min(qty, maxQty) });
      }
      return item;
    });
    saveCart(cart);
    return cart;
  }

  /**
   * Clear the entire cart.
   */
  function clearCart() {
    saveCart([]);
  }

  /**
   * Resolve cart items to full product objects with quantities.
   * @returns {Array<{product: Object, qty: number}>}
   */
  function getCartWithProducts() {
    return getCart().reduce(function (acc, item) {
      var product = getProductById(item.productId);
      if (product) {
        acc.push({ product: product, qty: item.qty });
      }
      return acc;
    }, []);
  }

  /**
   * Count total items in the cart.
   * @returns {number}
   */
  function getCartCount() {
    return getCart().reduce(function (acc, item) { return acc + item.qty; }, 0);
  }


  /* ================================================================
     WISHLIST HELPERS (localStorage)
  ================================================================ */

  var WISHLIST_KEY = 'honey_wishlist';

  function getWishlist() {
    try {
      return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function toggleWishlist(productId) {
    var list = getWishlist();
    var idx  = list.indexOf(productId);
    if (idx === -1) {
      list.push(productId);
    } else {
      list.splice(idx, 1);
    }
    try {
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
    } catch (e) {}
    return list;
  }

  function isInWishlist(productId) {
    return getWishlist().indexOf(productId) !== -1;
  }


  /* ================================================================
     ORDER STATUS CONSTANTS
  ================================================================ */

  var ORDER_STATUSES = {
    PENDING:    'pending',
    PROCESSING: 'processing',
    SHIPPED:    'shipped',
    DELIVERED:  'delivered',
    CANCELLED:  'cancelled'
  };

  var ORDER_STATUS_LABELS = {
    pending:    'En attente',
    processing: 'En préparation',
    shipped:    'Expédié',
    delivered:  'Livré',
    cancelled:  'Annulé'
  };


  /* ================================================================
     EXPOSE window.APP_DATA
  ================================================================ */

  window.APP_DATA = {
    /* Raw data */
    products:              products,
    categories:            categories,
    shipping:              shipping,
    tvaRates:              tvaRates,
    ORDER_STATUSES:        ORDER_STATUSES,
    ORDER_STATUS_LABELS:   ORDER_STATUS_LABELS,

    /* Product helpers */
    getProductBySlug:      getProductBySlug,
    getProductById:        getProductById,
    getProductsByCategory: getProductsByCategory,
    getFeaturedProducts:   getFeaturedProducts,
    searchProducts:        searchProducts,
    getStockStatus:        getStockStatus,
    renderStars:           renderStars,

    /* Pricing helpers */
    calculateShipping: calculateShipping,
    computeCartTotals: computeCartTotals,
    formatPrice:       formatPrice,
    htFromTtc:         htFromTtc,
    ttcFromHt:         ttcFromHt,

    /* Cart helpers */
    getCart:             getCart,
    saveCart:            saveCart,
    addToCart:           addToCart,
    removeFromCart:      removeFromCart,
    updateCartQty:       updateCartQty,
    clearCart:           clearCart,
    getCartWithProducts: getCartWithProducts,
    getCartCount:        getCartCount,

    /* Wishlist helpers */
    getWishlist:    getWishlist,
    toggleWishlist: toggleWishlist,
    isInWishlist:   isInWishlist,

    /* Order helpers */
    getOrders:         getOrders,
    saveOrder:         saveOrder,
    updateOrderStatus: updateOrderStatus,
    generateOrderId:   generateOrderId
  };

}());
