# Next.js to React + Vite Conversion Guide

## Overview

This document outlines the conversion of the Karvensen project from Next.js + TypeScript to React + Vite + Tailwind CSS.

## Key Changes

### 1. Framework Migration

**From Next.js to React + Vite:**
- Removed Next.js server-side rendering
- Implemented React Router for client-side routing
- Eliminated TypeScript dependencies (converted to JSX)
- Removed Next.js-specific imports and features

### 2. File Structure Changes

#### Before (Next.js)
```
app/
├── layout.tsx
├── page.tsx
├── about/page.tsx
├── services/page.tsx
├── contact/page.tsx
├── training/page.tsx
└── ...
components/
├── navbar.tsx
├── footer.tsx
└── ...
```

#### After (React + Vite)
```
src/
├── App.jsx
├── main.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── context/
│   └── ThemeContext.jsx
└── pages/
    ├── HomePage.jsx
    ├── AboutPage.jsx
    └── ...
```

### 3. Routing Changes

**Next.js File-based Routing:**
```
app/about/page.tsx → /about
app/services/page.tsx → /services
```

**React Router Configuration:**
```jsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/services" element={<ServicesPage />} />
</Routes>
```

### 4. Component Updates

#### Layout Component
**Before (Next.js layout.tsx):**
```tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ParticlesBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

**After (React App.jsx):**
```jsx
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}
```

#### Theme Management
**Before (Next.js theme-provider.tsx):**
- Used `next-themes`

**After (React custom context):**
- Custom `ThemeContext.jsx` with localStorage support
- Same dark mode functionality without external dependencies

#### Metadata
**Before (Next.js):**
```tsx
export const metadata: Metadata = {
  title: "About Us",
  description: "..."
}
```

**After (React):**
```html
<!-- index.html -->
<title>KarVenSen | AI-Driven Drone & Software Solutions</title>
<meta name="description" content="..." />
```

### 5. Component Conversions

#### TypeScript to JSX

**Before:**
```tsx
interface Props {
  title: string
  description: string
}

export function Card({ title, description }: Props) {
  // ...
}
```

**After:**
```jsx
function Card({ title, description }) {
  // ...
}
```

#### UI Components

All UI components from the original `components/ui/` folder were converted to Tailwind CSS classes:
- `Button` → Tailwind button styles with `bg-indigo-500`, `hover` effects removed
- `Card` → `border` + `rounded-lg` + `p-*` classes
- `Input` → Standard input with Tailwind border and focus styles
- `Label` → `block` text with Tailwind typography
- `Select` → Native select with Tailwind styling
- `Textarea` → Native textarea with Tailwind styling

### 6. Feature Implementations

#### Dark Mode
- Moved from `next-themes` to custom React context
- Same API: `useTheme()` hook
- localStorage for persistence
- `dark:` prefix in Tailwind for dark mode styles

#### Particles Animation
- Removed from global layout
- Added only to HeroSection component
- Same configuration and behavior

#### Form Handling
- Kept `react-hook-form`
- Removed TypeScript types (JSX only)
- Same form validation logic

#### Navigation
- React Router for navigation instead of Next.js Link
- Mobile menu with Hamburger icon
- Theme toggle button

### 7. Removed Dependencies

The following Next.js-specific dependencies were removed:
- `next`
- `next-themes`
- `@vercel/og`
- TypeScript related packages

### 8. Added Dependencies

New dependencies for React + Vite stack:
- `react-router-dom` - Client-side routing
- `@vitejs/plugin-react` - Vite React support
- `tailwindcss` - Utility-first CSS
- `postcss` & `autoprefixer` - CSS processing

## Conversion Checklist

### Pages Converted
- ✅ HomePage - Full conversion with all sections
- ✅ AboutPage - Mission, vision, values, timeline
- ✅ ServicesPage - Service cards with details
- ✅ TrainingPage - Training programs with details
- ✅ BlogPage - Blog listing with search
- ✅ CareersPage - Job listings
- ✅ ContactPage - Contact form

### Components Converted
- ✅ Navbar - Navigation with menu and theme toggle
- ✅ Footer - Footer with links
- ✅ ParticlesBackground - Particle animation
- ✅ TestimonialsSection - Testimonials display

### Features Implemented
- ✅ Dark/Light theme toggle
- ✅ Responsive navigation
- ✅ Contact form
- ✅ Blog search and filtering
- ✅ Particle animations
- ✅ Mobile-first responsive design

## Building and Deployment

### Local Development
```bash
cd vite-project
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Deployment Options

**Vercel:**
```bash
vercel deploy
```

**Netlify:**
- Connect Git repository
- Build command: `npm run build`
- Publish directory: `dist`

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## Performance Improvements

1. **Smaller Bundle Size**
   - React only (no Next.js runtime)
   - Vite's faster bundling
   - Removed unnecessary dependencies

2. **Faster Development**
   - Vite's instant server start
   - Hot module replacement
   - Faster rebuilds

3. **Optimized CSS**
   - Tailwind CSS purging
   - Minified CSS in production
   - No unused styles

## Backward Compatibility Notes

- All URLs remain the same (using React Router paths)
- Dark mode works identically
- Responsive design maintained
- All animations preserved

## Future Enhancements

Possible improvements for the React + Vite version:
- Add TypeScript support (optional)
- Implement service workers for PWA
- Add testing with Vitest
- Implement state management (Redux/Zustand)
- Add internationalization (i18n)
- Implement analytics tracking
- Add lazy loading for images
- Implement API mocking for development

## Migration Completed

All Next.js files have been successfully converted to React + Vite + Tailwind CSS. The project is now ready for development and deployment!
