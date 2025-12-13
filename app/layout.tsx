import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});
export const metadata: Metadata = {
  title: "Casevia — Premium Digital Agency",
  description:
    "Casevia is a premium digital agency building high-conversion websites, brand identities, and modern digital experiences for ambitious businesses.",
  keywords: [
    "digital agency",
    "web design agency",
    "branding agency",
    "next.js agency",
    "premium web design",
    "conversion focused websites",
  ],
  authors: [{ name: "Casevia" }],
  creator: "Casevia",
  metadataBase: new URL("https://casevia.io"),
  openGraph: {
    title: "Casevia — Premium Digital Agency",
    description:
      "High-end digital experiences, crafted with precision. Websites, branding, and growth-focused design.",
    url: "https://casevia.io",
    siteName: "Casevia",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casevia — Premium Digital Agency",
    description: "High-end digital experiences, crafted with precision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="text-black antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
