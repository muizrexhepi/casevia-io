import {
  Clock,
  CheckCircle,
  Zap,
  Shield,
  FileText,
  Share2,
  BarChart3,
  Lock,
  Target,
} from "lucide-react";
import { Benefit, Step, Testimonial } from "./types";

export const APP_NAME = "casevia"; // Lowercase as requested

export const NAV_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export const MAIN_CTA_TEXT = "Get early access";

export const HERO_COPY = {
  headline: "Real customer evidence where it wins deals. Automatically.",
  subhead:
    "Interviews become sales-ready proof your team actually uses. Capture, extract, and deliver verified case studies, battlecards, and one-pagers in minutes.",
  kpi: "Timestamp-Verified • Sales-Ready",
};

export const PROBLEM_COPY = {
  headline: "Deals fail because reps lack the right story.",
  subhead:
    "Your happy customers are your best asset, but their voice is trapped in recordings or generic marketing pages.",
  points: [
    {
      title: "The Content Gap",
      description:
        "Marketing can’t ship assets fast enough. Reps need relevant proof for specific objections, not generic PDFs.",
      icon: Clock,
    },
    {
      title: "Trapped Data",
      description:
        "Gold-standard objection handlers are buried in Zoom recordings, completely inaccessible to the sales team.",
      icon: Lock,
    },
    {
      title: "Trust Deficit",
      description:
        "Buyers don't trust marketing copy. They want verified evidence, ROI data, and peer validation.",
      icon: Shield,
    },
  ],
};

export const SOLUTION_STEPS: Step[] = [
  {
    number: "01",
    title: "Capture & Extract",
    description:
      "Upload Zoom, Gong, or Google Meet recordings. AI extracts problem-solution-result arcs and verifies every quote with a timestamp.",
  },
  {
    number: "02",
    title: "Publish Assets",
    description:
      "Instantly generate sales one-pagers, SEO case studies, competitive battlecards, and LinkedIn carousels.",
  },
  {
    number: "03",
    title: "Deliver to Sales",
    description:
      "Embed assets in deals, export to CRM, and track usage. Reps get the right proof for the right objection.",
  },
];

export const BENEFITS: Benefit[] = [
  {
    title: "Zero Hallucinations",
    description:
      "Every claim is citation-backed. Quotes are linked to video timestamps for instant verification.",
    icon: Shield,
  },
  {
    title: "Sales Enablement",
    description:
      "Auto-generates battlecards and objection handlers specifically formatted for your CRM and sales outreach.",
    icon: Target,
  },
  {
    title: "Proof Intelligence",
    description:
      "Track asset usage and identify coverage gaps. Know exactly which stories influence revenue.",
    icon: BarChart3,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sales has stopped asking 'do we have a case study for this?'. They just pull the exact slide they need from Casevia.",
    author: "Elena R.",
    role: "Head of Marketing",
    company: "SaaSflow",
    avatar: "https://picsum.photos/100/100?random=1",
  },
  {
    quote:
      "We closed a $50k deal because I could instantly send a verified clip of a similar customer handling the exact same objection.",
    author: "Marcus J.",
    role: "VP of Sales",
    company: "Datastack",
    avatar: "https://picsum.photos/100/100?random=2",
  },
];

export const FAQS = [
  {
    question: "How is this different from AI writing tools?",
    answer:
      "Writing is only 10% of the problem. Casevia is a proof engine. We focus on extraction (finding the ROI), verification (timestamping quotes), and delivery (getting assets into the hands of sales via CRM/Chrome). We don't just write text; we build verified assets.",
  },
  {
    question: "Does it integrate with my CRM?",
    answer:
      "Yes. The Sales Enablement plan and above support direct exports to HubSpot and Salesforce, allowing you to track which assets are influencing pipeline.",
  },
  {
    question: "What recording formats do you support?",
    answer:
      "We support direct uploads (mp3, mp4, wav) and integrate with Gong, Chorus, Zoom, and Google Meet for automatic imports.",
  },
  {
    question: "Is my customer data secure?",
    answer:
      "Yes. We are SOC2 Type II compliant. Your data is encrypted at rest and in transit, and we never use your customer interviews to train our public AI models.",
  },
  {
    question: "Can I generate competitive battlecards?",
    answer:
      "Yes. Casevia automatically detects mentions of competitors in your interviews and formats that data into battlecards for your sales team.",
  },
];

export const DEMO_PROMPT = `Generate a high-impact case study summary for a B2B SaaS tool called "DevScale" that helped "Acme Corp" reduce deployment time by 50%. Focus on the "Result" section. Use confident, revenue-focused language.`;

export const PLANS = [
  {
    name: "Starter",
    description: "For founders testing Casevia for the first time.",
    price: 0,
    annualPrice: 0,
    features: [
      "1 case study / month",
      "Up to 10 min interview audio",
      "Basic AI narrative writing",
      "Casevia branding",
      "1 seat",
      "Email support (48h)",
    ],
    cta: "Get started free",
    highlighted: false,
    badge: null,
  },
  {
    name: "Growth",
    description: "For lean B2B marketing teams producing stories consistently.",
    price: 39,
    annualPrice: 31,
    features: [
      "3 case studies / month",
      "Up to 30 min interview audio",
      "Tone refinement",
      "No watermark",
      "5 templates",
      "2 seats",
      "Export to PDF + web",
      "Email support (24h)",
    ],
    cta: "Upgrade to Growth",
    highlighted: false,
    badge: null,
  },
  {
    name: "Scale",
    description: "For teams who rely on case studies to drive pipeline.",
    price: 99,
    annualPrice: 79,
    features: [
      "8 case studies / month",
      "Up to 60 min interviews",
      "SEO metadata",
      "Brand-aligned writing",
      "Unlimited templates",
      "5 seats",
      "CRM export",
      "Priority support",
    ],
    cta: "Scale your proof engine",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    description: "For large organizations requiring custom volume & security.",
    price: "Custom",
    annualPrice: "Custom",
    features: [
      "Unlimited case studies",
      "SSO & SAML",
      "Dedicated Success Manager",
      "Custom API Access",
      "SLA Guarantees",
      "White-label Portal",
    ],
    cta: "Contact Sales",
    highlighted: false,
    badge: null,
  },
];
