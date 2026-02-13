# Fix Training Course URLs - Quick Guide

## The Problem You're Seeing

You're accessing `/training/courses/small-class` but getting a 404 error.

## Why This Happened

The course URLs were using a `detailsLink` field instead of the proper `slug` field, causing a mismatch between what links were generated and what the detail page expects.

## ✅ What I Just Fixed

1. **Updated Training Page Query** - Now uses `slug` instead of `detailsLink`
2. **Updated Link Generation** - Links are now built from slug: `/training/courses/{slug}`
3. **Updated Schema** - Marked `detailsLink` as deprecated
4. **Updated Fallback Data** - Uses proper slug structure

## 🔧 What You Need to Do

### If You Have Courses in Sanity Studio

1. **Go to Sanity Studio**: `http://localhost:3000/studio`
2. **Find "Training Course (Full Details)"** in the sidebar
3. **For Each Course**, check the **Slug** field:
   - Course A should have slug: `course-a`
   - Course B should have slug: `course-b`
   - Course C should have slug: `course-c`
   - Course D should have slug: `course-d`

4. **If the slug is wrong** (e.g., "small-class"):
   - Click "Edit" on the course
   - Click "Generate" next to the Slug field, OR
   - Manually change it to `course-a`, `course-b`, etc.
   - Click "Publish"

5. **Delete any incorrectly slugged courses** and recreate them with correct slugs

### If You DON'T Have Courses in Sanity

Just refresh the page - the fallback courses should now work correctly!

## ✅ Correct Course URLs

After the fix, these URLs should work:

- `http://localhost:3000/training/courses/course-a` ✅
- `http://localhost:3000/training/courses/course-b` ✅
- `http://localhost:3000/training/courses/course-c` ✅
- `http://localhost:3000/training/courses/course-d` ✅

## 🧪 Testing

1. **Clear browser cache** (Ctrl + Shift + R or Cmd + Shift + R)
2. Go to `/training` page
3. Click "Learn More" on any course
4. Should see the course details (not 404!)

## If Still Getting 404

### Option 1: Check Sanity Data
```bash
# In your browser, go to:
http://localhost:3000/studio/desk/trainingCourse
```
Delete any courses with wrong slugs and recreate them.

### Option 2: Clear All Training Courses from Sanity

If you want to start fresh and just use the hardcoded fallback data:

1. Go to Sanity Studio
2. Delete all "Training Course (Full Details)" documents
3. Refresh your training page
4. Courses will load from fallback data with correct slugs

## What Changed in Code

### Training Page (`app/training/page.tsx`)
```typescript
// BEFORE:
detailsLink: string

// AFTER:
slug?: { current: string }
detailsLink?: string // optional fallback
```

### Link Generation
```typescript
// BEFORE:
href={course.detailsLink}

// AFTER:
href={`/training/courses/${course.slug?.current}`}
```

### Fallback Data
```typescript
// BEFORE:
detailsLink: "/training/courses/course-a"

// AFTER:
slug: { current: "course-a" }
```

## Summary

✅ Fixed link generation to use `slug` field  
✅ Updated schema to clarify slug usage  
✅ Added fallback for legacy data  
⚠️ **Action Required**: Update or delete courses in Sanity with incorrect slugs

**Quick Fix**: Just delete all courses from Sanity Studio and use the fallback data! 🎯
