import React from "react";
import { Mic, CheckCircle, Zap, Layers, Link as LinkIcon } from "lucide-react";

const BentoGrid: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 bg-cream">
      <div className="max-w-6xl mx-auto py-16 md:py-20 lg:py-24 border-t border-charcoal/10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 lg:mb-20 flex flex-col gap-6 md:gap-7">
          <h2 className="font-serif text-[2.75rem] md:text-5xl lg:text-6xl text-charcoal leading-[0.92] tracking-tight max-w-2xl">
            Intelligence, <br />
            <span className="italic text-charcoal font-normal text-[3rem] md:text-[3.3rem] lg:text-[3.9rem]">
              structured.
            </span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-xl font-light">
            Our engine dissects conversation nuances to build compelling,
            fact-checked narratives aligned with your brand.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Card 1: Semantic Analysis (Span 2) */}
          <div className="md:col-span-2 bg-white rounded-2xl md:rounded-3xl p-7 md:p-9 lg:p-10 border border-charcoal/[0.06] shadow-[0_2px_20px_-12px_rgba(0,0,0,0.08)] relative overflow-hidden group hover:border-charcoal/[0.12] hover:shadow-[0_4px_30px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full justify-between gap-10 md:gap-12">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-card-bg rounded-xl flex items-center justify-center text-charcoal border border-charcoal/[0.06] group-hover:bg-terracotta/5 group-hover:border-terracotta/20 transition-all duration-300">
                <Layers className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <h3 className="font-serif text-[1.75rem] md:text-3xl lg:text-4xl text-charcoal leading-tight tracking-tight">
                  Semantic Extraction
                </h3>
                <p className="font-sans text-[15px] md:text-base text-charcoal/60 leading-relaxed max-w-lg">
                  We don't just transcribe words. We map customer sentiment to
                  your value propositions, automatically identifying the
                  "Challenge," "Solution," and "Result" arc.
                </p>
              </div>
            </div>
            {/* Abstract Visual Decoration */}
            <div className="absolute right-[-20px] top-[-20px] opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none">
              <Layers className="w-64 md:w-80 h-64 md:h-80 rotate-12" />
            </div>
          </div>

          {/* Card 2: Speed (Span 1) - Dark Mode */}
          <div className="md:col-span-1 bg-charcoal rounded-2xl md:rounded-3xl p-7 md:p-9 lg:p-10 border border-charcoal shadow-lg relative overflow-hidden group text-cream hover:shadow-xl transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full justify-between gap-10 md:gap-12">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-cream/8 rounded-xl flex items-center justify-center text-cream backdrop-blur-sm group-hover:bg-cream/12 transition-all duration-300">
                <Zap className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <h3 className="font-serif text-[1.75rem] md:text-3xl lg:text-4xl text-cream leading-tight tracking-tight">
                  Instant Velocity
                </h3>
                <div className="flex flex-col gap-2 mt-1 md:mt-2">
                  <div className="flex items-center gap-2.5 text-cream/50 line-through text-sm font-sans">
                    <span>Drafting (3 days)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-terracotta text-base md:text-lg font-semibold font-sans">
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Generated (2 min)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Integrations (Span 1) */}
          <div className="md:col-span-1 bg-white rounded-2xl md:rounded-3xl p-7 md:p-9 lg:p-10 border border-charcoal/[0.06] shadow-[0_2px_20px_-12px_rgba(0,0,0,0.08)] relative overflow-hidden group hover:border-charcoal/[0.12] hover:shadow-[0_4px_30px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full justify-between gap-10 md:gap-12">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-card-bg rounded-xl flex items-center justify-center text-charcoal border border-charcoal/[0.06] group-hover:bg-terracotta/5 group-hover:border-terracotta/20 transition-all duration-300">
                <Mic className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <h3 className="font-serif text-[1.75rem] md:text-3xl lg:text-4xl text-charcoal leading-tight tracking-tight">
                  Universal Ingest
                </h3>
                <p className="font-sans text-[15px] md:text-base text-charcoal/60 leading-relaxed">
                  Drag and drop directly from Zoom, Gong, or Google Meet. No
                  format conversion needed.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Accuracy (Span 2) */}
          <div className="md:col-span-2 bg-white rounded-2xl md:rounded-3xl p-7 md:p-9 lg:p-10 border border-charcoal/[0.06] shadow-[0_2px_20px_-12px_rgba(0,0,0,0.08)] relative overflow-hidden group hover:border-charcoal/[0.12] hover:shadow-[0_4px_30px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#D97757_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700"></div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-10 md:gap-12">
              <div className="w-11 h-11 md:w-12 md:h-12 bg-card-bg rounded-xl flex items-center justify-center text-charcoal border border-charcoal/[0.06] group-hover:bg-terracotta/5 group-hover:border-terracotta/20 transition-all duration-300">
                <CheckCircle className="w-5 h-5 stroke-[1.5]" />
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                <div className="max-w-lg flex flex-col gap-3 md:gap-4">
                  <h3 className="font-serif text-[1.75rem] md:text-3xl lg:text-4xl text-charcoal leading-tight tracking-tight">
                    Zero Hallucinations
                  </h3>
                  <p className="font-sans text-[15px] md:text-base text-charcoal/60 leading-relaxed">
                    Every claim generated is hyperlinked directly to the source
                    audio timestamp. 100% citable, 100% verifiable.
                    <span className="block mt-2.5">
                      <span className="text-terracotta inline-flex items-center gap-1.5 font-medium cursor-pointer hover:underline decoration-1 underline-offset-4 transition-all">
                        See a sample citation{" "}
                        <LinkIcon className="w-3.5 h-3.5" />
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
