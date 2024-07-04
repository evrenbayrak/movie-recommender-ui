// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import ar from './locales/ar/translation.json';
import de from './locales/de/translation.json';
import fr from './locales/fr/translation.json';
import it from './locales/it/translation.json';
import ru from './locales/ru/translation.json';
import tr from './locales/tr/translation.json';
import zh from './locales/zh/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
      de: {
        translation: de,
      },
      ar: {
        translation: ar,
      },
      fr: {
        translation: fr,
      },
      it: {
        translation: it,
      },
      ru: {
        translation: ru,
      },
      tr: {
        translation: tr,
      },
      zh: {
        translation: zh,
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;