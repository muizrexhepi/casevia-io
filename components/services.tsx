"use client";
import React, { useState } from "react";
import { Reveal } from "./ui/Reveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/services";

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="py-16 md:py-32 bg-[#050505] text-white relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-32 text-left">
          <div className="md:w-1/3 text-left">
            <Reveal>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-purple-500 mb-6 text-left">
                Expertise
              </span>
              <h2 className="font-display text-4xl md:text-7xl font-medium uppercase tracking-tighter leading-[0.9] text-left text-white">
                Our <br /> Solutions
              </h2>
            </Reveal>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 text-left">
            <Reveal delay={0.1}>
              <p className="text-sm md:text-base font-medium text-gray-400 leading-loose text-left">
                We don't try to be everything to everyone. We specialize in
                three core pillars that drive digital transformation: Strategy,
                Engineering, and Growth.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] border-b border-white/30 pb-2 hover:border-white transition-all mt-8 text-white"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Interactive Services List - Sharp & Dark */}
        <div className="flex flex-col">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={idx}
              className="group relative"
              onMouseEnter={() => setActiveService(idx)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Faded Divider between items */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

              <Link
                href={`/services/${service.id}`}
                className="block py-16 md:py-20 w-full text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Number */}
                  <div className="md:col-span-2">
                    <span className="font-display text-sm font-bold text-gray-500 group-hover:text-purple-400 transition-colors duration-300">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Mobile Summary */}
                  <div className="md:col-span-4">
                    <h3 className="font-display text-3xl md:text-5xl font-medium uppercase tracking-tight mb-2 group-hover:text-white transition-colors duration-300 text-gray-300 text-left">
                      {service.title}
                    </h3>
                    <p className="md:hidden text-xs font-bold uppercase tracking-widest text-gray-500 mt-2 text-left">
                      {service.summary}
                    </p>
                  </div>

                  {/* Description (Desktop) */}
                  <div className="hidden md:block md:col-span-4">
                    <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors duration-300 text-left">
                      {service.description}
                    </p>
                    <div className="flex gap-4 mt-6">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-bold uppercase tracking-wider text-gray-600 border border-white/10 px-2 py-1 rounded-none group-hover:text-gray-400 group-hover:border-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Icon - Sharp Box */}
                  <div className="hidden md:flex md:col-span-2 justify-end">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 rounded-none">
                      <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
