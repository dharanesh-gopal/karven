# Contact Form - Fully Editable from Sanity ✅

## Overview

The contact form is now **100% editable from Sanity CMS**, including:
- ✅ Form title and subtitle
- ✅ All form field labels
- ✅ All placeholders
- ✅ Dropdown options (Enquiry Type & Country)
- ✅ Required field settings
- ✅ Submit button text
- ✅ Success and error messages

## What's Editable

### 1. Form Header
Navigate to: **Sanity Studio → 📞 Contact Page → Contact Page Settings**

**Editable Fields:**
- **Form Title** - Main heading above the form
  - Default: "Take the First Step Towards Excellence!"
  
- **Form Subtitle** - Subheading below the title
  - Default: "Send us a message and our team will respond within 24 hours."

### 2. Form Fields Configuration

All form fields can be customized:

#### Full Name Field
- **Label** - What users see (e.g., "Full Name", "Your Name")
- **Placeholder** - Gray text inside input (e.g., "Your Full Name")
- **Required** - Toggle on/off

#### Phone Number Field
- **Label** - Field label
- **Placeholder** - Example format (e.g., "+91 98765 43210")
- **Required** - Toggle on/off

#### Email Field
- **Label** - Field label
- **Placeholder** - Example email (e.g., "your.email@company.com")
- **Required** - Toggle on/off

#### Enquiry About Dropdown
- **Label** - Dropdown label
- **Placeholder** - First option shown (e.g., "Select enquiry type")
- **Required** - Toggle on/off
- **Options** - Add/remove/edit dropdown choices
  - Each option has:
    - **Display Label** - What users see
    - **Value** - Internal value saved
  
  Default options:
  - Services
  - Training Programs
  - Custom Training
  - Drone Services
  - Software Development
  - Careers
  - Partnership
  - General Inquiry

#### Country Dropdown
- **Label** - Field label
- **Placeholder** - First option (e.g., "Select Country")
- **Required** - Toggle on/off
- **Options** - List of countries
  
  Default countries:
  - India
  - USA
  - UK
  - Canada
  - Australia
  - Germany
  - Singapore
  - UAE
  - Other

#### City Field
- **Label** - Field label
- **Placeholder** - Example text
- **Required** - Toggle on/off

#### Message Field
- **Label** - Field label
- **Placeholder** - Example message
- **Required** - Toggle on/off
- **Rows** - Number of lines in textarea (default: 4)

### 3. Submit Button
- **Button Text** - Normal state text (default: "Send Message")
- **Loading Text** - While submitting (default: "Sending...")

### 4. Response Messages
- **Success Message** - Shown after successful submission
  - Default: "Thank you for reaching out! We have received your message and will get back to you within 24 hours."
  
- **Error Message** - Shown if submission fails
  - Default: "We apologize, but something went wrong. Please try again or contact us directly via email or phone."

## How to Edit

### Step 1: Access Sanity Studio
Visit: `http://localhost:3000/studio`

### Step 2: Navigate to Contact Page Settings
1. Click **📞 Contact Page** in the sidebar
2. Click **Contact Page Settings**

### Step 3: Edit Form Configuration
You'll see sections for:
- **Form Title** - Main heading
- **Form Subtitle** - Subheading
- **Contact Form Fields** - Expand to edit each field
  - Full Name Field
  - Phone Number Field
  - Email Field
  - Enquiry Type Field
  - Country Field
  - City Field
  - Message Field
- **Submit Button** - Button text configuration
- **Success Message** - Confirmation message
- **Error Message** - Error message

### Step 4: Customize Form Fields

**Example: Change "Full Name" to "Your Name"**
1. Expand "Contact Form Fields"
2. Click "Full Name Field"
3. Change "Label" from "Full Name" to "Your Name"
4. Click **Publish**

**Example: Add New Enquiry Option**
1. Expand "Enquiry Type Field"
2. Scroll to "Dropdown Options"
3. Click **Add item**
4. Set **Display Label**: "Product Demo"
5. Set **Value**: "product-demo"
6. Click **Publish**

**Example: Add More Countries**
1. Expand "Country Field"
2. Find "Country Options"
3. Click **Add item**
4. Type country name (e.g., "France")
5. Click **Publish**

## Live Preview

Changes appear **instantly** on the contact page at:
`http://localhost:3000/contact`

## Use Cases

### 1. Multi-Language Support
Change labels and placeholders to different languages:
```
Label: "Nombre Completo" (Spanish)
Placeholder: "Su Nombre Completo"
```

### 2. Industry-Specific Forms
Customize enquiry options for your industry:
```
Options:
- Equipment Purchase
- Repair Services
- Technical Support
- Consultation
```

### 3. Regional Customization
Add relevant countries for your target markets:
```
Country Options:
- All European Union countries
- All Asian countries
- Specific regions only
```

### 4. Seasonal Campaigns
Change form title for promotions:
```
Form Title: "Get 20% Off - Contact Us Today!"
Form Subtitle: "Limited time offer - Respond within 24 hours"
```

### 5. A/B Testing
Test different:
- Form titles
- Button text
- Placeholder examples
- Required vs optional fields

## Schema Structure

**File:** `sanity/schemaTypes/contactPageSettings.ts`

The schema includes:
- `formTitle` - String
- `formSubtitle` - Text
- `formFields` - Object containing:
  - `fullName` - Object (label, placeholder, required)
  - `phone` - Object (label, placeholder, required)
  - `email` - Object (label, placeholder, required)
  - `enquiryType` - Object (label, placeholder, required, options array)
  - `country` - Object (label, placeholder, required, options array)
  - `city` - Object (label, placeholder, required)
  - `message` - Object (label, placeholder, required, rows)
- `submitButton` - Object (text, loadingText)
- `successMessage` - Text
- `errorMessage` - Text

## Component Implementation

**File:** `app/contact/page.tsx`

The contact page now:
1. Fetches form configuration from Sanity
2. Uses fallback defaults if data not available
3. Dynamically renders all form fields
4. Maps dropdown options from CMS
5. Applies required field validation
6. Shows custom button text
7. Displays custom success/error messages

## Benefits

✅ **No Code Changes** - Edit form without touching code
✅ **Instant Updates** - Changes reflect immediately
✅ **Multi-User Safe** - Multiple team members can edit
✅ **Version History** - Sanity tracks all changes
✅ **Validation** - Built-in required field checks
✅ **Flexible** - Add/remove options as needed
✅ **Scalable** - Easy to extend with new fields

## Advanced Customization

### Adding a New Form Field

**Note:** Adding completely new fields requires code changes. But you can:
- Modify existing field properties
- Add/remove dropdown options
- Change validation rules
- Update all text and placeholders

### Integration with Email Services

The form currently simulates submission. To integrate:
1. Set up EmailJS, SendGrid, or similar
2. Update `handleSubmit` function in contact page
3. Use the form configuration for email templates
4. Reference success/error messages from CMS

## Testing

Test the editable form:
1. ✅ Change form title in Sanity
2. ✅ Edit field labels
3. ✅ Modify placeholders
4. ✅ Add new enquiry options
5. ✅ Add more countries
6. ✅ Test required validation
7. ✅ Change button text
8. ✅ Verify success message

## Troubleshooting

**Q: Changes not showing on website?**
- Check if document is published (not just saved)
- Refresh the contact page
- Clear browser cache

**Q: Form fields not appearing?**
- Verify `isActive` is set to `true` in Contact Page Settings
- Check browser console for errors

**Q: Dropdown options not showing?**
- Ensure options array has items
- Verify each option has both `label` and `value`

**Q: Form still shows default text?**
- Confirm data is published in Sanity Studio
- Check that Contact Page Settings document exists

## Summary

🎉 **The contact form is now a powerful, flexible CMS-managed component!**

You can customize:
- ✅ Every text element
- ✅ All form fields
- ✅ Dropdown options
- ✅ Validation rules
- ✅ Button text
- ✅ Messages

No coding required! 🚀
