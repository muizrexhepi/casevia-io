// ============================================
// components/blog/blog-cta.tsx
// Clean, modern, consistent with Casevia
// ============================================

"use client";

import { ArrowRight } from "lucide-react";
import { useWaitlistStore } from "@/lib/store";

export function BlogCTA() {
  const openWaitlist = useWaitlistStore((state) => state.openWaitlist);

  return (
    <div className="mt-24 border border-zinc-200 bg-white p-12 text-center">
      <h3 className="text-3xl font-display font-semibold text-zinc-900 mb-4">
        Turn your client interviews into real case studies — instantly.
      </h3>

      <p className="text-zinc-600 max-w-xl mx-auto mb-8">
        Join the waitlist and be the first to try Casevia when we launch. No
        noise. No spam. Just AI-generated case studies in minutes.
      </p>

      <button
        onClick={openWaitlist}
        className="px-8 py-4 bg-zinc-900 text-white font-semibold inline-flex items-center gap-2 hover:bg-zinc-800 transition-colors"
      >
        Join the waitlist
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}
