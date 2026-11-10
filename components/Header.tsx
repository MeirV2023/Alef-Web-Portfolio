import React, { useState, useEffect } from 'react';
import { FlameLogoIcon, ExternalLinkIcon } from './IconComponents';
import { useTranslations } from '../hooks/useTranslations';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const t = useTranslations();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#why-zero', label: t.header.nav.problem },
    { href: '#live-demo', label: t.header.nav.demo },
    { href: '#calculator', label: t.header.nav.calculator },
    { href: '#features', label: t.header.nav.features },
    { href: '#pricing', label: t.header.nav.pricing },
    { href: '#faq', label: t.header.nav.faq },
  ];

  return (
    <header
      className={`fixed top-0 inset-inline-0 z-40 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#0c0d10]/95 backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.55)]'
          : 'bg-[#0c0d10]/80 backdrop-blur-md border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 md:py-3 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2.5 shrink-0 group">
          <FlameLogoIcon className="w-9 h-9 transition-transform group-hover:scale-105" />
          <div className="leading-tight">
            <div className="text-base sm:text-lg font-black tracking-tight text-white">
              ALEF <span className="text-[#ff5500]">FoodCRM</span>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 hidden sm:block">
              {t.header.brandSub}
            </div>
          </div>
        </a>

        <nav aria-label="Primary" className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-gray-300 hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <LanguageSwitcher />

          <a
            href="https://labriout.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-extrabold bg-white/8 hover:bg-white/15 border border-white/15 text-gray-100 transition-colors whitespace-nowrap"
          >
            <span>{t.header.liveDemoBtn}</span>
          </a>

          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold bg-[#ff5500] hover:bg-[#ff6a1f] text-white shadow-[0_6px_20px_rgba(255,85,0,0.4)] transition-all whitespace-nowrap"
          >
            {t.header.cta}
          </a>
        </div>
      </div>

      {/* Compact mobile/tablet horizontal section bar */}
      <nav
        aria-label="Mobile sections"
        className="xl:hidden w-full overflow-x-auto scrollbar-hide px-4 pb-2.5 flex items-center gap-2"
      >
        <a
          href="https://labriout.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-extrabold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 whitespace-nowrap shrink-0"
        >
          <span>{t.header.liveDemoBtn}</span>
          <ExternalLinkIcon className="w-3 h-3" />
        </a>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 whitespace-nowrap shrink-0"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#ff5500] text-white whitespace-nowrap shrink-0"
        >
          {t.header.cta}
        </a>
      </nav>
    </header>
  );
};

export default Header;
