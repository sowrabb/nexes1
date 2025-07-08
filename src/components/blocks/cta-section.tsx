"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Rocket } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8 sm:py-6 md:py-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="mb-4 border-gray-800 bg-gray-900 text-gray-300"
          >
            <Rocket className="mr-2 h-4 w-4" />
            Launching Soon!
          </Badge>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Embrace Digital Safety with Confidence?
          </h2>

          <p className="mt-4 text-gray-400">
            CyberG is poised to help seniors and their families navigate
            the online world securely. Be the first to know when we launch and
            get early access tips!
          </p>

          <form className="mt-8 flex w-full flex-col items-center gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="w-full border-gray-800 bg-gray-900 text-white placeholder:text-gray-500"
            />
            <Button
              type="submit"
              className="w-full bg-yellow-400 text-slate-900 hover:bg-yellow-500 sm:w-auto"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Notify Me
            </Button>
          </form>

          <p className="mt-4 text-xs text-gray-500">
            We respect your privacy. No spam, ever. Get ready for a safer
            digital experience!
          </p>
        </div>
      </div>
    </section>
  )
} 