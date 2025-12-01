"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useWaitlistStore } from "@/lib/store"; // Assuming this path is correct
import Link from "next/link";

const Navbar: React.FC = () => {
  const openWaitlist = useWaitlistStore((state) => state.openWaitlist);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-cream/90 backdrop-blur-md border-b border-charcoal/10"
          : "py-5 bg-transparent border-charcoal/5"
      }`}
    >
      {/* Container (matches Hero) */}
      <div className="container max-w-7xl mx-auto px-6 md:px-12 xl:px-0 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <Link
            href={"/"}
            className="flex items-baseline gap-0.5 group cursor-pointer select-none"
          >
            <span className="font-serif text-3xl font-semibold tracking-tight text-charcoal transition-colors">
              Casevia
            </span>
            <span className="text-3xl text-terracotta leading-none">.</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="/blogs">Blogs</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={openWaitlist}
            className="bg-charcoal text-cream px-5 py-2.5 rounded-full font-sans text-sm font-medium hover:bg-terracotta transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-charcoal/5 hover:shadow-terracotta/20"
          >
            Get Started
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="relative font-sans text-base text-charcoal/70 hover:text-charcoal transition-colors group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

export default Navbar;
