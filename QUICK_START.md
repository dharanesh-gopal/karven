# 🚀 Karvensen Quick Start Guide

## ⚡ Get Up & Running in 5 Minutes

### 1. Install Dependencies
```bash
cd d:\karven
npm install
# or
pnpm install
```

### 2. Start Development Server
```bash
npm run dev
# or
pnpm dev
```

Visit **http://localhost:3000** in your browser.

---

## 📋 What You Get

### ✅ Complete Website
- **Homepage** - Hero, services overview, testimonials, CTA
- **About** - Company story, team, mission, values, timeline
- **Services** - 6 detailed service offerings
- **Training** - Educational programs and workshops
- **Blog** - Article listings with CMS integration
- **Contact** - Contact form and business information
- **Careers** - Job listings and culture
- **Privacy & Terms** - Legal pages

### ✅ Modern Design System
- **Colors**: Professional blue (#2D3F7F light, #5F7FFF dark)
- **Typography**: Inter font, responsive sizing
- **Components**: 40+ shadcn/ui components
- **Icons**: Lucide React icons throughout
- **Animations**: Smooth transitions, particle effects
- **Dark Mode**: Built-in theme switching

### ✅ Enterprise Features
- **Responsive**: Mobile, tablet, desktop optimized
- **Accessible**: WCAG compliant
- **SEO**: Meta tags, Open Graph, structured data
- **Performance**: Image optimization, code splitting
- **CMS**: Sanity integration for content management
- **TypeScript**: Full type safety

---

## 🎯 Key URLs

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | / | Main landing page |
| About | /about | Company information |
| Services | /services | Service offerings |
| Training | /training | Educational programs |
| Blog | /blog | Articles & insights |
| Contact | /contact | Contact form |
| Careers | /careers | Job listings |
| Sanity Studio | /studio | Content management |
| Privacy | /privacy | Privacy policy |
| Terms | /terms | Terms of service |

---

## 🎨 Customization

### Change Company Name
1. Edit `app/layout.tsx` - metadata title
2. Edit `components/navbar.tsx` - logo text
3. Edit `components/footer.tsx` - company name
4. Edit `sanity/env.ts` - project config (optional)

### Update Colors
Edit `app/globals.css`:
```css
:root {
  --primary: oklch(...); /* Change to your color */
}

.dark {
  --primary: oklch(...); /* Dark mode color */
}
```

### Add New Page
1. Create folder: `app/new-page/`
2. Add file: `page.tsx`
3. Add metadata and content
4. Update navbar in `components/navbar.tsx`
5. Update footer in `components/footer.tsx`

### Update Branding
- Logo: `components/navbar.tsx` - Line 85
- Company name: Multiple files (use find & replace)
- Contact info: `components/footer.tsx`
- Social links: Add to footer

---

## 📝 Content Management

### Using Sanity Studio
1. Go to http://localhost:3000/studio
2. Sign in with Sanity account
3. Navigate to collections:
   - **Services** - Add/edit services
   - **Blog** - Create articles
   - **Training** - Add courses
   - **Testimonials** - Add client quotes
   - **Projects** - Add case studies

### Content Types
- **Services**: Title, description, features, icon
- **Blog Posts**: Title, content, author, category, date
- **Training**: Title, type, audience, duration, topics
- **Testimonials**: Quote, author, role, rating
- **Projects**: Client, industry, challenge, solution, results

---

## 🔧 Configuration Files

### package.json
- Dependencies list
- Build & dev scripts
- Project metadata

### tsconfig.json
- TypeScript settings
- Path aliases (@/*)
- Compiler options

### next.config.mjs
- Image optimization
- Environment variables
- Build configuration

### sanity.config.ts
- Sanity project setup
- Studio configuration
- Plugin settings

### tailwind.config.ts
- Theme customization
- Component styles
- Plugin configuration

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] All pages created
- [ ] Content added to Sanity
- [ ] Images optimized
- [ ] Links tested
- [ ] Mobile responsive check
- [ ] Dark mode tested
- [ ] Contact form configured
- [ ] Analytics ID added

### Deployment Steps

#### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Option 2: Build for Hosting
```bash
npm run build
npm start
```

#### Option 3: Docker
```bash
docker build -t karvensen .
docker run -p 3000:3000 karvensen
```

### Post-Deployment
- [ ] Verify all pages load
- [ ] Test contact form
- [ ] Check analytics
- [ ] Verify SSL certificate
- [ ] Test mobile experience
- [ ] Check SEO meta tags
- [ ] Monitor performance

---

## 🐛 Common Issues & Solutions

### Dev server not starting
```bash
# Kill port 3000
lsof -ti:3000 | xargs kill -9
# or on Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Try again
npm run dev
```

### Module not found errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Sanity connection issues
- Check `sanity/env.ts` for correct projectId
- Verify Sanity API key has proper permissions
- Check network connectivity
- Clear browser cache

### Build fails
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

---

## 📊 Performance Tips

### Image Optimization
- Use Next.js `Image` component
- Optimize images before upload
- Lazy load off-screen images
- Use WebP format when possible

### Code Splitting
- Dynamic imports with `next/dynamic`
- Route-based code splitting (automatic)
- Component lazy loading

### Caching
- Use `revalidate` for ISR
- Set proper cache headers
- Enable browser caching

### Monitoring
- Add analytics tracking
- Monitor Core Web Vitals
- Track error rates
- Monitor performance metrics

---

## 📚 File Reference

### Core Files
- `app/layout.tsx` - Root layout & metadata
- `app/page.tsx` - Homepage
- `components/navbar.tsx` - Navigation bar
- `components/footer.tsx` - Footer

### Configuration
- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `sanity.config.ts` - Sanity CMS configuration

### Styling
- `app/globals.css` - Global styles & theme colors
- `tailwind.config.ts` - Design tokens
- Component-level CSS (Tailwind classes)

### CMS
- `sanity/env.ts` - Sanity environment
- `sanity/lib/client.ts` - Sanity client
- `sanity/schemaTypes/` - Content schemas

---

## 🎓 Learning Resources

- **Next.js**: https://nextjs.org/learn
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Sanity CMS**: https://www.sanity.io/learn
- **TypeScript**: https://www.typescriptlang.org/docs

---

## 💡 Pro Tips

1. **Use aliases**: `@/components` instead of `../../components`
2. **Dark mode**: Theme toggle is automatic in navbar
3. **Mobile first**: Always design for mobile first
4. **TypeScript**: Use proper types for better DX
5. **Components**: Reuse shadcn/ui components
6. **Git**: Commit frequently, meaningful messages
7. **Testing**: Test dark mode and mobile views
8. **Performance**: Run lighthouse audits regularly

---

## 🆘 Getting Help

- **Documentation**: See `KARVENSEN_COMPLETE.md`
- **Code Comments**: Components well-commented
- **GitHub Issues**: Check for known issues
- **Stack Overflow**: Search for Next.js issues

---

## 🎉 You're All Set!

Your Karvensen website is ready to go. Customize the content, deploy it, and start making an impact!

For detailed documentation, see **KARVENSEN_COMPLETE.md**

**Happy coding! 🚀**

---

*Last Updated: January 2025*  
*Version: 1.0*

