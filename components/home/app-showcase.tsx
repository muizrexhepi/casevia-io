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
} from "lucide-react";

// --- UTILS ---
const useInView = (options = { threshold: 0.2 }) => {
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

// --- VISUAL COMPONENTS ---

const IngestVisual = () => (
  <div className="relative w-full h-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors duration-500">
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: "radial-gradient(#1A1A1A 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />

    <div className="relative w-[380px] h-[260px] bg-white border-2 border-dashed border-charcoal/10 rounded-3xl flex flex-col items-center justify-center gap-6 shadow-sm group-hover:border-charcoal/20 transition-colors duration-500">
      {/* Animated Background Pulse */}
      <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/5 transition-colors duration-500 rounded-[22px]"></div>

      {/* Central Drop Zone */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-20 h-20 bg-terracotta rounded-2xl shadow-xl shadow-terracotta/30 flex items-center justify-center text-white animate-[float_6s_ease-in-out_infinite]">
          <FileAudio className="w-10 h-10" />
        </div>
        <div className="text-center space-y-1">
          <p className="font-serif text-xl text-charcoal">Upload Recording</p>
          <p className="text-xs text-charcoal/50 font-sans">
            MP3, MP4, WAV, MOV
          </p>
        </div>
      </div>

      {/* Flying Particles */}
      <div className="absolute top-8 left-8 w-8 h-8 bg-charcoal/5 rounded-lg animate-[float_4s_ease-in-out_infinite_1s] rotate-12"></div>
      <div className="absolute bottom-8 right-8 w-6 h-6 bg-terracotta/10 rounded-full animate-[float_5s_ease-in-out_infinite_0.5s]"></div>
    </div>
  </div>
);

const AnalyzeVisual = () => (
  <div className="relative w-full h-full bg-[#FAFAFA] flex flex-col items-center justify-center overflow-hidden group-hover:bg-white transition-colors duration-500 px-8">
    <div className="w-full max-w-md bg-white rounded-xl border border-charcoal/10 shadow-lg overflow-hidden relative">
      {/* Header */}
      <div className="h-10 border-b border-charcoal/5 bg-cream/20 flex items-center justify-between px-4">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-charcoal/20"></div>
          <div className="w-2 h-2 rounded-full bg-charcoal/20"></div>
        </div>
        <div className="text-[10px] font-mono text-charcoal/40">
          PROCESSING_ID_8291
        </div>
      </div>

      {/* Content */}
      <div className="p-8 relative">
        {/* Blurred Text Background */}
        <div className="space-y-4 opacity-30 blur-[1px]">
          <div className="h-3 w-full bg-charcoal rounded-full"></div>
          <div className="h-3 w-[90%] bg-charcoal rounded-full"></div>
          <div className="h-3 w-[95%] bg-charcoal rounded-full"></div>
          <div className="h-3 w-[85%] bg-charcoal rounded-full"></div>
          <div className="h-3 w-full bg-charcoal rounded-full"></div>
        </div>

        {/* Scanning Beam */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-terracotta/10 to-transparent animate-[scan_3s_linear_infinite] border-b border-terracotta/20"></div>

        {/* Pop-up Insight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-charcoal text-white p-4 rounded-lg shadow-2xl border border-white/10 animate-[float_5s_ease-in-out_infinite] z-10 w-[240px]">
          <div className="text-[9px] font-bold uppercase tracking-widest text-terracotta mb-1 flex items-center gap-2">
            <Sparkles className="w-3 h-3" /> Insight Detected
          </div>
          <div className="font-serif text-sm leading-snug">
            "Manual data entry was costing us 20 hours per week."
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DraftVisual = () => (
  <div className="relative w-full h-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors duration-500">
    <div className="w-[90%] max-w-lg bg-white rounded-xl border border-charcoal/10 shadow-xl relative overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-14 border-r border-charcoal/5 bg-cream/20 flex flex-col items-center py-6 gap-4">
        <div className="w-8 h-8 rounded-lg bg-charcoal text-cream flex items-center justify-center shadow-md">
          <PenTool className="w-4 h-4" />
        </div>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-charcoal/20">
          <Mic className="w-4 h-4" />
        </div>
        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-charcoal/20">
          <FileText className="w-4 h-4" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 relative">
        <div className="space-y-4">
          <div className="inline-block px-2 py-0.5 bg-terracotta/10 text-terracotta text-[9px] font-bold uppercase tracking-wide rounded">
            Growth Story
          </div>
          <h3 className="font-serif text-2xl text-charcoal">
            Nexus Corp Scaling
          </h3>

          <div className="space-y-3 font-sans text-charcoal/70 text-sm leading-relaxed">
            <p>
              Before Casevia, the team struggled with disconnected workflows.
            </p>
            <div className="relative inline-block group/highlight">
              <span className="bg-yellow-100/80 text-charcoal px-1 rounded cursor-pointer border-b border-yellow-300">
                "It was essentially chaos,"
              </span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-charcoal text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                <span className="font-mono">04:12</span>
              </div>
            </div>
            <span> says Sarah Jenkins.</span>
          </div>
        </div>

        {/* Ghost Cursor */}
        <div className="absolute bottom-10 right-10 animate-[float_4s_ease-in-out_infinite]">
          <MousePointer2 className="w-5 h-5 fill-terracotta text-white drop-shadow-md" />
          <div className="ml-3 bg-terracotta text-white text-[9px] px-1.5 py-0.5 rounded shadow-sm">
            Sarah
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ExportVisual = () => (
  <div className="relative w-full h-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden group-hover:bg-white transition-colors duration-500">
    <div className="relative w-[320px] h-[320px] flex items-center justify-center">
      {/* Center Hub */}
      <div className="absolute z-20 w-20 h-20 bg-charcoal text-white rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white ring-1 ring-charcoal/10">
        <Share2 className="w-8 h-8" />
      </div>

      {/* Orbiting Nodes */}
      <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-charcoal/10 rounded-xl shadow-lg flex items-center justify-center text-red-500">
          <FileText className="w-6 h-6" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-white border border-charcoal/10 rounded-xl shadow-lg flex items-center justify-center text-blue-500">
          <Globe className="w-6 h-6" />
        </div>
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-charcoal/10 rounded-xl shadow-lg flex items-center justify-center text-charcoal">
          <LayoutTemplate className="w-6 h-6" />
        </div>
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white border border-charcoal/10 rounded-xl shadow-lg flex items-center justify-center text-purple-500">
          <Command className="w-6 h-6" />
        </div>
      </div>

      {/* Connection Rings */}
      <div className="absolute inset-8 border border-dashed border-charcoal/10 rounded-full"></div>
      <div className="absolute inset-20 border border-charcoal/5 rounded-full"></div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---

const steps = [
  {
    id: "ingest",
    label: "01 — Ingest",
    title: "Universal Ingest",
    description:
      "Drag & drop raw audio files or paste a URL from Zoom, Gong, or Google Meet. We handle format conversion and secure upload automatically.",
    visual: IngestVisual,
  },
  {
    id: "analyze",
    label: "02 — Extract",
    title: "Semantic Extraction",
    description:
      "Our AI engine maps the narrative arc, identifying core challenges, implemented solutions, and hard ROI metrics without manual tagging.",
    visual: AnalyzeVisual,
  },
  {
    id: "draft",
    label: "03 — Verify",
    title: "Verifiable Editor",
    description:
      "Review the generated draft with confidence. Every claim is citation-linked to the original audio timestamp, ensuring 100% accuracy.",
    visual: DraftVisual,
  },
  {
    id: "export",
    label: "04 — Publish",
    title: "Publication Ready",
    description:
      "Export perfectly formatted case studies directly to PDF, Notion, or your headless CMS. Ready for your sales team in minutes.",
    visual: ExportVisual,
  },
];

const AppShowcase: React.FC = () => {
  return (
    <section className="w-full bg-cream px-6 md:px-12">
      <div className="max-w-7xl mx-auto border-t border-charcoal/5 py-24 flex flex-col gap-32">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-charcoal/60">
              The Workflow
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl text-charcoal leading-[0.9] tracking-tight">
            From chaos to{" "}
            <span className="italic font-light text-charcoal/60">clarity.</span>
          </h2>
          <p className="font-sans text-lg text-charcoal/60 max-w-lg leading-relaxed">
            A unified pipeline that turns messy recordings into polished assets
            in four simple steps.
          </p>
        </div>

        {/* Steps Loop - Zigzag Layout */}
        <div className="flex flex-col gap-24 lg:gap-40">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const { ref, isInView } = useInView({ threshold: 0.3 });

            return (
              <div
                key={step.id}
                ref={ref}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Text Side */}
                <div
                  className={`flex-1 flex flex-col gap-6 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                >
                  <span className="font-mono text-xs font-bold text-terracotta tracking-widest uppercase">
                    {step.label}
                  </span>
                  <h3 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-lg text-charcoal/70 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                  <div className="pt-4">
                    <button className="group flex items-center gap-2 text-sm font-bold text-charcoal hover:text-terracotta transition-colors uppercase tracking-wide">
                      Learn more{" "}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Visual Side */}
                <div
                  className={`flex-1 w-full transition-all duration-1000 delay-200 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                >
                  <div className="aspect-[4/3] md:aspect-[16/10] bg-white rounded-2xl border border-charcoal/5 shadow-2xl shadow-charcoal/5 overflow-hidden group hover:shadow-3xl hover:shadow-terracotta/10 hover:border-charcoal/10 transition-all duration-500 ring-1 ring-charcoal/5">
                    {/* Browser Controls (Aesthetic) */}
                    <div className="h-8 border-b border-charcoal/5 bg-cream/30 flex items-center px-4 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-charcoal/10"></div>
                      <div className="w-2 h-2 rounded-full bg-charcoal/10"></div>
                    </div>
                    {/* Render Specific Visual */}
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
