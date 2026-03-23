import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import SectionTitle from "@/components/SectionTitle";

const kpis = [
  { value: "30", unit: " rooms", label: "Properties Operated", note: "Group Total", subnote: "(including 26 units in Hokkaido)" },
  { value: "1,300", unit: "+", label: "Airbnb Reviews", note: "Cumulative total", subnote: "" },
  { value: "4.98", unit: " / 5.00", label: "Average Airbnb Rating", note: "Overall guest score", subnote: "" },
];

const sections = [
  {
    href: "/en/company",
    label: "COMPANY PROFILE",
    title: "Company Profile",
    desc: "Basic company information, CEO profile, and team introduction.",
  },
  {
    href: "/en/business",
    label: "BUSINESS",
    title: "Business",
    desc: "Details and overview of our accommodation operations in Hokkaido.",
  },
  {
    href: "/en/properties",
    label: "PROPERTIES",
    title: "Properties",
    desc: "All 30 properties in the Sapporo and Asahikawa areas.",
  },
  {
    href: "/en/operations",
    label: "OPERATIONS",
    title: "Operations",
    desc: "Our housekeeping, guest support, and facility management framework.",
  },
];

export default function EnHomePage() {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider
        headline1="A place in Hokkaido"
        headline2="you will want to come back to."
        ctaLabel="View Properties"
        ctaHref="/en/properties"
      />

      {/* KPI Section */}
      <section className="bg-navy-800 py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-gold-400 text-xs tracking-[0.4em] uppercase font-sans text-center mb-10">
            Operational Achievements
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="py-8 sm:py-6 px-6 text-center">
                <div className="flex items-end justify-center gap-1">
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
                {kpi.subnote && (
                  <p className="text-white/30 text-[11px] font-sans mt-0.5">{kpi.subnote}</p>
                )}
              </div>
            ))}
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
                title="COZY STAY HOKKAIDO Co., Ltd."
                description="A company specializing in the operation and management of accommodation facilities in Hokkaido. We deliver high-quality stays in Sapporo and Asahikawa through licensed inn and short-term rental operations."
              />
              <div className="mt-8 space-y-4 text-sm text-gray-600 leading-relaxed font-sans">
                <p>
                  Under our philosophy of creating a place guests want to return to, we consistently operate and manage accommodation facilities across Hokkaido—handling everything from reservation management and guest support to housekeeping, all with our own dedicated staff.
                </p>
                <p>
                  Since its establishment in 2025, COZY STAY HOKKAIDO has built a strong operational track record backed by more than 1,300 highly rated Airbnb reviews, and currently operates 26 units in the Sapporo and Asahikawa areas.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/en/company"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 text-white text-sm font-medium tracking-wider hover:bg-navy-700 transition-colors duration-200"
                >
                  Learn More
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
                  Booking Website ↗
                </a>
              </div>
            </div>

            {/* Company photo */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about/Toppage-aboutus-company.jpg"
                  alt="COZY STAY HOKKAIDO Co., Ltd."
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
            <SectionTitle label="SITE CONTENTS" title="Contents" centered />
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
                  Learn More
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
            Looking for accommodation in Hokkaido?
          </h2>
          <p className="text-white/60 text-sm leading-relaxed font-sans mb-8">
            All of our properties can be viewed and booked through our official booking website.
          </p>
          <a
            href="https://wfvacations.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold-500 text-white text-sm font-medium tracking-wider hover:bg-gold-600 transition-colors duration-200"
          >
            Visit Booking Website
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
