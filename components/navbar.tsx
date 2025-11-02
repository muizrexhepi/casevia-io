"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/example", label: "Example" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-border/50 bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="container max-w-6xl flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src="/logo.svg"
                className="object-contain w-auto h-10 transition-transform duration-300"
                alt="Casevia"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 font-semibold text-foreground/80 rounded-lg transition-all duration-200 hover:text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="px-5 py-2 font-semibold text-foreground rounded-lg transition-all duration-200 hover:bg-muted"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2.5 font-semibold bg-primary text-primary-foreground rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="fixed inset-x-0 top-16 z-40 border-b-2 border-border/50 bg-background/98 backdrop-blur-md md:hidden animate-in slide-in-from-top-2 shadow-xl">
          <div className="container py-6 space-y-6">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-base font-semibold rounded-lg transition-colors hover:text-primary hover:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="border-t border-border/50" />

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-3 text-center font-semibold border-2 border-border/50 rounded-xl transition-all duration-200 hover:border-primary/30 hover:bg-muted"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-3 text-center font-semibold bg-primary text-primary-foreground rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-30 bg-background/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
