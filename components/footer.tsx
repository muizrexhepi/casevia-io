import React from "react";
import { APP_NAME } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-900 pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Top Grid: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-normal text-slate-500">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Product
            </h4>
            <ul className="space-y-3 text-sm font-normal text-slate-500">
              <li>
                <a
                  href="#pricing"
                  className="hover:text-blue-600 transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Social
            </h4>
            <ul className="space-y-3 text-sm font-normal text-slate-500">
              <li>
                <a
                  href="https://x.com/muiz_rexhepi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  X.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm font-normal text-slate-500">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Brand & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-8 pt-8 border-t border-slate-100">
          <a
            href="/"
            className="text-4xl font-bold font-serif tracking-tight text-slate-900 lowercase opacity-90 hover:opacity-100 transition-opacity"
          >
            {APP_NAME}
          </a>
          <p className="text-xs text-slate-400 font-normal">
            &copy; {new Date().getFullYear()} {APP_NAME}, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
