"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface Props {
  photos: string[];
  current: number;
  propertyName: string;
  areaLabel: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (i: number) => void;
}

export default function PhotoLightbox({
  photos,
  current,
  propertyName,
  areaLabel,
  onClose,
  onPrev,
  onNext,
  onGoTo,
}: Props) {
  const touchStartX = useRef<number | null>(null);

  // キーボード操作
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  // bodyスクロールロック
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? onNext() : onPrev();
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95"
      onClick={onClose}
    >
      {/* ── Header ── */}
      <div
        className="flex items-center justify-between px-4 py-3 flex-shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <span className="text-gold-400 text-xs tracking-widest font-sans">{areaLabel}</span>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-white text-sm sm:text-base font-semibold leading-snug mt-0.5"
          >
            {propertyName}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          aria-label="閉じる"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* ── Main image ── */}
      <div
        className="relative flex-1 min-h-0 mx-4 select-none"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {photos.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-300 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={src}
              alt={`${propertyName} — 写真 ${i + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority={i === current}
            />
          </div>
        ))}

        {/* Prev / Next */}
        <button
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white transition-colors"
          aria-label="前の写真"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white transition-colors"
          aria-label="次の写真"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Counter */}
        <span className="absolute top-2 right-2 z-10 text-xs text-white bg-black/40 px-2 py-0.5 font-sans">
          {current + 1} / {photos.length}
        </span>
      </div>

      {/* ── Thumbnail strip ── */}
      <div
        className="flex items-center gap-2 px-4 py-3 overflow-x-auto flex-shrink-0 scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        {photos.map((src, i) => (
          <button
            key={src}
            onClick={() => onGoTo(i)}
            className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 overflow-hidden transition-all duration-150 ${
              i === current
                ? "ring-2 ring-gold-400 opacity-100"
                : "opacity-40 hover:opacity-70"
            }`}
            aria-label={`写真 ${i + 1}`}
          >
            <Image
              src={src}
              alt={`サムネイル ${i + 1}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
