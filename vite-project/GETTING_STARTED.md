# Getting Started - 5 Minutes to Running Code

## Prerequisites (30 seconds)

Before you start, you need:
- **Node.js 16 or higher** - Download from [nodejs.org](https://nodejs.org)
- **npm 8 or higher** - Comes with Node.js
- **Terminal/PowerShell** - Windows, Mac, or Linux

Check if installed:
```bash
node --version   # Should show v16.0.0 or higher
npm --version    # Should show 8.0.0 or higher
```

---

## Installation (2 minutes)

### Option 1: Automated (Windows)
1. Open File Explorer
2. Navigate to `d:\karven\vite-project\`
3. **Double-click** `INSTALL.bat`
4. Wait for "Installation Complete!" message
5. Press any key when done

### Option 2: Automated (Mac/Linux)
```bash
cd d:/karven/vite-project
chmod +x INSTALL.sh
./INSTALL.sh
```

### Option 3: Manual
```bash
# Navigate to project
cd d:/karven/vite-project

# Install dependencies (2 minutes)
npm install

# Verify installation
npm list react vite tailwindcss
```

---

## Run the Project (2 minutes)

```bash
# Start development server
npm run dev

# You'll see:
# ➜  Local:   http://localhost:3000/
# ➜  Press q to quit
```

**The browser should automatically open at `http://localhost:3000`**

If not, manually open: [http://localhost:3000](http://localhost:3000)

### What you'll see:
- ✅ Landing page with hero section
- ✅ Navigation menu at top
- ✅ Dark/light mode toggle (top right)
- ✅ Working navigation to all pages
- ✅ Responsive design (try resizing!)

---

## Project Structure (30 seconds)

```
vite-project/
├── src/
│   ├── pages/          # 7 page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── TrainingPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── CareersPage.jsx
│   │   └── ContactPage.jsx
│   ├── components/     # 5 reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ParticlesBackground.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── SplashCursor.jsx
│   ├── App.jsx         # Route configuration
│   ├── ThemeContext.jsx # Dark/light mode
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static files
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind settings
└── index.html          # HTML template
```

---

## Common Tasks (Copy & Paste)

### Start Development Server
```bash
npm run dev
```
Opens `http://localhost:3000` with hot reload

### Build for Production
```bash
npm run build
```
Creates optimized `dist/` folder for deployment

### Preview Production Build
```bash
npm run build
npm run preview
```
Test production build locally before deploying

### Check Code Quality
```bash
npm run lint
```
Checks for code style issues

### Fix Code Style
```bash
npm run lint -- --fix
```
Automatically fixes style issues

---

## Customization (Quick Tips)

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#6366f1',    // Change primary color
  accent: '#a78bfa',     // Change accent color
}
```

### Add a New Page
1. Create `src/pages/MyPage.jsx`
2. Add to `App.jsx`:
```jsx
<Route path="/my-page" element={<MyPage />} />
```
3. Add link in `Navbar.jsx`

### Change Particle Animation (Hero only)
Edit `src/components/ParticlesBackground.jsx` particle options

### Modify Navigation Links
Edit `src/components/Navbar.jsx` routes array

---

## Troubleshooting

### Issue: "npm command not found"
**Solution:** Restart PowerShell/Terminal after installing Node.js

### Issue: Port 3000 already in use
**Solution:** Kill process or use different port:
```bash
npm run dev -- --port 3001
```

### Issue: Styles not loading
**Solution:** Make sure you're in correct directory:
```bash
cd d:\karven\vite-project
npm run dev
```

### Issue: Pages showing blank
**Solution:** Check browser console (F12) for errors

### Issue: Dark mode not working
**Solution:** Toggle in top-right corner, check localStorage in DevTools

---

## Key Files to Edit

| File | Purpose | Edit for |
|------|---------|----------|
| `src/pages/*.jsx` | Page content | Change text, sections, data |
| `src/components/*.jsx` | Reusable parts | Modify navbar, footer, etc |
| `tailwind.config.js` | Colors & styles | Change theme colors |
| `src/App.jsx` | Routing | Add/remove pages |
| `src/index.css` | Global styles | Add animations, fonts |
| `package.json` | Dependencies | Add npm packages |

---

## Documentation

For more detailed information:
- **[README.md](README.md)** - Complete project documentation
- **[QUICK_START.md](QUICK_START.md)** - Advanced setup guide
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Architecture overview
- **[CONVERSION_GUIDE.md](CONVERSION_GUIDE.md)** - Migration from Next.js details
- **[DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)** - All docs navigation

---

## What's Next?

1. ✅ Run `npm run dev`
2. ✅ Explore all 7 pages
3. ✅ Test dark mode toggle
4. ✅ Check responsive design
5. ✅ Read QUICK_START.md for customization
6. ✅ Deploy to Vercel/Netlify when ready

---

## Support

### Common Questions

**Q: Can I use TypeScript?**
A: Yes! Rename `.jsx` files to `.tsx` and add types. See QUICK_START.md

**Q: How do I add a database?**
A: Create API endpoints and use `fetch()` in components. See examples in QUICK_START.md

**Q: How do I deploy?**
A: Run `npm run build` and deploy `dist/` folder to Vercel, Netlify, or GitHub Pages

**Q: Can I add authentication?**
A: Yes! Integrate with Auth0, Firebase, or your own backend. Use ThemeContext pattern as reference

**Q: How do I add a form backend?**
A: Create API endpoint and use fetch() in form handlers. See ContactPage.jsx example

---

## Performance Tips

- ✅ Vite: Sub-100ms start time (super fast!)
- ✅ Hot reload: Changes appear instantly
- ✅ Tree shaking: Only code you use is bundled
- ✅ Code splitting: Automatic route-based splitting
- ✅ Production: ~50KB gzipped (including React + Router)

---

**Ready to go?** Run `npm run dev` and start building! 🚀
