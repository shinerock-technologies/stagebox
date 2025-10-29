"use client";

interface NavProps {
  brand: string;
  ctaText: string;
  ctaUrl: string;
}

export default function Nav({ brand, ctaText, ctaUrl }: NavProps) {
  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b border-slate-700"
      style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <span className="text-xl font-bold text-white">{brand}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/#overview"
              className="text-sm text-slate-300 hover:text-white transition-colors">
              Overview
            </a>
            <a
              href="/#comparison"
              className="text-sm text-slate-300 hover:text-white transition-colors">
              Comparison
            </a>
            <a
              href="/#features"
              className="text-sm text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a
              href="/#testimonials"
              className="text-sm text-slate-300 hover:text-white transition-colors">
              Testimonials
            </a>
            <a
              href="/#faq"
              className="text-sm text-slate-300 hover:text-white transition-colors">
              FAQ
            </a>
            <a
              href={ctaUrl}
              className="px-5 py-2 font-medium rounded-full transition-colors text-sm"
              style={{ backgroundColor: "#3b82f6", color: "white" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#2563eb")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#3b82f6")
              }>
              {ctaText}
            </a>
          </div>

          {/* Mobile CTA Button */}
          <a
            href={ctaUrl}
            className="md:hidden px-4 py-2 font-medium rounded-full transition-colors text-sm"
            style={{ backgroundColor: "#3b82f6", color: "white" }}>
            {ctaText}
          </a>
        </div>
      </div>
    </nav>
  );
}
