// =============================================================
// DADOS FIXOS DO SITE — não mudam com o idioma
// Troque pelos seus links reais.
// =============================================================

export const SITE = {
  name: "Davi Carvalho",
  initials: "DC",
  email: "seuemail@exemplo.com",
  socials: [
    { label: "GitHub", href: "https://github.com/seu-usuario", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/seu-usuario", icon: "linkedin" },
  ],

  // Tecnologias do card do Hero (mesmos ícones do skillicons.dev).
  // "icon" = nome do arquivo em assets/icons/tech (sem -dark/-light).
  // Para adicionar: coloque o .svg na pasta e uma linha aqui.
  
  techs: [
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Python", icon: "python" },
    { name: "C", icon: "c" },
    { name: "Java", icon: "java" },
    { name: "MySQL", icon: "mysql" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "VS Code", icon: "vscode" },
    { name: "IntelliJ IDEA", icon: "idea" },
    { name: "PyCharm", icon: "pycharm" },
    { name: "Photoshop", icon: "photoshop" },
    { name: "Figma", icon: "figma" },
  ],
} as const;
