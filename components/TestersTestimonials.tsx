"use client";

import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { getSectionLabelColor } from "@/lib/sectionColors";

interface TestersTestimonialsProps {
  colorIndex: number;
  data: {
    label?: string;
    title: string;
    items: Array<{
      name: string;
      role: string;
      content: string;
      avatar: string;
    }>;
  };
}

export default function TestersTestimonials({
  colorIndex,
  data,
}: TestersTestimonialsProps) {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden"
      style={{ backgroundColor: "rgb(20, 20, 20)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {data.label && (
          <p
            className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide"
            style={{ color: getSectionLabelColor(colorIndex) }}>
            {data.label}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 lg:mb-16">
          {data.title}
        </h2>

        <InfiniteMovingCards items={data.items} speed="slow" />
      </div>
    </section>
  );
}
