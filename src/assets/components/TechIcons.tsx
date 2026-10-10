// =============================================================
// ÍCONES DAS TECNOLOGIAS — estilo skillicons.dev
// - Lista em assets/data/site.ts (techs).
// - SVGs em assets/data/tech-icons.ts (seguem o tema do site).
// =============================================================
import { useTheme } from "../data/theme-toggle";
import { SITE } from "../data/Site";
import { TECH_ICONS } from "../data/TechIcons";

// Transforma o texto do SVG em algo que o <img> aceita como src
function toDataUrl(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function TechIcons({ className = "" }: { className?: string }) {
  const [theme] = useTheme();

  return (
    <ul className={`flex flex-wrap justify-center gap-2.5 ${className}`}>
      {SITE.techs.map((tech) => {
        const icon = TECH_ICONS[tech.icon];
        return (
          <li key={tech.name}>
            {icon ? (
              <img
                src={toDataUrl(icon[theme])}
                alt={tech.name}
                title={tech.name}
                width={40}
                height={40}
                className="size-10 rounded-[22%] transition-transform duration-200 hover:-translate-y-1 hover:scale-110"
              />
            ) : (
              // Sem SVG para esse nome: mostra o texto em vez de sumir
              <span className="grid h-10 place-items-center rounded-lg border border-border px-3 text-xs font-medium text-text-secondary">
                {tech.name}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
