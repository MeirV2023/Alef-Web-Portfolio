import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { supportedLanguages, languageLabels } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="inline-flex items-center gap-0.5 bg-white/5 border border-white/10 p-1 rounded-full"
    >
      {supportedLanguages.map((lang) => {
        const isActive = language === lang;
        return (
          <button
            key={lang}
            type="button"
            aria-pressed={isActive}
            aria-label={languageLabels[lang].native}
            onClick={() => setLanguage(lang)}
            className={`px-2.5 py-1 text-xs font-extrabold uppercase rounded-full transition-colors ${
              isActive
                ? 'bg-[#ff5500] text-white shadow-sm'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {languageLabels[lang].short}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
