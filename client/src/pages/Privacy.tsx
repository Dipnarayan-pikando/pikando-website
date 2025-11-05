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
            Last updated: November 2025
          </p>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12 text-sm sm:text-base leading-relaxed">
            {/* INTRODUCTION */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Pikando Digital Private Limited (“Pikando”, “we”, “us”, “our”) operates the Pikando
                website and mobile application that connect task posters and task seekers in India.
                This Privacy Policy explains what personal data we collect, how we use it, whom we
                share it with, and the choices you have. It is intended to comply with applicable
                Indian laws including the Information Technology Act, 2000 and the Digital Personal
                Data Protection Act, 2023 (DPDP Act). By using our website/app, you consent to the
                practices described here.
              </p>
              <p className="text-muted-foreground">
                We do not sell your personal data. We process data only for the purposes described
                below or as required by law, and we apply reasonable technical and organisational
                safeguards to protect it.
              </p>
            </section>

            {/* INFORMATION WE COLLECT */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                Depending on how you use Pikando, we may collect the following categories of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Account & Profile:</strong> name, email, mobile number, password, date of birth/age
                  confirmation, and optional profile details (photo, bio, skills, portfolio).
                </li>
                <li>
                  <strong>Identity & KYC (when required):</strong> government ID details and verification status
                  (e.g., Aadhaar/PAN/passport/driving licence) processed via approved verification partners or
                  DigiLocker. We store verification results/metadata, not your full ID numbers where not required.
                </li>
                <li>
                  <strong>Transactions & Service Data:</strong> task details, bids, bookings, invoices/receipts,
                  escrow status, ratings/reviews, and media you upload (e.g., photos/documents relevant to a task).
                </li>
                <li>
                  <strong>Payments & Payouts:</strong> payment method tokens and transaction metadata handled by
                  certified payment partners (card/UPI/bank). We do not store full card numbers or UPI PINs.
                </li>
                <li>
                  <strong>Communications:</strong> support emails/messages and in-app chats between users; we retain
                  them to operate the service and for safety/dispute resolution.
                </li>
                <li>
                  <strong>Device & Usage:</strong> IP address, device/OS/browser, app and page activity, crash logs,
                  and approximate location. With permission, we may collect precise location (e.g., for routing/SOS).
                </li>
                <li>
                  <strong>Cookies & Local Storage:</strong> used for session management, preferences, analytics, and
                  to prevent fraud. You may control cookies via your browser settings.
                </li>
              </ul>
            </section>

            {/* HOW WE USE */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use personal data to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Provide and improve</strong> the website/app, including account creation, matching posters and seekers, booking flows, and customer support.</li>
                <li><strong>Trust & Safety:</strong> identity verification, fraud/spam prevention, dispute handling, and content moderation consistent with our policies.</li>
                <li><strong>Payments & escrow:</strong> process payments, hold/release funds via our payment/escrow partners, and send receipts and tax invoices.</li>
                <li><strong>Analytics & personalisation:</strong> understand usage to improve UX, features, and relevance; marketing communications where permitted (with opt-out).</li>
                <li><strong>Legal compliance:</strong> maintain records required by law and respond to lawful requests from authorities or courts.</li>
              </ul>
            </section>

            {/* SHARING */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Sharing and Sale</h2>
              <p className="text-muted-foreground mb-4">
                We do <strong>not</strong> sell your personal data. We share data only as necessary:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>With other users:</strong> limited profile/task information so that posters and seekers can
                  evaluate and complete a booking; contact details may be shared after a match (and may be masked where supported).
                </li>
                <li>
                  <strong>Service providers:</strong> vetted vendors who help us operate the platform (hosting/cloud,
                  analytics, customer support tools, identity verification, payment gateways/escrow). They are bound by
                  confidentiality and process data under our instructions.
                </li>
                <li>
                  <strong>Legal/governmental:</strong> when required by applicable law, regulation, or legal process.
                </li>
                <li>
                  <strong>Business transfers:</strong> if we undergo a merger, acquisition, or asset sale; the successor
                  will honour this Policy or provide notice before materially different practices take effect.
                </li>
              </ul>
            </section>

            {/* RETENTION & DELETION */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Retention and Deletion</h2>
              <p className="text-muted-foreground mb-4">
                We retain personal data only for as long as needed for the purposes described above or as required by law.
                For example, transaction and tax records may be retained for 5–7 years. You may request deletion of your
                account/data (subject to lawful retention) by emailing us; we may ask for information to verify your identity
                before acting on the request.
              </p>
              <p className="text-muted-foreground">
                Contact for deletion requests:&nbsp;
                <a
                  href="mailto:privacy@pikando.com"
                  className="text-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md inline-block font-medium"
                  data-testid="link-privacy-email"
                >
                  privacy@pikando.com
                </a>
              </p>
            </section>

            {/* SECURITY */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Security</h2>
              <p className="text-muted-foreground">
                We implement reasonable security measures including encryption in transit, access controls, and periodic
                reviews. However, no method of transmission or storage is completely secure; you use the service at your
                own risk and should keep your account credentials confidential.
              </p>
            </section>

            {/* GOVERNING LAW */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                This Privacy Policy is governed by the laws of India. Any disputes shall be subject to the exclusive
                jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
            </section>

            {/* CHANGES */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
                “Last updated” date. If changes are material, we will provide additional notice (e.g., in-app or email,
                where available).
              </p>
            </section>

            {/* CONTACT / GRIEVANCE */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For questions, requests, or complaints about this Policy or your personal data, contact:
              </p>
              <p className="text-muted-foreground mb-2">
                Email (Privacy):{" "}
                <a
                  href="mailto:privacy@pikando.com"
                  className="text-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md inline-block font-medium"
                >
                  privacy@pikando.com
                </a>
              </p>
              <p className="text-muted-foreground mb-6">
                Email (Support):{" "}
                <a
                  href="mailto:support@pikando.com"
                  className="text-foreground hover-elevate active-elevate-2 px-2 py-1 -ml-2 rounded-md inline-block font-medium"
                >
                  support@pikando.com
                </a>
              </p>

              <div className="rounded-md border p-4">
                <p className="text-foreground font-medium mb-1">Grievance Officer (India)</p>
                <p className="text-muted-foreground">
                  <span className="block">Name: Nithyananda Kotian</span>
                  <span className="block">
                    Email:{" "}
                    <a
                      href="mailto:support@pikando.com"
                      className="underline"
                    >
                      support@pikando.com
                    </a>
                  </span>
                  <span className="block">Phone: +91 99804 49726</span>
                  <span className="block">Address: #17, 2nd floor, 7th Main Road, II Stage, Indiranagar, Bengaluru – 560038</span>
                  <span className="block mt-2">
                    We acknowledge grievances and aim to resolve them within 15 days in accordance with applicable law.
                  </span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
