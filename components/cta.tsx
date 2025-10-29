import { WaitlistForm } from "@/components/emails/waitlist-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="container py-12 lg:py-24">
      <div className="relative rounded-2xl border bg-muted p-8 lg:p-16 overflow-hidden">
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,var(--primary)_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 mx-auto text-center max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-balance">
            Ready to publish your first case study this week?
          </h2>

          <p className="text-lg text-muted-foreground mx-auto max-w-xl">
            Join 500+ agencies, freelancers, and marketing teams who've replaced
            manual writing with Casevia. Start free—no credit card, no
            commitment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
