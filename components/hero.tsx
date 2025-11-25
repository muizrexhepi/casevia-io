"use client";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileText,
  Loader2,
  Mic,
  Play,
  Plus,
  Users,
  Zap,
  Activity,
  BarChart3,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Hero = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (hero) {
        hero.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-noise opacity-[0.04] z-0 mix-blend-multiply"></div>

        {/* Organic Gradient Blobs */}
        <div className="absolute -top-[30%] left-[20%] w-[800px] h-[800px] rounded-full bg-indigo-200/30 blur-[120px] animate-blob mix-blend-multiply"></div>
        {/* <div
          className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-rose-100/40 blur-[100px] animate-blob"
          style={{ animationDelay: "2s" }}
        ></div> */}
        <div
          className="absolute bottom-[-20%] left-[10%] w-[700px] h-[700px] rounded-full bg-blue-100/30 blur-[120px] animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Interactive Grid Reveal */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:linear-gradient(to_bottom,transparent_0%,black_40%,transparent_100%)] z-0"></div>
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:1rem_1rem] z-10 transition-opacity duration-200"
          style={{
            maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 text-center flex flex-col items-center">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/80 border border-zinc-200/60 backdrop-blur-sm mb-8 animate-fade-up cursor-default hover:border-zinc-300 transition-colors relative group rounded-none shadow-sm">
          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full relative z-10 animate-pulse"></div>
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest group-hover:text-zinc-900 transition-colors">
            v2.0 Public Beta
          </span>
        </div> */}

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-display font-semibold text-zinc-900 tracking-tight mb-4 leading-[0.93em] text-balance animate-fade-up w-full">
          Turn interviews into <br className="hidden md:block" />
          <span className="relative inline-block">case studies.</span>
        </h1>

        {/* Subhead */}
        <p
          className="text-xl text-zinc-600 max-w-2xl mx-auto mb-8 leading-tight animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Casevia turns customer calls into professional case studies in
          minutes.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mb-14 animate-fade-up w-full max-w-sm sm:max-w-none"
          style={{ animationDelay: "200ms" }}
        >
          <button
            onClick={onOpenWaitlist}
            className="h-12 w-full sm:w-auto px-6 bg-zinc-900 text-white font-semibold text-base hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 flex items-center justify-center gap-2 group border border-zinc-900 active:translate-y-0.5 rounded-none"
          >
            Join the waitlist
            <ArrowRight
              size={15}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </button>
          <button className="h-12 w-full sm:w-auto px-6 bg-white text-zinc-900 border border-zinc-300 font-semibold text-base hover:bg-zinc-50 hover:border-zinc-400 transition-all flex items-center justify-center gap-2 shadow-sm group active:translate-y-0.5 rounded-none">
            <Play size={15} className="fill-zinc-900" />
            View demo
          </button>
        </div>

        {/* Trusted Logos */}

        {/* Dashboard Illustration */}
        <div
          className="relative w-full max-w-6xl mx-auto animate-fade-up perspective-[2000px] group z-20"
          style={{ animationDelay: "400ms" }}
        >
          {/* Back Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-indigo-500/10 blur-[100px] -z-10 rounded-full"></div>

          {/* Main Card with 3D interaction */}
          <div className="relative transform-gpu rotate-x-[10deg] group-hover:rotate-x-[2deg] transition-transform duration-[1.5s] ease-out">
            <div className="absolute inset-0 bg-zinc-900/5 translate-y-12 blur-2xl rounded-none -z-10"></div>

            <div className="bg-white border border-zinc-200/80 shadow-2xl rounded-none overflow-hidden h-[550px] md:h-[750px] relative flex font-sans text-left ring-1 ring-black/5">
              {/* Sidebar */}
              <div className="w-64 border-r border-zinc-100 bg-zinc-50/30 p-6 hidden md:flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-900 rounded-none flex items-center justify-center text-white font-bold font-display text-lg">
                    M
                  </div>
                  <div className="font-bold text-zinc-900 text-sm">
                    Miliboro{" "}
                    <span className="text-[10px] bg-zinc-200 px-1.5 py-0.5 rounded-none text-zinc-600 font-normal ml-1 align-middle">
                      Pro
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-3 px-2">
                    Platform
                  </div>
                  {[
                    "Dashboard",
                    "Case Studies",
                    "Projects",
                    "Analytics",
                    "Library",
                  ].map((item) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 px-3 py-2 rounded-none text-sm font-medium transition-colors ${item === "Projects" ? "bg-white shadow-sm text-zinc-900 border border-zinc-200/50" : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/50"}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-none ${item === "Projects" ? "bg-indigo-500" : "bg-transparent"}`}
                      ></div>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-8 h-8 rounded-none bg-zinc-200 flex items-center justify-center text-zinc-500 font-bold text-xs">
                      AI
                    </div>
                    <div className="text-xs">
                      <div className="font-bold text-zinc-900">
                        Amir Ibraimi
                      </div>
                      <div className="text-zinc-400">amir@casevia.io</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Main Panel */}
              <div className="flex-1 bg-white p-8 md:p-10 flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-end mb-8 md:mb-10">
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-1 font-display tracking-tight">
                      Projects
                    </h2>
                    <p className="text-zinc-500 text-sm">
                      Manage your customer interviews and case studies.
                    </p>
                  </div>
                  <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2 rounded-none text-xs font-bold shadow-lg shadow-zinc-900/10 transition-all flex items-center gap-2 active:scale-95">
                    <Plus size={14} /> New Project
                  </button>
                </div>
                <div className="bg-gradient-to-br from-zinc-50 to-white border border-zinc-100 rounded-none p-6 md:p-8 mb-8 md:mb-10 shadow-sm relative overflow-hidden group/card">
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] transition-transform duration-700 group-hover/card:scale-110 group-hover/card:-rotate-12 origin-top-right">
                    <BarChart3 size={180} className="text-zinc-900" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 relative z-10 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-none flex items-center justify-center text-white shadow-md shadow-indigo-200">
                        <Zap size={24} fill="currentColor" />
                      </div>
                      <div>
                        <div className="font-bold text-zinc-900 text-lg">
                          Pro Plan
                        </div>
                        <div className="text-zinc-500 text-xs">
                          Monthly usage overview
                        </div>
                      </div>
                    </div>
                    <button className="text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-none text-xs font-bold transition-colors w-fit">
                      Upgrade Plan
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-zinc-500 text-xs font-medium">
                        <FileText size={14} /> Case Studies
                      </div>
                      <div className="text-2xl font-bold text-zinc-900 mb-2 font-display">
                        4 <span className="text-zinc-300 text-base">/ 20</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 rounded-none overflow-hidden">
                        <div
                          className="h-full bg-indigo-500 w-[20%] rounded-none animate-progress"
                          style={{ animationDuration: "1.5s" }}
                        ></div>
                      </div>
                      <div className="mt-2 text-[10px] text-zinc-400">
                        20% used
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-zinc-500 text-xs font-medium">
                        <Database size={14} /> Storage
                      </div>
                      <div className="text-2xl font-bold text-zinc-900 mb-2 font-display">
                        108{" "}
                        <span className="text-zinc-300 text-base">
                          / 2048 MB
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-100 rounded-none overflow-hidden">
                        <div
                          className="h-full bg-purple-500 w-[5%] rounded-none animate-progress"
                          style={{
                            animationDuration: "1.5s",
                            animationDelay: "0.2s",
                          }}
                        ></div>
                      </div>
                      <div className="mt-2 text-[10px] text-zinc-400">
                        5% used
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-zinc-500 text-xs font-medium">
                        <Users size={14} /> Team Seats
                      </div>
                      <div className="text-2xl font-bold text-zinc-900 mb-2 font-display">
                        5
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        3 active • 0 pending
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 relative z-10">
                  {[
                    {
                      name: "Profitability Case Study - McKinsey",
                      date: "Oct 28",
                      size: "13.8 MB",
                      duration: "31m",
                      status: "Ready",
                    },
                    {
                      name: "BCG Case Interview - CookieCo",
                      date: "Oct 27",
                      size: "13.6 MB",
                      duration: "26m",
                      status: "Ready",
                    },
                    {
                      name: "Consulting Case Interview",
                      date: "Oct 25",
                      size: "39.5 MB",
                      duration: "29m",
                      status: "Processing",
                    },
                  ].map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center p-4 bg-white border border-zinc-100 rounded-none hover:border-zinc-300 hover:shadow-md transition-all group/item cursor-pointer"
                    >
                      <div className="w-10 h-10 bg-indigo-50 rounded-none flex items-center justify-center text-indigo-600 mr-4 group-hover/item:scale-110 transition-transform flex-shrink-0">
                        {file.status === "Processing" ? (
                          <Loader2 size={20} className="animate-spin" />
                        ) : (
                          <Mic size={20} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 mr-4">
                        <div className="font-bold text-zinc-900 text-sm truncate">
                          {file.name}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 mt-1 font-medium">
                          <span>{file.date}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="hidden sm:inline">
                            {file.duration}
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span>{file.size}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {file.status === "Ready" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wide border border-emerald-100">
                            <CheckCircle2 size={12} />{" "}
                            <span className="hidden sm:inline">Ready</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-wide border border-amber-100">
                            <Activity size={12} className="animate-pulse" />{" "}
                            <span className="hidden sm:inline">Processing</span>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="mt-20 animate-fade-up opacity-40 hover:opacity-70 transition-all duration-500"
          style={{ animationDelay: "300ms" }}
        >
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center grayscale">
            {["Linear", "Ramp", "Vercel", "Retool", "Scale"].map((logo) => (
              <span
                key={logo}
                className="text-base font-display font-semibold text-zinc-600 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
