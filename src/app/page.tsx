import { HeroSectionDemo } from "@/components/demos/hero-section-demo";
import { SeniorsFeatureDemo } from "@/components/demos/seniors-feature-demo";
import { CyberGDemo } from "@/components/demos/cyber-guardian-demo";
import { ComprehensiveProtectionDemo } from "@/components/demos/comprehensive-protection-demo";
import { GettingStartedDemo } from "@/components/demos/getting-started-demo";
import { MeetOurTeamDemo } from "@/components/demos/meet-our-team-demo";
import { CtaSection } from "@/components/blocks/cta-section";
import { FooterDemo } from "@/components/demos/footer-demo";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSectionDemo />
      <SeniorsFeatureDemo />
      <CyberGDemo />
      <ComprehensiveProtectionDemo />
      <GettingStartedDemo />
      <MeetOurTeamDemo />
      <CtaSection />
      <FooterDemo />
    </div>
  );
}
