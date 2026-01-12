"use client";

import React, { useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";

const PrivacyPage: React.FC = () => {
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
    <div className="bg-[#050505] min-h-screen pt-32 md:pt-40 pb-24 text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-start mb-24 md:mb-32">
          <Reveal>
            <span className="block text-left text-xs font-bold uppercase tracking-[0.25em] text-purple-400 mb-6">
              Legal Framework
            </span>
          </Reveal>
          <Reveal width="100%">
            <h1 className="font-display text-[11vw] md:text-[8vw] leading-[0.8] font-black uppercase tracking-tighter text-left mb-12">
              Privacy <br />
              <span className="text-gray-500">Policy</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1} width="100%">
            <div className="w-full h-px bg-white/10"></div>
          </Reveal>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Metadata */}
          <div className="lg:col-span-4">
            <Reveal delay={0.2}>
              <div className="sticky top-32 space-y-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500 mb-2">
                    Last Updated
                  </p>
                  <p className="font-display text-xl font-medium uppercase tracking-tight text-white">
                    December 12, 2024
                  </p>
                </div>

                <div className="p-8 border border-white/10 bg-white/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">
                    Compliance
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Our data processing standards are engineered to meet
                    enterprise-grade security requirements and GDPR frameworks.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Legal Sections */}
          <div className="lg:col-span-8">
            <div className="space-y-24">
              {sections.map((section, idx) => (
                <Reveal key={idx} delay={0.1}>
                  <div className="group">
                    <h2 className="font-display text-2xl md:text-4xl font-medium uppercase tracking-tight mb-8 text-white group-hover:text-purple-400 transition-colors duration-300">
                      {section.title}
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-normal tracking-tight">
                      {section.content}
                    </p>
                    <div className="mt-16 w-full h-px bg-white/5 group-last:hidden"></div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Bottom Contact CTA */}
            <Reveal delay={0.5}>
              <div className="mt-32 p-12 border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <h3 className="font-display text-2xl font-medium uppercase mb-4">
                  Inquiries?
                </h3>
                <p className="text-gray-400 mb-8 max-w-md italic">
                  If you have questions regarding our data practices, contact
                  our legal engineering lead.
                </p>
                <a
                  href="mailto:legal@casevia.io"
                  className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white hover:text-purple-400 transition-colors"
                >
                  legal@casevia.io{" "}
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple Arrow icon if lucide-react isn't already imported in your actual Privacy file
const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

export default PrivacyPage;
