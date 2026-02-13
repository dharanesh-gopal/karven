# Services Page - Complete Sanity CMS Setup Guide

## Overview
The Services Page is **FULLY integrated** with Sanity CMS. Every text, image, button, and badge can be edited through Sanity Studio. This guide shows you how to set up all the content.

## ✅ What's Already Integrated

The Services Page has complete Sanity integration for:
- ✅ Hero section (title, subtitle)
- ✅ Drone Services section (title, image, badges, links)
- ✅ AI & Software section (title, image, badges, links)
- ✅ Educational Programs section (title, image, badges, links)
- ✅ CTA section (title, description, button text, trust indicators)
- ✅ SEO metadata

## Setup Instructions

### 1. Access Sanity Studio
Navigate to `http://localhost:3000/studio` or your deployed Sanity Studio

### 2. Create Services Page Document
1. Click **"Create"** button
2. Select **"Services Page"** from document types
3. Fill in all fields as shown below:

---

## Hero Section

**Title:**
```
Our Services
```

**Subtitle:**
```
Diversified expertise across critical industries.
```

---

## Drone Services Section

**Section Title:**
```
Drone Technology Services
```

**Section Image:**
- Upload an image showing drone operations (aerial survey, drone in field, etc.)

**Image Alt Text:**
```
Professional drone operator conducting aerial survey at sunset
```

**Image Overlay Title:**
```
Premier Consultancy for Drone Projects
```

**Image Link:**
```
/contact?enquiry=drone-services
```

**Badge 1 Label:**
```
Premium
```

**Badge 1 Text:**
```
Drone Tech
```

**Badge 2 Label:**
```
Certified
```

**Badge 2 Text:**
```
Excellence
```

---

## AI & Software Services Section

**Section Title:**
```
AI & Software Services
```

**Section Image:**
- Upload an image showing software development, AI technology, coding workspace

**Image Alt Text:**
```
AI and Software Development workspace with modern technology
```

**Image Overlay Title:**
```
Cutting-Edge AI & Software Solutions
```

**Image Link:**
```
/contact?enquiry=software-services
```

**Badge 1 Label:**
```
Advanced
```

**Badge 1 Text:**
```
AI Solutions
```

**Badge 2 Label:**
```
Proven
```

**Badge 2 Text:**
```
Results
```

---

## Educational Programs Section

**Section Title:**
```
Educational Programs
```

**Section Image:**
- Upload an image showing training session, classroom, students learning

**Image Alt Text:**
```
Students learning drone technology and programming
```

**Image Overlay Title:**
```
Empowering Through Education & Training
```

**Image Link:**
```
/contact?enquiry=training
```

**Badge 1 Label:**
```
Expert
```

**Badge 1 Text:**
```
Training
```

**Badge 2 Label:**
```
Certified
```

**Badge 2 Text:**
```
Programs
```

---

## CTA (Call-to-Action) Section

**Title:**
```
Ready to Transform Your Business?
```

**Description:**
```
Let's discuss how our drone technology and AI solutions can help you achieve your goals and stay ahead of the competition.
```

**Button Text:**
```
Schedule a Consultation
```

**Button Link:**
```
/contact?enquiry=services
```

**Trust Indicators:**
Add three items:
1. Text: `1500+ Pilots Trained`
2. Text: `40+ UAV Surveys`
3. Text: `Industry Leading`

---

## SEO Settings

**Meta Title:**
```
Our Services - Drone Technology & AI Solutions | KarVenSen
```

**Meta Description:**
```
Explore our comprehensive range of drone technology services, AI software development, and educational programs. Industry-leading solutions for modern businesses.
```

---

## 3. Publish the Document
Click **"Publish"** to make your changes live on the website.

---

## What You Can Edit

### Hero Section
- Main page title
- Subtitle/tagline

### Each Service Category Section (Drone, Software, Education)
- **Section title** - The heading above service cards
- **Feature image** - Large visual image
- **Image alt text** - For accessibility
- **Image overlay title** - Text shown on image hover
- **Image link** - Where clicking the image takes users
- **Badge 1 & 2** - Decorative floating badges with label + text

### CTA Section
- **Title** - Main call-to-action heading
- **Description** - Supporting text
- **Button text** - CTA button label
- **Button link** - Where the button goes
- **Trust indicators** - Bullet points with checkmarks

### Individual Services
The individual service items (like "Drone Survey and Mapping", "AI Software Development") are managed through the **Service Item** document type, not the Services Page document.

---

## Image Recommendations

### Drone Services Section Image
- Show: Drone in operation, aerial survey, professional operator
- Style: Professional, outdoor, technology-focused
- Dimensions: 800x600px (minimum)

### Software Services Section Image
- Show: Coding, AI technology, modern workspace, tech team
- Style: Clean, modern, tech-focused
- Dimensions: 800x600px (minimum)

### Education Section Image
- Show: Training session, classroom, students, learning
- Style: Engaging, educational, professional
- Dimensions: 800x600px (minimum)

---

## Frontend Behavior

### Fallback Content
If Sanity data isn't available, the page will display default placeholder content to ensure the site always works.

### Image Handling
- If no image is uploaded, fallback to Unsplash stock images
- Images are optimized automatically through Next.js Image component
- Proper alt text ensures accessibility

### Real-time Updates
- Changes in Sanity Studio appear on the live site within ~60 seconds
- Uses Incremental Static Regeneration (ISR) for performance

---

## Troubleshooting

### Changes not appearing?
1. Ensure document is **Published** (not just saved as draft)
2. Wait 60 seconds for ISR revalidation
3. Clear browser cache and refresh
4. Check that all required fields are filled

### Images not showing?
1. Verify images are uploaded in Sanity Studio
2. Check image file size (should be reasonable, < 5MB)
3. Ensure image has alt text filled in

### Missing sections?
1. Check that you're editing the correct document type: "Services Page"
2. Ensure all nested fields within sections are filled
3. Verify the document ID matches what the frontend expects

---

## Next Steps

After setting up the Services Page:
1. **Test each section** - Verify all content displays correctly
2. **Upload images** - Replace Unsplash placeholders with custom images
3. **Customize text** - Adjust copy to match your brand voice
4. **Update links** - Ensure all buttons and images link to correct pages
5. **Set up Service Items** - Create individual service detail pages

---

## Related Documents

To fully manage the Services Page, you'll also want to set up:
- **Service Items** - Individual service detail pages
- **Navbar Settings** - Service dropdown menu
- **Contact Page** - Where service enquiries are sent

---

## Support

For questions or issues:
1. Check console logs in browser (F12)
2. Review Sanity Studio validation messages
3. Verify schema fields match this guide
4. Test with minimal data first, then add details