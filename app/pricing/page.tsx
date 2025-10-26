"use client";

import React, { useState } from "react";
import {
  Check,
  X,
  Info,
  ChevronRight,
  BarChart3,
  Users,
  Clock,
  Video,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import FooterSection from "@/components/footer";

// Assuming you import this from your provided plans.ts file
// Note: I'm using a placeholder type for PLANS here for completeness,
// but in your file, you'd use your actual import.
type Plan = {
  id: string;
  name: string;
  slug: string | null;
  price: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  limits: { [key: string]: any };
  cta: string;
  popular: boolean;
};
type PlanId = "free" | "freelancer" | "pro" | "agency";

// --- START: Re-using and refining your PLANS data ---
export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    slug: null,
    price: "$0",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Perfect for getting started",
    features: [
      "1 case study per month",
      "10 min max video length",
      "Basic custom tone",
      "1 team seat",
    ],
    limits: {
      caseStudies: 1,
      videoLength: 10,
      storage: 5,
      socialPosts: 0,
      teamSeats: 1,
      designTemplates: 1,
      noBranding: false,
      seoOptimization: false,
      fullCustomTone: false,
      fullAnalytics: false,
      prioritySupport: false,
      dedicatedManager: false,
    },
    cta: "Current Plan",
    popular: false,
  },
  {
    id: "freelancer",
    name: "Freelancer",
    slug: "starter",
    price: "$29",
    priceMonthly: 29,
    priceYearly: 290,
    description: "For independent professionals",
    features: [
      "5 case studies per month",
      "30 min max video length",
      "No Casevia branding",
      "3 design templates",
    ],
    limits: {
      caseStudies: 5,
      videoLength: 30,
      storage: 50,
      socialPosts: 1,
      teamSeats: 1,
      designTemplates: 3,
      noBranding: true,
      seoOptimization: false,
      fullCustomTone: false,
      fullAnalytics: false,
      prioritySupport: false,
      dedicatedManager: false,
    },
    cta: "Upgrade to Freelancer",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    slug: "pro",
    price: "$79",
    priceMonthly: 79,
    priceYearly: 790,
    description: "For growing teams",
    features: [
      "20 case studies per month",
      "60 min max video length",
      "SEO title/slug generation",
      "5 team seats",
      "Full analytics",
    ],
    limits: {
      caseStudies: 20,
      videoLength: 60,
      storage: 2048,
      socialPosts: 3,
      teamSeats: 5,
      designTemplates: 10,
      noBranding: true,
      seoOptimization: true,
      fullCustomTone: true,
      fullAnalytics: true,
      prioritySupport: true,
      dedicatedManager: false,
    },
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    id: "agency",
    name: "Agency",
    slug: "agency",
    price: "Custom",
    priceMonthly: 149,
    priceYearly: 1490,
    description: "For agencies and larger teams",
    features: [
      "50 case studies per month",
      "Unlimited team seats",
      "High-priority processing",
      "Dedicated account manager",
    ],
    limits: {
      caseStudies: 50,
      videoLength: 120,
      storage: 5120,
      socialPosts: -1,
      teamSeats: -1,
      designTemplates: 10,
      noBranding: true,
      seoOptimization: true,
      fullCustomTone: true,
      fullAnalytics: true,
      prioritySupport: true,
      dedicatedManager: true,
    },
    cta: "Contact Sales",
    popular: false,
  },
] as const;
// --- END: Re-using and refining your PLANS data ---

// Helper function to format storage from MB
const formatStorage = (mb: number): string => {
  if (mb === -1) return "Unlimited";
  if (mb >= 1024 && mb % 1024 === 0) {
    const gb = mb / 1024;
    return `${gb} GB`;
  }
  return `${mb} MB`;
};

// --- Comparator Feature List organized by category ---
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

// Component to render the value or an icon based on the limit
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
      <Check className="h-5 w-5 text-primary mx-auto" />
    ) : (
      <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
    );
  }

  // Handle numerical limits
  if (limit === -1) return "Unlimited";

  if (feature.key === "storage") {
    return (
      <span className="text-foreground">{formatStorage(limit as number)}</span>
    );
  }

  // Custom display for "Agency" contact sales plan
  if (plan.id === "agency" && feature.key === "caseStudies") {
    return <span className="font-semibold text-primary">50+</span>;
  }

  return (
    <span className="text-foreground">
      {limit} {feature.unit}
    </span>
  );
};

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const getPrice = (plan: Plan) => {
    return billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;
  };

  const ctaLinks: Record<PlanId, string> = {
    free: "/dashboard",
    freelancer: "/checkout?plan=freelancer",
    pro: "/checkout?plan=pro",
    agency: "/contact-sales",
  };

  // Calculate discount for yearly billing for display
  const monthlyPlans = PLANS.filter(
    (p) => p.id !== "free" && p.id !== "agency"
  );
  const discount = Math.round(
    (1 - monthlyPlans[0].priceYearly / 12 / monthlyPlans[0].priceMonthly) * 100
  );

  return (
    <>
      <section className="container py-16 md:py-24 border-x">
        <div className="mx-auto max-w-7xl px-4">
          {/* Header and Toggle */}
          <div className="text-center mb-16">
            <p className="text-base text-primary font-semibold mb-3">
              From zero to scale
            </p>
            <h1 className="text-balance text-4xl font-semibold lg:text-5xl">
              Designed for every stage of your growth.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6">
              Start free, upgrade when you're ready to automate your content
              engine. No credit card required to start.
            </p>

            {/* Pricing Toggle (Similar to Attio style) */}
            <div className="inline-flex items-center space-x-2 p-1 bg-white shadow rounded-full mt-8">
              <Button
                variant={billingCycle === "monthly" ? "default" : "ghost"}
                onClick={() => setBillingCycle("monthly")}
                className="rounded-full px-6 py-2 transition-colors duration-200"
              >
                Monthly
              </Button>
              <Button
                variant={billingCycle === "yearly" ? "default" : "ghost"}
                onClick={() => setBillingCycle("yearly")}
                className="rounded-full px-6 py-2 transition-colors duration-200 relative"
              >
                Annual
                <span className="absolute -top-3 right-0 bg-primary text-primary-foreground text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
                  Save {discount}%
                </span>
              </Button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan) => {
              const isPopular = plan.popular;
              const price = getPrice(plan);
              const isContactSales = plan.id === "agency";

              return (
                <Card
                  key={plan.id}
                  className={`flex flex-col h-full transition-shadow duration-300 ${
                    isPopular
                      ? "shadow-2xl ring-primary border-primary"
                      : "shadow-md"
                  }`}
                >
                  <CardHeader className="p-6 pb-4 relative">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      {isPopular && (
                        <div className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                          Popular
                        </div>
                      )}
                    </div>

                    <p className="text-muted-foreground mt-1 text-sm min-h-[40px]">
                      {plan.description}
                    </p>

                    <p className="mt-4">
                      <span className="text-5xl font-extrabold tracking-tight">
                        {isContactSales ? plan.price : `$${price}`}
                      </span>
                      {!isContactSales && price > 0 && (
                        <span className="text-base font-medium text-muted-foreground">
                          /{billingCycle === "monthly" ? "mo" : "yr"}
                        </span>
                      )}
                    </p>
                    <Separator className="mt-4" />
                  </CardHeader>

                  <CardContent className="flex-1 p-6 space-y-4">
                    <ul className="space-y-3 text-sm">
                      {plan.features.slice(0, 4).map(
                        (
                          feature,
                          index // Show top 4 features
                        ) => (
                          <li
                            key={index}
                            className="flex items-center text-foreground"
                          >
                            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        )
                      )}
                      <li className="text-primary font-medium mt-2">
                        + All features below in the comparison table
                      </li>
                    </ul>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Button
                      asChild
                      className="w-full"
                      variant={isPopular ? "default" : "outline"}
                    >
                      <Link href={ctaLinks[plan.id as PlanId]}>
                        {plan.cta}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* --- Comparator Table Section --- */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-12">
              Detailed Feature Comparison
            </h2>
            <div className="overflow-x-auto rounded-lg border">
              <table className="min-w-full divide-y divide-border">
                {/* Table Header - Plan Names */}
                <thead>
                  <tr className="divide-x divide-border bg-muted/50">
                    <th className="py-4 px-6 text-left text-sm font-semibold text-foreground w-1/4">
                      Features
                    </th>
                    {PLANS.map((plan) => (
                      <th
                        key={plan.id}
                        className="py-4 px-6 text-center text-sm font-semibold text-foreground"
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Table Body - Features Grouped by Category */}
                <tbody className="divide-y divide-border">
                  {COMPARATOR_CATEGORIES.map((category) => (
                    <React.Fragment key={category.name}>
                      {/* Category Divider */}
                      <tr>
                        <td
                          colSpan={PLANS.length + 1}
                          className="bg-muted/70 py-3 px-6 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground"
                        >
                          {category.name}
                        </td>
                      </tr>

                      {/* Features within Category */}
                      {category.features.map((feature) => (
                        <tr
                          key={feature.key}
                          className="divide-x divide-border hover:bg-muted/20"
                        >
                          {/* Feature Name */}
                          <td className="py-4 px-6 text-sm font-medium text-foreground">
                            {feature.label}
                          </td>

                          {/* Feature Values (across all plans) */}
                          {PLANS.map((plan) => (
                            <td
                              key={plan.id}
                              className="py-4 px-6 text-center text-sm text-muted-foreground"
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

            {/* Bottom CTA for Enterprise */}
            <div className="flex justify-center mt-10">
              <Button asChild variant="secondary" className="px-8 py-6 text-lg">
                <Link href="/contact-sales">
                  Need a custom plan for 50+ users? Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>{" "}
      </section>
      <FooterSection />
    </>
  );
}
