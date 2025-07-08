import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Legal - Privacy Policy, Terms of Service & Cookie Policy | Nexes",
  description: "Legal information including Privacy Policy, Terms of Service, and Cookie Policy for Nexes app development services.",
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-12">Legal Information</h1>
          
          {/* Privacy Policy Section */}
          <section id="privacy-policy" className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 border-b pb-4">Privacy Policy</h2>
            <p className="text-sm text-muted-foreground mb-6">Last updated: January 8, 2025</p>
            
            <h3 className="text-xl font-semibold mb-4">1. Information We Collect</h3>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Name, email address, and contact information</li>
              <li>Project requirements and business information</li>
              <li>Communication records and feedback</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">2. How We Use Your Information</h3>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide, maintain, and improve our app development services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about services, offers, and events</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">3. Information Sharing</h3>
            <p className="mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy or as required by law.
            </p>

            <h3 className="text-xl font-semibold mb-4">4. Data Security</h3>
            <p className="mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="text-xl font-semibold mb-4">5. Your Rights</h3>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request data portability</li>
            </ul>
          </section>

          {/* Terms of Service Section */}
          <section id="terms-of-service" className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 border-b pb-4">Terms of Service</h2>
            <p className="text-sm text-muted-foreground mb-6">Last updated: January 8, 2025</p>

            <h3 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h3>
            <p className="mb-6">
              By accessing and using Nexes services, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h3 className="text-xl font-semibold mb-4">2. Services Provided</h3>
            <p className="mb-4">Nexes provides:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Mobile app development (iOS and Android)</li>
              <li>Web application development</li>
              <li>UI/UX design services</li>
              <li>Technical consultation and support</li>
              <li>App store deployment and maintenance</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">3. Client Responsibilities</h3>
            <p className="mb-4">As a client, you agree to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide accurate and complete project requirements</li>
              <li>Respond promptly to requests for feedback and approvals</li>
              <li>Make timely payments according to agreed terms</li>
              <li>Respect intellectual property rights</li>
              <li>Provide necessary assets and content for the project</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">4. Payment Terms</h3>
            <p className="mb-6">
              Payment terms will be specified in individual project agreements. Generally, 
              projects require an upfront payment with remaining balance due upon completion 
              and delivery of the final product.
            </p>

            <h3 className="text-xl font-semibold mb-4">5. Intellectual Property</h3>
            <p className="mb-6">
              Upon full payment, clients receive full ownership rights to the custom-developed 
              application. Nexes retains rights to general methodologies, techniques, and 
              non-client-specific code libraries.
            </p>

            <h3 className="text-xl font-semibold mb-4">6. Warranties and Limitations</h3>
            <p className="mb-6">
              We provide a 90-day warranty on all development work for bug fixes and technical 
              issues. Our liability is limited to the amount paid for services.
            </p>

            <h3 className="text-xl font-semibold mb-4">7. Termination</h3>
            <p className="mb-6">
              Either party may terminate the agreement with written notice. Termination terms 
              and conditions will be specified in individual project contracts.
            </p>
          </section>

          {/* Cookie Policy Section */}
          <section id="cookie-policy" className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 border-b pb-4">Cookie Policy</h2>
            <p className="text-sm text-muted-foreground mb-6">Last updated: January 8, 2025</p>

            <h3 className="text-xl font-semibold mb-4">1. What Are Cookies</h3>
            <p className="mb-6">
              Cookies are small text files that are placed on your computer or mobile device 
              when you visit our website. They help us provide you with a better experience 
              by remembering your preferences and analyzing how you use our site.
            </p>

            <h3 className="text-xl font-semibold mb-4">2. Types of Cookies We Use</h3>
            
            <h4 className="text-lg font-medium mb-3">Essential Cookies</h4>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. They enable 
              basic functions like page navigation and access to secure areas.
            </p>

            <h4 className="text-lg font-medium mb-3">Analytics Cookies</h4>
            <p className="mb-4">
              We use analytics cookies to understand how visitors interact with our website. 
              This helps us improve our content and user experience.
            </p>

            <h4 className="text-lg font-medium mb-3">Functional Cookies</h4>
            <p className="mb-6">
              These cookies enable the website to provide enhanced functionality and personalization, 
              such as remembering your preferences and settings.
            </p>

            <h3 className="text-xl font-semibold mb-4">3. Third-Party Cookies</h3>
            <p className="mb-4">We may use third-party services that place cookies on your device:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Google Analytics for website analytics</li>
              <li>Calendly for appointment scheduling</li>
              <li>Social media platforms for content sharing</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">4. Managing Cookies</h3>
            <p className="mb-6">
              You can control and manage cookies through your browser settings. However, 
              disabling certain cookies may affect the functionality of our website.
            </p>

            <h3 className="text-xl font-semibold mb-4">5. Updates to This Policy</h3>
            <p className="mb-6">
              We may update this cookie policy from time to time. We will notify you of any 
              changes by posting the new policy on this page.
            </p>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-8">
            <h2 className="text-3xl font-semibold mb-8 border-b pb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this legal information or our practices, 
              please contact us:
            </p>
            <div className="bg-muted p-6 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> legal@nexes.dev</p>
              <p className="mb-2"><strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
              <p><strong>Response Time:</strong> We typically respond within 24-48 hours</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 