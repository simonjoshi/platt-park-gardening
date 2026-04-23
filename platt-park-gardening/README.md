# Platt Park Gardening - MVP Landing Site

A modern, responsive single-page landing site for Platt Park Gardening Service, targeting affluent Denver homeowners in the Platt Park and Cherry Creek areas.

## 🎯 Features

- **Hero Section** with compelling value proposition and CTAs
- **Services Menu** showcasing spring cleanup, design, maintenance, and irrigation
- **Customer Testimonials** carousel with 4 client reviews
- **Before/After Gallery** with 6 project showcase items
- **Lead Intake Form** collecting name, email, phone, address, and service interest
- **Contact/CTA Sections** with multiple call-to-action opportunities
- **Mobile-First Design** responsive from mobile to desktop
- **Professional Polish** gradient backgrounds, smooth animations, accessibility features

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Font:** Geist (system default)
- **UI Components:** Custom React components

## 📁 Project Structure

```
platt-park-gardening/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page (imports all sections)
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Testimonials.tsx    # Testimonials carousel
│   ├── Gallery.tsx         # Before/after gallery
│   ├── LeadForm.tsx        # Lead capture form
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer with contact info
├── public/                 # Static assets (images go here)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd platt-park-gardening

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Update Company Info
Edit the following files to add real company details:

1. **app/layout.tsx** - Update title, description, keywords
2. **components/Footer.tsx** - Phone, email, address, hours
3. **components/CTA.tsx** - Phone number for call link
4. **components/Hero.tsx** - Update stats (years, homes, rating)

### Add Real Images

1. Create/add images to `public/images/` folder
2. Update component imports in respective files
3. Replace placeholder divs with `<Image>` components from Next.js

Example:
```tsx
import Image from 'next/image';

<Image 
  src="/images/before-after-1.jpg" 
  alt="Garden transformation" 
  width={600} 
  height={600} 
/>
```

### Update Testimonials

Edit `components/Testimonials.tsx` - replace the testimonials array with real client reviews:

```tsx
const testimonials: Testimonial[] = [
  {
    name: 'Real Client Name',
    location: 'Neighborhood Name',
    text: 'Their actual testimonial...',
    rating: 5,
    image: 'Initials',
  },
  // ... more testimonials
];
```

### Update Services

Edit `components/Services.tsx` - modify the services array with your actual offerings.

### Update Gallery Items

Edit `components/Gallery.tsx` - replace placeholder gallery items with real project information.

### Form Handling

The lead form currently logs data to console. To handle submissions:

1. **Email Integration** - Connect to SendGrid, Mailgun, or AWS SES
2. **Database** - Add Supabase, Firebase, or MongoDB
3. **CRM** - Integrate with HubSpot, Pipedrive, or similar

Example with Mailgun:
```tsx
const response = await fetch('/api/send-email', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

## 📱 Responsive Design

The site is fully responsive:
- **Mobile:** 320px and up
- **Tablet:** 768px and up
- **Desktop:** 1024px and up

All sections use Tailwind's responsive prefixes (sm:, md:, lg:) for optimal viewing.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Color contrast meets WCAG AA standards

## 🚀 Deployment Options

### Vercel (Recommended - Free tier available)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### AWS, Azure, Google Cloud
Follow their respective Next.js deployment guides.

## 🎯 SEO & Meta

- ✅ Responsive design
- ✅ Fast loading times (Next.js optimization)
- ✅ Semantic HTML
- ✅ Open Graph meta tags (ready to add)
- ✅ Structured data (ready to add)

To add Open Graph:
```tsx
// In app/layout.tsx metadata
openGraph: {
  title: 'Platt Park Gardening',
  description: 'Expert landscape design...',
  images: ['/og-image.jpg'],
},
```

## 📊 Performance

- **Lighthouse Score:** Targeting 90+
- **Core Web Vitals:** Optimized for mobile
- **Image Optimization:** Ready for Next.js Image component

## 🔐 Security

- No hardcoded credentials
- HTTPS required in production
- Form validation included
- Ready for environment variables

## 🛣️ Next Steps

1. ✅ Replace placeholder images with real before/after photos
2. ✅ Update testimonials with real client reviews
3. ✅ Add real company contact information
4. ✅ Integrate email/form submission backend
5. ✅ Deploy to Vercel or preferred hosting
6. ✅ Set up domain name
7. ✅ Add Google Analytics
8. ✅ Implement SEO schema markup

## 📝 License

Private - Platt Park Gardening Service

## 🤝 Support

For questions or customization needs, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

Built with ❤️ for Denver's finest gardens
