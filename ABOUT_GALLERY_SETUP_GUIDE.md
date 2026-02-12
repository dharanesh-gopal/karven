# About Page Gallery Setup Guide

## Overview
This guide will help you set up the About Page Gallery in Sanity Studio with proper title, images, and captions.

## Steps to Set Up Gallery in Sanity Studio

### 1. Access Sanity Studio
- Navigate to `http://localhost:3000/studio` 
- Or visit your deployed Sanity Studio

### 2. Create About Gallery Document
1. Click **"Create"** button
2. Select **"About Page Gallery"** from the document types
3. Fill in the following fields:

#### Fields to Configure:

**Gallery Title:**
```
Our Journey in Pictures
```

**Gallery Images:**
Upload the following images with their respective details:

1. **Image 1:** `indian-professional-man.png`
   - **Alternative Text:** `KarVenSen Team - Drone Training`
   - **Caption:** `Professional drone training programs by our expert instructors`

2. **Image 2:** `indian-woman-professional.png`
   - **Alternative Text:** `KarVenSen Team - Software Development`
   - **Caption:** `Innovative software solutions developed by our talented team`

3. **Image 3:** `indian-professor-man.jpg`
   - **Alternative Text:** `KarVenSen Team - AI Research`
   - **Caption:** `Cutting-edge AI research and development initiatives`

4. **Image 4:** `staff teaches to std.png`
   - **Alternative Text:** `KarVenSen Team - Education`
   - **Caption:** `Comprehensive educational programs and hands-on training`

5. **Image 5:** `drone-flying-over-farm-field-at-sunset.jpg`
   - **Alternative Text:** `KarVenSen - Drone Operations`
   - **Caption:** `Advanced drone operations in agriculture and surveillance`

6. **Image 6:** `dron in agri land.png`
   - **Alternative Text:** `KarVenSen - Agriculture Solutions`
   - **Caption:** `Smart agriculture solutions powered by drone technology`

**Autoplay Interval:** `4000` (4 seconds)

**Active:** ✅ `true`

### 3. Publish the Document
- Click **"Publish"** to make the gallery live
- The frontend will automatically fetch and display this data

## Frontend Integration

The About page (`/about`) now includes:
- ✅ **Dynamic title** from Sanity
- ✅ **Dynamic images** with proper URLs
- ✅ **Image captions** displayed below titles
- ✅ **Configurable autoplay interval**
- ✅ **Fallback content** if Sanity data isn't available

## Features
- Auto-rotating carousel with configurable timing
- Navigation arrows and dot indicators
- Thumbnail preview strip
- Responsive design for all screen sizes
- Smooth animations and transitions

## Fallback Behavior
If no Sanity data is available, the frontend will display placeholder content with the same structure, ensuring the page always works properly.

## Troubleshooting
- Make sure the document is **published** in Sanity Studio
- Verify all images are uploaded and have proper alt text
- Check that **isActive** is set to `true`
- Ensure the **autoplayInterval** is a positive number

## Next Steps
After setting up the gallery:
1. Test the auto-rotation functionality
2. Verify captions display properly
3. Check responsive behavior on different devices
4. Update images and content as needed through Sanity Studio