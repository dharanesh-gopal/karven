# Training Courses Setup Guide

## Issue Fixed ✅

The 404 blank page issue when accessing courses (course-a, course-b, etc.) has been fixed!

### What Was Wrong

The course detail page was a client component that called `notFound()` before properly checking for fallback data, causing premature 404 errors.

### What Was Fixed

1. **Added Loading State** - The page now shows a loading spinner while checking for course data
2. **Better Fallback Logic** - Properly falls back to hardcoded course data when Sanity data isn't available
3. **Custom 404 Page** - Created a user-friendly 404 page for courses that truly don't exist

## Current Status

✅ **Courses Work Without Sanity Data**  
All 4 courses (course-a, course-b, course-c, course-d) now work using fallback data.

✅ **URLs Working**:
- `/training/courses/course-a` - Small Class Drone Pilot Training
- `/training/courses/course-b` - Small and Medium Class Drone Training
- `/training/courses/course-c` - Educational Drone Workshop
- `/training/courses/course-d` - Agricultural Drone Operations

---

## Adding Courses to Sanity CMS (Optional)

To manage courses through Sanity Studio instead of editing code:

### Step 1: Access Sanity Studio

1. Go to `http://localhost:3000/studio` (or your deployed Studio URL)
2. Login with your Sanity credentials

### Step 2: Create Courses

1. In the sidebar, look for **"Training Course (Full Details)"**
2. Click the **"+"** button to create a new course
3. Fill in all the required fields:

#### For Course A - Small Class Drone Pilot Training

```
Title: Course A | Small Class Drone Pilot Training
Slug: course-a (click "Generate" or manually type)
Subtitle: Introduction to Drone Flying
Description: A comprehensive program designed to offer a blend of theoretical education...
Duration: 8 Days
Price: ₹25,000
Level: Beginner
Max Students: 15
Certification: Certificate of Completion

Highlights:
- Hands-on training with latest drone models
- Theory classes on drone regulations and safety
- Flight simulation practice
- Real-world field training
- DGCA compliance guidelines
- Certificate of completion

Curriculum:
Session 1-2: Introduction to Drones
Topics:
 - Understanding drone technology and components
 - Types of drones and their applications
 - Safety protocols and regulations
 - Pre-flight checklist and inspection

Session 3-4: Basic Flight Operations
Topics:
 - Drone controller basics
 - Take-off and landing procedures
 - Basic maneuvers and controls
 - Flight modes and settings

Session 5-6: Advanced Flight Techniques
Topics:
 - Advanced maneuvering
 - Obstacle avoidance
 - Emergency procedures
 - Weather considerations

Session 7-8: Practical Assessment
Topics:
 - Field practice sessions
 - Flight test preparation
 - Final practical examination
 - Certificate distribution

Prerequisites:
- Age 18 years or above
- Basic understanding of technology
- No prior drone experience required

What's Included:
- Course materials and study guides
- Access to training drones
- Safety equipment
- Certificate of completion
- Post-training support for 3 months

Details Page Link: /training/courses/course-a
Order: 1
Is Active: ✓ (checked)
```

#### For Course B - Small and Medium Class Drone Training

```
Title: Course B | Small and Medium Class Drone Training
Slug: course-b
Subtitle: Mastery in Drone Flying
Duration: 13 Days
Price: ₹45,000
Level: Intermediate
Max Students: 12
Certification: Professional Certification
Details Page Link: /training/courses/course-b
Order: 2
Is Active: ✓
```

#### For Course C - Educational Drone Workshop

```
Title: Course C | Educational Drone Workshop
Slug: course-c
Subtitle: STEM & Robotics for Students
Duration: 3-5 Days
Price: ₹8,000
Level: Beginner
Max Students: 30
Certification: Participation Certificate
Details Page Link: /training/courses/course-c
Order: 3
Is Active: ✓
```

#### For Course D - Agricultural Drone Operations

```
Title: Course D | Agricultural Drone Operations
Slug: course-d
Subtitle: Precision Agriculture Training
Duration: 7 Days
Price: ₹35,000
Level: Intermediate
Max Students: 15
Certification: Agricultural Drone Specialist Certificate
Details Page Link: /training/courses/course-d
Order: 4
Is Active: ✓
```

### Step 3: Add Course Images

1. For each course in Sanity Studio, click **"Course Image"**
2. Upload corresponding images:
   - Course A: train-1.jpeg (from public folder)
   - Course B: train-2.jpeg (from public folder)
   - Course C: edu drone.png (from public folder)
   - Course D: dron in agri land.png (from public folder)

### Step 4: Publish

1. After filling all fields for a course, click **"Publish"**
2. Repeat for all 4 courses

---

## Alternative: Use Seed Script (Advanced)

If you have proper API credentials, you can use the seed script:

### Fix API Token Issue

1. Go to [Sanity.io Manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **Tokens**
4. Create a new token with **Editor** permissions
5. Copy the token and update `.env.local`:

```bash
SANITY_API_TOKEN="your-new-token-here"
```

### Run the Seed Script

```bash
node scripts/seed-training-courses.js
```

This will automatically create all 4 courses in Sanity (without images).

---

## Verification

### Test the Courses

1. Go to `/training` page
2. Scroll to the **"Our Training Programs"** section
3. Click **"Learn More"** on any course
4. You should now see the full course details page (not a 404!)

### Expected Behavior

- **With Sanity Data**: Shows courses from Sanity CMS
- **Without Sanity Data**: Shows hardcoded fallback courses
- **Invalid Course**: Shows custom 404 page with navigation options

---

## Files Changed

1. **`app/training/courses/[courseId]/page.tsx`**  
   - Added loading state management
   - Fixed fallback data logic
   - Better error handling

2. **`app/training/courses/[courseId]/not-found.tsx`**  
   - Created custom 404 page for missing courses

3. **`scripts/seed-training-courses.js`**  
   - Seed script to populate courses in Sanity (optional)

---

## Summary

✅ **Fixed**: 404 blank page issue  
✅ **Working**: All 4 course URLs now accessible  
✅ **Added**: Custom 404 page for better UX  
✅ **Created**: Seed script for Sanity (optional)  
✅ **Fallback**: Hardcoded data ensures courses always work  

**Next Steps**: Optionally add courses to Sanity Studio for easy content management!
