# Sanity Image Upload Guide

## Overview

Your Sanity schemas have been updated to use proper Sanity image references instead of local file paths. This ensures images are properly managed within Sanity's content platform.

## Changes Made

### 1. Schema Updates
- **navbarSettings.ts**: Changed `imagePath` (string) to `image` (Sanity image type)
- Added proper image field with hotspot support for better image positioning

### 2. Component Updates
- **navbar.tsx**: Now uses `urlFor()` from Sanity's image builder
- Automatically generates optimized image URLs with proper dimensions
- Fallback to local image if Sanity image is not uploaded

### 3. Seeding Scripts Updated
- Removed hardcoded `imagePath` references
- Added comments indicating images should be uploaded through Studio UI

## How to Upload Images in Sanity Studio

### Step 1: Access Sanity Studio
1. Navigate to: `http://localhost:3000/studio` (local) or `https://karvensen.com/studio` (production)
2. Log in with your Sanity credentials

### Step 2: Upload Logo Image
1. In the left sidebar, find **"Navbar Settings"**
2. Click on the active navbar configuration
3. Scroll to the **"Logo"** section
4. Under **"Logo Image"**, click the **"Upload"** button
5. Select your logo file from your computer:
   - Supported formats: JPG, PNG, SVG, WebP, GIF
   - Recommended: PNG with transparent background
   - Size: Minimum 200x70px (will be automatically optimized)
6. After upload, you can adjust the **hotspot** (the focal point of the image)
7. Click **"Publish"** to save changes

### Step 3: Verify the Image
1. Go to your website homepage
2. The navbar should now display the uploaded logo
3. If you don't see it immediately, clear your browser cache

## Image Best Practices

### Logo Images
- **Format**: PNG with transparent background (preferred) or SVG
- **Dimensions**: At least 200x70px (maintains aspect ratio)
- **File size**: Keep under 500KB for optimal loading
- **Quality**: High resolution for retina displays

### Other Images
When uploading images to other Sanity fields:
- **Hero images**: 1920x1080px minimum
- **Card images**: 600x400px minimum
- **Thumbnails**: 300x300px minimum
- Always use descriptive alt text for accessibility

## How Image Optimization Works

The system automatically:
1. **Resizes** images to appropriate dimensions
2. **Converts** to modern formats (WebP) for better performance
3. **Serves** responsive images based on device
4. **Caches** images on CDN for faster loading

Example from code:
```typescript
const logoSrc = navbarData?.logo?.image?.asset
  ? urlFor(navbarData.logo.image).width(200).height(70).url()
  : "/logo karven.png"
```

## Troubleshooting

### Image Not Showing After Upload
1. Check if document is **published** (not just saved as draft)
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Verify the navbar configuration is marked as **Active**
4. Check browser console for any errors

### Image Quality Issues
1. Upload a higher resolution source image
2. Use PNG or SVG format for logos (avoids JPEG compression artifacts)
3. Adjust the hotspot in Sanity if image appears cropped incorrectly

### Fallback Image
If no image is uploaded in Sanity, the system will use:
- `/logo karven.png` (local public folder)
- Make sure this file exists as a fallback

## Additional Schemas with Images

Other content types that support images:
- **Site Settings**: Logo, Favicon, OG Image
- **Blog Posts**: Featured images
- **Team Members**: Profile photos
- **Services**: Service icons/images
- **Testimonials**: Author photos
- **Gallery**: Multiple images
- **How We Work Section**: Section image

All follow the same upload process through Sanity Studio.

## Next Steps

1. **Upload your logo** through Sanity Studio now
2. **Remove** the old `/logo karven.png` file from `/public` (after confirming new logo works)
3. **Upload other images** for services, team members, etc.
4. **Test** on multiple devices to ensure images look good

## Questions?

- Sanity Image API Docs: https://www.sanity.io/docs/image-url
- Sanity Studio Docs: https://www.sanity.io/docs/sanity-studio
