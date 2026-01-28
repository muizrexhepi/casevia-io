"use client";

import { TEXT } from "@/lib/styles";

export default function Manifesto() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#1A0B19] text-white overflow-hidden relative">
      {/* Refined Glow Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[#D1326E] blur-[240px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-[#6326E1] blur-[240px] rounded-full mix-blend-screen delay-700" />
      </div>

      <div className="max-w-screen-2xl mx-auto text-center relative z-10 flex flex-col items-center">
        <span className="text-xs font-bold text-[#D1326E] tracking-[0.5em] uppercase mb-12">
          Manifesto
        </span>

        <h2 className="text-5xl md:text-8xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter mb-16 max-w-6xl mx-auto">
          Speed is the only <br />
          <span className="text-[#D1326E] italic font-serif">moat</span> that
          matters.
        </h2>

        {/* Separator */}
        <div className="w-px h-24 bg-gradient-to-b from-[#D1326E] to-transparent mb-12" />

        <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed">
          Your competitors are shipping while you're stuck in discovery. We
          build production-grade systems in weeks, not months—because the market
          doesn't wait for perfect.
        </p>
      </div>
    </section>
  );
}
