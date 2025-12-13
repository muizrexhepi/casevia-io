"use client";
import React, { useEffect } from "react";
import { Check, ArrowRight, Zap, Shield, Minus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const PricingClient = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const comparisonFeatures = [
    {
      name: "Design Revisions",
      standard: "2 Rounds",
      pro: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      name: "Content Management",
      standard: "Standard",
      pro: "Easy Visual Editor",
      enterprise: "Custom Workflows",
    },
    {
      name: "Animations",
      standard: "Standard",
      pro: "Custom Interactions",
      enterprise: "Advanced WebGL",
    },
    {
      name: "SEO Setup",
      standard: "Basic",
      pro: "Advanced Strategy",
      enterprise: "Full Audit & Exec",
    },
    {
      name: "Delivery Time",
      standard: "1-2 Weeks",
      pro: "3-5 Weeks",
      enterprise: "6+ Weeks",
    },
    {
      name: "Post-Launch Support",
      standard: "Email",
      pro: "Slack Channel",
      enterprise: "Dedicated Manager",
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-6 md:px-12 text-left">
        {/* Header */}
        <div className="flex flex-col items-start justify-center mb-24 md:mb-32 text-left">
          <Reveal>
            <span className="block text-left text-xs font-bold uppercase tracking-[0.25em] text-purple-500 mb-6">
              Investment
            </span>
          </Reveal>
          <Reveal width="100%">
            <h1 className="font-display text-[11vw] md:text-[8vw] leading-[0.8] font-black uppercase tracking-tighter text-left mb-12 text-white">
              Pricing & <br /> Plans
            </h1>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <div className="w-full h-px bg-white/10"></div>
          </Reveal>
        </div>

        {/* Detailed Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {/* Standard */}
          <Reveal delay={0.1} className="h-full">
            <div className="flex flex-col h-full p-8 md:p-12 bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all duration-500 group text-left">
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block text-left">
                  Entry
                </span>
                <h3 className="font-display text-3xl font-medium uppercase tracking-tight mb-4 text-white">
                  The Launch
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-5xl font-medium tracking-tighter text-white">
                    $1,500
                  </span>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6">
                  + $150/mo maintenance
                </p>
                <p className="text-gray-400 text-xs font-medium leading-relaxed uppercase tracking-wide text-left">
                  Essential digital presence for startups. Speed and clarity.
                </p>
              </div>
              <div className="flex-1 border-t border-white/10 pt-8 mb-8">
                <ul className="space-y-4">
                  {[
                    "One-Page Site",
                    "Mobile Optimized",
                    "SEO Fundamentals",
                    "Lead Capture Form",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-500 text-left"
                    >
                      <Check className="w-3 h-3 text-white" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 text-left">
                  50% Deposit Required
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-4 border border-white/20 text-center text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Select Plan
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Professional */}
          <Reveal delay={0.2} className="h-full">
            <div className="flex flex-col h-full p-8 md:p-12 bg-[#0a0a0a] border border-purple-500/50 hover:border-purple-500 transition-all duration-500 group relative text-left">
              <div className="absolute top-0 right-0 p-4">
                <Zap className="w-5 h-5 text-purple-500" />
              </div>
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 mb-2 block text-left">
                  Recommended
                </span>
                <h3 className="font-display text-3xl font-medium uppercase tracking-tight mb-4 text-white">
                  The Scale
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-5xl font-medium tracking-tighter text-white">
                    $5,000
                  </span>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6">
                  + $300/mo maintenance
                </p>
                <p className="text-gray-400 text-xs font-medium leading-relaxed uppercase tracking-wide text-left">
                  Full-scale digital transformation. Custom design with content
                  control.
                </p>
              </div>
              <div className="flex-1 border-t border-white/10 pt-8 mb-8">
                <ul className="space-y-4">
                  {[
                    "Multi-Page Strategy",
                    "Visual Content Editor",
                    "Custom Animations",
                    "Performance Analytics",
                    "News/Blog Section",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-300 text-left"
                    >
                      <Check className="w-3 h-3 text-purple-400" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 text-left">
                  50% Deposit Required
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-4 bg-white text-black text-center text-xs font-bold uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all"
                >
                  Select Plan
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Enterprise */}
          <Reveal delay={0.3} className="h-full">
            <div className="flex flex-col h-full p-8 md:p-12 bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-all duration-500 group text-left">
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block text-left">
                  Corporation
                </span>
                <h3 className="font-display text-3xl font-medium uppercase tracking-tight mb-4 text-white">
                  Custom
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-5xl font-medium tracking-tighter text-white">
                    Talk to Us
                  </span>
                </div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-6">
                  Custom SLA
                </p>
                <p className="text-gray-400 text-xs font-medium leading-relaxed uppercase tracking-wide text-left">
                  Complex systems, SaaS platforms, and large-scale ecommerce.
                </p>
              </div>
              <div className="flex-1 border-t border-white/10 pt-8 mb-8">
                <ul className="space-y-4">
                  {[
                    "Custom Functionality",
                    "API Integrations",
                    "User Auth Systems",
                    "Dedicated Team",
                    "24/7 Priority Support",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-500 text-left"
                    >
                      <Check className="w-3 h-3 text-white" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 text-left">
                  Based on requirements
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-4 border border-white/20 text-center text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-32">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-medium uppercase tracking-tight mb-12 text-white">
              Comparison
            </h2>
          </Reveal>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-xs font-bold uppercase tracking-widest text-gray-500 text-left">
                    Feature
                  </th>
                  <th className="py-6 px-4 text-xs font-bold uppercase tracking-widest text-white text-left">
                    The Launch
                  </th>
                  <th className="py-6 px-4 text-xs font-bold uppercase tracking-widest text-purple-400 text-left">
                    The Scale
                  </th>
                  <th className="py-6 px-4 text-xs font-bold uppercase tracking-widest text-white text-left">
                    Custom
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-6 px-4 text-sm font-medium font-display uppercase tracking-wide text-gray-300 text-left">
                      {row.name}
                    </td>
                    <td className="py-6 px-4 text-xs font-bold uppercase tracking-widest text-gray-500 text-left">
                      {row.standard}
                    </td>
                    <td className="py-6 px-4 text-xs font-bold uppercase tracking-widest text-white text-left">
                      {row.pro}
                    </td>
                    <td className="py-6 px-4 text-xs font-bold uppercase tracking-widest text-gray-500 text-left">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingClient;
