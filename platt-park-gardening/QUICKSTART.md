# Quick Start Guide - Platt Park Gardening MVP

Get the site running locally in 2 minutes, then customize it.

## 🏃 2-Minute Setup

```bash
# 1. Navigate to project
cd platt-park-gardening

# 2. Install dependencies (already done, but if fresh start)
npm install

# 3. Start dev server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

You now have a fully functional landing site running locally! ✨

## 🎨 Customization Priority

**Do these first (in order):**

### 1. Update Company Info (5 min)

**File:** `components/Footer.tsx`

Find and update:
```tsx
// Phone
onClick={() => window.location.href = 'tel:+17205550123'}

// Email
hello@plattpark.garden

// Address
Denver, Colorado
```

**Also update in:**
- `components/Hero.tsx` - Hero stats
- `components/CTA.tsx` - Phone number in button

### 2. Add Real Testimonials (10 min)

**File:** `components/Testimonials.tsx`

Replace the testimonials array:
```tsx
const testimonials: Testimonial[] = [
  {
    name: 'Real Name',
    location: 'Neighborhood',
    text: 'Their actual review text...',
    rating: 5,
    image: 'RN', // Initials
  },
  // ... more
];
```

### 3. Update Services (5 min)

**File:** `components/Services.tsx`

Replace the services array with your actual offerings. Each service has:
- `title`
- `description`
- `benefits` (array of 4 items)

### 4. Gallery Items (10 min)

**File:** `components/Gallery.tsx`

Update the galleryItems array with your projects:
```tsx
{
  title: 'Your Project Name',
  before: '📸 Before',
  after: '✨ After',
  description: 'What you did...',
}
```

### 5. Add Real Images (15 min)

**Create folder:** `public/images/`

Add your before/after photos:
```
public/
├── images/
│   ├── before-after-1.jpg
│   ├── before-after-2.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   └── hero.jpg
```

**Replace placeholders in Hero:**

`components/Hero.tsx` - around line 50:
```tsx
// From:
<div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl overflow-hidden">
  <div className="w-full h-full flex items-center justify-center">
    {/* Placeholder SVG */}

// To:
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Platt Park garden"
  width={600}
  height={600}
  className="object-cover"
/>
```

## 📝 Form Submission Setup

Currently, the form logs to console. To handle real submissions:

### Easy: Use Formspree (Free)

1. Go to https://formspree.io
2. Sign up, create new form
3. Get your form endpoint (e.g., `https://formspree.io/f/XXXXXXXXX`)
4. Update `components/LeadForm.tsx` - `handleSubmit` function:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      // Form resets after 3 seconds (existing code)
    }
  } catch (error) {
    console.error('Form error:', error);
  }

  setLoading(false);
};
```

That's it! Leads now email to you directly.

## 🔍 Check Your Work

As you customize:

1. **Run dev server** (if not already)
   ```bash
   npm run dev
   ```

2. **View changes** at http://localhost:3000
3. **Test mobile** - Resize browser or use DevTools (F12)
4. **Test form** - Fill it out, check it works
5. **Check links** - Scroll to sections, click buttons

## 🚀 Deploy (When Ready)

```bash
# 1. Create GitHub repo
git init
git add .
git commit -m "Initial: Platt Park Gardening MVP"

# 2. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/platt-park-gardening.git
git push -u origin main

# 3. Deploy to Vercel
# Go to vercel.com, import GitHub repo, deploy
# (Takes 2-3 minutes, fully automated)

# Done! 🎉
```

See `DEPLOYMENT.md` for detailed deployment instructions.

## 📱 Mobile Testing

Make sure it looks good on phones:

```bash
# In browser DevTools (F12):
# 1. Click device toggle (top-left)
# 2. Select iPhone or Android
# 3. Check all sections
# 4. Test form on mobile
```

**What to check:**
- [ ] Text readable (not too small)
- [ ] Buttons easy to tap
- [ ] Images load
- [ ] Form inputs work
- [ ] No horizontal scroll

## 🎯 Next Steps After Launch

1. **Capture leads** - Monitor Formspree inbox or CRM
2. **Share link** - Send to potential clients
3. **Collect feedback** - Ask clients what they think
4. **Add testimonials** - As you get them, add to site
5. **Track visitors** - Add Google Analytics (optional)
6. **Improve photos** - Replace placeholders with real projects

## 📚 Learn More

- **Customizing layout:** Edit files in `/components/`
- **Changing colors:** Search "emerald" in CSS for green theme
- **Adding sections:** Copy a component, modify, add to `app/page.tsx`
- **Next.js docs:** https://nextjs.org/docs

## ⚡ Tips

- **Change colors:** Find `emerald-600` (green), replace with any Tailwind color
- **Add sections:** Copy existing component, modify content, import in `page.tsx`
- **Fonts:** Already using system fonts (fast). Change in `app/layout.tsx` if needed
- **Background images:** Add to sections by adding `backgroundImage` style

## 🆘 Troubleshooting

**Dev server won't start?**
```bash
rm -rf node_modules
npm install
npm run dev
```

**Images not showing?**
- Make sure files are in `/public/images/`
- Use relative paths: `/images/filename.jpg`
- Refresh browser

**Form not submitting?**
- Check console (F12) for errors
- Make sure Formspree endpoint is correct
- Test with fake form first

**Build fails?**
```bash
npm run build
# See error, fix it, try again
```

---

**Ready?** Start with company info (5 min) → Add testimonials (10 min) → Deploy (5 min) ✨
