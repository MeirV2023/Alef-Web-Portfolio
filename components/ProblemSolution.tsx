import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { CheckIcon, XMarkIcon } from './IconComponents';

const ProblemSolution: React.FC = () => {
  const t = useTranslations();

  return (
    <section
      id="why-zero"
      aria-labelledby="why-zero-heading"
      className="py-16 md:py-24 bg-[#090a0e] border-y border-white/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff7733]">
            {t.problemSolution.eyebrow}
          </span>
          <h2
            id="why-zero-heading"
            className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight"
          >
            {t.problemSolution.titleStart}
            <span className="text-rose-400">{t.problemSolution.titleHighlight}</span>
            {t.problemSolution.titleEnd}
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            {t.problemSolution.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Pain Points Column */}
          <div className="rounded-3xl bg-[#13151c] border border-rose-500/25 p-6 sm:p-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-rose-500/15 text-rose-400 border border-rose-500/30 shrink-0">
                <XMarkIcon className="w-5 h-5" />
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-rose-300">
                {t.problemSolution.painsTitle}
              </h3>
            </div>

            <div className="mt-6 space-y-5">
              {t.problemSolution.pains.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0c0d10]/80 border border-white/8 p-4 sm:p-5 flex items-start gap-3.5"
                >
                  <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-500/15 text-rose-400 shrink-0">
                    <XMarkIcon className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">{item.title}</h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Boxed CRM Solutions Column */}
          <div className="metallic-card-emerald rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/35 shrink-0">
                <CheckIcon className="w-5 h-5" />
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-emerald-300">
                {t.problemSolution.solutionsTitle}
              </h3>
            </div>

            <div className="mt-6 space-y-5">
              {t.problemSolution.solutions.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0c0d10]/85 border border-emerald-500/20 p-4 sm:p-5 flex items-start gap-3.5"
                >
                  <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 shrink-0">
                    <CheckIcon className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">{item.title}</h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
