import React from "react";
import { Mic, FileText, Sparkles, Play } from "lucide-react";

const PipelineIllustration: React.FC = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center perspective-[1000px]">
      {/* --- Background Card (Output Document) --- */}
      <div className="absolute top-[50%] left-[50%] -translate-x-[45%] -translate-y-[45%] w-[260px] h-[340px] bg-white border border-charcoal/10 rounded-lg shadow-xl flex flex-col p-6 rotate-6 transition-transform hover:rotate-0 duration-500 z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="h-2 w-16 bg-charcoal/10 rounded-full"></div>
          <div className="h-6 w-6 rounded-full bg-charcoal/5 flex items-center justify-center">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-3">
          <div className="h-6 w-3/4 bg-charcoal rounded-sm mb-4"></div>
          <div className="h-2 w-full bg-charcoal/10 rounded-full"></div>
          <div className="h-2 w-full bg-charcoal/10 rounded-full"></div>
          <div className="h-2 w-5/6 bg-charcoal/10 rounded-full"></div>

          {/* Highlighted Insight */}
          <div className="mt-4 p-3 bg-terracotta/5 border-l-2 border-terracotta rounded-r-md">
            <div className="h-2 w-full bg-terracotta/20 rounded-full mb-2"></div>
            <div className="h-2 w-2/3 bg-terracotta/20 rounded-full"></div>
          </div>

          <div className="h-2 w-full bg-charcoal/10 rounded-full mt-4"></div>
          <div className="h-2 w-4/5 bg-charcoal/10 rounded-full"></div>
        </div>
      </div>

      {/* --- Floating Input Card (Audio) --- */}
      <div className="absolute top-[30%] left-[50%] -translate-x-[80%] -translate-y-[30%] w-[200px] bg-charcoal text-cream rounded-xl p-4 shadow-2xl z-20 animate-[float_4s_ease-in-out_infinite]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
              <Mic className="w-3 h-3 text-terracotta" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider opacity-70">
              Recording.mp3
            </span>
          </div>
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
        </div>

        {/* Waveform */}
        <div className="flex items-center justify-between gap-1 h-8">
          {[40, 70, 30, 80, 50, 90, 20, 60, 40, 70, 30, 50].map((h, i) => (
            <div
              key={i}
              className="w-1 bg-terracotta rounded-full"
              style={{ height: `${h}%`, opacity: 0.8 }}
            ></div>
          ))}
        </div>
      </div>

      {/* --- Processing Badge --- */}
      <div className="absolute top-[45%] right-[10%] bg-white border border-charcoal/10 shadow-lg px-3 py-2 rounded-lg z-30 flex items-center gap-2 animate-[float_5s_ease-in-out_infinite_1s]">
        <div className="w-6 h-6 bg-terracotta rounded-md flex items-center justify-center text-white shadow-md shadow-terracotta/30">
          <Sparkles className="w-3 h-3" />
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] text-charcoal/40 font-bold uppercase tracking-wider">
            Status
          </span>
          <span className="text-xs font-semibold text-charcoal">
            Extracting...
          </span>
        </div>
      </div>

      {/* Connecting line element (Abstract) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full overflow-visible">
          <path
            d="M 100 100 Q 150 150 220 180"
            stroke="#D97757"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            className="opacity-30"
          />
        </svg>
      </div>
    </div>
  );
};

export default PipelineIllustration;
