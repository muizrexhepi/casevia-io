import React from "react";
import { Reveal } from "./ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "lumina",
    title: "Lumina Financial",
    category: "Fintech Rebrand",
    image: "https://picsum.photos/seed/arch1/1200/900",
  },
  {
    id: "apex",
    title: "Apex Architecture",
    category: "Web Development",
    image: "https://picsum.photos/seed/arch2/1200/900",
  },
  {
    id: "veloce",
    title: "Veloce Motors",
    category: "Digital Campaign",
    image: "https://picsum.photos/seed/car1/1200/900",
  },
  {
    id: "seren",
    title: "Seren Spas",
    category: "Identity System",
    image: "https://picsum.photos/seed/nature1/1200/900",
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <div>
            <Reveal>
              <span className="block mb-6 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                Selected Work
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-5xl md:text-7xl font-medium uppercase tracking-tighter leading-[0.9]">
                Portfolio
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/work"
              className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] border-b border-black/20 pb-2 hover:text-gray-600 hover:border-black transition-all mt-8 md:mt-0"
            >
              View All Projects
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <Link
                href={`/work/${project.id}`}
                className="group cursor-pointer block"
              >
                {/* Image Container */}
                <div className="overflow-hidden mb-8 relative aspect-[4/3] bg-gray-100">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent z-10 transition-colors duration-1000 ease-expo"></div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-expo"
                  />
                </div>

                {/* Content */}
                <div className="flex justify-between items-end border-b border-black/10 pb-6 group-hover:border-black transition-colors duration-500">
                  <div className="relative">
                    <h3 className="font-display text-3xl font-medium uppercase tracking-tight mb-3 transform group-hover:-translate-y-1 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.25em] group-hover:text-black transition-colors duration-500">
                      {project.category}
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="md:hidden mt-12">
          <Link
            href="/work"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] border-b border-black/20 pb-2 hover:text-gray-600 hover:border-black transition-all"
          >
            View All Projects
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
