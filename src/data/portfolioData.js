export const siteConfig = {
  name: 'VISHAAL P',
  title: 'Full Stack Web Developer',
  email: 'vishaalcibi@gmail.com',
  location: 'Kangayam',
  bio: 'Aspiring Full Stack Developer and Computer Science Engineering student with hands-on experience in React, Node.js, Java, MongoDB, and MySQL. Passionate about building modern, scalable web applications and solving real-world problems through technology.',
  social: {
    github: 'https://github.com/vishaalcibi-ops',
    linkedin: 'https://linkedin.com/in/vishaal-p-7841a1331',
  },
  resumeUrl: '/assets/resume/Vishaal_P_Resume.pdf',
}

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export const skills = [
  { name: 'React', level: 70, category: 'Frontend' },
  { name: 'Html', level: 80, category: 'Frontend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'Python', level: 79, category: 'Backend' },
  { name: 'CSS', level: 85, category: 'Frontend' },
  { name: 'MySQL', level: 89, category: 'Database' },
  { name: 'MongoDB', level: 70, category: 'Database' },
  { name: 'Jsp', level: 70, category: 'Backend' },
  { name: 'Javascript', level: 65, category: 'Frontend' },
  { name: 'UX/UI Design', level: 68, category: 'Design' },
]

export const certifications = [
  {
    title: "NPTEL Certificate",
    issuer: "NPTEL",
    image: "/assets/certificates/nptel.png",
  },
  {
    title: "MongoDB Certificate 1",
    issuer: "MongoDB",
    image: "/assets/certificates/mongodb-1.png",
  },
  {
    title: "MongoDB Certificate 2",
    issuer: "MongoDB",
    image: "/assets/certificates/mongodb-2.png",
  },
  {
    title: "MongoDB Certificate 3",
    issuer: "MongoDB",
    image: "/assets/certificates/mongodb-3.png",
  },
  {
    title: "MongoDB Certificate 4",
    issuer: "MongoDB",
    image: "/assets/certificates/mongodb-4.png",
  },
  {
    title: "MongoDB Certificate 5",
    issuer: "MongoDB",
    image: "/assets/certificates/mongodb-5.png",
  },
  {
  title: "Describe Cloud Computing",
  issuer: "Microsoft Learn",
  image: "/assets/certificates/cloud-1.png",
},
{
  title: "Describe the Core Architectural Components of Azure",
  issuer: "Microsoft Learn",
  image: "/assets/certificates/cloud-2.png",
},
{
  title: "Describe Cost Management in Azure",
  issuer: "Microsoft Learn",
  image: "/assets/certificates/cloud-3.png",
},
]

export const projects = [
  {
  title: "AI Skin Risk Detection System",
  description:
    "An AI-powered web application that analyzes skin images to provide a preliminary skin risk assessment. Built using React, Node.js, Express.js, and MongoDB with secure authentication and image upload functionality.",
  image: "/assets/skin-risk-project1.png",
  tags: ["React", "Node.js", "Express.js", "MongoDB"],
  liveUrl: "https://skin-risk-app-1.onrender.com/",
  githubUrl: "https://github.com/vishaalcibi-ops/skin-risk-app",
  featured: true,
},

 {
  title: "Personal Portfolio Website",
  description:
    "A modern, responsive portfolio website built to showcase my skills, projects, and professional experience. Designed with a clean UI, smooth animations, dark/light mode, and optimized for performance.",

   image: "/assets/portfolio.png",

  tags: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion"
  ],

  liveUrl: "https://my-portfolio-mu-seven-n80tj6h3dn.vercel.app",

  githubUrl: "https://github.com/vishaalcibi-ops/my-portfolio",

  featured: true,
},

 {
  title: "THREATGUARD-AI",
  description:
    "An AI-powered cybersecurity application designed to identify, analyze, and classify potential security threats. The system leverages modern AI techniques to improve threat detection and provide actionable security insights through an intuitive web interface.",

  image: "/assets/threatguard-ai.png",

  tags: [
    "Python",
    "Machine Learning",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript"
  ],

  liveUrl: "#",

  githubUrl: "https://github.com/vishaalcibi-ops/THREATGUARD-AI",

  featured: true,
},

 {
  title: "Inventory Management System",
  description:
    "A web-based Inventory Management System that helps manage products, stock, suppliers, and sales efficiently. It includes secure login, inventory tracking, CRUD operations, and a user-friendly interface.",

  image: "/assets/inventory-management.png",

  tags: [
    "Java",
    "JSP",
    "Servlet",
    "MySQL"
  ],

  liveUrl: "#",

  githubUrl: "PASTE_YOUR_GITHUB_REPOSITORY_LINK_HERE",

  featured: true,
},

  {
    title: "Studio Creative",
    description:
      "Portfolio and project management platform for creative agencies and freelancers.",
    image: "/assets/project-4.svg",
    tags: ["Vue.js", "Firebase", "GSAP", "Cloudinary"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export const experience = [
  {
    role: 'Java Full Stack Development Intern',
    company: 'TechVolt Software',
    period: '2026',
    description:
      'Completed a 15-day internship in Java Full Stack Development. Gained hands-on experience in Java, Servlets, JSP, MySQL, and web application development through practical projects.',
    highlights: ['Java', 'Servlets', 'JSP', 'MySQL'],
  },
  {
    role: 'Computer Science & Engineering Student',
    company: 'Kangayam Institute of Technology',
    period: '2024 – Present',
    description:
      'Currently pursuing a Bachelor of Engineering in Computer Science and Engineering. Building strong knowledge in full stack development, data structures, databases, and software engineering through academic and personal projects.',
    highlights: ['Java', 'Python', 'React', 'MongoDB'],
  },
  {
    role: 'Full Stack Web Development Projects',
    company: 'Personal Projects',
    period: '2025 – Present',
    description:
      'Developed multiple full stack web applications, including an AI Skin Risk Detection System, Inventory Management System, ThreatGuard-AI, and a Personal Portfolio Website.',
    highlights: ['React', 'Node.js', 'Express.js', 'MongoDB'],
  },
]

export const testimonials = [
  {
    quote:
      "Vishaal demonstrated a positive attitude, professional conduct, and a strong willingness to learn throughout the internship. He actively participated in training sessions, completed assigned tasks with sincerity and commitment, and consistently followed company guidelines. His dedication and eagerness to acquire new knowledge reflect a strong foundation for academic and professional growth.",
    author: "P. Keerthana",
    role: "Software Developer, Techvolt Software Pvt. Ltd.",
    avatar: "/assets/avatar-1.svg",
  },

  {
    quote:
      'Working together was seamless. The attention to detail and commitment to user experience made all the difference in our product launch.',
    author: 'Michael',
    role: 'Product Manager',
    avatar: '/assets/avatar-2.svg',
  },
]

export const stats = [
  { value: '10+', label: 'Technology' },
  { value: '4+', label: 'Projects Completed' },
  { value: '15+', label: 'Certifications' },
  { value: '1+', label: 'Internship Completed' },
]
export const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Building complete web applications using React, Node.js, Express.js, and databases.",
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive and modern user interfaces with React, JavaScript, HTML, and CSS.",
  },
  {
    title: "Backend Development",
    description:
      "Developing APIs, server-side logic, authentication, and database integration.",
  },
  {
    title: "Mobile Development",
    description:
      "Creating modern and responsive mobile applications with clean UI, smooth performance, and scalable features.",
  },
]