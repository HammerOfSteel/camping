# Deployment Guide - Lits Camping to Oracle Host

## Overview

This guide explains how to deploy the Lits Camping website to your Oracle host using GitHub Actions.

## Host Information

- **Host IP:** `129.151.193.219`
- **Domain:** `littlelakehill.dancingsalamanders.com`
- **Deployment User:** `ubuntu`
- **Deployment Path:** `/home/ubuntu/littlelakehill`
- **Reverse Proxy:** nginx (with Let's Encrypt SSL)
- **Container Orchestration:** Docker Compose

## Current Host Setup

### Running Services
The Oracle host already runs several services in Docker. Do NOT modify these:

- **bifrost** - Port 8081 (bifrost.dancingsalamanders.com)
- **fauke** - Port 8080 (fauke.dancingsalamanders.com)
- **renpy** - Port 1338
- **Various databases** (PostgreSQL, MySQL)
- **Portainer** - Port 9443 (management)

The lits camping service will run on port 3002 and be accessible at `https://littlelakehill.dancingsalamanders.com`

### Reverse Proxy Setup
- nginx handles all HTTPS/SSL termination
- Certificates are managed by Certbot/Let's Encrypt
- Each domain has its own nginx config in `/etc/nginx/sites-available/` and `/etc/nginx/sites-enabled/`

## GitHub Secrets Configured

The following secrets have been automatically setup in your GitHub repository:

1. **DEPLOY_SSH_KEY** - SSH private key for access (UbuntuSthlm.pem)
2. **DB_PASSWORD** - PostgreSQL password for lits_camping database
3. **NEXTAUTH_SECRET** - Authentication secret for NextAuth.js

⚠️ **Important:** These are production secrets. Never commit them to git or share them.

## Deployment Workflow

### Triggering a Deployment

1. Go to your GitHub repository: https://github.com/HammerOfSteel/camping
2. Click on **Actions** tab
3. Select **"Deploy to Oracle Host"** workflow
4. Click **"Run workflow"**
5. Configure the deployment options:
   - **Theme Selection:** Choose one of:
     - `nordic-standard` (recommended, peaceful)
     - `nordic-minimal` (modern, airy)
     - `adventure-bold` (vibrant, energetic)
   - **Enable Email Notifications:** Toggle true/false for SMTP email support
6. Click **"Run workflow"**

### What the Workflow Does

The GitHub Actions workflow automatically:

1. **Connects to the host** via SSH using the stored private key
2. **Clones/updates the code** from the latest commit on your branch
3. **Creates .env configuration** with your selected theme and email settings
4. **Pulls latest Docker images** and starts containers
5. **Configures nginx** reverse proxy and SSL certificate (if needed)
6. **Verifies deployment** by checking container health

Total deployment time: ~2-3 minutes

## Manual Deployment (if needed)

If you need to deploy without GitHub Actions:

```bash
# SSH into host
ssh -i C:\Users\eriks\Documents\dev\keys\UbuntuSthlm.pem ubuntu@129.151.193.219

# Navigate to deployment directory
cd /home/ubuntu/littlelakehill

# Create .env file with your configuration
# (Edit as needed, example below)
cat > .env << EOF
NODE_ENV=production
NEXT_PUBLIC_THEME=nordic-standard
NEXT_PUBLIC_SITE_NAME=Lits Camping
NEXT_PUBLIC_SITE_URL=https://littlelakehill.dancingsalamanders.com
DB_USER=litscamping
DB_PASSWORD=<your-db-password>
DB_NAME=lits_camping
DATABASE_URL=postgresql://litscamping:<your-db-password>@db:5432/lits_camping
NEXTAUTH_SECRET=<your-secret>
NEXTAUTH_URL=https://littlelakehill.dancingsalamanders.com
ADMIN_PASSWORD=admin123
ENABLE_EMAIL_NOTIFICATIONS=false
NEXT_PUBLIC_API_URL=https://littlelakehill.dancingsalamanders.com/api
NEXT_PUBLIC_SIRVOY_BOOKING_URL=https://5336c06044bd2.sirvoy.me/en
EOF

# Deploy containers
sudo docker-compose down --remove-orphans || true
sudo docker-compose up -d

# Wait for containers to be healthy
sleep 15

# Check status
sudo docker-compose ps
```

## Accessing Your Deployed Site

After deployment:

- **HTTPS:** https://littlelakehill.dancingsalamanders.com
- **HTTP:** http://129.151.193.219:3002 (if direct access needed)

## Monitoring Deployment

```bash
# SSH to host
ssh -i C:\Users\eriks\Documents\dev\keys\UbuntuSthlm.pem ubuntu@129.151.193.219

# View container logs
cd /home/ubuntu/littlelakehill
sudo docker-compose logs -f

# Check container status
sudo docker-compose ps

# View specific service logs
sudo docker-compose logs frontend
sudo docker-compose logs db
```

## Troubleshooting

### Containers not starting

```bash
# Check for port conflicts
sudo lsof -i :3002

# Check Docker daemon
sudo systemctl status docker

# Review full logs
sudo docker-compose logs
```

### Nginx configuration issues

```bash
# Test nginx config
sudo nginx -t

# Check nginx error log
sudo tail -f /var/log/nginx/error.log

# Reload nginx safely
sudo systemctl reload nginx
```

### Database connectivity

```bash
# Test database connection from frontend container
sudo docker-compose exec frontend psql -h db -U litscamping -d lits_camping -c "SELECT 1"

# Check database logs
sudo docker-compose logs db
```

## Theme Customization

The theme is configured via the `NEXT_PUBLIC_THEME` environment variable:

- **nordic-standard**: Forest Green, Nordic Blue, Cream, Warm Brown (peaceful, authentic)
- **nordic-minimal**: Soft greens, soft blues (modern, airy)
- **adventure-bold**: Bold oranges, deep blues (vibrant, energetic)

To change the theme after deployment:

1. Re-run the workflow with the desired theme
2. Or manually edit `.env` in `/home/ubuntu/littlelakehill` and run `sudo docker-compose restart frontend`

## Email Notifications

The `ENABLE_EMAIL_NOTIFICATIONS` flag controls whether the application sends emails for bookings/contact.

When enabled, the following SMTP settings are used (from .env):
- HOST: smtp.gmail.com
- PORT: 587
- USER/PASS: Must be configured in the .env file

⚠️ Note: Email configuration requires additional setup with Gmail App Passwords or other email providers.

## Database

The lits camping service uses PostgreSQL:
- **Container:** lits_camping_db (postgres:16-alpine)
- **User:** litscamping
- **Database:** lits_camping
- **Port (on host):** 5433 (mapped to 5432 in container)

Data persists in a named Docker volume: `postgres_data`

## Security Notes

1. **SSH Key:** Only stored in GitHub Secrets, never committed to repo
2. **Database Password:** Unique per environment, stored in GitHub Secrets
3. **NEXTAUTH_SECRET:** Critical for session security, stored in GitHub Secrets
4. **SSL/TLS:** Automatically managed by Certbot/Let's Encrypt
5. **Nginx:** Redirects all HTTP to HTTPS

## Undeploying

If you need to remove the camping service:

```bash
ssh -i C:\Users\eriks\Documents\dev\keys\UbuntuSthlm.pem ubuntu@129.151.193.219

cd /home/ubuntu/littlelakehill
sudo docker-compose down --volumes  # Remove containers and volumes

# Remove nginx config if desired
sudo rm /etc/nginx/sites-enabled/littlelakehill.dancingsalamanders.com
sudo rm /etc/nginx/sites-available/littlelakehill.dancingsalamanders.com
sudo systemctl reload nginx
```

## Next Steps

1. Commit the `.github/workflows/deploy.yml` file to your repository
2. Push to GitHub
3. Go to Actions tab and trigger your first deployment
4. Monitor the workflow run
5. Verify the site is accessible at https://littlelakehill.dancingsalamanders.com

## Support

For issues or questions about the deployment setup, review:
- GitHub Actions logs in the Actions tab
- Host logs with `ssh ubuntu@129.151.193.219` 
- Docker logs with `docker-compose logs`
