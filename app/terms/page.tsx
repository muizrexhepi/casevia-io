import React from "react";
import { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service | Casevia",
};

export default function TermsPage() {
  return (
    <div className="pt-32 md:pt-48 pb-32  min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Side: Massive Title */}
          <div className="lg:col-span-7">
            <Reveal>
              <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-normal leading-[0.85] tracking-tighter text-gradient mb-12 italic">
                Terms & <br /> Conditions
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[12px] font-bold text-[#D1326E] tracking-[0.2em] uppercase mb-16">
                Ref: CV-TS-2026
              </p>
            </Reveal>

            <div className="space-y-20">
              <Reveal>
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-[#221221] mb-6 tracking-tight">
                    1. Partnership Model
                  </h2>
                  <p className="text-xl text-[#4A1D3A]/80 leading-relaxed">
                    By engaging Casevia, you enter a high-performance
                    engineering partnership. We provide bespoke digital
                    infrastructure designed for enterprise scalability and
                    reliability.
                  </p>
                </div>
              </Reveal>

              <Reveal>
                <div className="max-w-2xl p-10 bg-white rounded-[2rem] border border-[#221221]/5 shadow-xl shadow-[#221221]/5">
                  <h2 className="text-2xl font-bold text-[#D1326E] mb-6 tracking-tight italic">
                    2. Intellectual Property
                  </h2>
                  <p className="text-xl text-[#4A1D3A]/90 leading-relaxed">
                    Upon project completion and final settlement, all custom
                    application code and client-specific logic belong to the
                    client. Casevia maintains the rights to its proprietary core
                    modules and methodology.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Side: Quick Reference Sidebar */}
          <div className="lg:col-span-5 pt-12">
            <div className="sticky top-32 space-y-8 bg-[#221221] text-white p-12 rounded-[3rem] shadow-2xl">
              <h3 className="text-[#D1326E] font-bold text-xs uppercase tracking-[0.2em]">
                Quick Summary
              </h3>
              <ul className="space-y-6">
                {[
                  "Ownership of custom code",
                  "99.9% Architecture Guarantee",
                  "Monthly security updates",
                  "24/7 Priority Infrastructure Support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-4 items-start text-lg font-medium tracking-tight"
                  >
                    <span className="text-[#D1326E] mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-white/10">
                <p className="text-white/40 text-sm">
                  Questions about our terms? <br />
                  <span className="text-white font-bold">legal@casevia.io</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
