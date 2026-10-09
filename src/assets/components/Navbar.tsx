import { useEffect, useState, type SVGProps } from "react";
import { useTheme } from "../data/theme-toggle";
import { useLanguage } from "../components/LanguageContext";
import { translations } from "../data/translations";

export default function Navbar() {
  // Idioma vem do LanguageProvider: trocar aqui troca o site todo
  const { t, toggleLang } = useLanguage();
  const links = t.nav.links;

  const [theme, toggleTheme] = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Header encolhe e ganha fundo depois de rolar um pouco
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca o link da seção que está visível na tela
  useEffect(() => {
    const sections = translations.pt.nav.links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Menu mobile: trava o scroll da página e fecha com Esc
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Fecha o menu mobile se a tela crescer para desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        open
          ? "border-border bg-background-secondary/95 backdrop-blur-md"
          : scrolled
            ? "border-border bg-background-secondary/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label={t.nav.ariaLabel}
        className={`mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 transition-[height] duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "h-16" : "h-20 md:h-24"
        }`}
      >
        {/* Logo + nome */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span
            className={`grid place-items-center rounded-lg bg-primary font-bold text-white transition-all duration-300 group-hover:shadow-primary ${
              scrolled ? "size-8 text-sm" : "size-10 text-base"
            }`}
          >
            DC
          </span>
          <span className="whitespace-nowrap text-lg font-semibold tracking-tight text-text-primary">
            Davi Carvalho
          </span>
        </a>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((link: (typeof translations.pt.nav.links)[number]) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "page" : undefined}
                className={`relative py-2 text-sm font-medium uppercase tracking-wider transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-primary after:transition-transform after:duration-300 hover:text-text-primary focus-visible:outline-none focus-visible:after:scale-x-100 ${
                  active === link.id
                    ? "text-text-primary after:scale-x-100"
                    : "text-text-muted after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Tema claro/escuro */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.nav.lightTheme : t.nav.darkTheme}
            className="grid size-9 place-items-center rounded-full border border-border text-text-secondary transition-colors hover:border-border-primary hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {theme === "dark" ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
          </button>

          {/* Seletor de idioma */}
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.nav.switchLang}
            className="flex min-w-16 items-center justify-between gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-semibold tracking-wider text-text-secondary transition-colors hover:border-border-primary hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span>{t.nav.langButton}</span>
            <GlobeIcon className="size-4 shrink-0 text-primary" />
          </button>

          {/* Hambúrguer — mobile */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="grid size-10 place-items-center rounded-lg text-text-primary transition-colors hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-primary md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`grid border-border transition-[grid-template-rows,border-color] duration-300 md:hidden ${
          open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <ul className="flex flex-col overflow-hidden px-4 sm:px-6" inert={!open}>
          {links.map((link: (typeof translations.pt.nav.links)[number]) => (
            <li key={link.id} className="border-b border-border-dark last:border-b-0">
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === link.id ? "page" : undefined}
                className={`flex items-center justify-between py-4 text-base font-medium uppercase tracking-wider transition-colors hover:text-text-primary ${
                  active === link.id ? "text-text-primary" : "text-text-muted"
                }`}
              >
                {link.label}
                {active === link.id && <span className="size-1.5 rounded-full bg-primary" />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function SunIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
    </svg>
  );
}
