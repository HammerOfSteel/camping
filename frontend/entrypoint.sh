#!/bin/sh
set -e

echo "🔧 Generating Prisma client..."
npx prisma generate

echo "🌱 Seeding database with admin user..."
node prisma/seed.js

echo "🚀 Starting development server..."
exec npm run dev
