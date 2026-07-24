export const siteConfig = {
  name: 'VISHAAL P',
  title: 'Full Stack Web Developer',
  email: 'vishaalcibi@gmail.com',
  location: 'Kangayam',
  bio: 'I craft premium digital experiences that blend beautiful design with flawless engineering. Passionate about creating products that make a difference.',
  social: {
    github: 'https://github.com/vishaalcibi-ops',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    dribbble: 'https://dribbble.com/yourusername',
  },
  resumeUrl: '#',
}

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export const skills = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'Python', level: 80, category: 'Backend' },
  { name: 'Figma', level: 92, category: 'Design' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'PostgreSQL', level: 78, category: 'Backend' },
  { name: 'AWS', level: 75, category: 'DevOps' },
  { name: 'Framer Motion', level: 88, category: 'Frontend' },
  { name: 'GraphQL', level: 82, category: 'Backend' },
  { name: 'UI/UX Design', level: 90, category: 'Design' },
  { name: 'Docker', level: 70, category: 'DevOps' },
]

export const services = [
  {
    icon: 'code',
    title: 'Web Development',
    description:
      'Building fast, scalable, and maintainable web applications with modern frameworks and best practices.',
  },
  {
    icon: 'design',
    title: 'UI/UX Design',
    description:
      'Creating intuitive, beautiful interfaces that delight users and drive engagement.',
  },
  {
    icon: 'mobile',
    title: 'Mobile Development',
    description:
      'Crafting responsive and native-like mobile experiences that work seamlessly across devices.',
  },
  {
    icon: 'consult',
    title: 'Technical Consulting',
    description:
      'Providing expert guidance on architecture, tech stack decisions, and development strategy.',
  },
]

export const projects = [
  {
  title: "AI Skin Risk Detection System",

  description:
    "An AI-powered web application that analyzes skin images to provide a preliminary skin risk assessment. Built with a responsive interface and designed to encourage professional medical consultation.",

  technologies: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB"
  ],

  liveUrl: "https://skin-risk-app-1.onrender.com/",

  githubUrl: "https://github.com/vishaalcibi-ops/skin-risk-app",

  image: "/projects/skin-risk.png"
},
  {
    title: 'Aura Finance',
    description:
      'A premium fintech dashboard with real-time analytics, portfolio tracking, and AI-powered insights.',
    image: '/assets/project-1.svg',
    tags: ['React', 'TypeScript', 'Tailwind', 'Chart.js'],
    liveUrl: '#',
    githubUrl: "https://github.com/vishaalcibi-ops/my-portfolio",
    featured: true,
  },
  {
    title: 'Nexus Commerce',
    description:
      'Modern e-commerce platform with seamless checkout, inventory management, and customer analytics.',
    image: '/assets/project-2.svg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Pulse Health',
    description:
      'Healthcare app connecting patients with providers through telemedicine and health tracking.',
    image: '/assets/project-3.svg',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Studio Creative',
    description:
      'Portfolio and project management platform for creative agencies and freelancers.',
    image: '/assets/project-4.svg',
    tags: ['Vue.js', 'Firebase', 'GSAP', 'Cloudinary'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'TechCorp Inc.',
    period: '2023 — Present',
    description:
      'Leading frontend architecture for enterprise SaaS products. Mentoring junior developers and establishing design system standards.',
    highlights: ['React', 'TypeScript', 'Design Systems', 'Team Lead'],
  },
  {
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2021 — 2023',
    description:
      'Built and shipped multiple product features from concept to production. Reduced page load times by 60%.',
    highlights: ['Node.js', 'React', 'AWS', 'PostgreSQL'],
  },
  {
    role: 'UI/UX Designer',
    company: 'Creative Agency',
    period: '2019 — 2021',
    description:
      'Designed user interfaces for Fortune 500 clients. Conducted user research and usability testing.',
    highlights: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
  },
  {
    role: 'Junior Developer',
    company: 'Digital Studio',
    period: '2017 — 2019',
    description:
      'Started my journey building responsive websites and learning modern web development practices.',
    highlights: ['HTML/CSS', 'JavaScript', 'WordPress', 'PHP'],
  },
]

export const testimonials = [
  {
    quote:
      'An exceptional developer who combines technical excellence with an eye for design. Delivered our project ahead of schedule with outstanding quality.',
    author: 'Sarah Johnson',
    role: 'CEO, TechCorp Inc.',
    avatar: '/assets/avatar-1.svg',
  },
  {
    quote:
      'Working together was seamless. The attention to detail and commitment to user experience made all the difference in our product launch.',
    author: 'Michael Chen',
    role: 'Product Manager, StartupXYZ',
    avatar: '/assets/avatar-2.svg',
  },
  {
    quote:
      'Transformed our vision into a stunning digital experience. The portfolio speaks for itself — truly premium work.',
    author: 'Emily Rodriguez',
    role: 'Creative Director, Studio Creative',
    avatar: '/assets/avatar-3.svg',
  },
]

export const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
]
