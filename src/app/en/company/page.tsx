import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import StaffCard from "@/components/StaffCard";

const MAPS_URL = "https://maps.app.goo.gl/w4qhUGrHxzB1dEPV7";

const companyInfo = [
  { label: "Company Name", value: "COZY STAY HOKKAIDO Co., Ltd." },
  { label: "Address", value: "3-15-202 Minami 9-jo Nishi 4-chome, Chuo-ku, Sapporo, Hokkaido 064-0809, Japan" },
  { label: "Phone", value: "011-555-3951" },
  { label: "Established", value: "June 23, 2025" },
  { label: "Capital", value: "JPY 3,000,000" },
  { label: "Representative Director", value: "Yongi Nishihara" },
  { label: "Business Description", value: "Operation and management of accommodation properties in Hokkaido" },
  { label: "Areas", value: "Sapporo, Asahikawa" },
  { label: "Banking", value: "Hokuyo Bank, GMO Aozora Net Bank" },
  { label: "Shareholders", value: "Yongi Nishihara　100%" },
];

const staff = [
  {
    name: "Yongi Nishihara（西原龍起）",
    nameReading: "Representative Director",
    role: "CEO",
    bio: (
      <>
        <p>
          Born September 9, 1986 in Tokyo. Graduated from Sophia University, Faculty of Economics.<br />
          After graduating, joined Mitsui &amp; Co., Ltd., gaining experience in domestic and international business operations and business development.<br />
          In 2019, became independent and founded the tourism charter business &quot;Sri Lanka Taxi Service&quot; in Sri Lanka.
        </p>
        <p>
          From 2022, expanded into accommodation operations in Japan, developing and managing short-term rental facilities in Okinawa (Miyakojima) and Hokkaido.<br />
          In 2025, established COZY STAY HOKKAIDO Co., Ltd. to scale accommodation operations in Hokkaido. Currently based in Sapporo, driving the growth of accommodation facilities across the Hokkaido region.
        </p>
        <p>
          Since his student days, he has frequently visited Hokkaido through winter sports, developing a strong appreciation for its natural environment and tourism potential.<br />
          He aims to promote the appeal of Hokkaido to guests both domestically and internationally, contributing to the development of regional tourism through the accommodation business.
        </p>
      </>
    ),
    hasPhoto: true,
    photoSrc: "/images/about/yonginishihara.jpg",
    isRepresentative: true,
  },
  {
    name: "Mayumi Kishi（岸真由美）",
    nameReading: "",
    role: "Business Director & Asahikawa Area Manager",
    bio: "Oversees all operations in the Asahikawa area while contributing to overall business advancement. Handles a wide range of responsibilities from on-site management to business strategy planning.",
    hasPhoto: true,
    isRepresentative: false,
  },
  {
    name: "Masanobu Tazawa（田澤政信）",
    nameReading: "",
    role: "Sapporo Area Manager — Housekeeping & Facility Management",
    bio: "Oversees the coordination and scheduling of housekeeping staff across all Sapporo properties, ensuring quality standards are consistently maintained.",
    hasPhoto: false,
    isRepresentative: false,
  },
  {
    name: "Mikako Natsuhori（夏堀美香子）",
    nameReading: "",
    role: "Sapporo Guest Relations",
    bio: "Handles guest inquiries and check-in coordination in the Sapporo area. Delivers prompt and attentive service to ensure guest peace of mind and satisfaction.",
    hasPhoto: false,
    isRepresentative: false,
  },
];

export default function EnCompanyPage() {
  return (
    <>
      {/* Photo Page Header */}
      <div className="relative w-full h-52 sm:h-64 lg:h-80 overflow-hidden">
        <Image
          src="/images/about/Companybulding.jpg"
          alt="Company Profile"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-900/55" />
        <div className="absolute inset-0 flex items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-7xl w-full mx-auto">
            <p className="text-gold-400 text-xs tracking-[0.35em] uppercase font-sans mb-3">
              COMPANY PROFILE
            </p>
            <h1
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-white text-3xl lg:text-4xl font-semibold tracking-wide"
            >
              Company Overview
            </h1>
            <p className="mt-4 text-white/70 text-sm leading-relaxed max-w-xl font-sans">
              COZY STAY HOKKAIDO Co., Ltd. is a hospitality management company operating accommodation properties in Hokkaido, Japan.
            </p>
            <div className="mt-5 w-12 h-px bg-gold-400" />
          </div>
        </div>
      </div>

      {/* Company Data Table */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="BASIC INFORMATION" title="Company Information" />
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

      {/* Location */}
      <section className="bg-cream-50 py-20 px-5 sm:px-8 lg:px-10 border-t border-cream-200">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="LOCATION" title="Location" />
          <div className="mt-10">
            {/* Address card */}
            <div className="bg-navy-800/5 border border-cream-200 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0 mt-0.5 text-gold-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-navy-800 font-medium text-base font-sans">Postal Code: 064-0809</p>
                <p className="text-gray-700 text-sm mt-1 font-sans leading-relaxed">
                  3-15-202, Nishi 4-chome, Minami 9-jo, Chuo-ku, Sapporo, Hokkaido, Japan
                </p>
                <p className="text-gray-500 text-xs mt-3 font-sans">
                  Approx. 5-minute walk from Nakajima Koen Station (Subway Namboku Line)
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-navy-600 text-xs mt-3 font-sans hover:text-navy-800 transition-colors"
                >
                  Open in Google Maps
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Embedded map */}
            <div className="mt-4 border border-cream-200 overflow-hidden relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://maps.google.com/maps?q=Cozy+Stay+Sapporo+Central+Nakajima&ll=43.0489081,141.3534913&output=embed&hl=en&z=17"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cozy Stay Sapporo Central Nakajima"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Staff / Team */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="TEAM"
            title="CEO & Team"
            description="Meet the team behind COZY STAY HOKKAIDO Co., Ltd."
          />
          <div className="mt-10 flex flex-col gap-6">
            {staff.map((member) => (
              <StaffCard key={member.name} {...member} />
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-400 font-sans">
            * Photos of some team members will be added in due course.
          </p>
        </div>
      </section>
    </>
  );
}
