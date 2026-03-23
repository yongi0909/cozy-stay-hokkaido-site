import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import PropertyCard from "@/components/PropertyCard";
import PropertyCardWithSlider from "@/components/PropertyCardWithSlider";
import { properties } from "@/data/properties";

const areaLabelEn: Record<string, string> = {
  "札幌・中島公園": "Sapporo / Nakajima Park",
  "札幌・中心部":   "Sapporo / Central",
  "札幌・本郷通":   "Sapporo / Hongodori",
  "札幌・東エリア": "Sapporo / East",
  "札幌・円山":     "Sapporo / Maruyama",
  "旭川":           "Asahikawa",
};

const EN_BTN = "View Details / Book";

export default function EnPropertiesPage() {
  const sapporoProps = properties.filter((p) => p.area === "sapporo");
  const asahikawaProps = properties.filter((p) => p.area === "asahikawa");

  return (
    <>
      <PageHeader
        label="PROPERTIES"
        title="Properties"
        description={
          <>
            We are pleased to introduce the 26 accommodation units we operate in Hokkaido.<br />
            You can view details and booking information for each property from the pages below.
          </>
        }
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
            <span className="text-white/60 text-sm ml-1.5 font-sans">rooms</span>
            <p className="text-gold-400 text-xs font-sans mt-0.5">Total Properties</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div className="text-center sm:text-left">
            <span
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-white text-3xl font-semibold"
            >
              {sapporoProps.length}
            </span>
            <span className="text-white/60 text-sm ml-1.5 font-sans">rooms</span>
            <p className="text-gold-400 text-xs font-sans mt-0.5">Sapporo Area</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div className="text-center sm:text-left">
            <span
              style={{ fontFamily: "var(--font-serif)" }}
              className="text-white text-3xl font-semibold"
            >
              {asahikawaProps.length}
            </span>
            <span className="text-white/60 text-sm ml-1.5 font-sans">rooms</span>
            <p className="text-gold-400 text-xs font-sans mt-0.5">Asahikawa Area</p>
          </div>
        </div>
      </div>

      {/* Sapporo */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end gap-4 mb-12">
            <SectionTitle
              label="SAPPORO"
              title="Sapporo Area"
              description="We operate 23 accommodation units in the Sapporo area, offering convenient access to the city and comfortable stays for a wide range of guests."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {sapporoProps.map((property) =>
              property.photos ? (
                <PropertyCardWithSlider
                  key={property.id}
                  property={property}
                  buttonLabel={EN_BTN}
                  areaLabelOverride={areaLabelEn[property.areaLabel]}
                />
              ) : (
                <PropertyCard
                  key={property.id}
                  property={property}
                  buttonLabel={EN_BTN}
                  areaLabelOverride={areaLabelEn[property.areaLabel]}
                />
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
              title="Asahikawa Area"
              description="We operate 3 accommodation properties in the Asahikawa area, providing comfortable stays with convenient access to nature and regional attractions."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {asahikawaProps.map((property) =>
              property.photos ? (
                <PropertyCardWithSlider
                  key={property.id}
                  property={property}
                  buttonLabel={EN_BTN}
                  areaLabelOverride={areaLabelEn[property.areaLabel]}
                />
              ) : (
                <PropertyCard
                  key={property.id}
                  property={property}
                  buttonLabel={EN_BTN}
                  areaLabelOverride={areaLabelEn[property.areaLabel]}
                />
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
            All properties can be booked through our official booking website
          </h2>
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
