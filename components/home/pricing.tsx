import React, { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { PLANS } from "@/lib/plans";

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
          <div className="flex items-center gap-4 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm self-start md:self-end">
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
            const displayPrice =
              plan.id === "free"
                ? 0
                : billingCycle === "yearly"
                  ? Math.round(plan.priceYearly / 12)
                  : plan.priceMonthly;

            return (
              <PricingCard
                key={plan.id}
                tier={plan.name}
                price={`$${displayPrice}`}
                period={plan.id === "free" ? "" : "/mo"}
                billingNote={
                  billingCycle === "yearly" && plan.id !== "free"
                    ? "billed yearly"
                    : ""
                }
                description={plan.description}
                features={[...plan.features]}
                ctaText={plan.cta}
                isPopular={plan.popular}
                isAgency={plan.id === "agency"}
              />
            );
          })}
        </div>

        {/* Trust/FAQ strip */}
        <div className="mt-24 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-xl text-white">Secure by design</h4>
            <p className="font-sans text-sm text-white/40 leading-relaxed">
              SOC-2 compliant infrastructure ensures your sensitive interviews
              remain private and encrypted.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-xl text-white">Rollover credits</h4>
            <p className="font-sans text-sm text-white/40 leading-relaxed">
              Unused credits roll over for up to 3 months. You can pause your
              subscription anytime.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-xl text-white">Human-in-the-loop</h4>
            <p className="font-sans text-sm text-white/40 leading-relaxed">
              Optional expert review layer available for enterprise plans to
              ensure perfect accuracy.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-xl text-white">100% Satisfaction</h4>
            <p className="font-sans text-sm text-white/40 leading-relaxed">
              If the story doesn't sell, we rewrite it for free. No questions
              asked, just results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  tier: string;
  price: string;
  period: string;
  billingNote: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  isAgency?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  price,
  period,
  billingNote,
  description,
  features,
  ctaText,
  isPopular,
  isAgency,
}) => {
  return (
    <div
      className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 group ${isPopular ? "bg-white/5 border-terracotta/50 ring-1 ring-terracotta/20" : "bg-transparent border-white/5 hover:border-white/10"}`}
    >
      {/* {isPopular && (
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-terracotta/50 to-terracotta rounded-t-2xl"></div>
      )} */}

      {isPopular && (
        <div className="absolute top-4 right-4 flex items-center gap-1.5 text-terracotta text-[10px] font-bold uppercase tracking-widest bg-terracotta/10 px-2 py-1 rounded">
          <Sparkles className="w-3 h-3 fill-current" />
          Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-serif text-2xl text-white mb-2">{tier}</h3>
        <p className="font-sans text-sm text-white/50 leading-relaxed min-h-[40px]">
          {description}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="font-serif text-5xl text-white tracking-tight">
            {price}
          </span>
          <span className="font-sans text-white/40 text-sm">{period}</span>
          {billingNote && (
            <p className="text-xs text-white/30 mt-1 font-sans">
              {billingNote}
            </p>
          )}
        </div>
      </div>

      <button
        className={`w-full py-3.5 rounded-lg font-sans text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 mb-8 ${isPopular ? "bg-terracotta text-white hover:bg-terracotta/90 shadow-lg shadow-terracotta/20" : "bg-white/5 text-white hover:bg-white/10 border border-white/5"}`}
      >
        {ctaText}
        {!isAgency && <ArrowRight className="w-4 h-4" />}
      </button>

      <div className="flex-grow space-y-3.5">
        <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
          Features
        </p>
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div
              className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center border ${isPopular ? "border-terracotta/50 bg-terracotta/10 text-terracotta" : "border-white/10 text-white/30 group-hover:text-white/60 group-hover:border-white/20"}`}
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
};

export default Pricing;
