# Component Reference Guide

Quick reference for all 7 components in the Platt Park Gardening MVP.

## 📋 Overview

Each component is a self-contained, client-side interactive React component with TypeScript typing.

## 1. Hero.tsx

**Purpose:** Landing section - first impression, value prop, CTAs

**Key Features:**
- Gradient background with animated decorative elements
- Value proposition headline
- Two CTAs (Schedule Consultation, View Our Work)
- Trust indicators (15+ years, 200+ homes, 4.9★ rating)
- Placeholder image area (right side on desktop)

**Customization:**
- Edit headline text
- Update trust indicator stats
- Replace image placeholder with real photo
- Change button text/colors

**Key Lines:**
```tsx
<h1 className="text-5xl md:text-6xl font-bold">
  Your Denver Garden,
  <span className="text-emerald-600"> Expertly Transformed</span>
</h1>
```

---

## 2. Services.tsx

**Purpose:** Showcase 4 main services with benefits

**Key Features:**
- 4-service grid (2x2 on desktop, 1x4 on mobile)
- Service cards with icons and descriptions
- 4 benefits per service (checkmark list)
- Special offer banner (Spring Cleanup)

**Services Included:**
1. Spring Cleanup & Renewal
2. Landscape Design
3. Maintenance Plans
4. Irrigation Systems

**Customization:**
- Update service titles/descriptions
- Edit benefits lists
- Modify offer text
- Change icons (replace SVG)

**To Add/Remove Services:**
```tsx
const services: Service[] = [
  {
    title: 'Your Service',
    description: 'Description here',
    icon: <svg>...</svg>,
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4'],
  },
  // ... more
];
```

---

## 3. Testimonials.tsx

**Purpose:** Social proof via customer reviews carousel

**Key Features:**
- Interactive carousel (4 testimonials)
- Previous/Next navigation buttons
- Dot indicators (click to jump)
- 5-star ratings display
- Client name/location

**Sample Data:**
```tsx
{
  name: 'Margaret Chen',
  location: 'Platt Park',
  text: 'Testimonial text here...',
  rating: 5,
  image: 'MC', // Initials for avatar
}
```

**Customization:**
- Replace testimonial text with real reviews
- Update names/locations
- Change initials (avatar backgrounds)
- Adjust rating (1-5)
- Add/remove testimonials

**Advanced:**
- Add auto-play (use `setInterval`)
- Add testimonial images (replace initials)
- Increase testimonials to more than 4

---

## 4. Gallery.tsx

**Purpose:** Before/after project showcase with descriptions

**Key Features:**
- 6-item grid (3x2 on desktop, 1x6 on mobile)
- Side-by-side before/after layout
- Click to expand descriptions
- Project title and description
- BEFORE/AFTER labels
- Hover overlay effect

**Gallery Item Structure:**
```tsx
{
  title: 'Platt Park Spring Transformation',
  before: '📸 Before',
  after: '✨ After',
  description: 'Complete spring cleanup with new perennial...',
}
```

**Customization:**
- Replace placeholder icons with real images
- Update project titles/descriptions
- Add/remove gallery items
- Modify descriptions

**To Add Real Images:**
```tsx
// Replace: before: '📸 Before'
// With: <Image src="/images/project-1-before.jpg" ... />

// Replace: after: '✨ After'
// With: <Image src="/images/project-1-after.jpg" ... />
```

---

## 5. LeadForm.tsx

**Purpose:** Capture leads (name, email, phone, address, service interest)

**Key Features:**
- Form validation (all fields required)
- Smooth form submission (1 second delay for UX)
- Success message display
- Loading state on button
- Privacy notice
- Trust badges below form

**Form Fields:**
1. Name (text input)
2. Email (email input, validated)
3. Phone (tel input)
4. Property Address (text input)
5. Service Interest (dropdown with 5 options)

**Service Options:**
- Spring Cleanup & Renewal
- Landscape Design
- Maintenance Plan
- Irrigation System
- Other / Not Sure

**Form Data Type:**
```tsx
interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceInterest: string;
}
```

**To Enable Real Form Submission:**

Option 1: Formspree (easiest)
```tsx
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});

if (response.ok) {
  setSubmitted(true);
}
```

Option 2: Your API
```tsx
const response = await fetch('/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

**Customization:**
- Add/remove form fields
- Change dropdown options
- Update success message text
- Modify validation rules

---

## 6. CTA.tsx

**Purpose:** Final conversion section before footer

**Key Features:**
- Bold gradient background
- Compelling headline + subheadline
- Two CTA buttons (form + phone call)
- Decorative blur effects
- Spring cleanup special offer
- Service area mention

**Key Elements:**
- Primary CTA: "Get Your Free Consultation"
- Secondary CTA: "Call Us"
- Callout: Spring offer + service area

**Customization:**
- Change headline text
- Update CTA button text
- Modify phone number (also updates tel: link)
- Change offer text
- Update service areas

**To Change Phone Number:**
Replace both instances:
```tsx
onClick={() => window.location.href = 'tel:+17205550123'}
// and in text
"Call Us: (720) 555-0123"
```

---

## 7. Footer.tsx

**Purpose:** Contact info, links, legal, social media

**Key Features:**
- 4-column layout (desktop), 1-column (mobile)
- Company brand section + social links
- Services links
- Company links
- Contact info (phone, email, address, hours)
- Bottom copyright/legal
- Trust badge

**Sections:**

**Column 1: Brand**
- Company name/description
- Social media links (Facebook, Twitter, Instagram)

**Column 2: Services**
- Spring Cleanup
- Landscape Design
- Maintenance Plans
- Irrigation Systems
- Seasonal Care

**Column 3: Company**
- About Us
- Our Team
- Testimonials
- Blog
- Contact

**Column 4: Contact**
- Phone (clickable)
- Email (clickable)
- Address
- Hours (M-Sat, closed Sun)

**Footer Bottom:**
- Copyright
- Privacy Policy link
- Terms of Service link
- Accessibility link
- Trust badge

**Customization:**
- Update company name
- Change phone/email
- Update address
- Modify hours
- Add/remove social links
- Update all URLs

**To Update Phone/Email:**
```tsx
// Phone
<a href="tel:+17205550123">

// Email
<a href="mailto:hello@plattpark.garden">
```

---

## Component Architecture

**All components are:**
- ✅ Client-side (`'use client'`)
- ✅ TypeScript typed
- ✅ Responsive (mobile-first)
- ✅ Accessible (ARIA labels)
- ✅ Styled with Tailwind CSS
- ✅ Self-contained (no shared state)

**Component Props:**
- None! Each component is self-contained
- State managed internally with React hooks
- Data hardcoded (replace with props if needed)

---

## Styling Patterns

All components use Tailwind CSS classes:

**Common patterns:**
```tsx
// Container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Responsive grid
<div className="grid md:grid-cols-2 gap-8">

// Buttons
className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700"

// Text sizes (responsive)
className="text-4xl md:text-5xl font-bold text-gray-900"

// Spacing
className="py-20"  // Vertical spacing
className="px-4 sm:px-6 lg:px-8"  // Responsive horizontal
```

---

## Common Customizations

**Change Main Color:**
1. Find all `emerald-600` occurrences
2. Replace with another Tailwind color (e.g., `blue-600`)
3. Update accent colors too (emerald-50, emerald-700, etc.)

**Add New Section:**
1. Copy an existing component
2. Modify content
3. Import in `app/page.tsx`
4. Add to component list in `<main>`

**Update Links:**
- Look for `onClick` and `href` attributes
- Update URLs/phone/email

**Change Spacing:**
- Edit `py-20`, `px-4`, `gap-8` values
- Use Tailwind's scale: 4 = 1rem (16px)

---

## Testing Components Locally

After editing a component:

1. **Save file** (auto-reload on dev server)
2. **Check localhost:3000** for changes
3. **Mobile test** (resize browser or DevTools)
4. **Form test** (submit and check console)
5. **Scroll test** (test all smooth scrolls)

---

## Component Import Order

In `app/page.tsx`:
```tsx
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import LeadForm from '@/components/LeadForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
      <LeadForm />
      <CTA />
      <Footer />
    </main>
  );
}
```

This is the component flow from top to bottom on the page.

---

**Need help?** Check individual component files for detailed comments and inline documentation.
