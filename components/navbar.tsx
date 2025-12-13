"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // isVisible state and logic removed as requested (sticky)

  const router = useRouter();
  const pathname = usePathname();

  // --- Scroll Logic (Simplified to only detect scroll for background change) ---
  useEffect(() => {
    const handleScroll = () => {
      // Only update isScrolled state
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means it runs once on mount

  // Prevent background scrolling when menu is open (KEEP this functionality)
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMenuOpen]);

  // --- Navigation Logic ---
  const handleNavClick = (path: string, hash?: string) => {
    setIsMenuOpen(false);

    if (pathname === path && hash) {
      // Scroll directly if already on the page
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else if (path.startsWith("/")) {
      // Navigate using router.push
      const url = path === "/" && hash ? `${path}#${hash}` : path;
      router.push(url);
    }
  };

  const menuItems = [
    { label: "Home", path: "/", hash: "" },
    { label: "About Us", path: "/about", hash: "" },
    { label: "Case Studies", path: "/work", hash: "" },
    { label: "Services", path: "/", hash: "services" },
    { label: "Pricing", path: "/pricing", hash: "" },
    { label: "Process", path: "/", hash: "process" },
    { label: "Contact", path: "/contact", hash: "" },
  ];

  const textClass = "text-white";

  // Background class simplified: always visible, changes opacity/border on scroll
  const bgClass =
    isScrolled && !isMenuOpen
      ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-4"
      : "bg-transparent py-6 md:py-8";

  const transitionTiming = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <>
      <nav
        // Removed the translate-y-full and opacity-0 classes, keeping it fixed and visible
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[${transitionTiming}] translate-y-0 opacity-100 ${bgClass}`}
      >
        <div className="container mx-auto px-6 md:px-12 relative flex justify-between items-center">
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`group flex items-center gap-3 hover:opacity-60 transition-opacity relative z-50 ${textClass}`}
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-[6px] items-start w-6">
                <span
                  className={`block w-full h-[1px] bg-white transition-transform duration-500 ease-expo ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                ></span>
                <span
                  className={`block w-2/3 h-[1px] bg-white transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block w-full h-[1px] bg-white transition-transform duration-500 ease-expo ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                ></span>
              </div>
              <span
                className={`font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hidden md:block`}
              >
                {isMenuOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>

          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-white`}
          >
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-display font-black text-2xl tracking-tighter uppercase select-none"
            >
              Casevia
            </Link>
          </div>

          <div className="flex-1 flex justify-end z-50">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/contact");
              }}
              className={`flex items-center gap-3 font-bold text-[10px] uppercase tracking-[0.2em] group transition-colors duration-300 text-white`}
            >
              <span className="hidden md:inline group-hover:text-purple-400 transition-colors">
                Let's Talk
              </span>
              <div
                className={`w-8 h-8 border flex items-center justify-center transition-all duration-500 ease-expo rounded-none ${isMenuOpen ? "border-white group-hover:bg-white group-hover:text-black" : "border-white group-hover:bg-white group-hover:text-black"}`}
              >
                <ArrowRight className="w-3 h-3 group-hover:-rotate-45 transition-transform duration-500 ease-expo" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay (Remains unchanged) */}
      <div
        className={`fixed inset-0 bg-[#050505] text-white z-40 flex flex-col transition-all duration-[800ms] ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          transitionTimingFunction: transitionTiming,
          clipPath: isMenuOpen ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
          transitionProperty: "opacity, clip-path",
        }}
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col h-full pt-32 pb-12 relative z-10">
          <div className="flex-1 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
              <div className="flex flex-col gap-2">
                {menuItems.map((item, idx) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.path, item.hash)}
                    className="group flex items-start gap-4 w-max text-left py-1"
                    style={{
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen
                        ? "translateY(0)"
                        : "translateY(40px)",
                      transition: `all 0.8s ${transitionTiming} ${idx * 0.05 + 0.1}s`,
                    }}
                  >
                    <span className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight stroke-text-white group-hover:text-white transition-all duration-500">
                      {item.label}
                    </span>
                    <span className="font-display text-xs font-bold text-gray-600 mt-4 group-hover:text-purple-500 transition-colors">
                      0{idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div
              className="hidden md:flex w-full md:w-1/2 flex-col justify-between items-end pl-12 border-l border-white/10 my-12"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transition: "opacity 1s ease 0.5s",
              }}
            >
              <div className="text-right">
                <p className="font-display text-xl font-bold uppercase tracking-widest mb-2 text-white">
                  Berlin
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  EST. 2024
                </p>
              </div>

              <div className="w-full aspect-video bg-gray-900 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 ease-out group border border-white/5 rounded-none">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                  alt="Office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-100"
                />
              </div>

              <div className="w-full flex justify-between items-end">
                <div className="flex gap-6">
                  {["Instagram", "Twitter", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
                <a
                  href="mailto:hello@casevia.io"
                  className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-purple-400 transition-colors"
                >
                  hello@casevia.io
                </a>
              </div>
            </div>
          </div>

          <div className="md:hidden mt-12 pt-8 border-t border-white/10 text-left">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Social:
              </span>
            </div>
            <div className="flex gap-6 justify-start">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white rounded-none"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white rounded-none"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white rounded-none"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
