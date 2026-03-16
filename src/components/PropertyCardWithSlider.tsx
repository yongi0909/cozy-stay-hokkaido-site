"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import type { Property } from "@/data/properties";
import PhotoLightbox from "@/components/PhotoLightbox";

interface Props {
  property: Property;
}

export default function PropertyCardWithSlider({ property }: Props) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const photos = property.photos!;
  const total = photos.length;

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c - 1 + total) % total);
  };
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((c) => (c + 1) % total);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      setCurrent((c) => diff > 0 ? (c + 1) % total : (c - 1 + total) % total);
    }
    touchStartX.current = null;
  };

  const bookingHref = property.detailUrl ?? property.bookingUrl;

  return (
    <>
      <div className="bg-white border border-cream-200 hover:border-navy-300 hover:shadow-md transition-all duration-200 group">
        {/* ── Photo slider ── */}
        <div
          className="relative h-52 overflow-hidden select-none cursor-zoom-in"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={() => setLightboxOpen(true)}
          title="クリックして拡大"
        >
          {photos.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`${property.name} — 写真 ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors duration-150"
            aria-label="前の写真"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors duration-150"
            aria-label="次の写真"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrent(i); }}
                aria-label={`写真 ${i + 1}`}
                className={`transition-all duration-200 rounded-full ${
                  i === current ? "w-4 h-1 bg-white" : "w-1 h-1 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Photo counter */}
          <span className="absolute top-2 right-2 z-10 text-[10px] text-white bg-black/30 px-2 py-0.5 font-sans">
            {current + 1} / {total}
          </span>

          {/* Expand hint */}
          <span className="absolute top-2 left-2 z-10 text-[10px] text-white bg-black/30 px-2 py-0.5 font-sans flex items-center gap-1">
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            拡大
          </span>
        </div>

        {/* ── Card content ── */}
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
            href={bookingHref}
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

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <PhotoLightbox
          photos={photos}
          current={current}
          propertyName={property.name}
          areaLabel={property.areaLabel}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setCurrent((c) => (c - 1 + total) % total)}
          onNext={() => setCurrent((c) => (c + 1) % total)}
          onGoTo={(i) => setCurrent(i)}
        />
      )}
    </>
  );
}
