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
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 mb-6">
              🟢 Available for Freelance Work
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="text-blue-500">{siteConfig.name}</span>
            </h1>

            <h2 className="text-2xl mt-5 text-gray-400">
              {siteConfig.title}
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-8">
              {siteConfig.bio}
            </p>

            <div className="flex gap-4 mt-10">
              <Button href="#projects">
                View My Work
                <HiArrowRight className="h-4 w-4" />
              </Button>

              <Button variant="secondary" href="#contact">
                Hire Me
              </Button>
            </div>

            <div className="flex gap-5 mt-10">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-3xl hover:text-blue-500" />
              </a>

              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-3xl hover:text-blue-500" />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
  src="/images/vishaal.jpeg"
  alt="Vishaal P"
  className="w-80 h-80 object-cover rounded-full border-8 border-blue-500 shadow-2xl"
/>
          </motion.div>

        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll</span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <HiArrowDown className="text-2xl" />
          </motion.div>
        </motion.a>

      </Container>
    </section>
  )
}