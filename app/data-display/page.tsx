"use client"

import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  AlertCircle,
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronsUpDown,
  CircleDashed,
  ClipboardList,
  Download,
  Eye,
  Filter,
  Inbox,
  Loader2,
  MoreHorizontal,
  RefreshCcw,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react"
import { toast } from "sonner"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type WorkItemStatus = "active" | "review" | "planned" | "blocked"
type WorkItemPriority = "low" | "medium" | "high"

type WorkItem = {
  id: string
  name: string
  area: string
  owner: string
  status: WorkItemStatus
  priority: WorkItemPriority
  progress: number
  sla: number
  updatedAt: string
}

const workItems: WorkItem[] = [
  {
    id: "AST-101",
    name: "Painel executivo",
    area: "Produto",
    owner: "Ana Lima",
    status: "active",
    priority: "high",
    progress: 88,
    sla: 98,
    updatedAt: "2026-05-14",
  },
  {
    id: "AST-102",
    name: "Fluxo de onboarding",
    area: "UX",
    owner: "Bruno Costa",
    status: "review",
    priority: "medium",
    progress: 64,
    sla: 91,
    updatedAt: "2026-05-13",
  },
  {
    id: "AST-103",
    name: "Cadastro operacional",
    area: "Engenharia",
    owner: "Carla Rocha",
    status: "planned",
    priority: "medium",
    progress: 24,
    sla: 84,
    updatedAt: "2026-05-12",
  },
  {
    id: "AST-104",
    name: "Politicas de permissao",
    area: "Seguranca",
    owner: "Diego Martins",
    status: "blocked",
    priority: "high",
    progress: 41,
    sla: 72,
    updatedAt: "2026-05-11",
  },
  {
    id: "AST-105",
    name: "Central de notificacoes",
    area: "Produto",
    owner: "Elisa Nunes",
    status: "active",
    priority: "low",
    progress: 76,
    sla: 96,
    updatedAt: "2026-05-10",
  },
  {
    id: "AST-106",
    name: "Relatorio financeiro",
    area: "Financeiro",
    owner: "Felipe Gomes",
    status: "review",
    priority: "high",
    progress: 57,
    sla: 89,
    updatedAt: "2026-05-09",
  },
  {
    id: "AST-107",
    name: "Preferencias do usuario",
    area: "UX",
    owner: "Giulia Alves",
    status: "planned",
    priority: "low",
    progress: 18,
    sla: 80,
    updatedAt: "2026-05-08",
  },
  {
    id: "AST-108",
    name: "Auditoria de alteracoes",
    area: "Engenharia",
    owner: "Henrique Dias",
    status: "active",
    priority: "medium",
    progress: 93,
    sla: 99,
    updatedAt: "2026-05-07",
  },
  {
    id: "AST-109",
    name: "Gestao de contratos",
    area: "Juridico",
    owner: "Isabela Freitas",
    status: "blocked",
    priority: "medium",
    progress: 35,
    sla: 68,
    updatedAt: "2026-05-06",
  },
  {
    id: "AST-110",
    name: "Configuracoes da conta",
    area: "Operacoes",
    owner: "Joao Pereira",
    status: "active",
    priority: "low",
    progress: 82,
    sla: 94,
    updatedAt: "2026-05-05",
  },
]

const statusConfig: Record<
  WorkItemStatus,
  { label: string; badge: "default" | "secondary" | "outline" | "destructive" }
> = {
  active: { label: "Ativo", badge: "default" },
  review: { label: "Em revisao", badge: "secondary" },
  planned: { label: "Planejado", badge: "outline" },
  blocked: { label: "Bloqueado", badge: "destructive" },
}

const priorityConfig: Record<WorkItemPriority, string> = {
  low: "Baixa",
  medium: "Media",
  high: "Alta",
}

function SortButton({
  children,
  sort,
  onClick,
}: {
  children: React.ReactNode
  sort: false | "asc" | "desc"
  onClick: () => void
}) {
  const Icon = sort === "asc" ? ArrowUp : sort === "desc" ? ArrowDown : ChevronsUpDown

  return (
    <Button variant="ghost" size="sm" className="-ml-2" onClick={onClick}>
      {children}
      <Icon data-icon="inline-end" />
    </Button>
  )
}

function StatusBadge({ status }: { status: WorkItemStatus }) {
  const config = statusConfig[status]

  return <Badge variant={config.badge}>{config.label}</Badge>
}

function DataStateCard({
  children,
  description,
  icon,
  title,
}: {
  children?: React.ReactNode
  description: string
  icon: React.ReactNode
  title: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  )
}

export default function DataDisplayPage() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
    area: true,
    sla: true,
  })
  const [rowSelection, setRowSelection] = React.useState({})
  const [search, setSearch] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<WorkItemStatus | "all">(
    "all"
  )

  const filteredData = React.useMemo(() => {
    return workItems.filter((item) => {
      const normalizedSearch = search.trim().toLowerCase()
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [item.id, item.name, item.area, item.owner]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch)
      const matchesStatus =
        statusFilter === "all" ? true : item.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [search, statusFilter])

  const columns = React.useMemo<ColumnDef<WorkItem>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            aria-label="Selecionar todas as linhas"
            checked={
              table.getIsAllPageRowsSelected()
                ? true
                : table.getIsSomePageRowsSelected()
                  ? "indeterminate"
                  : false
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(value === true)
            }
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            aria-label={`Selecionar ${row.original.name}`}
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(value === true)}
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => (
          <span className="font-mono text-xs text-muted-foreground">
            {row.original.id}
          </span>
        ),
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <SortButton
            sort={column.getIsSorted()}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nome
          </SortButton>
        ),
        cell: ({ row }) => (
          <div className="min-w-56">
            <p className="font-medium">{row.original.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {row.original.owner}
            </p>
          </div>
        ),
      },
      {
        accessorKey: "area",
        header: "Area",
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },
      {
        accessorKey: "priority",
        header: ({ column }) => (
          <SortButton
            sort={column.getIsSorted()}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Prioridade
          </SortButton>
        ),
        cell: ({ row }) => priorityConfig[row.original.priority],
      },
      {
        accessorKey: "progress",
        header: ({ column }) => (
          <SortButton
            sort={column.getIsSorted()}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Progresso
          </SortButton>
        ),
        cell: ({ row }) => (
          <div className="flex min-w-36 items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${row.original.progress}%` }}
              />
            </div>
            <span className="w-9 text-right text-xs text-muted-foreground">
              {row.original.progress}%
            </span>
          </div>
        ),
      },
      {
        accessorKey: "sla",
        header: ({ column }) => (
          <SortButton
            sort={column.getIsSorted()}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            SLA
          </SortButton>
        ),
        cell: ({ row }) => `${row.original.sla}%`,
      },
      {
        accessorKey: "updatedAt",
        header: ({ column }) => (
          <SortButton
            sort={column.getIsSorted()}
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Atualizado
          </SortButton>
        ),
        cell: ({ row }) => new Date(`${row.original.updatedAt}T12:00:00`).toLocaleDateString("pt-BR"),
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="Abrir acoes">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuLabel>Acoes</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => toast.info(`Abrindo ${row.original.id}`)}
              >
                <Eye />
                Ver detalhes
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => toast.success(`${row.original.id} exportado`)}
              >
                <Download />
                Exportar
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <AlertCircle />
                Sinalizar risco
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      },
    ],
    []
  )

  // TanStack Table exposes stable table APIs that React Compiler should not memoize.
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowId: (row) => row.id,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      columnVisibility,
      rowSelection,
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 6,
      },
    },
  })

  const selectedCount = table.getFilteredSelectedRowModel().rows.length
  const totalFiltered = table.getFilteredRowModel().rows.length

  return (
    <div className="flex flex-col gap-8">
      <section className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
          <Sparkles className="size-4 text-primary" />
          Tabelas e dados
        </div>
        <div className="mt-5 max-w-3xl space-y-3">
          <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            Dados densos com controle e clareza
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Uma tabela operacional com busca, filtro, ordenacao, selecao,
            visibilidade de colunas, paginacao e estados auxiliares para fluxos
            reais de produto.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card">
        <div className="flex flex-col gap-4 p-4">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-8"
                placeholder="Buscar por ID, nome, area ou responsavel"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <Select
              value={statusFilter}
              onValueChange={(value) =>
                setStatusFilter(value as WorkItemStatus | "all")
              }
            >
              <SelectTrigger className="w-full lg:w-44">
                <Filter data-icon="inline-start" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos status</SelectItem>
                <SelectItem value="active">Ativos</SelectItem>
                <SelectItem value="review">Em revisao</SelectItem>
                <SelectItem value="planned">Planejados</SelectItem>
                <SelectItem value="blocked">Bloqueados</SelectItem>
              </SelectContent>
            </Select>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Settings2 data-icon="inline-start" />
                  Colunas
                  <ChevronDown data-icon="inline-end" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Exibir colunas</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(value === true)
                      }
                    >
                      {column.id === "updatedAt" ? "Atualizado" : column.id}
                    </DropdownMenuCheckboxItem>
                  ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{totalFiltered} registros</Badge>
              <Badge variant={selectedCount > 0 ? "default" : "outline"}>
                {selectedCount} selecionados
              </Badge>
              {statusFilter !== "all" || search ? (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setSearch("")
                    setStatusFilter("all")
                    table.resetRowSelection()
                  }}
                >
                  <RefreshCcw data-icon="inline-start" />
                  Limpar filtros
                </Button>
              ) : null}
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={() =>
                toast.success("Snapshot exportado", {
                  description: `${totalFiltered} registros incluidos na exportacao.`,
                })
              }
            >
              <Download data-icon="inline-start" />
              Exportar
            </Button>
          </div>
        </div>

        <Separator />

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-40 text-center">
                  <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
                    <Inbox className="size-8" />
                    <p className="font-medium text-foreground">
                      Nenhum registro encontrado
                    </p>
                    <p className="max-w-sm text-sm">
                      Ajuste a busca ou os filtros para visualizar registros da
                      tabela.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <Separator />

        <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Pagina {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount() || 1}
          </p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Proxima
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <DataStateCard
          title="Loading state"
          description="Skeletons preservam o layout enquanto os dados carregam."
          icon={<Loader2 className="size-4 animate-spin" />}
        >
          <div className="space-y-3">
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-5/6" />
          </div>
        </DataStateCard>

        <DataStateCard
          title="Empty state"
          description="Estado vazio orienta o usuario para o proximo passo."
          icon={<CircleDashed className="size-4" />}
        >
          <div className="rounded-lg border border-dashed border-border p-4 text-center">
            <ClipboardList className="mx-auto size-7 text-muted-foreground" />
            <p className="mt-3 text-sm font-medium">Sem itens pendentes</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Novas tarefas aparecerao aqui automaticamente.
            </p>
          </div>
        </DataStateCard>

        <DataStateCard
          title="Error state"
          description="Falhas de dados precisam explicar o problema e oferecer recuperacao."
          icon={<AlertCircle className="size-4" />}
        >
          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Falha ao carregar dados</AlertTitle>
            <AlertDescription>
              Tente novamente ou verifique a conexao com a API.
            </AlertDescription>
          </Alert>
          <Button className="mt-3 w-full" variant="outline">
            <RefreshCcw data-icon="inline-start" />
            Tentar novamente
          </Button>
        </DataStateCard>
      </section>

      <section className="rounded-lg border border-border bg-card p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold">Layout responsivo</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">
              A tabela usa container com rolagem horizontal em telas pequenas e
              preserva a densidade necessaria para ferramentas administrativas.
            </p>
          </div>
          <Badge variant="secondary">Fase 7 pronta para revisao</Badge>
        </div>
      </section>
    </div>
  )
}
