

# Hero Background + Headline Mobile Optimization

## Summary

Two targeted changes to improve mobile readability: darken the hero background overlay and reduce the headline font size on mobile devices.

---

## Change 1: Darken Hero Background Overlay

**File:** `src/components/HeroSection.tsx` (lines 21-24)

**Current:**
```tsx
{/* Main dark gradient - stronger opacity */}
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
{/* Vignette effect - darker edges for focus */}
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
```

**New:**
```tsx
{/* Main dark gradient - much stronger for mobile readability */}
<div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />
{/* Vignette effect - darker edges for focus */}
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
```

**Key changes:**
- Gradient opacity increased: 50/40/60 → 65/55/70
- Vignette edge darkness increased: 0.4 → 0.5

---

## Change 2: Reduce Mobile Headline Font Size

**File:** `src/components/HeroSection.tsx` (line 49)

**Current:**
```tsx
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight hero-text-shadow-strong mb-4">
```

**New:**
```tsx
<h1 className="text-lg sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug hero-text-shadow-strong mb-4">
```

**Key changes:**
- Mobile font size: `text-2xl` → `text-lg` (1.5rem → 1.125rem)
- Line height: `leading-tight` → `leading-snug` (more breathing room)

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/HeroSection.tsx` | Darker overlay + smaller mobile headline |

---

## Testing Checklist

- [ ] Hero background is noticeably darker on mobile
- [ ] White headline text is easy to read against mountain photo
- [ ] Headline text size is smaller on mobile (less overwhelming)
- [ ] Headline has slightly more breathing room between lines
- [ ] Desktop headline unchanged at larger breakpoints (sm: and lg: sizes preserved)

