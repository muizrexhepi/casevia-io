"use client";

import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProjectPage: React.FC = () => {
  const path = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="bg-white text-black min-h-screen pt-32 md:pt-40">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section - Left Aligned */}
        <div className="flex flex-col items-center justify-center mb-16 md:mb-24">
          <Reveal>
            <span className="block text-center text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6">
              Dasjo.
            </span>
          </Reveal>
          <Reveal width="100%">
            <h1 className="font-display text-[10vw] md:text-[6vw] leading-[0.9] font-medium uppercase tracking-tighter text-center mb-12 md:mb-24">
              Suspendisse Tellus
            </h1>
          </Reveal>

          {/* Meta Row */}
          <div className="w-full border-t border-black/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-800">
            <Reveal delay={0.1}>
              <span>SEO Marketing & Social Media Marketing</span>
            </Reveal>
            <Reveal delay={0.2}>
              <span>@2023</span>
            </Reveal>
            <Reveal delay={0.3}>
              <span>120% Increase in Revenue ROI</span>
            </Reveal>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-24 md:mb-32">
          <Reveal width="100%" delay={0.4}>
            <div className="w-full aspect-video md:aspect-[2.4/1] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auhref=format&fit=crop"
                alt="Product Close up"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 border-b border-black/10 pb-16 md:pb-24 mb-24 md:mb-32">
          {[
            { val: "50+", label: "Regular Clients" },
            { val: "6.2%", label: "Yearly Growth Rate" },
            { val: "4.5", label: "Rated By Clients" },
            { val: "21+", label: "Team Members" },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className={`flex flex-col items-start justify-start ${i !== 0 ? "md:border-l md:border-black/10 md:pl-12" : ""}`}
              >
                <span className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-2 md:mb-4">
                  {stat.val}
                </span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 text-left">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Overview Section */}
        <div className="max-w-4xl mr-auto mb-24 md:mb-32">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-medium uppercase tracking-tight text-left mb-16">
              Overview
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-8 text-gray-500 font-medium px-0 md:px-0 max-w-3xl">
              <p className="text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                Initially, Linear's infrastructure was concentrated in a single
                location - Google Cloud's us-east1. While this configuration
                served most users well, it presented long-term challenges. We
                identified two primary reasons to diversify our data hosting
                locations.
              </p>
              <p className="text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                First, having a separate region with a full instance of the
                Linear application makes future scaling simpler. If we can host
                some workspaces in a particular infrastructure deployment, then
                we can add other regions behind the scenes in the future to
                avoid hitting scaling limits.
              </p>
              <p className="text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                From the early beginnings of Linear, we've sought to invest in
                our foundation preemptively, always having an eye on potential
                future bottlenecks we might encounter. This enables us to build
                out the best possible infrastructure and application framework.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Product Image 1 */}
        <div className="mb-24 md:mb-32">
          <Reveal width="100%">
            <div className="w-full aspect-[4/3] md:aspect-[2/1] bg-gray-50 overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auhref=format&fit=crop"
                alt="Product Packaging"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Quote Section - Left Aligned */}
        <div className="bg-gray-50 p-8 md:p-24 mb-24 md:mb-32">
          <div className="max-w-3xl mr-auto text-left">
            <Reveal>
              <p className="font-display text-xl md:text-2xl font-medium italic leading-relaxed mb-12">
                "I was very impressed with the service I have received from
                Casevia. They do a great job structuring the team - we're able
                to focus on specific strategies that all come together really
                getting to much drive well."
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col items-start">
                <span className="font-bold text-xs uppercase tracking-[0.2em] mb-1">
                  Crish Paul
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500">
                  Art Director of Copper
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 mb-24 md:mb-32 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-medium uppercase tracking-tight mb-8 text-left">
                The Challenge
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6 text-gray-500 font-medium px-0 md:px-0">
                <p className="text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                  When creating a shared record, we always create it in the
                  authentication service first, and use the returned ID to
                  create a corresponding record in the regional database. This
                  is to ensure that any uniqueness constraints are applied
                  globally first.
                </p>
                <p className="text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                  Deleting works in the same way as creating records, with an
                  additional fallback using postgres triggers to create an audit
                  log of deleted records.
                </p>
                <p className="text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                  For updating records, we already have a lot of logic around
                  creating efficient updates for clients using our sync engine.
                  We were able to reuse this to also schedule an asynchronous
                  update.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2} width="100%" className="order-1 lg:order-2">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=2680&auhref=format&fit=crop"
                alt="Vertical Product Shot"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Goals & Solution */}
        <div className="max-w-4xl mr-auto mb-24 md:mb-32 px-0 md:px-0">
          <div className="mb-24">
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-medium uppercase tracking-tight mb-8 text-left">
                Primary Goals
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-500 font-medium text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                After prototyping a few different options for the internal API
                between the API service and the authentication service, we
                settled on GraphQL. It isn't ideal for service-to-service
                communication, but we already had strong tooling for GraphQL in
                our codebase.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl md:text-5xl font-medium uppercase tracking-tight mb-8 text-left">
                The Solution
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-500 font-medium text-xs md:text-sm uppercase tracking-widest leading-loose text-left">
                We wanted to isolate all multi-region complexity to a few
                sub-systems and APIs. Engineers should never have to think about
                multi-region when developing functionality for the Linear
                backend or clients. They should be able to work in their local
                development environments without any additions.
              </p>
            </Reveal>
          </div>
        </div>

        {/* More Studies */}
        <div className="border-t border-black/10 pt-24 pb-12">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-medium uppercase tracking-tight text-left mb-4">
              More Studies
            </h2>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest text-left mb-16">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal delay={0.1}>
              <Link
                href="/work/project-1"
                className="group block cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-6 relative">
                  <img
                    src="https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=2670&auhref=format&fit=crop"
                    alt="Project 1"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-display text-xl font-bold uppercase">
                    Human Touch
                  </h3>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </Reveal>
            <Reveal delay={0.2}>
              <Link
                href="/work/project-2"
                className="group block cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-6 relative">
                  <img
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auhref=format&fit=crop"
                    alt="Project 2"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-display text-xl font-bold uppercase">
                    Tech Future
                  </h3>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
