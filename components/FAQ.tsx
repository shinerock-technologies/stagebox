"use client";

import { useState } from "react";
import { getSectionLabelColor } from "@/lib/sectionColors";

interface FAQProps {
  colorIndex: number;
  data: {
    label?: string;
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export default function FAQ({ colorIndex, data }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
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

        <div className="space-y-3 sm:space-y-4">
          {data.items.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5 text-left bg-transparent transition-colors flex justify-between items-center"
                style={{
                  backgroundColor:
                    openIndex === idx ? "rgb(30, 30, 30)" : "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgb(30, 30, 30)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    openIndex === idx ? "rgb(30, 30, 30)" : "transparent")
                }>
                <span className="font-semibold text-white text-sm sm:text-base lg:text-lg">
                  {item.question}
                </span>
                <span className="text-xl sm:text-2xl text-slate-400 ml-2">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              {openIndex === idx && (
                <div
                  className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 border-t border-slate-700"
                  style={{ backgroundColor: "rgb(30, 30, 30)" }}>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
