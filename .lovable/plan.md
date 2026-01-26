

# Quiz Redesign Implementation Plan

## Overview
Replace the current Quiz component with the new design that features simplified styling, progress dots instead of a progress bar, redesigned option cards with accent colors, and an updated budget step with 4 options instead of 5.

---

## Key Design Changes

### 1. Progress Indicator
**Current:** Labeled progress bar with percentages
**New:** Simple progress dots (5 dots representing each step)

### 2. Option Cards (OptionCard Component)
**Current:** `OptionTile` with circular icon container and vertical layout
**New:** `OptionCard` with larger icon circle, horizontal checkmark indicator when selected, and customizable `accentColor` prop

### 3. Budget Options
**Current:** 5 options (Under $20k, $20-50k, $50-100k, $100k+, Not sure)
**New:** 4 options with updated ranges:
- Under $25,000
- $25,000 - $50,000
- $50,000+
- Not sure yet

### 4. Card Animation Variants
**Current:** `slideVariants` with x-axis slide (opacity + x: 15/-15)
**New:** `cardVariants` with y-axis + scale animation (opacity + y: 20/-20 + scale: 0.95/1)

### 5. ZIP Code Input
**Current:** Standard input with h-14 height
**New:** Larger h-16 input with centered text and rounded-2xl styling

### 6. Contact Form (Step 5) Enhancements
- Add Sparkles icon import
- Enhanced trust footer with Shield icon in a small circle
- "Go back" text button instead of icon-only back button
- Orange gradient submit button styling

### 7. Auto-advance Timing
**Current:** 250ms delay
**New:** 300ms delay

---

## Brand Colors Reference
The design will use existing brand colors from `src/index.css`:

| Color Token | HSL Value | Usage |
|-------------|-----------|-------|
| `--primary` | 38 85% 50% (warm amber) | CTAs, selected states, accents |
| `--foreground` | 220 20% 15% | Text |
| `--muted-foreground` | 220 10% 45% | Secondary text |
| `--border` | 220 13% 90% | Borders |

**Accent Colors for Option Cards:**
- Kitchen: `text-orange-600` (orange-600)
- Bathroom: `text-cyan-600` (cyan-600)
- Both: `text-violet-600` (violet-600)
- Other: `text-slate-600` (slate-600)
- Timeline ASAP: `text-red-600`
- Timeline 30 days: `text-orange-600`
- Timeline 1-3 months: `text-teal-600`
- Timeline exploring: `text-slate-500`

---

## Implementation Details

### File to Modify
`src/components/Quiz.tsx`

### Changes Summary

1. **Update imports** - Add `Sparkles` icon from lucide-react

2. **Replace `OptionTile` with `OptionCard`** - New component with:
   - Larger icon circle (w-14 h-14)
   - Customizable accent color via `accentColor` prop
   - Selection indicator with green checkmark circle
   - Gradient background on selection

3. **Replace `BudgetTile` with `BudgetCard`** - New simpler text-only cards

4. **Update progress indicator** - Replace labeled progress bar with 5 simple dots

5. **Update budget options** - Change from 5 options to 4:
   - `under-25k` → "Under $25,000"
   - `25k-50k` → "$25,000 - $50,000"
   - `50k-plus` → "$50,000+"
   - `not-sure` → "Not sure yet"

6. **Update `getBudgetLabel` function** - Match new budget option values

7. **Update animation variants** - Change from x-slide to y-slide with scale

8. **Update auto-advance delay** - Change from 250ms to 300ms

9. **Update ZIP input styling** - Larger input (h-16), centered text, rounded-2xl

10. **Update Contact Form (Step 5)**:
    - Enhanced trust footer with Shield icon in circle
    - "Go back" text link instead of icon button
    - Adjusted button styling

11. **Update Step Labels in header** - Remove progress bar, keep "Winter Upgrade Program" badge

---

## Component Structure Changes

### New OptionCard Component
```text
+----------------------------------+
|  +--------+                      |
|  | ICON   |    Label Text        |  <- Selected shows green checkmark
|  +--------+                      |
+----------------------------------+
```

### New BudgetCard Component
```text
+----------------------------------+
|         $25,000 - $50,000        |  <- Simple text-only card
+----------------------------------+
```

### New Progress Dots
```text
  ●  ●  ●  ○  ○   <- Filled dots = completed/current, empty = upcoming
```

---

## Technical Notes

- The webhook URL and payload structure remain unchanged
- Facebook Pixel integration stays the same
- All form validation logic is preserved
- Auto-advance behavior continues (Steps 1-3 auto-advance, Step 4 requires button)
- Mobile responsiveness maintained with existing sm: breakpoints

