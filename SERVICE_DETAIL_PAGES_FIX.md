# Service Detail Pages Fix - Complete Guide

## Problem Solved
You had many service detail pages in Sanity (11+ services), but only 5 were showing on the frontend because the page was only fetching `serviceItem` documents instead of `serviceDetailPage` documents.

## Changes Made

### 1. Updated Service Detail Page Schema
**File:** `sanity/schemaTypes/serviceDetailPage.ts`

Added three new fields to the serviceDetailPage schema:
- **category** (required): Categorize as 'drone', 'software', or 'education'
- **icon**: Icon name from Lucide icons library
- **order**: Display order within category (lower numbers appear first)

### 2. Added New Queries
**File:** `sanity/lib/queries.ts`

Added two new functions:
- `getAllServiceDetailPages()`: Fetches all active service detail pages
- `getServiceDetailPagesByCategory(category)`: Fetches services by specific category

### 3. Updated Services Page
**File:** `app/services/page.tsx`

- Now fetches service detail pages by category
- Transforms them to work with existing ServicesList component
- Automatically generates proper service URLs from slugs
- Falls back to serviceItem documents and then default data if needed

## Next Steps - Update Your Services in Sanity

### 1. Restart Sanity Studio
The schema has been updated, so you need to restart your Sanity Studio:

```bash
# In your terminal
cd d:\karven
pnpm dev
```

### 2. Categorize Each Service Detail Page

Go to each service detail page in Sanity Studio and add the required fields:

#### Drone Services (category: "Drone Services")
- **Drone Survey and Mapping**
  - Category: Drone Services
  - Icon: Map
  - Order: 1

- **Drone Surveillance & Videography**
  - Category: Drone Services
  - Icon: Video
  - Order: 2

- **Precision Spraying**
  - Category: Drone Services
  - Icon: Sprout (or Droplet)
  - Order: 3

- **Drone Delivery**
  - Category: Drone Services
  - Icon: Package
  - Order: 4

- **Drone-in-a-Box**
  - Category: Drone Services
  - Icon: Box
  - Order: 5

- **Hardware, Software & Firmware**
  - Category: Drone Services
  - Icon: Microchip
  - Order: 6

- **Data, GIS & Digital Solutions**
  - Category: Drone Services
  - Icon: BarChart3 (or Map)
  - Order: 7

#### Software Services (category: "AI & Software Services")
- **AI Software Development**
  - Category: AI & Software Services
  - Icon: Cpu
  - Order: 1

- **Learning Management Systems**
  - Category: AI & Software Services
  - Icon: BookOpen
  - Order: 2

Add any other software services you have...

#### Education Services (category: "Educational Services")
- **Educational Programs**
  - Category: Educational Services
  - Icon: GraduationCap
  - Order: 1

- **Advanced Educational Programs**
  - Category: Educational Services
  - Icon: GraduationCap
  - Order: 2

### 3. Verify in Frontend

After updating all services in Sanity:

1. Go to http://localhost:3000/services
2. You should now see all your services organized by category:
   - Drone Technology Services section
   - AI & Software Services section
   - Educational Programs section

## How It Works Now

### Data Flow
1. Services page loads → Fetches serviceDetailPage documents by category from Sanity
2. Each category (drone, software, education) gets its own list
3. Services are displayed in order within each category
4. Each service links to `/services/{slug}` automatically

### Priority Order
The system now uses this priority:
1. **First**: serviceDetailPage documents (if they have category assigned)
2. **Second**: serviceItem documents (legacy support)
3. **Last**: Default hardcoded services (fallback)

## Available Icons

Choose from these Lucide icons for your services:
- Camera, Video, Sprout, Package, Microchip, Box
- BarChart3, Radio, Cpu, Cloud, BookOpen, GraduationCap
- Plane, Server, Map, Ruler, Shield, Target, Zap, Droplet

## Service URL Structure

Each service will be accessible at:
- `/services/{slug}`

Examples:
- `/services/drone-survey-and-mapping`
- `/services/ai-software-development`
- `/services/educational-programs`

## Tips

1. **Order Numbers**: Use increments of 10 (10, 20, 30...) so you can easily insert services between existing ones later.

2. **Descriptions**: The service description shown in the list comes from:
   - `overview.description` field (primary)
   - `hero.subtitle` field (fallback)

3. **Active Status**: Only services with `isActive = true` will appear on the frontend.

4. **Testing**: After making changes in Sanity, the page will update within 60 seconds due to ISR (Incremental Static Regeneration).

## Troubleshooting

### Services not showing?
- Check that `isActive` is set to true
- Verify `category` field is populated
- Make sure `slug` is set

### Wrong order?
- Update the `order` field (lower numbers appear first)

### Missing description?
- Add text to `overview.description` field in Sanity

### Icon not displaying?
- Verify the icon name matches exactly (case-sensitive)
- Check that it's one of the available icons listed above

---

**Status**: ✅ All code changes complete. Now update your services in Sanity Studio to see them all on the frontend!
