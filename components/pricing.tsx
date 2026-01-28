"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { TEXT } from "@/lib/styles";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Centered Minimal Header */}
        <div className="mb-24 text-center">
          <span
            className={`${TEXT.label} text-[#D1326E] mb-6 block uppercase tracking-[0.4em]`}
          >
            Investment
          </span>
          <h2
            className={`${TEXT.sectionTitle} max-w-4xl mx-auto leading-[0.95]`}
          >
            Fixed scope. <span className="text-gradient">Fixed price.</span>
            <br />
            No surprises.
          </h2>
        </div>

        {/* Simplified Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, i) => {
            const isHighlighted = plan.name === "Growth Engine";

            return (
              <div
                key={i}
                className={`
                  p-10 md:p-14 rounded-[3rem] relative transition-all duration-700 
                  ${
                    isHighlighted
                      ? "bg-[#221221] text-white shadow-2xl scale-[1.05] z-10"
                      : "bg-[#FDFBFD] border border-[#221221]/5 hover:border-[#D1326E]/20"
                  }
                `}
              >
                {/* Premium Glow for Highlighted Card */}
                {isHighlighted && (
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D1326E] blur-[100px] rounded-full" />
                  </div>
                )}

                <div className="relative z-10">
                  <h3 className="text-2xl font-medium mb-2 tracking-tight">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-12 ${isHighlighted ? "text-white/50" : "text-[#221221]/50"}`}
                  >
                    {/* Shortening the description to a single line or removing it for cleaner UI */}
                    Perfect for rapid market entry.
                  </p>

                  <div className="mb-12">
                    <span className="text-6xl md:text-7xl font-medium tracking-tighter">
                      €{plan.setupPrice.toLocaleString()}
                    </span>
                    <p
                      className={`mt-4 text-[10px] font-bold tracking-[0.2em] uppercase ${isHighlighted ? "text-[#D1326E]" : "text-[#D1326E]"}`}
                    >
                      + €{plan.monthlyPrice}/mo Retainer
                    </p>
                  </div>

                  {/* High-impact Button */}
                  <Link href="/contact" className="block w-full group">
                    <div
                      className={`
                      w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm tracking-widest uppercase transition-all duration-300
                      ${
                        isHighlighted
                          ? "bg-[#D1326E] text-white hover:bg-white hover:text-[#221221]"
                          : "bg-[#221221] text-white hover:bg-[#D1326E]"
                      }
                    `}
                    >
                      Start Project
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>

                  {/* Minimal Feature List - Only show the absolute essentials */}
                  <ul className="mt-12 space-y-4 pt-12 border-t border-current/10">
                    {["Premium Design", "Next.js Build", "SEO Optimized"].map(
                      (feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-sm opacity-70"
                        >
                          <Check size={14} className="text-[#D1326E]" />
                          {feature}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
