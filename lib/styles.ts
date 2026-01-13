// lib/styles.ts

export const TEXT = {
  // LABELS: The small text above headings.
  // Changed to "text-sm" and standard pink for immediate recognition.
  label:
    "text-xs md:text-sm font-bold text-[#D1326E] tracking-[0.15em] uppercase mb-4 block",

  // HERO HEADER: The massive text at the top.
  h1: "text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-medium leading-[1.05] tracking-tight text-gradient",

  // SECTION HEADERS: Used for "Global Nexus", "Technical Investment", etc.
  // Standardized to 5xl/6xl.
  sectionTitle:
    "text-4xl md:text-6xl font-normal tracking-tight text-[#221221] leading-[1.1] mb-6 text-gradient",

  // SUB-HEADERS: Used inside cards (e.g. "Logic Forge")
  h3: "text-2xl md:text-3xl font-medium tracking-tight text-[#221221]",

  // BODY TEXT: Standardized opacity and leading for readability.
  body: "text-lg md:text-[1.15rem] lg:text-[1.3rem] text-[#4A1D3A]/80 font-normal leading-[1.6]",

  // LINKS: Standardized hover effects.
  link: "text-[#D1326E] text-base font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 tracking-tight cursor-pointer mt-4",
};
