import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// @ts-ignore
import translationEN from './locales/en/translation.json';
// @ts-ignore
import translationFR from './locales/fr/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
