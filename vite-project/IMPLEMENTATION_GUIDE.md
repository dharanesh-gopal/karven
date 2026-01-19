# DroneAcharya Website - Setup & Development Guide

## Overview

This is a professionally designed, responsive website for DroneAcharya built with React, Tailwind CSS, and Vite. The design is inspired by droneacharya.com with a modern blue, black, and white color scheme.

## Project Structure

```
vite-project/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx          # Reusable button component
│   │   │   ├── Card.jsx            # Card component with hover effects
│   │   │   ├── Badge.jsx           # Badge component for labels
│   │   │   └── SectionHeader.jsx   # Reusable section header
│   │   ├── Navbar.jsx              # Professional navigation bar
│   │   ├── Footer.jsx              # Footer with social links and contact info
│   │   ├── ParticlesBackground.jsx # Particle animation background
│   │   └── ...other components
│   ├── pages/
│   │   ├── HomePage.jsx            # Main landing page (redesigned)
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── TrainingPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── CareersPage.jsx
│   │   └── ContactPage.jsx
│   ├── index.css                   # Global styles and animations
│   ├── App.jsx                     # Main app router
│   └── main.jsx
├── tailwind.config.js              # Tailwind configuration with custom color scheme
├── vite.config.js                  # Vite configuration
└── package.json                    # Dependencies
```

## Color Scheme

### Primary Colors
- **Accent (Primary Blue)**: `#0066cc` - Used for primary buttons, links, and highlights
- **Primary (Black)**: `#000000` - Main text and backgrounds
- **White**: `#ffffff` - Light backgrounds and text on dark

### Secondary Colors
- **Accent Light**: `#0080ff` - Hover states
- **Accent Dark**: `#004499` - Active states
- **Surface Light**: `#f8fafc` - Light backgrounds
- **Surface Dark**: `#0f172a` - Dark backgrounds
- **Muted**: `#64748b` - Secondary text

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or pnpm
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/dharanesh-gopal/karven.git
   cd vite-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

   The site will open automatically at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   # or
   pnpm build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   pnpm preview
   ```

## Key Features

### 1. **Hero Section**
- Animated headline with gradient text
- Particle background animation
- Call-to-action buttons
- Smooth scroll animations

### 2. **Stats Section**
- Black background for contrast
- 4-column stats grid (responsive)
- Animated counters

### 3. **Services Section**
- 4 main service offerings
- Icon-based cards with hover effects
- Responsive grid layout

### 4. **Products Section**
- 4 product cards with detailed features
- Feature list with checkmarks
- Product images/placeholders
- Learn more buttons

### 5. **About Section**
- Text and image layout
- Company mission and values
- Call-to-action link

### 6. **Testimonials Section**
- Client success stories
- Avatar and role information
- 3-column responsive grid

### 7. **CTA Section**
- Distributor and Trainer partnership opportunities
- Gradient backgrounds
- Direct action buttons

### 8. **Newsletter**
- Email subscription form
- Success feedback message
- Dark background with white text

### 9. **Professional Navigation**
- Sticky header
- Desktop and mobile responsive
- Active link indicators
- Theme toggle (light/dark mode)

### 10. **Footer**
- 5-column layout (responsive)
- Social media links with icons
- Contact information
- Newsletter subscription
- Quick links and services

## Component Guide

### Button Component
```jsx
<Button variant="primary" size="lg">
  Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
</Button>
```

**Variants**: `primary`, `secondary`, `ghost`, `outline`
**Sizes**: `sm`, `md`, `lg`

### Card Component
```jsx
<Card className="p-6" hover={true}>
  {/* Card content */}
</Card>
```

### Badge Component
```jsx
<Badge variant="primary">Innovation Meets Excellence</Badge>
```

**Variants**: `primary`, `secondary`, `success`, `info`

### SectionHeader Component
```jsx
<SectionHeader
  subtitle="What We Offer"
  title="Comprehensive Solutions"
  description="Full-stack drone technology..."
  centered={true}
/>
```

## Animations

### Available Animations
- `animate-fade-up` - Fades and slides up (0.6s)
- `animate-fade-in` - Simple fade in (0.6s)
- `animation-delay-100` through `animation-delay-500` - Stagger animations

### Usage
```jsx
<div className="animate-fade-up animation-delay-200">
  Content that fades in with delay
</div>
```

## Tailwind CSS Configuration

### Custom Utilities
```javascript
// Colors
colors: {
  accent: '#0066cc',
  'accent-light': '#0080ff',
  'accent-dark': '#004499',
}

// Animations
animation: {
  'fade-up': 'fadeUp 0.6s ease-out forwards',
  'fade-in': 'fadeIn 0.6s ease-out forwards',
}

// Box Shadows (Blue-tinted)
boxShadow: {
  'sm-blue': '0 4px 6px rgba(0, 102, 204, 0.1)',
  'md-blue': '0 10px 25px rgba(0, 102, 204, 0.15)',
  'lg-blue': '0 25px 50px rgba(0, 102, 204, 0.2)',
}
```

## Responsive Design

The site is fully responsive with breakpoints:
- **Mobile**: Default (< 640px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)
- **Large Desktop**: `xl:` (≥ 1280px)

### Mobile-First Approach
All styles are mobile-first with responsive modifiers:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text sizes
</div>
```

## Customization

### Change Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#your-color-code',
  'accent-dark': '#your-dark-shade',
  'accent-light': '#your-light-shade',
}
```

### Modify Animations
Edit `src/index.css` to adjust animation timing, delays, or add new animations.

### Update Navigation Links
Edit `src/components/Navbar.jsx`:
```javascript
const navLinks = [
  { href: '/', label: 'Home' },
  // Add more links here
]
```

### Update Footer Content
Edit `src/components/Footer.jsx` to update:
- Social media links
- Contact information
- Quick links
- Newsletter signup

## Performance Optimization

### Current Optimizations
- Code splitting with React Router
- Lazy loading of components
- Optimized animations with CSS
- Minimal JavaScript footprint
- Tailwind CSS purging unused styles

### Further Optimization Tips
1. Add image optimization (next/image or similar)
2. Implement lazy loading for images
3. Add service worker for offline support
4. Consider code splitting for heavy pages
5. Monitor and optimize bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Docker
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## Troubleshooting

### Issue: Styles not applying
- Clear node_modules: `rm -rf node_modules && npm install`
- Restart dev server
- Check tailwind.config.js content paths

### Issue: Animations not smooth
- Check if particles background is causing performance issues
- Disable in ParticlesBackground.jsx if needed
- Verify GPU acceleration is enabled

### Issue: Build errors
- Clear dist folder: `rm -rf dist`
- Delete node_modules and reinstall
- Check for version conflicts in package.json

## Dependencies

### Core Dependencies
- `react@18.2.0` - UI library
- `react-dom@18.2.0` - DOM rendering
- `react-router-dom@6.20.0` - Routing
- `lucide-react@0.292.0` - Icons
- `@tsparticles/react@2.12.0` - Particle animations
- `@tsparticles/slim@2.12.0` - Particle engine

### Dev Dependencies
- `vite@5.0.8` - Build tool
- `tailwindcss@3.3.6` - CSS framework
- `postcss@8.4.32` - CSS processing
- `autoprefixer@10.4.16` - CSS vendor prefixes

## Future Enhancements

1. **SEO Optimization**
   - Add meta tags
   - Implement schema markup
   - Create sitemap

2. **Analytics**
   - Google Analytics integration
   - Conversion tracking

3. **CMS Integration**
   - Sanity or Contentful integration
   - Dynamic content management

4. **E-commerce**
   - Product catalog
   - Shopping cart
   - Payment integration

5. **Advanced Features**
   - Blog with full-text search
   - User authentication
   - Contact form with backend
   - Booking system for training

## Support & Documentation

For more information:
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)

## License

This project is based on the DroneAcharya website template. Ensure compliance with the original project's license.

## Contact

For questions or support about this implementation, contact the development team.

---

**Last Updated**: January 2026
**Version**: 1.0.0
**Status**: Production Ready
