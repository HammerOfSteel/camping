# Getting Started with Lits Camping Development

Quick-start guide for local development with Docker.

## 🎯 5-Minute Setup

### Prerequisites
- Docker Desktop installed (https://docs.docker.com/get-docker/)
- Git installed
- Terminal/Command line

### Quick Start

```bash
# 1. Navigate to project
cd /Users/terrygoleman/Documents/dev/lits_camping

# 2. Start the development server
docker-compose up

# 3. Open browser
# Go to http://localhost:3000
```

**That's it!** The website is now running.

## 🎨 Switching Themes

The three available themes are:

1. **nordic-standard** (Default) - Peaceful forest/blue palette
2. **nordic-minimal** - Light, airy Scandinavian
3. **adventure-bold** - Vibrant, energetic orange/blue

### Change Theme

```bash
# 1. Edit the .env file in project root
# Change this line:
NEXT_PUBLIC_THEME=nordic-standard
# To one of:
# NEXT_PUBLIC_THEME=nordic-minimal
# NEXT_PUBLIC_THEME=adventure-bold

# 2. Restart the container
docker-compose restart frontend

# 3. Refresh browser at http://localhost:3000
# You'll see the new theme immediately
```

## 🛠️ Development Workflow

### Making Code Changes

1. Edit files in `frontend/src/` (e.g., `src/app/page.tsx`)
2. Save the file
3. Refresh browser at http://localhost:3000
4. Your changes appear automatically (hot reload)

### File Structure Overview

```
frontend/src/
├── app/                 # Pages (home, about, etc)
│   ├── page.tsx        # Homepage
│   └── layout.tsx      # Root layout
├── components/         # Reusable components (buttons, cards, nav)
├── styles/            # CSS and theme configurations
│   ├── globals.css    # Global styles
│   └── themes/        # Theme color definitions
├── utils/             # Helper functions
├── lib/               # Library code
└── types/             # TypeScript types
```

## 📦 Adding Dependencies

If you need to add npm packages:

```bash
# Option 1: Inside the container
docker-compose exec frontend npm install package-name

# Option 2: Rebuild container (sometimes needed)
docker-compose down
# Edit package.json
docker-compose build
docker-compose up
```

## 🐛 Common Issues

### "Port 3000 already in use"

```bash
# Find what's using it
lsof -i :3000

# Kill it
kill -9 <PID>

# Or use different port in docker-compose.yml
# Change: - "3000:3000"
# To:     - "3001:3000"
```

### "Cannot find module" errors

```bash
# Rebuild containers from scratch
docker-compose down
docker-compose up --build
```

### Changes not appearing

```bash
# Hard refresh browser
Cmd+Shift+R (Mac)
Ctrl+Shift+R (Windows/Linux)

# Or restart container
docker-compose restart frontend
```

## 💡 Next Development Steps

1. **Create Header/Navigation Component**
   - Location: `frontend/src/components/Header.tsx`
   - Should be responsive (mobile menu on small screens)
   - Use theme colors via `getActiveTheme()`

2. **Create Footer Component**
   - Location: `frontend/src/components/Footer.tsx`
   - Include contact info, links, copyright

3. **Create Cabin Cards Component**
   - Location: `frontend/src/components/CabinCard.tsx`
   - Reusable for all cabin types

4. **Create Page Components**
   - Homepage enhancements
   - Cabins page
   - Camping page
   - Canoeing page
   - Contact page

## 📚 Resources

- [Frontend README](frontend/README.md) - More detailed setup
- [Docker Guide](DOCKER.md) - Docker and switching themes in detail
- [Project README](README.md) - Full project overview
- [Design Direction](design/DESIGN_DIRECTION.md) - Brand guidelines

## 🎨 Using Theme Colors in Components

```tsx
'use client'

import { getActiveTheme } from '@/styles/themes'

export default function MyComponent() {
  const theme = getActiveTheme()
  
  return (
    <div style={{ color: theme.colors.primary.forestGreen }}>
      Hello Lits!
    </div>
  )
}
```

Or with Tailwind classes:

```tsx
<button className="bg-primary-700 text-white hover:bg-primary-800">
  Click Me
</button>
```

## 🚀 Deploying to Production

See the "Production Deployment" section in [DOCKER.md](DOCKER.md) for full production setup.

Quick version:
```bash
# Build production image
docker build -t lits-camping:latest ./frontend

# Run with production env
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_THEME=nordic-standard \
  lits-camping:latest
```

## 🆘 Need Help?

- Check [DOCKER.md](DOCKER.md) for detailed Docker commands
- View container logs: `docker-compose logs -f frontend`
- Access container shell: `docker-compose exec frontend sh`
- Check [frontend/README.md](frontend/README.md) for Next.js specific help

## ✅ Development Checklist

When setting up for the first time:

- [ ] Docker Desktop running
- [ ] `docker-compose up` executes without errors
- [ ] Website loads at http://localhost:3000
- [ ] Can see color palette and components
- [ ] Changed theme in .env and verified it changed on website
- [ ] Made a code change and verified hot reload works
- [ ] Created first custom component

**You're all set to start building!** 🎉

---

**Happy coding!** Questions? See the detailed docs in the project root.
