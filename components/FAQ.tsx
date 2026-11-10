import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { ChevronDownIcon } from './IconComponents';

const FAQ: React.FC = () => {
  const t = useTranslations();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="faq-accordion py-16 md:py-24 bg-[#090a0e] border-y border-white/8"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff7733]">
            {t.faq.eyebrow}
          </span>
          <h2
            id="faq-heading"
            className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight"
          >
            {t.faq.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300">{t.faq.subtitle}</p>
        </div>

        {/* Semantic non-exclusive <details> accordion without headings inside <summary> */}
        <div className="mt-10 space-y-3.5">
          {t.faq.items.map((item, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="rounded-2xl bg-[#13151c] border border-white/10 open:border-[#ff5500]/45 transition-colors"
            >
              <summary className="cursor-pointer select-none px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-3.5 text-sm sm:text-base font-extrabold text-white hover:text-[#ff7733] transition-colors">
                <ChevronDownIcon className="faq-chevron w-5 h-5 text-[#ff5500] shrink-0" />
                <span>{item.question}</span>
              </summary>
              <div className="px-5 sm:px-6 pb-5 pt-1 ps-12 sm:ps-14 text-xs sm:text-sm text-gray-300 leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
