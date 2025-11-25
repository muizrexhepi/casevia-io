import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { Menu, X } from "lucide-react";

export const Navbar = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? "bg-white/95 backdrop-blur-md border-zinc-200 py-4" : "bg-white/0 border-transparent py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group z-50 relative">
            <Logo className="text-2xl" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Pricing
            </a>
            <div className="h-4 w-px bg-zinc-200"></div>
            <a
              href="#"
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              Log in
            </a>
            <button
              onClick={onOpenWaitlist}
              className="bg-zinc-900 text-white px-6 py-2.5 text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 active:translate-y-0.5 rounded-none"
            >
              Sign up
            </button>
          </div>

          <button
            className="md:hidden p-2 text-zinc-900 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-32 px-6 animate-fade-in md:hidden">
          <div className="flex flex-col gap-8">
            <a
              href="#features"
              className="text-4xl font-display font-bold text-zinc-900 tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-4xl font-display font-bold text-zinc-900 tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="text-4xl font-display font-bold text-zinc-900 tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <div className="h-px bg-zinc-100 w-full my-4"></div>
            {/* <a
              href="#"
              className="text-xl font-medium text-zinc-600"
              onClick={() => setIsOpen(false)}
            >
              Log in
            </a> */}
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenWaitlist();
              }}
              className="bg-zinc-900 text-white py-3 text-lg font-bold w-full rounded-none mt-4"
            >
              Sign up to Waitlist
            </button>
          </div>

          <div className="mt-auto mb-12 text-zinc-400 text-sm">
            © 2025 Casevia Inc.
          </div>
        </div>
      )}
    </>
  );
};
