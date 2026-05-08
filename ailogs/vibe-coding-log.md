# Vibe 编码日志 (Vibe Coding Log)

## 中文说明

本项目在开发过程中，核心组件（Hero、Timeline、RouteMap、InteractiveMap、StoryCards 等）的业务逻辑、视觉设计与交互实现均由团队成员手动编写完成。以下仅记录在开发流程中借助 LLM（大语言模型）辅助完成的**细枝末节**工作：

### 1. 项目脚手架与初始配置参考
在项目启动阶段，使用 LLM 快速查阅了 Vite + React + TypeScript + Tailwind CSS 的初始化配置文档，确认了 `tsconfig.json` 中 `paths` 与 `baseUrl` 的推荐写法，作为项目骨架搭建的参考依据。所有组件文件均在此基础上由团队自行创建。

### 2. GitHub Actions 部署脚本生成
为实现 GitHub Pages 自动化部署，借助 LLM 生成了 `.github/workflows/deploy.yml` 的基础模板，并手动调整了 `base` 路径、`permissions` 与 `artifact` 上传配置以适配本项目结构。

### 3. Git 操作与网络调试
在将代码推送至远程仓库时，遇到本地 Git 无法连接 GitHub（SSL / 代理问题）。借助 LLM 排查错误信息，尝试了 `git config http.proxy`、切换 SSH/HTTPS 等方案，最终通过配置本地代理端口完成推送。

### 4. 静态资源路径修复
项目部署到 GitHub Pages 子目录后，出现图片 404 问题。借助 LLM 理解了 Vite `base` 配置与 `public` 目录的工作原理，手动将图片资源移入 `public/image/` 并将代码中的绝对路径 `/image/` 修正为相对路径 `./image/`。

### 5. 代码片段与调试辅助
在实现响应式布局与滚动动画时，偶尔使用 LLM 查询 Tailwind CSS 特定类名（如 `tracking-widest`、`whileInView` 的用法）以及 Framer Motion 动画属性的文档示例，作为快速查阅工具替代官方文档。

---

## English Description

Throughout the development of this project, the business logic, visual design, and interactive implementation of all core components (Hero, Timeline, RouteMap, InteractiveMap, StoryCards, etc.) were manually written by team members. The following records only the **minor auxiliary tasks** where LLMs (Large Language Models) were used during the workflow:

### 1. Project Scaffolding & Initial Configuration Reference
At the project kick-off stage, an LLM was used to quickly look up documentation for initializing a Vite + React + TypeScript + Tailwind CSS project, confirming recommended settings for `paths` and `baseUrl` in `tsconfig.json` as a reference for setting up the project skeleton. All component files were created by the team on top of this foundation.

### 2. GitHub Actions Deployment Script Generation
To enable automated deployment to GitHub Pages, an LLM was used to generate a basic template for `.github/workflows/deploy.yml`. The `base` path, `permissions`, and `artifact` upload settings were then manually adjusted to fit this project's structure.

### 3. Git Operations & Network Debugging
When pushing code to the remote repository, local Git failed to connect to GitHub (SSL / proxy issues). An LLM was used to diagnose the error messages and try solutions such as `git config http.proxy` and switching between SSH/HTTPS. The issue was eventually resolved by configuring the local proxy port.

### 4. Static Asset Path Fixes
After deploying to a GitHub Pages subdirectory, images returned 404 errors. An LLM was used to understand how Vite's `base` config and the `public` directory work. Based on this, image assets were manually moved to `public/image/` and absolute paths `/image/` in the code were corrected to relative paths `./image/`.

### 5. Code Snippets & Debugging Assistance
When implementing responsive layouts and scroll animations, an LLM was occasionally used to look up specific Tailwind CSS class names (e.g., `tracking-widest`, `whileInView` usage) and Framer Motion animation property examples, serving as a quick lookup tool in place of official documentation.
