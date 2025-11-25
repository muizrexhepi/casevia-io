import {
  ArrowRight,
  Globe,
  Lock,
  Globe2,
  Fingerprint,
  LineChart,
  BrainCircuit,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const useInView = (options = { threshold: 0.1 }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return { ref, isInView };
};
export const BentoGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-4xl font-display font-bold text-zinc-900 mb-4 tracking-tight">
            Intelligence, baked in.
          </h2>
          <p className="text-lg text-zinc-500 font-light leading-relaxed">
            A complete toolkit designed for marketing teams, agencies, and
            founders who refuse to compromise on quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Smart Extraction */}
          <div
            className={`md:col-span-2 relative overflow-hidden group bg-white border border-zinc-200 p-8 h-[400px] hover:shadow-xl hover:border-zinc-300 transition-all duration-300 ${isInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}
            style={{ animationDelay: "100ms" }}
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white mb-4 rounded-none">
                  <BrainCircuit size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 font-display mb-2">
                  Smart Extraction
                </h3>
                <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
                  Identify core metrics, ROI outcomes, and conflict points
                  instantly. No manual tagging required.
                </p>
              </div>

              {/* Animation Container */}
              <div className="flex-1 w-full bg-zinc-900 border border-zinc-800 p-6 font-mono text-xs text-zinc-400 relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] animate-[scan_3s_ease-in-out_infinite] opacity-50"></div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Visualizing Audio Wave -> Data */}
                  <div className="flex items-center gap-2 opacity-60">
                    <div className="flex gap-1 items-end h-8">
                      {[40, 70, 30, 80, 50, 90, 20, 60].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-zinc-500 animate-wave"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        ></div>
                      ))}
                    </div>
                    <ArrowRight size={16} className="text-zinc-600" />
                    <div className="bg-zinc-800 px-2 py-1 rounded-none border border-zinc-700 text-[10px] text-indigo-400">
                      Processing...
                    </div>
                  </div>

                  <div className="space-y-2 mt-auto">
                    <div className="flex gap-2 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-green-400">{">"}</span>
                      <span className="text-zinc-300">
                        Found: "30% efficiency gain"
                      </span>
                    </div>
                    <div className="flex gap-2 group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      <span className="text-green-400">{">"}</span>
                      <span className="text-zinc-300">
                        Found: "2 weeks to implement"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Global Scale */}
          <div
            className={`relative overflow-hidden group bg-white border border-zinc-200 p-8 h-[400px] hover:shadow-xl hover:border-zinc-300 transition-all duration-300 ${isInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4 rounded-none">
                  <Globe2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2 font-display">
                  Global Scale
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Auto-translate to 30+ languages instantly.
                </p>
              </div>
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="w-40 h-40 border border-zinc-200 rounded-full relative animate-[spin_20s_linear_infinite]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs font-bold text-zinc-400">
                    EN
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs font-bold text-zinc-400">
                    ES
                  </div>
                  <div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-white px-2 text-xs font-bold text-zinc-400">
                    JP
                  </div>
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-white px-2 text-xs font-bold text-zinc-400">
                    DE
                  </div>
                  <div className="absolute inset-4 border border-dashed border-zinc-100 rounded-full"></div>
                </div>
                <Globe
                  size={64}
                  className="absolute text-zinc-200 group-hover:text-indigo-500 transition-colors duration-500"
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>

          {/* Card 3: Enterprise Security */}
          <div
            className={`relative overflow-hidden group bg-white border border-zinc-200 p-8 h-[400px] hover:shadow-xl hover:border-zinc-300 transition-all duration-300 ${isInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center text-zinc-900 mb-4 rounded-none">
                  <Fingerprint size={20} />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2 font-display">
                  SOC-2 Security
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  End-to-end encryption for all client data.
                </p>
              </div>
              <div className="w-full bg-zinc-50 p-6 border border-zinc-100 mt-6 font-mono text-[10px] text-zinc-400 group-hover:bg-zinc-100 transition-colors overflow-hidden relative">
                {/* Binary Stream Effect */}
                <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-zinc-50 to-transparent z-10"></div>
                <div className="absolute inset-0 opacity-10 flex flex-col text-[8px] leading-none overflow-hidden pointer-events-none">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="whitespace-nowrap animate-marquee"
                      style={{ animationDuration: `${Math.random() * 5 + 5}s` }}
                    >
                      01010101010101010101010101010101010101010101010101
                    </div>
                  ))}
                </div>

                <div className="flex justify-between border-b border-zinc-200 pb-2 mb-2 relative z-20">
                  <span>STATUS</span>
                  <span className="text-emerald-600 font-bold animate-pulse">
                    LOCKED
                  </span>
                </div>
                <div className="mt-4 flex justify-center relative z-20">
                  <Lock
                    size={32}
                    className="text-zinc-300 group-hover:text-emerald-500 transition-colors duration-500"
                  />
                  {/* Scanning Laser */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent -translate-y-full group-hover:animate-[shimmer_2s_linear_infinite]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Analytics */}
          <div
            className={`md:col-span-2 relative overflow-hidden group bg-white border border-zinc-200 p-8 h-[400px] hover:shadow-xl hover:border-zinc-300 transition-all duration-300 ${isInView ? "animate-fade-up opacity-100" : "opacity-0 translate-y-8"}`}
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white mb-4 rounded-none">
                    <LineChart size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 font-display">
                    Performance Analytics
                  </h3>
                </div>
                <div className="hidden sm:flex gap-2">
                  <div className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-mono font-medium border border-zinc-200">
                    Views: +24%
                  </div>
                  <div className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-mono font-medium border border-zinc-200">
                    Conv: 4.2%
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full flex items-end justify-between gap-2 px-4 pb-4 border-b border-zinc-200 relative">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_90%,rgba(0,0,0,0.02)_100%)]"></div>
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-zinc-200 group-hover:bg-indigo-600 transition-all duration-700 ease-out relative group/bar"
                    style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity text-[10px] font-bold text-zinc-900 font-mono">
                      {h}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
