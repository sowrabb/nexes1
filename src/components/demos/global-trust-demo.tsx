"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe } from "@/components/ui/globe"
import { Globe2, Users, Award } from "lucide-react"

export function GlobalTrustDemo() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text Content - Left Side */}
          <div className="flex flex-col items-start gap-6">
            <Badge variant="outline" className="flex items-center gap-2">
              <Globe2 className="h-4 w-4" />
              Global Recognition
            </Badge>
            
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Trusted by Worldwide Users
            </h2>
            
            <h3 className="text-xl font-medium text-muted-foreground sm:text-2xl">
              Building Digital Excellence Across Continents
            </h3>
            

            
            <div className="grid grid-cols-2 gap-8 w-full max-w-md">
              <div className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">Global Clients</div>
              </div>
              
              <div className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
            
            <div className="flex w-full flex-col sm:flex-row gap-4 max-w-md">
              <Button size="lg" className="flex-1">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                View Portfolio
              </Button>
            </div>
          </div>
          
          {/* Globe - Right Side */}
          <div className="relative flex min-h-[300px] w-full items-center justify-center sm:min-h-[350px] lg:min-h-[500px]">
            <Globe className="max-w-[250px] sm:max-w-[350px] lg:max-w-[500px]" />
          </div>
        </div>
      </div>
    </section>
  )
} 