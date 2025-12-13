"use client";
import React, { useEffect, useState, useRef } from "react";
import { Reveal } from "./ui/Reveal";
import { Star, TrendingUp, ArrowDown } from "lucide-react";
import Link from "next/link";

export const Hero: React.FC = () => {
  const [time, setTime] = useState("");
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
      }
    };
    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", onScroll);

    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-0 bg-[#050505] text-white min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col">
        {/* Top Meta Line */}
        <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-12 md:mb-20">
          <Reveal>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Berlin, DE &bull; {time}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="hidden md:flex items-center gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                Scrolldown
              </span>
              <ArrowDown className="w-3 h-3 text-white animate-bounce" />
            </div>
          </Reveal>
        </div>

        {/* Main Grid Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10">
            <Reveal width="100%">
              <h1 className="font-display text-[14vw] lg:text-[10vw] leading-[0.8] font-black uppercase tracking-tighter text-white mix-blend-screen">
                Shaping <br />
                <span className="text-gray-600">Digital</span> <br />
                Reality
              </h1>
            </Reveal>

            <div className="mt-12 flex flex-col md:flex-row gap-8 md:items-center">
              <Reveal delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-14 px-8 border border-white text-xs font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300"
                >
                  Start Project
                </Link>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-widest max-w-xs leading-relaxed">
                  We build systems that scale. No fluff. No friction. Just pure
                  performance.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right: Sharp Visual */}
          <div className="lg:col-span-5 relative h-[40vh] lg:h-[60vh] w-full">
            <Reveal width="100%" className="h-full">
              <div className="w-full h-full border border-white/20 relative overflow-hidden group">
                {/* Overlay Grid */}
                <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div
                  ref={parallaxRef}
                  className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
                >
                  <img
                    src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop"
                    alt="Abstract Digital Art"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                  />
                </div>

                {/* Tech Data Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/10 bg-black/50 backdrop-blur-sm flex justify-between items-center z-30">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                      Status
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-400">
                      Operational
                    </span>
                  </div>
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full py-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Reveal delay={0.4}>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-white text-white" />
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                Clutch Rated
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              Trusted Global Partner
            </span>
          </Reveal>
          <Reveal delay={0.6}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hidden md:block">
              Since 2024
            </span>
          </Reveal>
          <Reveal delay={0.7}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hidden md:block text-right">
              Scroll for more
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
