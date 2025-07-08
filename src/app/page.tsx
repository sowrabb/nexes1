import { HeroSectionDemo } from "@/components/demos/hero-section-demo";
import { AppShowcase } from "@/components/blocks/app-showcase";
// import { GlobalTrustDemo } from "@/components/demos/global-trust-demo";
import { PricingDemo } from "@/components/demos/pricing-demo";
// import { SeniorsFeatureDemo } from "@/components/demos/seniors-feature-demo";
// import { CyberGDemo } from "@/components/demos/cyber-guardian-demo";
// import { ComprehensiveProtectionDemo } from "@/components/demos/comprehensive-protection-demo";
import { GettingStartedDemo } from "@/components/demos/getting-started-demo";
// import { MeetOurTeamDemo } from "@/components/demos/meet-our-team-demo";
import { TestimonialsDemo } from "@/components/demos/testimonials-demo";
// import { CtaSection } from "@/components/blocks/cta-section";
import { NexesFooterDemo } from "@/components/demos/nexes-footer-demo";
import { Header1 } from "@/components/ui/header";

export default function Home() {
  return (
    <div>
      <Header1 />
      <HeroSectionDemo />
      <AppShowcase />
      <PricingDemo />
      <GettingStartedDemo />
      {/* <GlobalTrustDemo /> */}
      {/* <SeniorsFeatureDemo /> */}
      {/* <CyberGDemo /> */}
      {/* <ComprehensiveProtectionDemo /> */}
      {/* <MeetOurTeamDemo /> */}
      <TestimonialsDemo />
      {/* <CtaSection /> */}
      <NexesFooterDemo />
    </div>
  );
}
