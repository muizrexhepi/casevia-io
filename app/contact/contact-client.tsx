"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

// Define the shape of the form data
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  company: string; // Added to satisfy API validation
  message: string;
}

const ContactClient: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "sending"
  >("idle");

  // Scrolls to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Reset status on input change
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("sending");

    // The API route expects: firstName, lastName, email, company, message
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company || "N/A", // Using a simple placeholder for company if not explicitly asked on form
      message: `Interest: ${formData.interest}\n\nDetails:\n${formData.message}`,
    };

    try {
      // Logic preserved as requested
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          interest: "",
          company: "",
          message: "",
        });
      } else {
        setStatus("error");
        console.error("Submission error:", data.error || "Unknown error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Network or fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const submitButtonText =
    status === "sending"
      ? "Sending..."
      : status === "success"
        ? "Sent Successfully!"
        : status === "error"
          ? "Failed, Try Again"
          : "Submit Request";

  return (
    <div className="bg-white min-h-screen pt-32 md:pt-40 pb-24 text-black">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-start mb-24 md:mb-32">
          <Reveal>
            <h1 className="font-display text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-black mb-12">
              Let's Talk
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl md:text-2xl font-display font-medium max-w-2xl leading-relaxed">
              Ready to transform your digital presence? We take on a limited
              number of clients per quarter to ensure exceptional quality.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Name Fields (Split to satisfy API) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Reveal delay={0.2}>
                  <div className="relative group">
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="w-full bg-transparent border-b border-black/20 py-4 text-xl md:text-3xl font-display focus:border-black focus:outline-none transition-colors placeholder:text-gray-300 text-black"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.25}>
                  <div className="relative group">
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="w-full bg-transparent border-b border-black/20 py-4 text-xl md:text-3xl font-display focus:border-black focus:outline-none transition-colors placeholder:text-gray-300 text-black"
                    />
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.3}>
                <div className="relative group">
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full bg-transparent border-b border-black/20 py-4 text-xl md:text-3xl font-display focus:border-black focus:outline-none transition-colors placeholder:text-gray-300 text-black"
                  />
                </div>
              </Reveal>

              {/* Added Company Field to match API requirements */}
              <Reveal delay={0.35}>
                <div className="relative group">
                  <label
                    htmlFor="company"
                    className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Acme Corp"
                    className="w-full bg-transparent border-b border-black/20 py-4 text-xl md:text-3xl font-display focus:border-black focus:outline-none transition-colors placeholder:text-gray-300 text-black"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="relative group">
                  <label
                    htmlFor="interest"
                    className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4"
                  >
                    Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-black/20 py-4 text-xl md:text-3xl font-display focus:border-black focus:outline-none transition-colors text-black appearance-none rounded-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    <option value="New Website">New Website</option>
                    <option value="Branding & Identity">
                      Branding & Identity
                    </option>
                    <option value="Growth Marketing">Growth Marketing</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                  <div className="absolute right-0 bottom-6 pointer-events-none">
                    <ArrowRight className="w-6 h-6 text-black" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-4"
                  >
                    Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-black/20 py-4 text-xl md:text-2xl font-display focus:border-black focus:outline-none transition-colors placeholder:text-gray-300 text-black resize-none"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <button
                  type="submit"
                  disabled={loading || status === "success"}
                  className={`mt-8 px-12 py-6 rounded-none text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-4 w-full md:w-auto justify-center 
                    ${
                      status === "success"
                        ? "bg-green-600 text-white cursor-not-allowed"
                        : status === "error"
                          ? "bg-red-600 text-white"
                          : loading
                            ? "bg-gray-500 text-white cursor-wait"
                            : "bg-black text-white hover:bg-gray-900"
                    }`}
                >
                  {submitButtonText}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Reveal>

              {/* Optional User Feedback */}
              {status === "success" && (
                <p className="text-sm text-green-600 font-bold uppercase tracking-widest mt-4">
                  Thank you! We have received your request and will be in touch
                  shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 font-bold uppercase tracking-widest mt-4">
                  An error occurred. Please check your network or try again
                  later.
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Info (No Changes) */}
          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-black/10 flex flex-col justify-between h-full pt-12 lg:pt-0">
            <div>
              <Reveal delay={0.2}>
                <div className="mb-12">
                  <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    <Mail className="w-4 h-4" /> Email
                  </span>
                  <a
                    href="mailto:hello@casevia.io"
                    className="text-2xl font-display font-medium hover:text-gray-600 transition-colors"
                  >
                    hello@casevia.io
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mb-12">
                  <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" /> Office
                  </span>
                  <p className="text-2xl font-display font-medium leading-relaxed">
                    Torstraße 12
                    <br />
                    10119 Berlin
                    <br />
                    Germany
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.4}>
              <div className="bg-gray-50 p-8 border border-black/5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Availability
                </p>
                <p className="font-display text-lg font-medium mb-4">
                  Currently accepting new projects for Q4 2024.
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Online Now
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactClient;
