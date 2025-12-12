"use client";

import React, { useEffect, useState, useMemo } from "react";
// Import from Next.js and Lucide (React-Router-Dom imports removed)
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowRight, Check, Plus, Minus } from "lucide-react";

// Assuming these are the correct paths in your Next.js structure
import { Reveal } from "@/components/ui/Reveal";
import { servicesData } from "@/components/services"; // Ensure this data is accessible here

// The component no longer accepts props, but fetches its own data
export default function ServiceClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // 1. Next.js App Router - Get the ID from the URL using the hook
  const params = useParams();
  // Safely extract the ID from the params object (which might be an array or undefined in certain edge cases)
  const serviceId = Array.isArray(params.id) ? params.id[0] : params.id;

  // 2. Fetch the data using useMemo (since it's a synchronous lookup on static data)
  const service = useMemo(() => {
    return servicesData.find((s) => s.id === serviceId);
  }, [serviceId]);

  // 3. Client-side Scroll to Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]); // Depend on serviceId to re-run if the user navigates between services

  // 4. Client-side Error Handling
  if (!service) {
    notFound();
    return null; // unreachable, but good practice
  }

  // 5. Render the fully styled page using the locally found 'service' data
  return (
    <div className="bg-white text-black min-h-screen pt-32 md:pt-40 pb-0">
      <div className="container mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="flex flex-col items-start justify-center mb-24 md:mb-32">
          <Reveal>
            <span className="block text-left text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
              Service {service.number}
            </span>
          </Reveal>
          <Reveal width="100%">
            <h1 className="font-display text-[11vw] md:text-[8vw] leading-[0.8] font-black uppercase tracking-tighter text-left mb-12">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <div className="w-full h-px bg-black/10"></div>
          </Reveal>
        </div>

        {/* Content Grid: Overview & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
          {/* Description Column */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl font-medium uppercase tracking-tight mb-8 leading-[0.9]">
                {service.description}
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-sm md:text-base text-gray-500 font-medium leading-loose uppercase tracking-wide max-w-2xl">
                {service.fullDescription}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-12">
                {/* Use Next.js Link */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                  Start Project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Deliverables Column */}
          <div className="lg:col-span-5 border-l border-black/5 pl-0 md:pl-12">
            <Reveal delay={0.3}>
              <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-8">
                Deliverables
              </span>
            </Reveal>
            <ul className="space-y-6">
              {/* Ensure 'deliverables' exists before mapping */}
              {service.deliverables?.map((item: string, idx: number) => (
                <Reveal key={idx} delay={0.4 + idx * 0.05}>
                  <li className="flex items-start gap-4 group">
                    <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center mt-[-2px] group-hover:bg-black group-hover:text-white transition-colors">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Section: The Diagnosis (Pain Points) - Dark Theme */}
      <div className="bg-[#0a0a0a] text-white py-32">
        <div className="container mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl font-medium uppercase tracking-tighter mb-16">
              The Diagnosis
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Ensure 'painPoints' exists before mapping */}
            {service.painPoints?.map(
              (pain: { title: string; desc: string }, idx: number) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="group border-t border-white/20 pt-8">
                    <span className="block text-emerald-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                      Symptom 0{idx + 1}
                    </span>
                    <h3 className="font-display text-2xl font-medium uppercase tracking-tight mb-4">
                      {pain.title}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-wide leading-loose">
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
      <div className="bg-zinc-50 py-32 border-b border-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <Reveal>
              <h2 className="font-display text-5xl md:text-6xl font-medium uppercase tracking-tighter">
                The Protocol
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-6 md:mt-0">
                How we execute
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ensure 'processSteps' exists before mapping */}
            {service.processSteps?.map(
              (step: { title: string; desc: string }, idx: number) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-8 h-full border border-black/5 hover:border-black/20 transition-all duration-300">
                    <span className="block text-4xl font-display font-medium text-gray-200 mb-6">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wide leading-loose">
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
      <div className="bg-white py-32">
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
              {/* Ensure 'faq' exists before mapping */}
              {service.faq?.map(
                (item: { q: string; a: string }, idx: number) => (
                  <Reveal key={idx} delay={idx * 0.1} width="100%">
                    <div className="border-b border-black/10">
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full py-8 flex items-center justify-between text-left group"
                      >
                        <span className="font-display text-xl md:text-2xl font-medium uppercase tracking-tight group-hover:text-gray-600 transition-colors pr-8">
                          {item.q}
                        </span>
                        <div
                          className={`shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                        >
                          {openFaq === idx ? (
                            <Minus className="w-6 h-6" />
                          ) : (
                            <Plus className="w-6 h-6" />
                          )}
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === idx ? "max-h-48 opacity-100 pb-8" : "max-h-0 opacity-0"}`}
                      >
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide leading-loose max-w-2xl">
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
      <div className="bg-[#f5f5f5] p-12 md:p-24 relative overflow-hidden">
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
            {/* Use Next.js Link */}
            <Link
              href="/contact"
              className="inline-block text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
            >
              Book Consultation
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
