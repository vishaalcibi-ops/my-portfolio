import { HiDownload } from 'react-icons/hi'
import { siteConfig, stats } from '../../data/portfolioData'
import Container, {
  Section,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          label="About Me"
          title="Passionate about crafting digital excellence"
          description="I blend creativity with technical expertise to build products that users love."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo */}
          <FadeIn>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden glass-card">

                <img
                  src="/images/vishaal.jpeg"
                  alt="Vishaal P"
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-apple-blue/20 rounded-2xl blur-xl -z-10"></div>
            </div>
          </FadeIn>

          {/* About Content */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">

              <p className="text-base sm:text-lg text-apple-gray-400 leading-relaxed">
                I am <strong>Vishaal P</strong>, a passionate Full Stack Web Developer
                specializing in React, Node.js, Express.js, and MongoDB. I enjoy
                building modern, responsive, and user-friendly web applications that
                solve real-world problems.
              </p>

              <p className="text-base sm:text-lg text-apple-gray-400 leading-relaxed">
                My goal is to help businesses and startups build high-quality web
                applications with clean code, responsive design, and excellent user
                experience. I continuously learn new technologies and always focus on
                delivering reliable and professional solutions.
              </p>

              <StaggerContainer
                className="grid grid-cols-2 gap-4 pt-4"
                stagger={0.08}
              >
                {stats.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <div className="glass-card p-4 text-center">
                      <div className="text-2xl sm:text-3xl font-bold gradient-text">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-apple-gray-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <Button href={siteConfig.resumeUrl} className="mt-4">
                <HiDownload className="h-4 w-4" />
                Download Resume
              </Button>

            </div>
          </FadeIn>

        </div>
      </Container>
    </Section>
  )
}