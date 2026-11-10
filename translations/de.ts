import {
  ShowcaseTabItem,
  FeatureCardItem,
  PricingTier,
  ComparisonRow,
  FaqItem,
  LaunchStep,
} from '../types';

export const de = {
  meta: {
    title: 'Alef FoodCRM | Schlüsselfertiges Restaurant-CRM, Bestellsystem & Küchen-KDS — 0% Provision',
    description:
      'Verwandeln Sie TikTok- & Instagram-Views in direkt bezahlte Bestellungen mit 0% Provision. Sofort startklarer Online-Shop, Inhaber-CRM, Küchen-Display (KDS) mit Live-Timer und 100% direkte Stripe-Auszahlung. Tarife: 29,90 €/Monat (Self-Admin) oder 89 €/Monat (All-Inclusive VIP).',
  },
  header: {
    brandSub: 'Restaurant CRM & OrderOS',
    nav: {
      problem: '0% Provision',
      demo: 'Live-Demo',
      features: 'CRM-Module',
      calculator: 'Ersparnis-Rechner',
      pricing: 'Tarife',
      faq: 'FAQ',
    },
    liveDemoBtn: 'Live-Demo ↗',
    cta: 'Start für 0 €',
  },
  hero: {
    badgePrimary: 'SCHLÜSSELFERTIGE KOMPLETTLÖSUNG FÜR FAST-FOOD, STREETFOOD, IMBISSE & CAFÉS WELTWEIT',
    badgeSecondary: 'EINRICHTUNG — 0 € • BESTELLPROVISION — 0%',
    titleStart: 'Verwandeln Sie ',
    titleHighlight: 'TikTok- & Instagram',
    titleEnd: '-Aufrufe in direkt bezahlte Bestellungen — ohne Provision',
    subtitle:
      'Die professionelle All-in-One-Box: verkaufsstarker Online-Bestellshop, Inhaber-CRM und Küchenmonitor (KDS) mit Live-Zubereitungstimer. 100% aller Zahlungen per Apple Pay, Google Pay und Karte fließen direkt auf Ihr eigenes Stripe-Geschäftskonto.',
    ctaPrimary: 'Tarif wählen (ab 29,90 €/Monat)',
    ctaSecondary: 'Live-Shop testen (La Briout) ↗',
    ctaTour: 'System im Detail ansehen ↓',
    trustNote: 'Kein App-Download nötig • Startklar in 24–48 Stunden • Weltweit einsetzbar',
    metrics: [
      { value: '0 €', label: 'Einrichtung für Shop, CRM & Basis-Start', accent: 'emerald' },
      { value: '0%', label: 'Bestellprovision (100% direkt auf Ihr Stripe)', accent: 'orange' },
      { value: '29,9 €', label: 'Self-Admin-Paket oder 89 € All-Inclusive VIP', accent: 'yellow' },
      { value: '4–5', label: 'Bestellungen im Monat decken bereits das gesamte Abo', accent: 'sky' },
    ],
    mockupCaptions: {
      livePill: 'LIVE-REFERENZSYSTEM • LABRIOUT.VERCEL.APP',
      desktopUrl: 'https://labriout.vercel.app — Mehrsprachiger Bestellshop (DE / EN / FR / HE / RU)',
      kdsUrl: 'labriout.vercel.app/owner — Inhaber-CRM, Umsatz & Live-Küchen-KDS',
      zoomHint: 'Auf einen beliebigen Screen klicken zum Vergrößern',
    },
  },
  problemSolution: {
    eyebrow: 'WARUM GASTRONOMEN AUF IHR EIGENES SYSTEM UMSTEIGEN',
    titleStart: 'Schluss mit ',
    titleHighlight: '25–35% Abgaben',
    titleEnd: ' an Lieferportale & verlorenem Social-Media-Traffic',
    subtitle:
      'Sie drehen starke Videos von Burgern, Döner/Shawarma, Pizza oder Kaffee auf TikTok und Instagram Reels – doch Aufrufe bleiben bloße Likes oder landen bei Lieferportalen, die Ihre Marge schlucken.',
    painsTitle: 'Wo Gastronomen heute täglich Gewinn verlieren',
    pains: [
      {
        title: 'Lieferplattformen kassieren bis zu ein Drittel vom Umsatz',
        text: 'Durch hohe Gebühren bei Lieferando, Wolt, Uber Eats oder Mjam/Foodora müssen Sie Speisekartenpreise um 20–30% erhöhen – Stammgäste bestellen seltener.',
      },
      {
        title: 'TikTok- & Instagram-Traffic konvertiert nicht am Smartphone',
        text: 'Statische PDF-Karten, veraltete Baukästen wie Eat-View oder App-Zwang bremsen hungrige Gäste genau im Moment des Kaufimpulses aus.',
      },
      {
        title: 'Küchenstress zu Stoßzeiten & teure Agentur-Rechnungen',
        text: 'Bestellungen per Telefon/Chat sorgen für Fehler, Schlangen entstehen an der Theke und jede Preis- oder Banneränderung kostet extra Geld beim Webdesigner.',
      },
    ],
    solutionsTitle: 'Was unsere schlüsselfertige Box sofort löst',
    solutions: [
      {
        title: 'Faire Restaurantpreise & dauerhaft 0% Provision',
        text: 'Wir hinterlegen Ihre eigenen Stripe-Schlüssel: 100% jeder Zahlung gehen ohne Umwege direkt auf das Bankkonto Ihres Betriebs.',
      },
      {
        title: 'Vom Reels-Video zur bezahlten Bestellung in 3 Klicks',
        text: 'Gäste tippen auf den Link in Ihrer Bio oder den Tisch-QR-Code, wählen Menü-Extras direkt im Browser und zahlen in Sekunden mit Apple Pay / Google Pay.',
      },
      {
        title: 'Live-Küchen-KDS mit Timer + volle Wahlfreiheit bei der Pflege',
        text: 'Verwalten Sie Ihr Menü selbst für nur 29,90 €/Monat im mobilen CMS – oder wählen Sie 89 €/Monat All-Inclusive inkl. unbegrenzter Änderungen per WhatsApp!',
      },
    ],
  },
  demoShowcase: {
    eyebrow: 'INTERAKTIVE PRODUKT-DEMO • LABRIOUT.VERCEL.APP',
    titleStart: 'Testen Sie das echte System ',
    titleHighlight: 'jetzt live auf Ihrem Gerät',
    subtitle:
      'Keine leeren Versprechen: Klicken Sie sich live durch unser Referenzprojekt La Briout – inklusive Gäste-Shop, Küchen-KDS mit Sekundentimer, 86-Stoppliste und Menü-CMS.',
    tabsAriaLabel: 'Module der Komplettlösung',
    zoomButton: 'Screenshot vergrößern',
    liveBanner: {
      badge: '24/7 OFFENER LIVE-TESTZUGANG',
      title: 'Öffnen Sie die Live-Demo am Smartphone oder Laptop und testen Sie alle Bereiche',
      storefrontLabel: 'Bestellshop für Gäste',
      ownerLabel: 'Küchen-KDS & Inhaber-CRM',
      adminLabel: 'Super-Admin Menü-CMS',
      pinLabel: 'Demo-PIN:',
      copyPin: 'PIN kopieren',
      copied: 'Kopiert!',
    },
    tabs: [
      {
        id: 'storefront',
        badge: '01 • GÄSTE-SHOP & MOBILE WEB-APP',
        title: 'Bestellshop & Menü-Konfigurator',
        headline: 'Optimiert für TikTok-, Instagram- & QR-Traffic — gebaut für maximale Kaufquote',
        description:
          'Öffnet blitzschnell direkt im In-App-Browser von TikTok und Instagram ohne App-Installation. Appetitliche Kategorien, 1-Klick-Menü-Deals und automatische Warenkorb-Empfehlungen steigern den Durchschnittsbon um 18–25%.',
        bullets: [
          '1-Klick-Konfigurator: Meal-Deal-Upgrade (+ Pommes + Getränk), Süßkartoffel-Option, gratis Saucen-Limits und über 14 bezahlte Extras.',
          'Intelligentes Cross-Selling „Für dich ausgewählt“ direkt im Warenkorb – Getränke und Beilagen mit einem Fingertipp hinzufügen.',
          'Anzeige von Gewicht, Nährwerten, Allergenen, Bestseller-Badges sowie automatisch generierte Druck-Speisekarte (/menu).',
        ],
        liveUrl: 'https://labriout.vercel.app',
        liveCta: 'Live-Shop öffnen ↗',
        primaryImage: {
          src: '/showcase/storefront-categories.png',
          alt: 'Desktop-Ansicht des Restaurant-Shops mit Kategorien und Warenkorb',
          caption: 'Übersichtliche Kategorien, Web-App-Vorschau und Live-Warenkorb auf einem Blick',
          width: 1535,
          height: 779,
        },
        secondaryImages: [
          {
            src: '/showcase/mobile-dish-modal.jpg',
            alt: 'Mobile Produktansicht mit Nährwerten und Meal Deal',
            caption: 'Produktkarte mit Nährwerten & Meal Deal',
            width: 576,
            height: 1280,
            isMobile: true,
          },
          {
            src: '/showcase/mobile-modifiers.jpg',
            alt: 'Auswahl kostenpflichtiger Extras und Toppings am Smartphone',
            caption: 'Über 14 bezahlte Extras flexibel wählbar',
            width: 576,
            height: 1280,
            isMobile: true,
          },
          {
            src: '/showcase/mobile-upsell.jpg',
            alt: 'Automatische Getränke-Empfehlungen im mobilen Warenkorb',
            caption: '1-Tap-Upselling im Warenkorb',
            width: 576,
            height: 1280,
            isMobile: true,
          },
        ],
      },
      {
        id: 'kds',
        badge: '02 • KÜCHENMONITOR (KDS) & LIVE-TIMER',
        title: 'Küchen-KDS & Echtzeit-Timer',
        headline: 'Volle Kontrolle im Mittags- und Abendgeschäft: Signalton, Sekundentimer & Pack-Checkliste',
        description:
          'Keine verlorenen Bons mehr. Das KDS läuft auf jedem vorhandenen Tablet, Laptop oder Smartphone in der Küche. Ihr Team sieht alle Sonderwünsche und steuert jede Bestellung Schritt für Schritt.',
        bullets: [
          'Sofortiger Eingang neuer Bestellungen mit akustischem Signal und sekundengenauem Zubereitungstimer (00:12 → volle SLA-Kontrolle).',
          'Klare Status-Schritte: Neu → Angenommen → Zubereitung / Grill → Verpackung → Abholbereit & Übergeben.',
          'Interaktive Abhakliste pro Gericht und Taschen-Kontrolle (Servietten, Saucen, Bon, Siegel), damit nichts vergessen wird.',
        ],
        liveUrl: 'https://labriout.vercel.app/owner',
        liveCta: 'Küchen-KDS öffnen (/owner) ↗',
        pinHint: 'PIN: 1111 oder 7777',
        primaryImage: {
          src: '/showcase/kds-timer.jpg',
          alt: 'Küchen-KDS mit aktivem Zubereitungstimer 00:12',
          caption: 'Aktiver Küchenauftrag mit Live-Timer (00:12) und Gäste-Notizen',
          width: 946,
          height: 785,
        },
        secondaryImages: [
          {
            src: '/showcase/kds-checklist.jpg',
            alt: 'Abhaken fertiger Speisen und Verpackungskontrolle im KDS',
            caption: 'Speisen-Checkliste, Taschenkontrolle & Ø Zubereitungszeit (4m 55s)',
            width: 1280,
            height: 649,
          },
        ],
      },
      {
        id: 'crm',
        badge: '03 • INHABER-CRM, LAGER & STRIPE',
        title: 'CRM, Stoppliste & Direkt-Stripe',
        headline: 'Umsatz- & Foodcost-Auswertung, 1-Klick-Ausverkauft-Schalter & Click & Collect nach Uhrzeit',
        description:
          'Behalten Sie Ihre Zahlen jederzeit im Blick. Gäste bestellen bequem auf dem Heimweg zur Wunschzeit (15-Minuten-Fenster), während 100% des Umsatzes direkt bei Ihnen landen.',
        bullets: [
          'Chef-Dashboard: Umsatz, Wareneinsatz (Food Cost), Wochentags-Trends, Top-Kategorien, Stammkunden und Bewertungen.',
          '1-Klick-Verfügbarkeit (86er Stoppliste) + automatischer Rohstoff-Abzug im Lager bei jeder Bestellung.',
          'Click & Collect mit Zeitfenster & Lieferung + direkte Stripe-Anbindung (Apple Pay, Google Pay, Kredit-/Debitkarten).',
        ],
        liveUrl: 'https://labriout.vercel.app/owner',
        liveCta: 'CRM-Dashboard öffnen ↗',
        pinHint: 'PIN: 1111 oder 7777',
        primaryImage: {
          src: '/showcase/crm-analytics.jpg',
          alt: 'Inhaber-CRM mit Umsatz-, Bestell- und Foodcost-Statistik',
          caption: 'Echtzeit-Auswertung zu Umsatz, Wareneinsatz und beliebtesten Kategorien',
          width: 1280,
          height: 655,
        },
        secondaryImages: [
          {
            src: '/showcase/crm-inventory-86.jpg',
            alt: '1-Klick-Stoppliste und Rohstoff-Lagerbestand im CRM',
            caption: 'Gerichte mit 1 Klick pausieren & automatischer Lagerabzug',
            width: 1280,
            height: 647,
          },
          {
            src: '/showcase/mobile-checkout.jpg',
            alt: 'Mobiler Checkout mit Abholzeitfenster und direkter Stripe-Zahlung',
            caption: 'Click & Collect Zeitwahl & Direktzahlung',
            width: 576,
            height: 1280,
            isMobile: true,
          },
        ],
      },
      {
        id: 'cms',
        badge: '04 • EIGENES MENÜ-CMS (FÜR DAS 29,90 € PAKET)',
        title: 'Intuitives Selbst-Admin-CMS',
        headline: 'Preise, Rabatte, Fotos & Speisen in 10 Sekunden selbst am Handy ändern — oder uns per WhatsApp schicken!',
        description:
          'Dank dieses klaren visuellen CMS können Sie im günstigen 29,90 €/Monat-Tarif Ihren gesamten Shop selbstständig ohne Programmierer verwalten – oder im 89 €-Tarif alles bequem unserem Team überlassen.',
        bullets: [
          'Mobiler & Desktop-Menü-Editor (/super-admin): Gerichte anlegen, mit 1 Klick duplizieren, Preise und Streichpreise sofort anpassen.',
          'Schnell-Rabattbuttons (-15%, -30%), Gutscheincodes für Influencer/Reels und flexible Extras-Verwaltung.',
          'Sofortige Mehrsprachigkeit (DE, EN, FR, RU, HE inkl. RTL u.v.m.) für internationale Gäste und Touristen.',
        ],
        liveUrl: 'https://labriout.vercel.app/super-admin',
        liveCta: 'Menü-CMS testen (/super-admin) ↗',
        pinHint: 'PIN: 9999',
        primaryImage: {
          src: '/showcase/crm-orders-reviews.jpg',
          alt: 'Bestellübersicht mit Liefer-Timern und Kundenbewertungen',
          caption: 'Bestelljournal mit Live-Timern, Gästebewertungen und Schnellzugriff aufs CMS',
          width: 1280,
          height: 509,
        },
        secondaryImages: [
          {
            src: '/showcase/mobile-cms.jpg',
            alt: 'Mobile Speisekarten-Verwaltung im Super-Admin-Modus',
            caption: 'Speisen & Preise direkt vom Smartphone pflegen',
            width: 576,
            height: 1280,
            isMobile: true,
          },
          {
            src: '/showcase/storefront-menu.png',
            alt: 'Automatisch gestaltete Druck-Speisekarte für den Gastraum',
            caption: 'Automatisch generierte Druck-Speisekarte (/menu)',
            width: 1534,
            height: 776,
          },
        ],
      },
    ] as ShowcaseTabItem[],
  },
  calculator: {
    eyebrow: 'IHR PERSÖNLICHER GEWINN-RECHNER',
    titleStart: 'Berechnen Sie, wie viel Umsatz ',
    titleHighlight: 'in Ihrer eigenen Kasse bleibt',
    subtitle:
      'Vergleichen Sie laufende Lieferportal-Provisionen (Lieferando, Wolt, Uber Eats, Mjam) mit der kleinen Fixgebühr Ihrer eigenen Bestellplattform.',
    ordersPerDayLabel: 'Online-Bestellungen pro Tag',
    ordersUnit: 'Best./Tag',
    avgTicketLabel: 'Durchschnittlicher Bestellwert',
    aggregatorFeeLabel: 'Provision der Lieferplattform',
    compareWithLabel: 'Vergleichen mit unserem Tarif:',
    planSelfShort: '29,90 € / Monat (Self-Admin)',
    planVipShort: '89 € / Monat (All-Inclusive)',
    monthlyTurnoverLabel: 'Ihr monatlicher Online-Umsatz',
    aggregatorLossLabel: 'Gebühren an Lieferportale pro Monat',
    ourCostLabel: 'Alef FoodCRM Fixpreis (0% Provision)',
    netSavingsMonthlyLabel: 'Ihre Netto-Ersparnis pro Monat',
    netSavingsYearlyLabel: 'Mehrgewinn in 1 Jahr:',
    paybackBadge: 'Ihr Abo refinanziert sich bereits nach nur',
    paybackOrdersWord: 'Bestellung(en) im Monat!',
    cta: 'Diesen Gewinn jetzt sichern →',
  },
  features: {
    eyebrow: 'ALLES IN EINER KOMPLETTBOX',
    titleStart: 'Speziell entwickelt für ',
    titleHighlight: 'Fast-Food, Streetfood, Imbisse & Cafés',
    subtitle:
      'Von Burger-Grills, Döner-/Shawarma-Läden, Pizzerien und Foodtrucks bis zu Cafés, Bäckereien sowie koscheren und Halal-Restaurants weltweit.',
    items: [
      {
        icon: 'tiktok',
        badge: 'SOCIAL → UMSATZ',
        title: 'Perfekt für TikTok, Reels & Tisch-QR',
        description:
          'Ein ultraschneller Link für Ihre TikTok- & Instagram-Bio, Google Maps und QR-Aufsteller im Lokal. Lädt sofort ohne App-Zwang.',
      },
      {
        icon: 'modifiers',
        badge: '+22% HÖHERER BON',
        title: 'Smarte Menüs, Toppings & Upselling',
        description:
          'Flexible Extras: kostenlose Saucen mit Limit, bezahlte Zusatz-Toppings, Meal-Deal-Upgrades und Getränke-Vorschläge im Warenkorb.',
      },
      {
        icon: 'clock',
        badge: 'CLICK & COLLECT',
        title: 'Vorbestellung auf die Wunschzeit',
        description:
          'Gäste bestellen unterwegs vor und wählen ihr exaktes 15-Minuten-Abholfenster. Keine Warteschlangen an der Kasse, entspannte Planung in der Küche.',
      },
      {
        icon: 'kds',
        badge: 'KITCHEN DISPLAY SYSTEM',
        title: 'Küchenmonitor mit Live-Stoppuhr',
        description:
          'Akustischer Bestellalarm, Sekundentimer pro Bon, klare Status-Stufen bis zur Übergabe und Pack-Checkliste gegen vergessene Beilagen.',
      },
      {
        icon: 'stripe',
        badge: '100% IHR UMSATZ',
        title: 'Direktauszahlung auf Ihr Stripe-Konto',
        description:
          'Apple Pay, Google Pay und Kartenzahlung über Ihre eigenen Stripe-Keys. Ihr Geld läuft niemals über uns – garantiert 0% Umsatzbeteiligung.',
      },
      {
        icon: 'inventory',
        badge: 'LAGER & 86-STOPPLIST',
        title: '1-Klick-Ausverkauft & Bestandsabzug',
        description:
          'Buns oder Sauce am Abend leer? Ein Tipp am Tablet oder Handy blendet das Gericht sofort im Shop aus. Inklusive automatischem Zutatenabzug.',
      },
      {
        icon: 'globe',
        badge: 'INTERNATIONAL & RTL',
        title: 'Mehrsprachig + echtes RTL (Hebräisch)',
        description:
          'Sofortiger Sprachwechsel (DE, EN, FR, RU, HE mit Rechts-nach-links-Layout u.v.m.). Ideal für Tourismus-Hotspots sowie Koscher-/Halal-Betriebe.',
      },
      {
        icon: 'whatsapp',
        badge: 'FREIE TARIFWAHL',
        title: 'Eigenes CMS ODER WhatsApp-Rundumservice',
        description:
          'Verwalten Sie alles selbst für 29,90 €/Monat im einfachen CMS – oder lehnen Sie sich für 89 €/Monat zurück und unser Team erledigt alles per WhatsApp!',
      },
    ] as FeatureCardItem[],
  },
  pricing: {
    eyebrow: 'TRANSPARENTE & FAIRE PREISE',
    titleStart: 'Zwei klare Pakete. ',
    titleHighlight: '0 € Einrichtung & 0% Provision',
    subtitle:
      'In beiden Tarifen erhalten Sie die komplette Profi-Plattform (Bestellshop + CRM + Küchen-KDS + Direkt-Stripe + Cloud-Hosting). Sie entscheiden nur, wer die Inhalte pflegt: Sie selbst oder unser Team!',
    tiers: [
      {
        id: 'self_29',
        badge: 'SELBSTVERWALTUNG • DIY CMS',
        name: 'Self-Admin Pro',
        tagline:
          'Ideal für aktive Inhaber und Betriebsleiter, die Speisekarte, Preise und Aktionen selbstständig über das einfache Admin-Panel verwalten möchten.',
        price: '29,90',
        currency: '€',
        period: '/ Monat',
        setupNote: 'Bereitstellung der Box — 0 €',
        commissionNote: '0% Bestellprovision • 100% direkt auf Ihr Stripe',
        isPopular: false,
        highlightNote: 'Nur ~1 € pro Tag für eigenen Online-Shop, CRM und Küchen-KDS!',
        features: [
          'Verkaufsstarker Bestellshop & Mobile Web-App (perfekt für TikTok, Instagram & QR-Codes)',
          'Voller Zugriff auf das visuelle CMS (/super-admin): Speisen, Preise, Fotos, Rabatte (-15% / -30%) und Gutscheincodes selbst am Handy oder PC pflegen',
          'Inhaber-Dashboard & Küchenmonitor (KDS) mit Live-Timer und Signalton',
          '1-Klick-Stoppliste (Ausverkauft-Schalter) & Rohstoff-Lagerverwaltung',
          'Vorbestellung mit Zeitfenster (Click & Collect) & Liefermodus',
          'Direkte Anbindung Ihres eigenen Stripe-Kontos (Apple Pay, Google Pay, Karten — 0% Provision an uns)',
          'Schnelles Cloud-Hosting, SSL-Verschlüsselung & laufende Plattform-Updates',
          'Mehrsprachige Shop-Oberfläche (Übersetzungen selbst im CMS eintragbar)',
        ],
        differenceNote:
          'Menüpflege, Preisänderungen und eigene Banner verwalten Sie flexibel selbst im Admin-Bereich. Ein Upgrade auf 89 € ist jederzeit möglich.',
        cta: 'Self-Admin für 29,90 € / Monat wählen',
      },
      {
        id: 'vip_89',
        badge: '⭐ BELIEBTESTE WAHL • ALL-INCLUSIVE SORGLOS',
        name: 'All-Inclusive Concierge',
        tagline:
          'Komplettservice ohne Zeitaufwand: Wir gestalten Logo & Shop gratis, pflegen Ihre gesamte Karte ein und übernehmen unbegrenzt alle Preis-, Menü- und Bannerwünsche per WhatsApp.',
        price: '89',
        currency: '€',
        period: '/ Monat',
        setupNote: 'Shop-Aufbau & Logo-Design — 0 € (Sie sparen bis zu 2.500 €)',
        commissionNote: '0% Bestellprovision • 100% direkt auf Ihr Stripe',
        isPopular: true,
        highlightNote: 'Ihre eigene IT- & Grafikabteilung direkt in WhatsApp — ohne Limit!',
        features: [
          'ALLES aus Self-Admin Pro enthalten (Shop, CRM, Küchen-KDS mit Live-Timer, Lager, Click & Collect sowie voller CMS-Zugang)',
          'KOSTENLOSE individuelle Einrichtung, kompletter Import Ihrer Speisekarte & Erstellung eines neuen Marken-Logos (0 € Startkosten!)',
          'UNBEGRENZTE (∞) kostenlose Updates per WhatsApp: Sprachnachricht oder Foto genügt – wir ändern Preise, Kombis, Bilder und neue Gerichte für Sie',
          'KOSTENLOSES Grafikdesign für Aktions- und Feiertagsbanner so oft Sie möchten (Saison-Deals, Feiertage, Schabbat, Wochen-Specials)',
          'Schlüsselfertige Übersetzung & Einrichtung aller gewünschten Sprachen (DE, EN, FR, HE inkl. RTL, RU u.a.) für Touristen und Stammgäste',
          'Anbindung Ihrer eigenen Domain, Stripe-Einrichtung & persönlicher Priority-Support an 6 Tagen pro Woche',
        ],
        differenceNote:
          'Bereits mit 4–5 durchschnittlichen Bestellungen im Monat bezahlt – und wir nehmen Ihnen 100% der Technik- und Designarbeit ab.',
        cta: 'All-Inclusive für 89 € / Monat starten',
      },
    ] as PricingTier[],
    comparisonTitle: 'Direktvergleich: Lieferportale vs. 29,90 € vs. 89 €',
    comparisonCaption: 'Vergleich zwischen Lieferplattformen und den beiden Alef FoodCRM Tarifen',
    comparisonHeaders: {
      criterion: 'Was für Inhaber zählt',
      aggregators: 'Lieferportale / Alte Menüs (Eat-View etc.)',
      selfPlan: 'Self-Admin • 29,90 €/Monat',
      vipPlan: 'All-Inclusive • 89 €/Monat',
    },
    comparisonRows: [
      {
        criterion: 'Provision pro Bestellung',
        aggregators: 'Bis zu 25–35% Abzug vom Umsatz oder versteckte Gebühren',
        selfPlan: '0% (100% direkt auf Ihr Stripe)',
        vipPlan: '0% (100% direkt auf Ihr Stripe)',
      },
      {
        criterion: 'Einrichtungs- & Webdesign-Kosten',
        aggregators: '1.500 € – 3.000 € bei Agenturen oder schwache Standard-Vorlage',
        selfPlan: '0 € (startklare Software-Box)',
        vipPlan: '0 € inkl. eigenem Logo & komplettem Menü-Import',
      },
      {
        criterion: 'Küchenmonitor (KDS) mit Live-Timer & Stoppliste',
        aggregators: 'Meist Aufpreis oder teure Spezial-Hardware nötig',
        selfPlan: 'Inklusive (läuft auf jedem Tablet/PC)',
        vipPlan: 'Inklusive + abgestimmt auf Ihre Küchenabläufe',
      },
      {
        criterion: 'Wer ändert Gerichte, Preise & Rabatte?',
        aggregators: 'Langwierig über Support-Tickets oder kostenpflichtig',
        selfPlan: 'Sie selbst in 10 Sek. im einfachen CMS (/super-admin)',
        vipPlan: 'Wir kostenlos & ∞ oft per WhatsApp-Nachricht (plus eigener CMS-Zugang)',
      },
      {
        criterion: 'Grafikdesign für Aktions- & Feiertagsbanner',
        aggregators: 'Externer Grafiker nötig (30–60 € pro Banner)',
        selfPlan: 'Eigene Banner jederzeit im CMS hochladbar',
        vipPlan: 'Wir gestalten & aktualisieren Banner KOSTENLOS ohne Limit',
      },
      {
        criterion: 'Mehrsprachige Karte für Touristen (DE, EN, FR, HE RTL)',
        aggregators: 'Oft fehlerhaft (besonders bei Hebräisch RTL)',
        selfPlan: 'Mehrsprachiges System bereit (eigene Eingabe)',
        vipPlan: 'Wir übersetzen & pflegen alle gewünschten Sprachen schlüsselfertig ein',
      },
    ] as ComparisonRow[],
  },
  howItWorks: {
    eyebrow: 'SCHNELLSTART IN 24–48 STUNDEN',
    titleStart: 'So einfach geht Ihr ',
    titleHighlight: 'eigener Bestellshop & CRM live',
    steps: [
      {
        step: '01',
        badge: '2 MINUTEN',
        title: 'Anfrage senden & Wunschtarif wählen',
        description:
          'Wählen Sie 29,90 €/Monat (Selbstverwaltung) oder 89 €/Monat (All-Inclusive) und schicken Sie uns Ihren Instagram-Namen oder ein Foto Ihrer aktuellen Karte.',
      },
      {
        step: '02',
        badge: '0 € START',
        title: 'Shop, Branding & Ihr Stripe werden verbunden',
        description:
          'Im 89 €-Tarif erstellen wir Logo, Speisekarte, Extras und Übersetzungen komplett für Sie. Im 29,90 €-Tarif schalten wir Ihre eigene Plattform samt Admin-Zugang frei.',
      },
      {
        step: '03',
        badge: 'OHNE HARDWARE-KAUF',
        title: 'Küchen-KDS auf jedem vorhandenen Tablet öffnen',
        description:
          'Keine teuren Kassenterminals nötig: Öffnen Sie /owner einfach auf einem iPad, Android-Tablet oder Laptop in der Küche – mit Ton und Live-Timer.',
      },
      {
        step: '04',
        badge: '100% UMSATZ',
        title: 'Link in TikTok / Instagram setzen & kassieren',
        description:
          'Hinterlegen Sie Ihren Link in Social Media, Google Maps und auf Tisch-QR-Codes. Jede Bestellung zahlt mit 0% Provision direkt auf Ihr Konto ein!',
      },
    ] as LaunchStep[],
  },
  faq: {
    eyebrow: 'ANTWORTEN AUF WICHTIGE FRAGEN',
    title: 'Häufige Fragen von Gastronomen',
    subtitle: '100% transparent – ohne Kleingedrucktes oder versteckte Umsatzgebühren.',
    items: [
      {
        question: 'Stimmt es wirklich, dass 0% Bestellprovision anfallen? Wohin fließt das Geld?',
        answer:
          'Ja, zu 100%. Wir hinterlegen Ihre eigenen geschäftlichen Stripe-Schlüssel direkt im System. Jede Zahlung Ihrer Gäste (Apple Pay, Google Pay, Kredit-/Debitkarte) geht unmittelbar auf Ihr eigenes Bankkonto. Wir greifen niemals in Ihren Zahlungsfluss ein und berechnen lediglich die feste Monatspauschale (29,90 € oder 89 €). Es fallen nur die regulären Kartentransaktionsgebühren Ihrer Bank bzw. von Stripe an.',
      },
      {
        question: 'Was ist der genaue Unterschied zwischen dem 29,90 € und dem 89 € Tarif?',
        answer:
          'Die Software-Technik ist in beiden Paketen identisch stark: Bestellshop, Mobile Web-App, Küchen-KDS mit Live-Timer, Stoppliste, Lager, Click & Collect, Direkt-Stripe und Hosting. Im 29,90 €/Monat-Tarif pflegen Sie Speisen, Preise und Banner selbst über unser kinderleichtes Admin-Panel (/super-admin). Im 89 €/Monat-Tarif übernehmen wir alles für Sie: kostenloses Logo-Design, kompletter Erst-Import Ihrer Speisekarte, Übersetzungen, kostenlose Werbebanner und unbegrenzte Änderungen einfach per WhatsApp-Nachricht!',
      },
      {
        question: 'Kann ich später jederzeit zwischen den beiden Tarifen wechseln?',
        answer:
          'Selbstverständlich! Viele Betriebe starten z. B. mit dem 89 € All-Inclusive-Paket für den kompletten Aufbau samt Logo, Übersetzungen und laufenden Aktionsbannern – oder beginnen mit 29,90 € und wechseln bei Bedarf jederzeit flexibel.',
      },
      {
        question: 'Müssen meine Gäste erst eine App im App Store oder bei Google Play herunterladen?',
        answer:
          'Nein! Genau deshalb ist die Kaufquote über TikTok und Instagram so hoch: Niemand lädt für einen Burger oder Kaffee extra eine App herunter. Ihr Shop funktioniert als blitzschnelle Mobile Web-App direkt im Browser mit Apple Pay und Google Pay in wenigen Sekunden.',
      },
      {
        question: 'Welche Geräte muss ich für das Küchen-KDS anschaffen?',
        answer:
          'Sie müssen keinerlei Spezial-Hardware kaufen. Das Küchen-Display (/owner) läuft im Browser in Echtzeit auf jedem vorhandenen iPad, Android-Tablet, Laptop, Kassen-PC oder Smartphone.',
      },
      {
        question: 'In welchen Ländern und Sprachen funktioniert die Lösung? Auch für Koscher / Halal?',
        answer:
          'Weltweit – in Österreich, Deutschland, der Schweiz, Frankreich, ganz Europa, Israel, UK und den USA. Alle Sprachen inklusive echter Rechts-nach-links-Darstellung (RTL für Hebräisch/Arabisch) werden unterstützt. Unser Team in Wien und Stuttgart kennt zudem alle Anforderungen koscherer und Halal-Gastronomie.',
      },
      {
        question: 'Gibt es eine lange Vertragsbindung?',
        answer:
          'Nein, keine mehrjährigen Knebelverträge. Das Abo läuft fair auf Monatsbasis – Sie bleiben bei uns, weil sich die Plattform schon mit den ersten 2–5 Bestellungen jeden Monat von selbst bezahlt.',
      },
    ] as FaqItem[],
  },
  contact: {
    eyebrow: 'STARTKLAR IN 24–48 STUNDEN',
    titleStart: 'Bereit für Direktbestellungen mit ',
    titleHighlight: '0% Provision?',
    subtitle:
      'Senden Sie kurz das Formular ab oder schreiben Sie uns direkt auf WhatsApp. Schicken Sie Ihren Instagram-Namen oder Ihre aktuelle Karte – wir zeigen Ihnen, wie Ihr Lokal aussehen wird!',
    whatsappDirectCta: 'Jetzt direkt auf WhatsApp schreiben',
    whatsappDirectSub: 'Schnelle Antwort auf Deutsch, Englisch, Französisch, Russisch & Hebräisch',
    officeLabel: 'Entwicklung & Betreuung',
    officeValue: 'Wien / Stuttgart • Weltweit für Gastronomen im Einsatz',
    phoneLabel: 'Telefon & WhatsApp (Klicken zum Kopieren)',
    emailLabel: 'E-Mail-Adresse (Klicken zum Kopieren)',
    copiedBadge: 'Kopiert!',
    formTitle: 'Start-Anfrage für Alef FoodCRM',
    planLegend: '1. Wählen Sie Ihren gewünschten Tarif:',
    plans: {
      vip_89: {
        title: '89 € / Monat — All-Inclusive VIP Concierge',
        desc: 'Shop & Logo für 0 € + Menü-Import + unbegrenzte Änderungen & Banner per WhatsApp',
        badge: 'BELIEBT',
      },
      self_29: {
        title: '29,90 € / Monat — Self-Admin Pro (Eigenes CMS)',
        desc: 'Komplette Box (Shop + CRM + Küchen-KDS). Menü & Preise selbst im einfachen CMS pflegen',
        badge: 'SPAR-TIPP',
      },
    },
    labels: {
      name: 'Ihr Name',
      namePlaceholder: 'z. B. David Cohen',
      email: 'Ihre E-Mail-Adresse',
      emailHint: 'Format: name@restaurant.at',
      emailError: 'Bitte geben Sie eine gültige E-Mail-Adresse ein (z. B. chef@bistro.de).',
      phone: 'WhatsApp / Telefonnummer',
      phoneHint: 'Mit Ländervorwahl, z. B. +43, +49, +41, +33',
      phoneError: 'Bitte geben Sie eine gültige Telefon- oder WhatsApp-Nummer ein (mind. 7 Ziffern).',
      restaurant: 'Name des Lokals & Stadt / Land',
      restaurantPlaceholder: 'z. B. Smash Burger Bar, Wien / Stuttgart',
      link: 'Instagram, TikTok oder aktuelle Webseite (optional)',
      linkPlaceholder: '@ihr_restaurant oder https://...',
      message: 'Gewünschte Sprachen oder kurze Info zur Speisekarte (optional)',
      messagePlaceholder: 'z. B. Deutsch, Englisch & Hebräisch benötigt, ca. 35 Speisen...',
    },
    submitBtn: 'Jetzt unverbindlich anfragen (0 € Einrichtung)',
    submittingBtn: 'Anfrage wird gesendet...',
    whatsappWithFormBtn: 'Oder diese Anfrage mit 1 Klick per WhatsApp senden',
    successTitle: 'Ihre Anfrage ist eingegangen!',
    successText:
      'Vielen Dank! Wir haben Ihre Daten per E-Mail erhalten und melden uns umgehend bei Ihnen. Für eine Sofort-Antwort klicken Sie einfach unten auf WhatsApp.',
    errorTitle: 'E-Mail-Server momentan nicht erreichbar',
    errorText:
      'Kein Problem! Klicken Sie unten auf WhatsApp oder E-Mail – Ihre eingegebenen Daten sind bereits fertig vorausgefüllt.',
    sendViaEmailFallback: 'Über E-Mail-Programm senden (hello@alef-web.com)',
  },
  footer: {
    description:
      'Schlüsselfertiges Restaurant-CRM, verkaufsstarker TikTok-/Instagram-Bestellshop und Live-Küchenmonitor (KDS) mit 0% Provision für Fast-Food, Streetfood und Cafés weltweit.',
    demoLinksTitle: 'Live-Demo Zugänge',
    navTitle: 'Navigation',
    contactTitle: 'Direktkontakt',
    rights: 'Alle Rechte vorbehalten. Alef Web Studio (Wien / Stuttgart).',
    floatingWhatsapp: 'WhatsApp Chat',
  },
};
