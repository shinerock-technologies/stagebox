"use client";

import { getSectionLabelColor } from "@/lib/sectionColors";

interface HeroSecondaryAltAltProps {
  colorIndex: number;
  label?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  ipadUrl: string;
  iphoneUrl: string;
}

export default function HeroSecondaryAltAlt({
  colorIndex,
  label,
  title,
  description,
  ctaText,
  ctaUrl,
  ipadUrl,
  iphoneUrl,
}: HeroSecondaryAltAltProps) {
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

          {/* Multi-device mockup - iPad Landscape + iPhone */}
          <div className="relative w-full min-h-[450px] sm:min-h-[500px] lg:min-h-[550px]">
            {/* iPad - Landscape, behind iPhone, larger */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[360px] sm:w-[440px] md:w-[520px] lg:w-[600px] opacity-90">
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
              {/* iPad home button - right side in landscape */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-slate-500/40"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-400/20 blur-3xl rounded-full -z-10 scale-110"></div>
            </div>

            {/* iPhone - Portrait, front and far right side, smaller */}
            <div className="absolute -right-4 sm:-right-6 md:-right-8 bottom-0 w-[130px] sm:w-[155px] md:w-[175px] lg:w-[195px] z-10">
              {/* iPhone outer frame */}
              <div className="relative bg-gradient-to-br from-slate-400 via-slate-300 to-slate-500 rounded-[3rem] p-2 shadow-2xl border-2 border-slate-500/50">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-3xl z-10 border-t-2 border-slate-500/50"></div>

                {/* Screen container */}
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                  {/* Status bar overlay */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none"></div>

                  {/* Iframe */}
                  <div className="w-full h-full scale-[0.65] origin-top-left">
                    <iframe
                      src={iphoneUrl}
                      className="w-[153.85%] h-[153.85%] border-0 pointer-events-none"
                      title="iPhone Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Side buttons */}
              <div className="absolute left-0 top-20 w-1 h-10 bg-slate-400 rounded-r-sm -translate-x-full"></div>
              <div className="absolute left-0 top-32 w-1 h-12 bg-slate-400 rounded-r-sm -translate-x-full"></div>
              <div className="absolute left-0 top-48 w-1 h-12 bg-slate-400 rounded-r-sm -translate-x-full"></div>
              <div className="absolute right-0 top-28 w-1 h-16 bg-slate-400 rounded-l-sm translate-x-full"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-400/30 blur-3xl rounded-full -z-10 scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
