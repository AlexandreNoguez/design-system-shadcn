"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  BadgeCheck,
  Bell,
  Blocks,
  ChartNoAxesColumn,
  ChevronDown,
  CircleUserRound,
  CommandIcon,
  Component,
  FileText,
  FolderKanban,
  Layers3,
  LayoutDashboard,
  Menu,
  PanelLeft,
  Palette,
  Search,
  Settings,
  Sparkles,
  UserRound,
} from "lucide-react"

import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { showroomNavigation } from "@/lib/navigation"
import { cn } from "@/lib/utils"

const productSections = [
  {
    title: "Dashboard",
    description: "Metricas, alertas e resumo executivo.",
    icon: LayoutDashboard,
    active: false,
  },
  {
    title: "Operacoes",
    description: "Filas, tarefas e acompanhamento de status.",
    icon: FolderKanban,
    active: true,
  },
  {
    title: "Relatorios",
    description: "Indicadores, exportacoes e analises.",
    icon: ChartNoAxesColumn,
    active: false,
  },
  {
    title: "Configuracoes",
    description: "Preferencias, usuarios e permissoes.",
    icon: Settings,
    active: false,
  },
] as const

const navigationMenuGroups = [
  {
    title: "Fundacao",
    items: [
      { title: "Identidade", href: "/brand", icon: Palette },
      { title: "Fundamentos", href: "/foundations", icon: Layers3 },
      { title: "Componentes", href: "/components", icon: Component },
    ],
  },
  {
    title: "Fluxos",
    items: [
      { title: "Formularios", href: "/forms", icon: FileText },
      { title: "Dados", href: "/data-display", icon: ChartNoAxesColumn },
      { title: "Overlays", href: "/overlays", icon: Blocks },
    ],
  },
] as const

function NavigationPanel({
  children,
  description,
  title,
}: {
  children: React.ReactNode
  description: string
  title: string
}) {
  return (
    <section className="rounded-lg border border-border bg-card p-4">
      <div className="mb-4">
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>
      {children}
    </section>
  )
}

function SidebarPreview() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-3 border-b border-sidebar-border p-4">
        <div className="flex size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
          <PanelLeft className="size-4" />
        </div>
        <div>
          <p className="text-sm font-semibold">Aster Console</p>
          <p className="text-xs text-sidebar-foreground/60">Produto interno</p>
        </div>
      </div>
      <nav className="space-y-1 p-3">
        {productSections.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.title}
              type="button"
              className={cn(
                "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                item.active &&
                  "bg-sidebar-accent text-sidebar-accent-foreground shadow-xs"
              )}
            >
              <Icon className="size-4 shrink-0" />
              <span className="flex-1">{item.title}</span>
              {item.active ? (
                <Badge className="h-5" variant="secondary">
                  Ativo
                </Badge>
              ) : null}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default function NavigationPage() {
  const router = useRouter()
  const [commandOpen, setCommandOpen] = React.useState(false)

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setCommandOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="flex flex-col gap-8">
      <section className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
          <Sparkles className="size-4 text-primary" />
          Navegacao de produto
        </div>
        <div className="mt-5 max-w-3xl space-y-3">
          <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            Caminhos claros para uma aplicacao densa
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Padrões de navegação global, contextual e por atalho para manter
            fluxos administrativos rápidos, previsíveis e responsivos.
          </p>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <NavigationPanel
          title="Sidebar com secoes"
          description="Estrutura persistente com estado ativo, iconografia e grupos de produto."
        >
          <SidebarPreview />
        </NavigationPanel>

        <NavigationPanel
          title="Breadcrumb e tabs horizontais"
          description="Contexto de localização combinado com alternância entre visões principais."
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Showroom</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/navigation">Navegacao</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Operacoes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Separator className="my-4" />

          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Visao geral</TabsTrigger>
              <TabsTrigger value="queue">Fila</TabsTrigger>
              <TabsTrigger value="audit">Auditoria</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4 rounded-lg bg-muted p-4">
              <p className="text-sm leading-6 text-muted-foreground">
                Tabs horizontais funcionam bem para alternar visões no mesmo
                nível hierárquico.
              </p>
            </TabsContent>
            <TabsContent value="queue" className="mt-4 rounded-lg bg-muted p-4">
              <p className="text-sm leading-6 text-muted-foreground">
                Conteúdo de fila operacional com filtros e estados.
              </p>
            </TabsContent>
            <TabsContent value="audit" className="mt-4 rounded-lg bg-muted p-4">
              <p className="text-sm leading-6 text-muted-foreground">
                Histórico de eventos e ações recentes.
              </p>
            </TabsContent>
          </Tabs>
        </NavigationPanel>

        <NavigationPanel
          title="Tabs internas de contexto"
          description="Uso em paineis ou detalhes, com uma hierarquia mais compacta."
        >
          <Tabs defaultValue="profile" orientation="vertical" className="sm:flex-row">
            <TabsList className="sm:h-fit">
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="permissions">Permissoes</TabsTrigger>
              <TabsTrigger value="notifications">Alertas</TabsTrigger>
            </TabsList>
            <div className="flex-1 rounded-lg border border-border p-4">
              <TabsContent value="profile">
                <p className="text-sm text-muted-foreground">
                  Dados do usuário e preferências básicas.
                </p>
              </TabsContent>
              <TabsContent value="permissions">
                <p className="text-sm text-muted-foreground">
                  Papéis, escopos e acessos por módulo.
                </p>
              </TabsContent>
              <TabsContent value="notifications">
                <p className="text-sm text-muted-foreground">
                  Configuração de alertas e canais de contato.
                </p>
              </TabsContent>
            </div>
          </Tabs>
        </NavigationPanel>

        <NavigationPanel
          title="Navigation Menu"
          description="Mega menu compacto para descoberta de áreas, fundamentos e fluxos."
        >
          <NavigationMenu viewport={false} className="justify-start">
            <NavigationMenuList>
              {navigationMenuGroups.map((group) => (
                <NavigationMenuItem key={group.title}>
                  <NavigationMenuTrigger>{group.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-72 gap-1">
                      {group.items.map((item) => {
                        const Icon = item.icon

                        return (
                          <NavigationMenuLink key={item.href} asChild>
                            <Link href={item.href}>
                              <Icon />
                              <span>
                                <span className="block font-medium">
                                  {item.title}
                                </span>
                                <span className="block text-xs text-muted-foreground">
                                  Abrir {item.title.toLowerCase()}
                                </span>
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        )
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </NavigationPanel>

        <NavigationPanel
          title="Menubar"
          description="Atalhos para ações globais em ferramentas de uso recorrente."
        >
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Arquivo</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Novo registro
                  <MenubarShortcut>Ctrl+N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Exportar snapshot</MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">Encerrar sessão</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Editar</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Duplicar</MenubarItem>
                <MenubarItem>Arquivar</MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>Preferencias</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Compacto</MenubarItem>
                    <MenubarItem>Confortavel</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Ajuda</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Documentacao</MenubarItem>
                <MenubarItem>Enviar feedback</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </NavigationPanel>

        <NavigationPanel
          title="Command Menu para busca rapida"
          description="Atalho Ctrl/⌘ + K para saltar entre áreas sem depender do mouse."
        >
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => setCommandOpen(true)}>
              <CommandIcon data-icon="inline-start" />
              Abrir command menu
            </Button>
            <Badge variant="outline">Ctrl/⌘ K</Badge>
          </div>

          <CommandDialog
            open={commandOpen}
            onOpenChange={setCommandOpen}
            title="Busca rapida"
            description="Navegue rapidamente pelo showroom."
          >
            <Command>
              <CommandInput placeholder="Buscar seção..." />
              <CommandList>
                <CommandEmpty>Nenhuma seção encontrada.</CommandEmpty>
                <CommandGroup heading="Showroom">
                  {showroomNavigation.map((item) => {
                    const Icon = item.icon

                    return (
                      <CommandItem
                        key={item.href}
                        value={item.href}
                        onSelect={(href) => {
                          setCommandOpen(false)
                          router.push(href)
                        }}
                      >
                        <Icon />
                        {item.title}
                        <CommandShortcut>{item.href}</CommandShortcut>
                      </CommandItem>
                    )
                  })}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Ações">
                  <CommandItem value="settings">
                    <Settings />
                    Abrir configurações
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CommandDialog>
        </NavigationPanel>

        <NavigationPanel
          title="Dropdown de usuario"
          description="Acesso previsível a perfil, notificações, preferências e saída."
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Avatar size="sm">
                  <AvatarFallback>AL</AvatarFallback>
                  <AvatarBadge />
                </Avatar>
                Ana Lima
                <ChevronDown data-icon="inline-end" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Ana Lima</p>
                    <p className="text-xs text-muted-foreground">
                      Produto e UX
                    </p>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserRound />
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notificações
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings />
                Preferências
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <CircleUserRound />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationPanel>

        <NavigationPanel
          title="Menu mobile"
          description="Drawer com os mesmos destinos da navegação global em telas menores."
        >
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">
                <Menu data-icon="inline-start" />
                Abrir menu mobile
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Navegação</DrawerTitle>
                <DrawerDescription>
                  Destinos principais disponíveis em formato touch-friendly.
                </DrawerDescription>
              </DrawerHeader>
              <div className="grid gap-2 px-4">
                {showroomNavigation.map((item) => {
                  const Icon = item.icon
                  const active = item.href === "/navigation"

                  return (
                    <DrawerClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg border border-border px-3 py-3 text-sm transition-colors hover:bg-muted",
                          active && "border-primary bg-primary/10 text-primary"
                        )}
                      >
                        <Icon className="size-4" />
                        <span className="flex-1">{item.title}</span>
                        {active ? <Badge>Atual</Badge> : null}
                      </Link>
                    </DrawerClose>
                  )
                })}
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Fechar</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </NavigationPanel>

        <NavigationPanel
          title="Estado ativo consistente"
          description="O destino atual deve ser visível em sidebar, mobile, tabs e ações de contexto."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Sidebar", "Fundo de destaque e badge Ativo", PanelLeft],
              ["Tabs", "Trigger selecionado com contraste", Layers3],
              ["Mobile", "Item atual com borda primary", Menu],
              ["Command", "Busca com destino explícito", Search],
            ].map(([title, description, Icon]) => (
              <div key={title as string} className="rounded-lg border border-border p-3">
                <div className="flex items-center gap-2">
                  <Icon className="size-4 text-primary" />
                  <p className="text-sm font-medium">{title as string}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description as string}
                </p>
              </div>
            ))}
          </div>
        </NavigationPanel>
      </div>

      <section className="rounded-lg border border-border bg-card p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold">Cobertura da navegação</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">
              A página demonstra navegação global, contextual, por comandos e
              padrões responsivos com estados ativos consistentes.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline" aria-label="Navegação aprovada">
                  <BadgeCheck />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Navegação pronta para revisão</TooltipContent>
            </Tooltip>
            <Badge variant="secondary">Fase 8 pronta para revisão</Badge>
          </div>
        </div>
      </section>
    </div>
  )
}
