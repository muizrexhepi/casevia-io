import React, { useState } from "react";
import { Plus, Minus, ArrowRight, Mail } from "lucide-react";
// Assuming useWaitlistStore is defined in "@/lib/store"
// import { useWaitlistStore } from "@/lib/store";

const faqs = [
  {
    question: "How does Casevia ensure data privacy?",
    answer:
      "Security is our primary directive. We are SOC-2 Type II compliant. All audio is processed in ephemeral containers—meaning your raw recordings are deleted immediately after transcription and analysis. We do not use your data to train our base models.",
  },
  {
    question: "Can I edit the generated case study?",
    answer:
      "Absolutely. Casevia provides a 'Verifiable Editor' where the generated text is side-by-side with the source audio. If you change a quote or a claim, the citation links update automatically to preserve truth. You have full editorial control.",
  },
  {
    question: "What file formats do you accept?",
    answer:
      "We accept all major audio and video formats (MP3, WAV, M4A, MP4, MOV). Additionally, you can paste a shared link from Zoom, Gong, or Google Meet, and we'll ingest the recording directly without you needing to download it first.",
  },
  {
    question: "Is there a limit on recording length?",
    answer:
      "The Starter plan supports recordings up to 60 minutes. Growth and Enterprise plans support recordings up to 4 hours. For longer sessions, our system effectively identifies the 'meat' of the conversation to keep the narrative focused.",
  },
  {
    question: "Do you offer custom templates?",
    answer:
      "Yes. On the Growth plan, you can upload previous PDFs or markdown files to train our engine on your specific brand voice, structure, and formatting preferences. We don't just match your tone; we match your structural DNA.",
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
                <span className="italic text-charcoal/80 font-normal">
                  questions.
                </span>
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
        <div className="mt-14 md:mt-20 lg:mt-32 relative w-full bg-charcoal rounded-2xl md:rounded-3xl overflow-hidden px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20 text-center flex flex-col items-center">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          ></div>

          <div className="relative z-10 flex flex-col items-center gap-5 md:gap-6 max-w-2xl">
            {/* 1. Used h2 to maintain semantic consistency.
              2. Removed hardcoded text-sizes to rely on the global h2 sizing.
              3. Added text-cream for visibility on the charcoal background.
            */}
            <h2 className="text-cream">Start telling better stories.</h2>
            {/* 1. Used p tag to pick up default sizing (15px mobile, 16px sm+).
              2. Removed hardcoded text-base/text-lg.
            */}
            <p className="text-white/60 font-light max-w-lg">
              Join 500+ B2B marketing teams turning their customer calls into
              revenue-generating assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2 md:pt-4">
              <button
                onClick={openWaitlist}
                // Kept CTA styles as is, as they are part of a specific component design
                className="bg-terracotta text-white px-8 py-4 rounded-full font-sans font-semibold text-[15px] hover:bg-white hover:text-charcoal transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl shadow-terracotta/20 hover:shadow-2xl hover:shadow-terracotta/30 hover:scale-[1.02]"
              >
                Get Started Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            {/* Used small tag to pick up small sizing (12px mobile, 13px sm+) */}
            <small className="text-white/30 mt-2">
              No credit card required for the first 2 stories.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
