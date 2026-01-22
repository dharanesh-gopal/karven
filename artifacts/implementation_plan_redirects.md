# Implementation Plan - Support & Demo Pages + Redirect System

## Goal
Build and implement a redirect system for "Technical Support" and "Request a Demo" pages, including page creation, navigation updates, and redirects.

## Proposed Changes

### 1. Page Scaffolding

#### `app/support/page.tsx`
Create a new page for Technical Support.
- **Hero Section**: Title "Technical Support", Subtitle "How can we help you today?".
- **Knowledge Base Search**: A prominent search input field.
- **Submit Ticket Form**:
  - Fields: Name, Email, Subject, Description, Priority (Low, Medium, High).
  - Use `react-hook-form` and `zod` (if available) or standard state for validation.
  - Success state (toast or message).
- **System Status**: A simple component showing "All Systems Operational" with a green indicator, or mock statuses for simulated realism.
- **Styling**: Use Tailwind CSS, glassmorphism effects, consistent with existing design.

#### `app/demo/page.tsx`
Create a new page for Requesting a Demo.
- **Hero Section**: Title "Request a Demo", Subtitle "See Karvensen in action".
- **Lead Gen Form**:
  - Fields: Name, Email, Company Name, Job Role, Interested Solutions (Select).
  - "Request Demo" CTA button.
- **Calendly Placeholder**:
  - A section saying "Ready to schedule now?"
  - A placeholder area (styled box) representing where the Calendly widget would load.
- **Styling**: High-conversion design, clean layout, vibrant accents.

### 2. Navigation Updates

#### `components/navbar.tsx`
- Add "Support" and "Request Demo" to the main navigation menu.
- Ensure buttons/links are responsive (mobile menu updates if separate).
- Style "Request Demo" as a primary button (CTA) if appropriate, or distinct link.

### 3. Redirects

#### `next.config.mjs`
- Implement `redirects` function.
- Add rule: Source `/help` -> Destination `/support` (Permanent: true).

## Verification Plan

### Automated/Manual Verification
1. **Build Verification**: Run `npm run dev`.
2. **Route Check**:
   - Navigate to `/support` -> Verify components (Search, Form, Status).
   - Navigate to `/demo` -> Verify components (Form, Calendly).
3. **Redirect Check**:
   - Navigate to `/help` -> Verify it redirects to `/support`.
4. **Navigation Check**:
   - Click "Technical Support" in Navbar -> Go to `/support`.
   - Click "Request a Demo" in Navbar -> Go to `/demo`.
5. **Mobile Responsiveness**: Check Navbar on mobile view.
