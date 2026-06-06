interface Props {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ number, title, subtitle }: Props) {
  return (
    <div className="mb-16">
      {/* Decorative number — stacked above title, faint primary tint */}
      <p
        aria-hidden
        className="font-heading font-light leading-none select-none"
        style={{ fontSize: "4.5rem", color: "rgba(166, 124, 82, 0.25)" }}
      >
        {number}
      </p>

      <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-foreground mt-1">
        {title}
      </h2>

      <div className="flex items-center gap-3 mt-5">
        <div className="w-10 h-px bg-primary/50" />
        <div className="w-1.5 h-1.5 rotate-45 bg-primary/35" />
      </div>

      {subtitle && (
        <p className="font-body text-muted-foreground mt-5 max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
