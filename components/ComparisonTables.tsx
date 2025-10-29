import { getSectionLabelColor } from "@/lib/sectionColors";

interface ComparisonTablesProps {
  colorIndex: number;
  data: {
    label?: string;
    title: string;
    tables: Array<{
      title: string;
      column_headers: string[];
      rows: Array<{
        feature: string;
        competitor: string;
        studiobox: string;
      }>;
    }>;
  };
}

export default function ComparisonTables({
  colorIndex,
  data,
}: ComparisonTablesProps) {
  return (
    <section
      id="comparison"
      className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-slate-800"
      style={{ backgroundColor: "rgb(20, 20, 20)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
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
        </div>

        {data.tables.map((table, tableIdx) => (
          <div
            key={tableIdx}
            className={
              tableIdx < data.tables.length - 1 ? "mb-12 sm:mb-16 lg:mb-20" : ""
            }>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
              {table.title}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    {table.column_headers.map((header, idx) => (
                      <th
                        key={idx}
                        className={`text-left py-2 sm:py-3 lg:py-4 font-semibold text-xs sm:text-sm ${
                          idx === table.column_headers.length - 1
                            ? "text-white"
                            : "text-slate-400"
                        }`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="border-b border-slate-800">
                      <td className="py-2 sm:py-3 lg:py-4 text-white font-medium text-xs sm:text-sm">
                        {row.feature}
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 text-slate-300 text-xs sm:text-sm">
                        {row.competitor}
                      </td>
                      <td className="py-2 sm:py-3 lg:py-4 text-white text-xs sm:text-sm">
                        {row.studiobox}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
