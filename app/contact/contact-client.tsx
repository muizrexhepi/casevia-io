"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Calendar, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! We've received your message and will respond within 24 hours.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="w-full bg-cream px-6 md:px-12">
      <div className="max-w-6xl mx-auto py-16 md:py-20 lg:py-24 pt-32 md:pt-40">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20 flex flex-col gap-6 md:gap-7 text-center max-w-2xl mx-auto">
          <h1 className="font-serif text-[2.75rem] md:text-5xl lg:text-6xl text-charcoal leading-[0.92] tracking-tight">
            Let's talk about <br />
            <span className="italic text-charcoal font-normal text-[3rem] md:text-[3.3rem] lg:text-[3.9rem]">
              your needs.
            </span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-charcoal/70 leading-relaxed font-light">
            Whether you need a custom plan, have questions, or want to see a
            demo—we're here to help you succeed.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-5 mb-16 md:mb-20 lg:mb-24">
          {/* Left Column - Contact Cards */}
          <div className="lg:col-span-2 space-y-5">
            {/* Email Card */}
            <div className="p-6 bg-white rounded-2xl border border-charcoal/[0.06]">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-terracotta" strokeWidth={1.5} />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-sans font-semibold text-charcoal text-[15px]">
                    Email us
                  </h3>
                  <a
                    href="mailto:contact@casevia.io"
                    className="block text-sm text-charcoal/60 hover:text-terracotta transition-colors font-medium"
                  >
                    contact@casevia.io
                  </a>
                  <p className="text-sm text-charcoal/50 leading-relaxed">
                    For general inquiries and sales
                  </p>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="p-6 bg-white rounded-2xl border border-charcoal/[0.06]">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare
                    className="w-5 h-5 text-terracotta"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-sans font-semibold text-charcoal text-[15px]">
                    Support
                  </h3>
                  <a
                    href="mailto:support@casevia.io"
                    className="block text-sm text-charcoal/60 hover:text-terracotta transition-colors font-medium"
                  >
                    support@casevia.io
                  </a>
                  <p className="text-sm text-charcoal/50 leading-relaxed">
                    For technical support and help
                  </p>
                </div>
              </div>
            </div>

            {/* Demo Card */}
            <div className="p-6 bg-white rounded-2xl border border-charcoal/[0.06]">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <Calendar
                    className="w-5 h-5 text-terracotta"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="font-sans font-semibold text-charcoal text-[15px]">
                      Book a demo
                    </h3>
                    <p className="text-sm text-charcoal/50 mt-1 leading-relaxed">
                      Schedule a personalized walkthrough
                    </p>
                  </div>
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-charcoal/5 text-charcoal hover:bg-charcoal/10 border border-charcoal/10 hover:border-charcoal/20 transition-all text-sm font-semibold"
                  >
                    Schedule demo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="p-6 bg-card-bg rounded-2xl border border-charcoal/[0.06]">
              <h3 className="font-sans font-semibold text-charcoal text-[15px] mb-4">
                What to expect
              </h3>
              <ul className="space-y-3">
                {[
                  "Response within 24 hours",
                  "Personalized consultation",
                  "Custom pricing and solutions",
                  "No pressure, just answers",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-terracotta/10 border border-terracotta/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check
                        className="w-2.5 h-2.5 text-terracotta"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-sm text-charcoal/60 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10 bg-white rounded-2xl border border-charcoal/[0.06] h-full">
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6 tracking-tight">
                Send us a message
              </h2>

              {/* Success/Error Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl mb-6 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-[0.12em] font-sans"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                      required
                      className="w-full h-12 px-4 bg-cream border border-charcoal/10 rounded-xl text-[15px] text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20 transition-all font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-[0.12em] font-sans"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      required
                      className="w-full h-12 px-4 bg-cream border border-charcoal/10 rounded-xl text-[15px] text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20 transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-[0.12em] font-sans"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="w-full h-12 px-4 bg-cream border border-charcoal/10 rounded-xl text-[15px] text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20 transition-all font-sans"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-[0.12em] font-sans"
                  >
                    Company name
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    required
                    className="w-full h-12 px-4 bg-cream border border-charcoal/10 rounded-xl text-[15px] text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20 transition-all font-sans"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-bold text-charcoal/70 uppercase tracking-[0.12em] font-sans"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your needs, questions, or what you'd like to discuss..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-cream border border-charcoal/10 rounded-xl text-[15px] text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/20 transition-all resize-none font-sans leading-relaxed"
                  />
                </div>

                {/* Submit Button */}
                <div className="space-y-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-charcoal text-cream rounded-full font-sans font-semibold text-[15px] hover:bg-terracotta transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send message
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Privacy Note */}
                  <p className="text-xs text-center text-charcoal/40 leading-relaxed font-sans">
                    By submitting this form, you agree to our{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-charcoal/60 hover:text-terracotta transition-colors font-medium"
                    >
                      privacy policy
                    </Link>
                    . We'll never share your information.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 py-12 md:py-16 px-6 md:px-12 bg-charcoal rounded-2xl md:rounded-3xl">
          <h2 className="font-serif text-[2rem] md:text-4xl text-cream leading-[0.95] tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Start using Casevia today — it's free forever, no credit card
            required.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-terracotta text-white rounded-full font-sans font-semibold text-[15px] hover:bg-terracotta/90 transition-all shadow-lg shadow-terracotta/20"
          >
            Start for free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
