# schema.md  
_Structured Data Protocol for 5Pager Sites_

## Purpose

This document outlines how to implement **schema.org structured data** across a 5Pager website to improve SEO, visibility, and AI readability.

Use this protocol on every build. It enables:
- Rich snippets (reviews, services, maps)
- Local SEO clarity
- Structured understanding of your offer and business identity

---

## 🧰 General Format

Use **JSON-LD** format for all schema. Embed inside each page’s HTML:

```html
<script type="application/ld+json">
{ ... }
</script>
Place near </body> or inside <head>.

📍 LocalBusiness Schema
Page: index.html
Purpose: Signals to Google this is a physical business tied to a service and location.

json
Copy
Edit
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Business Name]",
  "image": "[Full URL to Logo or Image]",
  "description": "[Short description of your service]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street Address]",
    "addressLocality": "[City]",
    "postalCode": "[Postcode]",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [Latitude],
    "longitude": [Longitude]
  },
  "url": "[Website URL]",
  "telephone": "[Phone Number]",
  "priceRange": "££",
  "openingHours": "Mo-Su 10:00-20:00"
}
✅ Use accurate geocoordinates
✅ Do not use fake hours — match reality
✅ Only include one LocalBusiness schema per website

🧭 Service Schema
Page: services.html
Purpose: Describes each individual offer for rich result eligibility.

Use one @type: Service object per offer.

json
Copy
Edit
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "[Name of Offer]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "[Business Name]"
  },
  "areaServed": {
    "@type": "Place",
    "name": "[Region or City]"
  },
  "description": "[Short 1-2 sentence summary of service benefits]",
  "offers": {
    "@type": "Offer",
    "price": "[Numeric price]",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock",
    "url": "[Link to services.html or specific CTA]"
  }
}
✅ Repeat per service
✅ Keep descriptions outcome-focused
✅ Optional: use @graph to combine multiple services in one block

❓ FAQ Schema
Page: faq.html or inline FAQ sections
Purpose: Enables FAQ dropdowns in Google results

json
Copy
Edit
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Exact FAQ question]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Plain-text answer]"
      }
    },
    {
      "@type": "Question",
      "name": "[Another FAQ]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer here]"
      }
    }
  ]
}
✅ Answers must appear visibly on the page
✅ Don’t include HTML inside answers
✅ Keep it real — no filler

🌐 WebSite & WebPage Schema (Optional)
Page: index.html

json
Copy
Edit
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "[Site Name]",
  "url": "[https://example.com]",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "[https://example.com/?s={search_term_string}]",
    "query-input": "required name=search_term_string"
  }
}
Optional: add @type: WebPage on internal pages for AI understanding of structure.

🔍 Tools for Validation
✅ Google Rich Results Test

✅ Schema Markup Validator

✅ JSONLint – check for errors

💡 Tips
Match all schema to visible on-page content

Use absolute URLs (not /relative-path)

Include only the schema types relevant to your site

Check indexing after launch via Google Search Console

Version
schema.md – v1.1 (Neutralised)
Last Updated: 21 July 2025