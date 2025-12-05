"use client";

import React, { useState } from "react"; // <-- IMPORTED: useState
import {
  FileAudio,
  Sparkles,
  CheckCircle2,
  Clock,
  Quote,
  Download,
  FileText,
  Share2,
  ArrowRight,
  X, // <-- IMPORTED: X for the close button
} from "lucide-react";

// --- VISUAL COMPONENTS (Using the old simple visuals you provided, but ready for upgrade) ---

const VisualStep1 = () => (
  <div className="relative w-full h-full min-h-[320px] bg-white rounded-2xl border border-charcoal/5 flex items-center justify-center p-8 overflow-hidden">
    {/* Decorative background grid inside the card */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

    <div className="relative w-full max-w-sm">
      <div className="bg-cream/50 backdrop-blur-sm border border-dashed border-charcoal/20 rounded-xl p-8 flex flex-col items-center gap-5 transition-all duration-300 hover:border-terracotta/40 hover:bg-white">
        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-charcoal/5 flex items-center justify-center">
          <FileAudio className="w-7 h-7 text-terracotta stroke-[1.5]" />
        </div>
        <div className="text-center">
          <p className="font-serif text-lg text-charcoal">Drop recording</p>
          <div className="flex gap-2 justify-center mt-3">
            {["MP3", "WAV", "M4A"].map((ext) => (
              <span
                key={ext}
                className="text-[10px] font-bold uppercase tracking-wider text-charcoal/40 bg-charcoal/5 px-2 py-1 rounded-md"
              >
                {ext}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const VisualStep2 = () => (
  <div className="relative w-full h-full min-h-[320px] bg-white rounded-2xl border border-charcoal/5 flex items-center justify-center p-8 overflow-hidden">
    <div className="w-full max-w-sm bg-cream/20 rounded-xl border border-charcoal/10 shadow-sm overflow-hidden">
      <div className="h-9 bg-white border-b border-charcoal/5 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 text-terracotta animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal/60">
            Processing
          </span>
        </div>
      </div>
      <div className="p-5 space-y-2.5">
        <div className="flex items-center gap-3 p-3 bg-white border border-charcoal/5 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span className="text-xs text-charcoal/80 font-medium">
            Challenge Identified
          </span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white border border-charcoal/5 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
          <Quote className="w-4 h-4 text-blue-600" />
          <span className="text-xs text-charcoal/80 font-medium">
            Key Quote Extracted
          </span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white border border-charcoal/5 rounded-lg shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)]">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-xs text-charcoal/80 font-medium">
            ROI Metric Found
          </span>
        </div>
      </div>
    </div>
  </div>
);

const VisualStep3 = () => (
  <div className="relative w-full h-full min-h-[320px] bg-white rounded-2xl border border-charcoal/5 flex items-center justify-center p-8">
    <div className="w-full max-w-sm bg-white rounded-xl border border-charcoal/10 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.05)] p-6">
      <div className="space-y-4">
        <div className="h-2 w-1/3 bg-charcoal/10 rounded-full" />
        <div className="space-y-2">
          <div className="h-2 w-full bg-charcoal/5 rounded-full" />
          <div className="h-2 w-5/6 bg-charcoal/5 rounded-full" />
          <p className="text-sm leading-relaxed text-charcoal/80 bg-terracotta/5 p-3 rounded-lg border border-terracotta/10">
            <span className="font-serif italic text-terracotta">
              "It was essentially chaos..."
            </span>
            <span className="block text-[10px] font-mono text-charcoal/40 mt-1 uppercase tracking-wide">
              Source Verified • 04:12
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const VisualStep4 = () => (
  <div className="relative w-full h-full min-h-[320px] bg-white rounded-2xl border border-charcoal/5 flex items-center justify-center p-8 overflow-hidden">
    {/* Decorative circle */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl" />

    <div className="relative flex gap-4">
      {[FileText, Share2, Download].map((Icon, i) => (
        <div
          key={i}
          className="w-16 h-16 bg-white border border-charcoal/10 rounded-2xl flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform duration-300"
        >
          <Icon className="w-6 h-6 text-charcoal/70" />
        </div>
      ))}
    </div>
  </div>
);

// --- STEPS DATA ---
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

// --- MAIN COMPONENT ---
const AppShowcase = () => {
  // ADD STATE FOR THE MODAL
  const [showFullDemo, setShowFullDemo] = useState(false);

  return (
    <>
      <section className="w-full bg-cream text-charcoal px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto section-spacing">
          {/* Centered Header Block with Action Button */}
          <div className="section-header-gap flex flex-col gap-6 items-center text-center max-w-4xl mx-auto">
            <span className="font-mono text-xs font-bold tracking-widest text-terracotta uppercase block">
              Workflow
            </span>
            <h2 className="text-charcoal max-w-3xl">
              Case studies on autopilot
            </h2>
            <p className="text-charcoal/70 max-w-xl">
              Turn your disorganized customer interviews into professional
              marketing assets without writing a single word.
            </p>

            {/* Action Button: UPDATED TO OPEN MODAL */}
            <button
              onClick={() => setShowFullDemo(true)}
              className="group flex items-center gap-2 px-6 py-3 bg-white border border-charcoal/10 rounded-full shadow-md hover:shadow-lg hover:border-terracotta/30 transition-all duration-300"
            >
              <span className="text-sm font-medium text-charcoal group-hover:text-terracotta transition-colors">
                See the demo
              </span>
              <ArrowRight className="w-4 h-4 text-charcoal/40 group-hover:text-terracotta group-hover:translate-x-0.5 transition-all" />
            </button>
          </div>

          {/* The Zig Zag Layout */}
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
                  {/* Text Side (Always left/right aligned based on zig-zag) */}
                  <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div
                      className={`flex items-center gap-3 mb-2 ${isEven ? "justify-center lg:justify-start" : "justify-center lg:justify-end lg:flex-row-reverse"}`}
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-terracotta/10 text-terracotta font-mono text-sm font-bold">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-3xl font-serif text-charcoal max-w-md mx-auto lg:mx-0">
                      {step.title}
                    </h3>
                    <p className="text-lg text-charcoal/60 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Visual Side - Larger and Crisper */}
                  <div className="flex-1 w-full lg:h-[400px]">
                    <div className="w-full h-full shadow-2xl shadow-charcoal/5 rounded-3xl overflow-hidden bg-white border border-charcoal/5 transform transition-transform duration-700 hover:scale-[1.01]">
                      {step.visual}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FULL DEMO MODAL LOGIC (COPIED FROM YOUR HERO) */}
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
              aria-label="Close demo"
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
                {/* Ensure these paths are correct relative to your public directory */}
                <source src="/demo/demo.webm" type="video/webm" />
                <source src="/demo/demo.mp4" type="video/mp4" />
                <p className="text-white p-8 text-center">
                  Your browser doesn't support video playback.{" "}
                  <a
                    href="/demo/demo.mp4"
                    download
                    className="text-terracotta underline"
                  >
                    Download the video
                  </a>
                </p>
              </video>
            </div>

            <div className="mt-4 text-center">
              <p className="text-white/90 font-medium">
                See how Casevia turns interviews into case studies in 15 minutes
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppShowcase;
