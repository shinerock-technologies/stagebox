interface FooterProps {
  data: {
    text: string;
    brand: string;
    nav_links: Array<{
      label: string;
      url: string;
    }>;
  };
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer
      className="py-8 sm:py-10 lg:py-12 border-t border-slate-700"
      style={{ backgroundColor: "rgb(20, 20, 20)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* Top Row - Logo and Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <span className="text-lg font-bold text-white">{data.brand}</span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {data.nav_links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="text-slate-300 hover:text-white text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row - Copyright */}
          <div className="pt-6">
            <p className="text-slate-400 text-sm text-center md:text-left">
              {data.text}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
