"use client"

import { Badge } from "@/components/ui/badge"

interface Feature {
  number: string
  title: string
  description: string
}

interface ThreeColumnFeaturesProps {
  badge?: string
  title: string
  description: string
  features: Feature[]
  id?: string
}

export function ThreeColumnFeatures({
  badge,
  title,
  description,
  features,
  id,
}: ThreeColumnFeaturesProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20" id={id}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          {badge && <Badge variant="outline">{badge}</Badge>}
          <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="max-w-2xl text-muted-foreground">{description}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-4 rounded-lg bg-muted/50 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {feature.number}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GettingStartedDemo() {
  return (
    <ThreeColumnFeatures
      id="getting-started"
      badge="Simple & Effective"
      title="Getting Started is as Easy as 1-2-3"
      description="We've designed Cyber Guardian to be intuitive and straightforward, providing powerful protection without the hassle. Follow these simple steps to secure your digital life."
      features={[
        {
          number: "1",
          title: "Sign Up",
          description: "Create an account with your email and password."
        },
        {
          number: "2",
          title: "Install",
          description: "Download and install the Cyber Guardian app on your device."
        },
        {
          number: "3",
          title: "Protect",
          description: "Start using Cyber Guardian to protect your digital life."
        }
      ]}
    />
  )
} 