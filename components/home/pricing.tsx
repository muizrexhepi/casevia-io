"use client";
import React, { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { PLANS } from "@/lib/plans";

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  return (
    <section className="w-full bg-charcoal text-cream selection:bg-terracotta selection:text-white px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto section-spacing border-t border-white/5">
        {/* Header - h2 and p styled automatically */}
        <div className="section-header-gap flex flex-col gap-5 sm:gap-6 md:gap-7">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
            <h2 className="text-white max-w-2xl">
              Predictable costs,{" "}
              <span className="font-normal">uncapped ROI</span>
            </h2>

            {/* Billing Toggle */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm self-start md:self-end">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 md:px-6 py-2.5 rounded-full text-sm font-sans font-semibold transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                Monthly
              </button>

              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-5 md:px-6 py-2.5 rounded-full text-sm font-sans font-semibold flex items-center gap-2 transition-all duration-300 ${
                  billingCycle === "yearly"
                    ? "bg-terracotta text-white shadow-lg shadow-terracotta/20"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                Yearly
                <span className="hidden sm:inline-block text-[10px] bg-black/20 px-1.5 py-0.5 rounded uppercase tracking-wide font-bold">
                  Save 17%
                </span>
              </button>
            </div>
          </div>

          <p className="text-white/60 max-w-xl text-base sm:text-lg">
            Replace expensive agency retainers with a fixed monthly pipeline.
            Pause or cancel anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {PLANS.map((plan) => {
            const displayPrice =
              plan.id === "starter"
                ? 0
                : billingCycle === "yearly"
                  ? Math.round(plan.priceYearly / 12)
                  : plan.priceMonthly;

            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                // Glassmorphism approach: Subtle fills, delicate borders
                className={`relative flex flex-col p-6 rounded-3xl border transition-all duration-300 ${
                  isPopular
                    ? "bg-white/[0.04] border-terracotta/40"
                    : "bg-transparent border-white/[0.06] hover:bg-white/[0.02] hover:border-white/10"
                }`}
              >
                {/* Popular Badge - Clean, floating on border */}
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-white bg-terracotta px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest z-10">
                    <Sparkles className="w-3 h-3 fill-current" />
                    Popular
                  </div>
                )}

                <div className="mb-6 space-y-2">
                  <h4 className="text-white text-lg font-medium">
                    {plan.name}
                  </h4>
                  <p className="text-white/50 text-[15px] leading-snug min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-5xl text-white">
                      ${displayPrice}
                    </span>
                    {plan.id !== "starter" && (
                      <span className="text-white/40 text-sm">/mo</span>
                    )}
                  </div>

                  <div className="h-5 mt-2">
                    {plan.id !== "starter" && (
                      <span className="text-[11px] text-white/30 uppercase tracking-widest font-medium">
                        {billingCycle === "yearly"
                          ? "Billed Yearly"
                          : "Billed Monthly"}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3.5 rounded-xl font-sans text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 mb-8 ${
                    isPopular
                      ? "bg-terracotta text-white hover:bg-[#E08A60]"
                      : "bg-white/[0.05] text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {plan.cta}
                  {plan.id !== "agency" && <ArrowRight className="w-4 h-4" />}
                </button>

                {/* Features List */}
                <div className="flex-grow">
                  <label className="text-white/20 mb-5 block text-[10px] uppercase tracking-widest font-bold">
                    Includes
                  </label>
                  <div className="space-y-4">
                    {plan.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center border transition-colors duration-300 ${
                            isPopular
                              ? "border-terracotta/40 bg-terracotta/10 text-terracotta"
                              : "border-white/10 text-white/30"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-[14px] text-white/70 font-sans leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 sm:mt-12 md:mt-16 flex justify-center">
          <a
            href="/pricing"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
          >
            <small className="text-white/70 group-hover:text-white font-medium transition-colors">
              Compare all features & limits
            </small>
            <ArrowRight className="w-4 h-4 text-terracotta group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
