import React from 'react';
import { useTranslations } from '../hooks/useTranslations';

const HowItWorks: React.FC = () => {
  const t = useTranslations();

  return (
    <section aria-labelledby="how-it-works-heading" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff7733]">
            {t.howItWorks.eyebrow}
          </span>
          <h2
            id="how-it-works-heading"
            className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight"
          >
            {t.howItWorks.titleStart}
            <span className="text-[#ff5500]">{t.howItWorks.titleHighlight}</span>
          </h2>
        </div>

        <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.howItWorks.steps.map((item, idx) => (
            <li
              key={idx}
              className="rounded-3xl bg-[#13151c] border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-display text-4xl font-bold text-[#ff5500]">
                    {item.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-base sm:text-lg font-extrabold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
