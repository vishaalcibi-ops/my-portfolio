import { motion } from 'framer-motion'
import { experience } from '../../data/portfolioData'
import Container, { Section, FadeIn } from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          label="Experience"
          title="My professional journey"
          description="A timeline of roles and achievements that shaped my career."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-apple-gray-200 dark:bg-apple-gray-700" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <FadeIn key={item.company} delay={index * 0.1}>
                <div
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-apple-blue ring-4 ring-apple-gray-50 dark:ring-apple-gray-900 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6"
                    >
                      <span className="text-sm font-medium text-apple-blue">{item.period}</span>
                      <h3 className="text-lg font-semibold text-apple-gray-600 dark:text-white mt-1">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-apple-gray-400 mt-0.5">
                        {item.company}
                      </p>
                      <p className="text-sm text-apple-gray-400 mt-3 leading-relaxed">
                        {item.description}
                      </p>
                      <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        {item.highlights.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
