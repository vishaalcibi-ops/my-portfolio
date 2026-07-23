# Premium Portfolio

A modern, Apple-inspired portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Fully responsive with dark/light mode support, premium animations, and SEO optimization.

React
Vite
Tailwind CSS
Framer Motion

## Features

- **Premium Apple-inspired UI** — Clean typography, glass morphism, subtle gradients
- **Dark / Light Mode** — System preference detection with manual toggle
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Modern Animations** — Scroll-triggered animations powered by Framer Motion
- **SEO Optimized** — Meta tags, Open Graph, Twitter cards, robots.txt
- **Deployment Ready** — Configured for GitHub and Vercel



## Sections

- Hero with animated background
- About with stats
- Skills with progress bars
- Services cards
- Featured Projects gallery
- Experience timeline
- Testimonials carousel
- Contact form
- Footer with social links



## Getting Started



### Prerequisites

- Node.js 18+
- npm or yarn



### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/premium-portfolio.git
cd premium-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```



## Customization



### Personal Information

Edit `src/data/portfolioData.js` to update:

- Name, title, bio, email, location
- Social media links
- Skills, services, projects
- Experience timeline
- Testimonials



### SEO & Meta Tags

Update meta tags in `index.html`:

- Title and description
- Open Graph URLs and images
- Canonical URL



### Styling

- **Colors**: `tailwind.config.js` — Apple-inspired color palette
- **Global styles**: `src/index.css` — Glass effects, buttons, utilities
- **Theme**: `src/context/ThemeContext.jsx` — Dark/light mode logic



### Assets

Replace placeholder images in:

- `public/assets/` — Project thumbnails and avatars
- `public/og-image.svg` — Social sharing preview
- `public/favicon.svg` — Browser tab icon



## Project Structure

```
premium-portfolio/
├── public/
│   ├── assets/          # Project images, avatars
│   ├── favicon.svg
│   ├── og-image.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/      # Navbar, Footer, ThemeToggle
│   │   ├── sections/    # Hero, About, Skills, etc.
│   │   └── ui/          # Reusable UI components
│   ├── context/         # Theme context
│   ├── data/            # Portfolio content (edit here!)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── package.json
```



## Deploy to Vercel

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel auto-detects Vite — click Deploy
4. Update meta tag URLs in `index.html` with your production domain

[Deploy with Vercel](https://vercel.com/new)

## Deploy to GitHub Pages

For GitHub Pages, set the `base` in `vite.config.js`:

```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

Then build and deploy the `dist` folder.

## Tech Stack


| Technology     | Purpose                  |
| -------------- | ------------------------ |
| React 18       | UI framework             |
| Vite 6         | Build tool & dev server  |
| Tailwind CSS 3 | Utility-first styling    |
| Framer Motion  | Animations & transitions |
| React Icons    | Icon library             |




## License

MIT — feel free to use this template for your personal portfolio.

---

Built with care. Customize it and make it yours.