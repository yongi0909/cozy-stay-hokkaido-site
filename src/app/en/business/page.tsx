import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Property Operation & Management",
    body: "We provide comprehensive operation and management of accommodation facilities (licensed inns and short-term rentals) in Hokkaido—from property maintenance and equipment support to owner reporting.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Reservation & Channel Management",
    body: "We manage calendars, pricing, and occupancy optimization across Airbnb and multiple booking platforms. Our goal is to minimize vacancy periods and maximize revenue performance.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Guest Support",
    body: "Our dedicated staff handles all guest inquiries promptly and attentively—covering check-in, check-out, facility questions, and emergency situations.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Housekeeping & Turnover Management",
    body: "Our dedicated housekeeping staff handle daily cleaning, amenity restocking, linen changes, and facility checks after every checkout—ensuring each property is always pristine for arriving guests.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Regulatory Compliance",
    body: "We obtain the required permits and licenses under the Ryokan Business Act and the Minpaku New Law (Housing Accommodation Business Act), operating in full compliance with all applicable regulations.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Area Expansion (Sapporo & Asahikawa)",
    body: "Currently operating 23 rooms in Sapporo and 3 rooms in Asahikawa. Each area has a dedicated manager, enabling responsive, community-based operations.",
  },
];

export default function EnBusinessPage() {
  return (
    <>
      {/* Photo Page Header */}
      <div className="relative w-full h-52 sm:h-64 lg:h-80 overflow-hidden">
        <Image
          src="/images/business/main-visual3.jpg"
          alt="Business"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy-900/50" />
        <div className="absolute inset-0 flex items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-7xl w-full mx-auto">
            <p className="text-gold-400 text-xs tracking-[0.35em] uppercase font-sans mb-3">
              BUSINESS
            </p>
            <h1
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-white text-3xl lg:text-4xl font-semibold tracking-wide"
            >
              Business
            </h1>
            <p className="mt-4 text-white/90 text-sm font-semibold leading-relaxed max-w-xl font-sans">
              An overview of COZY STAY HOKKAIDO&apos;s accommodation operations in Hokkaido and the services we provide.
            </p>
            <div className="mt-5 w-12 h-px bg-gold-400" />
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle label="OVERVIEW" title="Business Overview" />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="space-y-5 text-sm text-gray-600 leading-relaxed font-sans">
              <p>
                COZY STAY HOKKAIDO Co., Ltd. is a company primarily engaged in the operation and management of accommodation facilities in Hokkaido. We operate multiple properties in Sapporo and Asahikawa under both licensed inn (ryokan) and short-term rental (minpaku) formats.
              </p>
              <p>
                Beyond day-to-day operations, we manage reservation systems, guest support, housekeeping, and facility maintenance entirely in-house, ensuring a consistently high standard of service quality.
              </p>
              <p>
                Our track record—<strong className="text-navy-800 font-semibold">over 1,300 reviews</strong> and an average rating of <strong className="text-navy-800 font-semibold">4.98 on Airbnb</strong>—reflects the results of our dedicated, locally-based team delivering honest and attentive service every day.
              </p>
            </div>

            {/* Airbnb review screenshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative border border-cream-200 shadow-sm overflow-hidden bg-white w-full max-w-xs">
                <Image
                  src="/images/business/overview.png"
                  alt="Airbnb review track record"
                  width={320}
                  height={448}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 80vw, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="bg-cream-50 py-20 px-5 sm:px-8 lg:px-10 border-t border-cream-200">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="SERVICES"
            title="Our Services"
            description="Every aspect of accommodation operations is managed in-house for consistent quality."
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
          <SectionTitle label="AREAS" title="Operating Areas" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Sapporo */}
            <div className="border border-cream-200 overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="/images/business/areas-sapporo.jpg"
                  alt="Sapporo Area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mb-2">SAPPORO</p>
                <h3
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-navy-800 text-xl font-semibold mb-3"
                >
                  Sapporo Area
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans mb-4">
                  23 rooms across multiple neighborhoods in Sapporo, including Nakajima Koen, Chuo-ku, Hongo-dori, Higashi-ku, and Maruyama—conveniently located along the subway lines.
                </p>
                <div className="flex items-baseline gap-2 font-sans">
                  <span className="text-3xl font-serif text-navy-800">23</span>
                  <span className="text-gray-500 text-sm">rooms in operation</span>
                </div>
              </div>
            </div>
            {/* Asahikawa */}
            <div className="border border-cream-200 overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="/images/business/areas-asahikawa.jpg"
                  alt="Asahikawa Area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mb-2">ASAHIKAWA</p>
                <h3
                  style={{ fontFamily: "var(--font-serif)" }}
                  className="text-navy-800 text-xl font-semibold mb-3"
                >
                  Asahikawa Area
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans mb-4">
                  3 rooms in Asahikawa city and the nearby town of Pippu. Ideal as a base for exploring Daisetsuzan National Park and Asahiyama Zoo.
                </p>
                <div className="flex items-baseline gap-2 font-sans">
                  <span className="text-3xl font-serif text-navy-800">3</span>
                  <span className="text-gray-500 text-sm">rooms in operation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
