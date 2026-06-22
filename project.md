# Aryan — Portfolio Website

> A creative developer & designer portfolio built with React, Three.js, GSAP, Tailwind CSS v4, and Vite.

---

## 🗂 Project Structure

```
Portfolio-Website/
├── public/
│   ├── draco/                  # Draco decoder (WASM + JS) for compressed 3D models
│   ├── images/                 # Tech stack logo images (.webp)
│   └── models/
│       ├── character.glb       # 3D character model (1.5MB)
│       ├── character.enc       # Encrypted version of character.glb
│       ├── char_enviorment.hdr # HDR environment map for 3D lighting (289KB)
│       ├── encrypt.cjs         # Encryption utility script
│       └── .gitattributes      # Git LFS attributes for large files
├── src/
│   ├── main.tsx                # React entry point
│   ├── App.tsx                 # Root component (lazy loads Character + MainContainer)
│   ├── index.css               # Global styles, Tailwind v4 @theme, layout tokens
│   ├── App.css                 # App-level styles
│   ├── assets/
│   ├── context/
│   │   └── LoadingProvider.tsx # Global loading state context + Loading screen wrapper
│   ├── data/
│   │   └── boneData.ts         # Bone transform data for 3D character animation
│   └── components/
│       ├── MainContainer.tsx   # Root layout: renders all sections, desktop/mobile split
│       ├── Navbar.tsx          # Fixed nav with GSAP ScrollSmoother + smooth scroll
│       ├── CinematicHero.tsx   # NEW: Premium cinematic video background hero section
│       ├── Landing.tsx         # Original Hero section (renders 3D character as child)
│       ├── About.tsx           # About Me section
│       ├── WhatIDo.tsx         # "What I Do" section — DEVELOP / DESIGN cards
│       ├── Career.tsx          # Career & Experience timeline
│       ├── Work.tsx            # Horizontal scroll project showcase (GSAP pinned)
│       ├── TechStack.tsx       # Physics-based 3D ball pit (React Three Fiber + Rapier)
│       ├── Contact.tsx         # Footer contact section
│       ├── Loading.tsx         # Full-screen loader with progress bar
│       ├── Cursor.tsx          # Custom cursor component
│       ├── SocialIcons.tsx     # Fixed social media icon sidebar
│       ├── HoverLinks.tsx      # Hover-animated nav link text
│       ├── WorkImage.tsx       # Project image/video component
│       ├── Character/
│       │   ├── index.tsx       # Character module entry
│       │   ├── Scene.tsx       # Three.js scene setup, camera, renderer, animation loop
│       │   ├── exports.ts      # Shared exports
│       │   └── utils/
│       │       ├── character.ts    # Loads + decrypts character.glb via fetch
│       │       ├── animationUtils.ts # GSAP intro animations + idle animation mixer
│       │       ├── lighting.ts     # Three.js lighting setup (ambient, point, rim)
│       │       ├── mouseUtils.ts   # Mouse/touch tracking → head bone rotation
│       │       ├── resizeUtils.ts  # Responsive canvas resize handler
│       │       └── decrypt.ts      # AES decryption of the .enc model file
│       ├── styles/             # Component specific CSS files
│       └── utils/
│           ├── splitText.ts    # Splits heading text into span chars for GSAP
│           ├── initialFX.ts    # Entry animation sequence (fade, slide in)
│           └── GsapScroll.ts   # GSAP ScrollTrigger animation registrations
├── postcss.config.js           # Tailwind CSS PostCSS plugin configuration
├── package.json
├── vite.config.ts
└── project.md                  # ← This file
```

---

## 🧱 Tech Stack

| Layer | Library / Tool | Version |
|---|---|---|
| Framework | React | ^18.3.1 |
| Language | TypeScript | ^5.5.3 |
| Build Tool | Vite | ^5.4.1 |
| Styling | Tailwind CSS | ^4.3.1 |
| 3D (Character) | Three.js | ^0.168.0 |
| 3D (TechStack) | React Three Fiber | ^8.17.10 |
| 3D Physics | @react-three/rapier | ^1.5.0 |
| 3D Helpers | @react-three/drei | ^9.120.4 |
| Post Processing | @react-three/postprocessing | ^2.16.3 |
| Animations | GSAP (gsap + gsap-trial) | ^3.12.7 |
| GSAP React | @gsap/react | ^2.1.1 |

---

## 🎨 Design System

### Styling Integration (Tailwind v4 + Standard CSS)
The project originally used standard Vanilla CSS with custom classes. It has recently been upgraded to include **Tailwind CSS v4** (`@tailwindcss/postcss`). 
- `src/index.css` contains both the standard CSS reset/variables AND the new Tailwind v4 `@theme` directives.
- Tailwind is configured with `corePlugins: { preflight: false }` equivalent (actually handled natively by v4 setup) to ensure it doesn't break the existing CSS structures.

### Fonts
- **Geist** (Google Fonts) — all weights 100–900
- **Instrument Serif** & **Inter** (Google Fonts) — Used for the new Cinematic Hero section.

---

## ⚠️ Important Architecture & State Management

### The Loading Sequence (CRITICAL)
1. `App.tsx` wraps the app in `<LoadingProvider>`.
2. `<LoadingProvider>` mounts `<Loading />` full-screen overlay and sets `isLoading` to true.
3. The 3D avatar (`<CharacterModel />` -> `Scene.tsx`) mounts and begins fetching/decrypting `character.enc`.
4. As `Scene.tsx` processes the geometries, it repeatedly calls `setProgress(value)` from `Loading.tsx`.
5. Once the 3D model finishes loading, `Scene.tsx` calls `progress.loaded()`.
6. This causes the `<Loading />` screen to hit 100%, trigger `initialFX.ts`, and finally call `setIsLoading(false)`, which unmounts the loading screen and reveals the site.
**If you remove `<CharacterModel />` without bypassing the loading logic in `LoadingProvider` or `MainContainer`, the site will pause infinitely on the loading screen.**

### Layout Wrapping (`MainContainer.tsx`)
- Detects desktop vs mobile via `window.innerWidth > 1024`.
- The `Navbar.tsx` initializes **GSAP ScrollSmoother** on the `#smooth-wrapper` and `#smooth-content` div IDs inside `MainContainer`.
- All standard scrollable sections are placed inside `#smooth-content`.
- **Exception**: The 3D Character canvas is rendered *outside* of `#smooth-wrapper` on desktop so it can remain fixed in the background while the page smooth-scrolls over it.

---

## 📄 Pages / Sections

### 1. NEW: Cinematic Hero (`CinematicHero.tsx`)
- A premium, glassmorphic hero section using Tailwind CSS.
- Features a full-screen looping video background, a custom glass navigation bar, and custom `@theme` Tailwind animations (`animate-fade-rise`).
- Currently placed at the very top of `MainContainer.tsx`.

### 2. Original Landing (`Landing.tsx` + `Character/`)
- Contains the "Hello, I'm Aryan" typography and the placeholder for the 3D character.
- Character model responds to mouse movement (head follows cursor).

### 3. Work (`Work.tsx`)
- **Horizontal scrolling** project showcase using a GSAP ScrollTrigger `pin`.

### 4. Tech Stack (`TechStack.tsx`)
- Physics-based 3D ball pit with 30 spheres. Activates when user scrolls past the Work section.

---

## ⚙️ Development

```bash
# Start dev server
npm run dev        # runs on http://localhost:5173

# Build for production
npm run build      # tsc -b && vite build
```

*Generated for use with AI assistants. Last updated: June 2026.*
