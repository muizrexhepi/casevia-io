"use client";

import { useWaitlistStore } from "@/lib/store";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const openWaitlist = useWaitlistStore((s) => s.openWaitlist);

  return (
    // Use the defined background color
    <section className="relative w-full min-h-[90vh] bg-background text-foreground overflow-hidden pt-32 py-16 md:py-32">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Content Grid (Text Left, Visual/Card Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-16 lg:gap-24 items-start">
          {/* Left Column: Typography & CTAs (Fading in for effect) */}
          <div
            className="space-y-8 max-w-3xl animate-fade-in-up"
            style={{ animationDelay: "0ms" }}
          >
            {/* The Huge Serif Headline */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-balance">
              Transform calls into{" "}
              <span className="font-serif relative inline-block">
                stories
                {/* Hand-drawn underline using the Primary (Terracotta) color */}
                <svg
                  className="absolute w-[110%] -bottom-2 md:-bottom-3 -left-1 text-primary"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.00025 7.00003C52.6186 2.05435 130.666 -3.07221 197.923 5.48003"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              that <br />
              convert.
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-lg font-sans pt-4">
              AI-driven generation turns customer interviews into powerful,
              marketing-ready case studies—in minutes, not weeks.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-6">
              {/* Primary Black Button (Secondary Variant) */}
              <Button
                onClick={openWaitlist}
                variant="secondary"
                size="lg"
                className="h-12 px-8 text-base rounded-lg shadow-lg hover:shadow-xl active:scale-[0.98] transition-transform"
              >
                Join the waitlist
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              {/* Secondary Link */}
              <Link
                href="/example"
                className="h-12 flex items-center px-4 text-base font-semibold text-foreground/80 hover:text-foreground transition-colors underline underline-offset-4 decoration-muted-foreground"
              >
                View a sample story
              </Link>
            </div>
          </div>

          {/* Right Column: Abstract Illustration */}
          <div
            className="hidden lg:flex justify-end items-center mt-12 lg:mt-0 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <OrganicNodes />
          </div>
        </div>

        {/* <div
          className="w-full bg-muted shadow-xl border border-border rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <div className="space-y-4">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              Casevia Core v2.0 Released
            </h3>
            <p className="text-lg text-foreground/70 max-w-md">
              Our new enterprise-grade model delivers 30% higher fact retention
              and perfect tone matching for complex technical narratives.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-border">
            <ListItem title="Read the full technical breakdown" />
            <ListItem title="View our new pricing tiers" />
            <ListItem title="Schedule a live demo" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

// ------------------------------------------------------------------
// Sub-components
// ------------------------------------------------------------------

const ListItem = ({ title }: { title: string }) => (
  <Link
    href="#"
    className="group flex items-center justify-between py-4 hover:bg-muted/50 -mx-4 px-4 rounded-md transition-colors"
  >
    <span className="text-lg font-medium text-foreground">{title}</span>
    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300" />
  </Link>
);

// The custom SVG component using the Charcoal and Primary (Terracotta) colors
const OrganicNodes = () => {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      {/* Abstract Stems (Charcoal stroke) */}
      <path
        d="M200 380C200 380 200 300 200 250C200 200 150 180 120 150"
        stroke="var(--foreground)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M200 250C200 200 250 180 280 150"
        stroke="var(--foreground)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M200 250C200 180 200 120 200 80"
        stroke="var(--foreground)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Organic Nodes (Primary Terracotta fill) */}
      <circle cx="120" cy="150" r="24" fill="currentColor" />
      <circle cx="280" cy="150" r="24" fill="currentColor" />
      <circle cx="200" cy="80" r="24" fill="currentColor" />
      <circle cx="200" cy="250" r="16" fill="currentColor" />

      {/* Hand/Base lines abstract */}
      <path
        d="M150 350C130 320 120 380 120 380"
        stroke="var(--foreground)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M250 350C270 320 280 380 280 380"
        stroke="var(--foreground)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};
