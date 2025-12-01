export const PLANS = [
  {
    id: "free",
    name: "Free",
    slug: null, // No Polar product
    price: "$0",
    priceMonthly: 0,
    priceYearly: 0,
    description: "Perfect for trying Casevia on one project.",
    features: [
      "1 case study per month",
      "10 min max interview length",
      "250 MB storage",
      "AI narrative extraction",
      "Basic writing tone",
      "Casevia branding on exports",
      "1 team seat",
      "Email support (48h)",
    ],
    limits: {
      caseStudies: 1,
      videoLength: 10, // minutes per interview
      storage: 250, // MB
      socialPosts: 0,
      teamSeats: 1,
      designTemplates: 1,
    },
    cta: "Get started free",
    popular: false,
  },
  {
    id: "freelancer",
    name: "Freelancer",
    slug: "starter",
    price: "$29",
    priceMonthly: 29,
    priceYearly: 290,
    description: "Built for solo creators and independent professionals.",
    features: [
      "8 case studies per month",
      "30 min max interview length",
      "2 GB storage",
      "AI narrative extraction",
      "2 social posts per case study",
      "Tone customization",
      "No Casevia branding",
      "5 design templates",
      "2 team seats",
      "Email support (24h)",
    ],
    limits: {
      caseStudies: 8,
      videoLength: 30, // minutes
      storage: 2048, // MB (2 GB)
      socialPosts: 2,
      teamSeats: 2,
      designTemplates: 5,
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
    description: "For growing teams handling multiple clients.",
    features: [
      "25 case studies per month",
      "45 min max interview length",
      "5 GB storage",
      "AI narrative extraction",
      "5 social posts per case study",
      "SEO title & slug suggestions",
      "Full tone + persona customization",
      "No Casevia branding",
      "20 design templates",
      "5 team seats",
      "Analytics dashboard",
      "Priority support (4h)",
    ],
    limits: {
      caseStudies: 25,
      videoLength: 45, // minutes
      storage: 5120, // MB (5 GB)
      socialPosts: 5,
      teamSeats: 5,
      designTemplates: 20,
    },
    cta: "Upgrade to Pro",
    popular: true, // highlight this as the main plan
  },
  {
    id: "agency",
    name: "Agency",
    slug: "agency",
    price: "$199",
    priceMonthly: 199,
    priceYearly: 1990,
    description: "For agencies and larger teams running case studies at scale.",
    features: [
      "40 case studies per month",
      "45 min max interview length",
      "10 GB storage",
      "AI narrative extraction",
      "Unlimited social posts",
      "SEO title & slug suggestions",
      "Full tone + persona customization",
      "No Casevia branding + white-label options",
      "30 design templates",
      "Unlimited team seats",
      "Advanced analytics dashboard",
      "High-priority processing",
      "Dedicated account manager",
    ],
    limits: {
      caseStudies: 40,
      videoLength: 45, // minutes
      storage: 10240, // MB (10 GB)
      socialPosts: -1, // unlimited
      teamSeats: -1, // unlimited
      designTemplates: 30,
    },
    cta: "Talk to sales",
    popular: false,
  },
] as const;

export type PlanId = (typeof PLANS)[number]["id"];
export type Plan = (typeof PLANS)[number];
