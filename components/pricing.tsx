import React, { useState } from "react";
import { Check } from "lucide-react";

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Growth",
      description: "For marketing teams producing stories consistently.",
      price: 39,
      annualPrice: 31,
      features: [
        "3 case studies / month",
        "Up to 30 min interviews",
        "Record inside Casevia",
        "Tone refinement",
        "PDF + Web export",
        "5 templates",
        "2 seats",
      ],
      cta: "Upgrade to Growth",
      highlighted: false,
      badge: null,
    },
    {
      name: "Sales Enablement",
      description: "For teams where proof influences revenue.",
      price: 99,
      annualPrice: 79,
      features: [
        "8 case studies / month",
        "Up to 60 min interviews",
        "Auto-Battlecards",
        "CRM Export",
        "Objection-based delivery",
        "Unlimited templates",
        "5 seats",
        "Priority support",
      ],
      cta: "Scale your proof engine",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Scale",
      description: "For mature SaaS with multi-segment GTM.",
      price: 199,
      annualPrice: 159,
      features: [
        "20 case studies / month",
        "90 min uploads",
        "Custom branding builder",
        "Proof coverage intelligence",
        "Content gap analysis",
        "Versioning + approvals",
        "10 seats",
        "API access",
      ],
      cta: "Upgrade to Scale",
      highlighted: false,
      badge: null,
    },
    {
      name: "Enterprise",
      description: "For regulated + large organizations.",
      price: "Custom",
      annualPrice: "Custom",
      features: [
        "Unlimited stories",
        "SSO & SCIM",
        "Dedicated Success Manager",
        "Data residency controls",
        "White-label portal",
        "SLA guarantees",
        "Custom onboarding",
      ],
      cta: "Contact Sales",
      highlighted: false,
      badge: null,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-12 md:py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 blur-[120px] rounded-full mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium uppercase tracking-wide mb-6">
            Pricing
          </div> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium mb-4 text-balance leading-[1.2em] sm:leading-[1em] text-slate-900">
            Simple pricing, infinite ROI.
          </h2>
          <p className="text-base md:text-lg text-slate-700 leading-[1.4em] font-normal max-w-xl mx-auto">
            Start for free. Scale as you grow.
          </p>

          {/* Toggle Switch */}
          <div className="relative flex items-center justify-center gap-4 mt-8">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch w-full">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 lg:p-8 h-full flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "bg-blue-50/50 ring-1 ring-blue-100 z-10 shadow-lg shadow-blue-500/5"
                  : "bg-white border border-slate-200 hover:border-slate-300"
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

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Looking to just test it out?{" "}
            <a
              href="/pricing"
              className="text-blue-600 font-medium hover:underline"
            >
              Start with our Free Starter plan.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
