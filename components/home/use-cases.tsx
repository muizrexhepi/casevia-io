import React from "react";
import {
  Briefcase,
  Users,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const UseCases = () => {
  return (
    <section className="w-full bg-charcoal text-white selection:bg-terracotta selection:text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto py-16 md:py-20 lg:py-24 border-t border-white/5">
        {/* Header - Aligned with Pricing Header */}
        <div className="mb-12 md:mb-16 lg:mb-20 flex flex-col gap-6 md:gap-7 items-center text-center">
          <h2 className="font-serif text-[2.75rem] md:text-5xl lg:text-6xl text-white leading-[0.92] tracking-tight max-w-3xl">
            One tool, <br />
            <span className="italic font-normal text-white/50">
              four workflows
            </span>
          </h2>

          <p className="font-sans text-lg md:text-xl text-white/60 leading-relaxed max-w-xl font-light">
            From agencies to sales teams, Casevia adapts to how you work.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* --- Card 1: B2B Marketing Teams (Span 2) - Styled as 'Popular' Plan --- */}
          <div className="md:col-span-2 relative flex flex-col md:flex-row p-6 md:p-8 rounded-2xl border transition-all duration-300 group bg-white/[0.03] border-terracotta/40 ring-1 ring-terracotta/20 shadow-lg shadow-terracotta/5">
            {/* Badge */}
            <div className="absolute top-5 right-5 flex items-center gap-1.5 text-terracotta text-[10px] font-bold uppercase tracking-wider bg-terracotta/10 px-2.5 py-1 rounded-md border border-terracotta/20">
              <Sparkles className="w-3 h-3" />
              Most Popular
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-end w-full">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 border border-terracotta/20 flex items-center justify-center mb-6 text-terracotta">
                  <TrendingUp className="w-6 h-6 stroke-[1.5]" />
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight tracking-tight mb-3">
                  B2B Marketing
                </h3>
                <p className="font-sans text-sm md:text-[15px] text-white/50 leading-relaxed font-light max-w-sm">
                  Need consistent case study output but writers are expensive
                  and slow.
                </p>
              </div>

              {/* Solution Box */}
              <div className="flex-1 w-full bg-white/[0.03] rounded-xl p-5 border border-white/[0.08]">
                <p className="text-[11px] font-bold text-white/30 uppercase tracking-[0.12em] mb-3">
                  With Casevia
                </p>
                <p className="text-[15px] text-white/80 leading-relaxed mb-4 font-normal">
                  Scale from 2 case studies per quarter to 10+ per month.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-terracotta/10 border border-terracotta/20">
                  <span className="text-sm font-semibold text-terracotta">
                    6-8 hours → 30 mins
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- Card 2: Agencies (Span 1) - Standard Pricing Card Style --- */}
          <div className="md:col-span-1 relative flex flex-col p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-transparent hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 group">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/50">
                High Volume
              </span>
            </div>

            <div className="flex flex-col h-full justify-between gap-6">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors duration-300">
                  <Users className="w-6 h-6 text-white/80 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl text-white leading-tight mb-3">
                  Agencies
                </h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed font-light">
                  Managing case studies across 10+ clients drains resources.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.08] group-hover:border-white/20 transition-colors">
                  <span className="text-sm font-medium text-white/80">
                    5x output, same team
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- Card 3: Sales Teams (Span 1) --- */}
          <div className="md:col-span-1 relative flex flex-col p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-transparent hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 group">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/50">
                Revenue Impact
              </span>
            </div>

            <div className="flex flex-col h-full justify-between gap-6">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors duration-300">
                  <Briefcase className="w-6 h-6 text-white/80 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl text-white leading-tight mb-3">
                  Sales Teams
                </h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed font-light">
                  Customer calls go unused while waiting on marketing.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.08] group-hover:border-white/20 transition-colors">
                  <span className="text-sm font-medium text-white/80">
                    -30% sales cycle length
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- Card 4: Product Marketers (Span 2) --- */}
          <div className="md:col-span-2 relative flex flex-col p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-transparent hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 group">
            <div className="flex flex-col md:flex-row justify-between gap-8 h-full z-10 relative">
              <div className="flex-1">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/50">
                    Launch Ready
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight tracking-tight mb-3">
                  Product Marketers
                </h3>
                <p className="font-sans text-sm md:text-[15px] text-white/50 leading-relaxed font-light max-w-lg mb-6">
                  Feature launches need customer stories but research takes
                  weeks. Transform user interviews into launch-ready stories.
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.08] group-hover:border-white/20 transition-colors">
                  <span className="text-sm font-medium text-white/80">
                    Launch prep: 4 weeks → 3 days
                  </span>
                </div>
              </div>

              {/* Icon Decoration */}
              <div className="hidden md:flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Sparkles className="w-8 h-8 text-white/40 group-hover:text-white/60 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Matched Pricing Compare Link Style */}
        <div className="mt-16 text-center">
          <Link
            href={"/contact"}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
          >
            <span className="font-sans text-sm text-white/70 group-hover:text-white font-medium transition-colors">
              Talk to our team
            </span>
            <ArrowRight className="w-4 h-4 text-terracotta group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
