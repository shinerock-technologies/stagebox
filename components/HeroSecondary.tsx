"use client";

import { getSectionLabelColor } from "@/lib/sectionColors";
import Image from "next/image";

interface HeroSecondaryProps {
  colorIndex: number;
  label?: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  imageUrl?: string;
}

export default function HeroSecondary({
  colorIndex,
  label,
  title,
  description,
  ctaText,
  ctaUrl,
  imageUrl,
}: HeroSecondaryProps) {
  return (
    <section
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

          <div className="relative">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={title}
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-cover"
              />
            ) : (
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                <span className="text-slate-400 text-lg font-medium">
                  Product Image
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
