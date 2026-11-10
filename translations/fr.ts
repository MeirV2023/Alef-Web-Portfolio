import {
  ShowcaseTabItem,
  FeatureCardItem,
  PricingTier,
  ComparisonRow,
  FaqItem,
  LaunchStep,
} from '../types';

export const fr = {
  meta: {
    title: 'Alef FoodCRM | CRM Restaurant Clé en Main, Commande en Ligne & Écran Cuisine KDS — 0% Commission',
    description:
      'Transformez vos vues TikTok et Instagram en commandes payées en direct avec 0% de commission. Site mobile, CRM, écran cuisine (KDS) avec minuteur en direct et paiements Stripe 100% directs. Offres : 29,90 €/mois (Auto-Gestion) ou 89 €/mois (Tout Inclus VIP).',
  },
  header: {
    brandSub: 'Restaurant CRM & OrderOS',
    nav: {
      problem: '0% Commission',
      demo: 'Démo Live',
      features: 'Modules CRM',
      calculator: 'Simulateur',
      pricing: 'Tarifs',
      faq: 'FAQ',
    },
    liveDemoBtn: 'Démo Live ↗',
    cta: 'Lancer à 0 €',
  },
  hero: {
    badgePrimary: 'SOLUTION CLÉ EN MAIN POUR FAST-FOODS, STREET-FOOD, RESTAURANTS CACHER & CAFÉS',
    badgeSecondary: 'CRÉATION DU SITE — 0 € • COMMISSION SUR COMMANDES — 0%',
    titleStart: 'Transformez vos vues ',
    titleHighlight: 'TikTok & Instagram',
    titleEnd: ' en vraies commandes payées — avec 0% de commission',
    subtitle:
      'Plateforme complète prête à l’emploi : vitrine mobile haute conversion, CRM propriétaire et écran cuisine (KDS) avec chronomètre de préparation. 100% des paiements (Apple Pay, Google Pay, CB) arrivent directement sur votre compte Stripe.',
    ctaPrimary: 'Choisir mon offre (dès 29,90 €/mois)',
    ctaSecondary: 'Tester le site réel (La Briout) ↗',
    ctaTour: 'Découvrir la plateforme ↓',
    trustNote: 'Aucun téléchargement App Store requis • Prêt en 24–48h • Disponible dans le monde entier',
    metrics: [
      { value: '0 €', label: 'Création du site, CRM & mise en ligne', accent: 'emerald' },
      { value: '0%', label: 'Commission sur ventes (100% sur votre Stripe)', accent: 'orange' },
      { value: '29,9 €', label: 'Offre Auto-Admin ou 89 € Tout Inclus VIP', accent: 'yellow' },
      { value: '4–5', label: 'Commandes / mois suffisent à rentabiliser l’abonnement', accent: 'sky' },
    ],
    mockupCaptions: {
      livePill: 'PROTOTYPE EN PRODUCTION • LABRIOUT.VERCEL.APP',
      desktopUrl: 'https://labriout.vercel.app — Vitrine multilingue (FR / EN / HE / DE / RU)',
      kdsUrl: 'labriout.vercel.app/owner — CRM Propriétaire, CA & Écran Cuisine KDS',
      zoomHint: 'Cliquez sur un écran pour agrandir en HD',
    },
  },
  problemSolution: {
    eyebrow: 'POURQUOI LES RESTAURATEURS PASSENT EN DIRECT',
    titleStart: 'Arrêtez de céder ',
    titleHighlight: '25 à 35% de marge',
    titleEnd: ' aux plateformes de livraison et de perdre votre trafic social',
    subtitle:
      'Vous publiez des vidéos appétissantes de burgers, shawarmas, pizzas ou cafés sur TikTok et Reels, mais ce trafic reste de simples « j’aime » ou part chez Uber Eats / Deliveroo qui ponctionnent votre chiffre d’affaires.',
    painsTitle: 'Ce qui coûte cher aux restaurants aujourd’hui',
    pains: [
      {
        title: 'Les plateformes prennent jusqu’à un tiers de chaque ticket',
        text: 'À cause des commissions Uber Eats, Deliveroo ou Just Eat, vous devez gonfler vos prix de 20 à 30%, ce qui décourage vos clients fidèles.',
      },
      {
        title: 'Le trafic TikTok & Instagram n’est pas converti',
        text: 'Un simple menu PDF, une ancienne plateforme comme Eat-View ou l’obligation de télécharger une application brisent l’achat impulsif.',
      },
      {
        title: 'Coup de feu stressant en cuisine & agences web hors de prix',
        text: 'Les commandes par téléphone créent des erreurs, la file s’allonge et chaque changement de prix ou de bannière coûte cher chez un développeur.',
      },
    ],
    solutionsTitle: 'Ce que notre solution clé en main change immédiatement',
    solutions: [
      {
        title: 'Prix justes pour vos clients & 0% de commission à vie',
        text: 'Vous connectez vos propres clés Stripe : 100% du montant payé par le client est versé directement sur le compte bancaire de votre restaurant.',
      },
      {
        title: 'De la vidéo TikTok / Reels au paiement en 3 clics',
        text: 'Le client clique sur le lien en bio ou le QR code sur table, compose son menu directement sur mobile et règle par Apple Pay / Google Pay.',
      },
      {
        title: 'Écran cuisine KDS + liberté totale de gestion',
        text: 'Gérez votre carte vous-même pour 29,90 €/mois via notre CMS ultra-simple — ou choisissez le pack 89 €/mois où notre équipe fait tout gratuitement sur simple message WhatsApp !',
      },
    ],
  },
  demoShowcase: {
    eyebrow: 'DÉMONSTRATION LIVE • LABRIOUT.VERCEL.APP',
    titleStart: 'Testez la solution complète ',
    titleHighlight: 'en direct dès maintenant',
    subtitle:
      'Rien de théorique : explorez la plateforme réelle déployée pour le restaurant street-food cacher La Briout (vitrine client + écran cuisine KDS + gestion des stocks 86 + CMS menu).',
    tabsAriaLabel: 'Modules de la plateforme restaurant',
    zoomButton: 'Agrandir l’image',
    liveBanner: {
      badge: 'DÉMO INTERACTIVE OUVERTE 24H/24',
      title: 'Testez le site sur votre téléphone ou ordinateur comme un client ou un chef',
      storefrontLabel: 'Vitrine Restaurant',
      ownerLabel: 'Écran Cuisine KDS & CRM',
      adminLabel: 'Super-Admin CMS Menu',
      pinLabel: 'Code PIN Démo :',
      copyPin: 'Copier PIN',
      copied: 'Copié !',
    },
    tabs: [
      {
        id: 'storefront',
        badge: '01 • VITRINE & WEB-APP MOBILE',
        title: 'Vitrine & Menus Composables',
        headline: 'Pensé pour le trafic TikTok, Instagram & QR — conçu pour convertir chaque visiteur',
        description:
          'S’ouvre instantanément dans le navigateur intégré de TikTok et Instagram sans téléchargement. Fiches produits gourmandes, formules Meal Deal en 1 clic et ventes additionnelles augmentent le panier moyen de 18 à 25%.',
        bullets: [
          'Personnalisation fluide : formule Meal Deal (+ Frites + Boisson), option patate douce, sauces gratuites plafonnées et 14+ suppléments payants.',
          'Suggestions intelligentes « Sélectionné pour vous » dans le panier pour ajouter boissons et accompagnements en un geste.',
          'Affichage du poids, valeurs nutritionnelles, allergènes, badges best-sellers et carte bistro imprimable (/menu) pour la salle.',
        ],
        liveUrl: 'https://labriout.vercel.app',
        liveCta: 'Ouvrir la vitrine live ↗',
        primaryImage: {
          src: '/showcase/storefront-categories.png',
          alt: 'Vitrine ordinateur avec catégories visuelles et panier latéral',
          caption: 'Catégories gourmandes, carte Web-App et panier visible en permanence',
          width: 1535,
          height: 779,
        },
        secondaryImages: [
          {
            src: '/showcase/mobile-dish-modal.jpg',
            alt: 'Fiche burger mobile avec calories et formule Meal Deal',
            caption: 'Fiche produit, macros & option Meal Deal',
            width: 576,
            height: 1280,
            isMobile: true,
          },
          {
            src: '/showcase/mobile-modifiers.jpg',
            alt: 'Sélection des suppléments et garnitures sur smartphone',
            caption: '14+ suppléments personnalisables',
            width: 576,
            height: 1280,
            isMobile: true,
          },
          {
            src: '/showcase/mobile-upsell.jpg',
            alt: 'Recommandations de boissons dans le panier mobile',
            caption: 'Ventes additionnelles en 1 clic dans le panier',
            width: 576,
            height: 1280,
            isMobile: true,
          },
        ],
      },
      {
        id: 'kds',
        badge: '02 • ÉCRAN CUISINE (KDS) & MINUTEUR',
        title: 'Cuisine KDS & Chrono Live',
        headline: 'Zéro stress pendant le coup de feu : alerte sonore, chronomètre à la seconde & check-list sac',
        description:
          'Fini les tickets papier égarés. L’espace cuisine s’ouvre sur n’importe quelle tablette iPad/Android, ordinateur ou téléphone. Le chef suit chaque commande en temps réel.',
        bullets: [
          'Réception instantanée avec alerte sonore et chronomètre en direct sur chaque commande (00:12 → maîtrise du temps d’envoi).',
          'Statuts clairs : Nouvelle → Acceptée → En préparation / Grill → Assemblage → Prête & Remise.',
          'Cases à cocher plat par plat + contrôle qualité d’emballage en 4 points (serviettes, sauces, ticket, sac scellé).',
        ],
        liveUrl: 'https://labriout.vercel.app/owner',
        liveCta: 'Ouvrir l’écran KDS (/owner) ↗',
        pinHint: 'PIN : 1111 ou 7777',
        primaryImage: {
          src: '/showcase/kds-timer.jpg',
          alt: 'Écran cuisine KDS avec minuteur de préparation 00:12',
          caption: 'Ticket cuisine en direct avec minuteur (00:12) et commentaire client',
          width: 946,
          height: 785,
        },
        secondaryImages: [
          {
            src: '/showcase/kds-checklist.jpg',
            alt: 'Validation des plats prêts et temps moyen de service',
            caption: 'Plats cochés, vérification du sac et temps moyen de sortie (4m 55s)',
            width: 1280,
            height: 649,
          },
        ],
      },
      {
        id: 'crm',
        badge: '03 • CRM PROPRIÉTAIRE, RUPTURES 86 & STRIPE',
        title: 'CRM, Ruptures 86 & Stripe',
        headline: 'Statistiques CA & food-cost, mise en rupture en 1 clic et Click & Collect à l’heure choisie',
        description:
          'Pilotez votre établissement où que vous soyez. Vos clients précommandent en sortant du bureau pour un retrait précis (créneaux de 15 min) et l’argent arrive directement sur votre Stripe.',
        bullets: [
          'Tableau de bord gérant : commandes, clients réguliers, courbes CA vs coût matière, meilleures catégories et avis clients.',
          'Bouton « Rupture / Stop 86 » en 1 clic + déduction automatique des matières premières en stock à chaque commande.',
          'Précommande Click & Collect à l’heure exacte + mode Livraison + encaissement Stripe 100% direct.',
        ],
        liveUrl: 'https://labriout.vercel.app/owner',
        liveCta: 'Ouvrir le CRM Propriétaire ↗',
        pinHint: 'PIN : 1111 ou 7777',
        primaryImage: {
          src: '/showcase/crm-analytics.jpg',
          alt: 'Tableau de bord CRM avec statistiques de chiffre d’affaires',
          caption: 'Suivi en temps réel du chiffre d’affaires, du food-cost et des catégories phares',
          width: 1280,
          height: 655,
        },
        secondaryImages: [
          {
            src: '/showcase/crm-inventory-86.jpg',
            alt: 'Gestion des ruptures et stock matières premières',
            caption: 'Rupture en 1 clic & suivi automatique des stocks',
            width: 1280,
            height: 647,
          },
          {
            src: '/showcase/mobile-checkout.jpg',
            alt: 'Paiement mobile avec choix de l’heure de retrait et Stripe',
            caption: 'Choix du créneau Click & Collect & Stripe direct',
            width: 576,
            height: 1280,
            isMobile: true,
          },
        ],
      },
      {
        id: 'cms',
        badge: '04 • CMS AUTO-ADMINISTRATION (OFFRE 29,90 €)',
        title: 'CMS Menu Ultra-Simple',
        headline: 'Modifiez prix, promos, photos et plats en 10 secondes depuis votre mobile — ou déléguez-nous tout sur WhatsApp !',
        description:
          'Grâce à cette interface visuelle intuitive, l’offre à 29,90 €/mois vous permet d’administrer toute votre boutique en autonomie — ou optez pour l’offre à 89 €/mois où notre équipe s’occupe de tout pour vous.',
        bullets: [
          'Éditeur mobile & PC (/super-admin) : ajout ou duplication de plat en 1 clic, modification des prix, prix barrés et food-cost.',
          'Boutons promos rapides (-15%, -30%), codes promo pour stories Instagram et gestion complète des suppléments.',
          'Multilingue natif (FR, EN, HE avec RTL complet, DE, RU, IT…) idéal pour accueillir les touristes internationaux et la clientèle cacher.',
        ],
        liveUrl: 'https://labriout.vercel.app/super-admin',
        liveCta: 'Tester le CMS (/super-admin) ↗',
        pinHint: 'PIN : 9999',
        primaryImage: {
          src: '/showcase/crm-orders-reviews.jpg',
          alt: 'Historique des commandes et avis clients 5 étoiles',
          caption: 'Journal des commandes, avis 5 étoiles et accès direct au Super-Admin CMS',
          width: 1280,
          height: 509,
        },
        secondaryImages: [
          {
            src: '/showcase/mobile-cms.jpg',
            alt: 'Édition du menu depuis un smartphone',
            caption: 'Modifiez vos plats & tarifs depuis votre téléphone',
            width: 576,
            height: 1280,
            isMobile: true,
          },
          {
            src: '/showcase/storefront-menu.png',
            alt: 'Carte bistro imprimable générée automatiquement',
            caption: 'Carte de salle imprimable en 1 clic (/menu)',
            width: 1534,
            height: 776,
          },
        ],
      },
    ] as ShowcaseTabItem[],
  },
  calculator: {
    eyebrow: 'SIMULATEUR D’ÉCONOMIES',
    titleStart: 'Calculez combien de marge ',
    titleHighlight: 'reste dans votre caisse',
    subtitle:
      'Comparez les commissions des plateformes (Uber Eats, Deliveroo, Just Eat, Wolt) avec votre propre système à 0% de commission.',
    ordersPerDayLabel: 'Commandes en ligne par jour',
    ordersUnit: 'cmd/jour',
    avgTicketLabel: 'Panier moyen',
    aggregatorFeeLabel: 'Commission plateforme de livraison',
    compareWithLabel: 'Comparer avec notre formule :',
    planSelfShort: '29,90 € / mois (Auto-Admin)',
    planVipShort: '89 € / mois (Tout Inclus VIP)',
    monthlyTurnoverLabel: 'Votre CA en ligne mensuel',
    aggregatorLossLabel: 'Perdu en commissions chaque mois',
    ourCostLabel: 'Abonnement fixe Alef FoodCRM (0% comm.)',
    netSavingsMonthlyLabel: 'Gain net conservé par mois',
    netSavingsYearlyLabel: 'Économisé sur 1 an pour votre restaurant :',
    paybackBadge: 'Votre abonnement est rentabilisé en seulement',
    paybackOrdersWord: 'commande(s) par mois !',
    cta: 'Garder 100% de mon chiffre d’affaires →',
  },
  features: {
    eyebrow: 'TOUT EST INCLUS DANS LA BOX',
    titleStart: 'Conçu sur mesure pour ',
    titleHighlight: 'la restauration rapide, street-food & cafés',
    subtitle:
      'Smash burgers, shawarmas, pizzerias, food-trucks, boulangeries, coffee-shops et établissements cachers / halal partout dans le monde.',
    items: [
      {
        icon: 'tiktok',
        badge: 'RÉSEAUX → VENTES',
        title: 'Taillé pour TikTok, Reels & QR en salle',
        description:
          'Un lien unique ultra-rapide pour vos bios TikTok et Instagram, votre fiche Google Maps et vos QR codes de table.',
      },
      {
        icon: 'modifiers',
        badge: '+22% DE PANIER MOYEN',
        title: 'Menus, Suppléments & Ventes Additionnelles',
        description:
          'Sauces gratuites limitées, suppléments payants, formule Meal Deal en 1 clic, note pour la cuisine et boissons suggérées au panier.',
      },
      {
        icon: 'clock',
        badge: 'CLICK & COLLECT',
        title: 'Précommande à l’heure exacte sans file d’attente',
        description:
          'Vos clients commandent sur le chemin du retour et choisissent leur créneau de retrait à 15 min près — fluidité totale en cuisine.',
      },
      {
        icon: 'kds',
        badge: 'SYSTÈME KDS CUISINE',
        title: 'Écran cuisine avec chrono à la seconde',
        description:
          'Sonnerie immédiate, chronomètre de cuisson en direct, suivi des étapes jusqu’à la remise et check-list d’emballage.',
      },
      {
        icon: 'stripe',
        badge: '100% VOTRE ARGENT',
        title: 'Encaissements Stripe directs sur votre banque',
        description:
          'Apple Pay, Google Pay et cartes via votre propre compte Stripe. Aucun transit par nos comptes, 0% prélevé sur votre CA.',
      },
      {
        icon: 'inventory',
        badge: 'RUPTURE 86 & STOCKS',
        title: 'Mise en rupture en 1 clic & suivi matières',
        description:
          'Un produit épuisé le soir ? Désactivez-le en un clic sur mobile ou tablette et suivez automatiquement vos stocks.',
      },
      {
        icon: 'globe',
        badge: 'TOURISTES & CACHER',
        title: 'Multilingue + Hébreu RTL natif',
        description:
          'Français, anglais, hébreu (droite à gauche), allemand, russe… Parfait pour les touristes internationaux et les standards cachers (Badatz / Chabbat).',
      },
      {
        icon: 'whatsapp',
        badge: 'ZÉRO CONTRAINTE',
        title: 'Auto-gestion CMS OU Conciergerie WhatsApp',
        description:
          'Gérez tout vous-même à 29,90 €/mois ou confiez-nous toutes vos mises à jour et bannières sur simple message WhatsApp à 89 €/mois !',
      },
    ] as FeatureCardItem[],
  },
  pricing: {
    eyebrow: 'TARIFICATION CLAIRE ET SANS SURPRISE',
    titleStart: 'Deux formules simples. ',
    titleHighlight: '0 € de création & 0% de commission',
    subtitle:
      'Les deux offres incluent exactement la même technologie complète (Vitrine + CRM + Écran Cuisine KDS + Stripe direct + Hébergement). Choisissez simplement qui administre le catalogue au quotidien !',
    tiers: [
      {
        id: 'self_29',
        badge: 'AUTO-ADMINISTRATION • CMS AUTONOME',
        name: 'Self-Admin Pro',
        tagline:
          'Idéal pour les gérants autonomes qui souhaitent administrer eux-mêmes leurs plats, tarifs et promotions depuis leur téléphone ou ordinateur.',
        price: '29,90',
        currency: '€',
        period: '/ mois',
        setupNote: 'Déploiement de la box — 0 €',
        commissionNote: '0% de commission • 100% direct sur votre Stripe',
        isPopular: false,
        highlightNote: 'Moins de 1 € par jour pour votre site de commande, CRM et écran cuisine KDS !',
        features: [
          'Site web & Web-App mobile haute conversion (prêt pour TikTok, Instagram & QR codes)',
          'Accès complet au CMS visuel (/super-admin) : ajoutez et modifiez vous-même vos plats, prix, photos, remises (-15% / -30%) et codes promo 24h/24',
          'Portail propriétaire CRM & Écran Cuisine (KDS) avec minuteur en direct et alertes sonores',
          'Gestion des ruptures (Stop 86) en 1 clic & déduction automatique des stocks',
          'Click & Collect à l’heure choisie & mode Livraison',
          'Connexion directe de votre propre compte Stripe (Apple Pay, Google Pay, CB — 0% de frais plateforme)',
          'Hébergement cloud rapide, certificat SSL sécurisé & mises à jour incluses',
          'Moteur multilingue intégré (saisie autonome de vos traductions dans le CMS)',
        ],
        differenceNote:
          'Vous gérez vous-même la saisie du menu, les changements de prix et vos bannières via l’administration. Passage à l’offre 89 € possible à tout moment.',
        cta: 'Choisir Auto-Admin à 29,90 € / mois',
      },
      {
        id: 'vip_89',
        badge: '⭐ LE PLUS POPULAIRE • TOUT INCLUS SUR WHATSAPP',
        name: 'All-Inclusive Concierge',
        tagline:
          'Service VIP clé en main : création gratuite de votre site et logo, intégration complète de votre carte, traductions et modifications illimitées par simple message WhatsApp.',
        price: '89',
        currency: '€',
        period: '/ mois',
        setupNote: 'Création du site & logo sur mesure — 0 € (économisez 1 500–3 000 €)',
        commissionNote: '0% de commission • 100% direct sur votre Stripe',
        isPopular: true,
        highlightNote: 'Votre propre service technique & graphique dédié sur WhatsApp — en illimité !',
        features: [
          'TOUT le contenu de Self-Admin Pro (Vitrine, CRM, KDS cuisine avec minuteur, stocks, Click & Collect + accès complet au CMS)',
          'CRÉATION GRATUITE de votre site personnalisé, import complet de votre menu et création d’un nouveau logo sur mesure (0 € de frais de départ !)',
          'Modifications ILLIMITÉES (∞) et gratuites via WhatsApp : envoyez un message ou vocal pour changer prix, photos, formules ou nouveaux plats',
          'Création GRATUITE et illimitée de bannières promotionnelles et festives (fêtes juives, Chabbat, saisons, offres du week-end)',
          'Configuration & traduction clé en main de toutes vos langues (FR, EN, HE en RTL, DE, RU…) pour vos clients locaux et touristes',
          'Connexion de votre nom de domaine, accompagnement Stripe & support prioritaire 6j/7',
        ],
        differenceNote:
          'Rentabilisé dès 4 à 5 commandes par mois, sans jamais perdre une minute sur la technique.',
        cta: 'Lancer le Tout Inclus à 89 € / mois',
      },
    ] as PricingTier[],
    comparisonTitle: 'Comparatif clair : Plateformes vs 29,90 € vs 89 €',
    comparisonCaption: 'Comparaison entre les plateformes de livraison, l’offre Auto-Admin 29,90 € et l’offre Tout Inclus 89 €',
    comparisonHeaders: {
      criterion: 'Ce qui compte pour le gérant',
      aggregators: 'Plateformes / Anciens menus (Eat-View…)',
      selfPlan: 'Self-Admin • 29,90 €/mois',
      vipPlan: 'Tout Inclus • 89 €/mois',
    },
    comparisonRows: [
      {
        criterion: 'Commission sur les commandes',
        aggregators: '25 à 35% prélevés ou prix gonflés pour vos clients',
        selfPlan: '0% (100% direct sur votre Stripe)',
        vipPlan: '0% (100% direct sur votre Stripe)',
      },
      {
        criterion: 'Frais de création du site & logo',
        aggregators: '1 500 € à 3 000 € en agence ou menu basique peu vendeur',
        selfPlan: '0 € (box prête à l’emploi)',
        vipPlan: '0 € + logo offert & import complet de votre carte',
      },
      {
        criterion: 'Écran cuisine (KDS) avec minuteur live',
        aggregators: 'Option payante ou matériel propriétaire coûteux',
        selfPlan: 'Inclus (sur toute tablette/PC)',
        vipPlan: 'Inclus + paramétré pour votre cuisine',
      },
      {
        criterion: 'Mise à jour des prix, plats & promos',
        aggregators: 'Support lent ou facturation au ticket',
        selfPlan: 'Vous-même en 10 sec dans le CMS (/super-admin)',
        vipPlan: 'Nous le faisons GRATUITEMENT & ∞ fois via WhatsApp (+ accès CMS)',
      },
      {
        criterion: 'Design de bannières promos & fêtes',
        aggregators: 'Graphiste externe à payer (30–50 € / bannière)',
        selfPlan: 'Importez vos propres visuels dans le CMS',
        vipPlan: 'Créées sur mesure GRATUITEMENT en illimité',
      },
      {
        criterion: 'Menus multilingues touristes (FR, EN, HE RTL)',
        aggregators: 'Rarement géré proprement (surtout l’hébreu RTL)',
        selfPlan: 'Système multilingue prêt (auto-saisie)',
        vipPlan: 'Traduit et configuré clé en main sans supplément',
      },
    ] as ComparisonRow[],
  },
  howItWorks: {
    eyebrow: 'MISE EN LIGNE EN 24 À 48 HEURES',
    titleStart: 'Comment démarrer ',
    titleHighlight: 'votre boutique & CRM',
    steps: [
      {
        step: '01',
        badge: '2 MINUTES',
        title: 'Choisissez votre formule (29,90 € ou 89 €)',
        description:
          'Sélectionnez votre offre et envoyez-nous votre compte Instagram, votre lien actuel ou une simple photo de votre carte papier.',
      },
      {
        step: '02',
        badge: '0 € DE DÉPART',
        title: 'Déploiement de la marque & connexion Stripe directe',
        description:
          'En formule 89 €, nous créons le logo, importons tout le menu et les langues. En formule 29,90 €, nous activons immédiatement votre boutique et votre CMS. Vos clés Stripe sont reliées en direct.',
      },
      {
        step: '03',
        badge: 'ZÉRO MATÉRIEL',
        title: 'Ouvrez l’écran KDS sur votre tablette en cuisine',
        description:
          'Aucun terminal coûteux à acheter : ouvrez /owner sur un iPad, une tablette Android ou un PC portable avec alerte sonore et minuteur.',
      },
      {
        step: '04',
        badge: '100% MARGE',
        title: 'Partagez le lien sur TikTok / Instagram & encaissez',
        description:
          'Ajoutez le lien dans votre bio TikTok, Instagram, Google Maps et vos QR codes. Chaque commande arrive à 100% sur votre compte bancaire !',
      },
    ] as LaunchStep[],
  },
  faq: {
    eyebrow: 'QUESTIONS FRÉQUENTES',
    title: 'Tout savoir avant de lancer votre restaurant',
    subtitle: 'Conditions transparentes, sans frais cachés ni engagement abusif.',
    items: [
      {
        question: 'Est-ce vraiment 0% de commission sur les ventes ? Où va l’argent ?',
        answer:
          'Oui, 0% absolu de notre part. Vous connectez votre propre compte Stripe : 100% des paiements clients (Apple Pay, Google Pay, CB) vont directement du client vers le compte bancaire de votre établissement. Nous ne touchons jamais à votre chiffre d’affaires ; vous réglez uniquement votre abonnement fixe (29,90 € ou 89 €/mois), hors frais bancaires standard Stripe.',
      },
      {
        question: 'Quelle est la différence exacte entre l’offre à 29,90 € et celle à 89 € ?',
        answer:
          'La technologie est identique à 100% : vitrine mobile rapide, écran cuisine KDS avec minuteur, ruptures en 1 clic, Click & Collect, Stripe direct et hébergement cloud. À 29,90 €/mois, vous gérez vous-même votre carte, vos prix et vos promotions dans le CMS visuel (/super-admin). À 89 €/mois, nous faisons tout pour vous : logo offert, import initial complet du menu, traductions multilingues, bannières de fêtes et mises à jour illimitées sur simple message WhatsApp !',
      },
      {
        question: 'Puis-je changer de formule par la suite ?',
        answer:
          'Bien sûr ! Vous pouvez démarrer à 89 €/mois pour profiter de la mise en place clé en main et du suivi WhatsApp, ou commencer à 29,90 €/mois et passer au Tout Inclus quand vous le souhaitez.',
      },
      {
        question: 'Mes clients doivent-ils télécharger une application sur l’App Store ?',
        answer:
          'Non ! C’est tout le secret de notre taux de conversion sur TikTok et Instagram : la boutique s’ouvre en une fraction de seconde directement dans le navigateur mobile avec paiement Apple Pay / Google Pay.',
      },
      {
        question: 'Faut-il acheter du matériel spécial pour l’écran cuisine (KDS) ?',
        answer:
          'Aucun achat obligatoire. Le tableau de bord et l’écran cuisine (/owner) fonctionnent sur n’importe quelle tablette, ordinateur portable ou smartphone existant.',
      },
      {
        question: 'Est-ce adapté aux touristes étrangers et aux restaurants cachers / halal ?',
        answer:
          'Totalement ! Basée à Vienne et Stuttgart, notre équipe maîtrise parfaitement les exigences de la restauration cachère (Casher / Badatz, gestion de Chabbat, fêtes juives) ainsi que l’accueil des touristes grâce au multilingue intégral incluant l’hébreu en affichage droite-à-gauche (RTL).',
      },
      {
        question: 'Y a-t-il un engagement de longue durée ?',
        answer:
          'Aucun engagement bloquant sur plusieurs années. L’abonnement est mensuel et transparent.',
      },
    ] as FaqItem[],
  },
  contact: {
    eyebrow: 'LANCEMENT EN 24 À 48 HEURES',
    titleStart: 'Prêt à encaisser vos commandes à ',
    titleHighlight: '0% de commission ?',
    subtitle:
      'Remplissez le formulaire ci-dessous ou écrivez-nous directement sur WhatsApp. Envoyez le lien de votre Instagram ou carte actuelle — nous vous montrerons un aperçu concret !',
    whatsappDirectCta: 'Discuter sur WhatsApp',
    whatsappDirectSub: 'Réponse rapide en français, anglais, allemand, russe et hébreu',
    officeLabel: 'Bureaux & Équipe',
    officeValue: 'Vienne (Wien) / Stuttgart • Déploiement international',
    phoneLabel: 'Téléphone & WhatsApp (cliquer pour copier)',
    emailLabel: 'Email direct (cliquer pour copier)',
    copiedBadge: 'Copié !',
    formTitle: 'Demander l’ouverture de mon espace Alef FoodCRM',
    planLegend: '1. Sélectionnez votre formule :',
    plans: {
      vip_89: {
        title: '89 € / mois — Tout Inclus VIP Concierge',
        desc: 'Site & logo à 0 € + import menu + modifs & bannières illimitées via WhatsApp',
        badge: 'POPULAIRE',
      },
      self_29: {
        title: '29,90 € / mois — Self-Admin Pro (Gestion autonome)',
        desc: 'Box complète (Site + CRM + KDS cuisine). Gérez vos plats & prix vous-même',
        badge: 'ÉCO',
      },
    },
    labels: {
      name: 'Votre nom complet',
      namePlaceholder: 'ex. David Cohen',
      email: 'Votre adresse email',
      emailHint: 'Format : contact@restaurant.fr',
      emailError: 'Veuillez saisir une adresse email valide (ex. chef@bistro.fr).',
      phone: 'Numéro WhatsApp / Téléphone',
      phoneHint: 'Avec indicatif pays, ex. +33, +43, +32, +41, +972',
      phoneError: 'Veuillez indiquer un numéro de téléphone ou WhatsApp valide.',
      restaurant: 'Nom du restaurant & Ville',
      restaurantPlaceholder: 'ex. La Briout, Paris / Bonneuil-sur-Marne',
      link: 'Instagram, TikTok ou site actuel (facultatif)',
      linkPlaceholder: '@votre_restaurant ou https://...',
      message: 'Langues souhaitées ou précisions sur votre carte (facultatif)',
      messagePlaceholder: 'ex. Français, anglais et hébreu souhaités, environ 40 produits...',
    },
    submitBtn: 'Lancer mon restaurant (0 € de mise en service)',
    submittingBtn: 'Envoi en cours...',
    whatsappWithFormBtn: 'Ou envoyer cette demande en 1 clic sur WhatsApp',
    successTitle: 'Demande bien reçue !',
    successText:
      'Merci ! Notre équipe a reçu votre demande et vous recontacte très vite. Pour démarrer immédiatement, cliquez aussi sur le bouton WhatsApp ci-dessous.',
    errorTitle: 'Serveur email momentanément indisponible',
    errorText:
      'Aucun souci ! Cliquez sur WhatsApp ou Email ci-dessous — vos informations et la formule choisie sont déjà pré-remplies.',
    sendViaEmailFallback: 'Envoyer via votre messagerie (hello@alef-web.com)',
  },
  footer: {
    description:
      'Plateforme clé en main : CRM restaurant, commande en ligne haute conversion pour TikTok/Instagram et écran cuisine (KDS) à 0% de commission dans le monde entier.',
    demoLinksTitle: 'Accès Démo Live',
    navTitle: 'Navigation',
    contactTitle: 'Contact Direct',
    rights: 'Tous droits réservés. Alef Web Studio (Vienne / Stuttgart).',
    floatingWhatsapp: 'WhatsApp Direct',
  },
};
