import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-charcoal border-t border-white/5 pt-16 md:pt-20 pb-8 md:pb-10 px-6 md:px-12 text-cream">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Top Section: Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand Column (Span 4) */}
          <div className="col-span-2 md:col-span-4 flex flex-col gap-5 pr-4 md:pr-8">
            <Link
              href={"/"}
              className="flex items-baseline gap-0.5 group cursor-pointer select-none w-fit"
            >
              <span className="font-serif text-2xl font-semibold tracking-tight text-white group-hover:text-white/80 transition-colors">
                Casevia
              </span>
              <span className="text-3xl text-terracotta leading-none">.</span>
            </Link>
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs">
              The AI-powered narrative engine for B2B marketing teams. Turn raw
              customer calls into high-converting case studies in minutes.
            </p>
          </div>

          {/* Links Column 1: Product */}
          <div className="col-span-1 md:col-span-2 md:col-start-7 flex flex-col gap-4">
            <h4 className="font-sans text-xs font-bold text-white/40 tracking-[0.12em] uppercase mb-1">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
              <FooterLink href="#">Changelog</FooterLink>
              <FooterLink href="#">Docs</FooterLink>
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h4 className="font-sans text-xs font-bold text-white/40 tracking-[0.12em] uppercase mb-1">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="/blogs">Blogs</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h4 className="font-sans text-xs font-bold text-white/40 tracking-[0.12em] uppercase mb-1">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="/privacy-policy">Privacy</FooterLink>
              <FooterLink href="/terms">Terms</FooterLink>
              <FooterLink href="/cookies">Cookies</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-6 md:pt-8 border-t border-white/5">
          <p className="font-sans text-xs text-white/30 order-2 md:order-1">
            © 2025 Casevia Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3 order-1 md:order-2">
            <SocialLink icon={Twitter} href="https://x.com/muiz_rexhepi" />
            <SocialLink
              icon={Linkedin}
              href="https://linkedin.com/in/muiz-rexhepi"
            />
            <SocialLink icon={Github} href="https://github.com/muizrexhepi" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <li>
    <a
      href={href}
      className="font-sans text-[15px] text-white/50 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

const SocialLink: React.FC<{ icon: any; href: string }> = ({
  icon: Icon,
  href,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:bg-white/[0.08] hover:border-white/10 hover:text-white transition-all duration-200"
  >
    <Icon className="w-4 h-4" />
  </a>
);

export default Footer;
