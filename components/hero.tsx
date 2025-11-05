import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "./emails/waitlist-form";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center py-20 md:py-28 overflow-hidden">
      {/* Organic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large organic blob - top right */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 blur-3xl animate-pulse-soft"
          style={{ animationDelay: "0s" }}
        />
        {/* Medium organic blob - bottom left */}
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/10 via-primary/5 to-accent/10 blur-3xl animate-pulse-soft"
          style={{ animationDelay: "1.5s" }}
        />
        {/* Small accent blob - center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/5 blur-2xl animate-pulse-soft"
          style={{ animationDelay: "3s" }}
        />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Top Badge with icon */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Transform conversations into stories
          </span>
        </div>

        {/* Headline with gradient accent */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-5xl mx-auto mb-8">
          Your best work,{" "}
          <span className="relative inline-block">
            <span className="text-gradient-primary">told by your clients</span>
            {/* Hand-drawn underline effect */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 6C50 3 100 1 150 4C200 7 250 9 298 6"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-float"
              />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Upload the interview, we handle the narrative. Casevia turns real
          client conversations into structured case studies — privacy-first and
          instantly publishable.
        </p>

        {/* CTA */}
        <div className="mb-16">
          <WaitlistForm />
        </div>

        {/* Product Illustration with floating effect */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="relative group">
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-border/50 bg-card ">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

              <Image
                src="/images/dashboard.webp"
                alt="Casevia converts recorded interviews into structured case studies"
                width={1600}
                height={900}
                priority
                className="object-contain w-full h-auto"
              />

              {/* Corner accent - top left */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full" />
              {/* Corner accent - bottom right */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/10 to-transparent rounded-tl-full" />
            </div>
          </div>
        </div>

        {/* Social proof / trust indicators */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                />
              ))}
            </div>
            <span>
              Trusted by <strong className="text-foreground">200+ teams</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
