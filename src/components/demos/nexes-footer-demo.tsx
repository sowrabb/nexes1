import { Smartphone } from "lucide-react"
import { Footer } from "@/components/ui/footer"
import Image from "next/image"
import { getImagePath } from "@/lib/utils"

function NexesFooterDemo() {
  return (
    <div className="w-full">
      <Footer
        logo={
          <div className="flex items-center gap-2">
            <Smartphone className="h-8 w-8" />
            <Image
              src={getImagePath("/Nexes.svg")}
              alt="Nexes"
              width={105}
              height={26}
              className="h-6 w-auto"
            />
          </div>
        }
        brandName=""
        socialLinks={[]}
        mainLinks={[
          { href: "/services", label: "Services" },
          { href: "/portfolio", label: "Portfolio" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
          { href: "https://calendly.com/nexes9/meeting", label: "Book Consultation" },
        ]}
        legalLinks={[
          { href: "/legal", label: "Legal Information" },
          { href: "/legal#privacy-policy", label: "Privacy Policy" },
          { href: "/legal#terms-of-service", label: "Terms of Service" },
          { href: "/legal#cookie-policy", label: "Cookie Policy" },
        ]}
        copyright={{
          text: "© 2024 Nexes",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}

export { NexesFooterDemo } 