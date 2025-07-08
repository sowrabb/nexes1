import { Smartphone } from "lucide-react"
import { Footer } from "@/components/ui/footer"
import Image from "next/image"
import { getImagePath, getLinkPath } from "@/lib/utils"

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
          { href: getLinkPath("/services"), label: "Services" },
          { href: getLinkPath("/portfolio"), label: "Portfolio" },
          { href: getLinkPath("/about"), label: "About" },
          { href: getLinkPath("/blog"), label: "Blog" },
          { href: getLinkPath("/contact"), label: "Contact" },
          { href: "https://calendly.com/nexes9/meeting", label: "Book Consultation" },
        ]}
        legalLinks={[
          { href: getLinkPath("/legal"), label: "Legal Information" },
          { href: getLinkPath("/legal#privacy-policy"), label: "Privacy Policy" },
          { href: getLinkPath("/legal#terms-of-service"), label: "Terms of Service" },
          { href: getLinkPath("/legal#cookie-policy"), label: "Cookie Policy" },
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