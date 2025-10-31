"use client";

import React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import FooterSection from "@/components/footer";

export default function SecurityDataPage() {
  return (
    <section>
      {/* Header */}
      <div className="py-12 md:py-16 border-x container">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Security & Data
          </h1>
          <p className="text-muted-foreground text-lg">
            Last updated: October 28, 2025
          </p>
        </div>
      </div>

      <Separator />

      {/* Content */}
      <div className="py-12 md:py-16 border-x container">
        <div className="max-w-3xl mx-auto prose prose-gray">
          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold">1. Our Security Pledge</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your trust is our top priority. We are committed to protecting the
              security and confidentiality of your data. This page outlines the
              measures we take to secure your interview files and generated case
              studies.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold">
              2. Data Storage & Encryption
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All data you upload to Casevia is handled with strict security
              protocols.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Secure Storage:</strong> All user files (audio/video)
                and generated content are securely stored using{" "}
                <strong>Supabase Storage</strong>.
              </li>
              <li>
                <strong>Encryption in Transit:</strong> All data transferred
                between your device and our servers is encrypted using
                industry-standard SSL/TLS.
              </li>
              <li>
                <strong>Encryption at Rest:</strong> Your files stored in
                Supabase are encrypted at rest, adding an essential layer of
                protection.
              </li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold">
              3. Data Processing & Third-Party Services
            </h2>
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                To provide our AI-powered service, we partner with
                best-in-class, secure third-party providers. We only send the
                minimum data necessary for them to perform their function. We do
                not use your content to train third-party AI models.
              </p>

              <h3 className="text-xl font-medium">Our Key Sub-processors</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Authentication:</strong> User login and organization
                  management are handled by <strong>Better Auth</strong>.
                </li>
                <li>
                  <strong>Billing:</strong> Secure subscription and payment
                  processing is managed by <strong>Polar</strong>. We do not
                  store your credit card details.
                </li>
                <li>
                  <strong>Transcription:</strong> Your audio/video files are
                  processed by <strong>AssemblyAI</strong> to generate
                  transcripts.
                </li>
                <li>
                  <strong>AI Analysis:</strong> Transcripts are analyzed by{" "}
                  <strong>OpenAI (GPT-4o)</strong> and <strong>DeepSeek</strong>{" "}
                  to extract insights and generate the case study narrative.
                </li>
                <li>
                  <strong>Hosting:</strong> Our application is securely hosted
                  and deployed via <strong>Vercel</strong>.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold">
              4. Your Security Responsibilities
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While we secure our platform, you also play a vital role in
              protecting your account.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use a strong, unique password for your Casevia account.</li>
              <li>Maintain the confidentiality of your account credentials.</li>
              <li>
                Notify us immediately if you suspect any unauthorized use of
                your account.
              </li>
            </ul>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold">
              5. Data Retention & Deletion
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You have full control over your content. You can delete your
              uploaded interviews and generated case studies from your dashboard
              at any time. When you delete data, it is permanently removed from
              our active systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For more details on data retention and your rights, please see our{" "}
              <Link
                href="/privacy-policy"
                className="text-foreground underline hover:no-underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold">6. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about our security practices or to report a
              vulnerability, please contact us at:
            </p>
            <p className="text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:security@casevia.io"
                className="text-foreground underline hover:no-underline"
              >
                security@casevia.io
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
            href="/terms-of-service"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Terms of Service
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy →
          </Link>
        </div>
      </div>

      <Separator />
    </section>
  );
}
