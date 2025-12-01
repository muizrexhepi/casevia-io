import React, { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const PLANS = [
  {
    id: "free",
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Perfect for getting started.",
    features: [
      "1 case study per month",
      "10 min max interview length",
      "5 MB storage",
      "AI narrative extraction",
      // Hidden in teaser: "Basic writing tone", "1 team seat", "Email support (48h)"
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "freelancer",
    name: "Freelancer",
    priceMonthly: 29,
    priceYearly: 290,
    description: "Built for independent professionals.",
    features: [
      "5 case studies per month",
      "30 min max interview length",
      "50 MB storage",
      "No Casevia branding",
      // Hidden in teaser: "1 social post per case study", "Advanced writing tone", "3 design templates", "1 team seat"
    ],
    cta: "Upgrade to Freelancer",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 79,
    priceYearly: 790,
    description: "For growing teams handling more volume.",
    features: [
      "20 case studies per month",
      "60 min max interview length",
      "SEO title & slug suggestions",
      "Full tone + persona customization",
      // Hidden in teaser: "2 GB storage", "3 social posts", "No branding", "10 templates", "5 seats", "Analytics", "Priority support"
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    id: "agency",
    name: "Agency",
    priceMonthly: 149,
    priceYearly: 1490,
    description: "For agencies and larger content teams.",
    features: [
      "50 case studies per month",
      "120 min max interview length",
      "Unlimited team seats",
      "Dedicated account manager",
      // Hidden in teaser: "5 GB storage", "Unlimited social posts", "API Access", "High-priority processing"
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  return (
    <section className="w-full bg-charcoal text-cream selection:bg-terracotta selection:text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto py-24 border-t border-white/5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-white/40">
                Membership
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-[0.9] tracking-tight">
              Predictable costs, <br />
              <span className="italic text-white/50 font-light">
                uncapped ROI.
              </span>
            </h2>
            <p className="font-sans text-lg text-white/60 font-light max-w-lg">
              Replace expensive agency retainers with a fixed monthly pipeline.
              Pause or cancel anytime.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm self-start md:self-end">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300 ${billingCycle === "monthly" ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2.5 rounded-full text-sm font-sans font-medium transition-all duration-300 flex items-center gap-2 ${billingCycle === "yearly" ? "bg-terracotta text-white shadow-sm" : "text-white/40 hover:text-white"}`}
            >
              Yearly
              <span className="hidden sm:inline-block text-[10px] bg-black/20 px-1.5 py-0.5 rounded uppercase tracking-wide opacity-80">
                2 Months Free
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {PLANS.map((plan) => {
            // Calculate display price
            const displayPrice =
              plan.id === "free"
                ? 0
                : billingCycle === "yearly"
                  ? Math.round(plan.priceYearly / 12)
                  : plan.priceMonthly;

            // Calculate Billing Note logic
            let billingNote = "\u00A0";
            if (plan.id !== "free") {
              if (billingCycle === "yearly") {
                billingNote = `Billed $${plan.priceYearly} yearly`;
              } else {
                billingNote = "Billed monthly";
              }
            }

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 group ${plan.popular ? "bg-white/5 border-terracotta/50 ring-1 ring-terracotta/20" : "bg-transparent border-white/5 hover:border-white/10"}`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 text-terracotta text-[10px] font-bold uppercase tracking-widest bg-terracotta/10 px-2 py-1 rounded">
                    <Sparkles className="w-3 h-3 fill-current" />
                    Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-5xl text-white tracking-tight">
                      ${displayPrice}
                    </span>
                    <span className="font-sans text-white/40 text-sm">
                      {plan.id !== "free" ? "/mo" : ""}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 mt-1 font-sans h-5 flex items-center">
                    {billingNote}
                  </p>
                </div>

                <button
                  className={`w-full py-3.5 rounded-lg font-sans text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 mb-8 ${plan.popular ? "bg-terracotta text-white hover:bg-terracotta/90 shadow-lg shadow-terracotta/20" : "bg-white/5 text-white hover:bg-white/10 border border-white/5"}`}
                >
                  {plan.cta}
                  {plan.id !== "agency" && <ArrowRight className="w-4 h-4" />}
                </button>

                <div className="flex-grow space-y-3.5">
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
                    Includes
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center border ${plan.popular ? "border-terracotta/50 bg-terracotta/10 text-terracotta" : "border-white/10 text-white/30 group-hover:text-white/60 group-hover:border-white/20"}`}
                      >
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-sm text-white/70 font-sans leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Pricing Link */}
        <div className="mt-16 flex justify-center">
          <a
            href="/pricing"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <span className="font-sans text-sm text-white/80 group-hover:text-white font-medium">
              Compare all features & limits
            </span>
            <ArrowRight className="w-4 h-4 text-terracotta group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
