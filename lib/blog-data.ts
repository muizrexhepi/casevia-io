// ============================================
// lib/blog-data.ts
// ============================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "turn-client-interviews-into-case-studies",
    title: "How to Turn Client Interviews Into Powerful Case Studies",
    excerpt:
      "A step-by-step guide to extracting compelling narratives from client conversations and turning them into high-conversion case studies.",
    date: "2025-01-15",
    author: "Muiz Rexhepi",
    readTime: "12 min read",
    category: "Case Studies",
    tags: ["Strategy", "Process", "Interviews"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop",
  },

  {
    slug: "why-most-case-studies-fail",
    title: "Why Case Studies Fail (And How to Fix Yours)",
    excerpt:
      "Most case studies fall flat because they focus on features instead of transformation. Here's how to write ones prospects actually read.",
    date: "2025-01-08",
    author: "Muiz Rexhepi",
    readTime: "10 min read",
    category: "Strategy",
    tags: ["Psychology", "Conversion", "Writing"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  },

  {
    slug: "the-hidden-roi-of-case-studies",
    title: "The Hidden ROI of Case Studies",
    excerpt:
      "Case studies don’t just build trust—they compound across sales, marketing, and retention. Here’s the ROI most teams miss.",
    date: "2025-01-20",
    author: "Muiz Rexhepi",
    readTime: "8 min read",
    category: "Case Studies",
    tags: ["Growth", "Sales", "Positioning"],
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&h=600&fit=crop",
  },

  {
    slug: "how-to-interview-clients-without-making-it-awkward",
    title: "How to Interview Clients Without Making It Awkward",
    excerpt:
      "If your interviews feel stiff or salesy, you're leaving gold on the table. Here’s how to get natural, story-rich insights from clients.",
    date: "2025-01-22",
    author: "Muiz Rexhepi",
    readTime: "9 min read",
    category: "Process",
    tags: ["Interviews", "Storytelling", "Writing"],
    image:
      "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
