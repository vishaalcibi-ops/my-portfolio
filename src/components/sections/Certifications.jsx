import {
  HiCodeBracket,
  HiPaintBrush,
  HiDevicePhoneMobile,
  HiLightBulb,
  HiComputerDesktop,
  HiServer,
  HiCircleStack,
} from 'react-icons/hi2'

import { services } from '../../data/portfolioData'
import Container, { Section, StaggerContainer, StaggerItem } from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

const iconMap = {
  code: HiCodeBracket,
  frontend: HiCodeBracket,
  backend: HiCodeBracket,
  database: HiCodeBracket,
  design: HiPaintBrush,
  mobile: HiDevicePhoneMobile,
  consult: HiLightBulb,
}


export default function Services() {
  return (
    <Section id="certifications">
      <Container>
        <SectionHeading
          label="Services"
          title="What I can do for you"
          description="Services I provide based on my skills and experience."
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          stagger={0.1}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || HiCodeBracket;

            return (
              <StaggerItem key={service.title}>
                <Card className="h-full text-center group">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-apple-blue/10 text-apple-blue mb-5 group-hover:bg-apple-blue group-hover:text-white transition-all duration-300">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-semibold text-apple-gray-600 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-apple-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </Container>
    </Section>
  )
}