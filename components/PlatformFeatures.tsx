import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { FeatureModuleIcon } from './IconComponents';

const PlatformFeatures: React.FC = () => {
  const t = useTranslations();

  return (
    <section id="features" aria-labelledby="features-heading" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff7733]">
            {t.features.eyebrow}
          </span>
          <h2
            id="features-heading"
            className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight"
          >
            {t.features.titleStart}
            <span className="text-[#ff5500]">{t.features.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.features.items.map((item, idx) => (
            <article
              key={idx}
              className="rounded-3xl bg-[#13151c] border border-white/10 hover:border-[#ff5500]/45 p-6 flex flex-col justify-between transition-all hover:-translate-y-0.5 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#ff5500]/15 text-[#ff7733] border border-[#ff5500]/30">
                    <FeatureModuleIcon type={item.icon} className="w-6 h-6" />
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/6 text-gray-300 border border-white/10">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-base sm:text-lg font-extrabold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
