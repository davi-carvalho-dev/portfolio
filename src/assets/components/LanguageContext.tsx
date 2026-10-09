import { createContext, useContext } from "react";
import type { Dictionary, Lang } from "../data/translations";

type LanguageContextValue = {
  lang: Lang;
  t: Dictionary; // textos do idioma atual: t.nav.links, t.hero.subtitle...
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

// Use em qualquer componente: const { t, lang, toggleLang } = useLanguage();
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage precisa estar dentro do <LanguageProvider>");
  }
  return ctx;
}
