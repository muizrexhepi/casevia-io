import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { WaitlistModal } from "@/components/emails/waitlist-modal";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://casevia.io"),
  title:
    "Casevia | Turn client interviews into polished case studies automatically.",
  description:
    "Casevia transforms raw client interviews into structured, publish-ready case studies automatically. Upload → extract insights → generate marketing-ready assets with zero drafting. Privacy-first and built for agencies & B2B teams.",
  keywords: [
    "case study generator",
    "ai case study tool",
    "turn interviews into case studies",
    "client interview automation",
    "upload video to case study",
    "B2B social proof generator",
    "marketing case study automation",
    "agency AI tools",
    "transcript to case study",
    "video transcription to marketing asset",
    "customer story generator",
  ],
  alternates: {
    canonical: "https://casevia.io",
  },
  openGraph: {
    title:
      "Casevia | Turn client interviews into polished case studies automatically.",
    description:
      "Casevia transforms raw client interviews into structured, publish-ready case studies automatically. Upload → extract insights → generate marketing-ready assets with zero drafting. Privacy-first and built for agencies & B2B teams.",
    url: "https://casevia.io",
    siteName: "Casevia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Casevia Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Casevia | Turn client interviews into polished case studies automatically.",
    description:
      "Casevia transforms raw client interviews into structured, publish-ready case studies automatically. Upload → extract insights → generate marketing-ready assets with zero drafting. Privacy-first and built for agencies & B2B teams.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Casevia",
              description:
                "AI-powered case study generator that converts raw client interviews into structured marketing assets.",
              applicationCategory: "MarketingAutomation",
              operatingSystem: "Web",
              url: "https://casevia.io",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
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
