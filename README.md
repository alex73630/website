<div align="center">
  <h1>👋 Alexandre Sanchez (<a href="https://github.com/alex73630">@alex73630</a>) 🦦</h1>
  <p><strong>Personal Showcase & Portfolio Source Code</strong></p>
  
  <p>
    <a href="https://alex73630.xyz">
      <img src="https://img.shields.io/badge/Website-alex73630.xyz-blue?style=for-the-badge&logo=globe" alt="Website" />
    </a>
    <img src="https://img.shields.io/badge/Astro-6-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Docker-Optimized-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  </p>

  <p>
    <em>Welcome to the source code of my personal website, available live at <b><a href="https://alex73630.xyz">alex73630.xyz</a></b>! <br/> Beyond just serving as a portfolio, this repository is engineered to be a technical showcase of my skills in modern web development, DevOps, and AI-assisted programming.</em>
  </p>
</div>

---

<div align="center">
  <h2>🚀 I'm Available for Work with Otterly Space!</h2>
  <p>Looking for an experienced developer to help you build or scale your project?<br/>I provide freelance and consulting services through <b><a href="https://otterly.space">Otterly Space</a></b>.</p>
  <a href="https://otterly.space/meet">
    <img src="https://img.shields.io/badge/🗓️_Schedule_a_30--min_Meeting-FF5D01?style=for-the-badge" alt="Schedule a meeting" />
  </a>
  <p><em>It's a free, no-commitment video call. Whether we end up collaborating or not, my goal is to bring you value today. <b>Bring a question or a blocker, and you'll leave with an actionable plan!</b></em></p>
</div>

---

<div align="center">
  <h2>🌐 Connect with Me !</h2>

  <a href="https://github.com/alex73630">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://bsky.app/profile/alex73630.bsky.social">
    <img src="https://img.shields.io/badge/Bluesky-0285FF?style=for-the-badge&logo=bluesky&logoColor=white" alt="Bluesky" />
  </a>
  <a href="https://twitch.tv/alex73630">
    <img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" alt="Twitch" />
  </a>
  <a href="https://linkedin.com/in/alex-otterly">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://twitter.com/alex73630">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
  </a>
</div>

---

## ✨ Technical Highlights

### ⚡ Optimized Static Rendering

The site leverages **Astro** to deliver statically generated pages for maximum SEO and lightning-fast loading performance. It perfectly balances these benefits with the developer experience and flexibility provided by **React 19** and **Tailwind CSS v4**.

### 🐳 Advanced CI & Docker Optimizations

The deployment pipeline is highly optimized for fast builds and minimal resource consumption (currently deployed via Railway):

- **Fast Builds:** Utilizes Docker cache mounts to drastically reduce build times.
- **Micro Footprint:** The final production Docker image is incredibly small (~12MB).
- **Low Resource Usage:** At runtime, the application is highly efficient, consuming only ~4MB of RAM at idle.

### 🤖 AI Agent Ready

This project is built from the ground up to be completely AI-agent friendly and optimized for Model Context Protocol (MCP) integrations:

- Contains explicit instructions and context boundaries (`AGENTS.md`, `/docs/agents/`) to ensure seamless AI-assisted development.
- Includes custom AI Skills definitions that enable autonomous agents to navigate, enforce project rules, and contribute effectively.

---

## 🛠️ Tech Stack

| Technology                                                                                                                                                                  | Description                     |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------ |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/astro/astro-original.svg" width="20"> **[Astro 6](https://astro.build/)**                         | Static Site Generator           |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" width="20"> **[React 19](https://react.dev/)**                          | UI Library                      |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" width="20"> **[Tailwind CSS v4](https://tailwindcss.com/)** | Styling                         |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" width="20"> **[Docker](https://www.docker.com/)**                     | Containerization & Optimization |
| <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/yarn/yarn-original.svg" width="20"> **[Yarn 4.x](https://yarnpkg.com/)**                          | Package Manager (via Corepack)  |

---

## 🚀 Local Development

This project strictly uses **Yarn 4.x** via Corepack.

```sh
# Install dependencies
yarn install

# Start the local development server (localhost:4321)
yarn dev

# Build for production
yarn build
```
