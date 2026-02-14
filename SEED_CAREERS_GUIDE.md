# Seed Careers Page Data Guide

## ✅ What This Does

The seed script `scripts/seed-careers-page.js` will populate your Sanity CMS with all the careers page data from your frontend, including:

1. **Career Section Headers** - All titles, badges, and descriptions
2. **Career Opportunities** - Global Exposure, Continuous Growth, Stability & Innovation
3. **Career Policy Modal Content** - Employee benefits and policies
4. **Talent Network Modal** - Modal content for the talent network form
5. **Career Hero** - Hero section content

## 🔧 Setup Steps

### 1. Get Your Sanity API Token

1. Go to [https://sanity.io/manage](https://sanity.io/manage)
2. Select your project: **KarVenSen**
3. Click on **API** in the left sidebar
4. Click **Add API Token**
5. Configure:
   - **Name:** `Seed Script Token` (or any name)
   - **Permissions:** Select **Editor** (required for creating/updating documents)
6. Click **Create**
7. **Copy the token** (you won't see it again!)

### 2. Add Token to .env.local

Open `d:\karven\.env.local` and add/update:

```bash
SANITY_API_TOKEN=your-token-here
```

Make sure you also have:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Run the Seed Script

```bash
node scripts/seed-careers-page.js
```

## 📊 Expected Output

```
🚀 Starting careers page seed...

📊 Current State:
   - Section Headers: ❌ Missing
   - Career Opportunities: 0 items
   - Policy Content: ❌ Missing
   - Talent Modal: ❌ Missing
   - Career Hero: ❌ Missing

📝 Creating/Updating Career Section Headers...
   ✅ Created Career Section Headers

📝 Creating Career Opportunities...
   ✅ Created: Global Exposure
   ✅ Created: Continuous Growth
   ✅ Created: Stability & Innovation

📝 Creating/Updating Career Policy Content...
   ✅ Created Career Policy Content

📝 Creating/Updating Talent Network Modal...
   ✅ Created Talent Network Modal

📝 Creating/Updating Career Hero...
   ✅ Created Career Hero

🎉 Success! All careers page content has been seeded.

📌 Next steps:
   1. Go to Sanity Studio: http://localhost:3000/studio
   2. Navigate to 💼 Careers Page
   3. Upload images where needed
   4. Review and publish all changes
```

## 🖼️ Post-Seed Tasks

After seeding, you need to manually upload images in Sanity Studio:

### Go to: Careers Page → Career Section Headers

1. **Hero Section** → Upload background image
2. **Values Section** → Upload 2 decorative images

### Optional: Career Opportunities

Upload images for each opportunity item if desired.

## 🔄 Re-running the Script

The script is **safe to re-run**. It will:
- **Update** existing singleton documents (Section Headers, Policy Content, etc.)
- **Skip** creating duplicate Career Opportunities if they already exist

## 🐛 Troubleshooting

### Error: "Unauthorized - Session does not match project host"
✅ **Solution:** Check that your `SANITY_API_TOKEN` in `.env.local` is correct and has Editor permissions

### Error: "Schema not found"
✅ **Solution:** Make sure all schemas are registered in `sanity/schemaTypes/index.ts`

### Script runs but no data appears
✅ **Solution:** Check the Sanity Studio → Vision tab and query:
```groq
*[_type == "careerSectionHeaders"][0]
```

## 📝 Data Structure Overview

```
Sanity Database (Cloud)
├── careerSectionHeaders (singleton)
│   ├── heroSection
│   ├── valuesSection
│   ├── hiringProcessSection
│   ├── testimonialsSection
│   ├── benefitsSection
│   ├── jobOpeningsSection
│   └── talentNetworkCTA
│
├── careerOpportunity (3 documents)
│   ├── Global Exposure
│   ├── Continuous Growth
│   └── Stability & Innovation
│
├── careerPolicyContent (singleton)
│   └── sections (array of policy items)
│
├── talentNetworkModal (singleton)
│   └── form fields and success messages
│
└── careerHero (singleton)
    └── hero content
```

## ✨ Next: Fetch Data in Frontend

After seeding, your frontend will automatically fetch this data using the existing hooks in `app/careers/page.tsx`.

No frontend code changes needed! 🎉
