"use client";

interface HeroAltProps {
  brand: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  redirectUrlPrimary: string;
  redirectUrlSecondary: string;
  iframeUrl?: string;
  imageUrl?: string;
}

export default function HeroAlt({
  brand,
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  redirectUrlPrimary,
  redirectUrlSecondary,
  iframeUrl,
  imageUrl,
}: HeroAltProps) {
  return (
    <section
      className="relative py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, white 0%, white 70%, rgb(20, 20, 20) 70%, rgb(20, 20, 20) 100%)",
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
            {headline}
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={redirectUrlPrimary}
              className="px-6 py-2.5 font-medium rounded-full transition-colors text-sm"
              style={{ backgroundColor: "#3b82f6", color: "white" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2563eb")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#3b82f6")
              }>
              {ctaPrimary}
            </a>

            <a
              href={redirectUrlSecondary}
              className="font-medium transition-colors text-sm hover:opacity-70"
              style={{ color: "#3b82f6" }}>
              {ctaSecondary}
            </a>
          </div>
        </div>

        {/* Hero Iframe (desktop) / Image (mobile) */}
        <div className="relative p-[2px] rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 animate-shimmer"
            style={{ backgroundSize: "200% 100%" }}></div>
          <div className="relative bg-white rounded-xl p-1">
            {/* Show iframe on desktop */}
            {iframeUrl && (
              <div className="relative hidden md:block bg-black rounded-xl overflow-hidden">
                <div className="w-full aspect-[16/9] relative">
                  <iframe
                    src={iframeUrl}
                    className="absolute top-0 left-0 rounded-xl"
                    style={{
                      width: "142.86%",
                      height: "142.86%",
                      transform: "scale(0.7)",
                      transformOrigin: "top left",
                      pointerEvents: "none",
                    }}
                    loading="eager"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{ pointerEvents: "auto" }}></div>
              </div>
            )}
            {/* Show image on mobile */}
            {imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={headline}
                className="md:hidden w-full h-auto rounded-xl object-cover"
              />
            )}
            {/* Fallback if no iframe or image */}
            {!iframeUrl && !imageUrl && (
              <div className="w-full aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                <span className="text-slate-400 text-lg font-medium">
                  Hero Demo
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
