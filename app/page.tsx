import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { designTokenGroups, foundationStatus } from "@/lib/design-tokens";
import { showroomNavigation } from "@/lib/navigation";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-8 border-b border-border pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
              <Sparkles className="size-4 text-primary" />
              Fundacao tecnica iniciada
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
                Shadcn Design System Showroom
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Prototipo navegavel para aprovar a identidade visual, demonstrar
                componentes comuns e estabelecer padroes modernos de UI/UX para
                o novo front-end.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button asChild>
              <Link href="/foundations">
                Comecar showroom
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/brand">Ver identidade</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {foundationStatus.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-card p-4 text-card-foreground"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-sm font-medium">{item.label}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.status}
                  </p>
                </div>
                <CheckCircle2 className="size-4 text-primary" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Mapa do showroom</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                As proximas fases transformam estas secoes em rotas navegaveis.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {showroomNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="size-4 text-primary" />
                    <h3 className="text-sm font-medium">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Fundamentos visuais</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tokens e decisoes que vao sustentar a identidade da aplicacao.
              </p>
            </div>
            <div className="space-y-3">
              {designTokenGroups.map((group) => (
                <div
                  key={group.name}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <h3 className="text-sm font-medium">{group.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {group.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
    </div>
  );
}
