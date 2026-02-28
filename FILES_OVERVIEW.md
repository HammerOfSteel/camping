# Project Files & Structure Overview

Complete reference guide to all project files and their purposes.

## 📂 Root Project Files

### Configuration Files

| File | Purpose |
|------|---------|
| `docker-compose.yml` | Docker services configuration (1 frontend service) |
| `.env` | Current environment variables (edit to change theme) |
| `.env.example` | Template for environment variables |
| `.gitignore` | Git ignore rules (root level) |

### Documentation Files

| File | Purpose | Read When |
|------|---------|-----------|
| `README.md` | Full project overview, goals, tech stack | First - Getting oriented |
| `GETTING_STARTED.md` | 5-minute quickstart guide | Before first development |
| `DOCKER.md` | Complete Docker setup and reference | When using Docker |
| `SETUP_COMPLETE.md` | What was just created, summary | After initial setup |
| `THEMES_OVERVIEW.md` | Visual theme comparison & guide | When choosing/comparing themes |
| `QUICK_REFERENCE.md` | Quick lookup reference | For quick facts |

### archived-website/ (Previous Analysis)

| File | Purpose |
|------|---------|
| `README.md` | Complete current site analysis & content |
| `pages/` | Individual page content files |
| `images/` | Referenced images folder |

### design/ (Design Direction)

| File | Purpose |
|------|---------|
| `DESIGN_DIRECTION.md` | Complete brand identity & design guidelines |

### docs/ (Business Documentation)

| File | Purpose |
|------|---------|
| `PRICING_SUMMARY.md` | All pricing information organized |
| `PAGES_INVENTORY.md` | Complete current site structure |

---

## 📂 frontend/ (Next.js Application)

### Application Configuration

| File | Purpose |
|------|---------|
| `package.json` | Dependencies & npm scripts |
| `package-lock.json` | Locked dependency versions (generated) |
| `tsconfig.json` | TypeScript compiler configuration |
| `next.config.js` | Next.js runtime configuration |
| `tailwind.config.ts` | Tailwind CSS config (loads themes dynamically) |
| `postcss.config.js` | PostCSS configuration |
| `.eslintrc.json` | ESLint code quality rules |
| `.prettierrc` | Code formatter configuration |
| `README.md` | Frontend-specific setup & usage |

### Docker Configuration

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage Docker build |
| `.dockerignore` | Files to exclude from Docker image |

### Git Configuration

| File | Purpose |
|------|---------|
| `.gitignore` | Frontend-specific git ignore rules |

---

## 📂 frontend/src/ (Source Code)

### Application Structure

```
src/
├── app/                          # Next.js 14 App Router
│   ├── page.tsx                 # Homepage (theme showcase)
│   ├── layout.tsx               # Root layout & metadata
│   └── globals.css (imported)   # Global styles
│
├── styles/                       # Styling & Themes
│   ├── globals.css              # Global CSS & animations
│   └── themes/
│       ├── index.ts             # Theme loader & registry
│       ├── nordic-standard.ts   # Theme 1 (Peaceful)
│       ├── nordic-minimal.ts    # Theme 2 (Minimal)
│       └── adventure-bold.ts    # Theme 3 (Bold)
│
├── components/                   # Reusable React components (placeholder)
├── utils/                        # Utility functions (placeholder)
├── lib/                          # Library code (placeholder)
└── types/                        # TypeScript type definitions (placeholder)
```

### Key Files

| File/Folder | Purpose | Type |
|------------|---------|------|
| `app/page.tsx` | Homepage with theme showcase | React Component |
| `app/layout.tsx` | Root layout & global metadata | React Component |
| `styles/globals.css` | Global styles, animations, utilities | CSS |
| `styles/themes/index.ts` | Theme loader & selector | TypeScript |
| `styles/themes/nordic-standard.ts` | Peaceful forest/blue theme | TypeScript |
| `styles/themes/nordic-minimal.ts` | Light modern theme | TypeScript |
| `styles/themes/adventure-bold.ts` | Vibrant adventure theme | TypeScript |
| `components/` | Where you'll build components | Folder |
| `utils/` | Where you'll put helper functions | Folder |
| `lib/` | Where you'll put libraries | Folder |
| `types/` | Where you'll put TypeScript types | Folder |

---

## 📂 frontend/public/ (Static Assets)

| File | Purpose |
|------|---------|
| `site.webmanifest` | PWA web manifest (app metadata) |

---

## 🎨 Theme Files Detailed

### Theme Structure (Each Theme File)

Each theme file (e.g., `nordic-standard.ts`) contains:

```typescript
export const themeName = {
  name: 'nordic-standard',                    // ID for environment variable
  label: 'Nordic Standard',                  // Display name
  description: '...',                        // UI description
  colors: {
    primary: {
      forestGreen: '#2D5016',
      nordicBlue: '#1B5E7F',
      cream: '#F7F5F0',
      warmBrown: '#6B4423',
    },
    secondary: { /* 4 colors */ },
    accent: { /* 2 colors */ },
    semantic: { /* error, success, warning, info */ },
  },
  tailwind: {
    extend: {
      colors: {
        primary: { /* 50-900 scale */ },
        secondary: { /* 50-900 scale */ },
        accent: { /* 50-900 scale */ },
      },
    },
  },
}
```

---

## 🔧 Key Development Files to Edit

### When Creating New Pages

1. Create file in `frontend/src/app/[page-name]/page.tsx`
2. Use layout pattern from existing `page.tsx`
3. Import and use `getActiveTheme()` for colors

### When Creating New Components

1. Create file in `frontend/src/components/[ComponentName].tsx`
2. Mark with `'use client'` if using state/events
3. Import `getActiveTheme()` to access colors

### When Adding Dependencies

1. Edit `frontend/package.json` (add to dependencies)
2. Rebuild: `docker-compose build`
3. Restart: `docker-compose up`

### When Changing Theme Colors

1. Edit theme file: `frontend/src/styles/themes/[theme-name].ts`
2. Update color values in `colors` object
3. Update Tailwind scale in `tailwind` object
4. Rebuild: `docker-compose build --no-cache`

### When Changing Global Styles

1. Edit `frontend/src/styles/globals.css`
2. Changes apply immediately (hot reload)

### When Changing Configuration

1. Edit `frontend/tsconfig.json` (TypeScript)
2. Edit `frontend/tailwind.config.ts` (Tailwind)
3. Edit `frontend/next.config.js` (Next.js)
4. Rebuild required

---

## 🌍 Environment Variables

Located in: `.env` (root project directory)

| Variable | Default | Options | Used By |
|----------|---------|---------|---------|
| `NODE_ENV` | development | development, production | Next.js |
| `NEXT_PUBLIC_THEME` | nordic-standard | nordic-standard, nordic-minimal, adventure-bold | All components |
| `NEXT_PUBLIC_SITE_NAME` | Lits Camping | Any string | Metadata, templates |
| `NEXT_PUBLIC_SITE_URL` | http://localhost:3000 | Any URL | Absolute links, metadata |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | false | true, false | Analytics toggle |
| `NEXT_PUBLIC_API_URL` | http://localhost:3000/api | Any URL | API calls |
| `NEXT_PUBLIC_SIRVOY_BOOKING_URL` | https://5336c06044bd2... | Any URL | Booking link |

### Changing Theme

```bash
# Edit .env
NEXT_PUBLIC_THEME=nordic-standard  # Change to:
NEXT_PUBLIC_THEME=adventure-bold

# Restart container
docker-compose restart frontend

# Refresh browser
```

---

## 📦 Dependencies (frontend/package.json)

### Core Framework
- `next` 14.0.4 - React framework
- `react` 18.2.0 - UI library
- `react-dom` 18.2.0 - DOM library
- `typescript` 5.3.3 - Type system

### Styling
- `tailwindcss` 3.4.1 - Utility CSS
- `autoprefixer` 10.4.16 - CSS prefixes
- `postcss` 8.4.32 - CSS processing
- `@tailwindcss/forms` 0.5.7 - Form styling

### UI/Animation
- `framer-motion` 10.16.16 - Animations
- `clsx` 2.0.0 - Class name utilities

### Development Tools
- `eslint` 8.56.0 - Code linting
- `prettier` 3.1.1 - Code formatting
- `@typescript-eslint` 6.15.0 - TypeScript linting

---

## 🚀 Docker Files

| File | Purpose |
|------|---------|
| `docker-compose.yml` | Define services, volumes, networks, ports |
| `frontend/Dockerfile` | Build Next.js production image |
| `frontend/.dockerignore` | Exclude files from Docker image |

### What They Do

**docker-compose.yml**:
- Runs one service: `frontend`
- Exposes port 3000
- Mounts code for hot reload
- Sets environment variables
- Includes health checks

**Dockerfile**:
- Stage 1: Build (install deps, build app)
- Stage 2: Production (copy built app, run)
- Based on Node 20 Alpine (lightweight)

---

## 📄 Documentation Hierarchy

**Read in This Order:**

1. `README.md` - Overview & goals
2. `GETTING_STARTED.md` - Quick 5-minute setup
3. `THEMES_OVERVIEW.md` - Understand the three themes
4. `DOCKER.md` - Docker deep-dive (when needed)
5. `SETUP_COMPLETE.md` - What was created today
6. `frontend/README.md` - Frontend-specific details

**Reference Docs:**

- `QUICK_REFERENCE.md` - Quick facts & stats
- `design/DESIGN_DIRECTION.md` - Brand guidelines
- `archived-website/README.md` - Current site analysis
- `docs/PRICING_SUMMARY.md` - Pricing info
- `docs/PAGES_INVENTORY.md` - Site structure

---

## 🎯 Quick Navigation

### I want to...

**...start developing**
1. Run: `docker-compose up`
2. Visit: http://localhost:3000
3. Make changes in `frontend/src/`
4. Refresh browser

**...change the theme**
1. Edit `.env` → `NEXT_PUBLIC_THEME=`
2. Run: `docker-compose restart frontend`
3. Refresh browser

**...create a new page**
1. Create: `frontend/src/app/[page-name]/page.tsx`
2. Add content
3. Refresh browser

**...create a new component**
1. Create: `frontend/src/components/MyComponent.tsx`
2. Import into a page
3. Refresh browser

**...understand the design system**
1. Read: `THEMES_OVERVIEW.md`
2. Check: `design/DESIGN_DIRECTION.md`
3. View: http://localhost:3000 (homepage shows all colors)

**...deploy to production**
1. Read: `DOCKER.md` → Production Deployment section
2. Build image: `docker build ...`
3. Deploy to hosting

**...add npm dependencies**
1. Edit: `frontend/package.json`
2. Run: `docker-compose build`
3. Run: `docker-compose up`

---

## 💾 File Sizes (Approximate)

| File/Folder | Size |
|------------|------|
| `README.md` | 12 KB |
| `GETTING_STARTED.md` | 5 KB |
| `DOCKER.md` | 18 KB |
| `frontend/package.json` | 2 KB |
| `frontend/src/app/page.tsx` | 5 KB |
| `frontend/src/styles/globals.css` | 4 KB |
| Theme files (3 × .ts) | 3 KB each |
| Docker image (built) | ~300 MB |

---

## 🔗 File Relationships

```
.env (NEXT_PUBLIC_THEME)
  ↓
tailwind.config.ts (getActiveTheme())
  ↓
src/styles/themes/index.ts (theme loader)
  ↓
src/styles/themes/[selected-theme].ts
  ↓
All Tailwind classes + getActiveTheme() in components
```

---

## ✅ File Checklist

### Essential Files Present
- ✅ `docker-compose.yml`
- ✅ `.env`
- ✅ `.env.example`
- ✅ `frontend/Dockerfile`
- ✅ `frontend/package.json`
- ✅ `frontend/next.config.js`
- ✅ `frontend/tailwind.config.ts`
- ✅ `frontend/tsconfig.json`
- ✅ `frontend/src/app/page.tsx`
- ✅ `frontend/src/app/layout.tsx`
- ✅ `frontend/src/styles/globals.css`
- ✅ `frontend/src/styles/themes/index.ts`
- ✅ `frontend/src/styles/themes/nordic-standard.ts`
- ✅ `frontend/src/styles/themes/nordic-minimal.ts`
- ✅ `frontend/src/styles/themes/adventure-bold.ts`

### Documentation Files Present
- ✅ `README.md`
- ✅ `GETTING_STARTED.md`
- ✅ `DOCKER.md`
- ✅ `SETUP_COMPLETE.md`
- ✅ `THEMES_OVERVIEW.md`
- ✅ `QUICK_REFERENCE.md`

---

**Everything is organized and ready to use!** 📁✨
