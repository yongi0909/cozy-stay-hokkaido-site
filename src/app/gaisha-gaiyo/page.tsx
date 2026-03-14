import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import StaffCard from "@/components/StaffCard";

const companyInfo = [
  { label: "会社名", value: "COZY STAY北海道株式会社" },
  { label: "所在地", value: "〒064-0809　北海道札幌市中央区南9条西4丁目3-15-202" },
  { label: "設立", value: "2025年6月23日" },
  { label: "資本金", value: "300万円" },
  { label: "代表取締役", value: "西原 龍起" },
  { label: "事業内容", value: "北海道における宿泊施設の運営・管理" },
  { label: "運営拠点", value: "札幌、旭川" },
  { label: "取引銀行", value: "北洋銀行、GMOあおぞらネット銀行" },
  { label: "株主構成", value: "西原 龍起　100%" },
];

const staff = [
  {
    name: "西原 龍起",
    nameReading: "にしはら りゅうき",
    role: "代表取締役",
    bio: "北海道における宿泊事業の立ち上げから運営全体を統括。地域に根ざした、質の高い宿泊体験の提供を目指し、会社経営を牽引しています。",
    hasPhoto: true,
    isRepresentative: true,
  },
  {
    name: "岸 真由美",
    nameReading: "きし まゆみ",
    role: "事業統括 兼 旭川マネージャー",
    bio: "旭川エリアの運営全般を担当しながら、会社全体の事業推進にも携わります。現場マネジメントから事業戦略の立案まで、幅広く貢献しています。",
    hasPhoto: true,
    isRepresentative: false,
  },
  {
    name: "田澤",
    nameReading: "たざわ",
    role: "札幌マネージャー（清掃・施設管理担当）",
    bio: "札幌エリアにおける清掃スタッフの手配・配置を統括し、全施設の品質維持を責任を持って担います。",
    hasPhoto: false,
    isRepresentative: false,
  },
  {
    name: "夏堀",
    nameReading: "なつほり",
    role: "札幌 ゲスト対応",
    bio: "札幌エリアのゲスト問い合わせ・チェックイン対応を担当。迅速かつ丁寧な対応で、ゲストの安心と満足を支えています。",
    hasPhoto: false,
    isRepresentative: false,
  },
];

export default function GaishaGaiyoPage() {
  return (
    <>
      <PageHeader
        label="COMPANY PROFILE"
        title="会社概要"
        description="COZY STAY北海道株式会社の基本情報と、事業を支えるメンバーをご紹介します。"
      />

      {/* Company Data Table */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="BASIC INFORMATION" title="会社基本情報" />
          <div className="mt-10 border border-cream-200">
            {companyInfo.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row ${
                  i < companyInfo.length - 1 ? "border-b border-cream-200" : ""
                }`}
              >
                <dt className="w-full sm:w-44 flex-shrink-0 px-6 py-4 bg-cream-50 text-navy-800 text-sm font-medium tracking-wide font-sans border-b sm:border-b-0 sm:border-r border-cream-200">
                  {item.label}
                </dt>
                <dd className="flex-1 px-6 py-4 text-gray-700 text-sm leading-relaxed font-sans">
                  {item.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="bg-cream-50 py-20 px-5 sm:px-8 lg:px-10 border-t border-cream-200">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="LOCATION" title="所在地" />
          <div className="mt-10">
            <div className="bg-navy-800/5 border border-cream-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0 text-gold-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-navy-800 font-medium text-base font-sans">
                  〒064-0809
                </p>
                <p className="text-gray-700 text-sm mt-1 font-sans leading-relaxed">
                  北海道札幌市中央区南9条西4丁目3-15-202
                </p>
                <p className="text-gray-500 text-xs mt-3 font-sans">
                  地下鉄南北線「中島公園駅」より徒歩約5分
                </p>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="mt-4 h-56 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center border border-cream-200">
              <span className="text-gray-400 text-sm font-sans">
                【地図プレースホルダー】Google Mapsを埋め込む予定
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Staff / Team */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="TEAM"
            title="代表者・スタッフ紹介"
            description="COZY STAY北海道株式会社の運営を担うチームメンバーです。"
          />
          <div className="mt-10 flex flex-col gap-6">
            {staff.map((member) => (
              <StaffCard key={member.name} {...member} />
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-400 font-sans">
            ※ 写真欄は順次掲載予定です。
          </p>
        </div>
      </section>
    </>
  );
}
