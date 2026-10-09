import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./assets/components/LanguageProvider";
import { initTheme } from "./assets/data/theme-toggle";
import "./index.css";

initTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
