import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations, type Lang } from "../data/translations";

const STORAGE_KEY = "lang";

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    // storage bloqueado: segue para o padrão
  }
  return "pt";
}

// Envolve o site inteiro uma vez (no main.tsx). Todos os componentes
// abaixo dele leem o mesmo idioma, então trocar no Navbar troca tudo.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
        // Espaço vazio
    }
  }, [lang]);

  const value = {
    lang,
    t: translations[lang],
    setLang,
    toggleLang: () => setLang((l) => (l === "pt" ? "en" : "pt")),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
