"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { cn, getImagePath } from "@/lib/utils";
import { Globe } from "@/components/ui/globe";
import Image from "next/image";

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
  showTrustBadges?: boolean;
  bannerImage?: string;
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  children,
  showGlobe = true,
  showTrustBadges = false,
  bannerImage,
}: HeroProps) {
      // Apple-inspired clean layout when banner image is provided
  if (bannerImage) {
    return (
      <section className="bg-gradient-to-b from-gray-50 to-white sm:min-h-screen flex flex-col justify-start pt-16 sm:pt-20 md:pt-24 pb-0 sm:pb-6 md:pb-8 overflow-x-hidden w-full max-w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 lg:space-y-6">
            
            {/* Title */}
            <div className="space-y-3">
              <h1 className="relative animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl text-transparent drop-shadow-2xl sm:text-5xl lg:text-6xl xl:text-7xl">
                {title}
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-appear opacity-0 delay-100">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-appear opacity-0 delay-300">
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

              {/* Trust Badges - In the gap area */}
              {showTrustBadges && (
                <div className="animate-appear opacity-0 delay-400 pt-4 pb-0 sm:pb-4">
                  <p className="text-sm text-muted-foreground text-center mb-1 sm:mb-4">
                    Certified by industry leaders
                  </p>
                  <div className="relative overflow-hidden w-full max-w-full">
                    <div className="flex animate-slide-infinite gap-8 will-change-transform">
                      {/* First set of badges */}
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((badge) => (
                        <div
                          key={`first-${badge}`}
                          className="transition-transform duration-300 hover:scale-105 flex-shrink-0"
                        >
                          <Image
                            src={getImagePath(`/badges/${badge}.png`)}
                            alt={`Trust badge ${badge}`}
                            width={350}
                            height={175}
                            className="h-20 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
                          />
                        </div>
                      ))}
                      {/* Duplicate set for seamless loop */}
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((badge) => (
                        <div
                          key={`second-${badge}`}
                          className="transition-transform duration-300 hover:scale-105 flex-shrink-0"
                        >
                          <Image
                            src={getImagePath(`/badges/${badge}.png`)}
                            alt={`Trust badge ${badge}`}
                            width={350}
                            height={175}
                            className="h-20 sm:h-20 md:h-24 lg:h-28 w-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Banner Image */}
            <div className="-mt-[50px] sm:-mt-[260px] md:-mt-[280px] lg:-mt-[320px]">
              <div className="relative max-w-7xl mx-auto animate-appear opacity-0 delay-500 px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden sm:h-[540px] md:h-[324px] lg:h-[360px]">
                  <Image
                    src={bannerImage}
                    alt="Nexes App Development Showcase"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-[center_top] object-cover sm:h-full sm:object-[center_5%]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Original centered layout for backward compatibility
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "py-4 sm:py-6 md:py-8 px-4",
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
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl text-transparent drop-shadow-2xl sm:text-6xl md:text-8xl">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] animate-appear text-muted-foreground opacity-0 delay-100 sm:text-xl">
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

          {/* Trust Badges */}
          {showTrustBadges && (
            <div className="relative z-10 flex animate-appear flex-col items-center gap-6 opacity-0 delay-500">
              <p className="text-sm text-muted-foreground">
                Certified by industry leaders
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((badge) => (
                  <div
                    key={badge}
                    className="transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src={getImagePath(`/badges/${badge}.png`)}
                      alt={`Trust badge ${badge}`}
                      width={280}
                      height={140}
                      className="h-28 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

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