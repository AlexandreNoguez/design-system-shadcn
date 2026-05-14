import {
  BadgeCheck,
  Blocks,
  ChartNoAxesColumn,
  Component,
  FileText,
  Layers3,
  MessagesSquare,
  Navigation,
  Palette,
  PanelsTopLeft,
} from "lucide-react"

export const showroomNavigation = [
  {
    title: "Visao geral",
    href: "/",
    description: "Proposito, progresso e criterio de aceite do showroom.",
    icon: PanelsTopLeft,
  },
  {
    title: "Identidade",
    href: "/brand",
    description: "Cores, tipografia, icones, radius e sombras.",
    icon: Palette,
  },
  {
    title: "Fundamentos",
    href: "/foundations",
    description: "Tokens, espacamentos, grid, estados e acessibilidade.",
    icon: Layers3,
  },
  {
    title: "Componentes",
    href: "/components",
    description: "Galeria de componentes shadcn e seus estados.",
    icon: Component,
  },
  {
    title: "Formularios",
    href: "/forms",
    description: "Campos, validacao, mensagens e formularios completos.",
    icon: FileText,
  },
  {
    title: "Dados",
    href: "/data-display",
    description: "Tabelas, filtros, busca, paginacao e estados.",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Overlays",
    href: "/overlays",
    description: "Modais, sheets, popovers, drawers e tooltips.",
    icon: Blocks,
  },
  {
    title: "Navegacao",
    href: "/navigation",
    description: "Sidebar, breadcrumbs, tabs, menus e command menu.",
    icon: Navigation,
  },
  {
    title: "Feedback",
    href: "/feedback",
    description: "Toasts, alerts, loading, vazio, erro e sucesso.",
    icon: MessagesSquare,
  },
  {
    title: "Padroes",
    href: "/patterns",
    description: "Telas reais para demonstrar aplicacao do design system.",
    icon: BadgeCheck,
  },
] as const

export type ShowroomRoute = (typeof showroomNavigation)[number]

