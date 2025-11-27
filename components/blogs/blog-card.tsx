// ============================================
// components/blog/blog-card.tsx
// ============================================

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="bg-white border border-zinc-200 hover:border-zinc-400 hover:shadow-lg transition-all group overflow-hidden"
    >
      <div className="aspect-[2/1] overflow-hidden bg-zinc-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 uppercase tracking-wide">
            {post.category}
          </span>
          <span className="text-xs text-zinc-400">•</span>
          <span className="text-xs text-zinc-500 font-medium">
            {post.readTime}
          </span>
        </div>
        <h2 className="text-xl font-bold text-zinc-900 mb-2 font-display group-hover:text-indigo-600 transition-colors">
          {post.title}
        </h2>
        <p className="text-zinc-600 text-sm mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-900 flex items-center justify-center text-white text-xs font-bold">
              A
            </div>
            <span className="text-xs text-zinc-500 font-medium">
              {post.author}
            </span>
          </div>
          <div className="flex items-center gap-1 text-indigo-600 text-sm font-semibold group-hover:gap-2 transition-all">
            Read more
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
