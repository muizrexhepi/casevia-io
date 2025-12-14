import { Metadata } from "next";
import dynamic from "next/dynamic";
import { getProjectBySlug, generateStaticSlugs } from "@/lib/projects";
import { notFound } from "next/navigation";

// Define a type for the dynamic route parameters
interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Lazy load the client component
const ProjectPageClient = dynamic(() => import("./project-page-client"), {
  ssr: true,
});

// --- Server Component Functions ---

// Generate static params for all project slugs at build time
export async function generateStaticParams() {
  return generateStaticSlugs();
}

// Generate dynamic metadata based on the project slug
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  // Await params before accessing slug
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} - Case Study | Casevia`,
    description: project.brief.substring(0, 150) + "...",
    openGraph: {
      title: `${project.title} Case Study`,
      images: [{ url: project.heroImage }],
    },
  };
}

// Main Server Component
export default async function ProjectPage({ params }: ProjectPageProps) {
  // Await params before accessing slug
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Pass the server-fetched data to the client component
  return <ProjectPageClient project={project} />;
}
