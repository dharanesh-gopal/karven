# Services Cleanup Guide

## Current Situation
You have 11 service detail pages in Sanity, but some are duplicates and the pages aren't connected to Sanity data.

## Recommended Services to KEEP (9 total)

### Drone Services (7)
1. ✅ **Drone Survey and Mapping** - `/drone-survey-and-mapping`
2. ✅ **Drone Surveillance & Videography** - `/drone-surveillance-and-videography`
3. ✅ **Precision Spraying** - `/precision-spraying`
4. ✅ **Drone Delivery** - `/drone-delivery`
5. ✅ **Hardware, Software & Firmware** - `/hardware-software-firmware`
6. ✅ **Drone-in-a-Box** - `/drone-in-a-box`
7. ✅ **Data, GIS & Digital Solutions** - `/data-gis-digital-solutions`

### Software Services (2)
1. ✅ **AI Software Development** - `/ai-software-development`
2. ✅ **Learning Management Systems** - `/learning-management-systems`

### Education Services (1 or 2)
**CHOOSE ONE:**
- **Option A**: Keep only "Educational Programs" (general)
- **Option B**: Keep both "Educational Programs" AND "Advanced Educational Programs" if they're truly different

## Services to DELETE from Sanity

Delete **"Cloud Services"** if you're not actively offering it, OR keep it and add proper content.

## Actions Needed

### 1. In Sanity Studio - Add Required Fields

For EACH service you want to keep, add these fields:

**Drone Survey and Mapping**
- Category: Drone Services
- Icon: Map
- Order: 1

**Drone Surveillance & Videography**
- Category: Drone Services  
- Icon: Video
- Order: 2

**Precision Spraying**
- Category: Drone Services
- Icon: Sprout
- Order: 3

**Drone Delivery**
- Category: Drone Services
- Icon: Package
- Order: 4

**Hardware, Software & Firmware**
- Category: Drone Services
- Icon: Microchip
- Order: 5

**Drone-in-a-Box**
- Category: Drone Services
- Icon: Box
- Order: 6

**Data, GIS & Digital Solutions**
- Category: Drone Services
- Icon: BarChart3
- Order: 7

**AI Software Development**
- Category: AI & Software Services
- Icon: Cpu
- Order: 1

**Learning Management Systems**
- Category: AI & Software Services
- Icon: BookOpen
- Order: 2

**Educational Programs**
- Category: Educational Services
- Icon: GraduationCap
- Order: 1

### 2. Delete Old Hardcoded Pages

After the dynamic route is created, you can delete these hardcoded folders.

### 3. Verify Slugs Match

Make sure each service in Sanity has the correct slug that matches the URL you want.
