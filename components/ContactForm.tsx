import React, { useEffect, useRef, useState } from 'react';
import { PlanId } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import { useLanguage } from '../hooks/useLanguage';
import { CheckIcon, CopyIcon, ExternalLinkIcon, WhatsAppIcon } from './IconComponents';

interface ContactFormProps {
  selectedPlan: PlanId;
  onSelectPlan: (plan: PlanId) => void;
}

const WHATSAPP_NUMBER = '4368181656780';
const DISPLAY_PHONE = '+43 681 816 567 80';
const CONTACT_EMAIL = 'hello@alef-web.com';

const nameRequiredErrors: Record<string, string> = {
  ru: 'Пожалуйста, укажите ваше имя.',
  en: 'Please enter your name.',
  de: 'Bitte geben Sie Ihren Namen ein.',
  fr: 'Veuillez indiquer votre nom.',
  he: 'אנא הזינו את שמכם.',
};

const errorIconLabels: Record<string, string> = {
  ru: 'Ошибка',
  en: 'Error',
  de: 'Fehler',
  fr: 'Erreur',
  he: 'שגיאה',
};

const ContactForm: React.FC<ContactFormProps> = ({ selectedPlan, onSelectPlan }) => {
  const t = useTranslations();
  const { language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const announcerRef = useRef<HTMLDivElement>(null);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [link, setLink] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);

  const activePlanTitle =
    selectedPlan === 'vip_89' ? t.contact.plans.vip_89.title : t.contact.plans.self_29.title;

  const buildWhatsAppUrl = () => {
    const lines = [
      `👋 Alef FoodCRM — ${activePlanTitle}`,
      name ? `• ${t.contact.labels.name}: ${name}` : '',
      restaurant ? `• ${t.contact.labels.restaurant}: ${restaurant}` : '',
      phone ? `• WhatsApp/Tel: ${phone}` : '',
      email ? `• Email: ${email}` : '',
      link ? `• Link: ${link}` : '',
      message ? `• ${message}` : '',
    ].filter(Boolean);

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const buildMailtoUrl = () => {
    const subject = `Alef FoodCRM [${activePlanTitle}] — ${restaurant || name || 'New Inquiry'}`;
    const body = [
      `Plan: ${activePlanTitle}`,
      `Name: ${name}`,
      `Restaurant & City: ${restaurant}`,
      `Phone / WhatsApp: ${phone}`,
      `Email: ${email}`,
      `Instagram / Website: ${link}`,
      `Notes: ${message}`,
    ].join('\n');
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Sync :user-invalid with ARIA + WeakMap fallback where :user-invalid isn't supported
  // (modern-web-guidance: validate-input-after-interaction)
  useEffect(() => {
    const form = formRef.current;
    const announcer = announcerRef.current;
    if (!form || !announcer) return;

    const supportsUserInvalid =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('selector(:user-invalid)');

    const dirtyState = new WeakMap<Element, { hasInteracted: boolean; hasBlurred: boolean }>();
    const flagged = new WeakSet<Element>();
    const announced = new WeakSet<Element>();
    let announceTimer: ReturnType<typeof setTimeout> | undefined;
    let announcedField: Element | null = null;

    const linkError = (el: HTMLElement, shown: boolean) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const ids = (el.getAttribute('aria-describedby') || '')
        .split(/\s+/)
        .filter((id) => id && id !== errorId);
      if (shown) ids.push(errorId);
      if (ids.length) el.setAttribute('aria-describedby', ids.join(' '));
      else el.removeAttribute('aria-describedby');
    };

    const spokenText = (node: Element) => {
      const copy = node.cloneNode(true) as HTMLElement;
      copy.querySelectorAll('[aria-hidden="true"]').forEach((n) => n.remove());
      copy
        .querySelectorAll('[role="img"][aria-label]')
        .forEach((n) => n.replaceWith(`${n.getAttribute('aria-label')}: `));
      return (copy.textContent || '').replace(/\s+/g, ' ').trim();
    };

    const announceError = (el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const errorEl = document.getElementById(errorId);
      if (!errorEl) return;
      const label = el.labels?.[0] ? `${spokenText(el.labels[0])}: ` : '';
      clearTimeout(announceTimer);
      announcer.textContent = '';
      announcedField = el;
      announceTimer = setTimeout(() => {
        announcer.textContent = label + spokenText(errorEl);
      }, 500);
    };

    const syncAria = (target: EventTarget | null, announce = false) => {
      if (!(target instanceof HTMLElement)) return;
      if (!target.matches('input:not([type="hidden"]), select, textarea')) return;
      if (target.getAttribute('name') === 'company_fax') return;

      const control = target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
      const invalid = supportsUserInvalid
        ? control.matches(':user-invalid')
        : control.classList.contains('user-invalid-fallback');

      if (invalid) {
        if (announce && !announced.has(control)) {
          announceError(control);
          announced.add(control);
        }
        control.setAttribute('aria-invalid', 'true');
        linkError(control, true);
        flagged.add(control);
      } else if (flagged.has(control) || control.getAttribute('aria-invalid') !== 'true') {
        control.setAttribute('aria-invalid', 'false');
        linkError(control, false);
        flagged.delete(control);
        announced.delete(control);
        if (announcedField === control) {
          clearTimeout(announceTimer);
          announcer.textContent = '';
        }
      }
    };

    const updateFallbackState = (
      control: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
      announce = false
    ) => {
      const isValid = control.validity.valid;
      control.classList.toggle('user-invalid-fallback', !isValid);
      control.classList.toggle('user-valid-fallback', isValid);
      syncAria(control, announce);
    };

    // Initialize every field at aria-invalid="false"
    form.querySelectorAll('input, select, textarea').forEach((el) => syncAria(el, false));

    const onBlur = (e: Event) => {
      const target = e.target;
      if (
        !supportsUserInvalid &&
        (target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement ||
          target instanceof HTMLSelectElement)
      ) {
        const state = dirtyState.get(target) || { hasInteracted: false, hasBlurred: false };
        state.hasBlurred = true;
        dirtyState.set(target, state);
        if (state.hasInteracted) {
          updateFallbackState(target, true);
        }
        return;
      }
      syncAria(target, true);
    };

    const onInput = (e: Event) => {
      const target = e.target;
      if (
        !supportsUserInvalid &&
        (target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement ||
          target instanceof HTMLSelectElement)
      ) {
        const state = dirtyState.get(target) || { hasInteracted: false, hasBlurred: false };
        state.hasInteracted = true;
        dirtyState.set(target, state);
        if (state.hasBlurred) {
          updateFallbackState(target, false);
        }
        return;
      }
      if (target instanceof HTMLElement && target.hasAttribute('aria-invalid')) {
        syncAria(target, false);
      }
    };

    const onChange = (e: Event) => {
      const target = e.target;
      if (
        !supportsUserInvalid &&
        (target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement ||
          target instanceof HTMLSelectElement)
      ) {
        const state = dirtyState.get(target) || { hasInteracted: false, hasBlurred: false };
        state.hasInteracted = true;
        dirtyState.set(target, state);
        if (state.hasBlurred) {
          updateFallbackState(target, true);
        }
        return;
      }
      syncAria(target, true);
    };

    const onInvalid = (e: Event) => {
      const target = e.target;
      if (target instanceof Element) {
        announced.add(target);
      }
      if (
        !supportsUserInvalid &&
        (target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement ||
          target instanceof HTMLSelectElement)
      ) {
        dirtyState.set(target, { hasInteracted: true, hasBlurred: true });
        updateFallbackState(target, false);
        return;
      }
      syncAria(target, false);
    };

    const onReset = () => {
      setTimeout(() => {
        form.querySelectorAll('input, select, textarea').forEach((el) => {
          dirtyState.delete(el);
          el.classList.remove('user-invalid-fallback', 'user-valid-fallback');
          syncAria(el, false);
        });
      }, 0);
    };

    form.addEventListener('blur', onBlur, true);
    form.addEventListener('input', onInput);
    form.addEventListener('change', onChange, true);
    form.addEventListener('invalid', onInvalid, true);
    form.addEventListener('reset', onReset);

    return () => {
      clearTimeout(announceTimer);
      form.removeEventListener('blur', onBlur, true);
      form.removeEventListener('input', onInput);
      form.removeEventListener('change', onChange, true);
      form.removeEventListener('invalid', onInvalid, true);
      form.removeEventListener('reset', onReset);
    };
  }, []);

  const handleCopy = async (type: 'phone' | 'email', value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(type);
      setTimeout(() => setCopiedField((curr) => (curr === type ? null : curr)), 2000);
    } catch {
      // Ignore clipboard failure
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(':invalid');
      firstInvalid?.focus();
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          replyTo: email.trim(),
          honeypot,
          lead: {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            restaurant: restaurant.trim(),
            instagramOrWebsite: link.trim(),
            plan: selectedPlan,
            planLabel: activePlanTitle,
            message: message.trim(),
            uiLanguage: language,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const errIconLabel = errorIconLabels[language] || 'Error';
  const nameErrText = nameRequiredErrors[language] || nameRequiredErrors.en;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 md:py-24">
      {/* Single polite live announcer for blur/change validation errors */}
      <div ref={announcerRef} aria-live="polite" className="visually-hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct WhatsApp & Studio Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                {t.contact.eyebrow}
              </span>
              <h2
                id="contact-heading"
                className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight"
              >
                {t.contact.titleStart}
                <span className="text-[#ff5500]">{t.contact.titleHighlight}</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Direct Instant WhatsApp Card */}
            <div className="metallic-card-emerald rounded-3xl p-6 space-y-4">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-[0_10px_28px_rgba(16,185,129,0.35)] transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>{t.contact.whatsappDirectCta}</span>
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
              <p className="text-xs text-center text-gray-300">{t.contact.whatsappDirectSub}</p>
            </div>

            {/* Click-to-copy Contact Details */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => handleCopy('phone', DISPLAY_PHONE)}
                className="w-full rounded-2xl bg-[#13151c] hover:bg-[#191c26] border border-white/10 p-4 flex items-center justify-between gap-3 text-start transition-colors"
              >
                <div>
                  <div className="text-xs font-bold text-gray-400">{t.contact.phoneLabel}</div>
                  <div className="mt-0.5 text-base font-extrabold text-white" dir="ltr">
                    {DISPLAY_PHONE}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/8 text-emerald-300 shrink-0">
                  <CopyIcon className="w-4 h-4" />
                  <span>{copiedField === 'phone' ? t.contact.copiedBadge : 'Copy'}</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleCopy('email', CONTACT_EMAIL)}
                className="w-full rounded-2xl bg-[#13151c] hover:bg-[#191c26] border border-white/10 p-4 flex items-center justify-between gap-3 text-start transition-colors"
              >
                <div>
                  <div className="text-xs font-bold text-gray-400">{t.contact.emailLabel}</div>
                  <div className="mt-0.5 text-base font-extrabold text-white" dir="ltr">
                    {CONTACT_EMAIL}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white/8 text-[#ff7733] shrink-0">
                  <CopyIcon className="w-4 h-4" />
                  <span>{copiedField === 'email' ? t.contact.copiedBadge : 'Copy'}</span>
                </span>
              </button>

              <div className="rounded-2xl bg-[#13151c] border border-white/10 p-4">
                <div className="text-xs font-bold text-gray-400">{t.contact.officeLabel}</div>
                <div className="mt-0.5 text-sm font-bold text-gray-200">{t.contact.officeValue}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible High-Converting Lead Form */}
          <div className="lg:col-span-7 metallic-card rounded-3xl p-6 sm:p-8">
            <h3 id="lead-form-title" className="text-xl sm:text-2xl font-extrabold text-white">
              {t.contact.formTitle}
            </h3>

            <form
              ref={formRef}
              method="POST"
              action="/api/send-email"
              aria-labelledby="lead-form-title"
              onSubmit={handleSubmit}
              className="lead-form mt-6 space-y-5"
            >
              {/* Honeypot anti-spam field */}
              <div className="visually-hidden" aria-hidden="true">
                <label htmlFor="lead-company-fax">Company Fax</label>
                <input
                  id="lead-company-fax"
                  type="text"
                  name="company_fax"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              {/* Visible Radio Buttons for the 2 Plans (<fieldset>/<legend> per modern-web-guidance: forms) */}
              <fieldset className="space-y-2.5">
                <legend className="text-xs sm:text-sm font-extrabold text-gray-200 mb-2">
                  {t.contact.planLegend}
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Option 1: 89 € All-Inclusive */}
                  <label
                    htmlFor="plan-vip-89"
                    className={`cursor-pointer rounded-2xl p-4 border transition-all flex items-start gap-3 ${
                      selectedPlan === 'vip_89'
                        ? 'bg-[#ff5500]/15 border-[#ff5500] shadow-md'
                        : 'bg-[#0c0d10] border-white/12 hover:border-white/25'
                    }`}
                  >
                    <input
                      id="plan-vip-89"
                      type="radio"
                      name="plan"
                      value="vip_89"
                      checked={selectedPlan === 'vip_89'}
                      onChange={() => onSelectPlan('vip_89')}
                      className="mt-1 !min-h-0 w-4 h-4 accent-[#ff5500] shrink-0"
                    />
                    <span className="block min-w-0">
                      <span className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs sm:text-sm font-extrabold text-white">
                          {t.contact.plans.vip_89.title}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-[#ff5500] text-white">
                          {t.contact.plans.vip_89.badge}
                        </span>
                      </span>
                      <span className="block mt-1 text-xs text-gray-300 leading-snug">
                        {t.contact.plans.vip_89.desc}
                      </span>
                    </span>
                  </label>

                  {/* Option 2: 29,90 € Self-Admin */}
                  <label
                    htmlFor="plan-self-29"
                    className={`cursor-pointer rounded-2xl p-4 border transition-all flex items-start gap-3 ${
                      selectedPlan === 'self_29'
                        ? 'bg-emerald-500/15 border-emerald-400 shadow-md'
                        : 'bg-[#0c0d10] border-white/12 hover:border-white/25'
                    }`}
                  >
                    <input
                      id="plan-self-29"
                      type="radio"
                      name="plan"
                      value="self_29"
                      checked={selectedPlan === 'self_29'}
                      onChange={() => onSelectPlan('self_29')}
                      className="mt-1 !min-h-0 w-4 h-4 accent-emerald-400 shrink-0"
                    />
                    <span className="block min-w-0">
                      <span className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs sm:text-sm font-extrabold text-white">
                          {t.contact.plans.self_29.title}
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-emerald-500/25 text-emerald-200">
                          {t.contact.plans.self_29.badge}
                        </span>
                      </span>
                      <span className="block mt-1 text-xs text-gray-300 leading-snug">
                        {t.contact.plans.self_29.desc}
                      </span>
                    </span>
                  </label>
                </div>
              </fieldset>

              {/* Name & Restaurant Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lead-name" className="block text-xs sm:text-sm font-bold text-gray-200 mb-1.5">
                    {t.contact.labels.name} *
                  </label>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={t.contact.labels.namePlaceholder}
                    data-error="lead-name-error"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl bg-[#0c0d10] border border-white/15 px-4 py-3 text-white placeholder:text-gray-500 transition-colors"
                  />
                  <div
                    id="lead-name-error"
                    className="field-error-msg items-center gap-1.5 mt-1.5 text-xs font-semibold text-rose-300"
                  >
                    <span role="img" aria-label={errIconLabel}>
                      ❌
                    </span>
                    <span>{nameErrText}</span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lead-restaurant"
                    className="block text-xs sm:text-sm font-bold text-gray-200 mb-1.5"
                  >
                    {t.contact.labels.restaurant}
                  </label>
                  <input
                    id="lead-restaurant"
                    name="restaurant"
                    type="text"
                    autoComplete="organization"
                    placeholder={t.contact.labels.restaurantPlaceholder}
                    value={restaurant}
                    onChange={(e) => setRestaurant(e.target.value)}
                    className="w-full rounded-xl bg-[#0c0d10] border border-white/15 px-4 py-3 text-white placeholder:text-gray-500 transition-colors"
                  />
                </div>
              </div>

              {/* Phone & Email Row (Format hints placed ABOVE inputs per modern-web-guidance: validate-input-after-interaction) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lead-phone" className="block text-xs sm:text-sm font-bold text-gray-200">
                    {t.contact.labels.phone} *
                  </label>
                  <span id="lead-phone-hint" className="block text-[11px] text-gray-400 mb-1.5">
                    {t.contact.labels.phoneHint}
                  </span>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                    pattern=".*[0-9].*[0-9].*[0-9].*[0-9].*[0-9].*[0-9].*[0-9].*"
                    aria-describedby="lead-phone-hint"
                    data-error="lead-phone-error"
                    placeholder="+43 681 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl bg-[#0c0d10] border border-white/15 px-4 py-3 text-white placeholder:text-gray-500 transition-colors"
                  />
                  <div
                    id="lead-phone-error"
                    className="field-error-msg items-center gap-1.5 mt-1.5 text-xs font-semibold text-rose-300"
                  >
                    <span role="img" aria-label={errIconLabel}>
                      ❌
                    </span>
                    <span>{t.contact.labels.phoneError}</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-xs sm:text-sm font-bold text-gray-200">
                    {t.contact.labels.email} *
                  </label>
                  <span id="lead-email-hint" className="block text-[11px] text-gray-400 mb-1.5">
                    {t.contact.labels.emailHint}
                  </span>
                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    required
                    aria-describedby="lead-email-hint"
                    data-error="lead-email-error"
                    placeholder="chef@restaurant.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl bg-[#0c0d10] border border-white/15 px-4 py-3 text-white placeholder:text-gray-500 transition-colors"
                  />
                  <div
                    id="lead-email-error"
                    className="field-error-msg items-center gap-1.5 mt-1.5 text-xs font-semibold text-rose-300"
                  >
                    <span role="img" aria-label={errIconLabel}>
                      ❌
                    </span>
                    <span>{t.contact.labels.emailError}</span>
                  </div>
                </div>
              </div>

              {/* Instagram / Current Website */}
              <div>
                <label htmlFor="lead-link" className="block text-xs sm:text-sm font-bold text-gray-200 mb-1.5">
                  {t.contact.labels.link}
                </label>
                <input
                  id="lead-link"
                  name="link"
                  type="text"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  placeholder={t.contact.labels.linkPlaceholder}
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full rounded-xl bg-[#0c0d10] border border-white/15 px-4 py-3 text-white placeholder:text-gray-500 transition-colors"
                />
              </div>

              {/* Notes / Menu Languages */}
              <div>
                <label
                  htmlFor="lead-message"
                  className="block text-xs sm:text-sm font-bold text-gray-200 mb-1.5"
                >
                  {t.contact.labels.message}
                </label>
                <textarea
                  id="lead-message"
                  name="message"
                  rows={3}
                  placeholder={t.contact.labels.messagePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl bg-[#0c0d10] border border-white/15 px-4 py-3 text-white placeholder:text-gray-500 transition-colors"
                />
              </div>

              {/* Status Feedback */}
              {status === 'success' && (
                <div
                  role="status"
                  className="rounded-2xl bg-emerald-500/15 border border-emerald-400/40 p-4 sm:p-5 space-y-3"
                >
                  <div className="flex items-center gap-2 text-emerald-300 font-extrabold text-sm sm:text-base">
                    <CheckIcon className="w-5 h-5 shrink-0" />
                    <span>{t.contact.successTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    {t.contact.successText}
                  </p>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>{t.contact.whatsappWithFormBtn}</span>
                  </a>
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="rounded-2xl bg-amber-500/12 border border-amber-400/40 p-4 sm:p-5 space-y-3"
                >
                  <div className="font-extrabold text-amber-300 text-sm sm:text-base">
                    {t.contact.errorTitle}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    {t.contact.errorText}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>{t.contact.whatsappWithFormBtn}</span>
                    </a>
                    <a
                      href={buildMailtoUrl()}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors"
                    >
                      <span>{t.contact.sendViaEmailFallback}</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Submit & Instant WhatsApp Actions */}
              <div className="space-y-3 pt-1">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 px-6 rounded-2xl text-sm sm:text-base font-extrabold bg-[#ff5500] hover:bg-[#ff6a1f] disabled:opacity-60 text-white shadow-[0_12px_32px_rgba(255,85,0,0.45)] transition-all"
                >
                  {status === 'submitting' ? t.contact.submittingBtn : t.contact.submitBtn}
                </button>

                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-extrabold bg-[#0c0d10] hover:bg-white/8 text-emerald-300 border border-emerald-500/35 inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{t.contact.whatsappWithFormBtn}</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
