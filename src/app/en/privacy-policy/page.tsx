import SectionTitle from "@/components/SectionTitle";

const sections = [
  {
    title: "1. Collection of Personal Information",
    body: "The Company may collect personal information such as name, email address, phone number, and company name when you make an inquiry or use our services.",
  },
  {
    title: "2. Purpose of Use",
    body: "Personal information collected will be used for the following purposes:\n\n- Responding to inquiries\n- Providing information about our services\n- Improving our services\n- Other purposes related to the above",
  },
  {
    title: "3. Management of Personal Information",
    body: "The Company will appropriately manage personal information and take necessary measures to prevent unauthorized access, loss, leakage, or alteration.",
  },
  {
    title: "4. Third-Party Disclosure",
    body: "The Company will not disclose or provide personal information to third parties except in the following cases:\n\n- When required by law\n- When necessary to protect life, body, or property\n- When the individual has given consent",
  },
  {
    title: "5. Use of Cookies",
    body: "Our website may use cookies to improve user experience. Cookies do not identify individuals.",
  },
  {
    title: "6. Changes to This Policy",
    body: "The Company may update this Privacy Policy as necessary.",
  },
  {
    title: "7. Contact",
    body: "For inquiries regarding this Privacy Policy, please contact:\n\nEmail: contact@cozystayhokkaido.jp",
  },
];

export default function EnPrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-xl font-sans">
            COZY STAY HOKKAIDO Co., Ltd. (hereinafter referred to as &quot;the Company&quot;) recognizes the importance of protecting personal information and is committed to handling such information appropriately in accordance with applicable laws and regulations.
          </p>
          <div className="mt-6 w-12 h-px bg-gold-500" />
        </div>
      </div>

      {/* Content */}
      <section className="bg-white py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <SectionTitle label="POLICY" title="Privacy Policy" />
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
