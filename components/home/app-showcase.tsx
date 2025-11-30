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
} from "lucide-react";

const steps = [
  {
    id: "ingest",
    title: "Universal Ingest",
    description:
      "Drag raw audio or paste a Zoom link. We distinguish speakers and handle formats instantly.",
    icon: UploadCloud,
  },
  {
    id: "analyze",
    title: "Semantic Extraction",
    description:
      "The engine maps the conversation to a narrative arc: Challenge, Solution, and Hard Results.",
    icon: Sparkles,
  },
  {
    id: "draft",
    title: "Verifiable Editor",
    description:
      "A clean writing environment where every claim is hyperlinked to the original audio timestamp.",
    icon: PenTool,
  },
  {
    id: "export",
    title: "Publication Ready",
    description:
      "One-click export to branded PDF or sync markdown directly to your CMS.",
    icon: Share2,
  },
];

const AppShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<any>(null);
  const DURATION = 6000;
  const UPDATE_INTERVAL = 20;

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);

    let startTime = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / DURATION) * 100, 100);

      if (newProgress >= 100) {
        setActiveStep((prev) => (prev + 1) % steps.length);
        startTime = Date.now();
        setProgress(0);
      } else {
        setProgress(newProgress);
      }
    }, UPDATE_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section className="w-full bg-cream  px-6 md:px-12">
      <div className="max-w-7xl mx-auto border-t border-charcoal/10 py-24 flex flex-col gap-20">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:gap-8 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
            <span className="font-sans text-xs font-semibold tracking-widest uppercase text-charcoal/60">
              The Workflow
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal leading-[0.9] tracking-tight">
            From chaos to{" "}
            <span className="italic font-light text-charcoal/60">clarity.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Column: Timeline Navigation */}
          <div className="lg:col-span-4 flex flex-col pt-2">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className="relative pl-10 py-6 cursor-pointer group select-none"
                >
                  {/* Vertical Track Line */}
                  <div className="absolute left-[11px] top-0 bottom-0 w-[1px] bg-charcoal/10 group-first:top-6 group-last:bottom-auto group-last:h-6"></div>

                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-0 top-7 w-6 h-6 rounded-full border flex items-center justify-center bg-cream z-10 transition-all duration-500 ${isActive ? "border-terracotta" : "border-charcoal/10"}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${isActive ? "bg-terracotta scale-100" : "bg-charcoal/20 scale-0 group-hover:scale-75"}`}
                    ></div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3
                      className={`font-serif text-2xl transition-all duration-500 ${isActive ? "text-charcoal translate-x-2" : "text-charcoal/40 group-hover:text-charcoal/60"}`}
                    >
                      {step.title}
                    </h3>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100 translate-x-2" : "grid-rows-[0fr] opacity-0 translate-x-0"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-sans text-sm text-charcoal/60 leading-relaxed pb-2">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Active Progress Bar Fill */}
                  {isActive && (
                    <div
                      className="absolute left-[11px] top-7 bottom-0 w-[1px] bg-terracotta origin-top z-20"
                      style={{
                        transform: `scaleY(${progress / 100})`,
                        transition: "transform 0.05s linear",
                      }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: High-Fidelity Mock Interface */}
          <div className="lg:col-span-8 w-full aspect-[4/3] md:aspect-[16/10] bg-white rounded-xl border border-charcoal/5 shadow-2xl shadow-charcoal/5 relative overflow-hidden flex flex-col transition-all duration-500">
            {/* Browser Header */}
            <div className="h-12 border-b border-charcoal/5 bg-cream/30 flex items-center justify-between px-5 select-none backdrop-blur-sm z-20">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-charcoal/10"></div>
                <div className="w-3 h-3 rounded-full bg-charcoal/10"></div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-charcoal/5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <div className="text-[10px] font-sans font-medium text-charcoal/60 tracking-wide">
                  casevia.app
                </div>
              </div>
              <div className="w-8"></div>
            </div>

            {/* Viewport Content */}
            <div className="flex-1 relative bg-white overflow-hidden font-sans">
              {/* Grid Pattern */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#1A1A1A 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* --- STEP 1: INGEST --- */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${activeStep === 0 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <div className="relative w-[400px] h-[280px] bg-cream/30 border-2 border-dashed border-charcoal/10 rounded-2xl flex flex-col items-center justify-center gap-6 group">
                  {/* Floating File Animation */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl">
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-terracotta/5 to-transparent opacity-0 animate-pulse"></div>
                  </div>

                  <div className="w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-terracotta relative z-10 animate-[float_4s_ease-in-out_infinite]">
                    <FileAudio className="w-8 h-8" />
                    <div className="absolute -right-2 -top-2 w-6 h-6 bg-charcoal rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
                      <ArrowRight className="w-3 h-3 -rotate-45" />
                    </div>
                  </div>

                  <div className="text-center space-y-2 relative z-10">
                    <p className="font-serif text-2xl text-charcoal">
                      Upload Recording
                    </p>
                    <p className="text-xs text-charcoal/40 font-mono uppercase tracking-wider">
                      MP3, WAV, MP4
                    </p>
                  </div>

                  {/* Fake Upload Progress */}
                  <div className="absolute bottom-8 w-48 h-1.5 bg-charcoal/5 rounded-full overflow-hidden">
                    <div className="h-full bg-terracotta w-2/3 rounded-full animate-[scan_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              </div>

              {/* --- STEP 2: ANALYZE --- */}
              <div
                className={`absolute inset-0 p-12 flex flex-col gap-10 transition-all duration-700 ${activeStep === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
              >
                <div className="flex justify-between items-center border-b border-charcoal/5 pb-6">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-serif text-2xl text-charcoal">
                      Analyzing Transcript...
                    </h4>
                    <span className="text-xs font-mono text-charcoal/40">
                      ID: #8291-AC
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-terracotta border-t-transparent animate-spin"></div>
                </div>

                <div className="relative flex-1">
                  {/* Blurred Text Background */}
                  <div className="space-y-3 opacity-20 blur-[1px]">
                    <div className="h-3 w-full bg-charcoal rounded-full"></div>
                    <div className="h-3 w-5/6 bg-charcoal rounded-full"></div>
                    <div className="h-3 w-full bg-charcoal rounded-full"></div>
                    <div className="h-3 w-4/5 bg-charcoal rounded-full"></div>
                    <div className="h-3 w-full bg-charcoal rounded-full"></div>
                  </div>

                  {/* Scanning Beam */}
                  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-terracotta/20 to-transparent animate-[scan_3s_linear_infinite]"></div>

                  {/* Pop-up Insights */}
                  <div className="absolute top-4 left-10 bg-white p-4 rounded-lg shadow-xl border border-terracotta/20 border-l-4 border-l-terracotta animate-[float_5s_ease-in-out_infinite] z-10">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-terracotta mb-1">
                      Pain Point Detected
                    </div>
                    <div className="font-serif text-lg text-charcoal">
                      "Manual data entry was taking 20h/week."
                    </div>
                  </div>

                  <div className="absolute bottom-10 right-10 bg-white p-4 rounded-lg shadow-xl border border-green-500/20 border-l-4 border-l-green-500 animate-[float_6s_ease-in-out_infinite_1s] z-10">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-green-600 mb-1">
                      Outcome Verified
                    </div>
                    <div className="font-serif text-lg text-charcoal">
                      "ROI increased by 300% in Q1."
                    </div>
                  </div>
                </div>
              </div>

              {/* --- STEP 3: DRAFT --- */}
              <div
                className={`absolute inset-0 flex transition-all duration-700 ${activeStep === 2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                {/* Simple Editor UI */}
                <div className="w-16 border-r border-charcoal/5 bg-cream/20 flex flex-col items-center py-8 gap-6">
                  <div className="w-8 h-8 rounded-lg bg-charcoal text-cream flex items-center justify-center shadow-sm">
                    <PenTool className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-charcoal/30">
                    <Mic className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-charcoal/30">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex-1 p-12 bg-white relative overflow-hidden">
                  <div className="max-w-lg mx-auto space-y-6">
                    <h1 className="font-serif text-4xl text-charcoal">
                      Nexus Corp Growth Story
                    </h1>

                    <div className="space-y-4 font-sans text-charcoal/80 text-base leading-relaxed">
                      <p>
                        Before adopting Casevia, the Nexus team struggled with
                        disconnected workflows.
                      </p>
                      <div className="relative inline-block group cursor-pointer">
                        <span className="bg-terracotta/10 text-charcoal border-b-2 border-terracotta px-1 py-0.5 rounded hover:bg-terracotta/20 transition-colors">
                          "It was essentially chaos,"
                        </span>
                        {/* Citation Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-charcoal text-cream text-xs px-3 py-2 rounded shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 z-20 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                          <span>Audio Source: 04:12</span>
                        </div>
                      </div>
                      <span>
                        {" "}
                        says Sarah Jenkins. This led to missed opportunities.
                      </span>

                      <p>
                        However, implementation changed everything. The team saw
                        a
                        <strong className="text-charcoal font-semibold">
                          {" "}
                          300% ROI{" "}
                        </strong>
                        within the first quarter alone.
                      </p>
                    </div>

                    {/* Ghost Cursor */}
                    <div className="absolute bottom-20 right-20 animate-[float_4s_ease-in-out_infinite]">
                      <MousePointer2 className="w-6 h-6 fill-terracotta text-white drop-shadow-lg" />
                      <div className="ml-5 -mt-2 bg-terracotta text-white text-[10px] px-2 py-0.5 rounded-full font-medium shadow-sm">
                        Editor
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- STEP 4: EXPORT --- */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center gap-12 transition-all duration-700 ${activeStep === 3 ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
              >
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-100 mb-6">
                    <Check className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Ready to publish
                    </span>
                  </div>
                  <h3 className="font-serif text-4xl text-charcoal mb-2">
                    Choose Destination
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-6 w-full max-w-2xl px-12">
                  {[
                    {
                      icon: FileText,
                      label: "PDF",
                      color: "bg-red-50 text-red-600 border-red-100",
                    },
                    {
                      icon: LayoutTemplate,
                      label: "Notion",
                      color: "bg-gray-50 text-charcoal border-gray-200",
                    },
                    {
                      icon: Globe,
                      label: "Webflow",
                      color: "bg-blue-50 text-blue-600 border-blue-100",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`aspect-square bg-white border rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center justify-center gap-4 group ${item.color.split(" ")[2]}`}
                    >
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${item.color}`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className="font-serif text-lg text-charcoal">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
