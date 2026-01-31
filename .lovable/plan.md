

# Phase 2: Hero Redesign + Qualify Page + Quiz Updates

## Summary

This comprehensive update includes:
1. New hero background image (bright Colorado mountains)
2. Simplified CTA (remove white box, button only)
3. Subtle rocking animation on CTA button
4. Qualify page background image (soft misty mountains)
5. Updated budget ranges and timeline options
6. Stronger text shadows for readability

---

## Files to Create/Modify

| File | Action | Changes |
|------|--------|---------|
| `src/assets/hero-mountains-daylight.png` | CREATE | Copy uploaded daylight mountain image |
| `src/assets/qualify-bg-mountains.png` | CREATE | Copy uploaded soft misty mountain image |
| `src/components/HeroSection.tsx` | MODIFY | New background, simplified CTA, reduced spacing |
| `src/pages/QualifyPage.tsx` | MODIFY | Background image, remove header, center quiz |
| `src/components/Quiz.tsx` | MODIFY | New budget ranges, updated timeline options |
| `src/index.css` | MODIFY | Add stronger text shadow, rocking animation |

---

## Part 1: HeroSection.tsx - Complete Redesign

### 1.1 Replace Background Image

**Current Import (Line 3):**
```tsx
import heroImage from "@/assets/hero-colorado-home.png";
```

**New Import:**
```tsx
import heroImage from "@/assets/hero-mountains-daylight.png";
```

### 1.2 Reduce Logo to Headline Spacing

**Current (Line 28):**
```tsx
className="flex justify-center mb-6 lg:mb-8"
```

**New:**
```tsx
className="flex justify-center mb-3 lg:mb-4"
```

### 1.3 Add Stronger Text Shadow Class

Update headline/subheadline to use new `hero-text-shadow-strong` class for readability on bright background.

### 1.4 Remove White CTA Card - Replace with Standalone Button

**Current Structure (Lines 56-98):**
```text
[motion.div wrapper]
  [div className="w-full max-w-lg"]
    [div className="quiz-card-glass rounded-2xl..."]  <-- REMOVE THIS WHITE BOX
      [Check Availability heading]                    <-- REMOVE
      [Takes less than 30 seconds text]              <-- REMOVE
      [Button]                                        <-- KEEP (move out)
      [Trust indicators with border-t]               <-- MODIFY & MOVE
    [/div]
  [/div]
[/motion.div]
```

**New Structure:**
```text
[motion.div wrapper]
  [motion.div - button with rocking animation]
    [Button with larger styling and shadow]
  [/motion.div]
  [Trust indicators (directly on background, white text)]
[/motion.div]
```

### 1.5 Trust Indicators Styling

Move trust indicators outside the (now removed) card and style for visibility on image background:
- White text with slight transparency
- Primary colored icons
- Positioned directly below button

---

## Part 2: index.css - New Animations and Styles

### 2.1 Add Stronger Text Shadow (Line ~217)

```css
.hero-text-shadow-strong {
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.8),
    0 4px 8px rgba(0, 0, 0, 0.6),
    0 8px 16px rgba(0, 0, 0, 0.4);
}
```

### 2.2 Add Subtle Rocking Animation (Line ~303)

```css
@keyframes subtleRock {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-0.5deg);
  }
  75% {
    transform: rotate(0.5deg);
  }
}

.animate-subtle-rock {
  animation: subtleRock 3s ease-in-out infinite;
}

.animate-subtle-rock:hover {
  animation-play-state: paused;
}
```

---

## Part 3: QualifyPage.tsx - Background and Layout

### 3.1 Add Background Image Import

```tsx
import qualifyBgImage from "@/assets/qualify-bg-mountains.png";
```

### 3.2 Remove Header Section

Delete the entire header section (Lines 9-23) that contains:
- "Back to Home" link
- Logo in corner

### 3.3 Add Background Image Container

Replace the simple gradient background with a full-page image:

**Current (Line 8):**
```tsx
<div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
```

**New Structure:**
```tsx
<div className="min-h-screen relative">
  {/* Background Image */}
  <div className="fixed inset-0 z-0">
    <img 
      src={qualifyBgImage} 
      alt="" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
    ...
  </div>
</div>
```

### 3.4 Update Quiz Card Styling

Ensure strong contrast against the light background:
```tsx
<div className="quiz-card-glass rounded-2xl shadow-quiz-glow p-5 sm:p-6 w-full border border-primary/20 bg-white/95">
```

### 3.5 Update Live Activity Badge

Style for visibility on new background:
```tsx
<div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full mb-4 shadow-md">
```

---

## Part 4: Quiz.tsx - Budget and Timeline Updates

### 4.1 Update Budget Ranges (Lines 577-600)

**Current Options:**
- $10,000 - $20,000
- $20,000 - $40,000
- $40,000 - $60,000
- $60,000+

**New Options:**
- $5,000 - $10,000 (NEW lower entry point)
- $10,000 - $20,000
- $20,000 - $30,000 (changed from $20-40k)
- $40,000+ (simplified from $60k+)

### 4.2 Update getBudgetLabel Helper (Lines 128-136)

```tsx
const getBudgetLabel = (budget: string): string => {
  switch (budget) {
    case "5-10k": return "$5,000 - $10,000";
    case "10-20k": return "$10,000 - $20,000";
    case "20-30k": return "$20,000 - $30,000";
    case "40k+": return "$40,000+";
    default: return "";
  }
};
```

### 4.3 Update Timeline Options (Lines 391-418)

**Current Options:**
- Within 2 weeks (ASAP)
- Within 30 days
- 1-2 months
- Not Sure

**New Options:**
- ASAP (simplified label)
- 1-2 weeks (new granularity, replaces "30 days")
- 1-2 months
- Not sure yet (friendlier)

### 4.4 Update getTimelineLabel Helper (Lines 118-126)

```tsx
const getTimelineLabel = (timeline: string): string => {
  switch (timeline) {
    case "asap": return "ASAP";
    case "1-2-weeks": return "1-2 weeks";
    case "1-2-months": return "1-2 months";
    case "not-sure": return "Not sure yet";
    default: return "";
  }
};
```

---

## Visual Comparison

### Homepage Hero - Before vs After

**BEFORE:**
```text
[LOGO]
      (large gap)

This New Winter Upgrade Program... (dark background)

┌─────────────────────────────────┐
│      Check Availability         │
│   Takes less than 30 seconds    │
│  [Check Availability Now ->]    │
│  ✓ Licensed    🛡️ Warranty     │
└─────────────────────────────────┘
```

**AFTER:**
```text
[LOGO]
 (reduced gap)

This New Winter Upgrade Program... (BRIGHT mountain background, strong shadow)

[CHECK AVAILABILITY NOW ->] (standalone button, subtle rocking)

✓ Licensed & Insured  |  🛡️ 1-Year Warranty (white text on image)
```

### Qualify Page - Before vs After

**BEFORE:**
```text
← Back to Home                    [LOGO]
─────────────────────────────────────────
         (plain gradient bg)

    🟢 12 people checking...
       Check Availability
    Takes less than 30 seconds

    ┌─────────────────────┐
    │    Quiz Card        │
    └─────────────────────┘
```

**AFTER:**
```text
(SOFT MISTY MOUNTAIN BACKGROUND - full bleed)

    🟢 12 people checking...
       Check Availability
    Takes less than 30 seconds

    ┌─────────────────────┐
    │    Quiz Card        │
    │  (high contrast)    │
    └─────────────────────┘
```

---

## Implementation Order

1. Copy uploaded images to assets folder
2. Update `src/index.css` with new animations/styles
3. Update `src/components/HeroSection.tsx`
4. Update `src/pages/QualifyPage.tsx`
5. Update `src/components/Quiz.tsx`

---

## Verification Checklist

### Homepage Hero
- [ ] New bright mountain background visible
- [ ] Text has strong shadow for readability
- [ ] Logo spacing reduced (mb-3 lg:mb-4)
- [ ] White CTA card removed
- [ ] CTA button is standalone with shadow
- [ ] Button has subtle rocking animation
- [ ] Trust indicators below button (white text)

### Qualify Page
- [ ] "Back to Home" header removed
- [ ] Soft misty mountain background visible
- [ ] Quiz perfectly centered
- [ ] High contrast on quiz card
- [ ] Live activity badge visible

### Quiz Component
- [ ] Budget: $5K-10K, $10K-20K, $20K-30K, $40K+
- [ ] Timeline: "ASAP", "1-2 weeks", "1-2 months", "Not sure yet"
- [ ] All webhook labels match new values

### Trust Badges (Already Fixed)
- [ ] Logo scroll loops seamlessly (already using duplicated array)

