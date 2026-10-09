// Título padrão das seções (eyebrow + título + subtítulo).
// Usado em Projetos, Serviços e Contato para todos ficarem iguais.

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, subtitle, align = "left" }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl leading-tight font-bold tracking-tight text-balance text-text-primary sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-pretty text-text-secondary">{subtitle}</p>}
    </div>
  );
}
