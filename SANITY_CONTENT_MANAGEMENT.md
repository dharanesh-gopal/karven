# Sanity CMS Content Management Guide

## 📋 Overview

All website content is now manageable through Sanity CMS. This document explains the new schemas and how to use them.

## 🆕 New Sanity Schemas Created

### 1. Navbar Settings (`navbarSettings`)
**Purpose:** Manage navigation menu items, logos, and dropdown content

**Fields:**
- `isActive` - Enable/disable this configuration
- `logo` - Logo text and image path
- `mainMenu` - Main navigation items (Home, About, Services, etc.)
- `serviceDropdown` - Service dropdown menu items
- `trainingDropdown` - Training dropdown menu items

**Usage in Studio:**
1. Go to Sanity Studio → Navbar Settings
2. Add service items with title, href, description, icon name
3. Add training items similarly
4. Save and publish

**Icon Names (Lucide):**
- Cpu, Plane, BookOpen, Cloud, Server, GraduationCap, etc.
- Full list: https://lucide.dev/icons/

---

### 2. Service Detail Pages (`serviceDetailPage`)
**Purpose:** Manage individual service pages (Drone Survey, Cloud Services, etc.)

**Fields:**
- `slug` - URL path (e.g., "drone-survey-and-mapping")
- `title` - Service name
- `hero` - Hero section with badge, title, subtitle, background image
- `overview` - Overview section with title and description
- `solutions` - Array of solutions/features with icons and feature lists
- `keyFeatures` - Key features section with title, subtitle, and feature cards
- `useCases` - Use cases with images
- `process` - Process/workflow steps
- `technologies` - Technology stack
- `cta` - Call-to-action section
- `seo` - Meta title, description, keywords

**How to Create a New Service Page:**

1. **In Sanity Studio:**
   - Go to Service Detail Pages
   - Click "Create new Service Detail Page"
   - Fill in required fields:
     - Title: "Drone Survey and Mapping"
     - Slug: drone-survey-and-mapping
     - Set isActive to true
   
2. **Add Hero Section:**
   ```
   Badge: "Professional Surveying"
   Title: "Drone Survey and Mapping Services"
   Subtitle: "High-precision aerial surveys for construction, agriculture, and land management"
   ```

3. **Add Solutions:**
   Each solution needs:
   - ID: "base-map"
   - Icon: "Map"
   - Title: "Base Map Creation"
   - Description: "Detailed description..."
   - Features: ["Feature 1", "Feature 2", etc.]

4. **Add Key Features:**
   ```
   Title: "Why Choose Our Surveying Services"
   Features: [
     {
       icon: "Zap",
       title: "Fast Turnaround",
       description: "Get results in days, not weeks"
     }
   ]
   ```

5. **Add CTA:**
   ```
   Title: "Ready to Start Your Survey?"
   Description: "Contact us for a consultation"
   Button Text: "Get Started"
   Button Link: "/contact"
   ```

6. **Publish**

**Using the Template Component:**
```tsx
// app/services/[slug]/page.tsx
import ServiceDetailPageTemplate from '@/components/service-detail-template'

export default function ServicePage({ params }: { params: { slug: string } }) {
  return <ServiceDetailPageTemplate slug={params.slug} />
}
```

---

### 3. Legal Pages (`legalPage`)
**Purpose:** Manage Terms of Service and Privacy Policy pages

**Fields:**
- `pageType` - "terms" or "privacy"
- `isActive` - Enable/disable
- `lastUpdated` - Date of last update
- `hero` - Hero section
- `introduction` - Introductory text
- `sections` - Content sections with rich text
- `contactInfo` - Contact details for legal inquiries

**Creating Terms/Privacy Pages:**

1. **In Sanity Studio:**
   - Go to Legal Pages
   - Create new document
   - Select Page Type: "Terms of Service" or "Privacy Policy"
   
2. **Add Sections:**
   ```
   Section 1:
   - Title: "1. Acceptance of Terms"
   - Content: [Rich text with bullet points, paragraphs]
   
   Section 2:
   - Title: "2. User Responsibilities"
   - Content: [More content]
   - Subsections: [Optional nested sections]
   ```

3. **Contact Info:**
   ```
   Email: legal@karvensen.com
   Phone: +91 123 456 7890
   Address: Your company address
   ```

**Example Usage:**
```tsx
// app/terms/page.tsx
'use client'
import { useSanityData } from '@/hooks/useSanityData'
import { PortableText } from '@portabletext/react'

export default function TermsPage() {
  const { data } = useSanityData(
    `*[_type == "legalPage" && pageType == "terms" && isActive == true][0]`,
    {},
    null
  )
  
  return (
    <div className="container mx-auto py-20">
      <h1>{data?.hero?.title}</h1>
      {data?.sections?.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <PortableText value={section.content} />
        </div>
      ))}
    </div>
  )
}
```

---

## 📊 Content Status Overview

### ✅ Fully Managed by Sanity:
- Homepage (Hero, Gallery, How We Work, Testimonials, CTA)
- About Page (Complete)
- Contact Page (Complete)
- Training Page (Complete)
- Careers Page (Complete)
- Footer Settings
- Blog Posts
- Navigation Menu (NEW)

### 🆕 New Schemas Ready to Use:
- Navbar Settings
- Service Detail Pages
- Legal Pages (Terms & Privacy)

### 📝 Pages That Need Content Migration:

#### Service Detail Pages (Need data entry in Sanity):
1. `/services/drone-survey-and-mapping` - Use serviceDetailPage schema
2. `/services/cloud-services` - Use serviceDetailPage schema
3. `/services/precision-spraying` - Use serviceDetailPage schema
4. `/services/drone-delivery` - Use serviceDetailPage schema
5. `/services/learning-management-systems` - Use serviceDetailPage schema
6. `/services/educational-programs` - Use serviceDetailPage schema
7. `/services/advanced-educational-programs` - Use serviceDetailPage schema
8. `/services/drone-surveillance-and-videography` - Use serviceDetailPage schema
9. `/services/data-gis-digital-solutions` - Use serviceDetailPage schema
10. `/services/hardware-software-firmware` - Use serviceDetailPage schema
11. `/services/ai-software-development` - Use serviceDetailPage schema
12. `/services/drone-in-a-box` - Use serviceDetailPage schema

#### Legal Pages (Need data entry):
1. `/terms` - Use legalPage schema with pageType: "terms"
2. `/privacy` - Use legalPage schema with pageType: "privacy"

---

## 🎯 Next Steps

### 1. Immediate Actions:

**a) Add Navbar Configuration:**
```
Studio → Create Navbar Settings:
- Add your service dropdown items
- Add training dropdown items
- Set logo path
- Activate it
```

**b) Migrate Service Pages:**
For each service (e.g., Drone Survey):
1. Go to Sanity Studio → Service Detail Pages → Create
2. Copy content from existing page
3. Fill in all sections
4. Update the page component to use ServiceDetailPageTemplate

**c) Create Legal Pages:**
1. Go to Legal Pages → Create Terms of Service
2. Add all sections
3. Create Privacy Policy similarly
4. Update page components to fetch from Sanity

### 2. Component Updates Needed:

**Update existing service pages to use template:**
```tsx
// app/services/drone-survey-and-mapping/page.tsx
import ServiceDetailPageTemplate from '@/components/service-detail-template'

export default function DroneSurveyPage() {
  return <ServiceDetailPageTemplate slug="drone-survey-and-mapping" />
}
```

### 3. Testing Checklist:

- [ ] Navbar displays correctly with Sanity data
- [ ] Service pages load from Sanity
- [ ] Terms and Privacy pages render correctly
- [ ] All images display properly
- [ ] SEO metadata is applied
- [ ] Mobile responsiveness works
- [ ] Search engines can index pages

---

## 🔧 Technical Details

### Component Files Updated:
- ✅ `components/navbar.tsx` - Now fetches from Sanity
- ✅ `components/service-detail-template.tsx` - New reusable template

### New Schema Files:
- ✅ `sanity/schemaTypes/navbarSettings.ts`
- ✅ `sanity/schemaTypes/serviceDetailPage.ts`
- ✅ `sanity/schemaTypes/legalPage.ts`
- ✅ `sanity/schemaTypes/index.ts` - Updated with new schemas

### Hooks Used:
- `useSanityData` - For fetching Sanity content
- Provides loading states and fallback data

---

## 💡 Best Practices

1. **Always set isActive flag** - Allows drafting content without publishing
2. **Use order fields** - Control display order of items
3. **Fill SEO fields** - Important for search engine visibility
4. **Test on preview** - Use Sanity's preview feature before publishing
5. **Keep fallback data** - Ensures site works even if CMS fails
6. **Use descriptive slugs** - SEO-friendly URLs
7. **Optimize images** - Use Sanity's image optimization
8. **Update lastUpdated dates** - For legal pages especially

---

## 🚀 Quick Reference

### Access Sanity Studio:
```
http://localhost:3000/studio
```

### Query Examples:

**Get Active Navbar:**
```groq
*[_type == "navbarSettings" && isActive == true][0]{
  logo,
  serviceDropdown[] | order(order asc),
  trainingDropdown[] | order(order asc)
}
```

**Get Service Page:**
```groq
*[_type == "serviceDetailPage" && slug.current == $slug && isActive == true][0]
```

**Get Terms Page:**
```groq
*[_type == "legalPage" && pageType == "terms" && isActive == true][0]
```

---

## 📞 Support

If you need help:
1. Check Sanity docs: https://www.sanity.io/docs
2. Check this guide for examples
3. Test queries in Studio's Vision tool
4. Review existing schemas for patterns

---

## ✅ Summary

You now have:
- ✅ Complete control over navbar content
- ✅ Template system for service pages
- ✅ Legal pages manageable in CMS
- ✅ All major page content in Sanity
- ✅ Consistent content management across entire site

Next: Start migrating content from hardcoded pages into Sanity Studio!
