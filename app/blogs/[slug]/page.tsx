// ============================================
// app/blogs/[slug]/page.tsx
// ============================================

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogHeader } from "@/components/blogs/blog-header";
import { ShareSection } from "@/components/blogs/share-section";
import { RelatedArticles } from "@/components/blogs/related-articles";

import { getPostBySlug, getRelatedPosts, blogPosts } from "@/lib/blog-data";

// Content components
import TurnClientInterviewsIntoCaseStudiesContent from "@/content/turn-client-interviews-into-case-studies";
import WhyMostCaseStudiesFailContent from "@/content/why-most-case-studies-fail";
import TheHiddenROICaseStudiesContent from "@/content/the-hidden-roi-of-case-studies";
import HowToInterviewClientsContent from "@/content/how-to-interview-clients-without-making-it-awkward";

type Props = {
  params: Promise<{ slug: string }>;
};

// Slug → Component map
const CONTENT_MAP: Record<string, React.ComponentType> = {
  "turn-client-interviews-into-case-studies":
    TurnClientInterviewsIntoCaseStudiesContent,
  "why-most-case-studies-fail": WhyMostCaseStudiesFailContent,
  "the-hidden-roi-of-case-studies": TheHiddenROICaseStudiesContent,
  "how-to-interview-clients-without-making-it-awkward":
    HowToInterviewClientsContent,
};

// Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Casevia" };
  }

  return {
    title: `${post.title} | Casevia Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Static params
export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  const Content = CONTENT_MAP[slug];

  if (!post || !Content) return notFound();

  const related = getRelatedPosts(slug, 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    image: p.image,
  }));

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <article className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <BlogHeader
            title={post.title}
            category={post.category}
            author={post.author}
            date={post.date}
            readTime={post.readTime}
            tags={post.tags}
            image={post.image}
          />

          <Content />

          <ShareSection
            title={post.title}
            url={`https://casevia.io/blogs/${slug}`}
          />

          <RelatedArticles posts={related} />
        </div>
      </article>
    </div>
  );
}
