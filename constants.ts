import { Clock, FileText, BarChart3, Shield, Zap, Lock } from "lucide-react";
import { Benefit, Step, Testimonial } from "./types";

// Brand basics
export const APP_NAME = "Casevia";

export const NAV_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
  // { label: "Blog", href: "/blogs" },
];

export const MAIN_CTA_TEXT = "Get early access";

// Hero Section
export const HERO_COPY = {
  headline: "Turn customer wins into revenue assets. Instantly.",
  subhead:
    "For B2B SaaS teams who can’t wait 6 weeks for a writer. Turn one Zoom call into a verified library of proof — SEO pages, PDFs, and sales battlecards — in 15 minutes.",
  kpi: "6 weeks → 15 minutes per story",
};

// Problem Section
export const PROBLEM_COPY = {
  headline: "The “Proof Gap” is where deals die.",
  subhead:
    "You have happy customers — but your case studies are trapped in production hell.",
  points: [
    {
      title: "The 6-Week Slog",
      description:
        "Scheduling writers, chasing approvals, and endless revisions kill momentum.",
      icon: Clock,
    },
    {
      title: "Pipeline Stalls",
      description:
        "Sales needs relevant proof to close, but marketing can't ship stories fast enough.",
      icon: BarChart3,
    },
    {
      title: "Generic Fluff",
      description:
        "Outsourced writers miss the technical nuance your B2B buyers actually care about.",
      icon: FileText,
    },
  ],
};

// Solution Steps
export const SOLUTION_STEPS: Step[] = [
  {
    number: "01",
    title: "Upload Customer Call",
    description:
      "Drag in your Gong, Zoom, or Meet recording. Casevia analyzes transcripts instantly.",
  },
  {
    number: "02",
    title: "Extract & Verify",
    description:
      "AI pulls the commercial narrative (Challenge → Solution → Result) and cites every quote.",
  },
  {
    number: "03",
    title: "Publish Multi-Format",
    description:
      "Generate a branded PDF, web page, and LinkedIn carousel in one click.",
  },
];

// Benefits
export const BENEFITS: Benefit[] = [
  {
    title: "Zero Hallucinations",
    description:
      "Every claim is citation-backed. If it wasn’t said, it won’t be written.",
    icon: Shield,
  },
  {
    title: "Sales-Ready Assets",
    description:
      "Auto-generates 1-pagers and slide decks specifically designed for sales workflows.",
    icon: Zap,
  },
  {
    title: "Enterprise-Grade Privacy",
    description:
      "SOC2 compliant. Your customer data never trains public models.",
    icon: Lock,
  },
];

// Testimonials (Seed–A ICP aligned)
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We went from shipping one case study a quarter to one every week. Sales has proof for every objection now.",
    author: "Elena R.",
    role: "Head of Marketing",
    company: "SaaSflow",
    avatar: "https://picsum.photos/100/100?random=1",
  },
  {
    quote:
      "No agency budget. Casevia gives me agency-quality narratives without the $2k price tag or the 6-week wait.",
    author: "Marcus J.",
    role: "Founder & CEO",
    company: "Datastack",
    avatar: "https://picsum.photos/100/100?random=2",
  },
];

// FAQs
export const FAQS = [
  {
    question: "Why not hire a freelancer?",
    answer:
      "Freelancers take weeks and cost $1k–$3k per story. Casevia delivers in minutes with zero risk of inaccuracies.",
  },
  {
    question: "What call sources are supported?",
    answer:
      "Upload MP3/MP4/WAV or auto-import from Zoom, Google Meet, Gong, and Chorus.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. SOC2 Type II ready. Encrypted at rest + in transit. Interviews never train public AI models.",
  },
  {
    question: "Can I edit the output?",
    answer:
      "Yes. You get a 95% complete draft — refine tone, swap quotes, update layout before publishing.",
  },
  {
    question: "What if I cancel?",
    answer:
      "You own all exports forever. Download as PDFs or Markdown anytime.",
  },
];

// In-product demo example
export const DEMO_PROMPT = `
Generate a high-impact case study summary for a B2B SaaS tool called “DevScale”
that helped “Acme Corp” reduce deployment time by 50%.
Focus on business results and verified proof.
Use confident revenue-focused language.
`;
