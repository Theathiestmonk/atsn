# Vercel Deployment Guide

This static website is optimized for deployment on Vercel.

## Quick Deploy

### Option 1: Deploy from GitHub
1. Push this code to a GitHub repository
2. Connect your GitHub account to Vercel
3. Import the repository in Vercel
4. Vercel will automatically detect it's a Vite project and configure the build settings

### Option 2: Deploy via Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the frontend directory
3. Follow the prompts to configure your project

## Build Configuration

The project is already configured with:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18.x (default)

## Environment Variables

No environment variables are required for this static site.

## Custom Domain

After deployment, you can add a custom domain in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., `atsnai.com`)

## Performance Optimizations

The Vercel configuration includes:
- **Static file caching** for assets (1 year)
- **SPA routing** for React Router
- **Gzip compression** (automatic)
- **CDN distribution** (automatic)

## Build Output

The build creates optimized static files:
- `index.html` - Main HTML file
- `assets/` - CSS, JS, and other assets
- Total size: ~45KB gzipped

## Monitoring

Vercel provides built-in analytics and monitoring for:
- Page views
- Performance metrics
- Error tracking
- Real-time logs
