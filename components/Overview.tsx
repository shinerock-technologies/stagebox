"use client";

import { getSectionLabelColor } from "@/lib/sectionColors";

interface OverviewProps {
  colorIndex: number;
  label?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  ipadUrl: string;
}

export default function Overview({
  colorIndex,
  label,
  title,
  description,
  ctaText,
  ctaUrl,
  ipadUrl,
}: OverviewProps) {
  return (
    <section
      id="overview"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
      style={{ backgroundColor: "rgb(20, 20, 20)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div>
            {label && (
              <p
                className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide"
                style={{ color: getSectionLabelColor(colorIndex) }}>
                {label}
              </p>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-5 sm:mb-6 lg:mb-8 leading-relaxed">
              {description}
            </p>
            <a
              href={ctaUrl}
              className="font-medium transition-colors text-sm hover:opacity-70"
              style={{ color: "#3b82f6" }}>
              {ctaText} →
            </a>
          </div>

          {/* iPad mockup only */}
          <div className="relative w-full min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] flex items-center justify-center">
            {/* iPad - Landscape */}
            <div className="w-[360px] sm:w-[440px] md:w-[520px] lg:w-[600px]">
              <div className="relative bg-gradient-to-br from-slate-400 via-slate-300 to-slate-500 rounded-[2.5rem] p-2 shadow-2xl border-2 border-slate-500/50">
                {/* iPad screen - landscape */}
                <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[4/3]">
                  <div className="w-full h-full scale-[0.65] origin-top-left">
                    <iframe
                      src={ipadUrl}
                      className="w-[153.85%] h-[153.85%] border-0 pointer-events-none"
                      title="iPad Demo"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full -z-10 scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
