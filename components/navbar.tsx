"use client"; // 1. Important: This component uses useState, useEffect, and browser APIs (window, document), making it a Client Component.

import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Instagram, Twitter, Linkedin } from "lucide-react";
// 2. Use 'next/link' for client-side navigation instead of 'react-router-dom/Link'
import Link from "next/link";
// 3. Use 'next/navigation' for routing hooks
import { usePathname, useRouter } from "next/navigation";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  // 3. Replaced useNavigate with useRouter
  const router = useRouter();
  // 3. Replaced useLocation with usePathname
  const pathname = usePathname();

  // Optimized useEffect for scroll handling with useCallback for handleScroll
  const handleScroll = useCallback(() => {
    let lastScrollY = window.scrollY; // Use a local var or useRef if you need it across renders

    return () => {
      // Inner function for event listener
      const currentScrollY = window.scrollY;

      // Determine if scrolled for styling (background etc)
      setIsScrolled(currentScrollY > 50);

      // Determine visibility based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50 && !isMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };
  }, [isMenuOpen]); // Dependency on isMenuOpen is still needed

  useEffect(() => {
    // 4. Attach the event listener setup function
    const scrollHandler = handleScroll();
    window.addEventListener("scroll", scrollHandler);

    // Clean up
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [handleScroll]);

  // Lock body scroll when menu is open (No change needed)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  // 5. Modified handler to use Next.js routing and handle hash links
  const handleNavClick = (path: string, hash?: string) => {
    setIsMenuOpen(false);

    // For internal navigation, use router.push or Next's <Link>
    if (path.startsWith("/")) {
      // Next.js Link handles the primary path change.
      // We use router.push for the main navigation, which is equivalent to the old Link logic.
      router.push(path + (hash ? `#${hash}` : ""));

      // If it's the current page path, manually scroll to the hash.
      // Next.js Link scrolls to top by default on page navigation, but for same-page hash,
      // we might still need a manual scroll if router.push doesn't handle the hash fragment
      // automatically/immediately, especially if the target element isn't visible yet.
      if (path === pathname && hash) {
        // Using a short timeout to ensure the DOM is ready after state change (menu close)
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  const menuItems = [
    { label: "Home", path: "/", hash: "" },
    { label: "About Us", path: "/about", hash: "" },
    { label: "Case Studies", path: "/work", hash: "" },
    // 6. Next.js App Router treats hash links as client-side scroll targets.
    { label: "Results", path: "/", hash: "growth" },
    { label: "Service", path: "/", hash: "services" },
    { label: "Process", path: "/", hash: "process" },
    { label: "Pricing", path: "/", hash: "pricing" },
    { label: "Contact Us", path: "/contact", hash: "" },
  ];

  // Helper class for text color/blend mode
  // The logic remains the same, but 'location.pathname' is replaced by 'pathname'
  const isDarkBg =
    pathname === "/contact" ||
    pathname.includes("/work") ||
    pathname === "/about";
  const textClass =
    isScrolled && !isMenuOpen
      ? "text-black"
      : isDarkBg
        ? "text-black"
        : "text-black mix-blend-difference";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled && !isMenuOpen
            ? "bg-white/95 backdrop-blur-md py-4 border-b border-gray-100"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 relative flex justify-between items-center">
          {/* Left: Menu Trigger */}
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`group flex items-center gap-2 hover:opacity-70 transition-opacity relative z-50 ${textClass}`}
            >
              {/* ... (Hamburger icon logic remains the same) ... */}
              <div className="flex flex-col gap-[4px] items-start">
                <span
                  className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-[2px] bg-current transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
                ></span>
              </div>
              <span
                className={`font-bold text-xs uppercase tracking-[0.2em] ml-2 transition-all duration-300`}
              >
                {isMenuOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>

          {/* Center: Brand */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ${textClass}`}
          >
            {/* 7. Use Next.js Link component */}
            <Link
              href="/"
              className="font-display font-black text-2xl tracking-tighter uppercase transition-colors duration-300"
            >
              Casevia
            </Link>
          </div>

          {/* Right: CTA */}
          <div className="flex-1 flex justify-end z-50">
            <button
              // 8. Use router.push for imperative navigation
              onClick={() => router.push("/contact")}
              className={`flex items-center gap-2 font-bold text-xs uppercase tracking-[0.2em] group ${textClass}`}
            >
              <span className="hidden md:inline">Let's Talk</span>
              <div
                className={`w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 ${isScrolled && !isMenuOpen ? "" : "bg-white/10 backdrop-blur-sm"}`}
              >
                <ArrowRight className="w-3 h-3 group-hover:-rotate-45 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white text-black z-40 flex flex-col transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col h-full pt-32 pb-12">
          <div className="flex-1 flex flex-col md:flex-row">
            {/* Menu Links Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex flex-col gap-2">
                {menuItems.map((item, idx) => (
                  // 9. Use button and handleNavClick to ensure menu state is managed before navigation
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.path, item.hash)}
                    className="group flex items-start gap-3 w-max text-left py-1"
                    style={{
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition: `all 0.5s ease-out ${idx * 0.05 + 0.2}s`,
                    }}
                  >
                    <span className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:text-gray-400 transition-colors">
                      {item.label}
                    </span>
                    <span className="font-display text-sm font-medium text-gray-400 -mt-1 group-hover:text-black transition-colors">
                      0{idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Context/Image/Socials (No changes needed) */}
            <div className="hidden md:flex w-full md:w-1/2 flex-col justify-between items-end pl-12 border-l border-gray-100 my-12">
              <div className="text-right">
                <p className="font-display text-xl font-bold uppercase tracking-widest mb-2">
                  Berlin
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  EST. 2024
                </p>
              </div>

              <div className="w-full aspect-video bg-gray-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  // 10. For Next.js in production, you might replace this with the built-in <Image> component
                  // and configure it for domain optimization. Keeping simple <img> for direct conversion.
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                  alt="Office"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full flex justify-between items-end">
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
                <a
                  href="mailto:hello@casevia.io"
                  className="text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors"
                >
                  hello@casevia.io
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Footer (No changes needed) */}
          <div className="md:hidden mt-12 pt-8 border-t border-gray-100">
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Social:
              </span>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-black"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300 text-black"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
