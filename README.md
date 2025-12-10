# ProVital – Lifestyle Medicine Landing Page

Marketing-style React + Vite single page for ProVital, showcasing lifestyle medicine services with animated visuals, responsive navigation, and a carousel that highlights the six pillars of lifestyle health.

## Features
- Responsive hero with animated dual image columns and CTA search bar.
- Accessible navbar with mobile drawer and login/signup dropdown.
- Interactive “Six Pillars” carousel with smooth scroll snapping and keyboard-friendly arrows.
- Gradient accent bar and global theming with SCSS modules.
- Lightweight, dependency-minimal React 19 + Vite setup for fast HMR builds.

## Tech Stack
- React 19, Vite 6, Sass
- ESLint 9 with React hooks/refresh plugins

## Project Structure
- `src/App.jsx` – Shell that renders navbar, hero, and pillars sections.
- `src/components/` – UI building blocks (Navbar, HeroSection, SearchBar, AnimatedImageColumns, PillarsSection, GradientBar).
- `src/styles/` – Global and page-level SCSS (`global.scss`, `App.scss`).
- `src/assets/` – PNG hero/pillar imagery and logo.

## Getting Started
```bash
npm install
npm run dev        # start Vite dev server
npm run build      # production build to dist/
npm run preview    # preview production build
npm run lint       # run ESLint
```
Vite defaults to http://localhost:5173. Update the port with `npm run dev -- --host --port 3000` if needed.

## Key UX/Implementation Notes
- **Navbar**: desktop links with dropdown; collapses to full-screen drawer on small screens.
- **Hero**: split grid with animated image columns, headline, and 3-field search bar CTA.
- **Pillars carousel**: scroll-snapping cards, intersection-based elevation on mobile, arrow controls on desktop.
- **Styling**: SCSS modules per component plus global resets; Inter font pulled from Google Fonts.
- **Accessibility**: focusable buttons/links, `aria` labels on toggles and dropdown, color contrast-conscious gradients.

## Customization
- Replace logo and imagery in `src/assets/`.
- Edit pillar data in `src/components/PillarsSection.jsx`.
- Adjust global theme tokens in `src/styles/global.scss` and layout tweaks in `src/styles/App.scss`.

## Deployment
1. `npm run build`
2. Serve `dist/` via any static host (e.g., Vercel, Netlify, S3 + CloudFront). No server-side dependencies.
