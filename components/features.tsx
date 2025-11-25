import { useInView } from "@/app/page";
import {
  Code2,
  FileText,
  Globe,
  LayoutTemplate,
  Share2,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";
import { useEffect, useState } from "react";

export const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, [isInView]);

  const features = [
    {
      id: 0,
      title: "Smart Extraction",
      desc: "Automatically detects pain points, solutions, and hard metrics.",
      icon: <Sparkles size={20} />,
      visual: (
        <div className="relative h-full w-full bg-zinc-50 flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"></div>
          <div className="w-full max-w-md bg-white border border-zinc-200 p-6 space-y-4 shadow-xl z-10 rounded-none relative overflow-hidden group">
            {/* Infinite Scan Beam */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent z-20 animate-[scan_3s_ease-in-out_infinite] opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-indigo-500/10 to-transparent z-10 animate-[scan_3s_ease-in-out_infinite]"></div>

            <div className="flex items-center gap-2 mb-2 border-b border-zinc-100 pb-3">
              <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
                AI_ANALYSIS_ACTIVE
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex gap-4 items-start p-4 bg-indigo-50/30 rounded-none border border-indigo-100 relative overflow-hidden">
                <div className="mt-0.5">
                  <Code2 size={16} className="text-indigo-600" />
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-bold text-indigo-700 uppercase tracking-wide mb-1">
                    Detected Metric
                  </div>
                  <div className="text-sm font-medium text-zinc-800">
                    "Reduced churn by{" "}
                    <span className="bg-indigo-200 px-1.5 rounded-none animate-pulse">
                      45%
                    </span>
                    "
                  </div>
                </div>
              </div>
              {/* Fake Code Lines */}
              <div className="space-y-2 pl-2 opacity-50">
                <div className="h-1.5 w-3/4 bg-zinc-100 rounded-full"></div>
                <div className="h-1.5 w-1/2 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Tone Match",
      desc: "Mimic your unique brand voice perfectly from existing content.",
      icon: <Wand2 size={20} />,
      visual: (
        <div className="relative h-full w-full bg-zinc-50 flex items-center justify-center p-8">
          <div className="flex flex-col gap-6 w-full max-w-md relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-gradient-to-b from-zinc-200 via-indigo-200 to-zinc-200 z-0"></div>

            <div className="bg-white p-5 border border-zinc-200 rounded-none shadow-sm opacity-80 scale-95 z-10 relative">
              <div className="text-[10px] uppercase text-zinc-400 font-bold mb-3">
                Input (Generic)
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-zinc-100 rounded-none"></div>
                <div className="h-2 w-3/4 bg-zinc-100 rounded-none"></div>
              </div>
            </div>

            <div className="flex justify-center -my-4 z-20">
              <div className="bg-indigo-600 text-white p-3 rounded-full shadow-lg animate-[pulse_3s_ease-in-out_infinite] ring-4 ring-white">
                <Wand2
                  size={20}
                  className="animate-[spin_10s_linear_infinite]"
                />
              </div>
            </div>

            <div className="bg-white p-6 border border-indigo-100 rounded-none shadow-lg ring-1 ring-indigo-500/10 z-10 relative overflow-hidden">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 translate-x-[-200%] animate-[shimmer_3s_infinite]"></div>

              <div className="flex justify-between items-center mb-3">
                <div className="text-[10px] uppercase text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded-none">
                  On Brand
                </div>
              </div>
              <p className="text-sm font-serif italic text-zinc-800 leading-relaxed">
                "We didn't just build a tool; we crafted an engine for growth."
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Team Workspaces",
      desc: "Collaborate on drafts, leave comments, and approve content.",
      icon: <Users size={20} />,
      visual: (
        <div className="relative h-full w-full bg-zinc-50 flex items-center justify-center">
          <div className="w-full max-w-md bg-white border border-zinc-200 rounded-none shadow-lg overflow-hidden">
            <div className="bg-zinc-50 px-6 py-3 border-b border-zinc-200 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-indigo-100 border-2 border-white z-20"></div>
                <div className="w-7 h-7 rounded-full bg-emerald-100 border-2 border-white z-10"></div>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                LIVE
              </span>
            </div>
            <div className="p-6 space-y-4">
              {/* Message 1 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-zinc-200 flex-shrink-0"></div>
                <div className="bg-zinc-100 p-4 rounded-none text-sm text-zinc-600 w-full">
                  Can we emphasize the ROI metric in the intro?
                </div>
              </div>
              {/* Animated Reply Indicator */}
              <div className="flex gap-4 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0 border border-indigo-200"></div>
                <div className="bg-white border border-zinc-100 shadow-sm p-3 rounded-none text-sm text-zinc-400 w-auto min-w-[80px] flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-[bounce_1s_infinite_0ms]"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-[bounce_1s_infinite_200ms]"></div>
                  <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-[bounce_1s_infinite_400ms]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Instant Export",
      desc: "Export to PDF, Markdown, or sync directly to your headless CMS.",
      icon: <Share2 size={20} />,
      visual: (
        <div className="relative h-full w-full bg-zinc-50 flex items-center justify-center overflow-hidden">
          {/* Central Hub Visual */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center z-10 shadow-xl ring-4 ring-white">
            <Share2 className="text-white" size={24} />
          </div>

          {/* Orbiting Icons */}
          <div className="grid grid-cols-2 gap-12 w-full max-w-sm relative z-0">
            {[
              { icon: <FileText size={24} />, label: "PDF", delay: "0s" },
              {
                icon: <LayoutTemplate size={24} />,
                label: "Notion",
                delay: "1s",
              },
              { icon: <Globe size={24} />, label: "Webflow", delay: "2s" },
              { icon: <Code2 size={24} />, label: "Markdown", delay: "3s" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 animate-float"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-20 h-20 bg-white border border-zinc-200 rounded-none shadow-sm flex items-center justify-center hover:border-indigo-500 hover:shadow-md transition-colors group cursor-pointer">
                  <div className="text-zinc-400 group-hover:text-indigo-600 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      id="features"
      className="py-24 bg-white border-t border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-display font-bold text-zinc-900 mb-4">
            The simplest workflow.
          </h2>
          <p className="text-lg text-zinc-500 max-w-xl mx-auto font-light leading-relaxed">
            Everything you need to scale your customer success stories.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-0 border border-zinc-200 shadow-sm items-stretch">
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-zinc-200 bg-white grid grid-cols-2 lg:grid-cols-1">
            {features.map((f, i) => (
              <div
                key={f.id}
                className={`p-6 cursor-pointer transition-all duration-300 group relative overflow-hidden ${activeTab === f.id ? "bg-zinc-50" : "hover:bg-zinc-50/50"} border-zinc-200 ${i % 2 === 0 ? "border-r lg:border-r-0" : ""} ${i < 2 ? "border-b" : "lg:border-b"} ${i === features.length - 1 ? "lg:border-b-0" : ""}`}
                onClick={() => setActiveTab(f.id)}
              >
                {activeTab === f.id && isInView && (
                  <div
                    key={activeTab}
                    className="absolute left-0 bottom-0 lg:top-0 lg:bottom-auto lg:h-full lg:w-1 w-full h-1 bg-zinc-200"
                  >
                    <div className="h-full bg-indigo-600 animate-progress origin-left lg:origin-top lg:w-full lg:animate-progress-vertical"></div>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-2 lg:pl-4">
                  {/* <div
                    className={`p-0 transition-colors ${activeTab === f.id ? "text-indigo-600" : "text-zinc-400 group-hover:text-zinc-600"}`}
                  >
                    {f.icon}
                  </div> */}
                  <h3
                    className={`font-bold text-base font-display transition-colors ${activeTab === f.id ? "text-zinc-900" : "text-zinc-500"}`}
                  >
                    {f.title}
                  </h3>
                </div>
                <p
                  className={`text-sm hidden md:block leading-relaxed transition-colors lg:pl-4 ${activeTab === f.id ? "text-zinc-600" : "text-zinc-400"}`}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 bg-zinc-50 relative overflow-hidden flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            {features.map((f) => (
              <div
                key={f.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out px-8 py-8 lg:px-16 lg:py-16 ${activeTab === f.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"}`}
              >
                {f.visual}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
