"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface TeamMember {
  name: string
  title: string
  image: string
}

interface TeamSectionProps {
  title: string
  members: TeamMember[]
  gridClassName?: string
}

export function TeamSection({
  title,
  members,
  gridClassName,
}: TeamSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-semibold md:text-4xl">
          {title}
        </h2>
        <div
          className={cn(
            "mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2",
            gridClassName,
          )}
        >
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="relative h-48 w-48 rounded-full border p-1">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full rounded-full object-cover"
                  fill
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 