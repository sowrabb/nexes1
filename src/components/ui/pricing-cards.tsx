"use client";

import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getPricingForUser, type PricingData } from "@/lib/utils";

function Pricing() {
  const [pricing, setPricing] = useState<PricingData>({
    currency: 'USD',
    currencySymbol: '$',
    starter: 999,
    growth: 1499,
    fullStack: 1999,
    deployment: 200,
    starterDisplay: '$999',
    growthDisplay: '$1,499',
    fullStackDisplay: '$1,999',
    deploymentDisplay: '$200',
  });

  useEffect(() => {
    // Update pricing based on user location
    const userPricing = getPricingForUser();
    setPricing(userPricing);
  }, []);

  return (
    <div id="pricing" className="w-full py-4 sm:py-6 md:py-8">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Transparent App Development Pricing
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Choose the perfect plan for your mobile app project. All prices include deployment assistance.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {/* Growth App - Now on the left */}
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Growth App
                  </span>
                </CardTitle>
                <CardDescription>
                  Perfect for businesses ready to scale with advanced features and analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-2">
                    <p className="flex flex-row items-center gap-2 text-xl">
                      <span className="text-4xl">{pricing.growthDisplay}</span>
                      <span className="text-sm text-muted-foreground">base price</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +{pricing.deploymentDisplay} App Store & Play Store deployment (optional)
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>10+ Responsive Screens</p>
                        <p className="text-muted-foreground text-sm">
                          Comprehensive app with all essential screens
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Advanced Features</p>
                        <p className="text-muted-foreground text-sm">
                          In-app payments, social sharing, premium functionality
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Analytics & Monitoring</p>
                        <p className="text-muted-foreground text-sm">
                          Performance tracking and user analytics setup
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="default" className="gap-4 bg-black text-white hover:bg-gray-800" asChild>
                    <a href="https://calendly.com/nexes9/meeting">
                      Book a Consultation <MoveRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Starter App - Now in the center (Most Popular) */}
            <Card className="w-full shadow-2xl rounded-md border-2 border-primary/20 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-white text-primary border border-primary/20 shadow-md font-medium px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="pt-8">
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Starter App
                  </span>
                </CardTitle>
                <CardDescription>
                  Perfect for simple apps and MVPs. Get your idea to market quickly with essential features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-2">
                    <p className="flex flex-row items-center gap-2 text-xl">
                      <span className="text-4xl">{pricing.starterDisplay}</span>
                      <span className="text-sm text-muted-foreground">base price</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +{pricing.deploymentDisplay} App Store & Play Store deployment (optional)
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Up to 10 Custom Screens</p>
                        <p className="text-muted-foreground text-sm">
                          Onboarding, home, profile, and core app screens
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>UI/UX Design & Wireframes</p>
                        <p className="text-muted-foreground text-sm">
                          Basic design with 2 rounds of revisions
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Core Functionality</p>
                        <p className="text-muted-foreground text-sm">
                          Login/auth, push notifications, basic features
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="gap-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 animate-pulse" 
                    asChild
                  >
                    <a href="https://calendly.com/nexes9/meeting">
                      Get a Free Quote <MoveRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Full-Stack - Stays on the right */}
            <Card className="w-full rounded-md">
              <CardHeader>
                <CardTitle>
                  <span className="flex flex-row gap-4 items-center font-normal">
                    Full-Stack
                  </span>
                </CardTitle>
                <CardDescription>
                  Complete solution with mobile app + marketing website. Perfect for businesses going all-in.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-8 justify-start">
                  <div className="flex flex-col gap-2">
                    <p className="flex flex-row items-center gap-2 text-xl">
                      <span className="text-4xl">{pricing.fullStackDisplay}</span>
                      <span className="text-sm text-muted-foreground">base price</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +{pricing.deploymentDisplay} App Store & Play Store deployment (optional)
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 justify-start">
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Everything in Growth App</p>
                        <p className="text-muted-foreground text-sm">
                          All features from the Growth plan included
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>Marketing Website</p>
                        <p className="text-muted-foreground text-sm">
                          Up to 6 pages with CMS integration
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col">
                        <p>SEO & Blog Integration</p>
                        <p className="text-muted-foreground text-sm">
                          SEO-optimized deployment with blog functionality
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button variant="default" className="gap-4 bg-black text-white hover:bg-gray-800" asChild>
                    <a href="https://calendly.com/nexes9/meeting">
                      Book a Consultation <PhoneCall className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing }; 