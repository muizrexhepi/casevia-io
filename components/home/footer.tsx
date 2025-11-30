import React from "react";
import { Twitter, Linkedin, Github, Heart } from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-charcoal border-t border-white/5 pt-20 pb-10 px-6 md:px-12 text-cream">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Section: Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand Column (Span 4) */}
          <div className="col-span-2 md:col-span-4 flex flex-col gap-6 pr-8">
            {" "}
            <Link
              href={"/"}
              className="flex items-baseline gap-0.5 group cursor-pointer select-none"
            >
              <span className="font-serif text-2xl font-semibold tracking-tight text-white transition-colors">
                Casevia
              </span>
              <span className="text-3xl text-terracotta leading-none">.</span>
            </Link>
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs">
              The AI-powered narrative engine for B2B marketing teams. Turn raw
              customer calls into high-converting case studies in minutes.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <SocialLink icon={Twitter} href="#" />
              <SocialLink icon={Linkedin} href="#" />
              <SocialLink icon={Github} href="#" />
            </div>
          </div>

          {/* Links Column 1: Product */}
          <div className="col-span-1 md:col-span-2 md:col-start-7 flex flex-col gap-4">
            <h4 className="font-sans text-sm font-semibold text-white tracking-wide uppercase">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
              <FooterLink href="#">Changelog</FooterLink>
              <FooterLink href="#">Docs</FooterLink>
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h4 className="font-sans text-sm font-semibold text-white tracking-wide uppercase">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <h4 className="font-sans text-sm font-semibold text-white tracking-wide uppercase">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Cookie Policy</FooterLink>
              <FooterLink href="#">Security</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="font-sans text-xs text-white/30">
            © 2024 Casevia Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/30">
            <span>Designed with</span>
            <Heart className="w-3 h-3 text-terracotta fill-current" />
            <span>in San Francisco</span>
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
      className="font-sans text-sm text-white/50 hover:text-terracotta transition-colors duration-200"
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
    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all"
  >
    <Icon className="w-4 h-4" />
  </a>
);

export default Footer;
