import { TEXT } from "@/lib/styles";

export default function Manifesto() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#221221] text-white overflow-hidden relative">
      {/* Glow Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-[#D1326E] blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-[#6326E1] blur-[150px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="max-w-screen-2xl mx-auto text-center relative z-10 flex flex-col items-center gap-10">
        <span className="text-xs md:text-sm font-bold text-[#D1326E] tracking-[0.4em] uppercase">
          Manifesto
        </span>
        <h2 className="text-4xl md:text-7xl lg:text-[6rem] font-medium leading-[1] tracking-tight mb-16 max-w-6xl mx-auto">
          Code is the <span className="text-[#D1326E] italic">leverage</span>{" "}
          that separates the disruptors from the disrupted.
        </h2>
        <div className="h-px w-32 bg-[#D1326E]/40 my-4" />

        <p className="text-xl md:text-2xl text-white/60 font-normal max-w-3xl mx-auto leading-relaxed">
          You don't need another freelancer. You need an architect. Casevia
          exists for the founders who understand that software is not an
          expense—it is the modern balance sheet.
        </p>
      </div>
    </section>
  );
}
