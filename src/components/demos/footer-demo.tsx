"use client"

import Footer from "@/components/layout/animated-footer";

export function FooterDemo() {
  return (
    <Footer
      leftLinks={[
        { href: "#", label: "Terms & policies" },
        { href: "#", label: "Privacy policy" },
      ]}
      rightLinks={[
        { href: "#", label: "Careers" },
        { href: "#", label: "About" },
        { href: "#", label: "Help Center" },
        { href: "#", label: "Twitter" },
        { href: "#", label: "Instagram" },
        { href: "#", label: "GitHub" },
      ]}
      copyrightText="CyberG 2024. All Rights Reserved"
    />
  )
} 