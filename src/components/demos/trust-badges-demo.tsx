"use client"

import Image from "next/image"
import { getImagePath } from "@/lib/utils"

export function TrustBadgesDemo() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          <p className="text-sm font-medium text-muted-foreground text-center">
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
      </div>
    </section>
  )
} 