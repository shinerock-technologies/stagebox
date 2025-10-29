import { getSectionLabelColor } from "@/lib/sectionColors";
import { Clock, Sliders, Battery, Smartphone, Settings } from "lucide-react";

const iconMap: Record<string, any> = {
  Clock,
  Sliders,
  Battery,
  Smartphone,
  Settings,
};

interface FeaturesProps {
  colorIndex: number;
  data: {
    label?: string;
    title: string;
    subtitle?: string;
    bullets: string[];
  };
}

export default function Features({ colorIndex, data }: FeaturesProps) {
  return (
    <section
      id="features"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
      style={{ backgroundColor: "rgb(20, 20, 20)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Side - Title and Subtitle */}
          <div>
            {data.label && (
              <p
                className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wide"
                style={{ color: getSectionLabelColor(colorIndex) }}>
                {data.label}
              </p>
            )}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
              {data.title}
            </h2>
            {data.subtitle && (
              <p className="text-base sm:text-lg lg:text-xl text-slate-300">
                {data.subtitle}
              </p>
            )}
          </div>

          {/* Right Side - Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {data.bullets.map((bullet, idx) => {
              const [iconName, ...textParts] = bullet.split(" ");
              const text = textParts.join(" ");
              const [title, description] = text.split(" — ");
              const IconComponent = iconMap[iconName];

              return (
                <div key={idx} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                      {title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
