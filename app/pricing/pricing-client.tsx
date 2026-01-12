"use client";
import React, { useEffect } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/UI";

const PRICING_PLANS = [
  {
    name: "Digital Launch",
    description:
      "Essential digital presence for startups. Built for speed, clarity, and immediate market entry.",
    setupPrice: "2,500",
    monthlyPrice: "250",
    features: [
      "Single-Page Nexus",
      "Mobile Optimization",
      "SEO Fundamentals",
      "Lead Capture Systems",
    ],
  },
  {
    name: "Scale Catalyst",
    description:
      "Full-scale digital transformation. Custom design with advanced content control and interactions.",
    setupPrice: "7,500",
    monthlyPrice: "550",
    features: [
      "Multi-Page Strategy",
      "Visual Content Editor",
      "Custom Animations",
      "Performance Analytics",
      "Full SEO Audit",
    ],
  },
  {
    name: "Enterprise Ecosystem",
    description:
      "Complex systems, SaaS platforms, and large-scale infrastructure built for global performance.",
    setupPrice: "15,000",
    monthlyPrice: "1,200",
    features: [
      "Custom API Integrations",
      "User Auth Systems",
      "Dedicated Lead Engineer",
      "24/7 Priority Support",
      "SLA Guarantee",
    ],
  },
];

const PricingClient = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="reveal active bg-[#fbf9f8] min-h-screen">
      {/* Page Hero Section */}
      <section className="pt-32 md:pt-48 pb-20 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <Reveal>
            <h1 className="text-5xl md:text-8xl lg:text-[8rem] font-normal leading-[0.85] tracking-tighter text-gradient mb-12">
              Transparent <br /> investment <br /> structures.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl text-[#4A1D3A]/70 max-w-3xl leading-relaxed font-normal tracking-tight">
              Predictable pricing for high-performance engineering. From rapid
              MVPs to enterprise-grade digital ecosystems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing Grid Section */}
      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            {PRICING_PLANS.map((plan, i) => {
              const isHighlighted = plan.name === "Scale Catalyst";
              return (
                <Reveal key={i} delay={i * 0.1} width="100%">
                  <div
                    className={`p-10 md:p-12 h-full rounded-[3.5rem] flex flex-col justify-between transition-all duration-700 relative overflow-hidden shadow-sm group hover:scale-[1.02] ${
                      isHighlighted
                        ? "bg-[#221221] text-white shadow-2xl border-none"
                        : "bg-white/40 backdrop-blur-xl border border-[#221221]/5"
                    }`}
                  >
                    {isHighlighted && (
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[#D1326E]/10 blur-[100px] rounded-full pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity" />
                    )}

                    <div className="relative z-10">
                      <h3 className="text-3xl font-normal mb-4 tracking-tighter italic">
                        {plan.name}
                      </h3>
                      <p
                        className={`font-normal text-base mb-12 leading-relaxed ${
                          isHighlighted ? "text-white/60" : "text-[#4A1D3A]/70"
                        }`}
                      >
                        {plan.description}
                      </p>

                      <div className="space-y-8 mb-12">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-4">
                            <CheckCircle2
                              size={18}
                              className="text-[#D1326E]"
                            />
                            <span className="text-sm font-medium tracking-tight uppercase">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-10 mb-16">
                        <div>
                          <p
                            className={`text-[11px] font-bold tracking-tight mb-3 uppercase ${
                              isHighlighted
                                ? "text-white/30"
                                : "text-[#221221]/30"
                            }`}
                          >
                            One-time Nexus Fee
                          </p>
                          <p className="text-5xl font-normal tracking-tighter italic">
                            €{plan.setupPrice}
                          </p>
                        </div>
                        <div>
                          <p className="text-[11px] font-bold tracking-tight mb-3 text-[#D1326E] uppercase">
                            Monthly Evolution Retainer
                          </p>
                          <p className="text-3xl font-normal text-[#D1326E] tracking-tighter italic">
                            €{plan.monthlyPrice}{" "}
                            <span
                              className={`text-[10px] font-bold tracking-tight ml-1 ${
                                isHighlighted
                                  ? "text-white/30"
                                  : "text-[#221221]/30"
                              }`}
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
                        className="w-full py-8 text-sm tracking-tight uppercase font-bold"
                      >
                        Initiate Partnership
                      </Button>
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Requirements Section */}
      <section className="py-24 bg-[#221221]/5 border-y border-[#221221]/5">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-normal tracking-tighter mb-10 text-gradient italic">
              Custom Requirements?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-[#4A1D3A]/70 max-w-2xl mx-auto mb-12 font-normal tracking-tight">
              For large-scale infrastructure and specialized R&D projects, we
              offer tailor-made engagement models.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="px-12 py-6">
                Consult an Engineer <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PricingClient;
