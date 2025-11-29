"use client";

import { useState, useEffect } from "react";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useWaitlistStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // For cleaner class merging

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openWaitlist = useWaitlistStore((state) => state.openWaitlist);

  // Scroll effect logic
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40); // Increased threshold to 40px for a more intentional scroll state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      // Cleanup function ensures scroll is restored even if component unmounts quickly
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Updated Navigation Links
  const navLinks = [
    { title: "Pricing", href: "/pricing" },
    { title: "Blogs", href: "/blogs" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border-b",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-border py-4 shadow-sm"
            : "bg-transparent border-transparent py-6" // Use 'transparent' to blend with Hero's background
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo (Serif font and foreground color) */}
          <Link
            href="/"
            className="z-50 relative transition-opacity hover:opacity-80"
          >
            <div className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              casevia
            </div>
          </Link>

          {/* Desktop Nav - Minimalist Text Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                // Use muted/foreground for subtle color shift
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.title}
              </Link>
            ))}

            {/* Divider for visual hierarchy */}
            <div className="h-4 w-px bg-border"></div>

            {/* CTA Button (Secondary Variant, rounded-md, updated text) */}
            <Button
              onClick={openWaitlist}
              variant="secondary"
              className="font-medium px-5 rounded-md h-9 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-1 text-foreground z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background flex flex-col pt-32 px-6 md:hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-4xl font-serif text-foreground hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}

          <div className="h-px bg-border w-full my-4"></div>

          <Button
            onClick={() => {
              setIsOpen(false);
              openWaitlist();
            }}
            variant="secondary"
            size="lg"
            className="w-full justify-center h-12 text-lg rounded-md mt-4"
          >
            Get Started
          </Button>
        </div>

        <div className="mt-auto mb-10 text-center text-muted-foreground text-sm">
          © 2025 Casevia Inc.
        </div>
      </div>
    </>
  );
};
