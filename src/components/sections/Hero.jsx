import { motion } from 'framer-motion'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi2'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { siteConfig } from '../../data/portfolioData'
import Container from '../ui/Container'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />

        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-gray-300 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>

            Available for Freelance Work
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">
              {siteConfig.name}
            </span>
          </h1>

          <p className="mt-5 text-2xl text-gray-300">
            {siteConfig.title}
          </p>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
            {siteConfig.bio}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="#projects">
              View My Work
              <HiArrowRight className="h-4 w-4" />
            </Button>

            <Button variant="secondary" href="#contact">
              Contact Me
            </Button>
          </div>

          <div className="mt-10 flex justify-center gap-5">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-blue-500"
        >
          <span className="text-xs uppercase tracking-widest">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <HiArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </Container>
    </section>
  )
}