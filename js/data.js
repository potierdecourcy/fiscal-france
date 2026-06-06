/**
 * MielFrance — Application Data
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

    /* ── ACCESSOIRES ─────────────────────────────────────────── */
    {
      id:            'ac-001',
      sku:           'AC-001',
      name:          'Pot en Verre Hexagonal 250g (lot de 6)',
      slug:          'pot-verre-hexagonal-250g',
      category:      'accessoires',
      subcategory:   'conditionnement',
      origin:        'Union Européenne',
      description:   'Élégant pot en verre hexagonal inspiré des alvéoles de la ruche, ce contenant est idéal pour conditionner et présenter vos propres productions de miel. Le lot de 6 pots de 250 g est parfait pour les apiculteurs amateurs ou les artisans souhaitant valoriser leur production avec un packaging distinctif et professionnel.\n\nLe verre utilisé est de qualité alimentaire certifiée, sans plomb ni cadmium. L\'ouverture large de 63 mm facilite le remplissage au mielloduc et le nettoyage. Le couvercle à vis en aluminium laqué or assure une fermeture hermétique et une excellente conservation des produits. La forme hexagonale est particulièrement photogénique et appréciée pour les ventes directes et les marchés.\n\nCapacité réelle : 250 g de miel (environ 185 ml de liquide). Dimensions : 60 mm de diamètre, 90 mm de hauteur. Compatible avec les étiquettes standard 60x90 mm. Ces pots peuvent également être utilisés pour d\'autres conserves, confitures, condiments ou produits cosmétiques solides.',
      shortDescription: 'Lot de 6 pots en verre hexagonaux 250 g pour conditionnement de miel artisanal.',
      price_ht:      7.50,
      price_ttc:     9.00,
      tva_rate:      20,
      weight_g:      800,
      stock:         100,
      minStock:      10,
      images:        ['images/pot-hexagonal.jpg'],
      tags:          ['conditionnement', 'verre', 'hexagonal', 'apiculture'],
      featured:      false,
      rating:        4.5,
      reviews_count: 31,
      reviews: [
        {
          author: 'Pascal M.',
          date:   '2026-04-28',
          rating: 5,
          comment: 'Très jolis pots, le design hexagonal est magnifique. Qualité du verre excellente, couvercles hermétiques. Parfait pour offrir mon miel à mes proches.'
        },
        {
          author: 'Carole B.',
          date:   '2026-03-22',
          rating: 4,
          comment: 'Bons pots, arrivés bien emballés sans casse. La forme hexagonale est très esthétique. J\'aurais aimé un format 500g disponible mais sinon c\'est parfait.'
        },
        {
          author: 'Henri T.',
          date:   '2026-02-17',
          rating: 4,
          comment: 'Rapport qualité-prix correct. Les couvercles vissent bien, pas de fuite. Idéaux pour mes miels maison que je vends au marché local. Je rachèterai.'
        }
      ]
    },

    {
      id:            'ac-002',
      sku:           'AC-002',
      name:          'Enfumoir Professionnel Inox',
      slug:          'enfumoir-professionnel-inox',
      category:      'accessoires',
      subcategory:   'materiel-apicole',
      origin:        'France',
      description:   'Outil indispensable de l\'apiculteur, notre enfumoir professionnel en inox alimentaire 18/10 est conçu pour durer et performer dans les conditions les plus exigeantes. Le cylindre en acier inoxydable de 10 cm de diamètre et 22 cm de hauteur offre une capacité de combustion suffisante pour les interventions prolongées sur plusieurs ruches. Le soufflet en cuir véritable assure une durée de vie exceptionnelle et une pression constante à chaque coup.\n\nLe capuchon de protection thermique en inox avec crochet de maintien permet de poser l\'enfumoir en sécurité sans risquer de brûlures. La grille intérieure en acier inoxydable facilite le tirage et évite l\'obstruction par les cendres. Le réseau de refroidissement intégré sur la prise en main garantit un confort d\'utilisation optimal même après une longue session d\'allumage.\n\nFacile à allumer avec du carton, de la paille ou des copeaux de bois naturels, ce fumoir produit une fumée froide et dense, idéale pour calmer les abeilles lors des inspections. Entretien aisé : le cylindre est amovible pour un nettoyage complet. Livré avec un kit de démarrage (allumette longue, guide d\'allumage).',
      shortDescription: 'Enfumoir apicole professionnel tout inox avec soufflet cuir, haute durabilité.',
      price_ht:      37.50,
      price_ttc:     45.00,
      tva_rate:      20,
      weight_g:      600,
      stock:         10,
      minStock:      2,
      images:        ['images/enfumoir.jpg'],
      tags:          ['materiel', 'apiculture', 'inox', 'professionnel'],
      featured:      false,
      rating:        4.8,
      reviews_count: 16,
      reviews: [
        {
          author: 'Maurice D.',
          date:   '2026-04-18',
          rating: 5,
          comment: 'Enfumoir de grande qualité, finition impeccable. L\'inox est épais et solide. Le soufflet en cuir est souple et résistant. Parfait pour un apiculteur sérieux.'
        },
        {
          author: 'Gilles F.',
          date:   '2026-03-12',
          rating: 4,
          comment: 'Bon enfumoir, meilleur que mon ancien modèle. Le capuchon de sécurité est très pratique. La seule critique : l\'allumage peut être capricieux avec certains combustibles.'
        },
        {
          author: 'Yves M.',
          date:   '2026-02-05',
          rating: 5,
          comment: 'Excellent outil, acheté sur recommandation de mon club apicole. L\'inox est bien plus durable que l\'acier galvanisé. Je suis très satisfait de mon achat.'
        }
      ]
    },

    {
      id:            'ac-003',
      sku:           'AC-003',
      name:          'Lève-cadres Inox',
      slug:          'leve-cadres-inox',
      category:      'accessoires',
      subcategory:   'materiel-apicole',
      origin:        'Union Européenne',
      description:   'Outil multifonctions indispensable de la boîte à outils de l\'apiculteur, notre lève-cadres en acier inoxydable de haute qualité est conçu pour faciliter l\'ouverture des ruches et la manipulation des cadres collés par la propolis. Sa forme en L courbée spécifique offre plusieurs angles d\'action pour s\'adapter à tous les types de ruches (Dadant, Langstroth, Warré).\n\nD\'une longueur totale de 25 cm, ce lève-cadres est légèrement plus long que les modèles standard, ce qui procure un meilleur effet de levier et réduit l\'effort lors du décollement des cadres en fin de saison quand la propolis est dure et abondante. L\'extrémité grattoir est parfaitement affûtée pour nettoyer les planchers et les rebords de corps de ruche.\n\nLa finition brossée de l\'inox 304 résiste à l\'oxydation et aux agressions chimiques de la propolis. Son poids modéré de 180 g le rend agréable à manier pendant les longues sessions d\'inspection. L\'entretien se résume à un simple rinçage à l\'eau chaude après chaque utilisation.',
      shortDescription: 'Lève-cadres inox 25 cm, multifonctions, pour tous types de ruches.',
      price_ht:      12.50,
      price_ttc:     15.00,
      tva_rate:      20,
      weight_g:      200,
      stock:         25,
      minStock:      5,
      images:        ['images/leve-cadres.jpg'],
      tags:          ['materiel', 'apiculture', 'inox', 'outil'],
      featured:      false,
      rating:        4.6,
      reviews_count: 22,
      reviews: [
        {
          author: 'Bertrand C.',
          date:   '2026-04-09',
          rating: 5,
          comment: 'Très bon lève-cadres, solide et bien fini. La longueur supplémentaire fait vraiment la différence sur les cadres bien propolisés. Outil de qualité professionnelle.'
        },
        {
          author: 'Isabelle A.',
          date:   '2026-03-27',
          rating: 4,
          comment: 'Bon outil à bon prix. L\'inox ne rouille pas, c\'est l\'essentiel. Je l\'utilise aussi pour gratter les propolis et les cires. Outil quotidien et efficace.'
        },
        {
          author: 'Claude T.',
          date:   '2026-02-13',
          rating: 5,
          comment: 'Outil indispensable ! Celui-ci est bien supérieur en qualité au précédent que j\'avais. Inox épais, bonne ergonomie. Je recommande à tous les apiculteurs.'
        }
      ]
    },

    {
      id:            'ac-004',
      sku:           'AC-004',
      name:          'Combinaison Apiculteur Taille M',
      slug:          'combinaison-apiculteur-taille-m',
      category:      'accessoires',
      subcategory:   'protection',
      origin:        'France',
      description:   'Conçue en coton ventilé de haute qualité (240 g/m²), notre combinaison de protection apicole offre une barrière efficace contre les piqûres tout en assurant un confort thermique optimal même par temps chaud. Le voile intégré à double couche garantit une protection complète du visage et du cou, avec une visibilité maximale grâce au cadre rigide maintenant le voile à distance du visage.\n\nToutes les coutures sont renforcées aux zones de tension (aisselles, entrejambe, poignets) pour résister aux mouvements brusques lors des manipulations. Les élastiques aux chevilles et aux poignets assurent l\'étanchéité sans comprimer. Les grandes poches latérales et la poche poitrine à fermeture Éclair permettent d\'emporter outils et carnets d\'inspection. La fermeture Éclair frontale YKK est traitée anti-corrosion.\n\nLavable en machine jusqu\'à 60°C pour une désinfection efficace après chaque saison. La taille M convient aux gabarits standard pour des tailles comprises entre 170 et 178 cm. D\'autres tailles disponibles sur demande (XS, S, L, XL, XXL). Conforme aux normes EN 13795 et testée contre les piqûres d\'abeilles mellifères et les frelons asiatiques.',
      shortDescription: 'Combinaison apicole coton ventilé taille M, voile intégré, coutures renforcées.',
      price_ht:      58.33,
      price_ttc:     70.00,
      tva_rate:      20,
      weight_g:      800,
      stock:         5,
      minStock:      2,
      images:        ['images/combinaison.jpg'],
      tags:          ['protection', 'combinaison', 'securite', 'materiel'],
      featured:      false,
      rating:        4.7,
      reviews_count: 14,
      reviews: [
        {
          author: 'Arnaud P.',
          date:   '2026-04-21',
          rating: 5,
          comment: 'Excellente combinaison, très bien fabriquée. Le voile est bien maintenu et la visibilité est parfaite. Le coton est agréable à porter même l\'été.'
        },
        {
          author: 'Marianne G.',
          date:   '2026-03-08',
          rating: 4,
          comment: 'Bonne protection, coutures solides. Je regrette juste que la taille M soit un peu juste pour moi. Sinon le produit est de très bonne qualité.'
        },
        {
          author: 'Patrice V.',
          date:   '2026-01-29',
          rating: 5,
          comment: 'Ma précédente combinaison a rendu l\'âme après 5 ans. Celle-ci semble encore plus robuste. Le renforcement des coutures est visible et rassurant. Bonne qualité française.'
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
      id:          'accessoires',
      name:        'Accessoires',
      emoji:       '🔧',
      description: 'Matériel apicole'
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
    goods:       20     // accessoires, cire
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
