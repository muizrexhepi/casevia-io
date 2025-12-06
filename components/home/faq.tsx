import React, { useState } from "react";
import { Plus, Minus, ArrowRight, Mail, CheckCircle2 } from "lucide-react";
// Assuming useWaitlistStore is defined in "@/lib/store"
// import { useWaitlistStore } from "@/lib/store";

const faqs = [
  {
    question: "How does Casevia handle my interview recordings?",
    answer:
      "Your audio and video are stored securely and processed only to generate your transcript and case study. As soon as processing is complete, you can choose to delete the file. We do not use your data to train our models.",
  },
  {
    question: "Can I edit the generated case study?",
    answer:
      "Yes — every draft opens in our Verifiable Editor. You can rewrite any sentence and the source citation stays linked to the correct timestamp. You always have full editorial control.",
  },
  {
    question: "What recording formats do you support?",
    answer:
      "All major audio and video formats: MP3, WAV, M4A, MP4, and MOV. You can also paste links from Zoom, Google Meet, or other call platforms — no downloading required.",
  },
  {
    question: "How long can my recordings be?",
    answer:
      "It depends on your plan:\n\n• Free — up to 10 minutes per interview\n• Freelancer — up to 30 minutes\n• Pro — up to 45 minutes\n• Agency — up to 45 minutes (plus priority processing)\n\nLonger support is coming soon based on demand.",
  },
  {
    question: "How many case studies can I create?",
    answer:
      "Every plan includes a monthly limit:\n\n• Free — 1 case study per month\n• Freelancer — 8 per month\n• Pro — 25 per month\n• Agency — 40 per month\n\nYou can upgrade at any time as your content output grows.",
  },
  {
    question: "Can I use my own brand voice?",
    answer:
      "Yes — you can choose tone presets like formal, bold, or product-focused today. Custom voice training based on your own case studies will be available for Pro & Agency plans soon.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes — you can start on the Free plan with 1 full case study included. No credit card required.",
  },
  {
    question: "Do you support teams or agencies?",
    answer:
      "Yes — Pro and Agency plans include multi-member teams, shared projects, and admin controls. Real-time collaboration and teammate roles are coming soon.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  // Replace with your actual store usage if needed
  // const openWaitlist = useWaitlistStore((state) => state.openWaitlist);
  const openWaitlist = () => console.log("Opening waitlist...");

  return (
    <section className="w-full bg-cream text-charcoal px-4 sm:px-6 md:px-12">
      {/* 1. Replace hardcoded py-16/20/24 with section-spacing utility.
        2. Set max-w-6xl mx-auto to match other sections. 
      */}
      <div className="max-w-6xl mx-auto section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Header */}
          <div className="lg:col-span-4 flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
            {/* 1. Use h2 and p element selectors to pick up styles from @layer base.
              2. Apply section-header-gap class for consistent spacing (though only the first element in the grid, so maybe just standard flex gap).
              3. Removed all hardcoded font sizing and family/weight classes from h2 and p.
            */}
            <div className="flex flex-col gap-5 md:gap-7">
              <h2>
                Common <br />
                <span className="font-normal">questions.</span>
              </h2>
              {/* This p will pick up h2 + p styling */}
              <p className="max-w-xl text-charcoal/80">
                Everything you need to know about the product and billing.
              </p>
            </div>

            <a
              href="mailto:support@casevia.io"
              // Replaced hardcoded text-[15px] with small tag or text-sm if desired, but opted for text-sm for better consistency with the overall design.
              className="inline-flex items-center gap-2 text-terracotta font-sans font-medium text-sm hover:text-charcoal transition-colors pt-2"
            >
              <Mail className="w-4 h-4" />
              Chat to support
            </a>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-t border-charcoal/[0.08] first:border-t-0"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-6 md:py-7 flex items-start justify-between gap-6 group text-left"
                  >
                    {/* 1. Used h3 sizing for the question for better semantic hierarchy and consistent card header size (20px mobile -> 28px md).
                      2. Removed hardcoded text-xl/2xl.
                    */}
                    <h3
                      className={`transition-colors duration-300 ${isOpen ? "text-terracotta" : "text-charcoal group-hover:text-charcoal/70"}`}
                    >
                      {faq.question}
                    </h3>
                    <span
                      className={`mt-1 flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-terracotta/40 bg-terracotta/5 text-terracotta rotate-180" : "border-charcoal/15 text-charcoal/40 group-hover:border-charcoal/30 group-hover:text-charcoal/60"}`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 stroke-[2]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 stroke-[2]" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-64 opacity-100 mb-7" : "max-h-0 opacity-0"}`}
                  >
                    {/* 1. Used the default p selector which should be 15px mobile and 16px sm+ (based on your CSS).
                      2. Removed hardcoded text-[15px]/text-base.
                    */}
                    <p className="text-charcoal/65 font-light max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="mt-14 md:mt-20 lg:mt-32 relative w-full bg-charcoal rounded-2xl md:rounded-3xl overflow-hidden px-6 py-14 sm:py-16 lg:py-20 text-center flex flex-col items-center">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl animate-in fade-in-50 duration-700">
            {/* Section badge */}
            <span
              className="inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full 
     bg-terracotta/20 text-terracotta"
            >
              Early Access Live
            </span>

            <h2 className="text-cream max-w-xl">
              Start telling better stories.
            </h2>

            <p className="text-white/80 max-w-md">
              Join <span className="font-semibold text-white">marketers</span>{" "}
              already turning interviews into revenue assets.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-3">
              <button
                onClick={openWaitlist}
                className="bg-terracotta text-white px-8 py-4 rounded-full font-semibold text-[15px]
        hover:bg-white hover:text-charcoal transition-all duration-300
        flex items-center justify-center gap-2.5
        shadow-xl shadow-terracotta/20 hover:shadow-2xl hover:shadow-terracotta/30 hover:scale-[1.02]"
              >
                Get Started Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro benefits */}
            <div className="flex flex-wrap gap-4 text-white/60 text-xs sm:text-sm mt-3">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-terracotta" />
                Verified quotes
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-terracotta" />
                Brand-aligned AI
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-terracotta" />
                Zero hallucinations
              </span>
            </div>

            <small className="text-white/30 mt-4">
              First 100 unlock lifetime 50% off + no card required.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
