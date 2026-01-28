"use client";

import {
  ArrowRight,
  LineChart,
  Palette,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { TEXT } from "@/lib/styles";

export default function Methodology() {
  const steps = [
    {
      num: "01",
      icon: LineChart,
      title: "Market Intelligence",
      desc: "We map high-conversion blueprints based on competitor analysis and user behavior.",
    },
    {
      num: "02",
      icon: Palette,
      title: "Trust-Based Design",
      desc: "We craft premium interfaces that build instant psychological authority.",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Compliant Engineering",
      desc: "GDPR-ready, unhackable Next.js infrastructure optimized for dominant SEO.",
    },
    {
      num: "04",
      icon: Rocket,
      title: "Autonomous Growth",
      desc: "We manage hosting and updates so you scale without technical overhead.",
    },
  ];

  return (
    <section
      id="methodology"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left Column: Minimalist Header */}
          <div className="lg:w-1/3 flex flex-col items-start text-left lg:sticky lg:top-32">
            <span
              className={`${TEXT.label} text-[#D1326E] mb-6 block uppercase tracking-[0.4em]`}
            >
              The Process
            </span>
            <h2 className={`${TEXT.sectionTitle} mb-8 leading-[0.95]`}>
              Software built for <span className="text-gradient">scale.</span>
            </h2>
            {/* Paragraph removed for visual impact */}

            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#221221]/40">
              <div className="h-px w-8 bg-[#221221]/10" />
              Four Steps to Revenue
            </div>
          </div>

          {/* Right Column: Visual Grid Workflow */}
          <div className="lg:w-2/3 w-full relative">
            {/* Subtle Connecting Lines Background Graphic */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] hidden md:block"
              viewBox="0 0 800 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 100 150 C 200 150, 300 150, 400 150 C 500 150, 600 300, 700 300"
                stroke="#221221"
                strokeWidth="4"
                strokeDasharray="10 10"
              />
              <path
                d="M 100 450 C 200 450, 300 450, 400 450 C 500 450, 600 300, 700 300"
                stroke="#221221"
                strokeWidth="4"
                strokeDasharray="10 10"
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-10 rounded-[2.5rem] bg-white border border-[#221221]/5 hover:border-[#D1326E]/20 hover:shadow-xl hover:shadow-[#D1326E]/5 transition-all duration-500 overflow-hidden"
                >
                  {/* Large Faded Number */}
                  <div className="absolute -top-2 -right-2 text-[8rem] font-bold text-[#221221]/[0.02] group-hover:text-[#D1326E]/[0.04] transition-colors select-none leading-none">
                    {item.num}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Abstract Icon Header */}
                    <div className="mb-8 relative w-16 h-16">
                      <div className="absolute inset-0 bg-[#D1326E]/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-full h-full rounded-2xl bg-[#FDFBFD] border border-[#221221]/10 flex items-center justify-center group-hover:border-[#D1326E]/30 transition-colors">
                        <item.icon
                          className="text-[#221221] group-hover:text-[#D1326E] transition-colors duration-500"
                          size={28}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-medium tracking-tight text-[#221221] mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#221221]/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
