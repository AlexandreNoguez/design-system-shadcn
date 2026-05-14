export const designTokenGroups = [
  {
    name: "Cores semanticas",
    description:
      "Tokens como background, foreground, primary, secondary, muted, accent e destructive.",
  },
  {
    name: "Superficies",
    description:
      "Card, popover, sidebar, border, input e ring para estados interativos.",
  },
  {
    name: "Tipografia",
    description:
      "Escala baseada em Geist para leitura clara em dashboards e formularios.",
  },
  {
    name: "Radius e elevacao",
    description:
      "Raio consistente e sombras discretas para uma experiencia moderna sem excesso visual.",
  },
] as const

export const foundationStatus = [
  { label: "Next.js App Router", status: "Configurado" },
  { label: "TypeScript", status: "Configurado" },
  { label: "Tailwind CSS", status: "Configurado" },
  { label: "shadcn/ui", status: "Configurado" },
  { label: "Light/Dark mode", status: "Base pronta" },
  { label: "Checklist rastreavel", status: "Documentado" },
] as const

export const brandIdentity = {
  name: "Aster UI",
  tagline: "Clareza operacional para produtos digitais modernos.",
  audience:
    "Aplicacoes corporativas, dashboards executivos e fluxos internos de operacao.",
  tone: "Executivo, preciso, confiavel e visualmente leve.",
} as const

export const brandColorPalette = [
  {
    name: "Background",
    token: "--background",
    pair: "--foreground",
    usage: "Base da aplicacao e areas de leitura.",
  },
  {
    name: "Foreground",
    token: "--foreground",
    pair: "--background",
    usage: "Texto principal e conteudo de alta hierarquia.",
  },
  {
    name: "Primary",
    token: "--primary",
    pair: "--primary-foreground",
    usage: "Acoes primarias, foco de decisao e itens ativos.",
  },
  {
    name: "Secondary",
    token: "--secondary",
    pair: "--secondary-foreground",
    usage: "Acoes auxiliares, areas de apoio e filtros.",
  },
  {
    name: "Accent",
    token: "--accent",
    pair: "--accent-foreground",
    usage: "Destaques positivos, indicadores e confirmacoes leves.",
  },
  {
    name: "Destructive",
    token: "--destructive",
    pair: "--primary-foreground",
    usage: "Acoes criticas, erros e confirmacoes destrutivas.",
  },
  {
    name: "Muted",
    token: "--muted",
    pair: "--muted-foreground",
    usage: "Superficies discretas, textos secundarios e estados vazios.",
  },
  {
    name: "Border",
    token: "--border",
    pair: "--foreground",
    usage: "Divisores, contornos e separacao estrutural.",
  },
] as const

export const chartPalette = [
  { name: "Chart 1", token: "--chart-1" },
  { name: "Chart 2", token: "--chart-2" },
  { name: "Chart 3", token: "--chart-3" },
  { name: "Chart 4", token: "--chart-4" },
  { name: "Chart 5", token: "--chart-5" },
] as const

export const typographyScale = [
  {
    name: "Display",
    className: "text-4xl font-semibold sm:text-5xl",
    sample: "Painel executivo com clareza",
    usage: "Titulo principal de paginas de alto impacto.",
  },
  {
    name: "Heading",
    className: "text-2xl font-semibold",
    sample: "Indicadores da operacao",
    usage: "Titulos de secoes, cards amplos e telas de detalhe.",
  },
  {
    name: "Body",
    className: "text-base leading-7",
    sample: "Texto com leitura confortavel para contextos densos.",
    usage: "Descricoes, instrucoes curtas e conteudo de apoio.",
  },
  {
    name: "Caption",
    className: "text-sm text-muted-foreground",
    sample: "Atualizado hoje as 09:30",
    usage: "Metadados, labels secundarios e informacoes complementares.",
  },
] as const

export const radiusScale = [
  { name: "Small", token: "var(--radius-sm)", usage: "Campos compactos" },
  { name: "Medium", token: "var(--radius-md)", usage: "Botoes e controles" },
  { name: "Large", token: "var(--radius-lg)", usage: "Cards e paineis" },
  { name: "XL", token: "var(--radius-xl)", usage: "Superficies destacadas" },
] as const

export const shadowScale = [
  {
    name: "Raised",
    token: "--shadow-raised",
    usage: "Cards interativos e superficies acima do fundo.",
  },
  {
    name: "Floating",
    token: "--shadow-floating",
    usage: "Menus, overlays e paineis temporarios.",
  },
  {
    name: "Focus",
    token: "--shadow-focus",
    usage: "Estados de foco e selecao em componentes criticos.",
  },
] as const

export const iconGuidelines = [
  "Lucide como biblioteca principal.",
  "Tamanho padrao de 16px em listas e 20px em acoes principais.",
  "Icones sempre acompanhando significado, estado ou acao.",
  "Botoes somente com icone devem ter tooltip ou aria-label.",
] as const
