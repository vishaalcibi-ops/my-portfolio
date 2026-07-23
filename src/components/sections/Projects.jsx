import { HiArrowTopRightOnSquare, HiCodeBracketSquare } from 'react-icons/hi2'
import { projects } from '../../data/portfolioData'
import Container, { Section, StaggerContainer, StaggerItem } from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <Section id="projects" className="bg-apple-gray-100/50 dark:bg-apple-gray-800/30">
      <Container>
        <SectionHeading
          label="Portfolio"
          title="Featured projects"
          description="A selection of my recent work showcasing design and development expertise."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.12}>
          {featuredProjects.map((project) => (
            <StaggerItem key={project.title}>
              <article className="group glass-card overflow-hidden h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-apple-gray-200 to-apple-gray-100 dark:from-apple-gray-700 dark:to-apple-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-apple-gray-600 hover:bg-apple-blue hover:text-white transition-colors"
                    >
                      <HiArrowTopRightOnSquare className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-apple-gray-600 hover:bg-apple-blue hover:text-white transition-colors"
                    >
                      <HiCodeBracketSquare className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-apple-gray-600 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-apple-gray-400 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-apple-blue/10 text-apple-blue font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
