import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

const roles = [
  {
    area: "札幌",
    color: "navy",
    members: [
      {
        name: "夏堀美香子",
        role: "ゲスト問い合わせ対応",
        detail:
          "チェックイン・チェックアウト、ゲストからの問い合わせ、緊急連絡の一次対応を担当します。迅速な応答でゲストの安心を確保します。",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        ),
      },
      {
        name: "田澤政信",
        role: "札幌エリア統括 / 清掃スタッフ配置・施設管理",
        detail:
          "札幌エリア全施設の清掃スタッフを手配・管理します。チェックアウト後の清掃手配から品質チェックまで一括して担当します。",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
      },
    ],
  },
  {
    area: "旭川",
    color: "slate",
    members: [
      {
        name: "岸真由美",
        role: "旭川エリア統括 / ゲスト問い合わせ対応 / 清掃スタッフ配置・施設管理",
        detail:
          "旭川エリアのゲスト対応から施設管理、清掃手配まで、エリアマネージャーとして全業務を統括します。",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        ),
      },
    ],
  },
];

const flowSteps = [
  {
    step: "01",
    title: "予約受付",
    body: "Airbnb等の予約プラットフォームを通じて自動受付。各エリア担当者が予約内容を確認し、ゲストへウェルカムメッセージを送付します。",
  },
  {
    step: "02",
    title: "清掃・準備",
    body: "前泊ゲストのチェックアウト後、専任清掃スタッフが施設の清掃・リネン交換・アメニティ補充を実施。チェックリストによる品質確認を徹底します。",
  },
  {
    step: "03",
    title: "チェックイン対応",
    body: "スマートロック等を活用したセルフチェックインに対応。入室方法・周辺情報をゲストへ事前送付し、スムーズな到着をサポートします。",
  },
  {
    step: "04",
    title: "滞在中サポート",
    body: "各エリア担当者がゲストからの問い合わせに迅速対応。設備トラブル・緊急事態が発生した場合は、担当者が現地対応または手配を行います。",
  },
  {
    step: "05",
    title: "チェックアウト・評価",
    body: "チェックアウト後、速やかに次回の清掃手配を行います。ゲストレビューを分析し、継続的なサービス品質の改善に反映します。",
  },
];

export default function UneiTaiseiPage() {
  return (
    <>
      <PageHeader
        label="OPERATIONS"
        title="運営体制"
        description="COZY STAY北海道株式会社は、エリアごとに専任担当者を配置し、ゲスト対応から清掃管理まで一貫した運営体制を整えています。"
      />

      {/* Team Structure */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="TEAM STRUCTURE"
            title="担当者・役割分担"
            description="各エリアに専任スタッフを配置し、迅速で責任ある運営を実現しています。"
          />

          {/* Structure Diagram */}
          <div className="mt-12">
            {/* Top: Representative */}
            <div className="flex justify-center mb-8">
              <div className="bg-navy-800 text-white px-8 py-4 text-center min-w-[200px]">
                <p className="text-gold-400 text-[10px] tracking-widest uppercase font-sans mb-1">Representative</p>
                <p style={{ fontFamily: "var(--font-serif)" }} className="text-base font-semibold">西原 龍起</p>
                <p className="text-white/60 text-xs font-sans mt-0.5">代表取締役・全体統括</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-8 bg-gold-500" />
            </div>

            {/* Two Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {roles.map((area) => (
                <div key={area.area} className="border border-cream-200 overflow-hidden">
                  <div
                    className={`px-5 py-3 ${
                      area.color === "navy"
                        ? "bg-navy-700 text-white"
                        : "bg-slate-700 text-white"
                    }`}
                  >
                    <p className="text-gold-300 text-[10px] tracking-widest uppercase font-sans mb-0.5">AREA</p>
                    <p style={{ fontFamily: "var(--font-serif)" }} className="text-lg font-semibold">
                      {area.area}エリア
                    </p>
                  </div>
                  <div className="divide-y divide-cream-100">
                    {area.members.map((member) => (
                      <div key={member.name} className="p-5 bg-white">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5 text-gold-500">{member.icon}</div>
                          <div>
                            <p
                              style={{ fontFamily: "var(--font-serif)" }}
                              className="text-navy-800 font-semibold text-sm"
                            >
                              {member.name}
                            </p>
                            <p className="text-gold-600 text-xs font-medium font-sans mt-0.5 mb-2">
                              {member.role}
                            </p>
                            <p className="text-gray-500 text-xs leading-relaxed font-sans">
                              {member.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Standards */}
      <section className="bg-cream-50 py-20 px-5 sm:px-8 lg:px-10 border-t border-cream-200">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="STANDARDS"
            title="運営基準"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white border border-cream-200 p-6 text-center">
              <div className="text-gold-500 text-3xl font-serif font-semibold mb-2">毎日</div>
              <p className="text-navy-800 text-sm font-medium font-sans mb-2">日常清掃</p>
              <p className="text-gray-500 text-xs leading-relaxed font-sans">
                全施設においてチェックアウト後の清掃を毎回実施。常に清潔な状態でゲストをお迎えします。
              </p>
            </div>
            <div className="bg-white border border-cream-200 p-6 text-center">
              <div className="text-gold-500 text-3xl font-serif font-semibold mb-2">即時</div>
              <p className="text-navy-800 text-sm font-medium font-sans mb-2">トラブル対応</p>
              <p className="text-gray-500 text-xs leading-relaxed font-sans">
                設備故障・緊急対応が必要な場合、各エリア担当者が迅速に現地対応または業者手配を行います。
              </p>
            </div>
            <div className="bg-white border border-cream-200 p-6 text-center">
              <div className="text-gold-500 text-3xl font-serif font-semibold mb-2">一元</div>
              <p className="text-navy-800 text-sm font-medium font-sans mb-2">予約・品質管理</p>
              <p className="text-gray-500 text-xs leading-relaxed font-sans">
                予約管理・価格設定・レビュー分析を一元的に行い、全施設で安定した品質と稼働率を維持します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Flow */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="WORKFLOW"
            title="運営フロー"
            description="予約受付からチェックアウトまで、一貫した業務フローで安定した運営を実現しています。"
          />
          <div className="mt-12 relative">
            {/* Vertical line (desktop) */}
            <div className="hidden sm:block absolute left-[27px] top-0 bottom-0 w-px bg-cream-200" />
            <div className="flex flex-col gap-8">
              {flowSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-14 h-14 bg-navy-800 flex items-center justify-center relative z-10">
                    <span
                      style={{ fontFamily: "var(--font-serif)" }}
                      className="text-gold-400 text-sm font-semibold"
                    >
                      {step.step}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3
                      style={{ fontFamily: "var(--font-serif)" }}
                      className="text-navy-800 text-base font-semibold mb-2"
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
