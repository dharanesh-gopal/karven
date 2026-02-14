# Bulk Activate All Blog Posts

## Method 1: Using Sanity Studio UI (Easiest)

### Step 1: Check Inactive Posts
1. Go to http://localhost:3000/studio/vision
2. Paste this query:
```groq
*[_type == "blog"] | order(_updatedAt desc) {
  _id,
  title,
  isActive,
  featured
}
```
3. Click "Execute" to see all posts and their status

### Step 2: Manually Toggle Each Post
1. Go to http://localhost:3000/studio/structure/blogPage;AllBlogPosts
2. Click on each blog post
3. Go to the "Settings" tab
4. Toggle "Is Active" ON (if it's off)
5. Click "Publish" to save

---

## Method 2: Using a Script (If you have many posts)

Since you have 51 posts, you can use this PowerShell one-liner in Vision:

1. Go to Vision tab
2. Switch from "Query" mode to "Mutate" mode
3. Copy each patch operation below and execute them ONE AT A TIME

GROQ mutations aren't supported in Vision. You'll need to do this manually or use the Sanity CLI.

---

## Summary of Your Toggle Buttons:

### **"Featured Post"** toggle (in Settings tab):
- **OFF** (default): Post appears in normal blog list
- **ON**: Post appears in featured sections (hero, homepage, etc.)

### **"Is Active"** toggle (in Settings tab):
- **OFF**: Post is HIDDEN from website (saved but not published)
- **ON** (default): Post is LIVE and visible to visitors

---

## Why the separate "Blog Authors" section exists:

The blog post's **author field** is just a **reference** (pointer) to a profile in the Blog Authors section.

**Think of it like:**
- **Blog Authors** = Your address book
- **Blog post's author field** = A contact card from your address book

**Benefits:**
1. Update an author's photo once → updates on all their posts
2. Don't re-enter author details for every post
3. Multiple authors can share author profiles

Without the Blog Authors section, you'd have no authors to choose from!
