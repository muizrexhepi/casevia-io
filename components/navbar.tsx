"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useWaitlistStore } from "@/lib/store";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openWaitlist = useWaitlistStore((state) => state.openWaitlist);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-white/60 backdrop-blur-md border-zinc-200 py-4" : "bg-white/0 border-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 cursor-pointer group z-50 relative"
          >
            <Logo className="text-2xl" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/blogs"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Blog
            </Link>
            <div className="h-4 w-px bg-zinc-200"></div>
            <button
              onClick={openWaitlist}
              className="bg-zinc-900 text-white px-6 py-2.5 text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 active:translate-y-0.5 rounded-none"
            >
              Join waitlist
            </button>
          </div>

          <button
            className="md:hidden p-2 text-zinc-900 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-32 px-6 animate-fade-in md:hidden">
          <div className="flex flex-col gap-8">
            <Link
              href="/blogs"
              className="text-4xl font-display font-bold text-zinc-900 tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <div className="h-px bg-zinc-100 w-full my-4"></div>
            <button
              onClick={() => {
                setIsOpen(false);
                openWaitlist();
              }}
              className="bg-zinc-900 text-white py-3 text-lg font-bold w-full rounded-none mt-4"
            >
              Join waitlist
            </button>
          </div>

          <div className="mt-auto mb-12 text-zinc-400 text-sm">
            © 2025 Casevia Inc.
          </div>
        </div>
      )}
    </>
  );
};
