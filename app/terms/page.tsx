"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import FooterSection from "@/components/footer";

export default function TermsOfService() {
  return (
    <>
      <section>
        {/* Header */}
        <div className="py-12 md:py-16 border-x container">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Terms of Service
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
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Casevia ("Service"), you agree to be bound
                by these Terms of Service ("Terms"). If you disagree with any
                part of these terms, you may not access the Service.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                2. Description of Service
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Casevia is an AI-powered platform that transforms recorded
                interviews into structured, publish-ready business case studies.
                The Service includes transcription, AI analysis, case study
                generation, and export capabilities.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">3. User Accounts</h2>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  You must create an account to use certain features of the
                  Service. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Maintaining the confidentiality of your account credentials
                  </li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Providing accurate and complete information</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                4. Subscription Plans and Billing
              </h2>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">4.1 Plans</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer various subscription plans with different features
                  and usage limits. Plan details and pricing are available on
                  our pricing page.
                </p>

                <h3 className="text-xl font-medium">4.2 Billing</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Subscriptions are billed monthly or annually in advance
                  </li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>
                    We reserve the right to change pricing with 30 days notice
                  </li>
                  <li>Payment processing is handled securely through Polar</li>
                </ul>

                <h3 className="text-xl font-medium">4.3 Cancellation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You may cancel your subscription at any time. Cancellation
                  will take effect at the end of your current billing period.
                </p>
              </div>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">5. Usage Limits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Each subscription plan includes specific usage limits for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Number of case studies per month</li>
                <li>Maximum video/audio duration</li>
                <li>Total cloud storage</li>
                <li>Number of team seats</li>
                <li>Available design templates</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Exceeding these limits may result in service restrictions.
                Upgrade your plan for higher limits.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                6. Content and Intellectual Property
              </h2>
              <div className="space-y-3">
                <h3 className="text-xl font-medium">6.1 Your Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You retain all rights to the content you upload. By using the
                  Service, you grant us a limited license to process, analyze,
                  and generate case studies from your content.
                </p>

                <h3 className="text-xl font-medium">6.2 Our Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The Service, including its design, features, and
                  functionality, is owned by Casevia and protected by copyright,
                  trademark, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-medium">6.3 Generated Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Case studies generated by our AI are provided to you for your
                  use. You are responsible for reviewing and ensuring accuracy
                  before publication.
                </p>
              </div>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">7. Acceptable Use</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Upload illegal, harmful, or inappropriate content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Attempt to reverse engineer or compromise the Service</li>
                <li>
                  Use the Service to spam or send unsolicited communications
                </li>
                <li>Share your account credentials with others</li>
                <li>Circumvent usage limits or restrictions</li>
              </ul>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">8. Data and Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of the Service is also governed by our Privacy Policy.
                We process your data in accordance with applicable data
                protection laws. Please review our Privacy Policy to understand
                how we collect, use, and protect your information.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                9. Service Availability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide reliable service but do not guarantee
                uninterrupted access. We may:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Perform maintenance and updates</li>
                <li>Modify or discontinue features with notice</li>
                <li>Suspend access for violations of these Terms</li>
              </ul>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">10. Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We do not guarantee the accuracy, completeness, or reliability
                of AI-generated content. You are responsible for reviewing and
                verifying all generated case studies.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                11. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CASEVIA SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our total liability shall not exceed the amount you paid us in
                the 12 months preceding the claim.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">12. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Casevia from any
                claims, damages, or expenses arising from your use of the
                Service, violation of these Terms, or infringement of any rights
                of another party.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">13. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account immediately, without
                prior notice, for conduct that violates these Terms or is
                harmful to other users, us, or third parties.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">14. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                notify users of material changes via email or through the
                Service. Continued use after changes constitutes acceptance of
                the modified Terms.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">15. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which Casevia operates,
                without regard to conflict of law provisions.
              </p>
            </section>

            <section className="space-y-4 mb-10">
              <h2 className="text-2xl font-semibold">
                16. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms, please contact us at:
              </p>
              <p className="text-muted-foreground">
                Email:{" "}
                <a
                  href="mailto:contact@casevia.io"
                  className="text-foreground underline hover:no-underline"
                >
                  contact@casevia.io
                </a>
              </p>
            </section>
          </div>
        </div>

        <Separator />

        {/* Bottom Navigation */}
        <div className="py-8 border-x container">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Privacy Policy
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
