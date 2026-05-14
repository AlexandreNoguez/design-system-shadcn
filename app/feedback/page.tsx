"use client"

import * as React from "react"
import {
  AlertCircle,
  Bell,
  CheckCircle2,
  CircleDashed,
  Clock,
  Inbox,
  Loader2,
  MessageSquareWarning,
  RefreshCcw,
  Rocket,
  Send,
  ShieldAlert,
  Sparkles,
  TriangleAlert,
} from "lucide-react"
import { toast } from "sonner"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
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

function FeedbackPanel({
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

function TableSkeleton() {
  return (
    <div className="rounded-lg border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Registro</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Responsavel</TableHead>
            <TableHead>Atualizado</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 4 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-4 w-36" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-20 rounded-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-28" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-4 w-24" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default function FeedbackPage() {
  const [isRetrying, setIsRetrying] = React.useState(false)
  const [syncProgress, setSyncProgress] = React.useState(68)

  const retryRequest = async () => {
    setIsRetrying(true)
    setSyncProgress(24)
    await new Promise((resolve) => setTimeout(resolve, 700))
    setSyncProgress(100)
    setIsRetrying(false)
    toast.success("Conexao restabelecida", {
      description: "Os dados foram sincronizados novamente.",
    })
  }

  return (
    <div className="flex flex-col gap-8">
      <section className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
          <Sparkles className="size-4 text-primary" />
          Feedback e estados
        </div>
        <div className="mt-5 max-w-3xl space-y-3">
          <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            Respostas claras para cada momento da jornada
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Estados de sucesso, erro, aviso, carregamento e vazio para que o
            usuario sempre saiba o que aconteceu e qual o proximo passo.
          </p>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-[0.85fr_1.15fr]">
        <FeedbackPanel
          title="Toasts"
          description="Mensagens temporarias para confirmacoes, falhas, avisos e acoes rapidas."
        >
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() =>
                toast.success("Alteracoes salvas", {
                  description: "O registro foi atualizado com sucesso.",
                })
              }
            >
              <CheckCircle2 data-icon="inline-start" />
              Sucesso
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.error("Falha ao salvar", {
                  description: "Revise os campos e tente novamente.",
                })
              }
            >
              <AlertCircle data-icon="inline-start" />
              Erro
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.warning("Atenção necessária", {
                  description: "Existem pendências antes da publicação.",
                })
              }
            >
              <TriangleAlert data-icon="inline-start" />
              Aviso
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast("Snapshot exportado", {
                  description: "O arquivo ficará disponível por 24 horas.",
                  action: {
                    label: "Abrir",
                    onClick: () => toast.info("Abrindo snapshot"),
                  },
                })
              }
            >
              <Bell data-icon="inline-start" />
              Com ação
            </Button>
          </div>
        </FeedbackPanel>

        <FeedbackPanel
          title="Alerts"
          description="Mensagens persistentes para contexto importante dentro da tela."
        >
          <div className="grid gap-3">
            <Alert>
              <CheckCircle2 />
              <AlertTitle>Publicação pronta</AlertTitle>
              <AlertDescription>
                Todos os critérios mínimos foram atendidos para a revisão.
              </AlertDescription>
              <AlertAction>
                <Button size="sm" variant="outline">
                  Ver detalhes
                </Button>
              </AlertAction>
            </Alert>

            <Alert>
              <MessageSquareWarning />
              <AlertTitle>Revisão recomendada</AlertTitle>
              <AlertDescription>
                Alguns textos ainda podem ser ajustados antes da apresentação.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <ShieldAlert />
              <AlertTitle>Ação destrutiva bloqueada</AlertTitle>
              <AlertDescription>
                Operações irreversíveis devem exigir confirmação explícita.
              </AlertDescription>
            </Alert>
          </div>
        </FeedbackPanel>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <FeedbackPanel
          title="Skeleton de card"
          description="Mantem a estrutura da tela enquanto metricas e conteudo carregam."
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-3 w-56" />
                </div>
                <Skeleton className="size-9 rounded-lg" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-3">
                <Skeleton className="h-20 rounded-lg" />
                <Skeleton className="h-20 rounded-lg" />
                <Skeleton className="h-20 rounded-lg" />
              </div>
            </CardContent>
            <CardFooter>
              <Skeleton className="h-8 w-32" />
            </CardFooter>
          </Card>
        </FeedbackPanel>

        <FeedbackPanel
          title="Skeleton de tabela"
          description="Evita saltos de layout em listagens administrativas."
        >
          <TableSkeleton />
        </FeedbackPanel>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <FeedbackPanel
          title="Loading e progresso"
          description="Estados de espera para ações bloqueantes e sincronização."
        >
          <div className="space-y-4">
            <Button disabled className="w-full">
              <Loader2 className="animate-spin" data-icon="inline-start" />
              Enviando solicitação
            </Button>
            <div className="rounded-lg border border-border p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">Sincronização</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Atualizando dados operacionais.
                  </p>
                </div>
                <Badge variant="secondary">{syncProgress}%</Badge>
              </div>
              <Progress value={syncProgress} />
            </div>
          </div>
        </FeedbackPanel>

        <FeedbackPanel
          title="Empty state operacional"
          description="Estado vazio que explica o cenário sem interromper o fluxo."
        >
          <div className="flex min-h-56 flex-col items-center justify-center rounded-lg border border-dashed border-border p-6 text-center">
            <Inbox className="size-10 text-muted-foreground" />
            <p className="mt-4 text-sm font-medium">Nenhuma tarefa pendente</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
              Quando novas solicitações chegarem, elas aparecerão nesta lista.
            </p>
            <Badge className="mt-4" variant="outline">
              <Clock data-icon="inline-start" />
              Aguardando eventos
            </Badge>
          </div>
        </FeedbackPanel>

        <FeedbackPanel
          title="Empty state com ação primária"
          description="Quando existe uma próxima ação clara, o estado vazio deve oferecê-la."
        >
          <div className="flex min-h-56 flex-col items-center justify-center rounded-lg border border-border bg-muted/40 p-6 text-center">
            <Rocket className="size-10 text-primary" />
            <p className="mt-4 text-sm font-medium">Nenhum projeto criado</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
              Crie o primeiro projeto para iniciar a demonstração do fluxo.
            </p>
            <Button className="mt-4">
              <Send data-icon="inline-start" />
              Criar projeto
            </Button>
          </div>
        </FeedbackPanel>
      </div>

      <section className="rounded-lg border border-border bg-card p-4">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-base font-semibold">
              Error state com tentativa novamente
            </h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">
              Falhas precisam explicar o problema, manter o usuário no contexto
              e oferecer uma recuperação evidente.
            </p>
          </div>
          <Button variant="outline" onClick={retryRequest} disabled={isRetrying}>
            {isRetrying ? (
              <Loader2 className="animate-spin" data-icon="inline-start" />
            ) : (
              <RefreshCcw data-icon="inline-start" />
            )}
            Tentar novamente
          </Button>
        </div>

        <Separator className="my-4" />

        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>Não foi possível carregar os indicadores</AlertTitle>
          <AlertDescription>
            A API retornou uma falha temporária. Tente novamente ou acompanhe o
            status do serviço.
          </AlertDescription>
        </Alert>
      </section>

      <section className="rounded-lg border border-border bg-card p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-semibold">Cobertura de feedback</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">
              A tela cobre feedback temporário, persistente, estados de espera,
              vazio e falha recuperável.
            </p>
          </div>
          <Badge variant="secondary">
            <CircleDashed data-icon="inline-start" />
            Fase 9 pronta para revisão
          </Badge>
        </div>
      </section>
    </div>
  )
}
