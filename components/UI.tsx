import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-500 rounded-full font-bold tracking-tight active:scale-[0.96] overflow-hidden relative group";

  const variants = {
    primary:
      "bg-[#221221] text-white hover:bg-[#D1326E] px-10 py-4 shadow-2xl shadow-[#D1326E]/10",
    secondary:
      "bg-[#D1326E] text-white hover:opacity-90 px-10 py-4 shadow-xl shadow-[#D1326E]/20",
    outline:
      "bg-transparent border border-[#221221]/15 text-[#221221] hover:border-[#D1326E] hover:text-[#D1326E] px-10 py-4",
    link: "bg-transparent text-inherit hover:opacity-70 p-0 flex items-center gap-2 group w-auto",
  };

  const sizes = {
    sm: "text-sm px-6 py-3",
    md: "text-base px-10 py-4",
    lg: "text-lg px-12 py-6",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export const SectionTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <h2
    className={`text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight sm:tracking-tighter leading-[1.1] sm:leading-[0.9] text-gradient text-left break-words ${className}`}
  >
    {children}
  </h2>
);

export const CaseCard: React.FC<{
  title: string;
  subtitle: string;
  imageUrl: string;
  className?: string;
}> = ({ title, subtitle, imageUrl, className = "" }) => (
  <div
    className={`group relative flex-shrink-0 w-[85vw] md:w-[52vw] lg:w-[48vw] aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-slate-100 transition-all duration-1000 shadow-sm hover:shadow-2xl ${className}`}
  >
    <img
      src={imageUrl}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#221221]/80 via-[#221221]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white text-left translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out">
      <p className="text-2xl md:text-5xl font-normal tracking-tighter mb-6 leading-[1] max-w-lg">
        {title}
      </p>
      <div className="flex flex-wrap gap-2 mb-8 opacity-80">
        {subtitle.split("•").map((tag, idx) => (
          <span
            key={idx}
            className="px-4 py-1.5 rounded-full border border-white/30 text-[11px] font-semibold tracking-tight bg-white/5 backdrop-blur-xl"
          >
            {tag.trim()}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 text-sm font-bold tracking-tight opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
        View Project{" "}
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#221221] transition-all">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  </div>
);

export const NavArrows: React.FC<{
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}> = ({ onPrev, onNext, className = "" }) => (
  <div
    className={`flex items-center gap-2 glass rounded-full p-1.5 shadow-sm ${className}`}
  >
    <button
      onClick={onPrev}
      className="p-4 rounded-full hover:bg-[#221221] hover:text-white transition-all duration-500 active:scale-90 group"
      aria-label="Previous"
    >
      <ArrowLeft
        size={22}
        strokeWidth={1.5}
        className="group-hover:-translate-x-1 transition-transform"
      />
    </button>
    <button
      onClick={onNext}
      className="p-4 rounded-full hover:bg-[#221221] hover:text-white transition-all duration-500 active:scale-90 group"
      aria-label="Next"
    >
      <ArrowRight
        size={22}
        strokeWidth={1.5}
        className="group-hover:translate-x-1 transition-transform"
      />
    </button>
  </div>
);
