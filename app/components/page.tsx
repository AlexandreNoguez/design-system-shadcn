"use client"

import {
  AlertCircle,
  Archive,
  Bell,
  CheckCircle2,
  ChevronDown,
  CircleDashed,
  Copy,
  Download,
  FileText,
  Filter,
  Inbox,
  Loader2,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserPlus,
} from "lucide-react"
import { toast } from "sonner"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
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
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function ComponentPanel({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
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

function FieldRow({
  children,
  label,
}: {
  children: React.ReactNode
  label: string
}) {
  return (
    <div className="space-y-2">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {children}
    </div>
  )
}

export default function ComponentsPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
          <Sparkles className="size-4 text-primary" />
          Galeria de componentes
        </div>
        <div className="mt-5 max-w-3xl space-y-3">
          <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            Componentes base para fluxos reais
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Uma amostra navegavel dos controles mais comuns do produto,
            demonstrando estados, variacoes e padroes visuais da identidade
            Aster UI.
          </p>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-2">
        <ComponentPanel
          title="Buttons e badges"
          description="Acoes primarias, secundarias, destrutivas, com icone e em loading."
        >
          <div className="flex flex-wrap gap-2">
            <Button>
              <Plus data-icon="inline-start" />
              Novo registro
            </Button>
            <Button variant="secondary">Salvar rascunho</Button>
            <Button variant="outline">
              <Download data-icon="inline-start" />
              Exportar
            </Button>
            <Button variant="ghost">Cancelar</Button>
            <Button variant="destructive">
              <Trash2 data-icon="inline-start" />
              Remover
            </Button>
            <Button disabled>
              <Loader2 className="animate-spin" data-icon="inline-start" />
              Processando
            </Button>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="outline" aria-label="Copiar link">
                  <Copy />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Copiar link</TooltipContent>
            </Tooltip>
          </div>

          <Separator className="my-4" />

          <div className="flex flex-wrap gap-2">
            <Badge>Ativo</Badge>
            <Badge variant="secondary">Em revisao</Badge>
            <Badge variant="outline">Planejado</Badge>
            <Badge variant="destructive">Critico</Badge>
            <Badge variant="ghost">
              <ShieldCheck data-icon="inline-start" />
              Seguro
            </Badge>
          </div>
        </ComponentPanel>

        <ComponentPanel
          title="Cards"
          description="Blocos de informacao com acao, rodape e hierarquia compacta."
        >
          <Card>
            <CardHeader>
              <CardTitle>Modulo operacional</CardTitle>
              <CardDescription>
                Indicadores, responsaveis e acoes principais no mesmo contexto.
              </CardDescription>
              <CardAction>
                <Button size="icon-sm" variant="ghost" aria-label="Mais acoes">
                  <MoreHorizontal />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["SLA", "98%"],
                  ["Fila", "24"],
                  ["Risco", "Baixo"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg bg-muted p-3">
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="mt-2 text-lg font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <span className="text-sm text-muted-foreground">
                Atualizado hoje
              </span>
              <Button size="sm" variant="outline">
                Ver detalhes
              </Button>
            </CardFooter>
          </Card>
        </ComponentPanel>

        <ComponentPanel
          title="Campos de formulario"
          description="Inputs, textarea, selects, checkbox, radio, switch e slider."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <FieldRow label="Busca">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-8" placeholder="Buscar clientes" />
              </div>
            </FieldRow>
            <FieldRow label="Area">
              <Select defaultValue="produto">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="produto">Produto</SelectItem>
                  <SelectItem value="operacoes">Operacoes</SelectItem>
                  <SelectItem value="financeiro">Financeiro</SelectItem>
                </SelectContent>
              </Select>
            </FieldRow>
            <FieldRow label="Prioridade nativa">
              <NativeSelect className="w-full" defaultValue="media">
                <NativeSelectOption value="baixa">Baixa</NativeSelectOption>
                <NativeSelectOption value="media">Media</NativeSelectOption>
                <NativeSelectOption value="alta">Alta</NativeSelectOption>
              </NativeSelect>
            </FieldRow>
            <FieldRow label="Percentual">
              <Slider defaultValue={[68]} max={100} step={1} />
            </FieldRow>
            <div className="space-y-3 md:col-span-2">
              <FieldRow label="Observacao">
                <Textarea placeholder="Descreva o contexto da solicitacao" />
              </FieldRow>
              <div className="grid gap-3 sm:grid-cols-3">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox defaultChecked />
                  Notificar responsavel
                </label>
                <div className="flex items-center gap-2">
                  <Switch id="audit-log" defaultChecked />
                  <Label htmlFor="audit-log">Auditoria</Label>
                </div>
                <RadioGroup defaultValue="manual" className="gap-2">
                  <label className="flex items-center gap-2 text-sm">
                    <RadioGroupItem value="manual" />
                    Manual
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <RadioGroupItem value="auto" />
                    Automatico
                  </label>
                </RadioGroup>
              </div>
            </div>
          </div>
        </ComponentPanel>

        <ComponentPanel
          title="Tabs e accordion"
          description="Organizacao de conteudo denso sem perder escaneabilidade."
        >
          <Tabs defaultValue="resumo">
            <TabsList>
              <TabsTrigger value="resumo">Resumo</TabsTrigger>
              <TabsTrigger value="metricas">Metricas</TabsTrigger>
              <TabsTrigger value="historico">Historico</TabsTrigger>
            </TabsList>
            <TabsContent value="resumo" className="mt-4 rounded-lg bg-muted p-4">
              <p className="text-sm leading-6 text-muted-foreground">
                Conteudo principal com informacoes de decisao rapida.
              </p>
            </TabsContent>
            <TabsContent value="metricas" className="mt-4 rounded-lg bg-muted p-4">
              <Progress value={72} />
              <p className="mt-3 text-sm text-muted-foreground">
                72% do processo concluido.
              </p>
            </TabsContent>
            <TabsContent value="historico" className="mt-4 rounded-lg bg-muted p-4">
              <p className="text-sm text-muted-foreground">
                Ultima revisao registrada hoje.
              </p>
            </TabsContent>
          </Tabs>

          <Separator className="my-4" />

          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>Quando usar componentes shadcn?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Quando precisamos de base acessivel, customizavel e alinhada aos
                tokens do produto.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Como escalar a identidade?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Mantendo tokens semanticos e exemplos reais dentro do showroom.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPanel>

        <ComponentPanel
          title="Menus, tooltip e command"
          description="Acoes contextuais, atalhos e descoberta rapida de recursos."
        >
          <div className="flex flex-wrap items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Acoes
                  <ChevronDown data-icon="inline-end" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Registro</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Archive />
                  Arquivar
                  <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPlus />
                  Atribuir
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Receber alertas
                </DropdownMenuCheckboxItem>
                <DropdownMenuItem variant="destructive">
                  <Trash2 />
                  Excluir
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Configurar filtros">
                  <Filter />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Configurar filtros</TooltipContent>
            </Tooltip>
          </div>

          <div className="mt-4 rounded-lg border border-border">
            <Command>
              <CommandInput placeholder="Buscar comando..." />
              <CommandList>
                <CommandEmpty>Nenhum comando encontrado.</CommandEmpty>
                <CommandGroup heading="Acoes rapidas">
                  <CommandItem value="novo">
                    <Plus />
                    Novo registro
                    <CommandShortcut>N</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="relatorio">
                    <FileText />
                    Gerar relatorio
                    <CommandShortcut>R</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Sistema">
                  <CommandItem value="configuracoes">
                    <Settings2 />
                    Configuracoes
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </ComponentPanel>

        <ComponentPanel
          title="Breadcrumb, paginacao e avatar"
          description="Navegacao de contexto, listas paginadas e representacao de usuarios."
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Showroom</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Componentes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Base</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Separator className="my-4" />

          <div className="flex flex-wrap items-center justify-between gap-4">
            <AvatarGroup>
              <Avatar>
                <AvatarFallback>AL</AvatarFallback>
                <AvatarBadge />
              </Avatar>
              <Avatar>
                <AvatarFallback>UX</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>PR</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+8</AvatarGroupCount>
            </AvatarGroup>

            <Pagination className="mx-0 w-fit">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" text="Anterior" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" text="Proxima" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </ComponentPanel>

        <ComponentPanel
          title="Feedback, loading e estados vazios"
          description="Alertas, skeleton, progresso, spinner, empty state e toast."
        >
          <div className="space-y-4">
            <Alert>
              <CheckCircle2 />
              <AlertTitle>Padrao aprovado</AlertTitle>
              <AlertDescription>
                A identidade visual esta aplicada aos componentes base.
              </AlertDescription>
              <AlertAction>
                <Button size="sm" variant="outline">
                  Revisar
                </Button>
              </AlertAction>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle />
              <AlertTitle>Acao sensivel</AlertTitle>
              <AlertDescription>
                Use confirmacao para operacoes destrutivas ou irreversiveis.
              </AlertDescription>
            </Alert>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-border p-4">
                <Skeleton className="h-4 w-3/5" />
                <Skeleton className="mt-3 h-8 w-full" />
                <Skeleton className="mt-2 h-8 w-4/5" />
              </div>

              <div className="flex min-h-32 flex-col items-center justify-center rounded-lg border border-dashed border-border p-4 text-center">
                <Inbox className="size-8 text-muted-foreground" />
                <p className="mt-3 text-sm font-medium">Nenhum item encontrado</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ajuste filtros ou crie um novo registro.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                onClick={() =>
                  toast.success("Padrao salvo", {
                    description: "O componente foi registrado no showroom.",
                  })
                }
              >
                <Bell data-icon="inline-start" />
                Mostrar toast
              </Button>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="size-4 animate-spin text-primary" />
                Sincronizando componentes
              </div>
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <CircleDashed className="size-4 text-primary" />
                Estado aguardando
              </div>
            </div>
          </div>
        </ComponentPanel>
      </div>

      <section className="rounded-lg border border-border bg-card p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold">Cobertura desta fase</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Componentes comuns demonstrados com estados visuais e exemplos de
              produto.
            </p>
          </div>
          <Badge variant="secondary">Fase 4 pronta para revisao</Badge>
        </div>
      </section>
    </div>
  )
}
