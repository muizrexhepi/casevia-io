import React, { useState, useRef, useEffect } from "react";
import { FileText, Mic, Terminal, Quote } from "lucide-react";

const QualityShowcase: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener("mouseup", handleInteractionEnd);
    document.addEventListener("touchend", handleInteractionEnd);
    return () => {
      document.removeEventListener("mouseup", handleInteractionEnd);
      document.removeEventListener("touchend", handleInteractionEnd);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
            Quality Control
          </div> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4 font-serif leading-[1.2em] sm:leading-[1em] text-balance">
            From chaos to clarity.
          </h2>
          <p className="text-base md:text-lg text-slate-700 leading-[1.4em] mb-8 max-w-2xl mx-auto">
            Drag the slider to see how Casevia transforms raw, messy interview
            transcripts into polished, revenue-generating assets.
          </p>
        </div>

        {/* Comparison Container */}
        <div
          className="relative w-full max-w-5xl mx-auto aspect-[4/5] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 select-none cursor-ew-resize group"
          ref={containerRef}
          onMouseDown={handleInteractionStart}
          onTouchStart={handleInteractionStart}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Layer 1: The "Raw" Code/Terminal View (Background) */}
          <div className="absolute inset-0 bg-[#0F172A] p-6 md:p-12 font-mono text-sm leading-loose">
            {/* Dark Mode Decor */}
            <div className="absolute top-0 left-0 w-full h-10 bg-[#1e293b] flex items-center px-4 gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              <div className="ml-4 text-xs text-slate-500 flex items-center gap-2">
                <Terminal size={12} />
                <span>transcript_v1_raw.json</span>
              </div>
            </div>

            <div className="mt-12 opacity-80 space-y-6 max-w-3xl">
              <div className="flex gap-4">
                <span className="text-slate-600 min-w-[3rem]">04:12</span>
                <p className="text-slate-400">
                  <span className="text-blue-400">Speaker_A:</span> So
                  basically, before we bought the tool, it was just... chaotic?
                  Like, I don't know, we had data everywhere.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 min-w-[3rem]">04:15</span>
                <p className="text-slate-400">
                  <span className="text-emerald-400">Speaker_B:</span> Uh huh.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 min-w-[3rem]">04:18</span>
                <p className="text-slate-400">
                  <span className="text-blue-400">Speaker_A:</span> And speed
                  was the main thing. We spent maybe{" "}
                  <span className="text-yellow-200 bg-yellow-500/10 px-1 rounded">
                    10 hours a week
                  </span>{" "}
                  just fixing spreadsheets? It was bad. Honestly the team was
                  kinda burned out. But then we switched and... uh... things got
                  faster.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 min-w-[3rem]">04:25</span>
                <p className="text-slate-400">
                  <span className="text-emerald-400">Speaker_B:</span> How much
                  faster?
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 min-w-[3rem]">04:28</span>
                <p className="text-slate-400">
                  <span className="text-blue-400">Speaker_A:</span> Oh, tons.
                  Probably like 50%? No wait, actually closer to{" "}
                  <span className="text-yellow-200 bg-yellow-500/10 px-1 rounded">
                    70% reduction
                  </span>{" "}
                  in processing time. It was huge for us.
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 flex items-center gap-2 text-slate-500 bg-slate-800/50 px-3 py-1.5 rounded-full border border-slate-700/50 backdrop-blur-sm">
              <Mic size={14} />
              <span className="text-xs font-medium uppercase tracking-wider">
                Unstructured Input
              </span>
            </div>
          </div>

          {/* Layer 2: The "Polished" Case Study (Foreground - Clipped) */}
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
            }}
          >
            <div className="h-full p-8 md:p-12 relative overflow-hidden">
              {/* Elegant Paper Background Texture */}
              <div className="absolute inset-0 bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>

              {/* Content */}
              <div className="relative z-10 max-w-3xl mx-auto h-full flex flex-col justify-center">
                <div className="mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <Quote size={16} fill="currentColor" />
                  </div>
                  <div className="h-px bg-slate-200 flex-1"></div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Case Study #249
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 leading-[1.1]">
                  Acme Corp cuts processing time by{" "}
                  <span className="text-blue-600">70%</span> with automation.
                </h3>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                      The Challenge
                    </h4>
                    <p className="text-slate-600 leading-relaxed font-serif text-lg">
                      Acme's data infrastructure was fragmented, causing
                      significant operational drag. The team lost{" "}
                      <span className="bg-red-50 text-red-900 px-1 font-medium">
                        10+ hours weekly
                      </span>{" "}
                      to manual reconciliation.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      The Solution
                    </h4>
                    <p className="text-slate-600 leading-relaxed font-serif text-lg">
                      Implementation drove an immediate efficiency gain. Acme
                      reported a{" "}
                      <span className="bg-blue-50 text-blue-900 px-1 font-medium border-b border-blue-200">
                        70% reduction
                      </span>{" "}
                      in data processing time instantly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 right-8 flex items-center gap-2 text-blue-700 bg-white px-4 py-2 rounded-full shadow-lg shadow-blue-900/5 border border-blue-100">
                <FileText size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Casevia Asset
                </span>
              </div>
            </div>
          </div>

          {/* The Slider Handle */}
          <div
            className="absolute inset-y-0 w-px bg-white z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-slate-900/10"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.2)] flex items-center justify-center transform group-hover:scale-110 transition-transform cursor-ew-resize border border-slate-100">
              <div className="flex items-center gap-1.5">
                <div className="w-0.5 h-4 bg-slate-300"></div>
                <div className="w-0.5 h-4 bg-slate-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityShowcase;
