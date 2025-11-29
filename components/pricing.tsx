// components/pricing/Pricing.tsx
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
// Assuming Button component is available from shadcn/ui
import { Button } from "@/components/ui/button";
// Assuming PLANS is correctly imported from "@/lib/plans"
import { PLANS } from "@/lib/plans";

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-16 md:py-32 bg-background border-t border-border"
    >
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-sans">
            Start for free, upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards - Applying rounded-xl and using grid structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-border bg-card shadow-lg mx-auto max-w-full lg:max-w-none rounded-xl overflow-hidden">
          {PLANS.map((plan, i) => (
            <div
              key={plan.id}
              className={`flex flex-col p-8 border-b md:border-b-0 relative transition-all duration-300 z-0 ${
                // Set z-10 for the popular plan to ensure clean layering
                plan.popular ? "z-10" : ""
              } ${
                // Right border only on non-last elements
                i < PLANS.length - 1 ? "md:border-r border-border" : ""
              } ${
                // Highlight: Use bg-muted for the popular card background
                plan.popular ? "bg-muted shadow-xl" : "bg-card"
              }`}
            >
              {/* Plan Header & Price */}
              <div className="mb-8 mt-2">
                <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                  {plan.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 h-4 font-sans">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-serif font-bold text-foreground tracking-tight">
                    {plan.price}
                  </span>
                  {plan.price !== "$0" && (
                    <span className="text-muted-foreground text-base">/mo</span>
                  )}
                </div>

                <div className="text-[10px] text-muted-foreground mt-2 font-mono uppercase tracking-wide">
                  Billed monthly
                </div>
              </div>

              {/* CTA Button using shadcn Button component */}
              <Button
                variant={plan.popular ? "secondary" : "outline"}
                size="lg" // Larger size for prominence
                className="w-full text-sm mb-8 "
              >
                {plan.cta}
              </Button>

              {/* Features List */}
              <ul className="space-y-4 flex-1 text-sm text-foreground/80 leading-relaxed font-sans">
                {/* Limit features to a maximum of 4 for clean comparison */}
                {plan.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <Check
                      size={16}
                      className="flex-shrink-0 text-primary mt-0.5"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full Pricing CTA */}
        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="inline-flex items-center text-foreground font-semibold text-base group hover:text-primary transition-colors font-sans"
          >
            View full detailed plans
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
