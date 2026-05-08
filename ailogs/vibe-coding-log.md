# Vibe Coding Log

Throughout the development of this project, the business logic, visual design, and interactive implementation of all core components (Hero, Timeline, RouteMap, InteractiveMap, StoryCards, etc.) were manually written by team members. The following records only the auxiliary work completed with AI assistance during the development workflow:

1. **Project Initial Configuration Reference**
   At the project kick-off stage, Kimi 2.6 was used to quickly look up documentation for initializing a Vite + React + TypeScript + Tailwind CSS project, confirming recommended settings for `paths` and `baseUrl` in `tsconfig.json` as a reference for setting up the project skeleton. All component files were created by the team on top of this foundation.

2. **GitHub Actions Deployment Script Generation**
   To enable automated deployment to GitHub Pages, Gemini was used to generate a basic template for `.github/workflows/deploy.yml`. The `base` path, `permissions`, and `artifact` upload settings were then manually adjusted to fit this project's structure.

3. **Git Operations & Network Debugging**
   When pushing code to the remote repository, local Git failed to connect to GitHub (SSL / proxy issues). Kimi 2.6 was used to diagnose the error messages and try solutions such as `git config http.proxy` and switching between SSH/HTTPS. The issue was eventually resolved by configuring the local proxy port.

4. **Static Asset Path Fixes**
   After deploying to a GitHub Pages subdirectory, images returned 404 errors. Kimi 2.6 was used to understand how Vite's `base` config and the `public` directory work. Based on this, image assets were manually moved to `public/image/` and absolute paths `/image/` in the code were corrected to relative paths `./image/`.
