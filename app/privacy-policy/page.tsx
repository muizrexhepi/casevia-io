"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import FooterSection from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <section>
        {/* Header */}
        <div className="py-12 md:py-16 border-x container">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: October 27, 2025
            </p>
          </div>
        </div>

        <Separator />

        {/* Content */}
        <div className="py-12 md:py-16 border-x container">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Casevia ("we," "our," or "us") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using Casevia, you consent to the data practices described in
                this policy.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                2. Information We Collect
              </h2>

              <div className="space-y-3">
                <h3 className="text-xl font-medium">
                  2.1 Information You Provide
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Account Information:</strong> Name, email address,
                    company name, and password
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Billing details
                    processed securely through Polar (we do not store full
                    payment card details)
                  </li>
                  <li>
                    <strong>Content:</strong> Audio/video files, transcripts,
                    and case studies you create
                  </li>
                  <li>
                    <strong>Profile Information:</strong> Optional information
                    like job title, company size, and industry
                  </li>
                </ul>

                <h3 className="text-xl font-medium">
                  2.2 Information Collected Automatically
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Usage Data:</strong> Pages visited, features used,
                    time spent on the platform
                  </li>
                  <li>
                    <strong>Device Information:</strong> IP address, browser
                    type, operating system, device identifiers
                  </li>
                  <li>
                    <strong>Cookies and Tracking:</strong> We use cookies and
                    similar technologies to track activity and improve your
                    experience
                  </li>
                  <li>
                    <strong>Log Data:</strong> Server logs, error reports, and
                    performance metrics
                  </li>
                </ul>

                <h3 className="text-xl font-medium">
                  2.3 Information from Third Parties
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may receive information from third-party services you
                  connect to Casevia, such as authentication providers or
                  integration partners.
                </p>
              </div>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and manage subscriptions</li>
                <li>Transcribe and analyze your uploaded content</li>
                <li>Generate AI-powered case studies</li>
                <li>
                  Send service updates, security alerts, and support messages
                </li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>
                  Monitor and analyze usage patterns to improve the platform
                </li>
                <li>
                  Detect, prevent, and address technical issues or fraudulent
                  activity
                </li>
                <li>
                  Send marketing communications (you can opt out at any time)
                </li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                4. How We Share Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your
                information in the following circumstances:
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-medium">4.1 Service Providers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We share information with third-party service providers who
                  perform services on our behalf:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Supabase:</strong> Database and file storage
                  </li>
                  <li>
                    <strong>AssemblyAI:</strong> Audio/video transcription
                  </li>
                  <li>
                    <strong>OpenAI & DeepSeek:</strong> AI analysis and content
                    generation
                  </li>
                  <li>
                    <strong>Polar:</strong> Payment processing and subscription
                    management
                  </li>
                  <li>
                    <strong>Vercel:</strong> Hosting and infrastructure
                  </li>
                </ul>

                <h3 className="text-xl font-medium">4.2 Business Transfers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If we are involved in a merger, acquisition, or sale of
                  assets, your information may be transferred as part of that
                  transaction.
                </p>

                <h3 className="text-xl font-medium">4.3 Legal Requirements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may disclose your information if required by law or in
                  response to valid legal requests, such as subpoenas or court
                  orders.
                </p>

                <h3 className="text-xl font-medium">4.4 With Your Consent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may share your information with third parties when you
                  explicitly consent to such sharing.
                </p>
              </div>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Encryption in transit (HTTPS/TLS) and at rest</li>
                <li>Secure authentication mechanisms</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and monitoring</li>
                <li>Secure backup procedures</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                However, no method of transmission over the internet is 100%
                secure. While we strive to protect your information, we cannot
                guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">6. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                When you delete your account, we will delete or anonymize your
                personal information within 90 days, unless retention is
                required by law.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                7. Your Rights and Choices
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Access:</strong> Request a copy of your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a portable
                  format
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing
                  communications
                </li>
                <li>
                  <strong>Object:</strong> Object to certain processing of your
                  information
                </li>
                <li>
                  <strong>Restrict:</strong> Request restriction of processing
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:support@casevia.io"
                  className="text-foreground underline hover:no-underline"
                >
                  support@casevia.io
                </a>
                .
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                8. Cookies and Tracking
              </h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong>Essential Cookies:</strong> Required for the
                    platform to function
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how
                    users interact with our service
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings
                    and preferences
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  You can control cookies through your browser settings.
                  However, disabling cookies may affect your ability to use
                  certain features.
                </p>
              </div>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                9. International Data Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place to protect your information in accordance with this
                Privacy Policy and applicable data protection laws.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service is not intended for individuals under the age of 18.
                We do not knowingly collect personal information from children.
                If you believe we have collected information from a child,
                please contact us immediately.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">11. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our service may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                these third parties. We encourage you to review their privacy
                policies.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                12. California Privacy Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                California residents have additional rights under the California
                Consumer Privacy Act (CCPA), including the right to know what
                personal information is collected, the right to delete personal
                information, and the right to opt-out of the sale of personal
                information (note: we do not sell personal information).
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">13. GDPR Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you are in the European Economic Area (EEA), we process your
                personal information based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Performance of a contract with you</li>
                <li>Our legitimate business interests</li>
                <li>Your consent (which you may withdraw at any time)</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                14. Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of material changes by email or through a notice on
                our platform. Your continued use of the service after changes
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">15. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy or
                our data practices, please contact us:
              </p>
              <div className="space-y-1 text-muted-foreground">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:support@casevia.io"
                    className="text-foreground underline hover:no-underline"
                  >
                    support@casevia.io
                  </a>
                </p>
                <p>
                  General inquiries:{" "}
                  <a
                    href="mailto:contact@casevia.io"
                    className="text-foreground underline hover:no-underline"
                  >
                    contact@casevia.io
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>

        <Separator />

        {/* Bottom Navigation */}
        <div className="py-8 border-x container">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Support →
            </Link>
          </div>
        </div>

        <Separator />
      </section>
      <FooterSection />
    </>
  );
}
