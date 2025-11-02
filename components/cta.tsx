"use client";

import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />

      {/* Simple organic blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 rounded-full blur-3xl" />

      <div className="container max-w-4xl mx-auto text-center relative z-10 px-4">
        {/* Simple headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
          Ready to create better case studies?
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Join teams turning customer interviews into compelling stories — in
          minutes, not weeks.
        </p>

        {/* Single CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            <span className="flex items-center gap-2">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button className="px-8 py-4 text-foreground font-semibold text-lg transition-all duration-200 hover:text-primary">
            See an example →
          </button>
        </div>

        {/* Trust line */}
        <p className="text-sm text-muted-foreground">No credit card required</p>
      </div>
    </section>
  );
}
