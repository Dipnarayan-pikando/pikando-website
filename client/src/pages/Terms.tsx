import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-8 sm:mb-10 lg:mb-12">
            Last updated: November 2025
          </p>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12 text-sm sm:text-base leading-relaxed">
            {/* INTRO */}
            <section>
              <p className="text-muted-foreground">
                PLEASE READ THESE TERMS CAREFULLY. These Terms of Service (the “Agreement”)
                govern your use of the Pikando platform (website and app) and your relationship with
                Pikando as an intermediary platform. By accessing or using Pikando, you agree to
                these Terms. If you do not agree, do not use our services.
              </p>
            </section>

            {/* 1. ELIGIBILITY AND ACCOUNTS */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Eligibility and Accounts</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Age:</strong> You must be at least 16 years old to use Pikando. Users aged 16–17 may only
                  use the platform with verified parental/guardian consent. Such minors cannot enter into contracts on
                  their own; a parent/guardian must agree to these Terms on their behalf. Users under 16 are not allowed.
                </li>
                <li>
                  <strong>Registration:</strong> You must create an account with accurate, current, and complete
                  information (e.g., name, email, phone). Update details when they change. We may suspend/terminate
                  accounts that use false information or fail KYC.
                </li>
                <li>
                  <strong>KYC Verification:</strong> Before completing bookings or receiving payouts, you must complete
                  verification (e.g., government ID, bank verification). Taskers may be required to complete background/
                  police checks where applicable. Pikando may refuse or suspend access if verification is incomplete.
                </li>
                <li>
                  <strong>One Account:</strong> You may maintain only one account and must not share it or use someone else’s.
                </li>
              </ul>
            </section>

            {/* 2. OUR ROLE */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Our Role – Intermediary Service</h2>
              <p className="text-muted-foreground">
                Pikando facilitates connections between Gig Posters (customers) and Gig Seekers (Taskers).
                Pikando is not a party to any contract between a Poster and a Tasker, does not employ Taskers, and
                does not guarantee the quality, safety, legality, or suitability of any task or service. We provide a venue
                for advertising and entering into service contracts.
              </p>
              <p className="text-muted-foreground mt-3">
                <strong>Limited Liability:</strong> To the fullest extent permitted by law, Pikando’s total aggregate liability
                for any claim, whether in contract, tort (including negligence) or otherwise, shall not exceed the total
                service fees actually paid by you to Pikando in the twelve (12) months preceding the event giving rise to
                the claim, or ₹1,000, whichever is lower. Pikando shall not be liable for any indirect, incidental,
                consequential, special, or punitive damages (including loss of profits, data, goodwill).
              </p>
              <p className="text-muted-foreground mt-3">
                <strong>Non-Interference:</strong> Apart from the checks we perform, you are responsible for verifying any
                party you engage (qualifications, licences, insurance). You assume all risks related to your decisions.
              </p>
            </section>

            {/* 3. PLATFORM USE & CONDUCT */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Platform Use and Conduct</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Accuracy:</strong> Provide truthful information; do not post tasks/offers you cannot fulfil. Task/offer
                  descriptions must be accurate and lawful. You must complete tasks you accept.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Do not use Pikando for illegal or prohibited activities (e.g., fraud,
                  harassment, IP infringement, illegal goods/services). We may refuse, suspend, or terminate accounts
                  engaging in illegal or unsafe activities.
                </li>
                <li>
                  <strong>Safety & Decency:</strong> Behave responsibly. Posters must provide a safe work environment.
                  No harassment, discrimination, hate speech, nudity, or violence.
                </li>
                <li>
                  <strong>Prohibited Activities:</strong> Do not interfere with the platform, bypass security, scrape data, create
                  bots, impersonate others, post fraudulent content, or transmit malware. Violations may lead to
                  immediate suspension.
                </li>
                <li>
                  <strong>Account Security:</strong> Keep your login secure; notify us immediately of unauthorised use.
                </li>
              </ul>
            </section>

            {/* 4. PAYMENTS, FEES, ESCROW */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payments, Fees, and Escrow</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Payment Process:</strong> When a Poster accepts a Tasker’s offer, the Poster pays the task
                  amount plus applicable platform fees into our escrow. Funds are held until task completion.
                </li>
                <li>
                  <strong>Platform Fees:</strong> Pikando charges a commission/service fee per transaction as disclosed
                  in-app. Fees are non-refundable once paid, except as required by law. Our service fee (and taxes on it)
                  may be retained regardless of task outcome.
                </li>
                <li>
                  <strong>Release of Funds:</strong> After completion and confirmation by both parties, we release the
                  Tasker’s payout (minus fees) from escrow. If a Poster raises an issue, funds may remain on hold during
                  resolution/mediation.
                </li>
                <li>
                  <strong>Cancellations:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>
                      <em>Poster cancellation:</em> Refund of task amount minus a cancellation fee (terms shown at booking).
                    </li>
                    <li>
                      <em>Tasker cancellation:</em> A cancellation fee may be deducted from the Tasker’s next payout; Poster
                      may receive a full/partial refund depending on timing.
                    </li>
                    <li>
                      <em>No-show:</em> If a Tasker does not show and neither party responds, Poster may be refunded the task
                      amount minus a small processing fee; repeated no-shows can lead to suspension.
                    </li>
                    <li>
                      <em>Disputed completion:</em> We may hold funds in escrow and mediate or offer optional third-party
                      dispute resolution. Parties should attempt direct resolution first.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Taxes:</strong> You are responsible for taxes (e.g., GST, income tax). Taskers must comply with Indian
                  tax laws and reporting. Pikando may report payments as required by law.
                </li>
              </ul>
            </section>

            {/* 5. REVIEWS & CONTENT */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Reviews and Content</h2>
              <p className="text-muted-foreground mb-3">
                Posters and Taskers may rate and review after a task. Reviews must be honest and not abusive,
                defamatory, or unrelated ads. Pikando may remove content that violates policies.
              </p>
              <p className="text-muted-foreground">
                You are responsible for content you post (descriptions, messages, images). You grant Pikando a licence
                to display such content on the platform (e.g., your Tasker profile, the reviews you write). Pikando does not
                guarantee the accuracy of user content.
              </p>
            </section>

            {/* 6. DISCLAIMERS & LIMITATION */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimers and Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>General Disclaimer:</strong> The service is provided “as is” and “as available.” We disclaim all
                  warranties (express or implied), including merchantability, fitness for a particular purpose, and non-infringement.
                </li>
                <li>
                  <strong>No Liability for Users:</strong> Pikando does not endorse any user or user content. Engagements
                  are solely between users. Pikando is not liable for injury, loss, or damage arising from tasks/services.
                </li>
                <li>
                  <strong>Limitation:</strong> Except where prohibited by law, Pikando’s total liability is limited to the amount
                  you paid in Pikando service fees in the prior 12 months, or ₹1,000, whichever is less. No liability for lost
                  profits or purely economic losses.
                </li>
              </ul>
            </section>

            {/* 7. INDEMNITY */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Indemnity</h2>
              <p className="text-muted-foreground">
                You agree to defend, indemnify, and hold harmless Pikando and its affiliates, officers, and employees
                from any claims, damages, losses, or expenses (including legal fees) arising out of your use of Pikando,
                your posted content, your tasks/services, or your violation of these Terms or applicable law.
              </p>
            </section>

            {/* 8. DISPUTE RESOLUTION */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Dispute Resolution</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Good Faith:</strong> Parties should first attempt to resolve disputes amicably through our platform or support.
                </li>
                <li>
                  <strong>Arbitration:</strong> Except for claims eligible for small-claims court, disputes will be resolved by binding
                  arbitration under the Arbitration and Conciliation Act, 1996. The seat/place of arbitration is Bengaluru, India.
                  Proceedings will be conducted in English. The arbitrator’s decision is final and binding.
                </li>
                <li>
                  <strong>Legal Rights:</strong> You may seek injunctive relief in courts if arbitration provisions are unenforceable.
                  Any legal action must be brought in India under Indian law.
                </li>
              </ul>
            </section>

            {/* 9. CHANGES */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to These Terms</h2>
              <p className="text-muted-foreground">
                Pikando may update these Terms from time to time (e.g., to reflect new features or legal requirements).
                We will notify you of material changes (e.g., via the site or email). Your continued use after changes
                constitutes acceptance. Please review the current Terms regularly.
              </p>
            </section>

            {/* 10. MISCELLANEOUS */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Miscellaneous</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Severability:</strong> If any provision is invalid or unenforceable, the remainder remains in effect.
                </li>
                <li>
                  <strong>No Waiver:</strong> A failure to enforce any provision is not a waiver of the right to enforce it later.
                </li>
                <li>
                  <strong>Entire Agreement:</strong> These Terms, our Privacy Policy, and any referenced policies form the
                  entire agreement between you and Pikando regarding the service.
                </li>
              </ul>
            </section>

            {/* CONTACT */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                Questions about these Terms? Email{" "}
                <a href="mailto:support@pikando.com" className="underline">
                  support@pikando.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
{/* RELATED POLICIES (polished) */}
<section className="mt-12 sm:mt-14 mb-12 sm:mb-16">
  <div className="max-w-[800px] mx-auto">
    <div className="rounded-lg border bg-card/50 p-5 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold text-foreground">
        Related Policies & Legal Documents
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        For detailed frameworks and supporting policies, view the official documents below.
        Links open in a new tab on our verified Zoho WorkDrive.
      </p>

      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
        <li>
          <a
            href="https://workdrive.zohoexternal.in/external/88f1abb2701bfe3807a92456b8550cbfe65ace20cf659736ec4b81dd82b7e064"
            target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Dispute Resolution & Refund Policy
          </a>
        </li>
        <li>
          <a
            href="https://workdrive.zohoexternal.in/external/19ebe13fdeebab005132f07e650915bd4ab5e3302df04169ef1f7f3732c302a9"
            target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Content Moderation & Banned Listing Policy
          </a>
        </li>
        <li>
          <a
            href="https://workdrive.zohoexternal.in/external/54571ae400ebe103b920a0b789f4de938b74bc8ce6d944f1b80484e62431aff4"
            target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            P2P Goods Marketplace – Legal & Policy Framework
          </a>
        </li>
        <li>
          <a
            href="https://workdrive.zohoexternal.in/external/7c98696443d3231081d0b56e8543e1aa0e131b31f1cd033bffe0a739f02716d4"
            target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="https://workdrive.zohoexternal.in/external/4b1dbf7cd110b5a33203be43df4b8a1a2d8af1f10e892d7a991e654b13011bd7"
            target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Terms of Service – Gig Seekers
          </a>
        </li>
        <li>
          <a
            href="https://workdrive.zohoexternal.in/external/36bd0e2f1ea199cd5b7c47094dff5a3e597498f5f1eca6896a56e6fcc6f4bfad"
            target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Terms of Service – Gig Posters
          </a>
        </li>
        <li className="sm:col-span-2">
          <a
            href="https://workdrive.zohoexternal.in/external/48e8eea208e4e4884a9bc09c36e7d6939ea42a66d67d43b91667bc9d4aa4032d"
            target="_blank" rel="noopener noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            Special Terms for Adolescent Gig Seekers (Ages 16–18)
          </a>
        </li>
      </ul>

      <p className="mt-6 text-xs text-muted-foreground">
        These links always point to the latest approved versions maintained by Pikando Digital Private Limited.
      </p>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
}
