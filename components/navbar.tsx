"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";

import { APP_NAME, NAV_LINKS, MAIN_CTA_TEXT } from "../constants";
import { useWaitlistStore } from "@/lib/store";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  // 2. Call the hook to get the state/actions
  const openWaitlist = useWaitlistStore((state) => state.openWaitlist);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if navbar should be visible (scrolling up or at top)
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }

      // Track if we are scrolled down for styling changes
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Styles based on scroll state
  const navBgClass =
    isScrolled || !isHomepage
      ? "bg-slate-50/90 backdrop-blur-md shadow-sm py-3"
      : "bg-transparent py-5";

  // Text color needs to handle the transparent bg on dark hero vs white bg
  const textClass = isScrolled || !isHomepage ? "text-slate-900" : "text-white";

  // Primary Blue button style
  const buttonClass =
    isScrolled || !isHomepage
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-white text-slate-900 hover:bg-slate-100";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 transform ${
          isVisible && !isMobileMenuOpen
            ? "translate-y-0"
            : isMobileMenuOpen
              ? "translate-y-0"
              : "-translate-y-full"
        } ${navBgClass}`}
      >
        <nav
          className="flex items-center justify-between px-6 lg:px-8 max-w-7xl mx-auto"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            {/* The existing Logo/App Name link */}
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
              <span
                className={`text-2xl font-medium tracking-tight font-serif transition-colors lowercase ${textClass}`}
              >
                {APP_NAME}
              </span>
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 ${textClass}`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-normal transition-colors hover:opacity-70 ${textClass}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* Desktop CTA: Replace href with onClick and call openWaitlist */}
            <a
              // Removed href="#" to prevent page jump
              onClick={openWaitlist} // 3. Call openWaitlist on click
              className={`rounded-xl px-5 py-2 text-sm font-medium transition-all shadow-sm ${buttonClass} cursor-pointer`}
            >
              {MAIN_CTA_TEXT}
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile menu using Portal to avoid z-index/transform issues */}
      {isMobileMenuOpen &&
        createPortal(
          <div className="relative z-[100]" aria-modal="true">
            <div
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-slate-50 px-6 py-6 sm:max-w-sm shadow-xl border-l border-slate-100 transform transition-transform">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="text-3xl font-bold font-serif text-slate-900 lowercase">
                    {APP_NAME}
                  </span>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-xl p-2.5 text-slate-700 hover:bg-slate-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-8 flow-root">
                <div className="-my-6 divide-y divide-slate-200">
                  <div className="space-y-2 py-6">
                    {NAV_LINKS.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="-mx-3 block rounded-xl px-3 py-2 text-base font-normal leading-7 text-slate-900 hover:bg-slate-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    {/* Mobile CTA: Add onClick to button, call openWaitlist and close menu */}
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false); // Close the menu first
                        openWaitlist(); // 3. Then call openWaitlist
                      }}
                      className="w-full rounded-xl bg-blue-600 px-3.5 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                    >
                      {MAIN_CTA_TEXT}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Navbar;
