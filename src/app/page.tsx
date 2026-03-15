import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import SectionTitle from "@/components/SectionTitle";

const kpis = [
  { value: "30", unit: "室", label: "運営施設数", note: "札幌・旭川エリア" },
  { value: "1,300", unit: "件以上", label: "Airbnbレビュー件数", note: "実績累計" },
  { value: "4.98", unit: "/ 5.00", label: "Airbnb平均評価", note: "ゲスト総合評価" },
];

const sections = [
  {
    href: "/gaisha-gaiyo",
    label: "COMPANY PROFILE",
    title: "会社概要",
    desc: "会社の基本情報、代表者・スタッフのご紹介",
  },
  {
    href: "/jigyou-naiyo",
    label: "BUSINESS",
    title: "事業内容",
    desc: "北海道における宿泊事業の詳細と運営概要",
  },
  {
    href: "/shukuhaku-shisetsu",
    label: "PROPERTIES",
    title: "宿泊施設一覧",
    desc: "札幌・旭川エリア全30室の施設一覧",
  },
  {
    href: "/unei-taisei",
    label: "OPERATIONS",
    title: "運営体制",
    desc: "清掃・ゲスト対応・トラブル管理の体制説明",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* KPI Section */}
      <section className="bg-navy-800 py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-gold-400 text-xs tracking-[0.4em] uppercase font-sans text-center mb-10">
            OPERATIONAL ACHIEVEMENTS
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* KPI numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-0 divide-y sm:divide-y-0 sm:divide-x lg:divide-x-0 lg:divide-y divide-white/10">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="py-7 sm:py-5 lg:py-6 px-4 lg:px-2 text-center sm:text-center lg:text-left flex flex-col sm:items-center lg:items-start">
                  <div className="flex items-end justify-center lg:justify-start gap-1">
                    <span
                      style={{ fontFamily: "var(--font-serif)" }}
                      className="text-white text-4xl lg:text-5xl font-semibold tracking-tight"
                    >
                      {kpi.value}
                    </span>
                    <span className="text-white/70 text-lg font-sans pb-1">{kpi.unit}</span>
                  </div>
                  <p className="text-gold-400 text-sm font-medium mt-2 mb-1 font-sans tracking-wide">
                    {kpi.label}
                  </p>
                  <p className="text-white/40 text-xs font-sans">{kpi.note}</p>
                </div>
              ))}
            </div>

            {/* Review score screenshot */}
            <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-white/10">
                <Image
                  src="/images/review score.png"
                  alt="Airbnb レビュースコア実績"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-white/30 text-xs font-sans text-center mt-2">
                Airbnb 実際のレビュースコア（スクリーンショット）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Summary */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionTitle
                label="ABOUT US"
                title="COZY STAY北海道株式会社"
                description="北海道における宿泊施設の運営・管理を専門とする会社です。旅館業・民泊事業を通じて、札幌と旭川において高品質な滞在体験を提供しています。"
              />
              <div className="mt-8 space-y-4 text-sm text-gray-600 leading-relaxed font-sans">
                <p>
                  私たちは「ここに帰ってきたくなる宿」を理念に、北海道各地の宿泊施設を一貫して運営・管理しています。予約管理からゲスト対応、清掃管理まで、自社スタッフが責任を持って対応しています。
                </p>
                <p>
                  2025年の設立以来、Airbnbを通じた1,300件以上の高評価レビューに裏付けられた運営実績を積み重ね、現在は札幌・旭川エリアにて30室を運営しています。
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/gaisha-gaiyo"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 text-white text-sm font-medium tracking-wider hover:bg-navy-700 transition-colors duration-200"
                >
                  会社概要を見る
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="https://wfvacations.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-navy-800 text-sm font-medium tracking-wider border border-navy-700 hover:bg-navy-800 hover:text-white transition-all duration-200"
                >
                  宿泊予約サイト ↗
                </a>
              </div>
            </div>

            {/* Company photo */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about/Toppage-aboutus-company.jpg"
                  alt="COZY STAY北海道株式会社"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold-400 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Site Navigation Cards */}
      <section className="bg-cream-50 py-20 px-5 sm:px-8 lg:px-10 border-t border-cream-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionTitle label="SITE CONTENTS" title="コンテンツ一覧" centered />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white border border-cream-200 p-6 hover:border-navy-300 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <p className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-sans mb-2">
                  {s.label}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-navy-800 text-lg font-semibold mb-3 group-hover:text-navy-600 transition-colors"
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed font-sans flex-1">
                  {s.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-navy-600 text-xs font-medium font-sans group-hover:gap-2 transition-all">
                  詳細を見る
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="bg-navy-900 py-14 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-400 text-xs tracking-[0.4em] uppercase font-sans mb-4">BOOKING</p>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-white text-2xl lg:text-3xl font-normal mb-4"
          >
            北海道での宿泊をお探しの方へ
          </h2>
          <p className="text-white/60 text-sm leading-relaxed font-sans mb-8">
            当社運営の全施設は、公式予約サイトよりご確認・ご予約いただけます。
          </p>
          <a
            href="https://wfvacations.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold-500 text-white text-sm font-medium tracking-wider hover:bg-gold-600 transition-colors duration-200"
          >
            宿泊予約サイトへ
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
