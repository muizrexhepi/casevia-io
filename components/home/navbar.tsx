"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { useWaitlistStore } from "@/lib/store";
import Link from "next/link";

const Navbar: React.FC = () => {
  const openWaitlist = useWaitlistStore((state) => state.openWaitlist);

  return (
    <nav className="w-full px-6 py-6 flex justify-between items-center bg-cream sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm border-b border-charcoal/5">
      <div className="flex items-center gap-2 group cursor-pointer">
        {/* Logo Mark */}
        <Link
          href={"/"}
          className="flex items-baseline gap-0.5 group cursor-pointer select-none"
        >
          <span className="font-serif text-2xl font-semibold tracking-tight text-charcoal transition-colors">
            Casevia
          </span>
          <span className="text-3xl text-terracotta leading-none">.</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {/* <NavLink href="#">Product</NavLink> */}
        <NavLink href="/blogs">Blogs</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
      </div>

      <div className="flex items-center gap-4">
        {/* <button className="hidden md:block font-sans text-sm font-medium text-charcoal hover:text-terracotta transition-colors">
          Sign in
        </button> */}
        <button
          onClick={openWaitlist}
          className="bg-charcoal text-cream px-4 py-2 rounded-full font-sans text-sm font-medium hover:bg-terracotta transition-colors duration-300 flex items-center gap-2 group"
        >
          Get Started
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="font-sans text-sm font-medium text-charcoal/70 hover:text-charcoal transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
