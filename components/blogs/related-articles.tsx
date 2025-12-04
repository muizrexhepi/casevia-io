// ============================================
// components/blog/related-articles.tsx
// ============================================

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface RelatedArticlesProps {
  posts: any[];
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-24">
      <h3 className="text-2xl font-display font-bold text-zinc-900 mb-8">
        Related Articles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="bg-card-bg border-charcoal/5 hover:border-charcoal/10 relative flex flex-col rounded-2xl border transition-all duration-300 group "
          >
            <div className="aspect-[2/1] overflow-hidden bg-zinc-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="text-xs font-bold text-charcoal bg-terracotta/10 px-2 py-1 inline-block uppercase tracking-wide mb-3">
                {post.category}
              </div>
              <h4 className="text-base font-bold text-charcoal/80 mb-2 group-hover:text-charcoal transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center gap-1 text-terracotta text-sm font-semibold mt-4">
                Read more
                <ChevronRight size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
