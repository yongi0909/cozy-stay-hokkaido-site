import type { ReactNode } from "react";

interface StaffCardProps {
  name: string;
  nameReading?: string;   // furigana
  role: string;
  bio?: ReactNode;
  hasPhoto?: boolean;
  photoSrc?: string;       // path to real photo when available
  isRepresentative?: boolean;
}

export default function StaffCard({
  name,
  nameReading,
  role,
  bio,
  hasPhoto,
  photoSrc,
  isRepresentative,
}: StaffCardProps) {
  return (
    <div
      className={`bg-white border border-cream-200 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 ${
        isRepresentative ? "border-l-2 border-l-gold-500" : ""
      }`}
    >
      {/* Photo */}
      <div className="flex-shrink-0">
        {hasPhoto && photoSrc ? (
          /* Replace this img tag with next/image when real photo is available */
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoSrc}
            alt={name}
            className={`object-cover rounded-sm ${
              isRepresentative ? "w-28 h-36 sm:w-32 sm:h-40" : "w-24 h-28 sm:w-28 sm:h-36"
            }`}
          />
        ) : hasPhoto ? (
          // Photo placeholder: real photo to be inserted here
          <div
            className={`bg-cream-200 flex flex-col items-center justify-center rounded-sm text-cream-300 ${
              isRepresentative ? "w-28 h-36 sm:w-32 sm:h-40" : "w-24 h-28 sm:w-28 sm:h-36"
            }`}
          >
            <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px]">写真</span>
          </div>
        ) : null}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        {isRepresentative && (
          <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-sans mb-2">
            Representative Director
          </p>
        )}
        <p className="text-gray-400 text-xs font-sans mb-0.5 tracking-wide">{nameReading}</p>
        <h3
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-navy-800 text-xl font-semibold tracking-wide"
        >
          {name}
        </h3>
        <p className="text-gold-600 text-sm font-medium mt-1 mb-4 font-sans">{role}</p>
        {bio && (
          <div className="text-gray-500 text-sm leading-relaxed font-sans space-y-3">{bio}</div>
        )}
      </div>
    </div>
  );
}
