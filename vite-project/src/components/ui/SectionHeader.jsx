export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className = '',
}) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}>
      {subtitle && (
        <p className="text-accent font-semibold text-sm md:text-base mb-2 uppercase tracking-wider">
          {subtitle}
        </p>
      )}
      <h2 className="heading-lg mb-4">{title}</h2>
      {description && (
        <p className="text-muted text-lg max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}

export default SectionHeader;
