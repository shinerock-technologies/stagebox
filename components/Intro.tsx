import { getSectionLabelColor } from "@/lib/sectionColors";
import Image from "next/image";

interface IntroProps {
  colorIndex: number;
  data: {
    title: string;
    subtitle?: string;
    text: string;
    image_url?: string;
    comparison_points?: Array<{
      title: string;
      description: string;
    }>;
  };
}

export default function Intro({ colorIndex, data }: IntroProps) {
  return (
    <>
      {/* Comparison Section */}
      {data.comparison_points && (
        <section
          id="intro"
          className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
          style={{ backgroundColor: "rgb(20, 20, 20)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
              {/* Left Side - Title and Description */}
              <div>
                <p
                  className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide"
                  style={{ color: getSectionLabelColor(colorIndex) }}>
                  {data.title}
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
                  {data.subtitle || data.title}
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                  {data.text}
                </p>
              </div>

              {/* Right Side - Two Column Grid */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {data.comparison_points.map((point, idx) => (
                  <div key={idx} className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image Section */}
      {data.image_url && (
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image
              src={data.image_url}
              alt={data.title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </section>
      )}
    </>
  );
}
