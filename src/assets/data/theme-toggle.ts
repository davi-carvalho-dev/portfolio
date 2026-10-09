// =============================================================
// TROCA DE TEMA — escuro (padrão) / claro
// -------------------------------------------------------------
// Como funciona:
// - Escuro é o padrão: o <html> fica SEM data-theme.
// - Claro: o <html> recebe data-theme="light" e o theme.css
//   troca as cores semânticas (bg-background, text-text-primary...).
// - A escolha fica salva no localStorage.
//
// =============================================================

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const EVENT = "themechange";

export function getTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function setTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "light") root.dataset.theme = "light";
  else delete root.dataset.theme;

  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // navegação privada / storage bloqueado: só não salva
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: theme }));
}

export function toggleTheme() {
  setTheme(getTheme() === "light" ? "dark" : "light");
}

// Chame uma vez no main.jsx, antes de renderizar o App.
export function initTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {
    // Espaço vazio
  }
  setTheme(saved === "light" ? "light" : "dark");
}

// Avisa quando o tema mudar (usado pelo hook abaixo).
export function onThemeChange(callback: (theme: Theme) => void) {
  const handler = (e: Event) => callback((e as CustomEvent<Theme>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

// Hook para componentes React: const [theme, toggle] = useTheme();

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getTheme);
  useEffect(() => onThemeChange(setThemeState), []);
  // "as const" = tupla [Theme, () => void], e não um array misturado
  return [theme, toggleTheme] as const;
}
