import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { navLinks, siteConfig } from '../../data/portfolioData'
import Container, { FadeIn } from '../ui/Container'

const socialIcons = [
  { icon: FaGithub, href: siteConfig.social.github, label: 'GitHub' },
  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-apple-gray-200 dark:border-apple-gray-700 bg-apple-gray-50 dark:bg-apple-gray-900">
      <Container>
        <div className="py-12 md:py-16">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
              {/* Brand */}
              <div>
                <a
                  href="#"
                  className="text-xl font-bold tracking-tight text-apple-gray-600 dark:text-white"
                >
                  {siteConfig.name.split(' ')[0]}
                  <span className="text-apple-blue">.</span>
                </a>
                <p className="mt-3 text-sm text-apple-gray-400 leading-relaxed max-w-xs">
                  Crafting premium digital experiences with passion and precision.
                </p>
                <div className="flex gap-3 mt-5">
                  {socialIcons.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-apple-gray-100 dark:bg-apple-gray-700 text-apple-gray-400 hover:text-apple-blue hover:bg-apple-blue/10 transition-all"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold text-apple-gray-600 dark:text-white mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-apple-gray-400 hover:text-apple-blue transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold text-apple-gray-600 dark:text-white mb-4">
                  Get in Touch
                </h4>
                <ul className="space-y-2 text-sm text-apple-gray-400">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="hover:text-apple-blue transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>{siteConfig.location}</li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 pt-8 border-t border-apple-gray-200 dark:border-apple-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-apple-gray-400">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-apple-gray-400 flex items-center gap-1">
              Built with <FaHeart className="text-red-500 h-3 w-3" /> using React & Tailwind
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
