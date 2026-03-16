import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/gaisha-gaiyo", label: "会社概要" },
  { href: "/jigyou-naiyo", label: "事業内容" },
  { href: "/shukuhaku-shisetsu", label: "宿泊施設一覧" },
  { href: "/unei-taisei", label: "運営体制" },
  { href: "/otoiawase", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/company-logo1.jpg"
                  alt="COZY STAY北海道株式会社 ロゴ"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "0.06em",
                  fontFeatureSettings: "'palt'",
                }}
                className="text-white text-lg font-semibold leading-snug"
              >
                COZY STAY北海道株式会社
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              旅人が「また来たい」と思える宿泊空間を
              <br />
              北海道で運営・提供しています。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest text-gold-400 uppercase mb-4">Navigation</p>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company Info */}
          <div>
            <p className="text-xs tracking-widest text-gold-400 uppercase mb-4">Company Info</p>
            <dl className="flex flex-col gap-2.5 text-sm text-white/70">
              <div>
                <dt className="text-white/40 text-xs mb-0.5">所在地</dt>
                <dd>〒064-0809<br />北海道札幌市中央区南9条西4丁目3-15-202</dd>
              </div>
              <div>
                <dt className="text-white/40 text-xs mb-0.5">代表</dt>
                <dd>西原 龍起</dd>
              </div>
              <div>
                <dt className="text-white/40 text-xs mb-0.5">お問い合わせ</dt>
                <dd>
                  <a href="tel:011-000-0000" className="hover:text-white transition-colors">011-000-0000</a>
                  <br />
                  <a href="mailto:contact@cozystayhokkaido.jp" className="hover:text-white transition-colors break-all">
                    contact@cozystayhokkaido.jp
                  </a>
                </dd>
              </div>
            </dl>

            <a
              href="https://wfvacations.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 text-xs font-medium tracking-wider text-gold-400 border border-gold-500/50 hover:bg-gold-500/10 transition-colors duration-200"
            >
              宿泊予約サイトへ
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} COZY STAY北海道株式会社. All rights reserved.</p>
          <p>Sapporo / Asahikawa, Hokkaido, Japan</p>
        </div>
      </div>
    </footer>
  );
}
