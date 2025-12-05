"use client";

import React, { useState } from "react";
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
  X,
  Pause,
  BarChart3,
  FileDown,
  Globe,
} from "lucide-react";

// ==========================================
// --- VISUAL COMPONENTS (Content Unchanged) ---
// ==========================================

// Step 1: Sleek Upload Interface
const VisualStep1 = () => (
  <div className="relative w-full h-full bg-cream/30 flex items-center justify-center p-6 overflow-hidden">
    {/* Abstract Background Shapes */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-terracotta/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-charcoal/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

    {/* Main UI Card */}
    <div className="relative w-full max-w-[380px] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-charcoal/5 p-1">
      {/* Browser-like header */}
      <div className="flex items-center gap-1.5 p-3 border-b border-charcoal/5">
        <div className="w-2.5 h-2.5 rounded-full bg-charcoal/20"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-charcoal/20"></div>
      </div>

      <div className="p-6 pt-8">
        <div className="group relative border-2 border-dashed border-charcoal/10 rounded-xl bg-charcoal/[0.02] transition-all duration-300 hover:border-terracotta/30 hover:bg-terracotta/[0.02] p-8 flex flex-col items-center text-center gap-4">
          <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-charcoal/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <FileAudio className="w-6 h-6 text-terracotta" />
          </div>
          <div>
            <p className="text-charcoal font-medium">
              Drop interview recording
            </p>
            <p className="text-charcoal/50 text-sm mt-1">or click to browse</p>
          </div>

          {/* Supported formats pills */}
          <div className="flex gap-2 mt-2">
            {["Zoom", "Meet", ".mp3"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase text-charcoal/60 bg-white border border-charcoal/10 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Simulate an upload in progress */}
        <div className="mt-6 bg-white rounded-lg border border-charcoal/10 p-3 flex items-center gap-3 shadow-sm">
          <div className="w-8 h-8 bg-terracotta/10 rounded-lg flex items-center justify-center">
            <Clock className="w-4 h-4 text-terracotta animate-pulse" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-charcoal font-medium">
                Uploading "Customer_Call_v2.mp3"
              </span>
              <span className="text-charcoal/60">45%</span>
            </div>
            <div className="h-1.5 w-full bg-charcoal/5 rounded-full overflow-hidden">
              <div className="h-full w-[45%] bg-terracotta rounded-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Step 2: AI Analysis Visualization
const VisualStep2 = () => (
  <div className="relative w-full h-full bg-white flex flex-col overflow-hidden">
    {/* Header showing "AI Processing" */}
    <div className="h-12 border-b border-charcoal/5 flex items-center justify-between px-6 bg-cream/30">
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-terracotta" />
        <span className="text-xs font-bold uppercase tracking-wider text-charcoal/70">
          Narrative Engine Active
        </span>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-terracotta/40 animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          ></div>
        ))}
      </div>
    </div>

    {/* Main Content - Split between "Raw Audio" and "Extracted Insights" */}
    <div className="flex-1 p-6 flex flex-col gap-6 relative">
      {/* Simulated Audio Waveform being scanned */}
      <div className="relative">
        <p className="text-xs font-mono text-charcoal/50 uppercase mb-2">
          Scanning Audio Source...
        </p>
        <div className="h-16 flex items-center gap-[2px] opacity-70 mask-gradient-to-r">
          {Array.from({ length: 40 }).map((_, i) => {
            const height = Math.max(20, Math.random() * 100);
            return (
              <div
                key={i}
                className={`w-1.5 rounded-full bg-charcoal/20 ${i > 15 && i < 25 ? "bg-terracotta animate-pulse" : ""}`}
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
        {/* Scanning line */}
        <div className="absolute top-6 left-[50%] w-0.5 h-16 bg-terracotta blur-[1px] shadow-[0_0_10px_2px_rgba(201,106,89,0.3)]"></div>
      </div>

      {/* Extracted Cards floating up */}
      <div className="space-y-3 relative z-10">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-terracotta/50 to-transparent border-dashed border-l border-terracotta/30"></div>

        {/* Card 1 */}
        <div className="ml-6 relative bg-white rounded-xl border border-charcoal/10 p-4 shadow-md flex gap-4 items-start translate-y-2">
          <div className="absolute -left-[25px] top-6 w-4 h-4 bg-white border-2 border-terracotta rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-terracotta rounded-full"></div>
          </div>
          <div className="p-2 bg-blue-50 rounded-lg">
            <Quote className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <p className="text-xs font-bold text-charcoal/60 uppercase tracking-wide mb-1">
              Key Quote Identified
            </p>
            <p className="text-sm text-charcoal italic">
              "The manual entry was killing our productivity..."
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="ml-6 relative bg-white rounded-xl border border-charcoal/10 p-4 shadow-md flex gap-4 items-start">
          <div className="absolute -left-[25px] top-6 w-4 h-4 bg-white border-2 border-terracotta rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-terracotta rounded-full"></div>
          </div>
          <div className="p-2 bg-purple-50 rounded-lg">
            <BarChart3 className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <p className="text-xs font-bold text-charcoal/60 uppercase tracking-wide mb-1">
              Hard ROI Metric
            </p>
            <p className="text-sm text-charcoal font-medium">
              Saved 15 hours/week per manager.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Step 3: Source Verified Transcription UI
const VisualStep3 = () => (
  <div className="relative w-full h-full bg-charcoal/[0.02] flex items-center justify-center p-8">
    <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-[0_8px_30px_-6px_rgba(0,0,0,0.08)] border border-charcoal/5 overflow-hidden relative">
      {/* Fake UI Header */}
      <div className="h-10 border-b border-charcoal/5 flex items-center px-4 bg-white relative z-10">
        <span className="text-xs font-medium text-charcoal/70">
          Transcript Editor
        </span>
        <div className="ml-auto flex items-center gap-1 text-[10px] text-terracotta bg-terracotta/10 px-2 py-0.5 rounded-full font-medium">
          <CheckCircle2 className="w-3 h-3" /> Verified Mode
        </div>
      </div>

      <div className="p-6 relative">
        {/* SKELETON TEXT */}
        <div className="space-y-4 opacity-30 blur-[0.5px]">
          <div className="h-2.5 w-1/3 bg-charcoal/40 rounded-full" />
          <div className="h-2.5 w-full bg-charcoal/20 rounded-full" />
          <div className="h-2.5 w-5/6 bg-charcoal/20 rounded-full" />
        </div>

        {/* THE HIGHLIGHTED SECTION */}
        <div className="my-6 relative">
          {/* The connector line to the player */}
          <div className="absolute -left-6 top-1/2 h-[60px] w-[1px] bg-terracotta/30 hidden sm:block"></div>

          <div className="relative bg-terracotta/5 border-l-4 border-terracotta p-4 rounded-r-lg shadow-sm transition-all duration-300 hover:bg-terracotta/10 cursor-default group">
            <p className="text-[15px] leading-relaxed text-charcoal">
              <span className="font-serif italic font-medium text-terracotta">
                "It was essentially chaos before we switched. We didn't know
                where the data was."
              </span>
            </p>
            {/* Floating timestamp tooltip */}
            <div className="absolute -top-3 -right-2 bg-charcoal text-white text-[10px] font-mono py-1 px-2 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Matched at 04:12
            </div>
          </div>
        </div>

        {/* SKELETON TEXT BELOW */}
        <div className="space-y-4 opacity-30 blur-[0.5px]">
          <div className="h-2.5 w-full bg-charcoal/20 rounded-full" />
          <div className="h-2.5 w-4/5 bg-charcoal/20 rounded-full" />
        </div>
      </div>

      {/* Simulated Audio Player at bottom */}
      <div className="bg-charcoal p-3 flex items-center gap-3">
        <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-terracotta transition-colors">
          <Pause className="w-4 h-4 fill-current" />
        </button>
        <div className="flex-1 relative h-1 bg-white/20 rounded-full overflow-hidden">
          {/* Progress bar matching the highlight */}
          <div className="absolute left-0 top-0 h-full w-[35%] bg-white/40"></div>
          {/* The active segment indicator */}
          <div className="absolute left-[35%] top-0 h-full w-[15%] bg-terracotta animate-pulse"></div>
        </div>
        <span className="text-xs font-mono text-white/70">04:12 / 12:30</span>
      </div>
    </div>
  </div>
);

// Step 4: Export Dashboard
const VisualStep4 = () => (
  <div className="relative w-full h-full bg-cream/30 flex items-center justify-center p-6">
    {/* Background elements */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-terracotta/10 via-transparent to-transparent" />

    <div className="relative w-full max-w-[400px]">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="inline-flex p-3 bg-green-100 text-green-700 rounded-full mb-3 shadow-sm border border-green-200">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-serif text-charcoal">Case Study Ready!</h4>
        <p className="text-charcoal/60 text-sm mt-1">
          Choose your format to publish.
        </p>
      </div>

      {/* Export Options Grid */}
      <div className="grid grid-cols-3 gap-4">
        {/* Option 1: PDF */}
        <button className="group flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-charcoal/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-terracotta/30">
          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
            <FileDown className="w-6 h-6 text-red-500/80" />
          </div>
          <span className="text-xs font-medium text-charcoal/80">
            PDF Asset
          </span>
        </button>

        {/* Option 2: Notion */}
        <button className="group flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-charcoal/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-terracotta/30 relative">
          {/* Popular badge */}
          <span className="absolute -top-2 -right-1 bg-terracotta text-white text-[9px] uppercase font-bold px-2 py-0.5 rounded-full shadow-sm">
            Best
          </span>
          <div className="w-12 h-12 bg-charcoal/5 rounded-xl flex items-center justify-center group-hover:bg-charcoal/10 transition-colors">
            <FileText className="w-6 h-6 text-charcoal/80" />
          </div>
          <span className="text-xs font-medium text-charcoal/80">
            Notion Doc
          </span>
        </button>

        {/* Option 3: Web */}
        <button className="group flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border border-charcoal/10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-terracotta/30">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <Globe className="w-6 h-6 text-blue-500/80" />
          </div>
          <span className="text-xs font-medium text-charcoal/80">Web HTML</span>
        </button>
      </div>

      {/* Primary Action */}
      <button className="w-full mt-8 bg-charcoal text-white h-12 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-terracotta transition-colors shadow-md">
        <Share2 className="w-4 h-4" />
        <span>Publish to CMS</span>
      </button>
    </div>
  </div>
);

// ==========================================
// --- MAIN COMPONENT (WITH TYPOGRAPHY FIX) ---
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
          {/* Centered Header Block - H2 size is determined by globals.css */}
          <div className="section-header-gap flex flex-col gap-6 items-center text-center max-w-4xl mx-auto mb-24">
            {/* <span className="font-mono text-xs font-bold tracking-widest text-terracotta uppercase block">
              Workflow
            </span> */}
            <h2 className="text-charcoal max-w-3xl">
              Case studies on autopilot
            </h2>
            <p className="text-charcoal/70 max-w-xl">
              Turn your disorganized customer interviews into professional
              marketing assets without writing a single word.
            </p>

            <button
              onClick={() => setShowFullDemo(true)}
              className="bg-charcoal text-cream px-5 py-2.5 rounded-full font-sans text-sm font-medium hover:bg-terracotta transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-charcoal/5 hover:shadow-terracotta/20"
            >
              <span>See the demo</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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
                  } items-center gap-12 lg:gap-24`}
                >
                  {/* Text Side - NO INLINE SIZE OVERRIDES HERE */}
                  <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div
                      className={`flex items-center gap-3 mb-2 ${isEven ? "justify-center lg:justify-start" : "justify-center lg:justify-end lg:flex-row-reverse"}`}
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta/10 text-terracotta font-mono text-sm font-bold shadow-sm border border-terracotta/20">
                        {step.number}
                      </span>
                    </div>

                    {/* H3 SIZE is now driven by global CSS rules */}
                    <h3 className="font-serif text-charcoal max-w-md mx-auto lg:mx-0">
                      {step.title}
                    </h3>

                    {/* P SIZE is now driven by global CSS rules (h3 + p rule) */}
                    <p className="text-charcoal/60 leading-relaxed max-w-md mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Visual Side - The container for the new visuals */}
                  <div className="flex-1 w-full lg:h-[450px] max-w-[550px] lg:max-w-none mx-auto">
                    {/* Added extra depth shadows and borders to the main container frame */}
                    <div className="w-full h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] overflow-hidden bg-white border border-white/40 ring-1 ring-charcoal/5 transform transition-transform duration-700 hover:scale-[1.02] relative z-10">
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
                <source src="/demo/demo.webm" type="video/webm" />
                <source src="/demo/demo.mp4" type="video/mp4" />
                <p className="text-white p-8 text-center">
                  Your browser doesn't support video playback.
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
