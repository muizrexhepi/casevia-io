// components/sections/Methodology.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEXT } from "@/lib/styles";

export default function Methodology() {
  // Updated copy to be more descriptive of the ACTUAL service provided
  const steps = [
    {
      num: "01",
      title: "Discovery & Audit", // Was "Logic Forge"
      desc: "We de-risk your project before writing code. Deep technical feasibility audits and architecture planning.",
    },
    {
      num: "02",
      title: "Core Engineering", // Was "Nexus Engine"
      desc: "Building high-performance API architectures and resilient backends capable of handling massive scale.",
    },
    {
      num: "03",
      title: "AI Integration", // Was "Cognitive Flow"
      desc: "Deploying custom LLMs and machine learning workflows to automate your specific business intelligence.",
    },
    {
      num: "04",
      title: "Scale & Optimize", // Was "Hyper Scaling"
      desc: "Cloud-native orchestration. We ensure your system remains fast even when processing millions of events.",
    },
  ];

  return (
    <section id="methodology" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          <div className="lg:w-1/3 flex flex-col items-start text-left">
            <div className="flex flex-col lg:sticky lg:top-32">
              <div>
                <span className={TEXT.label}>Our Process</span>
                <h2 className={TEXT.sectionTitle}>The Engineering Standard</h2>
              </div>

              <p className={`${TEXT.body} mb-8`}>
                We don't just "write code." We follow a proprietary engineering
                standard built to convert complex business challenges into
                resilient, owned infrastructure.
              </p>

              <Link href="/contact" className={TEXT.link}>
                View Service Matrix <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="group p-10 border border-[#221221]/5 rounded-[2rem] bg-gray-50/50 hover:bg-white hover:border-[#D1326E]/20 hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[300px]"
              >
                <div className="absolute top-6 right-8 text-6xl font-medium text-[#D1326E]/5 group-hover:text-[#D1326E]/10 transition-colors select-none">
                  {item.num}
                </div>
                <h3
                  className={`${TEXT.h3} mb-4 group-hover:text-[#D1326E] transition-colors relative z-10`}
                >
                  {item.title}
                </h3>
                <p className={`${TEXT.body} text-base md:text-lg`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
