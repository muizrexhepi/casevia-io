import PricingClient from "./pricing-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Casevia",
  description:
    "Flexible pricing plans for Casevia — create and publish AI-powered case studies effortlessly. Choose the perfect plan for your business.",
  openGraph: {
    title: "Pricing | Casevia",
    description:
      "Compare plans and choose the best option for your team to generate powerful case studies with Casevia.",
    url: "https://casevia.io/pricing",
    siteName: "Casevia",
    images: [
      {
        url: "https://casevia.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Casevia Pricing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Casevia",
    description:
      "See Casevia pricing and pick a plan that helps your team create case studies at scale.",
    images: ["https://casevia.io/og-image.png"],
  },
  alternates: {
    canonical: "https://casevia.io/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
