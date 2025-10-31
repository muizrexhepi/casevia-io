import { WaitlistForm } from "@/components/emails/waitlist-form";
import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center md:text-left space-y-8">
            <h2 className="text-4xl md:text-5xl tracking-tight leading-[1] text-balance">
              Ready to publish your first <br className="hidden md:block" />
              case study this week?
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg">
              Join 500+ agencies, freelancers, and marketing teams who've
              replaced manual writing with Casevia. Start free — no credit card,
              no commitment.
            </p>

            <WaitlistForm />
          </div>

          {/* Right illustration */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[320px] h-[260px] md:w-[400px] md:h-[320px]">
              <Image
                src="/icons/cta.webp"
                alt="Publishing illustration"
                fill
                className="object-contain opacity-90"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
