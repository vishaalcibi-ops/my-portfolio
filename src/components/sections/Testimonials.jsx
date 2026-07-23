import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi2'
import { testimonials } from '../../data/portfolioData'
import Container, { Section, FadeIn } from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <Section id="testimonials" className="bg-apple-gray-100/50 dark:bg-apple-gray-800/30">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="What clients say"
          description="Hear from the people I've had the pleasure of working with."
        />

        <FadeIn>
          <div className="max-w-3xl mx-auto relative">
            <div className="glass-card p-8 md:p-12 text-center min-h-[320px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-apple-gray-600 dark:text-apple-gray-100 leading-relaxed italic">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </blockquote>

                  <div className="mt-8 flex items-center gap-4">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].author}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-apple-blue to-purple-500"
                      loading="lazy"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-apple-gray-600 dark:text-white">
                        {testimonials[current].author}
                      </p>
                      <p className="text-sm text-apple-gray-400">{testimonials[current].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-apple-blue/10 hover:text-apple-blue transition-all"
              >
                <HiChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-apple-blue' : 'w-2 bg-apple-gray-300 dark:bg-apple-gray-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-apple-blue/10 hover:text-apple-blue transition-all"
              >
                <HiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
