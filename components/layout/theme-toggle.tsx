"use client"

import { MonitorCog, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const themeOptions = [
  { value: "light", label: "Tema claro", icon: Sun },
  { value: "dark", label: "Tema escuro", icon: Moon },
  { value: "system", label: "Tema do sistema", icon: MonitorCog },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const activeTheme = theme ?? "system"

  return (
    <div className="inline-flex items-center rounded-lg border border-border bg-card p-1">
      {themeOptions.map((option) => {
        const Icon = option.icon
        const isActive = activeTheme === option.value

        return (
          <Button
            key={option.value}
            type="button"
            size="icon-sm"
            variant="ghost"
            className={cn(
              "text-muted-foreground",
              isActive && "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
            )}
            aria-label={option.label}
            aria-pressed={isActive}
            title={option.label}
            onClick={() => setTheme(option.value)}
          >
            <Icon />
          </Button>
        )
      })}
    </div>
  )
}

