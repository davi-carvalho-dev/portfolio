import type { SVGProps } from "react";
import { useLanguage } from "../components/LanguageContext";

// =============================================================
// HERO — template para editar
// -------------------------------------------------------------
// - Textos: ficam em i18n/translations.ts (bloco "hero").
// - Foto/ilustração: troque IMAGE_SRC (ou deixe null para o
//   placeholder com as iniciais).
// - Cores: tudo vem do theme.css, então já funciona no claro e
//   no escuro sem mexer aqui.
// - Quer tirar um bloco (ex.: stats)? Apague o trecho marcado no JSX.
// =============================================================

const IMAGE_SRC: string | null = null; // ex.: "/images/davi.png"

export default function Hero() {
  const t = useLanguage().t.hero;

  return (
    <section
      id="home"
      // pt-* compensa o header fixo; scroll-mt-* para o link #home
      className="relative isolate flex min-h-svh scroll-mt-20 items-center overflow-hidden bg-background pt-28 pb-16 md:pt-32"
    >
      {/* Fundo decorativo: brilho vermelho + grade sutil. Apague se não quiser. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl md:left-3/4" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border-dark)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border-dark)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-8">
        {/* ---------- Texto ---------- */}
        <div className="flex flex-col items-start">
          {/* Selo "disponível" */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-secondary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {t.available}
          </span>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t.eyebrow}
          </p>

          <h1 className="text-4xl leading-tight font-bold tracking-tight text-balance text-text-primary sm:text-5xl lg:text-6xl">
            {t.titleStart}{" "}
            <span className="bg-linear-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-text-secondary sm:text-lg">
            {t.subtitle}
          </p>

          {/* Botões */}
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={t.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t.primaryCta.label}
              <ArrowIcon className="size-4" />
            </a>
            <a
              href={t.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-border-light px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-border-primary hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {t.secondaryCta.label}
            </a>
          </div>

          {/* Números — apague o bloco se não quiser */}
          {t.stats?.length > 0 && (
            <dl className="mt-12 grid w-full max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
              {t.stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="text-xs text-text-muted">{s.label}</dt>
                  <dd className="order-first text-2xl font-bold text-text-primary sm:text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {/* ---------- Imagem ---------- */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-4xl bg-linear-to-br from-gradient-start/30 to-transparent blur-2xl" />
          <div className="aspect-4/5 overflow-hidden rounded-3xl border border-border bg-surface shadow-primary-lg">
            {IMAGE_SRC ? (
              <img
                src={IMAGE_SRC}
                alt="Davi Carvalho"
                className="size-full object-cover"
                fetchPriority="high"
              />
            ) : (
              <div className="grid size-full place-items-center bg-linear-to-br from-surface to-surface-light">
                <span className="text-7xl font-bold text-text-disabled">DC</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
