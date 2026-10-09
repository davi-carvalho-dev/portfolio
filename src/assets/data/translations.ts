// =============================================================
// TRADUÇÕES DO SITE — todos os textos ficam aqui
// -------------------------------------------------------------
// - "pt" é a referência: o TypeScript obriga o "en" a ter
//   exatamente as mesmas chaves. Esqueceu uma? Dá erro.
// - Para uma seção nova (ex.: projetos), crie um bloco
//   "projects: { ... }" nos dois idiomas e use t.projects.xxx
//   no componente.
// =============================================================

const pt = {
  nav: {
    ariaLabel: "Navegação principal",
    links: [
      { id: "home", label: "Home" },
      { id: "portfolio", label: "Portfólio" },
      { id: "servicos", label: "Serviços" },
      { id: "contato", label: "Contato" },
    ],
    switchLang: "Switch to English", // texto lido por leitor de tela
    langButton: "ENG", // o botão mostra o idioma para o qual vai trocar
    lightTheme: "Ativar tema claro",
    darkTheme: "Ativar tema escuro",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  hero: {
    available: "Disponível para novos projetos",
    eyebrow: "Desenvolvedor Full-Stack",
    titleStart: "Transformo ideias em",
    titleHighlight: "experiências digitais",
    subtitle:
      "Crio sites e aplicações bonitos, rápidos e responsivos, unindo design e código para tirar o seu projeto do papel.",
    primaryCta: { label: "Ver projetos", href: "#portfolio" },
    secondaryCta: { label: "Fale comigo", href: "#contato" },
    stats: [
      { value: "2+", label: "anos de estudo" },
      { value: "10+", label: "projetos" },
      { value: "100%", label: "dedicação" },
    ],
  },
  projects: {
    eyebrow: "Portfólio",
    title: "Projetos selecionados",
    subtitle: "Alguns trabalhos que mostram como eu penso, desenho e construo.",
    demo: "Ver site",
    code: "Código",
    // Troque pelos seus projetos. image: caminho em /public (ex.: "/projetos/app.png") ou null
    items: [
      {
        title: "Nome do projeto 1",
        description: "Uma frase sobre o problema que ele resolve e o que você fez.",
        tags: ["React", "TypeScript", "Tailwind"],
        image: null as string | null,
        demoUrl: "#",
        codeUrl: "#",
      },
      {
        title: "Nome do projeto 2",
        description: "Uma frase sobre o problema que ele resolve e o que você fez.",
        tags: ["Node.js", "API", "PostgreSQL"],
        image: null as string | null,
        demoUrl: "#",
        codeUrl: "#",
      },
      {
        title: "Nome do projeto 3",
        description: "Uma frase sobre o problema que ele resolve e o que você fez.",
        tags: ["Next.js", "UI/UX"],
        image: null as string | null,
        demoUrl: "#",
        codeUrl: "#",
      },
    ],
  },
  services: {
    eyebrow: "Serviços",
    title: "Transformo ideias criativas em realidade digital",
    subtitle:
      "Seja um site moderno ou uma aplicação web completa, tenho as habilidades para tirar a sua visão do papel.",
    // icon: "web" | "mobile" | "code" (ícones no Servicos.tsx)
    items: [
      {
        icon: "web",
        title: "Sites e Landing Pages",
        description: "Sites rápidos, responsivos e pensados para converter.",
        tags: ["Landing pages", "Sites institucionais", "SEO"],
      },
      {
        icon: "code",
        title: "Aplicações Web",
        description: "Sistemas completos, do front-end ao back-end.",
        tags: ["Front-end", "Back-end", "APIs"],
      },
      {
        icon: "mobile",
        title: "UI/UX Design",
        description: "Interfaces bonitas e fáceis de usar, do protótipo ao código.",
        tags: ["Figma", "Design system", "Protótipos"],
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos construir algo juntos?",
    subtitle: "Me conte sobre o seu projeto. Respondo em até 24 horas.",
    name: "Nome",
    email: "E-mail",
    message: "Mensagem",
    send: "Enviar mensagem",
    orEmail: "ou mande direto para",
  },
  footer: {
    rights: "Todos os direitos reservados.",
    backToTop: "Voltar ao topo",
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  nav: {
    ariaLabel: "Main navigation",
    links: [
      { id: "home", label: "Home" },
      { id: "portfolio", label: "Portfolio" },
      { id: "servicos", label: "Services" },
      { id: "contato", label: "Contact" },
    ],
    switchLang: "Mudar para português",
    langButton: "PT",
    lightTheme: "Switch to light theme",
    darkTheme: "Switch to dark theme",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    available: "Available for new projects",
    eyebrow: "Full-Stack Developer",
    titleStart: "I turn ideas into",
    titleHighlight: "digital experiences",
    subtitle:
      "I build beautiful, fast and responsive websites and apps, blending design and code to bring your project to life.",
    primaryCta: { label: "See projects", href: "#portfolio" },
    secondaryCta: { label: "Contact me", href: "#contato" },
    stats: [
      { value: "2+", label: "years learning" },
      { value: "10+", label: "projects" },
      { value: "100%", label: "commitment" },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Selected projects",
    subtitle: "A few works that show how I think, design and build.",
    demo: "Live site",
    code: "Code",
    items: [
      {
        title: "Project name 1",
        description: "One sentence about the problem it solves and what you did.",
        tags: ["React", "TypeScript", "Tailwind"],
        image: null,
        demoUrl: "#",
        codeUrl: "#",
      },
      {
        title: "Project name 2",
        description: "One sentence about the problem it solves and what you did.",
        tags: ["Node.js", "API", "PostgreSQL"],
        image: null,
        demoUrl: "#",
        codeUrl: "#",
      },
      {
        title: "Project name 3",
        description: "One sentence about the problem it solves and what you did.",
        tags: ["Next.js", "UI/UX"],
        image: null,
        demoUrl: "#",
        codeUrl: "#",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "I turn creative ideas into digital realities",
    subtitle:
      "Whether you need a sleek website or a complete web application, I have the skills to bring your vision to life.",
    items: [
      {
        icon: "web",
        title: "Websites & Landing Pages",
        description: "Fast, responsive websites built to convert.",
        tags: ["Landing pages", "Business sites", "SEO"],
      },
      {
        icon: "code",
        title: "Web Applications",
        description: "Complete systems, from front-end to back-end.",
        tags: ["Front-end", "Back-end", "APIs"],
      },
      {
        icon: "mobile",
        title: "UI/UX Design",
        description: "Beautiful, easy-to-use interfaces, from prototype to code.",
        tags: ["Figma", "Design system", "Prototypes"],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something together?",
    subtitle: "Tell me about your project. I reply within 24 hours.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    orEmail: "or write directly to",
  },
  footer: {
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

export const translations = { pt, en };

export type Lang = keyof typeof translations; // "pt" | "en"
