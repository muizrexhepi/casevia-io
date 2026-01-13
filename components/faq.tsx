import { Plus } from "lucide-react";
import { TEXT } from "@/lib/styles";
import { SectionTitle } from "@/components/UI";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 lg:gap-24 text-left">
        <div className="lg:col-span-5">
          <div className="sticky top-32 flex flex-col gap-6">
            <div>
              <span className={TEXT.label}>Intelligence</span>
              <SectionTitle className="mt-2">
                Strategic Clarification
              </SectionTitle>
            </div>
            <p className={TEXT.body}>
              Everything you need to know about navigating the partnership with
              Casevia Engineering Group.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 divide-y divide-[#221221]/10">
          {FAQS.map((faq, i) => (
            <details key={i} className="group py-8 first:pt-0">
              <summary className="flex justify-between items-start cursor-pointer list-none gap-6">
                <span className="text-xl md:text-2xl font-normal tracking-tighter group-hover:text-[#D1326E] transition-colors duration-300 leading-tight">
                  {faq.question}
                </span>
                <div className="mt-1 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border border-[#D1326E]/20 group-hover:bg-[#D1326E] group-hover:text-white transition-all duration-300">
                  <Plus
                    className="transition-transform duration-300 group-open:rotate-45"
                    size={16}
                  />
                </div>
              </summary>
              <div className="mt-6 text-lg text-[#4A1D3A]/80 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-top-2 duration-500">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
