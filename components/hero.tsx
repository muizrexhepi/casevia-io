import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "./emails/waitlist-form";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-12 md:py-20 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Top Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Interviews → Case Studies
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.95] max-w-5xl mx-auto mb-8">
          The fastest way to turn interviews into{" "}
          <span className="relative inline-block">
            <span className="text-gradient-primary">case studies</span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Upload <strong>audio or video</strong> interviews. Our AI instantly
          converts the raw conversation into a high-impact,{" "}
          <strong>publish-ready</strong> case study — skipping weeks of writing.
        </p>

        {/* CTA */}
        <div className="mb-16">
          <WaitlistForm />
        </div>

        {/* Product Image */}
        <div className="w-full mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card">
            <Image
              src="/images/dashboard.webp"
              alt="Casevia converts recorded interviews into structured case studies"
              width={1800}
              height={1000}
              priority
              className="object-contain w-full h-auto mask-fade-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
