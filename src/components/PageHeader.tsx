interface PageHeaderProps {
  label: string;       // e.g. "COMPANY PROFILE"
  title: string;       // Japanese heading
  description?: string;
}

export default function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="bg-cream-50 border-b border-cream-200 py-14 lg:py-20 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <p className="text-gold-500 text-xs tracking-[0.35em] uppercase font-sans mb-3">
          {label}
        </p>
        <h1
          style={{ fontFamily: "var(--font-serif)" }}
          className="text-navy-800 text-3xl lg:text-4xl font-semibold tracking-wide"
        >
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-xl font-sans">
            {description}
          </p>
        )}
        <div className="mt-6 w-12 h-px bg-gold-500" />
      </div>
    </div>
  );
}
