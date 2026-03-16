import SectionTitle from "@/components/SectionTitle";

const sections = [
  {
    title: "1. 取得する情報",
    body: "当社は、お問い合わせフォームの利用等を通じて、以下の情報を取得することがあります。\n\n・氏名\n・会社名・組織名\n・メールアドレス\n・電話番号\n・お問い合わせ内容",
  },
  {
    title: "2. 利用目的",
    body: "取得した個人情報は、以下の目的のために利用します。\n\n・お問い合わせへの回答および連絡\n・当社サービスに関するご案内（ご同意をいただいた場合に限る）\n・当社の事業運営および改善のための分析",
  },
  {
    title: "3. 第三者提供",
    body: "当社は、以下の場合を除き、取得した個人情報を第三者に提供しません。\n\n・ご本人の同意がある場合\n・法令に基づく開示が必要な場合\n・人の生命・財産の保護のために必要な場合",
  },
  {
    title: "4. 安全管理",
    body: "当社は、個人情報の漏えい・滅失・毀損を防止するため、適切なセキュリティ対策を実施します。個人情報を取り扱う業務を外部に委託する場合には、必要かつ適切な監督を行います。",
  },
  {
    title: "5. 開示・訂正・削除等のご請求",
    body: "ご本人から個人情報の開示・訂正・削除・利用停止をご希望の場合は、下記の連絡先までお問い合わせください。ご本人確認の上、合理的な期間内に対応いたします。",
  },
  {
    title: "6. お問い合わせ窓口",
    body: "個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。\n\nCOZY STAY北海道株式会社\n〒064-0809 北海道札幌市中央区南9条西4丁目3-15-202\nメール: contact@cozystayhokkaido.jp",
  },
  {
    title: "7. 制定・更新",
    body: "2025年6月23日 制定\n2026年3月17日 最終更新\n\n本方針は、必要に応じて改定することがあります。改定した場合は本ページにてお知らせします。",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-cream-50 border-b border-cream-200 py-14 lg:py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-500 text-xs tracking-[0.35em] uppercase font-sans mb-3">
            PRIVACY POLICY
          </p>
          <h1
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-navy-800 text-3xl lg:text-4xl font-semibold tracking-wide"
          >
            個人情報の取り扱いについて
          </h1>
          <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-xl font-sans">
            COZY STAY北海道株式会社（以下「当社」）は、お客様の個人情報を適切に保護・管理するため、以下の方針を定めます。
          </p>
          <div className="mt-6 w-12 h-px bg-gold-500" />
        </div>
      </div>

      {/* Content */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <SectionTitle label="POLICY" title="個人情報保護方針" />
          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-navy-800 text-base font-semibold mb-3"
                >
                  {s.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed font-sans whitespace-pre-line">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
