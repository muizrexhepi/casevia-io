"use client";

import { Sparkles } from "lucide-react";
import { TEXT } from "@/lib/styles";

export default function Mission() {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18v4M18 20h4' stroke='%23D1326E' stroke-width='1'/%3E%3C/svg%3E")`,
          maskImage:
            "radial-gradient(circle at center, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 20%, transparent 80%)",
        }}
      />

      <div className="max-w-screen-2xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* 2. Glass Icon Tile */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 bg-[#D1326E]/10 blur-2xl rounded-full scale-150" />
          <div className="relative w-14 h-14 rounded-xl bg-white border border-[#221221]/5 shadow-sm flex items-center justify-center">
            <Sparkles className="text-[#D1326E]" size={28} strokeWidth={1.5} />
          </div>
        </div>

        {/* 3. Mission Text */}
        <h2
          className={`${TEXT.sectionTitle} max-w-5xl mx-auto leading-[1.15] tracking-tight`}
        >
          We weave progress into digital reality through{" "}
          <span className="text-gradient italic font-serif">
            technical mastery.
          </span>{" "}
          We craft software that transcends the ordinary—driven by purpose and
          designed to scale.
        </h2>

        {/* 4. Minimalist Footer Label */}
        <div className="mt-12 flex items-center gap-4 text-[#221221]/30 uppercase tracking-[0.4em] text-[10px] font-bold">
          <div className="h-px w-6 bg-[#221221]/10" />
          Our Mission
          <div className="h-px w-6 bg-[#221221]/10" />
        </div>
      </div>
    </section>
  );
}
