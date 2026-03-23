import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

const roles = [
  {
    area: "Sapporo",
    color: "navy",
    members: [
      {
        name: "Mikako Natsuhori",
        role: "Guest Relations",
        detail:
          "Handles check-in, check-out, guest inquiries, and first-response emergency communications. Ensures guests feel supported and at ease throughout their stay.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
        ),
      },
      {
        name: "Masanobu Tazawa",
        role: "Sapporo Area Manager — Housekeeping & Facility Management",
        detail:
          "Coordinates and manages housekeeping staff across all Sapporo properties. Oversees post-checkout cleaning schedules and quality checks end-to-end.",
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
      },
    ],
  },
  {
    area: "Asahikawa",
    color: "slate",
    members: [
      {
        name: "Mayumi Kishi",
        role: "Asahikawa Area Manager — Guest Relations, Housekeeping & Facility Management",
        detail:
          "As area manager, oversees all operations in the Asahikawa area—from guest support and facility management to housekeeping coordination.",
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
    title: "Reservation Received",
    body: "Bookings are automatically received through Airbnb and other platforms. The area manager reviews each reservation and sends a welcome message to the guest.",
  },
  {
    step: "02",
    title: "Housekeeping & Preparation",
    body: "After checkout, our dedicated housekeeping staff perform thorough cleaning, linen changes, and amenity restocking. A quality checklist is completed for every turnover.",
  },
  {
    step: "03",
    title: "Check-In",
    body: "We support self-check-in via smart locks. Guests receive detailed arrival instructions and local area information in advance to ensure a smooth and stress-free check-in.",
  },
  {
    step: "04",
    title: "In-Stay Support",
    body: "Area managers respond promptly to any guest inquiries during the stay. In the event of equipment issues or emergencies, the assigned manager arranges on-site assistance or contractor dispatch.",
  },
  {
    step: "05",
    title: "Check-Out & Review",
    body: "Housekeeping for the next guest is arranged immediately after checkout. Guest reviews are analyzed and fed back into ongoing service quality improvements.",
  },
];

export default function EnOperationsPage() {
  return (
    <>
      <PageHeader
        label="OPERATIONS"
        title="Operations"
        description="COZY STAY HOKKAIDO assigns dedicated managers to each area, maintaining a consistent operational framework for guest support and housekeeping."
      />

      {/* Team Structure */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            label="TEAM STRUCTURE"
            title="Roles & Responsibilities"
            description="Dedicated staff are assigned to each area, enabling swift and accountable operations."
          />

          {/* Structure Diagram */}
          <div className="mt-12">
            {/* Top: Representative */}
            <div className="flex justify-center mb-8">
              <div className="bg-navy-800 text-white px-8 py-4 text-center min-w-[200px]">
                <p className="text-gold-400 text-[10px] tracking-widest uppercase font-sans mb-1">Representative</p>
                <p style={{ fontFamily: "var(--font-serif)" }} className="text-base font-semibold">Yongi Nishihara</p>
                <p className="text-white/60 text-xs font-sans mt-0.5">CEO & Overall Director</p>
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
                      {area.area}
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
          <SectionTitle label="STANDARDS" title="Operational Standards" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white border border-cream-200 p-6 text-center">
              <div className="text-gold-500 text-3xl font-serif font-semibold mb-2">Daily</div>
              <p className="text-navy-800 text-sm font-medium font-sans mb-2">Housekeeping</p>
              <p className="text-gray-500 text-xs leading-relaxed font-sans">
                A full cleaning is performed after every checkout at all properties, so every guest arrives to a spotless, ready room.
              </p>
            </div>
            <div className="bg-white border border-cream-200 p-6 text-center">
              <div className="text-gold-500 text-3xl font-serif font-semibold mb-2">Instant</div>
              <p className="text-navy-800 text-sm font-medium font-sans mb-2">Incident Response</p>
              <p className="text-gray-500 text-xs leading-relaxed font-sans">
                In the event of equipment failure or an emergency, the area manager arranges on-site assistance or contractor dispatch without delay.
              </p>
            </div>
            <div className="bg-white border border-cream-200 p-6 text-center">
              <div className="text-gold-500 text-3xl font-serif font-semibold mb-2">Unified</div>
              <p className="text-navy-800 text-sm font-medium font-sans mb-2">Reservation & Quality Control</p>
              <p className="text-gray-500 text-xs leading-relaxed font-sans">
                Reservations, pricing, and review analysis are managed centrally to maintain consistent quality and occupancy rates across all properties.
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
            title="Operational Workflow"
            description="A consistent end-to-end process from reservation through checkout ensures stable, high-quality operations."
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
