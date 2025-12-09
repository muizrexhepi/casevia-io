import React from "react";
// Assuming APP_NAME is defined elsewhere, but for the footer text
// we'll use 'torch' as seen in the image's design style,
// and the copyright will use 'Casevia' as requested.

// Note: I will use 'Casevia' for the bottom left logo text and copyright text,
// but the *structure and category names* in the link grid will follow the image.

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Update: Simpler background and less padding on the bottom
    <footer className="bg-slate-50 text-slate-900 pt-24 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Top Grid: Links - Simplified structure to match the image */}
        {/* The image shows a four-column layout with very specific, brief links */}
        <div className="flex justify-start space-x-20 mb-24">
          {/* COMPANY */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              COMPANY
            </h4>
            <ul className="space-y-1 text-sm font-normal text-slate-900">
              {/* Updated text to match image: Careers & Contact */}
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Careers
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

          {/* PRODUCT */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              PRODUCT
            </h4>
            <ul className="space-y-1 text-sm font-normal text-slate-900">
              {/* Updated text to match image: App */}
              <li>
                <a
                  href="#app-link"
                  className="hover:text-blue-600 transition-colors"
                >
                  App
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              SOCIAL
            </h4>
            <ul className="space-y-1 text-sm font-normal text-slate-900">
              {/* Updated text to match image: X.com & Discord (replacing LinkedIn) */}
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
                {/* Assuming this is a link to your Discord */}
                <a
                  href="#discord-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              LEGAL
            </h4>
            <ul className="space-y-1 text-sm font-normal text-slate-900">
              {/* Text matches your original, just updated styling */}
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

        <div className="flex flex-wrap gap-2 justify-between items-center">
          <a
            href="/"
            className="text-5xl font-normal font-serif tracking-tighter text-slate-900 lowercase"
          >
            casevia
          </a>
          <p className="text-xs text-slate-400 font-normal">
            &copy; {currentYear} Casevia.io, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
