

# Revert Main Headline to Original

## The Issue
The main headline (h1) was accidentally changed to the same text as the subheadline. Now both say "Transform your kitchen..." which is duplicated and incorrect.

## The Fix
Revert the h1 headline back to the original "New Winter Program..." text while keeping the subheadline as you wanted it.

---

## File to Modify

| File | Change |
|------|--------|
| `src/components/HeroSection.tsx` | Revert h1 to original headline |

---

## Code Change

### Main Headline (lines 49-53)

**Before (current - wrong):**
```tsx
<h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-white leading-tight hero-text-shadow">
  Transform your kitchen, bathroom, or any space into something you'll love. Fill out the form below to claim your{" "}
  <span className="text-highlight">$2,000 discount</span>{" "}
  and schedule your free consultation.
</h1>
```

**After (reverted to original):**
```tsx
<h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-white leading-tight hero-text-shadow">
  New Winter Program Gives Colorado Homeowners{" "}
  <span className="text-highlight">$2,000 OFF</span>{" "}
  Any Remodeling Project—Only 7 Spots Left
</h1>
```

---

## Result

| Element | Text |
|---------|------|
| Main headline (h1) | "New Winter Program Gives Colorado Homeowners $2,000 OFF Any Remodeling Project—Only 7 Spots Left" |
| Subheadline (p) | "Transform your kitchen, bathroom, or any space into something you'll love..." (stays as you wanted) |

