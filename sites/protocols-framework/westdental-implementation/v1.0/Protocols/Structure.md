# structure.md  
_Multi-Archetype Semantic Framework for Uniquely Styled 5Pager Sites_

## Philosophy Evolution

**OLD APPROACH**: One rigid HTML structure for all sites  
**NEW APPROACH**: Flexible semantic foundation that adapts to visual archetypes while maintaining conversion psychology and technical consistency

Every 5Pager maintains the same **semantic logic** and **conversion structure** while expressing completely different **visual personalities** through archetype-specific implementations.

---

## 🏗️ Universal Semantic Foundation

### Core HTML Skeleton (All Archetypes)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{Archetype-Specific Title Format}</title>
  <meta name="description" content="{Voice-Driven Meta Description}" />
  <link rel="canonical" href="{Current Page URL}" />
  
  <!-- Archetype-Specific Styling -->
  <link rel="stylesheet" href="/style-{archetype}.css" />
  
  <!-- Universal Conversion Tracking -->
  <script async src="https://www.googletagmanager.com/gtag/js?id={GA4_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '{GA4_ID}');
  </script>
</head>
<body class="archetype-{archetype-name}">

  <!-- Universal Navigation Structure -->
  <header class="site-header">
    <nav class="nav-container" role="navigation" aria-label="Main navigation">
      <a href="/" class="logo" aria-label="Home">
        <img src="/assets/logo-{archetype}.svg" alt="{Brand Name}" />
      </a>
      <ul class="nav-menu">
        <li><a href="/about.html">About</a></li>
        <li><a href="/method.html">Method</a></li>
        <li><a href="/services.html">Services</a></li>
        <li><a href="/contact.html" class="nav-cta">Contact</a></li>
      </ul>
      <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </header>

  <!-- Archetype-Flexible Main Content -->
  <main role="main">
    <!-- Page-specific semantic sections -->
  </main>

  <!-- Universal Footer Structure -->
  <footer class="site-footer" role="contentinfo">
    <div class="footer-container">
      <div class="footer-brand">
        <img src="/assets/logo-{archetype}.svg" alt="{Brand Name}" />
        <p class="footer-tagline">{Voice-Driven Tagline}</p>
      </div>
      <div class="footer-links">
        <ul>
          <li><a href="/terms.html">Terms</a></li>
          <li><a href="/privacy.html">Privacy</a></li>
          <li><a href="/sitemap.html">Sitemap</a></li>
        </ul>
      </div>
      <div class="footer-copyright">
        <p>&copy; 2025 {Brand Name}. All rights reserved.</p>
      </div>
    </div>
  </footer>

</body>
</html>
```

---

## 🎨 Archetype-Specific Implementations

### Minimalist Authority Structure
*Clean, spacious, professional emphasis*

```html
<!-- Hero Section - Minimalist Authority -->
<section class="hero hero--minimal" id="hero">
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-headline">{Voice-Driven Headline}</h1>
      <p class="hero-subhead">{Authentic Subheadline}</p>
      <div class="hero-cta-group">
        <a href="/contact.html" class="cta-primary">
          {Founder's Natural CTA Language}
        </a>
        <a href="/about.html" class="cta-secondary">Learn More</a>
      </div>
    </div>
    <div class="hero-visual">
      <img src="/assets/hero-minimal.jpg" alt="{Descriptive Alt Text}" />
    </div>
  </div>
</section>

<!-- Services Section - Card Grid -->
<section class="services services--minimal" id="services">
  <div class="section-container">
    <header class="section-header">
      <h2 class="section-title">{Voice-Specific Services Title}</h2>
      <p class="section-intro">{Founder's Approach Description}</p>
    </header>
    <div class="services-grid">
      <article class="service-card">
        <h3 class="service-name">{Client-Language Service Name}</h3>
        <p class="service-description">{Voice-Driven Description}</p>
        <div class="service-details">
          <span class="service-duration">{Duration}</span>
          <span class="service-investment">{Investment}</span>
        </div>
        <a href="/contact.html" class="service-cta">
          {Natural Action Language}
        </a>
      </article>
    </div>
  </div>
</section>
```

### Creative Disruptor Structure
*Dynamic, asymmetric, bold visual hierarchy*

```html
<!-- Hero Section - Creative Disruptor -->
<section class="hero hero--creative" id="hero">
  <div class="hero-container hero-container--asymmetric">
    <div class="hero-main">
      <h1 class="hero-headline hero-headline--large">
        {Bold Voice-Driven Headline}
      </h1>
      <a href="/contact.html" class="cta-primary cta-primary--bold">
        {Energetic CTA Language}
      </a>
    </div>
    <div class="hero-side">
      <p class="hero-subhead">{Supporting Voice Copy}</p>
      <div class="hero-visual hero-visual--overlay">
        <img src="/assets/hero-creative.jpg" alt="{Dynamic Alt Text}" />
        <div class="visual-accent"></div>
      </div>
    </div>
  </div>
</section>

<!-- Services Section - Timeline Flow -->
<section class="services services--creative" id="services">
  <div class="section-container">
    <header class="section-header section-header--offset">
      <h2 class="section-title section-title--creative">
        {Unique Services Framing}
      </h2>
    </header>
    <div class="services-timeline">
      <div class="timeline-item">
        <div class="timeline-marker">01</div>
        <div class="timeline-content">
          <h3 class="timeline-title">{Process Step Name}</h3>
          <p class="timeline-description">{What Happens}</p>
          <span class="timeline-outcome">{Specific Result}</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Warm Expert Structure
*Rounded, organic, welcoming emphasis*

```html
<!-- Hero Section - Warm Expert -->
<section class="hero hero--warm" id="hero">
  <div class="hero-container">
    <div class="hero-content">
      <h1 class="hero-headline hero-headline--warm">
        {Compassionate Voice-Driven Headline}
      </h1>
      <p class="hero-subhead">{Empathetic Subheadline}</p>
      <div class="hero-trust-indicators">
        <span class="trust-item">{Years Experience}</span>
        <span class="trust-item">{Client Count}</span>
        <span class="trust-item">{Location}</span>
      </div>
      <a href="/contact.html" class="cta-primary cta-primary--warm">
        {Welcoming CTA Language}
      </a>
    </div>
    <div class="hero-visual hero-visual--rounded">
      <img src="/assets/hero-warm.jpg" alt="{Approachable Alt Text}" />
      <div class="visual-frame"></div>
    </div>
  </div>
</section>

<!-- Services Section - Feature Spotlight -->
<section class="services services--warm" id="services">
  <div class="section-container">
    <div class="services-spotlight">
      <div class="spotlight-content">
        <h2 class="spotlight-title">{Primary Service Name}</h2>
        <p class="spotlight-description">{Detailed Voice Description}</p>
        <ul class="spotlight-benefits">
          <li>{Specific Benefit 1}</li>
          <li>{Specific Benefit 2}</li>
          <li>{Specific Benefit 3}</li>
        </ul>
        <a href="/contact.html" class="cta-primary">
          {Supportive CTA Language}
        </a>
      </div>
      <div class="spotlight-support">
        <div class="testimonial-highlight">
          <blockquote>{Voice-Matched Testimonial}</blockquote>
          <cite>{Client Name}</cite>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Technical Pioneer Structure
*Grid-based, precise, data-focused*

```html
<!-- Hero Section - Technical Pioneer -->
<section class="hero hero--technical" id="hero">
  <div class="hero-container hero-container--grid">
    <div class="hero-content">
      <h1 class="hero-headline hero-headline--technical">
        {Systems-Focused Voice Headline}
      </h1>
      <p class="hero-subhead">{Logical Process Description}</p>
      <div class="hero-metrics">
        <div class="metric-item">
          <span class="metric-number">{Key Metric}</span>
          <span class="metric-label">{Metric Description}</span>
        </div>
      </div>
    </div>
    <div class="hero-visual hero-visual--technical">
      <div class="visual-grid">
        <img src="/assets/hero-tech.jpg" alt="{Technical Alt Text}" />
        <div class="grid-overlay"></div>
      </div>
    </div>
    <div class="hero-cta">
      <a href="/contact.html" class="cta-primary cta-primary--technical">
        {Precise CTA Language}
      </a>
    </div>
  </div>
</section>

<!-- Services Section - Comparison Table -->
<section class="services services--technical" id="services">
  <div class="section-container">
    <header class="section-header">
      <h2 class="section-title">{Systematic Services Title}</h2>
    </header>
    <div class="services-comparison">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Duration</th>
            <th>Deliverables</th>
            <th>Investment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="service-name">{Technical Service Name}</td>
            <td class="service-duration">{Precise Duration}</td>
            <td class="service-deliverables">{Specific Outputs}</td>
            <td class="service-investment">{Clear Investment}</td>
            <td class="service-action">
              <a href="/contact.html" class="cta-table">
                {Direct Action Language}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
```

### Luxury Craftsperson Structure
*Elegant, refined, premium emphasis*

```html
<!-- Hero Section - Luxury Craftsperson -->
<section class="hero hero--luxury" id="hero">
  <div class="hero-container hero-container--elegant">
    <header class="hero-header">
      <h1 class="hero-headline hero-headline--luxury">
        {Refined Voice-Driven Headline}
      </h1>
      <p class="hero-subhead hero-subhead--elegant">
        {Sophisticated Subheadline}
      </p>
    </header>
    <div class="hero-visual hero-visual--luxury">
      <img src="/assets/hero-luxury.jpg" alt="{Premium Alt Text}" />
    </div>
    <div class="hero-action">
      <a href="/contact.html" class="cta-primary cta-primary--luxury">
        {Exclusive CTA Language}
      </a>
    </div>
  </div>
</section>

<!-- Services Section - Premium Showcase -->
<section class="services services--luxury" id="services">
  <div class="section-container">
    <header class="section-header section-header--centered">
      <h2 class="section-title section-title--luxury">
        {Premium Services Title}
      </h2>
      <p class="section-description">{Craftsmanship Description}</p>
    </header>
    <div class="services-showcase">
      <article class="service-feature">
        <div class="service-visual">
          <img src="/assets/service-luxury.jpg" alt="{Service Visual}" />
        </div>
        <div class="service-content">
          <h3 class="service-title">{Premium Service Name}</h3>
          <p class="service-description">{Detailed Quality Description}</p>
          <div class="service-details">
            <span class="service-duration">{Timeframe}</span>
            <span class="service-investment">{Investment}</span>
          </div>
          <a href="/contact.html" class="cta-secondary">
            {Refined Action Language}
          </a>
        </div>
      </article>
    </div>
  </div>
</section>
```

---

## 📱 Universal Responsive Framework

### Mobile-First Base Structure
```css
/* Universal Container System */
.section-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 4rem) 1rem;
}

/* Archetype-Agnostic Grid System */
.grid-2 { display: grid; grid-template-columns: 1fr; gap: 2rem; }
.grid-3 { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: 1fr 1fr; }
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
}

/* Universal Conversion Elements */
.cta-primary {
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
  cursor: pointer;
}

.cta-secondary {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}
```

### Archetype-Specific Adaptations
```css
/* Minimalist Authority Mobile */
@media (max-width: 767px) {
  .hero--minimal .hero-container {
    text-align: center;
    gap: 3rem;
  }
  .hero--minimal .hero-visual {
    order: -1;
  }
}

/* Creative Disruptor Mobile */
@media (max-width: 767px) {
  .hero--creative .hero-container--asymmetric {
    display: block;
  }
  .hero--creative .hero-side {
    margin-top: 2rem;
  }
}

/* Warm Expert Mobile */
@media (max-width: 767px) {
  .hero--warm .hero-visual--rounded {
    margin-top: 2rem;
  }
  .services--warm .services-spotlight {
    display: block;
  }
}

/* Technical Pioneer Mobile */
@media (max-width: 767px) {
  .hero--technical .hero-container--grid {
    display: block;
  }
  .services--technical .comparison-table {
    font-size: 0.875rem;
  }
}

/* Luxury Craftsperson Mobile */
@media (max-width: 767px) {
  .hero--luxury .hero-container--elegant {
    padding: 3rem 1rem;
  }
  .services--luxury .service-feature {
    display: block;
  }
}
```

---

## 🧩 Component Library System

### Universal Conversion Components

**Primary CTA Variations**
```html
<!-- Minimalist Authority -->
<a href="/contact.html" class="cta-primary cta--minimal">
  {Clean, Professional Language}
</a>

<!-- Creative Disruptor -->
<a href="/contact.html" class="cta-primary cta--bold">
  {Dynamic, Energetic Language}
</a>

<!-- Warm Expert -->
<a href="/contact.html" class="cta-primary cta--warm">
  {Welcoming, Supportive Language}
</a>

<!-- Technical Pioneer -->
<a href="/contact.html" class="cta-primary cta--technical">
  {Direct, Precise Language}
</a>

<!-- Luxury Craftsperson -->
<a href="/contact.html" class="cta-primary cta--luxury">
  {Refined, Exclusive Language}
</a>
```

**Testimonial Component Variations**
```html
<!-- Minimalist Authority -->
<blockquote class="testimonial testimonial--minimal">
  <p class="testimonial-quote">{Professional Voice Testimonial}</p>
  <cite class="testimonial-attribution">
    <span class="client-name">{Name}</span>
    <span class="client-title">{Professional Title}</span>
  </cite>
</blockquote>

<!-- Creative Disruptor -->
<div class="testimonial testimonial--creative">
  <div class="testimonial-bubble">
    <p class="testimonial-quote">{Energetic Voice Testimonial}</p>
  </div>
  <div class="testimonial-attribution">
    <img src="{Client Photo}" alt="{Name}" class="client-avatar" />
    <cite>
      <span class="client-name">{Name}</span>
      <span class="client-company">{Company}</span>
    </cite>
  </div>
</div>

<!-- Warm Expert -->
<div class="testimonial testimonial--warm">
  <div class="testimonial-content">
    <p class="testimonial-quote">{Heartfelt Voice Testimonial}</p>
    <cite class="testimonial-attribution">
      <span class="client-name">{Name}</span>
      <span class="client-location">{Location}</span>
    </cite>
  </div>
  <div class="testimonial-visual">
    <img src="{Warm Client Photo}" alt="{Name}" />
  </div>
</div>

<!-- Technical Pioneer -->
<div class="testimonial testimonial--technical">
  <header class="testimonial-header">
    <div class="client-info">
      <span class="client-name">{Name}</span>
      <span class="client-role">{Technical Role}</span>
    </div>
    <div class="testimonial-metrics">
      <span class="metric">{Quantified Result}</span>
    </div>
  </header>
  <blockquote class="testimonial-quote">
    {Data-Focused Voice Testimonial}
  </blockquote>
</div>

<!-- Luxury Craftsperson -->
<blockquote class="testimonial testimonial--luxury">
  <p class="testimonial-quote">{Sophisticated Voice Testimonial}</p>
  <footer class="testimonial-attribution">
    <cite class="client-name">{Name}</cite>
    <span class="client-designation">{Premium Context}</span>
  </footer>
</blockquote>
```

---

## 🔍 Semantic SEO Framework

### Universal Schema Integration Points
```html
<!-- LocalBusiness Schema (All Archetypes) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "{Brand Name}",
  "description": "{Voice-Driven Business Description}",
  "url": "{Website URL}",
  "image": "{Archetype-Appropriate Logo}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{Address}",
    "addressLocality": "{City}",
    "postalCode": "{Postcode}",
    "addressCountry": "GB"
  }
}
</script>

<!-- Service Schema (Archetype-Customized) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "{Voice-Specific Service Name}",
  "description": "{Founder's Natural Service Description}",
  "provider": {
    "@type": "Organization",
    "name": "{Brand Name}"
  }
}
</script>
```

### Archetype-Specific Meta Tags
```html
<!-- Minimalist Authority -->
<meta name="description" content="{Professional, Clear, Benefit-Focused}" />
<meta property="og:image" content="/assets/og-minimal.jpg" />

<!-- Creative Disruptor -->
<meta name="description" content="{Dynamic, Unique, Innovation-Focused}" />
<meta property="og:image" content="/assets/og-creative.jpg" />

<!-- Warm Expert -->
<meta name="description" content="{Welcoming, Supportive, Care-Focused}" />
<meta property="og:image" content="/assets/og-warm.jpg" />

<!-- Technical Pioneer -->
<meta name="description" content="{Precise, Results-Focused, System-Oriented}" />
<meta property="og:image" content="/assets/og-technical.jpg" />

<!-- Luxury Craftsperson -->
<meta name="description" content="{Refined, Premium, Quality-Focused}" />
<meta property="og:image" content="/assets/og-luxury.jpg" />
```

---

## 📋 Implementation Standards

### File Naming Conventions
```
/assets/
├── logo-minimal.svg        (Clean, simple logo)
├── logo-creative.svg       (Bold, dynamic logo)
├── logo-warm.svg          (Friendly, rounded logo)
├── logo-technical.svg     (Precise, geometric logo)
├── logo-luxury.svg        (Elegant, refined logo)
├── hero-{archetype}.jpg   (Archetype-appropriate hero images)
└── og-{archetype}.jpg     (Social sharing images)

/styles/
├── style-minimal.css      (Minimalist Authority styles)
├── style-creative.css     (Creative Disruptor styles)
├── style-warm.css         (Warm Expert styles)
├── style-technical.css    (Technical Pioneer styles)
└── style-luxury.css       (Luxury Craftsperson styles)
```

### CSS Custom Properties System
```css
/* Universal Properties (All Archetypes) */
:root {
  --container-max-width: 1200px;
  --section-padding: clamp(2rem, 5vw, 4rem);
  --element-gap: 2rem;
  --transition-speed: 0.3s;
  --border-radius: 8px; /* Archetype override */
}

/* Archetype-Specific Overrides */
.archetype-minimal {
  --border-radius: 4px;
  --section-padding: clamp(3rem, 6vw, 5rem);
}

.archetype-creative {
  --border-radius: 12px;
  --element-gap: 1.5rem;
}

.archetype-warm {
  --border-radius: 12px;
  --section-padding: clamp(2rem, 4vw, 4rem);
}

.archetype-technical {
  --border-radius: 2px;
  --element-gap: 1.5rem;
}

.archetype-luxury {
  --border-radius: 2px;
  --section-padding: clamp(4rem, 8vw, 6rem);
}
```

---

## 🚀 Development Workflow

### Setup Process
1. **Choose Archetype** based on founder personality + industry
2. **Initialize File Structure** with archetype-specific assets
3. **Set CSS Variables** for chosen archetype
4. **Implement Semantic Structure** using archetype templates
5. **Customize Voice Elements** throughout all components

### Quality Assurance Checklist
- [ ] **Semantic HTML**: Proper heading hierarchy, ARIA labels, role attributes
- [ ] **Archetype Consistency**: All visual elements match chosen archetype
- [ ] **Conversion Elements**: CTAs prominent, forms accessible, contact clear
- [ ] **Voice Integration**: All text sounds like founder's natural speech
- [ ] **Responsive Design**: Works perfectly across all device sizes
- [ ] **Performance**: Lighthouse scores 90+ on all metrics
- [ ] **Accessibility**: WCAG AA compliant, keyboard navigable
- [ ] **SEO Ready**: Schema markup, meta tags, semantic structure

### Testing Protocol
```javascript
// Conversion Element Visibility Test
function testConversionElements() {
  const ctas = document.querySelectorAll('.cta-primary');
  const contact = document.querySelector('[href*="contact"]');
  const forms = document.querySelectorAll('form');
  
  return {
    ctas: ctas.length >= 3, // Minimum 3 CTAs
    contact: contact !== null, // Contact link present
    forms: forms.length >= 1 // At least one form
  };
}

// Archetype Consistency Test
function testArchetypeConsistency(archetype) {
  const body = document.body;
  const hasArchetypeClass = body.classList.contains(`archetype-${archetype}`);
  const correctLogo = document.querySelector(`[src*="logo-${archetype}"]`);
  
  return {
    bodyClass: hasArchetypeClass,
    logoMatch: correctLogo !== null
  };
}
```

---

## 📈 Advanced Implementation

### Dynamic Content Integration
```html
<!-- Voice-Driven Dynamic Elements -->
<section class="dynamic-content" data-archetype="{archetype}">
  <div class="content-container">
    <h2 class="section-title" data-voice-style="{founder-voice}">
      {AI-Generated Voice-Matched Title}
    </h2>
    <div class="content-grid" data-layout="{archetype-layout}">
      <!-- Dynamically populated based on archetype + voice -->
    </div>
  </div>
</section>
```

### Conversion Tracking Integration
```html
<!-- Universal Conversion Events -->
<script>
// Track CTA clicks by archetype
document.querySelectorAll('.cta-primary').forEach(cta => {
  cta.addEventListener('click', function() {
    gtag('event', 'cta_click', {
      'archetype': document.body.className.match(/archetype-(\w+)/)[1],
      'cta_text': this.textContent,
      'page_location': window.location.pathname
    });
  });
});

// Track form submissions
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function() {
    gtag('event', 'form_submit', {
      'archetype': document.body.className.match(/archetype-(\w+)/)[1],
      'form_location': window.location.pathname
    });
  });
});
</script>
```

---

## 🔄 Maintenance & Evolution

### Archetype Migration Process
```markdown
## When Founder's Brand Evolves

1. **Reassess Archetype** - Has founder's personality/positioning changed?
2. **Update Asset Library** - New logo, images, color scheme
3. **Migrate CSS Variables** - Transition to new archetype properties
4. **Refresh Voice Elements** - Update copy to match evolved voice
5. **Test Conversion Impact** - Ensure changes don't hurt performance
6. **Document Changes** - Record archetype migration reasoning
```

### Performance Monitoring
```css
/* Critical CSS Loading */
<style>
  /* Inline critical archetype-specific CSS */
  .archetype-{archetype} .hero { /* Critical styles */ }
  .archetype-{archetype} .cta-primary { /* Critical styles */ }
</style>

<!-- Load full archetype stylesheet -->
<link rel="stylesheet" href="/style-{archetype}.css" media="print" onload="this.media='all'">
```

---

**Version**: structure-v2.md – Multi-Archetype Semantic Framework  
**Last Updated**: July 24, 2025  
**Next Review**: October 2025

---

*"Same semantic foundation. Infinite visual possibilities. Consistent conversion results."*