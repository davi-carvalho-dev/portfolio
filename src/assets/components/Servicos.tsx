// =============================================================
// SERVIÇOS — template (inspirado nos cards da referência)
// - Textos: ../data/translations.ts (bloco "services").
// - Ícones: troque os SVGs em ICONS abaixo ou adicione novos.
// =============================================================
import type { SVGProps } from "react";
import { useLanguage } from "../components/LanguageContext";
import SectionHeader from "./SectionHeader";

type IconProps = SVGProps<SVGSVGElement>;
const svg = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

const ICONS: Record<string, (props: IconProps) => React.JSX.Element> = {
  web: (props) => (
    <svg {...svg} {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4M2 7h20" />
    </svg>
  ),
  code: (props) => (
    <svg {...svg} {...props}>
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6M14 4l-4 16" />
    </svg>
  ),
  mobile: (props) => (
    <svg {...svg} {...props}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
};

export default function Servicos() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="servicos" className="scroll-mt-20 bg-background py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {s.items.map((item) => {
            const Icon = ICONS[item.icon] ?? ICONS.code;
            return (
              <li
                key={item.title}
                className="relative overflow-hidden rounded-2xl border border-border bg-linear-to-b from-surface-light to-surface p-6 transition-colors hover:border-border-light"
              >
                <span className="grid size-12 place-items-center rounded-xl border border-border bg-background text-primary">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-8 text-xl font-bold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-md bg-text-primary px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-background">
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
