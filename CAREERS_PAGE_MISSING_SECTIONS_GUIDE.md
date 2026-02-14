# Careers Page - Missing Sections Setup Guide

## Overview
The careers page schema is complete, but several sections are missing their content data in Sanity. This guide explains how to add all the missing content.

---

## 🎯 Missing Sections to Edit in Sanity

### 1. **Culture Gallery (Scrolling Images)** 
**What you see:** The carousel with images labeled "Hackathons", "Open Workspace", etc.

**Where to edit in Sanity:**
1. Go to **Sanity Studio** → `Careers Page - All Sections`
2. Navigate to **"7. Culture Gallery"** tab
3. Add items to **"Culture Gallery Images"** array

**Fields for each image:**
- **Title**: e.g., "Hackathons", "Open Workspace", "Global Summits"
- **Category**: Choose from Teamwork, Innovation, Learning, or Office
- **Image**: Upload the image file
- **Active**: Check to display

**Example entries:**
```
1. Title: "Global Summits" | Category: Teamwork | Upload teamwork image
2. Title: "Prototyping Lab" | Category: Innovation | Upload innovation image
3. Title: "Hackathons" | Category: Learning | Upload hackathon image
4. Title: "Open Workspace" | Category: Office | Upload workspace image
```

---

### 2. **Company Values (Global Exposure, Continuous Growth, Stability)**
**What you see:** The three cards under "Where Technology Meets Real-World Impact"

**Where to edit in Sanity:**
1. Go to **Sanity Studio** → `Careers Page - All Sections`
2. Navigate to **"5. Company Values"** tab
3. Add items to **"Company Values"** array

**Fields for each value:**
- **Title**: e.g., "Global Exposure"
- **Description**: Detailed explanation
- **Icon Name**: Lucide icon name (Globe, TrendingUp, ShieldCheck)
- **Active**: Check to display

**Example entries:**
```
1. Title: "Global Exposure"
   Description: "Work on aviation projects that impact airspace regulations in the US, Europe, and India."
   Icon: Globe
   
2. Title: "Continuous Growth"
   Description: "We prioritize internal promotions. Our 'Future Leaders' program prepares engineers for management."
   Icon: TrendingUp
   
3. Title: "Stability & Innovation"
   Description: "Backed by industry giants, we offer the stability of an enterprise with the agility of a lab."
   Icon: ShieldCheck
```

---

### 3. **Employee Benefits (Cloud Sandbox, AI Tool Stack, etc.)**
**What you see:** The tabbed section with "Engineering Ecosystem", "Compensation & IP", "Global Lifestyle"

**Where to edit in Sanity:**
1. Go to **Sanity Studio** → `Careers Page - All Sections`
2. Navigate to **"6. Employee Benefits"** tab
3. Add items to **"Employee Benefits"** array

**Fields for each benefit:**
- **Title**: e.g., "Cloud Sandbox"
- **Description**: Brief explanation
- **Category**: Engineering Ecosystem / Compensation & IP / Global Lifestyle
- **Icon Name**: Lucide icon name
- **Active**: Check to display

**Example entries:**

**Engineering Ecosystem:**
```
1. Title: "Cloud Sandbox"
   Description: "Uncapped AWS/Azure credits for personal R&D."
   Category: Engineering Ecosystem
   Icon: Globe

2. Title: "AI Tool Stack"
   Description: "Enterprise access to Copilot, ChatGPT-4, and Midjourney."
   Category: Engineering Ecosystem
   Icon: Sparkles

3. Title: "Top-Tier Hardware"
   Description: "M3 Pro MacBooks or Linux Workstations with GPU support."
   Category: Engineering Ecosystem
   Icon: Monitor

4. Title: "Drone Lab Access"
   Description: "Direct access to flight testing facility and simulation env."
   Category: Engineering Ecosystem
   Icon: Cpu
```

**Compensation & IP:**
```
1. Title: "Aggressive Equity"
   Description: "High-upside ESOPs. Own a piece of the platform."
   Category: Compensation & IP
   Icon: TrendingUp

2. Title: "Patent Bonuses"
   Description: "$3,000 award for every utility patent filed and granted."
   Category: Compensation & IP
   Icon: Lightbulb

3. Title: "Performance Grants"
   Description: "Annual stock refreshers based on code quality."
   Category: Compensation & IP
   Icon: Award
```

**Global Lifestyle:**
```
1. Title: "Remote-First"
   Description: "Work from our Hyderabad hub, US office, or home."
   Category: Global Lifestyle
   Icon: MapPin

2. Title: "Premium Healthcare"
   Description: "Tier-1 medical coverage for you and family."
   Category: Global Lifestyle
   Icon: Heart

3. Title: "Unlimited PTO"
   Description: "Take time off when you need it, not when a spreadsheet allows it."
   Category: Global Lifestyle
   Icon: Coffee
```

---

### 4. **Career Opportunities (Role Types)**
**What you see:** The section showing different career paths/opportunities

**Where to edit in Sanity:**
1. Go to **Sanity Studio** → `Careers Page - All Sections`
2. Navigate to **"3. Career Opportunities"** tab
3. Add items to **"Career Opportunities"** array

**Fields for each opportunity:**
- **Title**: e.g., "Engineering Roles"
- **Description**: What this career path offers
- **Icon Name**: Lucide icon name
- **Icon Color**: blue, green, red, or purple
- **Active**: Check to display

**Example entries:**
```
1. Title: "Engineering Roles"
   Description: "Build scalable systems for aviation autonomy using cutting-edge cloud and AI technologies."
   Icon: Laptop
   Icon Color: blue

2. Title: "Product & Design"
   Description: "Shape user experiences for pilots, operators, and regulators across multiple platforms."
   Icon: Target
   Icon Color: green

3. Title: "Operations & Support"
   Description: "Ensure seamless deployment and 24/7 reliability for mission-critical systems."
   Icon: Users
   Icon Color: purple

4. Title: "Graduate Program"
   Description: "Launch your career with mentorship, real projects, and accelerated learning paths."
   Icon: Award
   Icon Color: red
```

---

### 5. **Hiring Process Steps**
**Where to edit in Sanity:**
1. Go to **Sanity Studio** → `Careers Page - All Sections`
2. Navigate to **"8. Hiring Process"** tab
3. Add items to **"Hiring Process Steps"** array

**Example entries:**
```
1. Title: "Application"
   Description: "Reviewing your profile."
   Icon: FileText

2. Title: "HR Screening"
   Description: "Aligning on goals & culture."
   Icon: UserCheck

3. Title: "Technical Round"
   Description: "Assessing core skills."
   Icon: Terminal

4. Title: "Final Offer"
   Description: "Welcome to the team."
   Icon: CheckCircle
```

---

### 6. **Employee Testimonials**
**Where to edit in Sanity:**
1. Go to **Sanity Studio** → `Careers Page - All Sections`
2. Navigate to **"9. Employee Testimonials"** tab
3. Add items to **"Employee Testimonials"** array

**Example entries:**
```
1. Name: "Aisha Verma"
   Role: "Senior AI Engineer"
   Quote: "The scale of data we work with at KarVenSen is unmatched. I'm building models that actually fly."
   Image: Upload profile photo

2. Name: "Rahul Mehta"
   Role: "Product Designer"
   Quote: "Design here isn't an afterthought. We have a seat at the table from day one of product planning."
   Image: Upload profile photo

3. Name: "Sarah Jenkin"
   Role: "VP of Engineering"
   Quote: "We don't micromanage. We hire smart people and get out of their way. That's our secret sauce."
   Image: Upload profile photo
```

---

### 7. **Policy Modal Content (Optional)**
**Where to edit in Sanity:**
1. Go to **Sanity Studio** → `Careers Page - All Sections`
2. Navigate to **"6. Employee Benefits"** tab
3. Expand **"Policy Modal Content"**
4. Add items to **"Policy Sections"** array

**Example entries:**
```
1. Icon: Clock | Title: "Time Off"
   Content:
   - Label: "Vacation" | Value: "Unlimited PTO policy"
   - Label: "Sick Leave" | Value: "12 days/year (paid)"
   - Label: "Parental Leave" | Value: "16 weeks (primary), 8 weeks (secondary)"

2. Icon: Wallet | Title: "Compensation"
   Content:
   - Label: "Base Salary" | Value: "Industry-leading benchmarks"
   - Label: "Equity" | Value: "ESOPs with 4-year vesting"
   - Label: "Bonus" | Value: "Performance-based annual bonus"

3. Icon: Laptop | Title: "Equipment"
   Content:
   - Label: "Hardware" | Value: "M3 Pro MacBook or Linux workstation"
   - Label: "Peripherals" | Value: "$500 annual budget"
   - Label: "Home Office" | Value: "$1,000 one-time setup"

4. Icon: Baby | Title: "Family Support"
   Content:
   - Label: "Healthcare" | Value: "Premium coverage for family"
   - Label: "Childcare" | Value: "$200/month subsidy"
   - Label: "Relocation" | Value: "Full relocation package"
```

---

## 📋 Quick Checklist

- [ ] Add 4+ Culture Gallery images
- [ ] Add 3 Company Values
- [ ] Add 7+ Employee Benefits (across 3 categories)
- [ ] Add 3-4 Career Opportunities
- [ ] Add 4 Hiring Process steps
- [ ] Add 3+ Employee Testimonials
- [ ] (Optional) Add Policy Modal sections

---

## 🚀 How to Access Sanity Studio

1. **Local**: Navigate to `http://localhost:3000/studio` (if dev server is running)
2. **Production**: Visit your deployed Sanity Studio URL
3. Find **"Careers Page - All Sections"** document
4. Use the tabs to navigate between sections

---

## 💡 Available Lucide Icons

Common icons you can use (case-sensitive):
- **General**: Globe, TrendingUp, ShieldCheck, Target, Zap, Users, Award
- **Work**: Laptop, Monitor, Cpu, Terminal, Briefcase
- **Benefits**: Heart, Coffee, MapPin, Lightbulb, Sparkles, Wallet
- **Process**: FileText, UserCheck, CheckCircle, Send
- **Family**: Baby, Clock

**Find more at**: https://lucide.dev/icons/

---

## ✅ After Adding Content

Once you've added all the sections in Sanity:
1. **Publish/Save** the document
2. The careers page will automatically update with your new content
3. All sections will display in the correct tabs and carousels

---

## 🎨 Design Notes

- **Culture Images**: Use high-quality, wide-format images (16:9 ratio recommended)
- **Testimonial Photos**: Square format, professional headshots work best
- **Icons**: Must match exact Lucide icon names (case-sensitive)
- **Categories**: Benefits are automatically grouped by category into tabs

