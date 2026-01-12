import React from "react";
import Link from "next/link";
import { Instagram, Mail, Twitter } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 ">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          {/* Brand & Socials */}
          <div className="lg:col-span-5">
            <p className="text-3xl md:text-4xl text-gradient font-bold leading-none tracking-tighter mb-10 max-w-sm">
              Engineering Excellence from Berlin.
            </p>
            <div className="flex gap-8">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#D1326E]/10 hover:bg-[#D1326E] hover:text-white text-[#D1326E] transition-all duration-500"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#D1326E]/10 hover:bg-[#D1326E] hover:text-white text-[#D1326E] transition-all duration-500"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:hello@casevia.io"
                className="p-3 rounded-full border border-[#D1326E]/10 hover:bg-[#D1326E] hover:text-white text-[#D1326E] transition-all duration-500"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {/* Operations */}
            <div className="space-y-6">
              <h5 className="text-[11px] font-bold text-[#D1326E] tracking-tight uppercase">
                Operations
              </h5>
              <ul className="space-y-3 text-sm text-[#4A1D3A]/60 font-semibold">
                <li className="hover:text-[#D1326E] transition-colors">
                  <Link href="/#services">Custom Software</Link>
                </li>
                <li className="hover:text-[#D1326E] transition-colors">
                  <Link href="/#services">Autonomous Logic</Link>
                </li>
                <li className="hover:text-[#D1326E] transition-colors">
                  <Link href="/#services">Cloud Systems</Link>
                </li>
              </ul>
            </div>

            {/* Studio */}
            <div className="space-y-6">
              <h5 className="text-[11px] font-bold text-[#D1326E] tracking-tight uppercase">
                Studio
              </h5>
              <ul className="space-y-3 text-sm text-[#4A1D3A]/60 font-semibold">
                {/* Scroll to ID on Home Page */}
                <li className="hover:text-[#D1326E] transition-colors">
                  <Link href="/#methodology">The Framework</Link>
                </li>
                {/* Link to Work Page */}
                <li className="hover:text-[#D1326E] transition-colors">
                  <Link href="/work">Case Ledger</Link>
                </li>
                <li className="hover:text-[#D1326E] transition-colors">
                  <Link href="/contact">Studio Openings</Link>
                </li>
              </ul>
            </div>

            {/* Hubs */}
            <div className="space-y-6">
              <h5 className="text-[11px] font-bold text-[#D1326E] tracking-tight uppercase">
                Hubs
              </h5>
              <ul className="space-y-3 text-sm text-[#4A1D3A]/60 font-semibold leading-relaxed">
                <li>Mitte, Berlin</li>
                <li>European HQ</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-[#221221]/5">
          <Link href="/" className="flex items-center gap-4 cursor-pointer">
            <span className="text-4xl font-extrabold tracking-tighter text-gradient leading-none">
              casevia
            </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold text-[#4A1D3A]/40 tracking-tight">
            <Link
              href="/privacy"
              className="hover:text-[#D1326E] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#D1326E] transition-colors"
            >
              Terms of Service
            </Link>
            <span className="opacity-40">
              &copy; {currentYear} Casevia Engineering Group GmbH
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
