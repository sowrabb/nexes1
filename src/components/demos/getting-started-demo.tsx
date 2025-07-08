"use client"

import { ThreeColumnFeatures } from "@/components/blocks/three-column-features"

const features = [
  {
    number: "1",
    title: "Book a Consultation",
    description:
      "Schedule a free consultation with our expert team to discuss your app idea, requirements, and vision. We'll analyze your needs and provide personalized recommendations.",
  },
  {
    number: "2", 
    title: "Onboarding",
    description:
      "You will provide your detailed needs, target audience, and feature requirements. Our team will conduct thorough research and create design follow-ups to ensure we capture your vision perfectly.",
  },
  {
    number: "3",
    title: "Publish the App to the App Store",
    description:
      "Complete your dream app! We'll handle the entire development process, testing, and publish your app to both iOS and Android app stores. Your vision becomes reality.",
  },
]

export function GettingStartedDemo() {
  return (
    <ThreeColumnFeatures
      id="getting-started"
      badge="Simple & Effective"
      title="Getting Started is easy as 1-2-3"
      description="We've designed our app development process to be intuitive and straightforward, delivering powerful mobile applications without the hassle. Follow these simple steps to bring your app idea to life."
      features={features}
    />
  )
} 