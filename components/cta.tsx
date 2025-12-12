import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "../constants";

const FinalCTA: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-16">
          {/* Left Column: Ask us anything */}
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4 font-serif leading-[1.2em] sm:leading-[1em] text-balance">
              Ask us anything
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-[1.4em] mb-8">
              Have more questions or need support? Shoot us a message and
              someone from our team will be happy to help.
            </p>

            <div className="relative inline-block">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-medium rounded-xl px-6 py-3 hover:bg-blue-700 transition-colors shadow-sm"
              >
                Contact us
              </a>

              {/* Playful Annotation */}
              <div className="absolute top-1/2 left-full ml-4 -translate-y-1/2 hidden lg:flex items-center">
                <svg
                  width="40"
                  height="20"
                  viewBox="0 0 40 20"
                  fill="none"
                  className="text-slate-400"
                >
                  <path
                    d="M0 10 C 10 10, 20 5, 35 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M35 2 L 28 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-xs text-slate-500 font-serif italic whitespace-nowrap ml-2 -rotate-3">
                  Human support ✌️
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="space-y-0">
              {FAQS.map((faq, index) => (
                <div key={index} className="border-b border-slate-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-lg font-normal text-slate-900 group-hover:text-blue-600 transition-colors pr-8">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-slate-400 group-hover:text-blue-600">
                      {openIndex === index ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "max-h-48 opacity-100 mb-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-slate-600 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
