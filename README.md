# Mohammad Ifaz Alamgir | 3D Portfolio

Personal portfolio built with React, TypeScript, Three.js, React Three Fiber, and GSAP. It includes animated page sections, a 3D character scene, custom cursor interactions, and smooth scroll transitions.

## Table of Contents

- [Manual Steps](#manual-steps)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [GSAP License Note](#gsap-license-note)
- [Customization Guide](#customization-guide)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)
- [License](#license)

## Manual Steps

These are the outstanding items that need files or information I could not generate. Each is marked with a `TODO(...)` comment in the source.

| # | What | Where |
|---|------|-------|
| 1 | **Add your resume PDF** as `public/Mohammad_Ifaz_Alamgir.pdf`. The RESUME button and the Contact section already link to this exact path. | `public/` |
| 2 | **Add project screenshots.** All nine projects currently render `public/images/placeholder.webp`. Drop in real screenshots and update the `image` field per project. | `src/components/Work.tsx` |
| 3 | **Add an OG preview image** at `public/images/og-preview.png` (1200×630) for link previews on social/chat. | `public/images/` |
| 4 | **Set your real domain.** Replace `https://ifazalamgir.vercel.app` in the meta tags, `robots.txt`, and `sitemap.xml`. | `index.html`, `public/robots.txt`, `public/sitemap.xml` |
| 5 | **Add the Kanban API live URL** (deployed on Render) as the `demo` field. | `src/components/Work.tsx` |
| 6 | **Point EchoMinutes and the thesis at their own repos.** Both currently link to your GitHub profile because the CV listed no dedicated repo URL. | `src/components/Work.tsx` |
| 7 | *(Optional)* **Add tech-stack logos** (`python`, `postgresql`, `nestjs`, `laravel` as 256×256 `.webp`) and register them in the `imageUrls` array. | `public/images/`, `src/components/TechStack.tsx` |
| 8 | *(Optional)* **Replace the favicon.** `public/favicon.svg` is a generated "IA" monogram. | `public/favicon.svg` |

## Features

- Responsive one-page portfolio layout with reusable section components.
- 3D character scene rendering powered by React Three Fiber and Three.js.
- GSAP-powered animations and transitions for interactive storytelling.
- Custom cursor, hover interactions, and scroll-driven visual effects.
- Organized component architecture with dedicated utilities and style modules.

## Tech Stack

### Core

- React 18
- TypeScript
- Vite

### Animation and 3D

- GSAP (ScrollSmoother, ScrollTrigger, SplitText)
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/postprocessing`
- `@react-three/rapier`

### Supporting Libraries

- `react-icons`
- `react-fast-marquee`

## Project Structure

```text
.
├── public/                    # Static assets (images, models, resume, favicon)
├── src/
│   ├── components/
│   │   ├── Character/         # 3D scene + character logic/utilities
│   │   ├── styles/            # Section/component CSS files
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── MainContainer.tsx  # Main page composition
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   ├── context/               # Global providers (loading state, etc.)
│   ├── data/                  # Static data/content definitions
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (or compatible)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd 3d-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

- `npm run dev`  
  Starts Vite dev server and exposes host for local network testing.

- `npm run build`  
  Type-checks and builds a production-ready bundle.

- `npm run preview`  
  Serves the production build locally for verification.

- `npm run lint`  
  Runs ESLint checks across the project.

## GSAP License Note

This project uses the standard `gsap` package, including bonus plugins now available in the core package.

- Install dependencies with `npm install`.
- If migrating from older setups, remove `gsap-trial` from your project.

Read official installation guidance here: [GSAP Installation Docs](https://gsap.com/docs/v3/Installation/)

## Customization Guide

You can adapt this portfolio to your own profile by updating the following areas:

- **Content sections**: Edit files in `src/components/` such as `About.tsx`, `Career.tsx`, `WhatIDo.tsx`, and `Work.tsx`.
- **Projects**: The `projects` array at the top of `Work.tsx` is the single source of truth. Each entry carries a `group` (Full-Stack, Backend, AI / ML / NLP, Research, Blockchain) that renders as the label above the title. Keep entries sorted by group so the carousel reads in order.
- **Styling**: Modify component styles in `src/components/styles/` and global styles in `src/index.css` / `src/App.css`.
- **3D scene behavior**: Adjust scene logic in `src/components/Character/` and related utilities.
- **Animations**: Tweak GSAP utilities under `src/components/utils/`.

## Troubleshooting

- **Blank screen in development**  
  Check browser console for module import errors and verify all dependencies are installed.

- **3D performance issues on low-end devices**  
  Reduce scene complexity and post-processing effects in the character/scene utilities.

- **GSAP plugin errors**  
  Ensure you have the correct plugin package and license configuration for your target environment.

- **TypeScript build failures**  
  Run `npm run build` and address reported type errors before deploying.

## Deployment

1. Create a production build:

   ```bash
   npm run build
   ```

2. Validate locally:

   ```bash
   npm run preview
   ```

3. Deploy the generated `dist/` folder to your hosting provider (for example Vercel, Netlify, or Cloudflare Pages).

## License

Released under the [MIT License](LICENSE).

The underlying 3D portfolio template is MIT-licensed work by Rajesh Chityal. The MIT terms require that the original copyright notice be retained in any copy, so `LICENSE` credits both the template author and the portfolio content. All site content, copy, and project data are original.
