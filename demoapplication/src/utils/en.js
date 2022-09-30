import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const Languages = ['en', 'ko', 'chi'];
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
fallbackLng: 'en',
debug: false,
whitelist: Languages,
interpolation: {
escapeValue: false,
}
});
export default i18n;