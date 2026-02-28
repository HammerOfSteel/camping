#!/bin/bash
set -e

DOMAIN="littlelakehill.dancingsalamanders.com"
CERT_PATH="/etc/letsencrypt/live/$DOMAIN"
CERT_FILE="$CERT_PATH/fullchain.pem"
NGINX_CONFIG="/etc/nginx/sites-available/$DOMAIN"
NGINX_ENABLED="/etc/nginx/sites-enabled/$DOMAIN"

echo "Setting up Nginx and SSL..."

if ! command -v certbot &> /dev/null; then
  echo "Installing certbot..."
  sudo apt-get update -qq
  sudo apt-get install -y -qq certbot >/dev/null 2>&1
fi

sudo mkdir -p /var/www/certbot

# Check if cert needs renewal
REQUEST_CERT=false
if [ ! -f "$CERT_FILE" ]; then
  REQUEST_CERT=true
else
  EXPIRY=$(sudo openssl x509 -in "$CERT_FILE" -noout -enddate 2>/dev/null | cut -d= -f2)
  DAYS_LEFT=$(( ($(date -d "$EXPIRY" +%s 2>/dev/null || echo $(date +%s)) - $(date +%s)) / 86400 ))
  if [ "$DAYS_LEFT" -lt 30 ]; then
    REQUEST_CERT=true
  fi
fi

if [ "$REQUEST_CERT" = true ]; then
  echo "Setting up certificate..."
  sudo certbot certonly --non-interactive --agree-tos -m admin@dancingsalamanders.com \
    --webroot -w /var/www/certbot -d "$DOMAIN" 2>/dev/null || echo "Certbot in progress"
fi

# Create nginx config
cat > /tmp/nginx.conf << 'NGINX_CONFIG_END'
server {
    listen 80;
    server_name littlelakehill.dancingsalamanders.com;
    location /.well-known/acme-challenge/ { root /var/www/certbot; }
    location / { return 301 https://$host$request_uri; }
}

server {
    listen 443 ssl http2;
    server_name littlelakehill.dancingsalamanders.com;
    ssl_certificate /etc/letsencrypt/live/littlelakehill.dancingsalamanders.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/littlelakehill.dancingsalamanders.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    location / {
        proxy_pass http://127.0.0.1:3002;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
NGINX_CONFIG_END

sudo mv /tmp/nginx.conf "$NGINX_CONFIG"
sudo ln -sf "$NGINX_CONFIG" "$NGINX_ENABLED" 2>/dev/null || true
sudo nginx -t > /dev/null 2>&1 && sudo systemctl reload nginx || true
echo "Nginx and SSL configured"
