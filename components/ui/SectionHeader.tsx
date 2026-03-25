interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} mb-12 md:mb-16`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
          <div className="h-px w-8 bg-cosmic-gold/50" />
          <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-cosmic-gold/80">
            {eyebrow}
          </span>
          <div className="h-px w-8 bg-cosmic-gold/50" />
        </div>
      )}
      <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 dark:text-slate-100 text-cosmic-deep">
        {title}{" "}
        {titleHighlight && <span className="text-gold">{titleHighlight}</span>}
      </h2>
      {subtitle && (
        <p className={`font-cormorant text-lg md:text-xl max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""} dark:text-slate-400 text-cosmic-deep/65`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
