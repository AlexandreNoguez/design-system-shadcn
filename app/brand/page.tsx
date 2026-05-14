import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  CheckCircle2,
  CircleDashed,
  Gauge,
  Palette,
  ShieldCheck,
  Sparkles,
  Type,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  brandColorPalette,
  brandIdentity,
  chartPalette,
  iconGuidelines,
  radiusScale,
  shadowScale,
  typographyScale,
} from "@/lib/design-tokens"
import { cn } from "@/lib/utils"

export default function BrandPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="grid gap-6 border-b border-border pb-10 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
            <Sparkles className="size-4 text-primary" />
            Identidade temporaria
          </div>

          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
              {brandIdentity.name}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {brandIdentity.tagline}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-medium">Publico-alvo</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {brandIdentity.audience}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-sm font-medium">Tom visual</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {brandIdentity.tone}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button>
              Acao primaria
              <ArrowUpRight data-icon="inline-end" />
            </Button>
            <Button variant="secondary">Acao secundaria</Button>
            <Button variant="outline">Acao neutra</Button>
          </div>
        </div>

        <div
          className="rounded-lg border border-border bg-card p-5"
          style={{ boxShadow: "var(--shadow-raised)" }}
        >
          <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <p className="text-sm font-medium">Preview de produto</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Superficie, contraste e acentos aplicados.
              </p>
            </div>
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Gauge className="size-5" />
            </div>
          </div>

          <div className="grid gap-3 py-5 sm:grid-cols-3">
            {[
              { label: "Receita", value: "R$ 842k", icon: CheckCircle2 },
              { label: "Risco", value: "Baixo", icon: ShieldCheck },
              { label: "Fila", value: "24", icon: CircleDashed },
            ].map((metric) => {
              const Icon = metric.icon

              return (
                <div key={metric.label} className="rounded-lg bg-muted p-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs text-muted-foreground">
                      {metric.label}
                    </p>
                    <Icon className="size-4 text-primary" />
                  </div>
                  <p className="mt-3 text-xl font-semibold">{metric.value}</p>
                </div>
              )
            })}
          </div>

          <div className="space-y-2">
            {chartPalette.map((item, index) => (
              <div key={item.token} className="flex items-center gap-3">
                <div className="w-16 text-xs text-muted-foreground">
                  {item.name}
                </div>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${92 - index * 12}%`,
                      backgroundColor: `var(${item.token})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Palette className="size-5 text-primary" />
          <div>
            <h2 className="text-xl font-semibold">Paleta semantica</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Tokens aplicados em light e dark mode por meio de CSS variables.
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {brandColorPalette.map((color) => (
            <div
              key={color.name}
              className="rounded-lg border border-border bg-card p-4"
            >
              <div
                className="h-24 rounded-lg border border-border"
                style={{ backgroundColor: `var(${color.token})` }}
              />
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-medium">{color.name}</h3>
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                    {color.token}
                  </code>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {color.usage}
                </p>
                <div
                  className="rounded-md px-3 py-2 text-xs font-medium"
                  style={{
                    backgroundColor: `var(${color.token})`,
                    color: `var(${color.pair})`,
                  }}
                >
                  Contraste com {color.pair}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Type className="size-5 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Tipografia</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Escala compacta para telas densas, com hierarquia clara.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {typographyScale.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-border bg-card p-4"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.usage}</p>
                </div>
                <p className={cn("tracking-normal text-balance", item.className)}>
                  {item.sample}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Blocks className="size-5 text-primary" />
              <div>
                <h2 className="text-xl font-semibold">Radius e elevacao</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Formas discretas para manter a interface precisa.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {radiusScale.map((item) => (
                <div
                  key={item.name}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div
                    className="h-20 border border-primary/25 bg-secondary"
                    style={{ borderRadius: item.token }}
                  />
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {shadowScale.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-border bg-card p-4"
                style={{ boxShadow: `var(${item.token})` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.usage}
                    </p>
                  </div>
                  <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                    {item.token}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 lg:grid-cols-[0.85fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <BadgeCheck className="size-5 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Iconografia</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Conjunto consistente para acoes, status e navegacao.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-4">
            {[
              Gauge,
              ShieldCheck,
              CheckCircle2,
              Palette,
              Type,
              Blocks,
              Sparkles,
              CircleDashed,
            ].map((Icon, index) => (
              <div
                key={index}
                className="flex aspect-square items-center justify-center rounded-lg border border-border bg-card"
              >
                <Icon className="size-5 text-primary" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {iconGuidelines.map((guideline) => (
            <div
              key={guideline}
              className="rounded-lg border border-border bg-card p-4"
            >
              <div className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">
                  {guideline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
