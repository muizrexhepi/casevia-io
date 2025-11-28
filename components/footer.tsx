"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Logo } from "./logo";

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // ===========================
  // Mouse glow effect
  // ===========================
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const footer = footerRef.current;
    if (footer) footer.addEventListener("mousemove", handleMouseMove);

    return () => footer?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ===========================
  // Direct waitlist submit
  // ===========================
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to join waitlist");

      const result = await res.json();

      if (result.exists) {
        toast("You're already on the waitlist!", {
          description: "Thanks for sticking with us — big updates coming soon.",
        });
      } else {
        toast.success("🎉 You're officially on the waitlist!");
      }

      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ===========================
  // Component JSX
  // ===========================
  return (
    <footer
      ref={footerRef}
      className="w-full bg-zinc-950 text-zinc-400 pt-24 pb-12 border-t border-zinc-900 overflow-hidden relative group/footer"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 mb-24">
          {/* Left section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <Logo className="text-white text-2xl" />
            </div>

            <p className="text-sm leading-relaxed mb-8 max-w-xs text-zinc-500 font-light">
              The enterprise standard for automated case study generation.
              Trusted by high-growth startups and agencies worldwide.
            </p>

            {/* Waitlist form */}
            <div className="flex flex-col gap-4">
              <div className="text-xs font-bold text-zinc-600 uppercase tracking-widest font-mono">
                Join the waitlist
              </div>

              <form onSubmit={handleSubmit} className="flex w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-900 border-y border-l border-r-0 border-zinc-800 text-white px-4 py-3 text-sm flex-1 focus:outline-none focus:border-zinc-700 rounded-none placeholder:text-zinc-700"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-zinc-950 px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-zinc-200 transition-colors rounded-none border-y border-r border-white flex items-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-zinc-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                      Joining…
                    </>
                  ) : (
                    "Join"
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest font-mono">
              Product
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest font-mono">
              Company
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest font-mono">
              Legal
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-600 font-mono">
          <div>© 2025 Casevia Inc. All rights reserved.</div>

          <div className="flex items-center gap-6">
            <a
              href="https://x.com/muiz_rexhepi"
              className="hover:text-zinc-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/muiz-rexhepi"
              className="hover:text-zinc-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/muizrexhepi"
              className="hover:text-zinc-400 transition-colors"
            >
              GitHub
            </a>

            {/* <div className="flex items-center gap-2 text-emerald-500">
              <div className="w-1.5 h-1.5 bg-emerald-500 animate-pulse"></div>
              <span>SYSTEM_OPERATIONAL</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] pointer-events-none opacity-[0.03] whitespace-nowrap z-0">
        <span className="text-[18vw] font-display font-bold leading-none tracking-tighter text-white">
          CASEVIA
        </span>
      </div>

      {/* Glow reveal */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] pointer-events-none whitespace-nowrap z-10 text-white opacity-0 group-hover/footer:opacity-100 transition-opacity duration-300"
        style={{
          maskImage: `radial-gradient(circle 300px at ${cursorPos.x}px ${cursorPos.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 300px at ${cursorPos.x}px ${cursorPos.y}px, black 0%, transparent 100%)`,
        }}
      >
        <span className="text-[18vw] font-display font-bold leading-none tracking-tighter text-white opacity-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
          CASEVIA
        </span>
      </div>
    </footer>
  );
};
