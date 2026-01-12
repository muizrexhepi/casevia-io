import React from "react";

const HeroIllustration = () => {
  return (
    <div className="w-full h-full relative pointer-events-none select-none">
      {/* The SVG Viewbox is larger to allow for "bleeding" edges. 
        We use a mask-image to fade the edges into the background.
      */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 70%)",
        }}
      >
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full animate-[spin_120s_linear_infinite_reverse] opacity-80"
        >
          <defs>
            {/* Volumetric Gradients */}
            <radialGradient
              id="coreGlow"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="#D1326E" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#6326E1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#221221" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D1326E" stopOpacity="0" />
              <stop offset="50%" stopColor="#D1326E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#6326E1" stopOpacity="0" />
            </linearGradient>

            {/* The "Bloom" Filter - Makes lines glow */}
            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* BACKGROUND: Abstract Data Grid */}
          <g className="text-[#221221] opacity-[0.03]">
            {[...Array(20)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 40}
                y1="0"
                x2={i * 40}
                y2="800"
                strokeWidth="1"
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 40}
                x2="800"
                y2={i * 40}
                strokeWidth="1"
              />
            ))}
          </g>

          {/* CORE: The Rotating Engine */}
          <g transform="translate(400, 400)">
            {/* Outer Orbital Ring - Slow */}
            <circle
              r="280"
              fill="none"
              stroke="#221221"
              strokeWidth="0.5"
              strokeDasharray="4 8"
              className="opacity-20 animate-[spin_60s_linear_infinite]"
            />

            {/* Middle Data Ring - Medium Speed */}
            <g className="animate-[spin_40s_linear_infinite]">
              <circle
                r="220"
                fill="none"
                stroke="url(#beamGrad)"
                strokeWidth="1.5"
                strokeDasharray="100 300"
                strokeLinecap="round"
                className="opacity-60"
                filter="url(#neon-glow)"
              />
              <circle
                r="220"
                fill="none"
                stroke="#D1326E"
                strokeWidth="0.5"
                strokeDasharray="2 10"
                className="opacity-30"
              />
            </g>

            {/* Inner Accelerator Ring - Fast Reverse */}
            <g className="animate-[spin_25s_linear_infinite_reverse]">
              <circle
                r="160"
                fill="none"
                stroke="#6326E1"
                strokeWidth="2"
                strokeDasharray="40 120"
                strokeLinecap="round"
                filter="url(#neon-glow)"
              />
              <circle
                r="160"
                fill="none"
                stroke="#221221"
                strokeWidth="0.5"
                className="opacity-20"
              />
            </g>

            {/* The Central Reactor Core */}
            <circle
              r="100"
              fill="url(#coreGlow)"
              className="animate-pulse duration-[4000ms]"
            />
            <circle
              r="80"
              fill="none"
              stroke="#D1326E"
              strokeWidth="0.5"
              className="opacity-50 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"
            />

            {/* Floating Nodes */}
            {[...Array(8)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 45})`}>
                <circle
                  cx="220"
                  cy="0"
                  r="3"
                  fill="#221221"
                  className="animate-bounce"
                  style={{
                    animationDuration: "3s",
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
                <line
                  x1="160"
                  y1="0"
                  x2="220"
                  y2="0"
                  stroke="#221221"
                  strokeWidth="0.5"
                  strokeOpacity="0.2"
                />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Foreground Ambient Light (CSS Overlay) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D1326E] rounded-full blur-[120px] opacity-10 mix-blend-multiply pointer-events-none animate-pulse duration-10000" />
    </div>
  );
};

export default HeroIllustration;
