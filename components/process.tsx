import React from "react";
import { Reveal } from "./ui/Reveal";
import { Crosshair, Zap, Layers, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Crosshair className="w-6 h-6" />,
    title: "Discovery",
    desc: "We analyze your market position, audit your data, and identify the gaps where your competitors are missing the mark.",
    tag: "Audit",
  },
  {
    number: "02",
    icon: <Layers className="w-6 h-6" />,
    title: "Strategy",
    desc: "We build a comprehensive visual and verbal system. No decoration. Every pixel is calculated to position you as the category leader.",
    tag: "Design",
  },
  {
    number: "03",
    icon: <Zap className="w-6 h-6" />,
    title: "Engineering",
    desc: "We deploy using Next.js for sub-second load times. Pixel-perfect implementation that ranks high on search engines.",
    tag: "Build",
  },
  {
    number: "04",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Evolution",
    desc: "Launch is just the start. We implement feedback loops and analytics to continuously optimize your conversion rates.",
    tag: "Scale",
  },
];

export const Process: React.FC = () => {
  return (
    <section
      id="process"
      className="py-32 bg-zinc-100 text-black border-t border-black/5"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header - Left Aligned */}
        <div className="flex flex-col justify-start items-start mb-24">
          <div className="max-w-xl mb-12">
            <Reveal>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
                The Framework
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-7xl font-medium uppercase tracking-tighter leading-[0.9] text-black">
                Systematic <br /> Execution.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-sm font-medium text-gray-500 max-w-md uppercase tracking-wide leading-loose border-l border-gray-300 pl-6 ml-2">
              A four-stage protocol designed to eliminate risk and guarantee
              predictable outcomes.
            </p>
          </Reveal>
        </div>

        {/* 2x2 Grid Layout - Consistent Sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className="h-full">
              <div className="group relative bg-white p-12 h-full border border-black/5 hover:border-black transition-colors duration-500 flex flex-col justify-between min-h-[360px]">
                {/* Top Row */}
                <div className="flex justify-between items-start mb-12">
                  <span className="font-display text-4xl font-medium text-gray-200 group-hover:text-black transition-colors duration-500">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 border border-black/5 px-3 py-1 rounded-full group-hover:border-black group-hover:text-black transition-colors duration-300">
                    {step.tag}
                  </span>
                </div>

                {/* Bottom Row */}
                <div>
                  <h3 className="font-display text-3xl font-medium uppercase tracking-tight mb-6 text-black group-hover:translate-x-2 transition-transform duration-500">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium uppercase tracking-wide leading-loose max-w-sm group-hover:text-black transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
