import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// O plugin do Tailwind PRECISA estar aqui, senão o index.css não é processado.
// Instale com: npm install tailwindcss @tailwindcss/vite

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
