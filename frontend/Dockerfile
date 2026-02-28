# Build stage
FROM node:20-alpine AS builder

# Install OpenSSL for Prisma
RUN apk add --no-cache openssl

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

# Install OpenSSL for Prisma
RUN apk add --no-cache openssl

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev for next dev command)
RUN npm ci

# Copy all source files and configs needed for dev mode
COPY . .

# Copy built application from builder (overwrite .next)
COPY --from=builder /app/.next ./.next

# Expose port
EXPOSE 3000

# Set environment to development for next dev
ENV NODE_ENV=development

# Generate Prisma client, seed database, and start dev server
CMD sh -c "npx prisma generate && node prisma/seed.js && npm run dev"
