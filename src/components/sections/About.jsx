import { HiDownload } from 'react-icons/hi'
import { siteConfig, stats } from '../../data/portfolioData'
import Container, { Section, FadeIn, StaggerContainer, StaggerItem } from '../ui/Container'
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
          <FadeIn>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden glass-card">
                <div className="w-full h-full bg-gradient-to-br from-apple-blue/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-apple-blue to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                      {siteConfig.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <p className="mt-4 text-sm text-apple-gray-400">
                      Replace with your photo in{' '}
                      <code className="text-apple-blue">/src/assets/</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-apple-blue/20 rounded-2xl blur-xl -z-10" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-apple-gray-400 leading-relaxed">
                I am Vishaal P, a passionate Full Stack Web Developer with a strong interest in building modern, responsive, and user-friendly web applications. I work with technologies such as HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB to develop practical solutions for real-world problems.

I enjoy learning new technologies, improving my development skills, and creating applications that provide a great user experience. My goal is to deliver high-quality web solutions and build long-term relationships with clients through reliable and professional work.
              </p>
              <p className="text-base sm:text-lg text-apple-gray-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new design trends,
                contributing to open source, or sharing knowledge with the developer community.
              </p>

              <StaggerContainer className="grid grid-cols-2 gap-4 pt-4" stagger={0.08}>
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
