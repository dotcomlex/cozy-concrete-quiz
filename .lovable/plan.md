

# Quiz & Gallery Cleanup Plan

## Overview
Clean up the quiz by fixing the timeline option text, standardizing fonts throughout, and simplify the gallery by removing labels and adding the uploaded bathroom renovation images plus generating kitchen renovation images.

---

## Changes to Implement

### 1. Change Timeline Option Text
**File:** `src/components/Quiz.tsx`

**Current:** "Just exploring options" (line 364)
**New:** "Not Sure"

Also update the label function (line 96):
- Current: `return "Just exploring options";`
- New: `return "Not Sure";`

---

### 2. Standardize Quiz Typography
**File:** `src/components/Quiz.tsx`

The final page (step 5) has nice, clean typography. The question pages use `font-bold` which appears too heavy. Let's match the final page style.

**Question Headlines (lines 291, 337, 390, 439)**
- Current: `text-lg sm:text-xl font-bold`
- New: `text-lg sm:text-xl font-semibold` (lighter weight, matches step 5 subtext style)

**OptionCard Label (line 210)**
- Current: `text-[13px] sm:text-sm font-medium`
- New: `text-sm font-normal` (cleaner, less heavy)

**OptionCard Selected State (line 211)**
- Current: `text-primary font-semibold`
- New: `text-primary font-medium` (less heavy when selected)

**BudgetCard Label (line 244)**
- Current: `text-base sm:text-lg font-semibold`
- New: `text-base sm:text-lg font-medium` (consistent with other cards)

---

### 3. Remove Gallery Image Labels/Headlines
**File:** `src/components/GallerySection.tsx`

**Remove:** Lines 68-72 (the entire label overlay div)
```jsx
{/* Project Label Overlay */}
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
  <p className="text-white font-medium text-lg">{projects[currentIndex].label}</p>
  <p className="text-white/70 text-sm">{projects[currentIndex].location}</p>
</div>
```

The images will display clean without text overlays, making them feel more natural and less cluttered.

---

### 4. Replace Gallery Images with Uploaded Bathroom Renovations
**File:** `src/components/GallerySection.tsx`

**Copy uploaded images to assets:**
- `user-uploads://2.png` → `src/assets/gallery-bathroom-1.png`
- `user-uploads://e40ed250-39f2-4182-87e8-56face9f6d73.png` → `src/assets/gallery-bathroom-2.png`
- `user-uploads://image.png` → `src/assets/gallery-bathroom-3.png`

**Update projects array** with the new bathroom renovation images and appropriate alt text.

---

### 5. Generate Kitchen Renovation Images
**Action:** Use AI image generation to create 2-3 kitchen renovation before/after images in the same style as the uploaded bathroom photos.

**Prompts for generation:**
1. "Professional before and after kitchen renovation photo, split down the middle, left side showing outdated 1980s kitchen with oak cabinets, right side showing modern white kitchen with quartz countertops, matching lighting and angle"
2. "Before and after kitchen remodel comparison, left half old dark cramped kitchen, right half bright open modern kitchen with island and stainless appliances, professional real estate photography style"

These will be saved as:
- `src/assets/gallery-kitchen-1.png`
- `src/assets/gallery-kitchen-2.png`

---

## Updated Gallery Projects Array

```javascript
const projects = [
  { image: bathroomReno1, alt: "Bathroom renovation before and after transformation" },
  { image: bathroomReno2, alt: "Luxury bathroom remodel with blue tile and gold accents" },
  { image: bathroomReno3, alt: "Complete bathroom renovation with modern fixtures" },
  { image: kitchenReno1, alt: "Kitchen renovation before and after" },
  { image: kitchenReno2, alt: "Modern kitchen remodel transformation" },
];
```

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/Quiz.tsx` | Change "Just exploring options" → "Not Sure", lighten font weights |
| `src/components/GallerySection.tsx` | Remove label overlay, update images array |
| Copy images | 3 uploaded bathroom images to `src/assets/` |
| Generate images | 2 AI-generated kitchen before/after images |

---

## Visual Result

**Quiz - Before:**
- "Just exploring options" as timeline option
- Heavy bold fonts on questions
- Inconsistent typography between steps

**Quiz - After:**
- "Not Sure" as timeline option
- Lighter, cleaner font weights (semibold/medium instead of bold)
- Consistent typography matching the nice final form page

**Gallery - Before:**
- Text overlays on each image (label + location)
- Placeholder/unrelated images

**Gallery - After:**
- Clean, full-bleed images with no text overlays
- Real bathroom before/after renovation photos
- AI-generated kitchen before/after photos matching the style

---

## Technical Notes

- Font weight changes: `font-bold` (700) → `font-semibold` (600) for headings
- Option cards: `font-medium` (500) → `font-normal` (400) for labels
- All images will be optimized through Vite's asset pipeline
- Gallery thumbnails remain interactive and appropriately sized
- No changes to quiz logic, validation, or webhook

