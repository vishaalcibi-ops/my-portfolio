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
          title="Passionate about Full Stack Web Development"
          description="A Computer Science and Engineering student who enjoys building modern, responsive, and user-friendly web applications while continuously learning new technologies."
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
                Hi, I'm <strong>Vishaal P</strong>, a third-year Computer Science and
                Engineering student at <strong>Kangayam Institute of Technology</strong>.
                I am passionate about Full Stack Web Development and enjoy creating
                modern, responsive, and user-friendly web applications.
              </p>

              <p className="text-base sm:text-lg text-apple-gray-400 leading-relaxed">
                I have knowledge of <strong>Java, Python, JavaScript, C, and C++</strong>.
                My technical skills include <strong>HTML, CSS, React, Bootstrap,
                Node.js, Servlets, JSP, MongoDB, MySQL, GitHub, and LinkedIn</strong>.
                I enjoy learning new technologies and applying them to real-world
                projects.
              </p>

              <p className="text-base sm:text-lg text-apple-gray-400 leading-relaxed">
                I have completed <strong>four full-stack projects</strong> that strengthened
                my skills in frontend development, backend development, and database
                management. I also completed a <strong>15-day Java Full Stack Development
                Internship at InnTechVolt</strong>, where I gained practical industry
                experience.
              </p>

              <p className="text-base sm:text-lg text-apple-gray-400 leading-relaxed">
                I have earned certifications from <strong>NPTEL, Infosys Springboard,
                and MongoDB</strong>, and I actively participate in technical learning
                programs to improve my skills. My goal is to begin my career as a
                <strong> Full Stack Developer</strong> and contribute to building
                innovative, high-quality software solutions.
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