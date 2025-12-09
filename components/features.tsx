import React from "react";
import {
  Shield,
  FileText,
  CheckCircle,
  Play,
  Database,
  Linkedin,
  Globe,
  Search,
} from "lucide-react";

const FeaturesZigZag: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-32 relative z-10">
        {/* Feature 1: Verification Engine */}
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative h-[450px] flex items-center justify-center w-full">
            {/* Cloud Blob 1 (Static) */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <svg
                width="560"
                height="462"
                viewBox="0 0 560 462"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[130%] h-[130%] text-blue-100 opacity-80 animate-[float_6s_ease-in-out_infinite]"
              >
                <path
                  d="M429.675 12.3711C475.875 36.1711 498.775 101.671 523.475 168.671C548.275 235.771 574.875 304.371 548.975 347.071C522.975 389.871 444.475 406.771 385.075 424.171C325.575 441.471 285.275 459.271 243.075 461.671C200.975 464.171 157.075 451.171 109.075 430.171C61.0754 409.071 8.8754 379.871 1.0754 340.071C-6.7246 300.171 29.9754 249.671 44.4754 187.971C58.9754 126.171 51.3754 53.2711 81.1754 24.1711C110.875 -5.02885 177.875 9.47115 246.075 7.87115C314.275 6.27115 383.575 -11.5289 429.675 12.3711Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Illustration Container */}
            <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-slate-200/60 overflow-hidden flex flex-col">
              {/* Window Header */}
              <div className="h-10 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between px-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                  <Shield size={10} />
                  <span>Trust_Engine.core</span>
                </div>
              </div>

              <div className="flex-1 flex relative">
                {/* Sidebar */}
                <div className="w-16 border-r border-slate-100 bg-slate-50/30 flex flex-col items-center py-4 gap-4 hidden sm:flex">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <Search size={14} />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white text-slate-400 flex items-center justify-center border border-slate-100">
                    <FileText size={14} />
                  </div>
                  <div className="mt-auto w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center border border-green-100">
                    <CheckCircle size={14} />
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 relative">
                  {/* Scanning Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-20 animate-[scan_4s_ease-in-out_infinite] opacity-50 pointer-events-none"></div>

                  <div className="space-y-6">
                    {/* Audio Source Block */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-sm">
                        <Play size={12} className="text-white ml-0.5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-slate-700">
                            Source_Audio.mp3
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            00:14:32
                          </span>
                        </div>
                        <div className="flex gap-0.5 h-3 items-end opacity-50">
                          {[
                            4, 7, 5, 8, 4, 6, 3, 5, 8, 9, 4, 6, 7, 4, 3, 5, 2,
                            4, 6, 8, 5, 3, 6, 4,
                          ].map((h, i) => (
                            <div
                              key={i}
                              className={`w-1 rounded-sm ${i > 10 && i < 18 ? "bg-blue-500" : "bg-slate-300"}`}
                              style={{ height: `${h * 10}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3">
                      <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="relative p-3 rounded-lg border border-blue-100 bg-blue-50/20">
                        <p className="text-sm text-slate-700 leading-relaxed font-medium">
                          "We saw a{" "}
                          <span className="bg-blue-100 text-blue-800 px-1 py-0.5 rounded border border-blue-200">
                            40% increase
                          </span>{" "}
                          in pipeline velocity immediately."
                        </p>

                        {/* Floating Verification Badge */}
                        <div className="absolute -right-2 -top-3 bg-white pl-1.5 pr-2.5 py-1 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                            <CheckCircle size={10} className="text-white" />
                          </div>
                          <span className="text-[10px] font-bold text-slate-700">
                            VERIFIED
                          </span>
                        </div>
                      </div>
                      <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-6">
              Zero Hallucinations
            </div> */}
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 font-serif leading-[1.2em] sm:leading-[1em]">
              Capture & Extract.
              <br />
              No hallucinations.
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-[1.3em] mb-8">
              Your buyers don't trust generic marketing copy. Casevia scans your
              raw interviews, extracts key ROI claims, and ties every quote back
              to the original audio timestamp.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "100% auditable source material",
                "Speaker identification & attribution",
                "Context-aware quote trimming",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-normal"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature 2: Multi-Format Velocity */}
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 font-serif leading-[1.2em] sm:leading-[1em]">
              One interview. <br />
              Endless assets.
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-[1.3em] mb-8">
              Stop bottling up your best stories in a single PDF. Casevia
              instantly remixes your verified narrative into every format your
              sales team needs.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "SEO-optimized web pages",
                "One-pagers (PDF)",
                "LinkedIn carousels",
                "Internal battlecards",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-normal"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[450px] flex items-center justify-center w-full">
            {/* Cloud Blob 2 (Static) */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <svg
                width="560"
                height="462"
                viewBox="0 0 560 462"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[145%] h-[145%] text-blue-100 opacity-80 transform rotate-180 scale-x-[-1] animate-[float_8s_ease-in-out_infinite]"
              >
                <path
                  d="M429.675 12.3711C475.875 36.1711 498.775 101.671 523.475 168.671C548.275 235.771 574.875 304.371 548.975 347.071C522.975 389.871 444.475 406.771 385.075 424.171C325.575 441.471 285.275 459.271 243.075 461.671C200.975 464.171 157.075 451.171 109.075 430.171C61.0754 409.071 8.8754 379.871 1.0754 340.071C-6.7246 300.171 29.9754 249.671 44.4754 187.971C58.9754 126.171 51.3754 53.2711 81.1754 24.1711C110.875 -5.02885 177.875 9.47115 246.075 7.87115C314.275 6.27115 383.575 -11.5289 429.675 12.3711Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Central Hub */}
            <div className="relative z-10 w-full max-w-lg flex flex-col items-center justify-center">
              {/* Central Core */}
              <div className="relative z-20 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-blue-100 mb-8">
                <div className="absolute inset-0 bg-blue-50 rounded-2xl transform rotate-6 scale-90 -z-10"></div>
                <Database size={32} className="text-blue-600" />
                <div className="absolute -bottom-3 px-2 py-0.5 bg-slate-800 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                  Master
                </div>
              </div>

              {/* Connection Lines */}
              <div className="absolute top-1/2 left-1/2 w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent -translate-x-1/2 -translate-y-12"></div>
              <div className="absolute top-1/2 left-1/2 w-[1px] h-full max-h-[200px] bg-gradient-to-b from-transparent via-slate-300 to-transparent -translate-x-1/2 -translate-y-1/2"></div>

              {/* Satellite Cards */}
              <div className="grid grid-cols-3 gap-4 w-full">
                {/* Card 1: Web */}
                <div className="bg-white p-4 h-fit rounded-xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                    <Globe size={18} />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-slate-800">
                      Web Page
                    </div>
                    <div className="text-[10px] text-slate-400">SEO Ready</div>
                  </div>
                </div>

                {/* Card 2: PDF */}
                <div className="bg-white p-4 rounded-xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center gap-3 mt-8">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <FileText size={18} />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-slate-800">
                      PDF Asset
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Print Ready
                    </div>
                  </div>
                </div>

                {/* Card 3: Social */}
                <div className="h-fit bg-white p-4 rounded-xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Linkedin size={18} />
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold text-slate-800">
                      Social
                    </div>
                    <div className="text-[10px] text-slate-400">Carousel</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Pipeline Integration */}
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative h-[450px] flex items-center justify-center w-full">
            {/* Cloud Blob 3 (Static) */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <svg
                width="560"
                height="462"
                viewBox="0 0 560 462"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[140%] h-[140%] text-blue-100 opacity-80 transform rotate-90 animate-[float_7s_ease-in-out_infinite]"
              >
                <path
                  d="M429.675 12.3711C475.875 36.1711 498.775 101.671 523.475 168.671C548.275 235.771 574.875 304.371 548.975 347.071C522.975 389.871 444.475 406.771 385.075 424.171C325.575 441.471 285.275 459.271 243.075 461.671C200.975 464.171 157.075 451.171 109.075 430.171C61.0754 409.071 8.8754 379.871 1.0754 340.071C-6.7246 300.171 29.9754 249.671 44.4754 187.971C58.9754 126.171 51.3754 53.2711 81.1754 24.1711C110.875 -5.02885 177.875 9.47115 246.075 7.87115C314.275 6.27115 383.575 -11.5289 429.675 12.3711Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* CRM Interface Mockup */}
            <div className="relative z-10 bg-white w-full max-w-md rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden">
              {/* Navbar */}
              <div className="bg-slate-900 px-4 py-3 flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                </div>
                <div className="h-4 w-[1px] bg-slate-700"></div>
                <div className="flex gap-3">
                  <div className="w-16 h-2 bg-slate-700 rounded-sm"></div>
                  <div className="w-12 h-2 bg-slate-700 rounded-sm"></div>
                </div>
              </div>

              <div className="flex h-64 bg-slate-50">
                {/* Sidebar */}
                <div className="w-12 border-r border-slate-200 bg-white hidden sm:block"></div>

                {/* Deal View */}
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        Acme Corp Expansion
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <span>$42,000</span>
                        <span>•</span>
                        <span>Qualified Lead</span>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded border border-green-100">
                      80% Prob
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0"></div>
                      <div className="space-y-2 w-full">
                        <div className="h-2 w-20 bg-slate-200 rounded"></div>
                        <div className="h-2 w-full bg-slate-100 rounded"></div>
                      </div>
                    </div>

                    {/* Casevia Injection Widget */}
                    <div className="relative ml-4 pl-6 border-l-2 border-blue-100 py-2">
                      <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      </div>

                      <div className="bg-white p-3 rounded-lg border border-blue-100 shadow-sm cursor-pointer hover:border-blue-300 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                              CASEVIA AI
                            </span>
                            <span className="text-[10px] text-slate-400">
                              Just now
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-700 font-medium mb-2">
                          Relevant case study found:{" "}
                          <span className="text-slate-900">
                            "How we cut churn by 15%"
                          </span>
                        </p>
                        <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold hover:underline">
                          <FileText size={12} />
                          Attach to email
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 font-serif leading-[1.2em] sm:leading-[1em]">
              Deliver & Measure.
              <br />
              Close the loop.
            </h2>
            <p className="text-base md:text-lg text-slate-700 leading-[1.3em] mb-8">
              Proof only works if sales uses it. Embed assets directly into
              deals, export to your CRM, and track which stories are actually
              driving revenue with our Proof Intelligence dashboard.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "CRM Export (HubSpot / Salesforce)",
                "Identify proof coverage gaps",
                "Track asset usage by rep",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-slate-700 font-normal"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">{item}</span>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesZigZag;
