// ============================================
// components/blog/share-section.tsx
// ============================================

"use client";

import { useState } from "react";
import { Link2, Linkedin, Twitter } from "lucide-react";

interface ShareSectionProps {
  title: string;
  url: string;
}

export function ShareSection({ title, url }: ShareSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, "_blank", "width=600,height=400");
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  return (
    <div className="mt-16 pt-8 border-t border-zinc-200">
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold text-zinc-900">
          Share this article
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleLinkedInShare}
            className="w-10 h-10 bg-[#0077B5] text-white flex items-center justify-center hover:bg-[#006399] transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin size={18} />
          </button>
          <button
            onClick={handleTwitterShare}
            className="w-10 h-10 bg-[#1DA1F2] text-white flex items-center justify-center hover:bg-[#1a8cd8] transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter size={18} />
          </button>
          <button
            onClick={handleCopyLink}
            className="w-10 h-10 bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors relative"
            aria-label="Copy link"
          >
            <Link2 size={18} />
            {copied && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-xs px-2 py-1 whitespace-nowrap animate-fade-in">
                Copied!
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
