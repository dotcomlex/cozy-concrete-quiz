

# Hero Section Visual Improvements

## Summary

This update focuses on visual polish for the hero section, cleaning up the CTA card and improving the overall hierarchy.

---

## Changes Overview

| Element | Current | New |
|---------|---------|-----|
| Headline | "...Helps Colorado Homeowners Save $2,000 on their remodel" | "This New Winter Upgrade Program Is Helping Colorado Homeowners Save $2,000 On Their Remodeling Project!" |
| Logo size | `h-20 sm:h-28 lg:h-40` | `h-24 sm:h-32 lg:h-48` |
| CTA Card bottom section | "30 seconds" + "100+ qualified" | "Licensed & Insured" + "1-Year Warranty" |
| Trust Strip (outside card) | "Licensed & Insured" + "1-Year Warranty" | **Removed entirely** |

---

## File to Modify

`src/components/HeroSection.tsx`

---

## Detailed Changes

### 1. Increase Logo Size (Line 33)

**Current:**
```tsx
className="h-20 sm:h-28 lg:h-40 w-auto object-contain"
```

**New:**
```tsx
className="h-24 sm:h-32 lg:h-48 w-auto object-contain"
```

### 2. Update Headline with Proper Capitalization (Lines 46-49)

**Current:**
```text
This New Winter Upgrade Program Helps Colorado Homeowners Save $2,000 on their remodel
```

**New (Headline Case):**
```text
This New Winter Upgrade Program Is Helping Colorado Homeowners Save $2,000 On Their Remodeling Project!
```

### 3. Replace CTA Card Bottom Section (Lines 86-95)

**Remove:**
- Clock icon + "30 seconds"
- Users icon + "100+ qualified"

**Replace With:**
- CheckCircle icon + "Licensed & Insured"
- Shield icon + "1-Year Warranty"

This moves the trust indicators INTO the card where they're more prominent and reduces visual clutter.

### 4. Remove External Trust Strip (Lines 100-115)

Delete the entire trust strip section that was outside the card (now redundant since the trust indicators are inside the card).

---

## Visual Comparison

### Before
```text
┌─────────────────────────────────┐
│        [SMALLER LOGO]           │
│                                 │
│  "...Save $2,000 on their       │
│   remodel"                      │
│                                 │
│  ┌─────────────────────────┐    │
│  │   Check Availability    │    │
│  │   Takes less than 30s   │    │
│  │                         │    │
│  │ [Check Availability Now]│    │
│  │                         │    │
│  │  🕐 30s  |  👥 100+     │    │
│  └─────────────────────────┘    │
│                                 │
│   ✓ Licensed  |  🛡️ Warranty   │
└─────────────────────────────────┘
```

### After
```text
┌─────────────────────────────────┐
│         [LARGER LOGO]           │
│                                 │
│  "...Save $2,000 On Their       │
│   Remodeling Project!"          │
│                                 │
│  ┌─────────────────────────┐    │
│  │   Check Availability    │    │
│  │   Takes less than 30s   │    │
│  │                         │    │
│  │ [Check Availability Now]│    │
│  │                         │    │
│  │ ✓ Licensed | 🛡️ Warranty│    │
│  └─────────────────────────┘    │
│                                 │
└─────────────────────────────────┘
```

---

## Benefits

1. **Larger logo** - More prominent brand presence
2. **Proper headline capitalization** - Professional, polished look
3. **Trust indicators inside card** - More visually contained and impactful
4. **Less visual clutter** - Cleaner layout without redundant elements outside the card
5. **Better hierarchy** - Card is self-contained with all key info

