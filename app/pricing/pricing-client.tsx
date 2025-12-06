"use client";

import React, { useState } from "react";
import { Check, X, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plan, PlanId, PLANS } from "@/lib/plans";

const formatStorage = (mb: number): string => {
  if (mb === -1) return "Unlimited";
  if (mb >= 1024) {
    const gb = Math.round((mb / 1024) * 10) / 10;
    return `${gb} GB`;
  }
  return `${mb} MB`;
};

const COMPARATOR_CATEGORIES = [
  {
    name: "Core Usage",
    features: [
      { key: "caseStudies", label: "Case Studies Limit", unit: "per month" },
      { key: "videoLength", label: "Max Video Length", unit: "minutes" },
      { key: "storage", label: "Total Cloud Storage", unit: "" },
    ],
  },
  {
    name: "Collaboration & Exports",
    features: [
      { key: "teamSeats", label: "Team Seats Included", unit: "" },
      { key: "designTemplates", label: "Design Templates", unit: "" },
      { key: "socialPosts", label: "Social Posts per Case Study", unit: "" },
      {
        key: "noBranding",
        label: "No Casevia Branding/Watermark",
        boolean: true,
      },
    ],
  },
  {
    name: "Advanced Features & Support",
    features: [
      {
        key: "seoOptimization",
        label: "SEO Title/Slug Generation",
        boolean: true,
      },
      {
        key: "fullCustomTone",
        label: "Full Custom Tone & Persona",
        boolean: true,
      },
      {
        key: "fullAnalytics",
        label: "Full Analytics Dashboard",
        boolean: true,
      },
      {
        key: "prioritySupport",
        label: "Priority Support (4h SLA)",
        boolean: true,
      },
      {
        key: "dedicatedManager",
        label: "Dedicated Account Manager",
        boolean: true,
      },
    ],
  },
];

type BillingCycle = "monthly" | "yearly";

const PlanValue = ({
  plan,
  feature,
}: {
  plan: Plan;
  feature: (typeof COMPARATOR_CATEGORIES)[0]["features"][0];
}) => {
  const limit = (plan.limits as any)[feature.key];

  if (feature.boolean) {
    return limit ? (
      <Check className="h-5 w-5 text-terracotta mx-auto md:mx-0" />
    ) : (
      <X className="h-5 w-5 text-charcoal/20 mx-auto md:mx-0" />
    );
  }

  if (limit === -1)
    return <span className="text-charcoal font-medium">Unlimited</span>;

  if (feature.key === "storage") {
    return (
      <span className="text-charcoal font-medium">
        {formatStorage(limit as number)}
      </span>
    );
  }

  return (
    <span className="text-charcoal font-medium">
      {limit} {feature.unit}
    </span>
  );
};

export default function PricingClient() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("yearly");

  // Fixed pricing logic
  const getPrice = (plan: Plan) => {
    if (plan.id === "starter") return 0;

    if (billingCycle === "monthly") {
      return plan.priceMonthly;
    } else {
      // Return monthly equivalent for yearly billing (Yearly / 12)
      return Math.round(plan.priceYearly / 12);
    }
  };

  const ctaLinks: Record<PlanId, string> = {
    starter: "/dashboard",
    freelancer: "/checkout?plan=starter",
    pro: "/checkout?plan=pro",
    agency: "/contact-sales",
  };

  return (
    <section className="w-full bg-cream text-charcoal selection:bg-terracotta selection:text-white px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto py-16 pt-32 md:py-32 border-t border-charcoal/5">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-8 mb-20">
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal leading-[0.9] tracking-tight max-w-4xl">
            Simple pricing that <br />
            <span className="">scales with you.</span>
          </h1>
          {/* Billing Toggle */}
          <div className="flex items-center gap-1 bg-white p-1.5 rounded-full border border-charcoal/10 shadow-lg shadow-charcoal/5 mt-4">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-3 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-charcoal text-white shadow-md"
                  : "text-charcoal/50 hover:text-charcoal"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-8 py-3 rounded-full text-sm font-sans font-medium transition-all duration-300 flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "bg-terracotta text-white shadow-md"
                  : "text-charcoal/50 hover:text-charcoal"
              }`}
            >
              Yearly
              <span className="hidden sm:inline-block text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded uppercase tracking-wide font-bold">
                -17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-24">
          {PLANS.map((plan) => {
            const isPopular = plan.popular;
            const price = getPrice(plan); // Now returns monthly equivalent
            const isContactSales = plan.id === "agency";
            const isFree = plan.id === "starter";

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 group ${
                  isPopular
                    ? "bg-white shadow-xl shadow-terracotta/10 border-terracotta/20 ring-1 ring-terracotta/10" // Maintained high contrast for popular
                    : "bg-white border-charcoal/10 hover:border-charcoal/20 shadow-md shadow-charcoal/5" // <-- CHANGED: Used bg-white and stronger shadow/border for standard cards
                }`}
              >
                {isPopular && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 text-terracotta text-[10px] font-bold uppercase tracking-widest bg-terracotta/10 px-2 py-1 rounded">
                    <Sparkles className="w-3 h-3 fill-current" />
                    Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-serif text-2xl text-charcoal mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-sans text-sm text-charcoal/60 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-5xl text-charcoal tracking-tight">
                      {`$${price}`}
                    </span>
                    {!isFree && (
                      <span className="font-sans text-charcoal/50 text-sm">
                        /mo
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-charcoal/50 mt-1 font-sans h-5 flex items-center">
                    {billingCycle === "yearly" && !isFree
                      ? `Billed $${plan.priceYearly} yearly`
                      : !isFree
                        ? "Billed monthly"
                        : "\u00A0"}
                  </p>
                </div>

                <Link
                  href={ctaLinks[plan.id as PlanId]}
                  className={`w-full py-3.5 rounded-lg font-sans text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 mb-8 ${
                    isPopular
                      ? "bg-terracotta text-white hover:bg-terracotta/90 shadow-md shadow-terracotta/20"
                      : "bg-charcoal text-white hover:bg-charcoal/90 border border-charcoal/10" // <-- CHANGED: CTA for non-popular changed to black for better contrast against the new white card background
                  }`}
                >
                  {plan.cta}
                  {!isContactSales && <ArrowRight className="w-4 h-4" />}
                </Link>

                <div className="flex-grow space-y-3.5">
                  <p className="text-xs font-semibold text-charcoal/40 uppercase tracking-widest mb-4">
                    Includes
                  </p>
                  {plan.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center border ${
                          isPopular
                            ? "border-terracotta/50 bg-terracotta/10 text-terracotta"
                            : "border-charcoal/10 text-charcoal/40 group-hover:text-terracotta group-hover:border-terracotta/30"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-sm text-charcoal/70 font-sans leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Comparison Table */}
        <div className="py-12">
          {/* Mobile View (Stacked) */}
          <div className="block lg:hidden space-y-8">
            {COMPARATOR_CATEGORIES.map((category) => (
              <div key={category.name} className="space-y-4">
                <h3 className="text-xs font-semibold text-charcoal/50 uppercase tracking-widest pl-1">
                  {category.name}
                </h3>
                {category.features.map((feature) => (
                  <div
                    key={feature.key}
                    className="bg-white rounded-xl border border-charcoal/5 overflow-hidden" // <-- CHANGED: Used bg-white for mobile table sections
                  >
                    <div className="bg-charcoal/5 py-3 px-4 text-xs font-medium text-charcoal/70 border-b border-charcoal/5">
                      {feature.label}
                    </div>
                    <div className="divide-y divide-charcoal/5">
                      {PLANS.map((plan) => (
                        <div
                          key={plan.id}
                          className="flex items-center justify-between px-4 py-3"
                        >
                          <span className="text-sm font-medium text-charcoal">
                            {plan.name}
                          </span>
                          <div className="text-sm">
                            <PlanValue plan={plan} feature={feature} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Desktop View (Table) */}
          <div className="hidden lg:block relative">
            <table className="w-full">
              <thead className="sticky top-0 z-20 bg-cream">
                <tr className="">
                  <th className="py-6 px-6 text-left text-sm font-medium text-charcoal/40 w-1/4">
                    {/* Empty top-left cell */}
                  </th>
                  {PLANS.map((plan) => (
                    <th
                      key={plan.id}
                      className="py-6 px-6 text-left align-bottom"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-xl text-charcoal">
                            {plan.name}
                          </span>
                          {plan.popular && (
                            <span className="text-[10px] bg-terracotta/10 text-terracotta px-1.5 py-0.5 rounded border border-terracotta/20">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="font-sans text-2xl text-charcoal font-semibold">
                            {plan.id === "agency"
                              ? plan.price
                              : `$${getPrice(plan)}`}
                          </span>
                          {plan.id !== "agency" && plan.id !== "starter" && (
                            <span className="text-xs text-charcoal/50">
                              /mo
                            </span>
                          )}
                        </div>
                        <Button
                          asChild
                          variant={plan.popular ? "default" : "outline"}
                          className={`w-full mt-2 h-9 text-xs font-medium ${
                            plan.popular
                              ? "bg-terracotta text-white hover:bg-terracotta/90"
                              : "bg-charcoal text-white hover:bg-charcoal/90" // <-- CHANGED: CTA background to black
                          }`}
                        >
                          <Link href={ctaLinks[plan.id as PlanId]}>
                            {plan.cta}
                          </Link>
                        </Button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-charcoal/5">
                {COMPARATOR_CATEGORIES.map((category) => (
                  <React.Fragment key={category.name}>
                    {/* Category Header Row */}
                    <tr className="bg-charcoal/[0.02]">
                      <td
                        colSpan={PLANS.length + 1}
                        className="py-4 px-6 text-xs font-bold uppercase tracking-widest text-charcoal/50 pt-8"
                      >
                        {category.name}
                      </td>
                    </tr>
                    {/* Feature Rows */}
                    {category.features.map((feature) => (
                      <tr
                        key={feature.key}
                        className="hover:bg-charcoal/[0.02] transition-colors group"
                      >
                        <td className="py-4 px-6 text-sm text-charcoal/70 font-medium group-hover:text-charcoal transition-colors">
                          {feature.label}
                        </td>
                        {PLANS.map((plan) => (
                          <td
                            key={plan.id}
                            className="py-4 px-6 text-sm text-charcoal/80"
                          >
                            <PlanValue plan={plan} feature={feature} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="py-12 text-center">
          <h3 className="text-2xl font-serif text-charcoal mb-4">
            Still have questions?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-charcoal text-white hover:bg-charcoal/90 rounded-full px-8"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Talk to Sales
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
