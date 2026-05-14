"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ArrowUpRight,
  CheckCircle2,
  Menu,
  PanelsTopLeft,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { showroomNavigation } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

type ShowroomShellProps = {
  children: React.ReactNode
}

function getActiveRoute(pathname: string) {
  return (
    showroomNavigation.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    ) ?? showroomNavigation[0]
  )
}

function SidebarContent({
  pathname,
  showBrand = true,
  onNavigate,
}: {
  pathname: string
  showBrand?: boolean
  onNavigate?: () => void
}) {
  return (
    <div className="flex h-full flex-col">
      {showBrand ? (
        <Link
          href="/"
          onClick={onNavigate}
          className="flex min-h-16 items-center gap-3 border-b border-sidebar-border px-5"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <PanelsTopLeft className="size-4" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-sidebar-foreground">
              Design System
            </p>
            <p className="truncate text-xs text-sidebar-foreground/60">
              Showroom shadcn/ui
            </p>
          </div>
        </Link>
      ) : null}

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {showroomNavigation.map((item) => {
          const Icon = item.icon
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/70 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive &&
                  "bg-sidebar-accent text-sidebar-accent-foreground shadow-xs"
              )}
            >
              <Icon className="size-4 shrink-0" />
              <span className="truncate">{item.title}</span>
              {isActive ? (
                <CheckCircle2 className="ml-auto size-3.5 shrink-0 text-sidebar-primary" />
              ) : null}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-lg border border-sidebar-border bg-sidebar-accent/50 p-3">
          <p className="text-xs font-medium text-sidebar-foreground">
            Proximo marco
          </p>
          <p className="mt-1 text-xs leading-5 text-sidebar-foreground/65">
            Consolidar o layout navegavel e iniciar a identidade visual.
          </p>
        </div>
      </div>
    </div>
  )
}

export function ShowroomShell({ children }: ShowroomShellProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const activeRoute = getActiveRoute(pathname)

  return (
    <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="hidden min-h-screen border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:sticky lg:top-0 lg:block lg:h-screen">
        <SidebarContent pathname={pathname} />
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="flex min-h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
            <Button
              type="button"
              size="icon"
              variant="outline"
              className="lg:hidden"
              aria-label="Abrir navegacao"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-showroom-navigation"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu />
            </Button>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Link href="/" className="transition-colors hover:text-foreground">
                  Showroom
                </Link>
                <span>/</span>
                <span className="truncate text-foreground">{activeRoute.title}</span>
              </div>
              <h1 className="mt-0.5 truncate text-sm font-semibold sm:text-base">
                {activeRoute.title}
              </h1>
            </div>

            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <Link href="/patterns">
                Demo
                <ArrowUpRight data-icon="inline-end" />
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </header>

        {isMobileMenuOpen ? (
          <div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden"
            role="presentation"
          >
            <div className="h-full w-full max-w-80 border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-xl">
              <div className="flex min-h-16 items-center justify-between border-b border-sidebar-border px-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <PanelsTopLeft className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Design System</p>
                    <p className="text-xs text-sidebar-foreground/60">
                      Showroom shadcn/ui
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  aria-label="Fechar navegacao"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X />
                </Button>
              </div>
              <div id="mobile-showroom-navigation" className="h-[calc(100%-4rem)]">
                <SidebarContent
                  pathname={pathname}
                  showBrand={false}
                  onNavigate={() => setIsMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        ) : null}

        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  )
}
