"use client";

import React, { useState } from "react";
import {
  FileAudio,
  Sparkles,
  CheckCircle2,
  Clock,
  Quote,
  FileText,
  ArrowRight,
  X,
  Pause,
  BarChart3,
  FileDown,
  Globe,
  Share2,
  Layout,
  Search,
  MoreHorizontal,
} from "lucide-react";

// ==========================================
// --- SHARED "MINTLIFY" GRID CANVAS ---
// ==========================================

const GridCanvas = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative w-full h-full bg-cream/20 overflow-hidden flex items-center justify-center rounded-[2rem] ${className}`}
  >
    {/* CSS Grid Pattern */}
    <div
      className="absolute inset-0 z-0 opacity-[0.4]"
      style={{
        backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
        backgroundPosition: "center center",
        maskImage:
          "radial-gradient(circle at center, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 40%, transparent 100%)",
        opacity: 0.05,
      }}
    />

    {/* Content Container - Z-index ensures it sits above grid */}
    <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
      {children}
    </div>
  </div>
);

// ==========================================
// --- REFACTORED VISUAL STEPS ---
// ==========================================

// Step 1: Upload (Floating Widget Style)
const VisualStep1 = () => (
  <GridCanvas>
    <div className="relative w-full max-w-sm">
      {/* Floating Upload Widget */}
      <div className="bg-white rounded-2xl shadow-xl shadow-charcoal/5 border border-charcoal/5 p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/20"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/20"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/20"></div>
          </div>
          <span className="text-[10px] font-mono text-charcoal/30">
            UPLOAD_INTERFACE_V2
          </span>
        </div>

        {/* Drop Zone */}
        <div className="border-2 border-dashed border-charcoal/10 rounded-xl bg-charcoal/[0.02] h-40 flex flex-col items-center justify-center gap-3 transition-colors hover:bg-terracotta/[0.03] hover:border-terracotta/20 group cursor-pointer">
          <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-charcoal/5 flex items-center justify-center group-hover:scale-110 transition-transform">
            <FileAudio className="w-5 h-5 text-terracotta" />
          </div>
          <div className="text-center">
            <p className="text-xs font-semibold text-charcoal/80">
              Drop interview.mp3
            </p>
            <p className="text-[10px] text-charcoal/40 mt-0.5">
              Zoom, Meet, or Audio
            </p>
          </div>
        </div>

        {/* Floating Upload Status (Simulated Notification) */}
        <div className="absolute -bottom-5 left-4 right-4 bg-charcoal text-white text-xs p-3 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom-2 fade-in duration-700">
          <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
          <span className="font-medium">Processing audio...</span>
          <span className="ml-auto font-mono opacity-60">45%</span>
        </div>
      </div>

      {/* Decorative background blurs for depth */}
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 blur-3xl rounded-full"></div>
    </div>
  </GridCanvas>
);

// Step 2: AI Analysis (Floating Nodes)
const VisualStep2 = () => (
  <GridCanvas>
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Central Node: The Audio Source */}
      <div className="bg-white px-4 py-2 rounded-full border border-charcoal/10 shadow-sm flex items-center gap-2 mb-12 z-20">
        <div className="flex items-center gap-0.5 h-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-0.5 bg-terracotta animate-pulse"
              style={{
                height: `${Math.random() * 100}%`,
                animationDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>
        <span className="text-xs font-medium text-charcoal/70">
          Raw Interview
        </span>
      </div>

      {/* Branching Lines */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 opacity-20"
        viewBox="0 0 400 300"
      >
        <path
          d="M200 130 L 100 180"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="text-charcoal"
        />
        <path
          d="M200 130 L 300 180"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="text-charcoal"
        />
      </svg>

      {/* Extracted Insight Cards */}
      <div className="flex gap-4 sm:gap-8 w-full justify-center z-10">
        {/* Insight 1 */}
        <div className="bg-white p-4 rounded-xl border border-charcoal/10 shadow-lg shadow-charcoal/5 w-40 flex flex-col gap-2 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
            <Quote className="w-4 h-4 text-blue-500" />
          </div>
          <div>
            <div className="h-1.5 w-12 bg-charcoal/10 rounded-full mb-1.5"></div>
            <div className="h-1 w-full bg-charcoal/5 rounded-full mb-1"></div>
            <div className="h-1 w-2/3 bg-charcoal/5 rounded-full"></div>
          </div>
        </div>

        {/* Insight 2 */}
        <div className="bg-white p-4 rounded-xl border border-charcoal/10 shadow-lg shadow-charcoal/5 w-40 flex flex-col gap-2 transform rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-purple-500" />
          </div>
          <div>
            <div className="h-1.5 w-12 bg-charcoal/10 rounded-full mb-1.5"></div>
            <div className="h-1 w-full bg-charcoal/5 rounded-full mb-1"></div>
            <div className="h-1 w-2/3 bg-charcoal/5 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-[35%] bg-terracotta/10 text-terracotta text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm border border-terracotta/20 animate-pulse">
        EXTRACTING
      </div>
    </div>
  </GridCanvas>
);

// Step 3: Source Verified (Document Style)
const VisualStep3 = () => (
  <GridCanvas>
    <div className="relative w-full max-w-[340px] bg-white rounded-xl shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)] border border-charcoal/5 overflow-hidden">
      {/* Search/Nav Bar (Simplified) */}
      <div className="h-10 border-b border-charcoal/5 flex items-center px-4 gap-2">
        <div className="w-20 h-2 bg-charcoal/5 rounded-full"></div>
        <div className="ml-auto flex gap-1">
          <div className="w-2 h-2 rounded-full bg-charcoal/10"></div>
          <div className="w-2 h-2 rounded-full bg-charcoal/10"></div>
        </div>
      </div>

      <div className="p-6 relative">
        {/* Document Content */}
        <div className="space-y-3">
          <div className="h-2 w-full bg-charcoal/5 rounded-full"></div>
          <div className="h-2 w-5/6 bg-charcoal/5 rounded-full"></div>

          {/* The Active Highlight */}
          <div className="relative pl-3 py-1 group cursor-default">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-terracotta rounded-full"></div>
            <div className="h-2.5 w-11/12 bg-terracotta/20 rounded-sm mb-2"></div>
            <div className="h-2.5 w-4/5 bg-terracotta/20 rounded-sm"></div>

            {/* Tooltip popping out */}
            <div className="absolute -top-6 right-0 bg-charcoal text-white text-[9px] px-2 py-1 rounded shadow-md transform translate-y-1 opacity-100 transition-all flex items-center gap-1">
              <Clock className="w-2 h-2" /> 04:12
            </div>
          </div>

          <div className="h-2 w-full bg-charcoal/5 rounded-full"></div>
          <div className="h-2 w-4/5 bg-charcoal/5 rounded-full"></div>
        </div>
      </div>

      {/* Mini Player */}
      <div className="bg-charcoal/5 p-3 flex items-center gap-3 border-t border-charcoal/5">
        <div className="w-6 h-6 rounded-full bg-terracotta flex items-center justify-center">
          <Pause className="w-3 h-3 text-white fill-current" />
        </div>
        <div className="flex-1 h-1 bg-charcoal/10 rounded-full overflow-hidden">
          <div className="w-1/3 h-full bg-terracotta"></div>
        </div>
      </div>
    </div>
  </GridCanvas>
);

// Step 4: Export (Grid of Options)
const VisualStep4 = () => (
  <GridCanvas>
    <div className="grid grid-cols-2 gap-4 w-full max-w-[320px]">
      {/* Option 1 */}
      <div className="col-span-1 bg-white p-4 rounded-xl border border-charcoal/10 shadow-sm flex flex-col items-center gap-3 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer group">
        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
          <FileDown className="w-5 h-5 text-red-500" />
        </div>
        <span className="text-xs font-medium text-charcoal/70">Export PDF</span>
      </div>

      {/* Option 2 */}
      <div className="col-span-1 bg-white p-4 rounded-xl border border-charcoal/10 shadow-sm flex flex-col items-center gap-3 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer group">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          <Globe className="w-5 h-5 text-blue-500" />
        </div>
        <span className="text-xs font-medium text-charcoal/70">Web HTML</span>
      </div>

      {/* Option 3 (Wide) */}
      <div className="col-span-2 bg-charcoal text-white p-4 rounded-xl shadow-lg flex items-center justify-between gap-3 transition-all hover:-translate-y-1 cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <Share2 className="w-4 h-4 text-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold">Publish to Notion</span>
            <span className="text-[10px] text-white/60">Connected</span>
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-white/50" />
      </div>
    </div>
  </GridCanvas>
);

// ==========================================
// --- MAIN COMPONENT ---
// ==========================================

const steps = [
  {
    number: "01",
    title: "Upload raw audio",
    description:
      "Drop recordings from Zoom, Google Meet, or any audio file. We handle the transcription and cleanup automatically.",
    visual: <VisualStep1 />,
  },
  {
    number: "02",
    title: "AI extracts the narrative",
    description:
      "Our engine identifies the 'Hero's Journey' in your call—finding the challenges, the solution, and the hard ROI results.",
    visual: <VisualStep2 />,
  },
  {
    number: "03",
    title: "Source-verified drafts",
    description:
      "Review with confidence. Every claim and quote links directly to the timestamp in the recording. Zero hallucinations.",
    visual: <VisualStep3 />,
  },
  {
    number: "04",
    title: "Export & Publish",
    description:
      "One click to get a formatted PDF, Notion doc, or HTML ready for your blog. From raw audio to published asset in minutes.",
    visual: <VisualStep4 />,
  },
];

const AppShowcase = () => {
  const [showFullDemo, setShowFullDemo] = useState(false);

  return (
    <>
      <section className="w-full bg-cream text-charcoal px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto section-spacing">
          {/* Header */}
          <div className="flex flex-col gap-6 items-center text-center max-w-4xl mx-auto mb-24">
            <h2 className=" text-charcoal">Case studies on autopilot</h2>
            <p className=" text-charcoal/70 max-w-2xl leading-relaxed">
              Turn your disorganized customer interviews into professional
              marketing assets without writing a single word.
            </p>

            <button
              onClick={() => setShowFullDemo(true)}
              className="mt-4 bg-charcoal text-cream px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-terracotta transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-charcoal/5 hover:shadow-terracotta/20"
            >
              <span>See the demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Steps Layout */}
          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12 lg:gap-20`}
                >
                  {/* Text Side */}
                  <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div
                      className={`flex items-center gap-3 mb-2 ${isEven ? "justify-center lg:justify-start" : "justify-center lg:justify-end lg:flex-row-reverse"}`}
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-charcoal/10 text-terracotta font-mono text-sm font-bold shadow-sm">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-3xl font-serif text-charcoal max-w-md mx-auto lg:mx-0">
                      {step.title}
                    </h3>

                    <p className="text-charcoal/60 leading-relaxed max-w-md mx-auto lg:mx-0 text-lg">
                      {step.description}
                    </p>
                  </div>

                  {/* Visual Side - Refined Container */}
                  <div className="flex-1 w-full lg:h-[450px] max-w-[550px] lg:max-w-none mx-auto">
                    {/* The Visual Wrapper - No shadows, just the content */}
                    <div className="w-full h-full transform transition-transform duration-700 hover:scale-[1.01]">
                      {step.visual}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FULL DEMO MODAL (Unchanged) */}
      {showFullDemo && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setShowFullDemo(false)}
        >
          <div
            className="relative w-full max-w-5xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullDemo(false)}
              className="absolute -top-12 right-0 sm:-top-14 sm:-right-14 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 group z-10"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="relative bg-charcoal rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <video
                controls
                autoPlay
                className="w-full aspect-video"
                poster="/images/dashboard.webp"
              >
                <source src="/demo/demo.webm" type="video/webm" />
                <source src="/demo/demo.mp4" type="video/mp4" />
                <p className="text-white p-8 text-center">
                  Your browser doesn't support video playback.
                </p>
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppShowcase;
