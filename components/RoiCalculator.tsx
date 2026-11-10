import React, { useState } from 'react';
import { PlanId } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface RoiCalculatorProps {
  selectedPlan: PlanId;
  onSelectPlan: (plan: PlanId) => void;
}

const RoiCalculator: React.FC<RoiCalculatorProps> = ({ selectedPlan, onSelectPlan }) => {
  const t = useTranslations();
  const [ordersPerDay, setOrdersPerDay] = useState<number>(20);
  const [avgTicket, setAvgTicket] = useState<number>(24);
  const [aggregatorFee, setAggregatorFee] = useState<number>(28);

  const planCost = selectedPlan === 'self_29' ? 29.9 : 89;
  const monthlyTurnover = Math.round(ordersPerDay * avgTicket * 30);
  const aggregatorMonthlyLoss = Math.round(monthlyTurnover * (aggregatorFee / 100));
  const netMonthlySavings = Math.max(0, Math.round(aggregatorMonthlyLoss - planCost));
  const netYearlySavings = netMonthlySavings * 12;

  const feePerOrder = Math.max(1, avgTicket * (aggregatorFee / 100));
  const paybackOrders = Math.max(1, Math.ceil(planCost / feePerOrder));

  const formatEur = (val: number) =>
    new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(val) + ' €';

  const handleClaimSavings = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="calculator"
      aria-labelledby="calculator-heading"
      className="py-16 md:py-24 bg-[#090a0e] border-y border-white/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff7733]">
            {t.calculator.eyebrow}
          </span>
          <h2
            id="calculator-heading"
            className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight"
          >
            {t.calculator.titleStart}
            <span className="text-emerald-400">{t.calculator.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Interactive Controls */}
          <div className="lg:col-span-7 rounded-3xl bg-[#13151c] border border-white/12 p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              {/* Orders per day */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <label htmlFor="calc-orders" className="text-sm sm:text-base font-bold text-gray-200">
                    {t.calculator.ordersPerDayLabel}
                  </label>
                  <span className="px-3 py-1 rounded-lg text-sm sm:text-base font-extrabold bg-[#ff5500]/15 text-[#ff7733] border border-[#ff5500]/30">
                    {ordersPerDay} {t.calculator.ordersUnit}
                  </span>
                </div>
                <input
                  id="calc-orders"
                  type="range"
                  min={5}
                  max={120}
                  step={1}
                  value={ordersPerDay}
                  onChange={(e) => setOrdersPerDay(Number(e.target.value))}
                  className="w-full h-2.5 rounded-lg bg-white/10 accent-slider"
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                  <span>5</span>
                  <span>30</span>
                  <span>60</span>
                  <span>120</span>
                </div>
              </div>

              {/* Average ticket */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <label htmlFor="calc-ticket" className="text-sm sm:text-base font-bold text-gray-200">
                    {t.calculator.avgTicketLabel}
                  </label>
                  <span className="px-3 py-1 rounded-lg text-sm sm:text-base font-extrabold bg-white/10 text-white border border-white/15">
                    {avgTicket} €
                  </span>
                </div>
                <input
                  id="calc-ticket"
                  type="range"
                  min={10}
                  max={70}
                  step={1}
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2.5 rounded-lg bg-white/10 accent-slider"
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                  <span>10 €</span>
                  <span>25 €</span>
                  <span>45 €</span>
                  <span>70 €</span>
                </div>
              </div>

              {/* Aggregator fee */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <label htmlFor="calc-fee" className="text-sm sm:text-base font-bold text-gray-200">
                    {t.calculator.aggregatorFeeLabel}
                  </label>
                  <span className="px-3 py-1 rounded-lg text-sm sm:text-base font-extrabold bg-rose-500/15 text-rose-300 border border-rose-500/30">
                    {aggregatorFee}%
                  </span>
                </div>
                <input
                  id="calc-fee"
                  type="range"
                  min={15}
                  max={35}
                  step={1}
                  value={aggregatorFee}
                  onChange={(e) => setAggregatorFee(Number(e.target.value))}
                  className="w-full h-2.5 rounded-lg bg-white/10 accent-slider"
                />
                <div className="flex justify-between text-[11px] text-gray-500 mt-1">
                  <span>15%</span>
                  <span>25%</span>
                  <span>30%</span>
                  <span>35%</span>
                </div>
              </div>
            </div>

            {/* Plan Switcher inside Calculator */}
            <div className="pt-5 border-t border-white/10">
              <div className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-2.5">
                {t.calculator.compareWithLabel}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  aria-pressed={selectedPlan === 'self_29'}
                  onClick={() => onSelectPlan('self_29')}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-extrabold border transition-all text-start ${
                    selectedPlan === 'self_29'
                      ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-md'
                      : 'bg-[#0c0d10] border-white/10 text-gray-300 hover:border-white/25'
                  }`}
                >
                  {t.calculator.planSelfShort}
                </button>
                <button
                  type="button"
                  aria-pressed={selectedPlan === 'vip_89'}
                  onClick={() => onSelectPlan('vip_89')}
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-extrabold border transition-all text-start ${
                    selectedPlan === 'vip_89'
                      ? 'bg-[#ff5500]/20 border-[#ff5500] text-white shadow-md'
                      : 'bg-[#0c0d10] border-white/10 text-gray-300 hover:border-white/25'
                  }`}
                >
                  {t.calculator.planVipShort}
                </button>
              </div>
            </div>
          </div>

          {/* Savings Results Card */}
          <div className="lg:col-span-5 metallic-card-emerald rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2 py-2.5 border-b border-white/10">
                <span className="text-xs sm:text-sm text-gray-300">
                  {t.calculator.monthlyTurnoverLabel}
                </span>
                <span className="text-base sm:text-lg font-extrabold text-white">
                  {formatEur(monthlyTurnover)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 py-2.5 border-b border-white/10">
                <span className="text-xs sm:text-sm text-rose-300">
                  {t.calculator.aggregatorLossLabel}
                </span>
                <span className="text-base sm:text-lg font-extrabold text-rose-400">
                  −{formatEur(aggregatorMonthlyLoss)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 py-2.5 border-b border-white/10">
                <span className="text-xs sm:text-sm text-gray-300">{t.calculator.ourCostLabel}</span>
                <span className="text-base sm:text-lg font-extrabold text-emerald-300">
                  {selectedPlan === 'self_29' ? '29,90 €' : '89 €'}
                </span>
              </div>

              <div className="pt-2">
                <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                  {t.calculator.netSavingsMonthlyLabel}
                </div>
                <div className="mt-1 font-display text-4xl sm:text-5xl font-bold text-emerald-400">
                  +{formatEur(netMonthlySavings)}
                </div>
                <div className="mt-2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs sm:text-sm font-extrabold text-emerald-200">
                  <span>{t.calculator.netSavingsYearlyLabel}</span>
                  <span className="text-white">+{formatEur(netYearlySavings)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 space-y-4">
              <p className="text-xs sm:text-sm font-semibold text-amber-200 bg-amber-400/10 border border-amber-400/25 rounded-xl px-3.5 py-2.5">
                ⚡ {t.calculator.paybackBadge}{' '}
                <strong className="text-white underline">{paybackOrders}</strong>{' '}
                {t.calculator.paybackOrdersWord}
              </p>

              <button
                type="button"
                onClick={handleClaimSavings}
                className="w-full py-4 px-6 rounded-2xl text-sm sm:text-base font-extrabold bg-[#ff5500] hover:bg-[#ff6a1f] text-white shadow-[0_10px_28px_rgba(255,85,0,0.4)] transition-all"
              >
                {t.calculator.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
