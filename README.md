# Portfolio Frontend Service

Personal portfolio website for **Dr. Vanda Farsad** - showcasing professional experience, technical skills, and projects.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) with App Router
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4 with PostCSS
- **UI Components:** Material-UI (MUI) v7
- **Animations:** React Type Animation, React Vertical Timeline
- **Icons:** Iconify (DevIcon, Logos, Skill Icons, MDI)
- **Theme:** Dark/Light mode with persistent localStorage
- **Package Manager:** pnpm 10.13
- **Containerization:** Docker & Docker Compose

## 📁 Project Architecture

```
portfolio-frontend-service/
├── app/                        # Next.js App Router
│   ├── components/             # React Components
│   │   ├── Header.tsx         # Hero section with animations
│   │   ├── About.tsx          # About section
│   │   ├── Stack.tsx          # Technology stack display
│   │   ├── Experience.tsx     # Professional experience timeline
│   │   ├── Footer.tsx         # Footer with links
│   │   ├── ThemeSwitcher.tsx  # Dark/Light mode toggle
│   │   ├── GitHubCorner.tsx   # GitHub repository link
│   │   └── Impressum.tsx      # Legal notice (German)
│   ├── impressum/             # Impressum page route
│   │   └── page.tsx
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Home page composition
│   └── globals.css            # Global styles + Tailwind imports
├── services/                   # Data layer
│   ├── experienceData.ts      # Professional experience data
│   └── stackIconData.ts       # Technology stack icons data
├── public/                     # Static assets
│   └── assets/                # Images and SVGs
├── docker-compose.yml          # Docker orchestration
├── Dockerfile                  # Container configuration
└── package.json               # Dependencies and scripts
```

### Architecture Patterns

**Component-Based Architecture:**
- Modular, reusable React components
- Client-side components (`"use client"`) for interactivity
- Server-side rendering (SSR) by default

**Data Management:**
- Static data in `/services` directory
- Type-safe TypeScript interfaces
- Separation of concerns (data vs. presentation)

**Styling Strategy:**
- Tailwind CSS v4 with CSS-first configuration
- CSS custom properties for theming
- Responsive design (mobile-first approach)
- Dark mode support with system preference detection

**Routing:**
- File-based routing via Next.js App Router
- `/` - Main portfolio page
- `/impressum` - Legal notice page

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node 20+)
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Start with Turbopack (faster)
pnpm dev:turbo
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build & Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Code Quality

```bash
# Run ESLint
pnpm lint

# Format code with Prettier
pnpm format

# Check formatting
pnpm format:check

# Type checking (watch mode)
pnpm ts-lint

# Type checking (CI)
pnpm ts:ci
```

## 🐳 Docker

```bash
# Build and start container
docker-compose up -d

# Stop container
docker-compose down
```

## 🎨 Features

- ✨ Smooth animations and transitions
- 🌓 Dark/Light theme with persistent preference
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js
- 🎯 Type-safe with TypeScript
- 🔍 SEO optimized with metadata
- 🎨 Modern UI with Tailwind CSS v4
- 📊 Interactive timeline for experience
- 🛠️ Technology stack showcase with icons

## 📝 License

See [LICENSE](LICENSE) file for details.

## 👤 Author

**Vanda Farsad**
- Email: contact@initial-commit.com
- Portfolio: [Initial Commit](https://initial-commit.com)
