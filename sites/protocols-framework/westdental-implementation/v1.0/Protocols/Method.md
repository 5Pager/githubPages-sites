# method.md  
_Offer Creation Protocol for 5Pager Sites_

## Purpose

This document outlines the **method** used to extract a client's most valuable transformation and convert it into a clear, emotionally resonant, and conversion-optimized offer — ready to be woven into the 5Pager structure.

This is the heart of turning a story into a business.

---

## Core Frameworks

### 1. The Hormozi Value Equation

> **Value = (Dream Outcome × Perceived Likelihood of Achievement) / (Time Delay × Effort & Sacrifice)**

- **Dream Outcome** → What do they *really* want?  
- **Perceived Likelihood** → Why should they believe you’ll deliver it?  
- **Time Delay** → How fast can you get them there?  
- **Effort & Sacrifice** → How hard will it be for them?

**→ Use this to define a transformational offer that feels easy, fast, and guaranteed.**

---

### 2. The 1/0 Offer Grid

|     | PAIN (0)                       | DESIRE (1)                     |
|-----|-------------------------------|-------------------------------|
| HEAD | What they *know* is wrong     | What they *think* they want   |
| HEART | What they *feel* is off       | What they *long* for deeply   |
| BODY | What's *physically* breaking | What they *want to do*        |

Map these before writing copy. Match each quadrant to specific services or features. Use in `services.html` and `index.html`.

---

### 3. The SPIN Story Funnel (for Interviews)

- **S**ituation → Where are they now?
- **P**roblem → What’s holding them back?
- **I**mplication → What happens if it continues?
- **N**eed-Payoff → What transformation is possible?

Use this funnel to frame the brand's narrative in `about.html` and tie it directly to the offer.

---

## Offer Compression Steps

### Step 1: Deep Listening
Use the `interview-template.md` to draw out:
- Lived experience
- Motivating truths
- “I wish someone had told me…” moments
- Personal pivots and transformations

### Step 2: Extract Transformation
From interview data, identify:
- The **Before** state (chaos, pain, confusion)
- The **After** state (clarity, relief, power)
- The **Bridge** (your proprietary process, product, or service)

Write this as:
> "I help [WHO] go from [X] to [Y] using [Z]."

Example:
> “I help anxious entrepreneurs reclaim their focus and confidence through deep, personalised massage experiences.”

### Step 3: De-Risk the Offer
Layer on:
- Social proof
- Guarantees or ‘no risk’ components
- Speed and convenience
- Simplicity of next step

This increases the **Perceived Likelihood** and reduces the **Time × Effort** in the Value Equation.

### Step 4: Package into Tiers or Outcomes
Use offer formats like:
- 3 service levels (Reset / Restore / Rewire)
- Outcome categories (Pain Relief / Performance / Presence)
- Time-bound packages (e.g. 45min → 60min session)

Ensure each is:
- **Named with symbolic clarity**
- **Tied to a result**
- **Clear on investment + benefit**

Use these in `services.html`.

---

## Deliverables to Feed Into 5Pager

Each offer should output:

- A **1-sentence brand transformation** for the homepage
- A **headline + subhead** with emotional pull and proof
- A **3-part offer grid** with price, duration, and transformation
- Testimonials or story-based proof aligned to the promise
- Specific language to feed into AI/HTML generation

---

## Advanced: Symbolic Offer Framing

> “People don’t buy massages. They buy relief, recognition, and renewal.”

Use metaphor, archetype, and contrast in your offer naming:
- Reset / Release / Rebirth
- Chaos → Clarity
- Worn out → Worthy

---

## Example Output

```json
{
  "brand": "Deserved Massage",
  "promise": "Feel Like Yourself Again",
  "who": "People carrying stress in their bodies they can’t explain",
  "transformation": "From disconnected and tense → to calm, clear, and grounded",
  "offer": [
    {
      "name": "Reset Session",
      "duration": "60 minutes",
      "price": "£60",
      "outcome": "Clear emotional and physical tension",
      "cta": "Book your Reset"
    },
    {
      "name": "Performance Package",
      "duration": "6 x 45min sessions",
      "price": "£290",
      "outcome": "Unlock long-term resilience and performance",
      "cta": "Start your series"
    }
  ]
}
