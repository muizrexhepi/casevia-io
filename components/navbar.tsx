"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

interface NavbarProps {
  onCtaClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle background scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.substring(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/" + href;
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? "bg-[#FBF9F8]/60 backdrop-blur-2xl py-4 border-b border-[#221221]/5" : "bg-transparent py-8 md:py-10"}`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-16">
          <a
            href="/"
            className="flex items-center group"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          >
            <span className="text-3xl font-extrabold tracking-tighter text-gradient leading-none">
              casevia
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[14px] font-semibold tracking-tight text-[#D1326E] hover:opacity-70 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 lg:gap-10">
          <Link
            href={"/contact"}
            className="text-[14px] font-bold tracking-tight flex items-center gap-2 group text-[#D1326E] hover:text-[#221221] transition-colors"
          >
            Work with us{" "}
            <ArrowRight
              size={18}
              strokeWidth={2}
              className="group-hover:translate-x-1.5 transition-transform"
            />
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-[#221221] p-1"
          >
            <Menu size={28} strokeWidth={1} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#FBF9F8]/98 backdrop-blur-3xl z-[100] flex flex-col p-8 animate-in fade-in duration-500 overflow-y-auto no-scrollbar">
          <div className="flex justify-between items-center mb-16">
            <span className="text-4xl font-extrabold tracking-tighter text-gradient">
              casevia
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 border border-[#221221]/10 rounded-full hover:bg-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 space-y-10 text-left">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-5xl font-normal tracking-tighter text-[#221221] hover:text-[#D1326E] transition-all"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              onCtaClick();
            }}
            className="w-full py-10 mt-12 text-3xl font-bold text-left border-t border-[#221221]/10 flex justify-between items-center group text-[#D1326E]"
          >
            Start project{" "}
            <ArrowRight
              size={40}
              className="group-hover:translate-x-3 transition-transform duration-500"
            />
          </button>
        </div>
      )}
    </nav>
  );
};
