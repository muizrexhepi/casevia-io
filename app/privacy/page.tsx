"use client";
import { Reveal } from "@/components/ui/Reveal";
import React, { useEffect } from "react";

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "01. Data Collection",
      content:
        "We collect information you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support, or otherwise communicate with us.",
    },
    {
      title: "02. Usage of Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, such as administering your account, processing transactions, and sending you related information, including confirmations and invoices.",
    },
    {
      title: "03. Data Sharing",
      content:
        "We may share personal information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We do not sell your personal data to third parties.",
    },
    {
      title: "04. Security",
      content:
        "Casevia takes reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no internet transmission is completely secure.",
    },
    {
      title: "05. Cookies",
      content:
        "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
    },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 md:pt-40 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-start justify-center mb-24 md:mb-32">
          <Reveal>
            <span className="block text-left text-xs font-bold uppercase tracking-[0.25em] text-purple-400 mb-6">
              Legal
            </span>
          </Reveal>
          <Reveal width="100%">
            <h1 className="font-display text-[11vw] md:text-[8vw] leading-[0.8] font-black uppercase tracking-tighter text-left mb-12">
              Privacy <br /> Policy
            </h1>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <div className="w-full h-px bg-white/10"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <div className="sticky top-32">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-2">
                  Last Updated
                </p>
                <p className="font-display text-xl font-medium uppercase tracking-tight text-white">
                  December 12, 2024
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 space-y-16">
            {sections.map((section, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="border-b border-white/10 pb-16">
                  <h2 className="font-display text-2xl md:text-3xl font-medium uppercase tracking-tight mb-8 text-gray-200">
                    {section.title}
                  </h2>
                  <p className="text-sm md:text-base leading-loose text-gray-400 font-medium uppercase tracking-wide">
                    {section.content}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
