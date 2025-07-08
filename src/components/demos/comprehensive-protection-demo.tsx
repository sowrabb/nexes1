"use client"

import {
  BellRing,
  MapPin,
  PlaySquare,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

const features = [
  {
    Icon: ShieldCheck,
    name: "Scam Shield",
    description: "Proactively detects and blocks suspicious calls, messages, and websites to keep you safe.",
    href: "/",
    background: <div />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: BellRing,
    name: "Instant Alert",
    description: "Receive immediate notifications for threats. Quickly connect to 911 or emergency contacts.",
    href: "/",
    background: <div />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: PlaySquare,
    name: "Stay Informed",
    description: "Access easy-to-understand educational videos on identifying and avoiding common online scams.",
    href: "/",
    background: <div />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: MapPin,
    name: "Guardian Angel",
    description: "Share your live location with trusted friends or family for peace of mind and extra safety.",
    href: "/",
    background: <div />,
    className: "col-span-3 lg:col-span-1",
  },
]

export function ComprehensiveProtectionDemo() {
  return (
    <section id="core-features" className="py-4 sm:py-6 md:py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">Core Features</Badge>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Comprehensive Protection, Simply Delivered
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            CyberG is packed with features designed for ease of use and robust security, empowering seniors in their digital lives.
          </p>
        </div>
        <BentoGrid className="grid-cols-1 auto-rows-auto gap-8 lg:grid-cols-4 lg:gap-4 mt-12">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
} 