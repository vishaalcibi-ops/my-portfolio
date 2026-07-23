import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, siteConfig } from '../../data/portfolioData'
import ThemeToggle from './ThemeToggle'
import Container from '../ui/Container'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-16 md:h-20 items-center justify-between">
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-apple-gray-600 dark:text-white hover:opacity-80 transition-opacity"
          >
            {siteConfig.name.split(' ')[0]}
            <span className="text-apple-blue">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-apple-gray-400 hover:text-apple-gray-600 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
            <a href="#contact" className="btn-primary text-sm !py-2.5 !px-5">
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-apple-gray-100 dark:bg-apple-gray-700"
            >
              {isOpen ? <HiX className="h-5 w-5" /> : <HiMenuAlt3 className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/10"
          >
            <Container className="py-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-lg font-medium text-apple-gray-600 dark:text-white py-2"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                <li>
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full mt-2"
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
