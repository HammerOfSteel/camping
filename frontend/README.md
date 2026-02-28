# Lits Camping - Frontend Application

Modern responsive website for Lits Camping, built with Next.js 14, React, and Tailwind CSS.

## 🎨 Theme System

This project includes a dynamic theming system with three color palettes:

### Available Themes

1. **nordic-standard** (Default)
   - Forest Green, Nordic Blue, Cream, Warm Brown
   - Peaceful, authentic Lits vibe
   - Recommended for production

2. **nordic-minimal**
   - Lighter, softer Scandinavian minimalism
   - Clean whites, soft greens
   - Modern, airy aesthetic

3. **adventure-bold**
   - Vibrant, energetic adventure focus
   - Bold oranges, deep blues
   - Action-oriented feel

## 🚀 Quick Start with Docker

### Prerequisites
- Docker and Docker Compose installed
- Node.js 20+ (for local development without Docker)

### Running with Docker

1. Clone the repository:
```bash
cd /Users/terrygoleman/Documents/dev/lits_camping
```

2. Set your preferred theme in `.env`:
```bash
# .env
NEXT_PUBLIC_THEME=nordic-standard  # or nordic-minimal, adventure-bold
NODE_ENV=development
```

3. Start the development server:
```bash
docker-compose up
```

The application will be available at `http://localhost:3000`

### Switching Themes

Simply update the `NEXT_PUBLIC_THEME` variable in `.env` and restart the container:

```bash
# .env
NEXT_PUBLIC_THEME=adventure-bold

# Then restart
docker-compose restart frontend
```

## 🛠️ Local Development (Without Docker)

### Prerequisites
- Node.js 20+
- npm or yarn

### Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Create `.env.local`:
```bash
NEXT_PUBLIC_THEME=nordic-standard
NEXT_PUBLIC_SITE_NAME=Lits Camping
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Run development server:
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js app directory (pages, layouts)
│   ├── components/             # Reusable React components
│   ├── styles/
│   │   ├── globals.css        # Global styles and animations
│   │   └── themes/            # Theme configurations
│   │       ├── index.ts
│   │       ├── nordic-standard.ts
│   │       ├── nordic-minimal.ts
│   │       └── adventure-bold.ts
│   ├── utils/                 # Utility functions
│   ├── lib/                   # Library functions
│   └── types/                 # TypeScript types
├── public/                    # Static assets
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
└── Dockerfile               # Docker build configuration
```

## 🎨 Using the Theme System

### In Components

```tsx
import { getActiveTheme } from '@/styles/themes'

export default function MyComponent() {
  const theme = getActiveTheme()
  
  return (
    <div style={{ color: theme.colors.primary.forestGreen }}>
      Hello Lits Camping
    </div>
  )
}
```

### With Tailwind Classes

The theme's color palette is integrated with Tailwind CSS, so you can use class names:

```tsx
<div className="bg-primary-50 text-primary-900">
  Using theme colors with Tailwind
</div>
```

### Environment-Based Theme

The theme is automatically loaded from the `NEXT_PUBLIC_THEME` environment variable on build/startup. Change it to switch themes across the entire application.

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Code quality
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
npm run type-check  # Run TypeScript type checker
```

## 🐳 Docker Commands

```bash
# Start development
docker-compose up

# Start in background
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f frontend

# Rebuild images
docker-compose build

# Access container shell
docker-compose exec frontend sh
```

## 🎯 Development Workflow

1. Update theme colors in `src/styles/themes/*.ts`
2. Use theme colors in components via `getActiveTheme()`
3. Test with different themes using environment variable
4. Ensure responsive design works on mobile/tablet/desktop
5. Test accessibility with keyboard navigation

## 📱 Responsive Breakpoints

- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px+

## ♿ Accessibility

- WCAG 2.1 AA compliance target
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators on interactive elements
- Alt text for all images
- Proper heading hierarchy

## 📚 Typography

**Header Font**: Outfit (Bold 700-800)  
**Body Font**: Inter (Regular 400, Medium 500)  
**Accent Font**: Playfair Display (for emotional moments)

## 🎨 Component Styling

All components should:
- Use Tailwind CSS utilities
- Reference theme colors via `getActiveTheme()`
- Support all three themes
- Be responsive (mobile-first)
- Include focus states for accessibility
- Have smooth transitions (200-300ms)

## 🚀 Deployment

### Docker Deployment

```bash
# Build production image
docker build -t lits-camping:latest ./frontend

# Run production container
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_THEME=nordic-standard \
  lits-camping:latest
```

### Environment Variables for Production

```bash
NODE_ENV=production
NEXT_PUBLIC_THEME=nordic-standard
NEXT_PUBLIC_SITE_URL=https://litscamping.com
NEXT_PUBLIC_ANALYTICS_ENABLED=true
```

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/description`
2. Make changes following the project structure
3. Test all three themes
4. Run linting and type checking
5. Submit pull request

## 📞 Support

For issues or questions about the redesign:
- Contact: booking@litscamping.com
- Phone: +46 72-2280279

## 📄 License

This project is created for Lits Camping. All rights reserved.

---

**Theme System Ready** ✅ | **Docker Configured** ✅ | **Next.js 14 Ready** ✅
