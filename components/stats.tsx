"use client";
import React from "react";
import { Reveal } from "./ui/Reveal";

const clients = {
  startups: [
    { name: "Insyllium", logo: "In" },
    { name: "Insylink", logo: "Ik" },
    { name: "Menyro", logo: "Me" },
    { name: "Tvojpazar", logo: "Tj" },
  ],
  scaleups: [
    { name: "LansGR", logo: "Lg" },
    { name: "Velora", logo: "Ve" },
    { name: "Aesthetica", logo: "Ae" },
    { name: "NexGen", logo: "Ng" },
  ],
  enterprises: [
    { name: "Kroma", logo: "Kr" },
    { name: "Ventus", logo: "Vn" },
    { name: "Oculus", logo: "Oc" },
    { name: "Forma", logo: "Fm" },
  ],
};

export const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Faded Top Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24"></div>

        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-display text-2xl md:text-4xl font-medium text-white mb-4">
              Trusted by ambitious brands
            </h2>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              From day one startups to global enterprises
            </p>
          </Reveal>
        </div>

        <div className="space-y-12">
          {/* Startups Row */}
          <Reveal width="100%">
            <div className="relative py-8">
              {/* Faded Divider */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-32 shrink-0 text-center md:text-left">
                  <span className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                    <div className="w-2 h-2 rounded-full border border-blue-400"></div>
                    Startups
                  </span>
                </div>
                <div className="flex-1 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {clients.startups.map((c, i) => (
                    <h3
                      key={i}
                      className="font-display text-xl md:text-2xl font-bold text-white/80"
                    >
                      {c.name}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Scaleups Row */}
          <Reveal width="100%" delay={0.1}>
            <div className="relative py-8">
              {/* Faded Divider */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-32 shrink-0 text-center md:text-left">
                  <span className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-purple-500">
                    <div className="w-2 h-2 rounded-full border border-purple-500"></div>
                    Scaleups
                  </span>
                </div>
                <div className="flex-1 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {clients.scaleups.map((c, i) => (
                    <h3
                      key={i}
                      className="font-display text-xl md:text-2xl font-bold text-white/80"
                    >
                      {c.name}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Enterprise Row */}
          <Reveal width="100%" delay={0.2}>
            <div className="relative py-8">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="w-full md:w-32 shrink-0 text-center md:text-left">
                  <span className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                    <div className="w-2 h-2 rounded-full border border-emerald-400"></div>
                    Enterprise
                  </span>
                </div>
                <div className="flex-1 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  {clients.enterprises.map((c, i) => (
                    <h3
                      key={i}
                      className="font-display text-xl md:text-2xl font-bold text-white/80"
                    >
                      {c.name}
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
