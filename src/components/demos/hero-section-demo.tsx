"use client"

import { HeroSection } from "@/components/blocks/hero-section"
import { RainbowButton } from "@/components/ui/rainbow-button"

export function HeroSectionDemo() {
  return (
    <HeroSection
      title="One App. Zero Scam Threats."
      description="An easy-to-use app that blocks scam calls, sends instant alerts, and teaches online safety."
    >
      <RainbowButton>Coming Soon</RainbowButton>
    </HeroSection>
  )
} 