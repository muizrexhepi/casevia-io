"use client";
import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="flex flex-col items-start justify-center mb-24 md:mb-32">
          <Reveal>
            <span className="block text-left text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
              Established 2024
            </span>
          </Reveal>
          <Reveal width="100%">
            <h1 className="font-display text-[11vw] md:text-[8vw] leading-[0.8] font-black uppercase tracking-tighter text-left mb-12">
              The Agency
            </h1>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <div className="w-full h-px bg-black/10"></div>
          </Reveal>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl font-medium uppercase tracking-tight leading-tight">
                Casevia was born from a singular obsession: to eliminate the gap
                between ambition and execution.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Reveal delay={0.3}>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-loose uppercase tracking-wide">
                We saw too many great B2B companies struggling to communicate
                their value. They had the product, but their digital presence
                felt outdated, cluttered, or generic.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-loose uppercase tracking-wide">
                We exist to fix that. We are a collective of strategists,
                designers, and engineers who believe that clarity is the
                ultimate sophistication. We strip away the noise to reveal the
                core of your business.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Large Visual */}
        <div className="mb-32">
          <Reveal width="100%">
            <div className="w-full aspect-[16/9] bg-gray-100 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2670&auto=format&fit=crop"
                alt="Berlin Office"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 bg-white/90 backdrop-blur-sm">
                <p className="font-display text-xl uppercase font-bold tracking-tight">
                  Berlin HQ
                </p>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Torstraße 12, Mitte
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Core Values / Philosophy */}
        <div className="mb-32">
          <Reveal>
            <h2 className="font-display text-5xl md:text-7xl font-medium uppercase tracking-tighter mb-24">
              Philosophy
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/10 pt-12">
            <Reveal delay={0.1}>
              <div className="group">
                <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
                  01
                </span>
                <h3 className="font-display text-2xl font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  Essentialism
                </h3>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-widest leading-loose">
                  We don't add features. We remove distractions. Every pixel and
                  line of code must serve a purpose.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group">
                <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
                  02
                </span>
                <h3 className="font-display text-2xl font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  Velocity
                </h3>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-widest leading-loose">
                  Speed is a feature. We build systems that load instantly and
                  workflows that move your business forward, fast.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="group">
                <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
                  03
                </span>
                <h3 className="font-display text-2xl font-bold uppercase mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  Impact
                </h3>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-widest leading-loose">
                  We measure success not by awards, but by your revenue growth,
                  lead generation, and market position.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Team / Leadership - Minimal List */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/10 pb-8">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl font-medium uppercase tracking-tight">
                Leadership
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-4 md:mt-0">
                The minds behind the work
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Alexander V.",
                role: "Founder & Strategy",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
              },
              {
                name: "Sarah J.",
                role: "Head of Design",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
              },
              {
                name: "Marcus T.",
                role: "Technical Director",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
              },
            ].map((member, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex items-center justify-between py-6 border-b border-black/5 group hover:bg-gray-50 transition-colors px-4 -mx-4">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <h3 className="font-display text-xl font-medium uppercase tracking-wide">
                      {member.name}
                    </h3>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                    {member.role}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA Footer on About Page */}
        <div className="bg-[#0a0a0a] text-white p-12 md:p-24 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-medium uppercase tracking-tight mb-8">
              Ready to Define Your Story?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest border-b border-white pb-2 hover:text-gray-300 hover:border-gray-300 transition-all"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
