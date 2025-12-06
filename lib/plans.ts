// 🚀 Launch Pricing (MVP realistic)
export const PLANS = [
  {
    id: "starter",
    name: "Starter",
    badge: "Free forever",
    price: "$0",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Try Casevia with 1 story per month.",
    features: [
      "1 case study per month",
      "10 min max interview length",
      "Basic AI narrative extraction",
      "Casevia branding on exports",
      "Single-user workspace",
      "Email support (48h)",
    ],
    limits: {
      caseStudies: 1,
      videoLength: 10, // minutes
      storage: 500, // MB
      socialPosts: 0,
      teamSeats: 1,
      branding: "watermark",
    },
    cta: "Get started free",
    popular: false,
  },

  {
    id: "freelancer",
    name: "Freelancer",
    price: "$29",
    priceMonthly: 29,
    priceYearly: 290,
    description: "For solo operators and small businesses.",
    features: [
      "3 case studies per month",
      "30 min max interview length",
      "AI tone enhancement",
      "No watermark",
      "Up to 3 design templates",
      "1 team seat",
      "Email support (24h)",
    ],
    limits: {
      caseStudies: 3,
      videoLength: 30,
      storage: 2048,
      socialPosts: 2,
      teamSeats: 1,
      branding: "none",
    },
    cta: "Upgrade to Freelancer",
    popular: false,
  },

  {
    id: "pro",
    name: "Pro",
    price: "$79",
    priceMonthly: 79,
    priceYearly: 790,
    description: "For agencies producing stories consistently.",
    badge: "Most Popular",
    features: [
      "10 case studies per month",
      "60 min max interview length",
      "SEO title & metadata suggestions",
      "Custom brand tone",
      "10+ templates",
      "3 team seats",
      "Basic CRM export",
      "Priority support",
    ],
    limits: {
      caseStudies: 10,
      videoLength: 60,
      storage: 4096,
      socialPosts: 4,
      teamSeats: 3,
      branding: "none",
    },
    cta: "Upgrade to Pro",
    popular: true,
  },

  {
    id: "agency",
    name: "Agency",
    price: "$149",
    priceMonthly: 149,
    priceYearly: 1490,
    description: "For growing teams scaling client success stories.",
    features: [
      "20 case studies per month",
      "90 min max interview length",
      "Full brand customization",
      "20+ templates",
      "5 team seats",
      "View analytics",
      "Faster processing",
    ],
    limits: {
      caseStudies: 20,
      videoLength: 90,
      storage: 8192,
      socialPosts: 8,
      teamSeats: 5,
      branding: "custom",
    },
    cta: "Upgrade to Agency",
    popular: false,
  },
] as const;

export type PlanId = (typeof PLANS)[number]["id"];
export type Plan = (typeof PLANS)[number];

// Pay-per-extra case study usage pricing
export const EXTRA_OUTPUT_PRICE = 12; // $12 per additional case study
