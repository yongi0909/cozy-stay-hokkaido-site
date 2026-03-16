import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import PropertyCard from "@/components/PropertyCard";
import PropertyCardWithSlider from "@/components/PropertyCardWithSlider";
import { properties } from "@/data/properties";

export default function ShukuhakuShisetsuPage() {
  const sapporoProps = properties.filter((p) => p.area === "sapporo");
  const asahikawaProps = properties.filter((p) => p.area === "asahikawa");

  return (
    <>
      <PageHeader
        label="PROPERTIES"
        title="宿泊施設一覧"
        description={<>当社が北海道で運営する全{properties.length}室の宿泊施設をご紹介します。<br />各施設のページより詳細・ご予約のご確認が可能です。</>}
      />

      {/* Summary bar */}
      <div className="bg-navy-800 py-6 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-8 justify-center sm:justify-start">
          <div className="text-center sm:text-left">
            <span
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-white text-3xl font-semibold"
            >
              {properties.length}
            </span>
            <span className="text-white/60 text-sm ml-1.5 font-sans">室</span>
            <p className="text-gold-400 text-xs font-sans mt-0.5">総運営施設数</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div className="text-center sm:text-left">
            <span
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-white text-3xl font-semibold"
            >
              {sapporoProps.length}
            </span>
            <span className="text-white/60 text-sm ml-1.5 font-sans">室</span>
            <p className="text-gold-400 text-xs font-sans mt-0.5">札幌エリア</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div className="text-center sm:text-left">
            <span
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-white text-3xl font-semibold"
            >
              {asahikawaProps.length}
            </span>
            <span className="text-white/60 text-sm ml-1.5 font-sans">室</span>
            <p className="text-gold-400 text-xs font-sans mt-0.5">旭川エリア</p>
          </div>
        </div>
      </div>

      {/* Sapporo */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end gap-4 mb-12">
            <SectionTitle
              label="SAPPORO"
              title="札幌エリア"
              description="札幌市内に23室を展開。中島公園・白石区本郷通り・東区・円山エリアにわたります。"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {sapporoProps.map((property) =>
              property.photos ? (
                <PropertyCardWithSlider key={property.id} property={property} />
              ) : (
                <PropertyCard key={property.id} property={property} />
              )
            )}
          </div>
        </div>
      </section>

      {/* Asahikawa */}
      <section className="bg-cream-50 py-20 px-5 sm:px-8 lg:px-10 border-t border-cream-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <SectionTitle
              label="ASAHIKAWA"
              title="旭川エリア"
              description="旭川市内及び近郊に3室を展開。大雪山系を望む自然豊かな環境の施設です。"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {asahikawaProps.map((property) =>
              property.photos ? (
                <PropertyCardWithSlider key={property.id} property={property} />
              ) : (
                <PropertyCard key={property.id} property={property} />
              )
            )}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-navy-900 py-14 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-400 text-xs tracking-[0.4em] uppercase font-sans mb-4">BOOKING</p>
          <h2
            style={{ fontFamily: "var(--font-serif)" }}
            className="text-white text-2xl font-normal mb-4"
          >
            全施設は公式予約サイトよりご予約いただけます
          </h2>
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
