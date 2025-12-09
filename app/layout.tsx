import type { Metadata } from "next";
// Re-importing DM_Sans to use it for headings
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { WaitlistModal } from "@/components/emails/waitlist-modal";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Heading font: DM Sans (supports multiple weights)
const dmSans = DM_Sans({
  variable: "--font-heading", // Set as the heading variable
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"], // Explicitly list desired weights
});

// Body font: Inter
const inter = Inter({
  variable: "--font-body", // Set as the body variable
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://casevia.io"),
  title:
    "Casevia | Generate sales-ready case studies from interviews in minutes",
  description:
    "Stop losing deals because you lack proof. Casevia turns raw customer interviews into verified, revenue-driving case studies in minutes — built for lean B2B SaaS teams that need pipeline, not paperwork.",
  keywords: [
    "ai case study generator for B2B SaaS",
    "automate customer case studies",
    "customer proof for B2B sales",
    "turn interviews into case studies",
    "B2B SaaS social proof automation",
    "sales enablement case study tool",
    "ai for customer marketing",
    "quick case study creation",
    "interview to marketing content",
    "founder-led marketing tools",
    "scale customer stories without writers",
  ],
  alternates: {
    canonical: "https://casevia.io",
  },
  openGraph: {
    title:
      "Casevia | Generate sales-ready case studies from interviews in minutes",
    description:
      "Turn customer wins into revenue assets instantly. Upload a client interview — AI extracts the narrative, verifies quotes, and writes a polished case study. No agencies. No waiting.",
    url: "https://casevia.io",
    siteName: "Casevia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Casevia AI Case Study Generator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Casevia | Generate sales-ready case studies from interviews in minutes",
    description:
      "Stop letting deals slip because you don't have social proof. Casevia automates customer stories for lean B2B SaaS teams.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Updated font classes to use dmSans and inter variables
        className={`${dmSans.variable} ${inter.variable} antialiased`}
      >
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Casevia",
              applicationCategory: "MarketingAutomation",
              operatingSystem: "Web",
              url: "https://casevia.io",
              description:
                "AI software that transforms customer interviews into structured, sales-ready case studies for B2B SaaS teams.",
              category: "BusinessApplication",
              featureList: [
                "Automated interview transcription",
                "Verified customer quotes",
                "Brand-aligned storytelling",
                "Export to CRM & sales enablement",
                "Multiple publication-ready formats",
              ],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              audience: {
                "@type": "Audience",
                audienceType: "B2B SaaS Marketing & Sales Teams",
              },
            }),
          }}
        />

        <Toaster />
        <Navbar />
        {children}
        <Footer />
        <WaitlistModal />
      </body>
    </html>
  );
}
