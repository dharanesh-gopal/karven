# 🚀 Quick Start: Populate Services from Frontend to Sanity

## Why This Script?

You have many hardcoded service pages in `app/services/` folders, but they're not connected to Sanity. This makes it hard for your client to edit content.

This script will:
- ✅ **Delete all duplicates** in Sanity automatically
- ✅ **Populate 9 essential services** with real content from frontend
- ✅ **Properly categorize** all services (Drone/Software/Education)
- ✅ **Set icons and order** for perfect display
- ✅ **Make everything editable** in Sanity Studio for your client

## What Services Will Be Created?

### 🚁 Drone Services (7)
1. **Drone Survey and Mapping** - Aerial surveys, mapping, GIS
2. **Precision Spraying** - Agricultural drone spraying
3. **Drone Surveillance & Videography** - Security, events, inspections
4. **Drone Delivery** - Medical supplies, emergency response
5. **Hardware, Software & Firmware** - Custom drone development
6. **Drone-in-a-Box** - Automated deployment systems
7. **Data, GIS & Digital Solutions** - Data processing, digital twins

### 💻 Software Services (2)
1. **AI Software Development** - Machine learning, computer vision, NLP
2. **Learning Management Systems** - LMS platforms, e-learning

### 🎓 Education Services (1)
1. **Educational Programs** - Training, workshops, certifications

## How to Run

### Step 1: Make Sure You Have a Sanity API Token

Check your `.env.local` file for:
```bash
SANITY_API_TOKEN=your_token_here
```

If you don't have one:
1. Go to https://sanity.io/manage
2. Select your project → **API** → **Tokens**
3. Create token with **Editor** permissions
4. Add it to `.env.local`

### Step 2: Run the Seed Script

```bash
node scripts/seed-service-detail-pages.js
```

The script will:
1. 🗑️ Delete all existing service detail pages (including duplicates)
2. 🗑️ Delete old service items (legacy schema)
3. ✅ Create 9 essential services with complete content
4. ✅ Show summary of what was created

## What Happens After?

### Immediate Results:
- Visit `http://localhost:3000/services` - See all 9 services listed by category
- Click any service - See full detail page with content from frontend
- Go to Sanity Studio - Edit any service content easily

### Frontend Display:
```
Services Page:
├── Drone Technology Services (7 services)
├── AI & Software Services (2 services)
└── Educational Programs (1 service)

Each service links to:
/services/{slug} - Dynamic page rendered from Sanity
```

## Next Steps

### 1. Test Everything Works
```bash
# Visit these URLs to verify:
http://localhost:3000/services
http://localhost:3000/services/drone-survey-and-mapping
http://localhost:3000/services/ai-software-development
http://localhost:3000/services/educational-programs
```

### 2. Customize in Sanity Studio
Your client can now edit:
- Service titles and descriptions
- Solutions and features
- Icons and badges
- CTA buttons and links
- Add images for hero sections

### 3. Clean Up Old Folders (Optional)
Once you verify everything works, delete the old hardcoded folders:
```powershell
.\cleanup-old-service-pages.ps1
```

This removes the 12 old service folders. The dynamic `[slug]` route will handle everything.

## Content Structure

Each service includes:
- ✅ Hero section with badge, title, subtitle
- ✅ Overview section with description
- ✅ Solutions section (3-6 solutions with features)
- ✅ Key features section
- ✅ CTA section with button

All fully editable in Sanity Studio!

## Troubleshooting

### "SANITY_API_TOKEN is not defined"
- Add token to `.env.local`
- Restart dev server

### Services not showing on frontend?
- Wait 60 seconds for ISR revalidation
- Or restart Next.js dev server

### Want to customize services?
- Go to Sanity Studio → Service Detail Pages
- Edit any service
- Changes appear on frontend within 60 seconds

## Summary

**Before:** 
- 12+ hardcoded service folders
- Duplicates in Sanity
- Hard for client to edit

**After:**
- 9 essential services in Sanity
- All content editable in Studio
- Clean, organized structure
- Client-friendly CMS

**Run this:** `node scripts/seed-service-detail-pages.js`

That's it! 🎉
