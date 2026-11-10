import { useLanguage } from './useLanguage';
import { ru } from '../translations/ru';
import { en } from '../translations/en';
import { de } from '../translations/de';
import { fr } from '../translations/fr';
import { he } from '../translations/he';

export type TranslationSchema = typeof ru;

const translations: Record<'ru' | 'en' | 'de' | 'fr' | 'he', TranslationSchema> = {
  ru,
  en,
  de,
  fr,
  he,
};

export const useTranslations = (): TranslationSchema => {
  const { language } = useLanguage();
  return translations[language] || translations.en;
};
