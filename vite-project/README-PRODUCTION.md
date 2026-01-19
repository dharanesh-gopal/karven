# DroneAcharya - Professional Website

A modern, responsive website for DroneAcharya built with React, Tailwind CSS, and Vite. Designed to showcase drone technology solutions with a professional blue, black, and white color scheme.

## 🌟 Features

### Design & UX
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Light and dark mode support
- ✅ Smooth animations and transitions
- ✅ Professional color scheme (Blue #0066cc, Black, White)
- ✅ Modern typography and spacing

### Components
- ✅ Reusable UI components (Button, Card, Badge, SectionHeader)
- ✅ Professional navigation bar with mobile menu
- ✅ Comprehensive footer with social links
- ✅ Particle background animation
- ✅ Optimized performance

### Sections
- ✅ Hero section with CTA buttons
- ✅ Stats showcase
- ✅ Services grid (4 main offerings)
- ✅ Products showcase (4 drone products)
- ✅ About company section
- ✅ Testimonials from clients
- ✅ Partnership CTAs
- ✅ Newsletter subscription
- ✅ Professional footer

## 🚀 Quick Start

```bash
# 1. Clone and navigate
git clone https://github.com/dharanesh-gopal/karven.git
cd vite-project

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:3000
```

## 📦 Tech Stack

- **Frontend**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.3.6
- **Routing**: React Router 6.20.0
- **Icons**: Lucide React 0.292.0
- **Animations**: CSS Animations & Particles
- **Theme**: ThemeContext for light/dark mode

## 🎨 Color Scheme

```javascript
// Primary Colors
accent: '#0066cc'           // Main brand blue
accent-dark: '#004499'      // Darker shade for active/hover
accent-light: '#0080ff'     // Lighter shade for backgrounds
primary: '#000000'          // Black for text
white: '#ffffff'            // White backgrounds

// Supporting Colors
surface-light: '#f8fafc'    // Light backgrounds
surface-dark: '#0f172a'     // Dark backgrounds
muted: '#64748b'            // Secondary text
```

## 📁 Project Structure

```
vite-project/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── SectionHeader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ParticlesBackground.jsx
│   │   └── ...other components
│   ├── pages/
│   │   ├── HomePage.jsx          ⭐ Main landing page
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── TrainingPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── CareersPage.jsx
│   │   └── ContactPage.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── index.css                 # Global styles & animations
│   ├── App.jsx                   # Route definitions
│   └── main.jsx
├── public/                       # Static assets
├── tailwind.config.js            # Theme configuration
├── vite.config.js                # Build configuration
├── package.json
├── IMPLEMENTATION_GUIDE.md       # Detailed documentation
├── QUICK_START.md               # Quick reference guide
└── README.md                     # This file
```

## 🎯 Key Pages & Sections

### Homepage (src/pages/HomePage.jsx)
The main landing page with:
- Hero section with animated headline
- Stats section showing key metrics
- Services grid with 4 main offerings
- Products showcase with feature lists
- Company about section
- Client testimonials
- Partnership opportunities
- Newsletter signup
- Professional footer

### Navigation
All pages are connected through:
- Main navigation in header
- Footer links
- Internal route links
- Mobile-responsive hamburger menu

## 🧩 Component API

### Button Component
```jsx
<Button 
  variant="primary"  // primary, secondary, ghost, outline
  size="lg"         // sm, md, lg
  onClick={...}
>
  Click Me
</Button>
```

### Card Component
```jsx
<Card 
  className="p-6"
  hover={true}      // Enable hover effects
>
  Content
</Card>
```

### Badge Component
```jsx
<Badge 
  variant="primary" // primary, secondary, success, info
>
  Label
</Badge>
```

### SectionHeader Component
```jsx
<SectionHeader
  subtitle="Optional subtitle"
  title="Main heading"
  description="Optional description"
  centered={true}
/>
```

## 🎬 Animations

### Available Classes
```css
animate-fade-up        /* Fades in while sliding up */
animate-fade-in        /* Simple fade in */
animation-delay-100    /* 100ms delay */
animation-delay-200    /* 200ms delay */
animation-delay-300    /* 300ms delay */
animation-delay-400    /* 400ms delay */
animation-delay-500    /* 500ms delay */
```

### Usage Example
```jsx
<div className="animate-fade-up animation-delay-200">
  Animated content that delays 200ms
</div>
```

## 📱 Responsive Design

The site uses Tailwind CSS responsive prefixes:
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

Example:
```jsx
<div className="text-sm md:text-base lg:text-xl">
  Responsive text sizes
</div>
```

## 🔧 Customization

### 1. Change Brand Color
Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#FF6B35',  // Your brand color
  'accent-dark': '#D94C1F',
  'accent-light': '#FF8A65',
}
```

### 2. Update Navigation
Edit `src/components/Navbar.jsx`:
```javascript
const navLinks = [
  { href: '/', label: 'Home' },
  // Add more links
]
```

### 3. Modify Content
Edit page files in `src/pages/` to update:
- Headings and descriptions
- Product/service information
- Statistics and metrics
- Contact information

### 4. Update Footer
Edit `src/components/Footer.jsx`:
- Social media links
- Contact details
- Quick links
- Newsletter signup

## 📦 Build & Deploy

### Development
```bash
npm run dev      # Start dev server with hot reload
```

### Production Build
```bash
npm run build    # Create optimized build in dist/
npm run preview  # Preview production build locally
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to Docker
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📊 Performance

### Optimization Features
- Code splitting with React Router
- Lazy loading components
- CSS purging with Tailwind
- Optimized animations
- Minimal JavaScript footprint

### Bundle Size
- Main bundle: ~150KB (gzipped)
- Optimized CSS: ~30KB
- No external dependencies for styling

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 13+
- iOS Safari 12+
- Android Chrome (latest)

## 📝 Documentation

### Documentation Files
1. **QUICK_START.md** - 5-minute setup and quick reference
2. **IMPLEMENTATION_GUIDE.md** - Detailed feature documentation
3. **README.md** - This file
4. **src/components/** - Component implementation details

### External Resources
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Styles not loading | Delete `node_modules`, run `npm install` |
| Dark mode not working | Check `src/context/ThemeContext.jsx` |
| Build errors | Clear `dist/` and run `npm run build` again |
| Animations stuttering | Disable particles or reduce count in component |
| Port already in use | Change port in `vite.config.js` |

## ✅ Deployment Checklist

Before deploying to production:
- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] All links working correctly
- [ ] Responsive design verified on mobile
- [ ] Dark mode tested
- [ ] Meta tags updated in `index.html`
- [ ] Favicon configured
- [ ] Analytics setup (if needed)
- [ ] Form submissions tested
- [ ] Social media links verified

## 🎓 Learning Resources

### For beginners:
- Start with QUICK_START.md
- Review component files in `src/components/ui/`
- Check homepage layout in `src/pages/HomePage.jsx`

### For advanced customization:
- Read IMPLEMENTATION_GUIDE.md
- Review Tailwind configuration
- Explore particle background in ParticlesBackground.jsx

## 📞 Support

For issues or questions:
1. Check the documentation files
2. Review component examples
3. Check the [Tailwind CSS documentation](https://tailwindcss.com)
4. Visit [React documentation](https://react.dev)

## 📄 License

This project is based on the DroneAcharya website template. See LICENSE file for details.

## 🙏 Credits

- Design inspiration: [DroneAcharya.com](https://droneacharya.com)
- Icons: [Lucide React](https://lucide.dev)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com)
- Build Tool: [Vite](https://vitejs.dev)
- UI Framework: [React](https://react.dev)

---

## 📈 Project Status

- ✅ Homepage redesigned with modern sections
- ✅ Component system implemented
- ✅ Responsive design completed
- ✅ Dark mode support added
- ✅ Animations optimized
- ✅ Production-ready build system

**Current Version**: 1.0.0  
**Last Updated**: January 2026  
**Status**: Production Ready ✅

---

**Ready to launch? Run `npm run dev` to get started! 🚀**
