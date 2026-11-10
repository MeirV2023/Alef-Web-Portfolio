import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { ExternalLinkIcon, FlameLogoIcon, WhatsAppIcon } from './IconComponents';

const Footer: React.FC = () => {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#08090c] border-t border-white/10 pt-14 pb-24 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Brand */}
            <div className="lg:col-span-5 space-y-4">
              <a href="#top" className="inline-flex items-center gap-2.5">
                <FlameLogoIcon className="w-9 h-9" />
                <div>
                  <div className="text-lg font-black tracking-tight text-white">
                    ALEF <span className="text-[#ff5500]">FoodCRM</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    {t.header.brandSub}
                  </div>
                </div>
              </a>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
                {t.footer.description}
              </p>
            </div>

            {/* Live Demo Links */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
                {t.footer.demoLinksTitle}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <a
                    href="https://labriout.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#ff7733] transition-colors"
                  >
                    <span>Storefront (La Briout)</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://labriout.vercel.app/owner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
                  >
                    <span>KDS &amp; CRM (/owner • PIN 1111)</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://labriout.vercel.app/super-admin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#ff7733] transition-colors"
                  >
                    <span>Menu CMS (/super-admin • PIN 9999)</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
                {t.footer.navTitle}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <a href="#why-zero" className="hover:text-white transition-colors">
                    {t.header.nav.problem}
                  </a>
                </li>
                <li>
                  <a href="#live-demo" className="hover:text-white transition-colors">
                    {t.header.nav.demo}
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="hover:text-white transition-colors">
                    {t.header.nav.calculator}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    {t.header.nav.pricing}
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    {t.header.nav.faq}
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-white">
                {t.footer.contactTitle}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <a
                    href="https://wa.me/4368181656780"
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="hover:text-emerald-300 font-semibold transition-colors"
                  >
                    +43 681 816 567 80
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@alef-web.com"
                    dir="ltr"
                    className="hover:text-[#ff7733] transition-colors"
                  >
                    hello@alef-web.com
                  </a>
                </li>
                <li className="text-xs text-gray-500">Wien / Stuttgart</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <p>
              &copy; {year} {t.footer.rights}
            </p>
            <p className="text-gray-400 font-semibold">29,90 € Self-Admin • 89 € All-Inclusive</p>
          </div>
        </div>
      </footer>

      {/* Floating Quick WhatsApp Action */}
      <a
        href="https://wa.me/4368181656780"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.footer.floatingWhatsapp}
        className="fixed bottom-4 end-4 z-30 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-[0_10px_28px_rgba(16,185,129,0.45)] transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span className="hidden sm:inline">{t.footer.floatingWhatsapp}</span>
      </a>
    </>
  );
};

export default Footer;
