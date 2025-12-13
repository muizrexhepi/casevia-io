import React from "react";
import { Reveal } from "./ui/Reveal";
import { ArrowRight } from "lucide-react";

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-16 md:py-32 bg-[#050505] text-white overflow-hidden relative"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-16 md:mb-24 pb-12">
          <Reveal>
            <span className="block text-xs font-bold uppercase tracking-[0.25em] text-purple-500 mb-6">
              Framework
            </span>
            <h2 className="font-display text-4xl md:text-8xl font-medium uppercase tracking-tighter leading-[0.9] text-white">
              Operational <br /> Architecture
            </h2>
          </Reveal>
        </div>

        {/* Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {[
            {
              phase: "Phase I",
              title: "Diagnosis",
              desc: "Data audit & competitive mapping.",
              detail:
                "We don't guess. We audit your analytics, interview stakeholders, and stress-test your current infrastructure.",
            },
            {
              phase: "Phase II",
              title: "Blueprint",
              desc: "Strategic definition & architecture.",
              detail:
                "Translating insights into a concrete roadmap. We define the positioning, voice, and technical stack.",
            },
            {
              phase: "Phase III",
              title: "Execution",
              desc: "Design, build & implementation.",
              detail:
                "Sprint-based development. We craft pixel-perfect interfaces and robust code, iterating with transparent feedback.",
            },
            {
              phase: "Phase IV",
              title: "Scale",
              desc: "Optimization & growth loops.",
              detail:
                "Deployment is just the start. We monitor performance, optimize conversion, and scale the infrastructure.",
            },
          ].map((step, idx) => (
            <div
              key={idx}
              className="group bg-[#050505] p-8 md:p-10 flex flex-col justify-between h-[450px] relative hover:bg-[#0a0a0a] transition-colors duration-500 text-left"
            >
              <Reveal
                delay={idx * 0.1}
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group-hover:text-purple-500 transition-colors">
                      {step.phase}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-700 -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-500" />
                  </div>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tight mb-4 text-gray-200 group-hover:text-white text-left">
                    {step.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 text-left">
                    {step.desc}
                  </p>
                </div>

                {/* Visible on Desktop by default, refined color change on hover */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors duration-500 text-left">
                    {step.detail}
                  </p>
                </div>
              </Reveal>

              {/* Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-900/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
