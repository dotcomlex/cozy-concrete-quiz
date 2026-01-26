
# Hero & Gallery Section Improvements

## Overview
Improve the mobile experience by fixing spacing issues in the hero section, replacing the background image, enhancing text visibility, and simplifying the gallery for easier manual browsing.

---

## Changes to Implement

### 1. Fix Hero Section Spacing
**File:** `src/components/HeroSection.tsx`

**Issues identified from screenshot:**
- Headline, subheadline, and quiz are too close together
- Too much empty space below the quiz (the dark area at the bottom)

**Fixes:**
- Increase spacing between headline and subheadline: `space-y-3` → `space-y-4 sm:space-y-5`
- Add more margin between "BREAKING" badge and headline: `mb-3 sm:mb-4` → `mb-4 sm:mb-5`
- Add margin below subheadline: `mb-4 sm:mb-5` → `mb-6`
- Change hero section from `min-h-screen` to `min-h-[auto]` with proper padding to eliminate excess bottom space

### 2. Replace Background Image
**File:** `src/components/HeroSection.tsx`

**Action:**
- Copy the uploaded Colorado mountain home image (`ChatGPT_Image_Jan_12_2026_02_43_59_PM.png`) to `src/assets/hero-colorado-home.png`
- Update the import to use the new image
- The image shows a beautiful stone cottage with mountains at dusk - perfect for a remodeling company

### 3. Enhance Text Visibility Over Image
**File:** `src/index.css`

**Improvements to `.hero-overlay`:**
- Strengthen the gradient overlay to make text more readable
- Current overlay is too light for the new warm-toned image

**New overlay:**
```css
.hero-overlay {
  background: 
    linear-gradient(to bottom, hsl(var(--hero) / 0.7) 0%, hsl(var(--hero) / 0.5) 50%, hsl(var(--hero) / 0.85) 100%),
    linear-gradient(to right, hsl(var(--hero) / 0.8) 0%, hsl(var(--hero) / 0.4) 100%);
}
```

**Enhance `.hero-text-shadow`:**
```css
.hero-text-shadow {
  text-shadow: 0 2px 12px hsl(0 0% 0% / 0.7), 0 4px 24px hsl(0 0% 0% / 0.5);
}
```

### 4. Simplify Gallery Section - Remove Auto-Scroll
**File:** `src/components/GallerySection.tsx`

**Changes:**
- Remove the `isAutoPlaying` state and `useEffect` timer (lines 17, 30-36)
- Remove `setIsAutoPlaying(false)` calls from navigation functions
- This makes the gallery fully manual - users control when they want to see the next project
- Keep the left/right arrows and thumbnail strip for easy navigation
- Keep the progress dots as indicators

### 5. Gallery Layout Cleanup
**File:** `src/components/GallerySection.tsx`

**Simplifications:**
- Remove the progress dots row (lines 104-116) - thumbnails provide enough navigation
- Make thumbnails slightly larger for easier tapping on mobile: `w-16 h-16` → `w-18 h-18 sm:w-20 sm:h-20`
- Remove the credibility statement at the bottom (line 144-146) - not needed here

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/HeroSection.tsx` | Fix spacing, replace bg image import |
| `src/index.css` | Strengthen overlay and text shadow |
| `src/components/GallerySection.tsx` | Remove auto-scroll, simplify navigation |
| Copy new image | `user-uploads://ChatGPT_Image_Jan_12_2026_02_43_59_PM.png` → `src/assets/hero-colorado-home.png` |

---

## Visual Result

**Hero Section - Before:**
- Elements cramped together
- Large empty space below quiz
- Lighter overlay making text harder to read

**Hero Section - After:**
- Proper breathing room between headline, subheadline, quiz
- Hero section fits content without excess bottom space
- Stronger overlay ensures text pops
- Beautiful Colorado home with mountains as backdrop

**Gallery - Before:**
- Auto-scrolls every 4 seconds
- Progress dots + thumbnails (redundant)
- Credibility statement cluttering the section

**Gallery - After:**
- User-controlled manual navigation only
- Larger thumbnails for easy mobile tapping
- Cleaner, focused experience

---

## Technical Notes

- New background image will be optimized through Vite's asset pipeline
- Image uses `fetchPriority="high"` and `loading="eager"` for fast LCP
- All touch targets remain 44px+ for accessibility
- Reduced JavaScript overhead by removing auto-scroll timer

