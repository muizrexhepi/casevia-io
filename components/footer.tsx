import React from "react";
import { Reveal } from "./ui/Reveal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Reveal>
              <Link
                href="/"
                className="font-display font-bold text-2xl tracking-tighter uppercase mb-6 block"
              >
                Casevia
              </Link>
              <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-xs">
                Strategic design and development for brands that refuse to blend
                in. Berlin based, globally available.
              </p>
            </Reveal>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-1">
            <Reveal delay={0.1}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                Explore
              </h4>
              <ul className="space-y-3">
                {["Work", "Services", "Pricing", "About"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase() === "agency" ? "about" : item.toLowerCase()}`}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Legal / Social */}
          <div className="md:col-span-1">
            <Reveal delay={0.2}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                Connect
              </h4>
              <ul className="space-y-3">
                {["Instagram", "Twitter", "LinkedIn", "Email"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Newsletter / CTA */}
          <div className="md:col-span-1">
            <Reveal delay={0.3}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                Stay Ahead
              </h4>
              <div className="flex flex-col gap-4">
                <p className="text-xs text-gray-400">
                  Get the latest design insights.
                </p>
                <div className="flex border-b border-white/20 pb-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-600 focus:placeholder:text-gray-500 transition-all text-white"
                  />
                  <button className="text-white hover:text-purple-400 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © {currentYear} Casevia Agency.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-[10px] text-gray-600 uppercase tracking-widest hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[10px] text-gray-600 uppercase tracking-widest hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
