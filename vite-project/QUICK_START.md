# DroneAcharya Website - Quick Start Guide

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies
```bash
cd vite-project
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to `http://localhost:3000` (opens automatically)

---

## ✨ What's New in This Version

### 🎨 Professional Design
- Modern blue (#0066cc), black, and white color scheme
- Responsive layout for all devices
- Smooth animations and transitions
- Professional typography and spacing

### 📦 Reusable Components
- **Button** - 4 variants (primary, secondary, ghost, outline)
- **Card** - Smart hover effects and borders
- **Badge** - Label component with 4 styles
- **SectionHeader** - Consistent section titles

### 🏠 Homepage Sections
1. **Hero** - Eye-catching headline with CTA buttons
2. **Stats** - Key metrics display
3. **Services** - 4 main service offerings
4. **Products** - 4 drone products with features
5. **About** - Company information
6. **Testimonials** - Client success stories
7. **CTAs** - Partnership opportunities
8. **Newsletter** - Email subscription
9. **Footer** - Complete contact and social information

### 📱 Fully Responsive
- Mobile, tablet, and desktop optimized
- Touch-friendly navigation
- Dark mode support

---

## 🗂️ File Structure

```
vite-project/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx         ← Reusable button
│   │   │   ├── Card.jsx           ← Card container
│   │   │   ├── Badge.jsx          ← Label component
│   │   │   └── SectionHeader.jsx  ← Section titles
│   │   ├── Navbar.jsx             ← Navigation bar
│   │   └── Footer.jsx             ← Footer
│   ├── pages/
│   │   ├── HomePage.jsx           ← ⭐ Redesigned!
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── TrainingPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── CareersPage.jsx
│   │   └── ContactPage.jsx
│   ├── index.css                  ← Styles & animations
│   └── App.jsx                    ← Routes
├── tailwind.config.js             ← Theme colors
└── package.json                   ← Dependencies
```

---

## 🎯 Quick Customizations

### Change Brand Color
File: `tailwind.config.js`
```javascript
colors: {
  accent: '#0066cc',      // Change to your color
  'accent-dark': '#004499',
  'accent-light': '#0080ff',
}
```

### Update Navigation Links
File: `src/components/Navbar.jsx`
```javascript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  // Add more links here
]
```

### Edit Hero Section
File: `src/pages/HomePage.jsx`
```jsx
<h1>Your Custom Headline</h1>
<p>Your custom description</p>
```

### Modify Footer
File: `src/components/Footer.jsx`
```jsx
<a href="tel:+91-1234567890">+91 1234567890</a>
<a href="mailto:info@company.com">info@company.com</a>
```

---

## 📚 Component Usage Examples

### Button
```jsx
<Button variant="primary" size="lg">
  Click Me
</Button>
```

### Card
```jsx
<Card className="p-6">
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

### Badge
```jsx
<Badge variant="primary">Featured</Badge>
```

### Section Header
```jsx
<SectionHeader
  subtitle="Subtitle"
  title="Main Heading"
  description="Description text"
/>
```

---

## 🎬 Animations

### Available Animations
- `animate-fade-up` - Fade in while sliding up
- `animate-fade-in` - Simple fade in
- `animation-delay-100` to `animation-delay-500` - Stagger effect

### Usage
```jsx
<div className="animate-fade-up animation-delay-200">
  Animated content
</div>
```

---

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
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

---

## 🎓 Common Tasks

### Add New Page
1. Create `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Navbar.jsx`

### Add New Section
```jsx
<section className="section-container">
  <div className="container mx-auto px-4">
    <SectionHeader title="Section Title" />
    {/* Your content */}
  </div>
</section>
```

### Add Image
```jsx
<img 
  src="/images/your-image.jpg" 
  alt="Description"
  className="w-full rounded-lg"
/>
```

### Add Form
```jsx
<form onSubmit={handleSubmit}>
  <input type="email" placeholder="Email" />
  <Button type="submit">Send</Button>
</form>
```

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Styles not showing | Delete `node_modules`, run `npm install` |
| Dark mode broken | Check `src/context/ThemeContext.jsx` |
| Animations stuttering | Disable particles or reduce count |
| Build fails | Clear `dist/` folder and rebuild |
| Port 3000 in use | Change port in `vite.config.js` |

---

## 📱 Responsive Breakpoints

- `sm:` - 640px (smartphones landscape)
- `md:` - 768px (tablets)
- `lg:` - 1024px (desktop)
- `xl:` - 1280px (large desktop)

Example:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

---

## 🚀 Next Steps

1. ✅ Run `npm run dev`
2. 📝 Update content in pages
3. 🎨 Customize colors in `tailwind.config.js`
4. 📸 Add your images to `/public`
5. 🔗 Update navigation and links
6. 🚀 Deploy to production

---

## 📖 Documentation Files

- **IMPLEMENTATION_GUIDE.md** - Detailed documentation
- **QUICK_START.md** - This file
- **Tailwind Docs** - https://tailwindcss.com
- **React Docs** - https://react.dev
- **Vite Docs** - https://vitejs.dev

---

**Ready to go? Run `npm run dev` now! 🚀**
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
