import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "宿泊施設の運営・管理",
    body: "北海道内の宿泊施設（旅館業・民泊）を一貫して運営・管理します。施設の維持管理から設備対応、オーナー向けレポートまで、トータルに対応しています。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "予約管理・チャネル管理",
    body: "Airbnbをはじめとする複数の予約プラットフォームにおいて、カレンダー管理・価格設定・稼働最適化を行います。空室期間を最小化し、収益性の向上を図ります。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "ゲスト問い合わせ対応",
    body: "チェックイン・チェックアウト、施設に関する質問、トラブル発生時の対応まで、専任スタッフがゲストの問い合わせに迅速かつ丁寧に対応します。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "清掃・ターンオーバー管理",
    body: "毎日の清掃を専任スタッフが担当し、アメニティ補充・リネン交換・施設点検を徹底します。ゲストが到着したときに常に清潔で整った状態を保ちます。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "旅館業・民泊の法令対応",
    body: "旅館業法・住宅宿泊事業法（民泊新法）に基づく適切な届出・許認可取得を行い、法令を遵守した運営体制を整えています。コンプライアンスを重視した事業運営を実践しています。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "エリア展開（札幌・旭川）",
    body: "現在、札幌市内23室・旭川市内3室にて運営中。各エリアに専任マネージャーを配置し、地域密着型の迅速な対応体制を整えています。",
  },
];

export default function JigyouNaiyoPage() {
  return (
    <>
      <PageHeader
        label="BUSINESS"
        title="事業内容"
        description="COZY STAY北海道株式会社が北海道で展開する宿泊事業の概要と、具体的なサービス内容をご説明します。"
      />

      {/* Overview */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="OVERVIEW"
            title="事業概要"
          />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="space-y-5 text-sm text-gray-600 leading-relaxed font-sans">
              <p>
                COZY STAY北海道株式会社は、北海道における宿泊施設の運営・管理を主な事業とする会社です。旅館業・民泊（住宅宿泊事業）の形態にて、札幌と旭川を中心に複数の施設を展開しています。
              </p>
              <p>
                各施設の日常運営にとどまらず、予約管理・ゲストサポート・清掃手配・施設メンテナンスまでを一貫して自社で担うことで、安定した運営品質を維持しています。
              </p>
              <p>
                Airbnbにおいて1,300件以上のレビューと平均評価4.98という実績が示すとおり、高い顧客満足度を継続的に実現しています。これは、地域に密着したスタッフが誠実・丁寧に業務を遂行してきた結果です。
              </p>
            </div>
            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-600 to-slate-800 flex items-end p-4">
                <span className="text-white/25 text-xs font-sans">
                  【写真】施設内観・運営のイメージ
                </span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold-400 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="bg-cream-50 py-20 px-5 sm:px-8 lg:px-10 border-t border-cream-200">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="SERVICES"
            title="サービス内容"
            description="宿泊事業の運営に必要なすべての業務を自社で一元管理しています。"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-cream-200 p-6 hover:border-navy-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="text-gold-500 mb-4">{s.icon}</div>
                <h3
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-navy-800 text-base font-semibold mb-3"
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed font-sans">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Areas */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="AREAS" title="運営エリア" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Sapporo */}
            <div className="border border-cream-200 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-navy-700 to-navy-900 flex items-end p-4">
                <span className="text-white/25 text-xs font-sans">【写真】札幌エリア</span>
              </div>
              <div className="p-6">
                <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mb-2">SAPPORO</p>
                <h3
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-navy-800 text-xl font-semibold mb-3"
                >
                  札幌エリア
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans mb-4">
                  中島公園・中央区・本郷通・東区・円山など、市内複数エリアにわたり23室を運営。地下鉄沿線の利便性の高い立地が中心です。
                </p>
                <div className="flex items-center gap-2 text-navy-700 text-sm font-medium font-sans">
                  <span className="text-2xl font-serif text-navy-800">23</span>
                  <span className="text-gray-500 text-sm">室運営中</span>
                </div>
              </div>
            </div>
            {/* Asahikawa */}
            <div className="border border-cream-200 overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-slate-600 to-slate-800 flex items-end p-4">
                <span className="text-white/25 text-xs font-sans">【写真】旭川エリア</span>
              </div>
              <div className="p-6">
                <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mb-2">ASAHIKAWA</p>
                <h3
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-navy-800 text-xl font-semibold mb-3"
                >
                  旭川エリア
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans mb-4">
                  旭川市内及び比布町において3室を運営。大雪山や旭山動物園など北海道観光の拠点として、多くのゲストに利用されています。
                </p>
                <div className="flex items-center gap-2 text-navy-700 text-sm font-medium font-sans">
                  <span className="text-2xl font-serif text-navy-800">3</span>
                  <span className="text-gray-500 text-sm">室運営中</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
