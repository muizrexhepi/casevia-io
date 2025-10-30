import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-12 md:py-20 overflow-hidden bg-white max-w-6xl mx-auto px-4">
      {/* Top Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
          AI-Powered Case Studies for Agencies
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1] max-w-3xl mb-6 text-foreground">
        Your best work, told by your clients
      </h1>

      {/* Subheadline */}
      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
        Record a conversation. Get a case study. Casevia turns client interviews
        into beautifully structured stories — no writing, no waiting.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mb-6 w-full md:w-fit">
        <Button size="lg" className="w-full md:w-fit">
          Get Started{" "}
        </Button>
        <Button size="lg" variant="outline" className="w-full md:w-fit">
          See Example
        </Button>
      </div>

      {/* Optional: small trust text */}
      <p className="text-sm text-muted-foreground">
        No credit card required — join early access.
      </p>

      {/* Product Illustration / Screenshot */}
      <div className="hidden lg:block w-full mt-16 relative rounded-xl overflow-hidden">
        <Image
          src="/images/image.png"
          alt="Casevia converts recorded interviews into structured case studies"
          width={1600}
          height={900}
          priority
          className="object-contain mx-auto rounded-xl shadow border border-border/40 bg-muted/30"
        />
      </div>
    </section>
  );
}
