"use client"

import { TeamSection } from "@/components/blocks/team-section"
import { getImagePath } from "@/lib/utils"

const teamMembers = [
  {
    name: "Bharath Reddy",
    title: "Founder and CEO",
    image: getImagePath("/1.png"),
  },
  {
    name: "Saurab Vokkalkar",
    title: "Co Founder and CTO",
    image: getImagePath("/2.png"),
  },
]

export function MeetOurTeamDemo() {
  return <TeamSection title="Meet Our Team" members={teamMembers} />
} 