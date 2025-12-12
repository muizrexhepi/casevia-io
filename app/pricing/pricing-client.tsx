"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import FinalCTA from "@/components/cta";

const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "For founders testing Casevia for the first time.",
      price: 0,
      annualPrice: 0,
      features: [
        "1 case study / month",
        "Up to 10 min interview audio",
        "Basic AI narrative writing",
        "Casevia branding",
        "1 seat",
        "Email support (48h)",
      ],
      cta: "Get started free",
      highlighted: false,
      badge: null,
    },
    {
      name: "Growth",
      description:
        "For lean B2B marketing teams producing stories consistently.",
      price: 39,
      annualPrice: 31,
      features: [
        "3 case studies / month",
        "Up to 30 min interview audio",
        "Tone refinement",
        "No watermark",
        "5 templates",
        "2 seats",
        "Export to PDF + web",
        "Email support (24h)",
      ],
      cta: "Upgrade to Growth",
      highlighted: false,
      badge: null,
    },
    {
      name: "Scale",
      description: "For teams who rely on case studies to drive pipeline.",
      price: 99,
      annualPrice: 79,
      features: [
        "8 case studies / month",
        "Up to 60 min interviews",
        "SEO metadata",
        "Brand-aligned writing",
        "Unlimited templates",
        "5 seats",
        "CRM export",
        "Priority support",
      ],
      cta: "Scale your proof engine",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      description:
        "For large organizations requiring custom volume & security.",
      price: "Custom",
      annualPrice: "Custom",
      features: [
        "Unlimited case studies",
        "SSO & SAML",
        "Dedicated Success Manager",
        "Custom API Access",
        "SLA Guarantees",
        "White-label Portal",
      ],
      cta: "Contact Sales",
      highlighted: false,
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/60 blur-[120px] rounded-full mix-blend-multiply opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/60 blur-[100px] rounded-full mix-blend-multiply opacity-50"></div>
      </div>

      <section className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-12 md:pt-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 fade-in">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-[0.95] tracking-tight mb-6">
            Simple pricing,
            <br />
            <span className="text-blue-600 italic">infinite ROI.</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
            Choose the plan that fits your growth stage. Scale your proof engine
            without scaling your headcount.
          </p>

          {/* Toggle Switch */}
          <div className="relative flex items-center justify-center gap-4 mt-12">
            <span
              className={`text-sm font-medium transition-colors ${!isAnnual ? "text-slate-900" : "text-slate-400"}`}
            >
              Monthly
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-7 bg-slate-200 rounded-full p-1 transition-colors duration-300 focus:outline-none hover:bg-slate-300 ring-offset-2 focus:ring-2 ring-blue-500/20"
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${isAnnual ? "translate-x-5" : "translate-x-0"}`}
              ></div>
            </button>

            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-medium transition-colors ${isAnnual ? "text-slate-900" : "text-slate-400"}`}
              >
                Annually
              </span>

              {/* Hand-drawn Arrow & Note */}
              <div className="relative hidden sm:block">
                <div className="absolute -top-10 left-6 flex flex-col items-start transform -rotate-6">
                  <span className="text-sm font-medium text-blue-600 font-serif italic whitespace-nowrap">
                    Save 20%
                  </span>
                  <svg
                    width="45"
                    height="35"
                    viewBox="0 0 50 40"
                    fill="none"
                    className="text-blue-400 -mt-1 ml-2"
                  >
                    <path
                      d="M40 5 C 30 5, 10 15, 5 35"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 35 L 12 28"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 35 L 14 38"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full mb-24 fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 lg:p-8 h-full flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "bg-blue-50/50 ring-1 ring-blue-100 z-10 shadow-lg shadow-blue-500/5"
                  : "bg-white border border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest bg-blue-600 text-white shadow-sm`}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl lg:text-2xl font-normal text-slate-900 font-serif">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-500 mt-2 min-h-[40px] leading-relaxed font-normal">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-normal text-slate-900 font-serif">
                    {typeof plan.price === "number" && "$"}
                    {typeof plan.price === "number"
                      ? isAnnual
                        ? plan.annualPrice
                        : plan.price
                      : plan.price}
                  </span>
                  {typeof plan.price === "number" && (
                    <span className="text-slate-400 text-sm font-normal">
                      / month
                    </span>
                  )}
                </div>
                <p
                  className={`text-xs text-slate-400 font-normal mt-1 transition-opacity h-4 ${isAnnual && typeof plan.annualPrice === "number" && plan.annualPrice > 0 ? "opacity-100" : "opacity-0"}`}
                >
                  {typeof plan.annualPrice === "number" &&
                    `Billed annually ($${plan.annualPrice * 12}/yr)`}
                </p>
              </div>

              <div className="flex-1 mb-10">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-600 font-normal"
                    >
                      <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center">
                        <Check size={10} className="text-slate-600" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 px-6 rounded-xl text-sm font-medium transition-all ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Reusing FAQ Section for SEO and conversion */}
      <FinalCTA />
    </div>
  );
};

export default PricingPage;
