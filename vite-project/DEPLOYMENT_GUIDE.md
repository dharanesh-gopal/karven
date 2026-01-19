# Deployment & Production Setup Guide

## 🚀 Pre-Deployment Checklist

Before deploying to production, ensure:

- [ ] All code committed to git
- [ ] `npm run build` completes without errors
- [ ] `npm run preview` works and looks good
- [ ] Tested on mobile, tablet, and desktop
- [ ] Dark mode functionality verified
- [ ] All links work correctly
- [ ] Images optimized (if added)
- [ ] Meta tags updated in `index.html`
- [ ] Favicon configured
- [ ] Form handling configured (if applicable)
- [ ] Analytics setup (Google Analytics, etc.)
- [ ] SEO optimized

---

## 📦 Building for Production

### Step 1: Create Optimized Build
```bash
cd vite-project
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Step 2: Test Production Build Locally
```bash
npm run preview
```

Visit `http://localhost:4173` to test the production build.

### Step 3: Verify Build Quality
- Check that CSS is minified
- Verify JavaScript is optimized
- Test all interactive features
- Check responsive design
- Verify animations work smoothly

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Benefits**: Automatic deployments, free HTTPS, fast CDN, easy rollbacks

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

**Configuration** (optional `vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "envPrefix": "VITE_"
}
```

### Option 2: Netlify

**Benefits**: Free, easy deployment, automatic builds from git

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

**Configuration** (create `netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Update package.json
# Add: "homepage": "https://yourusername.github.io/repo-name"
# Add scripts: "deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

### Option 4: Traditional Hosting (Shared/VPS)

1. Build locally: `npm run build`
2. Upload `dist/` folder via FTP/SFTP
3. Configure web server to serve index.html for all routes

**Nginx Configuration**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/your-app/dist;

    location / {
        try_files $uri /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Apache Configuration** (.htaccess):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Option 5: Docker

**Dockerfile**:
```dockerfile
# Build stage
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:16-alpine
WORKDIR /app
RUN npm install -g http-server
COPY --from=build /app/dist ./dist
EXPOSE 8080
CMD ["http-server", "dist", "-p", "8080"]
```

**Docker Compose**:
```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "8080:8080"
    environment:
      - NODE_ENV=production
```

**Build and Run**:
```bash
docker build -t droneacharya-web .
docker run -p 8080:8080 droneacharya-web
```

---

## 🔐 HTTPS & Security

### Getting SSL Certificate (Free with Let's Encrypt)

**Using Certbot** (Apache):
```bash
sudo apt-get install certbot python3-certbot-apache
sudo certbot --apache -d yourdomain.com
```

**Using Certbot** (Nginx):
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

### Security Headers (Nginx)
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';" always;
```

---

## 🎯 Post-Deployment Steps

### 1. Verify Deployment
- [ ] Visit your domain in browser
- [ ] Check all pages load correctly
- [ ] Test responsive design
- [ ] Verify dark mode works
- [ ] Test all interactive features
- [ ] Check console for errors

### 2. SEO Setup
- [ ] Add Google Search Console
- [ ] Add Bing Webmaster Tools
- [ ] Submit sitemap
- [ ] Verify meta tags
- [ ] Test Open Graph tags

### 3. Analytics
- [ ] Add Google Analytics
- [ ] Configure goals/conversions
- [ ] Set up alerts
- [ ] Monitor traffic

### 4. Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error tracking
- [ ] Set up performance monitoring
- [ ] Configure backups

### 5. Optimization
- [ ] Enable GZIP compression
- [ ] Set up CDN
- [ ] Enable caching headers
- [ ] Optimize images
- [ ] Minify assets

---

## 📊 Performance Optimization

### Enable GZIP Compression (Nginx)
```nginx
gzip on;
gzip_types text/plain text/css text/javascript application/json application/javascript;
gzip_min_length 1000;
```

### Cache Headers
```nginx
# Cache static assets for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Don't cache HTML
location ~* \.html$ {
    add_header Cache-Control "public, max-age=3600";
}
```

### Content Delivery Network (CDN)
- **CloudFlare**: Free, easy setup
- **AWS CloudFront**: Powerful, scalable
- **Bunny CDN**: Fast, affordable
- **jsDelivr**: Great for npm packages

---

## 🔄 Continuous Deployment (CD)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: BertalanD/vercel-action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 🌍 Domain Configuration

### Setup Custom Domain on Vercel
1. Go to project settings
2. Click "Domains"
3. Add your domain
4. Follow DNS setup instructions
5. Wait for verification (usually instant)

### Setup Custom Domain on Netlify
1. Go to Domain settings
2. Click "Add custom domain"
3. Enter your domain
4. Update DNS records at registrar
5. Wait for verification

### Update DNS at Registrar

**For Vercel**:
- CNAME: `yourproject.vercel.app`

**For Netlify**:
- CNAME: `your-site.netlify.app`

---

## 📧 Email Integration (Optional)

### For Contact Forms

**SendGrid Integration**:
```javascript
// Backend example (Node.js)
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'info@droneacharya.com',
  from: 'noreply@yourdomain.com',
  subject: 'New Contact Form Submission',
  text: formData.message,
  html: `<strong>${formData.name}</strong><br>${formData.message}`,
};

await sgMail.send(msg);
```

---

## 📈 Monitoring & Analytics

### Google Analytics 4 Setup

Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Sentry Error Tracking

```bash
npm install --save @sentry/react @sentry/tracing
```

In `src/main.jsx`:
```javascript
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://your-sentry-dsn@sentry.io/xxx",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

---

## 🧪 Testing Before Launch

### Performance Testing
```bash
# Install Lighthouse CLI
npm install -g @lhci/cli@0.9.x

# Run Lighthouse
lhci autorun
```

### Load Testing
```bash
# Using Apache Bench
ab -n 1000 -c 10 https://yourdomain.com

# Using wrk
wrk -t12 -c400 -d30s https://yourdomain.com
```

---

## 🚨 Troubleshooting Deployment

| Issue | Solution |
|-------|----------|
| 404 errors on refresh | Configure SPA fallback to index.html |
| CSS not loading | Check CSS file paths and MIME types |
| Animations not working | Verify CSS animations are in dist |
| Images not showing | Check image paths relative to root |
| API calls failing | Verify CORS and API endpoints |
| Dark mode broken | Check localStorage and theme context |

---

## 📋 Rollback Plan

### If Deployment Goes Wrong

**Vercel**:
1. Go to Deployments tab
2. Select previous successful deployment
3. Click "Redeploy"

**Netlify**:
1. Go to Deploys
2. Select previous successful deploy
3. Click "Publish deploy"

**GitHub Pages**:
```bash
git revert HEAD
git push origin main
```

---

## 📚 Deployment Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Docker Documentation](https://docs.docker.com)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [SSL/TLS Best Practices](https://certbot.eff.org/)

---

## ✅ Launch Checklist

- [ ] Build successful locally
- [ ] Production preview works
- [ ] All tests pass
- [ ] Responsive design verified
- [ ] Dark mode tested
- [ ] Links all work
- [ ] Forms configured (if any)
- [ ] Analytics setup
- [ ] SSL certificate obtained
- [ ] Domain pointed to deployment
- [ ] CDN configured (optional)
- [ ] Monitoring setup
- [ ] Backup plan established
- [ ] Team notified of launch

---

## 🎉 Post-Launch

1. **Monitor closely** for first 24 hours
2. **Check analytics** for traffic
3. **Respond to feedback** quickly
4. **Monitor performance** metrics
5. **Plan improvements** for v1.1

---

**Version**: 1.0.0  
**Status**: Ready for Deployment  
**Last Updated**: January 2026

---

**Ready to launch? Follow the checklist and deploy! 🚀**
