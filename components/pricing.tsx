// components/sections/Pricing.tsx
import Link from "next/link";
import { Button } from "@/components/UI";
import { TEXT } from "@/lib/styles";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 md:py-40">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-12 gap-16 items-end">
            {/* Left: Title */}
            <div className="lg:col-span-5">
              <span className={TEXT.label}>Pricing</span>
              <h2 className={`${TEXT.sectionTitle} mt-4`}>
                Fixed scope. <span className="text-gradient">Fixed price.</span>
                <br />
                No surprises.
              </h2>
            </div>

            {/* Right: Description */}
            <div className="lg:col-span-7 lg:border-l lg:border-[#D1326E]/20 lg:pl-12">
              <p className={`${TEXT.body} text-[#221221]/70 max-w-xl`}>
                Choose between rapid MVP builds or dedicated engineering squads.
                Every engagement includes transparent pricing, clear
                deliverables, and production-ready code from day one.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {PRICING_PLANS.map((plan, i) => {
            const isHighlighted = plan.name === "Growth Engine";
            return (
              <div
                key={i}
                className={`
                  p-10 md:p-12 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden transition-all duration-500 group
                  ${
                    isHighlighted
                      ? "bg-[#221221] text-white shadow-2xl scale-[1.02]"
                      : "bg-white border border-[#221221]/5 hover:border-[#D1326E]/30 shadow-sm"
                  }
                `}
              >
                {isHighlighted && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D1326E]/10 blur-[80px] rounded-full pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-3xl font-medium mb-4 tracking-tight">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-base leading-relaxed mb-10 flex-grow ${isHighlighted ? "text-white/60" : "text-[#4A1D3A]/70"}`}
                  >
                    {plan.description}
                  </p>

                  <div className="space-y-8 mb-12">
                    <div>
                      <p
                        className={`text-[10px] font-bold tracking-wider uppercase mb-2 ${isHighlighted ? "text-white/30" : "text-[#221221]/30"}`}
                      >
                        Setup / Audit Fee
                      </p>
                      <p className="text-4xl md:text-5xl font-medium tracking-tighter">
                        €{plan.setupPrice}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-wider uppercase mb-2 text-[#D1326E]">
                        Monthly Retainer
                      </p>
                      <p className="text-3xl font-medium text-[#D1326E] tracking-tighter flex items-baseline gap-2">
                        €{plan.monthlyPrice}
                        <span
                          className={`text-[10px] font-bold ${isHighlighted ? "text-white/30" : "text-[#221221]/30"}`}
                        >
                          /MO
                        </span>
                      </p>
                    </div>
                  </div>

                  <Link href="/contact" className="w-full mt-auto">
                    <Button
                      variant={isHighlighted ? "secondary" : "outline"}
                      className="w-full py-6 text-sm tracking-wide font-bold"
                    >
                      Start Project
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
