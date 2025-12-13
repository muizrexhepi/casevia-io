"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowRight, Check, Plus, Minus } from "lucide-react";

// Assuming these paths/components are correct for the Next.js version's structure
import { SERVICES_DATA } from "@/lib/services";
import { Reveal } from "@/components/ui/Reveal";

/**
 * ServiceClientPage component
 * This component has been updated to use the styling logic from the first (React Router) component,
 * which features a dark background, purple accent, and a top image with a parallax effect (though the parallax
 * itself is removed as it's complex/unidiomatic for a quick conversion and wasn't requested).
 */
export default function ServiceClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const params = useParams();
  const serviceId = Array.isArray(params.id) ? params.id[0] : params.id;

  const service = useMemo(() => {
    return SERVICES_DATA.find((s) => s.id === serviceId);
  }, [serviceId]);

  // Client-side Scroll to Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Client-side Error Handling
  if (!service) {
    notFound();
    return null;
  }

  // NOTE: The parallax effect from the original component is complex to port
  // seamlessly into the Next.js structure without the original useRef/useEffect setup.
  // We will keep the image and dark theme styling, but remove the specific parallax effect implementation.

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-black">
        {/* Placeholder for the image div, without the original parallax logic */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-40 grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full pb-24 md:pb-32 z-10 text-white">
          <div className="container mx-auto px-6 md:px-12">
            <Reveal>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-purple-500 mb-6">
                Service {service.number}
              </span>
            </Reveal>
            <Reveal width="100%" delay={0.1}>
              <h1 className="font-display text-[11vw] md:text-[8vw] leading-[0.8] font-black uppercase tracking-tighter mix-blend-screen">
                {service.title}
              </h1>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Content Grid: Overview & Deliverables */}
      <div className="container mx-auto px-6 md:px-12 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
          {/* Description Column */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl font-medium uppercase tracking-tight mb-8 leading-[0.9]">
                {service.description}
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-sm md:text-base text-gray-400 font-medium leading-loose uppercase tracking-wide max-w-2xl">
                {service.fullDescription}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all duration-300 rounded-none"
                >
                  Start Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Deliverables Column */}
          <div className="lg:col-span-5 lg:border-l border-white/10 lg:pl-12">
            <Reveal delay={0.3}>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-8">
                Deliverables
              </span>
            </Reveal>
            <ul className="space-y-6">
              {service.deliverables?.map((item: string, idx: number) => (
                <Reveal key={idx} delay={0.4 + idx * 0.05}>
                  <li className="flex items-center gap-4 group">
                    <div className="w-6 h-6 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300 rounded-none">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide text-gray-300 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section: The Diagnosis (Pain Points) */}
      <div className="bg-[#050505] text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl font-medium uppercase tracking-tighter mb-16">
              The Diagnosis
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {service.painPoints?.map(
              (pain: { title: string; desc: string }, idx: number) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="group border-t border-white/20 pt-8 hover:border-purple-500 transition-colors duration-500">
                    <span className="block text-purple-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                      Symptom 0{idx + 1}
                    </span>
                    <h3 className="font-display text-2xl font-medium uppercase tracking-tight mb-4">
                      {pain.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide leading-loose group-hover:text-gray-200 transition-colors duration-500">
                      {pain.desc}
                    </p>
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </div>

      {/* Section: The Process Steps */}
      <div className="bg-[#050505] py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <Reveal>
              <h2 className="font-display text-5xl md:text-6xl font-medium uppercase tracking-tighter">
                The Protocol
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-6 md:mt-0">
                How we execute
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.processSteps?.map(
              (step: { title: string; desc: string }, idx: number) => (
                <Reveal key={idx} delay={idx * 0.1} className="h-full">
                  <div className="bg-[#050505] p-8 h-full border border-white/10 hover:border-white/30 hover:-translate-y-2 transition-all duration-500 ease-out rounded-none group">
                    <span className="block text-4xl font-display font-medium text-gray-700 mb-6 group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide leading-loose group-hover:text-gray-400">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </div>

      {/* Section: FAQ */}
      <div className="bg-[#050505] py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <Reveal>
                <h2 className="font-display text-5xl font-medium uppercase tracking-tighter mb-6">
                  FAQ
                </h2>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                  Common Questions
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              {service.faq?.map(
                (item: { q: string; a: string }, idx: number) => (
                  <Reveal key={idx} delay={idx * 0.1} width="100%">
                    <div className="border-b border-white/10">
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full py-8 flex items-center justify-between text-left group"
                      >
                        <span className="font-display text-xl md:text-2xl font-medium uppercase tracking-tight group-hover:text-purple-400 transition-colors pr-8 text-gray-300">
                          {item.q}
                        </span>
                        <div
                          className={`shrink-0 transition-transform duration-300 text-white group-hover:text-purple-400 ${openFaq === idx ? "rotate-180" : ""}`}
                        >
                          {openFaq === idx ? (
                            <Minus className="w-6 h-6" />
                          ) : (
                            <Plus className="w-6 h-6" />
                          )}
                        </div>
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        // Using explicit style for the height transition as in the first component
                        style={{
                          maxHeight: openFaq === idx ? "200px" : "0px",
                          opacity: openFaq === idx ? 1 : 0,
                        }}
                      >
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide leading-loose max-w-2xl pb-8">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related CTA Section */}
      <div className="bg-[#050505] p-12 md:p-24 relative overflow-hidden">
        <div className="container mx-auto relative z-10 px-6 md:px-12">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-medium uppercase tracking-tighter mb-8">
              Not sure if this <br /> is what you need?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-12 max-w-md">
              We offer free 15-minute consultations to diagnose your current
              situation and recommend the right path.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-block text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-purple-400 hover:border-purple-400 transition-all text-white"
            >
              Book Consultation
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
