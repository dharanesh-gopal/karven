# Troubleshooting Guide

## Installation Issues

### ❌ "npm: command not found"

**Cause:** Node.js/npm not installed or PATH not updated

**Solutions:**
1. **Install Node.js**
   - Visit [nodejs.org](https://nodejs.org)
   - Download LTS version (recommended)
   - Run installer and follow steps
   - **Restart your terminal/PowerShell** (critical!)

2. **Verify installation**
   ```bash
   node --version
   npm --version
   ```

3. **Check PATH** (Windows)
   - Open Environment Variables
   - Verify `C:\Program Files\nodejs` in PATH
   - Restart PowerShell

---

### ❌ "npm ERR! ERR! ERESOLVE unable to resolve dependency tree"

**Cause:** Conflicting package versions

**Solutions:**
1. **Clear npm cache**
   ```bash
   npm cache clean --force
   ```

2. **Remove existing installations**
   ```bash
   rm -rf node_modules package-lock.json
   ```

3. **Reinstall**
   ```bash
   npm install
   ```

4. **Use npm force flag** (last resort)
   ```bash
   npm install --legacy-peer-deps
   ```

---

### ❌ "Permission denied: ./INSTALL.sh" (Mac/Linux)

**Cause:** Script not executable

**Solution:**
```bash
chmod +x INSTALL.sh
./INSTALL.sh
```

---

### ❌ Installation takes too long

**Cause:** Network issue or slow disk

**Solutions:**
1. **Check internet connection**
   ```bash
   ping npm.js.org
   ```

2. **Use npm ci** (faster, more reliable)
   ```bash
   npm ci
   ```

3. **Try alternate npm registry**
   ```bash
   npm config set registry https://registry.npm.taobao.org
   npm install
   npm config set registry https://registry.npmjs.org
   ```

4. **Use yarn** (if installed)
   ```bash
   yarn install
   ```

---

## Development Server Issues

### ❌ "Error: listen EADDRINUSE :::3000"

**Cause:** Port 3000 already in use

**Solutions:**
1. **Use different port**
   ```bash
   npm run dev -- --port 3001
   ```

2. **Kill process using port 3000** (Windows PowerShell)
   ```powershell
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

3. **Kill process** (Mac/Linux)
   ```bash
   lsof -i :3000
   kill -9 <PID>
   ```

---

### ❌ "Cannot find module" error on startup

**Cause:** Dependencies not installed or missing file

**Solutions:**
1. **Verify dependencies installed**
   ```bash
   npm list
   ```

2. **Reinstall if needed**
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Check file exists**
   ```bash
   ls -la src/main.jsx
   ls -la src/App.jsx
   ```

---

### ❌ "Styles not loading" (blank page)

**Cause:** CSS processing issue

**Solutions:**
1. **Check index.html exists**
   ```bash
   cat index.html
   ```

2. **Verify Tailwind installed**
   ```bash
   npm list tailwindcss postcss
   ```

3. **Check index.css has Tailwind directives**
   ```bash
   cat src/index.css
   # Should start with @tailwind directives
   ```

4. **Restart dev server**
   ```bash
   # Press Ctrl+C to stop
   npm run dev
   ```

---

### ❌ "localhost:3000 refused to connect"

**Cause:** Dev server not running or wrong URL

**Solutions:**
1. **Check dev server output**
   ```bash
   npm run dev
   # Should show: ➜  Local:   http://localhost:3000/
   ```

2. **Try exact address shown**
   - Copy from terminal output
   - Some systems use 127.0.0.1 instead of localhost

3. **Check firewall** (Windows)
   - Allow Node.js through firewall
   - Or disable firewall temporarily

---

### ❌ Hot reload not working (changes don't show)

**Cause:** Vite cache issue or file watcher problem

**Solutions:**
1. **Clear Vite cache**
   ```bash
   rm -rf node_modules/.vite
   ```

2. **Restart dev server**
   ```bash
   # Press Ctrl+C
   npm run dev
   ```

3. **Check file is saved**
   - In VS Code: Check dot on file tab
   - Use Ctrl+S to force save

4. **Check Vite config** (vite.config.js)
   ```javascript
   export default {
     server: {
       watch: {
         usePolling: true,  // Add this for some systems
       }
     }
   }
   ```

---

## Page/Navigation Issues

### ❌ "Cannot find component" or page blank

**Cause:** Missing import or component file

**Solutions:**
1. **Check component exists**
   ```bash
   ls -la src/components/Navbar.jsx
   ls -la src/pages/HomePage.jsx
   ```

2. **Check imports in App.jsx**
   ```javascript
   import HomePage from './pages/HomePage';
   import Navbar from './components/Navbar';
   ```

3. **Check file names match exactly** (case-sensitive on Mac/Linux)
   - Should be `HomePage.jsx` not `homepage.jsx`
   - Should be `Navbar.jsx` not `navbar.jsx`

---

### ❌ Navigation links don't work

**Cause:** Routes not configured or Link component issue

**Solutions:**
1. **Check App.jsx routes**
   ```javascript
   <Route path="/about" element={<AboutPage />} />
   ```

2. **Check Navbar uses Link component**
   ```jsx
   import { Link } from 'react-router-dom';
   
   <Link to="/about">About</Link>
   ```

3. **Check BrowserRouter wraps app**
   ```jsx
   <BrowserRouter>
     <App />
   </BrowserRouter>
   ```

---

### ❌ Dark mode not working

**Cause:** Theme context not initialized or toggle broken

**Solutions:**
1. **Check ThemeContext.jsx exists**
   ```bash
   cat src/ThemeContext.jsx
   ```

2. **Verify Provider in App.jsx**
   ```jsx
   import { ThemeProvider } from './ThemeContext';
   
   return (
     <ThemeProvider>
       <BrowserRouter>
         {/* routes */}
       </BrowserRouter>
     </ThemeProvider>
   );
   ```

3. **Check toggle in Navbar.jsx**
   ```jsx
   import { useTheme } from './ThemeContext';
   const { theme, toggleTheme } = useTheme();
   ```

4. **Clear browser localStorage**
   - Open DevTools (F12)
   - Application → Local Storage
   - Delete `theme` key
   - Reload page

---

## Styling Issues

### ❌ Tailwind classes not working

**Cause:** Missing Tailwind configuration or directives

**Solutions:**
1. **Check tailwind.config.js**
   ```bash
   cat tailwind.config.js
   ```
   Should have:
   ```javascript
   export default {
     content: ['./index.html', './src/**/*.{js,jsx}'],
     // ...
   }
   ```

2. **Check index.css**
   ```bash
   head src/index.css
   ```
   Should start with:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. **Verify PostCSS config**
   ```bash
   cat postcss.config.js
   ```

4. **Restart dev server**
   ```bash
   npm run dev
   ```

---

### ❌ Classes only partially work (e.g., hover styles missing)

**Cause:** Purge configuration issue

**Solutions:**
1. **Check content paths in tailwind.config.js**
   ```javascript
   content: [
     './index.html',
     './src/**/*.{js,jsx}',  // Must include all files
   ]
   ```

2. **Restart dev server**
   ```bash
   npm run dev
   ```

---

### ❌ Custom fonts not loading

**Cause:** Missing font files or incorrect paths

**Solutions:**
1. **Check public folder**
   ```bash
   ls -la public/
   ```

2. **Use Google Fonts** (easier)
   ```html
   <!-- In index.html -->
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
   ```

3. **Add to tailwind.config.js**
   ```javascript
   theme: {
     fontFamily: {
       sans: ['Inter', 'sans-serif'],
     }
   }
   ```

---

## Build Issues

### ❌ "npm run build" fails

**Cause:** Code errors or missing dependencies

**Solutions:**
1. **Check for console errors**
   ```bash
   npm run build 2>&1 | head -50
   ```

2. **Verify all imports exist**
   ```bash
   npm run lint
   ```

3. **Check for syntax errors**
   - Search for: `console.log`, `debugger`, broken imports

4. **Try production build preview**
   ```bash
   npm run build
   npm run preview
   ```

---

### ❌ "dist folder empty" or "build successful but no files"

**Cause:** Vite output configuration issue

**Solution:**
Check `vite.config.js`:
```javascript
export default {
  build: {
    outDir: 'dist',  // Must be 'dist'
    emptyOutDir: true,
  }
}
```

---

### ❌ Production build too large

**Cause:** Large dependencies or unused code

**Solutions:**
1. **Check bundle size**
   ```bash
   npm install --save-dev vite-plugin-visualizer
   ```

2. **Add to vite.config.js**
   ```javascript
   import { visualizer } from 'vite-plugin-visualizer';
   
   export default {
     plugins: [visualizer()],
   }
   ```

3. **Remove unused dependencies**
   ```bash
   npm list --depth=0
   npm uninstall <package-name>
   ```

---

## Performance Issues

### ❌ Dev server slow or laggy

**Cause:** File watcher overwhelmed or too much processing

**Solutions:**
1. **Use polling** (edit vite.config.js)
   ```javascript
   server: {
     watch: {
       usePolling: true,
     }
   }
   ```

2. **Increase polling interval**
   ```javascript
   server: {
     watch: {
       usePolling: true,
       interval: 1000,
     }
   }
   ```

3. **Exclude node_modules from watch**
   ```javascript
   server: {
     watch: {
       ignored: ['**/node_modules/**'],
     }
   }
   ```

---

### ❌ Hot reload takes too long

**Cause:** Large component or too many dependencies

**Solutions:**
1. **Split large components**
   - Break HomePage.jsx into smaller components
   - Import smaller chunks

2. **Lazy load pages**
   ```jsx
   import { lazy } from 'react';
   const HomePage = lazy(() => import('./pages/HomePage'));
   ```

---

## Git & Deployment Issues

### ❌ "fatal: not a git repository"

**Cause:** Git not initialized

**Solution:**
```bash
git init
git add .
git commit -m "Initial commit"
```

---

### ❌ Cannot deploy to Vercel/Netlify

**Cause:** Missing build configuration or wrong root

**Solutions:**
1. **Create vercel.json**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist"
   }
   ```

2. **Check netlify.toml**
   ```toml
   [build]
   command = "npm run build"
   publish = "dist"
   ```

3. **Ensure Node version set**
   - Vercel: Project settings → Node.js Version
   - Netlify: Environment → Node version

---

## Getting Help

### Check These First
1. **Error message** - Search in this guide
2. **Browser console** - Open DevTools (F12)
3. **Terminal output** - Read full error message
4. **File exists** - Verify file path is correct
5. **Dependencies** - Run `npm list`

### Quick Diagnostics
```bash
# Check everything
node --version
npm --version
npm list --depth=0
npm run build
npm run dev
```

### Online Resources
- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **React Router:** https://reactrouter.com
- **npm Issues:** https://docs.npmjs.com/cli

---

## Still Stuck?

1. **Check GETTING_STARTED.md** for basic setup
2. **Review QUICK_START.md** for examples
3. **Search error message** in browser
4. **Check file structure** matches PROJECT_STRUCTURE.md
5. **Restart everything** - Terminal, VS Code, browser

---

**Last Resort:**
```bash
# Nuclear option - clean install
rm -rf node_modules package-lock.json
npm install
npm run dev
```

This fixes 95% of issues! 🚀
