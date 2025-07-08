"use client"

import { HeroSection } from "@/components/blocks/hero-section"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Button } from "@/components/ui/button"

export function HeroSectionDemo() {
  return (
    <HeroSection
      title="Top App Development Company"
      description="5 Years of Award-winning Innovation. Trusted by 50+ Startups, Scaleups, and Enterprises."
      showGlobe={false}
      showTrustBadges={true}
      bannerImage="/banner.png"
    >
      <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center">
        <Button 
          variant="outline" 
          size="lg"
          className="h-11 px-4 sm:px-8 rounded-xl text-sm sm:text-base"
          asChild
        >
          <a href="#pricing">See Pricing</a>
        </Button>
        <a href="https://calendly.com/nexes9/meeting" target="_blank" rel="noopener noreferrer">
          <RainbowButton className="px-4 sm:px-8 text-sm sm:text-base">Get a Free Quote</RainbowButton>
        </a>
      </div>
    </HeroSection>
  )
} 