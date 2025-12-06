"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useWaitlistStore } from "@/lib/store";
import Link from "next/link";

const Navbar: React.FC = () => {
  const openWaitlist = useWaitlistStore((state) => state.openWaitlist);

  // --- Scroll Logic State ---
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // --- Mobile Menu State ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background style threshold
      setScrolled(currentScrollY > 20);

      // Hide/Show logic (only trigger after 100px to avoid bounce at top)
      if (currentScrollY > 100) {
        setIsVisible(currentScrollY < lastScrollY);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock Body Scroll when Mobile Menu is Open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Dynamic Classes
  const navClasses = `
    fixed top-0 left-0 w-full z-50 
    transition-all duration-500 ease-in-out
    ${
      scrolled || isMobileMenuOpen
        ? "py-3 bg-cream/95 backdrop-blur-md border-b border-charcoal/10"
        : "py-5 bg-transparent border-transparent"
    }
    ${isVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
  `;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-0 flex justify-between items-center">
          
          {/* --- LEFT: Logo + Desktop Links --- */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link
              href={"/"}
              className="flex items-baseline gap-0.5 group cursor-pointer select-none z-50 relative"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-serif text-3xl font-semibold tracking-tight text-charcoal transition-colors">
                Casevia
              </span>
              <span className="text-3xl text-terracotta leading-none">.</span>
            </Link>

            {/* Desktop Navigation Links (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="/blogs">Blogs</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
            </div>
          </div>

          {/* --- RIGHT: Actions + Mobile Toggle --- */}
          <div className="flex items-center gap-4">
            
            {/* Desktop CTA */}
            <button
              onClick={openWaitlist}
              className="hidden md:flex bg-charcoal text-cream px-5 py-2.5 rounded-full font-sans text-sm font-medium hover:bg-terracotta transition-all duration-300 items-center gap-2 group shadow-lg shadow-charcoal/5 hover:shadow-terracotta/20"
            >
              Get started free
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Menu Toggle (Burger) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 p-2 -mr-2 text-charcoal hover:text-terracotta transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 bg-cream z-40 md:hidden transition-all duration-500 ease-in-out flex flex-col pt-32 px-6
          ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col gap-6 text-2xl font-serif text-charcoal">
          <MobileNavLink href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>
            Blogs
          </MobileNavLink>
          <MobileNavLink href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
            Pricing
          </MobileNavLink>
          
          <hr className="border-charcoal/10 my-2" />
          
          <button
             onClick={() => {
                openWaitlist();
                setIsMobileMenuOpen(false);
             }}
             className="text-left font-sans text-xl font-medium text-terracotta flex items-center gap-2"
          >
            Get started free <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Decorative Background for Menu */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-terracotta/5 to-transparent pointer-events-none" />
      </div>
    </>
  );
};

// --- Helper Components ---

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link
    href={href}
    className="relative font-sans text-[15px] font-medium text-charcoal/60 hover:text-charcoal transition-colors group"
  >
    {children}
    {/* Subtle underline animation */}
    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-terracotta/50 transition-all duration-300 group-hover:w-full rounded-full"></span>
  </Link>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({
  href,
  children,
  onClick
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block py-2 border-b border-transparent hover:border-terracotta/20 hover:text-terracotta transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;