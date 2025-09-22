import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from '../locales/es/common.json';
import en from '../locales/en/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { common: es },
      en: { common: en },
    },
    lng: (localStorage.getItem('lng') as 'es' | 'en') || 'es',
    fallbackLng: 'es',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    detection: { order: ['localStorage', 'navigator'] } as any,
  });

i18n.on('languageChanged', (lng) => {
  try { localStorage.setItem('lng', lng); } catch {}
});

export default i18n;