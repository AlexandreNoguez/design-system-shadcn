import Link from "next/link"
import { ArrowLeft, Construction } from "lucide-react"

import { Button } from "@/components/ui/button"
import { showroomNavigation, type ShowroomRoute } from "@/lib/navigation"

type SectionPlaceholderProps = {
  href: ShowroomRoute["href"]
}

export function SectionPlaceholder({ href }: SectionPlaceholderProps) {
  const section = showroomNavigation.find((item) => item.href === href)

  if (!section) {
    return null
  }

  const SectionIcon = section.icon

  return (
      <section className="flex w-full max-w-5xl flex-col gap-8">
        <Button asChild variant="outline" className="w-fit">
          <Link href="/">
            <ArrowLeft data-icon="inline-start" />
            Voltar
          </Link>
        </Button>

        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
            <Construction className="size-4 text-primary" />
            Secao preparada para a proxima fase
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <SectionIcon className="size-7 text-primary" />
              <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
                {section.title}
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {section.description}
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {showroomNavigation
            .filter((item) => item.href !== href)
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-border bg-card p-4 text-card-foreground transition-colors hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="size-4 text-primary" />
                  <h2 className="text-sm font-medium">{item.title}</h2>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </Link>
            ))}
        </div>
      </section>
  )
}
