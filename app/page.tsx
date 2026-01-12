"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { CASE_STUDIES, PRICING_PLANS, FAQS } from "@/lib/constants";
import { CaseCard, SectionTitle, NavArrows, Button } from "@/components/UI"; // Assume these exist
import HeroIllustration from "@/components/hero-illustration";

export default function HomePage() {
  const workRef = useRef<HTMLDivElement>(null);

  // Scroll Reveal Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Carousel Logic
  const scroll = (direction: "left" | "right") => {
    if (workRef.current) {
      const { scrollLeft, clientWidth } = workRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 1.5
          : scrollLeft + clientWidth / 1.5;
      workRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full text-left relative z-10">
          <div className="max-w-7xl">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-normal leading-[1] tracking-tighter text-gradient mb-12 animate-in fade-in slide-in-from-left-12 duration-1000">
              Engineering the software powering growth.
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <p className="text-xl md:text-2xl text-[#4A1D3A]/70 font-normal max-w-3xl leading-[1.2] tracking-tight animate-in fade-in slide-in-from-left-16 duration-1000 delay-200">
                Berlin-based high-performance engineering studio architecting
                custom software, autonomous systems, and enterprise AI for
                market leaders.
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById("methodology")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-[#D1326E] text-[15px] font-bold flex items-center gap-4 group animate-in fade-in slide-in-from-left-20 duration-1000 delay-400 transition-all tracking-tight whitespace-nowrap"
              >
                View Framework{" "}
                <ArrowRight
                  size={22}
                  strokeWidth={2.5}
                  className="group-hover:translate-x-3 transition-transform duration-500"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[70vw] h-[70vw] lg:w-[50vw] lg:h-[50vw] pointer-events-none opacity-20">
          <HeroIllustration />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 reveal">
        <div className="max-w-screen-2xl mx-auto text-center relative flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl lg:text-[5rem] font-normal leading-[1.1] tracking-tighter text-gradient max-w-6xl mx-auto italic">
            We weave progress into digital reality through technical mastery. We
            craft software that transcends the ordinary—driven by purpose,
            fueled by innovation, and designed to scale.
          </h2>
        </div>
      </section>

      {/* Methodology Section */}
      <section
        id="methodology"
        className="py-24 md:py-32 overflow-hidden reveal"
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
            <div className="lg:w-1/3">
              <div className="text-[12px] font-bold text-[#D1326E] tracking-tight mb-8">
                Framework
              </div>
              <SectionTitle className="mb-10 max-w-md">
                The Logic Catalyst
              </SectionTitle>
              <p className="text-xl md:text-2xl text-[#4A1D3A]/80 font-normal leading-snug max-w-sm mb-12">
                A proprietary engineering standard built to convert complex
                challenges into resilient infrastructure.
              </p>
              <Link
                href="/contact"
                className="text-[#D1326E] text-[15px] font-bold flex items-center gap-3 group transition-all tracking-tight"
              >
                Service Matrix{" "}
                <ArrowRight
                  size={20}
                  strokeWidth={2.5}
                  className="group-hover:translate-x-3 transition-transform"
                />
              </Link>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  num: "01",
                  title: "Logic Forge",
                  desc: "Precision requirements gathering through technical deep-dives and feasibility audits.",
                },
                {
                  num: "02",
                  title: "Nexus Engine",
                  desc: "Building high-performance API architectures and core logical processing units.",
                },
                {
                  num: "03",
                  title: "Cognitive Flow",
                  desc: "Integrating machine learning and custom LLM workflows to automate business intelligence.",
                },
                {
                  num: "04",
                  title: "Hyper Scaling",
                  desc: "Cloud-native orchestration for systems that must process millions of events per second.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-10 md:p-12 border border-[#221221]/5 rounded-[3rem] bg-white/20 backdrop-blur-xl hover:border-[#D1326E]/20 transition-all group shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 text-4xl font-normal text-[#D1326E]/5 tracking-tighter group-hover:text-[#D1326E]/10 transition-colors italic">
                    {item.num}
                  </div>
                  <h3 className="text-2xl font-normal tracking-tighter text-[#221221] mb-4 group-hover:text-[#D1326E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-lg text-[#4A1D3A]/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="py-24 md:py-32 overflow-hidden backdrop-blur-sm"
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 lg:items-end">
            <div className="lg:w-1/3">
              <div className="text-[12px] font-bold text-[#D1326E] tracking-tight mb-8">
                Portfolio
              </div>
              <SectionTitle className="leading-tight">
                Global Nexus
              </SectionTitle>
            </div>
            <div className="flex-1 flex flex-col md:flex-row md:items-end justify-between border-l-0 lg:border-l lg:border-[#D1326E]/30 lg:pl-16">
              <p className="text-xl md:text-2xl text-[#4A1D3A]/70 font-normal max-w-2xl leading-snug">
                Resilient engineering that scales. Discover how we architect
                growth engines for enterprises across three continents.
              </p>
              <Link
                href="/work"
                className="text-[#D1326E] text-[15px] font-bold flex items-center gap-3 group transition-all mt-10 md:mt-0 tracking-tight"
              >
                All Case Studies{" "}
                <ArrowRight
                  size={22}
                  className="group-hover:translate-x-3 transition-transform"
                />
              </Link>
            </div>
          </div>

          <div className="relative mt-8">
            <div
              ref={workRef}
              className="flex gap-8 md:gap-12 overflow-x-auto no-scrollbar scroll-smooth pb-10"
            >
              {CASE_STUDIES.map((study) => (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  className="cursor-pointer min-w-[300px] md:min-w-[400px]"
                >
                  <CaseCard
                    title={study.title}
                    subtitle={study.subtitle}
                    imageUrl={study.imageUrl}
                  />
                </Link>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <NavArrows
                onPrev={() => scroll("left")}
                onNext={() => scroll("right")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-[#221221] text-white overflow-hidden relative reveal">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[25rem] h-[25rem] bg-[#D1326E] blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[25rem] h-[25rem] bg-[#6326E1] blur-[150px] rounded-full animate-pulse delay-1000" />
        </div>
        <div className="max-w-screen-2xl mx-auto text-center relative z-10">
          <p className="text-[12px] font-bold text-[#D1326E] tracking-[0.4em] mb-12 uppercase">
            Manifesto
          </p>
          <h2 className="text-4xl md:text-7xl lg:text-[8rem] font-normal leading-[1] tracking-tighter mb-16 max-w-6xl mx-auto italic">
            We believe that code is the{" "}
            <span className="text-[#D1326E]">invisible architecture</span> of
            human freedom.
          </h2>
          <div className="h-0.5 w-24 bg-[#D1326E]/40 mx-auto mb-16" />
          <p className="text-xl md:text-2xl text-white/50 font-normal max-w-3xl mx-auto leading-relaxed tracking-tight">
            Casevia was built for the disruptors. We bring enterprise-grade
            engineering rigor to those who have the vision to redefine their
            industries.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 reveal">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div>
              <div className="text-[12px] font-bold text-[#D1326E] tracking-tight mb-8">
                Capital Allocation
              </div>
              <SectionTitle>Technical Investment</SectionTitle>
            </div>
            <p className="text-lg md:text-xl text-[#4A1D3A]/70 font-normal max-w-md leading-relaxed tracking-tight">
              Strategic upfront engineering development coupled with high-value
              technical retainers for continuous evolution.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            {PRICING_PLANS.map((plan, i) => {
              const isHighlighted = plan.name === "Scale Catalyst";
              return (
                <div
                  key={i}
                  className={`p-10 md:p-12 rounded-[3.5rem] flex flex-col justify-between transition-all duration-700 relative overflow-hidden shadow-sm group hover:scale-[1.02] ${isHighlighted ? "bg-[#221221] text-white shadow-2xl border-none" : "bg-white/40 backdrop-blur-xl border border-[#221221]/5"}`}
                >
                  {isHighlighted && (
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#D1326E]/10 blur-[100px] rounded-full pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity" />
                  )}
                  <div className="relative z-10">
                    <h3 className="text-3xl font-normal mb-4 tracking-tighter">
                      {plan.name}
                    </h3>
                    <p
                      className={`font-normal text-base mb-12 leading-relaxed ${isHighlighted ? "text-white/60" : "text-[#4A1D3A]/70"}`}
                    >
                      {plan.description}
                    </p>
                    <div className="space-y-10 mb-16">
                      <div>
                        <p
                          className={`text-[11px] font-bold tracking-tight mb-3 ${isHighlighted ? "text-white/30" : "text-[#221221]/30"}`}
                        >
                          Nexus Fee
                        </p>
                        <p className="text-5xl font-normal tracking-tighter">
                          €{plan.setupPrice}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`text-[11px] font-bold tracking-tight mb-3 text-[#D1326E]`}
                        >
                          Retainer Allocation
                        </p>
                        <p className="text-3xl font-normal text-[#D1326E] tracking-tighter">
                          €{plan.monthlyPrice}{" "}
                          <span
                            className={`text-[10px] font-bold tracking-tight ml-1 ${isHighlighted ? "text-white/30" : "text-[#221221]/30"}`}
                          >
                            / MONTH
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="w-full">
                    <Button
                      variant={isHighlighted ? "secondary" : "outline"}
                      className="w-full py-5 text-sm tracking-tight"
                    >
                      Initiate Partnership
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 reveal">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 lg:gap-24 text-left">
          <div className="lg:col-span-5">
            <div className="text-[12px] font-bold text-[#D1326E] tracking-tight mb-8">
              Intelligence
            </div>
            <SectionTitle className="leading-tight">
              Strategic Clarification
            </SectionTitle>
            <p className="text-xl text-[#4A1D3A]/70 mt-10 max-w-sm leading-relaxed tracking-tight">
              Everything you need to know about navigating the partnership with
              Casevia Engineering Group.
            </p>
          </div>
          <div className="lg:col-span-7 divide-y divide-[#221221]/10">
            {FAQS.map((faq, i) => (
              <details key={i} className="group py-10 first:pt-0">
                <summary className="flex justify-between items-center cursor-pointer list-none text-xl md:text-3xl font-normal tracking-tighter group-hover:text-[#D1326E] transition-all duration-500 leading-tight pr-4">
                  {faq.question}
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border border-[#D1326E]/20 group-hover:bg-[#D1326E] group-hover:text-white transition-all duration-700">
                    <Plus
                      className="transition-transform duration-700 group-open:rotate-45"
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>
                </summary>
                <div className="mt-6 text-lg text-[#4A1D3A]/80 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-top-2 duration-700">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
