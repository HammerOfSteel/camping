# Docker Setup & Configuration Guide

Complete guide for running Lits Camping website with Docker and Docker Compose.

## 🐳 Prerequisites

- **Docker**: Version 20.10+
- **Docker Compose**: Version 2.0+

### Installation

#### macOS (with Homebrew)
```bash
brew install docker docker-compose
brew install --cask docker
```

Then start Docker Desktop from Applications.

#### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install docker.io docker-compose
sudo usermod -aG docker $USER
```

#### Windows
Download [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop)

## 📝 Environment Configuration

### .env File

Located at project root: `/lits_camping/.env`

```bash
# Environment mode
NODE_ENV=development  # or 'production' for deployment

# Theme Selection
# Options: nordic-standard, nordic-minimal, adventure-bold
NEXT_PUBLIC_THEME=nordic-standard

# Site Information
NEXT_PUBLIC_SITE_NAME=Lits Camping
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ENABLED=false

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# External Services
NEXT_PUBLIC_SIRVOY_BOOKING_URL=https://5336c06044bd2.sirvoy.me/en
```

### Theme Options

**1. nordic-standard** (Recommended)
```bash
NEXT_PUBLIC_THEME=nordic-standard
```
- Forest Green, Nordic Blue, Cream, Warm Brown
- Peaceful, authentic, true to Lits brand
- Best for production

**2. nordic-minimal**
```bash
NEXT_PUBLIC_THEME=nordic-minimal
```
- Modern Scandinavian minimalism
- Lighter, airier color palette
- Clean, contemporary look

**3. adventure-bold**
```bash
NEXT_PUBLIC_THEME=adventure-bold
```
- Vibrant, energetic adventure theme
- Bold oranges, deep blues
- Action and excitement focused

## 🚀 Running with Docker Compose

### Basic Usage

1. **Start the application** (development mode):
```bash
docker-compose up
```

The application will start at `http://localhost:3000`

2. **Stop the application**:
```bash
docker-compose down
```

3. **View logs in real-time**:
```bash
docker-compose logs -f frontend
```

### Common Commands

```bash
# Start in background (detached)
docker-compose up -d

# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# Rebuild images (after dependency changes)
docker-compose build

# Rebuild without cache
docker-compose build --no-cache

# Restart a specific service
docker-compose restart frontend

# Execute command in running container
docker-compose exec frontend npm run build

# View service status
docker-compose ps

# View container logs
docker-compose logs frontend
docker-compose logs -f frontend  # follow logs

# Remove containers and images
docker-compose down --rmi all
```

## 🔄 Switching Themes with Docker

### Method 1: Update .env and Restart

```bash
# Edit .env
# Change: NEXT_PUBLIC_THEME=nordic-standard
# To:     NEXT_PUBLIC_THEME=adventure-bold

# Restart the container
docker-compose restart frontend
```

### Method 2: Override with Command Line

```bash
docker-compose run -e NEXT_PUBLIC_THEME=adventure-bold frontend npm run dev
```

### Method 3: Docker Environment File

Create `.env.production`:
```bash
NODE_ENV=production
NEXT_PUBLIC_THEME=adventure-bold
```

Then run with:
```bash
docker-compose --env-file .env.production up
```

## 📦 Docker Build Process

The frontend uses a **multi-stage Docker build**:

1. **Builder Stage**: 
   - Node 20 Alpine
   - Installs dependencies
   - Builds Next.js application

2. **Production Stage**:
   - Minimal final image
   - Only production dependencies
   - Copies built application

### Dockerfile Details

Located at: `frontend/Dockerfile`

- **Base Image**: `node:20-alpine` (lightweight)
- **Output Port**: 3000
- **Health Check**: Enabled (checks every 30s)
- **Build Time**: ~2-3 minutes (first build)
- **Image Size**: ~300-400MB

## 🌐 Docker Compose Configuration

Located at: `docker-compose.yml`

### Service: frontend

```yaml
services:
  frontend:
    build: ./frontend              # Build from frontend/Dockerfile
    ports:
      - "3000:3000"               # Map port to host
    environment:
      - NEXT_PUBLIC_THEME         # Load from .env
      - NODE_ENV                  # Load from .env
    volumes:
      - ./frontend:/app            # Hot reload code changes
      - /app/node_modules          # Preserve node_modules
      - /app/.next                # Preserve Next.js cache
    command: npm run dev          # Run development server
    healthcheck:
      test: curl -f http://localhost:3000
      interval: 30s
      timeout: 10s
      retries: 3
    networks:
      - lits_network              # Custom network for services
```

## 🛠️ Development Workflow

### File Changes and Hot Reload

The Docker setup includes volume mounting for live reloading:

```yaml
volumes:
  - ./frontend:/app          # Your code changes
  - /app/node_modules        # Keep installed packages
  - /app/.next               # Keep build cache
```

When you modify files in `frontend/src/`, the changes appear immediately in the running container.

### Adding Dependencies

If you add npm packages to `package.json`:

```bash
# Option 1: Rebuild container
docker-compose build
docker-compose up

# Option 2: Install inside container
docker-compose exec frontend npm install

# Option 3: Install and rebuild
docker-compose exec frontend npm install
docker-compose restart frontend
```

## 📊 Monitoring & Debugging

### View Container Logs

```bash
# Follow logs in real-time
docker-compose logs -f frontend

# Show last 50 lines
docker-compose logs --tail 50 frontend

# Show timestamped logs
docker-compose logs --timestamps frontend
```

### Access Container Shell

```bash
# Interactive shell access
docker-compose exec frontend sh

# Run commands inside container
docker-compose exec frontend npm list
docker-compose exec frontend node --version
docker-compose exec frontend ls -la /app/src
```

### Container Inspection

```bash
# View container details
docker-compose ps

# Inspect frontend service
docker-compose inspect frontend

# View environment variables
docker-compose exec frontend env

# Check disk usage
docker-compose exec frontend du -sh /app
```

## 🚢 Production Deployment

### Build Production Image

```bash
docker build -t lits-camping:1.0.0 ./frontend
```

### Run Production Container

```bash
docker run -d \
  --name lits-camping \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_THEME=nordic-standard \
  -e NEXT_PUBLIC_SITE_URL=https://litscamping.com \
  lits-camping:1.0.0
```

### Docker Compose for Production

Create `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  frontend:
    image: lits-camping:latest
    container_name: lits_camping_prod
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_THEME=nordic-standard
      - NEXT_PUBLIC_SITE_URL=https://litscamping.com
    restart: always
    networks:
      - lits_network

networks:
  lits_network:
    driver: bridge
```

Then run:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 📈 Docker Optimization Tips

### Image Size Reduction

- Alpine base image (~5MB vs ~300MB standard Node)
- Multi-stage build (production only needs built app)
- Remove dev dependencies in production

### Performance

- Cache layers efficiently (package.json before source code)
- Use `.dockerignore` to exclude unnecessary files
- Mount node_modules as named volume (avoid sync lag)

### Security

- Use specific image versions (not `latest`)
- Run as non-root user (consider adding)
- Use environment variables for secrets
- Scan images for vulnerabilities

## 🔗 Networking

All services connect via the `lits_network`:

```yaml
networks:
  lits_network:
    driver: bridge  # Internal Docker bridge network
```

Ports exposed: `3000:3000` (host:container)

## 🆘 Troubleshooting

### Port Already in Use

```bash
# Find what's using port 3000
sudo lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use different port in docker-compose.yml
# Change: - "3000:3000"
# To:     - "3001:3000"
```

### Container Won't Start

```bash
# Check logs
docker-compose logs frontend

# Check for syntax errors
docker-compose config

# Rebuild without cache
docker-compose build --no-cache
```

### Node Modules Issues

```bash
# Clear Docker volumes and rebuild
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

### Hot Reload Not Working

```bash
# Ensure volumes are correct
docker-compose config | grep -A5 volumes

# Restart with fresh container
docker-compose restart frontend
```

### Disk Space Issues

```bash
# Clean up unused Docker resources
docker system prune

# Remove all images
docker image prune -a

# Remove volumes
docker volume prune
```

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Best practices for Node.js in Docker](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Next.js Docker Deployment](https://nextjs.org/docs/deployment/docker)

## 🎯 Next Steps

1. ✅ Run `docker-compose up`
2. ✅ Visit `http://localhost:3000`
3. ✅ Try different themes by editing `.env`
4. ✅ Start developing!

---

**Docker Setup Complete!** 🎉
