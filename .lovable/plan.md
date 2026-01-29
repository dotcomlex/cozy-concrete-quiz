

# Update ReviewsSection with Enhanced Content

## Summary

Update the ReviewsSection with a more impactful headline, emotional subheadline, and 12 detailed customer reviews. Since only 9 avatars exist (avatar-1 through avatar-9), reviews 10-12 will reuse avatars 1-3 respectively.

---

## Changes Overview

| File | What Changes |
|------|--------------|
| `src/components/ReviewsSection.tsx` | Update headlines, replace all 12 reviews with detailed versions |

---

## Missing Assets Notice

The assets folder only has `avatar-1.jpg` through `avatar-9.jpg`. The user requested `avatar-10.jpg`, `avatar-11.jpg`, and `avatar-12.jpg`, but these don't exist. I'll use existing avatars for reviews 10-12 to avoid broken images.

---

## Technical Changes

### 1. Update Headline (lines 139-144)

**Current:**
```tsx
Why 100+ Homeowners Choose 14er
Hear from families who transformed their homes with 14er
```

**New:**
```tsx
This Is Why Colorado Homeowners Trust Us With Their Most Important Investment
Real stories from real families who transformed their homes—and their lives.
```

### 2. Replace Reviews Array (lines 19-104)

Replace all 12 reviews with much more detailed versions:
- Each review now has 4-6 sentences with specific details
- Mentions materials, timelines, square footage, specific features
- Covers variety: kitchens, bathrooms, basements, garage conversion
- Problem-to-solution storytelling format
- Unique avatars for reviews 1-9, reused avatars for 10-12

### 3. Update Review Card Text Display (line 155)

Since reviews are now much longer, consider adjusting the `line-clamp-6` to show more text or keeping it for consistency.

---

## Review Summary

| # | Name | Project Type | Avatar |
|---|------|--------------|--------|
| 1 | Michael R. | Kitchen renovation | avatar1 |
| 2 | Sarah M. | Bathroom remodel | avatar2 |
| 3 | James T. | Basement finish | avatar3 |
| 4 | Linda K. | Kitchen + bath combo | avatar4 |
| 5 | David & Rachel P. | Garage conversion | avatar5 |
| 6 | Carlos G. | Master bathroom | avatar6 |
| 7 | Jennifer & Tom H. | Basement remodel | avatar7 |
| 8 | Robert S. | Repeat customer (3 projects) | avatar8 |
| 9 | Lisa W. | Kitchen renovation | avatar9 |
| 10 | Kevin & Amy D. | Two bathroom remodel | avatar1 (reused) |
| 11 | Patricia N. | Basement guest suite | avatar2 (reused) |
| 12 | Marcus B. | Kitchen remodel | avatar3 (reused) |

---

## What Changes

- Headline: More emotional, emphasizes trust and investment
- Subheadline: Personal, focuses on transformation
- Reviews: 4-6x longer with specific project details
- Avatar assignments: Fixed so Carlos G., Lisa W., etc. have unique avatars (no duplicates in first 9)

---

## What Stays the Same

- Overall component structure
- Carousel functionality
- Card styling and layout
- Google verified badge
- Star ratings
- Navigation buttons

