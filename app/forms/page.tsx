"use client"

import * as React from "react"
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Loader2,
  Mail,
  RotateCcw,
  Save,
  Send,
  ShieldCheck,
  Sparkles,
  UserPlus,
} from "lucide-react"
import {
  Controller,
  type FieldError,
  type FieldErrors,
  type FieldValues,
  type Resolver,
  useForm,
} from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod/v4"

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
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const quickFormSchema = z.object({
  name: z.string().min(3, "Informe pelo menos 3 caracteres."),
  email: z.string().email("Informe um e-mail valido."),
  area: z.string().min(1, "Selecione uma area responsavel."),
  accepted: z
    .boolean()
    .refine(Boolean, "Confirme que as informacoes podem ser usadas."),
})

const longFormSchema = z.object({
  title: z.string().min(5, "Use um titulo mais descritivo."),
  ownerEmail: z.string().email("Informe um e-mail valido."),
  priority: z.enum(["low", "medium", "high"], {
    error: "Selecione a prioridade.",
  }),
  channel: z.enum(["email", "slack", "portal"], {
    error: "Selecione um canal de notificacao.",
  }),
  description: z
    .string()
    .min(20, "Descreva o contexto com pelo menos 20 caracteres."),
  notifyStakeholders: z.boolean(),
  enableAudit: z.boolean(),
})

const modalFormSchema = z.object({
  inviteEmail: z.string().email("Informe o e-mail do convidado."),
  role: z.enum(["viewer", "editor", "admin"], {
    error: "Selecione uma permissao.",
  }),
})

type QuickFormValues = z.infer<typeof quickFormSchema>
type LongFormValues = z.infer<typeof longFormSchema>
type ModalFormValues = z.infer<typeof modalFormSchema>
type SubmitState = "idle" | "success" | "error"

function createZodResolver<TValues extends FieldValues>(
  schema: z.ZodType<TValues>
): Resolver<TValues> {
  return async (values) => {
    const result = await schema.safeParseAsync(values)

    if (result.success) {
      return {
        values: result.data,
        errors: {},
      }
    }

    const errors: Record<string, FieldError> = {}

    for (const issue of result.error.issues) {
      const [fieldName] = issue.path

      if (typeof fieldName === "string") {
        errors[fieldName] = {
          type: issue.code,
          message: issue.message,
        }
      }
    }

    return {
      values: {},
      errors: errors as FieldErrors<TValues>,
    }
  }
}

const quickDefaults: QuickFormValues = {
  name: "",
  email: "",
  area: "",
  accepted: true,
}

const longDefaults: LongFormValues = {
  title: "Revisar jornada de onboarding",
  ownerEmail: "produto@aster.local",
  priority: "medium",
  channel: "portal",
  description:
    "Mapear pontos de friccao no cadastro e validar a proposta de componentes para o fluxo oficial.",
  notifyStakeholders: true,
  enableAudit: true,
}

const modalDefaults: ModalFormValues = {
  inviteEmail: "",
  role: "viewer",
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null
  }

  return (
    <p className="text-sm font-medium text-destructive" role="alert">
      {message}
    </p>
  )
}

function FieldHelp({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-6 text-muted-foreground">{children}</p>
}

function FieldShell({
  children,
  description,
  error,
  label,
}: {
  children: React.ReactNode
  description?: string
  error?: string
  label: string
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {description ? <FieldHelp>{description}</FieldHelp> : null}
      <FieldError message={error} />
    </div>
  )
}

export default function FormsPage() {
  const [quickState, setQuickState] = React.useState<SubmitState>("idle")
  const [longState, setLongState] = React.useState<SubmitState>("idle")
  const [modalState, setModalState] = React.useState<SubmitState>("idle")

  const quickForm = useForm<QuickFormValues>({
    resolver: createZodResolver<QuickFormValues>(quickFormSchema),
    defaultValues: quickDefaults,
    mode: "onBlur",
  })

  const longForm = useForm<LongFormValues>({
    resolver: createZodResolver<LongFormValues>(longFormSchema),
    defaultValues: longDefaults,
    mode: "onChange",
  })

  const modalForm = useForm<ModalFormValues>({
    resolver: createZodResolver<ModalFormValues>(modalFormSchema),
    defaultValues: modalDefaults,
    mode: "onBlur",
  })

  const submitQuickForm = quickForm.handleSubmit(async () => {
    setQuickState("idle")
    await new Promise((resolve) => setTimeout(resolve, 700))
    setQuickState("success")
    toast.success("Contato registrado", {
      description: "O formulario simples foi validado com sucesso.",
    })
  })

  const submitLongForm = longForm.handleSubmit(async () => {
    setLongState("idle")
    await new Promise((resolve) => setTimeout(resolve, 900))
    setLongState("success")
    toast.success("Briefing salvo", {
      description: "As configuracoes do formulario longo foram registradas.",
    })
  })

  const submitModalForm = modalForm.handleSubmit(async () => {
    setModalState("idle")
    await new Promise((resolve) => setTimeout(resolve, 600))
    setModalState("success")
    toast.success("Convite enviado", {
      description: "O formulario em modal foi enviado com validacao.",
    })
    modalForm.reset(modalDefaults)
  })

  const simulateLongFormError = () => {
    setLongState("error")
    longForm.setError("root", {
      message: "Nao foi possivel salvar agora. Revise os dados e tente novamente.",
    })
  }

  const resetAllForms = () => {
    quickForm.reset(quickDefaults)
    longForm.reset(longDefaults)
    modalForm.reset(modalDefaults)
    setQuickState("idle")
    setLongState("idle")
    setModalState("idle")
    toast.info("Alteracoes descartadas")
  }

  return (
    <div className="flex flex-col gap-8">
      <section className="border-b border-border pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
          <Sparkles className="size-4 text-primary" />
          Formularios e validacao
        </div>
        <div className="mt-5 max-w-3xl space-y-3">
          <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
            Formulários consistentes para fluxos críticos
          </h1>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            Exemplos com React Hook Form, Zod, mensagens padronizadas,
            feedback de envio, estados de erro e confirmação antes de descartar
            alterações.
          </p>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-lg border border-border bg-card p-4">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold">Formulario simples</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Campos obrigatorios, select com validacao e aceite por checkbox.
              </p>
            </div>
            <Badge variant={quickState === "success" ? "default" : "secondary"}>
              {quickState === "success" ? "Validado" : "RHF + Zod"}
            </Badge>
          </div>

          <form className="space-y-4" onSubmit={submitQuickForm}>
            <FieldShell
              label="Nome"
              description="Use o nome que sera exibido nos registros internos."
              error={quickForm.formState.errors.name?.message}
            >
              <Input
                placeholder="Ex: Ana Lima"
                aria-invalid={!!quickForm.formState.errors.name}
                {...quickForm.register("name")}
              />
            </FieldShell>

            <FieldShell
              label="E-mail"
              description="A validacao exige um formato de e-mail valido."
              error={quickForm.formState.errors.email?.message}
            >
              <div className="relative">
                <Mail className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  className="pl-8"
                  placeholder="ana@empresa.com"
                  aria-invalid={!!quickForm.formState.errors.email}
                  {...quickForm.register("email")}
                />
              </div>
            </FieldShell>

            <Controller
              control={quickForm.control}
              name="area"
              render={({ field, fieldState }) => (
                <FieldShell
                  label="Area responsavel"
                  description="Select controlado pelo React Hook Form."
                  error={fieldState.error?.message}
                >
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      className="w-full"
                      aria-invalid={!!fieldState.error}
                    >
                      <SelectValue placeholder="Selecione uma area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="produto">Produto</SelectItem>
                      <SelectItem value="operacoes">Operacoes</SelectItem>
                      <SelectItem value="financeiro">Financeiro</SelectItem>
                    </SelectContent>
                  </Select>
                </FieldShell>
              )}
            />

            <Controller
              control={quickForm.control}
              name="accepted"
              render={({ field, fieldState }) => (
                <div className="space-y-2 rounded-lg border border-border p-3">
                  <label className="flex items-start gap-3 text-sm">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      aria-invalid={!!fieldState.error}
                    />
                    <span>
                      Confirmo que as informacoes podem ser usadas no fluxo de
                      demonstracao.
                    </span>
                  </label>
                  <FieldError message={fieldState.error?.message} />
                </div>
              )}
            />

            {quickState === "success" ? (
              <Alert>
                <CheckCircle2 />
                <AlertTitle>Formulario validado</AlertTitle>
                <AlertDescription>
                  O exemplo demonstra estado de sucesso apos o envio.
                </AlertDescription>
              </Alert>
            ) : null}

            <Button
              type="submit"
              disabled={quickForm.formState.isSubmitting}
              className="w-full"
            >
              {quickForm.formState.isSubmitting ? (
                <Loader2 className="animate-spin" data-icon="inline-start" />
              ) : (
                <Send data-icon="inline-start" />
              )}
              Enviar formulario
            </Button>
          </form>
        </section>

        <section className="rounded-lg border border-border bg-card p-4">
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-base font-semibold">Formulario longo</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Layout de pagina para cadastros densos, com radio, switch,
                textarea, sucesso, erro e confirmacao de descarte.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={simulateLongFormError}
              >
                <AlertTriangle data-icon="inline-start" />
                Simular erro
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button type="button" variant="outline" size="sm">
                    <RotateCcw data-icon="inline-start" />
                    Descartar
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogMedia>
                      <AlertTriangle className="text-destructive" />
                    </AlertDialogMedia>
                    <AlertDialogTitle>Descartar alteracoes?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Esta acao restaura os valores iniciais dos formularios e
                      remove estados de sucesso ou erro.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction variant="destructive" onClick={resetAllForms}>
                      Descartar
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          <form className="space-y-5" onSubmit={submitLongForm}>
            <div className="grid gap-4 md:grid-cols-2">
              <FieldShell
                label="Titulo"
                description="Campo obrigatorio com minimo de 5 caracteres."
                error={longForm.formState.errors.title?.message}
              >
                <Input
                  aria-invalid={!!longForm.formState.errors.title}
                  {...longForm.register("title")}
                />
              </FieldShell>

              <FieldShell
                label="Responsavel"
                description="E-mail do responsavel pelo acompanhamento."
                error={longForm.formState.errors.ownerEmail?.message}
              >
                <Input
                  aria-invalid={!!longForm.formState.errors.ownerEmail}
                  {...longForm.register("ownerEmail")}
                />
              </FieldShell>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Controller
                control={longForm.control}
                name="priority"
                render={({ field, fieldState }) => (
                  <FieldShell
                    label="Prioridade"
                    description="Radio group controlado e validado pelo schema."
                    error={fieldState.error?.message}
                  >
                    <RadioGroup
                      className="grid gap-2 sm:grid-cols-3"
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      {[
                        ["low", "Baixa"],
                        ["medium", "Media"],
                        ["high", "Alta"],
                      ].map(([value, label]) => (
                        <label
                          key={value}
                          className="flex items-center gap-2 rounded-lg border border-border p-3 text-sm"
                        >
                          <RadioGroupItem value={value} />
                          {label}
                        </label>
                      ))}
                    </RadioGroup>
                  </FieldShell>
                )}
              />

              <Controller
                control={longForm.control}
                name="channel"
                render={({ field, fieldState }) => (
                  <FieldShell
                    label="Canal de notificacao"
                    description="Exemplo de select obrigatorio em formulario longo."
                    error={fieldState.error?.message}
                  >
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        className="w-full"
                        aria-invalid={!!fieldState.error}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">E-mail</SelectItem>
                        <SelectItem value="slack">Slack</SelectItem>
                        <SelectItem value="portal">Portal</SelectItem>
                      </SelectContent>
                    </Select>
                  </FieldShell>
                )}
              />
            </div>

            <FieldShell
              label="Descricao"
              description="Textarea com validacao de tamanho minimo."
              error={longForm.formState.errors.description?.message}
            >
              <Textarea
                className="min-h-28"
                aria-invalid={!!longForm.formState.errors.description}
                {...longForm.register("description")}
              />
            </FieldShell>

            <div className="grid gap-3 sm:grid-cols-2">
              <Controller
                control={longForm.control}
                name="notifyStakeholders"
                render={({ field }) => (
                  <div className="flex items-center justify-between rounded-lg border border-border p-3">
                    <div>
                      <Label>Notificar envolvidos</Label>
                      <FieldHelp>Envia aviso apos o salvamento.</FieldHelp>
                    </div>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </div>
                )}
              />

              <Controller
                control={longForm.control}
                name="enableAudit"
                render={({ field }) => (
                  <div className="flex items-center justify-between rounded-lg border border-border p-3">
                    <div>
                      <Label>Auditoria</Label>
                      <FieldHelp>Registra alteracoes no historico.</FieldHelp>
                    </div>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </div>
                )}
              />
            </div>

            {longForm.formState.errors.root?.message ? (
              <Alert variant="destructive">
                <AlertTriangle />
                <AlertTitle>Erro ao salvar</AlertTitle>
                <AlertDescription>
                  {longForm.formState.errors.root.message}
                </AlertDescription>
              </Alert>
            ) : null}

            {longState === "success" ? (
              <Alert>
                <ShieldCheck />
                <AlertTitle>Briefing salvo</AlertTitle>
                <AlertDescription>
                  Estado de sucesso para fluxos longos e importantes.
                </AlertDescription>
              </Alert>
            ) : null}

            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" onClick={() => longForm.reset(longDefaults)}>
                Restaurar
              </Button>
              <Button type="submit" disabled={longForm.formState.isSubmitting}>
                {longForm.formState.isSubmitting ? (
                  <Loader2 className="animate-spin" data-icon="inline-start" />
                ) : (
                  <Save data-icon="inline-start" />
                )}
                Salvar briefing
              </Button>
            </div>
          </form>
        </section>
      </div>

      <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="mb-5">
            <h2 className="text-base font-semibold">Formulario em modal</h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Padrao para convites, criacoes rapidas e edicoes curtas.
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <UserPlus data-icon="inline-start" />
                Convidar usuario
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Novo convite</DialogTitle>
                <DialogDescription>
                  Campos validados por Zod antes do envio do convite.
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-4" onSubmit={submitModalForm}>
                <FieldShell
                  label="E-mail do convidado"
                  description="O convite sera enviado para este endereco."
                  error={modalForm.formState.errors.inviteEmail?.message}
                >
                  <Input
                    placeholder="usuario@empresa.com"
                    aria-invalid={!!modalForm.formState.errors.inviteEmail}
                    {...modalForm.register("inviteEmail")}
                  />
                </FieldShell>

                <Controller
                  control={modalForm.control}
                  name="role"
                  render={({ field, fieldState }) => (
                    <FieldShell
                      label="Permissao"
                      description="Define o nivel de acesso inicial."
                      error={fieldState.error?.message}
                    >
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger
                          className="w-full"
                          aria-invalid={!!fieldState.error}
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="viewer">Visualizador</SelectItem>
                          <SelectItem value="editor">Editor</SelectItem>
                          <SelectItem value="admin">Administrador</SelectItem>
                        </SelectContent>
                      </Select>
                    </FieldShell>
                  )}
                />

                {modalState === "success" ? (
                  <Alert>
                    <CheckCircle2 />
                    <AlertTitle>Convite enviado</AlertTitle>
                    <AlertDescription>
                      O estado de sucesso tambem funciona dentro do modal.
                    </AlertDescription>
                  </Alert>
                ) : null}

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                  </DialogClose>
                  <Button type="submit" disabled={modalForm.formState.isSubmitting}>
                    {modalForm.formState.isSubmitting ? (
                      <Loader2 className="animate-spin" data-icon="inline-start" />
                    ) : (
                      <Send data-icon="inline-start" />
                    )}
                    Enviar convite
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="rounded-lg border border-border bg-card p-4">
          <div className="mb-5">
            <h2 className="text-base font-semibold">Padroes cobertos</h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Checklist visual dos comportamentos esperados para formularios do
              produto.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Schema Zod por fluxo",
              "Mensagens de erro padronizadas",
              "Campos obrigatorios e opcionais",
              "Select, checkbox, radio e switch controlados",
              "Estados de envio, sucesso e erro",
              "Confirmacao antes de descartar alteracoes",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-border p-3">
                <ClipboardCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <Separator className="my-5" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium">Status da fase</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Formularios prontos para revisao e evolucao.
              </p>
            </div>
            <Badge variant="secondary">
              <FileText data-icon="inline-start" />
              Fase 6 pronta
            </Badge>
          </div>
        </div>
      </section>
    </div>
  )
}
