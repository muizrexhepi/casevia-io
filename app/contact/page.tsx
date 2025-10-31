import ContactClient from "./contact-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Casevia",
  description:
    "Get in touch with the Casevia team. Whether you have questions, partnership ideas, or support requests — we’re here to help.",
  openGraph: {
    title: "Contact | Casevia",
    description:
      "Reach out to the Casevia team for product support, partnership opportunities, or general inquiries.",
    url: "https://casevia.io/contact",
    siteName: "Casevia",
    images: [
      {
        url: "https://casevia.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Casevia Contact Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Casevia",
    description:
      "Have a question or want to collaborate? Get in touch with the Casevia team.",
    images: ["https://casevia.io/og-image.png"],
  },
  alternates: {
    canonical: "https://casevia.io/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
