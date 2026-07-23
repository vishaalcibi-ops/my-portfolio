import { motion } from 'framer-motion'
import { skills } from '../../data/portfolioData'
import Container, { Section, StaggerContainer, StaggerItem } from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const categories = [...new Set(skills.map((s) => s.category))]

export default function Skills() {
  return (
    <Section id="skills" className="bg-apple-gray-100/50 dark:bg-apple-gray-800/30">
      <Container>
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="A curated stack of tools and technologies I use to bring ideas to life."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.06}>
          {skills.map((skill) => (
            <StaggerItem key={skill.name}>
              <div className="glass-card p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-apple-gray-600 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-apple-blue/10 text-apple-blue">
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-apple-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-apple-gray-200 dark:bg-apple-gray-700 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-apple-blue to-purple-500"
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium glass text-apple-gray-400"
            >
              {cat}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  )
}
