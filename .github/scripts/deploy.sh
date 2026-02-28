#!/bin/bash
set -e

DEPLOY_PATH="/home/ubuntu/littlelakehill"
THEME="$1"
ENABLE_EMAIL="$2"
DB_PASSWORD="$3"
NEXTAUTH_SECRET="$4"
DOMAIN="littlelakehill.dancingsalamanders.com"

echo "Deploying Lits Camping..."

if [ -d "$DEPLOY_PATH/.git" ]; then
  cd "$DEPLOY_PATH"
  git fetch origin main && git checkout -f origin/main
else
  mkdir -p "$(dirname "$DEPLOY_PATH")"
  git clone --branch main --depth 1 https://github.com/HammerOfSteel/camping.git "$DEPLOY_PATH"
  cd "$DEPLOY_PATH"
fi

# Create environment file
cat > .env << 'EOF'
NODE_ENV=production
NEXT_PUBLIC_THEME=THEME_PLACEHOLDER
NEXT_PUBLIC_SITE_NAME=Lits Camping
NEXT_PUBLIC_SITE_URL=https://littlelakehill.dancingsalamanders.com
DB_USER=litscamping
DB_PASSWORD=DB_PASSWORD_PLACEHOLDER
DB_NAME=lits_camping
DATABASE_URL=postgresql://litscamping:DB_PASSWORD_PLACEHOLDER@db:5432/lits_camping
NEXTAUTH_SECRET=NEXTAUTH_SECRET_PLACEHOLDER
NEXTAUTH_URL=https://littlelakehill.dancingsalamanders.com
ADMIN_PASSWORD=admin123
ENABLE_EMAIL_NOTIFICATIONS=ENABLE_EMAIL_PLACEHOLDER
EMAIL_SMTP_HOST=smtp.gmail.com
EMAIL_SMTP_PORT=587
EMAIL_SMTP_USER=your-email@gmail.com
EMAIL_SMTP_PASS=your-app-password
NEXT_PUBLIC_ANALYTICS_ENABLED=false
NEXT_PUBLIC_API_URL=https://littlelakehill.dancingsalamanders.com/api
NEXT_PUBLIC_SIRVOY_BOOKING_URL=https://5336c06044bd2.sirvoy.me/en
EOF

# Replace placeholders
sed -i "s/THEME_PLACEHOLDER/$THEME/g" .env
sed -i "s/DB_PASSWORD_PLACEHOLDER/$DB_PASSWORD/g" .env
sed -i "s/NEXTAUTH_SECRET_PLACEHOLDER/$NEXTAUTH_SECRET/g" .env
sed -i "s/ENABLE_EMAIL_PLACEHOLDER/$ENABLE_EMAIL/g" .env

sudo docker-compose down --remove-orphans || true
sudo docker-compose up -d
sleep 15
echo "Done"
