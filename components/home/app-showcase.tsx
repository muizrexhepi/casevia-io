import React, { useState, useEffect, useRef } from "react";
import {
  UploadCloud,
  Sparkles,
  PenTool,
  Share2,
  FileText,
  Mic,
  Check,
  ArrowRight,
  MousePointer2,
  FileAudio,
  LayoutTemplate,
  Globe,
  Play,
  X,
  Search,
  Command,
  TrendingUp,
} from "lucide-react";

// --- UTILS (Kept as is for functionality) ---
const useInView = (options = { threshold: 0.3 }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return { ref, isInView };
};

// --- VISUAL COMPONENTS (Using the enhanced versions from the previous step) ---

// Define Visual Components (IngestVisual, AnalyzeVisual, DraftVisual, ExportVisual) here.
// NOTE: I am omitting the large component bodies here for brevity, assuming you will use the enhanced versions
// from the last response's code block for the best visual effect.

const IngestVisual = () => (
  <div className="relative w-full h-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors duration-500">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: "radial-gradient(#1A1A1A 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
    <div className="relative w-[80%] max-w-[380px] h-[75%] bg-white border border-charcoal/10 rounded-3xl flex flex-col items-center justify-center gap-6 shadow-lg group-hover:border-charcoal/20 transition-colors duration-500 p-8">
      <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/5 transition-colors duration-500 rounded-[22px]"></div>
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-20 h-20 bg-terracotta rounded-2xl shadow-xl shadow-terracotta/30 flex items-center justify-center text-white animate-[float_6s_ease-in-out_infinite]">
          <FileAudio className="w-10 h-10" />
        </div>
        <div className="text-center space-y-1">
          <p className="font-serif text-xl text-charcoal">
            Upload or Paste URL
          </p>
          <p className="text-xs text-charcoal/50 font-sans">
            Zoom, Gong, Google Meet compatible
          </p>
        </div>
      </div>
      <div className="absolute top-4 left-4 w-6 h-6 bg-charcoal/5 rounded-lg animate-[float_4s_ease-in-out_infinite_1s] rotate-12"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 bg-terracotta/10 rounded-full animate-[float_5s_ease-in-out_infinite_0.5s]"></div>
    </div>
  </div>
);

const AnalyzeVisual = () => (
  <div className="relative w-full h-full bg-[#FAFAFA] flex flex-col items-center justify-center overflow-hidden group-hover:bg-white transition-colors duration-500 px-8">
    <div className="w-full max-w-md bg-white rounded-xl border border-charcoal/10 shadow-lg overflow-hidden relative">
      <div className="h-10 border-b border-charcoal/5 bg-cream/20 flex items-center justify-between px-4">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-charcoal/20"></div>
          <div className="w-2 h-2 rounded-full bg-charcoal/20"></div>
        </div>
        <div className="text-[10px] font-mono text-charcoal/40">
          AI_PROCESS_ID_8291
        </div>
      </div>
      <div className="p-8 relative">
        <div className="space-y-4 opacity-30 blur-[1px]">
          <div className="h-3 w-full bg-charcoal rounded-full"></div>
          <div className="h-3 w-[90%] bg-charcoal rounded-full"></div>
          <div className="h-3 w-[95%] bg-charcoal rounded-full"></div>
          <div className="h-3 w-[85%] bg-charcoal rounded-full"></div>
          <div className="h-3 w-full bg-charcoal rounded-full"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-terracotta/10 to-transparent animate-[scan_3s_linear_infinite] border-b border-terracotta/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terracotta text-white p-4 rounded-lg shadow-2xl border border-white/20 animate-[float_5s_ease-in-out_infinite] z-10 w-[240px]">
          <div className="text-[9px] font-bold uppercase tracking-widest text-charcoal/30 mb-1 flex items-center gap-2">
            <TrendingUp className="w-3 h-3" /> ROI Extracted
          </div>
          <div className="font-serif text-sm leading-snug">
            "Manual data entry was costing us{" "}
            <span className="font-bold">20 hours per week</span>."
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DraftVisual = () => (
  <div className="relative w-full h-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors duration-500">
    <div className="w-[90%] max-w-lg bg-white rounded-xl border border-charcoal/10 shadow-xl relative overflow-hidden flex">
      <div className="w-14 border-r border-charcoal/5 bg-cream/20 flex flex-col items-center py-6 gap-4">
        <div className="w-8 h-8 rounded-lg bg-terracotta text-white flex items-center justify-center shadow-md">
          <PenTool className="w-4 h-4" />
        </div>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-charcoal/20">
          <Mic className="w-4 h-4" />
        </div>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-charcoal/20">
          <FileText className="w-4 h-4" />
        </div>
      </div>
      <div className="flex-1 p-8 relative">
        <div className="space-y-4">
          <div className="inline-block px-2 py-0.5 bg-charcoal/5 text-charcoal/70 text-[9px] font-bold uppercase tracking-wide rounded">
            Case Study Draft
          </div>
          <h3 className="font-serif text-xl text-charcoal">
            Nexus Corp Success Story
          </h3>
          <div className="space-y-3 font-sans text-charcoal/70 text-sm leading-relaxed mt-4">
            <p>
              Before Casevia, the team struggled with disconnected workflows...
            </p>
            <div className="relative inline-block group/highlight">
              <span className="bg-terracotta/20 text-charcoal px-1 rounded cursor-pointer border-b border-terracotta/40 font-medium">
                "It was essentially chaos,"
              </span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-charcoal text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap flex items-center gap-2 opacity-0 group-hover/highlight:opacity-100 transition-opacity duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-[pulse-slow_3s_ease-in-out_infinite]"></div>
                <span className="font-mono">Source: 04:12</span>
              </div>
            </div>
            <span> says Sarah Jenkins.</span>
            <p className="mt-3">
              This resulted in a 94% onboarding completion rate.
            </p>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 animate-[float_4s_ease-in-out_infinite]">
          <MousePointer2 className="w-5 h-5 fill-terracotta text-white drop-shadow-md" />
          <div className="ml-3 bg-terracotta text-white text-[9px] px-1.5 py-0.5 rounded shadow-sm">
            Edit
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExportVisual = () => (
  <div className="relative w-full h-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors duration-500">
    <div className="relative w-[320px] h-[320px] flex items-center justify-center">
      <div className="absolute z-20 w-24 h-24 bg-terracotta text-white rounded-3xl shadow-2xl shadow-terracotta/30 flex items-center justify-center border-4 border-white ring-1 ring-charcoal/10">
        <Share2 className="w-10 h-10" />
      </div>
      <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-charcoal/10 rounded-xl shadow-lg flex items-center justify-center text-red-500 rotate-[-15deg]">
          <FileText className="w-6 h-6" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-white border border-charcoal/10 rounded-xl shadow-lg flex items-center justify-center text-charcoal rotate-[10deg]">
          <Globe className="w-6 h-6" />
        </div>
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-charcoal/10 rounded-xl shadow-lg flex items-center justify-center text-blue-500 rotate-[-5deg]">
          <LayoutTemplate className="w-6 h-6" />
        </div>
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-charcoal/10 rounded-xl shadow-lg flex items-center justify-center text-purple-500 rotate-[20deg]">
          <Command className="w-6 h-6" />
        </div>
      </div>
      <div className="absolute inset-8 border border-dashed border-charcoal/10 rounded-full"></div>
      <div className="absolute inset-20 border border-charcoal/5 rounded-full"></div>
    </div>
  </div>
);

// --- MAIN COMPONENT DATA (Updated with highlights) ---
const steps = [
  {
    id: "ingest",
    label: "01",
    title: "Universal Ingest",
    highlight: "Integrates with Zoom, Gong, and Google Meet.",
    description:
      "Drag & drop raw audio files or paste a URL from Zoom, Gong, or Google Meet. We handle format conversion and secure upload automatically.",
    visual: IngestVisual,
  },
  {
    id: "analyze",
    label: "02",
    title: "Semantic Extraction",
    highlight: "AI maps the Challenge-Solution-Result arc.",
    description:
      "Our AI engine maps the narrative arc, identifying core challenges, implemented solutions, and hard ROI metrics without manual tagging.",
    visual: AnalyzeVisual,
  },
  {
    id: "draft",
    label: "03",
    title: "Verifiable Editor",
    highlight: "Every quote is linked to the original audio timestamp.",
    description:
      "Review the generated draft with confidence. Every claim is citation-linked to the original audio timestamp, ensuring 100% accuracy.",
    visual: DraftVisual,
  },
  {
    id: "export",
    label: "04",
    title: "Publication Ready",
    highlight: "Export directly to PDF, Notion, or your CMS.",
    description:
      "Export perfectly formatted case studies directly to PDF, Notion, or your headless CMS. Ready for your sales team in minutes.",
    visual: ExportVisual,
  },
];

const AppShowcase: React.FC = () => {
  return (
    <section className="w-full bg-cream px-6 md:px-12">
      <div className="max-w-6xl mx-auto border-t border-charcoal/10 py-20 md:py-32 flex flex-col gap-24">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mx-auto gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal/5 border border-charcoal/10 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse"></span>
            <span className="text-xs font-sans font-semibold text-terracotta uppercase tracking-wider">
              The 4-Step Pipeline
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-charcoal leading-[1.05] tracking-tight">
            From chaos to{" "}
            <span className="italic font-light text-charcoal/90">clarity.</span>
          </h2>
          <p className="font-sans text-lg md:text-xl text-charcoal/60 leading-relaxed max-w-xl font-light">
            A unified pipeline that turns messy customer recordings into
            polished, measurable assets in four simple steps.
          </p>
        </div>

        {/* Steps Loop - Refined Zigzag Layout */}
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const { ref, isInView } = useInView({ threshold: 0.3 });

            return (
              <div
                key={step.id}
                ref={ref}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Side (Content) */}
                <div
                  className={`flex-1 flex flex-col gap-4 transition-all duration-1000 ${
                    isEven ? "lg:pr-12" : "lg:pl-12"
                  } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                >
                  <span className="font-mono text-sm font-bold text-terracotta/70 tracking-widest uppercase">
                    {step.label} — {step.title}
                  </span>

                  <h3 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight tracking-tight">
                    {step.title}
                  </h3>

                  {/* Scannable Highlight Badge (New) */}
                  <div className="flex items-center gap-3 p-3 bg-white border border-charcoal/10 rounded-lg text-sm font-medium text-charcoal/80 shadow-sm">
                    <Check className="w-4 h-4 text-terracotta flex-shrink-0" />
                    <span className="font-sans">{step.highlight}</span>
                  </div>

                  <p className="font-sans text-base text-charcoal/65 leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>

                {/* Visual Side */}
                <div
                  className={`flex-1 w-full transition-all duration-1000 delay-200 ${
                    isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className="aspect-[16/10] bg-white rounded-3xl border border-charcoal/[0.06] shadow-[0_4px_30px_-12px_rgba(0,0,0,0.1)] overflow-hidden group hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.15)] hover:border-charcoal/[0.12] transition-all duration-500 relative">
                    {/* Subtle Radial Glow on Hover */}
                    <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/[0.04] transition-colors duration-500 pointer-events-none" />

                    {/* Browser Controls (Reverted to original simple style) */}
                    <div className="h-8 border-b border-charcoal/5 bg-cream/30 flex items-center px-4 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-charcoal/10"></div>
                      <div className="w-2 h-2 rounded-full bg-charcoal/10"></div>
                    </div>

                    <div className="w-full h-[calc(100%-32px)]">
                      <step.visual />
                    </div>
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
