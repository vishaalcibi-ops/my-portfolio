import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseClass =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'secondary'
        ? 'btn-secondary'
        : variant === 'ghost'
          ? 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-apple-gray-400 hover:text-apple-gray-600 dark:hover:text-white transition-colors'
          : 'btn-primary'

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
