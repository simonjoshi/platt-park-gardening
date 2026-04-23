# Deployment Guide - Platt Park Gardening MVP

This guide covers quick deployment options for the Platt Park Gardening landing site.

## 🚀 Quick Start - Vercel (Recommended)

Vercel is the official Next.js hosting platform with zero-config deployment.

### Option 1: Deploy via Git (Easiest)

1. **Push to GitHub/GitLab**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Platt Park Gardening MVP"
   git remote add origin https://github.com/yourusername/platt-park-gardening.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js and configures everything
   - Click "Deploy"
   - Your site is live in seconds!

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd platt-park-gardening
vercel

# Follow the prompts
# Your site will be deployed automatically
```

## 🌐 Custom Domain

Once deployed to Vercel:

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain (e.g., `plattpark.garden`)
4. Follow DNS configuration instructions
5. SSL certificate automatically issued

**Domain registrars:**
- Namecheap
- GoDaddy
- Google Domains
- CloudFlare

## 📦 Alternative Hosting Options

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

### AWS Amplify

```bash
# Install AWS CLI and configure
aws configure

# Deploy
amplify init
amplify publish
```

### Docker (For Self-Hosted)

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY . .
   RUN npm install
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and run**
   ```bash
   docker build -t platt-park-gardening .
   docker run -p 3000:3000 platt-park-gardening
   ```

3. **Deploy to cloud**
   - Google Cloud Run
   - AWS ECS
   - DigitalOcean App Platform
   - Heroku (with changes)

## 🔧 Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Form submission (optional)
NEXT_PUBLIC_FORM_API_URL=https://your-api.example.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email service (optional)
SENDGRID_API_KEY=your-key-here
```

**Important:** Never commit `.env.local` to git. Add to `.gitignore`:
```
.env.local
.env.*.local
```

## 📋 Pre-Deployment Checklist

- [ ] Update all placeholder content with real info
- [ ] Add real before/after images to `/public/images/`
- [ ] Update testimonials with real client reviews
- [ ] Configure form submission (email/CRM integration)
- [ ] Update phone number and email in components
- [ ] Add real company address
- [ ] Set up analytics (optional but recommended)
- [ ] Configure SEO meta tags
- [ ] Test form submission
- [ ] Test mobile responsiveness
- [ ] Test all links and buttons
- [ ] Performance test (Google Lighthouse)

## 📊 Post-Deployment

### Google Analytics

1. Create Google Analytics account
2. Get measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Add to `app/layout.tsx`:
   ```tsx
   import Script from 'next/script';
   
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
     `}
   </Script>
   ```

### Form Submission Integration

#### Option 1: Formspree (Easiest - Free)

1. Go to [formspree.io](https://formspree.io)
2. Create account and new form
3. Get form endpoint
4. Update `components/LeadForm.tsx`:
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
       }
     } catch (error) {
       console.error('Error:', error);
     }
     
     setLoading(false);
   };
   ```

#### Option 2: SendGrid (Professional)

1. Get SendGrid API key
2. Create API route `app/api/send-email/route.ts`
3. Integrate with form handler

#### Option 3: Make/Zapier (Automation)

1. Set up webhook via Make or Zapier
2. Connect to CRM (HubSpot, Pipedrive, etc.)
3. Auto-create leads on form submission

## 🔍 Performance Optimization

### Image Optimization

Replace placeholder divs with Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/images/before-after-1.jpg"
  alt="Garden transformation"
  width={600}
  height={600}
  priority
/>
```

### Code Splitting

Already built-in with Next.js App Router.

### Caching

Configure in `next.config.ts`:

```ts
const nextConfig = {
  images: {
    unoptimized: false,
    domains: ['your-image-domain.com'],
  },
};
```

## 🚨 Monitoring

### Vercel Analytics
- Automatically enabled
- View in Vercel dashboard
- Real-time performance metrics

### Error Tracking
Add Sentry for production error monitoring:

```bash
npm install @sentry/nextjs
```

## 🔐 Security Headers

Add to `next.config.ts`:

```ts
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin',
        },
      ],
    },
  ];
}
```

## 📞 Support

- **Next.js Docs:** https://nextjs.org/docs/deployment
- **Vercel Help:** https://vercel.com/help
- **Netlify Docs:** https://docs.netlify.com

---

**Ready to deploy?** Start with Vercel (takes 5 minutes) →
