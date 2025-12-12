import React from "react";

const QualityShowcase: React.FC = () => {
  return (
    <section className="relative bg-slate-50 py-16 md:py-24 overflow-hidden">
      {/* Abstract Background - "Data Constellation" (Light Mode) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Grid Base */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

        {/* Soft Blue Glow / Core Engine */}
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 blur-[100px] rounded-full mix-blend-multiply"></div> */}

        {/* Abstract Connectivity Lines (Right Side) - Darker strokes for light bg */}
        {/* <svg
          className="absolute top-0 right-0 h-full w-full md:w-2/3 opacity-40 text-blue-200"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "transparent", stopOpacity: 0 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "currentColor", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "transparent", stopOpacity: 0 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M0 400 C 200 400, 400 200, 1000 100"
            stroke="url(#grad1)"
            strokeWidth="1.5"
            fill="none"
            className="animate-[pulse_4s_ease-in-out_infinite]"
          />
          <path
            d="M0 500 C 300 500, 500 600, 1000 700"
            stroke="url(#grad1)"
            strokeWidth="1.5"
            fill="none"
            className="animate-[pulse_6s_ease-in-out_infinite]"
          />
          <path
            d="M0 450 C 250 450, 450 350, 1000 250"
            stroke="url(#grad1)"
            strokeWidth="1.5"
            fill="none"
            className="animate-[pulse_5s_ease-in-out_infinite]"
          />
        </svg> */}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Content Top */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div>
            {/* <h2 className="text-blue-600 font-bold mb-6 uppercase tracking-wider text-xs font-sans flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
              Engine Specifications
            </h2> */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-4 leading-[1.2em] sm:leading-[1em] text-slate-900">
              Built for <br />
              uncompromising trust.
            </h3>
            <p className="text-base md:text-lg text-slate-700 leading-[1.4em] font-normal max-w-xl">
              Casevia is engineered to bridge the gap between raw unstructured
              audio and verified sales assets. We prioritize accuracy and speed
              over generative fluff.
            </p>
          </div>
        </div>

        {/* Metrics Grid - Realistic "Waitlist/Beta" Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <div className="border-l border-slate-200 pl-6 group transition-colors duration-300">
            <div className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2 font-sans transition-colors">
              100%
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Verifiable
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Every extracted quote is hyperlinked to the exact timestamp in the
              source audio.
            </p>
          </div>

          <div className="border-l border-slate-200 pl-6 group transition-colors duration-300">
            <div className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2 font-sans transition-colors">
              &lt; 5m
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Processing Time
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Average time to turn a 60-minute customer interview into a
              published asset.
            </p>
          </div>

          <div className="border-l border-slate-200 pl-6 group transition-colors duration-300">
            <div className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2 font-sans transition-colors">
              Zero
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Hallucinations
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our extraction engine is constrained to source material only. We
              never invent data.
            </p>
          </div>

          <div className="border-l border-slate-200 pl-6 group transition-colors duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 font-sans transition-colors">
              Day 1
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Sales Impact
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Designed to fit your existing sales workflow without complex
              implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityShowcase;
