"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    bg: "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900",
    photoLabel: "【写真】北海道の冬景色・雪原の風景",
    showMain: true,
  },
  {
    id: 2,
    bg: "bg-gradient-to-br from-sky-900 via-slate-800 to-navy-900",
    photoLabel: "【写真】札幌市内・施設外観",
    showMain: false,
  },
  {
    id: 3,
    bg: "bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900",
    photoLabel: "【写真】施設内観・居室",
    showMain: false,
  },
  {
    id: 4,
    bg: "bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900",
    photoLabel: "【写真】旭川・北海道の自然風景",
    showMain: false,
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
      }, 400);
    },
    [transitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full h-[70vh] min-h-[480px] max-h-[760px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          } ${slide.bg}`}
        >
          {/* Photo placeholder label */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="bg-black/40 text-white/60 text-xs px-3 py-1.5 rounded font-sans tracking-wide">
              {slide.photoLabel}
            </span>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />

          {/* Main Message (first slide) */}
          {slide.showMain && (
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="text-center max-w-2xl">
                <p className="text-gold-400 text-xs tracking-[0.4em] uppercase mb-6 font-sans">
                  COZY STAY HOKKAIDO
                </p>
                <h1
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-white text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed mb-8"
                >
                  ここは北海道にある、<br />
                  あなたが帰ってきたくなる場所。<br />
                  <span className="text-xl sm:text-2xl lg:text-3xl text-white/85 mt-2 block">
                    私たちはそんな旅の宿を目指しています。
                  </span>
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                  <a
                    href="/gaisha-gaiyo"
                    className="inline-block px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wider border border-white/40 hover:bg-white/20 transition-colors duration-200"
                  >
                    会社概要を見る
                  </a>
                  <a
                    href="https://wfvacations.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-white/80 text-sm font-medium tracking-wider hover:text-white transition-colors duration-200"
                  >
                    宿泊予約サイト ↗
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Dot Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`スライド ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-6 h-1.5 bg-gold-400"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white transition-colors duration-200"
        aria-label="前のスライド"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white transition-colors duration-200"
        aria-label="次のスライド"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
