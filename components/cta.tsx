"use client";

import { Zap, Shield, Sparkles } from "lucide-react";
import { WaitlistForm } from "./emails/waitlist-form";

const TRUST_ITEMS = [
  { icon: Zap, text: "No credit card required" },
  { icon: Shield, text: "SOC 2 Type II compliant" },
  { icon: Sparkles, text: "Free for first 10 case studies" },
];

export default function CTASection() {
  return (
    <section className="relative bg-background py-12 md:py-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container max-w-3xl relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-sm font-medium text-orange-600">
            <Sparkles className="h-3.5 w-3.5" />
            Join the waitlist
          </div>

          {/* Headline - simple, bold, no gradients */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
              Ready to ship better
              <br />
              <span className="text-gradient-primary">case studies?</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Join early adopters creating authentic, traceable customer stories
              in minutes.
            </p>
          </div>

          {/* Form - clean and centered */}
          <div className="max-w-md mx-auto pt-4">
            <WaitlistForm />
          </div>

          {/* Trust indicators - minimal */}
          {/* <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-2">
            {TRUST_ITEMS.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <item.icon className="h-4 w-4 text-orange-500/70" />
                <span>{item.text}</span>
              </div>
            ))}
          </div> */}

          {/* Social proof - understated */}
          {/* <p className="text-sm text-muted-foreground/80 pt-6">
            Trusted by teams at{" "}
            <span className="text-foreground">YC startups</span>,{" "}
            <span className="text-foreground">Series A companies</span>, and{" "}
            <span className="text-foreground">agencies</span>
          </p> */}
        </div>
      </div>
    </section>
  );
}
