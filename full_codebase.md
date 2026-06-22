# Full Codebase Context
Generated at Sun Jun 21 09:14:14 IST 2026

## `package.json`
```json
{
  "name": "moncy-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@gsap/react": "^2.1.1",
    "@jridgewell/gen-mapping": "0.3.5",
    "@react-three/cannon": "^6.6.0",
    "@react-three/drei": "^9.120.4",
    "@react-three/fiber": "^8.17.10",
    "@react-three/postprocessing": "^2.16.3",
    "@react-three/rapier": "^1.5.0",
    "@types/three": "^0.168.0",
    "@vercel/analytics": "^1.4.1",
    "gsap": "^3.12.7",
    "gsap-trial": "^3.12.7",
    "maath": "^0.10.8",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-fast-marquee": "^1.6.5",
    "react-icons": "^5.6.0",
    "three": "^0.168.0",
    "three-stdlib": "^2.33.0",
    "zustand": "^4.5.5"
  },
  "devDependencies": {
    "@babel/helper-compilation-targets": "^8.0.0",
    "@eslint/js": "^9.9.0",
    "@tailwindcss/postcss": "^4.3.1",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.5.0",
    "eslint": "^9.9.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "globals": "^15.9.0",
    "postcss": "^8.5.15",
    "tailwindcss": "^4.3.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.0.1",
    "vite": "^5.4.1"
  },
  "overrides": {
    "@jridgewell/gen-mapping": "0.3.5"
  }
}
```

## `vite.config.ts`
```json
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
```

## `tsconfig.json`
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

## `tsconfig.app.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## `tsconfig.node.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

## `tailwind.config.js`
```json
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## `postcss.config.js`
```json
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

## `index.html`
```json
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- <link rel="icon" type="image/svg+xml" href="/" /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Moncy Yohannan - Creative Developer | Designer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## `src/App.tsx`
```tsx
import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
```

## `src/main.tsx`
```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## `src/context/LoadingProvider.tsx`
```tsx
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };
  useEffect(() => {}, [loading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
```

## `src/App.css`
```css
.section-container {
  width: 1300px;
}
.title,
.para {
  font-kerning: none;
  -webkit-text-rendering: optimizeSpeed;
  text-rendering: optimizeSpeed;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
@media only screen and (max-width: 1600px) {
  .section-container {
    width: 1200px;
    max-width: calc(100% - 160px);
  }
}
@media only screen and (max-width: 1400px) {
  .section-container {
    width: 900px;
  }
}
@media only screen and (max-width: 900px) {
  .section-container {
    width: 500px;
    max-width: var(--cWidth);
  }
}
```

## `src/index.css`
```css
@import url("https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Only add these if they don't exist, or scope them locally if needed */
  :root {
    --hero-bg: 201 100% 13%;
    --font-display: 'Instrument Serif', serif;
    --font-body: 'Inter', sans-serif;
  }
}

@layer utilities {
  .liquid-glass {
    background: rgba(255, 255, 255, 0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: none;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }

  .liquid-glass::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.4px;
    background: linear-gradient(180deg,
      rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
      rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
      rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
}

@theme {
  --animate-fade-rise: fade-rise 0.8s ease-out both;
  --animate-fade-rise-delay: fade-rise 0.8s ease-out 0.2s both;
  --animate-fade-rise-delay-2: fade-rise 0.8s ease-out 0.4s both;

  @keyframes fade-rise {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

:root {
  font-family: "Geist", sans-serif;

  font-optical-sizing: auto;
  font-style: normal;
  line-height: 1.5;
  scroll-behavior: smooth;
  color-scheme: light dark;
  color: #eae5ec;
  background-color: var(--backgroundColor);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  --accentColor: #c2a4ff;
  --backgroundColor: #0b080c;
  --vh: 100vh;
  --vh: 100svh;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Geist", sans-serif;
}
body {
  overflow: hidden;
}
a {
  color: inherit;
  text-decoration: inherit;
}
a:hover {
  color: var(--accentColor);
}
main {
  opacity: 1;
  transition: 0.3s;
}
.main-active {
  opacity: 0;
  animation: fadeIn 1s 1;
  animation-fill-mode: forwards;
}
@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}
body {
  margin: 0;
  height: auto;
  background-color: #000;
  flex-grow: 1;
  --cWidth: calc(100% - 30px);
  --cMaxWidth: 1920px;
  max-width: 100vw;
  overflow-x: hidden;
}
.main-body {
  max-width: 100vw;
  overflow-x: hidden;
}

.container-main {
  width: 100%;
  margin: auto;
  position: relative;
}
.container1 {
  width: var(--cWidth);
  height: var(--vh);
  margin: auto;
  position: relative;
}
.split-line {
  overflow: hidden;
}
.split-h2 {
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
}

.techstack {
  width: 100%;
  position: relative;
  height: var(--vh);
  margin: auto;
  margin-top: 50px;
  margin-bottom: 0;
  overflow: hidden;
  z-index: 1;
}

.techstack h2 {
  font-size: 80px;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 120px;
  left: 0;
  font-weight: 400;
  text-transform: uppercase;
}

@media screen and (min-width: 768px) {
  body {
    --cWidth: 94%;
  }
}
@media screen and (max-width: 900px) {
  .techstack h2 {
    font-size: 40px;
  }
}
```

## `src/components/TechStack.tsx`
```tsx
import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
  RapierRigidBody,
} from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/react2.webp",
  "/images/next2.webp",
  "/images/node2.webp",
  "/images/express.webp",
  "/images/mongo.webp",
  "/images/mysql.webp",
  "/images/typescript.webp",
  "/images/javascript.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const spheres = [...Array(30)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
}));

type SphereProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: SphereProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        })
    );
  }, []);

  return (
    <div className="techstack">
      <h2> My Techstack</h2>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {spheres.map((props, i) => (
            <SphereGeo
              key={i}
              {...props}
              material={materials[Math.floor(Math.random() * materials.length)]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <Environment
          files="/models/char_enviorment.hdr"
          environmentIntensity={0.5}
          environmentRotation={[0, 4, 2]}
        />
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
```

## `src/components/Navbar.tsx`
```tsx
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const elem = e.currentTarget as HTMLAnchorElement;
          const section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Aryan
        </a>
        <a
          href="mailto:aryantripathi198@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          aryantripathi198@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
```

## `src/components/Work.tsx`
```tsx

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    num: "01",
    title: "Chat with PDF",
    category: "RAG Application",
    tools: "Python, LangChain, Gemini AI, FAISS, Streamlit",
    image: "/images/placeholder.webp",
    url: "https://github.com/Unorthodox60/chat-with-pdf",
  },
  {
    num: "02",
    title: "Road Scene Segmentation",
    category: "Deep Learning",
    tools: "TensorFlow, ResNet101, ASPP, Streamlit, Hugging Face",
    image: "/images/placeholder.webp",
    url: "https://github.com/Unorthodox60",
  },
  {
    num: "03",
    title: "Customer Churn Prediction",
    category: "ML & Survival Analysis",
    tools: "Python, Flask, Random Forest, SHAP, Kaplan-Meier",
    image: "/images/placeholder.webp",
    url: "https://github.com/Unorthodox60",
  },
  {
    num: "04",
    title: "Sentiment Analysis on Tweets",
    category: "NLP / Deep Learning",
    tools: "TensorFlow, GloVe, XGBoost, NLTK, SVM",
    image: "/images/placeholder.webp",
    url: "https://github.com/Unorthodox60",
  },
  {
    num: "05",
    title: "Botanical Supply Chain",
    category: "Blockchain — SIH 2025",
    tools: "Blockchain, Smart Contracts",
    image: "/images/placeholder.webp",
    url: "https://github.com/Unorthodox60",
  },
  {
    num: "06",
    title: "Air Quality Analyser",
    category: "Data Analysis Tool",
    tools: "Java, Collections Framework, AQI Logic",
    image: "/images/placeholder.webp",
    url: "https://github.com/Unorthodox60",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rect = box[0].getBoundingClientRect();
      const padding = parseInt(window.getComputedStyle(box[0]).padding) || 0;
      // Calculate total width of all boxes
      const totalWidth = rect.width * box.length;
      // We want to translate enough so the last box is fully visible.
      // 150px adds a nice little buffer at the end.
      translateX = totalWidth - window.innerWidth + 150 + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
```

## `src/components/Cursor.tsx`
```tsx
import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let hover = false;
    const cursor = cursorRef.current!;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    document.addEventListener("mousemove", (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    });
    requestAnimationFrame(function loop() {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        gsap.to(cursor, { x: cursorPos.x, y: cursorPos.y, duration: 0.1 });
        // cursor.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
      }
      requestAnimationFrame(loop);
    });
    document.querySelectorAll("[data-cursor]").forEach((item) => {
      const element = item as HTMLElement;
      element.addEventListener("mouseover", (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");

          gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
          //   cursor.style.transform = `translate(${rect.left}px,${rect.top}px)`;
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      });
      element.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      });
    });
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
```

## `src/components/CinematicHero.tsx`
```tsx

export default function CinematicHero() {
  return (
    <div className="cinematic-hero relative h-screen w-full flex flex-col overflow-hidden bg-[hsl(var(--hero-bg))] font-['Inter',sans-serif]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Glassmorphic Navigation Bar */}
      <nav className="relative z-10 flex flex-row items-center justify-between w-full px-8 py-6 max-w-7xl mx-auto text-white">
        <div 
          className="text-3xl tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs">®</sup>
        </div>
        
        <ul className="hidden md:flex flex-row gap-8 items-center">
          <li><a href="#" className="text-sm font-medium">Home</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Studio</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Journal</a></li>
          <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Reach Us</a></li>
        </ul>

        <button className="liquid-glass rounded-full px-6 py-2.5 text-sm hover:scale-[1.03] transition-transform duration-300">
          Begin Journey
        </button>
      </nav>

      {/* Cinematic Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 flex-grow pb-20">
        <h1 
          className="animate-fade-rise text-white text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where <em className="not-italic text-gray-400">dreams</em> rise{' '}
          <em className="not-italic text-gray-400">through the silence.</em>
        </h1>
        
        <p className="animate-fade-rise-delay text-gray-400 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>
        
        <button className="animate-fade-rise-delay-2 liquid-glass text-white rounded-full px-14 py-5 text-base mt-12 hover:scale-[1.03] transition-transform duration-300 cursor-pointer">
          Begin Journey
        </button>
      </main>
    </div>
  );
}
```

## `src/components/Character/index.tsx`
```tsx
import Scene from "./Scene";

const CharacterModel = () => {
  return <Scene />;
};

export default CharacterModel;
```

## `src/components/Character/utils/character.ts`
```ts
import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
```

## `src/components/Character/utils/resizeUtils.ts`
```ts
import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  const canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  const workTrigger = ScrollTrigger.getById("work");
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger != workTrigger) {
      trigger.kill();
    }
  });
  setCharTimeline(character, camera);
  setAllTimeline();
}
```

## `src/components/Character/utils/animationUtils.ts`
```ts
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { eyebrowBoneNames, typingBoneNames } from "../../../data/boneData";

const setAnimations = (gltf: GLTF) => {
  const character = gltf.scene;
  const mixer = new THREE.AnimationMixer(character);
  if (gltf.animations) {
    const introClip = gltf.animations.find(
      (clip) => clip.name === "introAnimation"
    );
    const introAction = mixer.clipAction(introClip!);
    introAction.setLoop(THREE.LoopOnce, 1);
    introAction.clampWhenFinished = true;
    introAction.play();
    const clipNames = ["key1", "key2", "key5", "key6"];
    clipNames.forEach((name) => {
      const clip = THREE.AnimationClip.findByName(gltf.animations, name);
      if (clip) {
        const action = mixer?.clipAction(clip);
        action!.play();
        action!.timeScale = 1.2;
      } else {
        console.error(`Animation "${name}" not found`);
      }
    });
    let typingAction: THREE.AnimationAction | null = null;
    typingAction = createBoneAction(gltf, mixer, "typing", typingBoneNames);
    if (typingAction) {
      typingAction.enabled = true;
      typingAction.play();
      typingAction.timeScale = 1.2;
    }
  }
  function startIntro() {
    const introClip = gltf.animations.find(
      (clip) => clip.name === "introAnimation"
    );
    const introAction = mixer.clipAction(introClip!);
    introAction.clampWhenFinished = true;
    introAction.reset().play();
    setTimeout(() => {
      const blink = gltf.animations.find((clip) => clip.name === "Blink");
      mixer.clipAction(blink!).play().fadeIn(0.5);
    }, 2500);
  }
  function hover(gltf: GLTF, hoverDiv: HTMLDivElement) {
    const eyeBrowUpAction = createBoneAction(
      gltf,
      mixer,
      "browup",
      eyebrowBoneNames
    );
    let isHovering = false;
    if (eyeBrowUpAction) {
      eyeBrowUpAction.setLoop(THREE.LoopOnce, 1);
      eyeBrowUpAction.clampWhenFinished = true;
      eyeBrowUpAction.enabled = true;
    }
    const onHoverFace = () => {
      if (eyeBrowUpAction && !isHovering) {
        isHovering = true;
        eyeBrowUpAction.reset();
        eyeBrowUpAction.enabled = true;
        eyeBrowUpAction.setEffectiveWeight(4);
        eyeBrowUpAction.fadeIn(0.5).play();
      }
    };
    const onLeaveFace = () => {
      if (eyeBrowUpAction && isHovering) {
        isHovering = false;
        eyeBrowUpAction.fadeOut(0.6);
      }
    };
    if (!hoverDiv) return;
    hoverDiv.addEventListener("mouseenter", onHoverFace);
    hoverDiv.addEventListener("mouseleave", onLeaveFace);
    return () => {
      hoverDiv.removeEventListener("mouseenter", onHoverFace);
      hoverDiv.removeEventListener("mouseleave", onLeaveFace);
    };
  }
  return { mixer, startIntro, hover };
};

const createBoneAction = (
  gltf: GLTF,
  mixer: THREE.AnimationMixer,
  clip: string,
  boneNames: string[]
): THREE.AnimationAction | null => {
  const AnimationClip = THREE.AnimationClip.findByName(gltf.animations, clip);
  if (!AnimationClip) {
    console.error(`Animation "${clip}" not found in GLTF file.`);
    return null;
  }

  const filteredClip = filterAnimationTracks(AnimationClip, boneNames);

  return mixer.clipAction(filteredClip);
};

const filterAnimationTracks = (
  clip: THREE.AnimationClip,
  boneNames: string[]
): THREE.AnimationClip => {
  const filteredTracks = clip.tracks.filter((track) =>
    boneNames.some((boneName) => track.name.includes(boneName))
  );

  return new THREE.AnimationClip(
    clip.name + "_filtered",
    clip.duration,
    filteredTracks
  );
};

export default setAnimations;
```

## `src/components/Character/utils/lighting.ts`
```ts
import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
  const directionalLight = new THREE.DirectionalLight(0xc7a9ff, 0);
  directionalLight.intensity = 0;
  directionalLight.position.set(-0.47, -0.32, -1);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xc2a4ff, 0, 100, 3);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  scene.add(pointLight);

  new RGBELoader()
    .setPath("/models/")
    .load("char_enviorment.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.environmentIntensity = 0;
      scene.environmentRotation.set(5.76, 85.85, 1);
    });

  function setPointLight(screenLight: any) {
    if (screenLight.material.opacity > 0.9) {
      pointLight.intensity = screenLight.material.emissiveIntensity * 20;
    } else {
      pointLight.intensity = 0;
    }
  }
  const duration = 2;
  const ease = "power2.inOut";
  function turnOnLights() {
    gsap.to(scene, {
      environmentIntensity: 0.64,
      duration: duration,
      ease: ease,
    });
    gsap.to(directionalLight, {
      intensity: 1,
      duration: duration,
      ease: ease,
    });
    gsap.to(".character-rim", {
      y: "55%",
      opacity: 1,
      delay: 0.2,
      duration: 2,
    });
  }

  return { setPointLight, turnOnLights };
};

export default setLighting;
```

## `src/components/Character/utils/decrypt.ts`
```ts
async function generateAESKey(password: string): Promise<CryptoKey> {
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  return crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  const response = await fetch(url);
  const encryptedData = await response.arrayBuffer();
  const iv = new Uint8Array(encryptedData.slice(0, 16));
  const data = encryptedData.slice(16);
  const key = await generateAESKey(password);
  return crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
};
```

## `src/components/Character/utils/mouseUtils.ts`
```ts
import * as THREE from "three";

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (
  setMousePosition: (
    x: number,
    y: number,
    interpolationX: number,
    interpolationY: number
  ) => void
) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => {
      setMousePosition(0, 0, 0.1, 0.2);
    }, 1000);
  }, 2000);
};

export const handleHeadRotation = (
  headBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number
) => {
  if (!headBone) return;
  if (window.scrollY < 200) {
    const maxRotation = Math.PI / 6;
    headBone.rotation.y = lerp(
      headBone.rotation.y,
      mouseX * maxRotation,
      interpolationY
    );
    const minRotationX = -0.3;
    const maxRotationX = 0.4;
    if (mouseY > minRotationX) {
      if (mouseY < maxRotationX) {
        headBone.rotation.x = lerp(
          headBone.rotation.x,
          -mouseY - 0.5 * maxRotation,
          interpolationX
        );
      } else {
        headBone.rotation.x = lerp(
          headBone.rotation.x,
          -maxRotation - 0.5 * maxRotation,
          interpolationX
        );
      }
    } else {
      headBone.rotation.x = lerp(
        headBone.rotation.x,
        -minRotationX - 0.5 * maxRotation,
        interpolationX
      );
    }
  } else {
    if (window.innerWidth > 1024) {
      headBone.rotation.x = lerp(headBone.rotation.x, -0.4, 0.03);
      headBone.rotation.y = lerp(headBone.rotation.y, -0.3, 0.03);
    }
  }
};
```

## `src/components/Character/Scene.tsx`
```tsx
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();

  const [character, setChar] = useState<THREE.Object3D | null>(null);
  useEffect(() => {
    if (canvasDiv.current) {
      const rect = canvasDiv.current.getBoundingClientRect();
      const container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = sceneRef.current;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      canvasDiv.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.z = 10;
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = 1.1;
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      const progress = setProgress((value) => setLoading(value));
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      loadCharacter().then((gltf) => {
        if (gltf) {
          const animations = setAnimations(gltf);
          hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
          mixer = animations.mixer;
          const character = gltf.scene;
          setChar(character);
          scene.add(character);
          headBone = character.getObjectByName("spine006") || null;
          screenLight = character.getObjectByName("screenlight") || null;
          progress.loaded().then(() => {
            setTimeout(() => {
              light.turnOnLights();
              animations.startIntro();
            }, 2500);
          });
          window.addEventListener("resize", () =>
            handleResize(renderer, camera, canvasDiv, character)
          );
        }
      });

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };
      let debounce: number | undefined;
      const onTouchStart = (event: TouchEvent) => {
        const element = event.target as HTMLElement;
        debounce = setTimeout(() => {
          element?.addEventListener("touchmove", (e: TouchEvent) =>
            handleTouchMove(e, (x, y) => (mouse = { x, y }))
          );
        }, 200);
      };

      const onTouchEnd = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      document.addEventListener("mousemove", (event) => {
        onMouseMove(event);
      });
      const landingDiv = document.getElementById("landingDiv");
      if (landingDiv) {
        landingDiv.addEventListener("touchstart", onTouchStart);
        landingDiv.addEventListener("touchend", onTouchEnd);
      }
      const animate = () => {
        requestAnimationFrame(animate);
        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        }
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        renderer.render(scene, camera);
      };
      animate();
      return () => {
        clearTimeout(debounce);
        scene.clear();
        renderer.dispose();
        window.removeEventListener("resize", () =>
          handleResize(renderer, camera, canvasDiv, character!)
        );
        if (canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
        if (landingDiv) {
          document.removeEventListener("mousemove", onMouseMove);
          landingDiv.removeEventListener("touchstart", onTouchStart);
          landingDiv.removeEventListener("touchend", onTouchEnd);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
```

## `src/components/Character/exports.ts`
```ts
```

## `src/components/MainContainer.tsx`
```tsx
import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import CinematicHero from "./CinematicHero";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <CinematicHero />
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
```

## `src/components/Contact.tsx`
```tsx
import { MdArrowOutward, MdCopyright, MdArrowForward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <>
      {/* ── STICKY FOOTER BAR (always visible at bottom) ── */}
      <div className="contact-sticky-bar">
        <a
          href="mailto:aryantripathi198@gmail.com"
          className="contact-sticky-email"
          data-cursor="disable"
        >
          aryantripathi198@gmail.com
        </a>
        <a
          href="#contact"
          className="contact-sticky-cta"
          data-cursor="disable"
        >
          Get in touch <MdArrowOutward />
        </a>
      </div>

      {/* ── FULL CONTACT SECTION (at end of scroll as usual) ── */}
      <div className="contact-section section-container" id="contact">
        <div className="contact-container">
          <h3>Contact</h3>
          <div className="contact-flex">
            <div className="contact-box">
              <h4>Email</h4>
              <p>
                <a href="mailto:aryantripathi198@gmail.com" data-cursor="disable">
                  aryantripathi198@gmail.com
                </a>
              </p>
              <h4>Phone</h4>
              <p>
                <a href="tel:+916307332172" data-cursor="disable">
                  +91 63073 32172
                </a>
              </p>
            </div>
            <div className="contact-box">
              <h4>Social</h4>
              <a
                href="https://github.com/Unorthodox60"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://linkedin.com/in/aryan-tripathi"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Twitter <MdArrowOutward />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Instagram <MdArrowOutward />
              </a>
            </div>
            <div className="contact-box">
              <h2>
                Designed and Developed <br /> by <span>Aryan Tripathi</span>
              </h2>
              <h5>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Let's Talk</h2>
            <p>Ready to transform your ideas into reality? Fill out the form below and let's start the conversation.</p>
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter Your Name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter Your Email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="How can I help you?" rows={5} required></textarea>
              </div>
              <button type="submit" className="form-submit">
                Send Message <MdArrowForward />
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
```

## `src/components/WorkImage.tsx`
```tsx
import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={props.image} alt={props.alt} />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
```

## `src/components/utils/initialFX.ts`
```ts
import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  const TextProps = { type: "chars,lines", linesClass: "split-h2" };

  const landingText2 = new SplitText(".landing-h2-info", TextProps);
  gsap.fromTo(
    landingText2.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  const landingText4 = new SplitText(".landing-h2-1", TextProps);
  const landingText5 = new SplitText(".landing-h2-2", TextProps);

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
```

## `src/components/utils/splitText.ts`
```ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { SplitText } from "gsap-trial/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  paras.forEach((para: ParaElement) => {
    para.classList.add("visible");
    if (para.anim) {
      para.anim.progress(1).kill();
      para.split?.revert();
    }

    para.split = new SplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.anim = gsap.fromTo(
      para.split!.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
        stagger: 0.02,
      }
    );
  });
  titles.forEach((title: ParaElement) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.split?.revert();
    }
    title.split = new SplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    title.anim = gsap.fromTo(
      title.split!.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
        stagger: 0.03,
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}
```

## `src/components/utils/GsapScroll.ts`
```ts
import * as THREE from "three";
import gsap from "gsap";

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  let intensity: number = 0;
  setInterval(() => {
    intensity = Math.random();
  }, 200);
  const tl0 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cinematic-hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".whatIDO",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  let screenLight: any, monitor: any;
  character?.children.forEach((object: any) => {
    if (object.name === "Plane004") {
      object.children.forEach((child: any) => {
        child.material.transparent = true;
        child.material.opacity = 0;
        if (child.material.name === "Material.027") {
          monitor = child;
          child.material.color.set("#FFFFFF");
        }
      });
    }
    if (object.name === "screenlight") {
      object.material.transparent = true;
      object.material.opacity = 0;
      object.material.emissive.set("#C8BFFF");
      gsap.timeline({ repeat: -1, repeatRefresh: true }).to(object.material, {
        emissiveIntensity: () => intensity * 8,
        duration: () => Math.random() * 0.6,
        delay: () => Math.random() * 0.1,
      });
      screenLight = object;
    }
  });
  const neckBone = character?.getObjectByName("spine005");
  if (window.innerWidth > 1024) {
    if (character) {
      tl0
        .set(".character-model", { transformOrigin: "center bottom" })
        .fromTo(
          ".character-model",
          { scale: 0.55, opacity: 0 },
          { scale: 1, opacity: 1, ease: "none", duration: 1 }
        );

      tl1
        .fromTo(character.rotation, { y: 0 }, { y: 0.7, duration: 1 }, 0)
        .to(camera.position, { z: 22 }, 0)
        .fromTo(".character-model", { x: 0 }, { x: "-25%", duration: 1 }, 0)
        .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
        .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
        .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

      tl2
        .to(
          camera.position,
          { z: 75, y: 8.4, duration: 6, delay: 2, ease: "power3.inOut" },
          0
        )
        .to(".about-section", { y: "30%", duration: 6 }, 0)
        .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0)
        .fromTo(
          ".character-model",
          { pointerEvents: "inherit" },
          { pointerEvents: "none", x: "-12%", delay: 2, duration: 5 },
          0
        )
        .to(character.rotation, { y: 0.92, x: 0.12, delay: 3, duration: 3 }, 0)
        .to(neckBone!.rotation, { x: 0.6, delay: 2, duration: 3 }, 0)
        .to(monitor.material, { opacity: 1, duration: 0.8, delay: 3.2 }, 0)
        .to(screenLight.material, { opacity: 1, duration: 0.8, delay: 4.5 }, 0)
        .fromTo(
          ".what-box-in",
          { display: "none" },
          { display: "flex", duration: 0.1, delay: 6 },
          0
        )
        .fromTo(
          monitor.position,
          { y: -10, z: 2 },
          { y: 0, z: 0, delay: 1.5, duration: 3 },
          0
        )
        .fromTo(
          ".character-rim",
          { opacity: 1, scaleX: 1.4 },
          { opacity: 0, scale: 0, y: "-70%", duration: 5, delay: 2 },
          0.3
        );

      tl3
        .fromTo(
          ".character-model",
          { y: "0%" },
          { y: "-100%", duration: 4, ease: "none", delay: 1 },
          0
        )
        .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0)
        .to(character.rotation, { x: -0.04, duration: 2, delay: 1 }, 0);
    }
  } else {
    if (character) {
      const tM2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".what-box-in",
          start: "top 70%",
          end: "bottom top",
        },
      });
      tM2.to(".what-box-in", { display: "flex", duration: 0.1, delay: 0 }, 0);
    }
  }
}

export function setAllTimeline() {
  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )

    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }
}
```

## `src/components/HoverLinks.tsx`
```tsx
import "./styles/style.css";

const HoverLinks = ({ text, cursor }: { text: string; cursor?: boolean }) => {
  return (
    <div className="hover-link" data-cursor={!cursor && `disable`}>
      <div className="hover-in">
        {text} <div>{text}</div>
      </div>
    </div>
  );
};

export default HoverLinks;
```

## `src/components/SocialIcons.tsx`
```tsx
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/Unorthodox60" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://linkedin.com/in/aryan-tripathi" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com" target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
```

## `src/components/styles/SocialIcons.css`
```css
.icons-section {
  position: fixed;
  max-width: var(--cMaxWidth);
  width: var(--cWidth);
  bottom: 0;
  z-index: 99;
  left: 50%;
  transform: translateX(-50%);
}
.social-icons {
  position: absolute;
  left: -20px;
  bottom: 20px;
  display: none;
  flex-direction: column;
  gap: 8px;
  z-index: 999;
  padding: 10px;
}
.social-icons:hover {
  transition: 0.3s;
  color: var(--backgroundColor);
}
.social-icons a:hover {
  color: var(--backgroundColor);
  /* transform: scale(1.2); */
}
.social-icons span {
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
}
.social-icons a {
  --siLeft: 50%;
  --siTop: 50%;
  position: absolute;
  left: var(--siLeft, 50%);
  top: var(--siTop, 50%);
  transform: translate(-50%, -50%);
  display: flex;
  font-size: 23px;
  will-change: left, top;
  transition: transform 0.3s ease-out;
}
.resume-button {
  position: absolute;
  z-index: 99;
  display: flex;
  gap: 5px;
  bottom: 40px;
  right: 0;
  width: auto;
  text-wrap: nowrap;
  letter-spacing: 4px;
  font-size: 15px;
  line-height: 15px;
  font-weight: 600;
  color: #5e5e5e;
  cursor: pointer;
  transition: 0.5s;
  transform-origin: left bottom;
  transform: translateX(100%) rotateZ(-90deg);
}
.resume-button:hover {
  color: #fff;
}
div.resume-button span {
  color: #fff;
  font-size: 17px;
  margin-top: -1px;
  display: flex;
  align-items: center;
}
.check-line {
  position: fixed;
  top: 655px;
  left: 0;
  height: 1px;
  background-color: #ffffff;
  width: 100%;
  z-index: 99999;
}
@media only screen and (min-width: 900px) {
  .social-icons {
    display: flex;
    gap: 20px;
  }
  .social-icons a {
    font-size: 28px;
  }
}
@media only screen and (min-width: 768px) {
  .resume-button {
    transform: none;
    font-size: 20px;
    line-height: 20px;
  }
  div.resume-button span {
    font-size: 23px;
    margin-top: -1.5px;
  }
}
```

## `src/components/styles/Contact.css`
```css
.contact-section {
  margin: auto;
  padding-bottom: 100px;
  margin-top: 100px;
  position: relative;
  z-index: 2;
  background-color: var(--backgroundColor);
}
.contact-section h3 {
  font-size: 60px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
}
.contact-flex {
  display: flex;
  justify-content: space-between;
}
.contact-flex h4 {
  font-weight: 500;
  margin: 0;
  opacity: 0.6;
}
.contact-box {
  display: flex;
  flex-direction: column;
}
.contact-flex p {
  margin-top: 10px;
  margin-bottom: 20px;
}
a.contact-social {
  font-size: 25px;
  border-bottom: 1px solid #ccc;
}
.contact-box h2 {
  font-weight: 400;
  font-size: 23px;
  margin: 0;
}
.contact-box h2 > span {
  color: var(--accentColor);
}
.contact-box h5 {
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  gap: 10px;
  opacity: 0.5;
}
@media only screen and (max-width: 1600px) {
  .contact-section h3 {
    font-size: 50px;
  }
  .contact-box h2 {
    font-size: 20px;
  }
  a.contact-social {
    font-size: 22px;
  }
}
@media only screen and (max-width: 1300px) {
  .contact-section h3 {
    font-size: 40px;
  }
  .contact-box h2 {
    font-size: 18px;
  }
  a.contact-social {
    font-size: 20px;
  }
  .contact-flex p {
    margin-top: 0px;
  }
}
@media only screen and (max-width: 900px) {
  .contact-flex {
    flex-direction: column;
    gap: 40px;
  }
  .contact-flex p {
    margin-bottom: 0px;
  }
  .contact-flex h4 {
    margin-top: 20px;
  }
  .contact-section {
    margin-top: 50px;
    padding-bottom: 50px;
  }
  .contact-container {
    width: calc(100% - 25px);
  }
}

/* ── STICKY BOTTOM BAR ── */
.contact-sticky-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9998;               /* below cursor (99) but above everything else */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 40px;
  background: rgba(11, 8, 12, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(194, 164, 255, 0.12);
  pointer-events: auto;
}

.contact-sticky-email {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: rgba(234, 229, 236, 0.6);
  text-decoration: none;
  transition: color 0.2s;
}
.contact-sticky-email:hover {
  color: var(--accentColor);
}

.contact-sticky-cta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--accentColor);
  text-decoration: none;
  transition: gap 0.2s, opacity 0.2s;
}
.contact-sticky-cta:hover {
  gap: 10px;
  color: var(--accentColor);
  opacity: 0.8;
}

.contact-form-container {
  width: 100%;
  max-width: 600px;
  background-color: #080808;
  border: 1px solid #232323;
  border-radius: 16px;
  padding: 40px;
  margin-top: 80px;
  margin-bottom: 60px;
  text-align: left;
}

.contact-form-container h2 {
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 16px;
  color: #ffffff;
  letter-spacing: -1px;
}

.contact-form-container p {
  font-size: 15px;
  color: #adacac;
  line-height: 1.5;
  margin: 0 0 32px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background-color: #121212;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  padding: 14px 16px;
  color: #ffffff;
  font-size: 15px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #4f46e5;
}

.form-submit {
  width: 100%;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  color: white;
  border: none;
  border-radius: 24px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: transform 0.3s, opacity 0.3s;
}

.form-submit:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

/* push page content up so sticky bar doesn't cover last section */
#smooth-content {
  padding-bottom: 52px;
}

@media only screen and (max-width: 600px) {
  .contact-sticky-bar {
    padding: 12px 20px;
  }
  .contact-sticky-email {
    font-size: 11px;
  }
  .contact-sticky-cta {
    font-size: 11px;
  }
}
```

## `src/components/styles/Work.css`
```css
.work-section h2 {
  margin-top: 100px;
  font-size: 70px;
  font-weight: 500;
}
.work-section h2 > span {
  color: var(--accentColor);
}
.work-section {
  transition: 0s;
  height: 100vh;
  box-sizing: border-box;
  will-change: transform;
  position: relative;
  z-index: 2;
  background-color: var(--backgroundColor);
  overflow: hidden;
}
.work-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-content: stretch;
}
.work-flex {
  width: 100%;
  display: flex;
  height: 100%;
  margin-left: -80px;
  padding-right: 120px;
  position: relative;
}
.work-box {
  padding: 80px;
  display: flex;
  flex-direction: column;
  width: 600px;
  box-sizing: border-box;
  border-right: 1px solid #363636;
  flex-shrink: 0;
  gap: 50px;
  justify-content: start;
}
.work-flex .work-box:nth-child(even) {
  flex-direction: column-reverse;
}
.work-flex::before,
.work-flex::after {
  content: "";
  width: calc(50000vw);
  height: 1px;
  background-color: #363636;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
.work-flex::after {
  top: 100%;
}
.work-title {
  justify-content: space-between;
  display: flex;
  width: 100%;
  margin-bottom: 20px;
}
.work-title > div {
  text-align: right;
}
.work-title h3 {
  font-size: 50px;
  line-height: 50px;
  margin: 0;
  font-weight: 600;
}

.work-info h4 {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
}
.work-info p {
  font-weight: 200;
  color: #adacac;
  margin: 0;
  margin-top: 3px;
}
.work-info > p {
  width: 90%;
}
.work-image {
  display: flex;
  width: 100%;
  justify-content: center;
}
.work-image-in {
  position: relative;
}
.work-link {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: var(--backgroundColor);
  width: 50px;
  border-radius: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5),
    inset 0px 0px 10px 0px #393939;
  transition: 0.3s;
  opacity: 0;
}
.work-image a:hover {
  color: inherit;
}
.work-image a:hover .work-link {
  opacity: 1;
}
.work-image video {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  object-fit: cover;
}
.work-image img {
  max-width: 100%;
  max-height: 350px;
}
@media only screen and (max-height: 900px) {
  .work-image img {
    max-height: 250px;
  }
  .work-box {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .work-section h2 {
    font-size: 60px;
    margin-bottom: 30px;
    margin-top: 70px;
  }
}
@media only screen and (max-width: 1400px) {
  .work-title h3 {
    font-size: 35px;
  }
  .work-info p {
    font-size: 13px;
  }
  .work-info h4 {
    font-size: 15px;
  }
  .work-box {
    width: 450px;
    padding: 50px;
  }
  .work-flex {
    margin-left: -50px;
    padding-right: 75px;
  }
  .work-section h2 {
    font-size: 50px;
  }
}
@media only screen and (max-width: 1400px) {
  .work-box {
    width: 350px;
    padding: 30px;
  }
  .work-flex {
    margin-left: -30px;
    padding-right: 45px;
  }
}

@media only screen and (max-height: 650px) {
  .work-image img {
    max-height: 200px;
  }
  .work-section h2 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  .work-box {
    gap: 20px;
  }
}
/* @media only screen and (max-width: 900px) {
  .work-image img {
    max-height: 200px;
  }
  .work-section h2 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  .work-box {
    gap: 20px;
  }
} */
@media only screen and (max-width: 1025px) {
  .work-container {
    align-content: normal;
  }
  .work-flex {
    height: auto;
    overflow: hidden;
  }
  .work-section {
    overflow: hidden;
  }
}

@media only screen and (max-width: 768px) {
  .work-section {
    height: auto;
    min-height: unset;
    overflow: visible;
  }
  .work-flex {
    flex-direction: column;
    margin-left: 0;
    padding-right: 0;
    height: auto;
    overflow: visible;
  }
  .work-box {
    width: 100%;
    padding: 20px;
    border-right: none;
    border-bottom: 1px solid #363636;
    gap: 20px;
  }
  .work-flex::before,
  .work-flex::after {
    display: none;
  }
  .work-section h2 {
    font-size: 36px;
    margin-top: 40px;
    margin-bottom: 10px;
  }
  .work-image img {
    max-height: 200px;
  }
}
```

## `src/components/styles/Cursor.css`
```css
.cursor-main {
  --size: 0px;
  position: fixed;
  top: calc(var(--size) / -2);
  left: calc(var(--size) / -2);
  width: var(--size);
  height: var(--size);
  border-radius: 50px;
  pointer-events: none;
  z-index: 99;
  background-color: #e6c3ff;
  box-shadow: 0px 0px 30px 0px rgb(175, 131, 255);
  mix-blend-mode: difference;
  transition: top 0.3s ease-out, left 0.3s ease-out, width 0.3s ease-out,
    height 0.3s ease-out;
}
.cursor-icons {
  top: 10px;
  left: 10px;
  height: calc(var(--cursorH) - 20px);
  transition: all 0.5s ease-out, height 0.5s ease-in-out;
}
.cursor-disable {
  --size: 0px;
}
@media only screen and (min-width: 600px) {
  .cursor-main {
    --size: 50px;
  }
  .cursor-disable {
    --size: 0px;
  }
}
```

## `src/components/styles/Navbar.css`
```css
.header {
  display: flex;
  max-width: var(--cMaxWidth);
  width: var(--cWidth);
  justify-content: space-between;
  padding: 20px 0px;
  margin-bottom: -100px;
  box-sizing: border-box;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  z-index: 9999;
}
.header ul {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  column-gap: 40px;
  row-gap: 8px;
  align-items: end;
}
.header ul li {
  margin-left: 0px;
  letter-spacing: 1px;
  color: #ccc;
  font-weight: 600;
  cursor: pointer;
}
.navbar-connect {
  position: absolute;
  display: none;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 500;
}
.navbar-title {
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.2px;
}
@media only screen and (min-width: 500px) {
  .header {
    padding: 20px 0px;
  }
  .header ul {
    flex-direction: row;
    align-items: center;
    font-size: 14px;
  }
  .header ul li {
    color: #eae5ec;
  }
  .navbar-title {
    font-size: 16px;
  }
}
@media only screen and (min-width: 900px) {
  .navbar-connect {
    display: block;
  }
}
@media only screen and (min-width: 1200px) {
  .header {
    padding: 35px 0px;
  }
  .header ul {
    column-gap: 80px;
    font-size: 16px;
  }
  .navbar-connect {
    font-size: 16px;
  }
  .navbar-title {
    font-size: 18px;
  }
}
```

## `src/components/styles/Career.css`
```css
.career-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  place-items: center;
  justify-content: center;
  position: relative;
  opacity: 1;
  height: auto;
  margin: auto;
  margin-bottom: 250px;
  padding: 120px 0px;
}

.career-section h2 {
  font-size: 70px;
  line-height: 70px;
  font-weight: 400;
  text-align: center;
  background: linear-gradient(0deg, #7f40ff, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-top: 50px;
  margin-bottom: 90px;
}
.career-section h2 > span {
  font-family: "Geist", sans-serif;
  font-weight: 300;
}
.career-info {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
}
.career-info-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.career-info-box p {
  width: 40%;
  font-size: 18px;
  font-weight: 300;
  margin: 0;
}
.career-info-in {
  display: flex;
  width: 40%;
  justify-content: space-between;
  gap: 50px;
}
.career-info h3 {
  font-size: 48px;
  margin: 0;
  font-weight: 500;
  line-height: 45px;
}

.career-info h4 {
  font-size: 33px;
  line-height: 30px;
  letter-spacing: 0.8px;
  font-weight: 500;
  margin: 0;
}
.career-info h5 {
  font-weight: 400;
  letter-spacing: 0.7px;
  font-size: 20px;
  text-transform: capitalize;
  margin: 10px 0px;
  color: var(--accentColor);
}
.career-timeline {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 100%;
  background-image: linear-gradient(
    to top,
    #aa42ff 20%,
    var(--accentColor) 50%,
    transparent 95%
  );
  max-height: 0%;
}
.career-dot {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: #aa42ff;
  width: 10px;
  height: 10px;
  border-radius: 50px;
  box-shadow: 0px 0px 5px 2px #d29bff, 0px 0px 15px 8px #d097ff,
    0px 0px 110px 20px #f2c0ff;
  animation: timeline 0.8s linear infinite forwards;
}

@keyframes timeline {
  10%,
  20%,
  50%,
  70%,
  90% {
    box-shadow: 0px 0px 5px 2px #d29bff;
  }
  10%,
  30%,
  0%,
  100%,
  64%,
  80% {
    box-shadow: 0px 0px 5px 2px #d29bff, 0px 0px 15px 5px #d097ff,
      0px 0px 110px 20px #f2c0ff;
  }
}
@keyframes timeline2 {
  0% {
    box-shadow: 0px 0px 5px 2px #d29bff;
  }
  100% {
    box-shadow: 0px 0px 5px 2px #d29bff, 0px 0px 15px 5px #d097ff,
      0px 0px 110px 20px #f2c0ff;
  }
}
@media only screen and (max-width: 1400px) {
  .career-section h2 {
    font-size: 50px;
    line-height: 50px;
  }
  .career-info h4 {
    font-size: 22px;
    line-height: 24px;
    width: 180px;
  }
  .career-info h5 {
    font-size: 17px;
  }
  .career-info h3 {
    font-size: 40px;
  }
  .career-info-box p {
    font-size: 14px;
  }
  .career-info-in {
    width: 45%;
    gap: 20px;
  }

  .career-info-box p {
    width: 45%;
  }
}
@media only screen and (max-width: 1025px) {
  .career-section {
    padding: 70px 0px;
    padding-top: 220px;
    margin-top: -200px;
    margin-bottom: 0;
  }
}
@media only screen and (max-width: 900px) {
  .career-info-box {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 70px;
  }
  .career-info-in,
  .career-info-box p {
    width: 100%;
    padding-left: 10%;
    box-sizing: border-box;
  }
  .career-timeline {
    left: 0%;
  }
  .career-container {
    width: calc(100% - 25px);
  }
}
@media only screen and (max-width: 600px) {
  .career-info {
    margin: 0;
  }
  .career-section h2 {
    width: 100%;
    font-size: 45px;
    line-height: 45px;
    margin-top: 0px;
  }
  .career-info-in {
    gap: 0px;
  }
  .career-info h3 {
    font-size: 33px;
  }
  .career-info-in,
  .career-info-box p {
    padding-left: 5%;
  }
  .career-section {
    padding-top: 90px;
    margin-top: -70px;

    align-items: start;
    place-items: inherit;
    justify-content: left;
  }
}
```

## `src/components/styles/About.css`
```css
.about-section {
  display: flex;
  align-items: center;
  justify-content: left;
  place-items: center;
  position: relative;
  opacity: 1;
  height: auto;
  width: var(--cWidth);
  margin: auto;
}
.about-me {
  padding: 50px 0px;
  padding-bottom: 0;
  width: 500px;
  max-width: calc(100% - 15px);
}
.about-me h3 {
  font-size: 25px;
  text-transform: uppercase;
  letter-spacing: 7px;
  font-weight: 400;
  color: var(--accentColor);
}

.about-me p {
  font-size: 33px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 1px;
}

@media only screen and (min-width: 600px) {
  .about-section {
    justify-content: center;
  }
}
@media only screen and (min-width: 768px) {
  .about-me {
    width: 500px;
    max-width: calc(100% - 70px);
    transform: translateY(0%);
  }
  .about-section {
    opacity: 1;
  }
}
@media only screen and (min-width: 1025px) {
  .about-section {
    width: var(--cWidth);
    justify-content: right;
    max-width: 1920px;
    height: var(--vh);
    padding: 0px;
    opacity: 1;
  }
  .about-me {
    padding: 0px;
    width: 50%;
  }
  .about-me p {
    font-size: 1.9vw;
    line-height: 2.3vw;
  }
}
@media only screen and (min-width: 1950px) {
  .about-me p {
    font-size: 2.5rem;
    line-height: 2.7rem;
  }
}
```

## `src/components/styles/Loading.css`
```css
.loading-screen {
  position: fixed;
  width: 100vw;
  height: var(--vh);
  /* background-image: linear-gradient(#cbb1ff, #d8c4ff); */
  background-color: #eae5ec;
  z-index: 999999999;
  display: flex;
  place-items: center;
  justify-content: center;
}
.loading-button {
  padding: 20px 50px;
  border-radius: 100px;
  background-color: #000;
  overflow: hidden;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  z-index: 9;
}
.loading-button::before {
  content: "";
  background-color: #ffffff;
  top: var(--mouse-y);
  left: var(--mouse-x);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  opacity: 1;
  position: absolute;
  z-index: 99;
  filter: blur(60px);
  opacity: 0;
  transform: translate(-50%, -50%);
}
.loading-button:hover::before {
  opacity: 1;
}
.loading-clicked .loading-button::before {
  opacity: 0;
}

.loading-wrap {
  --Lsize: 145px;
  padding: 6px;
  position: relative;
  min-width: 0px;
  min-height: 0px;
  border-radius: 100px;
  background-color: #000;
  overflow: hidden;
  transition: 0.8s ease-in-out;
  transition-delay: 0.2s;
  box-shadow: 0px 15px 15px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-clicked {
  transition-delay: 0ms;
  transition-timing-function: cubic-bezier(0.33, 0.11, 1, 0.72);
  transform: scale(1);
  min-width: calc(100vw + 5000px);
  border-radius: 5000px;
  min-height: calc(100vh + 500px);
  box-shadow: none;
}
.loading-clicked .loading-button {
  overflow: visible;
}
.loading-hover {
  background-color: #a87cff;
  width: 250px;
  height: 120px;
  position: absolute;
  top: var(--mouse-y);
  left: var(--mouse-x);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: blur(30px);
  opacity: 1;
  transition: opacity 500ms;
}

.loading-wrap:hover .loading-hover {
  opacity: 1;
}
.loading-clicked:hover .loading-hover,
.loading-clicked .loading-hover {
  opacity: 0;
}
.loading-content {
  position: relative;
  background-color: #000;
  width: 100%;
  overflow: hidden;
  transition: 0.6s;
  text-transform: uppercase;
}
.loading-content-in {
  position: relative;
  width: var(--Lsize);
  overflow: hidden;
}
.loading-content2 {
  position: relative;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: var(--Lsize);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  text-align: center;
  transition: 1s;
  max-width: var(--Lsize);
}
.loading-clicked .loading-content2 {
  opacity: 0;
  transition: 0.5s;
}

.loading-content span {
  font-weight: 300;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  opacity: 0.7;
}
.loading-box {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(100%, -50%);
  width: 15px;
  height: 25px;
  background-color: white;
  animation: blink 1s linear infinite;
}
.loading-icon {
  transform: scale(0);
  opacity: 0;
  transition: 0.5s;
  transition-delay: 0.5s;
}

.loading-complete .loading-icon {
  transform: scale(1);
  opacity: 1;
}
.loading-clicked .loading-icon {
  transition-delay: 0s;
  transition: 1s;
  transform: translateX(200px);
}
.loading-clicked .loading-content2 {
  overflow: visible;
}
.loading-clicked .loading-content2 span {
  transition: 1s;
  transform: translateY(100px);
  opacity: 0;
}
.loading-container {
  position: absolute;
  width: 100%;
  max-width: var(--Lsize);
  /* height: 45px; */
  top: 50%;
  transition: 1s;
  left: 50px;
  z-index: 9;
  transform: translateY(-50%);
}

.loading-complete .loading-container {
  max-width: 0px;
}
.loading-header {
  width: var(--cWidth);
  max-width: var(--cMaxWidth);
  position: fixed;
  z-index: 9999999999;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 20px 0px;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  color: var(--backgroundColor);
}
.loader-title {
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.2px;
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.loading-complete .loading-box {
  animation: blinkDone 0.3s forwards;
  animation-delay: 1s;
  opacity: 1;
}
@keyframes blinkDone {
  to {
    opacity: 0;
  }
}

.loaderGame-container {
  width: 200px;
  transition: 0.3s;
  height: 100px;
  overflow: hidden;
  position: relative;
  transform: scale(0.4);
  transform-origin: top right;
}
.loader-out .loaderGame-container {
  opacity: 0;
}
.loaderGame-in {
  width: 1200px;
  position: absolute;
  overflow: hidden;
  left: 0;
  animation: loaderGame 7s linear infinite;
}
@keyframes loaderGame {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-300px);
  }
}
.loaderGame-line {
  float: left;
  margin: 0px 20px;
  margin-bottom: 40px;
  position: relative;
  width: 10px;
  height: 60px;
  background-color: #000;
  display: block;
}
.loaderGame-line:nth-child(2n) {
  margin-top: 40px;
  margin-bottom: 0px;
}

.loaderGame-ball {
  position: absolute;
  left: 20%;
  top: 0%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #a87cff;
  animation: ball25 7s infinite;
  transform: translateY(10px);
  animation-timing-function: cubic-bezier(0.3, 1.18, 0.63, 1.28);
}
.loading-marquee {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  color: var(--backgroundColor);
  font-size: 60px;
  font-weight: 600;
  text-transform: uppercase;
}
.loading-marquee span {
  padding: 0px 50px;
  position: relative;
}
.loading-marquee span::before {
  content: "";
  width: 20px;
  height: 20px;
  background-color: var(--backgroundColor);
  position: absolute;
  top: 50%;
  border-radius: 50px;
  left: 0px;
  transform: translate(-50%, -50%);
}
@keyframes ball25 {
  0% {
    transform: translateY(70px);
  }
  15% {
    transform: translateY(10px);
  }
  30% {
    transform: translateY(70px);
  }
  45% {
    transform: translateY(10px);
  }
  67% {
    transform: translateY(70px);
  }
  80% {
    transform: translateY(10px);
  }
  90% {
    transform: translateY(70px);
  }
  100% {
    transform: translateY(70px);
  }
}

@media only screen and (min-width: 1400px) {
  .loading-wrap {
    --Lsize: 210px;
  }
  .loading-button {
    padding: 30px 70px;
    font-size: 25px;
  }
  .loading-container {
    left: 70px;
  }
  .loading-marquee {
    font-size: 100px;
  }
}
@media only screen and (min-width: 500px) {
  .loading-header {
    padding: 20px 0px;
  }
  .loader-title {
    font-size: 16px;
  }
}
@media only screen and (min-width: 1200px) {
  .loading-header {
    padding: 35px 0px;
  }
  .loader-title {
    font-size: 18px;
  }
}
```

## `src/components/styles/style.css`
```css
.hover-link {
  position: relative;
  display: flex;
  text-wrap: nowrap;
  overflow: hidden;
}
.hover-in {
  position: relative;
  transition: 0.3s;
}
.hover-in div {
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
}
.hover-link:hover .hover-in {
  transform: translateY(-100%);
  color: var(--accentColor);
}
```

## `src/components/styles/Landing.css`
```css
.landing-section {
  width: 100%;
  max-width: var(--cMaxWidth);
  margin: auto;
  position: relative;
  height: var(--vh);
}
.landing-container {
  width: var(--cWidth);
  margin: auto;
  height: 100%;
  position: relative;
  max-width: var(--cMaxWidth);
}
.landing-circle1 {
  top: 0%;
  left: 0%;
  z-index: 15;
  position: fixed;
  width: 300px;
  height: 300px;
  background-color: #fb8dff;
  box-shadow: inset -50px 40px 50px rgba(84, 0, 255, 0.6);
  filter: blur(60px);
  border-radius: 50%;
  animation: loadingCircle 5s linear infinite;
}
.nav-fade {
  position: fixed;
  top: 0;
  width: 100%;
  height: 130px;
  background-image: linear-gradient(
    0deg,
    transparent,
    var(--backgroundColor) 70%
  );
  pointer-events: none;
  z-index: 12;
  opacity: 0;
  left: 0;
}
@keyframes loadingCircle {
  0% {
    transform: translate(-95%, -75%) rotateZ(0deg);
  }
  100% {
    transform: translate(-95%, -75%) rotateZ(360deg);
  }
}

.landing-circle2 {
  top: 50%;
  right: 0%;
  transform: translate(calc(100% - 2px), -50%);
  z-index: 9;
  position: fixed;
  display: none;
  width: 300px;
  height: 300px;
  background-color: #fb8dff;
  box-shadow: inset -50px 40px 50px rgba(84, 0, 255, 0.6);
  filter: blur(50px);
  border-radius: 50%;
  animation: loadingCircle2 5s linear infinite;
}
@keyframes loadingCircle2 {
  100% {
    transform: translate(calc(100% - 2px), -50%) rotate(360deg);
  }
}
.landing-video,
.landing-image {
  position: absolute;
  bottom: 0;
  height: 95%;
  left: 50%;
  transform: translateX(-50%);
}
.landing-image img {
  height: 100%;
  z-index: 2;
  position: relative;
}
.character-rim {
  position: absolute;
  width: 400px;
  height: 400px;
  z-index: 1;
  background-color: #f59bf8;
  transform: translate(-50%, 36%) scaleX(1.4);
  box-shadow: inset 66px 35px 85px 0px rgba(85, 0, 255, 0.65);
  filter: blur(50px);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 100%) scale(1.4);
  opacity: 0;
}
.character-model {
  height: 80%;
  height: 80vh;
  position: absolute;
  max-width: 1920px;
  max-height: 1080px;
  transform: translateX(-50%);
  width: 100%;
  left: 50%;
  z-index: 0;
  bottom: 50px;
  pointer-events: inherit;
}
.character-model::after {
  content: "";
  width: 100vw;
  height: 250px;
  background-image: linear-gradient(
    to bottom,
    transparent,
    var(--backgroundColor) 70%
  );
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
  position: absolute;
}
.character-model::before {
  content: "";
  width: 100vw;
  height: 700px;
  background-color: var(--backgroundColor);
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9;
  position: absolute;
}
.character-loaded .character-rim {
  animation: backlight 3s forwards;
  animation-delay: 0.3s;
  opacity: 0;
}
.character-model canvas {
  position: relative;
  pointer-events: none;
  z-index: 2;
}
.character-hover {
  position: absolute;
  width: 280px;
  height: 280px;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.landing-intro {
  position: absolute;
  z-index: 9;
  top: 12%;
  left: 0;
}
.landing-intro h2 {
  margin: 0;
  color: var(--accentColor);
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 2px;
}

.landing-intro h1 {
  margin: 0;
  letter-spacing: 2px;
  font-size: 28px;
  line-height: 28px;
  font-weight: 500;
  font-family: "Geist", sans-serif;
}

/* .landing-intro h1 span {
   font-weight: 200; 
} */

.landing-info {
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  bottom: 40px;
  top: inherit;
  z-index: 9;
}
.landing-info h3 {
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: 300;
  color: var(--accentColor);
  margin: 0;
}
.landing-info h2 {
  margin: 0;
  margin-top: -20px;
  margin-left: 20px;
  font-family: "Geist", sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.landing-h2-info-1 {
  position: absolute;
  top: 0;
}
h2.landing-info-h2 {
  color: #c481ff;
  font-size: 42px;
  width: 120%;
  margin: 0;
  font-family: "Geist", sans-serif;
  font-weight: 600;
  position: relative;
  margin-left: -5px;
}
.landing-h2-2 {
  position: absolute;
  top: 0;
}
.landing-info-h2::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 120%;
  z-index: 3;
  background-image: linear-gradient(
    0deg,
    var(--backgroundColor) 40%,
    rgba(0, 0, 0, 0) 110%
  );
  top: 0;
  left: 0;
}
@media screen and (min-width: 500px) {
  .landing-circle2 {
    display: block;
  }
  .character-model {
    z-index: 0;
  }
  .landing-info h3 {
    font-size: 18px;
  }
  .landing-intro h2 {
    font-size: 18px;
  }
  .landing-intro h1 {
    font-size: 30px;
    line-height: 30px;
  }
  .landing-info h2 {
    font-size: 35px;
    line-height: 40px;
  }
  h2.landing-info-h2 {
    font-size: 38px;
  }
}
@media screen and (min-width: 768px) {
  .character-model {
    height: 80vh;
  }
  .landing-intro h2 {
    font-size: 25px;
  }
  .landing-intro h1 {
    font-size: 40px;
    line-height: 35px;
  }
  .landing-info h3 {
    font-size: 25px;
  }
  .landing-info h2 {
    font-size: 45px;
    line-height: 42px;
  }
  h2.landing-info-h2 {
    font-size: 55px;
  }
}
@media screen and (min-width: 1025px) {
  .character-model {
    height: 100vh;
    bottom: 0;
    z-index: 11;
    position: fixed;
  }
  .character-model::after,
  .character-model::before {
    display: none;
  }
  .landing-intro {
    top: 50%;
    left: auto;
    right: 66%;
    transform: translate(0%, -50%);
  }

  .landing-info {
    bottom: auto;
    top: 51%;
    z-index: inherit;
    text-align: left;
    transform: translate(0%, -50%);
    right: auto;
    left: 66%;
  }
}
@media screen and (min-width: 1200px) {
  .landing-intro {
    top: 50%;
    left: auto;
    right: 70%;
    transform: translate(0%, -50%);
  }

  .landing-info {
    bottom: auto;
    top: 51%;
    z-index: inherit;
    text-align: left;
    transform: translate(0%, -50%);
    right: auto;
    left: 70%;
  }
}
@media screen and (min-width: 1600px) {
  .landing-intro h2 {
    font-size: 35px;
  }
  .landing-intro h1 {
    font-size: 60px;
    line-height: 55px;
  }
  .landing-info h3 {
    font-size: 35px;
  }
  .landing-info h2 {
    font-size: 65px;
    line-height: 62px;
  }
  h2.landing-info-h2 {
    font-size: 75px;
  }
}
```

## `src/components/styles/WhatIDo.css`
```css
.whatIDO {
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  position: relative;
  opacity: 1;
  height: 100vh;
  width: var(--cWidth);
  max-width: 1920px;
  margin: auto;
  z-index: 9;
}
.what-box {
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 9;
}
.what-box h2 {
  font-size: calc(4vw + 25px);
  line-height: calc(4vw + 20px);
  font-weight: 600;
  margin-right: 10%;
  margin-bottom: 100px;
}

.hat-h2 {
  font-style: italic;
}
.do-h2 {
  color: var(--accentColor);
}
.what-box-in {
  flex-direction: column;
  height: 500px;
  margin-left: 200px;
  position: relative;
  display: none;
}
.what-content {
  width: 450px;
  height: 33%;
  min-height: 50%;
  transition: 0.5s;
  /* border: 0.5px dashed rgba(255, 255, 255, 0.3); */
  position: relative;
  padding: 50px;
  box-sizing: border-box;
}

.what-noTouch:hover,
.what-content-active {
  min-height: 67%;
  padding: 40px 50px;
}

.what-noTouch:hover ~ .what-content,
.what-box-in:hover .what-noTouch:not(:hover),
.what-content.what-sibling {
  min-height: 33%;
  padding: 10px 50px;
}
.what-content h3 {
  font-size: 35px;
  letter-spacing: 1px;
  margin: 0;
}
.what-content p {
  font-size: 14px;
  line-height: 18px;
  font-weight: 200;
  letter-spacing: 0.7px;
}
.what-content h4 {
  font-weight: 300;
  letter-spacing: 1px;
  margin: 0px;
  font-size: 14px;
  opacity: 0.3;
}
.what-content-in {
  opacity: 0;
  animation: whatFlicker 0.5s 1 forwards;
  animation-delay: 1s;
}
@keyframes whatFlicker {
  0%,
  25%,
  35%,
  60% {
    opacity: 0;
  }

  30%,
  50%,
  40%,
  100% {
    opacity: 1;
  }
}
.what-content::before,
.what-corner::before,
.what-content::after,
.what-corner::after {
  content: "";
  width: 10px;
  height: 10px;
  position: absolute;
  border: 4px solid #fff;
  opacity: 0;
  animation: whatCorners 0.2s 1 forwards;
  animation-delay: 0.5s;
}
@keyframes whatCorners {
  100% {
    opacity: 1;
  }
}
.what-content::before {
  top: -2px;
  left: -2px;
  border-right: none;
  border-bottom: none;
}
.what-corner::before {
  top: -2px;
  right: -2px;
  border-left: none;
  border-bottom: none;
}
.what-content::after {
  bottom: -2px;
  left: -2px;
  border-top: none;
  border-right: none;
}
.what-corner::after {
  bottom: -2px;
  right: -2px;
  border-left: none;
  border-top: none;
}
.what-arrow {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
  border: 1px solid #fff;
}
.what-arrow::before {
  content: "";
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transition: 0.5s;
  width: 10px;
  height: 10px;
}
.what-noTouch:hover .what-arrow::before,
.what-content-active .what-arrow::before {
  transform: translate(-50%, -20%) rotate(-225deg);
}
.what-border1 {
  position: absolute;
  top: 0;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  transition: 0.5s;
  max-width: 0%;
  overflow: hidden;
  opacity: 0.8;
  animation: whatBorders 1.2s 1 forwards;
}
.what-border1 svg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
}
.what-border2 {
  position: absolute;
  top: 50%;
  width: 100%;
  left: 0;
  transform: translateY(-50%);
  height: 100%;
  max-height: 0%;
  overflow: hidden;
  transition: 0.5s;
  opacity: 0.8;
  animation: whatBorders 1.2s 1 forwards;
}
.what-border2 svg {
  height: 500px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
}
.what-content-in {
  height: 100%;
  overflow: hidden;
}
.what-content-in h5 {
  font-weight: 300;
  opacity: 0.5;
  font-size: 12px;
  letter-spacing: 1px;
  font-family: "Geist", sans-serif;
  margin-bottom: 5px;
}
@keyframes whatBorders {
  80% {
    opacity: 0.8;
  }
  100% {
    max-height: 100%;
    max-width: 100%;
    opacity: 0.2;
  }
}
.what-content-flex {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}
.what-tags {
  font-size: 13px;
  font-weight: 400;
  padding: 2px 7px;
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid #ffffff50;
  border-radius: 30px;
}
@media only screen and (max-width: 1600px) {
  .what-box h2 {
    margin-right: 18%;
  }
}
@media only screen and (max-width: 1400px) {
  .what-box h2 {
    margin-right: 20%;
  }
  .what-box-in {
    height: 400px;
  }
  .what-content h3 {
    font-size: 28px;
  }
  .what-content {
    padding: 30px;
    width: 400px;
  }
  .what-content p {
    font-size: 13px;
  }
  .what-noTouch:hover,
  .what-content-active {
    padding: 20px 30px;
  }

  .what-noTouch:hover ~ .what-content,
  .what-box-in:hover .what-noTouch:not(:hover),
  .what-content.what-sibling {
    padding: 10px 30px;
  }
  .what-tags {
    font-size: 12px;
  }
}
@media only screen and (max-width: 1400px) {
  .what-box-in {
    margin-left: 50px;
  }
  .what-content {
    width: 380px;
  }
}
@media only screen and (max-width: 1024px) {
  .whatIDO {
    height: auto;
    padding: 50px 0px;
    padding-bottom: 50px;
  }
  .what-box-in {
    height: 500px;
    margin-left: -50px;
  }
  .what-content {
    padding: 50px;
    width: 500px;
  }
  .what-content p {
    font-size: 14px;
  }
  .what-noTouch:hover,
  .what-content-active {
    min-height: 67%;
    padding: 50px;
  }

  .what-noTouch:hover ~ .what-content,
  .what-box-in:hover .what-noTouch:not(:hover),
  .what-content.what-sibling {
    min-height: 33%;
    padding: 10px 50px;
  }
}
@media only screen and (max-width: 900px) {
  .whatIDO {
    flex-direction: column;
  }
  .what-box h2 {
    margin: 50px 0;
    font-size: 55px;
    line-height: 53px;
  }
  .what-box:first-child {
    justify-content: left;
  }
  .what-box:last-child {
    height: 500px;
  }
  .what-box {
    width: 500px;
    max-width: calc(100% - 50px);
    margin: auto;
  }
  .what-content {
    width: 100%;
  }
  .what-box-in {
    margin-left: 0px;
    height: 450px;
  }
  .what-content h5,
  .what-content-flex {
    opacity: 0;
    transition: 0.3s;
  }
  .what-noTouch:hover h5,
  .what-content-active h5,
  .what-noTouch:hover .what-content-flex,
  .what-content-active .what-content-flex {
    opacity: 1;
  }
  .what-content {
    padding: 30px;
  }
  .what-content p {
    font-size: 11px;
  }
  .what-noTouch:hover,
  .what-content-active {
    padding: 10px 30px;
  }
  .what-tags {
    font-size: 11px;
  }

  .what-noTouch:hover ~ .what-content,
  .what-box-in:hover .what-noTouch:not(:hover),
  .what-content.what-sibling {
    padding: 5px 30px;
  }
  .what-content h3 {
    font-size: 25px;
  }
}
@media only screen and (max-width: 550px) {
  .whatIDO {
    place-items: inherit;
    align-items: start;
    justify-content: left;
  }
  .what-box {
    max-width: calc(100% - 25px);
    margin: 0;
  }
}
@media only screen and (min-width: 1950px) {
  .what-box h2 {
    font-size: 7rem;
    line-height: 6.8rem;
  }
}
```

## `src/components/WhatIDo.tsx`
```tsx
import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVELOP</h3>
              <h4>Web & AI Engineering</h4>
              <p>
                Building full-stack web applications and end-to-end ML pipelines
                — from RAG systems and deep learning models to React & Flask apps.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">React.js</div>
                <div className="what-tags">Flask</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">Keras</div>
                <div className="what-tags">LangChain</div>
                <div className="what-tags">Streamlit</div>
                <div className="what-tags">Java</div>
                <div className="what-tags">HTML/CSS</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ANALYSE</h3>
              <h4>Data Science & ML</h4>
              <p>
                Turning raw data into insights — building classification models,
                survival analysis systems, NLP pipelines, and semantic
                segmentation using state-of-the-art tools.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Scikit-learn</div>
                <div className="what-tags">XGBoost</div>
                <div className="what-tags">NLTK</div>
                <div className="what-tags">GloVe</div>
                <div className="what-tags">FAISS</div>
                <div className="what-tags">SHAP</div>
                <div className="what-tags">Pandas</div>
                <div className="what-tags">NumPy</div>
                <div className="what-tags">Matplotlib</div>
                <div className="what-tags">Seaborn</div>
                <div className="what-tags">RAG / LLMs</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
```

## `src/components/Landing.tsx`
```tsx
import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ARYAN
              <br />
              <span>TRIPATHI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Passionate</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">AI Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Developer</div>
              <div className="landing-h2-info-1">AI Engineer</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
```

## `src/components/Loading.tsx`
```tsx
import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          Aryan
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>
      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> A Creative Developer</span> <span>A Creative Designer</span>
            <span> A Creative Developer</span> <span>A Creative Designer</span>
          </Marquee>
        </div>
        <div
          className={`loading-wrap ${clicked && "loading-clicked"}`}
          onMouseMove={(e) => handleMouseMove(e)}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded && "loading-complete"}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      const rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
```

## `src/components/About.tsx`
```tsx
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Aryan Tripathi, a Computer Science undergrad at United Institute of
          Technology, Prayagraj (B.Tech, 2024–2028). I build end-to-end AI/ML
          solutions and web applications — from RAG pipelines and semantic
          segmentation models to full-stack Flask & React apps. I've completed
          industrial training with Intel & HPE on Generative AI, qualified the
          Smart India Hackathon as Team Head, and actively contribute to open
          source through WikiClub Tech. I'm driven by turning complex data into
          meaningful, real-world products.
        </p>
      </div>
    </div>
  );
};

export default About;
```

## `src/components/Career.tsx`
```tsx
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science & Technology</h4>
                <h5>United Institute of Technology, Prayagraj</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Currently pursuing my undergraduate degree with a focus on Machine
              Learning, Data Structures & Algorithms, and Web Development.
              Actively participating in hackathons, open source contributions, and
              technical summits including Google DevFest and TEDx UIT.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI for Gen Z — Industrial Training</h4>
                <h5>Intel & HPE</h5>
              </div>
              <h3>Jan 2026</h3>
            </div>
            <p>
              Completed comprehensive industrial training on Generative AI
              applications, modern AI paradigms, and foundational LLM-based models
              for real-world deployment scenarios.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Collection Framework — Advanced Certification</h4>
                <h5>United Institute of Technology</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a 60-hour advanced Java program; built a data analysis
              tool for real-world air quality datasets with AQI calculation logic
              and statistical pre-processing to categorize pollution severity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
```

## `src/vite-env.d.ts`
```ts
/// <reference types="vite/client" />
declare module 'gsap-trial/SplitText';
```

## `src/data/boneData.ts`
```ts
export const typingBoneNames = [
  "thighL",
  "thighR",
  // "footL",
  // "footR",
  "shinL",
  "shinR",
  "forearmL",
  "forearmR",
  "handL",
  "handR",
  "f_pinky03R",
  "f_pinky02L",
  "f_pinky02R",
  "f_pinky01L",
  "f_pinky01R",
  "palm04L",
  "palm04R",
  "f_ring01L",
  "thumb01L",
  "thumb01R",
  "thumb03L",
  "thumb03R",
  "palm02L",
  "palm02R",
  "palm01L",
  "palm01R",
  "f_index01L",
  "f_index01R",
  "palm03L",
  "palm03R",
  "f_ring02L",
  "f_ring02R",
  "f_ring01R",
  "f_ring03L",
  "f_ring03R",
  "f_middle01L",
  "f_middle02L",
  "f_middle03L",
  "f_middle01R",
  "f_middle02R",
  "f_middle03R",
  "f_index02L",
  "f_index03L",
  "f_index02R",
  "f_index03R",
  "thumb02L",
  "f_pinky03L",
  "upper_armL",
  "upper_armR",
  "thumb02R",
  "toeL",
  "heel02L",
  "toeR",
  "heel02R",
];

export const eyebrowBoneNames = ["eyebrow_L", "eyebrow_R"];
```

