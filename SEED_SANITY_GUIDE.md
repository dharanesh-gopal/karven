# Quick Start: Populate Sanity with Existing Website Content

## Step 1: Get Your Sanity API Token

1. Go to https://www.sanity.io/manage
2. Select your project "Karvensen" (qyxjb4t2)
3. Go to **API** section
4. Click **Tokens** tab
5. Click **Add API token**
6. Give it a name: "Content Seeder"
7. Set permissions to **Editor**
8. Click **Add token**
9. **COPY THE TOKEN** (you can only see it once!)

## Step 2: Add Token to .env.local

Open `.env.local` and add:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="qyxjb4t2"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your-token-here"
```

## Step 3: Run the Seed Script

```bash
npm run seed-sanity
```

This will populate Sanity with:
- ✅ Navbar Settings (with current menu items)
- ✅ Drone Survey Service Page (sample)
- ✅ Cloud Services Page (sample)

## Step 4: View in Studio

Go to: http://localhost:3000/studio

You should now see:
- **Navbar Settings** - with your menu items ready to edit
- **Service Detail Pages** - with 2 example pages
- **Legal Pages** - ready for you to add Terms & Privacy

## What This Does

The seed script takes the **existing hardcoded content** from your website and creates initial documents in Sanity. Just like how Footer Settings already has data, now these new schemas will too!

You can:
- Edit the content in Studio
- Add more service pages
- Customize everything

## Need to Re-run?

You can run `npm run seed-sanity` anytime to reset to the initial content.
