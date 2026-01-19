# Karvensen - React + Vite + Tailwind CSS

A modern, fully-featured website for Karvensen - an AI-driven drone and software solutions company. Built with React, Vite, and Tailwind CSS for optimal performance and scalability.

## Features

- ⚡ **Vite** - Lightning-fast build tool and development server
- ⚛️ **React 18** - Latest React version with hooks and functional components
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🌓 **Dark Mode** - Built-in dark mode support with localStorage persistence
- 🚀 **React Router** - Client-side routing for seamless navigation
- ✨ **Particle Animations** - Beautiful particle effects on hero section
- 📱 **Responsive Design** - Mobile-first approach, works on all devices
- 🎯 **Optimized Performance** - Fast load times and smooth interactions

## Pages & Features

- **Home** - Hero section with particle animation, features, why choose us, testimonials
- **About** - Company story, mission, vision, values, timeline, and impact stats
- **Services** - Detailed service offerings with features (AI, Drones, LMS, ERP, Cloud, Training)
- **Training** - Training programs for farmers, schools, and professionals
- **Blog** - Article listing with search and category filtering
- **Careers** - Job listings and company culture information
- **Contact** - Contact form with location and business hours information

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation with dark mode toggle
│   ├── Footer.jsx              # Footer with links
│   ├── ParticlesBackground.jsx # Particle animation component
│   ├── TestimonialsSection.jsx # Testimonials display
│   └── SplashCursor.jsx        # Placeholder component
├── context/
│   └── ThemeContext.jsx        # Dark/Light theme management
├── pages/
│   ├── HomePage.jsx            # Home page with all sections
│   ├── AboutPage.jsx           # About page with company info
│   ├── ServicesPage.jsx        # Services listing
│   ├── TrainingPage.jsx        # Training programs
│   ├── BlogPage.jsx            # Blog with search
│   ├── CareersPage.jsx         # Job listings
│   └── ContactPage.jsx         # Contact form
├── App.jsx                     # Main app with routing
├── main.jsx                    # Entry point
└── index.css                   # Global styles and animations
```

## Getting Started

### Prerequisites

- **Node.js** 16.0 or higher
- **npm** or **yarn** package manager

### Installation

1. Navigate to the project directory:
```bash
cd vite-project
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will automatically open at `http://localhost:3000`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Fix code style issues:
```bash
npm run lint
```

## Technology Stack

- **Frontend Framework** - React 18
- **Build Tool** - Vite 5
- **Styling** - Tailwind CSS 3
- **Routing** - React Router 6
- **Icons** - Lucide React
- **Animations** - @tsparticles
- **Form Handling** - React Hook Form
- **Linting** - ESLint

## Key Components

### Theme System
- Dark/Light mode toggle
- Preference saved to localStorage
- System preference detection support

### Navigation
- Responsive navbar with mobile menu
- Active link highlighting
- Smooth transitions

### Forms
- Contact form with validation
- File upload support
- Error handling

### Animations
- Fade-in animations on page load
- Smooth scroll behavior
- Particle effects on hero section

## Environment Configuration

The project is configured to run on port 3000 and automatically opens in your default browser during development.

### Vite Configuration
- React plugin with fast refresh
- Optimized for development and production
- Asset handling and optimization

### Tailwind Configuration
- Responsive design utilities
- Dark mode support with `dark:` prefix
- Customizable theme colors

## Performance Optimizations

- Code splitting with React Router
- CSS minification and optimization
- Image optimization ready
- Lazy loading support
- Production build optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run linting: `npm run lint`
4. Commit: `git commit -am 'Add feature'`
5. Push: `git push origin feature/your-feature`
6. Submit a pull request

## License

All rights reserved © 2024 Karvensen Technologies

## Support

For issues, questions, or contributions, please contact:
- Email: contact@karvensen.com
- Website: https://karvensen.com

## Deployment

### Vercel
```bash
npm run build
# Deploy the dist folder
```

### Netlify
```bash
npm run build
# Connect your Git repository to Netlify
```

### Docker
```bash
# Build
docker build -t karvensen .

# Run
docker run -p 3000:3000 karvensen
```

## Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Issues
```bash
# Clear Vite cache
rm -rf dist
npm run build
```

---

Built with ❤️ by Karvensen Technologies
