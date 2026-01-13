// components/sections/Methodology.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TEXT } from "@/lib/styles";

export default function Methodology() {
  // Updated copy to be more descriptive of the ACTUAL service provided
  const steps = [
    {
      num: "01",
      title: "Strategy & Blueprint",
      desc: "We analyze your competitors and map out a site structure designed to convert visitors into paying customers. No guessing.",
    },
    {
      num: "02",
      title: "Visual Architecture",
      desc: "We design a premium, brand-aligned interface that positions you as the market leader. High-end aesthetics that build instant trust.",
    },
    {
      num: "03",
      title: "Next.js Development",
      desc: "We build your site using the same tech stack as Netflix and Uber. Blazing fast load times, perfect SEO, and unhackable security.",
    },
    {
      num: "04",
      title: "Managed Growth",
      desc: "Launch is just day one. We host, update, and maintain your digital headquarters so you never have to log into a server again.",
    },
  ];

  return (
    <section id="methodology" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          <div className="lg:w-1/3 flex flex-col items-start text-left">
            <div className="flex flex-col lg:sticky lg:top-32">
              <div>
                <span className={TEXT.label}>Our Standard</span>
                <h2 className={TEXT.sectionTitle}>
                  Precision is not optional.
                </h2>
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
