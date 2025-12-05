import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-charcoal border-t border-white/5 pt-16 md:pt-20 pb-8 md:pb-10 px-4 sm:px-6 md:px-12 text-cream">
      {/* 1. Added consistent horizontal padding (px-4 sm:px-6) */}
      <div className="max-w-6xl mx-auto flex flex-col gap-12 md:gap-16">
        {/* Top Section: Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand Column (Span 4) */}
          <div className="col-span-2 md:col-span-4 flex flex-col gap-5 pr-4 md:pr-8">
            <Link
              href={"/"}
              className="flex items-baseline gap-0.5 group cursor-pointer select-none w-fit"
            >
              {/* No change needed here, as the brand title is custom-sized */}
              <span className="font-serif text-2xl font-semibold tracking-tight text-white group-hover:text-white/80 transition-colors">
                Casevia
              </span>
              <span className="text-3xl text-terracotta leading-none">.</span>
            </Link>
            {/* 1. Changed p tag with custom size (text-sm) to a small tag.
               2. The small tag will inherit the base styling: 12px mobile, 13px sm+.
               3. If you want the original 14px size, keep it as p text-sm. Sticking to small for smaller, secondary text consistency. */}
            <small className="font-sans text-white/50 leading-relaxed max-w-xs">
              The AI-powered narrative engine for B2B marketing teams. Turn raw
              customer calls into high-converting case studies in minutes.
            </small>
          </div>

          {/* Links Column 1: Product */}
          <div className="col-span-1 md:col-span-2 md:col-start-7 flex flex-col gap-4">
            {/* 1. Changed h4 to label for semantic consistency with your global CSS label definition.
               2. Your CSS defines label to be: uppercase, bold, tracked (0.12em), 11px mobile -> 12px sm+. */}
            <label className="text-white/40 mb-1">Product</label>
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
            {/* Changed h4 to label */}
            <label className="text-white/40 mb-1">Company</label>
            <ul className="flex flex-col gap-3">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="/blogs">Blogs</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            {/* Changed h4 to label */}
            <label className="text-white/40 mb-1">Legal</label>
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
          {/* 1. Changed p tag with custom size (text-xs) to a small tag.
             2. The small tag will inherit the base styling: 12px mobile, 13px sm+. */}
          <small className="font-sans text-white/30 order-2 md:order-1">
            © 2025 Casevia Inc. All rights reserved.
          </small>
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
    {/* Removed hardcoded text-[15px] to rely on default p sizing (15px mobile, 16px sm+).
       This is a better fit for a navigation link than the small tag. */}
    <a
      href={href}
      className="font-sans text-white/50 hover:text-white transition-colors duration-200"
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
