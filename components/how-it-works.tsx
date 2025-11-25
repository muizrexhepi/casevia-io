import { ShieldCheck } from "lucide-react";

export const UseCases = () => {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-display font-bold text-zinc-900 mb-4">
            Built for every stage of growth.
          </h2>
          <p className="text-lg text-zinc-500 font-light leading-relaxed">
            From solo founders to global enterprises, Casevia scales with your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Freelancers */}
          <div className="group bg-white border border-zinc-200 p-0 relative overflow-hidden hover:border-zinc-300 transition-all duration-300 h-[340px] flex flex-col hover:shadow-lg hover:-translate-y-1 rounded-none">
            <div className="p-8 relative z-10">
              <h3 className="font-bold text-lg text-zinc-900 mb-2 font-display">
                Freelancers
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Automate your portfolio and close more retainers.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden bg-zinc-50/50 group-hover:bg-white transition-colors border-t border-zinc-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.1),transparent_70%)] opacity-100 lg:opacity-20 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-10 left-8 right-8 bottom-0">
                <div
                  className="bg-white border border-zinc-200 shadow-sm w-full h-full p-4 lg:animate-none lg:group-hover:animate-float animate-float rounded-none"
                  style={{ animationDuration: "6s" }}
                >
                  <div className="flex gap-4 mb-4">
                    <div className="w-8 h-8 bg-zinc-100 rounded-none"></div>
                    <div className="space-y-1.5">
                      <div className="w-16 h-2 bg-zinc-100 rounded-none"></div>
                      <div className="w-10 h-2 bg-zinc-50 rounded-none"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-zinc-50 rounded-none"></div>
                    <div className="w-full h-2 bg-zinc-50 rounded-none"></div>
                    <div className="w-2/3 h-2 bg-zinc-50 rounded-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Startups */}
          <div className="group bg-white border border-zinc-200 p-0 relative overflow-hidden hover:border-zinc-300 transition-all duration-300 h-[340px] flex flex-col hover:shadow-lg hover:-translate-y-1 rounded-none">
            <div className="p-8 relative z-10">
              <h3 className="font-bold text-lg text-zinc-900 mb-2 font-display">
                Startups
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Build social proof without a marketing team.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden bg-zinc-50/50 group-hover:bg-white transition-colors border-t border-zinc-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_70%)] opacity-100 lg:opacity-20 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-10 left-8 right-8 bottom-0 flex items-end gap-3 px-2 pb-0">
                {[30, 50, 40, 70, 60, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-zinc-200 lg:bg-zinc-200 group-hover:bg-emerald-500 transition-colors duration-500 relative group/bar rounded-t-none animate-pulse-slow lg:animate-none lg:group-hover:animate-pulse-slow"
                    style={{ height: `${h}%`, animationDelay: `${i * 0.2}s` }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-emerald-500 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Agencies */}
          <div className="group bg-white border border-zinc-200 p-0 relative overflow-hidden hover:border-zinc-300 transition-all duration-300 h-[340px] flex flex-col hover:shadow-lg hover:-translate-y-1 rounded-none">
            <div className="p-8 relative z-10">
              <h3 className="font-bold text-lg text-zinc-900 mb-2 font-display">
                Agencies
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Scale case study production for every client.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden bg-zinc-50/50 group-hover:bg-white transition-colors border-t border-zinc-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,rgba(245,158,11,0.1),transparent_70%)] opacity-100 lg:opacity-20 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-10 left-0 right-0 bottom-0 flex justify-center">
                <div
                  className="w-32 h-40 bg-white border border-zinc-200 shadow-sm relative top-4 transition-all duration-500 rounded-none animate-float lg:animate-none lg:group-hover:animate-float"
                  style={{ animationDuration: "8s" }}
                >
                  <div
                    className="absolute -top-4 -left-4 w-32 h-40 bg-zinc-50 border border-zinc-200 shadow-sm z-[-1] transition-all duration-500 rounded-none animate-float lg:animate-none lg:group-hover:animate-float"
                    style={{ animationDuration: "8s", animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Enterprise */}
          <div className="group bg-white border border-zinc-200 p-0 relative overflow-hidden hover:border-zinc-300 transition-all duration-300 h-[340px] flex flex-col hover:shadow-lg hover:-translate-y-1 rounded-none">
            <div className="p-8 relative z-10">
              <h3 className="font-bold text-lg text-zinc-900 mb-2 font-display">
                Enterprise
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Secure, compliant workflows for large operations.
              </p>
            </div>
            <div className="flex-1 relative overflow-hidden bg-zinc-50/50 group-hover:bg-white transition-colors border-t border-zinc-100 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.1),transparent_70%)] opacity-100 lg:opacity-20 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-20 h-20 border-2 border-zinc-200 rounded-full flex items-center justify-center transition-all duration-500 group-hover:border-pink-500 group-hover:scale-110 border-pink-500 scale-110 lg:border-zinc-200 lg:scale-100">
                  <ShieldCheck
                    size={32}
                    className="text-zinc-300 transition-colors duration-500 group-hover:text-pink-500 text-pink-500 lg:text-zinc-300"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-dashed border-zinc-200 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-pink-200 border-pink-200 lg:border-zinc-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
