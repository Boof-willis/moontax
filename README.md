# MoonTax - Astro + React + Tailwind

A high-performance crypto tax marketing site built with Astro, React islands, and Tailwind CSS.

## 🚀 Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/
│   │   ├── astro/   # Static Astro components
│   │   │   ├── Navigation.astro
│   │   │   ├── Hero.astro
│   │   │   ├── ProblemSection.astro
│   │   │   ├── CPAISection.astro
│   │   │   ├── WhoWeServe.astro
│   │   │   ├── TestimonialsAndPricing.astro
│   │   │   ├── ContactCTA.astro
│   │   │   └── Footer.astro
│   │   └── react/   # Interactive React islands
│   │       ├── HeroCarousel.tsx
│   │       └── ScrollAnimations.tsx
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                             |
| `npm run dev`          | Start dev server at `localhost:4321`            |
| `npm run build`        | Build production site to `./dist/`              |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |

## 🎨 Features

- **Astro Framework**: Static site generation with island architecture
- **React Islands**: Interactive components (carousel, scroll animations) are hydrated on demand
- **Tailwind CSS v4**: Utility-first styling with custom animations
- **TypeScript**: Type-safe development
- **Performance Optimized**: Zero JS for static content, minimal JS for interactive parts

## 🛠️ Tech Stack

- **Astro 5.16.0**: Framework
- **React 19.2.0**: Islands architecture for interactivity
- **Tailwind CSS 4.1.17**: Styling
- **TypeScript**: Type safety

## 📦 What Changed from HTML

The original single `index.html` file has been converted to:

1. **Modular Components**: Each section is now a separate component for better maintainability
2. **React Islands**: Interactive features (carousel, scroll animations) use React with `client:load` directive
3. **Layouts**: Shared layout structure with BaseLayout.astro
4. **Better Performance**: Static content is pure HTML, only interactive parts load JavaScript
5. **Type Safety**: Full TypeScript support throughout

## 🎯 Interactive Components

### HeroCarousel (React Island)
- Rotates through 3 headline variations
- Smooth fade transitions
- Loads JS only for this specific component

### ScrollAnimations (React Island)
- Intersection Observer for scroll-triggered animations
- Manages `.animate-on-scroll` class additions
- Optimized performance with proper cleanup

## 🚀 Deployment

Build the site for production:

```bash
npm run build
```

The output will be in `./dist/` and can be deployed to any static hosting service:
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- GitHub Pages

## 📝 Development Notes

- All custom animations are in `src/styles/global.css`
- React islands use `client:load` for immediate hydration
- Lucide icons and Iconify are loaded via CDN in BaseLayout
- UnicornStudio background animation is preserved from original design
