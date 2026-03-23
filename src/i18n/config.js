import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import viTranslation from './locales/vi.json';
import enTranslation from './locales/en.json';
import cnTranslation from './locales/cn.json';

const resources = {
  vi: {
    translation: viTranslation
  },
  en: {
    translation: enTranslation
  },
  cn: {
    translation: cnTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi', // default language
    detection: {
      // Chỉ kiểm tra ngôn ngữ đã lưu, bỏ qua ngôn ngữ của trình duyệt
      order: ['localStorage', 'cookie', 'sessionStorage'],
      caches: ['localStorage', 'cookie']
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
