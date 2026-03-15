"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/gaisha-gaiyo", label: "会社概要" },
  { href: "/jigyou-naiyo", label: "事業内容" },
  { href: "/shukuhaku-shisetsu", label: "宿泊施設一覧" },
  { href: "/unei-taisei", label: "運営体制" },
  { href: "/otoiawase", label: "お問い合わせ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm border-b border-cream-200" : "bg-white/98 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14">
                <Image
                  src="/images/company-logo.png"
                  alt="COZY STAY北海道株式会社 ロゴ"
                  fill
                  className="object-contain"
                  style={{ background: "transparent" }}
                  priority
                  unoptimized
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "0.07em",
                  fontFeatureSettings: "'palt'",
                }}
                className="text-navy-800 text-lg sm:text-xl font-semibold leading-snug"
              >
                COZY STAY北海道株式会社
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm tracking-wide transition-colors duration-200 py-1 group ${
                    pathname === item.href
                      ? "text-navy-800 font-medium"
                      : "text-gray-500 hover:text-navy-800"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gold-500 transition-all duration-300 ${
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="https://wfvacations.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-wider text-navy-800 border border-navy-700 hover:bg-navy-800 hover:text-white transition-all duration-200"
            >
              宿泊予約サイト
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              <span
                className={`block w-5 h-px bg-navy-800 transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[3px]" : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-5 h-px bg-navy-800 transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-navy-800 transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[3px]" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-16 left-0 right-0 bg-white border-t border-cream-200 shadow-lg">
            <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-2 py-4 text-sm tracking-wide flex items-center justify-between ${
                    i < navItems.length - 1 ? "border-b border-cream-100" : ""
                  } ${
                    pathname === item.href
                      ? "text-navy-800 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
              <a
                href="https://wfvacations.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-3.5 text-sm text-center font-medium tracking-wider text-navy-800 border border-navy-700"
              >
                宿泊予約サイトへ ↗
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
