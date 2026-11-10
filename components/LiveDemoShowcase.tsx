import React, { useRef, useState } from 'react';
import { ShowcaseImage } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../hooks/useLanguage';
import { CheckIcon, CopyIcon, ExternalLinkIcon, ZoomInIcon } from './IconComponents';

interface LiveDemoShowcaseProps {
  onOpenScreenshot: (image: ShowcaseImage, liveUrl?: string, liveCta?: string) => void;
}

const LiveDemoShowcase: React.FC<LiveDemoShowcaseProps> = ({ onOpenScreenshot }) => {
  const t = useTranslations();
  const { isRtl } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedPin, setCopiedPin] = useState<string | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const tabs = t.demoShowcase.tabs;

  const selectTab = (index: number, focusAndScroll = false) => {
    setActiveIndex(index);
    if (focusAndScroll) {
      const btn = tabRefs.current[index];
      if (btn) {
        btn.focus();
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    }
  };

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const count = tabs.length;
    const nextDelta = isRtl ? -1 : 1;
    const prevDelta = isRtl ? 1 : -1;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      selectTab((index + nextDelta + count) % count, true);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      selectTab((index + prevDelta + count) % count, true);
    } else if (e.key === 'Home') {
      e.preventDefault();
      selectTab(0, true);
    } else if (e.key === 'End') {
      e.preventDefault();
      selectTab(count - 1, true);
    }
  };

  const handleCopyPin = async (pin: string) => {
    try {
      await navigator.clipboard.writeText(pin);
      setCopiedPin(pin);
      setTimeout(() => setCopiedPin((curr) => (curr === pin ? null : curr)), 2000);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <section id="live-demo" aria-labelledby="live-demo-heading" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-emerald-400">
            {t.demoShowcase.eyebrow}
          </span>
          <h2
            id="live-demo-heading"
            className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight"
          >
            {t.demoShowcase.titleStart}
            <span className="text-[#ff5500]">{t.demoShowcase.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            {t.demoShowcase.subtitle}
          </p>
        </div>

        {/* Accessible Horizontal Tablist (modern-web-guidance: tabs) */}
        <div
          role="tablist"
          aria-label={t.demoShowcase.tabsAriaLabel}
          className="mt-10 flex items-center gap-2 overflow-x-auto scrollbar-hide p-1.5 rounded-2xl bg-[#13151c] border border-white/10"
        >
          {tabs.map((tab, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                id={`showcase-tab-${tab.id}`}
                role="tab"
                type="button"
                aria-selected={isSelected}
                aria-controls={`showcase-panel-${tab.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => selectTab(idx)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className="showcase-tab flex-1 min-w-[205px] px-4 py-3.5 rounded-xl text-start font-bold text-xs sm:text-sm text-gray-300 hover:text-white transition-colors shrink-0"
              >
                <span className="block text-[10px] font-extrabold uppercase tracking-wider text-[#ff7733]">
                  0{idx + 1}
                </span>
                <span className="block mt-0.5 truncate">{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panels: display styles live on inner wrapper so hidden attribute always works */}
        <div className="mt-6">
          {tabs.map((tab, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <div
                key={tab.id}
                id={`showcase-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`showcase-tab-${tab.id}`}
                hidden={!isSelected}
                tabIndex={0}
                className="rounded-3xl bg-[#13151c] border border-white/12 p-5 sm:p-8 shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Narrative & Live CTA */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#ff5500]/15 text-[#ff7733] border border-[#ff5500]/30">
                        {tab.badge}
                      </span>
                      <h3 className="mt-4 text-xl sm:text-2xl font-extrabold text-white leading-snug">
                        {tab.headline}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                        {tab.description}
                      </p>

                      <ul className="mt-5 space-y-3">
                        {tab.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-200">
                            <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 shrink-0">
                              <CheckIcon className="w-3.5 h-3.5" />
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
                      <a
                        href={tab.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-[#ff5500] hover:bg-[#ff6a1f] text-white shadow-lg transition-colors"
                      >
                        <span>{tab.liveCta}</span>
                        <ExternalLinkIcon className="w-4 h-4" />
                      </a>

                      {tab.pinHint && (
                        <span className="inline-flex items-center px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold bg-white/8 text-amber-300 border border-amber-400/30">
                          {tab.pinHint}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Interactive Screenshots (loading="lazy" without fetchpriority="low") */}
                  <div className="lg:col-span-7 space-y-4">
                    <button
                      type="button"
                      onClick={() => onOpenScreenshot(tab.primaryImage, tab.liveUrl, tab.liveCta)}
                      className="group w-full text-start rounded-2xl overflow-hidden bg-[#090a0e] border border-white/15 hover:border-[#ff5500]/60 transition-all"
                    >
                      <div className="relative">
                        <img
                          src={tab.primaryImage.src}
                          alt={tab.primaryImage.alt}
                          width={tab.primaryImage.width}
                          height={tab.primaryImage.height}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto max-h-[410px] object-contain mx-auto group-hover:scale-[1.015] transition-transform duration-300"
                        />
                      </div>
                      <div className="px-4 py-2.5 bg-[#0c0d10] border-t border-white/10 flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-gray-300 truncate">
                          {tab.primaryImage.caption}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#ff7733] shrink-0">
                          <ZoomInIcon className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{t.demoShowcase.zoomButton}</span>
                        </span>
                      </div>
                    </button>

                    <div
                      className={`grid gap-3 ${
                        tab.secondaryImages.length === 3
                          ? 'grid-cols-3'
                          : tab.secondaryImages.length === 2
                          ? 'grid-cols-2'
                          : 'grid-cols-1'
                      }`}
                    >
                      {tab.secondaryImages.map((img, sIdx) => (
                        <button
                          key={sIdx}
                          type="button"
                          onClick={() => onOpenScreenshot(img, tab.liveUrl, tab.liveCta)}
                          className="group text-start rounded-2xl overflow-hidden bg-[#090a0e] border border-white/12 hover:border-[#ff5500]/60 transition-all flex flex-col justify-between"
                        >
                          <div className="p-2 flex items-center justify-center flex-1">
                            <img
                              src={img.src}
                              alt={img.alt}
                              width={img.width}
                              height={img.height}
                              loading="lazy"
                              decoding="async"
                              className={`rounded-xl group-hover:scale-[1.03] transition-transform duration-300 ${
                                img.isMobile
                                  ? 'max-h-48 sm:max-h-56 w-auto object-contain'
                                  : 'w-full h-auto max-h-48 object-contain'
                              }`}
                            />
                          </div>
                          <div className="px-3 py-2 bg-[#0c0d10] border-t border-white/10 flex items-center justify-between gap-1.5">
                            <span className="text-[11px] font-semibold text-gray-300 line-clamp-1">
                              {img.caption}
                            </span>
                            <ZoomInIcon className="w-3.5 h-3.5 text-[#ff5500] shrink-0" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 24/7 Live Sandbox Access Strip */}
        <div className="mt-8 metallic-card rounded-3xl p-6 sm:p-7">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                {t.demoShowcase.liveBanner.badge}
              </span>
              <h3 className="mt-1 text-base sm:text-lg font-extrabold text-white">
                {t.demoShowcase.liveBanner.title}
              </h3>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. Guest Storefront */}
            <div className="rounded-2xl bg-[#0c0d10] border border-white/10 p-4 flex flex-col justify-between gap-3">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {t.demoShowcase.liveBanner.storefrontLabel}
                </div>
                <div className="mt-1 text-sm font-mono font-bold text-white truncate">
                  labriout.vercel.app
                </div>
              </div>
              <a
                href="https://labriout.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-white/10 hover:bg-[#ff5500] text-white transition-colors"
              >
                <span>https://labriout.vercel.app</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 2. Kitchen KDS & Owner CRM */}
            <div className="rounded-2xl bg-[#0c0d10] border border-white/10 p-4 flex flex-col justify-between gap-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {t.demoShowcase.liveBanner.ownerLabel}
                  </div>
                  <div className="mt-1 text-sm font-mono font-bold text-white">
                    labriout.vercel.app/owner
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyPin('1111')}
                  aria-label={`${t.demoShowcase.liveBanner.copyPin} 1111`}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-amber-400/15 hover:bg-amber-400/25 text-amber-300 border border-amber-400/30 transition-colors"
                >
                  <span>
                    {copiedPin === '1111'
                      ? t.demoShowcase.liveBanner.copied
                      : `${t.demoShowcase.liveBanner.pinLabel} 1111`}
                  </span>
                  <CopyIcon className="w-3.5 h-3.5" />
                </button>
              </div>
              <a
                href="https://labriout.vercel.app/owner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/35 transition-colors"
              >
                <span>/owner (KDS &amp; CRM)</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 3. Super-Admin DIY CMS */}
            <div className="rounded-2xl bg-[#0c0d10] border border-white/10 p-4 flex flex-col justify-between gap-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#ff7733]">
                    {t.demoShowcase.liveBanner.adminLabel}
                  </div>
                  <div className="mt-1 text-sm font-mono font-bold text-white">
                    labriout.vercel.app/super-admin
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopyPin('9999')}
                  aria-label={`${t.demoShowcase.liveBanner.copyPin} 9999`}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-amber-400/15 hover:bg-amber-400/25 text-amber-300 border border-amber-400/30 transition-colors"
                >
                  <span>
                    {copiedPin === '9999'
                      ? t.demoShowcase.liveBanner.copied
                      : `${t.demoShowcase.liveBanner.pinLabel} 9999`}
                  </span>
                  <CopyIcon className="w-3.5 h-3.5" />
                </button>
              </div>
              <a
                href="https://labriout.vercel.app/super-admin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-[#ff5500]/20 hover:bg-[#ff5500] text-white border border-[#ff5500]/40 transition-colors"
              >
                <span>/super-admin (Menu CMS)</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoShowcase;
