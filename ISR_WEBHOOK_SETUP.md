# ISR + Webhook Setup Guide

## ✅ What's Been Implemented

Your site now has a **production-ready caching system** with:

1. **Development Mode**: Instant updates (no CDN caching)
2. **Production Mode**: Fast CDN-cached pages with automatic refresh
3. **On-Demand Revalidation**: Instant updates when you publish in Sanity

---

## 🚀 How It Works

### Automatic Background Refresh
- Pages auto-refresh every **60 seconds** in production
- Users always see cached (fast) pages
- Fresh content appears within 1 minute automatically

### Instant Updates (Webhook)
When you click "Publish" in Sanity Studio:
1. Sanity sends webhook to your site
2. Next.js clears cache for that content
3. Next page load gets fresh data
4. Updates visible in **1-2 seconds**

---

## 📋 Setup Instructions

### Step 1: Deploy Your Site

Deploy to Vercel, Netlify, or your hosting platform. You need a public URL.

Example: `https://your-site.vercel.app`

### Step 2: Configure Webhook in Sanity

1. Go to [Sanity Dashboard](https://www.sanity.io/manage)
2. Select your project: **Karven** (qyxjb4t2)
3. Go to **API** → **Webhooks**
4. Click **Create webhook**

**Webhook Settings:**

```
Name: Next.js Revalidation
URL: https://your-site.vercel.app/api/revalidate?secret=dev-secret-change-in-production
Dataset: production
Trigger on: Create, Update, Delete
HTTP method: POST
API version: v2021-03-25
```

5. Click **Save**

### Step 3: Update Secret Token (Production)

For security, generate a random secret:

```bash
# On Mac/Linux
openssl rand -base64 32

# On Windows (PowerShell)
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

Update your production environment variables:
- Vercel: Settings → Environment Variables
- Add: `REVALIDATE_SECRET=your-random-token`

Update Sanity webhook URL:
```
https://your-site.vercel.app/api/revalidate?secret=your-random-token
```

---

## 🧪 Testing

### Test Webhook (Manual)

Visit in your browser:
```
https://your-site.vercel.app/api/revalidate?secret=dev-secret-change-in-production
```

You should see:
```json
{
  "revalidated": true,
  "now": 1738886400000,
  "type": "..."
}
```

### Test Full Flow

1. Go to Sanity Studio: `http://localhost:3000/studio`
2. Edit a service or training program
3. Click **Publish**
4. Refresh your services/training page
5. See changes instantly!

---

## 📊 What Pages Get Revalidated

The webhook automatically revalidates based on content type:

| Content Type | Pages Revalidated |
|--------------|-------------------|
| `service` | `/services`, `/services/[slug]` |
| `training` | `/training`, `/training/courses/[slug]` |
| `post` | `/blog`, `/blog/[slug]` |
| `career` | `/careers`, `/careers/[id]` |
| `heroSection`, `featuresSection`, `testimonialsSection` | `/` (homepage) |

---

## ⚙️ Configuration

### Change Revalidation Time

Edit page files and change the revalidate value:

**Current: 60 seconds**
```typescript
export const revalidate = 60
```

**More frequent (30 seconds)**
```typescript
export const revalidate = 30
```

**Less frequent (5 minutes)**
```typescript
export const revalidate = 300
```

### Disable Auto-Revalidation (Webhook Only)

```typescript
export const revalidate = false // Only update via webhook
```

---

## 🔍 Monitoring

### Check Webhook Status in Sanity

1. Go to Sanity Dashboard → API → Webhooks
2. Click on your webhook
3. See **Delivery log** showing recent triggers
4. Check for errors or failed deliveries

### Debug Webhook Issues

Check your application logs (Vercel/Netlify) for:
```
Revalidating: { _type: 'service', slug: { current: 'ai-software' } }
```

---

## 🎯 Performance Impact

| Metric | Before | After |
|--------|---------|-------|
| Dev: Changes visible | On server restart | **Instant** |
| Prod: Page load speed | Same | Same (cached) |
| Prod: Content freshness | On deployment | **60 sec or instant** |
| CDN usage | Always | **Production only** |

---

## 🚨 Troubleshooting

### Changes not appearing?

1. **Check webhook delivery log** in Sanity
2. **Verify secret token** matches in both places
3. **Check browser cache** (hard refresh: Ctrl+Shift+R)
4. **Wait 60 seconds** for auto-revalidation

### Webhook returning 401 Unauthorized?

- Secret token mismatch
- Update webhook URL with correct secret

### Still seeing old content?

```bash
# Force revalidate all pages
curl "https://your-site.vercel.app/api/revalidate?secret=your-secret"
```

---

## 📝 Files Modified

- ✅ [sanity/lib/client.ts](sanity/lib/client.ts) - CDN based on environment
- ✅ [app/services/page-sanity.tsx](app/services/page-sanity.tsx) - Added revalidation
- ✅ [app/training/page-sanity.tsx](app/training/page-sanity.tsx) - Added revalidation
- ✅ [hooks/useSanityData.ts](hooks/useSanityData.ts) - Enhanced with cache options
- ✅ [app/api/revalidate/route.ts](app/api/revalidate/route.ts) - NEW: Webhook endpoint
- ✅ [.env.local](.env.local) - Added REVALIDATE_SECRET
- ✅ [.env.example](.env.example) - Added REVALIDATE_SECRET

---

## ✨ Next Steps

1. **Deploy your site** to get a public URL
2. **Set up webhook** in Sanity (5 minutes)
3. **Generate production secret** and update both places
4. **Test the flow** end-to-end
5. **Monitor webhook logs** for a few days

---

## 💡 Tips

- Use **60 seconds revalidation** for frequently updated content
- Use **300+ seconds** for rarely changing content
- Always use webhook for instant critical updates
- Monitor your hosting plan's cache limits
- Test webhook after deploying code changes

---

**Setup complete! Your site now has enterprise-grade caching. 🎉**
