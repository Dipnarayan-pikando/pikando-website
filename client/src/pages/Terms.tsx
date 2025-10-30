import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 px-8">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Terms of Use
          </h1>
          <p className="text-sm font-medium text-muted-foreground mb-12">
            Last updated: January 2025
          </p>

          <div className="space-y-12 text-base leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using the Pikando website ("Site"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Site. Your continued use of the Site constitutes your acceptance of any changes or updates to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All content on this Site, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>The Pikando name and logo</li>
                <li>Text, graphics, images, and design elements</li>
                <li>Software and code</li>
              </ul>
              <p className="text-muted-foreground">
                are owned by or licensed to Pikando Digital Private Limited and are protected by Indian and international intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Use of the Site</h2>
              <p className="text-muted-foreground mb-4">
                The content on this Site is provided for informational purposes only. You agree to use the Site only for lawful purposes and in a manner that does not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Infringe upon the rights of others</li>
                <li>Restrict or inhibit anyone else's use of the Site</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Waitlist and Communications</h2>
              <p className="text-muted-foreground">
                By joining our waitlist, you consent to receive emails from Pikando regarding product launches, updates, and relevant information. You may unsubscribe from these communications at any time by following the instructions in our emails or contacting us at support@pikando.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-4">
                The Site and its content are provided "as is" without any warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy, completeness, or reliability of information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, Pikando Digital Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Site, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground">
                The Site may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or assume any responsibility for the content, privacy policies, or practices of third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground">
                These Terms of Use are governed by the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes your acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Pikando Digital Private Limited</strong>
              </p>
              <p className="text-muted-foreground mb-2">
                Bengaluru, India
              </p>
              <p className="text-muted-foreground">
                Email: <a 
                  href="mailto:support@pikando.com" 
                  className="text-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md inline-block font-medium"
                  data-testid="link-terms-email"
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
