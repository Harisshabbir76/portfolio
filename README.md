# Haris Shabbir — Portfolio (Terminal Theme)

A Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion portfolio site.

## Features

- Animated grid background with floating glow orbs (ambient motion, GPU-friendly)
- Typing-effect terminal animation in the hero
- Scroll-triggered fade-up reveals on every section (About, Skills, Projects, Contact)
- Staggered grid animation for the skills list
- Hover micro-interactions on project cards and buttons
- "Hire Me" / "Contact Me" / "Chat on WhatsApp" buttons link directly to your WhatsApp number
- "View My Work" / "See all projects" buttons link to your GitHub profile
- Respects `prefers-reduced-motion` for accessibility
- Fully responsive (mobile, tablet, desktop)

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Editing your content

Almost everything — your name, bio, projects, skills, education, contact links —
lives in one file:

```
src/lib/data.ts
```

Edit that file and the whole site updates. No need to touch components for
content changes.

To change colors (the neon green / violet theme), edit:

```
tailwind.config.js   -> theme.extend.colors
```

## Deploying to Vercel

The easiest way to deploy:

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repository.
3. Vercel auto-detects Next.js — just click Deploy.

No environment variables are required for this project.

## Project structure

```
src/
  app/
    layout.tsx       Root layout, fonts, metadata
    page.tsx          Assembles all sections
    globals.css        Global styles + animated grid background
  components/
    AnimatedBackground.tsx   Floating glow orbs
    Navbar.tsx
    Hero.tsx                  Animated terminal + intro
    About.tsx                 Bio + education timeline
    Skills.tsx                Tech stack grid
    Projects.tsx              Project cards (client + personal work)
    Contact.tsx                WhatsApp CTA
    Footer.tsx
  lib/
    data.ts            All your content in one place
```
