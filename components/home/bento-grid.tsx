import React from "react";
import { Mic, CheckCircle, Zap, Layers, Link as LinkIcon } from "lucide-react";

const BentoGrid: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12">
      <div className="max-w-7xl mx-auto py-24 border-t border-charcoal/10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-charcoal/60">
                Capabilities
              </span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal leading-[0.9] tracking-tight">
              Intelligence, <br />
              <span className="italic text-charcoal/60 font-light">
                structured.
              </span>
            </h2>
          </div>
          <p className="font-sans text-lg text-charcoal/70 max-w-sm leading-relaxed text-left">
            Our engine dissects conversation nuances to build compelling,
            fact-checked narratives aligned with your brand.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Semantic Analysis (Span 2) */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-10 border border-charcoal/5 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden group hover:border-charcoal/20 transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              <div className="w-12 h-12 bg-card-bg rounded-full flex items-center justify-center text-charcoal border border-charcoal/5">
                <Layers className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-3xl md:text-4xl text-charcoal">
                  Semantic Extraction
                </h3>
                <p className="font-sans text-charcoal/60 leading-relaxed max-w-md">
                  We don't just transcribe words. We map customer sentiment to
                  your value propositions, automatically identifying the
                  "Challenge," "Solution," and "Result" arc.
                </p>
              </div>
            </div>
            {/* Abstract Visual Decoration */}
            <div className="absolute right-[-20px] top-[-20px] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
              <Layers className="w-80 h-80 rotate-12" />
            </div>
          </div>

          {/* Card 2: Speed (Span 1) - Dark Mode */}
          <div className="md:col-span-1 bg-charcoal rounded-3xl p-8 md:p-10 border border-charcoal/5 shadow-lg relative overflow-hidden group text-cream">
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-cream backdrop-blur-sm">
                <Zap className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-3xl md:text-4xl text-cream">
                  Instant Velocity
                </h3>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-3 text-cream/60 line-through text-sm font-sans">
                    <span>Drafting (3 days)</span>
                  </div>
                  <div className="flex items-center gap-3 text-terracotta text-lg font-medium font-sans">
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Generated (2 min)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Integrations (Span 1) */}
          <div className="md:col-span-1 bg-white rounded-3xl p-8 md:p-10 border border-charcoal/5 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden group hover:border-charcoal/20 transition-all duration-500">
            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              <div className="w-12 h-12 bg-card-bg rounded-full flex items-center justify-center text-charcoal border border-charcoal/5">
                <Mic className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-3xl md:text-4xl text-charcoal">
                  Universal Ingest
                </h3>
                <p className="font-sans text-charcoal/60 leading-relaxed">
                  Drag and drop directly from Zoom, Gong, or Google Meet. No
                  format conversion needed.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Accuracy (Span 2) */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-10 border border-charcoal/5 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden group hover:border-charcoal/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#D97757_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.05]"></div>

            <div className="relative z-10 flex flex-col h-full justify-between gap-12">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-card-bg rounded-full flex items-center justify-center text-charcoal border border-charcoal/5">
                  <CheckCircle className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="bg-green-500/10 text-green-700 px-3 py-1 rounded-full text-xs font-sans font-medium uppercase tracking-wider border border-green-500/20">
                  100% Citable
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-md flex flex-col gap-4">
                  <h3 className="font-serif text-3xl md:text-4xl text-charcoal">
                    Zero Hallucinations
                  </h3>
                  <p className="font-sans text-charcoal/60 leading-relaxed">
                    Every claim generated is hyperlinked directly to the source
                    audio timestamp.
                    <br />
                    <span className="text-terracotta inline-flex items-center gap-1 cursor-pointer hover:underline decoration-1 underline-offset-4 mt-2">
                      See a sample citation <LinkIcon className="w-3 h-3" />
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
