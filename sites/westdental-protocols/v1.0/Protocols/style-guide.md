# style-guide.md  
_Visual Design Standards for 5Pager Site Builds_

## Purpose

This style guide defines the **visual identity framework** for all 5Pager websites. It ensures:
- Consistency across projects
- Compatibility with modular HTML/CSS generation
- A modern, emotionally resonant aesthetic that doesn’t distract from the copy

Use this as a base style reference when styling a 5Pager site via AI or human design.

---

## 🎨 Colour

Keep colour minimal and meaningful. Let whitespace and contrast do the heavy lifting.

### Palette Guidelines

```yaml
primary: "#0E0E0E"    # Deep charcoal (text & accents)
accent: "#6674F4"     # Calming blue (links, buttons, hovers)
background: "#FFFFFF" # Default background
muted: "#F7F7F7"      # Section separators / soft backgrounds
highlight: "#E0F2FF"  # Optional highlight for testimonials or focus blocks
error: "#FF5A5F"       # Validation or warning accents
Usage Rules
Use 1 primary + 1 accent colour per brand unless otherwise directed

Highlight CTAs and buttons using the accent colour

Avoid gradients or unnecessary visual clutter unless symbolic

🔠 Typography
Typography should feel clean, serious, and welcoming.

Font Pairing
yaml
Copy
Edit
heading_font: "Inter, sans-serif"
body_font: "Inter, sans-serif"
base_size: 16px
Use a consistent vertical rhythm (1.5 line height).

Type Scale
Element	Font Size	Font Weight
H1	2.75rem	700
H2	2rem	600
H3	1.5rem	600
Paragraph	1rem	400
Small Text	0.875rem	400

📐 Layout & Spacing
Max Widths
yaml
Copy
Edit
container: 1200px
content: 720px
Section Padding
css
Copy
Edit
.section {
  padding: clamp(2rem, 5vw, 4rem) 1rem;
}
Gutters & Margins
Use gap: 2rem between cards, offers, testimonials

Never let content touch screen edges (min 1rem gutter)

📦 Cards & Modules
Component	Notes
.offer-card	Rounded, soft shadow, clear CTA
.testimonial	Italic quote + bold name
.cta-button	Large, full-width on mobile, hover state
.video-embed	Responsive, aspect-ratio: 16/9
.hero	Clean text + image split or text only

🖼️ Images & Media
Use real photography over stock when possible

Use .webp or compressed .jpg

Set max image width to 100% and height: auto

Add alt tags that describe what the image represents

Lazy-load all images (loading="lazy")

🧱 Buttons & CTAs
css
Copy
Edit
.cta-button {
  background-color: var(--accent);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.3s;
}
.cta-button:hover {
  background-color: #4f5fdc;
}
Primary CTA: "Book Now", "Get Started", "Begin Your Reset"

Secondary CTA: "Learn More", "See Services", "Meet the Team"

🧑‍🦯 Accessibility Notes
Maintain 4.5:1 contrast ratio minimum

Never rely on colour alone to convey meaning

Add focus states to buttons/links

Use semantic HTML (<nav>, <section>, <main>, etc.)

🧠 Emotion by Design
Emotion	Technique Example
Calm	Soft whitespace, clean sans-serif, muted grey
Trust	Real faces, clear structure, testimonials
Focus	Fewer distractions, tighter copy blocks
Invitation	Curved buttons, friendly language, gentle CTAs
Power	High contrast, large type, minimal colours

Version
style-guide.md – v1.0
Last Updated: 21 July 2025