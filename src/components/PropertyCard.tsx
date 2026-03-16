import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white border border-cream-200 hover:border-navy-300 hover:shadow-md transition-all duration-200 group">
      {/* Photo placeholder */}
      <div className="h-44 bg-gradient-to-br from-navy-800 to-navy-900 flex items-end p-3">
        <span className="text-white/30 text-xs font-sans">【写真プレースホルダー】</span>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="inline-block px-2 py-0.5 text-xs font-medium text-navy-700 bg-navy-50 border border-navy-100 mb-3 font-sans">
          {property.areaLabel}
        </span>
        <h3
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-navy-800 text-sm font-semibold leading-snug mb-3 group-hover:text-navy-600 transition-colors"
        >
          {property.name}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-5 font-sans line-clamp-2">
          {property.description}
        </p>
        <a
          href={property.detailUrl ?? property.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-navy-700 border border-navy-600 px-4 py-2 hover:bg-navy-800 hover:text-white hover:border-navy-800 transition-all duration-200 font-sans"
        >
          予約・詳細を見る
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
