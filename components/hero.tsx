import React from "react";
import { ArrowRight } from "lucide-react";
import { HERO_COPY, MAIN_CTA_TEXT } from "../constants";
import { useWaitlistStore } from "@/lib/store";

const Hero: React.FC = () => {
  const companies = ["Insyllium", "Insylink", "Gobusly", "Menyro", "Ramp"];
  const openWaitlist = useWaitlistStore((state) => state.openWaitlist);

  return (
    <div className="relative isolate min-h-screen flex flex-col justify-center overflow-hidden bg-transparent md:bg-[#1e3266]">
      {/* Mobile Background SVG - FIXED: Increased scale and translation to cover sub-pixel gaps */}
      <div className="absolute inset-0 md:hidden z-0 pointer-events-none">
        <img
          src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='390' height='844' preserveAspectRatio='none' viewBox='0 0 390 844'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1080%26quot%3b)' fill='none'%3e%3crect width='390' height='844' x='0' y='0' fill='%231e3266'%3e%3c/rect%3e%3cpath d='M409.5 844L0 844 L0 543.75Q18.63 529.88%2c 32.5 548.52Q53.51 550.03%2c 52 571.05Q35.59 522.14%2c 84.5 505.73Q145.01 533.74%2c 117 594.25Q102.68 547.43%2c 149.5 533.11Q151.94 503.05%2c 182 505.48Q237.91 541.89%2c 201.5 597.8Q181.49 545.28%2c 234 525.27Q237.38 496.15%2c 266.5 499.53Q289.48 503%2c 286 525.98Q325.68 546.16%2c 305.5 585.85Q284.33 532.18%2c 338 511.02Q341.9 495.42%2c 357.5 499.32Q425.85 548.17%2c 377 616.52Q375.25 582.27%2c 409.5 580.52z' fill='%23182f5d'%3e%3c/path%3e%3cpath d='M403 844L0 844 L0 584.78Q42.88 608.16%2c 19.5 651.05Q40.88 652.93%2c 39 674.31Q58.12 673.93%2c 58.5 693.05Q69.09 671.13%2c 91 681.72Q95.07 666.29%2c 110.5 670.35Q93.57 633.92%2c 130 616.99Q157.08 624.57%2c 149.5 651.64Q192.19 661.83%2c 182 704.52Q152.98 656%2c 201.5 626.97Q199.31 592.28%2c 234 590.09Q299.44 636.03%2c 253.5 701.46Q233.78 649.25%2c 286 629.53Q290.03 601.06%2c 318.5 605.09Q328.24 582.33%2c 351 592.06Q391.64 600.2%2c 383.5 640.84Q381.39 619.24%2c 403 617.13z' fill='%2325467d'%3e%3c/path%3e%3cpath d='M409.5 844L0 844 L0 678.31Q22.49 668.3%2c 32.5 690.79Q95.17 720.96%2c 65 783.64Q51.89 738.03%2c 97.5 724.93Q95.5 703.42%2c 117 701.42Q121.3 673.22%2c 149.5 677.52Q178.82 687.34%2c 169 716.65Q208.26 736.41%2c 188.5 775.67Q211.45 766.12%2c 221 789.07Q181.13 729.7%2c 240.5 689.83Q291.2 721.03%2c 260 771.72Q240.42 719.64%2c 292.5 700.07Q295.34 683.41%2c 312 686.25Q374.05 728.8%2c 331.5 790.84Q305.23 745.07%2c 351 718.79Q382.03 730.32%2c 370.5 761.34Q335.31 706.65%2c 390 671.47Q424.5 686.48%2c 409.5 720.98z' fill='%23356cb1'%3e%3c/path%3e%3cpath d='M403 844L0 844 L0 824.32Q40.78 832.6%2c 32.5 873.38Q7.6 815.98%2c 65 791.08Q115.05 808.63%2c 97.5 858.68Q66.73 795.41%2c 130 764.64Q180.81 782.95%2c 162.5 833.76Q153.32 792.08%2c 195 782.89Q201.42 756.81%2c 227.5 763.23Q289.94 806.17%2c 247 868.62Q233.27 835.39%2c 266.5 821.66Q269.88 805.54%2c 286 808.93Q272.95 776.38%2c 305.5 763.32Q362.21 800.53%2c 325 857.23Q316.1 828.83%2c 344.5 819.93Q340 795.92%2c 364 791.42Q357.59 765.5%2c 383.5 759.09Q449.47 805.56%2c 403 871.53z' fill='%23f8fafc'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1080'%3e%3crect width='390' height='844' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"
          className="w-full h-full object-cover object-bottom scale-[1.02] origin-bottom translate-y-[1px]"
          alt="Background"
        />
      </div>

      {/* Desktop Background SVG */}
      <div className="absolute inset-0 hidden md:block z-0 pointer-events-none">
        <img
          src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1008%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='%231e3266'%3e%3c/rect%3e%3cpath d='M2080 1080L0 1080 L0 705.29Q56.22 601.51%2c 160 657.73Q230.26 567.99%2c 320 638.25Q390.01 548.26%2c 480 618.27Q522.28 564.55%2c 576 606.82Q650.25 521.08%2c 736 595.33Q767.86 531.19%2c 832 563.05Q906.41 477.46%2c 992 551.87Q1087.35 551.22%2c 1088 646.57Q1198.26 596.84%2c 1248 707.1Q1319.55 618.65%2c 1408 690.21Q1419.91 542.13%2c 1568 554.04Q1609.47 499.51%2c 1664 540.98Q1759.13 476.11%2c 1824 571.24Q1887.65 538.89%2c 1920 602.54Q2017.28 539.82%2c 2080 637.09z' fill='%23182f5d'%3e%3c/path%3e%3cpath d='M1984 1080L0 1080 L0 818.55Q13.52 672.07%2c 160 685.59Q215.31 644.9%2c 256 700.21Q333.84 682.05%2c 352 759.88Q451.21 699.09%2c 512 798.29Q532.88 723.17%2c 608 744.06Q666.13 706.18%2c 704 764.31Q817.11 717.41%2c 864 830.52Q889.37 759.89%2c 960 785.26Q996.88 726.14%2c 1056 763.03Q1134.96 746%2c 1152 824.96Q1162.06 739.02%2c 1248 749.08Q1322.09 663.17%2c 1408 737.26Q1445.01 678.27%2c 1504 715.28Q1633.47 684.75%2c 1664 814.22Q1722.8 713.02%2c 1824 771.82Q1898.14 685.97%2c 1984 760.11z' fill='%2325467d'%3e%3c/path%3e%3cpath d='M1984 1080L0 1080 L0 958.54Q15.3 877.84%2c 96 893.13Q118.7 819.83%2c 192 842.53Q283.93 774.46%2c 352 866.39Q377.93 796.32%2c 448 822.24Q505.4 783.64%2c 544 841.05Q646.52 847.57%2c 640 950.08Q732.5 882.58%2c 800 975.07Q823.9 902.98%2c 896 926.88Q932.92 803.8%2c 1056 840.71Q1097.68 786.39%2c 1152 828.07Q1243.59 759.65%2c 1312 851.24Q1449.63 828.87%2c 1472 966.49Q1473.66 872.15%2c 1568 873.82Q1642.17 787.99%2c 1728 862.16Q1812.18 850.34%2c 1824 934.52Q1934.67 885.19%2c 1984 995.86z' fill='%23356cb1'%3e%3c/path%3e%3cpath d='M1952 1080L0 1080 L0 1109.9Q2.64 952.55%2c 160 955.19Q278.77 977.96%2c 256 1096.73Q346.27 1027%2c 416 1117.27Q464.72 1005.99%2c 576 1054.7Q616.5 935.2%2c 736 975.69Q799.56 943.25%2c 832 1006.81Q946.65 961.46%2c 992 1076.11Q1025.07 949.17%2c 1152 982.24Q1194.95 929.19%2c 1248 972.14Q1313.26 941.4%2c 1344 1006.67Q1442 1008.67%2c 1440 1106.67Q1421.38 992.06%2c 1536 973.44Q1607.19 884.63%2c 1696 955.83Q1778.92 942.75%2c 1792 1025.67Q1881.86 955.53%2c 1952 1045.39z' fill='%23f8fafc'%3e%3c/path%3e%3cpath d='M1952 1080L0 1080 L0 1109.9Q2.64 952.55%2c 160 955.19Q278.77 977.96%2c 256 1096.73Q346.27 1027%2c 416 1117.27Q464.72 1005.99%2c 576 1054.7Q616.5 935.2%2c 736 975.69Q799.56 943.25%2c 832 1006.81Q946.65 961.46%2c 992 1076.11Q1025.07 949.17%2c 1152 982.24Q1194.95 929.19%2c 1248 972.14Q1313.26 941.4%2c 1344 1006.67Q1442 1008.67%2c 1440 1106.67Q1421.38 992.06%2c 1536 973.44Q1607.19 884.63%2c 1696 955.83Q1778.92 942.75%2c 1792 1025.67Q1881.86 955.53%2c 1952 1045.39z' fill='%23f8fafc'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1008'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"
          className="w-full h-full object-cover object-bottom translate-y-px"
          alt="Background"
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-8 pb-10 sm:pb-24 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* KPI Badge */}
          <div className="mb-6 md:mb-8 flex justify-center fade-in">
            <div className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              {/* Rotating Gradient Border */}
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1e3266_0%,#93c5fd_50%,#1e3266_100%)]" />

              {/* Content Mask */}
              <div className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#1e3266]/90 px-4 py-1.5 text-xs sm:text-sm leading-6 text-blue-100 backdrop-blur-md cursor-default ring-1 ring-white/10">
                <span className="font-medium text-white">{HERO_COPY.kpi}</span>
              </div>
            </div>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight text-white mb-6 md:mb-8 drop-shadow-sm leading-[1.2em] sm:leading-[1em] font-serif fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Proof your pipeline with real customer stories.{" "}
            <span className="relative inline-block">
              Instantly.
              {/* Organic Marker Underline */}
              <svg
                viewBox="0 0 300 20"
                className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4 text-blue-400 opacity-90"
                preserveAspectRatio="none"
              >
                <path
                  d="M5 12 C 60 4, 140 0, 290 8 C 240 6, 150 5, 20 15"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className="mt-4 md:mt-6 text-base sm:text-xl leading-[1.4em] text-blue-100 max-w-2xl mx-auto mb-8 md:mb-10 text-pretty fade-in font-normal"
            style={{ animationDelay: "0.2s" }}
          >
            One interview becomes proof your reps can actually use. Case
            studies, one-pagers, and web pages in minutes.
          </p>

          <div
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={openWaitlist}
              className="rounded-xl bg-white px-8 py-3 text-base font-medium text-slate-900 shadow-xl hover:bg-slate-100 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              {MAIN_CTA_TEXT}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#pricing"
              className="rounded-xl bg-transparent ring-1 ring-white/30 px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-all w-full sm:w-auto justify-center text-center"
            >
              View pricing
            </a>
          </div>

          {/* Clean Logo Strip */}
          <div
            className="mt-12 sm:mt-18 pb-4 fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-6 opacity-80">
              {companies.map((company) => (
                <span
                  key={company}
                  className="text-lg font-bold text-white tracking-tight mix-blend-overlay hover:opacity-100 transition-opacity cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
