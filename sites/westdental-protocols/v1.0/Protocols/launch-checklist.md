# launch-checklist.md  
_Pre-Launch QA Protocol for 5Pager Sites_

## Purpose

Before taking a 5Pager live, this checklist ensures:
- Everything looks and works as intended across devices
- The brand is expressed clearly and symbolically
- SEO, tracking, and performance are fully activated
- No part of the user journey breaks trust or momentum

This is the **final clearance protocol**. Every item must be ✅.

---

## ✅ Design & UX

- [ ] ✅ Site is responsive and readable at:
  - [ ] 375px (mobile)
  - [ ] 768px (tablet)
  - [ ] 1366px+ (desktop)
- [ ] ✅ All images are optimised, cropped, and correctly compressed
- [ ] ✅ Font sizes are readable on all screens
- [ ] ✅ Buttons and links are touch-friendly (min height: 44px)
- [ ] ✅ Consistent padding and section spacing throughout
- [ ] ✅ No placeholder text remains (`lorem`, `dummy`, etc.)
- [ ] ✅ Contact/booking button is visible in header on all screens

---

## ✅ Functionality

- [ ] ✅ All internal links work (e.g., `/about.html`, anchor links)
- [ ] ✅ All external links open in new tab (`target="_blank"`)
- [ ] ✅ Booking or contact form is submitting correctly
- [ ] ✅ Any JS used (e.g., modals, accordions) is working smoothly
- [ ] ✅ Video embeds are responsive and autoplay is disabled unless needed
- [ ] ✅ Forms are protected from spam (e.g., simple honeypot or CAPTCHA if needed)

---

## ✅ SEO & Metadata

- [ ] ✅ `<title>` and `<meta description>` are set on every page
- [ ] ✅ `<link rel="canonical">` tag is accurate
- [ ] ✅ H1 is present and unique on each page
- [ ] ✅ All images have descriptive `alt` tags
- [ ] ✅ Structured data (`schema.org`) is embedded:
  - [ ] Local business schema on `index.html`
  - [ ] Service schema on `services.html`
  - [ ] FAQ schema if FAQ is present
- [ ] ✅ Open Graph and Twitter cards are set:
  - [ ] Title, description, and image
- [ ] ✅ Favicon and Apple touch icon are included

---

## ✅ Performance & Accessibility

- [ ] ✅ Lighthouse score is 90+ across:
  - [ ] Performance
  - [ ] Accessibility
  - [ ] Best Practices
  - [ ] SEO
- [ ] ✅ Font files are properly hosted and not blocking render
- [ ] ✅ Lazy loading enabled on large images (`loading="lazy"`)
- [ ] ✅ Contrast ratios pass WCAG AA
- [ ] ✅ Skip to content / ARIA labels used where appropriate

---

## ✅ Conversion Readiness

- [ ] ✅ Clear CTA above the fold on `index.html`
- [ ] ✅ CTA repeated at least 2–3 times per page
- [ ] ✅ Contact or booking form is:
  - [ ] Visually obvious
  - [ ] Easy to fill
  - [ ] Confirmed to work (tested with live submission)
- [ ] ✅ Social proof (testimonials, reviews, logos) included on:
  - [ ] `index.html`
  - [ ] `about.html`
  - [ ] `services.html`
- [ ] ✅ Trust indicators present:
  - [ ] Studio or clinic address
  - [ ] Photos of space/team
  - [ ] Privacy and terms links

---

## ✅ Tracking & Analytics

- [ ] ✅ Meta Pixel (with CAPI if applicable) is live and tracking
- [ ] ✅ Google Analytics 4 (GA4) is installed
- [ ] ✅ Google Tag Manager is installed (if using GTM flow)
- [ ] ✅ Events are firing correctly:
  - [ ] `Lead` on booking form submit
  - [ ] `ViewContent` on key service pages
- [ ] ✅ Facebook Ad preview renders correctly with page metadata

---

## ✅ Local SEO

- [ ] ✅ GMB (Google My Business) profile is linked
- [ ] ✅ NAP (Name, Address, Phone) is consistent across site
- [ ] ✅ Local landmarks or service area mentioned in copy
- [ ] ✅ Schema includes geolocation and `@type: LocalBusiness`

---

## ✅ Launch Ops

- [ ] ✅ Files uploaded to `/public_html/` or equivalent
- [ ] ✅ Robots.txt is present and allows indexing
- [ ] ✅ Sitemap.xml is generated and submitted to Search Console
- [ ] ✅ 404 page is present and styled
- [ ] ✅ Email notifications or CRM webhook (if applicable) are tested
- [ ] ✅ DNS or domain config is correctly pointed and SSL is active

---

## Optional Post-Launch Tasks

- [ ] 🔄 Run a retargeting audience builder (e.g., 30-day pixel viewers)
- [ ] 📈 Set up conversion tracking inside Meta/Google Ads
- [ ] 📦 Submit site to directories or relevant backlink sources
- [ ] 📥 Export leads from form or booking tool into CRM/email flow
- [ ] 🧪 Test mobile booking journey with 3 different people
- [ ] 🧩 Save this site as a template for future 5Pager builds

---

## Version

**launch-checklist.md** – v1.0  
Last Updated: 21 July 2025

