import React from "react";
import { Mic, FileText, Sparkles, Play, CheckCircle2 } from "lucide-react";

const PipelineIllustration: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center perspective-[1200px]">
      {/* --- ORBITAL RINGS BACKGROUND --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] border border-charcoal/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="w-[280px] h-[280px] border border-charcoal/5 rounded-full absolute animate-[spin_40s_linear_infinite_reverse] border-dashed opacity-50"></div>
      </div>

      {/* --- STAGE 3: OUTPUT (Document) - Back Layer --- */}
      <div className="absolute top-[50%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[240px] h-[320px] bg-white rounded-xl shadow-2xl border border-charcoal/5 flex flex-col p-5 rotate-6 transition-transform duration-700 hover:rotate-3 hover:scale-105 z-10 overflow-hidden group">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
              <FileText size={14} />
            </div>
            <div className="flex flex-col">
              <div className="h-2 w-16 bg-charcoal/80 rounded-full mb-1"></div>
              <div className="h-1.5 w-10 bg-charcoal/20 rounded-full"></div>
            </div>
          </div>
          <div className="px-2 py-0.5 bg-green-50 rounded-full border border-green-100 text-[9px] font-bold text-green-700 uppercase tracking-wide flex items-center gap-1">
            <CheckCircle2 size={10} /> Ready
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          {/* Title */}
          <div className="h-4 w-3/4 bg-charcoal/90 rounded-sm"></div>

          {/* Paragraph */}
          <div className="space-y-2">
            <div className="h-2 w-full bg-charcoal/10 rounded-sm"></div>
            <div className="h-2 w-full bg-charcoal/10 rounded-sm"></div>
            <div className="h-2 w-5/6 bg-charcoal/10 rounded-sm"></div>
          </div>

          {/* Insight Block */}
          <div className="p-3 bg-terracotta/5 border-l-2 border-terracotta rounded-r-md mt-2">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={10} className="text-terracotta" />
              <span className="text-[9px] font-bold text-terracotta uppercase tracking-wider">
                Key Insight
              </span>
            </div>
            <div className="h-2 w-11/12 bg-terracotta/20 rounded-sm"></div>
          </div>

          {/* Final Paragraph */}
          <div className="space-y-2 pt-2">
            <div className="h-2 w-full bg-charcoal/10 rounded-sm"></div>
            <div className="h-2 w-4/5 bg-charcoal/10 rounded-sm"></div>
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
      </div>

      {/* --- STAGE 1: INPUT (Audio Card) - Floating Front Layer --- */}
      <div className="absolute top-[35%] left-[35%] -translate-x-1/2 -translate-y-1/2 w-[200px] bg-charcoal/95 backdrop-blur-md text-cream rounded-xl p-5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] z-20 animate-[float_6s_ease-in-out_infinite] border border-white/10 ring-1 ring-black/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <Mic className="w-4 h-4 text-terracotta" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider">
                Input
              </span>
              <span className="text-[9px] text-white/40 font-mono">.MP3</span>
            </div>
          </div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
        </div>

        {/* Live Waveform */}
        <div className="flex items-center justify-between gap-1 h-10 px-1">
          {[40, 70, 30, 80, 50, 90, 20, 60, 40, 70, 30, 50].map((h, i) => (
            <div
              key={i}
              className="w-1.5 bg-terracotta rounded-full animate-wave"
              style={{
                height: `${h}%`,
                opacity: 0.9,
                animationDelay: `${i * 0.05}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between text-[9px] text-white/30 font-mono">
          <span>00:24</span>
          <span>-12:04</span>
        </div>
      </div>

      {/* --- STAGE 2: PROCESSING NODE (Floating Badge) --- */}
      <div className="absolute top-[48%] right-[15%] bg-white border border-charcoal/5 shadow-xl px-4 py-2.5 rounded-lg z-30 flex items-center gap-3 animate-[float_7s_ease-in-out_infinite_1s]">
        <div className="relative">
          <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center text-white shadow-lg shadow-terracotta/30 relative z-10">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="absolute inset-0 bg-terracotta/50 blur-md rounded-lg z-0 animate-pulse"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] text-charcoal/40 font-bold uppercase tracking-wider mb-0.5">
            Status
          </span>
          <span className="text-xs font-bold text-charcoal flex items-center gap-1">
            Extracting
            <span className="flex gap-0.5">
              <span className="w-0.5 h-0.5 bg-charcoal rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-0.5 h-0.5 bg-charcoal rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-0.5 h-0.5 bg-charcoal rounded-full animate-bounce"></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PipelineIllustration;
