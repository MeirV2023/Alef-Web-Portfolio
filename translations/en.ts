import {
  ShowcaseTabItem,
  FeatureCardItem,
  PricingTier,
  ComparisonRow,
  FaqItem,
  LaunchStep,
} from '../types';

export const en = {
  meta: {
    title: 'Alef FoodCRM | Turnkey Restaurant CRM, Online Ordering & Kitchen KDS — 0% Commission',
    description:
      'Turn TikTok & Instagram views into paid direct orders with 0% commission. Ready-to-launch boxed Storefront, CRM, Kitchen Display System (KDS) with live cooking timers, and 100% direct Stripe payouts. Plans: €29.90/mo Self-Admin or €89/mo All-Inclusive VIP.',
  },
  header: {
    brandSub: 'Restaurant CRM & OrderOS',
    nav: {
      problem: 'Why 0% Fee',
      demo: 'Live Demo',
      features: 'CRM Modules',
      calculator: 'ROI Calculator',
      pricing: 'Pricing',
      faq: 'FAQ',
    },
    liveDemoBtn: 'Live Demo ↗',
    cta: 'Launch for €0',
  },
  hero: {
    badgePrimary: 'TURNKEY BOXED CRM & ORDERING SYSTEM FOR FAST-FOOD & CAFES WORLDWIDE',
    badgeSecondary: '€0 SETUP FEE • 0% COMMISSION ON ORDERS',
    titleStart: 'Turn ',
    titleHighlight: 'TikTok & Instagram',
    titleEnd: ' Views Into Direct Paid Orders — With 0% Commission',
    subtitle:
      'A complete boxed online ordering storefront, Owner CRM, and Kitchen Display System (KDS) with live cooking timers. 100% of Apple Pay, Google Pay, and card payments go straight to your own Stripe bank account.',
    ctaPrimary: 'Choose Your Plan (from €29.90/mo)',
    ctaSecondary: 'Test Live Store (La Briout) ↗',
    ctaTour: 'Explore System Inside ↓',
    trustNote: 'Zero App Store downloads needed • Live in 24–48 hours • Works worldwide',
    metrics: [
      { value: '€0', label: 'Website, CRM & initial launch cost', accent: 'emerald' },
      { value: '0%', label: 'Order commission (100% direct to your Stripe)', accent: 'orange' },
      { value: '€29.9', label: 'Self-Admin plan or €89 All-Inclusive VIP', accent: 'yellow' },
      { value: '4–5', label: 'Orders per month pay for the entire subscription', accent: 'sky' },
    ],
    mockupCaptions: {
      livePill: 'LIVE PRODUCTION SHOWCASE • LABRIOUT.VERCEL.APP',
      desktopUrl: 'https://labriout.vercel.app — Multilingual Storefront (EN / FR / DE / HE / RU)',
      kdsUrl: 'labriout.vercel.app/owner — Owner CRM, Revenue & Live Kitchen KDS',
      zoomHint: 'Click any screen to zoom in full resolution',
    },
  },
  problemSolution: {
    eyebrow: 'WHY RESTAURANT OWNERS SWITCH TO THEIR OWN PLATFORM',
    titleStart: 'Stop Handing ',
    titleHighlight: '25–35% of Your Margin',
    titleEnd: ' to Delivery Apps & Losing Social Traffic',
    subtitle:
      'You film mouth-watering burger, shawarma, pizza, or coffee videos on TikTok and Instagram Reels — yet views stay just likes, or guests order via aggregator apps that eat your profit and hide customer data.',
    painsTitle: 'Where Restaurants Bleed Profit Today',
    pains: [
      {
        title: 'Delivery apps take up to a third of every ticket',
        text: 'High commissions on Uber Eats, DoorDash, Wolt, Deliveroo, or Lieferando force you to inflate menu prices by 20–30%, pushing loyal regulars away.',
      },
      {
        title: 'TikTok & Reels traffic drops off before checkout',
        text: 'Clunky PDF menus, outdated platforms like Eat-View, or asking hungry followers to download a native app kills impulse food orders instantly.',
      },
      {
        title: 'Peak-hour kitchen chaos & expensive web agencies',
        text: 'Orders over phone/chat get mixed up, lines build at the counter, and developers charge hundreds every time you want to change a price or promo banner.',
      },
    ],
    solutionsTitle: 'What Our Turnkey Boxed Solution Delivers',
    solutions: [
      {
        title: 'Honest menu prices & 0% commission forever',
        text: 'Connect your own Stripe API keys: 100% of every order lands directly in your restaurant bank account without middlemen touching your revenue.',
      },
      {
        title: 'From TikTok / Reels video to paid order in 3 taps',
        text: 'Guests tap the link in your bio or table QR code, customize their combo right inside the mobile browser, and pay with Apple Pay / Google Pay in seconds.',
      },
      {
        title: 'Live Kitchen KDS timer + your choice of management',
        text: 'Manage your store yourself for €29.90/mo in our clean mobile CMS — or pick €89/mo All-Inclusive and send unlimited edits & banner requests via WhatsApp!',
      },
    ],
  },
  demoShowcase: {
    eyebrow: 'INTERACTIVE PRODUCT TOUR • LABRIOUT.VERCEL.APP',
    titleStart: 'Test the Live Boxed Platform ',
    titleHighlight: 'Right Now on Your Device',
    subtitle:
      'No vaporware or static mockups. Explore our live reference deployment built for La Briout — complete with guest storefront, Kitchen KDS timer, inventory 86 control, and visual menu CMS.',
    tabsAriaLabel: 'Boxed platform modules',
    zoomButton: 'Zoom screenshot',
    liveBanner: {
      badge: 'LIVE SANDBOX OPEN 24/7',
      title: 'Open the live demo on your phone or laptop and test every role yourself',
      storefrontLabel: 'Guest Storefront',
      ownerLabel: 'Kitchen KDS & Owner CRM',
      adminLabel: 'Super-Admin Menu CMS',
      pinLabel: 'Demo PIN:',
      copyPin: 'Copy PIN',
      copied: 'Copied!',
    },
    tabs: [
      {
        id: 'storefront',
        badge: '01 • GUEST STOREFRONT & MOBILE WEB-APP',
        title: 'Storefront & Combo Builder',
        headline: 'Engineered for TikTok, Instagram & QR traffic — built to maximize checkout conversion',
        description:
          'Loads instantaneously inside TikTok and Instagram in-app browsers with zero app installation. Mouth-watering dish cards, 1-tap Meal Deals, and smart cart cross-sells boost average order value by 18–25%.',
        bullets: [
          '1-click dish customization: Meal Deal upgrades (+ Fries + Drink), sweet potato swaps, free sauce limits, and 14+ paid extra toppings.',
          'Smart "Selected for You" upsell rail inside the cart — add cold drinks and sides in a single tap before checkout.',
          'Displays weight, macros/calories, allergens, bestseller badges, plus an auto-generated printable dining-room menu (/menu).',
        ],
        liveUrl: 'https://labriout.vercel.app',
        liveCta: 'Open Live Storefront ↗',
        primaryImage: {
          src: '/showcase/storefront-categories.png',
          alt: 'Desktop restaurant storefront showing categories and sticky cart',
          caption: 'Visual category showcase, Web-App banner, and live sticky cart on a single screen',
          width: 1535,
          height: 779,
        },
        secondaryImages: [
          {
            src: '/showcase/mobile-dish-modal.jpg',
            alt: 'Mobile burger card with nutrition macros and Meal Deal toggle',
            caption: 'Dish card, macros & Meal Deal upgrade',
            width: 576,
            height: 1280,
            isMobile: true,
          },
          {
            src: '/showcase/mobile-modifiers.jpg',
            alt: 'Mobile toppings and modifiers selector',
            caption: '14+ customizable paid toppings',
            width: 576,
            height: 1280,
            isMobile: true,
          },
          {
            src: '/showcase/mobile-upsell.jpg',
            alt: 'Smart drink and side cross-sells inside mobile cart',
            caption: '1-tap cart upsells boost ticket size',
            width: 576,
            height: 1280,
            isMobile: true,
          },
        ],
      },
      {
        id: 'kds',
        badge: '02 • KITCHEN DISPLAY SYSTEM (KDS)',
        title: 'Kitchen KDS & Live Timer',
        headline: 'Total calm during rush hour: instant audio alerts, per-second cooking timer & bag QC checklist',
        description:
          'Eliminate lost paper tickets. Open the kitchen screen on any iPad, Android tablet, laptop, or phone. Chefs see exact modifiers, guest notes, and track every order stage in real time.',
        bullets: [
          'Instant incoming order cards with chime alerts and a live per-second cooking stopwatch (00:12 → SLA speed tracking).',
          'Clear workflow stages: New → Accepted → Cooking / Grill → Assembly → Ready & Picked Up.',
          'Interactive per-dish checkboxes plus a 4-point bag packing checklist (napkins, sauces, receipt, sealed bag) for zero mistakes.',
        ],
        liveUrl: 'https://labriout.vercel.app/owner',
        liveCta: 'Open Kitchen KDS (/owner) ↗',
        pinHint: 'PIN: 1111 or 7777',
        primaryImage: {
          src: '/showcase/kds-timer.jpg',
          alt: 'Kitchen KDS screen showing active order timer 00:12',
          caption: 'Active kitchen ticket with live cooking timer (00:12), modifiers, and chef notes',
          width: 946,
          height: 785,
        },
        secondaryImages: [
          {
            src: '/showcase/kds-checklist.jpg',
            alt: 'Kitchen KDS dish completion checkboxes and average SLA widget',
            caption: 'Checked-off dishes, bag QC checklist, and live average prep time (4m 55s)',
            width: 1280,
            height: 649,
          },
        ],
      },
      {
        id: 'crm',
        badge: '03 • OWNER CRM, INVENTORY 86 & STRIPE',
        title: 'CRM, 86 Stop-List & Stripe',
        headline: 'Real-time revenue & food-cost analytics, 1-click 86 Stop-List, and Click & Collect pre-orders',
        description:
          'Stay in complete control from anywhere. Commuters can pre-order dinner for an exact 15-minute pickup window on their drive home, while 100% of funds settle straight into your Stripe account.',
        bullets: [
          'Executive CRM dashboard: total orders, repeat guests, revenue vs. food-cost curves, top categories, and verified customer reviews.',
          '1-click "86 Stop-List" when an item sells out + automatic gram/piece raw ingredient deduction from kitchen stock.',
          'Scheduled Click & Collect pickup slots + Delivery mode + direct Stripe integration (Apple Pay, Google Pay, Cards).',
        ],
        liveUrl: 'https://labriout.vercel.app/owner',
        liveCta: 'Open Owner CRM ↗',
        pinHint: 'PIN: 1111 or 7777',
        primaryImage: {
          src: '/showcase/crm-analytics.jpg',
          alt: 'Owner CRM dashboard showing revenue and food-cost analytics',
          caption: 'Live revenue vs. food-cost charts, repeat customers, and category share',
          width: 1280,
          height: 655,
        },
        secondaryImages: [
          {
            src: '/showcase/crm-inventory-86.jpg',
            alt: 'Menu 86 stop-list and raw material warehouse auto-deduction',
            caption: '1-click 86 Stop-List & automatic raw ingredient stock tracking',
            width: 1280,
            height: 647,
          },
          {
            src: '/showcase/mobile-checkout.jpg',
            alt: 'Mobile checkout screen with pickup time selector and Stripe card',
            caption: 'Exact pickup slot & direct Stripe checkout',
            width: 576,
            height: 1280,
            isMobile: true,
          },
        ],
      },
      {
        id: 'cms',
        badge: '04 • SELF-SERVICE ADMIN CMS (€29.90 PLAN)',
        title: 'Visual Self-Admin CMS',
        headline: 'Edit prices, promos, photos & dishes from your phone in 10 seconds — or let us do it via WhatsApp!',
        description:
          'Our ultra-clean visual Super-Admin CMS powers the €29.90/mo Self-Admin plan so you can run your entire online store effortlessly without developers — or pick €89/mo and let our team manage everything for you.',
        bullets: [
          'Mobile & desktop menu editor (/super-admin): add or duplicate dishes in 1 tap, update prices, strikethrough old prices, and track food cost.',
          'Instant promo presets (-15%, -30%), influencer promo codes for Instagram Stories, and customizable topping groups.',
          'Built-in multilingual engine (EN, FR, DE, RU, HE with full RTL, IT & more) ready for international tourists.',
        ],
        liveUrl: 'https://labriout.vercel.app/super-admin',
        liveCta: 'Try Visual CMS (/super-admin) ↗',
        pinHint: 'PIN: 9999',
        primaryImage: {
          src: '/showcase/crm-orders-reviews.jpg',
          alt: 'Recent orders table and 5-star customer reviews',
          caption: 'Live order log with delivery timers, 5-star guest reviews, and 1-click CMS switch',
          width: 1280,
          height: 509,
        },
        secondaryImages: [
          {
            src: '/showcase/mobile-cms.jpg',
            alt: 'Mobile Super-Admin menu editor list',
            caption: 'Edit dishes & prices right from your phone',
            width: 576,
            height: 1280,
            isMobile: true,
          },
          {
            src: '/showcase/storefront-menu.png',
            alt: 'Printable bistro hall menu page',
            caption: 'Auto-synced printable dining-room menu (/menu)',
            width: 1534,
            height: 776,
          },
        ],
      },
    ] as ShowcaseTabItem[],
  },
  calculator: {
    eyebrow: 'COMMISSION SAVINGS CALCULATOR',
    titleStart: 'Calculate How Much Profit ',
    titleHighlight: 'Stays in Your Restaurant',
    subtitle:
      'Compare typical 25–35% delivery app commissions (Uber Eats, DoorDash, Wolt, Deliveroo, Lieferando) against your own fixed-fee 0%-commission platform.',
    ordersPerDayLabel: 'Online orders per day',
    ordersUnit: 'orders/day',
    avgTicketLabel: 'Average order value',
    aggregatorFeeLabel: 'Delivery app commission',
    compareWithLabel: 'Compare with our plan:',
    planSelfShort: '€29.90 / mo (Self-Admin)',
    planVipShort: '€89 / mo (All-Inclusive VIP)',
    monthlyTurnoverLabel: 'Your monthly online revenue',
    aggregatorLossLabel: 'Lost to delivery apps per month',
    ourCostLabel: 'Alef FoodCRM fixed cost (0% commission)',
    netSavingsMonthlyLabel: 'Net extra profit kept per month',
    netSavingsYearlyLabel: 'Kept in your pocket per year:',
    paybackBadge: 'Your subscription pays for itself in just',
    paybackOrdersWord: 'order(s) per month!',
    cta: 'Keep 100% of Your Revenue →',
  },
  features: {
    eyebrow: 'EVERYTHING INCLUDED IN ONE BOX',
    titleStart: 'Purpose-Built for ',
    titleHighlight: 'Fast-Food, Street-Food & Cafes',
    subtitle:
      'From smash-burger joints, shawarma & kebab spots, pizzerias, and food trucks to specialty cafes, bakeries, and Kosher / Halal restaurants worldwide.',
    items: [
      {
        icon: 'tiktok',
        badge: 'SOCIAL → ORDERS',
        title: 'Built for TikTok, Instagram Reels & Table QR',
        description:
          'One high-speed link for your TikTok bio, Instagram profile, Google Maps listing, and table QR codes. Opens instantly with zero app install friction.',
      },
      {
        icon: 'modifiers',
        badge: '+22% LARGER TICKETS',
        title: 'Smart Combos, Modifiers & Cart Upsells',
        description:
          'Flexible modifier rules: capped free sauces, paid extra toppings, 1-click Meal Deal upgrades, kitchen notes, and 1-tap drink recommendations at checkout.',
      },
      {
        icon: 'clock',
        badge: 'CLICK & COLLECT',
        title: 'Exact Pickup Time Pre-Orders (Skip the Line)',
        description:
          'Guests order on their commute home and pick an exact 15-minute pickup slot today or ahead of time — eliminating counter queues and kitchen bottlenecks.',
      },
      {
        icon: 'kds',
        badge: 'KITCHEN DISPLAY SYSTEM',
        title: 'Live Kitchen Screen & Per-Second Timer',
        description:
          'Instant chime notifications, live cooking stopwatch on every ticket, status pipeline from New to Picked Up, and bag assembly QC checkboxes.',
      },
      {
        icon: 'stripe',
        badge: '100% YOUR PAYOUTS',
        title: 'Direct Stripe Payouts Straight to Your Bank',
        description:
          'Accept Apple Pay, Google Pay, and cards using your own Stripe keys. Funds never pass through us — we take 0% cut of your turnover.',
      },
      {
        icon: 'inventory',
        badge: '86 STOP-LIST & STOCK',
        title: '1-Click Sold-Out Toggle & Raw Stock Tracking',
        description:
          'Ran out of brioche buns or sauce at 9 PM? Tap "86 Stop" on any phone or tablet to hide the dish instantly, with automatic gram/unit stock deduction.',
      },
      {
        icon: 'globe',
        badge: 'TOURIST & KOSHER READY',
        title: 'Multilingual + Native Hebrew / Arabic RTL',
        description:
          'Instant language switching (EN, FR, DE, RU, HE right-to-left, IT, ES & more). Crafted by our Vienna & Stuttgart team with deep expertise in global & Kosher (Casher / Badatz) hospitality.',
      },
      {
        icon: 'whatsapp',
        badge: 'YOUR WAY TO RUN IT',
        title: 'Self-Service CMS OR Personal WhatsApp Concierge',
        description:
          'Run everything yourself for €29.90/mo in our intuitive CMS — or choose €89/mo and simply text us on WhatsApp for unlimited free menu updates & holiday banners!',
      },
    ] as FeatureCardItem[],
  },
  pricing: {
    eyebrow: 'SIMPLE, HONEST SUBSCRIPTION PRICING',
    titleStart: 'Two Transparent Plans. ',
    titleHighlight: '€0 Setup & 0% Commission Forever',
    subtitle:
      'Both plans include the exact same enterprise-grade boxed engine (Storefront + Owner CRM + Kitchen KDS + Direct Stripe + Cloud Hosting). Simply choose whether you prefer managing content yourself or having our team do everything for you!',
    tiers: [
      {
        id: 'self_29',
        badge: 'SELF-MANAGED • FULL DIY ADMIN PANEL',
        name: 'Self-Admin Pro',
        tagline:
          'Ideal for hands-on cafe, food-truck, and fast-food owners who want to administer their own store, menu, and discounts anytime.',
        price: '29,90',
        currency: '€',
        period: '/ month',
        setupNote: 'Boxed deployment — €0 setup',
        commissionNote: '0% commission on orders • 100% direct to your Stripe',
        isPopular: false,
        highlightNote: 'Less than €1/day for a complete online ordering storefront, CRM & Kitchen KDS!',
        features: [
          'High-converting desktop & mobile ordering Web-App (ready for TikTok, Instagram & QR)',
          'Full access to Visual Super-Admin CMS (/super-admin): add & edit dishes, prices, photos, discounts (-15% / -30%), modifiers & promo codes yourself from phone or PC',
          'Owner CRM Dashboard & Kitchen Display System (KDS) with live cooking timer & audio alerts',
          '1-click 86 Stop-List & raw ingredient inventory auto-deduction',
          'Click & Collect exact time-slot pre-orders & Delivery mode',
          'Direct integration of your own Stripe account (Apple Pay, Google Pay, Cards — 0% platform fee)',
          'Fast cloud hosting, SSL security certificate & continuous platform updates',
          'Multilingual storefront engine included (enter translations anytime in your CMS)',
        ],
        differenceNote:
          'You manage your own menu items, price updates, and banners in the intuitive visual admin panel. Upgrade to the €89 VIP plan anytime.',
        cta: 'Start Self-Admin for €29.90 / mo',
      },
      {
        id: 'vip_89',
        badge: '⭐ MOST POPULAR • DONE-FOR-YOU IN WHATSAPP',
        name: 'All-Inclusive Concierge',
        tagline:
          'Zero tech headaches: we design your custom logo & store for €0, import your entire menu, translate languages, and handle unlimited updates & promo banners via WhatsApp.',
        price: '89',
        currency: '€',
        period: '/ month',
        setupNote: 'Custom store & logo design — €0 (saves €1,500–€3,000)',
        commissionNote: '0% commission on orders • 100% direct to your Stripe',
        isPopular: true,
        highlightNote: 'Your own personal restaurant IT & design department on WhatsApp — unlimited edits!',
        features: [
          'EVERYTHING in Self-Admin Pro (Storefront, CRM, Kitchen KDS with timer, Stock 86, Click & Collect, plus full CMS access)',
          'FREE custom brand setup, complete initial menu & modifier import, and custom restaurant logo design (€0 upfront!)',
          'UNLIMITED (∞) free menu, price, photo & combo updates via WhatsApp — just send a quick text or voice note and we update it fast',
          'FREE custom graphic design for seasonal promos, weekend combos, and holiday / Shabbat banners — unlimited times',
          'Done-for-you multilingual menu setup & translation (EN, FR, DE, HE with RTL, RU & more) to capture international tourists',
          'Custom domain connection, guided Stripe onboarding & priority 6-days/week personal WhatsApp support',
        ],
        differenceNote:
          'Pays for itself in just 4–5 average orders per month while we handle 100% of the technical and design work for you.',
        cta: 'Launch All-Inclusive for €89 / mo',
      },
    ] as PricingTier[],
    comparisonTitle: 'Side-by-Side Comparison: Delivery Apps vs €29.90 vs €89',
    comparisonCaption: 'Comparison between delivery aggregators, Self-Admin €29.90/mo, and All-Inclusive €89/mo',
    comparisonHeaders: {
      criterion: 'What Matters to Owners',
      aggregators: 'Delivery Apps / Legacy Menus (Eat-View, etc.)',
      selfPlan: 'Self-Admin • €29.90/mo',
      vipPlan: 'All-Inclusive • €89/mo',
    },
    comparisonRows: [
      {
        criterion: 'Commission per order',
        aggregators: '25–35% taken from every order or inflated menu prices',
        selfPlan: '0% (100% straight to your Stripe)',
        vipPlan: '0% (100% straight to your Stripe)',
      },
      {
        criterion: 'Website & brand launch cost',
        aggregators: '€1,500–€3,000 agency fee or low-converting generic menu',
        selfPlan: '€0 (ready boxed platform)',
        vipPlan: '€0 + free custom logo & full turnkey menu import',
      },
      {
        criterion: 'Kitchen Display (KDS) with live cooking timer',
        aggregators: 'Extra monthly add-on or costly proprietary tablet',
        selfPlan: 'Included (runs on any tablet/PC)',
        vipPlan: 'Included + tailored to your kitchen workflow',
      },
      {
        criterion: 'Who updates dishes, prices & discounts?',
        aggregators: 'Slow support tickets or paid developer hours',
        selfPlan: 'You in 10 sec via mobile/desktop CMS (/super-admin)',
        vipPlan: 'We do it FREE & ∞ times via WhatsApp (plus full CMS access)',
      },
      {
        criterion: 'Promo & holiday graphic banners',
        aggregators: 'Hire a freelance designer (€30–€50 per banner)',
        selfPlan: 'Upload your own banners anytime in CMS',
        vipPlan: 'Custom-designed by us FREE, unlimited times',
      },
      {
        criterion: 'Multilingual tourist menus (FR, EN, DE, HE RTL)',
        aggregators: 'Rarely supported properly (especially Hebrew RTL)',
        selfPlan: 'Multilingual engine ready (self-filled)',
        vipPlan: 'Translated & configured Done-For-You at €0 extra',
      },
    ] as ComparisonRow[],
  },
  howItWorks: {
    eyebrow: 'GO LIVE IN 24–48 HOURS',
    titleStart: 'How We Launch ',
    titleHighlight: 'Your Storefront & CRM',
    steps: [
      {
        step: '01',
        badge: '2 MINUTES',
        title: 'Pick your plan (€29.90 or €89) & share your menu',
        description:
          'Select Self-Admin (€29.90/mo) or All-Inclusive VIP (€89/mo) and send us your Instagram handle, current Uber Eats / website link, or a simple photo of your paper menu.',
      },
      {
        step: '02',
        badge: '€0 UPFRONT',
        title: 'Brand setup & direct Stripe connection',
        description:
          'On the €89 plan we design your logo, import every dish/modifier, and translate languages. On €29.90 we deploy your live instance & Super-Admin CMS right away. You connect your own Stripe keys.',
      },
      {
        step: '03',
        badge: 'NO HARDWARE COST',
        title: 'Open Kitchen KDS on any tablet or laptop',
        description:
          'Zero proprietary POS hardware required: open /owner on any iPad, Android tablet, laptop, or smartphone in the kitchen with sound alerts and live timers.',
      },
      {
        step: '04',
        badge: '100% MARGIN',
        title: 'Drop your link in TikTok / Instagram & collect orders',
        description:
          'Put your new ordering link in your TikTok & Instagram bios, Google Maps, and table QR codes. Every order pays 100% directly into your bank account with 0% commission!',
      },
    ] as LaunchStep[],
  },
  faq: {
    eyebrow: 'FREQUENTLY ASKED QUESTIONS',
    title: 'Answers for Restaurant & Cafe Owners',
    subtitle: 'Transparent terms, zero hidden fees, and complete ownership of your customer flow.',
    items: [
      {
        question: 'Is it really 0% commission on orders? How do payouts work?',
        answer:
          'Yes — 0% platform commission, ever. You connect your own Stripe account keys directly, so 100% of every customer payment (Apple Pay, Google Pay, credit/debit cards) settles directly from the guest into your restaurant bank account. Money never passes through us; we only charge the flat monthly subscription (€29.90 or €89). Standard Stripe card processing fees apply as with any card terminal.',
      },
      {
        question: 'What is the exact difference between the €29.90/mo and €89/mo plans?',
        answer:
          'Both plans run the exact same high-converting ordering storefront, mobile Web-App, Kitchen KDS with cooking timer, 86 stop-list, inventory tracking, Click & Collect scheduling, direct Stripe checkout, and fast cloud hosting. With Self-Admin Pro (€29.90/mo), you manage your menu, prices, photos, and promos yourself in our easy visual CMS (/super-admin). With All-Inclusive Concierge (€89/mo), we build your initial menu & custom logo for free, translate languages, design unlimited holiday/promo banners, and execute unlimited price/menu updates whenever you message us on WhatsApp!',
      },
      {
        question: 'Can I switch between the €29.90 and €89 plans later?',
        answer:
          'Absolutely! You can start with €89/mo so our team builds your logo, imports your entire menu, and sets up translations Done-For-You, or start on €29.90/mo and upgrade to full WhatsApp concierge anytime during busy seasons.',
      },
      {
        question: 'Do customers have to download an app from the App Store or Google Play?',
        answer:
          'No! Asking hungry social-media viewers to install a 100 MB app kills conversion. Your storefront works as an instant mobile Web-App directly inside TikTok, Instagram, Safari, and Chrome — supporting 1-tap Apple Pay and Google Pay.',
      },
      {
        question: 'Do I need to buy special tablets or POS hardware for the Kitchen KDS?',
        answer:
          'Not at all. The Owner CRM and Kitchen Display System (/owner) run smoothly in any modern browser on an existing iPad, Android tablet, laptop, desktop monitor, or smartphone.',
      },
      {
        question: 'Does it work internationally, with multiple currencies/languages, and for Kosher / Halal venues?',
        answer:
          'Yes! Our platform works worldwide across Europe, UK, Israel, North America, and beyond. It supports multi-language menus including full right-to-left (RTL) layout for Hebrew and Arabic. Based in Vienna and Stuttgart, our team also has deep firsthand experience with Kosher standards (Casher / Badatz), Shabbat scheduling, and tourist-heavy restaurant locations.',
      },
      {
        question: 'Are there long-term lock-in contracts or cancellation penalties?',
        answer:
          'Zero lock-in contracts. Subscriptions are month-to-month — you stay with us because the system pays for itself in your first 2–5 orders every month.',
      },
    ] as FaqItem[],
  },
  contact: {
    eyebrow: 'LAUNCH YOUR SYSTEM IN 24–48 HOURS',
    titleStart: 'Ready to Accept Orders With ',
    titleHighlight: '0% Commission?',
    subtitle:
      'Submit the quick form below or message us directly on WhatsApp. Share your Instagram handle or current menu link and we will show you how your restaurant will look!',
    whatsappDirectCta: 'Chat on WhatsApp Now',
    whatsappDirectSub: 'Fast response in English, German, French, Russian & Hebrew',
    officeLabel: 'Engineering & Support Hubs',
    officeValue: 'Vienna (Wien) / Stuttgart • Serving Restaurants Worldwide',
    phoneLabel: 'Phone & WhatsApp (click to copy)',
    emailLabel: 'Direct Email (click to copy)',
    copiedBadge: 'Copied!',
    formTitle: 'Get Started With Alef FoodCRM',
    planLegend: '1. Choose your preferred subscription plan:',
    plans: {
      vip_89: {
        title: '€89 / mo — All-Inclusive VIP Concierge',
        desc: '€0 custom setup & logo + menu import + unlimited WhatsApp edits & promo banners',
        badge: 'POPULAR',
      },
      self_29: {
        title: '€29.90 / mo — Self-Admin Pro (DIY CMS)',
        desc: 'Complete boxed Storefront + CRM + Kitchen KDS. Manage menu & prices yourself anytime',
        badge: 'BEST VALUE',
      },
    },
    labels: {
      name: 'Your full name',
      namePlaceholder: 'e.g. David Cohen',
      email: 'Email address',
      emailHint: 'Format: you@restaurant.com',
      emailError: 'Please enter a valid email address (e.g. owner@bistro.com).',
      phone: 'WhatsApp / Phone number',
      phoneHint: 'Include country code, e.g. +43, +33, +49, +44, +1',
      phoneError: 'Please enter a valid phone or WhatsApp number (at least 7 digits).',
      restaurant: 'Restaurant / Cafe name & City',
      restaurantPlaceholder: 'e.g. Smash Burger Club, Paris / Vienna',
      link: 'Instagram, TikTok or current website URL (optional)',
      linkPlaceholder: '@your_restaurant or https://...',
      message: 'Languages needed or notes about your menu (optional)',
      messagePlaceholder: 'e.g. Need English, French & Hebrew. Around 35 menu items...',
    },
    submitBtn: 'Request My Turnkey Launch (€0 Setup)',
    submittingBtn: 'Sending your request...',
    whatsappWithFormBtn: 'Or send this request in 1 click via WhatsApp',
    successTitle: 'Application received!',
    successText:
      'Thank you! Your request has been sent to our team and we will reach out shortly. Want an instant reply? Click the WhatsApp button below.',
    errorTitle: 'Could not reach email endpoint right now',
    errorText:
      'No problem! Click WhatsApp or Email below — your selected plan and details are already pre-filled.',
    sendViaEmailFallback: 'Send via Email App (hello@alef-web.com)',
  },
  footer: {
    description:
      'Turnkey boxed Restaurant CRM, high-converting TikTok/Instagram online ordering storefront, and live Kitchen Display System (KDS) with 0% commission for fast-food & cafes worldwide.',
    demoLinksTitle: 'Live Demo Access',
    navTitle: 'Platform',
    contactTitle: 'Direct Contact',
    rights: 'All rights reserved. Alef Web Studio (Vienna / Stuttgart).',
    floatingWhatsapp: 'WhatsApp Us',
  },
};
