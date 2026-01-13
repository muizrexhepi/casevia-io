"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/UI"; // Assuming your button component path
import { TEXT } from "@/lib/styles";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  company: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "sending"
  >("idle");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company || "N/A",
      message: `Interest: ${formData.interest}\n\nDetails:\n${formData.message}`,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="pt-32 md:pt-48 pb-32 reveal active">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h1 className={`${TEXT.h1} mb-12`}>Let's begin.</h1>
            <p className={`${TEXT.body} max-w-2xl`}>
              Engineering excellence starts with a conversation. Tell us about
              your vision, and let's architect the future of your operations.
            </p>
          </div>

          <div className="flex flex-col justify-end space-y-10">
            <div className="p-10 glass rounded-[2.5rem]">
              <h4 className="text-[12px] font-bold text-[#D1326E] tracking-tight mb-6 uppercase">
                Direct Access
              </h4>
              <div className="space-y-4">
                <p className="text-2xl font-normal tracking-tight text-[#221221]">
                  partnerships@casevia.io
                </p>
                <p className="text-2xl font-normal tracking-tight text-[#221221]">
                  +49 30 1234 5678
                </p>
              </div>
            </div>
          </div>
        </div>

        {status !== "success" ? (
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 max-w-7xl"
            onSubmit={handleSubmit}
          >
            {/* First Name */}
            <div className="space-y-3 border-b border-[#221221]/10 pb-8 group focus-within:border-[#D1326E] transition-colors">
              <label className="text-[11px] font-bold text-[#D1326E] tracking-tight opacity-60 group-focus-within:opacity-100 transition-opacity uppercase">
                First Name
              </label>
              <input
                required
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                className="w-full bg-transparent text-2xl md:text-4xl font-normal focus:outline-none placeholder-[#221221]/10 py-1"
                placeholder="John"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-3 border-b border-[#221221]/10 pb-8 group focus-within:border-[#D1326E] transition-colors">
              <label className="text-[11px] font-bold text-[#D1326E] tracking-tight opacity-60 group-focus-within:opacity-100 transition-opacity uppercase">
                Last Name
              </label>
              <input
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                className="w-full bg-transparent text-2xl md:text-4xl font-normal focus:outline-none placeholder-[#221221]/10 py-1"
                placeholder="Doe"
              />
            </div>

            {/* Email */}
            <div className="space-y-3 border-b border-[#221221]/10 pb-8 group focus-within:border-[#D1326E] transition-colors">
              <label className="text-[11px] font-bold text-[#D1326E] tracking-tight opacity-60 group-focus-within:opacity-100 transition-opacity uppercase">
                Corporate Email
              </label>
              <input
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-full bg-transparent text-2xl md:text-4xl font-normal focus:outline-none placeholder-[#221221]/10 py-1"
                placeholder="john@company.com"
              />
            </div>

            {/* Enterprise/Company */}
            <div className="space-y-3 border-b border-[#221221]/10 pb-8 group focus-within:border-[#D1326E] transition-colors">
              <label className="text-[11px] font-bold text-[#D1326E] tracking-tight opacity-60 group-focus-within:opacity-100 transition-opacity uppercase">
                Enterprise
              </label>
              <input
                required
                name="company"
                value={formData.company}
                onChange={handleChange}
                type="text"
                className="w-full bg-transparent text-2xl md:text-4xl font-normal focus:outline-none placeholder-[#221221]/10 py-1"
                placeholder="Company Name"
              />
            </div>

            {/* Interest Select */}
            <div className="space-y-3 border-b border-[#221221]/10 pb-8 relative group focus-within:border-[#D1326E] transition-colors">
              <label className="text-[11px] font-bold text-[#D1326E] tracking-tight opacity-60 group-focus-within:opacity-100 transition-opacity uppercase">
                Primary Interest
              </label>
              <select
                required
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full bg-transparent text-2xl md:text-4xl font-normal focus:outline-none py-1 appearance-none cursor-pointer"
              >
                <option value="">Select Domain...</option>
                <option value="New Website">New Website</option>
                <option value="Branding & Identity">Branding & Identity</option>
                <option value="Growth Marketing">Growth Marketing</option>
                <option value="Other Inquiry">Other Inquiry</option>
              </select>
              <ChevronDown
                className="absolute bottom-10 right-0 pointer-events-none text-[#221221]/30 group-focus-within:text-[#D1326E] transition-colors"
                size={28}
              />
            </div>

            {/* Message/Details */}
            <div className="md:col-span-2 space-y-3 border-b border-[#221221]/10 pb-8 group focus-within:border-[#D1326E] transition-colors">
              <label className="text-[11px] font-bold text-[#D1326E] tracking-tight opacity-60 group-focus-within:opacity-100 transition-opacity uppercase">
                Brief Summary
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={1}
                className="w-full bg-transparent text-2xl md:text-4xl font-normal focus:outline-none placeholder-[#221221]/10 py-1 resize-none"
                placeholder="What are we building together?"
              />
            </div>

            {/* Footer / Submit */}
            <div className="md:col-span-2 flex flex-col lg:flex-row lg:items-center justify-between gap-12 mt-12">
              <div className="max-w-2xl">
                {status === "error" && (
                  <p className="text-red-500 font-bold text-sm mb-4 uppercase tracking-widest">
                    Transmission Error. Please verify your connection and try
                    again.
                  </p>
                )}
                <label className="flex items-start gap-6 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-1">
                    <input required type="checkbox" className="peer sr-only" />
                    <div className="w-8 h-8 border-2 border-[#221221]/10 rounded-lg group-hover:border-[#D1326E] transition-all peer-checked:bg-[#D1326E] peer-checked:border-[#D1326E]"></div>
                    <svg
                      className="absolute top-1.5 left-1.5 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-base text-[#4A1D3A]/60 font-normal leading-snug">
                    I acknowledge the processing of my corporate data in
                    accordance with Casevia's standards.
                  </span>
                </label>
              </div>

              <Button
                variant="primary"
                size="lg"
                type="submit"
                disabled={status === "sending"}
                className="text-lg px-16 py-8 min-w-[300px]"
              >
                {status === "sending" ? "Processing..." : "Initiate Project"}
                <ArrowRight size={28} className="ml-4" />
              </Button>
            </div>
          </form>
        ) : (
          /* Success State */
          <div className="py-24 text-left animate-in fade-in zoom-in duration-1000">
            <h2 className="text-6xl md:text-8xl font-normal tracking-tighter text-[#D1326E] mb-10 leading-none">
              Transmission <br />
              Success.
            </h2>
            <p className="text-xl md:text-3xl text-[#4A1D3A] max-w-3xl leading-snug font-light tracking-tight">
              Your project parameters have been received. An engineering lead
              from our Berlin studio will respond within 24 hours.
            </p>
            <Button
              variant="outline"
              className="mt-16 text-lg px-12 py-6"
              onClick={() => setStatus("idle")}
            >
              Send another brief
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
