export type PlanId = 'self_29' | 'vip_89';

export interface ShowcaseImage {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  isMobile?: boolean;
}

export interface ShowcaseTabItem {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  bullets: string[];
  liveUrl: string;
  liveCta: string;
  pinHint?: string;
  primaryImage: ShowcaseImage;
  secondaryImages: ShowcaseImage[];
}

export interface FeatureCardItem {
  icon: 'tiktok' | 'modifiers' | 'clock' | 'kds' | 'stripe' | 'inventory' | 'globe' | 'whatsapp';
  badge: string;
  title: string;
  description: string;
}

export interface PricingTier {
  id: PlanId;
  badge: string;
  name: string;
  tagline: string;
  price: string;
  currency: string;
  period: string;
  setupNote: string;
  commissionNote: string;
  isPopular: boolean;
  highlightNote: string;
  features: string[];
  differenceNote: string;
  cta: string;
}

export interface ComparisonRow {
  criterion: string;
  aggregators: string;
  selfPlan: string;
  vipPlan: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LaunchStep {
  step: string;
  title: string;
  description: string;
  badge: string;
}
