interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({ label, title, description, centered }: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <p className="text-gold-500 text-xs tracking-[0.35em] uppercase font-sans mb-2">
          {label}
        </p>
      )}
      <h2
        style={{ fontFamily: "var(--font-serif)" }}
        className="text-navy-800 text-2xl lg:text-3xl font-semibold tracking-wide"
      >
        {title}
      </h2>
      <div className={`mt-4 w-10 h-px bg-gold-500 ${centered ? "mx-auto" : ""}`} />
      {description && (
        <p className="mt-5 text-gray-500 text-sm leading-relaxed font-sans max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
