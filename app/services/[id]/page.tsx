import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ServiceClientPage from "./service-client";
import { SERVICES_DATA } from "@/lib/services";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

/* ---------- METADATA ---------- */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    return {
      title: "Service Not Found | Casevia",
    };
  }

  return {
    title: `${service.title} | Casevia`,
    description: service.fullDescription,
    openGraph: {
      title: `${service.title} | Casevia`,
      description: service.fullDescription,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Casevia`,
      description: service.fullDescription,
    },
  };
}

/* ---------- PAGE ---------- */
export default async function ServicePage({ params }: PageProps) {
  const { id } = await params;

  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return <ServiceClientPage />;
}
