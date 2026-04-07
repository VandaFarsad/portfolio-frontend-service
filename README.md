# Portfolio Frontend Service

Personal portfolio website for **Dr. Vanda Farsad** - showcasing professional experience, technical skills, and projects.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) with App Router
- **Language:** TypeScript 5.9
- **Styling:** Tailwind CSS v4 with PostCSS
- **UI Components:** Material-UI (MUI) v7
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

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

Alternatively, start with Docker:

```bash
docker compose up
```

## Production Deployment

Production runs as a standalone Docker container with optimized Next.js build output.

### 1. Build the production image

```bash
docker build -t portfolio-frontend-service .
```

### 2. Run the container

```bash
docker run -d \
  --name portfolio-frontend \
  -p 3000:3000 \
  --restart unless-stopped \
  portfolio-frontend-service
```

The application is accessible at http://localhost:3000.

### 3. Update after changes

```bash
docker rm -f portfolio-frontend
docker build -t portfolio-frontend-service .
docker run -d \
  --name portfolio-frontend \
  -p 3000:3000 \
  --restart unless-stopped \
  portfolio-frontend-service
```

### 4. View logs

```bash
docker logs -f portfolio-frontend
```

## Nginx

In production, an external Nginx reverse proxy (managed separately) handles TLS termination and forwards traffic to port 3000.

Connect the frontend container to the Nginx network:

```bash
docker network connect nginx_app-network portfolio-frontend
```

## Project Structure

- `app/` — Next.js App Router with components and pages
  - `components/` — React components (Header, About, Stack, Experience, etc.)
  - `impressum/` — Legal notice page
- `services/` — Data layer (experienceData, stackIconData)
- `public/` — Static assets (images, SVGs)

## Code Quality

```bash
# Run ESLint
pnpm lint

# Format code with Prettier
pnpm format

# Type checking
pnpm ts:ci
```

## License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.
