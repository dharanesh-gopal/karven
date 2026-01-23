# 🎨 Complete Sanity CMS Guide for Karven Project

## 📚 Table of Contents
1. [What is Sanity?](#what-is-sanity)
2. [How Sanity Works](#how-sanity-works)
3. [Project Setup Status](#project-setup-status)
4. [Working with Sanity Studio](#working-with-sanity-studio)
5. [Fetching Data in Frontend](#fetching-data-in-frontend)
6. [Complete Examples](#complete-examples)
7. [Deployment Guide](#deployment-guide)

---

## 🤔 What is Sanity?

Sanity is a **headless CMS** (Content Management System) that allows you to:
- ✅ Edit content through a user-friendly Studio interface
- ✅ Store content in the cloud (no database setup needed)
- ✅ Fetch content via API in your Next.js app
- ✅ Handle images/videos with automatic optimization
- ✅ Manage content without touching code

### The Power of Sanity
- **No more hardcoded content** - Update text/images without redeploying
- **CDN-powered** - Lightning-fast content delivery worldwide
- **Real-time updates** - Changes appear instantly
- **Image optimization** - Automatic resizing, compression, WebP conversion
- **Version control** - Track content changes over time

---

## 🔄 How Sanity Works

```
┌─────────────────┐      ┌──────────────┐      ┌─────────────────┐
│  Sanity Studio  │ ───> │ Sanity Cloud │ <─── │ Your Next.js    │
│  (Content Edit) │      │  (Database)  │      │  Website        │
└─────────────────┘      └──────────────┘      └─────────────────┘
     (localhost:3000/studio)                      (Fetches Data)
```

### The Workflow:
1. **Create Schemas** (Already done! ✅)
   - Define content structure (e.g., Hero Section needs title, subtitle, CTA)
   - Located in `sanity/schemaTypes/`

2. **Access Sanity Studio** (Built-in!)
   - Go to `http://localhost:3000/studio`
   - Login with your Sanity account
   - Add/edit content visually

3. **Fetch Data in Frontend**
   - Use custom hooks or server-side fetching
   - Display content on your website
   - Automatic caching for performance

---

## ✅ Project Setup Status

### Already Configured:
- ✅ Sanity project created (ID: `qyxjb4t2`)
- ✅ Dataset: `production`
- ✅ Sanity Studio mounted at `/studio` route
- ✅ All schemas created:
  ```
  ✓ heroSection - Homepage hero
  ✓ feature - Features grid
  ✓ stats - Statistics boxes
  ✓ processStep - How we work steps
  ✓ ctaSection - Call-to-action banners
  ✓ service - Services pages
  ✓ blog - Blog posts (existing)
  ✓ training - Training courses
  ✓ testimonial - Client reviews
  ✓ contactInfo - Contact details
  ✓ siteSettings - Global settings
  ```

### New Tools Created:
- ✅ `hooks/useSanityData.ts` - Easy data fetching
- ✅ `hooks/fetchSanityData.ts` - Server-side fetching

---

## 🎨 Working with Sanity Studio

### Step 1: Start Development Server
```bash
pnpm dev
```

### Step 2: Access Studio
Open browser: `http://localhost:3000/studio`

### Step 3: Login
- Click "Login" button
- Use your Sanity account credentials
- First time? Create account at sanity.io

### Step 4: Add Content
1. Click on document type (e.g., "Hero Section")
2. Click "Create new"
3. Fill in fields:
   - **Title**: "Pioneering Innovation in Drone Technology"
   - **Subtitle**: "Leading the future with cutting-edge..."
   - **CTA Text**: "Get Started"
   - **CTA Link**: "/contact"
4. Upload images/videos directly
5. Click "Publish" (green button)

### Step 5: Edit Existing Content
- Click on document to edit
- Make changes
- Click "Publish" to save

---

## 🔌 Fetching Data in Frontend

### Method 1: Client Component (with loading states)

```typescript
'use client'
import { useSanityData } from '@/hooks/useSanityData'

interface HeroSection {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

export default function HeroSection() {
  const { data, loading, error } = useSanityData<HeroSection>(
    '*[_type == "heroSection" && isActive == true][0]'
  )

  if (loading) return <div>Loading...</div>
  if (error || !data) return <div>Error loading content</div>

  return (
    <section>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
      <a href={data.ctaLink}>{data.ctaText}</a>
    </section>
  )
}
```

### Method 2: Server Component (faster, SEO-friendly)

```typescript
import { fetchSanityData } from '@/hooks/useSanityData'

interface Feature {
  title: string
  description: string
  icon: string
  order: number
}

export default async function FeaturesSection() {
  const features = await fetchSanityData<Feature[]>(
    '*[_type == "feature" && isActive == true] | order(order asc)'
  )

  if (!features) return <div>No features available</div>

  return (
    <section>
      {features.map((feature) => (
        <div key={feature.title}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  )
}
```

### Method 3: Fetching Images (with optimization)

```typescript
import { useSanityData } from '@/hooks/useSanityData'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

export default function HeroWithImage() {
  const { data } = useSanityData<any>(
    '*[_type == "heroSection"][0]{ title, backgroundImage }'
  )

  if (!data) return null

  return (
    <section>
      <img 
        src={urlFor(data.backgroundImage)
          .width(1920)
          .height(1080)
          .quality(90)
          .format('webp')
          .url()} 
        alt={data.title}
      />
      <h1>{data.title}</h1>
    </section>
  )
}
```

---

## 📝 Complete Examples

### Example 1: Homepage Hero Section

**Schema** (already created): `sanity/schemaTypes/heroSection.ts`

**Component** (needs update):
```typescript
'use client'
import { useSanityData } from '@/hooks/useSanityData'

interface HeroData {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

// Fallback data in case Sanity is down
const fallbackData: HeroData = {
  title: 'Pioneering Innovation in Drone Technology',
  subtitle: 'Leading the future with cutting-edge AI solutions...',
  ctaText: 'Get Started',
  ctaLink: '/contact',
}

export default function HeroSection() {
  const { data, loading } = useSanityData<HeroData>(
    '*[_type == "heroSection" && isActive == true][0]',
    {},
    fallbackData // Will use this if Sanity fails
  )

  const content = data || fallbackData

  return (
    <section className="hero">
      <h1>{content.title}</h1>
      <p>{content.subtitle}</p>
      <a href={content.ctaLink}>{content.ctaText}</a>
      {content.secondaryCtaText && (
        <a href={content.secondaryCtaLink}>{content.secondaryCtaText}</a>
      )}
    </section>
  )
}
```

### Example 2: Features Grid

```typescript
import { fetchSanityData } from '@/hooks/useSanityData'

interface Feature {
  _id: string
  title: string
  description: string
  icon: string
  order: number
}

export default async function FeaturesSection() {
  const features = await fetchSanityData<Feature[]>(
    `*[_type == "feature" && isActive == true] | order(order asc) {
      _id,
      title,
      description,
      icon,
      order
    }`
  )

  if (!features || features.length === 0) {
    return <div>No features to display</div>
  }

  return (
    <section className="features-grid">
      {features.map((feature) => (
        <div key={feature._id} className="feature-card">
          <div className="icon">{/* Render icon */}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  )
}
```

---

## 🚀 Deployment Guide

### 1. Deploy Sanity Schemas (First Time)
```bash
# Navigate to your project
cd d:\karven

# Deploy schemas to Sanity Cloud
npx sanity schema deploy
```

### 2. Add Content in Studio
1. Go to `http://localhost:3000/studio`
2. Add content for each schema type
3. Publish all changes

### 3. Update Components
- Replace hardcoded content with Sanity fetching
- Add loading states
- Add fallback data

### 4. Deploy to Vercel
```bash
git add .
git commit -m "Integrated Sanity CMS"
git push origin main
```

### 5. Set Environment Variables on Vercel
In Vercel dashboard:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = `qyxjb4t2`
- `NEXT_PUBLIC_SANITY_DATASET` = `production`

---

## 🔍 GROQ Query Examples

GROQ is Sanity's query language (like SQL for Sanity):

```typescript
// Get single document
'*[_type == "heroSection"][0]'

// Get all active features, sorted
'*[_type == "feature" && isActive == true] | order(order asc)'

// Get blog posts with author details
`*[_type == "blog"] {
  title,
  slug,
  author->{
    name,
    bio
  }
}`

// Get specific fields only
'*[_type == "stats"]{_id, label, value, order}'

// Search by keyword
'*[_type == "blog" && title match "drone*"]'
```

---

## 🎯 Next Steps

### Phase 1: Add Initial Content (15 min)
1. Start dev server: `pnpm dev`
2. Go to `localhost:3000/studio`
3. Add one Hero Section document
4. Add 3-4 Features
5. Add 3-4 Stats

### Phase 2: Update Homepage (30 min)
1. Update `components/hero-section.tsx` to fetch from Sanity
2. Update `components/features-section.tsx` to fetch features
3. Update `components/stats-section.tsx` to fetch stats
4. Test with `pnpm dev`

### Phase 3: Deploy Schemas
```bash
npx sanity schema deploy
```

### Phase 4: Update Other Pages
- Services pages
- About page
- Training page
- Blog (already using Sanity!)
- Contact info

### Phase 5: Production Deployment
```bash
git add .
git commit -m "Sanity CMS integration complete"
git push origin main
```

---

## 💡 Pro Tips

1. **Always add fallback data** - Your site won't break if Sanity is down
2. **Use Server Components when possible** - Better performance and SEO
3. **Optimize images** - Use `imageUrlBuilder` with specific dimensions
4. **Test in Studio first** - Add content before updating components
5. **Deploy schemas before adding content** - Run `npx sanity schema deploy`
6. **Use TypeScript interfaces** - Type-safe data fetching
7. **Check loading states** - Better UX while content loads

---

## 🆘 Common Issues

### Issue: "Client is not defined"
**Solution**: Make sure `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `.env.local`

### Issue: Studio shows "Login required"
**Solution**: Click login button, use your Sanity account

### Issue: Data not appearing
**Solution**: 
1. Check if content is published (not draft)
2. Verify `isActive == true` in query
3. Check browser console for errors

### Issue: Images not loading
**Solution**: Use `imageUrlBuilder` and call `.url()` at the end

---

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Reference](https://www.sanity.io/docs/groq)
- [Next.js + Sanity Guide](https://www.sanity.io/docs/nextjs)
- [Image URL Builder](https://www.sanity.io/docs/image-url)

---

**Ready to start?** Let's update your first component to use Sanity! 🚀
