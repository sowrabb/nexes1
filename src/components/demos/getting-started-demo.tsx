"use client"

import { ThreeColumnFeatures } from "@/components/blocks/three-column-features"

const features = [
  {
    number: "1",
    title: "Easy Setup & Activation",
    description:
      "Download CyberG. Our simple, guided setup will have you protected in minutes. No complicated configurations needed.",
  },
  {
    number: "2",
    title: "Automatic Background Protection",
    description:
      "Once installed, CyberG works tirelessly, actively monitoring for scam calls, suspicious messages, and malicious websites.",
  },
  {
    number: "3",
    title: "Stay Alert, Informed & Connected",
    description:
      "Receive instant alerts for threats. Access educational videos and use Guardian Angel to share your location with loved ones.",
  },
]

export function GettingStartedDemo() {
  return (
    <ThreeColumnFeatures
      id="getting-started"
      badge="Simple & Effective"
      title="Getting Started is as Easy as 1-2-3"
      description="We've designed CyberG to be intuitive and straightforward, providing powerful protection without the hassle. Follow these simple steps to secure your digital life."
      features={features}
    />
  )
} 