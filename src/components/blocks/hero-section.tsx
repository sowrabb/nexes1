"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Globe } from "@/components/ui/globe";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
    icon?: React.ReactNode;
  };
  title: string;
  description: string;
  actions?: HeroAction[];
  children?: React.ReactNode;
  showGlobe?: boolean;
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  children,
  showGlobe = true,
}: HeroProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-12 sm:py-16 md:py-20 px-4",
        "fade-bottom overflow-hidden"
      )}
    >
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-8 sm:gap-12">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              {badge.icon}
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            {actions &&
              actions.map((action, index) => (
                <Button key={index} variant={action.variant} size="lg" asChild>
                  <a href={action.href} className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              ))}
            {children}
          </div>

          {/* Globe */}
          {showGlobe && (
            <div className="relative -mt-10 flex h-[350px] w-full items-center justify-center md:-mt-20 md:h-[450px]">
              <Globe />
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 