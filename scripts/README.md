# Team Members Seed Script

This script automatically populates your Sanity database with Leadership Team and Board of Directors data.

## What It Does

Creates **10 documents** in Sanity:
- **7 Leadership Team Members**
- **3 Board of Directors**

All with names, positions, and display order already set!

## Setup Instructions

### Step 1: Create a Sanity API Token

1. Go to https://sanity.io/manage
2. Select your project
3. Go to **API** → **Tokens**
4. Click **Add API Token**
5. Name it: `Migration Token`
6. Permissions: **Editor**
7. Copy the token

### Step 2: Add Token to Environment Variables

Add this line to your `.env.local` file:

```bash
SANITY_API_TOKEN=your_token_here
```

Replace `your_token_here` with the token you just copied.

### Step 3: Run the Script

```bash
node scripts/seed-team-members.js
```

## What Happens Next

The script will:
1. ✅ Check if documents already exist (prevents duplicates)
2. ✅ Create all 7 leadership members
3. ✅ Create all 3 board members
4. ✅ Show success message

## After Running

1. Go to Sanity Studio (localhost:3000/studio)
2. Navigate to **About Page** → **Leadership Team Members**
3. You'll see all 7 members listed!
4. Click each one to:
   - Upload their profile image
   - Add LinkedIn URL (optional)
   - Publish

Do the same for **Board of Directors** (3 members).

## Troubleshooting

### Error: "SANITY_API_TOKEN is not defined"
- Make sure you added the token to `.env.local`
- Restart your dev server after adding the token

### Error: "Insufficient permissions"
- Your token needs **Editor** permissions
- Create a new token with the correct permissions

### Documents Already Exist
- The script won't create duplicates
- Delete existing documents in Sanity Studio first if you want to re-run

## Team Members Created

### Leadership Team (7)
1. Prateek Srivastava - Founder & Managing Director
2. Amit Takte - CTO
3. Major General (Dr) Mandip Singh, SM, VSM (Retd) - President – Strategic Alliances
4. Karthika Venkatesan - Chief Innovation Officer
5. Rajesh Kumar - VP Engineering
6. Dr. Suresh Patel - Head of Research
7. Priya Sharma - Director of Operations

### Board of Directors (3)
1. Prateek Srivastava - Founder & Managing Director
2. Nikita Srivastava - Director & CFO
3. Mangina Srinivas Rao - Independent Director

## Images

The images are in your `public` folder:
- `/indian-professional-man.png`
- `/indian-woman-professional.png`
- `/indian-professor-man.jpg`

Upload these to the appropriate team members in Sanity Studio.
