import React, { createContext, useState, useEffect } from 'react';

export const supportedLanguages = ['ru', 'en', 'de', 'fr', 'he'] as const;
export type Language = typeof supportedLanguages[number];

export const languageLabels: Record<Language, { short: string; native: string }> = {
  ru: { short: 'RU', native: 'Русский' },
  en: { short: 'EN', native: 'English' },
  de: { short: 'DE', native: 'Deutsch' },
  fr: { short: 'FR', native: 'Français' },
  he: { short: 'HE', native: 'עברית' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  isRtl: boolean;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  isRtl: false,
});

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  try {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang')?.toLowerCase() as Language | undefined;
    if (urlLang && supportedLanguages.includes(urlLang)) {
      return urlLang;
    }

    const storedLang = localStorage.getItem('alef_foodcrm_lang') as Language | null;
    if (storedLang && supportedLanguages.includes(storedLang)) {
      return storedLang;
    }
  } catch {
    // Ignore storage errors in restricted contexts
  }

  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const candidate of candidates) {
    const base = candidate?.split('-')[0]?.toLowerCase() as Language;
    if (base && supportedLanguages.includes(base)) {
      return base;
    }
  }

  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const isRtl = language === 'he';

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem('alef_foodcrm_lang', lang);
    } catch {
      // Ignore storage errors
    }
    setLanguageState(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};
