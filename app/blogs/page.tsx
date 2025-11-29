// ============================================
// app/blogs/page.tsx
// ============================================

import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/blogs/blog-card";

export const metadata: Metadata = {
  title: "Blogs | Casevia",
  description:
    "Insights on case studies, storytelling, and AI-powered content creation for agencies and B2B teams.",
};

export default function BlogsPage() {
  const blogPosts = getAllPosts();

  return (
    <div className="min-h-screen">
      {/* Blog Hero Section */}
      <section className="relative pt-40 pb-20 bg-[url('/grid.svg')] bg-top bg-repeat">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-zinc-900 tracking-tight mb-6">
            Insights & Resources
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 font-light">
            Learn about case studies, storytelling, client interviews, and AI
            workflows.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
