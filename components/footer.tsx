"use client";
import React from "react";
import { Reveal } from "./ui/Reveal";
import {
  ArrowUpRight,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-0 pb-12 overflow-hidden">
      {/* Massive CTA Section */}
      <Link
        href="/contact"
        className="group block relative border-t border-white/10 hover:bg-white/5 transition-colors duration-500"
      >
        <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
          <Reveal width="100%">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-[10vw] md:text-[8vw] leading-[0.8] font-medium uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-700 ease-expo">
                Start A <br />{" "}
                <span className="text-gray-600 group-hover:text-white transition-colors duration-700 delay-75">
                  Project
                </span>
              </h2>
              <div className="hidden md:flex w-32 h-32 rounded-full border border-white/20 items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-500 ease-expo">
                <ArrowUpRight className="w-12 h-12 group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
          </Reveal>
        </div>
      </Link>
      {/* Grid Content */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <Reveal>
                <Link
                  href="/"
                  className="font-display font-black text-2xl tracking-tighter uppercase mb-8 block"
                >
                  Casevia
                </Link>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-sm text-gray-500 font-medium leading-loose uppercase tracking-wide max-w-xs">
                  A digital design agency crafting experiences for the modern
                  web.
                </p>
              </Reveal>
            </div>

            {/* Sitemap */}
            <div className="md:col-span-1">
              <Reveal delay={0.2}>
                <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-600 mb-8">
                  Explore
                </span>
                <ul className="space-y-4">
                  {["Work", "Services", "Agency", "Contact"].map((item) => (
                    <li key={item}>
                      <Link
                        href={`/${item.toLowerCase()}`}
                        className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Socials */}
            <div className="md:col-span-1">
              <Reveal delay={0.3}>
                <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-600 mb-8">
                  Follow
                </span>
                <ul className="space-y-4">
                  {[
                    {
                      name: "Instagram",
                      icon: <Instagram className="w-4 h-4" />,
                    },
                    { name: "Twitter", icon: <Twitter className="w-4 h-4" /> },
                    {
                      name: "LinkedIn",
                      icon: <Linkedin className="w-4 h-4" />,
                    },
                  ].map((social) => (
                    <li key={social.name}>
                      <a
                        href="#"
                        className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors group"
                      >
                        {social.icon}
                        <span>{social.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Office / Time */}
            <div className="md:col-span-1">
              <Reveal delay={0.4}>
                <span className="block text-xs font-bold uppercase tracking-[0.25em] text-gray-600 mb-8">
                  Visit
                </span>
                <address className="not-italic text-sm font-medium text-gray-400 leading-loose mb-6">
                  Torstraße 12 <br />
                  10119 Berlin <br />
                  Germany
                </address>
                <a
                  href="mailto:hello@casevia.io"
                  className="text-sm font-bold uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-white transition-colors"
                >
                  hello@casevia.io
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* 1. Copyright Text - REMOVED REVEAL & INCREASED CONTRAST */}
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            © {currentYear} Casevia.io
          </p>

          {/* 2. Privacy/Terms Links - REMOVED REVEAL & INCREASED CONTRAST */}
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
