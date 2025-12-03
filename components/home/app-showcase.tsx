"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FileAudio,
  TrendingUp,
  PenTool,
  Share2,
  FileText,
  Mic,
  MousePointer2,
  LayoutTemplate,
  Globe,
  Command,
} from "lucide-react";

const useInView = (threshold = 0.15) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsInView(true),
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return { ref, isInView };
};

const IngestVisual = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-cream/40 to-white flex items-center justify-center overflow-hidden">
    <div className="relative w-[85%] h-[80%] bg-white border border-charcoal/[0.08] rounded-2xl flex flex-col items-center justify-center gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-10">
      {/* Removed animation class: animate-[float_6s_ease-in-out_infinite] */}
      <div className="w-24 h-24 bg-gradient-to-br from-terracotta to-terracotta/80 rounded-3xl shadow-xl shadow-terracotta/20 flex items-center justify-center text-white">
        <FileAudio className="w-12 h-12 stroke-[1.5]" />
      </div>
      <div className="text-center space-y-1.5">
        <p className="font-serif text-[1.75rem] text-charcoal leading-tight">
          Drop your recording
        </p>
        <p className="text-sm text-charcoal/55 font-sans">
          Zoom, Gong, Google Meet — any file works
        </p>
      </div>
    </div>
  </div>
);

const AnalyzeVisual = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-white to-cream/25 flex items-center justify-center p-10">
    <div className="w-full max-w-md bg-white rounded-2xl border border-charcoal/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
      <div className="h-12 border-b border-charcoal/[0.06] bg-cream/25 flex items-center justify-between px-5">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-charcoal/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-charcoal/10" />
        </div>
        <div className="text-[10px] font-mono text-charcoal/35 tracking-wider">
          PROCESSING
        </div>
      </div>

      <div className="p-10 relative">
        <div className="space-y-4 opacity-20">
          {[100, 85, 95, 80, 100].map((w, i) => (
            <div
              key={i}
              className="h-3 bg-charcoal rounded-full"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>

        {/* Removed animation class: animate-[scan_3s_ease-in-out_infinite] */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-terracotta/20 via-terracotta/10 to-transparent border-b border-terracotta/30" />

        {/* Removed animation class: animate-[float_5s_ease-in-out_infinite] */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terracotta text-white px-5 py-4 rounded-xl shadow-2xl border border-white/20 w-[85%]">
          <div className="text-[9px] font-semibold uppercase tracking-widest text-white/70 mb-1.5 flex items-center gap-2">
            <TrendingUp className="w-3 h-3" />
            Extracted Insight
          </div>
          <p className="font-serif text-sm leading-relaxed">
            “Manual data entry was costing us <strong>20 hours per week</strong>
            ”
          </p>
        </div>
      </div>
    </div>
  </div>
);

const DraftVisual = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-cream/40 to-white flex items-center justify-center p-6">
    <div className="w-full max-w-lg bg-white rounded-2xl border border-charcoal/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-16 border-r border-charcoal/[0.06] bg-cream/30 flex flex-col items-center py-8 gap-5">
        <div className="w-10 h-10 rounded-xl bg-terracotta text-white flex items-center justify-center shadow-md">
          <PenTool className="w-5 h-5 stroke-[1.5]" />
        </div>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-charcoal/25">
          <Mic className="w-5 h-5 stroke-[1.5]" />
        </div>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-charcoal/25">
          <FileText className="w-5 h-5 stroke-[1.5]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 relative font-sans">
        <div className="space-y-5">
          <div className="inline-block px-2.5 py-1 bg-charcoal/5 text-charcoal/70 text-[10px] font-bold uppercase tracking-wide rounded">
            Case Study Draft
          </div>

          <h3 className="font-serif text-[1.9rem] text-charcoal leading-tight">
            Nexus Corp Success Story
          </h3>

          <div className="text-charcoal/70 text-sm leading-relaxed space-y-3">
            <p>
              Before Casevia, the team struggled with scattered workflows and
              slow turnaround times…
            </p>

            <span className="relative inline-block group/quote">
              <span className="bg-terracotta/20 text-charcoal px-1.5 py-0.5 rounded border-b-2 border-terracotta/40 font-medium cursor-pointer">
                “It was essentially chaos”
              </span>

              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-charcoal text-white text-[10px] px-3 py-1.5 rounded shadow-xl flex items-center gap-2 opacity-0 group-hover/quote:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {/* Removed animation class: animate-pulse */}
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="font-mono">Source: 04:12</span>
              </div>
            </span>
            <span> said Sarah Jenkins, Head of Operations.</span>

            <p>After adoption, onboarding completion rose to 94%.</p>
          </div>
        </div>

        {/* Removed animation class: animate-[float_4s_ease-in-out_infinite] */}
        <div className="absolute bottom-8 right-8 flex items-center gap-2">
          <MousePointer2 className="w-5 h-5 fill-terracotta text-white drop-shadow" />
          <div className="bg-terracotta text-white text-[10px] px-2 py-1 rounded shadow font-sans font-medium">
            Edit
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExportVisual = () => (
  <div className="relative w-full h-full bg-gradient-to-br from-white to-cream/30 flex items-center justify-center overflow-hidden p-6">
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Center */}
      <div className="absolute z-20 w-28 h-28 bg-gradient-to-br from-terracotta to-terracotta/80 text-white rounded-3xl shadow-2xl shadow-terracotta/30 flex items-center justify-center border-4 border-white">
        <Share2 className="w-12 h-12 stroke-[1.5]" />
      </div>

      {/* Orbiting Formats */}
      {/* Removed animation class: animate-[spin_25s_linear_infinite] */}
      <div className="absolute w-full h-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-charcoal/[0.08] rounded-2xl shadow flex items-center justify-center rotate-[-10deg] text-red-500">
          <FileText className="w-7 h-7" />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white border border-charcoal/[0.08] rounded-2xl shadow flex items-center justify-center rotate-[8deg] text-charcoal">
          <Globe className="w-7 h-7" />
        </div>

        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-charcoal/[0.08] rounded-2xl shadow flex items-center justify-center rotate-[-5deg] text-blue-500">
          <LayoutTemplate className="w-7 h-7" />
        </div>

        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-charcoal/[0.08] rounded-2xl shadow flex items-center justify-center rotate-[15deg] text-purple-500">
          <Command className="w-7 h-7" />
        </div>
      </div>
    </div>
  </div>
);

const steps = [
  {
    id: "ingest",
    number: "01",
    title: "Universal Ingest",
    tagline: "Any source, any format",
    description:
      "Drop Zoom or Google Meet recordings, paste a link, or upload any audio file. We handle transcription, cleanup, and formatting instantly.",
    visual: IngestVisual,
  },
  {
    id: "analyze",
    number: "02",
    title: "Semantic Extraction",
    tagline: "AI finds the story arc",
    description:
      "Our engine identifies the Challenge → Solution → Result narrative, extracts ROI metrics, and analyzes customer sentiment automatically.",
    visual: AnalyzeVisual,
  },
  {
    id: "draft",
    number: "03",
    title: "Verifiable Editor",
    tagline: "Every claim is sourced",
    description:
      "Review the draft with confidence. Every quote and statistic links directly to its source timestamp—zero hallucinations.",
    visual: DraftVisual,
  },
  {
    id: "export",
    number: "04",
    title: "Multi-Format Export",
    tagline: "One upload, five assets",
    description:
      "Export to PDF, HTML, Notion, LinkedIn, Twitter, or push directly to your CMS. Share-ready assets for sales and marketing.",
    visual: ExportVisual,
  },
];

const AppShowcase: React.FC = () => {
  return (
    <section className="w-full bg-cream px-6 md:px-12">
      <div className="max-w-6xl mx-auto pb-16 md:pb-20 lg:pb-24 flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
          <h2 className="font-serif text-[2.75rem] md:text-5xl lg:text-6xl text-charcoal leading-[0.92] tracking-tight">
            From chaos to{" "}
            <span className="italic text-charcoal font-normal text-[3rem] md:text-[3.3rem] lg:text-[3.9rem]">
              clarity
            </span>
          </h2>

          <p className="font-sans text-lg md:text-xl text-charcoal/80 leading-relaxed max-w-xl mx-auto mb-8 font-light">
            Four steps. Zero manual work. Professional-grade case studies in
            under 30 minutes.
          </p>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-24 md:gap-32">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            const { ref, isInView } = useInView(0.2);

            return (
              <div
                key={step.id}
                ref={ref}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text */}
                <div className={`flex-1 flex flex-col gap-5`}>
                  {/* <div className="inline-flex items-center gap-3 text-terracotta/70">
                    <span className="font-mono text-sm font-bold tracking-widest">
                      {step.number}
                    </span>
                    <div className="h-px w-8 bg-terracotta/30" />
                    <span className="text-xs font-sans font-semibold uppercase tracking-[0.15em]">
                      {step.tagline}
                    </span>
                  </div> */}

                  <h3 className="font-serif text-2xl md:text-[2.5rem] text-charcoal leading-[1.1] tracking-tight">
                    {step.title}
                  </h3>

                  <p className="font-sans text-base md:text-lg text-charcoal/70 leading-relaxed max-w-lg font-light">
                    {step.description}
                  </p>
                </div>

                {/* Visual */}
                <div
                  // Removed transition-all duration-1000 ease-out delay-200 from the visual element for simplicity, as it wasn't a standard CSS animation but a scroll-based entry effect.
                  className={`flex-1 w-full`}
                >
                  <div className="aspect-[16/13] md:aspect-[16/11] bg-white rounded-3xl border border-charcoal/[0.06] shadow-[0_4px_30px_-8px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] hover:border-charcoal/[0.1] transition-all duration-500">
                    <step.visual />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
