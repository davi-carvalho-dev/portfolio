import { useRef, type PointerEvent, type SVGProps } from "react";
import { useLanguage } from "../components/LanguageContext";
import profilePhoto from "../images/profile-pic.png";
import TechIcons from "./TechIcons";

export default function Hero() {
  const t = useLanguage().t.hero;
  const sectionRef = useRef<HTMLElement>(null);

  // Atualiza a posição do brilho direto no CSS (--mx/--my), sem
  // re-renderizar o React a cada movimento do mouse.
  function handlePointerMove(e: PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return; // no celular o brilho fica parado
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      id="home"
      // pt-* compensa o header fixo; scroll-mt-* para o link #home
      className="relative isolate flex min-h-svh scroll-mt-20 items-center overflow-hidden bg-background pt-28 pb-16 md:pt-32"
    >
      {/* Fundo decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Grade andando na diagonal (cinza no escuro, vermelha no claro) */}
        <div className="absolute inset-0 animate-grid-move bg-[linear-gradient(to_right,var(--color-grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        {/* Brilho que segue o mouse (vermelho no escuro, preto no claro) */}
        <div className="absolute inset-0 bg-[radial-gradient(36rem_circle_at_var(--mx)_var(--my),var(--color-glow),transparent_70%)] transition-[--mx,--my] duration-500 ease-out" />
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

          {/* Números */}
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

        {/* ---------- Card: foto + tecnologias ---------- */}
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="rounded-3xl border border-border bg-surface/70 p-6 backdrop-blur-sm sm:p-8">
            <img
              src={profilePhoto}
              alt="Foto de perfil"
              width={640}
              height={640}
              fetchPriority="high"
              className="mx-auto aspect-square w-full max-w-72 rounded-full object-cover"
            />
            <div className="mt-8 border-t border-border pt-6">
              <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Tecnologias
              </p>
              <TechIcons />
            </div>
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
