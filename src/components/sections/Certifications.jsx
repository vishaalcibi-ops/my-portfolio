import { certifications } from '../../data/portfolioData'
import Container, {
  Section,
  StaggerContainer,
  StaggerItem,
} from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

export default function Certifications() {
  return (
    <Section id="certifications">
      <Container>
        <SectionHeading
          label="Certifications"
          title="My Certifications"
          description="Professional certifications and achievements."
        />

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.1}
        >
          {certifications.map((certificate) => (
            <StaggerItem key={certificate.title}>
              <Card className="overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {certificate.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    {certificate.issuer}
                  </p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}