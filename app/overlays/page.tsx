"use client"

import type { FormEvent, ReactNode } from "react"
import {
  AlertTriangle,
  Archive,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Copy,
  Download,
  Filter,
  Info,
  Layers3,
  MessageSquare,
  MoreHorizontal,
  PanelRightOpen,
  Plus,
  Search,
  Settings2,
  ShieldAlert,
  SlidersHorizontal,
  Sparkles,
  Trash2,
  UserPlus,
} from "lucide-react"
import { toast } from "sonner"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function OverlayPanel({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="rounded-lg border border-border bg-card p-4 text-card-foreground">
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

function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  toast.success("Solicitacao criada", {
    description: "O formulario em modal foi enviado com sucesso.",
  })
}

export default function OverlaysPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
          <Sparkles className="size-4 text-primary" />
          Overlays e interacoes
        </div>
        <div className="mt-5 max-w-3xl space-y-3">
          <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            Camadas de decisao para fluxos importantes
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Dialogs, confirmacoes, paineis laterais, drawers, popovers e menus
            contextuais com comportamento acessivel e visual consistente.
          </p>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-2">
        <OverlayPanel
          title="Dialog simples"
          description="Uso para informacoes curtas, revisoes rapidas e confirmacoes leves."
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Info data-icon="inline-start" />
                Abrir resumo
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Resumo do modulo</DialogTitle>
                <DialogDescription>
                  Este dialog apresenta informacoes de apoio sem tirar o usuario
                  do contexto atual.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Status", "Ativo"],
                  ["SLA", "98%"],
                  ["Fila", "24"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-muted p-3">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="mt-2 text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Fechar</Button>
                </DialogClose>
                <Button>Ver detalhes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </OverlayPanel>

        <OverlayPanel
          title="Dialog com formulario"
          description="Uso para criar ou editar dados sem sair da listagem."
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus data-icon="inline-start" />
                Nova solicitacao
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Criar solicitacao</DialogTitle>
                <DialogDescription>
                  O foco inicial entra no primeiro campo e o envio retorna
                  feedback por toast.
                </DialogDescription>
              </DialogHeader>
              <form className="grid gap-4" onSubmit={handleFormSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="request-title">Titulo</Label>
                  <Input
                    id="request-title"
                    placeholder="Ex: Revisar proposta comercial"
                    autoFocus
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Area responsavel</Label>
                  <Select defaultValue="produto">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="produto">Produto</SelectItem>
                      <SelectItem value="operacoes">Operacoes</SelectItem>
                      <SelectItem value="financeiro">Financeiro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" type="button">
                      Cancelar
                    </Button>
                  </DialogClose>
                  <Button type="submit">Criar</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </OverlayPanel>

        <OverlayPanel
          title="Alert Dialog"
          description="Confirmacoes explicitas para decisoes importantes ou irreversiveis."
        >
          <div className="flex flex-wrap gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="secondary">
                  <CheckCircle2 data-icon="inline-start" />
                  Confirmar aprovacao
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogMedia>
                    <CheckCircle2 className="text-primary" />
                  </AlertDialogMedia>
                  <AlertDialogTitle>Aprovar este padrao?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta acao marca o componente como pronto para revisao com o
                    gerente.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => toast.success("Padrao aprovado")}
                  >
                    Aprovar
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 data-icon="inline-start" />
                  Excluir item
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogMedia className="bg-destructive/10 text-destructive">
                    <ShieldAlert />
                  </AlertDialogMedia>
                  <AlertDialogTitle>Excluir item permanentemente?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Esta operacao nao pode ser desfeita e deve ser usada apenas
                    em acoes destrutivas reais.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction
                    variant="destructive"
                    onClick={() => toast.error("Item excluido")}
                  >
                    Excluir
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </OverlayPanel>

        <OverlayPanel
          title="Sheet lateral"
          description="Painel persistente para filtros, detalhes e edicoes rapidas."
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <PanelRightOpen data-icon="inline-start" />
                Abrir painel
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filtros avancados</SheetTitle>
                <SheetDescription>
                  Ajuste a listagem sem perder o contexto da pagina.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 px-4">
                <div className="grid gap-2">
                  <Label>Status</Label>
                  <Select defaultValue="ativos">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ativos">Ativos</SelectItem>
                      <SelectItem value="pendentes">Pendentes</SelectItem>
                      <SelectItem value="arquivados">Arquivados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div>
                    <p className="text-sm font-medium">Somente criticos</p>
                    <p className="text-sm text-muted-foreground">
                      Exibir registros com prioridade alta.
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button>Aplicar filtros</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </OverlayPanel>

        <OverlayPanel
          title="Drawer mobile"
          description="Alternativa ergonomica para acoes em telas pequenas."
        >
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">
                <SlidersHorizontal data-icon="inline-start" />
                Abrir drawer
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Acoes rapidas</DrawerTitle>
                <DrawerDescription>
                  Padrao recomendado para menus de apoio em mobile.
                </DrawerDescription>
              </DrawerHeader>
              <div className="grid gap-2 px-4">
                {[
                  ["Nova tarefa", Plus],
                  ["Pesquisar", Search],
                  ["Notificacoes", Bell],
                ].map(([label, Icon]) => (
                  <Button key={label as string} variant="outline" className="justify-start">
                    <Icon data-icon="inline-start" />
                    {label as string}
                  </Button>
                ))}
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button>Concluir</Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <Button variant="outline">Fechar</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </OverlayPanel>

        <OverlayPanel
          title="Popover"
          description="Conteudo curto, ajuda contextual e acoes sem bloquear a pagina."
        >
          <div className="flex flex-wrap gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarDays data-icon="inline-start" />
                  Janela de revisao
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start">
                <PopoverHeader>
                  <PopoverTitle>Proxima revisao</PopoverTitle>
                  <PopoverDescription>
                    Quinta-feira, 14 de maio de 2026, com pauta de identidade
                    visual e componentes.
                  </PopoverDescription>
                </PopoverHeader>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <Settings2 data-icon="inline-start" />
                  Preferencias
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start">
                <PopoverHeader>
                  <PopoverTitle>Acoes do painel</PopoverTitle>
                  <PopoverDescription>
                    Configure como os dados aparecem no showroom.
                  </PopoverDescription>
                </PopoverHeader>
                <Separator />
                <div className="grid gap-2">
                  <Button variant="ghost" className="justify-start">
                    <Copy data-icon="inline-start" />
                    Copiar link
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Download data-icon="inline-start" />
                    Exportar snapshot
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </OverlayPanel>

        <OverlayPanel
          title="Dropdown e Context Menu"
          description="Menus agrupados para acoes previsiveis e atalhos de produtividade."
        >
          <div className="flex flex-wrap gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Menu agrupado
                  <ChevronDown data-icon="inline-end" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Registro</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Archive />
                    Arquivar
                    <DropdownMenuShortcut>Ctrl+A</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <UserPlus />
                    Atribuir
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Trash2 />
                  Excluir
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <ContextMenu>
              <ContextMenuTrigger className="inline-flex h-8 items-center rounded-lg border border-dashed border-border px-3 text-sm text-muted-foreground">
                Clique direito aqui
              </ContextMenuTrigger>
              <ContextMenuContent className="w-52">
                <ContextMenuLabel>Acoes contextuais</ContextMenuLabel>
                <ContextMenuItem>
                  <Copy />
                  Copiar
                  <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  <MessageSquare />
                  Comentar
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem variant="destructive">
                  <Trash2 />
                  Remover
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>
        </OverlayPanel>

        <OverlayPanel
          title="Tooltip em botoes de icone"
          description="Icon-only actions sempre recebem nome acessivel e dica visual."
        >
          <div className="flex flex-wrap gap-2">
            {[
              ["Filtrar", Filter],
              ["Mais acoes", MoreHorizontal],
              ["Camadas", Layers3],
              ["Alerta", AlertTriangle],
            ].map(([label, Icon]) => (
              <Tooltip key={label as string}>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline" aria-label={label as string}>
                    <Icon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{label as string}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </OverlayPanel>
      </div>

      <section className="rounded-lg border border-border bg-card p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold">Validacao de interacao</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">
              Os overlays usam primitives shadcn/Radix e Vaul, com fechamento por
              ESC, clique fora, foco gerenciado e retorno ao gatilho apos fechar.
            </p>
          </div>
          <Badge variant="secondary">Fase 5 pronta para revisao</Badge>
        </div>
      </section>
    </div>
  )
}
