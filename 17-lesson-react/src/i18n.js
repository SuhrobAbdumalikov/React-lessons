import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationEN from "../public/locales/en/translation.json";
import TranslationRU from "../public/locales/ru/translation.json";
import TranslationUZ from "../public/locales/uz/translation.json";

const resources = {
  en: {
    translation: TranslationEN,
  },
  ru: {
    translation: TranslationRU,
  },
  uz: {
    translation: TranslationUZ,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
