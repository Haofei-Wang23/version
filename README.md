# 阊门繁华录 (Changmen Splendor)

## 中文介绍

**阊门繁华录** 是一个基于 React 开发的交互式历史文化体验网站，聚焦苏州阊门（古城西门）两千五百年的历史变迁。项目通过现代 Web 技术，将古城的历史故事、AR 场景识别、智能旅游路线推荐与双端双语适配融为一体，为用户提供沉浸式的文化探索体验。

### 在线访问
🔗 [https://haofei-wang23.github.io/version/](https://haofei-wang23.github.io/version/)

---

### 核心功能

1. **历史地图探索**  
   点击古城地图上的发光节点，解锁阊门不同历史时期的坐标与故事，涵盖春秋建城、明清鼎盛、庚申之劫与现代重建等关键历史节点。

2. **AR 场景识别 & 打卡**  
   基于 AR 技术识别当前所处景点，自动匹配历史背景信息，并完成旅游打卡记录，将线下游览与线上数字内容无缝衔接。

3. **智能路线推荐**  
   提供自南向北的水城游览路线（运河 → 五龙汇阊 → 城楼 → 万人码头 → 七里山塘街），系统按推荐顺序绘制路径，支持逐点打卡与行程回顾。

4. **双端双语适配**  
   全面适配手机端与电脑端，各自均可独立切换中文与英文内容，为不同设备与语言偏好的用户提供一致的浏览体验。

---

### 技术栈

- **React 18** + **TypeScript** — 组件化前端框架与类型安全
- **Vite** — 极速构建工具与开发服务器
- **Tailwind CSS** — 原子化 CSS 框架，实现响应式与深色主题设计
- **Framer Motion** — 流畅的页面滚动动画、视差效果与交互过渡
- **Lucide React** — 现代化图标库
- **GitHub Actions** — CI/CD 自动化构建与部署至 GitHub Pages

---

### 项目结构

```
version/
├── .github/workflows/     # GitHub Actions 部署配置
├── public/
│   └── image/             # 静态图片资源（景点图、人物肖像、历史照片等）
├── src/
│   ├── components/        # React 组件
│   │   ├── Hero.tsx       # 首屏主视觉
│   │   ├── Introduction.tsx # 历史背景介绍
│   │   ├── Timeline.tsx   # 历史时间轴
│   │   ├── InteractiveMap.tsx # 交互式历史地图
│   │   ├── RouteMap.tsx   # 旅游路线地图与打卡
│   │   ├── StoryCards.tsx # 故事卡片
│   │   └── ...
│   ├── data/
│   │   └── content.ts     # 中英文双语内容数据
│   ├── App.tsx            # 主应用入口
│   └── index.css          # Tailwind 主题与全局样式
├── vite.config.ts         # Vite 配置（含 GitHub Pages 路径 base）
└── package.json
```

---

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/Haofei-Wang23/version.git
cd version

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

---

## English Introduction

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

---

> 本项目为 CPT208 Studio Project —— "Designing Playful Experiences · Human-Centric Computing"
>
> This project is a CPT208 Studio Project —— "Designing Playful Experiences · Human-Centric Computing"
