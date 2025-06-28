"use client"

import { TwoColumnHero } from "@/components/blocks/two-column-hero"
import { ShieldCheck } from "lucide-react"

export function CyberGDemo() {
  return (
    <TwoColumnHero
      className="pt-0 sm:pt-0 md:pt-0"
      badge={{
        text: "Our Commitment to Safety",
        icon: <ShieldCheck className="h-4 w-4" />,
      }}
      title="CyberG: Your Digital Lifeline"
      description="We believe everyone deserves to navigate the digital world with confidence and security. CyberG is a thoughtfully designed, user-friendly application empowering seniors by proactively detecting and blocking scams, providing instant alerts, offering clear educational content, and enabling live location sharing with trusted contacts for peace of mind."
      actions={[
        {
          text: "Discover Our Features",
          href: "#core-features",
          variant: "default",
        },
        {
          text: "See How It Works",
          href: "#getting-started",
          variant: "outline",
        },
      ]}
      image={{
        src: "/mockup.png",
        alt: "iPhone displaying CyberG app",
        className: "w-[70%] mx-auto",
      }}
    />
  )
} 