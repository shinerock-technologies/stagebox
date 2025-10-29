import { getSectionLabelColor } from "@/lib/sectionColors";
import Image from "next/image";

interface HowItWorksProps {
  colorIndex: number;
  data: {
    label?: string;
    title: string;
    text: string;
    images?: Array<{
      url: string;
      alt: string;
    }>;
  };
}

export default function HowItWorks({ colorIndex, data }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
          {data.title}
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed mb-8 sm:mb-10 lg:mb-12">
          {data.text}
        </p>

        {data.images && data.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {data.images.map((image, idx) => (
              <div key={idx} className="w-full">
                {image.url ? (
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-slate-400 text-sm font-medium">
                      {image.alt}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
