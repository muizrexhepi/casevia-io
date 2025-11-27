// components/pricing/Pricing.tsx
import { Check } from "lucide-react";
import Link from "next/link";
import { PLANS } from "@/lib/plans";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-zinc-900 mb-6">
            Simple, transparent pricing.
          </h2>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            Start for free, upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-zinc-200 bg-white">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col p-8 border-b md:border-b-0 md:border-r border-zinc-200 last:border-r-0 relative rounded-none ${
                plan.popular ? "bg-zinc-50" : "bg-white"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <span className="bg-zinc-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-zinc-900 rounded-none">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8 mt-2">
                <h3 className="text-lg font-bold text-zinc-900 font-display">
                  {plan.name}
                </h3>

                <p className="text-xs text-zinc-500 mb-6 h-4">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-zinc-900 tracking-tight">
                    {plan.price}
                  </span>
                  {plan.price !== "$0" && (
                    <span className="text-zinc-500 text-sm">/mo</span>
                  )}
                </div>

                <div className="text-[10px] text-zinc-400 mt-2 font-mono uppercase tracking-wide">
                  Billed monthly
                </div>
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3.5 font-bold text-[10px] uppercase tracking-wider transition-all mb-8 border rounded-none ${
                  plan.popular
                    ? "bg-zinc-900 text-white border-zinc-900 hover:bg-zinc-800"
                    : "bg-white text-zinc-900 border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                {plan.cta}
              </button>

              {/* Features (Limit to 3–4) */}
              <ul className="space-y-4 flex-1 text-xs text-zinc-600 leading-relaxed">
                {plan.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <Check
                      size={14}
                      className="flex-shrink-0 text-zinc-900 mt-0.5"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full Pricing CTA */}
        <div className="text-center mt-10">
          <Link
            href="/pricing"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 underline underline-offset-4"
          >
            View full pricing →
          </Link>
        </div>
      </div>
    </section>
  );
};
