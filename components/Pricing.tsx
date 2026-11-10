import React from 'react';
import { PlanId } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { CheckIcon } from './IconComponents';

interface PricingProps {
  selectedPlan: PlanId;
  onSelectPlan: (plan: PlanId) => void;
}

const Pricing: React.FC<PricingProps> = ({ selectedPlan, onSelectPlan }) => {
  const t = useTranslations();

  const handleChooseTier = (plan: PlanId) => {
    onSelectPlan(plan);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableCssVars = {
    '--col-2': JSON.stringify(t.pricing.comparisonHeaders.aggregators),
    '--col-3': JSON.stringify(t.pricing.comparisonHeaders.selfPlan),
    '--col-4': JSON.stringify(t.pricing.comparisonHeaders.vipPlan),
  } as React.CSSProperties;

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-16 md:py-24 bg-[#090a0e] border-y border-white/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-emerald-400">
            {t.pricing.eyebrow}
          </span>
          <h2
            id="pricing-heading"
            className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight"
          >
            {t.pricing.titleStart}
            <span className="text-[#ff5500]">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Two Pricing Tiers: 29,90 € vs 89 € */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {t.pricing.tiers.map((tier) => {
            const isVip = tier.isPopular;
            const isSelected = selectedPlan === tier.id;

            return (
              <article
                key={tier.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isVip
                    ? 'metallic-card'
                    : 'bg-[#13151c] border border-emerald-500/30 shadow-2xl'
                } ${isSelected ? 'ring-2 ring-offset-2 ring-offset-[#090a0e] ring-[#ff5500]' : ''}`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-block px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                        isVip
                          ? 'bg-[#ff5500] text-white shadow-[0_4px_16px_rgba(255,85,0,0.45)]'
                          : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/35'
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-300">{tier.setupNote}</span>
                  </div>

                  <div className="mt-5">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#0c0d10] border border-white/10">
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`font-display text-5xl sm:text-6xl font-bold leading-none ${
                          isVip ? 'text-[#ff5500]' : 'text-emerald-400'
                        }`}
                      >
                        {tier.price} {tier.currency}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-gray-300">
                        {tier.period}
                      </span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm font-extrabold text-white">
                      {tier.commissionNote}
                    </p>
                    <p
                      className={`mt-1.5 text-xs font-semibold ${
                        isVip ? 'text-amber-300' : 'text-emerald-300'
                      }`}
                    >
                      {tier.highlightNote}
                    </p>
                  </div>

                  {/* Included Features */}
                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                        <span
                          className={`mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${
                            isVip
                              ? 'bg-[#ff5500]/20 text-[#ff7733]'
                              : 'bg-emerald-500/20 text-emerald-300'
                          }`}
                        >
                          <CheckIcon className="w-3.5 h-3.5" />
                        </span>
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10 space-y-4">
                  <p className="text-xs text-gray-400 leading-relaxed">{tier.differenceNote}</p>

                  <button
                    type="button"
                    onClick={() => handleChooseTier(tier.id)}
                    className={`w-full py-4 px-6 rounded-2xl text-sm sm:text-base font-extrabold transition-all ${
                      isVip
                        ? 'bg-[#ff5500] hover:bg-[#ff6a1f] text-white shadow-[0_12px_30px_rgba(255,85,0,0.45)]'
                        : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-[0_10px_24px_rgba(16,185,129,0.28)]'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Responsive Comparison Table (@container + sticky headers per modern-web-guidance: responsive-table) */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white text-center mb-6">
            {t.pricing.comparisonTitle}
          </h3>

          <div
            tabIndex={0}
            role="region"
            aria-labelledby="comparison-caption"
            style={tableCssVars}
            className="comparison-table-wrapper rounded-3xl border border-white/12 bg-[#13151c] shadow-2xl"
          >
            <table className="comparison-table text-start text-xs sm:text-sm">
              <caption id="comparison-caption" className="visually-hidden">
                {t.pricing.comparisonCaption}
              </caption>
              <thead>
                <tr className="bg-[#191d28] text-gray-200">
                  <th scope="col" className="p-4 font-extrabold border-b border-white/10 text-start">
                    {t.pricing.comparisonHeaders.criterion}
                  </th>
                  <th
                    scope="col"
                    className="p-4 font-extrabold border-b border-white/10 text-rose-300 text-start"
                  >
                    {t.pricing.comparisonHeaders.aggregators}
                  </th>
                  <th
                    scope="col"
                    className="p-4 font-extrabold border-b border-white/10 text-emerald-300 text-start"
                  >
                    {t.pricing.comparisonHeaders.selfPlan}
                  </th>
                  <th
                    scope="col"
                    className="p-4 font-extrabold border-b border-white/10 text-[#ff7733] text-start"
                  >
                    {t.pricing.comparisonHeaders.vipPlan}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.pricing.comparisonRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/8 last:border-b-0 hover:bg-white/[0.02]"
                  >
                    <th scope="row" className="p-4 font-bold text-white text-start align-top">
                      {row.criterion}
                    </th>
                    <td className="p-4 text-gray-400 align-top">{row.aggregators}</td>
                    <td className="p-4 text-emerald-200 font-semibold align-top">{row.selfPlan}</td>
                    <td className="p-4 text-white font-bold bg-[#ff5500]/[0.06] align-top">
                      {row.vipPlan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
