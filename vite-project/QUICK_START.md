# Karvensen - Quick Start Guide

## 🚀 Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
cd vite-project
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will automatically open at `http://localhost:3000`

### 3. Start Developing

Edit any file in `src/` and see changes instantly with hot module replacement!

## 📁 File Organization

### Pages (User-facing routes)
- `src/pages/HomePage.jsx` - Home page with hero, features, testimonials
- `src/pages/AboutPage.jsx` - About us with mission, values, timeline
- `src/pages/ServicesPage.jsx` - Services listing
- `src/pages/TrainingPage.jsx` - Training programs
- `src/pages/BlogPage.jsx` - Blog with search functionality
- `src/pages/CareersPage.jsx` - Job listings
- `src/pages/ContactPage.jsx` - Contact form

### Components (Reusable)
- `src/components/Navbar.jsx` - Navigation header
- `src/components/Footer.jsx` - Footer section
- `src/components/ParticlesBackground.jsx` - Particle animations
- `src/components/TestimonialsSection.jsx` - Testimonials display
- `src/components/SplashCursor.jsx` - Placeholder

### Configuration
- `src/context/ThemeContext.jsx` - Dark/Light theme management
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - CSS processing

## 🎨 Styling Guide

### Tailwind CSS Classes

All styling uses Tailwind CSS utility classes:

```jsx
// Container
<div className="container mx-auto px-4">

// Text
<h1 className="text-4xl font-bold">Heading</h1>
<p className="text-gray-600 dark:text-gray-400">Paragraph</p>

// Buttons (no hover effects as per requirement)
<button className="bg-indigo-500 text-white px-6 py-2 rounded-lg">
  Click me
</button>

// Dark mode
<div className="dark:bg-gray-900 dark:text-white">
  Content
</div>

// Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Content
</div>
```

### Common Patterns

**Card Component:**
```jsx
<div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
  Content
</div>
```

**Button (Primary):**
```jsx
<button className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-medium">
  Button
</button>
```

**Button (Secondary):**
```jsx
<button className="border border-gray-300 px-6 py-2 rounded-lg font-medium">
  Button
</button>
```

## 🌓 Theme Switching

The theme is automatically managed by `ThemeContext`:

```jsx
import { useTheme } from '../context/ThemeContext'

function MyComponent() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return <button onClick={toggleTheme}>Toggle Theme</button>
}
```

## 🛣️ Adding Routes

To add a new page:

1. Create a new page file in `src/pages/`:
```jsx
// src/pages/NewPage.jsx
function NewPage() {
  return <div>New Page Content</div>
}
export default NewPage
```

2. Import in `src/App.jsx`:
```jsx
import NewPage from './pages/NewPage'
```

3. Add route:
```jsx
<Route path="/new-page" element={<NewPage />} />
```

4. Update navigation in `src/components/Navbar.jsx`

## 🔗 Navigation

Use React Router Link component:

```jsx
import { Link } from 'react-router-dom'

<Link to="/about">About Us</Link>
<Link to="/services">Services</Link>
```

## 📝 Forms

The project includes React Hook Form for form handling:

```jsx
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({})
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="w-full px-4 py-2 rounded-lg border"
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
    </form>
  )
}
```

## 🔨 Commands Reference

```bash
# Development
npm run dev              # Start dev server

# Building
npm run build            # Build for production
npm run preview          # Preview production build

# Code quality
npm run lint             # Lint and fix files
```

## 📦 Production Build

Build for production:
```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## 🌐 Deployment

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Traditional Server
```bash
npm run build
# Copy dist/ folder to server
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Clear Cache
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Module Not Found
```bash
npm install
npm run dev
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)

## ✨ Key Features

- ⚡ Fast development with Vite
- 🎨 Beautiful UI with Tailwind CSS
- 🌓 Dark mode support
- 📱 Fully responsive
- 🚀 Optimized for production
- 🎯 Clean component structure

## 🎓 Learning Resources

### Component Structure
```
Component.jsx
├── Imports
├── State management (useState)
├── Effects (useEffect)
├── Event handlers
├── JSX return
└── Export
```

### Style Structure
```
className="
  [Flexbox/Grid Layout]
  [Sizing]
  [Padding/Margin]
  [Colors/Background]
  [Borders/Rounded]
  [Typography]
  [Effects/Transitions]
  [Dark mode overrides]
  [Responsive prefixes]
"
```

## 🚀 Ready to Go!

Your Karvensen site is ready for development. Happy coding! 🎉

For more details, see `README.md` and `CONVERSION_GUIDE.md`
