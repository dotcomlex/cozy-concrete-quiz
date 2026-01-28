

# Fix Subheadline - Correct Location

## Overview
Revert the quiz contact form subheadline back to original, and update the MAIN hero subheadline instead.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/Quiz.tsx` | Revert subheadline back to original |
| `src/components/HeroSection.tsx` | Update the main hero subheadline |

---

## 1. Revert Quiz Subheadline

**File:** `src/components/Quiz.tsx` (lines 504-506)

```tsx
// Revert back to:
<p className="text-sm text-muted-foreground leading-snug max-w-sm mx-auto">
  Complete the form below so we can contact you and schedule your 100% free estimate.
</p>
```

---

## 2. Update Hero Subheadline

**File:** `src/components/HeroSection.tsx` (lines 55-56)

```tsx
// Before:
<p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-lg leading-relaxed hero-text-shadow">Trusted by Colorado homeowners for kitchens, bathrooms, basements, and much more. Book your FREE estimate before spots fill up!<span className="font-semibold text-highlight">$2,000 OFF</span> offer today.
</p>

// After:
<p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-lg leading-relaxed hero-text-shadow">
  Trusted by Colorado homeowners for kitchens, bathrooms, basements, and much more. Answer the questions below to receive your free estimate, free consultation + <span className="font-semibold text-highlight">$2,000 Off!</span>
</p>
```

---

## Summary

| Location | Before | After |
|----------|--------|-------|
| Hero subheadline | "...Book your FREE estimate before spots fill up!$2,000 OFF offer today." | "...Answer the questions below to receive your free estimate, free consultation + $2,000 Off!" |
| Quiz contact form | (incorrectly changed) | Reverted to "Complete the form below so we can contact you and schedule your 100% free estimate." |

