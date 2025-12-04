import React from "react";
import {
  FileAudio,
  Sparkles,
  FileText,
  Share2,
  CheckCircle2,
  Clock,
  Quote,
  Download,
} from "lucide-react";

const steps = [
  {
    id: "upload",
    number: "01",
    title: "Upload any interview format",
    description:
      "Drop recordings from Zoom, Google Meet, Gong, or any audio/video file. We handle transcription and formatting automatically.",
    visual: (
      // Light Mode Visual Container
      <div className="relative w-full h-full bg-gradient-to-br from-white to-cream/30 flex items-center justify-center p-8 sm:p-12">
        <div className="relative w-full max-w-md">
          {/* Inner Card (Light) */}
          <div className="bg-white border border-dashed border-charcoal/15 rounded-2xl p-10 sm:p-14 flex flex-col items-center gap-6 hover:border-terracotta/40 hover:bg-terracotta/[0.02] transition-all duration-300 group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-terracotta/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FileAudio className="w-10 h-10 sm:w-12 sm:h-12 text-terracotta stroke-[1.5]" />
            </div>
            <div className="text-center space-y-2">
              <p className="font-serif text-2xl sm:text-[1.75rem] text-charcoal tracking-tight">
                Drop your recording
              </p>
              <p className="text-sm text-charcoal/50 font-sans font-light">
                Any format, any source
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {["MP3", "MP4", "WAV", "M4A"].map((format) => (
                <span
                  key={format}
                  className="px-3 py-1.5 bg-charcoal/5 text-charcoal/60 text-[10px] font-bold uppercase tracking-wider rounded-full"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "analyze",
    number: "02",
    title: "AI extracts the story arc",
    description:
      "Our engine identifies challenges, solutions, and results. It finds ROI metrics, customer quotes, and the complete narrative automatically.",
    visual: (
      // Light Mode Visual Container
      <div className="relative w-full h-full bg-gradient-to-br from-cream/20 to-white flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md">
          {/* Inner Card (Light) */}
          <div className="bg-white rounded-2xl border border-charcoal/10 shadow-xl overflow-hidden">
            {/* Window Header (Light) */}
            <div className="h-12 bg-cream/40 border-b border-charcoal/8 flex items-center justify-between px-5">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-terracotta animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal/70 font-sans">
                  Analyzing...
                </span>
              </div>
              <span className="text-[10px] font-mono text-charcoal/40">
                2m 34s
              </span>
            </div>
            {/* Window Body (Light) */}
            <div className="p-6 sm:p-8 space-y-3">
              {/* Highlight Card 1 (Light) */}
              <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-100 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0 stroke-[1.5]" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wide text-green-900 mb-1 font-sans">
                    Challenge Found
                  </p>
                  <p className="text-sm text-green-700 leading-relaxed font-sans font-light">
                    Manual data entry costing 20hrs/week
                  </p>
                </div>
              </div>
              {/* Highlight Card 2 (Light) */}
              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <Quote className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 stroke-[1.5]" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-900 mb-1 font-sans">
                    Key Quote
                  </p>
                  <p className="text-sm text-blue-700 leading-relaxed font-serif italic">
                    "It was essentially chaos..."
                  </p>
                </div>
              </div>
              {/* Highlight Card 3 (Light) */}
              <div className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-100 rounded-xl">
                <Sparkles className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 stroke-[1.5]" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wide text-purple-900 mb-1 font-sans">
                    Result Metric
                  </p>
                  <p className="text-sm text-purple-700 leading-relaxed font-sans font-light">
                    94% onboarding completion rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "verify",
    number: "03",
    title: "Every claim is source-verified",
    description:
      "Review the draft with confidence. Each quote and metric links to its exact timestamp in the original recording—zero hallucinations guaranteed.",
    visual: (
      // Light Mode Visual Container
      <div className="relative w-full h-full bg-gradient-to-br from-white to-cream/30 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-lg">
          {/* Inner Card (Light) */}
          <div className="bg-white rounded-2xl border border-charcoal/10 shadow-xl overflow-hidden">
            <div className="h-12 bg-cream/40 border-b border-charcoal/8 flex items-center justify-between px-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/70 font-sans">
                Draft Preview
              </span>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="text-[10px] text-charcoal/50 font-sans font-medium uppercase tracking-wide">
                  Saved
                </span>
              </div>
            </div>
            <div className="p-8 sm:p-10 space-y-5">
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal leading-tight">
                Nexus Corp Operations
              </h3>
              <div className="space-y-4 text-sm sm:text-[15px]">
                <p className="text-charcoal/70 leading-relaxed font-sans font-light">
                  Before Casevia, the team struggled with fragmented workflows.
                </p>
                <p className="text-charcoal/70 leading-relaxed font-sans font-light">
                  <span className="relative inline-block group cursor-pointer transition-colors hover:text-charcoal">
                    <span className="bg-terracotta/15 border-b border-terracotta/40 px-1 py-0.5 text-charcoal font-medium">
                      "It was essentially chaos"
                    </span>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-charcoal border border-charcoal/10 text-white text-[10px] font-bold uppercase tracking-wide rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-sans">
                      Source: 04:12
                    </span>
                  </span>{" "}
                  said Sarah Jenkins. After implementation,{" "}
                  <span className="relative inline-block group cursor-pointer transition-colors hover:text-charcoal">
                    <span className="bg-terracotta/15 border-b border-terracotta/40 px-1 py-0.5 text-charcoal font-medium">
                      rates rose to 94%
                    </span>
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-charcoal border border-charcoal/10 text-white text-[10px] font-bold uppercase tracking-wide rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-sans">
                      Source: 12:34
                    </span>
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "export",
    number: "04",
    title: "Export to any format, instantly",
    description:
      "One interview becomes five assets. Export to PDF, HTML, Notion, or share directly to LinkedIn and Twitter. Ready for sales and marketing.",
    visual: (
      // Light Mode Visual Container
      <div className="relative w-full h-full bg-gradient-to-br from-cream/20 to-white flex items-center justify-center p-8 sm:p-12 overflow-hidden">
        <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
          {/* Center Orb (Accent color preserved) */}
          <div className="absolute z-10 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-terracotta to-terracotta/60 rounded-3xl shadow-2xl shadow-terracotta/30 flex items-center justify-center border border-white/10 ring-4 ring-white/30">
            <Download className="w-12 h-12 sm:w-14 sm:h-14 text-white stroke-[1.5]" />
          </div>

          {/* Orbiting Icons (Light) */}
          {[
            {
              icon: FileText,
              label: "PDF",
              rotate: "-8deg",
              pos: "top-4 left-1/2 -translate-x-1/2",
            },
            {
              icon: FileText,
              label: "HTML",
              rotate: "6deg",
              pos: "bottom-4 left-1/2 -translate-x-1/2",
            },
            {
              icon: FileText,
              label: "Notion",
              rotate: "-12deg",
              pos: "left-0 top-1/2 -translate-y-1/2",
            },
            {
              icon: Share2,
              label: "Post",
              rotate: "10deg",
              pos: "right-0 top-1/2 -translate-y-1/2",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`absolute ${item.pos} w-16 h-16 bg-white border border-charcoal/10 rounded-xl shadow-lg flex flex-col items-center justify-center gap-1 hover:rotate-0 hover:scale-110 hover:border-terracotta/30 hover:bg-cream transition-all duration-300 cursor-default`}
              style={{ transform: `rotate(${item.rotate})` }}
            >
              <item.icon className="w-6 h-6 text-charcoal/70 stroke-[1.5]" />
              <span className="text-[9px] font-bold text-charcoal/60 uppercase tracking-wider font-sans">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const AppShowcase = () => {
  return (
    // PRIMARY FIX: Section background and default text color reverted to light theme
    <section className="w-full bg-cream text-charcoal selection:bg-terracotta selection:text-white px-6 md:px-12">
      {/* Removed border-t to keep light section clean, adjusted padding for typical light section */}
      <div className="max-w-6xl mx-auto py-16 md:py-20 lg:py-24">
        {/* Header - Light Theme Colors */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-[2.75rem] md:text-5xl lg:text-6xl text-charcoal leading-[0.92] tracking-tight mb-6">
            How it works
          </h2>
          <p className="font-sans text-lg md:text-xl text-charcoal/70 leading-relaxed font-light max-w-xl">
            Four steps. Zero manual work. Professional-grade case studies in
            under 30 minutes.
          </p>
        </div>

        {/* Steps Loop (Structural changes kept, color changes applied) */}
        <div className="space-y-20 md:space-y-24 lg:space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-10 lg:gap-20`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-3 text-terracotta/80 justify-center lg:justify-start">
                    <span className="font-mono text-sm font-bold tracking-wider text-terracotta">
                      {step.number}
                    </span>
                    <div className="h-px w-8 bg-terracotta/30" />
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-charcoal leading-[1.1] tracking-tight max-w-lg mx-auto lg:mx-0">
                    {step.title}
                  </h3>

                  <p className="font-sans text-base md:text-lg text-charcoal/65 leading-relaxed font-light max-w-md mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Visual Content (Light Theme Container) */}
                <div className="flex-1 w-full max-w-xl lg:max-w-none">
                  <div className="aspect-[4/3] bg-cream/40 rounded-3xl border border-charcoal/8 shadow-[0_4px_30px_-8px_rgba(0,0,0,0.1)] overflow-hidden hover:border-charcoal/12 transition-colors duration-500">
                    {step.visual}
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
