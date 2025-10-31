"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function CookiePolicyPage() {
  return (
    <section>
      {/* Header */}
      <div className="py-12 md:py-16 border-x container">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Cookie Policy
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
            <h2 className="text-2xl font-semibold">1. What Are Cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files stored on your device (computer,
              tablet, or mobile) when you visit certain websites. They are used
              to "remember" you and your preferences, either for a single visit
              (a "session cookie") or for multiple repeat visits (a "persistent
              cookie").
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This policy explains our simple and transparent approach to
              cookies across our services.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold">2. How We Use Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our use of cookies is different depending on which Casevia domain
              you are visiting.
            </p>

            <h3 className="text-xl font-medium">
              2.1 On casevia.io (Our Marketing Website)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our public marketing website, <strong>casevia.io</strong>, does
              not use any non-essential cookies. We do not use any third-party
              analytics (like Google Analytics) or advertising trackers. This
              allows you to browse our site privately without needing to manage
              cookie consent.
            </p>

            <h3 className="text-xl font-medium">
              2.2 On app.casevia.io (Our Application)
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our web application, <strong>app.casevia.io</strong>, uses only
              "Strictly Necessary" cookies. These cookies are essential for the
              application to function correctly. We use them to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Keep you securely logged in to your account.</li>
              <li>Remember your session information.</li>
              <li>Manage your organization and user permissions.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Because these cookies are essential for you to use the service,
              they are loaded automatically and do not require a consent banner.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold">
              3. Types of Cookies We Use
            </h2>

            <h3 className="text-xl font-medium">
              3.1 Strictly Necessary Cookies
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              These are required for the operation of our Service on{" "}
              <strong>app.casevia.io</strong>. They are provided by our
              authentication partner, <strong>Better Auth</strong>, to manage
              your login session securely. Without these, you would not be able
              to log in.
            </p>

            <h3 className="text-xl font-medium">
              3.2 Analytics and Performance Cookies
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We do not use any analytics or performance cookies on{" "}
              <strong>casevia.io</strong>.
            </p>

            <h3 className="text-xl font-medium">
              3.3 Advertising or Marketing Cookies
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We do not use any advertising or marketing cookies on any of our
              services.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold">
              4. Your Choices and How to Opt-Out
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Since we only use strictly necessary cookies on{" "}
              <strong>app.casevia.io</strong> and no non-essential cookies on{" "}
              <strong>casevia.io</strong>, there is no tracking to opt-out of.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can, however, manage or delete cookies through your browser's
              settings. Please note that if you block all cookies (including
              strictly necessary ones), you will not be able to log in or use
              our application at <strong>app.casevia.io</strong>.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold">
              5. Changes to This Cookie Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time. If we ever
              introduce non-essential cookies, we will update this policy and
              provide you with a clear consent banner.
            </p>
          </section>

          <section className="space-y-4 mb-10">
            <h2 className="text-2xl font-semibold">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies, please contact
              us at:
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
            href="/security-data"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Security & Data
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
