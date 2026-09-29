interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

const SectionHeading = ({ eyebrow, title, subtitle, dark = false }: SectionHeadingProps) => (
  <div className="mx-auto mb-14 max-w-2xl text-center">
    <span className={`eyebrow ${dark ? 'text-brass-300' : ''}`}>
      <span className="h-px w-6 bg-current" />
      {eyebrow}
      <span className="h-px w-6 bg-current" />
    </span>
    <h2 className={`mt-4 text-4xl font-semibold tracking-tight sm:text-5xl ${dark ? 'text-cream' : 'text-ink'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-cream/70' : 'text-ink/65'}`}>{subtitle}</p>
    )}
  </div>
);

export default SectionHeading;
