import React, { useState } from "react";
import { Plus, Minus, ArrowRight, Mail } from "lucide-react";
import { useWaitlistStore } from "@/lib/store";

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
  const openWaitlist = useWaitlistStore((state) => state.openWaitlist);

  return (
    <section className="w-full bg-cream text-charcoal px-6 md:px-12">
      <div className="max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Header */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-charcoal/60">
                Support
              </span>
            </div>
            <h2 className="font-serif text-5xl text-charcoal leading-[0.9] tracking-tight">
              Common <br />
              <span className="italic text-charcoal/60 font-light">
                questions.
              </span>
            </h2>
            <p className="font-sans text-lg text-charcoal/70 leading-relaxed">
              Everything you need to know about the product and billing. Can't
              find the answer you're looking for?
            </p>
            <a
              href="mailto:support@casevia.io"
              className="inline-flex items-center gap-2 text-terracotta font-medium hover:text-charcoal transition-colors"
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
                  className="border-t border-charcoal/10 first:border-t-0 lg:first:border-t"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-8 flex items-start justify-between gap-4 group text-left"
                  >
                    <span
                      className={`font-serif text-2xl transition-colors duration-300 ${isOpen ? "text-terracotta" : "text-charcoal group-hover:text-terracotta"}`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-terracotta text-terracotta rotate-180" : "border-charcoal/20 text-charcoal/40 group-hover:border-charcoal group-hover:text-charcoal"}`}
                    >
                      {isOpen ? (
                        <Minus className="w-3 h-3" />
                      ) : (
                        <Plus className="w-3 h-3" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-48 opacity-100 mb-8" : "max-h-0 opacity-0"}`}
                  >
                    <p className="font-sans text-charcoal/60 leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Card */}
        <div className="mt-24 relative w-full bg-charcoal rounded-3xl overflow-hidden px-8 py-16 md:p-20 text-center flex flex-col items-center gap-8">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          ></div>

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl text-cream leading-none">
              Start telling better stories.
            </h2>
            <p className="font-sans text-white/60 text-lg font-light">
              Join 500+ B2B marketing teams turning their customer calls into
              revenue-generating assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto pt-4">
              <button
                onClick={openWaitlist}
                className="bg-terracotta text-white px-8 py-4 rounded-full font-sans font-medium hover:bg-white hover:text-charcoal transition-colors duration-300 flex items-center justify-center gap-2 text-lg shadow-xl shadow-terracotta/20"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-white/30 text-xs mt-4">
              No credit card required for the first 2 stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
