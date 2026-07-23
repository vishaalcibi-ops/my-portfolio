import { FadeIn } from './Container'

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'right'
        ? 'text-right ml-auto'
        : 'text-left'

  return (
    <FadeIn className={`mb-12 md:mb-16 max-w-3xl ${alignClass} ${className}`}>
      {label && (
        <span className="inline-block mb-3 text-sm font-semibold tracking-widest uppercase text-apple-blue">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-apple-gray-600 dark:text-white text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-apple-gray-400 dark:text-apple-gray-300 leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  )
}
