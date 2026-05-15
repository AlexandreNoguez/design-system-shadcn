"use client"

import * as React from "react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  AlertCircle,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FilePlus2,
  Filter,
  LayoutDashboard,
  ListFilter,
  MoreHorizontal,
  Pencil,
  Plus,
  Save,
  Search,
  ShieldCheck,
  Sparkles,
  Trash2,
  TrendingUp,
  UsersRound,
} from "lucide-react"
import { toast } from "sonner"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
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
import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

const dashboardMetrics = [
  {
    label: "Receita recorrente",
    value: "R$ 842k",
    change: "+12,8%",
    icon: CircleDollarSign,
  },
  {
    label: "Clientes ativos",
    value: "1.284",
    change: "+7,2%",
    icon: UsersRound,
  },
  {
    label: "SLA medio",
    value: "98,1%",
    change: "+2,4%",
    icon: ShieldCheck,
  },
  {
    label: "Tempo medio",
    value: "4h 18m",
    change: "-11,5%",
    icon: Clock3,
  },
] as const

const revenueData = [
  { month: "Jan", revenue: 520, tickets: 240 },
  { month: "Fev", revenue: 610, tickets: 280 },
  { month: "Mar", revenue: 590, tickets: 260 },
  { month: "Abr", revenue: 740, tickets: 310 },
  { month: "Mai", revenue: 842, tickets: 360 },
] as const

const adminRows = [
  {
    id: "AST-241",
    client: "Banco Aurora",
    owner: "Ana Lima",
    status: "Ativo",
    amount: "R$ 184k",
    risk: "Baixo",
  },
  {
    id: "AST-242",
    client: "Nexa Operacoes",
    owner: "Bruno Costa",
    status: "Em revisao",
    amount: "R$ 96k",
    risk: "Medio",
  },
  {
    id: "AST-243",
    client: "Grupo Atlas",
    owner: "Carla Rocha",
    status: "Bloqueado",
    amount: "R$ 128k",
    risk: "Alto",
  },
  {
    id: "AST-244",
    client: "Orion Health",
    owner: "Diego Martins",
    status: "Ativo",
    amount: "R$ 212k",
    risk: "Baixo",
  },
] as const

function PatternPanel({
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

function StatusBadge({ status }: { status: string }) {
  if (status === "Bloqueado") {
    return <Badge variant="destructive">{status}</Badge>
  }

  if (status === "Em revisao") {
    return <Badge variant="secondary">{status}</Badge>
  }

  return <Badge>{status}</Badge>
}

function subscribeToClientStore() {
  return () => {}
}

export default function PatternsPage() {
  const [created, setCreated] = React.useState(false)
  const chartsReady = React.useSyncExternalStore(
    subscribeToClientStore,
    () => true,
    () => false
  )

  return (
    <div className="flex flex-col gap-8">
      <section className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
          <Sparkles className="size-4 text-primary" />
          Padroes de produto
        </div>
        <div className="mt-5 max-w-3xl space-y-3">
          <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            Telas reais para demonstrar a identidade em uso
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Exemplos completos de dashboard, listagem, detalhe, criacao, edicao
            e configuracoes para mostrar como o design system sustenta o
            produto final.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Dashboard executivo</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Metricas, grafico e leitura rapida de performance operacional.
            </p>
          </div>
          <Button variant="outline">
            <CalendarDays data-icon="inline-start" />
            Maio de 2026
          </Button>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {dashboardMetrics.map((metric) => {
            const Icon = metric.icon

            return (
              <div key={metric.label} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
                  </div>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                  <TrendingUp className="size-4" />
                  {metric.change} vs. mes anterior
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold">Receita e volume</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Dados consolidados dos ultimos cinco meses.
                </p>
              </div>
              <Badge variant="secondary">Recharts</Badge>
            </div>
            <div className="h-72 min-w-0">
              {chartsReady ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData} margin={{ left: 0, right: 12 }}>
                    <defs>
                      <linearGradient id="revenueFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="var(--border)" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} width={36} />
                    <RechartsTooltip
                      contentStyle={{
                        background: "var(--popover)",
                        border: "1px solid var(--border)",
                        borderRadius: "var(--radius)",
                        color: "var(--popover-foreground)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="var(--chart-1)"
                      fill="url(#revenueFill)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full rounded-lg bg-muted" />
              )}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-4">
            <div className="mb-4">
              <h3 className="text-base font-semibold">Distribuicao de demanda</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tickets por periodo para leitura de carga.
              </p>
            </div>
            <div className="h-72 min-w-0">
              {chartsReady ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid stroke="var(--border)" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <YAxis tickLine={false} axisLine={false} width={32} />
                    <Bar dataKey="tickets" fill="var(--chart-2)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full rounded-lg bg-muted" />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <PatternPanel
          title="Listagem administrativa"
          description="Tabela compacta com busca, filtros, status e acoes por linha."
        >
          <div className="mb-4 grid gap-3 md:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-8" placeholder="Buscar cliente ou contrato" />
            </div>
            <Button variant="outline">
              <Filter data-icon="inline-start" />
              Filtros
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus data-icon="inline-start" />
                  Novo contrato
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Criar contrato</DialogTitle>
                  <DialogDescription>
                    Fluxo de criacao com feedback de sucesso.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Cliente</Label>
                    <Input placeholder="Nome do cliente" />
                  </div>
                  <div className="grid gap-2">
                    <Label>Valor previsto</Label>
                    <Input placeholder="R$ 0,00" />
                  </div>
                </div>
                {created ? (
                  <Alert>
                    <CheckCircle2 />
                    <AlertTitle>Contrato criado</AlertTitle>
                    <AlertDescription>
                      O fluxo de sucesso fica visivel antes de fechar o modal.
                    </AlertDescription>
                  </Alert>
                ) : null}
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Fechar</Button>
                  </DialogClose>
                  <Button
                    onClick={() => {
                      setCreated(true)
                      toast.success("Contrato criado com sucesso")
                    }}
                  >
                    <FilePlus2 data-icon="inline-start" />
                    Criar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contrato</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Responsavel</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{row.client}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">
                        {row.id}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={row.status} />
                  </TableCell>
                  <TableCell>{row.owner}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon-sm" aria-label="Abrir acoes">
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acoes</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <ArrowUpRight />
                          Abrir detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Pencil />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          <Trash2 />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </PatternPanel>

        <PatternPanel
          title="Filtros avancados"
          description="Painel compacto para segmentar dados sem sair da listagem."
        >
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label>Status</Label>
              <Select defaultValue="active">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Ativos</SelectItem>
                  <SelectItem value="review">Em revisao</SelectItem>
                  <SelectItem value="blocked">Bloqueados</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label>Responsavel</Label>
              <Input placeholder="Buscar responsavel" />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-3">
              <div>
                <p className="text-sm font-medium">Somente alto risco</p>
                <p className="text-sm text-muted-foreground">
                  Exibe contratos com risco operacional elevado.
                </p>
              </div>
              <Switch />
            </div>
            <Button>
              <ListFilter data-icon="inline-start" />
              Aplicar filtros
            </Button>
          </div>
        </PatternPanel>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <PatternPanel
          title="Tela de detalhes"
          description="Resumo de entidade com status, responsaveis, progresso e abas internas."
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar size="lg">
                <AvatarFallback>BA</AvatarFallback>
                <AvatarBadge />
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Banco Aurora</h3>
                <p className="text-sm text-muted-foreground">
                  Contrato enterprise ativo desde 2024.
                </p>
              </div>
            </div>
            <StatusBadge status="Ativo" />
          </div>

          <Separator className="my-4" />

          <Tabs defaultValue="summary">
            <TabsList>
              <TabsTrigger value="summary">Resumo</TabsTrigger>
              <TabsTrigger value="activity">Atividade</TabsTrigger>
              <TabsTrigger value="billing">Financeiro</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="mt-4 space-y-4">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs text-muted-foreground">Saude</p>
                  <p className="mt-2 text-lg font-semibold">94%</p>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs text-muted-foreground">SLA</p>
                  <p className="mt-2 text-lg font-semibold">98%</p>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs text-muted-foreground">MRR</p>
                  <p className="mt-2 text-lg font-semibold">R$ 184k</p>
                </div>
              </div>
              <Progress value={82} />
            </TabsContent>
            <TabsContent value="activity" className="mt-4">
              <Alert>
                <CheckCircle2 />
                <AlertTitle>Revisao concluida</AlertTitle>
                <AlertDescription>
                  Ultima avaliacao operacional aprovada pela equipe de sucesso.
                </AlertDescription>
              </Alert>
            </TabsContent>
            <TabsContent value="billing" className="mt-4">
              <p className="text-sm text-muted-foreground">
                Proxima renovacao prevista para 30 de junho de 2026.
              </p>
            </TabsContent>
          </Tabs>
        </PatternPanel>

        <PatternPanel
          title="Criacao, edicao e configuracoes"
          description="Fluxos de formulario para criar, editar e ajustar preferencias."
        >
          <div className="grid gap-4">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="grid gap-2">
                <Label>Nome do contrato</Label>
                <Input defaultValue="Banco Aurora Enterprise" />
              </div>
              <div className="grid gap-2">
                <Label>Plano</Label>
                <Select defaultValue="enterprise">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Observacoes internas</Label>
              <Textarea
                defaultValue="Cliente estratégico com alto uso do módulo operacional."
                className="min-h-24"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium">Auditoria avançada</p>
                  <p className="text-sm text-muted-foreground">
                    Registrar alterações sensíveis.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <div>
                  <p className="text-sm font-medium">Alertas financeiros</p>
                  <p className="text-sm text-muted-foreground">
                    Notificar antes da renovação.
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">
                    <Trash2 data-icon="inline-start" />
                    Excluir contrato
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive">
                      <AlertCircle />
                    </AlertDialogMedia>
                    <AlertDialogTitle>Excluir contrato?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta acao remove o contrato da lista administrativa e deve
                      exigir confirmacao explicita.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                      variant="destructive"
                      onClick={() => toast.error("Contrato excluido")}
                    >
                      Excluir
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Button onClick={() => toast.success("Alteracoes salvas")}>
                <Save data-icon="inline-start" />
                Salvar edicao
              </Button>
            </div>
          </div>
        </PatternPanel>
      </section>

      <section className="rounded-lg border border-border bg-card p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold">Cobertura de telas reais</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">
              A página cobre dashboard, listagem, detalhes, criação, edição,
              configurações, filtros avançados e confirmações destrutivas.
            </p>
          </div>
          <Badge variant="secondary">
            <LayoutDashboard data-icon="inline-start" />
            Fase 10 pronta para revisao
          </Badge>
        </div>
      </section>
    </div>
  )
}
