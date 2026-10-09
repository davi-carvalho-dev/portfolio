// =============================================================
// CONTATO — template
// - Textos: ../data/translations.ts (bloco "contact").
// - E-mail e redes: assets/data/site.ts.
// - O formulário abre o app de e-mail da pessoa (mailto), então
//   funciona sem back-end. Depois dá para trocar por Formspree,
//   EmailJS ou uma API sua no handleSubmit.
// =============================================================
import type { FormEvent } from "react";
import { useLanguage } from "../components/LanguageContext";
import { SITE } from "../data/Site";
import SectionHeader from "./SectionHeader";
import { MailIcon, SOCIAL_ICONS } from "./Icons";

const inputClass =
  "w-full rounded-xl border border-border bg-surface-light px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-border-primary focus:outline-none";

export default function Contato() {
  const { t } = useLanguage();
  const c = t.contact;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Contato pelo portfólio: ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contato" className="scroll-mt-20 bg-background-secondary py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Texto + links */}
        <div>
          <SectionHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
          <p className="mt-8 text-sm text-text-muted">{c.orEmail}</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-text-primary transition-colors hover:text-primary"
          >
            <MailIcon className="size-5 text-primary" />
            {SITE.email}
          </a>
          <div className="mt-6 flex gap-3">
            {SITE.socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full border border-border text-text-secondary transition-colors hover:border-border-primary hover:text-primary"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <label className="flex flex-col gap-2 text-sm font-medium text-text-secondary">
            {c.name}
            <input name="name" required autoComplete="name" className={inputClass} />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-text-secondary">
            {c.email}
            <input name="email" type="email" required autoComplete="email" className={inputClass} />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-text-secondary">
            {c.message}
            <textarea name="message" required rows={5} className={`${inputClass} resize-none`} />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {c.send}
          </button>
        </form>
      </div>
    </section>
  );
}
