// =============================================================
// PROJETOS — template
// - Textos e lista de projetos: ./components/translations.ts (bloco "projects").
// - Para mostrar imagem, preencha "image" do projeto (arquivo em /public).
// =============================================================
import { useLanguage } from "./LanguageContext";
import { SITE } from "../data/Site";
import SectionHeader from "./SectionHeader";
import { ExternalIcon, GithubIcon } from "./Icons";

export default function Projetos() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="portfolio" className="scroll-mt-20 bg-background-secondary py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((project) => (
            <li
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-border-light hover:shadow-primary"
            >
              {/* Imagem (ou placeholder) */}
              <div className="aspect-video overflow-hidden border-b border-border bg-surface-light">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="grid size-full place-items-center text-4xl font-bold text-text-disabled">
                    {SITE.initials}
                  </div>
                )}
              </div>

              {/* Conteúdo */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{project.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-surface-light px-2.5 py-0.5 text-xs font-medium text-text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex gap-4 text-sm font-medium">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary transition-colors hover:text-primary-light"
                  >
                    {p.demo} <ExternalIcon className="size-4" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-text-muted transition-colors hover:text-text-primary"
                  >
                    <GithubIcon className="size-4" /> {p.code}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
