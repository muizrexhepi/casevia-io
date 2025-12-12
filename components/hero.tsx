import React, { useEffect, useState } from "react";
import { Reveal } from "./ui/Reveal";

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    // Time updater
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 bg-white text-black overflow-hidden flex flex-col justify-between min-h-screen">
      <div className="container mx-auto px-6 md:px-12 flex flex-col relative z-20 h-full justify-between">
        {/* Typography Block */}
        <div className="flex-1 flex flex-col items-center justify-center mb-12 relative z-10 w-full mt-12 md:mt-24 select-none">
          <Reveal width="100%">
            <h1 className="font-display text-[13vw] leading-[0.8] font-medium uppercase tracking-tighter text-center text-black">
              Digital
            </h1>
          </Reveal>
          <Reveal width="100%" delay={0.15}>
            <h1 className="font-display text-[13vw] leading-[0.8] font-medium uppercase tracking-tighter text-center text-black">
              Solutions
            </h1>
          </Reveal>
        </div>

        {/* Data Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end py-6 relative z-20 gap-4 md:gap-0">
          <Reveal delay={0.3}>
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] leading-relaxed text-left text-gray-400">
              {time}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] leading-relaxed hidden md:block text-gray-400">
              hello@casevia.io
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="text-left md:text-right text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] leading-relaxed text-gray-400">
              Berlin, DE
            </div>
          </Reveal>
        </div>

        {/* Image - Full Width Parallax - Interactive Hover */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] overflow-hidden bg-gray-100 rounded-sm group">
          <div
            className="w-full h-full will-change-transform transition-transform duration-[1.5s] ease-expo"
            style={{ transform: `scale(1.1) translateY(${offset * 0.05}px)` }}
          >
            <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-700"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2600&auto=format&fit=crop"
              alt="Agency Team"
              className="w-full h-full object-cover grayscale transition-all duration-1000 ease-out"
            />
          </div>
        </div>

        {/* Mobile Only Data Row Below Image */}
        <div className="md:hidden w-full flex justify-between items-start pt-6 relative z-20">
          <Reveal delay={0.7}>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
              hello@casevia.io
            </div>
          </Reveal>
          <Reveal delay={0.8}>
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Scroll
            </div>
          </Reveal>
        </div>

        {/* Stats Grid - Cleaner, No Border Top */}
        <div className="w-full mt-12 md:mt-24 pt-12 md:pt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-0">
            {[
              { val: "50+", label: "Regular Clients" },
              { val: "6.2%", label: "Yearly Growth" },
              { val: "4.5", label: "Client Rating" },
              { val: "21+", label: "Team Members" },
            ].map((stat, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}>
                <div
                  className={`flex flex-col items-start md:items-center justify-start md:justify-center ${i !== 0 ? "md:border-l md:border-black/5" : ""}`}
                >
                  <span className="font-display text-4xl md:text-5xl font-medium uppercase tracking-tighter mb-2 md:mb-4">
                    {stat.val}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-gray-400 text-left md:text-center px-0 md:px-4">
                    {stat.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
