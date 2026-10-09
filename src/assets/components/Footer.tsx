// =============================================================
// FOOTER — template
// - Textos: i18n/translations.ts (bloco "footer"); links do menu
//   reaproveitam os do Navbar (t.nav.links).
// - Redes: assets/data/site.ts.
// =============================================================
import { useLanguage } from "../components/LanguageContext";
import { SITE } from "../data/Site";
import { ArrowUpIcon, SOCIAL_ICONS } from "./Icons";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:px-6 md:flex-row md:justify-between lg:px-8">
        {/* Marca */}
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-primary text-sm font-bold text-white">
            {SITE.initials}
          </span>
          <span className="font-semibold text-text-primary">{SITE.name}</span>
        </a>

        {/* Links */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            {t.nav.links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="transition-colors hover:text-text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes + topo */}
        <div className="flex items-center gap-3">
          {SITE.socials.map((s) => {
            const Icon = SOCIAL_ICONS[s.icon];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-9 place-items-center rounded-full text-text-muted transition-colors hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
          <a
            href="#home"
            aria-label={t.footer.backToTop}
            className="grid size-9 place-items-center rounded-full border border-border text-text-secondary transition-colors hover:border-border-primary hover:text-primary"
          >
            <ArrowUpIcon className="size-4" />
          </a>
        </div>
      </div>

      <p className="border-t border-border-dark py-6 text-center text-xs text-text-muted">
        © {year} {SITE.name}. {t.footer.rights}
      </p>
    </footer>
  );
}
