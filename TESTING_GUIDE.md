# Quick Testing Guide - Karvensen Redesign

## How to Test the Redesigned Website Locally

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager
- Git (optional)

### Step 1: Navigate to Project
```cmd
cd d:\karven
```

### Step 2: Install Dependencies (if needed)
```cmd
npm install
```

### Step 3: Start Development Server
```cmd
npm run dev
```

Once running, open your browser to: **http://localhost:3000**

### Step 4: Verify Changes

#### ✅ Navigation Bar
- [ ] Home, About, Services, Training, Blog, Careers, Contact buttons visible
- [ ] Buttons have NO background color (light mode)
- [ ] Buttons have NO background color (dark mode)
- [ ] Buttons have text only with hover effect
- [ ] Hover effect changes text color only (not background)
- [ ] Buttons are aligned to the RIGHT side of navbar
- [ ] Mobile menu (hamburger icon) opens with same styled links

#### ✅ Hero Section
- [ ] Large headline: "Transforming Industries Through Drone Innovation"
- [ ] Subtext: "Pioneering integrated UAV solutions..."
- [ ] 3 CTA buttons:
  1. "Explore Products" (blue button)
  2. "Get Certified Training" (outline button)
  3. "Contact Us" (outline button)
- [ ] All buttons navigate to correct pages when clicked
- [ ] Particle animations visible in background
- [ ] Stats section shows: Founded, Drones Deployed, Workshops, Enterprise Clients

#### ✅ Features Section
- [ ] Section title: "Core Service Offerings"
- [ ] Exactly 4 service cards visible (NOT 6):
  1. AI Software Development
  2. Agricultural Drone Systems
  3. LMS Solutions
  4. Educational Programs
- [ ] ERP Systems card is GONE
- [ ] Cloud Infrastructure card is GONE
- [ ] Cards have good spacing between them
- [ ] Cards are in 4-column layout on large screens
- [ ] Cards stack to 2-column on tablets
- [ ] Cards stack to 1-column on mobile

#### ✅ Why Choose Section
- [ ] Good spacing between title and content
- [ ] 4 value cards visible with icons
- [ ] Text is readable in both light and dark modes
- [ ] Cards have hover effect

#### ✅ Testimonials Section
- [ ] 3 testimonial cards visible
- [ ] Cards have proper spacing
- [ ] Author names and roles visible
- [ ] Text is readable in both modes

#### ✅ CTA Section
- [ ] Title: "Ready to Transform Your Industry?"
- [ ] 2 buttons: "Schedule Consultation" and "Explore Products"
- [ ] Buttons work correctly
- [ ] Good spacing around all elements

#### ✅ Dark Mode Toggle
- [ ] Sun/Moon icon visible in top right
- [ ] Click to toggle between light and dark modes
- [ ] All content remains readable in both modes
- [ ] No color contrast issues

#### ✅ Responsive Design
Test on different screen sizes:
- [ ] Mobile (375px width)
- [ ] Tablet (768px width)
- [ ] Desktop (1200px+ width)
- Verify padding increases at each breakpoint
- Check that navigation works on all sizes

### Step 5: Build for Production (Optional)
```cmd
npm run build
```

This creates an optimized production build. Check for:
- [ ] Build completes without errors
- [ ] Output shows successful compilation
- [ ] No warnings about unused code

### Step 6: Common Issues & Solutions

**Issue: PowerShell Execution Policy Error**
```
Error: "File ...npm.ps1 cannot be loaded because running scripts is disabled"
```
**Solution**: Use CMD instead of PowerShell, or run:
```cmd
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Issue: Port 3000 Already in Use**
```
Error: "Port 3000 is already in use"
```
**Solution**: Kill the existing process or use a different port:
```cmd
npm run dev -- --port 3001
```

**Issue: Module Not Found**
```
Error: "Cannot find module '@/components/...'"
```
**Solution**: Ensure `d:\karven` is the correct working directory and run:
```cmd
npm install
```

### Step 7: Manual Testing Checklist

Print this and check off as you test:

```
NAVIGATION
[ ] Home button - no background, right-aligned, text hover
[ ] About button - no background, right-aligned, text hover
[ ] Services dropdown - opens correctly, no background
[ ] Training dropdown - opens correctly, no background
[ ] Blog link - no background, right-aligned, text hover
[ ] Careers link - no background, right-aligned, text hover
[ ] Contact link - no background, right-aligned, text hover
[ ] Theme toggle - Sun/Moon icon works
[ ] Mobile menu - hamburger opens, all links work

HERO SECTION
[ ] Headline reads "Transforming Industries Through Drone Innovation"
[ ] Subtext mentions UAV solutions
[ ] "Explore Products" button works
[ ] "Get Certified Training" button works
[ ] "Contact Us" button works
[ ] Badge text updated
[ ] Particle animation visible
[ ] Stats section visible

FEATURES
[ ] Shows exactly 4 service cards
[ ] NO ERP Systems card
[ ] NO Cloud Infrastructure card
[ ] Title is "Core Service Offerings"
[ ] Cards have good spacing (gap-8)
[ ] 4-column layout on desktop

WHY CHOOSE
[ ] 4 value proposition cards visible
[ ] Highlights list readable
[ ] Good vertical spacing

TESTIMONIALS
[ ] 3 testimonial cards visible
[ ] Author info readable
[ ] Quote visible

CTA SECTION
[ ] Title updated to "Ready to Transform Your Industry?"
[ ] 2 buttons with correct text
[ ] Buttons are clickable

DARK MODE
[ ] All text readable in light mode
[ ] All text readable in dark mode
[ ] No glitchy color changes
[ ] Transitions smooth

RESPONSIVE
[ ] Mobile (narrow): stacked layout, readable
[ ] Tablet (medium): proper 2-column grids
[ ] Desktop (wide): 4-column feature grid, proper spacing
```

### Step 8: Performance Check

In browser DevTools (F12):
1. **Lighthouse**: Run Audit (should be 90+ on all metrics)
2. **Network**: Check page loads quickly (<3 seconds)
3. **Accessibility**: Ensure keyboard navigation works
4. **Responsive**: Test different device sizes

### Troubleshooting Help

If something doesn't look right:

1. **Clear cache**: 
   ```cmd
   Ctrl+Shift+Delete
   ```
   Then hard refresh: `Ctrl+F5`

2. **Check file changes**:
   - Open `components/navbar.tsx` - verify no `bg-background`
   - Open `components/features-section.tsx` - verify only 4 services
   - Open `components/hero-section.tsx` - verify new headline

3. **Verify CSS classes**:
   - Look for `hover:text-primary` in navbar
   - Look for `py-32 md:py-40 lg:py-48` in sections
   - Look for `lg:grid-cols-4` in features

4. **Check console** (F12 → Console tab):
   - Should have no red errors
   - Warnings are usually safe
   - Log any unexpected behavior

### When Testing is Complete

Once all checks pass:
1. ✅ Changes are verified
2. ✅ Website is production-ready
3. ✅ Ready to deploy to Vercel or hosting platform

**Commit changes** (if using Git):
```cmd
git add .
git commit -m "feat: Redesign website to match DroneAcharya style"
git push origin main
```

---

**Testing Duration**: ~15-20 minutes
**Difficulty**: Easy (mostly visual verification)
**Support**: Check REDESIGN_CHANGES.md for detailed technical info
