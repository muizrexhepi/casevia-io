// ============================================
// components/blog/BlogHeader.tsx
// ============================================

import Link from "next/link";
import { Calendar, Clock, ChevronRight } from "lucide-react";

interface Props {
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

export function BlogHeader({
  category,
  title,
  author,
  date,
  readTime,
  tags,
  image,
}: Props) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
        <Link href="/blogs" className="hover:text-zinc-900 transition-colors">
          Blogs
        </Link>
        <ChevronRight size={14} />
        <span className="text-zinc-900">{category}</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-display font-semibold text-zinc-900 tracking-tight mb-6 leading-tight">
        {title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-zinc-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white text-sm font-bold">
            {author.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-bold text-zinc-900">{author}</div>
            <div className="text-xs text-zinc-500">Founder @ Casevia</div>
          </div>
        </div>

        <div className="h-6 w-px bg-zinc-200"></div>

        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Calendar size={16} />
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>

        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Clock size={16} />
          {readTime}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-bold bg-card-bg text-zinc-700 px-3 py-1.5 uppercase tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Feature Image */}
      <div className="aspect-[2/1] mb-12 overflow-hidden bg-zinc-100 shadow-xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </>
  );
}
