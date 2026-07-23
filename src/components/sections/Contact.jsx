import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiEnvelope, HiMapPin, HiPaperAirplane } from 'react-icons/hi2'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { siteConfig } from '../../data/portfolioData'
import Container, { Section, FadeIn } from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          label="Contact"
          title="Let's work together"
          description="Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
          <FadeIn className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-apple-gray-600 dark:text-white mb-4">
                Get in touch
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-apple-gray-400 hover:text-apple-blue transition-colors group"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-apple-blue/10 text-apple-blue group-hover:bg-apple-blue group-hover:text-white transition-all">
                    <HiEnvelope className="h-5 w-5" />
                  </span>
                  {siteConfig.email}
                </a>
                <div className="flex items-center gap-3 text-apple-gray-400">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-apple-blue/10 text-apple-blue">
                    <HiMapPin className="h-5 w-5" />
                  </span>
                  {siteConfig.location}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-apple-gray-600 dark:text-white mb-4">
                Follow me
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub, href: siteConfig.social.github, label: 'GitHub' },
                  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
                  { icon: FaTwitter, href: siteConfig.social.twitter, label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-400 hover:bg-apple-blue hover:text-white transition-all"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-apple-gray-600 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 dark:bg-apple-gray-700 border border-transparent focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/20 outline-none transition-all text-apple-gray-600 dark:text-white placeholder:text-apple-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-apple-gray-600 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 dark:bg-apple-gray-700 border border-transparent focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/20 outline-none transition-all text-apple-gray-600 dark:text-white placeholder:text-apple-gray-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-apple-gray-600 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-apple-gray-100 dark:bg-apple-gray-700 border border-transparent focus:border-apple-blue focus:ring-2 focus:ring-apple-blue/20 outline-none transition-all text-apple-gray-600 dark:text-white placeholder:text-apple-gray-300 resize-none"
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                {submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <HiPaperAirplane className="h-4 w-4" />
                  </>
                )}
              </Button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-500"
                >
                  Thank you! I&apos;ll get back to you soon. (Connect to a backend or service like Formspree to handle submissions.)
                </motion.p>
              )}
            </form>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
