# 阊门繁华录 (Changmen Splendor)

---

## Introduction

**Changmen Splendor** is an interactive historical and cultural experience website built with React, focusing on the 2,500-year history of Changmen — the ancient western gate of Suzhou. The project integrates historical storytelling, AR scene recognition, intelligent travel route recommendations, and dual-device bilingual support through modern Web technologies, offering users an immersive cultural exploration experience.

### Live Demo
🔗 [https://haofei-wang23.github.io/version/](https://haofei-wang23.github.io/version/)

---

### Key Features

1. **Interactive Historical Map**  
   Tap glowing nodes on the ancient city map to unlock historical coordinates and stories spanning the Spring and Autumn Period, Ming-Qing prosperity, the Gengshen Calamity, and modern restoration.

2. **AR Scene Recognition & Check-in**  
   AR-powered scene recognition identifies your current location, matches it with historical context, and completes a digital check-in, seamlessly connecting on-site visits with online content.

3. **Smart Route Recommendation**  
   A recommended south-to-north water city walking route (Canal → Wulong Confluence → Gate Tower → Grand Wharf → Qili Shantang Street) with path visualization and checkpoint check-ins.

4. **Dual-Device Bilingual Support**  
   Fully adapted for both mobile and desktop, with independent Chinese/English language switching on each device, delivering a consistent browsing experience across all screen sizes and language preferences.

---

### Tech Stack

- **React 18** + **TypeScript** — Component-based frontend framework with type safety
- **Vite** — Next-generation build tool and dev server
- **Tailwind CSS** — Utility-first CSS framework for responsive and dark-themed design
- **Framer Motion** — Smooth scroll animations, parallax effects, and interactive transitions
- **Lucide React** — Modern icon library
- **GitHub Actions** — Automated CI/CD pipeline deploying to GitHub Pages

---

### Project Structure

```
version/
├── .github/workflows/     # GitHub Actions deployment config
├── public/
│   └── image/             # Static image assets (scenery, portraits, historical photos)
├── src/
│   ├── components/        # React components
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Introduction.tsx # Historical background
│   │   ├── Timeline.tsx   # Historical timeline
│   │   ├── InteractiveMap.tsx # Interactive historical map
│   │   ├── RouteMap.tsx   # Travel route map & check-in
│   │   ├── StoryCards.tsx # Story cards
│   │   └── ...
│   ├── data/
│   │   └── content.ts     # Bilingual (ZH/EN) content data
│   ├── App.tsx            # Main application entry
│   └── index.css          # Tailwind theme & global styles
├── vite.config.ts         # Vite config (with GitHub Pages base path)
└── package.json
```

---

### Local Development

```bash
# Clone the repo
git clone https://github.com/Haofei-Wang23/version.git
cd version

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

