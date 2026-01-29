

# Mobile-Optimize Reviews Section + Generate Gender-Matched Avatars

## Summary

Two major changes:
1. Remove `line-clamp-6` and add responsive mobile optimizations throughout the ReviewsSection
2. Generate 12 unique avatar images matching each reviewer's gender using AI image generation

---

## Part 1: Mobile Optimizations

### Changes to `src/components/ReviewsSection.tsx`

| Element | Current | After (Mobile/Desktop) |
|---------|---------|------------------------|
| Section padding | `py-16 lg:py-24` | `py-12 sm:py-16 lg:py-24` |
| Headline text | `text-2xl sm:text-3xl lg:text-4xl` | `text-xl sm:text-2xl lg:text-4xl leading-tight` |
| Subheadline | `text-base` | `text-sm sm:text-base px-4` |
| Grid gaps | `gap-5` | `gap-4 sm:gap-5` |
| Card padding | `p-6` | `p-5 sm:p-6 h-full flex flex-col` |
| Quote icon | `w-8 h-8 mb-4` | `w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4` |
| Review text | `line-clamp-6 text-sm` | `text-xs sm:text-sm` (NO line-clamp) |
| Stars | `w-4 h-4` | `w-3.5 h-3.5 sm:w-4 sm:h-4` |
| Avatar | `w-12 h-12` | `w-10 h-10 sm:w-12 sm:h-12` |
| Name text | `text-sm` | `text-xs sm:text-sm` |
| Location | `text-xs` | `text-[10px] sm:text-xs` |
| Verified badge | `text-xs` | `text-[10px] sm:text-xs` |
| Nav buttons | `w-10 h-10` | `w-9 h-9 sm:w-10 sm:h-10` |

---

## Part 2: Generate 12 Unique Gender-Matched Avatars

### Reviewer Gender Analysis

| # | Name | Gender | New Avatar File |
|---|------|--------|-----------------|
| 1 | Michael R. | Male | avatar-michael.jpg |
| 2 | Sarah M. | Female | avatar-sarah.jpg |
| 3 | James T. | Male | avatar-james.jpg |
| 4 | Linda K. | Female | avatar-linda.jpg |
| 5 | David & Rachel P. | Couple | avatar-david-rachel.jpg |
| 6 | Carlos G. | Male | avatar-carlos.jpg |
| 7 | Jennifer & Tom H. | Couple | avatar-jennifer-tom.jpg |
| 8 | Robert S. | Male | avatar-robert.jpg |
| 9 | Lisa W. | Female | avatar-lisa.jpg |
| 10 | Kevin & Amy D. | Couple | avatar-kevin-amy.jpg |
| 11 | Patricia N. | Female | avatar-patricia.jpg |
| 12 | Marcus B. | Male | avatar-marcus.jpg |

### AI Image Generation Prompts

I'll generate professional headshot-style portraits:

- **Males:** Professional headshot of a friendly middle-aged man, natural lighting, warm smile, residential home background blur, high quality photo
- **Females:** Professional headshot of a friendly middle-aged woman, natural lighting, warm smile, residential home background blur, high quality photo  
- **Couples:** Friendly middle-aged couple standing together, natural lighting, warm smiles, residential home background blur, high quality photo

---

## Implementation Steps

### Step 1: Generate 12 Avatar Images
Using AI image generation (Nano banana model), create:
- 5 male portraits (Michael, James, Carlos, Robert, Marcus)
- 4 female portraits (Sarah, Linda, Lisa, Patricia)
- 3 couple portraits (David & Rachel, Jennifer & Tom, Kevin & Amy)

### Step 2: Update Imports
Replace the generic avatar imports with named ones:
```tsx
import avatarMichael from "@/assets/avatar-michael.jpg";
import avatarSarah from "@/assets/avatar-sarah.jpg";
// ... etc for all 12
```

### Step 3: Update Reviews Array
Assign each review its matching avatar:
```tsx
{ name: "Michael R.", avatar: avatarMichael, ... }
{ name: "Sarah M.", avatar: avatarSarah, ... }
// ... etc
```

### Step 4: Apply Mobile Optimizations
Apply all the responsive class changes listed in Part 1.

---

## Result

- Full review text visible on all devices (no truncation)
- Compact, readable layout on mobile with smaller text and tighter spacing
- Each reviewer has a unique avatar matching their gender
- No recycled/duplicate avatars
- Professional, authentic-looking headshots

