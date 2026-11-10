import React from 'react';
import { ShowcaseImage } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { ExternalLinkIcon, ZoomInIcon } from './IconComponents';

interface HeroProps {
  onOpenScreenshot: (image: ShowcaseImage, liveUrl?: string, liveCta?: string) => void;
}

const accentStyles: Record<string, string> = {
  emerald: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  orange: 'text-[#ff5500] border-[#ff5500]/35 bg-[#ff5500]/10',
  yellow: 'text-amber-300 border-amber-400/30 bg-amber-400/10',
  sky: 'text-sky-300 border-sky-400/30 bg-sky-400/10',
};

const Hero: React.FC<HeroProps> = ({ onOpenScreenshot }) => {
  const t = useTranslations();

  const storefrontImage: ShowcaseImage = {
    src: '/showcase/storefront-hero.png',
    alt: t.hero.mockupCaptions.desktopUrl,
    caption: t.hero.mockupCaptions.desktopUrl,
    width: 1535,
    height: 779,
  };

  const crmImage: ShowcaseImage = {
    src: '/showcase/crm-analytics.jpg',
    alt: t.hero.mockupCaptions.kdsUrl,
    caption: t.hero.mockupCaptions.kdsUrl,
    width: 1280,
    height: 655,
  };

  const mobileImage: ShowcaseImage = {
    src: '/showcase/mobile-home.jpg',
    alt: 'La Briout Mobile Web-App Storefront',
    caption: 'La Briout Mobile Web-App — TikTok & Instagram Instant Storefront',
    width: 576,
    height: 1280,
    isMobile: true,
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-32 sm:pt-36 xl:pt-28 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Ambient radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-gradient-to-b from-[#ff5500]/22 via-rose-600/10 to-transparent blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wider uppercase bg-[#ff5500]/15 text-[#ff7733] border border-[#ff5500]/35">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" aria-hidden="true" />
            {t.hero.badgePrimary}
          </span>
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wider uppercase bg-emerald-500/12 text-emerald-300 border border-emerald-500/30">
            {t.hero.badgeSecondary}
          </span>
        </div>

        {/* Single H1 Headline */}
        <div className="max-w-4xl mx-auto text-center">
          <h1
            id="hero-heading"
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.08] text-white"
          >
            {t.hero.titleStart}
            <span className="relative inline-block text-[#ff5500] mx-1">
              {t.hero.titleHighlight}
              <span aria-hidden="true" className="block brush-underline mt-1" />
            </span>
            {t.hero.titleEnd}
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-2xl text-sm sm:text-base font-extrabold bg-[#ff5500] hover:bg-[#ff6a1f] text-white shadow-[0_12px_32px_rgba(255,85,0,0.45)] transition-all hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="https://labriout.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm sm:text-base font-extrabold bg-[#161922] hover:bg-[#1e2230] text-white border border-white/15 transition-all hover:-translate-y-0.5"
            >
              <span>{t.hero.ctaSecondary}</span>
              <ExternalLinkIcon className="w-4 h-4 text-[#ff5500]" />
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-400">
            <span>{t.hero.trustNote}</span>
            <a
              href="#live-demo"
              className="font-bold text-[#ff7733] hover:text-white underline underline-offset-4 transition-colors"
            >
              {t.hero.ctaTour}
            </a>
          </div>
        </div>

        {/* 4 Key Value Metrics */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {t.hero.metrics.map((metric, idx) => {
            const pillClass = accentStyles[metric.accent] || accentStyles.orange;
            return (
              <div
                key={idx}
                className="metallic-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between text-start"
              >
                <span
                  className={`self-start inline-block px-3 py-1 rounded-xl font-display text-2xl sm:text-3xl font-bold border ${pillClass}`}
                >
                  {metric.value}
                </span>
                <p className="mt-3 text-xs sm:text-sm font-semibold text-gray-200 leading-snug">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3-Layer Interactive Product Showcase */}
        <div className="mt-12 sm:mt-16 relative">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3 px-1">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" aria-hidden="true" />
              <span>{t.hero.mockupCaptions.livePill}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400">
              <ZoomInIcon className="w-4 h-4 text-[#ff5500]" />
              {t.hero.mockupCaptions.zoomHint}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-end">
            {/* Primary Desktop Storefront Mockup (LCP image -> fetchPriority="high", no lazy) */}
            <div className="lg:col-span-8">
              <button
                type="button"
                onClick={() =>
                  onOpenScreenshot(storefrontImage, 'https://labriout.vercel.app', t.hero.ctaSecondary)
                }
                className="group w-full text-start rounded-2xl sm:rounded-3xl overflow-hidden bg-[#13151c] border border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.7)] hover:border-[#ff5500]/60 transition-all"
              >
                <div className="flex items-center justify-between gap-2 px-4 py-2.5 bg-[#0c0d10] border-b border-white/10">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-gray-300 truncate">
                    {t.hero.mockupCaptions.desktopUrl}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ff7733] shrink-0">
                    <ZoomInIcon className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="relative overflow-hidden bg-[#090a0e]">
                  <img
                    src={storefrontImage.src}
                    alt={storefrontImage.alt}
                    width={storefrontImage.width}
                    height={storefrontImage.height}
                    fetchPriority="high"
                    className="w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-300"
                  />
                </div>
              </button>
            </div>

            {/* Side Stack: Owner CRM/KDS + Mobile Web-App */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <button
                type="button"
                onClick={() =>
                  onOpenScreenshot(crmImage, 'https://labriout.vercel.app/owner', t.hero.ctaSecondary)
                }
                className="group w-full text-start rounded-2xl overflow-hidden bg-[#13151c] border border-white/15 shadow-2xl hover:border-emerald-400/60 transition-all"
              >
                <div className="flex items-center justify-between gap-2 px-3.5 py-2 bg-[#0c0d10] border-b border-white/10">
                  <span className="text-[11px] font-mono text-emerald-300 truncate">
                    {t.hero.mockupCaptions.kdsUrl}
                  </span>
                  <ZoomInIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                </div>
                <img
                  src={crmImage.src}
                  alt={crmImage.alt}
                  width={crmImage.width}
                  height={crmImage.height}
                  decoding="async"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </button>

              <button
                type="button"
                onClick={() =>
                  onOpenScreenshot(mobileImage, 'https://labriout.vercel.app', t.hero.ctaSecondary)
                }
                className="group w-full text-start rounded-2xl overflow-hidden bg-[#13151c] border border-white/15 p-3 flex items-center gap-3.5 hover:border-[#ff5500]/60 transition-all"
              >
                <img
                  src={mobileImage.src}
                  alt={mobileImage.alt}
                  width={mobileImage.width}
                  height={mobileImage.height}
                  decoding="async"
                  className="w-20 sm:w-24 h-auto rounded-xl border border-white/15 shrink-0 group-hover:scale-105 transition-transform"
                />
                <div className="min-w-0">
                  <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-[#ff5500]/20 text-[#ff7733]">
                    TikTok / Instagram Ready
                  </span>
                  <p className="mt-1.5 text-sm font-bold text-white leading-snug">
                    Mobile Web-App + Apple Pay / Google Pay
                  </p>
                  <p className="mt-1 text-xs text-gray-400 inline-flex items-center gap-1">
                    <ZoomInIcon className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>{t.hero.mockupCaptions.zoomHint}</span>
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
