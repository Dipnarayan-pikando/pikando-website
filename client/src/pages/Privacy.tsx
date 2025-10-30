import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-8 sm:mb-10 lg:mb-12">
            Last updated: January 2025
          </p>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Pikando Digital Private Limited ("Pikando," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Waitlist emails:</strong> Email addresses submitted through our waitlist forms</li>
                <li><strong>Support messages:</strong> Names, email addresses, and message content submitted through our contact forms</li>
                <li><strong>Analytics data:</strong> Website usage information, including pages visited, time spent, and browser information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Updates:</strong> To notify you about product launches and updates in your area</li>
                <li><strong>Support:</strong> To respond to your inquiries and provide customer support</li>
                <li><strong>Security:</strong> To maintain the security and integrity of our platform</li>
                <li><strong>Improvement:</strong> To analyze usage patterns and improve our website and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing and Sale</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. Your data is used exclusively for the purposes outlined in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention and Deletion</h2>
              <p className="text-muted-foreground mb-4">
                We retain your information only for as long as necessary to fulfill the purposes outlined in this policy. If you wish to have your data deleted, please contact us at:
              </p>
              <p className="text-muted-foreground">
                <a 
                  href="mailto:support@pikando.com" 
                  className="text-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md inline-block font-medium"
                  data-testid="link-privacy-email"
                >
                  support@pikando.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Security</h2>
              <p className="text-muted-foreground">
                We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                This Privacy Policy is governed by the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p className="text-muted-foreground">
                Email: <a 
                  href="mailto:support@pikando.com" 
                  className="text-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md inline-block font-medium"
                >
                  support@pikando.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
