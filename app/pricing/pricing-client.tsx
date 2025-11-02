"use client";

import React, { useState } from "react";
import { Check, X, ChevronRight } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";

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
type PlanId = "free" | "starter" | "pro" | "agency";

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
    cta: "Get Started",
    popular: false,
  },
  {
    id: "starter",
    name: "Starter",
    slug: "starter",
    price: "$29",
    priceMonthly: 29,
    priceYearly: 24, // $288/year ÷ 12 months
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
    cta: "Upgrade to Starter",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    slug: "pro",
    price: "$79",
    priceMonthly: 79,
    priceYearly: 66, // $792/year ÷ 12 months
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
    priceYearly: 124, // $1,488/year ÷ 12 months
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

const formatStorage = (mb: number): string => {
  if (mb === -1) return "Unlimited";
  if (mb >= 1024 && mb % 1024 === 0) {
    const gb = mb / 1024;
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
      <Check className="h-5 w-5 text-primary" />
    ) : (
      <X className="h-5 w-5 text-muted-foreground/30" />
    );
  }

  if (limit === -1) return <span className="text-foreground">Unlimited</span>;

  if (feature.key === "storage") {
    return (
      <span className="text-foreground">{formatStorage(limit as number)}</span>
    );
  }

  if (plan.id === "agency" && feature.key === "caseStudies") {
    return <span className="font-medium text-foreground">50+</span>;
  }

  return (
    <span className="text-foreground">
      {limit} {feature.unit}
    </span>
  );
};

export default function PricingClient() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const getPrice = (plan: Plan) => {
    return billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;
  };

  const ctaLinks: Record<PlanId, string> = {
    free: "/dashboard",
    starter: "/checkout?plan=starter",
    pro: "/checkout?plan=pro",
    agency: "/contact-sales",
  };

  return (
    <section className="max-w-6xl mx-auto container">
      <div className="text-center space-y-5 py-12 md:py-24">
        <h2 className="text-4xl md:text-5xl tracking-tight leading-[1] text-balance text-center">
          Designed for every <br /> stage of{" "}
          <span className="text-gradient-primary">your growth.</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-lg mx-auto">
          Start free, upgrade when you're ready to automate your content engine.
          No credit card required to start.
        </p>

        <div className="inline-flex items-center space-x-2 p-1 bg-muted shadow rounded-lg">
          <Button
            variant={billingCycle === "monthly" ? "default" : "ghost"}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </Button>
          <Button
            variant={billingCycle === "yearly" ? "default" : "ghost"}
            onClick={() => setBillingCycle("yearly")}
          >
            Annual
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 bg-muted p-2 rounded-xl">
        {PLANS.map((plan) => {
          const isPopular = plan.popular;
          const price = getPrice(plan);
          const isContactSales = plan.id === "agency";

          return (
            <Card
              key={plan.id}
              className={`flex flex-col bg-background shadow-sm h-full transition-shadow duration-300 ${
                isPopular ? "bg-white border-primary/40 shadow-primary" : ""
              }`}
            >
              <CardHeader className="pb-4 relative">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-medium">{plan.name}</h3>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-medium tracking-tight">
                      {isContactSales ? plan.price : `$${Math.round(price)}`}
                    </span>
                    {!isContactSales && price !== 0 && (
                      <span className="text-muted-foreground text-sm">
                        /month
                      </span>
                    )}
                  </div>
                  {billingCycle === "yearly" &&
                    !isContactSales &&
                    price !== 0 && (
                      <Badge
                        variant={"outline"}
                        className="text-xs px-2 py-0.5 bg-primary/10 text-primary border-primary/30"
                      >
                        Save 17%
                      </Badge>
                    )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {billingCycle === "monthly"
                    ? "Billed monthly"
                    : "Billed annually"}
                </p>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                <p className="font-medium text-sm">{plan.description}</p>
                <ul className="space-y-3 text-sm">
                  {plan.features.slice(0, 4).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-foreground"
                    >
                      <Check className="h-4 w-4 text-primary mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="">
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

      {/* Comparator Table Section */}
      <div className="pt-12 lg:pt-24">
        <div className="block lg:hidden space-y-6">
          {COMPARATOR_CATEGORIES.map((category) => (
            <div key={category.name} className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">
                {category.name}
              </h3>
              {category.features.map((feature) => (
                <div key={feature.key} className="border-y">
                  <div className="bg-muted/50 py-2.5 text-xs font-medium text-muted-foreground border-b">
                    {feature.label}
                  </div>
                  <div className="divide-y bg-background">
                    {PLANS.map((plan) => (
                      <div
                        key={plan.id}
                        className="flex items-center justify-between px-2 py-2.5"
                      >
                        <span className="text-sm font-medium">{plan.name}</span>
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

        {/* Desktop Comparator - Table */}
        <div className="hidden lg:block">
          <table className="min-w-full">
            <thead className="sticky top-16 bg-background z-10">
              <tr className="">
                <th className="py-4 px-6 text-left text-sm font-medium text-muted-foreground w-1/4 bg-background"></th>
                {PLANS.map((plan) => (
                  <th
                    key={plan.id}
                    className="py-4 px-6 text-left text-base font-semibold text-foreground bg-background"
                  >
                    {plan.name}
                    {plan.popular && (
                      <Badge
                        variant="outline"
                        className="ml-2 text-xs bg-primary/10 text-primary border-primary/30lue-200"
                      >
                        Popular
                      </Badge>
                    )}
                  </th>
                ))}
              </tr>
              <tr className="">
                <td className="py-4 px-6 bg-background"></td>
                {PLANS.map((plan) => {
                  const price = getPrice(plan);
                  const isContactSales = plan.id === "agency";
                  return (
                    <td key={plan.id} className="py-4 px-6 bg-background">
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-semibold">
                            {isContactSales
                              ? plan.price
                              : `${Math.round(price)}`}
                          </span>
                          {!isContactSales && price !== 0 && (
                            <span className="text-sm text-muted-foreground">
                              /month
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {billingCycle === "monthly"
                            ? "Billed monthly"
                            : "Billed annually"}
                        </p>
                      </div>
                    </td>
                  );
                })}
              </tr>
              <tr className="border-b border-border">
                <td className="py-4 px-6 bg-background"></td>
                {PLANS.map((plan) => (
                  <td key={plan.id} className="py-4 px-6 bg-background">
                    <Button
                      asChild
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <Link href={ctaLinks[plan.id as PlanId]}>
                        {plan.cta}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </td>
                ))}
              </tr>
            </thead>

            <tbody>
              {COMPARATOR_CATEGORIES.map((category, categoryIndex) => (
                <React.Fragment key={category.name}>
                  <tr>
                    <td
                      colSpan={PLANS.length + 1}
                      className={`py-4 px-6 text-left text-sm font-semibold text-foreground ${
                        categoryIndex === 0 ? "pt-8" : "pt-12"
                      }`}
                    >
                      {category.name}
                    </td>
                  </tr>

                  {category.features.map((feature) => (
                    <tr key={feature.key} className="border-t border-border/50">
                      <td className="py-4 px-6 text-sm text-muted-foreground">
                        {feature.label}
                      </td>

                      {PLANS.map((plan) => (
                        <td
                          key={plan.id}
                          className="py-4 px-6 text-left text-sm"
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
      <div className="py-12 lg:py-24 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-2xl font-semibold text-balance">
            Need a custom plan for your team?
          </h3>
          <p className="text-muted-foreground">
            Talk to our sales team about custom pricing, enterprise features,
            and volume discounts for larger organizations.
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-base px-8">
            <Link href="/contact">
              Contact Sales
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base px-8"
          >
            <Link href="#">
              Start for free
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
      <Separator />
    </section>
  );
}
