import { motion } from 'framer-motion'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { siteConfig } from '../../data/portfolioData'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-apple-blue/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--tw-gradient-from)_70%)] from-apple-gray-50 dark:from-apple-gray-900" />
      </div>

      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-apple-gray-400 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Available for freelance work
          </motion.span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-apple-gray-600 dark:text-white leading-[1.1] text-balance">
            Hi, I&apos;m{' '}
            <span className="gradient-text">{siteConfig.name}</span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-apple-gray-400 dark:text-apple-gray-300">
            {siteConfig.title}
          </p>

          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-apple-gray-400 leading-relaxed">
            {siteConfig.bio}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#projects">
              View My Work
              <HiArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" href="#contact">
              Get in Touch
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full glass hover:bg-apple-blue/10 hover:text-apple-blue transition-all"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full glass hover:bg-apple-blue/10 hover:text-apple-blue transition-all"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-apple-gray-400 hover:text-apple-blue transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <HiArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.a>
      </Container>
    </section>
  )
}
