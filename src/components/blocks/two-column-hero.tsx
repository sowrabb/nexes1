"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface HeroAction {
  text: string
  href: string
  variant?: "default" | "outline"
}

interface TwoColumnHeroProps {
  badge?: {
    text: string
    icon?: React.ReactNode
  }
  title: string
  description: string
  actions?: HeroAction[]
  image: {
    src: string
    alt: string
    className?: string
  }
  className?: string
}

export function TwoColumnHero({
  badge,
  title,
  description,
  actions,
  image,
  className,
}: TwoColumnHeroProps) {
  return (
    <section className={cn("py-12 sm:py-16 md:py-20", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            {badge && (
              <Badge variant="outline" className="flex items-center gap-2">
                {badge.icon}
                {badge.text}
              </Badge>
            )}
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground">{description}</p>
            <div className="flex w-full flex-row gap-4">
              {actions &&
                actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant}
                    size="lg"
                    asChild
                    className="flex-1"
                  >
                    <a href={action.href}>{action.text}</a>
                  </Button>
                ))}
            </div>
          </div>
          <div>
            <img
              src={image.src}
              alt={image.alt}
              className={cn("rounded-xl", image.className)}
            />
          </div>
        </div>
      </div>
    </section>
  )
} 