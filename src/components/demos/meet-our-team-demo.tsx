"use client"

import { TeamSection } from "@/components/blocks/team-section"

const teamMembers = [
  {
    name: "Bharath Reddy",
    title: "Founder and CEO",
    image: "/cyberg/1.png",
  },
  {
    name: "Saurab Vokkalkar",
    title: "Co Founder and CTO",
    image: "/cyberg/2.png",
  },
]

export function MeetOurTeamDemo() {
  return <TeamSection title="Meet Our Team" members={teamMembers} />
} 