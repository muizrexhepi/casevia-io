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
    "Casevia | Turn raw client interviews into polished case studies with a simple drag & drop.",
  description:
    "Upload a client interview and instantly generate structured, publish-ready case studies. Privacy-first. No writing. No waiting. Built for agencies & B2B teams.",
  keywords: [
    "case study generator",
    "ai case studies",
    "client interview to case study",
    "video to case study",
    "transcript to case study",
    "B2B social proof automation",
    "agency ai tool",
    "privacy focused ai",
    "content automation for agencies",
    "marketing proof generator",
  ],
  alternates: {
    canonical: "https://casevia.io",
  },
  openGraph: {
    title:
      "Casevia | Turn raw client interviews into polished case studies with a simple drag & drop.",
    description:
      "Turn raw customer interviews into real, publish-ready case studies automatically. Privacy-first. Casevia never trains on your content.",
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
      "Casevia | Turn raw client interviews into polished case studies with a simple drag & drop.",
    description:
      "Upload interviews → get structured case studies instantly. Privacy-focused and built for agencies.",
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
        <Toaster />
        <Navbar />
        {children}
        <Footer />
        <WaitlistModal />
      </body>
    </html>
  );
}
