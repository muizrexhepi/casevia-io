import { PROJECTS } from "@/lib/projects";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const WorkPageClient = dynamic(() => import("./work-client"), { ssr: true });

export const metadata: Metadata = {
  title: "Our Work - Selected Projects and Case Studies",
  description:
    "Explore our archive of selected design, development, and branding projects. See how we deliver impactful results for our clients.",
  openGraph: {
    title: "Our Work",
    url: "/work",
  },
};

export default function WorkPage() {
  return <WorkPageClient projects={PROJECTS} />;
}
