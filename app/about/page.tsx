"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const teamMembers = [
  {
    name: "Alexander V.",
    role: "Founder & Strategy",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Design",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Marcus Thorne",
    role: "Technical Director",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Elara Vane",
    role: "Brand Lead",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
  },
];

const AboutPage: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Hero Section - Left Aligned for Impact */}
      <section className="pt-40 md:pt-60 pb-24 px-6 md:px-12 container mx-auto text-left relative z-10">
        <Reveal>
          <span className="block text-xs font-bold uppercase tracking-[0.25em] text-purple-500 mb-6 text-left">
            Agency
          </span>
        </Reveal>
        <Reveal width="100%" delay={0.1}>
          <h1 className="font-display text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-left mb-12 text-white">
            We Are <br /> Casevia.
          </h1>
        </Reveal>

        <div className="flex justify-start mt-12">
          <Reveal delay={0.2}>
            <p className="text-left text-sm md:text-lg font-medium uppercase tracking-widest max-w-xl leading-loose text-gray-400">
              A digital design agency bridging the gap between{" "}
              <span className="text-white font-bold">ambition</span> and{" "}
              <span className="text-white font-bold">reality</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial Layout: The Manifesto - Consistent Dark BG */}
      <section className="py-32 border-t border-white/10 bg-[#050505]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <Reveal>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-purple-500 mb-6">
                Manifesto
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-8xl font-medium uppercase tracking-tighter leading-none mb-16 text-white">
                Design is <br /> Silence.
              </h2>
            </Reveal>

            <div className="space-y-12 max-w-3xl">
              <Reveal delay={0.2}>
                <p className="font-display text-2xl md:text-4xl leading-relaxed font-light text-gray-400">
                  In a world screaming for attention, the quietest room is the
                  most powerful. We believe that{" "}
                  <span className="text-white">
                    true luxury is the absence of friction.
                  </span>
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3} width="100%">
              <div className="w-full aspect-[2.4/1] bg-gray-900 overflow-hidden relative group border-y border-white/10 mt-32">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                  alt="Office Aesthetics"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Philosophy Grid - Consistent Dark BG */}
      <section className="py-32 bg-[#050505] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="text-left mb-24">
            <Reveal>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-purple-500 mb-6">
                Values
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-7xl font-medium uppercase tracking-tighter text-white">
                Our Standards
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                title: "Precision",
                desc: "We measure twice, cut once. Every pixel serves a purpose.",
              },
              {
                title: "Velocity",
                desc: "Speed is the ultimate competitive advantage in the digital age.",
              },
              {
                title: "Legacy",
                desc: "We build brands that are designed to outlast the competition.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#050505] p-12 hover:bg-[#080808] transition-colors duration-500 group"
              >
                <Reveal delay={idx * 0.1}>
                  <span className="block text-xs font-bold text-gray-600 mb-8 group-hover:text-purple-500 transition-colors">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-3xl font-bold uppercase mb-6 text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wide leading-loose">
                    {item.desc}
                  </p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Team Section - Consistent Dark BG */}
      <section className="py-32 bg-[#050505] relative border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <span className="block text-xs font-bold uppercase tracking-[0.25em] text-purple-500 mb-12 text-left">
              The Collective
            </span>
          </Reveal>

          <div className="relative">
            {/* Background Image Container - Fixed/Absolute centered */}
            <div
              className="hidden md:block absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] z-0 pointer-events-none overflow-hidden transition-opacity duration-500 mix-blend-screen"
              style={{ opacity: hoveredMember !== null ? 1 : 0 }}
            >
              {teamMembers.map((member, idx) => (
                <img
                  key={idx}
                  src={member.img}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 grayscale opacity-50 ${hoveredMember === idx ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>

            {/* List */}
            <div className="relative z-10">
              {teamMembers.map((member, idx) => (
                <Reveal key={idx} delay={idx * 0.05} width="100%">
                  <div
                    className="border-b border-white/10 group cursor-pointer"
                    onMouseEnter={() => setHoveredMember(idx)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    <div className="py-12 flex items-center justify-between transition-all duration-300 group-hover:pl-8">
                      <h3 className="font-display text-4xl md:text-7xl font-medium uppercase tracking-tighter text-gray-600 group-hover:text-white transition-colors duration-300">
                        {member.name}
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-600 group-hover:text-purple-400 transition-colors">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-[#050505] text-white py-32 text-center border-t border-white/10">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-medium uppercase tracking-tight mb-8 text-white">
            Enough about us.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest bg-white text-black px-8 py-4 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-none"
          >
            Tell us about you <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
};
export default AboutPage;
